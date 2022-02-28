<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
 <h1>Test JS</h1>
 <select name="tags" id="tags">
 
 </select>
    <script src="index.js"></script>
  </body>
  </head>
  <body>


  <script>

    const tags = document.querySelector('#tags')
fetch('https://cataas.com//api/tags')
    .then(response => response.json())
    .then(datas => {
        console.log(datas)
        const arr49 = datas.slice(4, 9)
        const arr1419 = datas.slice(14, 19)
        const filter = arr49.concat(arr1419)
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
        tags.addEventListener('change', catImage())
    })


  </script>

</html>
