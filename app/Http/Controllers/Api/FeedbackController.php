<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function send(Request $request) {
        try {
            return response()->json($request->all());
        } catch (\Exception $e) {
            return response()->json($e);
        }

    }
}
