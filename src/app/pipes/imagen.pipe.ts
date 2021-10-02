import { Pipe, PipeTransform } from '@angular/core';

const URL = 'https://image.tmdb.org/t/p';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): String {
    
     if( !img ){
       return './assets/noimage-banner.jpg';
     }

     const imgUrl = `${ URL }/${ size }/${ img }`;
     return imgUrl;

  }

}
