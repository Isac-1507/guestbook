# Guest Book

## Docker Run
This is a simple guest book website using NodeJS as its backend and SQLite to hold messages. <br>
- Run `docker run -d -p 80:80 ghcr.io/isac-1507/guestbook:latest`<br>
- Access at port `80`

## Docker Compose

A template `docker-compose.yml` which runs the website with the same settings as the run command.<br>   
- Create `docker-compose.yml` or Portainer Stack
- Add this <br> 
```yaml
name: GuestBook
services:
    guestbook:
        ports:
            - 80:80
        image: ghcr.io/isac-1507/guestbook:latest
```
- Run it using `docker-compose up`