import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Select, DatePicker, Button, Form, Steps } from "antd";

const { Step } = Steps;

function LoanApplication() {


  const [step, setStep] = useState(0);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const steps = [
    { title: "Personal Info", content: "Personal Information" },
    { title: "Loan Details", content: "Loan Details" },
    { title: "Employment", content: "Employment Details" },
    { title: "References", content: "References" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-8">
            {/* <Building2 className="h-8 w-8 text-blue-600" /> */}
            <h1 className="text-white py-6  bg-gradient-to-r from-emerald-600 to-blue-600 w-full text-center text-2xl font-bold rounded-xl ml-3">
              Loan Application Form
            </h1>
          </div>

          <Steps current={step} className="mb-8 px-10">
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>

          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            {step === 0 && (
              <div className="grid px-0 sm:px-4 grid-cols-1 md:grid-cols-2 gap-6 py-6">
                <Controller
                  name="fullName"
                  control={control}
                  rules={{ required: "Full name is required" }}
                  render={({ field }) => (
                    <Form.Item
                      label="Full Name"
                      validateStatus={errors.fullName ? "error" : ""}
                      help={errors.fullName?.message}
                    >
                      <Input
                        className="h-10"
                        placeholder="Enter Your Name"
                        {...field}
                      />
                    </Form.Item>
                  )}
                />
                <Controller
                  name="cnic"
                  control={control}
                  rules={{ required: "CNIC is required" }}
                  render={({ field }) => (
                    <Form.Item
                      label="CNIC"
                      validateStatus={errors.cnic ? "error" : ""}
                      help={errors.cnic?.message}
                    >
                      <Input
                        className="h-10 "
                        placeholder="Enter Your CNIC"
                        {...field}
                      />
                    </Form.Item>
                  )}
                />
                <Controller
                  name="dateOfBirth"
                  control={control}
                  rules={{ required: "Date of birth is required" }}
                  render={({ field }) => (
                    <Form.Item
                      label="Date of Birth"
                      validateStatus={errors.dateOfBirth ? "error" : ""}
                      help={errors.dateOfBirth?.message}
                    >
                      <DatePicker className="h-10 w-full" {...field} />
                    </Form.Item>
                  )}
                />
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: "Gender is required" }}
                  render={({ field }) => (
                    <Form.Item
                      label="Gender"
                      validateStatus={errors.gender ? "error" : ""}
                      help={errors.gender?.message}
                    >
                      <Select size="large" {...field}>
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                        <Select.Option value="other">Other</Select.Option>
                      </Select>
                    </Form.Item>
                  )}
                />
              </div>
            )}

            {step === 1 && (
              <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Controller
                  name="loanType"
                  control={control}
                  rules={{ required: "Loan type is required" }}
                  render={({ field }) => (
                    <Form.Item
                      label="Loan Type"
                      validateStatus={errors.loanType ? "error" : ""}
                      help={errors.loanType?.message}
                    >
                      <Select size="large" {...field}>
                        <Select.Option value="business">
                          Business Loan
                        </Select.Option>
                        <Select.Option value="personal">
                          Personal Loan
                        </Select.Option>
                        <Select.Option value="group">Group Loan</Select.Option>
                      </Select>
                    </Form.Item>
                  )}
                />
                <Controller
                  name="loanAmount"
                  control={control}
                  rules={{ required: "Loan amount is required" }}
                  render={({ field }) => (
                    <Form.Item
                      label="Loan Amount"
                      validateStatus={errors.loanAmount ? "error" : ""}
                      help={errors.loanAmount?.message}
                    >
                      <Input className="h-10" {...field} type="number" />
                    </Form.Item>
                  )}
                />
              </div>
            )}

            {step === 2 && (
              <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Controller
                  name="employmentStatus"
                  control={control}
                  rules={{ required: "Employment status is required" }}
                  render={({ field }) => (
                    <Form.Item
                      label="Employment Status"
                      validateStatus={errors.employmentStatus ? "error" : ""}
                      help={errors.employmentStatus?.message}
                    >
                      <Select size="large" {...field}>
                        <Select.Option value="employed">Employed</Select.Option>
                        <Select.Option value="self-employed">
                          Self Employed
                        </Select.Option>
                        <Select.Option value="business-owner">
                          Business Owner
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  )}
                />
                <Controller
                  name="monthlyIncome"
                  control={control}
                  rules={{ required: "Monthly income is required" }}
                  render={({ field }) => (
                    <Form.Item
                      label="Monthly Income"
                      validateStatus={errors.monthlyIncome ? "error" : ""}
                      help={errors.monthlyIncome?.message}
                    >
                      <Input className="h-10" {...field} type="number" />
                    </Form.Item>
                  )}
                />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 py-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Reference 1
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                      name="reference1Name"
                      control={control}
                      rules={{ required: "Reference 1 name is required" }}
                      render={({ field }) => (
                        <Form.Item
                          validateStatus={errors.reference1Name ? "error" : ""}
                          help={errors.reference1Name?.message}
                        >
                          <Input
                            className="h-10"
                            {...field}
                            placeholder="Full Name"
                          />
                        </Form.Item>
                      )}
                    />
                    <Controller
                      name="reference1Phone"
                      control={control}
                      rules={{ required: "Reference 1 phone is required" }}
                      render={({ field }) => (
                        <Form.Item
                          validateStatus={errors.reference1Phone ? "error" : ""}
                          help={errors.reference1Phone?.message}
                        >
                          <Input
                            className="h-10"
                            {...field}
                            placeholder="Phone Number"
                          />
                        </Form.Item>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Reference 2
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                      name="reference2Name"
                      control={control}
                      rules={{ required: "Reference 2 name is required" }}
                      render={({ field }) => (
                        <Form.Item
                          validateStatus={errors.reference2Name ? "error" : ""}
                          help={errors.reference2Name?.message}
                        >
                          <Input
                            className="h-10"
                            {...field}
                            placeholder="Full Name"
                          />
                        </Form.Item>
                      )}
                    />
                    <Controller
                      name="reference2Phone"
                      control={control}
                      rules={{ required: "Reference 2 phone is required" }}
                      render={({ field }) => (
                        <Form.Item
                          validateStatus={errors.reference2Phone ? "error" : ""}
                          help={errors.reference2Phone?.message}
                        >
                          <Input
                            className="h-10"
                            {...field}
                            placeholder="Phone Number"
                          />
                        </Form.Item>
                      )}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 0 && (
                <Button
                  onClick={prevStep}
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button
                  onClick={nextStep}
                  type="primary"
                  className="bg-green-600 text-white hover:bg-green-700 ml-auto"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-green-600 text-white hover:bg-green-700 ml-auto"
                >
                  Submit Application
                </Button>
              )}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoanApplication;
