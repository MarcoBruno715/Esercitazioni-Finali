## CRUD


1. Scarichiamo i pacchetti npm Express , sqlite3, ejs 

2. Creiamo file Server.js che  crea un nuovo database chiamato mydb se non esiste già , nel file sono presenti altri componenti che servono a manipolare i dati all'interno del database creato 

3. creaiamo la cartella public che contine i file html e css

4. I file sono Siging che permette ad un utente di registrarsi all'interno del form e i dati vengono scritti all'interno del database; Il form tramite il metodo post passa i dati al server.js
Il file server.js inserisce i dati nelle colonne precedentemente create nel database 

5. Il secondo file Loging permette di verificare se l'utnete e presente all'interno del database; Il form passa sttraverso il metodo post che passa i dati al file.js che verifica se i dati sono presenti nell'id e restituisce un messaggio di avcesso riuscito o credenziali nonb valide.

6. Il terzo file Edit contine due form uno per eliminare l'utente e il secondo per modificare i dati dell'utente.
Il primo form chiede un id e il file server.js cancella all'interno del database la riga corrispondente all'id.
Il secondo form chiede all'untente un id e permette di modifcare le colonne dei dati corrispondenti all'id.

7. Le pagine html posso essere visualizzate sulla port local host 3000/nomefile.html 
   formatta .md