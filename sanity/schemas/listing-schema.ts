const listing = {
  name: 'listing',
  title: 'Casas',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'string'
    },
    {
      name: 'direction',
      title: 'Dirección',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }
      ]
    }
  ]
}

export default listing