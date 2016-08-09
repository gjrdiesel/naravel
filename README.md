# naravel
A node version of laravel.

naravel is just an experiment to build a node framework that has 
similar features, syntax and organization to the PHP framework 
[http://laravel.com](laravel).

## Getting started

### git clone master
```bash
git clone https://github.com/gjrdiesel/naravel.git 
```

### install the dependencies
```bash
npm install
```

### install a database driver of your choice
For most people, using mysql will work fine so use:

```bash
npm install mysql
```

For anyone who wants to use a different sql database chose from the following
```bash
npm install --save pg pg-hstore
npm install --save mysql // For both mysql and mariadb dialects
npm install --save sqlite3
npm install --save tedious // MSSQL
```

### setup a config file
Run the following command to make a copy of the example config.json file.
```bash
cp -v example-config.json config.json
```
And modify any values in the config.json to match your enviroment.

### start the framework
*Note* The ORM will attempt to keep the database in sync with the models you
have created in the framework, so there are no migrations to run or anything else.

*Note* As of _beta_ version 0.1, the framework comes with a user model and homecontroller
out of the box, the ORM will sync the database to match that model on the first start. So 
be sure you're ready to modify the database in the config.json file.

```bash
node vandal.js serve
```

## Add routes, models and controllers

### Models
To add a new model run
```bash
node vandal.js make model MyNewModel
```

MyNewModel will be generated in the http/models folder *([_note_]probably should change to app/models)*

### Controllers
To add a new controller run 
```bash
node vandal.js make controller MyNewController
```

MyNewController will be generated in the http/controllers folder and ready to modify

### Routes
To use the new model/controller, modify the http/routes.js file and add a line like;
```javascript
route.get('/:model',require('../Http/Controllers/MyNewController.js').index);
```

or if you'd rather do the function inline
```javascript
route.get('/:message?',function(req,res){
	return res.send('Hello World');
});
```

## Have fun and happy coding