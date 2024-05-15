"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import type { FormProps } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { createQuestion } from "@/lib/actions/question.action";
const { TextArea } = Input;

const Question = () => {
  type FieldType = {
    title: string;
    explanation: string;
    tags: string[];
  };

  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [form] = Form.useForm();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    await createQuestion({});
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tagValue = (e.target as HTMLInputElement).value.trim();
      if (tagValue !== "" && !tags.includes(tagValue)) {
        setTags([...tags, tagValue]);
        form.setFieldsValue({ tags: [...tags, tagValue] });
        setInputValue("");
      }
    }
  };

  const handleTagRemove = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags); // Update tags array
    form.setFieldsValue({ tags: updatedTags }); // Update form value
  };

  return (
    <div>
      <Form
        form={form}
        initialValues={{ remember: true, tags: [] }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="paragraph-semibold text-dark400_light800">
          Question Title <span className="text-primary-500">*</span>
        </div>
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your Problem Statement!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <div className="body-regular mt-2.5 text-light-500">
          Be specific and imagine you're asking a question to another person.
        </div>

        <div className="paragraph-semibold text-dark400_light800 ">
          Detailed explanation of your query
          <span className="text-primary-500">*</span>
        </div>
        <Form.Item
          name="explanation"
          rules={[
            {
              required: true,
              message: "Please Describe your Problem Statement!",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <div className="paragraph-semibold text-dark400_light800 ">
          Tags
          <span className="text-primary-500">*</span>
        </div>
        <Form.Item
          name="tags"
          rules={[
            {
              required: true,
              message: "Please Enter Tags for your Problem",
            },
          ]}
        >
          <Input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="Add tags..."
          />
        </Form.Item>
        <div className="flex-start mt-2.5 gap-2.5">
          {tags.map((tag, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <div className="subtle-medium background-light800_dark300 text-light400_light500 flex items-center justify-center gap-2 rounded-md border px-4 py-2 capitalize">
                {tag}
                <Button
                  icon={<CloseCircleOutlined className="text-[24px]" />}
                  onClick={() => handleTagRemove(tag)}
                ></Button>
              </div>
            </div>
          ))}
        </div>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <button
            type="submit"
            className="primary-gradient max-h-[56px] w-[173px] !text-light-900 rounded-md px-3 py-3"
          >
            Ask a Question
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Question;
