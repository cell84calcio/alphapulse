FROM python:3.11-slim

WORKDIR /app

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV PORT=8080

COPY server.py .
COPY market_data.json .
COPY history_ledger.json .

EXPOSE 8080

CMD ["python3", "server.py"]
