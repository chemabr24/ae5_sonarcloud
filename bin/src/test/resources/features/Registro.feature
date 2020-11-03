Feature: Registrarse en la aplicación como asistente

Scenario Outline: <testCase><resultado>


Given abrir la aplicación web en el navegador e iniciar el formulario de registro
When introducir los datos de registro
    |DNI|password|nombre|apellidos|correo|telefono|
    |<DNI>|<password>|<nombre>|<apellidos>|<correo>|<telefono>|
Then pulsamos REGISTRARSE


    Examples: 
      | testCase |     resultado             |DNI|password|nombre|apellidos|correo|telefono|
      | Case 1   | Registro Correcto         |09887534S|vdsafdas23|Jorge|Gomez Sanchez|jorge2@gmail.com|676543212|
      | Case 2   | No DNI Introducido        |	|fdsa34fda|Antonio|Garcia Perez|antoniogarcia2@gmail.com|676543298|		
      | Case 3   | No password Introducida   |09889987L|  |Sergio|Gonzalez Garrido|sergio76@gmail.com|666543456|
      | Case 4   | No nombre Introducido     |09897534S|vdsaas23|  |Gomez Sanchez|serg@gmail.com|676540212|
      | Case 5   | No apellidos Introducidos |01887534S|afdas23|Sergio|	|sergio2@gmail.com|696543212|
      | Case 6   | No e-mail Introducido     |04887534S|afd65ujfh23|Luis|Garcia Perez|  |695443212|
      | Case 7   | No telefono Introducido   |01887934R|afdas23dfs23|Carlos|Garcia Gonzalez|carlos@gmail.com|  |
