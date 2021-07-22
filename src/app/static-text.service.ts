import { ApirestService } from './apirest.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StaticTextService {
  constructor(private _apirest: ApirestService) {}

  getTextComponent(componente) {
    let resultado: any = {};
    this._apirest.get('static-texts/').subscribe((r) => {
      for (const i of r) {
        resultado[i.nombre] = i.texto;
      }
    });
    return resultado;
  }
}
