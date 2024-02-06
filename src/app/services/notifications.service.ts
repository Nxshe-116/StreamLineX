import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  showNotification(message: string, icon: string, color: string) {

    $.notify({
      icon: icon,
      message: message
    }, {
      type: `${color}`,
      timer: 950,
      placement: {
        from: 'top',
        align: 'center'
      }
    });
  }

  toastNotification(message: any, icon: any) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: icon,
      title: message
    })
  }



}
