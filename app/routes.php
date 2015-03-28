<?php


Route::get('/', function()
{
     
	return View::make('hello');
});

Route::get('/prueba', function()
{
	return View::make('prueba');
});

Route::get('/test', function()
{
 
	return View::make("ejemplo");
});



Route::controller('personal','PersonalController');

Route::controller('clase','Clase2Controller');

Route::controller('ejemplo','EjemploController');