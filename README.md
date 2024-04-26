# versions
- Ruby 3.3.0
- Rails 7.1.3.2

# setup
```
docker-compose build && docker-compose up -d
docker-compose exec web rails db:migrate && docker-compose exec web rails db:seed_fu
```