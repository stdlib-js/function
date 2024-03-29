<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# function2string

> Return a string representing the source code of a provided function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var function2string = require( '@stdlib/function/to-string' );
```

#### function2string( fcn )

Returns a string representing the source code of a provided function.

```javascript
function add( x, y ) {
    return x + y;
}

var str = function2string( add );
// e.g., returns 'function add( x, y ) {\n    return x + y;\n}'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If called on built-in functions, functions created by `Function.prototype.bind()`, or other non-JavaScript functions, the function returns a "native" function string similar to the following:

    ```text
    "function foo() { [native code] }"
    ```

    For intrinsic object methods and functions, `foo` is the initial name of the function.

-   If called on a function created by the [`Function`][@stdlib/function/ctor] constructor, the function returns the source code of a synthesized function declaration having the name "anonymous" and using the provided parameters and function body.

-   Starting in ES2018, the ECMAScript specification requires that the returned string contain the exact same source code as it was declared, including any whitespace and/or comments. If the host is unable to access the source code, the specification requires that the returned string be the native function string.  

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var erf = require( '@stdlib/math/base/special/erf' );
var daxpy = require( '@stdlib/blas/base/daxpy' );
var kebabcase = require( '@stdlib/string/kebabcase' );
var randu = require( '@stdlib/random/base/randu' );
var format = require( '@stdlib/string/format' );
var function2string = require( '@stdlib/function/to-string' );

var fcns = [
    [ 'ndarray', ndarray ],
    [ 'erf', erf ],
    [ 'daxpy', daxpy ],
    [ 'kebabcase', kebabcase ],
    [ 'randu', randu ],
    [ 'format', format ],
    [ 'function2string', function2string ]
];

var i;
for ( i = 0; i < fcns.length; i++ ) {
    console.log( format( 'Function: %s\n\n%s\n', fcns[ i ][ 0 ], function2string( fcns[ i ][ 1 ] ) ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/function/ctor`][@stdlib/function/ctor]</span><span class="delimiter">: </span><span class="description">function constructor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/function/ctor]: https://github.com/stdlib-js/function/tree/main/ctor

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
