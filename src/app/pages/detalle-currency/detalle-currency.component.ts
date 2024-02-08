import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { currencyData } from 'src/app/core/interfaces/currency';
import { CurrencyService } from 'src/app/services/currency.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-currency',
  templateUrl: './detalle-currency.component.html',
  styleUrls: ['./detalle-currency.component.scss']
})
export class DetalleCurrencyComponent implements OnInit {
  currencyservice = inject(CurrencyService);
  activatedroute = inject(ActivatedRoute);
  router = inject(Router);
  @ViewChild('modalEditar') modalEditar!: ElementRef;

  currency: currencyData={
    id: 0,
    leyend: "",
    symbol: "",
    ic: 0
  }

  currencyToEdit: currencyData = {
    id: 0,
    leyend: "",
    symbol: "",
    ic: 0
  }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params) => {
      this.currencyservice.getById(params['id']).then((res) => {
        if (res) {
          this.currency = res;
          this.currencyToEdit = {
            id: this.currency.id,
            symbol: this.currency.symbol,
            leyend: this.currency.leyend,
            ic: this.currency.ic
          };
        } 
      });
    });
  }

  closeModal() {
    this.modalEditar.nativeElement.close();
    this.currencyToEdit = {
      id: this.currency.id,
      symbol: this.currency.symbol,
      leyend: this.currency.leyend,
      ic: this.currency.ic
    };
  }
  
  borrarCurrency(){
    Swal.fire({
      title:
        '¿Querés eliminar la currency ' +
        this.currency.leyend +
        '?',
      icon: 'warning',
      customClass: {
        popup: 'swal2-popup'
      },
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.currencyservice.delete(this.currency.id).then((res) => {
          if (res) {
            //Contacto borrado
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            this.router.navigate(['currency']);
          } else {
            //Error borrando contacto
            Swal.fire(
              'Error borrando currency',
              'Intenta nuevamente.',
              'error'
            );
          }
        });
      }
    });
  }
}
