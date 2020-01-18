import React, { Component } from 'react';
import {
  Modal,
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
  // Result,
  InputNumber
} from 'antd';
import moment from 'moment';
import QueueAnim from 'rc-queue-anim';
import postTaks from '../../assets/images/taskPosted.svg';
// import { isNumeric } from '../../utils';

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

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  // handleNumericChange = (name, value) => {
  //   debugger;
  //   console.log(value);
  //   const previousValue = this.state[name];
  //   this.props.form.setFieldsValue({ [name]: previousValue });
  //   // if (isNaN(value)) {

  //   // } else this.handleChange(name, value);
  // };

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
          <div key={1} className="get-started">
            <img src="https://www.airtasker.com/images/taylor/on-boarding.png" />
            <h2>Start getting offers in no time</h2>
            <div>
              We&apos;re just going to ask a few questions to help you find the
              right Tasker - it&apos;ll only take a few minutes!
            </div>
          </div>
        );
      case 1:
        return (
          <div key={2}>
            <QueueAnim
              type={['right', 'left']}
              ease={['easeOutQuart', 'easeInOutQuart']}
            >
              <Form.Item
                key={1}
                label="What do you need done?"
                required={false}
                className="task-title"
                help={
                  getFieldError('taskName')
                  // ? undefined
                  // : "This'll be the title of your task - e.g. Help move my sofa"
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
                    placeholder="eg: I want to move my household stuff"
                    onChange={event =>
                      this.handleChange('taskName', event.target.value)
                    }
                  />
                )}
              </Form.Item>

              <Form.Item
                key={2}
                label="Tell more about your task"
                required={false}
                className="task-details"
                help={
                  getFieldError('taskDetails')
                  // ? undefined
                  // : 'Be as specific as you can about what needs doing'
                }
              >
                {getFieldDecorator(`taskDetails`, {
                  validateTrigger: ['onChange', 'onBlur'],
                  initialValue: taskDetails ? taskDetails : undefined,
                  rules: [
                    {
                      required: true,
                      whitespace: true,
                      message: 'Please input task details'
                    }
                  ]
                })(
                  <TextArea
                    placeholder="eg: I want to move my household stuff from Marathahalli to MG"
                    onChange={event =>
                      this.handleChange('taskDetails', event.target.value)
                    }
                    rows={6}
                  />
                )}
              </Form.Item>
            </QueueAnim>
          </div>
        );
      case 2:
        return (
          <div key={3}>
            <QueueAnim
              type={['right', 'left']}
              ease={['easeOutQuart', 'easeInOutQuart']}
            >
              <Row key={1} gutter={16}>
                <Radio.Group value={locationType}>
                  <Col span={12}>
                    <Card
                      title={
                        <>
                          <Icon
                            style={{ fontSize: '16px' }}
                            type="environment"
                            theme="twoTone"
                            twoToneColor="#4C45B2"
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
                          <Icon
                            type="mobile"
                            theme="twoTone"
                            twoToneColor="#4C45B2"
                          />
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
                  key={2}
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
                key={3}
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
                    format={'DD/MM/YYYY HH:mm'}
                    showTime={{ format: 'HH:mm' }}
                    onChange={date => this.handleChange('taskDate', date)}
                    disabledDate={current => current < moment().endOf('day')}
                  />
                )}
              </Form.Item>
            </QueueAnim>
          </div>
        );
      case 3:
        return (
          <QueueAnim
            type={['right', 'left']}
            ease={['easeOutQuart', 'easeInOutQuart']}
          >
            <Form.Item
              key={1}
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
            {/* <Button>$</Button> */}
            <Form.Item
              key={2}
              required={false}
              style={{ display: 'inline-block' }}
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
                <InputNumber
                  formatter={value => '₹' + value}
                  onChange={value => this.handleChange('taskBudget', value)}
                />
              )}
            </Form.Item>

            {budgetType === 2 ? (
              <>
                <span className="budget-multiplyer"> X </span>
                <Form.Item
                  key={3}
                  required={false}
                  style={{ display: 'inline-block' }}
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
                    <InputNumber
                      suffix="hrs"
                      max={24}
                      min={1}
                      onChange={value =>
                        this.handleChange('taskDuration', value)
                      }
                    />
                  )}
                </Form.Item>
              </>
            ) : (
              undefined
            )}
            <div key={4} className="estimated-budget">
              <div>
                <span className="budget-label">Estimated Budget</span>
                <span className="budget-amount">{this.getBudgetAmount()}</span>
              </div>
              <span className="budget-helper-text">
                Final payment will be agreed later
              </span>
            </div>
          </QueueAnim>
        );
      case 4:
        return (
          <div key={1} className="get-started">
            <img src={postTaks} />
            <h2>Hurray !!!</h2>
            <div>Your task has been posted and will be live in few minutes</div>
            <div className="task-btn-grp">
              <Button type="primary" key="console" size="large">
                Check Status
              </Button>
              ,
              <Button
                size="large"
                key="close"
                onClick={() => this.props.actions.hideModal()}
              >
                Close
              </Button>
            </div>
          </div>
          // <Result
          //   key={1}
          //   status="success"
          //   title="Successfully Posted A Task"
          //   subTitle="Order number: 2017182818828182881 Task approval takes 10-15 minutes, please wait."
          //   extra={[
          //     <Button type="primary" key="console" size="large">
          //       Check Status
          //     </Button>,
          //     <Button
          //       size="large"
          //       key="close"
          //       onClick={() => this.props.actions.hideModal()}
          //     >
          //       Close
          //     </Button>
          //   ]}
          // />
        );
    }
  }

  handleClickNext() {
    const { currentStep } = this.state;
    this.props.form.validateFields(error => {
      if (!error) {
        currentStep < 4
          ? this.setState({ currentStep: currentStep + 1 })
          : undefined;
      }
    });
  }

  getContent() {
    // const { Step } = Steps;
    const { currentStep } = this.state;
    return (
      <>
        <div className={`progress-bar progress-bar-${currentStep}`} />
        {/* <Progress className="progress-bar" percent={30} /> */}
        <Form className="post-task-form">
          <div key="task-post" className="post-task-fields">
            {this.getFormItems()}
          </div>

          <div className="task-btn-grp">
            {currentStep > 1 && currentStep < 4 ? (
              <Button
                className="task-previous-btn"
                size="large"
                onClick={() => this.setState({ currentStep: currentStep - 1 })}
              >
                <Icon type="left" />
                Previous
              </Button>
            ) : (
              undefined
            )}
            {currentStep >= 0 && currentStep < 4 ? (
              <Button
                size="large"
                className="task-next-btn"
                type="primary"
                onClick={() => {
                  setTimeout(this.handleClickNext(), 500);
                }}
              >
                {currentStep === 3 ? 'Get quotes' : 'Next'}
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
      case 1:
        return 'Tell us what you need done?';
      case 2:
        return 'Say where & when';
      case 3:
        return 'Suggest how much';
      case 4:
        return 'Success';
      default:
        return 'Get Started';
    }
  };

  handleCancel = () => {
    const { confirm } = Modal;
    const { hideModal } = this.props.actions;
    this.state.currentStep <= 3
      ? confirm({
          title: 'Sorry to see you go...',
          content:
            "Are you sure? You're almost done and it's free to post a task...",
          okText: 'Exit',
          okType: 'danger',
          cancelText: 'Continue',
          onOk() {
            hideModal();
          }
        })
      : hideModal();
  };
  render() {
    return (
      <Modal
        className="post-task"
        title={this.getModalTitle()}
        visible={this.props.modal.show}
        footer={null}
        onCancel={() => this.handleCancel()}
      >
        {this.getContent()}
      </Modal>
    );
  }
}

const PostTaskWrapper = Form.create({ name: 'horizontal_login' })(PostTask);
export default PostTaskWrapper;
