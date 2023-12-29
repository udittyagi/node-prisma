import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { validate } from './modules/validations';
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from './handlers/products';

const router = Router();

//Products
router.get('/products', getAllProducts)
router.get('/products/:id', getProductById)
router.put('/products/:id',
    body("name").optional().isString(),
    validate,
    updateProduct)
router.post('/products',
    body("name").notEmpty().isString(),
    validate,
    createProduct)
router.delete('/products/:id', deleteProduct)

//Updates
router.get('/updates', () => { })
router.get('/updates/:id', () => { })
router.put('/updates/:id',
    body("title").optional().isString(),
    body("body").optional().isString(),
    body("status").optional().isIn([' IN_PROGRESS', 'LIVE', 'DEPRECATED', 'ARCHIVED']),
    body("version").optional().isString(),
    body("asset").optional().isString(),
    () => { })
router.post('/updates',
    body("title").exists().isString(),
    body("body").exists().isString(),
    body("version").optional().isString(),
    body("asset").exists().isString(),
    body("productId").exists().isString(),
    () => { })
router.delete('/updates/:id', () => { })

//Update Points
router.get('/updatepoints', () => { })
router.get('/updatepoints/:id', () => { })
router.put('/updatepoints/:id',
    body("name").optional().isString(),
    body("description").optional().isString(),
    () => { })
router.post('/updatepoints',
    body("name").exists().isString(),
    body("description").exists().isString(),
    body("updateId").exists().isString(),
    () => { })
router.delete('/updatepoints/:id', () => { })

export default router;
