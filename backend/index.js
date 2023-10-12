
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { generateFile } = require("./generateFile");
const { executeCpp } = require("./executeCpp");
const vm = require('vm');
// const Tesseract = require('tesseract.js');


const PORT = 5000;

//        image processing 
// const imagePath = 'D:/projects/mpr_2023/frontend/public/s.png';
// Tesseract.recognize(
//     imagePath,
//     'eng', // Language (English in this case)
//     { logger: (info) => console.log(info) } // Optional logger function
//   )
//     .then(({ data: { text } }) => {
//       console.log('Extracted text:');
//       console.log(text);
//     })
//     .catch((error) => {
//       console.error('Error extracting text:', error);
//     });

    

//Server
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.json({ success: "Hello World !" });
});




//OpenAI api config
const config = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(config);

//Chatbot endpoint
app.post("/chatbot", async (req, res) => {
    //const prompt="Write a c code for armstrong number"
    const { prompt } = req.body;
    console.log(prompt);

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 1,
    });
    res.send(response.data.choices[0].text);
    // console.log(response.data);

})




//Compiler code 
app.post("/run", async (req, res) => {
    const { language, code, arguments } = req.body;

    if (language === 'cpp') {
        if (code === "") {
            return res.status(400).json({ success: false, error: "Empty code body!" });
        }
        try {
            const filepath = await generateFile(language, code, arguments);
            const output = await executeCpp(filepath);
            return res.json({ output });
        } catch (err) {
            return res.status(500).json({ error: "Internal server error", details: err });
        }
    } else if (language === 'javascript') {
        try {
            // Execute JavaScript code and capture the output
            const jsOutput = executeJavaScript(code, []);
            console.log(jsOutput);
            // console.log(jsOutput); 
            return res.json({ jsOutput });

        } catch (err) {
            return res.status(500).json({ error: "JavaScript execution error", details: err });
        }
    } else {
        // alert('Please select a language');
        return res.status(400).json({ error: "Unsupported language" });
        // }
    }
    //  else {
    //   return res.status(400).json({ error: "Unsupported language" });
    // }
});

// const vm = require('vm');

// function executeJavaScript(jsCode, args) {
//   try {
//     const context = {
//       console,
//       require,
//     };

//     // Capture the output by overriding console.log
//     const capturedOutput = [];
//     context.console.log = (...args) => {
//       capturedOutput.push(args.map(arg => String(arg)).join(' '));
//     };

//     // Execute the JavaScript code
//     vm.runInNewContext(jsCode, context);

//     // Return the captured output as a string
//     const output = capturedOutput.join('\n');
//     const outputObject = { output: output };
//     return outputObject;
//   } catch (error) {
//     console.error('JavaScript execution error:', error); // Log the error for debugging
//     throw error;
//   }
// }


function executeJavaScript(jsCode, args) {
    try {
        // Create a sandbox to execute JavaScript code
        const sandbox = { console, require };
        const context = new vm.createContext(sandbox);

        // Optionally, you can provide additional context variables as needed

        // Execute the JavaScript code
        const script = new vm.Script(jsCode);
        const parser = script.runInContext(context);

        // Capture the output or return value from the executed code
        // Modify this part according to your requirements
        // const capturedOutput = context.capturedOutput;

        // Create an object to store the output
        const outputObject = { output: parser };

        return outputObject;

    } catch (error) {
        throw error;
    }
}


app.listen(PORT, () => {
    console.log(`Server listening to port : ${PORT}`);
});









// // const express = require("express");
// // const cors = require("cors");
// // // const bodyParser = require('body-parser');

// // const {generateFile}  = require("./generateFile");
// // const {executeCpp}  = require("./executeCpp");


// // const app = express();

// // app.use(cors());

// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());

// // app.get("/", (req, res) => {
// //   return res.json({ success: "done" });
// // });

// // app.post("/run", async(req, res) => {
// //   // console.log(req.body);
// //   const { language, code, arguments} = req.body;
// //   console.log(arguments);

// //   if (code === "") {
// //     return res.status(404).json({ success: false, error: "Empty code body!" });
// //   }

// //  try{
// //   //need to generate a c++ file with content from request.
// //   const filepath = await generateFile(language,code);
// //   // console.log(filepath);
// //   //need to run the file and send response
// //   const output = await executeCpp(filepath, arguments);
// //   // console.log(output);
// //   return res.json({output});

// //  }catch(err){
// //   res.status(500).json({err});

// //  }
  
// // });

// // app.listen(5000, () => {
// //   console.log("listening on port 5000!");
// // });




// const express = require("express");
// const cors = require("cors");
// const { generateFile } = require("./generateFile");
// const { executeCpp } = require("./executeCpp");
// const vm= require('vm'); 
// const app = express();

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/", (req, res) => {
//   return res.json({ success: "done" });
// });

// app.post("/run", async (req, res) => {
//   const { language, code, arguments } = req.body;

//   if (language === 'cpp') {
//     if (code === "") {
//       return res.status(400).json({ success: false, error: "Empty code body!" });
//     }
//     try {
//       const filepath = await generateFile(language, code, arguments);
//       const output = await executeCpp(filepath);
//       return res.json({ output });
//     } catch (err) {
//       return res.status(500).json({ error: "Internal server error", details: err });
//     }
//   }else if (language === 'javascript') {
//     try {
//       // Execute JavaScript code and capture the output
//       const jsOutput = executeJavaScript(code, []);
//       console.log(jsOutput);
//       // console.log(jsOutput); 
//       return res.json({jsOutput});

//     } catch (err) {
//       return res.status(500).json({ error: "JavaScript execution error", details: err });
//     }
//   }else{
//     // alert('Please select a language');
//     return res.status(400).json({ error: "Unsupported language" });
//     // }
//   }
//   //  else {
//   //   return res.status(400).json({ error: "Unsupported language" });
//   // }
// });

// // const vm = require('vm');

// // function executeJavaScript(jsCode, args) {
// //   try {
// //     const context = {
// //       console,
// //       require,
// //     };

// //     // Capture the output by overriding console.log
// //     const capturedOutput = [];
// //     context.console.log = (...args) => {
// //       capturedOutput.push(args.map(arg => String(arg)).join(' '));
// //     };

// //     // Execute the JavaScript code
// //     vm.runInNewContext(jsCode, context);

// //     // Return the captured output as a string
// //     const output = capturedOutput.join('\n');
// //     const outputObject = { output: output };
// //     return outputObject;
// //   } catch (error) {
// //     console.error('JavaScript execution error:', error); // Log the error for debugging
// //     throw error;
// //   }
// // }


// function executeJavaScript(jsCode,args) {
//   try {
//     // Create a sandbox to execute JavaScript code
//     const sandbox = { console, require };
//     const context = new vm.createContext(sandbox);

//     // Optionally, you can provide additional context variables as needed

//     // Execute the JavaScript code
//     const script = new vm.Script(jsCode);
//     const parser = script.runInContext(context);
    
//     // Capture the output or return value from the executed code
//     // Modify this part according to your requirements
//     // const capturedOutput = context.capturedOutput;
    
//     // Create an object to store the output
//     const outputObject = { output: parser};

//     return outputObject;

//   } catch (error) {
//     throw error;
//   }
// }

// app.listen(5000, () => {
//   console.log("listening on port 5000!");
// });
