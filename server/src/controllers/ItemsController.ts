import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {

    async index(request: Request, response: Response) {
        
        // const baseUrl = 'http://localhost:3333';
        const baseUrl = 'http://192.168.100.100:3333';
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `${baseUrl}/uploads/${item.image}`
            }
        });
    
        return response.json(serializedItems);
    }

}

export default ItemsController;