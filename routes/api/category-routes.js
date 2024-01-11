const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categories = await Category.findAll({
    include: [Product],
  });
  res.json(categories);
});

router.get('/:id', async (req, res) => {
  const category = await Category.findByPk(req.params.id, {
    include: [Product],
  });
  res.json(category);
});

router.post('/', async (req, res) => {
  const newCategory = await Category.create(req.body);
  res.json(newCategory);
});

router.put('/:id', async (req, res) => {
  const updatedCategory = await Category.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(updatedCategory);
});

router.delete('/:id', async (req, res) => {
  const deletedCategory = await Category.destroy({
    where: { id: req.params.id },
  });
  res.json(deletedCategory);
});

module.exports = router;
