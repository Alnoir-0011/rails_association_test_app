export const tagInput = () => {
  if (document.getElementById('tag-input')){
    const input = document.getElementById('tag-input');
    const tagArea = document.getElementById('tag-area');
    const tagNames = document.getElementById('tag-names');
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && event.target.value !== ''){
        console.log(event.target.value);
        console.log('enter');
        const tagElement = document.createElement('div')
        tagElement.classList.add('badge', 'text-bg-secondary', 'me-1', 'mb-1');
        const tagTextElement = document.createElement('span');
        tagTextElement.classList.add('me-1');
        tagTextElement.textContent = input.value;
        const tagDeleteButton = document.createElement('button');
        tagDeleteButton.classList.add('btn-close');
        tagDeleteButton.type = 'button';
        tagElement.appendChild(tagTextElement);
        tagElement.appendChild(tagDeleteButton);

        tagArea.appendChild(tagElement);

        tagDeleteButton.addEventListener('click', (e) => {
          const deleteTagElement = e.target.parentElement;
          
          const deleteTagArray = tagNames.value.split(',');

          console.log(deleteTagElement.firstElementChild);
          const newTagNames = deleteTagArray.filter(element => !(element === deleteTagElement.firstElementChild.textContent)).join(',');
          tagNames.value = newTagNames;
          tagArea.removeChild(deleteTagElement);
        })

        const tagArray = tagNames.value.split(',');
        tagArray.push(input.value);
        tagNames.value = tagArray.join(',');
        input.value = '';
      };
    });
  };
};


export const tagAutocomplete = () => {
  const input = document.getElementById('tag-input');
  const tagArea = document.getElementById('tag-area');
  const tagNames = document.getElementById('tag-names');
  document.addEventListener('autocomplete.change', (event) => {
    const tagElement = document.createElement('div')
    tagElement.classList.add('badge', 'text-bg-secondary', 'me-1', 'mb-1');
    const tagTextElement = document.createElement('span');
    tagTextElement.classList.add('me-1');
    tagTextElement.textContent = event.detail.textValue;
    const tagDeleteButton = document.createElement('button');
    tagDeleteButton.classList.add('btn-close');
    tagDeleteButton.type = 'button';
    tagElement.appendChild(tagTextElement);
    tagElement.appendChild(tagDeleteButton);
    tagArea.appendChild(tagElement);
    tagDeleteButton.addEventListener('click', (e) => {
      const deleteTagElement = e.target.parentElement;
      
      const deleteTagArray = tagNames.value.split(',');
      const newTagNames = deleteTagArray.filter(element => !(element === deleteTagElement.firstElementChild.textContent)).join(',');
      tagNames.value = newTagNames;
      tagArea.removeChild(deleteTagElement);
    })
    const tagArray = tagNames.value.split(',');
    tagArray.push(event.detail.textValue);
    tagNames.value = tagArray.join(',');
    input.value = '';
  });
};

export const initTagForm = () => {
  const tagArea = document.getElementById('tag-area');
  const tagNames = document.getElementById('tag-names');
  const tags = tagNames.value.split(',').filter(element => !(element === ''));
  tags.map((tag) => {
    const tagElement = document.createElement('div')
    tagElement.classList.add('badge', 'text-bg-secondary', 'me-1', 'mb-1');
    const tagTextElement = document.createElement('span');
    tagTextElement.classList.add('me-1');
    tagTextElement.textContent = tag
    const tagDeleteButton = document.createElement('button');
    tagDeleteButton.classList.add('btn-close');
    tagDeleteButton.type = 'button';
    tagElement.appendChild(tagTextElement);
    tagElement.appendChild(tagDeleteButton);
    tagArea.appendChild(tagElement);
    tagDeleteButton.addEventListener('click', (e) => {
      const deleteTagElement = e.target.parentElement;
      
      const deleteTagArray = tagNames.value.split(',');
      const newTagNames = deleteTagArray.filter(element => !(element === deleteTagElement.firstElementChild.textContent)).join(',');
      tagNames.value = newTagNames;
      tagArea.removeChild(deleteTagElement);
    })
  });
};
