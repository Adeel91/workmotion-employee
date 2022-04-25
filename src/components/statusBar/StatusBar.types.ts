import { Status } from "../../config/Status";

export type StatusBarTypes = {
  userStatus: Status;
  onChangeStatus: (newStatus: Status) => void;
};
