import prisma from '../db';

export const getUpdates = async (req, res) => {
    const users = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: {
                include: {
                    updates: true
                }
            }
        }
    })

    const updates = users.products.reduce((acc, curr) => {
        acc = [...acc, ...curr.updates];
        return acc;
    }, [])

    res.json({ data: updates })
}

export const getUpdateById = async (req, res) => { }

export const updateUpdates = async (req, res) => { }

export const createUpdates = async (req, res) => { }

export const deleteUpdates = async (req, res) => { }
