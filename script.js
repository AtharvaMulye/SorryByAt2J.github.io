const buttonElements = document.querySelectorAll(".transparent-button");
const outputText = document.querySelector(".output-text");

const codeSnippets = {
  js: {
    code: 'console.log("I Am So Sorry Justa Dabba!");',
    output: "I Am So Sorry Justa Dabba!",
  },
  python: {
    code: 'print("Sorry Na Yaar Justa!")',
    output: "Sorry Na Yaar Justa!",
  },
  go: {
    code: 'fmt.Println("Yaar So So So So Sorry!")',
    output: "Yaar So So So So Sorry!",
  },
  java: {
    code: 'System.out.println("My sincerest apologies, Justa!");',
    output: "My sincerest apologies, Justa!",
  },
  kotlin: {
    code: 'println("Please forgive me, Justa!")',
    output: "Please forgive me, Justa!",
  },
  php: {
    code: 'echo "I apologize from the bottom of my heart, Justa!";',
    output: "I apologize from the bottom of my heart, Justa!",
  },
  csharp: {
    code: 'Console.WriteLine("Please accept my apology, Justa!");',
    output: "Please accept my apology, Justa!",
  },
  swift: {
    code: 'print("I can\'t apologize enough, Justa!")',
    output: "I Am So Sorry Justa Dabba!",
  },
  r: {
    code: 'cat("I\'m sincerely sorry, Justa!", "\n")',
    output: "I'm sincerely sorry, Justa!",
  },
  ruby: {
    code: 'puts "I\'m so very sorry, Justa!"',
    output: "I'm so very sorry, Justa!",
  },
  c: {
    code: 'printf("I\'m apologizing wholeheartedly, Justa!\\n");',
    output: "I Am So Sorry Justa Dabba!",
  },
  typescript: {
    code: 'console.log("I hope you can forgive me, Justa!");',
    output: "I hope you can forgive me, Justa!",
  },
  scala: {
    code: 'println("I Am So Sorry Justa Dabba!")',
    output: "I Am So Sorry Justa Dabba!",
  },
  rust: {
    code: 'println!("I\'m sorry from the depths of my heart, Justa!");',
    output: "I'm sorry from the depths of my heart, Justa!",
  },
  perl: {
    code: 'print "I\'m filled with sorrow, Justa!";',
    output: "I'm filled with sorrow, Justa!",
  },
  dart: {
    code: 'print("I\'m deeply sorry, Justa!");',
    output: "I'm deeply sorry, Justa!",
  },
  lua: {
    code: 'print("Please grant me your forgiveness, Justa!")',
    output: "Please grant me your forgiveness, Justa!",
  },
  cpp: {
    code: 'cout << "I\'m extending my sincere apologies, Justa!" << endl;',
    output: "I'm extending my sincere apologies, Justa!",
  },

  assembly: {
    code: "mov ah, 09h\nmov dx, offset I Am So Sorry Justa Dabba!\nint 21h",
    output: "I Am So Sorry Justa Dabba!$",
  },
  fortran: {
    code: 'WRITE(*,*) "I Am So Sorry Justa Dabba!"\nEND',
    output: "I Am So Sorry Justa Dabba!",
  },
  pascal: {
    code: 'writeln("I\'m truly contrite, Justa!");',
    output: "I'm truly contrite, Justa!",
  },
  basic: {
    code: 'PRINT "I\'m apologizing with all my heart, Justa!"',
    output: "I'm apologizing with all my heart, Justa!",
  },
  cobol: {
    code: 'DISPLAY "I\'m genuinely sorry, Justa!".',
    output: "I'm genuinely sorry, Justa!",
  },
  binary: {
    code: "01001001 00100000 01100001 01101101 00100000 01110011 01101111 00100000 01110011 01101111 01110010 01110010 01111001 00100000 01101010 01110101 01110011 01110100 01100001 00100000 01100100 01100001 01100010 01100010 01100001 00100001",
    output: "I Am So Sorry Justa Dabba!",
  },
};

let isAnimating = false;

function typeCode(code, output) {
  if (isAnimating) {
    return;
  }

  isAnimating = true;
  outputText.textContent = "";
  let index = 0;
  const typingInterval = 50;

  const type = () => {
    if (index < code.length) {
      outputText.textContent += code.charAt(index);
      index++;
      setTimeout(type, typingInterval);
    } else {
      setTimeout(() => {
        outputText.textContent += ` => ${output}`;
        isAnimating = false;
      }, 1000);
    }
  };

  type();
}

buttonElements.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isAnimating) {
      const language = button.id.split("-")[0];
      const { code, output } = codeSnippets[language];
      typeCode(code, output);
    }
  });
});
