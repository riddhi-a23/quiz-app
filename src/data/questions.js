const questions = {
  science: {
    easy: [
      {
        id: 1,
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O",
      },
      {
        id: 2,
        question: "How many planets are in our solar system?",
        options: ["7", "8", "9", "10"],
        answer: "8",
      },
      {
        id: 3,
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide",
      },
      {
        id: 4,
        question: "What is the speed of light (approx)?",
        options: ["300,000 km/s", "150,000 km/s", "3,000 km/s", "30,000 km/s"],
        answer: "300,000 km/s",
      },
      {
        id: 5,
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
        answer: "Mitochondria",
      },
    ],
    medium: [
      {
        id: 1,
        question: "What is the atomic number of Carbon?",
        options: ["6", "8", "12", "14"],
        answer: "6",
      },
      {
        id: 2,
        question: "Which law states F = ma?",
        options: [
          "Newton's 1st Law",
          "Newton's 2nd Law",
          "Newton's 3rd Law",
          "Hooke's Law",
        ],
        answer: "Newton's 2nd Law",
      },
      {
        id: 3,
        question: "DNA stands for?",
        options: [
          "Deoxyribonucleic Acid",
          "Dinucleic Acid",
          "Diribose Nucleic Acid",
          "Double Nucleic Acid",
        ],
        answer: "Deoxyribonucleic Acid",
      },
      {
        id: 4,
        question: "Which particle has no charge?",
        options: ["Proton", "Electron", "Neutron", "Positron"],
        answer: "Neutron",
      },
      {
        id: 5,
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Watt", "Ampere", "Ohm"],
        answer: "Ampere",
      },
    ],
    hard: [
      {
        id: 1,
        question: "What is Avogadro's number?",
        options: ["6.022 × 10²³", "3.14 × 10²³", "9.8 × 10²³", "1.6 × 10⁻¹⁹"],
        answer: "6.022 × 10²³",
      },
      {
        id: 2,
        question: "Which element has the highest electronegativity?",
        options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
        answer: "Fluorine",
      },
      {
        id: 3,
        question: "What is the Heisenberg Uncertainty Principle about?",
        options: [
          "Position & momentum cannot both be precisely known",
          "Energy is always conserved",
          "Electrons orbit in fixed paths",
          "Light behaves as both wave and particle",
        ],
        answer: "Position & momentum cannot both be precisely known",
      },
      {
        id: 4,
        question: "What is the half-life of Carbon-14?",
        options: ["5,730 years", "1,000 years", "10,000 years", "500 years"],
        answer: "5,730 years",
      },
      {
        id: 5,
        question: "What type of bond holds DNA base pairs together?",
        options: ["Covalent", "Ionic", "Hydrogen", "Metallic"],
        answer: "Hydrogen",
      },
    ],
  },
  history: {
    easy: [
      {
        id: 1,
        question: "Who was the first President of the United States?",
        options: [
          "Abraham Lincoln",
          "George Washington",
          "Thomas Jefferson",
          "John Adams",
        ],
        answer: "George Washington",
      },
      {
        id: 2,
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        answer: "1945",
      },
      {
        id: 3,
        question: "Which ancient wonder was located in Egypt?",
        options: [
          "Colossus of Rhodes",
          "Great Pyramid of Giza",
          "Hanging Gardens",
          "Temple of Artemis",
        ],
        answer: "Great Pyramid of Giza",
      },
      {
        id: 4,
        question: "Who discovered America in 1492?",
        options: [
          "Vasco da Gama",
          "Ferdinand Magellan",
          "Christopher Columbus",
          "Marco Polo",
        ],
        answer: "Christopher Columbus",
      },
      {
        id: 5,
        question: "The French Revolution began in which year?",
        options: ["1776", "1789", "1804", "1815"],
        answer: "1789",
      },
    ],
    medium: [
      {
        id: 1,
        question: "Which empire was ruled by Genghis Khan?",
        options: ["Roman", "Ottoman", "Mongol", "Byzantine"],
        answer: "Mongol",
      },
      {
        id: 2,
        question: "The Berlin Wall fell in which year?",
        options: ["1987", "1989", "1991", "1993"],
        answer: "1989",
      },
      {
        id: 3,
        question: "Who wrote the Communist Manifesto?",
        options: [
          "Lenin & Stalin",
          "Marx & Engels",
          "Rousseau & Voltaire",
          "Locke & Hobbes",
        ],
        answer: "Marx & Engels",
      },
      {
        id: 4,
        question: "Which battle ended Napoleon's rule?",
        options: ["Trafalgar", "Austerlitz", "Waterloo", "Borodino"],
        answer: "Waterloo",
      },
      {
        id: 5,
        question: "The Magna Carta was signed in which year?",
        options: ["1066", "1215", "1348", "1492"],
        answer: "1215",
      },
    ],
    hard: [
      {
        id: 1,
        question: "Who was the last Tsar of Russia?",
        options: [
          "Alexander III",
          "Nicholas I",
          "Nicholas II",
          "Alexander II",
        ],
        answer: "Nicholas II",
      },
      {
        id: 2,
        question: "The Treaty of Westphalia (1648) ended which war?",
        options: [
          "100 Years War",
          "30 Years War",
          "7 Years War",
          "War of Roses",
        ],
        answer: "30 Years War",
      },
      {
        id: 3,
        question: "Which pharaoh built the Great Sphinx?",
        options: ["Ramesses II", "Tutankhamun", "Khafre", "Khufu"],
        answer: "Khafre",
      },
      {
        id: 4,
        question: "The Peloponnesian War was fought between which city-states?",
        options: [
          "Athens & Sparta",
          "Rome & Carthage",
          "Troy & Greece",
          "Persia & Greece",
        ],
        answer: "Athens & Sparta",
      },
      {
        id: 5,
        question: "Who was the first Emperor of China?",
        options: ["Kublai Khan", "Qin Shi Huang", "Wu Zetian", "Liu Bang"],
        answer: "Qin Shi Huang",
      },
    ],
  },
  technology: {
    easy: [
      {
        id: 1,
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Core Processing Unit",
          "Computer Processing Unit",
          "Central Program Unit",
        ],
        answer: "Central Processing Unit",
      },
      {
        id: 2,
        question: "Who founded Microsoft?",
        options: [
          "Steve Jobs",
          "Bill Gates",
          "Mark Zuckerberg",
          "Elon Musk",
        ],
        answer: "Bill Gates",
      },
      {
        id: 3,
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "HyperTransfer Markup Language",
          "HyperText Modern Language",
        ],
        answer: "HyperText Markup Language",
      },
      {
        id: 4,
        question: "Which company makes the iPhone?",
        options: ["Samsung", "Google", "Apple", "Sony"],
        answer: "Apple",
      },
      {
        id: 5,
        question: "What does URL stand for?",
        options: [
          "Uniform Resource Locator",
          "Universal Resource Link",
          "Uniform Reference Locator",
          "Universal Record Locator",
        ],
        answer: "Uniform Resource Locator",
      },
    ],
    medium: [
      {
        id: 1,
        question: "Which language is primarily used for web styling?",
        options: ["JavaScript", "Python", "CSS", "Ruby"],
        answer: "CSS",
      },
      {
        id: 2,
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
        answer: "O(log n)",
      },
      {
        id: 3,
        question: "What does API stand for?",
        options: [
          "Application Programming Interface",
          "Automated Program Interaction",
          "Application Protocol Interface",
          "Automated Programming Interface",
        ],
        answer: "Application Programming Interface",
      },
      {
        id: 4,
        question: "Which data structure uses LIFO?",
        options: ["Queue", "Stack", "Array", "Tree"],
        answer: "Stack",
      },
      {
        id: 5,
        question: "What does SQL stand for?",
        options: [
          "Structured Query Language",
          "Simple Query Language",
          "Sequential Query Logic",
          "Standard Query Language",
        ],
        answer: "Structured Query Language",
      },
    ],
    hard: [
      {
        id: 1,
        question: "What is the output of: typeof null in JavaScript?",
        options: ["null", "undefined", "object", "string"],
        answer: "object",
      },
      {
        id: 2,
        question: "Which sorting algorithm has average O(n log n) complexity?",
        options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
        answer: "Merge Sort",
      },
      {
        id: 3,
        question: "What is a closure in JavaScript?",
        options: [
          "A function with access to its outer scope",
          "A way to close a browser tab",
          "An error handling mechanism",
          "A type of loop",
        ],
        answer: "A function with access to its outer scope",
      },
      {
        id: 4,
        question: "CAP theorem refers to?",
        options: [
          "Consistency, Availability, Partition tolerance",
          "Cache, API, Protocol",
          "Compile, Assemble, Package",
          "Control, Access, Permission",
        ],
        answer: "Consistency, Availability, Partition tolerance",
      },
      {
        id: 5,
        question: "What does CORS stand for?",
        options: [
          "Cross-Origin Resource Sharing",
          "Core Object Request System",
          "Cross-Object Resource System",
          "Central Origin Resource Sharing",
        ],
        answer: "Cross-Origin Resource Sharing",
      },
    ],
  },
  mathematics: {
    easy: [
      {
        id: 1,
        question: "What is 12 × 12?",
        options: ["124", "144", "132", "148"],
        answer: "144",
      },
      {
        id: 2,
        question: "What is the value of π (pi) approximately?",
        options: ["3.14", "2.71", "1.61", "1.41"],
        answer: "3.14",
      },
      {
        id: 3,
        question: "What is the square root of 81?",
        options: ["7", "8", "9", "10"],
        answer: "9",
      },
      {
        id: 4,
        question: "How many degrees are in a triangle?",
        options: ["90", "180", "270", "360"],
        answer: "180",
      },
      {
        id: 5,
        question: "What is 15% of 200?",
        options: ["25", "30", "35", "40"],
        answer: "30",
      },
    ],
    medium: [
      {
        id: 1,
        question: "What is the derivative of x²?",
        options: ["x", "2x", "x²", "2"],
        answer: "2x",
      },
      {
        id: 2,
        question: "What is log₁₀(1000)?",
        options: ["2", "3", "4", "10"],
        answer: "3",
      },
      {
        id: 3,
        question: "What is the sum of interior angles of a hexagon?",
        options: ["540°", "620°", "720°", "800°"],
        answer: "720°",
      },
      {
        id: 4,
        question: "If f(x) = 3x + 5, what is f(4)?",
        options: ["15", "17", "19", "21"],
        answer: "17",
      },
      {
        id: 5,
        question: "What is 7! (7 factorial)?",
        options: ["2520", "5040", "720", "40320"],
        answer: "5040",
      },
    ],
    hard: [
      {
        id: 1,
        question: "What is the integral of 1/x dx?",
        options: ["x²/2", "ln|x| + C", "1/x²", "e^x"],
        answer: "ln|x| + C",
      },
      {
        id: 2,
        question: "Euler's identity: e^(iπ) + ? = 0",
        options: ["0", "1", "i", "π"],
        answer: "1",
      },
      {
        id: 3,
        question: "What is the rank of a 3×3 identity matrix?",
        options: ["0", "1", "2", "3"],
        answer: "3",
      },
      {
        id: 4,
        question: "The Fibonacci sequence ratio converges to?",
        options: ["π", "e", "φ (Golden Ratio)", "√2"],
        answer: "φ (Golden Ratio)",
      },
      {
        id: 5,
        question: "P(A∪B) = P(A) + P(B) - ?",
        options: ["P(A)", "P(B)", "P(A∩B)", "P(A)·P(B)"],
        answer: "P(A∩B)",
      },
    ],
  },
};

export default questions;
