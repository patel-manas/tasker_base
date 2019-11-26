import React, { Component } from 'react';
import {
  Modal,
  Steps,
  Form,
  Input,
  Button,
  Icon,
  DatePicker,
  Col,
  Row,
  Card,
  Radio,
  AutoComplete,
  Result
} from 'antd';
import moment from 'moment';

class PostTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      locationType: 1,
      taskName: '',
      locationData: '',
      taskLocation: '',
      taskDate: '',
      budgetType: 1,
      taskBudget: 0,
      taskDuration: 1
    };
  }

  handleChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  onLocationSearch = searchText => {
    this.setState({
      locationData: !searchText
        ? []
        : [searchText, searchText.repeat(2), searchText.repeat(3)]
    });
  };

  getBudgetAmount() {
    const { taskBudget, budgetType, taskDuration = 1 } = this.state;
    let budget = 0;
    if (taskBudget) {
      switch (budgetType) {
        case 1:
          budget = taskBudget;
          break;
        case 2:
          budget = taskBudget * taskDuration;
          break;
        default:
          budget = 0;
      }
    }
    return `₹ ${budget}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  getFormItems() {
    const { TextArea } = Input;
    const { getFieldDecorator, getFieldError } = this.props.form;
    const {
      taskName,
      currentStep,
      taskLocation,
      locationData,
      locationType,
      budgetType,
      taskDetails,
      taskDate,
      taskBudget,
      taskDuration
    } = this.state;
    switch (currentStep) {
      case 0:
        return (
          <div>
            <Form.Item
              label="What do you need done?"
              required={false}
              className="task-title"
              help={
                getFieldError('taskName')
                  ? undefined
                  : "This'll be the title of your task - e.g. Help move my sofa"
              }
            >
              {getFieldDecorator(`taskName`, {
                validateTrigger: ['onChange', 'onBlur'],
                initialValue: taskName ? taskName : undefined,
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: 'Please input a task title'
                  }
                ]
              })(
                <Input
                  onChange={event =>
                    this.handleChange('taskName', event.target.value)
                  }
                />
              )}
            </Form.Item>

            <Form.Item
              label="What are the details?"
              required={false}
              className="task-details"
              help={
                getFieldError('taskDetails')
                  ? undefined
                  : 'Be as specific as you can about what needs doing'
              }
            >
              {getFieldDecorator(`taskDetails`, {
                validateTrigger: ['onChange', 'onBlur'],
                initialValue: taskDetails ? taskDetails : undefined,
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: 'Please input a task title'
                  }
                ]
              })(
                <TextArea
                  onChange={event =>
                    this.handleChange('taskDetails', event.target.value)
                  }
                  rows={6}
                />
              )}
            </Form.Item>
          </div>
        );
      case 1:
        return (
          <>
            <Row gutter={16}>
              <Radio.Group value={locationType}>
                <Col span={12}>
                  <Card
                    title={
                      <>
                        <Icon
                          style={{ fontSize: '16px' }}
                          type="environment"
                          theme="twoTone"
                        />
                        &emsp;In Person
                      </>
                    }
                    extra={<Radio value={1} />}
                    bordered={true}
                    onClick={() => this.handleChange('locationType', 1)}
                  >
                    Select this if you need the Tasker physically there.
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    title={
                      <>
                        <Icon type="mobile" theme="twoTone" />
                        &emsp;Online
                      </>
                    }
                    extra={<Radio value={2} />}
                    bordered={true}
                    onClick={() => this.handleChange('locationType', 2)}
                  >
                    Select this if the Tasker can do it from home
                  </Card>
                </Col>
              </Radio.Group>
            </Row>
            {locationType === 1 ? (
              <Form.Item
                label="Your Location"
                required={false}
                className="task-location"
                // help="This'll be the title of your task - e.g. Help move my sofa"
              >
                {getFieldDecorator(`taskLocation`, {
                  validateTrigger: ['onChange'],
                  initialValue: taskLocation ? taskLocation : undefined,
                  rules: [
                    {
                      required: true,
                      whitespace: true,
                      message: 'Please input your location'
                    }
                  ]
                })(
                  <AutoComplete
                    dataSource={locationData}
                    // onSelect={onSelect}
                    onSearch={this.onLocationSearch}
                    // onChange={this.onChange}
                    placeholder="Task Location"
                  />
                )}
              </Form.Item>
            ) : (
              undefined
            )}
            <Form.Item
              label="When do you need it done?"
              required={false}
              className="task-date"
              // help="This'll be the title of your task - e.g. Help move my sofa"
            >
              {getFieldDecorator(`taskDate`, {
                initialValue: taskDate ? taskDate : undefined,
                rules: [
                  {
                    required: true,
                    message: 'Please input a task date'
                  }
                ]
              })(
                <DatePicker
                  format={'DD/MM/YYYY'}
                  onChange={date => this.handleChange('taskDate', date)}
                  disabledDate={current => current < moment().endOf('day')}
                />
              )}
            </Form.Item>
          </>
        );
      case 2:
        return (
          <>
            <Form.Item
              label="What is your budget?"
              required={false}
              className="task-title"
              help={
                "Please enter the price you're comfortable to pay to get your task done. Taskers will use this as a guide for how much to offer."
              }
            >
              <Radio.Group
                value={budgetType}
                onChange={event =>
                  this.handleChange('budgetType', event.target.value)
                }
              >
                <Radio value={1}>Total</Radio>
                <Radio value={2}>Hourly Rate</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              required={false}
              style={{ display: 'inline-block', width: '30%' }}
            >
              {getFieldDecorator(`taskBudget`, {
                validateTrigger: ['onChange'],
                initialValue: taskBudget ? taskBudget : undefined,
                rules: [
                  {
                    required: true,
                    message: 'Please input your budget'
                  }
                ]
              })(
                <Input
                  prefix="₹"
                  suffix={budgetType === 2 ? '/hr' : undefined}
                  type="number"
                  size="large"
                  maxLength="8"
                  onChange={event =>
                    this.handleChange('taskBudget', event.target.value)
                  }
                />
              )}
            </Form.Item>

            {budgetType === 2 ? (
              <>
                <span className="budget-multiplyer"> X </span>
                <Form.Item
                  required={false}
                  style={{ display: 'inline-block', width: '30%' }}
                >
                  {getFieldDecorator(`taskDuration`, {
                    validateTrigger: ['onChange'],
                    initialValue: taskDuration ? taskDuration : undefined,
                    rules: [
                      {
                        required: true,
                        message: 'Please input duration in hrs'
                      }
                    ]
                  })(
                    <Input
                      suffix="hrs"
                      type="number"
                      size="large"
                      maxLength="8"
                      onChange={event =>
                        this.handleChange('taskDuration', event.target.value)
                      }
                    />
                  )}
                </Form.Item>
              </>
            ) : (
              undefined
            )}
            <div className="estimated-budget">
              <div>
                <span className="budget-label">Estimated Budget</span>
                <span className="budget-amount">{this.getBudgetAmount()}</span>
              </div>
              <span className="budget-helper-text">
                Final payment will be agreed later
              </span>
            </div>
          </>
        );
      case 3:
        return (
          <Result
            status="success"
            title="Successfully Posted A Task"
            subTitle="Order number: 2017182818828182881 Task approval takes 10-15 minutes, please wait."
            extra={[
              <Button type="primary" key="console">
                Check Status
              </Button>,
              <Button
                key="close"
                onClick={() => this.props.actions.hideModal()}
              >
                Close
              </Button>
            ]}
          />
        );
    }
  }

  handleClickNext() {
    const { currentStep } = this.state;
    this.props.form.validateFields(error => {
      if (!error) {
        currentStep < 3
          ? this.setState({ currentStep: currentStep + 1 })
          : undefined;
      }
    });
  }

  getContent() {
    const { Step } = Steps;
    const { currentStep } = this.state;
    return (
      <>
        <Steps size="small" current={currentStep}>
          <Step />
          <Step />
          <Step />
          <Step />
        </Steps>
        <Form className="post-task-form">
          <div className="post-task-fields">{this.getFormItems()}</div>
          <div className="task-btn-grp">
            {currentStep > 0 && currentStep < 3 ? (
              <Button
                className="task-previous-btn"
                type="primary"
                onClick={() => this.setState({ currentStep: currentStep - 1 })}
              >
                <Icon type="left" />
                Previous
              </Button>
            ) : (
              undefined
            )}
            {currentStep >= 0 && currentStep < 3 ? (
              <Button
                className="task-next-btn"
                type="primary"
                onClick={() => this.handleClickNext()}
              >
                {currentStep === 2 ? 'Get quotes' : 'Next'}
                <Icon type="right" />
              </Button>
            ) : (
              undefined
            )}
          </div>
        </Form>
      </>
    );
  }
  getModalTitle = () => {
    switch (this.state.currentStep) {
      case 0:
        return 'Tell us what you need done?';
      case 1:
        return 'Say where & when';
      case 2:
        return 'Suggest how much';
      case 3:
        return 'Success';
    }
  };
  render() {
    return (
      <Modal
        className="post-task"
        title={this.getModalTitle()}
        visible={this.props.modal.show}
        footer={null}
        onCancel={() => this.props.actions.hideModal()}
      >
        {this.getContent()}
      </Modal>
    );
  }
}

const PostTaskWrapper = Form.create({ name: 'horizontal_login' })(PostTask);
export default PostTaskWrapper;
