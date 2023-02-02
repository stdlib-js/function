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

# Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Function namespace.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/function@v0.0.1-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { Function, function2string } from 'https://cdn.jsdelivr.net/gh/stdlib-js/function@v0.0.1-esm/index.mjs';
```

#### ns

Function namespace.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Function( [...argNames,] body )`][@stdlib/function/ctor]</span><span class="delimiter">: </span><span class="description">function constructor.</span>
-   <span class="signature">[`function2string( fcn )`][@stdlib/function/to-string]</span><span class="delimiter">: </span><span class="description">return a string representing the source code of a provided function.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/function@v0.0.1-esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/function.svg
[npm-url]: https://npmjs.org/package/@stdlib/function

[test-image]: https://github.com/stdlib-js/function/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/function/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/function/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/function?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/function.svg
[dependencies-url]: https://david-dm.org/stdlib-js/function/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/function/tree/deno
[umd-url]: https://github.com/stdlib-js/function/tree/umd
[esm-url]: https://github.com/stdlib-js/function/tree/esm
[branches-url]: https://github.com/stdlib-js/function/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/function/main/LICENSE

<!-- <toc-links> -->

[@stdlib/function/ctor]: https://github.com/stdlib-js/function/tree/main/ctor

[@stdlib/function/to-string]: https://github.com/stdlib-js/function/tree/main/to-string

<!-- </toc-links> -->

</section>

<!-- /.links -->
