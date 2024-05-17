import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

const initialMarkdown = `# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline code\`

\`\`\`
Code block
\`\`\`

- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown);
  }, [markdown]);

  return (
    <div className="App">
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
      />
      <div id="preview"></div>
    </div>
  );
}

export default App;
