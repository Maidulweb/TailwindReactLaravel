<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('throttle:3,10')->group(function () {
    Route::post('/login', [AdminController::class, 'login']);
});  */

Route::post('/login', [AdminController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AdminController::class, 'logout']);
}); 

/* Supplier */
Route::get('/list_supplier', [SupplierController::class, 'index']);
Route::post('/add_supplier', [SupplierController::class, 'store']);
Route::get('/edit_supplier/{id}', [SupplierController::class, 'edit']);
Route::put('/edit_supplier/{id}', [SupplierController::class, 'update']);
Route::delete('delete_supplier/{id}', [SupplierController::class, 'destroy']);

/* Category */
Route::get('/list_category', [CategoryController::class, 'index']);
Route::post('/add_category', [CategoryController::class, 'store']);
Route::get('/edit_category/{id}', [CategoryController::class, 'edit']);
Route::put('/edit_category/{id}', [CategoryController::class, 'update']);
Route::delete('delete_category/{id}', [CategoryController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
