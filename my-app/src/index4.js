import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import * as bootstrap from 'react-bootstrap';

const FormGroup=bootstrap.FormGroup;
const FormControl=bootstrap.FormControl;
const ControlLabel=bootstrap.ControlLabel;
const HelpBlock=bootstrap.HelpBlock;
const Glyphicon=bootstrap.Glyphicon;
const InputGroup=bootstrap.InputGroup;
const Col=bootstrap.Col;
const Form=bootstrap.Form;
const Checkbox=bootstrap.Checkbox;
const Radio=bootstrap.Radio;
const formInstance = (
    <form>
            <FormGroup controlId="formValidationSuccess1" validationState="success">
                    <ControlLabel>输入正确</ControlLabel>
                    <FormControl type="text" />
                    <HelpBlock>校验结果文字说明。</HelpBlock>
            </FormGroup>

            <FormGroup controlId="formValidationWarning1" validationState="warning">
                    <ControlLabel>有警告的输入</ControlLabel>
                    <FormControl type="text" />
            </FormGroup>

            <FormGroup controlId="formValidationError1" validationState="error">
                    <ControlLabel>有错误的输入</ControlLabel>
                    <FormControl type="text" />
            </FormGroup>

            <FormGroup controlId="formValidationNull" validationState={null}>
                    <ControlLabel>没有校验状态的输入</ControlLabel>
                    <FormControl type="text" />
            </FormGroup>

            <FormGroup controlId="formValidationSuccess2" validationState="success">
                    <ControlLabel>带正确反馈图标的输入</ControlLabel>
                    <FormControl type="text" />
                    <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="formValidationWarning2" validationState="warning">
                    <ControlLabel>带警告反馈图标的输入</ControlLabel>
                    <FormControl type="text" />
                    <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="formValidationError2" validationState="error">
                    <ControlLabel>带错误反馈图标的输入</ControlLabel>
                    <FormControl type="text" />
                    <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="formValidationSuccess3" validationState="success">
                    <ControlLabel>带定制化反馈图标的正确输入</ControlLabel>
                    <FormControl type="text" />
                    <FormControl.Feedback>
                            <Glyphicon glyph="music" />
                    </FormControl.Feedback>
            </FormGroup>

            <FormGroup controlId="formValidationWarning3" validationState="warning">
                    <ControlLabel>带警告的提示的输入组。</ControlLabel>
                    <InputGroup>
                            <InputGroup.Addon>@</InputGroup.Addon>
                            <FormControl type="text" />
                    </InputGroup>
                    <FormControl.Feedback />
            </FormGroup>

            <Form componentClass="fieldset" horizontal>
                    <FormGroup controlId="formValidationError3" validationState="error">
                            <Col componentClass={ControlLabel} xs={3}>
                                    有错误的输入组
                            </Col>
                            <Col xs={9}>
                                    <FormControl type="text" />
                                    <FormControl.Feedback />
                            </Col>
                    </FormGroup>

                    <FormGroup controlId="formValidationSuccess4" validationState="success">
                            <Col componentClass={ControlLabel} xs={3}>
                                    正确的输入组
                            </Col>
                            <Col xs={9}>
                                    <InputGroup>
                                            <InputGroup.Addon>@</InputGroup.Addon>
                                            <FormControl type="text" />
                                    </InputGroup>
                                    <FormControl.Feedback />
                            </Col>
                    </FormGroup>
            </Form>

            <Form componentClass="fieldset" inline>
                    <FormGroup controlId="formValidationWarning4" validationState="warning">
                            <ControlLabel>有警告的输入</ControlLabel>
                        {' '}
                            <FormControl type="text" />
                            <FormControl.Feedback />
                    </FormGroup>
                {' '}
                    <FormGroup controlId="formValidationError4" validationState="error">
                            <ControlLabel>有错误的输入组</ControlLabel>
                        {' '}
                            <InputGroup>
                                    <InputGroup.Addon>@</InputGroup.Addon>
                                    <FormControl type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                    </FormGroup>
            </Form>

            <Checkbox validationState="success">
                    成功的 Checkbox 控件
            </Checkbox>
            <Radio validationState="warning">
                    带警告的 Radio 控件
            </Radio>
            <Checkbox validationState="error">
                    带错误的 Checkbox 控件
            </Checkbox>

        {/* This requires React 15's <span>-less spaces to be exactly correct. */}
            <FormGroup validationState="success">
                    <Checkbox inline>
                            Checkbox
                    </Checkbox>
                {' '}
                    <Checkbox inline>
                            with
                    </Checkbox>
                {' '}
                    <Checkbox inline>
                            success
                    </Checkbox>
            </FormGroup>
    </form>
);

ReactDOM.render(formInstance, document.getElementById('root'));