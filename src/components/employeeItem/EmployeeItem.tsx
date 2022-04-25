import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { Card, Col, Row } from "react-bootstrap";
import { StatusBar } from "../../components/statusBar";
import { patchEmployee } from "../../store/actions/employees";
import { Status } from "../../config/Status";
import { EmployeeType, EmployeeItemType } from "./EmployeeItem.types";
import "./EmployeeItem.css";

const EmployeeItem = ({ employee }: EmployeeItemType): JSX.Element => {
  const [employeeData, setEmployeeData] = useState<EmployeeType>(employee);
  let dispatch = useDispatch<AppDispatch>();

  const onChangeStatus = (status: Status) => {
    const data: EmployeeType = { ...employeeData, status };
    dispatch(patchEmployee(data.id, status));
    setEmployeeData(data);
  };

  return (
    <Card as="div" className="posting">
      <Row className="row">
        <Col xs={1} md={1}>
          <Card.Img
            className="image"
            variant="top"
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQFYnXTIKDIAIA/company-logo_200_200/0/1614548287541?e=2147483647&v=beta&t=0pho9zA93LX5UdsEQn27fDrSUK_q-VX0WIDmwkbGt5k"
          />
        </Col>

        <Col xs={7} md={7}>
          <Card.Body>
            <Card.Title data-test="posting-name" className="title">
              {employee.name as string}
            </Card.Title>
            <Card.Text data-test="posting-location" className="location">
              <b>Location:</b> {employee.location as string | null}
            </Card.Text>
            <Card.Text data-test="posting-department" className="department">
              <b>Department:</b> {employee.department as string | null}
            </Card.Text>
          </Card.Body>
        </Col>

        <Col xs={4} md={4} className="info">
          <Col xs md="2" className="label text-center me-2 employment">
            Full-time
          </Col>
          <Col xs md="2" className="label text-center me-2 experience">
            Senior Position
          </Col>
        </Col>
      </Row>

      <Row>
        <Col className="status">
          <StatusBar
            userStatus={employeeData.status as number}
            onChangeStatus={onChangeStatus}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default EmployeeItem;
