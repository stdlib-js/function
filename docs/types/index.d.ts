/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import Function = require( './../../ctor' );
import function2string = require( './../../to-string' );

/**
* Interface describing the `function` namespace.
*/
interface Namespace {
	/**
	* Returns a Function object.
	*
	* ## Notes
	*
	* -   Argument names must be strings corresponding to valid JavaScript parameters (i.e., a plain identifier, or, in environments supporting such parameters, a rest parameter or destructured parameter, optionally with a default).
	* -   Creating `Function` objects with the `Function` constructor is less efficient than declaring a function via a function expression or a function statement.
	* -   The `Function` constructor can be invoked without the `new` operator (using `new` and not using `new` both return a new `Function` object).
	* -   The `Function` constructor creates functions which execute in the **global scope**. Hence, created functions **cannot** access variables local to the scope in which functions were created.
	*
	* @param argNames - parameter names
	* @param body - function body
	* @returns function
	*
	* @example
	* var add = new ns.Function( 'x', 'y', 'return x + y' );
	*
	* var v = add( 1, 2 );
	* // returns 3
	*/
	Function: typeof Function;

	/**
	* Returns a string representing the source code of a provided function.
	*
	* ## Notes
	*
	* -   If called on built-in functions, functions created by `Function.prototype.bind()`, or other non-JavaScript functions, the function returns a "native" function string similar to the following:
	*
	*     ```text
	*     "function foo() { [native code] }"
	*     ```
	*
	*     For intrinsic object methods and functions, `foo` is the initial name of the function.
	*
	* -   If called on a function created by the `Function` constructor, the function returns the source code of a synthesized function declaration having the name "anonymous" and using the provided parameters and function body.
	*
	* -   Starting in ES2018, the ECMAScript specification requires that the returned string contain the exact same source code as it was declared, including any whitespace and/or comments. If the host is unable to access the source code, the specification requires that the returned string be the native function string.
	*
	* @param fcn - input function
	* @returns string representing function source code
	*
	* @example
	* function add( x, y ) {
	*     return x + y;
	* }
	*
	* var str = ns.function2string( add );
	* // e.g., returns 'function add( x, y ) {\n    return x + y;\n}'
	*/
	function2string: typeof function2string;
}

/**
* Function.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
