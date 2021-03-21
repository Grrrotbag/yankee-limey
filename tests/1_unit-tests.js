const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

suite("Unit Tests", () => {
  const translator = new Translator();

  test("Translate Mangoes are my favorite fruit. to British English", (done) => {
    let input = {
      text: "Mangoes are my favorite fruit.",
      locale: "american-to-british",
    };
    assert.deepEqual(translator.translate(input), {
      text: "Mangoes are my favorite fruit.",
      translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.',
    });
    done();
  });

  test("Translate I ate yogurt for breakfast. to British English", (done) => {
    let input = {
      text: "I ate yogurt for breakfast.",
      locale: "american-to-british",
    };
    assert.deepEqual(translator.translate(input), {
      text: "I ate yogurt for breakfast.",
      translation: 'I ate <span class="highlight">yoghurt</span> for breakfast.',
    });
    done();
  });

  test("We had a party at my friend's condo. to British English", (done) => {
    let input = {
      text: "We had a party at my friend's condo.",
      locale: "american-to-british",
    };
    assert.deepEqual(translator.translate(input), {
      text: "We had a party at my friend's condo.",
      translation: "We had a party at my friend's flat.",
    });
    done();
  });

  test("Can you toss this in the trashcan for me? to British English", (done) => {
    let input = {
      text: "Can you toss this in the trashcan for me?",
      locale: "american-to-british",
    };
    assert.deepEqual(translator.translate(input), {
      text: "Can you toss this in the trashcan for me?",
      translation: 'Can you toss this in the <span class="highlight">bin</span> for me?',
    });
    done();
  });

  test("The parking lot was full. to British English", (done) => {
    let input = {
      text: "The parking lot was full.",
      locale: "american-to-british",
    };
    assert.deepEqual(translator.translate(input), {
      text: "The parking lot was full.",
      translation: `The <span class="highlight">car park</span> was full`,
    });
    done();
  });

  test("Like a high tech Rube Goldberg machine. to British English", (done) => {
    let input = {
      text: "Like a high tech Rube Goldberg machine.",
      locale: "american-to-british",
    };
    assert.deepEqual(translator.translate(input), {
      text: "Like a high tech Rube Goldberg machine.",
      translation: `Like a high tech <span class="highlight">Heath Robinson device</span>.`,
    });
    done();
  });

  test("To play hooky means to skip class or work. to British English", (done) => {
    let input = {
      text: "To play hooky means to skip class or work.",
      locale: "american-to-british",
    };
    assert.deepEqual(translator.translate(input), {
      text: "To play hooky means to skip class or work.",
      translation: 'To <span class="highlight">bunk off</span> means to skip class or work.',
    });
    done();
  });

  test("No Mr. Bond, I expect you to die. to British English", (done) => {
    let input = {
      text: "No Mr. Bond, I expect you to die.",
      locale: "american-to-british",
    };
    assert.deepEqual(translator.translate(input), {
      text: "No Mr. Bond, I expect you to die.",
      translation: 'No <span class="highlight">Mr</span> Bond, I expect you to die.',
    });
    done();
  });

  test("Dr. Grosh will see you now. to British English", (done) => {
    let input = {
      text: "Dr. Grosh will see you now.",
      locale: "american-to-british",
    };
    assert.deepEqual(translator.translate(input), {
      text: "Dr. Grosh will see you now.",
      translation: '<span class="highlight">Dr</span> Grosh will see you now.',
    });
    done();
  });

  test("Lunch is at 12:15 today. to British English", (done) => {
    let input = {
      text: "Lunch is at 12:15 today.",
      locale: "american-to-british",
    };
    assert.deepEqual(translator.translate(input), {
      text: "Lunch is at 12:15 today.",
      translation: 'Lunch is at <span class="highlight">12.15</span> today.',
    });
    done();
  });

  test("We watched the footie match for a while. to American English", (done) => {
    let input = {
      text: "We watched the footie match for a while.",
      locale: "british-to-american",
    };
    assert.deepEqual(translator.translate(input), {
      text: "We watched the footie match for a while.",
      translation: 'We watched the <span class="highlight">soccer</span> match for a while.',
    });
    done();
  });

  test("Paracetamol takes up to an hour to work. to American English", (done) => {
    let input = {
      text: "Paracetamol takes up to an hour to work.",
      locale: "british-to-american",
    };
    assert.deepEqual(translator.translate(input), {
      text: "Paracetamol takes up to an hour to work.",
      translation: '<span class="highlight">Tylenol</span> takes up to an hour to work.',
    });
    done();
  });

  test("First, caramelise the onions. to American English", (done) => {
    let input = {
      text: "First, caramelise the onions.",
      locale: "british-to-american",
    };
    assert.deepEqual(translator.translate(input), {
      text: "First, caramelise the onions.",
      translation: 'First, <span class="highlight">caramelize</span> the onions.',
    });
    done();
  });

  test("I spent the bank holiday at the funfair. to American English", (done) => {
    let input = {
      text: "I spent the bank holiday at the funfair.",
      locale: "british-to-american",
    };
    assert.deepEqual(translator.translate(input), {
      text: "I spent the bank holiday at the funfair.",
      translation: "Everything looks good to me!",
    });
    done();
  });

  test("I had a bicky then went to the chippy. to American English", (done) => {
    let input = {
      text: "I had a bicky then went to the chippy.",
      locale: "british-to-american",
    };
    assert.deepEqual(translator.translate(input), {
      text: "I had a bicky then went to the chippy.",
      translation: 'I had a <span class="highlight">cookie</span> then went to the chippy.',
    });
    done();
  });

  test("I've just got bits and bobs in my bum bag. to American English", (done) => {
    let input = {
      text: "I've just got bits and bobs in my bum bag.",
      locale: "british-to-american",
    };
    assert.deepEqual(translator.translate(input), {
      text: "I've just got bits and bobs in my bum bag.",
      translation: "Everything looks good to me!",
    });
    done();
  });

  test("The car boot sale at Boxted Airfield was called off. to American English", (done) => {
    let input = {
      text: "The car boot sale at Boxted Airfield was called off.",
      locale: "british-to-american",
    };
    assert.deepEqual(translator.translate(input), {
      text: "The car boot sale at Boxted Airfield was called off.",
      translation: "Everything looks good to me!",
    });
    done();
  });

  test("Have you met Mrs Kalyani? to American English", (done) => {
    let input = {
      text: "Have you met Mrs Kalyani?",
      locale: "british-to-american",
    };
    assert.deepEqual(translator.translate(input), {
      text: "Have you met Mrs Kalyani?",
      translation: 'Have you met <span class="highlight">Mrs.</span> Kalyani?',
    });
    done();
  });

  test("Prof Joyner of King's College, London. to American English", (done) => {
    let input = {
      text: "Prof Joyner of King's College, London.",
      locale: "british-to-american",
    };
    assert.deepEqual(translator.translate(input), {
      text: "Prof Joyner of King's College, London.",
      translation: `<span class="highlight">Prof.</span> Joyner of King's College, London.`,
    });
    done();
  });

  test("Tea time is usually around 4 or 4.30. to American English", (done) => {
    let input = {
      text: "Tea time is usually around 4 or 4.30.",
      locale: "british-to-american",
    };
    assert.deepEqual(translator.translate(input), {
      text: "Tea time is usually around 4 or 4.30.",
      translation: `Tea time is usually around 4 or <span class="highlight">4:30</span>.`,
    });
    done();
  });

  test("Highlight - Mangoes are my favorite fruit.", (done) => {
    let input = {
      text: "Mangoes are my favorite fruit.",
      locale: "american-to-british",
    };
    assert.deepEqual(translator.translate(input), {
      text: "Mangoes are my favorite fruit.",
      translation: `Mangoes are my <span class="highlight">favourite</span> fruit.`,
    });
    done();
  });

  test("Highlight - I ate yogurt for breakfast.", (done) => {
    let input = {
      text: "I ate yogurt for breakfast.",
      locale: "american-to-british",
    };
    assert.deepEqual(translator.translate(input), {
      text: "I ate yogurt for breakfast.",
      translation: `I ate <span class="highlight">yoghurt</span> for breakfast.`,
    });
    done();
  });

  test("Highlight - We watched the footie match for a while.", (done) => {
    let input = {
      text: "We watched the footie match for a while.",
      locale: "british-to-american",
    };
    assert.deepEqual(translator.translate(input), {
      text: "We watched the footie match for a while.",
      translation: `We watched the <span class="highlight">soccer</span> match for a while.`,
    });
    done();
  });

  test("Highlight - Paracetamol takes up to an hour to work.", (done) => {
    let input = {
      text: "Paracetamol takes up to an hour to work.",
      locale: "british-to-american",
    };
    assert.deepEqual(translator.translate(input), {
      text: "Paracetamol takes up to an hour to work.",
      translation: `<span class="highlight">Tylenol</span> takes up to an hour to work.`,
    });
    done();
  });
});
