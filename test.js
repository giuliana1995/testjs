<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
 <h1>Test JS</h1>
 <select name="tags" id="tags"></select>
  </body>
  </head>
  <body>


  <script>

    const tags = document.querySelector('#tags')
fetch('https://cataas.com//api/tags')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const array1 = data.slice(4, 9)
        const array2 = data.slice(14, 19)
        const filter = array1.concat(array2)
        console.log(filter)
        filter.forEach(element => {
            let option = (document.createElement('option'))
            option.value = element
            option.innerText = element
            option.setAttribute('id', 'cats')
            console.log(option)
            tags.append(option)
        })
        function catImage() {
            fetch(`https://cataas.com/cat?json=true`)
            
        }
      
    })


  </script>

</html>
