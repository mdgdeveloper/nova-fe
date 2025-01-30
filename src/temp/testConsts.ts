// testConstants.ts  

import { Category } from "@/types/category";
import { Service } from "@/types/service";




// CATEGORIES_TEST: Array of categories with subcategories and services  
export const CATEGORIES_TEST: Category[] = [
  { category_id: 1, name: 'Corte de cabello', Services: [] },
  { category_id: 2, name: 'Coloración', Services: [] },
  { category_id: 3, name: 'Manicura y pedicura', Services: [] },
  { category_id: 4, name: 'Tratamientos faciales', Services: [] },
  { category_id: 5, name: 'Masajes', Services: [] },
];


// SERVICES_TEST: Array of all services (flattened list)  
export const SERVICES_TEST: Service[] = [
  // Services from 'Corte de cabello' category  
  {
    type: 'service',
    service_id: 1,
    name: 'Corte clásico para hombre',
    description: 'Un corte de cabello tradicional para hombre.',
    image_url: undefined,
    price: "15.50",
    cost: "5.0",
    category_id: 1,
    subcategory_id: 1,
  },
  {
    type: 'service',
    service_id: 2,
    name: 'Corte moderno para hombre',
    description: 'Un corte de cabello a la moda para hombre.',
    image_url: undefined,
    price: "20.0",
    cost: "7.0",
    category_id: 1,
    subcategory_id: 1,
  },
  {
    type: 'service',
    service_id: 3,
    name: 'Corte básico para mujer',
    description: 'Corte de cabello clásico para mujer.',
    image_url: undefined,
    price: "20.0",
    cost: "7.0",
    category_id: 1,
    subcategory_id: 2,
  },
  {
    type: 'service',
    service_id: 4,
    name: 'Corte y peinado para mujer',
    description: 'Corte de cabello con peinado incluido.',
    image_url: undefined,
    price: "30.0",
    cost: "10.0",
    category_id: 1,
    subcategory_id: 2,
  },
  {
    type: 'service',
    service_id: 5,
    name: 'Corte infantil',
    description: 'Un corte de cabello adecuado para niños.',
    image_url: undefined,
    price: "12.0",
    cost: "4.0",
    category_id: 1,
    subcategory_id: 3,
  },
  // Services from 'Coloración' category  
  {
    type: 'service',
    service_id: 6,
    name: 'Tinte completo',
    description: 'Aplicación de tinte en todo el cabello.',
    image_url: undefined,
    price: "50.0",
    cost: "20.0",
    category_id: 2,
    subcategory_id: 4,

  },
  {
    type: 'service',
    service_id: 7,
    name: 'Mechas californianas',
    description: 'Mechas claras en las puntas del cabello.',
    image_url: undefined,
    price: "60.0",
    cost: "25.0",
    category_id: 2,
    subcategory_id: 5,
  },
  {
    type: 'service',
    service_id: 8,
    name: 'Reflejos',
    description: 'Reflejos naturales en el cabello.',
    image_url: undefined,
    price: "55.0",
    cost: "22.0",
    category_id: 2,
    subcategory_id: 5,
  },
  // Services from 'Manicura y pedicura' category  
  {
    type: 'service',
    service_id: 9,
    name: 'Manicura básica',
    description: 'Cuidado y esmaltado de uñas.',
    image_url: undefined,
    price: "25.0",
    cost: "8.0",
    category_id: 3,
    subcategory_id: 6,
  },
  {
    type: 'service',
    service_id: 10,
    name: 'Manicura francesa',
    description: 'Estilo clásico de manicura francesa.',
    image_url: undefined,
    price: "30.0",
    cost: "10.0",
    category_id: 3,
    subcategory_id: 6,
  },
  {
    type: 'service',
    service_id: 11,
    name: 'Pedicura spa',
    description: 'Pedicura con tratamiento spa.',
    image_url: undefined,
    price: "35.0",
    cost: "12.0",
    category_id: 3,
    subcategory_id: 7,
  },
  // Services from 'Tratamientos faciales' category  
  {
    type: 'service',
    service_id: 12,
    name: 'Limpieza facial profunda',
    description: 'Elimina impurezas y toxinas de la piel.',
    image_url: undefined,
    price: "40.0",
    cost: "15.0",
    category_id: 4,
    subcategory_id: 8,
  },
  // Services from 'Masajes' category  
  {
    type: 'service',
    service_id: 13,
    name: 'Masaje de relajación',
    description: 'Alivia el estrés y la tensión muscular.',
    image_url: undefined,
    price: "50.0",
    cost: "18.0",
    category_id: 5,
    subcategory_id: 9,
  },
];