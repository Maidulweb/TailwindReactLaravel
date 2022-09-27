<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index () {
        return response()->json(Category::get());
    }
    public function store (Request $request) {
         $validator = Validator::make($request->all(), [
            'name' => 'required',
            'slug' => 'required',
        ]);
 
        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages()
            ]);
        }

        $category = new Category;
        $category->name = $request->input('name');
        $category->slug = $request->input('slug');
        $category->save();

        return response()->json([
            'status' => 200,
            'message' => 'Category Added successfully',
        ]);
    }

    public function edit ($id) {
        return response()->json(Category::find($id));
    }

    public function update(Request $request, $id){
        $category = Category::find($id);
        $category->name = $request->input('name');
        $category->slug = $request->input('slug');
        $category->save();

        return response()->json([
            'status' => 200,
            'message' => 'Updated successfully'
        ]);
    }

    public function destroy($id){
        $category = Category::find($id);
        $category->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Delete successfully',
        ]);
    }
}
