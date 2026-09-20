# ISSABUB Nigeria Limited — Website v1

Original full-stack starter built from the supplied `Design-Build-Erect.pdf`. The reference material is used as business/content input; no source website code or wording is intentionally copied.

## Stack
- Frontend: semantic HTML5, CSS3, vanilla JavaScript
- Backend: Django + Django REST Framework
- Database: SQLite for local development; PostgreSQL-ready dependency/config path

## Run backend
```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python seed_data.py
python manage.py createsuperuser
python manage.py runserver
```

API endpoints:
- `/api/company/`
- `/api/services/`
- `/api/projects/`
- `/api/quotes/`
- `/admin/`

## Run frontend
Use VS Code Live Server or any static server from `frontend/`. By default JavaScript calls `http://127.0.0.1:8000/api`.

To point the frontend elsewhere, define `window.ISSABUB_API_BASE` before `main.js`.

## Production checklist
- Set a strong `DJANGO_SECRET_KEY`.
- Set `DJANGO_DEBUG=0`.
- Set `DJANGO_ALLOWED_HOSTS` and `CORS_ALLOWED_ORIGINS`.
- Use PostgreSQL in production.
- Configure HTTPS, secure cookies, CSRF trusted origins and a production email service.
- Add real company/project images only where ISSABUB has permission to use them.
- Verify business metrics before publication because the supplied PDF contains different figures in different sections (e.g. years/projects/client counts).

## Content source note
The PDF identifies ISSABUB Nigeria Limited as an Ogun-based general construction and civil engineering contractor, gives an Ijoko Ota address, phone/email, business hours, services, project examples, mission, vision and values. This build uses those details as the source of truth for v1 and does not invent a client list or project outcomes.
