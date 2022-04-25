import {
  SweetAlertHideClass,
  SweetAlertOptions,
  SweetAlertShowClass,
} from "sweetalert2";

export const CreateEmployeeSwal: SweetAlertOptions = {
  title: "Add new Employee!",
  icon: "info",
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  } as SweetAlertShowClass,
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  } as SweetAlertHideClass,
  reverseButtons: true,
  focusConfirm: false,
  html: `
    You can create a new <b>employee</b> here that will be listed automatically in the employee listing.<br />
    
    <input class="swal2-input" name="name" id="name" type="text" placeholder="Enter name..." /><br />
    <input class="swal2-input" name="location" id="location" type="text" placeholder="Enter location..." /><br />
    <input class="swal2-input" name="department" id="department" type="text" placeholder="Enter department..." />
  `,
  showCancelButton: true,
  cancelButtonColor: "grey",
  cancelButtonText: '<i class="fa fa-thumbs-down"></i> Not now!',
  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Create!',
  allowOutsideClick: false,
  preConfirm: () => ({
    name: (document.getElementById("name") as HTMLInputElement).value,
    location: (document.getElementById("location") as HTMLInputElement).value,
    department: (document.getElementById("department") as HTMLInputElement)
      .value,
  }),
};
