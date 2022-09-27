<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;

class AdminController extends Controller
{  
   
    public function login(Request $request){

           $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ]);
 
        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages()
            ]);
        }

     $user = Admin::where('email', $request->email)->first();

       if (! $user || ! Hash::check($request->password, $user->password)) {
           
            return response()->json([
                'status' => 201,
                'warning' => 'The provided credentials are incorrect!!!!!'
            ]);
        }

        $token = $user->createToken($user->email.'_Token')->plainTextToken;

        return response()->json([
            'status' => 200,
            'admin_login_token'=> $token,
            'admin_username_token'=> $user->username,
            'success' => 'Login Successfully'
        ]);

       
    }
    public function logout(){
        Auth::user()->tokens()->delete();
         
            return response()->json([
                'status' => 201,
                'success' => 'Logout Successfully'
            ]);
    }
}
