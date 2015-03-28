<?php


Route::get('/', function()
{
     
	return View::make('hello');
});

Route::get('/prueba', function()
{
	return View::make('prueba');
});

Route::get('/algios', function()
{
 
	return View::make("perfil.perfil")
            ->with("nombre","Alejandro");
});



Route::controller('personal','PersonalController');

Route::controller('clase','Clase2Controller');

Route::controller('ejemplo','EjemploController');