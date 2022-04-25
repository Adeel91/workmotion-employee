import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card } from "react-bootstrap";
import { EmployeeList } from "../components/employeeList";
import { getEmployees, postEmployee } from "../store/actions/employees";
import { NewEmployee } from "../components/newEmployee";
import { AppDispatch, RootSelector } from "../store";
import { DashboardEmployeeType } from "./dashboard.types";
import { EmployeeType } from "../components/employeeItem/EmployeeItem.types";

const Dashboard = () => {
  let dispatch = useDispatch<AppDispatch>();
  const employees: EmployeeType[] = useSelector((state: RootSelector) =>
    state.employees.data.reverse()
  );

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const onCreateEmployee = (payload: DashboardEmployeeType) => {
    payload.id = (employees.length + 1) as number;
    dispatch(postEmployee(payload));
  };

  return (
    <Container fluid>
      <NewEmployee createEmployee={onCreateEmployee} />
      <Card.Title>{`Employees (${employees.length})` as string}</Card.Title>
      <EmployeeList employees={employees} />
    </Container>
  );
};

export default Dashboard;
