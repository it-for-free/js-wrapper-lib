(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jswl"] = factory();
	else
		root["jswl"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/common.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Общие функции
 * @module Общее
 */

/**
 * Проверит является ли
 * значение null или undefined
 *
 * @param {mixed} value  проверяемое значение
 * @returns {boolean}
 */
var isNullOrUndefined = function isNullOrUndefined(value) {
  return typeof value === "undefined" || value === null;
};
/**
 * Определено ли значение:
 * - тип не "undefined"
 * - не = null
 *
 * @param {mixed} value  проверяемое значение
 * @returns {Boolean}
 */


var isDefined = function isDefined(value) {
  return typeof value !== "undefined" && value !== null;
};
/**
 * Получит фрагмент строки, если её части
 * разделены квадратными скобками в виде массива,
 *  например дпя:
 * people[123][groups][34][2]
 * вернёт массив элементов (строк):
 * [people, 123, groups, 34, 2]
 * -- по факту разбиение идёт по открывающей скобке
 *
 * @param {string} str  строка с фрагментами. окружеными квадратными скобками
 * @returns {array} массив строк
 */


var getSquareBracketedFragments = function getSquareBracketedFragments(str) {
  var nameFrags = str.split('['); // разбиваем по открывающей скобке

  nameFrags.forEach(function (element, index, nameFrags) {
    nameFrags[index] = element.replace(/\]/g, "");
  });
  return nameFrags;
};
/**
 * Получит фрагмент строки фрагмент, если её части разделены квадратными скобками:
 * people[123][groups][34][2]
 * -- для номера 3 вернёт 34
 *
 * @param {string} str  строка с фрагментами. окружеными квадратными скобками
 * @param {int} number  номер фрагмента (начиная с нуля)
 * @returns {string}
 */


var getSquareBracketedFragmentByNumber = function getSquareBracketedFragmentByNumber(str, number) {
  var nameFrags = getSquareBracketedFragments(str);
  return nameFrags[number];
};
/**
 * Проверит, что подстрока входит в данную строку
 * (содержится в строке)
 *
 * @param {string} str    строка
 * @param {string} substr  подстрока
 * @returns {Boolean}
 */


var checkForSubstring = function checkForSubstring(str, substr) {
  return str.indexOf(substr) !== -1;
};
/**
 * Проверит является ли значение объектом
 *
 * @param {mixed} value
 * @returns {Boolean}
 */


var isObject = function isObject(value) {
  return isDefined(value) && _typeof(value) === 'object';
};
/**
 * Проверит является ли объект пустым
 *
 * @param {object} obj
 * @returns {Boolean}
 */


var isObjectEmpty = function isObjectEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
};
/**
 * Проверка на пустоту, пусто если:
 *  - тип = "undefined"
 *  - = null
 *  - = ноль (как сторка или как число)
 *  - = пустой строке
 *  - = пустому массиву
 *  - = false
 *
 * @param {mixed} value  проверяемое значение
 * @returns {Boolean}
 */


var isEmpty = function isEmpty(value) {
  return typeof value === "undefined" || value === null || value === "" || value === 0 || value === "0" || isDefined(value.length) && value.length === 0 //  empty array
  || value === false || isObject(value) && isObjectEmpty(value) //  empty object
  ;
};
/**
 * Если передан объект, то попытается отдать значение поля с именем propertyName
 * иначе вернет defaultValue
 *
 * @param {mixed} obj
 * @param {string} propertyName
 * @param {mixed} defaultValue  что возвращать, на случай если это не объект
 * @returns {mixed}
 */


var getPropIfObjectDefined = function getPropIfObjectDefined(obj, propertyName) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (isObject(obj)) {
    return obj[propertyName];
  } else {
    return defaultValue;
  }
};
/**
 * Тестовый вызов jswl (привет мир)
 * Test jswl exists
 *
 * @returns {undefined}
 */


var hello = function hello() {
  console.log('Hello JSWL! ;)');
};

var common = {
  isNullOrUndefined: isNullOrUndefined,
  isDefined: isDefined,
  isObject: isObject,
  isObjectEmpty: isObjectEmpty,
  isEmpty: isEmpty,
  getPropIfObjectDefined: getPropIfObjectDefined,
  getSquareBracketedFragments: getSquareBracketedFragments,
  getSquareBracketedFragmentByNumber: getSquareBracketedFragmentByNumber,
  checkForSubstring: checkForSubstring,
  hello: hello
};


// CONCATENATED MODULE: ./src/obj.js

/**
 * Функции для работы с объектами
 * @module Объекты
 */

/**
 * Вернет значение из объекта по указанному пути (в качестве разделителей поддерживаются точки)/
 * Использует стандартную obj.hasOwnProperty() для проверки того, что значение реально существует в объекте.
 *
 * @param {object} obj   массив объектов
 * @param {string} path  имя-путь поля по которому ищем,  например 'properties.id' или что то же самое '.properties.id' (в качестве разделителей поддерживает точки)
 * @returns {object}  объект вида {found: bool, value: value} - где поле found показывает было ли определено значение по данному пути
 *  (false если конечного или промежуточного свойства не было) 
 */

