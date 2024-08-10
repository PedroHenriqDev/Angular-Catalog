import { Expose, Type } from 'class-transformer';

export class Category {
    @Expose({name: 'categoriaId'})
    categoryId: string = '';
    
    @Expose({name: 'nome'})
    name: string = '';

    @Expose({name: 'imagemUrl'})
    imageUrl:string = '';
}