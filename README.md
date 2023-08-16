# laravel-instructor-portal
 An Instructor portal using Laravel Sail with mysql and phpmyadmin

Create alias: alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
Start Sail First (sail up)*. Sail MUST be running before running artisan and npm
Split terminal and run dev (sail npm run dev)
New terminal and run artisan (sail artisan serve)
New terminal and run migration (sail php artisan migrate)

*If TCP Port 3306 is already in use, 'sudo pkill mysqld' in terminal then try to start again