export function getCover(coverId) {
  let matchingCover;
  covers.forEach((cover) => {
    if (cover.id === coverId) {
      matchingCover = cover;
    }
  });

  return matchingProduct;
}

export const covers = [
  {
    id: "9a7dd59f-446d-4549-a6cf-e245e3204cd9",
    image: "Image/Covers/cover-pic-1.jpg",
    name: "Farigliano Villa",
    pics: [
      "Image/Projects/pictures-of-pic-1/pic-2.jpg",
      "Image/Projects/pictures-of-pic-1/pic-3.jpg",
      "Image/Projects/pictures-of-pic-1/pic-4.jpg",
      "Image/Projects/pictures-of-pic-1/pic-5.jpg",
      "Image/Projects/pictures-of-pic-1/pic-6.jpg",
      "Image/Projects/pictures-of-pic-1/pic-12.jpg",
      "Image/Projects/pictures-of-pic-1/pic-13.jpg",
      "Image/Projects/pictures-of-pic-1/pic-14.jpg",
      "Image/Projects/pictures-of-pic-1/pic-20.jpg",
    ],
  },
  {
    id: "1e4e7f90-ad6f-4f50-b71e-20dcae6d82f9",
    image: "Image/Covers/cover-pic-2.jpg",
    name: "Infinity Pool",
    pics: [
      "Image/Projects/pictures-of-pic-2/pic-8.jpg",
      "Image/Projects/pictures-of-pic-2/pic-10.jpg",
      "Image/Projects/pictures-of-pic-2/pic-16.jpg",
      "Image/Projects/pictures-of-pic-2/pic-17.jpg",
    ],
  },
  {
    id: "ec53161d-4e81-4dff-8eaa-7c650f012dcf",
    image: "Image/Covers/cover-pic-3.jpg",
    name: "Concrete Pool",
    pics: [
      "Image/Projects/pictures-of-pic-3/pic-7.jpg",
      "Image/Projects/pictures-of-pic-3/pic-9.jpg",
      "Image/Projects/pictures-of-pic-3/pic-11.jpg",
      "Image/Projects/pictures-of-pic-3/pic-15.jpg",
      "Image/Projects/pictures-of-pic-3/pic-18.jpg",
    ],
  },
  {
    id: "88ae39bc-f1ee-4c44-a4d2-b819973710c0",
    image: "Image/Covers/cover-pic-4.jpg",
    name: "Farigliano Villa",
    pics: [
      "Image/Projects/pictures-of-pic-4/pic-1.jpg",
      "Image/Projects/pictures-of-pic-4/pic-21.jpg",
      "Image/Projects/pictures-of-pic-4/pic-22.jpg",
      "Image/Projects/pictures-of-pic-4/pic-25.jpg",
      "Image/Projects/pictures-of-pic-4/pic-26.jpg",
    ],
  },
];
