## Analisi  dei requisiti dell 'applicazione

-questa applicazione web verrà realizzata in 4 versioni di complessità crescente.  


1 - Backend Web App con gestione degli utenti (senza Admin) tramite file json **(senza interfaccia web con comandi CURL)**


2 - Backend Web App con utilizzo **JWT** (json web token) richiesti ed assegnati ad ogni utente (senza Admin) tramite comandi CURL


3 - Web App completa di frontend con gestione degli utenti tramite **file json** ed autentificazione tramite **jwt**


4 - Web App completa con **JWT** e **SQLite** (con Admin)

# DIPENDENZE

## 1 - Backend Web App con gestione degli utenti

 - express
 - body-parser

 ## 2 - Backend Web App con utilizzo JWT

 - express
 - body-parser
 

 ## 3 -Web APP COMPLETA DI FRONT END  con gestione degli utenti

 - express
 - body-parser
 - jsonwebtoken
 - serve-static

 ## 4 -Web APP COMPLETA DI FRONT END  con gestione degli utenti JWT E SQL

 - express
 - body-parser
 - jsonwebtoken
 - serve-static
 - sqlite3



 **(Quando modifichi server.js ricordati di chiudere la porta AL SERVER)**


 ## FILES NECESSARI


## 1 - Backend Web App con gestione degli utenti

- user.json > contiene i dati degli utenti (username , password)
- server.js: gestisce  la  connessione tra browser e console (VSC) inoltre gestisce i percorsi delle pagine 

eseguire **node server.js**

comando CURL da eseguire per autenticazione:

> curl -X POST -H"Content-Type: application/json" -d'{"username": "user1", "password": "password1"}' http://localhost:3000/protected

## Passaggi da eseguire:

(I comandi curl andranno inseriti nel terminale bash, il server verrà mantenuto attivo dal terminale powershell)
- Aprire nel terminale **powershell** la cartella del progetto.
- Avviare il server eseguendo **node server.js**.
- Aprire un altro terminale, questa volta **bash**, utilizzando il precendente terminale per mantenere attivo il server.
- Inserire la stringa **curl** nel path **/protected** per inserire le credenziali.
- Profit!


## 2 - Backend Web App con utilizzo JWT

- user.json: contiene i dati degli utenti (username, password)
- server.js:

     - gestisce la connessione tra browser e console vsc 
     - gestisce i percorsi delle pagine
     - genera un json web token
     - reindirizza l'utente alla pagina protected (se il token è attivo)


eseguire **node server.js**

Comando CURL da eseguire per autenticazione:

> curl -X POST -H"Content-Type: application/json" -d'{"username": "user1", "password": "password1"}' http://localhost:3000/protected


Comando CURL per 



>  Scriviamo il comando CURL sul terminale di vsc (in bash)  per ottenere il JWT (JsonWebToken)



         - curl -X POST -H"Content-Type: application/json" -d'{"username": "user1", "password": "password1"}' http://localhost:3000/login     

 >  Scriviamo il comando CURL sul terminale di vsc (in bash)  per ottenere il JWT (JsonWebToken)

> curl -X GET -H "Authorization: "codice Autenticazione" " http://localhost:3000/protected


         - Esempio di json Web token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjg3OTU3NzczLCJleHAiOjE2ODc5NjEzNzN9.5sIZvHj0SjJI9VQeydEbDPhmnwvt6Tuo7obANv26rl

         - Il json web token viene generato  in base alle credenziali inserite. E temporanea, non è sempre lo stesso ma viene generato ogni qualvolta si inseriscono le credenziali.


Passaggi da eseguire:
Aprire nel terminale powershell la cartella del progetto.

Avviare il server eseguendo node server.js.

Aprire un altro terminale, questa volta bash, utilizzando il precendente terminale per mantenere attivo il server.

All'interno del bash, inserire la prima stringa curl (/login) per richiedere il token legato a quel determinato account.

Verrà stampato in console il token, che andremo quindi a inserire nel terminale attraverso la seconda stringa curl.

