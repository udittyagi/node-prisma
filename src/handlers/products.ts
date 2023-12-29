import prisma from "../db";

export const getAllProducts = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    })
    res.json({ data: user.products });
}

export const getProductById = async (req, res) => {
    const product = await prisma.product.findUnique({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        }
    })

    res.json({ data: product });
}

export const createProduct = async (req, res) => {
    const { name } = req.body;
    const { id } = req.user;

    const product = await prisma.product.create({
        data: {
            name,
            belongsToId: id
        }
    });

    res.json({ data: product })
}

export const updateProduct = async (req, res) => {
    const { name } = req.body;
    const { id } = req.user;

    const product = await prisma.product.update({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: id
            }
        },
        data: {
            name
        }
    });

    res.json({ data: product })
}

export const deleteProduct = async (req, res) => {
    const { id } = req.user;

    const product = await prisma.product.delete({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: id
            }
        }
    });

    res.json({ data: product })
}

