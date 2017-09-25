var sizes = {
  sizeS: {value: 's', title: 'S'},
  sizeM: {value: 'm', title: 'M'},
  sizeL: {value: 'l', title: 'L'},
  sizeXl: {value: 'xl', title: 'xL'}
}

var colors = {
  green: {
    value: 'green',
    title: 'Green'
  },
  blue: {
    value: 'blue',
    title: 'Blue'
  },
  black: {
    value: 'black',
    title: 'Black'
  },
  red: {
    value: 'red',
    title: 'Red'
  }
}

var categories = {
  tShirt: {
    value: 'tshirt',
    title: 'T-Shirt'
  },
  shirt: {
    value: 'shirt',
    title: 'Shirt'
  },
  cap: {
    value: 'cap',
    title: 'Cap'
  }
}
var data = [
    {id: '1', title: 'rubaha1', price: '140', category: categories.shirt, size: [sizes.sizeS, sizes.sizeM, sizes.sizeL, sizes.sizeXl], color: [colors.green, colors.red, colors.blue], url: ["img/rub_1_1.jpg","img/rub_1_2.jpg","img/rub_1_3.jpg"]},
    {id: '2', title: 'rubaha2', price: '150', category: categories.shirt, size: [sizes.sizeS, sizes.sizeM, sizes.sizeL], color: [colors.green, colors.blue], url: ["img/rub_2_1.jpg","img/rub_2_2.jpg","img/rub_2_3.jpg"]},
    {id: '3', title: 'rubaha3', price: '120', category: categories.shirt, size: [sizes.sizeM, sizes.sizeL, sizes.sizeXl], color: [colors.blue, colors.red], url: ["img/rub_3_1.jpg","img/rub_3_2.jpg","img/rub_3_3.jpg"]},
    {id: '4', title: 'shirt1', price: '110', category: categories.tShirt, size: [sizes.sizeM, sizes.sizeL], color: [colors.blue, colors.red, colors.green, colors.black], url: ["img/shirt_1_1.jpg","img/shirt_1_2.jpg","img/shirt_1_3.jpg"]},
    {id: '5', title: 'shirt2', price: '115', category: categories.tShirt, size: [sizes.sizeS, sizes.sizeM, sizes.sizeL, sizes.sizeXl], color: [colors.blue, colors.red, colors.green, colors.black], url: ["img/shirt_2_1.jpg","img/shirt_2_2.jpg","img/shirt_2_3.jpg"]},
    {id: '6', title: 'shirt3', price: '120', category: categories.tShirt, size: [sizes.sizeS, sizes.sizeM], color: [colors.red, colors.black, colors.red], url: ["img/shirt_3_1.jpg","img/shirt_3_2.jpg","img/shirt_3_3.jpg"]},
    {id: '7', title: 'cap1', price: '80', category: categories.cap, size: [sizes.sizeS, sizes.sizeM], color: [colors.red, colors.black], url: ["img/cap_1_1.jpg","img/cap_1_2.jpg"]},
    {id: '8', title: 'cap2', price: '100', category: categories.cap, size: [sizes.sizeS, sizes.sizeM, sizes.sizeL, sizes.sizeXl], color: [colors.green, colors.blue, colors.black], url: ["img/cap_2_1.jpg","img/cap_2_2.jpg","img/cap_2_3.jpg"]},
    {id: '9', title: 'cap3', price: '100', category: categories.cap, size: [sizes.sizeL, sizes.sizeXl], color: [colors.green, colors.blue, colors.red], url: ["img/cap_3_1.jpg","img/cap_3_2.jpg","img/cap_3_3.jpg"]},
    {id: '10', title: 'cap4', price: '110', category: categories.cap, size: [sizes.sizeS, sizes.sizeL, sizes.sizeXl], color: [colors.blue, colors.red], url: ["img/cap_4_1.jpg","img/cap_4_2.jpg","img/cap_4_3.jpg","img/cap_4_4.jpg"]},
]

export default{
  Products: data
}
