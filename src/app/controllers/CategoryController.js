const CategoryRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoryRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category does not exist' });
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required!' });
    }

    const category = await CategoryRepository.create({ name });

    response.json(category);
  }

  async update(request, response) {
    const { name } = request.body;
    const { id } = request.params;

    const categoryExist = CategoryRepository.findById(id);

    if (!categoryExist) {
      return response.status(404).json({ error: 'Category does not exist' });
    }

    const category = await CategoryRepository.update({ id, name });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    const categories = await CategoryRepository.delete(id);

    response.json(categories);
  }
}
module.exports = new CategoryController();
