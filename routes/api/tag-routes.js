const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tags = await Tag.findAll({
    include: [{
      model: Product,
      through: ProductTag,
    }],
  });
  res.json(tags);
});

router.get('/:id', async (req, res) => {
  const tag = await Tag.findByPk(req.params.id, {
    include: [{
      model: Product,
      through: ProductTag,
    }],
  });
  res.json(tag);
});

router.post('/', async (req, res) => {
  const newTag = await Tag.create(req.body);
  res.json(newTag);
});

router.put('/:id', async (req, res) => {
  const updatedTag = await Tag.update(req.body, {
    where: { id: req.params.is },
  });
  res.json(updatedTag);
});

router.delete('/:id', async (req, res) => {
  const deletedTag = await Tag.destroy({
    where: { id: req.params.id },
  });
  res.json(deletedTag);
});

module.exports = router;
