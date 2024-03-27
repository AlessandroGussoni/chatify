Ciao Ekind ;) 

Come funziona:
- Backend in python (3.10 meglio), microservice (fastapi). Trovi un file di requirements.txt, installa e runna il main.py. Vai alla porta http://127.0.0.1:8090/docs e trovi uno swagger con tutti gli endpoint definiti as is
- Fronted in React, install npm (node package manager) e da li segui le istruzioni che trovi nel readme di frontend

Features implementate:
- frontend: landing page minimale, route to login
- backend: auth con jwt (da testare), signin/signup endpoints, sqlite connection

Roadmap:
- Entro fine settimana: react login/signup form, refactor backend, user/document schema definition (90 % done run), se ho tempo google credentials service
- settimana successiva: chat template in react, mock chat endpoints
- 2 settimane: start working on rag pipeline consolidation
