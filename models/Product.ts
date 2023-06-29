import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '@/interfaces';

const productSchema = new Schema({
    description: { type: String, required: true },
    images: [{ type: String }],        
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [{
        type: String,
        enum:{                              
            values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            message: '{VALUE} no es un tamaño válido'     
        }
    }],
    slug: { type: String, required: true, unique: true },   
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
        type: String,
        enum: {
            values: ['shirts', 'pants', 'hoodies', 'hats'],
            message: '{VALUE} No es un tipo de ropa válido'
        }
    },

    gender:{
        type: String,
        enum: {
            values: ['men', 'woman', 'kid', 'unisex'],  
            message: '{VALUE} no es un genero válido'
        }
    }
    // para manejar la fecha de creacion y la fecha de actualizacion
}, {
    timestamps: true      // lo crea automatico 
})

const Product: Model<IProduct> = mongoose.models.Product  || model('Product', productSchema) 

export default Product;