Il messaggio "You have accessed protected content" confermerà quindi la riuscita dell'operazione di accesso.


Differenza con il programma del primo punto è la creazione e l'utilizzo di un json WebToken che serve ad utenticare l'utente e il reinderizzamento del'utente alla pagina protected (se il token è attivo).

## 3 - Web App completa di FRONTEND con gestione degli utenti JWT

    - userjson: contiene i dati degli utenti (username, password, role)

- server.js:

     - gestisce la connessione tra browser e console vsc 
     - gestisce i percorsi delle pagine
     - genera un json web token e rindirizza l'utente alla pagina corrispettiva  protected se il token e attivo  permette             di visalizzare la pagina  in base al ruolo  . route logout. 
     - reindirizza l'utente alla pagina protected (se il token è attivo)

- Cartella public file statici:

     - Admin.html: Pagina Admin dove l'utente viene rindirizzato in base al ruolo , con link di script auth.js
                          
     - User.html Pagina utente dove viene rindirizzato in base al ruolo , con  link di script auth.js
     
     - index.html Pagina con  form di login e link di script login.js


- auth.js: 

     - Logica per rendere questa pagina disponibile solo ad un ruolo   
     - gestisce le autorizzazioni di accesso alle route 
     - Indirizza gli utenti ad Admin o aggiunge secondo il ruolo che gli abbiamo passato.
     - Smista le risposte e va a rindirizzare ad admin o user e contemporaneamente tramite il token che gli abbiamo creato va ad
       autorizzare o non il determinato utente. 

- Login.js:
     
     - Gestione del form
     - Prende username e password da dentro il modulo, gestisce gli stati (200 indica che ha trovato quello che cercava tramite
       payload)
     - Racupera la pagina index.HTML le informazioni username e password del form e le converte in file json e ci indirizza la        
       pagina  Login con il ruolo di admin o utente dandoci la corrispettiva pagina 


 ## 4 -Web APP COMPLETA DI FRONT END  con gestione degli utenti JWT E SQLITE

Questa e un implementazione dell 'esercizo 3 con l'aggiunta di un form per effettuare la registrazione di nuovi utenti nel database

- Server.js

     - gestisce la connessione tra browser e console vsc 
     - gestisce i percorsi delle pagine
     - genera un json web token e rindirizza l'utente alla pagina corrispettiva  protected se il token e attivo , permette di   visalizzare la pagina  in base al ruolo  con route logout 
     - reindirizza l'utente alla pagina protected (se il token è attivo)
     - Implementazione di registrazione  utenti nel database



    - createDb.js: crea il database con la tabella che contiene i dati degli utenti (crea TABELLA .Db se non creata in precedenza)

    - addUser.js: Aggiunge dati utenti al database

    - myDatabase.db: File del database creato da createDb.js, contiene i dati degli utenti (username, password, role)



- sottocartella File Statici:  


     - index.html: pagina principale

     - register.html: pagina con form di registrazione utenti

     - login.html: gestisce il login dell'utente e lo reinderizza

     - Admin.html: Pagina Admin dove l'utente viene rindirizzato in base al ruolo , con link di script auth.js
                          
     - User.html Pagina utente dove viene rindirizzato in base al ruolo , con  link di script auth.js
     
     - index.html Pagina con  form di login e link di script login.js

     - auth.js: autentica l'utente e permette  di visualizzare  la pagina del  ruolo 
     - Logica per rendere questa pagina disponibile solo ad un ruolo   
     - gestisce le autorizzazioni di accesso alle route 
     - Indirizza gli utenti ad Admin o aggiunge secondo il ruolo che gli abbiamo passato.
     - Smista le risposte e va a rindirizzare ad admin o user e contemporaneamente tramite il token che gli abbiamo creato va ad
       autorizzare o non il determinato utente. 


Andando a http://localhost:3000/register si potranno effettuare la registrazione
Andando a http://localhost:3000/login il login tramite l'interfaccia.


Modifica:

Viene introdotta una route  /register per la registrazione di nuovi utenti nel database**