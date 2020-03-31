<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', 'ApiController@login');
Route::post('register', 'ApiController@register');
Route::post('sendEmail','ResetPasswordController@sendEmail');
Route::post('resetPassword','ResetPasswordController@process');

Route::group(['middleware' => 'auth.jwt'], function () {
    Route::get('logout', 'ApiController@logout');
});