var obj_getPropByPath = function getPropByPath(obj, path) {
  var result = {
    found: false,
    value: undefined
  };

  if (path.charAt(0) === '.') {
    // убираем точку вначале
    path = path.substring(1);
  }

  var fragments = path.split('.');
  var value = obj;

  for (var i = 0; i < fragments.length; i++) {
    if (isDefined(value)) {
      result.found = value.hasOwnProperty(fragments[i]) ? true : false;
      value = value[fragments[i]];
    } else {
      result.found = false;
      break;
    }
  }

  if (result.found) {
    result.value = value;
  }

  return result;
};
/**
 * Вернет первый элемент из массива объектов, если указанное свойство этого объекта совпадает с указанным значением
 *
 * @param {object} arr       объект, поля которого также содержат объекты
 * @param {string} path  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)
 * @param {mixed} propValue  значение поля, которое ищем
 * @returns {mixed}
 */

var getObjectPropBySubprop = function getObjectPropBySubprop(obj, subpropName, subpropValue) {
  var result = undefined;
  var foundValue = null;

  for (var prop in obj) {
    foundValue = obj_getPropByPath(obj[prop], subpropName);

    if (foundValue.found && foundValue.value === subpropValue) {
      result = obj[prop];
      break;
    }
  }

  return result;
};
var obj_obj = {
  getPropByPath: obj_getPropByPath,
  getObjectPropBySubprop: getObjectPropBySubprop
};

// CONCATENATED MODULE: ./src/array.js


/**
 * Функции для работы с массивами
 * @module Массивы
 */

/**
 * Проверит содержится ли элемент в массиве
 *
 * @param {mixed} value
 * @param {array} array
 * @param {Boolean} strict - если true - проверка будет проведена в строгом режиме
 * @returns {Boolean}
 */

var array_inArray = function inArray(value, array) {
  var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!isEmpty(strict)) {
    if (typeof strict === 'boolean') {
      if (strict) return !(array.indexOf(value) === -1);
    } else {
      throw new Error('3rd param must be boolean');
    }
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) return true;
  }

  return false;
};
/**
 * Проверит содержится ли хотя бы один элемент из первого массива
 * во втором
 *
 * @param {array} needles массив значений, которые ищем
 * @param {array} array   массив, в котором ищем
 * @returns {Boolean}
 */


var isAnyInArray = function isAnyInArray(needles, array) {
  var result = false;

  for (var i = 0; i < needles.length; i++) {
    if (array_inArray(needles[i], array, true)) {
      result = true;
      break;
    }
  }

  return result;
};
/**
 * Удалит из массива все эелменты в строгом смысле совпадающие с
 * value
 *
 * @param {array} arr
 * @param {mixed} value элемент, равные которому надо удалить из массива
 * @return {Array|JSWrapperLib.removeAllElementsLike.newArr}
 */


var removeAllElementsLike = function removeAllElementsLike(arr, value) {
  var newArr = [];
  arr.forEach(function (currentElement, index, array) {
    if (currentElement !== value) {
      newArr.push(currentElement);
    }
  });
  return newArr;
};
/**
 * Вернет массив, оставив там только уникальные значения
 * ( JavaScript 1.6 / ECMAScript 5)
 * @link https://stackoverflow.com/a/14438954
 *
 * @param {array} arr исходный массив
 * @return {array}
 */


var uniqueArray = function uniqueArray(arr) {
  return Array.from(new Set(arr));
};
/**
 * Проверит, что все элементы массива не пусты (в смысле вызова для каждого jswl.isEmpty())
 *
 * @param {array} value
 * @returns {boolean}
 */


var array_allNotEmpty = function allNotEmpty(arr) {
  var result = true;

  for (var i = 0; i < arr.length; i++) {
    if (isEmpty(arr[i])) {
      result = false;
      break;
    }
  }

  return result;
};
/**
 * Вернет объект вида:
 * { key: key, value: value}, где value - первый элемент из массива объектов arr,
 * если указанное свойство этого объекта propName совпадает с указанным значением propValue
 *
 * @param {array} arr        массив объектов
 * @param {string} propName  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)
 * @param {mixed} propValue  значение поля, которое ищем
 * @returns {object}  в случае неудачного поиска {value: undefiend, key: undefiend}
 */


var array_getArrElementAndIndexByObjectProp = function getArrElementAndIndexByObjectProp(arr, propName, propValue) {
  var result = {
    key: i,
    value: arr[i]
  };
  var foundValue = null;

  for (var i = 0; i < arr.length; i++) {
    foundValue = obj_getPropByPath(arr[i], propName);

    if (foundValue.found && foundValue.value === propValue) {
      result = {
        key: i,
        value: arr[i]
      };
      break;
    }
  }

  return result;
};
/**
 * Вернет первый элемент из массива объектов, если указанное свойство этого объекта совпадает с указанным значением
 *
 * @param {array} arr        массив объектов
 * @param {string} propName  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)
 * @param {mixed} propValue  значение поля, которое ищем
 * @returns {mixed}
 */


