const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here

	let count = 0;
	  // Iterate through the library array
  for(let i = 0; i < library.length; i=i+1)
  {
    // Check if the current book's readingStatus is true
    if (library[i].readingStatus === true)
	{
      count++;
    }
  }

  return count;
};

// Do not change the code below

alert(numberOfBooksRead());
