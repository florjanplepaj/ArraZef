export function getCover(coverId) {
  let matchingCover;

  covers.forEach((cover) => {
    if (cover.id === coverId) {
      matchingCover = cover;
    }
  });
  return matchingCover;
}

export const covers = [
  {
    id: "9a7dd59f-446d-4549-a6cf-e245e3204cd9",
    name: "Farigliano Villa",
    location: "Turin, Italy",
    pics: [
      "Image/Covers/cover-pic-1.jpg",
      "Image/Projects/pictures-of-pic-1/pic-2.jpg",
      "Image/Projects/pictures-of-pic-1/pic-3.jpg",
      "Image/Projects/pictures-of-pic-1/pic-4.jpg",
      "Image/Projects/pictures-of-pic-1/pic-5.jpg",
      "Image/Projects/pictures-of-pic-1/pic-6.jpg",
      "Image/Projects/pictures-of-pic-1/pic-12.jpg",
      "Image/Projects/pictures-of-pic-1/pic-13.jpg",
      "Image/Projects/pictures-of-pic-1/pic-14.jpg",
    ],
  },
  {
    id: "1e4e7f90-ad6f-4f50-b71e-20dcae6d82f9",
    name: "Infinity Pool",
    location: "Turin, Italy",
    pics: [
      "Image/Covers/cover-pic-2.jpg",
      "Image/Projects/pictures-of-pic-2/pic-8.jpg",
      "Image/Projects/pictures-of-pic-2/pic-10.jpg",
      "Image/Projects/pictures-of-pic-2/pic-16.jpg",
    ],
  },
  {
    id: "ec53161d-4e81-4dff-8eaa-7c650f012dcf",
    name: "Concrete Pool",
    location: "Turin, Italy",
    pics: [
      "Image/Projects/pictures-of-pic-3/cover-pic-3.jpg",
      "Image/Projects/pictures-of-pic-3/pic-7.jpg",
      "Image/Projects/pictures-of-pic-3/pic-9.jpg",
      "Image/Projects/pictures-of-pic-3/pic-11.jpg",
      "Image/Projects/pictures-of-pic-3/pic-15.jpg",
      "Image/Projects/pictures-of-pic-3/pic-18.jpg",
    ],
  },
  {
    id: "88ae39bc-f1ee-4c44-a4d2-b819973710c0",
    name: "Farigliano Villa",
    location: "Turin, Italy",
    pics: [
      "Image/Covers/cover-pic-4.jpg",
      "Image/Projects/pictures-of-pic-4/pic-21.jpg",
      "Image/Projects/pictures-of-pic-4/pic-22.jpg",
      "Image/Projects/pictures-of-pic-4/pic-25.jpg",
      "Image/Projects/pictures-of-pic-4/pic-26.jpg",
    ],
  },
  {
    id: "5e38987d-5656-4440-a41d-cf3e4a677a66",
    name: "Arra Villa",
    location: "Turin, Italy",
    pics: [
      "Image/Covers/cover-pic-5.jpg",
      "Image/Projects/pictures-of-pic-5/pic-20.jpg",
    ],
  },
];