var getArrElementByObjectProp = function getArrElementByObjectProp(arr, propName, propValue) {
  var result = array_getArrElementAndIndexByObjectProp(arr, propName, propValue);
  return result ? result.value : result;
};
/**
 * Считает число вложенных подэлементов массива с нужным значением.
 * 
 * Сканирует массив по вложенным элементов вплоть до листьев дерева массива  
 * на нужную глубину определяемые маршрутом subElementPath 
 * и считает количество тех подэлементов, чье значение строго совпадает с neededElementValue
 * 
 * @param {array} arr                 исходный массив, в котором производится поиск
 * @param {string} subElementPath     путь узлам, значение которых нужно проверить 
 * @param {mixed} neededElementValue  значение подэлемента, которе считается подходящим
 * @param {string} arrayDelimeter     строка, которая сигнализирует, что в этом месте дерева лежит массива, по умолчанию = '[]'
 * @returns {result|Object}
 */


var array_countSubElementsWithValue = function countSubElementsWithValue(arr, subElementPath, neededElementValue) {
  var arrayDelimeter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '[]';
  var fragments = subElementPath.split(arrayDelimeter);
  var result = 0;

  if (fragments.length > 0) {
    var firstPathSegment = fragments[0];

    if (fragments.length > 1) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] && arr[i][firstPathSegment]) {
          result += countSubElementsWithValue(arr[i][firstPathSegment], fragments.slice(1).join(arrayDelimeter), neededElementValue);
        }
      }
    } else {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          var byPathResult = obj_getPropByPath(arr[i], firstPathSegment);

          if (byPathResult.found) {
            result += byPathResult.value === neededElementValue ? 1 : 0;
          }
        }
      }
    }
  }

  return result;
};

var array_array = {
  inArray: array_inArray,
  isAnyInArray: isAnyInArray,
  removeAllElementsLike: removeAllElementsLike,
  uniqueArray: uniqueArray,
  allNotEmpty: array_allNotEmpty,
  getArrElementAndIndexByObjectProp: array_getArrElementAndIndexByObjectProp,
  getArrElementByObjectProp: getArrElementByObjectProp,
  countSubElementsWithValue: array_countSubElementsWithValue
};

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(0);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);

// CONCATENATED MODULE: ./src/file.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/**
 * Скачает файл в base64 или получит ошибку в JSON.
 *
 * Попробует выполнить GET запрос на url, если статус в диапазоне 200-299,
 * то передаст ответ в формает blob в successCallback(),
 * иначе передаст json в failCallback.
 * 
 * @param {string} url                 url откуда качать файл
 * @param {function} successCallback   вызов в случае успешной закачки
 * @param {function} failCallback      вызов на случай, если сервер сообщит об ошибке
 */

var downloadBlobOrGetErrorInJson = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/runtime_default.a.mark(function _callee(url, successCallback) {
    var failCallback,
        response,
        _file,
        json,
        _args = arguments;

    return runtime_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            failCallback = _args.length > 2 && _args[2] !== undefined ? _args[2] : function () {};
            _context.next = 3;
            return fetch(url);

          case 3:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 11;
              break;
            }

            _context.next = 7;
            return response.blob();

          case 7:
            _file = _context.sent;
            successCallback(_file);
            _context.next = 15;
            break;

          case 11:
            _context.next = 13;
            return response.json();

          case 13:
            json = _context.sent;
            failCallback(json);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function downloadBlobOrGetErrorInJson(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var file = {
  downloadBlobOrGetErrorInJson: downloadBlobOrGetErrorInJson
};

// CONCATENATED MODULE: ./src/string.js
/**
 * Добавит в начало строки другую строку (префикс), если только это строка уже НЕ начинается с данного префикса.
 * 
 * @param {string} str        к чему прибавляем
 * @param {string} prefixStr  что прибаляем
 * @returns {string}
 */
var addPrefixIfNotExists = function addPrefixIfNotExists(str, prefixStr) {
  var result = str;

  if (!str.startsWith(prefixStr)) {
    result = prefixStr + str;
  }

  return result;
};
/**
 * Удалит из начала строки указанную подстроку, если такая подстрока в начале строки имеется.
 * 
 * @param {string} str        откуда удаляем
 * @param {string} prefixStr  что удаляем
 * @returns {string}
 */

var removePrefixIfExists = function removePrefixIfExists(str, prefixStr) {
  var result = str;

  if (str.startsWith(prefixStr)) {
    result = str.slice(prefixStr.length);
  }

  return result;
};
var str = {
  addPrefixIfNotExists: addPrefixIfNotExists,
  removePrefixIfExists: removePrefixIfExists
};

// CONCATENATED MODULE: ./src/jswl.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var jswl = _objectSpread(_objectSpread({}, common), {}, {
  obj: obj_obj,
  arr: array_array,
  file: file,
  str: str
});

/* harmony default export */ var src_jswl = __webpack_exports__["default"] = (jswl);

/***/ })
/******/ ])["default"];
});