import { Status } from "../../config/Status";

export type StatusBarElementProps = {
  userStatus: Status;
  targetStatus: Status;
  onChangeStatus: (newStatus: Status) => void;
};
