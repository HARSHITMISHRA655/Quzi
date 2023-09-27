const QuizData = {
  English: [
    // Easy Questions
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5'],
      correctAnswer: 1,
      difficulty: 'easy',
    },
    {
      question: 'What is the capital of France?',
      options: ['Madrid', 'Berlin', 'Paris'],
      correctAnswer: 2,
      difficulty: 'easy',
    },

    // Medium Questions
    {
      question: 'Translate "apple" to French.',
      options: ['Pomme', 'Banane', 'Raisin'],
      correctAnswer: 0,
      difficulty: 'medium',
    },
    {
      question: 'What is the plural of "child"?',
      options: ['Children', 'Childs', 'Childies'],
      correctAnswer: 0,
      difficulty: 'medium',
    },

    // Hard Questions
    {
      question: 'Write a sentence using the past perfect tense.',
      options: [
        'I will go to the store.',
        'She has been studying all day.',
        'He eats lunch every day.',
      ],
      correctAnswer: 1,
      difficulty: 'hard',
    },
    {
      question: 'Identify the gerund in the sentence: "Swimming is my favorite activity."',
      options: ['Swimming', 'is', 'activity'],
      correctAnswer: 0,
      difficulty: 'hard',
    },
  ],

  Spanish: [
    // Easy Questions
    {
      question: '¿Cuál es la capital de España?',
      options: ['Madrid', 'Barcelona', 'Valencia'],
      correctAnswer: 0,
      difficulty: 'easy',
    },
    {
      question: '¿Qué es 2 + 2?',
      options: ['3', '4', '5'],
      correctAnswer: 1,
      difficulty: 'easy',
    },

    // Medium Questions
    {
      question: 'Traduce "perro" al inglés.',
      options: ['Dog', 'Cat', 'Bird'],
      correctAnswer: 0,
      difficulty: 'medium',
    },
    {
      question: 'Escribe una frase usando el subjuntivo presente.',
      options: [
        'Voy a la tienda.',
        'Espero que él venga mañana.',
        'Ella come pizza todos los días.',
      ],
      correctAnswer: 1,
      difficulty: 'medium',
    },

    // Hard Questions
    {
      question: 'Conjugate the verb "hablar" in the preterite tense (yo form).',
      options: ['hablo', 'habló', 'hablaba'],
      correctAnswer: 1,
      difficulty: 'hard',
    },
    {
      question: 'Translate "mountain" to Spanish.',
      options: ['Montaña', 'Río', 'Playa'],
      correctAnswer: 0,
      difficulty: 'hard',
    },
  ],

  French: [
    // Easy Questions
    {
      question: 'Quelle est la capitale de la France ?',
      options: ['Madrid', 'Berlin', 'Paris'],
      correctAnswer: 2,
      difficulty: 'easy',
    },
    {
      question: 'Combien font 2 + 2 ?',
      options: ['3', '4', '5'],
      correctAnswer: 1,
      difficulty: 'easy',
    },

    // Medium Questions
    {
      question: 'Traduisez "chat" en anglais.',
      options: ['Dog', 'Cat', 'Bird'],
      correctAnswer: 1,
      difficulty: 'medium',
    },
    {
      question: 'Conjuguez le verbe "manger" au passé composé (je form).',
      options: ['manges', 'mangé', 'mangeais'],
      correctAnswer: 1,
      difficulty: 'medium',
    },

    // Hard Questions
    {
      question: 'Quel est le participe passé du verbe "aller" ?',
      options: ['allé', 'aller', 'irai'],
      correctAnswer: 0,
      difficulty: 'hard',
    },
    {
      question: 'Translate "house" to French.',
      options: ['Maison', 'Fleur', 'Livre'],
      correctAnswer: 0,
      difficulty: 'hard',
    },
  ],

  German: [
    // Easy Questions
    {
      question: 'Was ist die Hauptstadt von Deutschland?',
      options: ['München', 'Berlin', 'Hamburg'],
      correctAnswer: 1,
      difficulty: 'easy',
    },
    {
      question: 'Was ist 5 + 5?',
      options: ['8', '10', '12'],
      correctAnswer: 1,
      difficulty: 'easy',
    },

    // Medium Questions
    {
      question: 'Übersetze "Auto" auf Englisch.',
      options: ['Car', 'Bus', 'Train'],
      correctAnswer: 0,
      difficulty: 'medium',
    },
    {
      question: 'Bilde den Plural von "Haus".',
      options: ['Hausen', 'Häuser', 'Hausi'],
      correctAnswer: 1,
      difficulty: 'medium',
    },

    // Hard Questions
    {
      question: 'Konjugiere das Verb "spielen" im Präteritum (er/sie/es form).',
      options: ['spiele', 'spielt', 'spielte'],
      correctAnswer: 2,
      difficulty: 'hard',
    },
    {
      question: 'Translate "computer" to German.',
      options: ['Computer', 'Fernseher', 'Telefon'],
      correctAnswer: 0,
      difficulty: 'hard',
    },
  ],

  Chinese: [
    // Easy Questions
    {
      question: '西班牙的首都是什么？',
      options: ['北京', '上海', '广州'],
      correctAnswer: 0,
      difficulty: 'easy',
    },
    {
      question: '2 + 2 = ?',
      options: ['3', '4', '5'],
      correctAnswer: 1,
      difficulty: 'easy',
    },

    // Medium Questions
    {
      question: '写出 "家" 的拼音。',
      options: ['Jiā', 'Hǎo', 'Shū'],
      correctAnswer: 0,
      difficulty: 'medium',
    },
    {
      question: '什么是 "朋友" 的意思？',
      options: ['Friend', 'Family', 'Food'],
      correctAnswer: 0,
      difficulty: 'medium',
    },

    // Hard Questions
    {
      question: '写出 "猫" 的汉字。',
      options: ['Gǒu', 'Māo', 'Niǎo'],
      correctAnswer: 1,
      difficulty: 'hard',
    },
    {
      question: 'Translate "water" to Chinese.',
      options: ['Shuǐ', 'Huǒ', 'Lèi'],
      correctAnswer: 0,
      difficulty: 'hard',
    },
  ],
};

export default QuizData;
