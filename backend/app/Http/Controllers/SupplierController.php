<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Supplier;

class SupplierController extends Controller
{
    public function index () {
        return response()->json(Supplier::get());
    }
    public function store (Request $request) {
         $validator = Validator::make($request->all(), [
            'name' => 'required',
            'status' => 'required',
        ]);
 
        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages()
            ]);
        }

        $supplier = new Supplier;
        $supplier->name = $request->input('name');
        $supplier->status = $request->input('status');
        $supplier->save();

        return response()->json([
            'status' => 200,
            'message' => 'Supplier Added successfully',
        ]);
    }

    public function edit ($id) {
        return response()->json(Supplier::find($id));
    }

    public function update(Request $request, $id){
        $supplier = Supplier::find($id);
        $supplier->name = $request->input('name');
        $supplier->status = $request->input('status');
        $supplier->save();

        return response()->json([
            'status' => 200,
            'message' => 'Updated successfully'
        ]);
    }

    public function destroy($id){
        $supplier = Supplier::find($id);
        $supplier->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Delete successfully',
        ]);
    }
}
