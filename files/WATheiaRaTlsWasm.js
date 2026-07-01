__d(
  "WATheiaRaTlsWasm",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e,
      l = (function () {
        var r =
          typeof document != "undefined" && document.currentScript
            ? document.currentScript.src
            : void 0;
        return function (o) {
          o === void 0 && (o = {});
          var a = o,
            i,
            l;
          ((a.ready = new (e || (e = n("Promise")))(function (e, t) {
            ((i = e), (l = t));
          })),
            [
              "_main",
              "getExceptionMessage",
              "___get_exception_message",
              "_free",
              "_memory",
              "___indirect_function_table",
              "__embind_initialize_bindings",
              "_fflush",
              "onRuntimeInitialized",
            ].forEach(function (e) {
              Object.getOwnPropertyDescriptor(a.ready, e) ||
                Object.defineProperty(a.ready, e, {
                  get: function () {
                    return ue(
                      "You are getting " +
                        e +
                        " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                    );
                  },
                  set: function () {
                    return ue(
                      "You are setting " +
                        e +
                        " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                    );
                  },
                });
            }));
          var s = Object.assign({}, a),
            u = [],
            c = "./this.program",
            d = function (t, n) {
              throw n;
            },
            m = !0,
            p = !1,
            _ = !1,
            f = !1;
          if (a.ENVIRONMENT)
            throw new Error(
              "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)",
            );
          var g = "";
          function h(e) {
            return a.locateFile ? a.locateFile(e, g) : g + e;
          }
          var y, C, b, v;
          if (
            (typeof document != "undefined" &&
              document.currentScript &&
              (g = document.currentScript.src),
            r && (g = r),
            g.indexOf("blob:") !== 0
              ? (g = g.substr(0, g.replace(/[?#].*/, "").lastIndexOf("/") + 1))
              : (g = ""),
            !(typeof window == "object" || typeof importScripts == "function"))
          )
            throw new Error(
              "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
            );
          ((y = function (t) {
            var e = new XMLHttpRequest();
            return (e.open("GET", t, !1), e.send(null), e.responseText);
          }),
            (C = function (t, n, r) {
              var e = new XMLHttpRequest();
              (e.open("GET", t, !0),
                (e.responseType = "arraybuffer"),
                (e.onload = function () {
                  if (e.status == 200 || (e.status == 0 && e.response)) {
                    n(e.response);
                    return;
                  }
                  r();
                }),
                (e.onerror = r),
                e.send(null));
            }),
            (v = function (t) {
              return (document.title = t);
            }));
          var S = a.print || console.log.bind(console),
            R = a.printErr || console.error.bind(console);
          (Object.assign(a, s),
            (s = null),
            Ao(),
            a.arguments && (u = a.arguments),
            Re("arguments", "arguments_"),
            a.thisProgram && (c = a.thisProgram),
            Re("thisProgram", "thisProgram"),
            a.quit && (d = a.quit),
            Re("quit", "quit_"),
            x(
              typeof a.memoryInitializerPrefixURL == "undefined",
              "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead",
            ),
            x(
              typeof a.pthreadMainPrefixURL == "undefined",
              "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead",
            ),
            x(
              typeof a.cdInitializerPrefixURL == "undefined",
              "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead",
            ),
            x(
              typeof a.filePackagePrefixURL == "undefined",
              "Module.filePackagePrefixURL option was removed, use Module.locateFile instead",
            ),
            x(
              typeof a.read == "undefined",
              "Module.read option was removed (modify read_ in JS)",
            ),
            x(
              typeof a.readAsync == "undefined",
              "Module.readAsync option was removed (modify readAsync in JS)",
            ),
            x(
              typeof a.readBinary == "undefined",
              "Module.readBinary option was removed (modify readBinary in JS)",
            ),
            x(
              typeof a.setWindowTitle == "undefined",
              "Module.setWindowTitle option was removed (modify setWindowTitle in JS)",
            ),
            x(
              typeof a.TOTAL_MEMORY == "undefined",
              "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY",
            ),
            Re("asm", "wasmExports"),
            Re("read", "read_"),
            Re("readAsync", "readAsync"),
            Re("readBinary", "readBinary"),
            Re("setWindowTitle", "setWindowTitle"),
            x(
              !p,
              "worker environment detected but not enabled at build time.  Add 'worker' to `-sENVIRONMENT` to enable.",
            ),
            x(
              !_,
              "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.",
            ),
            x(
              !f,
              "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.",
            ));
          var L;
          (a.wasmBinary && (L = a.wasmBinary), Re("wasmBinary", "wasmBinary"));
          var E = a.noExitRuntime || !0;
          (Re("noExitRuntime", "noExitRuntime"),
            typeof WebAssembly != "object" &&
              ue("no native wasm support detected"));
          var k,
            I,
            T = !1,
            D;
          function x(e, t) {
            e || ue("Assertion failed" + (t ? ": " + t : ""));
          }
          var $, P, N, M, w, A, F, O, B, W;
          function q() {
            var e = k.buffer;
            ((a.HEAP8 = $ = new Int8Array(e)),
              (a.HEAP16 = N = new Int16Array(e)),
              (a.HEAP32 = w = new Int32Array(e)),
              (a.HEAPU8 = P = new Uint8Array(e)),
              (a.HEAPU16 = M = new Uint16Array(e)),
              (a.HEAPU32 = A = new Uint32Array(e)),
              (a.HEAPF32 = F = new Float32Array(e)),
              (a.HEAPF64 = W = new Float64Array(e)),
              (a.HEAP64 = O = new BigInt64Array(e)),
              (a.HEAPU64 = B = new BigUint64Array(e)));
          }
          (x(
            !a.STACK_SIZE,
            "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time",
          ),
            x(
              typeof Int32Array != "undefined" &&
                typeof Float64Array != "undefined" &&
                Int32Array.prototype.subarray != null &&
                Int32Array.prototype.set != null,
              "JS engine does not provide full typed array support",
            ),
            x(
              !a.wasmMemory,
              "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally",
            ),
            x(
              !a.INITIAL_MEMORY,
              "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically",
            ));
          var U;
          function V() {
            var e = Zo();
            (x((e & 3) == 0),
              e == 0 && (e += 4),
              (A[e >> 2] = 34821223),
              (A[(e + 4) >> 2] = 2310721022),
              (A[0] = 1668509029));
          }
          function H() {
            if (!T) {
              var e = Zo();
              e == 0 && (e += 4);
              var t = A[e >> 2],
                n = A[(e + 4) >> 2];
              ((t != 34821223 || n != 2310721022) &&
                ue(
                  "Stack overflow! Stack cookie has been overwritten at " +
                    Oe(e) +
                    ", expected hex dwords 0x89BACDFE and 0x2135467, but received " +
                    Oe(n) +
                    " " +
                    Oe(t),
                ),
                A[0] != 1668509029 &&
                  ue(
                    "Runtime error: The application has corrupted its heap memory area (address zero)!",
                  ));
            }
          }
          (function () {
            var e = new Int16Array(1),
              t = new Int8Array(e.buffer);
            if (((e[0] = 25459), t[0] !== 115 || t[1] !== 99))
              throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
          })();
          var G = [],
            z = [],
            j = [],
            K = !1,
            Q = 0;
          function X() {
            if (a.preRun)
              for (
                typeof a.preRun == "function" && (a.preRun = [a.preRun]);
                a.preRun.length;
              )
                Z(a.preRun.shift());
            xe(G);
          }
          function Y() {
            (x(!K),
              (K = !0),
              H(),
              !a.noFSInit && !kt.init.initialized && kt.init(),
              (kt.ignorePermissions = !1),
              dt.init(),
              xe(z));
          }
          function J() {
            if ((H(), a.postRun))
              for (
                typeof a.postRun == "function" && (a.postRun = [a.postRun]);
                a.postRun.length;
              )
                te(a.postRun.shift());
            xe(j);
          }
          function Z(e) {
            G.unshift(e);
          }
          function ee(e) {
            z.unshift(e);
          }
          function te(e) {
            j.unshift(e);
          }
          (x(
            Math.imul,
            "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
          ),
            x(
              Math.fround,
              "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
            ),
            x(
              Math.clz32,
              "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
            ),
            x(
              Math.trunc,
              "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
            ));
          var ne = 0,
            re = null,
            oe = null,
            ae = {};
          function ie(e) {
            for (var t = e; ; ) {
              if (!ae[e]) return e;
              e = t + Math.random();
            }
          }
          function le(e) {
            (ne++,
              a.monitorRunDependencies && a.monitorRunDependencies(ne),
              e
                ? (x(!ae[e]),
                  (ae[e] = 1),
                  re === null &&
                    typeof setInterval != "undefined" &&
                    (re = setInterval(function () {
                      if (T) {
                        (clearInterval(re), (re = null));
                        return;
                      }
                      var e = !1;
                      for (var t in ae)
                        (e ||
                          ((e = !0), R("still waiting on run dependencies:")),
                          R("dependency: " + t));
                      e && R("(end of list)");
                    }, 1e4)))
                : R("warning: run dependency added without ID"));
          }
          function se(e) {
            if (
              (ne--,
              a.monitorRunDependencies && a.monitorRunDependencies(ne),
              e
                ? (x(ae[e]), delete ae[e])
                : R("warning: run dependency removed without ID"),
              ne == 0 && (re !== null && (clearInterval(re), (re = null)), oe))
            ) {
              var t = oe;
              ((oe = null), t());
            }
          }
          function ue(e) {
            (a.onAbort && a.onAbort(e),
              (e = "Aborted(" + e + ")"),
              R(e),
              (T = !0),
              (D = 1));
            var t = new WebAssembly.RuntimeError(e);
            throw (l(t), t);
          }
          var ce = "data:application/octet-stream;base64,";
          function de(e) {
            return e.startsWith(ce);
          }
          function me(e) {
            return e.startsWith("file://");
          }
          function pe(e) {
            return function () {
              x(
                K,
                "native function `" +
                  e +
                  "` called before runtime initialization",
              );
              var t = I[e];
              return (
                x(t, "exported native function `" + e + "` not found"),
                t.apply(null, arguments)
              );
            };
          }
          var _e = (function (e) {
              "use strict";
              function t() {
                return e.apply(this, arguments) || this;
              }
              return (babelHelpers.inheritsLoose(t, e), t);
            })(babelHelpers.wrapNativeSuper(Error)),
            fe = (function (e) {
              "use strict";
              function t() {
                return e.apply(this, arguments) || this;
              }
              return (babelHelpers.inheritsLoose(t, e), t);
            })(_e),
            ge = (function (e) {
              "use strict";
              function t(t) {
                var n;
                ((n = e.call(this, t) || this), (n.excPtr = t));
                var r = Ae(t);
                return ((n.name = r[0]), (n.message = r[1]), n);
              }
              return (babelHelpers.inheritsLoose(t, e), t);
            })(_e),
            he;
          ((he = "theia_ratls_wasm.wasm"), de(he) || (he = h(he)));
          function ye(e) {
            if (e == he && L) return new Uint8Array(L);
            if (b) return b(e);
            throw "both async and sync fetching of the wasm failed";
          }
          function Ce(t) {
            return !L && (m || p) && typeof fetch == "function"
              ? fetch(t, { credentials: "same-origin" })
                  .then(function (e) {
                    if (!e.ok)
                      throw "failed to load wasm binary file at '" + t + "'";
                    return e.arrayBuffer();
                  })
                  .catch(function () {
                    return ye(t);
                  })
              : (e || (e = n("Promise"))).resolve().then(function () {
                  return ye(t);
                });
          }
          function be(e, t, n) {
            return Ce(e)
              .then(function (e) {
                return WebAssembly.instantiate(e, t);
              })
              .then(function (e) {
                return e;
              })
              .then(n, function (e) {
                (R("failed to asynchronously prepare wasm: " + e),
                  me(he) &&
                    R(
                      "warning: Loading from a file URI (" +
                        he +
                        ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing",
                    ),
                  ue(e));
              });
          }
          function ve(e, t, n, r) {
            return !e &&
              typeof WebAssembly.instantiateStreaming == "function" &&
              !de(t) &&
              typeof fetch == "function"
              ? fetch(t, { credentials: "same-origin" }).then(function (e) {
                  var o = WebAssembly.instantiateStreaming(e, n);
                  return o.then(r, function (e) {
                    return (
                      R("wasm streaming compile failed: " + e),
                      R("falling back to ArrayBuffer instantiation"),
                      be(t, n, r)
                    );
                  });
                })
              : be(t, n, r);
          }
          function Se() {
            var e = { env: Fo, wasi_snapshot_preview1: Fo };
            function t(e, t) {
              var n = e.exports;
              return (
                (I = n),
                (k = I.memory),
                x(k, "memory not found in wasm exports"),
                q(),
                (U = I.__indirect_function_table),
                x(U, "table not found in wasm exports"),
                ee(I.__wasm_call_ctors),
                se("wasm-instantiate"),
                n
              );
            }
            le("wasm-instantiate");
            var n = a;
            function r(e) {
              (x(
                a === n,
                "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?",
              ),
                (n = null),
                t(e.instance));
            }
            if (a.instantiateWasm)
              try {
                return a.instantiateWasm(e, t);
              } catch (e) {
                (R("Module.instantiateWasm callback failed with error: " + e),
                  l(e));
              }
            return (ve(L, he, e, r).catch(l), {});
          }
          function Re(e, t, n) {
            (n === void 0 && (n = !0),
              Object.getOwnPropertyDescriptor(a, e) ||
                Object.defineProperty(a, e, {
                  configurable: !0,
                  get: function () {
                    var r = n
                      ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
                      : "";
                    ue(
                      "`Module." + e + "` has been replaced by `" + t + "`" + r,
                    );
                  },
                }));
          }
          function Le(e) {
            Object.getOwnPropertyDescriptor(a, e) &&
              ue(
                "`Module." +
                  e +
                  "` was supplied but `" +
                  e +
                  "` not included in INCOMING_MODULE_JS_API",
              );
          }
          function Ee(e) {
            return (
              e === "FS_createPath" ||
              e === "FS_createDataFile" ||
              e === "FS_createPreloadedFile" ||
              e === "FS_unlink" ||
              e === "addRunDependency" ||
              e === "FS_createLazyFile" ||
              e === "FS_createDevice" ||
              e === "removeRunDependency"
            );
          }
          function ke(e, t) {
            typeof globalThis != "undefined" &&
              Object.defineProperty(globalThis, e, {
                configurable: !0,
                get: function () {
                  We("`" + e + "` is not longer defined by emscripten. " + t);
                },
              });
          }
          ke("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
          function Ie(e) {
            (typeof globalThis != "undefined" &&
              !Object.getOwnPropertyDescriptor(globalThis, e) &&
              Object.defineProperty(globalThis, e, {
                configurable: !0,
                get: function () {
                  var t =
                      "`" +
                      e +
                      "` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line",
                    n = e;
                  (n.startsWith("_") || (n = "$" + e),
                    (t +=
                      " (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='" + n + "')"),
                    Ee(e) &&
                      (t +=
                        ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
                    We(t));
                },
              }),
              Te(e));
          }
          function Te(e) {
            Object.getOwnPropertyDescriptor(a, e) ||
              Object.defineProperty(a, e, {
                configurable: !0,
                get: function () {
                  var t =
                    "'" +
                    e +
                    "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)";
                  (Ee(e) &&
                    (t +=
                      ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
                    ue(t));
                },
              });
          }
          function De(e) {
            ((this.name = "ExitStatus"),
              (this.message = "Program terminated with exit(" + e + ")"),
              (this.status = e));
          }
          var xe = function (t) {
              for (; t.length > 0; ) t.shift()(a);
            },
            $e = function (t) {
              var e = ea(),
                n = t();
              return (ta(e), n);
            },
            Pe =
              typeof TextDecoder != "undefined"
                ? new TextDecoder("utf8")
                : void 0,
            Ne = function (t, n, r) {
              for (var e = n + r, o = n; t[o] && !(o >= e); ) ++o;
              if (o - n > 16 && t.buffer && Pe)
                return Pe.decode(t.subarray(n, o));
              for (var a = ""; n < o; ) {
                var i = t[n++];
                if (!(i & 128)) {
                  a += String.fromCharCode(i);
                  continue;
                }
                var l = t[n++] & 63;
                if ((i & 224) == 192) {
                  a += String.fromCharCode(((i & 31) << 6) | l);
                  continue;
                }
                var s = t[n++] & 63;
                if (
                  ((i & 240) == 224
                    ? (i = ((i & 15) << 12) | (l << 6) | s)
                    : ((i & 248) != 240 &&
                        We(
                          "Invalid UTF-8 leading byte " +
                            Oe(i) +
                            " encountered when deserializing a UTF-8 string in wasm memory to a JS string!",
                        ),
                      (i =
                        ((i & 7) << 18) |
                        (l << 12) |
                        (s << 6) |
                        (t[n++] & 63))),
                  i < 65536)
                )
                  a += String.fromCharCode(i);
                else {
                  var u = i - 65536;
                  a += String.fromCharCode(
                    55296 | (u >> 10),
                    56320 | (u & 1023),
                  );
                }
              }
              return a;
            },
            Me = function (t, n) {
              return (x(typeof t == "number"), t ? Ne(P, t, n) : "");
            },
            we = function (t) {
              return $e(function () {
                var e = na(4),
                  n = na(4);
                ia(t, e, n);
                var r = A[e >> 2],
                  o = A[n >> 2],
                  a = Me(r);
                Uo(r);
                var i;
                return (o && ((i = Me(o)), Uo(o)), [a, i]);
              });
            };
          function Ae(e) {
            return we(e);
          }
          a.getExceptionMessage = Ae;
          function Fe(e, t) {
            switch (
              (t === void 0 && (t = "i8"), t.endsWith("*") && (t = "*"), t)
            ) {
              case "i1":
                return $[e >> 0];
              case "i8":
                return $[e >> 0];
              case "i16":
                return N[e >> 1];
              case "i32":
                return w[e >> 2];
              case "i64":
                return O[e >> 3];
              case "float":
                return F[e >> 2];
              case "double":
                return W[e >> 3];
              case "*":
                return A[e >> 2];
              default:
                ue("invalid type for getValue: " + t);
            }
          }
          var Oe = function (t) {
            return (
              x(typeof t == "number"),
              (t >>>= 0),
              "0x" + t.toString(16).padStart(8, "0")
            );
          };
          function Be(e, t, n) {
            switch (
              (n === void 0 && (n = "i8"), n.endsWith("*") && (n = "*"), n)
            ) {
              case "i1":
                $[e >> 0] = t;
                break;
              case "i8":
                $[e >> 0] = t;
                break;
              case "i16":
                N[e >> 1] = t;
                break;
              case "i32":
                w[e >> 2] = t;
                break;
              case "i64":
                O[e >> 3] = BigInt(t);
                break;
              case "float":
                F[e >> 2] = t;
                break;
              case "double":
                W[e >> 3] = t;
                break;
              case "*":
                A[e >> 2] = t;
                break;
              default:
                ue("invalid type for setValue: " + n);
            }
          }
          var We = function (t) {
              (We.shown || (We.shown = {}),
                We.shown[t] || ((We.shown[t] = 1), R(t)));
            },
            qe = function (t, n, r, o) {
              ue(
                "Assertion failed: " +
                  Me(t) +
                  ", at: " +
                  [
                    n ? Me(n) : "unknown filename",
                    r,
                    o ? Me(o) : "unknown function",
                  ],
              );
            },
            Ue = [],
            Ve = 0;
          function He(e) {
            var t = new je(e);
            return (
              t.get_caught() || (t.set_caught(!0), Ve--),
              t.set_rethrown(!1),
              Ue.push(t),
              aa(t.excPtr),
              t.get_exception_ptr()
            );
          }
          var Ge = 0;
          function ze() {
            (Ko(0, 0), x(Ue.length > 0));
            var e = Ue.pop();
            (oa(e.excPtr), (Ge = 0));
          }
          function je(e) {
            ((this.excPtr = e),
              (this.ptr = e - 24),
              (this.set_type = function (e) {
                A[(this.ptr + 4) >> 2] = e;
              }),
              (this.get_type = function () {
                return A[(this.ptr + 4) >> 2];
              }),
              (this.set_destructor = function (e) {
                A[(this.ptr + 8) >> 2] = e;
              }),
              (this.get_destructor = function () {
                return A[(this.ptr + 8) >> 2];
              }),
              (this.set_caught = function (e) {
                ((e = e ? 1 : 0), ($[(this.ptr + 12) >> 0] = e));
              }),
              (this.get_caught = function () {
                return $[(this.ptr + 12) >> 0] != 0;
              }),
              (this.set_rethrown = function (e) {
                ((e = e ? 1 : 0), ($[(this.ptr + 13) >> 0] = e));
              }),
              (this.get_rethrown = function () {
                return $[(this.ptr + 13) >> 0] != 0;
              }),
              (this.init = function (e, t) {
                (this.set_adjusted_ptr(0),
                  this.set_type(e),
                  this.set_destructor(t));
              }),
              (this.set_adjusted_ptr = function (e) {
                A[(this.ptr + 16) >> 2] = e;
              }),
              (this.get_adjusted_ptr = function () {
                return A[(this.ptr + 16) >> 2];
              }),
              (this.get_exception_ptr = function () {
                var e = sa(this.get_type());
                if (e) return A[this.excPtr >> 2];
                var t = this.get_adjusted_ptr();
                return t !== 0 ? t : this.excPtr;
              }));
          }
          function Ke(e) {
            throw (Ge || (Ge = new ge(e)), Ge);
          }
          var Qe = function (t) {
              var e = Ge && Ge.excPtr;
              if (!e) return (Qo(0), 0);
              var n = new je(e);
              n.set_adjusted_ptr(e);
              var r = n.get_type();
              if (!r) return (Qo(0), e);
              for (var o in t) {
                var a = t[o];
                if (a === 0 || a === r) break;
                var i = n.ptr + 16;
                if (la(a, r, i)) return (Qo(a), e);
              }
              return (Qo(r), e);
            },
            Xe = function () {
              return Qe([]);
            },
            Ye = function (t) {
              return Qe([t]);
            };
          function Je() {
            var e = Ue.pop();
            e || ue("no exception to throw");
            var t = e.excPtr;
            throw (
              e.get_rethrown() ||
                (Ue.push(e), e.set_rethrown(!0), e.set_caught(!1), Ve++),
              (Ge = new ge(t)),
              Ge
            );
          }
          function Ze(e, t, n) {
            var r = new je(e);
            throw (r.init(t, n), (Ge = new ge(e)), Ve++, Ge);
          }
          function et() {
            return Ve;
          }
          var tt = function (t) {
              return ((w[Vo() >> 2] = t), t);
            },
            nt = {
              isAbs: function (t) {
                return t.charAt(0) === "/";
              },
              splitPath: function (t) {
                var e =
                  /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                return e.exec(t).slice(1);
              },
              normalizeArray: function (t, n) {
                for (var e = 0, r = t.length - 1; r >= 0; r--) {
                  var o = t[r];
                  o === "."
                    ? t.splice(r, 1)
                    : o === ".."
                      ? (t.splice(r, 1), e++)
                      : e && (t.splice(r, 1), e--);
                }
                if (n) for (; e; e--) t.unshift("..");
                return t;
              },
              normalize: function (t) {
                var e = nt.isAbs(t),
                  n = t.substr(-1) === "/";
                return (
                  (t = nt
                    .normalizeArray(
                      t.split("/").filter(function (e) {
                        return !!e;
                      }),
                      !e,
                    )
                    .join("/")),
                  !t && !e && (t = "."),
                  t && n && (t += "/"),
                  (e ? "/" : "") + t
                );
              },
              dirname: function (t) {
                var e = nt.splitPath(t),
                  n = e[0],
                  r = e[1];
                return !n && !r
                  ? "."
                  : (r && (r = r.substr(0, r.length - 1)), n + r);
              },
              basename: function (t) {
                if (t === "/") return "/";
                ((t = nt.normalize(t)), (t = t.replace(/\/$/, "")));
                var e = t.lastIndexOf("/");
                return e === -1 ? t : t.substr(e + 1);
              },
              join: function () {
                var e = Array.prototype.slice.call(arguments);
                return nt.normalize(e.join("/"));
              },
              join2: function (t, n) {
                return nt.normalize(t + "/" + n);
              },
            },
            rt = function () {
              if (
                typeof crypto == "object" &&
                typeof crypto.getRandomValues == "function"
              )
                return function (e) {
                  return crypto.getRandomValues(e);
                };
              ue(
                "no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };",
              );
            },
            ot = function (t) {
              return (ot = rt())(t);
            },
            at = {
              resolve: function () {
                for (
                  var e = "", t = !1, n = arguments.length - 1;
                  n >= -1 && !t;
                  n--
                ) {
                  var r = n >= 0 ? arguments[n] : kt.cwd();
                  if (typeof r != "string")
                    throw new TypeError(
                      "Arguments to path.resolve must be strings",
                    );
                  if (!r) return "";
                  ((e = r + "/" + e), (t = nt.isAbs(r)));
                }
                return (
                  (e = nt
                    .normalizeArray(
                      e.split("/").filter(function (e) {
                        return !!e;
                      }),
                      !t,
                    )
                    .join("/")),
                  (t ? "/" : "") + e || "."
                );
              },
              relative: function (t, n) {
                ((t = at.resolve(t).substr(1)), (n = at.resolve(n).substr(1)));
                function e(e) {
                  for (var t = 0; t < e.length && e[t] === ""; t++);
                  for (var n = e.length - 1; n >= 0 && e[n] === ""; n--);
                  return t > n ? [] : e.slice(t, n - t + 1);
                }
                for (
                  var r = e(t.split("/")),
                    o = e(n.split("/")),
                    a = Math.min(r.length, o.length),
                    i = a,
                    l = 0;
                  l < a;
                  l++
                )
                  if (r[l] !== o[l]) {
                    i = l;
                    break;
                  }
                for (var s = [], l = i; l < r.length; l++) s.push("..");
                return ((s = s.concat(o.slice(i))), s.join("/"));
              },
            },
            it = [],
            lt = function (t) {
              for (var e = 0, n = 0; n < t.length; ++n) {
                var r = t.charCodeAt(n);
                r <= 127
                  ? e++
                  : r <= 2047
                    ? (e += 2)
                    : r >= 55296 && r <= 57343
                      ? ((e += 4), ++n)
                      : (e += 3);
              }
              return e;
            },
            st = function (t, n, r, o) {
              if ((x(typeof t == "string"), !(o > 0))) return 0;
              for (var e = r, a = r + o - 1, i = 0; i < t.length; ++i) {
                var l = t.charCodeAt(i);
                if (l >= 55296 && l <= 57343) {
                  var s = t.charCodeAt(++i);
                  l = (65536 + ((l & 1023) << 10)) | (s & 1023);
                }
                if (l <= 127) {
                  if (r >= a) break;
                  n[r++] = l;
                } else if (l <= 2047) {
                  if (r + 1 >= a) break;
                  ((n[r++] = 192 | (l >> 6)), (n[r++] = 128 | (l & 63)));
                } else if (l <= 65535) {
                  if (r + 2 >= a) break;
                  ((n[r++] = 224 | (l >> 12)),
                    (n[r++] = 128 | ((l >> 6) & 63)),
                    (n[r++] = 128 | (l & 63)));
                } else {
                  if (r + 3 >= a) break;
                  (l > 1114111 &&
                    We(
                      "Invalid Unicode code point " +
                        Oe(l) +
                        " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).",
                    ),
                    (n[r++] = 240 | (l >> 18)),
                    (n[r++] = 128 | ((l >> 12) & 63)),
                    (n[r++] = 128 | ((l >> 6) & 63)),
                    (n[r++] = 128 | (l & 63)));
                }
              }
              return ((n[r] = 0), r - e);
            };
          function ut(e, t, n) {
            var r = n > 0 ? n : lt(e) + 1,
              o = new Array(r),
              a = st(e, o, 0, o.length);
            return (t && (o.length = a), o);
          }
          var ct = function () {
              if (!it.length) {
                var e = null;
                if (
                  (typeof window != "undefined" &&
                  typeof window.prompt == "function"
                    ? ((e = window.prompt("Input: ")),
                      e !== null && (e += "\n"))
                    : typeof readline == "function" &&
                      ((e = readline()), e !== null && (e += "\n")),
                  !e)
                )
                  return null;
                it = ut(e, !0);
              }
              return it.shift();
            },
            dt = {
              ttys: [],
              init: function () {},
              shutdown: function () {},
              register: function (t, n) {
                ((dt.ttys[t] = { input: [], output: [], ops: n }),
                  kt.registerDevice(t, dt.stream_ops));
              },
              stream_ops: {
                open: function (t) {
                  var e = dt.ttys[t.node.rdev];
                  if (!e) throw new kt.ErrnoError(43);
                  ((t.tty = e), (t.seekable = !1));
                },
                close: function (t) {
                  t.tty.ops.fsync(t.tty);
                },
                fsync: function (t) {
                  t.tty.ops.fsync(t.tty);
                },
                read: function (t, n, r, o, a) {
                  if (!t.tty || !t.tty.ops.get_char)
                    throw new kt.ErrnoError(60);
                  for (var e = 0, i = 0; i < o; i++) {
                    var l;
                    try {
                      l = t.tty.ops.get_char(t.tty);
                    } catch (e) {
                      throw new kt.ErrnoError(29);
                    }
                    if (l === void 0 && e === 0) throw new kt.ErrnoError(6);
                    if (l == null) break;
                    (e++, (n[r + i] = l));
                  }
                  return (e && (t.node.timestamp = Date.now()), e);
                },
                write: function (t, n, r, o, a) {
                  if (!t.tty || !t.tty.ops.put_char)
                    throw new kt.ErrnoError(60);
                  try {
                    for (var e = 0; e < o; e++)
                      t.tty.ops.put_char(t.tty, n[r + e]);
                  } catch (e) {
                    throw new kt.ErrnoError(29);
                  }
                  return (o && (t.node.timestamp = Date.now()), e);
                },
              },
              default_tty_ops: {
                get_char: function (t) {
                  return ct();
                },
                put_char: function (t, n) {
                  n === null || n === 10
                    ? (S(Ne(t.output, 0)), (t.output = []))
                    : n != 0 && t.output.push(n);
                },
                fsync: function (t) {
                  t.output &&
                    t.output.length > 0 &&
                    (S(Ne(t.output, 0)), (t.output = []));
                },
                ioctl_tcgets: function (t) {
                  return {
                    c_iflag: 25856,
                    c_oflag: 5,
                    c_cflag: 191,
                    c_lflag: 35387,
                    c_cc: [
                      3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ],
                  };
                },
                ioctl_tcsets: function (t, n, r) {
                  return 0;
                },
                ioctl_tiocgwinsz: function (t) {
                  return [24, 80];
                },
              },
              default_tty1_ops: {
                put_char: function (t, n) {
                  n === null || n === 10
                    ? (R(Ne(t.output, 0)), (t.output = []))
                    : n != 0 && t.output.push(n);
                },
                fsync: function (t) {
                  t.output &&
                    t.output.length > 0 &&
                    (R(Ne(t.output, 0)), (t.output = []));
                },
              },
            },
            mt = function (t, n) {
              return (P.fill(0, t, t + n), t);
            },
            pt = function (t, n) {
              return (
                x(n, "alignment argument is required"),
                Math.ceil(t / n) * n
              );
            },
            _t = function (t) {
              t = pt(t, 65536);
              var e = jo(65536, t);
              return e ? mt(e, t) : 0;
            },
            ft = {
              ops_table: null,
              mount: function (t) {
                return ft.createNode(null, "/", 16895, 0);
              },
              createNode: function (t, n, r, o) {
                if (kt.isBlkdev(r) || kt.isFIFO(r)) throw new kt.ErrnoError(63);
                ft.ops_table ||
                  (ft.ops_table = {
                    dir: {
                      node: {
                        getattr: ft.node_ops.getattr,
                        setattr: ft.node_ops.setattr,
                        lookup: ft.node_ops.lookup,
                        mknod: ft.node_ops.mknod,
                        rename: ft.node_ops.rename,
                        unlink: ft.node_ops.unlink,
                        rmdir: ft.node_ops.rmdir,
                        readdir: ft.node_ops.readdir,
                        symlink: ft.node_ops.symlink,
                      },
                      stream: { llseek: ft.stream_ops.llseek },
                    },
                    file: {
                      node: {
                        getattr: ft.node_ops.getattr,
                        setattr: ft.node_ops.setattr,
                      },
                      stream: {
                        llseek: ft.stream_ops.llseek,
                        read: ft.stream_ops.read,
                        write: ft.stream_ops.write,
                        allocate: ft.stream_ops.allocate,
                        mmap: ft.stream_ops.mmap,
                        msync: ft.stream_ops.msync,
                      },
                    },
                    link: {
                      node: {
                        getattr: ft.node_ops.getattr,
                        setattr: ft.node_ops.setattr,
                        readlink: ft.node_ops.readlink,
                      },
                      stream: {},
                    },
                    chrdev: {
                      node: {
                        getattr: ft.node_ops.getattr,
                        setattr: ft.node_ops.setattr,
                      },
                      stream: kt.chrdev_stream_ops,
                    },
                  });
                var e = kt.createNode(t, n, r, o);
                return (
                  kt.isDir(e.mode)
                    ? ((e.node_ops = ft.ops_table.dir.node),
                      (e.stream_ops = ft.ops_table.dir.stream),
                      (e.contents = {}))
                    : kt.isFile(e.mode)
                      ? ((e.node_ops = ft.ops_table.file.node),
                        (e.stream_ops = ft.ops_table.file.stream),
                        (e.usedBytes = 0),
                        (e.contents = null))
                      : kt.isLink(e.mode)
                        ? ((e.node_ops = ft.ops_table.link.node),
                          (e.stream_ops = ft.ops_table.link.stream))
                        : kt.isChrdev(e.mode) &&
                          ((e.node_ops = ft.ops_table.chrdev.node),
                          (e.stream_ops = ft.ops_table.chrdev.stream)),
                  (e.timestamp = Date.now()),
                  t && ((t.contents[n] = e), (t.timestamp = e.timestamp)),
                  e
                );
              },
              getFileDataAsTypedArray: function (t) {
                return t.contents
                  ? t.contents.subarray
                    ? t.contents.subarray(0, t.usedBytes)
                    : new Uint8Array(t.contents)
                  : new Uint8Array(0);
              },
              expandFileStorage: function (t, n) {
                var e = t.contents ? t.contents.length : 0;
                if (!(e >= n)) {
                  var r = 1024 * 1024;
                  ((n = Math.max(n, (e * (e < r ? 2 : 1.125)) >>> 0)),
                    e != 0 && (n = Math.max(n, 256)));
                  var o = t.contents;
                  ((t.contents = new Uint8Array(n)),
                    t.usedBytes > 0 &&
                      t.contents.set(o.subarray(0, t.usedBytes), 0));
                }
              },
              resizeFileStorage: function (t, n) {
                if (t.usedBytes != n)
                  if (n == 0) ((t.contents = null), (t.usedBytes = 0));
                  else {
                    var e = t.contents;
                    ((t.contents = new Uint8Array(n)),
                      e &&
                        t.contents.set(e.subarray(0, Math.min(n, t.usedBytes))),
                      (t.usedBytes = n));
                  }
              },
              node_ops: {
                getattr: function (t) {
                  var e = {};
                  return (
                    (e.dev = kt.isChrdev(t.mode) ? t.id : 1),
                    (e.ino = t.id),
                    (e.mode = t.mode),
                    (e.nlink = 1),
                    (e.uid = 0),
                    (e.gid = 0),
                    (e.rdev = t.rdev),
                    kt.isDir(t.mode)
                      ? (e.size = 4096)
                      : kt.isFile(t.mode)
                        ? (e.size = t.usedBytes)
                        : kt.isLink(t.mode)
                          ? (e.size = t.link.length)
                          : (e.size = 0),
                    (e.atime = new Date(t.timestamp)),
                    (e.mtime = new Date(t.timestamp)),
                    (e.ctime = new Date(t.timestamp)),
                    (e.blksize = 4096),
                    (e.blocks = Math.ceil(e.size / e.blksize)),
                    e
                  );
                },
                setattr: function (t, n) {
                  (n.mode !== void 0 && (t.mode = n.mode),
                    n.timestamp !== void 0 && (t.timestamp = n.timestamp),
                    n.size !== void 0 && ft.resizeFileStorage(t, n.size));
                },
                lookup: function (t, n) {
                  throw kt.genericErrors[44];
                },
                mknod: function (t, n, r, o) {
                  return ft.createNode(t, n, r, o);
                },
                rename: function (t, n, r) {
                  if (kt.isDir(t.mode)) {
                    var e;
                    try {
                      e = kt.lookupNode(n, r);
                    } catch (e) {}
                    if (e)
                      for (var o in e.contents) throw new kt.ErrnoError(55);
                  }
                  (delete t.parent.contents[t.name],
                    (t.parent.timestamp = Date.now()),
                    (t.name = r),
                    (n.contents[r] = t),
                    (n.timestamp = t.parent.timestamp),
                    (t.parent = n));
                },
                unlink: function (t, n) {
                  (delete t.contents[n], (t.timestamp = Date.now()));
                },
                rmdir: function (t, n) {
                  var e = kt.lookupNode(t, n);
                  for (var r in e.contents) throw new kt.ErrnoError(55);
                  (delete t.contents[n], (t.timestamp = Date.now()));
                },
                readdir: function (t) {
                  var e = [".", ".."];
                  for (var n in t.contents)
                    Object.prototype.hasOwnProperty.call(t.contents, n) &&
                      e.push(n);
                  return e;
                },
                symlink: function (t, n, r) {
                  var e = ft.createNode(t, n, 41471, 0);
                  return ((e.link = r), e);
                },
                readlink: function (t) {
                  if (!kt.isLink(t.mode)) throw new kt.ErrnoError(28);
                  return t.link;
                },
              },
              stream_ops: {
                read: function (t, n, r, o, a) {
                  var e = t.node.contents;
                  if (a >= t.node.usedBytes) return 0;
                  var i = Math.min(t.node.usedBytes - a, o);
                  if ((x(i >= 0), i > 8 && e.subarray))
                    n.set(e.subarray(a, a + i), r);
                  else for (var l = 0; l < i; l++) n[r + l] = e[a + l];
                  return i;
                },
                write: function (t, n, r, o, a, i) {
                  if (
                    (x(!(n instanceof ArrayBuffer)),
                    n.buffer === $.buffer && (i = !1),
                    !o)
                  )
                    return 0;
                  var e = t.node;
                  if (
                    ((e.timestamp = Date.now()),
                    n.subarray && (!e.contents || e.contents.subarray))
                  ) {
                    if (i)
                      return (
                        x(
                          a === 0,
                          "canOwn must imply no weird position inside the file",
                        ),
                        (e.contents = n.subarray(r, r + o)),
                        (e.usedBytes = o),
                        o
                      );
                    if (e.usedBytes === 0 && a === 0)
                      return (
                        (e.contents = n.slice(r, r + o)),
                        (e.usedBytes = o),
                        o
                      );
                    if (a + o <= e.usedBytes)
                      return (e.contents.set(n.subarray(r, r + o), a), o);
                  }
                  if (
                    (ft.expandFileStorage(e, a + o),
                    e.contents.subarray && n.subarray)
                  )
                    e.contents.set(n.subarray(r, r + o), a);
                  else for (var l = 0; l < o; l++) e.contents[a + l] = n[r + l];
                  return ((e.usedBytes = Math.max(e.usedBytes, a + o)), o);
                },
                llseek: function (t, n, r) {
                  var e = n;
                  if (
                    (r === 1
                      ? (e += t.position)
                      : r === 2 &&
                        kt.isFile(t.node.mode) &&
                        (e += t.node.usedBytes),
                    e < 0)
                  )
                    throw new kt.ErrnoError(28);
                  return e;
                },
                allocate: function (t, n, r) {
                  (ft.expandFileStorage(t.node, n + r),
                    (t.node.usedBytes = Math.max(t.node.usedBytes, n + r)));
                },
                mmap: function (t, n, r, o, a) {
                  if (!kt.isFile(t.node.mode)) throw new kt.ErrnoError(43);
                  var e,
                    i,
                    l = t.node.contents;
                  if (!(a & 2) && l.buffer === $.buffer)
                    ((i = !1), (e = l.byteOffset));
                  else {
                    if (
                      ((r > 0 || r + n < l.length) &&
                        (l.subarray
                          ? (l = l.subarray(r, r + n))
                          : (l = Array.prototype.slice.call(l, r, r + n))),
                      (i = !0),
                      (e = _t(n)),
                      !e)
                    )
                      throw new kt.ErrnoError(48);
                    $.set(l, e);
                  }
                  return { ptr: e, allocated: i };
                },
                msync: function (t, n, r, o, a) {
                  return (ft.stream_ops.write(t, n, 0, o, r, !1), 0);
                },
              },
            },
            gt = function (t, n, r, o) {
              var e = o ? "" : ie("al " + t);
              (C(
                t,
                function (r) {
                  (x(
                    r,
                    'Loading data file "' + t + '" failed (no arrayBuffer).',
                  ),
                    n(new Uint8Array(r)),
                    e && se(e));
                },
                function (e) {
                  if (r) r();
                  else throw 'Loading data file "' + t + '" failed.';
                },
              ),
                e && le(e));
            },
            ht = a.preloadPlugins || [];
          function yt(e, t, n, r) {
            typeof Browser != "undefined" && Browser.init();
            var o = !1;
            return (
              ht.forEach(function (a) {
                o || (a.canHandle(t) && (a.handle(e, t, n, r), (o = !0)));
              }),
              o
            );
          }
          function Ct(e, t, n, r, o, a, i, l, s, u) {
            var c = t ? at.resolve(nt.join2(e, t)) : e,
              d = ie("cp " + c);
            function m(n) {
              function m(n) {
                (u && u(),
                  l || kt.createDataFile(e, t, n, r, o, s),
                  a && a(),
                  se(d));
              }
              yt(n, c, m, function () {
                (i && i(), se(d));
              }) || m(n);
            }
            (le(d),
              typeof n == "string"
                ? gt(
                    n,
                    function (e) {
                      return m(e);
                    },
                    i,
                  )
                : m(n));
          }
          function bt(e) {
            var t = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
              n = t[e];
            if (typeof n == "undefined")
              throw new Error("Unknown file open mode: " + e);
            return n;
          }
          function vt(e, t) {
            var n = 0;
            return (e && (n |= 365), t && (n |= 146), n);
          }
          var St = {
              0: "Success",
              1: "Arg list too long",
              2: "Permission denied",
              3: "Address already in use",
              4: "Address not available",
              5: "Address family not supported by protocol family",
              6: "No more processes",
              7: "Socket already connected",
              8: "Bad file number",
              9: "Trying to read unreadable message",
              10: "Mount device busy",
              11: "Operation canceled",
              12: "No children",
              13: "Connection aborted",
              14: "Connection refused",
              15: "Connection reset by peer",
              16: "File locking deadlock error",
              17: "Destination address required",
              18: "Math arg out of domain of func",
              19: "Quota exceeded",
              20: "File exists",
              21: "Bad address",
              22: "File too large",
              23: "Host is unreachable",
              24: "Identifier removed",
              25: "Illegal byte sequence",
              26: "Connection already in progress",
              27: "Interrupted system call",
              28: "Invalid argument",
              29: "I/O error",
              30: "Socket is already connected",
              31: "Is a directory",
              32: "Too many symbolic links",
              33: "Too many open files",
              34: "Too many links",
              35: "Message too long",
              36: "Multihop attempted",
              37: "File or path name too long",
              38: "Network interface is not configured",
              39: "Connection reset by network",
              40: "Network is unreachable",
              41: "Too many open files in system",
              42: "No buffer space available",
              43: "No such device",
              44: "No such file or directory",
              45: "Exec format error",
              46: "No record locks available",
              47: "The link has been severed",
              48: "Not enough core",
              49: "No message of desired type",
              50: "Protocol not available",
              51: "No space left on device",
              52: "Function not implemented",
              53: "Socket is not connected",
              54: "Not a directory",
              55: "Directory not empty",
              56: "State not recoverable",
              57: "Socket operation on non-socket",
              59: "Not a typewriter",
              60: "No such device or address",
              61: "Value too large for defined data type",
              62: "Previous owner died",
              63: "Not super-user",
              64: "Broken pipe",
              65: "Protocol error",
              66: "Unknown protocol",
              67: "Protocol wrong type for socket",
              68: "Math result not representable",
              69: "Read only file system",
              70: "Illegal seek",
              71: "No such process",
              72: "Stale file handle",
              73: "Connection timed out",
              74: "Text file busy",
              75: "Cross-device link",
              100: "Device not a stream",
              101: "Bad font file fmt",
              102: "Invalid slot",
              103: "Invalid request code",
              104: "No anode",
              105: "Block device required",
              106: "Channel number out of range",
              107: "Level 3 halted",
              108: "Level 3 reset",
              109: "Link number out of range",
              110: "Protocol driver not attached",
              111: "No CSI structure available",
              112: "Level 2 halted",
              113: "Invalid exchange",
              114: "Invalid request descriptor",
              115: "Exchange full",
              116: "No data (for no delay io)",
              117: "Timer expired",
              118: "Out of streams resources",
              119: "Machine is not on the network",
              120: "Package not installed",
              121: "The object is remote",
              122: "Advertise error",
              123: "Srmount error",
              124: "Communication error on send",
              125: "Cross mount point (not really error)",
              126: "Given log. name not unique",
              127: "f.d. invalid for this operation",
              128: "Remote address changed",
              129: "Can   access a needed shared lib",
              130: "Accessing a corrupted shared lib",
              131: ".lib section in a.out corrupted",
              132: "Attempting to link in too many libs",
              133: "Attempting to exec a shared library",
              135: "Streams pipe error",
              136: "Too many users",
              137: "Socket type not supported",
              138: "Not supported",
              139: "Protocol family not supported",
              140: "Can't send after socket shutdown",
              141: "Too many references",
              142: "Host is down",
              148: "No medium (in tape drive)",
              156: "Level 2 not synchronized",
            },
            Rt = {};
          function Lt(e) {
            return (
              We(
                "warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling",
              ),
              e
            );
          }
          function Et(e) {
            var t = /\b_Z[\w\d_]+/g;
            return e.replace(t, function (e) {
              var t = Lt(e);
              return e === t ? e : t + " [" + e + "]";
            });
          }
          var kt = {
              root: null,
              mounts: [],
              devices: {},
              streams: [],
              nextInode: 1,
              nameTable: null,
              currentPath: "/",
              initialized: !1,
              ignorePermissions: !0,
              ErrnoError: null,
              genericErrors: {},
              filesystems: null,
              syncFSRequests: 0,
              lookupPath: function (t, n) {
                if ((n === void 0 && (n = {}), (t = at.resolve(t)), !t))
                  return { path: "", node: null };
                var e = { follow_mount: !0, recurse_count: 0 };
                if (((n = Object.assign(e, n)), n.recurse_count > 8))
                  throw new kt.ErrnoError(32);
                for (
                  var r = t.split("/").filter(function (e) {
                      return !!e;
                    }),
                    o = kt.root,
                    a = "/",
                    i = 0;
                  i < r.length;
                  i++
                ) {
                  var l = i === r.length - 1;
                  if (l && n.parent) break;
                  if (
                    ((o = kt.lookupNode(o, r[i])),
                    (a = nt.join2(a, r[i])),
                    kt.isMountpoint(o) &&
                      (!l || (l && n.follow_mount)) &&
                      (o = o.mounted.root),
                    !l || n.follow)
                  )
                    for (var s = 0; kt.isLink(o.mode); ) {
                      var u = kt.readlink(a);
                      a = at.resolve(nt.dirname(a), u);
                      var c = kt.lookupPath(a, {
                        recurse_count: n.recurse_count + 1,
                      });
                      if (((o = c.node), s++ > 40)) throw new kt.ErrnoError(32);
                    }
                }
                return { path: a, node: o };
              },
              getPath: function (t) {
                for (var e; ; ) {
                  if (kt.isRoot(t)) {
                    var n = t.mount.mountpoint;
                    return e
                      ? n[n.length - 1] !== "/"
                        ? n + "/" + e
                        : n + e
                      : n;
                  }
                  ((e = e ? t.name + "/" + e : t.name), (t = t.parent));
                }
              },
              hashName: function (t, n) {
                for (var e = 0, r = 0; r < n.length; r++)
                  e = ((e << 5) - e + n.charCodeAt(r)) | 0;
                return ((t + e) >>> 0) % kt.nameTable.length;
              },
              hashAddNode: function (t) {
                var e = kt.hashName(t.parent.id, t.name);
                ((t.name_next = kt.nameTable[e]), (kt.nameTable[e] = t));
              },
              hashRemoveNode: function (t) {
                var e = kt.hashName(t.parent.id, t.name);
                if (kt.nameTable[e] === t) kt.nameTable[e] = t.name_next;
                else
                  for (var n = kt.nameTable[e]; n; ) {
                    if (n.name_next === t) {
                      n.name_next = t.name_next;
                      break;
                    }
                    n = n.name_next;
                  }
              },
              lookupNode: function (t, n) {
                var e = kt.mayLookup(t);
                if (e) throw new kt.ErrnoError(e, t);
                for (
                  var r = kt.hashName(t.id, n), o = kt.nameTable[r];
                  o;
                  o = o.name_next
                ) {
                  var a = o.name;
                  if (o.parent.id === t.id && a === n) return o;
                }
                return kt.lookup(t, n);
              },
              createNode: function (t, n, r, o) {
                x(typeof t == "object");
                var e = new kt.FSNode(t, n, r, o);
                return (kt.hashAddNode(e), e);
              },
              destroyNode: function (t) {
                kt.hashRemoveNode(t);
              },
              isRoot: function (t) {
                return t === t.parent;
              },
              isMountpoint: function (t) {
                return !!t.mounted;
              },
              isFile: function (t) {
                return (t & 61440) === 32768;
              },
              isDir: function (t) {
                return (t & 61440) === 16384;
              },
              isLink: function (t) {
                return (t & 61440) === 40960;
              },
              isChrdev: function (t) {
                return (t & 61440) === 8192;
              },
              isBlkdev: function (t) {
                return (t & 61440) === 24576;
              },
              isFIFO: function (t) {
                return (t & 61440) === 4096;
              },
              isSocket: function (t) {
                return (t & 49152) === 49152;
              },
              flagsToPermissionString: function (t) {
                var e = ["r", "w", "rw"][t & 3];
                return (t & 512 && (e += "w"), e);
              },
              nodePermissions: function (t, n) {
                return kt.ignorePermissions
                  ? 0
                  : (n.includes("r") && !(t.mode & 292)) ||
                      (n.includes("w") && !(t.mode & 146)) ||
                      (n.includes("x") && !(t.mode & 73))
                    ? 2
                    : 0;
              },
              mayLookup: function (t) {
                var e = kt.nodePermissions(t, "x");
                return e || (t.node_ops.lookup ? 0 : 2);
              },
              mayCreate: function (t, n) {
                try {
                  var e = kt.lookupNode(t, n);
                  return 20;
                } catch (e) {}
                return kt.nodePermissions(t, "wx");
              },
              mayDelete: function (t, n, r) {
                var e;
                try {
                  e = kt.lookupNode(t, n);
                } catch (e) {
                  return e.errno;
                }
                var o = kt.nodePermissions(t, "wx");
                if (o) return o;
                if (r) {
                  if (!kt.isDir(e.mode)) return 54;
                  if (kt.isRoot(e) || kt.getPath(e) === kt.cwd()) return 10;
                } else if (kt.isDir(e.mode)) return 31;
                return 0;
              },
              mayOpen: function (t, n) {
                return t
                  ? kt.isLink(t.mode)
                    ? 32
                    : kt.isDir(t.mode) &&
                        (kt.flagsToPermissionString(n) !== "r" || n & 512)
                      ? 31
                      : kt.nodePermissions(t, kt.flagsToPermissionString(n))
                  : 44;
              },
              MAX_OPEN_FDS: 4096,
              nextfd: function () {
                for (var e = 0; e <= kt.MAX_OPEN_FDS; e++)
                  if (!kt.streams[e]) return e;
                throw new kt.ErrnoError(33);
              },
              getStreamChecked: function (t) {
                var e = kt.getStream(t);
                if (!e) throw new kt.ErrnoError(8);
                return e;
              },
              getStream: function (t) {
                return kt.streams[t];
              },
              createStream: function (t, n) {
                return (
                  n === void 0 && (n = -1),
                  kt.FSStream ||
                    ((kt.FSStream = function () {
                      this.shared = {};
                    }),
                    (kt.FSStream.prototype = {}),
                    Object.defineProperties(kt.FSStream.prototype, {
                      object: {
                        get: function () {
                          return this.node;
                        },
                        set: function (t) {
                          this.node = t;
                        },
                      },
                      isRead: {
                        get: function () {
                          return (this.flags & 2097155) !== 1;
                        },
                      },
                      isWrite: {
                        get: function () {
                          return (this.flags & 2097155) !== 0;
                        },
                      },
                      isAppend: {
                        get: function () {
                          return this.flags & 1024;
                        },
                      },
                      flags: {
                        get: function () {
                          return this.shared.flags;
                        },
                        set: function (t) {
                          this.shared.flags = t;
                        },
                      },
                      position: {
                        get: function () {
                          return this.shared.position;
                        },
                        set: function (t) {
                          this.shared.position = t;
                        },
                      },
                    })),
                  (t = Object.assign(new kt.FSStream(), t)),
                  n == -1 && (n = kt.nextfd()),
                  (t.fd = n),
                  (kt.streams[n] = t),
                  t
                );
              },
              closeStream: function (t) {
                kt.streams[t] = null;
              },
              chrdev_stream_ops: {
                open: function (t) {
                  var e = kt.getDevice(t.node.rdev);
                  ((t.stream_ops = e.stream_ops),
                    t.stream_ops.open && t.stream_ops.open(t));
                },
                llseek: function () {
                  throw new kt.ErrnoError(70);
                },
              },
              major: function (t) {
                return t >> 8;
              },
              minor: function (t) {
                return t & 255;
              },
              makedev: function (t, n) {
                return (t << 8) | n;
              },
              registerDevice: function (t, n) {
                kt.devices[t] = { stream_ops: n };
              },
              getDevice: function (t) {
                return kt.devices[t];
              },
              getMounts: function (t) {
                for (var e = [], n = [t]; n.length; ) {
                  var r = n.pop();
                  (e.push(r), n.push.apply(n, r.mounts));
                }
                return e;
              },
              syncfs: function (t, n) {
                (typeof t == "function" && ((n = t), (t = !1)),
                  kt.syncFSRequests++,
                  kt.syncFSRequests > 1 &&
                    R(
                      "warning: " +
                        kt.syncFSRequests +
                        " FS.syncfs operations in flight at once, probably just doing extra work",
                    ));
                var e = kt.getMounts(kt.root.mount),
                  r = 0;
                function o(e) {
                  return (x(kt.syncFSRequests > 0), kt.syncFSRequests--, n(e));
                }
                function a(t) {
                  if (t) return a.errored ? void 0 : ((a.errored = !0), o(t));
                  ++r >= e.length && o(null);
                }
                e.forEach(function (e) {
                  if (!e.type.syncfs) return a(null);
                  e.type.syncfs(e, t, a);
                });
              },
              mount: function (t, n, r) {
                if (typeof t == "string") throw t;
                var e = r === "/",
                  o = !r,
                  a;
                if (e && kt.root) throw new kt.ErrnoError(10);
                if (!e && !o) {
                  var i = kt.lookupPath(r, { follow_mount: !1 });
                  if (((r = i.path), (a = i.node), kt.isMountpoint(a)))
                    throw new kt.ErrnoError(10);
                  if (!kt.isDir(a.mode)) throw new kt.ErrnoError(54);
                }
                var l = { type: t, opts: n, mountpoint: r, mounts: [] },
                  s = t.mount(l);
                return (
                  (s.mount = l),
                  (l.root = s),
                  e
                    ? (kt.root = s)
                    : a && ((a.mounted = l), a.mount && a.mount.mounts.push(l)),
                  s
                );
              },
              unmount: function (t) {
                var e = kt.lookupPath(t, { follow_mount: !1 });
                if (!kt.isMountpoint(e.node)) throw new kt.ErrnoError(28);
                var n = e.node,
                  r = n.mounted,
                  o = kt.getMounts(r);
                (Object.keys(kt.nameTable).forEach(function (e) {
                  for (var t = kt.nameTable[e]; t; ) {
                    var n = t.name_next;
                    (o.includes(t.mount) && kt.destroyNode(t), (t = n));
                  }
                }),
                  (n.mounted = null));
                var a = n.mount.mounts.indexOf(r);
                (x(a !== -1), n.mount.mounts.splice(a, 1));
              },
              lookup: function (t, n) {
                return t.node_ops.lookup(t, n);
              },
              mknod: function (t, n, r) {
                var e = kt.lookupPath(t, { parent: !0 }),
                  o = e.node,
                  a = nt.basename(t);
                if (!a || a === "." || a === "..") throw new kt.ErrnoError(28);
                var i = kt.mayCreate(o, a);
                if (i) throw new kt.ErrnoError(i);
                if (!o.node_ops.mknod) throw new kt.ErrnoError(63);
                return o.node_ops.mknod(o, a, n, r);
              },
              create: function (t, n) {
                return (
                  (n = n !== void 0 ? n : 438),
                  (n &= 4095),
                  (n |= 32768),
                  kt.mknod(t, n, 0)
                );
              },
              mkdir: function (t, n) {
                return (
                  (n = n !== void 0 ? n : 511),
                  (n &= 1023),
                  (n |= 16384),
                  kt.mknod(t, n, 0)
                );
              },
              mkdirTree: function (t, n) {
                for (var e = t.split("/"), r = "", o = 0; o < e.length; ++o)
                  if (e[o]) {
                    r += "/" + e[o];
                    try {
                      kt.mkdir(r, n);
                    } catch (e) {
                      if (e.errno != 20) throw e;
                    }
                  }
              },
              mkdev: function (t, n, r) {
                return (
                  typeof r == "undefined" && ((r = n), (n = 438)),
                  (n |= 8192),
                  kt.mknod(t, n, r)
                );
              },
              symlink: function (t, n) {
                if (!at.resolve(t)) throw new kt.ErrnoError(44);
                var e = kt.lookupPath(n, { parent: !0 }),
                  r = e.node;
                if (!r) throw new kt.ErrnoError(44);
                var o = nt.basename(n),
                  a = kt.mayCreate(r, o);
                if (a) throw new kt.ErrnoError(a);
                if (!r.node_ops.symlink) throw new kt.ErrnoError(63);
                return r.node_ops.symlink(r, o, t);
              },
              rename: function (t, n) {
                var e = nt.dirname(t),
                  r = nt.dirname(n),
                  o = nt.basename(t),
                  a = nt.basename(n),
                  i,
                  l,
                  s;
                if (
                  ((i = kt.lookupPath(t, { parent: !0 })),
                  (l = i.node),
                  (i = kt.lookupPath(n, { parent: !0 })),
                  (s = i.node),
                  !l || !s)
                )
                  throw new kt.ErrnoError(44);
                if (l.mount !== s.mount) throw new kt.ErrnoError(75);
                var u = kt.lookupNode(l, o),
                  c = at.relative(t, r);
                if (c.charAt(0) !== ".") throw new kt.ErrnoError(28);
                if (((c = at.relative(n, e)), c.charAt(0) !== "."))
                  throw new kt.ErrnoError(55);
                var d;
                try {
                  d = kt.lookupNode(s, a);
                } catch (e) {}
                if (u !== d) {
                  var m = kt.isDir(u.mode),
                    p = kt.mayDelete(l, o, m);
                  if (p) throw new kt.ErrnoError(p);
                  if (((p = d ? kt.mayDelete(s, a, m) : kt.mayCreate(s, a)), p))
                    throw new kt.ErrnoError(p);
                  if (!l.node_ops.rename) throw new kt.ErrnoError(63);
                  if (kt.isMountpoint(u) || (d && kt.isMountpoint(d)))
                    throw new kt.ErrnoError(10);
                  if (s !== l && ((p = kt.nodePermissions(l, "w")), p))
                    throw new kt.ErrnoError(p);
                  kt.hashRemoveNode(u);
                  try {
                    l.node_ops.rename(u, s, a);
                  } catch (e) {
                    throw e;
                  } finally {
                    kt.hashAddNode(u);
                  }
                }
              },
              rmdir: function (t) {
                var e = kt.lookupPath(t, { parent: !0 }),
                  n = e.node,
                  r = nt.basename(t),
                  o = kt.lookupNode(n, r),
                  a = kt.mayDelete(n, r, !0);
                if (a) throw new kt.ErrnoError(a);
                if (!n.node_ops.rmdir) throw new kt.ErrnoError(63);
                if (kt.isMountpoint(o)) throw new kt.ErrnoError(10);
                (n.node_ops.rmdir(n, r), kt.destroyNode(o));
              },
              readdir: function (t) {
                var e = kt.lookupPath(t, { follow: !0 }),
                  n = e.node;
                if (!n.node_ops.readdir) throw new kt.ErrnoError(54);
                return n.node_ops.readdir(n);
              },
              unlink: function (t) {
                var e = kt.lookupPath(t, { parent: !0 }),
                  n = e.node;
                if (!n) throw new kt.ErrnoError(44);
                var r = nt.basename(t),
                  o = kt.lookupNode(n, r),
                  a = kt.mayDelete(n, r, !1);
                if (a) throw new kt.ErrnoError(a);
                if (!n.node_ops.unlink) throw new kt.ErrnoError(63);
                if (kt.isMountpoint(o)) throw new kt.ErrnoError(10);
                (n.node_ops.unlink(n, r), kt.destroyNode(o));
              },
              readlink: function (t) {
                var e = kt.lookupPath(t),
                  n = e.node;
                if (!n) throw new kt.ErrnoError(44);
                if (!n.node_ops.readlink) throw new kt.ErrnoError(28);
                return at.resolve(kt.getPath(n.parent), n.node_ops.readlink(n));
              },
              stat: function (t, n) {
                var e = kt.lookupPath(t, { follow: !n }),
                  r = e.node;
                if (!r) throw new kt.ErrnoError(44);
                if (!r.node_ops.getattr) throw new kt.ErrnoError(63);
                return r.node_ops.getattr(r);
              },
              lstat: function (t) {
                return kt.stat(t, !0);
              },
              chmod: function (t, n, r) {
                var e;
                if (typeof t == "string") {
                  var o = kt.lookupPath(t, { follow: !r });
                  e = o.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new kt.ErrnoError(63);
                e.node_ops.setattr(e, {
                  mode: (n & 4095) | (e.mode & -4096),
                  timestamp: Date.now(),
                });
              },
              lchmod: function (t, n) {
                kt.chmod(t, n, !0);
              },
              fchmod: function (t, n) {
                var e = kt.getStreamChecked(t);
                kt.chmod(e.node, n);
              },
              chown: function (t, n, r, o) {
                var e;
                if (typeof t == "string") {
                  var a = kt.lookupPath(t, { follow: !o });
                  e = a.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new kt.ErrnoError(63);
                e.node_ops.setattr(e, { timestamp: Date.now() });
              },
              lchown: function (t, n, r) {
                kt.chown(t, n, r, !0);
              },
              fchown: function (t, n, r) {
                var e = kt.getStreamChecked(t);
                kt.chown(e.node, n, r);
              },
              truncate: function (t, n) {
                if (n < 0) throw new kt.ErrnoError(28);
                var e;
                if (typeof t == "string") {
                  var r = kt.lookupPath(t, { follow: !0 });
                  e = r.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new kt.ErrnoError(63);
                if (kt.isDir(e.mode)) throw new kt.ErrnoError(31);
                if (!kt.isFile(e.mode)) throw new kt.ErrnoError(28);
                var o = kt.nodePermissions(e, "w");
                if (o) throw new kt.ErrnoError(o);
                e.node_ops.setattr(e, { size: n, timestamp: Date.now() });
              },
              ftruncate: function (t, n) {
                var e = kt.getStreamChecked(t);
                if ((e.flags & 2097155) === 0) throw new kt.ErrnoError(28);
                kt.truncate(e.node, n);
              },
              utime: function (t, n, r) {
                var e = kt.lookupPath(t, { follow: !0 }),
                  o = e.node;
                o.node_ops.setattr(o, { timestamp: Math.max(n, r) });
              },
              open: function (t, n, r) {
                if (t === "") throw new kt.ErrnoError(44);
                ((n = typeof n == "string" ? bt(n) : n),
                  (r = typeof r == "undefined" ? 438 : r),
                  n & 64 ? (r = (r & 4095) | 32768) : (r = 0));
                var e;
                if (typeof t == "object") e = t;
                else {
                  t = nt.normalize(t);
                  try {
                    var o = kt.lookupPath(t, { follow: !(n & 131072) });
                    e = o.node;
                  } catch (e) {}
                }
                var i = !1;
                if (n & 64)
                  if (e) {
                    if (n & 128) throw new kt.ErrnoError(20);
                  } else ((e = kt.mknod(t, r, 0)), (i = !0));
                if (!e) throw new kt.ErrnoError(44);
                if (
                  (kt.isChrdev(e.mode) && (n &= -513),
                  n & 65536 && !kt.isDir(e.mode))
                )
                  throw new kt.ErrnoError(54);
                if (!i) {
                  var l = kt.mayOpen(e, n);
                  if (l) throw new kt.ErrnoError(l);
                }
                (n & 512 && !i && kt.truncate(e, 0), (n &= -131713));
                var s = kt.createStream({
                  node: e,
                  path: kt.getPath(e),
                  flags: n,
                  seekable: !0,
                  position: 0,
                  stream_ops: e.stream_ops,
                  ungotten: [],
                  error: !1,
                });
                return (
                  s.stream_ops.open && s.stream_ops.open(s),
                  a.logReadFiles &&
                    !(n & 1) &&
                    (kt.readFiles || (kt.readFiles = {}),
                    t in kt.readFiles || (kt.readFiles[t] = 1)),
                  s
                );
              },
              close: function (t) {
                if (kt.isClosed(t)) throw new kt.ErrnoError(8);
                t.getdents && (t.getdents = null);
                try {
                  t.stream_ops.close && t.stream_ops.close(t);
                } catch (e) {
                  throw e;
                } finally {
                  kt.closeStream(t.fd);
                }
                t.fd = null;
              },
              isClosed: function (t) {
                return t.fd === null;
              },
              llseek: function (t, n, r) {
                if (kt.isClosed(t)) throw new kt.ErrnoError(8);
                if (!t.seekable || !t.stream_ops.llseek)
                  throw new kt.ErrnoError(70);
                if (r != 0 && r != 1 && r != 2) throw new kt.ErrnoError(28);
                return (
                  (t.position = t.stream_ops.llseek(t, n, r)),
                  (t.ungotten = []),
                  t.position
                );
              },
              read: function (t, n, r, o, a) {
                if ((x(r >= 0), o < 0 || a < 0)) throw new kt.ErrnoError(28);
                if (kt.isClosed(t)) throw new kt.ErrnoError(8);
                if ((t.flags & 2097155) === 1) throw new kt.ErrnoError(8);
                if (kt.isDir(t.node.mode)) throw new kt.ErrnoError(31);
                if (!t.stream_ops.read) throw new kt.ErrnoError(28);
                var e = typeof a != "undefined";
                if (!e) a = t.position;
                else if (!t.seekable) throw new kt.ErrnoError(70);
                var i = t.stream_ops.read(t, n, r, o, a);
                return (e || (t.position += i), i);
              },
              write: function (t, n, r, o, a, i) {
                if ((x(r >= 0), o < 0 || a < 0)) throw new kt.ErrnoError(28);
                if (kt.isClosed(t)) throw new kt.ErrnoError(8);
                if ((t.flags & 2097155) === 0) throw new kt.ErrnoError(8);
                if (kt.isDir(t.node.mode)) throw new kt.ErrnoError(31);
                if (!t.stream_ops.write) throw new kt.ErrnoError(28);
                t.seekable && t.flags & 1024 && kt.llseek(t, 0, 2);
                var e = typeof a != "undefined";
                if (!e) a = t.position;
                else if (!t.seekable) throw new kt.ErrnoError(70);
                var l = t.stream_ops.write(t, n, r, o, a, i);
                return (e || (t.position += l), l);
              },
              allocate: function (t, n, r) {
                if (kt.isClosed(t)) throw new kt.ErrnoError(8);
                if (n < 0 || r <= 0) throw new kt.ErrnoError(28);
                if ((t.flags & 2097155) === 0) throw new kt.ErrnoError(8);
                if (!kt.isFile(t.node.mode) && !kt.isDir(t.node.mode))
                  throw new kt.ErrnoError(43);
                if (!t.stream_ops.allocate) throw new kt.ErrnoError(138);
                t.stream_ops.allocate(t, n, r);
              },
              mmap: function (t, n, r, o, a) {
                if ((o & 2) !== 0 && (a & 2) === 0 && (t.flags & 2097155) !== 2)
                  throw new kt.ErrnoError(2);
                if ((t.flags & 2097155) === 1) throw new kt.ErrnoError(2);
                if (!t.stream_ops.mmap) throw new kt.ErrnoError(43);
                return t.stream_ops.mmap(t, n, r, o, a);
              },
              msync: function (t, n, r, o, a) {
                return (
                  x(r >= 0),
                  t.stream_ops.msync ? t.stream_ops.msync(t, n, r, o, a) : 0
                );
              },
              munmap: function (t) {
                return 0;
              },
              ioctl: function (t, n, r) {
                if (!t.stream_ops.ioctl) throw new kt.ErrnoError(59);
                return t.stream_ops.ioctl(t, n, r);
              },
              readFile: function (t, n) {
                if (
                  (n === void 0 && (n = {}),
                  (n.flags = n.flags || 0),
                  (n.encoding = n.encoding || "binary"),
                  n.encoding !== "utf8" && n.encoding !== "binary")
                )
                  throw new Error('Invalid encoding type "' + n.encoding + '"');
                var e,
                  r = kt.open(t, n.flags),
                  o = kt.stat(t),
                  a = o.size,
                  i = new Uint8Array(a);
                return (
                  kt.read(r, i, 0, a, 0),
                  n.encoding === "utf8"
                    ? (e = Ne(i, 0))
                    : n.encoding === "binary" && (e = i),
                  kt.close(r),
                  e
                );
              },
              writeFile: function (t, n, r) {
                (r === void 0 && (r = {}), (r.flags = r.flags || 577));
                var e = kt.open(t, r.flags, r.mode);
                if (typeof n == "string") {
                  var o = new Uint8Array(lt(n) + 1),
                    a = st(n, o, 0, o.length);
                  kt.write(e, o, 0, a, void 0, r.canOwn);
                } else if (ArrayBuffer.isView(n))
                  kt.write(e, n, 0, n.byteLength, void 0, r.canOwn);
                else throw new Error("Unsupported data type");
                kt.close(e);
              },
              cwd: function () {
                return kt.currentPath;
              },
              chdir: function (t) {
                var e = kt.lookupPath(t, { follow: !0 });
                if (e.node === null) throw new kt.ErrnoError(44);
                if (!kt.isDir(e.node.mode)) throw new kt.ErrnoError(54);
                var n = kt.nodePermissions(e.node, "x");
                if (n) throw new kt.ErrnoError(n);
                kt.currentPath = e.path;
              },
              createDefaultDirectories: function () {
                (kt.mkdir("/tmp"),
                  kt.mkdir("/home"),
                  kt.mkdir("/home/web_user"));
              },
              createDefaultDevices: function () {
                (kt.mkdir("/dev"),
                  kt.registerDevice(kt.makedev(1, 3), {
                    read: function () {
                      return 0;
                    },
                    write: function (t, n, r, o, a) {
                      return o;
                    },
                  }),
                  kt.mkdev("/dev/null", kt.makedev(1, 3)),
                  dt.register(kt.makedev(5, 0), dt.default_tty_ops),
                  dt.register(kt.makedev(6, 0), dt.default_tty1_ops),
                  kt.mkdev("/dev/tty", kt.makedev(5, 0)),
                  kt.mkdev("/dev/tty1", kt.makedev(6, 0)));
                var e = new Uint8Array(1024),
                  t = 0,
                  n = function () {
                    return (t === 0 && (t = ot(e).byteLength), e[--t]);
                  };
                (kt.createDevice("/dev", "random", n),
                  kt.createDevice("/dev", "urandom", n),
                  kt.mkdir("/dev/shm"),
                  kt.mkdir("/dev/shm/tmp"));
              },
              createSpecialDirectories: function () {
                kt.mkdir("/proc");
                var e = kt.mkdir("/proc/self");
                (kt.mkdir("/proc/self/fd"),
                  kt.mount(
                    {
                      mount: function () {
                        var t = kt.createNode(e, "fd", 16895, 73);
                        return (
                          (t.node_ops = {
                            lookup: function (t, n) {
                              var e = +n,
                                r = kt.getStreamChecked(e),
                                o = {
                                  parent: null,
                                  mount: { mountpoint: "fake" },
                                  node_ops: {
                                    readlink: function () {
                                      return r.path;
                                    },
                                  },
                                };
                              return ((o.parent = o), o);
                            },
                          }),
                          t
                        );
                      },
                    },
                    {},
                    "/proc/self/fd",
                  ));
              },
              createStandardStreams: function () {
                (a.stdin
                  ? kt.createDevice("/dev", "stdin", a.stdin)
                  : kt.symlink("/dev/tty", "/dev/stdin"),
                  a.stdout
                    ? kt.createDevice("/dev", "stdout", null, a.stdout)
                    : kt.symlink("/dev/tty", "/dev/stdout"),
                  a.stderr
                    ? kt.createDevice("/dev", "stderr", null, a.stderr)
                    : kt.symlink("/dev/tty1", "/dev/stderr"));
                var e = kt.open("/dev/stdin", 0),
                  t = kt.open("/dev/stdout", 1),
                  n = kt.open("/dev/stderr", 1);
                (x(e.fd === 0, "invalid handle for stdin (" + e.fd + ")"),
                  x(t.fd === 1, "invalid handle for stdout (" + t.fd + ")"),
                  x(n.fd === 2, "invalid handle for stderr (" + n.fd + ")"));
              },
              ensureErrnoError: function () {
                kt.ErrnoError ||
                  ((kt.ErrnoError = function (t, n) {
                    ((this.name = "ErrnoError"),
                      (this.node = n),
                      (this.setErrno = function (e) {
                        this.errno = e;
                        for (var t in Rt)
                          if (Rt[t] === e) {
                            this.code = t;
                            break;
                          }
                      }),
                      this.setErrno(t),
                      (this.message = St[t]),
                      this.stack &&
                        (Object.defineProperty(this, "stack", {
                          value: new Error().stack,
                          writable: !0,
                        }),
                        (this.stack = Et(this.stack))));
                  }),
                  (kt.ErrnoError.prototype = new Error()),
                  (kt.ErrnoError.prototype.constructor = kt.ErrnoError),
                  [44].forEach(function (e) {
                    ((kt.genericErrors[e] = new kt.ErrnoError(e)),
                      (kt.genericErrors[e].stack =
                        "<generic error, no stack>"));
                  }));
              },
              staticInit: function () {
                (kt.ensureErrnoError(),
                  (kt.nameTable = new Array(4096)),
                  kt.mount(ft, {}, "/"),
                  kt.createDefaultDirectories(),
                  kt.createDefaultDevices(),
                  kt.createSpecialDirectories(),
                  (kt.filesystems = { MEMFS: ft }));
              },
              init: function (t, n, r) {
                (x(
                  !kt.init.initialized,
                  "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)",
                ),
                  (kt.init.initialized = !0),
                  kt.ensureErrnoError(),
                  (a.stdin = t || a.stdin),
                  (a.stdout = n || a.stdout),
                  (a.stderr = r || a.stderr),
                  kt.createStandardStreams());
              },
              quit: function () {
                ((kt.init.initialized = !1), zo(0));
                for (var e = 0; e < kt.streams.length; e++) {
                  var t = kt.streams[e];
                  t && kt.close(t);
                }
              },
              findObject: function (t, n) {
                var e = kt.analyzePath(t, n);
                return e.exists ? e.object : null;
              },
              analyzePath: function (t, n) {
                try {
                  var e = kt.lookupPath(t, { follow: !n });
                  t = e.path;
                } catch (e) {}
                var r = {
                  isRoot: !1,
                  exists: !1,
                  error: 0,
                  name: null,
                  path: null,
                  object: null,
                  parentExists: !1,
                  parentPath: null,
                  parentObject: null,
                };
                try {
                  var e = kt.lookupPath(t, { parent: !0 });
                  ((r.parentExists = !0),
                    (r.parentPath = e.path),
                    (r.parentObject = e.node),
                    (r.name = nt.basename(t)),
                    (e = kt.lookupPath(t, { follow: !n })),
                    (r.exists = !0),
                    (r.path = e.path),
                    (r.object = e.node),
                    (r.name = e.node.name),
                    (r.isRoot = e.path === "/"));
                } catch (e) {
                  r.error = e.errno;
                }
                return r;
              },
              createPath: function (t, n, r, o) {
                t = typeof t == "string" ? t : kt.getPath(t);
                for (var e = n.split("/").reverse(); e.length; ) {
                  var a = e.pop();
                  if (a) {
                    var i = nt.join2(t, a);
                    try {
                      kt.mkdir(i);
                    } catch (e) {}
                    t = i;
                  }
                }
                return i;
              },
              createFile: function (t, n, r, o, a) {
                var e = nt.join2(typeof t == "string" ? t : kt.getPath(t), n),
                  i = vt(o, a);
                return kt.create(e, i);
              },
              createDataFile: function (t, n, r, o, a, i) {
                var e = n;
                t &&
                  ((t = typeof t == "string" ? t : kt.getPath(t)),
                  (e = n ? nt.join2(t, n) : t));
                var l = vt(o, a),
                  s = kt.create(e, l);
                if (r) {
                  if (typeof r == "string") {
                    for (
                      var u = new Array(r.length), c = 0, d = r.length;
                      c < d;
                      ++c
                    )
                      u[c] = r.charCodeAt(c);
                    r = u;
                  }
                  kt.chmod(s, l | 146);
                  var m = kt.open(s, 577);
                  (kt.write(m, r, 0, r.length, 0, i),
                    kt.close(m),
                    kt.chmod(s, l));
                }
                return s;
              },
              createDevice: function (t, n, r, o) {
                var e = nt.join2(typeof t == "string" ? t : kt.getPath(t), n),
                  a = vt(!!r, !!o);
                kt.createDevice.major || (kt.createDevice.major = 64);
                var i = kt.makedev(kt.createDevice.major++, 0);
                return (
                  kt.registerDevice(i, {
                    open: function (t) {
                      t.seekable = !1;
                    },
                    close: function (t) {
                      o && o.buffer && o.buffer.length && o(10);
                    },
                    read: function (t, n, o, a, i) {
                      for (var e = 0, l = 0; l < a; l++) {
                        var s;
                        try {
                          s = r();
                        } catch (e) {
                          throw new kt.ErrnoError(29);
                        }
                        if (s === void 0 && e === 0) throw new kt.ErrnoError(6);
                        if (s == null) break;
                        (e++, (n[o + l] = s));
                      }
                      return (e && (t.node.timestamp = Date.now()), e);
                    },
                    write: function (t, n, r, a, i) {
                      for (var e = 0; e < a; e++)
                        try {
                          o(n[r + e]);
                        } catch (e) {
                          throw new kt.ErrnoError(29);
                        }
                      return (a && (t.node.timestamp = Date.now()), e);
                    },
                  }),
                  kt.mkdev(e, a, i)
                );
              },
              forceLoadFile: function (t) {
                if (t.isDevice || t.isFolder || t.link || t.contents) return !0;
                if (typeof XMLHttpRequest != "undefined")
                  throw new Error(
                    "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
                  );
                if (y)
                  try {
                    ((t.contents = ut(y(t.url), !0)),
                      (t.usedBytes = t.contents.length));
                  } catch (e) {
                    throw new kt.ErrnoError(29);
                  }
                else
                  throw new Error(
                    "Cannot load without read() or XMLHttpRequest.",
                  );
              },
              createLazyFile: function (t, n, r, o, a) {
                function e() {
                  ((this.lengthKnown = !1), (this.chunks = []));
                }
                if (
                  ((e.prototype.get = function (t) {
                    if (!(t > this.length - 1 || t < 0)) {
                      var e = t % this.chunkSize,
                        n = (t / this.chunkSize) | 0;
                      return this.getter(n)[e];
                    }
                  }),
                  (e.prototype.setDataGetter = function (t) {
                    this.getter = t;
                  }),
                  (e.prototype.cacheLength = function () {
                    var e = new XMLHttpRequest();
                    if (
                      (e.open("HEAD", r, !1),
                      e.send(null),
                      !(
                        (e.status >= 200 && e.status < 300) ||
                        e.status === 304
                      ))
                    )
                      throw new Error(
                        "Couldn't load " + r + ". Status: " + e.status,
                      );
                    var t = Number(e.getResponseHeader("Content-length")),
                      n,
                      o =
                        (n = e.getResponseHeader("Accept-Ranges")) &&
                        n === "bytes",
                      a =
                        (n = e.getResponseHeader("Content-Encoding")) &&
                        n === "gzip",
                      i = 1024 * 1024;
                    o || (i = t);
                    var l = function (n, o) {
                        if (n > o)
                          throw new Error(
                            "invalid range (" +
                              n +
                              ", " +
                              o +
                              ") or no bytes requested!",
                          );
                        if (o > t - 1)
                          throw new Error(
                            "only " + t + " bytes available! programmer error!",
                          );
                        var e = new XMLHttpRequest();
                        if (
                          (e.open("GET", r, !1),
                          t !== i &&
                            e.setRequestHeader("Range", "bytes=" + n + "-" + o),
                          (e.responseType = "arraybuffer"),
                          e.overrideMimeType &&
                            e.overrideMimeType(
                              "text/plain; charset=x-user-defined",
                            ),
                          e.send(null),
                          !(
                            (e.status >= 200 && e.status < 300) ||
                            e.status === 304
                          ))
                        )
                          throw new Error(
                            "Couldn't load " + r + ". Status: " + e.status,
                          );
                        return e.response !== void 0
                          ? new Uint8Array(e.response || [])
                          : ut(e.responseText || "", !0);
                      },
                      s = this;
                    (s.setDataGetter(function (e) {
                      var n = e * i,
                        r = (e + 1) * i - 1;
                      if (
                        ((r = Math.min(r, t - 1)),
                        typeof s.chunks[e] == "undefined" &&
                          (s.chunks[e] = l(n, r)),
                        typeof s.chunks[e] == "undefined")
                      )
                        throw new Error("doXHR failed!");
                      return s.chunks[e];
                    }),
                      (a || !t) &&
                        ((i = t = 1),
                        (t = this.getter(0).length),
                        (i = t),
                        S(
                          "LazyFiles on gzip forces download of the whole file when length is accessed",
                        )),
                      (this._length = t),
                      (this._chunkSize = i),
                      (this.lengthKnown = !0));
                  }),
                  typeof XMLHttpRequest != "undefined")
                ) {
                  throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                  var i, l;
                } else var l = { isDevice: !1, url: r };
                var s = kt.createFile(t, n, l, o, a);
                (l.contents
                  ? (s.contents = l.contents)
                  : l.url && ((s.contents = null), (s.url = l.url)),
                  Object.defineProperties(s, {
                    usedBytes: {
                      get: function () {
                        return this.contents.length;
                      },
                    },
                  }));
                var u = {},
                  c = Object.keys(s.stream_ops);
                c.forEach(function (e) {
                  var t = s.stream_ops[e];
                  u[e] = function () {
                    return (kt.forceLoadFile(s), t.apply(null, arguments));
                  };
                });
                function d(e, t, n, r, o) {
                  var a = e.node.contents;
                  if (o >= a.length) return 0;
                  var i = Math.min(a.length - o, r);
                  if ((x(i >= 0), a.slice))
                    for (var l = 0; l < i; l++) t[n + l] = a[o + l];
                  else for (var l = 0; l < i; l++) t[n + l] = a.get(o + l);
                  return i;
                }
                return (
                  (u.read = function (e, t, n, r, o) {
                    return (kt.forceLoadFile(s), d(e, t, n, r, o));
                  }),
                  (u.mmap = function (e, t, n, r, o) {
                    kt.forceLoadFile(s);
                    var a = _t(t);
                    if (!a) throw new kt.ErrnoError(48);
                    return (d(e, $, a, t, n), { ptr: a, allocated: !0 });
                  }),
                  (s.stream_ops = u),
                  s
                );
              },
              absolutePath: function () {
                ue(
                  "FS.absolutePath has been removed; use PATH_FS.resolve instead",
                );
              },
              createFolder: function () {
                ue("FS.createFolder has been removed; use FS.mkdir instead");
              },
              createLink: function () {
                ue("FS.createLink has been removed; use FS.symlink instead");
              },
              joinPath: function () {
                ue("FS.joinPath has been removed; use PATH.join instead");
              },
              mmapAlloc: function () {
                ue(
                  "FS.mmapAlloc has been replaced by the top level function mmapAlloc",
                );
              },
              standardizePath: function () {
                ue(
                  "FS.standardizePath has been removed; use PATH.normalize instead",
                );
              },
            },
            It = {
              DEFAULT_POLLMASK: 5,
              calculateAt: function (t, n, r) {
                if (nt.isAbs(n)) return n;
                var e;
                if (t === -100) e = kt.cwd();
                else {
                  var o = It.getStreamFromFD(t);
                  e = o.path;
                }
                if (n.length == 0) {
                  if (!r) throw new kt.ErrnoError(44);
                  return e;
                }
                return nt.join2(e, n);
              },
              doStat: function (t, n, r) {
                try {
                  var e = t(n);
                } catch (e) {
                  if (
                    e &&
                    e.node &&
                    nt.normalize(n) !== nt.normalize(kt.getPath(e.node))
                  )
                    return -54;
                  throw e;
                }
                ((w[r >> 2] = e.dev),
                  (w[(r + 4) >> 2] = e.mode),
                  (A[(r + 8) >> 2] = e.nlink),
                  (w[(r + 12) >> 2] = e.uid),
                  (w[(r + 16) >> 2] = e.gid),
                  (w[(r + 20) >> 2] = e.rdev),
                  (O[(r + 24) >> 3] = BigInt(e.size)),
                  (w[(r + 32) >> 2] = 4096),
                  (w[(r + 36) >> 2] = e.blocks));
                var o = e.atime.getTime(),
                  a = e.mtime.getTime(),
                  i = e.ctime.getTime();
                return (
                  (O[(r + 40) >> 3] = BigInt(Math.floor(o / 1e3))),
                  (A[(r + 48) >> 2] = (o % 1e3) * 1e3),
                  (O[(r + 56) >> 3] = BigInt(Math.floor(a / 1e3))),
                  (A[(r + 64) >> 2] = (a % 1e3) * 1e3),
                  (O[(r + 72) >> 3] = BigInt(Math.floor(i / 1e3))),
                  (A[(r + 80) >> 2] = (i % 1e3) * 1e3),
                  (O[(r + 88) >> 3] = BigInt(e.ino)),
                  0
                );
              },
              doMsync: function (t, n, r, o, a) {
                if (!kt.isFile(n.node.mode)) throw new kt.ErrnoError(43);
                if (o & 2) return 0;
                var e = P.slice(t, t + r);
                kt.msync(n, e, a, r, o);
              },
              varargs: void 0,
              get: function () {
                (x(It.varargs != null), (It.varargs += 4));
                var e = w[(It.varargs - 4) >> 2];
                return e;
              },
              getStr: function (t) {
                var e = Me(t);
                return e;
              },
              getStreamFromFD: function (t) {
                var e = kt.getStreamChecked(t);
                return e;
              },
            };
          function Tt(e, t, n) {
            It.varargs = n;
            try {
              var r = It.getStreamFromFD(e);
              switch (t) {
                case 0: {
                  var o = It.get();
                  if (o < 0) return -28;
                  var a;
                  return ((a = kt.createStream(r, o)), a.fd);
                }
                case 1:
                case 2:
                  return 0;
                case 3:
                  return r.flags;
                case 4: {
                  var o = It.get();
                  return ((r.flags |= o), 0);
                }
                case 5: {
                  var o = It.get(),
                    i = 0;
                  return ((N[(o + i) >> 1] = 2), 0);
                }
                case 6:
                case 7:
                  return 0;
                case 16:
                case 8:
                  return -28;
                case 9:
                  return (tt(28), -1);
                default:
                  return -28;
              }
            } catch (e) {
              if (typeof kt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Dt(e, t, n) {
            It.varargs = n;
            try {
              var r = It.getStreamFromFD(e);
              switch (t) {
                case 21509:
                  return r.tty ? 0 : -59;
                case 21505: {
                  if (!r.tty) return -59;
                  if (r.tty.ops.ioctl_tcgets) {
                    var o = r.tty.ops.ioctl_tcgets(r),
                      a = It.get();
                    ((w[a >> 2] = o.c_iflag || 0),
                      (w[(a + 4) >> 2] = o.c_oflag || 0),
                      (w[(a + 8) >> 2] = o.c_cflag || 0),
                      (w[(a + 12) >> 2] = o.c_lflag || 0));
                    for (var i = 0; i < 32; i++)
                      $[(a + i + 17) >> 0] = o.c_cc[i] || 0;
                    return 0;
                  }
                  return 0;
                }
                case 21510:
                case 21511:
                case 21512:
                  return r.tty ? 0 : -59;
                case 21506:
                case 21507:
                case 21508: {
                  if (!r.tty) return -59;
                  if (r.tty.ops.ioctl_tcsets) {
                    for (
                      var a = It.get(),
                        l = w[a >> 2],
                        s = w[(a + 4) >> 2],
                        u = w[(a + 8) >> 2],
                        c = w[(a + 12) >> 2],
                        d = [],
                        i = 0;
                      i < 32;
                      i++
                    )
                      d.push($[(a + i + 17) >> 0]);
                    return r.tty.ops.ioctl_tcsets(r.tty, t, {
                      c_iflag: l,
                      c_oflag: s,
                      c_cflag: u,
                      c_lflag: c,
                      c_cc: d,
                    });
                  }
                  return 0;
                }
                case 21519: {
                  if (!r.tty) return -59;
                  var a = It.get();
                  return ((w[a >> 2] = 0), 0);
                }
                case 21520:
                  return r.tty ? -28 : -59;
                case 21531: {
                  var a = It.get();
                  return kt.ioctl(r, t, a);
                }
                case 21523: {
                  if (!r.tty) return -59;
                  if (r.tty.ops.ioctl_tiocgwinsz) {
                    var m = r.tty.ops.ioctl_tiocgwinsz(r.tty),
                      a = It.get();
                    ((N[a >> 1] = m[0]), (N[(a + 2) >> 1] = m[1]));
                  }
                  return 0;
                }
                case 21524:
                  return r.tty ? 0 : -59;
                case 21515:
                  return r.tty ? 0 : -59;
                default:
                  return -28;
              }
            } catch (e) {
              if (typeof kt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function xt(e, t, n, r) {
            It.varargs = r;
            try {
              ((t = It.getStr(t)), (t = It.calculateAt(e, t)));
              var o = r ? It.get() : 0;
              return kt.open(t, n, o).fd;
            } catch (e) {
              if (typeof kt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function $t(e) {
            if (e === null) return "null";
            var t = typeof e;
            return t === "object" || t === "array" || t === "function"
              ? e.toString()
              : "" + e;
          }
          function Pt() {
            for (var e = new Array(256), t = 0; t < 256; ++t)
              e[t] = String.fromCharCode(t);
            Nt = e;
          }
          var Nt = void 0;
          function Mt(e) {
            for (var t = "", n = e; P[n]; ) t += Nt[P[n++]];
            return t;
          }
          var wt = {},
            At = {},
            Ft = {},
            Ot = void 0;
          function Bt(e) {
            throw new Ot(e);
          }
          var Wt = void 0;
          function qt(e) {
            throw new Wt(e);
          }
          function Ut(e, t, n) {
            e.forEach(function (e) {
              Ft[e] = t;
            });
            function r(t) {
              var r = n(t);
              r.length !== e.length && qt("Mismatched type converter count");
              for (var o = 0; o < e.length; ++o) Ht(e[o], r[o]);
            }
            var o = new Array(t.length),
              a = [],
              i = 0;
            (t.forEach(function (e, t) {
              Object.prototype.hasOwnProperty.call(At, e)
                ? (o[t] = At[e])
                : (a.push(e),
                  Object.prototype.hasOwnProperty.call(wt, e) || (wt[e] = []),
                  wt[e].push(function () {
                    ((o[t] = At[e]), ++i, i === a.length && r(o));
                  }));
            }),
              a.length === 0 && r(o));
          }
          function Vt(e, t, n) {
            n === void 0 && (n = {});
            var r = t.name;
            if (
              (e ||
                Bt(
                  'type "' +
                    r +
                    '" must have a positive integer typeid pointer',
                ),
              Object.prototype.hasOwnProperty.call(At, e))
            ) {
              if (n.ignoreDuplicateRegistrations) return;
              Bt("Cannot register type '" + r + "' twice");
            }
            if (
              ((At[e] = t),
              delete Ft[e],
              Object.prototype.hasOwnProperty.call(wt, e))
            ) {
              var o = wt[e];
              (delete wt[e],
                o.forEach(function (e) {
                  return e();
                }));
            }
          }
          function Ht(e, t, n) {
            if ((n === void 0 && (n = {}), !("argPackAdvance" in t)))
              throw new TypeError(
                "registerType registeredInstance requires argPackAdvance",
              );
            return Vt(e, t, n);
          }
          function Gt(e, t, n) {
            switch (t) {
              case 0:
                return n
                  ? function (t) {
                      return $[t];
                    }
                  : function (t) {
                      return P[t];
                    };
              case 1:
                return n
                  ? function (t) {
                      return N[t >> 1];
                    }
                  : function (t) {
                      return M[t >> 1];
                    };
              case 2:
                return n
                  ? function (t) {
                      return w[t >> 2];
                    }
                  : function (t) {
                      return A[t >> 2];
                    };
              case 3:
                return n
                  ? function (t) {
                      return O[t >> 3];
                    }
                  : function (t) {
                      return B[t >> 3];
                    };
              default:
                throw new TypeError("Unknown integer type: " + e);
            }
          }
          function zt(e, t, n, r, o) {
            t = Mt(t);
            var a = jt(n),
              i = t.indexOf("u") != -1;
            (i && (o = (BigInt(1) << BigInt(64)) - BigInt(1)),
              Ht(e, {
                name: t,
                fromWireType: function (t) {
                  return t;
                },
                toWireType: function (n, a) {
                  if (typeof a != "bigint" && typeof a != "number")
                    throw new TypeError(
                      'Cannot convert "' + $t(a) + '" to ' + this.name,
                    );
                  if (a < r || a > o)
                    throw new TypeError(
                      'Passing a number "' +
                        $t(a) +
                        '" from JS side to C/C++ side to an argument of type "' +
                        t +
                        '", which is outside the valid range [' +
                        r +
                        ", " +
                        o +
                        "]!",
                    );
                  return a;
                },
                argPackAdvance: 8,
                readValueFromPointer: Gt(t, a, !i),
                destructorFunction: null,
              }));
          }
          function jt(e) {
            switch (e) {
              case 1:
                return 0;
              case 2:
                return 1;
              case 4:
                return 2;
              case 8:
                return 3;
              default:
                throw new TypeError("Unknown type size: " + e);
            }
          }
          function Kt(e, t, n, r, o) {
            var a = jt(n);
            ((t = Mt(t)),
              Ht(e, {
                name: t,
                fromWireType: function (t) {
                  return !!t;
                },
                toWireType: function (t, n) {
                  return n ? r : o;
                },
                argPackAdvance: 8,
                readValueFromPointer: function (r) {
                  var e;
                  if (n === 1) e = $;
                  else if (n === 2) e = N;
                  else if (n === 4) e = w;
                  else throw new TypeError("Unknown boolean type size: " + t);
                  return this.fromWireType(e[r >> a]);
                },
                destructorFunction: null,
              }));
          }
          function Qt(e) {
            if (!(this instanceof Rn) || !(e instanceof Rn)) return !1;
            for (
              var t = this.$$.ptrType.registeredClass,
                n = this.$$.ptr,
                r = e.$$.ptrType.registeredClass,
                o = e.$$.ptr;
              t.baseClass;
            )
              ((n = t.upcast(n)), (t = t.baseClass));
            for (; r.baseClass; ) ((o = r.upcast(o)), (r = r.baseClass));
            return t === r && n === o;
          }
          function Xt(e) {
            return {
              count: e.count,
              deleteScheduled: e.deleteScheduled,
              preservePointerOnDelete: e.preservePointerOnDelete,
              ptr: e.ptr,
              ptrType: e.ptrType,
              smartPtr: e.smartPtr,
              smartPtrType: e.smartPtrType,
            };
          }
          function Yt(e) {
            function t(e) {
              return e.$$.ptrType.registeredClass.name;
            }
            Bt(t(e) + " instance already deleted");
          }
          var Jt = !1;
          function Zt(e) {}
          function en(e) {
            e.smartPtr
              ? e.smartPtrType.rawDestructor(e.smartPtr)
              : e.ptrType.registeredClass.rawDestructor(e.ptr);
          }
          function tn(e) {
            e.count.value -= 1;
            var t = e.count.value === 0;
            t && en(e);
          }
          function nn(e, t, n) {
            if (t === n) return e;
            if (n.baseClass === void 0) return null;
            var r = nn(e, t, n.baseClass);
            return r === null ? null : n.downcast(r);
          }
          var rn = {};
          function on() {
            return Object.keys(mn).length;
          }
          function an() {
            var e = [];
            for (var t in mn)
              Object.prototype.hasOwnProperty.call(mn, t) && e.push(mn[t]);
            return e;
          }
          var ln = [];
          function sn() {
            for (; ln.length; ) {
              var e = ln.pop();
              ((e.$$.deleteScheduled = !1), e.delete());
            }
          }
          var un = void 0;
          function cn(e) {
            ((un = e), ln.length && un && un(sn));
          }
          function dn() {
            ((a.getInheritedInstanceCount = on),
              (a.getLiveInheritedInstances = an),
              (a.flushPendingDeletes = sn),
              (a.setDelayFunction = cn));
          }
          var mn = {};
          function pn(e, t) {
            for (
              t === void 0 && Bt("ptr should not be undefined");
              e.baseClass;
            )
              ((t = e.upcast(t)), (e = e.baseClass));
            return t;
          }
          function _n(e, t) {
            return ((t = pn(e, t)), mn[t]);
          }
          function fn(e, t) {
            (!t.ptrType || !t.ptr) &&
              qt("makeClassHandle requires ptr and ptrType");
            var n = !!t.smartPtrType,
              r = !!t.smartPtr;
            return (
              n !== r && qt("Both smartPtrType and smartPtr must be specified"),
              (t.count = { value: 1 }),
              hn(Object.create(e, { $$: { value: t } }))
            );
          }
          function gn(e) {
            var t = this.getPointee(e);
            if (!t) return (this.destructor(e), null);
            var n = _n(this.registeredClass, t);
            if (n !== void 0) {
              if (n.$$.count.value === 0)
                return ((n.$$.ptr = t), (n.$$.smartPtr = e), n.clone());
              var r = n.clone();
              return (this.destructor(e), r);
            }
            function o() {
              return this.isSmartPointer
                ? fn(this.registeredClass.instancePrototype, {
                    ptrType: this.pointeeType,
                    ptr: t,
                    smartPtrType: this,
                    smartPtr: e,
                  })
                : fn(this.registeredClass.instancePrototype, {
                    ptrType: this,
                    ptr: e,
                  });
            }
            var a = this.registeredClass.getActualType(t),
              i = rn[a];
            if (!i) return o.call(this);
            var l;
            this.isConst ? (l = i.constPointerType) : (l = i.pointerType);
            var s = nn(t, this.registeredClass, l.registeredClass);
            return s === null
              ? o.call(this)
              : this.isSmartPointer
                ? fn(l.registeredClass.instancePrototype, {
                    ptrType: l,
                    ptr: s,
                    smartPtrType: this,
                    smartPtr: e,
                  })
                : fn(l.registeredClass.instancePrototype, {
                    ptrType: l,
                    ptr: s,
                  });
          }
          var hn = function (t) {
            return typeof FinalizationRegistry == "undefined"
              ? ((hn = function (t) {
                  return t;
                }),
                t)
              : ((Jt = new FinalizationRegistry(function (e) {
                  (e.leakWarning.stack.replace(/^Error: /, ""), tn(e.$$));
                })),
                (hn = function (t) {
                  var e = t.$$,
                    n = !!e.smartPtr;
                  if (n) {
                    var r = { $$: e },
                      o = e.ptrType.registeredClass;
                    ((r.leakWarning = new Error(
                      "Embind found a leaked C++ instance " +
                        o.name +
                        " <" +
                        Oe(e.ptr) +
                        ">.\nWe'll free it automatically in this case, but this functionality is not reliable across various environments.\nMake sure to invoke .delete() manually once you're done with the instance instead.\nOriginally allocated",
                    )),
                      "captureStackTrace" in Error &&
                        Error.captureStackTrace(r.leakWarning, gn),
                      Jt.register(t, r, t));
                  }
                  return t;
                }),
                (Zt = function (t) {
                  return Jt.unregister(t);
                }),
                hn(t));
          };
          function yn() {
            if ((this.$$.ptr || Yt(this), this.$$.preservePointerOnDelete))
              return ((this.$$.count.value += 1), this);
            var e = hn(
              Object.create(Object.getPrototypeOf(this), {
                $$: { value: Xt(this.$$) },
              }),
            );
            return ((e.$$.count.value += 1), (e.$$.deleteScheduled = !1), e);
          }
          function Cn() {
            (this.$$.ptr || Yt(this),
              this.$$.deleteScheduled &&
                !this.$$.preservePointerOnDelete &&
                Bt("Object already scheduled for deletion"),
              Zt(this),
              tn(this.$$),
              this.$$.preservePointerOnDelete ||
                ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0)));
          }
          function bn() {
            return !this.$$.ptr;
          }
          function vn() {
            return (
              this.$$.ptr || Yt(this),
              this.$$.deleteScheduled &&
                !this.$$.preservePointerOnDelete &&
                Bt("Object already scheduled for deletion"),
              ln.push(this),
              ln.length === 1 && un && un(sn),
              (this.$$.deleteScheduled = !0),
              this
            );
          }
          function Sn() {
            ((Rn.prototype.isAliasOf = Qt),
              (Rn.prototype.clone = yn),
              (Rn.prototype.delete = Cn),
              (Rn.prototype.isDeleted = bn),
              (Rn.prototype.deleteLater = vn));
          }
          function Rn() {}
          var Ln = 48,
            En = 57;
          function kn(e) {
            if (e === void 0) return "_unknown";
            e = e.replace(/[^a-zA-Z0-9_]/g, "$");
            var t = e.charCodeAt(0);
            return t >= Ln && t <= En ? "_" + e : e;
          }
          function In(e, t) {
            var n;
            return (
              (e = kn(e)),
              ((n = {}),
              (n[e] = function () {
                return t.apply(this, arguments);
              }),
              n)[e]
            );
          }
          function Tn(e, t, n) {
            if (e[t].overloadTable === void 0) {
              var r = e[t];
              ((e[t] = function () {
                return (
                  Object.prototype.hasOwnProperty.call(
                    e[t].overloadTable,
                    arguments.length,
                  ) ||
                    Bt(
                      "Function '" +
                        n +
                        "' called with an invalid number of arguments (" +
                        arguments.length +
                        ") - expects one of (" +
                        e[t].overloadTable +
                        ")!",
                    ),
                  e[t].overloadTable[arguments.length].apply(this, arguments)
                );
              }),
                (e[t].overloadTable = []),
                (e[t].overloadTable[r.argCount] = r));
            }
          }
          function Dn(e, t, n) {
            Object.prototype.hasOwnProperty.call(a, e)
              ? ((n === void 0 ||
                  (a[e].overloadTable !== void 0 &&
                    a[e].overloadTable[n] !== void 0)) &&
                  Bt("Cannot register public name '" + e + "' twice"),
                Tn(a, e, e),
                Object.prototype.hasOwnProperty.call(a, n) &&
                  Bt(
                    "Cannot register multiple overloads of a function with the same number of arguments (" +
                      n +
                      ")!",
                  ),
                (a[e].overloadTable[n] = t))
              : ((a[e] = t), n !== void 0 && (a[e].numArguments = n));
          }
          function xn(e, t, n, r, o, a, i, l) {
            ((this.name = e),
              (this.constructor = t),
              (this.instancePrototype = n),
              (this.rawDestructor = r),
              (this.baseClass = o),
              (this.getActualType = a),
              (this.upcast = i),
              (this.downcast = l),
              (this.pureVirtualFunctions = []));
          }
          function $n(e, t, n) {
            for (; t !== n; )
              (t.upcast ||
                Bt(
                  "Expected null or instance of " +
                    n.name +
                    ", got an instance of " +
                    t.name,
                ),
                (e = t.upcast(e)),
                (t = t.baseClass));
            return e;
          }
          function Pn(e, t) {
            if (t === null)
              return (
                this.isReference && Bt("null is not a valid " + this.name),
                0
              );
            (t.$$ || Bt('Cannot pass "' + $t(t) + '" as a ' + this.name),
              t.$$.ptr ||
                Bt(
                  "Cannot pass deleted object as a pointer of type " +
                    this.name,
                ));
            var n = t.$$.ptrType.registeredClass,
              r = $n(t.$$.ptr, n, this.registeredClass);
            return r;
          }
          function Nn(e, t) {
            var n;
            if (t === null)
              return (
                this.isReference && Bt("null is not a valid " + this.name),
                this.isSmartPointer
                  ? ((n = this.rawConstructor()),
                    e !== null && e.push(this.rawDestructor, n),
                    n)
                  : 0
              );
            (t.$$ || Bt('Cannot pass "' + $t(t) + '" as a ' + this.name),
              t.$$.ptr ||
                Bt(
                  "Cannot pass deleted object as a pointer of type " +
                    this.name,
                ),
              !this.isConst &&
                t.$$.ptrType.isConst &&
                Bt(
                  "Cannot convert argument of type " +
                    (t.$$.smartPtrType
                      ? t.$$.smartPtrType.name
                      : t.$$.ptrType.name) +
                    " to parameter type " +
                    this.name,
                ));
            var r = t.$$.ptrType.registeredClass;
            if (
              ((n = $n(t.$$.ptr, r, this.registeredClass)), this.isSmartPointer)
            )
              switch (
                (t.$$.smartPtr === void 0 &&
                  Bt("Passing raw pointer to smart pointer is illegal"),
                this.sharingPolicy)
              ) {
                case 0:
                  t.$$.smartPtrType === this
                    ? (n = t.$$.smartPtr)
                    : Bt(
                        "Cannot convert argument of type " +
                          (t.$$.smartPtrType
                            ? t.$$.smartPtrType.name
                            : t.$$.ptrType.name) +
                          " to parameter type " +
                          this.name,
                      );
                  break;
                case 1:
                  n = t.$$.smartPtr;
                  break;
                case 2:
                  if (t.$$.smartPtrType === this) n = t.$$.smartPtr;
                  else {
                    var o = t.clone();
                    ((n = this.rawShare(
                      n,
                      lr.toHandle(function () {
                        o.delete();
                      }),
                    )),
                      e !== null && e.push(this.rawDestructor, n));
                  }
                  break;
                default:
                  Bt("Unsupporting sharing policy");
              }
            return n;
          }
          function Mn(e, t) {
            if (t === null)
              return (
                this.isReference && Bt("null is not a valid " + this.name),
                0
              );
            (t.$$ || Bt('Cannot pass "' + $t(t) + '" as a ' + this.name),
              t.$$.ptr ||
                Bt(
                  "Cannot pass deleted object as a pointer of type " +
                    this.name,
                ),
              t.$$.ptrType.isConst &&
                Bt(
                  "Cannot convert argument of type " +
                    t.$$.ptrType.name +
                    " to parameter type " +
                    this.name,
                ));
            var n = t.$$.ptrType.registeredClass,
              r = $n(t.$$.ptr, n, this.registeredClass);
            return r;
          }
          function wn(e) {
            return this.fromWireType(w[e >> 2]);
          }
          function An(e) {
            return (this.rawGetPointee && (e = this.rawGetPointee(e)), e);
          }
          function Fn(e) {
            this.rawDestructor && this.rawDestructor(e);
          }
          function On(e) {
            e !== null && e.delete();
          }
          function Bn() {
            ((Wn.prototype.getPointee = An),
              (Wn.prototype.destructor = Fn),
              (Wn.prototype.argPackAdvance = 8),
              (Wn.prototype.readValueFromPointer = wn),
              (Wn.prototype.deleteObject = On),
              (Wn.prototype.fromWireType = gn));
          }
          function Wn(e, t, n, r, o, a, i, l, s, u, c) {
            ((this.name = e),
              (this.registeredClass = t),
              (this.isReference = n),
              (this.isConst = r),
              (this.isSmartPointer = o),
              (this.pointeeType = a),
              (this.sharingPolicy = i),
              (this.rawGetPointee = l),
              (this.rawConstructor = s),
              (this.rawShare = u),
              (this.rawDestructor = c),
              !o && t.baseClass === void 0
                ? r
                  ? ((this.toWireType = Pn), (this.destructorFunction = null))
                  : ((this.toWireType = Mn), (this.destructorFunction = null))
                : (this.toWireType = Nn));
          }
          function qn(e, t, n) {
            (Object.prototype.hasOwnProperty.call(a, e) ||
              qt("Replacing nonexistant public symbol"),
              a[e].overloadTable !== void 0 && n !== void 0
                ? (a[e].overloadTable[n] = t)
                : ((a[e] = t), (a[e].argCount = n)));
          }
          var Un = [],
            Vn = function (t) {
              var e = Un[t];
              return (
                e ||
                  (t >= Un.length && (Un.length = t + 1),
                  (Un[t] = e = U.get(t))),
                x(
                  U.get(t) == e,
                  "JavaScript-side Wasm function table mirror is out of date!",
                ),
                e
              );
            };
          function Hn(e, t) {
            e = Mt(e);
            function n() {
              return Vn(t);
            }
            var r = n();
            return (
              typeof r != "function" &&
                Bt("unknown function pointer with signature " + e + ": " + t),
              r
            );
          }
          function Gn(e, t) {
            var n = In(t, function (e) {
              ((this.name = t), (this.message = e));
              var n = new Error(e).stack;
              n !== void 0 &&
                (this.stack =
                  this.toString() + "\n" + n.replace(/^Error(:[^\n]*)?\n/, ""));
            });
            return (
              (n.prototype = Object.create(e.prototype)),
              (n.prototype.constructor = n),
              (n.prototype.toString = function () {
                return this.message === void 0
                  ? this.name
                  : this.name + ": " + this.message;
              }),
              n
            );
          }
          var zn = void 0;
          function jn(e) {
            var t = Ho(e),
              n = Mt(t);
            return (Uo(t), n);
          }
          function Kn(e, t) {
            var n = [],
              r = {};
            function o(e) {
              if (!r[e] && !At[e]) {
                if (Ft[e]) {
                  Ft[e].forEach(o);
                  return;
                }
                (n.push(e), (r[e] = !0));
              }
            }
            throw (t.forEach(o), new zn(e + ": " + n.map(jn).join([", "])));
          }
          function Qn(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            ((c = Mt(c)),
              (a = Hn(o, a)),
              l && (l = Hn(i, l)),
              u && (u = Hn(s, u)),
              (m = Hn(d, m)));
            var p = kn(c);
            (Dn(p, function () {
              Kn("Cannot construct " + c + " due to unbound types", [r]);
            }),
              Ut([e, t, n], r ? [r] : [], function (t) {
                t = t[0];
                var n, o;
                r
                  ? ((n = t.registeredClass), (o = n.instancePrototype))
                  : (o = Rn.prototype);
                var i = In(p, function () {
                    if (Object.getPrototypeOf(this) !== s)
                      throw new Ot("Use 'new' to construct " + c);
                    if (d.constructor_body === void 0)
                      throw new Ot(c + " has no accessible constructor");
                    var e = d.constructor_body[arguments.length];
                    if (e === void 0)
                      throw new Ot(
                        "Tried to invoke ctor of " +
                          c +
                          " with invalid number of parameters (" +
                          arguments.length +
                          ") - expected (" +
                          Object.keys(d.constructor_body).toString() +
                          ") parameters instead!",
                      );
                    return e.apply(this, arguments);
                  }),
                  s = Object.create(o, { constructor: { value: i } });
                i.prototype = s;
                var d = new xn(c, i, s, m, n, a, l, u);
                d.baseClass &&
                  (d.baseClass.__derivedClasses === void 0 &&
                    (d.baseClass.__derivedClasses = []),
                  d.baseClass.__derivedClasses.push(d));
                var _ = new Wn(c, d, !0, !1, !1),
                  f = new Wn(c + "*", d, !1, !1, !1),
                  g = new Wn(c + " const*", d, !1, !0, !1);
                return (
                  (rn[e] = { pointerType: f, constPointerType: g }),
                  qn(p, i),
                  [_, f, g]
                );
              }));
          }
          function Xn(e, t) {
            for (var n = [], r = 0; r < e; r++) n.push(A[(t + r * 4) >> 2]);
            return n;
          }
          function Yn(e) {
            for (; e.length; ) {
              var t = e.pop(),
                n = e.pop();
              n(t);
            }
          }
          function Jn(e, t, n, r, o, a) {
            var i = t.length;
            (i < 2 &&
              Bt(
                "argTypes array size mismatch! Must at least get return value and 'this' types!",
              ),
              x(!a, "Async bindings are only supported with JSPI."));
            for (
              var l = t[1] !== null && n !== null, s = !1, u = 1;
              u < t.length;
              ++u
            )
              if (t[u] !== null && t[u].destructorFunction === void 0) {
                s = !0;
                break;
              }
            var c = t[0].name !== "void",
              d = i - 2,
              m = new Array(d),
              p = [],
              _ = [];
            return function () {
              (arguments.length !== d &&
                Bt(
                  "function " +
                    e +
                    " called with " +
                    arguments.length +
                    " arguments, expected " +
                    d +
                    " args!",
                ),
                (_.length = 0));
              var n;
              ((p.length = l ? 2 : 1),
                (p[0] = o),
                l && ((n = t[1].toWireType(_, this)), (p[1] = n)));
              for (var a = 0; a < d; ++a)
                ((m[a] = t[a + 2].toWireType(_, arguments[a])), p.push(m[a]));
              var i = r.apply(null, p);
              function u(e) {
                if (s) Yn(_);
                else
                  for (var r = l ? 1 : 2; r < t.length; r++) {
                    var o = r === 1 ? n : m[r - 2];
                    t[r].destructorFunction !== null &&
                      t[r].destructorFunction(o);
                  }
                if (c) return t[0].fromWireType(e);
              }
              return u(i);
            };
          }
          function Zn(e, t, n, r, o, a) {
            x(t > 0);
            var i = Xn(t, n);
            ((o = Hn(r, o)),
              Ut([], [e], function (e) {
                e = e[0];
                var n = "constructor " + e.name;
                if (
                  (e.registeredClass.constructor_body === void 0 &&
                    (e.registeredClass.constructor_body = []),
                  e.registeredClass.constructor_body[t - 1] !== void 0)
                )
                  throw new Ot(
                    "Cannot register multiple constructors with identical number of parameters (" +
                      (t - 1) +
                      ") for class '" +
                      e.name +
                      "'! Overload resolution is currently only performed using the parameter count, not actual type info!",
                  );
                return (
                  (e.registeredClass.constructor_body[t - 1] = function () {
                    Kn(
                      "Cannot construct " + e.name + " due to unbound types",
                      i,
                    );
                  }),
                  Ut([], i, function (r) {
                    return (
                      r.splice(1, 0, null),
                      (e.registeredClass.constructor_body[t - 1] = Jn(
                        n,
                        r,
                        null,
                        o,
                        a,
                      )),
                      []
                    );
                  }),
                  []
                );
              }));
          }
          function er(e, t, n, r, o, a, i, l, s) {
            var u = Xn(n, r);
            ((t = Mt(t)),
              (a = Hn(o, a)),
              Ut([], [e], function (e) {
                e = e[0];
                var r = e.name + "." + t;
                (t.startsWith("@@") && (t = Symbol[t.substring(2)]),
                  l && e.registeredClass.pureVirtualFunctions.push(t));
                function o() {
                  Kn("Cannot call " + r + " due to unbound types", u);
                }
                var c = e.registeredClass.instancePrototype,
                  d = c[t];
                return (
                  d === void 0 ||
                  (d.overloadTable === void 0 &&
                    d.className !== e.name &&
                    d.argCount === n - 2)
                    ? ((o.argCount = n - 2), (o.className = e.name), (c[t] = o))
                    : (Tn(c, t, r), (c[t].overloadTable[n - 2] = o)),
                  Ut([], u, function (o) {
                    var l = Jn(r, o, e, a, i, s);
                    return (
                      c[t].overloadTable === void 0
                        ? ((l.argCount = n - 2), (c[t] = l))
                        : (c[t].overloadTable[n - 2] = l),
                      []
                    );
                  }),
                  []
                );
              }));
          }
          function tr() {
            Object.assign(nr.prototype, {
              get: function (t) {
                return (
                  x(this.allocated[t] !== void 0, "invalid handle: " + t),
                  this.allocated[t]
                );
              },
              has: function (t) {
                return this.allocated[t] !== void 0;
              },
              allocate: function (t) {
                var e = this.freelist.pop() || this.allocated.length;
                return ((this.allocated[e] = t), e);
              },
              free: function (t) {
                (x(this.allocated[t] !== void 0),
                  (this.allocated[t] = void 0),
                  this.freelist.push(t));
              },
            });
          }
          function nr() {
            ((this.allocated = [void 0]), (this.freelist = []));
          }
          var rr = new nr();
          function or(e) {
            e >= rr.reserved && --rr.get(e).refcount === 0 && rr.free(e);
          }
          function ar() {
            for (var e = 0, t = rr.reserved; t < rr.allocated.length; ++t)
              rr.allocated[t] !== void 0 && ++e;
            return e;
          }
          function ir() {
            (rr.allocated.push(
              { value: void 0 },
              { value: null },
              { value: !0 },
              { value: !1 },
            ),
              (rr.reserved = rr.allocated.length),
              (a.count_emval_handles = ar));
          }
          var lr = {
            toValue: function (t) {
              return (
                t || Bt("Cannot use deleted val. handle = " + t),
                rr.get(t).value
              );
            },
            toHandle: function (t) {
              switch (t) {
                case void 0:
                  return 1;
                case null:
                  return 2;
                case !0:
                  return 3;
                case !1:
                  return 4;
                default:
                  return rr.allocate({ refcount: 1, value: t });
              }
            },
          };
          function sr(e, t) {
            ((t = Mt(t)),
              Ht(e, {
                name: t,
                fromWireType: function (t) {
                  var e = lr.toValue(t);
                  return (or(t), e);
                },
                toWireType: function (t, n) {
                  return lr.toHandle(n);
                },
                argPackAdvance: 8,
                readValueFromPointer: wn,
                destructorFunction: null,
              }));
          }
          function ur(e, t) {
            switch (t) {
              case 2:
                return function (e) {
                  return this.fromWireType(F[e >> 2]);
                };
              case 3:
                return function (e) {
                  return this.fromWireType(W[e >> 3]);
                };
              default:
                throw new TypeError("Unknown float type: " + e);
            }
          }
          function cr(e, t, n) {
            var r = jt(n);
            ((t = Mt(t)),
              Ht(e, {
                name: t,
                fromWireType: function (t) {
                  return t;
                },
                toWireType: function (t, n) {
                  if (typeof n != "number" && typeof n != "boolean")
                    throw new TypeError(
                      "Cannot convert " + $t(n) + " to " + this.name,
                    );
                  return n;
                },
                argPackAdvance: 8,
                readValueFromPointer: ur(t, r),
                destructorFunction: null,
              }));
          }
          function dr(e, t, n, r, o) {
            ((t = Mt(t)), o === -1 && (o = 4294967295));
            var a = jt(n),
              i = function (t) {
                return t;
              };
            if (r === 0) {
              var l = 32 - 8 * n;
              i = function (t) {
                return (t << l) >>> l;
              };
            }
            var s = t.includes("unsigned"),
              u = function (n, a) {
                if (typeof n != "number" && typeof n != "boolean")
                  throw new TypeError('Cannot convert "' + $t(n) + '" to ' + a);
                if (n < r || n > o)
                  throw new TypeError(
                    'Passing a number "' +
                      $t(n) +
                      '" from JS side to C/C++ side to an argument of type "' +
                      t +
                      '", which is outside the valid range [' +
                      r +
                      ", " +
                      o +
                      "]!",
                  );
              },
              c;
            (s
              ? (c = function (t, n) {
                  return (u(n, this.name), n >>> 0);
                })
              : (c = function (t, n) {
                  return (u(n, this.name), n);
                }),
              Ht(e, {
                name: t,
                fromWireType: i,
                toWireType: c,
                argPackAdvance: 8,
                readValueFromPointer: Gt(t, a, r !== 0),
                destructorFunction: null,
              }));
          }
          function mr(e, t, n) {
            var r = [
                Int8Array,
                Uint8Array,
                Int16Array,
                Uint16Array,
                Int32Array,
                Uint32Array,
                Float32Array,
                Float64Array,
                BigInt64Array,
                BigUint64Array,
              ],
              o = r[t];
            function a(e) {
              e = e >> 2;
              var t = A,
                n = t[e],
                r = t[e + 1];
              return new o(t.buffer, r, n);
            }
            ((n = Mt(n)),
              Ht(
                e,
                {
                  name: n,
                  fromWireType: a,
                  argPackAdvance: 8,
                  readValueFromPointer: a,
                },
                { ignoreDuplicateRegistrations: !0 },
              ));
          }
          var pr = function (t, n, r) {
            return (
              x(
                typeof r == "number",
                "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
              ),
              st(t, P, n, r)
            );
          };
          function _r(e, t) {
            t = Mt(t);
            var n = t === "std::string";
            Ht(e, {
              name: t,
              fromWireType: function (t) {
                var e = A[t >> 2],
                  r = t + 4,
                  o;
                if (n)
                  for (var a = r, i = 0; i <= e; ++i) {
                    var l = r + i;
                    if (i == e || P[l] == 0) {
                      var s = l - a,
                        u = Me(a, s);
                      (o === void 0 ? (o = u) : ((o += "\0"), (o += u)),
                        (a = l + 1));
                    }
                  }
                else {
                  for (var c = new Array(e), i = 0; i < e; ++i)
                    c[i] = String.fromCharCode(P[r + i]);
                  o = c.join("");
                }
                return (Uo(t), o);
              },
              toWireType: function (t, r) {
                r instanceof ArrayBuffer && (r = new Uint8Array(r));
                var e,
                  o = typeof r == "string";
                (o ||
                  r instanceof Uint8Array ||
                  r instanceof Uint8ClampedArray ||
                  r instanceof Int8Array ||
                  Bt("Cannot pass non-string to std::string"),
                  n && o ? (e = lt(r)) : (e = r.length));
                var a = qo(4 + e + 1),
                  i = a + 4;
                if (((A[a >> 2] = e), n && o)) pr(r, i, e + 1);
                else if (o)
                  for (var l = 0; l < e; ++l) {
                    var s = r.charCodeAt(l);
                    (s > 255 &&
                      (Uo(i),
                      Bt(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      )),
                      (P[i + l] = s));
                  }
                else for (var l = 0; l < e; ++l) P[i + l] = r[l];
                return (t !== null && t.push(Uo, a), a);
              },
              argPackAdvance: 8,
              readValueFromPointer: wn,
              destructorFunction: function (t) {
                Uo(t);
              },
            });
          }
          var fr =
              typeof TextDecoder != "undefined"
                ? new TextDecoder("utf-16le")
                : void 0,
            gr = function (t, n) {
              x(
                t % 2 == 0,
                "Pointer passed to UTF16ToString must be aligned to two bytes!",
              );
              for (var e = t, r = e >> 1, o = r + n / 2; !(r >= o) && M[r]; )
                ++r;
              if (((e = r << 1), e - t > 32 && fr))
                return fr.decode(P.subarray(t, e));
              for (var a = "", i = 0; !(i >= n / 2); ++i) {
                var l = N[(t + i * 2) >> 1];
                if (l == 0) break;
                a += String.fromCharCode(l);
              }
              return a;
            },
            hr = function (t, n, r) {
              if (
                (x(
                  n % 2 == 0,
                  "Pointer passed to stringToUTF16 must be aligned to two bytes!",
                ),
                x(
                  typeof r == "number",
                  "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
                ),
                r === void 0 && (r = 2147483647),
                r < 2)
              )
                return 0;
              r -= 2;
              for (
                var e = n, o = r < t.length * 2 ? r / 2 : t.length, a = 0;
                a < o;
                ++a
              ) {
                var i = t.charCodeAt(a);
                ((N[n >> 1] = i), (n += 2));
              }
              return ((N[n >> 1] = 0), n - e);
            },
            yr = function (t) {
              return t.length * 2;
            },
            Cr = function (t, n) {
              x(
                t % 4 == 0,
                "Pointer passed to UTF32ToString must be aligned to four bytes!",
              );
              for (var e = 0, r = ""; !(e >= n / 4); ) {
                var o = w[(t + e * 4) >> 2];
                if (o == 0) break;
                if ((++e, o >= 65536)) {
                  var a = o - 65536;
                  r += String.fromCharCode(
                    55296 | (a >> 10),
                    56320 | (a & 1023),
                  );
                } else r += String.fromCharCode(o);
              }
              return r;
            },
            br = function (t, n, r) {
              if (
                (x(
                  n % 4 == 0,
                  "Pointer passed to stringToUTF32 must be aligned to four bytes!",
                ),
                x(
                  typeof r == "number",
                  "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
                ),
                r === void 0 && (r = 2147483647),
                r < 4)
              )
                return 0;
              for (var e = n, o = e + r - 4, a = 0; a < t.length; ++a) {
                var i = t.charCodeAt(a);
                if (i >= 55296 && i <= 57343) {
                  var l = t.charCodeAt(++a);
                  i = (65536 + ((i & 1023) << 10)) | (l & 1023);
                }
                if (((w[n >> 2] = i), (n += 4), n + 4 > o)) break;
              }
              return ((w[n >> 2] = 0), n - e);
            },
            vr = function (t) {
              for (var e = 0, n = 0; n < t.length; ++n) {
                var r = t.charCodeAt(n);
                (r >= 55296 && r <= 57343 && ++n, (e += 4));
              }
              return e;
            },
            Sr = function (t, n, r) {
              r = Mt(r);
              var e, o, a, i, l;
              (n === 2
                ? ((e = gr),
                  (o = hr),
                  (i = yr),
                  (a = function () {
                    return M;
                  }),
                  (l = 1))
                : n === 4 &&
                  ((e = Cr),
                  (o = br),
                  (i = vr),
                  (a = function () {
                    return A;
                  }),
                  (l = 2)),
                Ht(t, {
                  name: r,
                  fromWireType: function (r) {
                    for (
                      var t = A[r >> 2], o = a(), i, s = r + 4, u = 0;
                      u <= t;
                      ++u
                    ) {
                      var c = r + 4 + u * n;
                      if (u == t || o[c >> l] == 0) {
                        var d = c - s,
                          m = e(s, d);
                        (i === void 0 ? (i = m) : ((i += "\0"), (i += m)),
                          (s = c + n));
                      }
                    }
                    return (Uo(r), i);
                  },
                  toWireType: function (t, a) {
                    typeof a != "string" &&
                      Bt("Cannot pass non-string to C++ string type " + r);
                    var e = i(a),
                      s = qo(4 + e + n);
                    return (
                      (A[s >> 2] = e >> l),
                      o(a, s + 4, e + n),
                      t !== null && t.push(Uo, s),
                      s
                    );
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: wn,
                  destructorFunction: function (t) {
                    Uo(t);
                  },
                }));
            };
          function Rr(e, t) {
            ((t = Mt(t)),
              Ht(e, {
                isVoid: !0,
                name: t,
                argPackAdvance: 0,
                fromWireType: function () {},
                toWireType: function (t, n) {},
              }));
          }
          var Lr = !0,
            Er = function () {
              return Lr;
            };
          function kr(e, t) {
            var n = At[e];
            return (n === void 0 && Bt(t + " has unknown type " + jn(e)), n);
          }
          function Ir(e, t, n) {
            ((e = lr.toValue(e)), (t = kr(t, "emval::as")));
            var r = [],
              o = lr.toHandle(r);
            return ((A[n >> 2] = o), t.toWireType(r, e));
          }
          var Tr = {};
          function Dr(e) {
            var t = Tr[e];
            return t === void 0 ? Mt(e) : t;
          }
          var xr = [];
          function $r(e, t, n, r) {
            ((e = xr[e]), (t = lr.toValue(t)), (n = Dr(n)), e(t, n, null, r));
          }
          function Pr() {
            if (typeof globalThis == "object") return globalThis;
            function e(e) {
              e.$$$embind_global$$$ = e;
              var t =
                typeof $$$embind_global$$$ == "object" &&
                e.$$$embind_global$$$ == e;
              return (t || delete e.$$$embind_global$$$, t);
            }
            if (
              typeof $$$embind_global$$$ == "object" ||
              (typeof t == "object" && e(t)
                ? ($$$embind_global$$$ = t)
                : typeof self == "object" &&
                  e(self) &&
                  ($$$embind_global$$$ = self),
              typeof $$$embind_global$$$ == "object")
            )
              return $$$embind_global$$$;
            throw Error("unable to get global object.");
          }
          function Nr(e) {
            return e === 0
              ? lr.toHandle(Pr())
              : ((e = Dr(e)), lr.toHandle(Pr()[e]));
          }
          function Mr(e) {
            var t = xr.length;
            return (xr.push(e), t);
          }
          function wr(e, t) {
            for (var n = new Array(e), r = 0; r < e; ++r)
              n[r] = kr(A[(t + r * 4) >> 2], "parameter " + r);
            return n;
          }
          var Ar = [];
          function Fr(e, t) {
            var n = wr(e, t),
              r = n[0],
              o =
                r.name +
                "_$" +
                n
                  .slice(1)
                  .map(function (e) {
                    return e.name;
                  })
                  .join("_") +
                "$",
              a = Ar[o];
            if (a !== void 0) return a;
            var i = new Array(e - 1),
              l = function (o, a, l, s) {
                for (var t = 0, u = 0; u < e - 1; ++u)
                  ((i[u] = n[u + 1].readValueFromPointer(s + t)),
                    (t += n[u + 1].argPackAdvance));
                for (var c = o[a].apply(o, i), u = 0; u < e - 1; ++u)
                  n[u + 1].deleteObject && n[u + 1].deleteObject(i[u]);
                if (!r.isVoid) return r.toWireType(l, c);
              };
            return ((a = Mr(l)), (Ar[o] = a), a);
          }
          function Or(e, t) {
            return (
              (e = lr.toValue(e)),
              (t = lr.toValue(t)),
              lr.toHandle(e[t])
            );
          }
          function Br(e) {
            e > 4 && (rr.get(e).refcount += 1);
          }
          function Wr(e) {
            var t = new Array(e + 1);
            return function (n, r, o) {
              t[0] = n;
              for (var a = 0; a < e; ++a) {
                var i = kr(A[(r + a * 4) >> 2], "parameter " + a);
                ((t[a + 1] = i.readValueFromPointer(o)),
                  (o += i.argPackAdvance));
              }
              var l = new (n.bind.apply(n, t))();
              return lr.toHandle(l);
            };
          }
          var qr = {};
          function Ur(e, t, n, r) {
            e = lr.toValue(e);
            var o = qr[t];
            return (o || ((o = Wr(t)), (qr[t] = o)), o(e, n, r));
          }
          function Vr() {
            return lr.toHandle([]);
          }
          function Hr(e) {
            return lr.toHandle(Dr(e));
          }
          function Gr() {
            return lr.toHandle({});
          }
          function zr(e) {
            var t = lr.toValue(e);
            (Yn(t), or(e));
          }
          function jr(e, t, n) {
            ((e = lr.toValue(e)),
              (t = lr.toValue(t)),
              (n = lr.toValue(n)),
              (e[t] = n));
          }
          function Kr(e, t) {
            e = kr(e, "_emval_take_value");
            var n = e.readValueFromPointer(t);
            return lr.toHandle(n);
          }
          var Qr = 9007199254740992,
            Xr = -9007199254740992;
          function Yr(e) {
            return e < Xr || e > Qr ? NaN : Number(e);
          }
          function Jr(e, t) {
            ((e = Yr(e)), (t = Yr(t)));
            var n = new Date(e * 1e3);
            ((w[t >> 2] = n.getUTCSeconds()),
              (w[(t + 4) >> 2] = n.getUTCMinutes()),
              (w[(t + 8) >> 2] = n.getUTCHours()),
              (w[(t + 12) >> 2] = n.getUTCDate()),
              (w[(t + 16) >> 2] = n.getUTCMonth()),
              (w[(t + 20) >> 2] = n.getUTCFullYear() - 1900),
              (w[(t + 24) >> 2] = n.getUTCDay()));
            var r = Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
              o = ((n.getTime() - r) / (1e3 * 60 * 60 * 24)) | 0;
            w[(t + 28) >> 2] = o;
          }
          var Zr = function (t) {
              var e = lt(t) + 1,
                n = qo(e);
              return (n && pr(t, n, e), n);
            },
            eo = function (t, n, r) {
              var e = new Date().getFullYear(),
                o = new Date(e, 0, 1),
                a = new Date(e, 6, 1),
                i = o.getTimezoneOffset(),
                l = a.getTimezoneOffset(),
                s = Math.max(i, l);
              ((A[t >> 2] = s * 60), (w[n >> 2] = +(i != l)));
              function u(e) {
                var t = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                return t ? t[1] : "GMT";
              }
              var c = u(o),
                d = u(a),
                m = Zr(c),
                p = Zr(d);
              l < i
                ? ((A[r >> 2] = m), (A[(r + 4) >> 2] = p))
                : ((A[r >> 2] = p), (A[(r + 4) >> 2] = m));
            },
            to = function () {
              ue("native code called abort()");
            };
          function no() {
            return Date.now();
          }
          var ro;
          ro = function () {
            return performance.now();
          };
          var oo = function () {
              return 2147483648;
            },
            ao = function (t) {
              var e = k.buffer,
                n = (t - e.byteLength + 65535) >>> 16;
              try {
                return (k.grow(n), q(), 1);
              } catch (n) {
                R(
                  "growMemory: Attempted to grow heap from " +
                    e.byteLength +
                    " bytes to " +
                    t +
                    " bytes, but got error: " +
                    n,
                );
              }
            },
            io = function (t) {
              var e = P.length;
              ((t >>>= 0), x(t > e));
              var n = oo();
              if (t > n)
                return (
                  R(
                    "Cannot enlarge memory, asked to go up to " +
                      t +
                      " bytes, but the limit is " +
                      n +
                      " bytes!",
                  ),
                  !1
                );
              for (
                var r = function (t, n) {
                    return t + ((n - (t % n)) % n);
                  },
                  o = 1;
                o <= 4;
                o *= 2
              ) {
                var a = e * (1 + 0.2 / o);
                a = Math.min(a, t + 100663296);
                var i = Math.min(n, r(Math.max(t, a), 65536)),
                  l = ao(i);
                if (l) return !0;
              }
              return (
                R(
                  "Failed to grow the heap from " +
                    e +
                    " bytes to " +
                    i +
                    " bytes, not enough memory!",
                ),
                !1
              );
            },
            lo = {},
            so = function () {
              return c || "./this.program";
            },
            uo = function () {
              if (!uo.strings) {
                var e =
                    (
                      (typeof navigator == "object" &&
                        navigator.languages &&
                        navigator.languages[0]) ||
                      "C"
                    ).replace("-", "_") + ".UTF-8",
                  t = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: e,
                    _: so(),
                  };
                for (var n in lo)
                  lo[n] === void 0 ? delete t[n] : (t[n] = lo[n]);
                var r = [];
                for (var n in t) r.push(n + "=" + t[n]);
                uo.strings = r;
              }
              return uo.strings;
            },
            co = function (t, n) {
              for (var e = 0; e < t.length; ++e)
                (x(t.charCodeAt(e) === (t.charCodeAt(e) & 255)),
                  ($[n++ >> 0] = t.charCodeAt(e)));
              $[n >> 0] = 0;
            },
            mo = function (t, n) {
              var e = 0;
              return (
                uo().forEach(function (r, o) {
                  var a = n + e;
                  ((A[(t + o * 4) >> 2] = a), co(r, a), (e += r.length + 1));
                }),
                0
              );
            },
            po = function (t, n) {
              var e = uo();
              A[t >> 2] = e.length;
              var r = 0;
              return (
                e.forEach(function (e) {
                  r += e.length + 1;
                }),
                (A[n >> 2] = r),
                0
              );
            };
          function _o(e) {
            try {
              var t = It.getStreamFromFD(e);
              return (kt.close(t), 0);
            } catch (e) {
              if (typeof kt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var fo = function (t, n, r, o) {
            for (var e = 0, a = 0; a < r; a++) {
              var i = A[n >> 2],
                l = A[(n + 4) >> 2];
              n += 8;
              var s = kt.read(t, $, i, l, o);
              if (s < 0) return -1;
              if (((e += s), s < l)) break;
              typeof o != "undefined" && (o += s);
            }
            return e;
          };
          function go(e, t, n, r) {
            try {
              var o = It.getStreamFromFD(e),
                a = fo(o, t, n);
              return ((A[r >> 2] = a), 0);
            } catch (e) {
              if (typeof kt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          function ho(e, t, n, r) {
            ((t = Yr(t)), (r = Yr(r)));
            try {
              if (isNaN(t)) return 61;
              var o = It.getStreamFromFD(e);
              return (
                kt.llseek(o, t, n),
                (O[r >> 3] = BigInt(o.position)),
                o.getdents && t === 0 && n === 0 && (o.getdents = null),
                0
              );
            } catch (e) {
              if (typeof kt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var yo = function (t, n, r, o) {
            for (var e = 0, a = 0; a < r; a++) {
              var i = A[n >> 2],
                l = A[(n + 4) >> 2];
              n += 8;
              var s = kt.write(t, $, i, l, o);
              if (s < 0) return -1;
              ((e += s), typeof o != "undefined" && (o += s));
            }
            return e;
          };
          function Co(e, t, n, r) {
            try {
              var o = It.getStreamFromFD(e),
                a = yo(o, t, n);
              return ((A[r >> 2] = a), 0);
            } catch (e) {
              if (typeof kt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var bo = function (t) {
              return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
            },
            vo = function (t, n) {
              for (var e = 0, r = 0; r <= n; e += t[r++]);
              return e;
            },
            So = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            Ro = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            Lo = function (t, n) {
              for (var e = new Date(t.getTime()); n > 0; ) {
                var r = bo(e.getFullYear()),
                  o = e.getMonth(),
                  a = (r ? So : Ro)[o];
                if (n > a - e.getDate())
                  ((n -= a - e.getDate() + 1),
                    e.setDate(1),
                    o < 11
                      ? e.setMonth(o + 1)
                      : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1)));
                else return (e.setDate(e.getDate() + n), e);
              }
              return e;
            },
            Eo = function (t, n) {
              (x(
                t.length >= 0,
                "writeArrayToMemory array must have a length (should be an array or typed array)",
              ),
                $.set(t, n));
            },
            ko = function (t, n, r, o) {
              var e = w[(o + 40) >> 2],
                a = {
                  tm_sec: w[o >> 2],
                  tm_min: w[(o + 4) >> 2],
                  tm_hour: w[(o + 8) >> 2],
                  tm_mday: w[(o + 12) >> 2],
                  tm_mon: w[(o + 16) >> 2],
                  tm_year: w[(o + 20) >> 2],
                  tm_wday: w[(o + 24) >> 2],
                  tm_yday: w[(o + 28) >> 2],
                  tm_isdst: w[(o + 32) >> 2],
                  tm_gmtoff: w[(o + 36) >> 2],
                  tm_zone: e ? Me(e) : "",
                },
                i = Me(r),
                l = {
                  "%c": "%a %b %d %H:%M:%S %Y",
                  "%D": "%m/%d/%y",
                  "%F": "%Y-%m-%d",
                  "%h": "%b",
                  "%r": "%I:%M:%S %p",
                  "%R": "%H:%M",
                  "%T": "%H:%M:%S",
                  "%x": "%m/%d/%y",
                  "%X": "%H:%M:%S",
                  "%Ec": "%c",
                  "%EC": "%C",
                  "%Ex": "%m/%d/%y",
                  "%EX": "%H:%M:%S",
                  "%Ey": "%y",
                  "%EY": "%Y",
                  "%Od": "%d",
                  "%Oe": "%e",
                  "%OH": "%H",
                  "%OI": "%I",
                  "%Om": "%m",
                  "%OM": "%M",
                  "%OS": "%S",
                  "%Ou": "%u",
                  "%OU": "%U",
                  "%OV": "%V",
                  "%Ow": "%w",
                  "%OW": "%W",
                  "%Oy": "%y",
                };
              for (var s in l) i = i.replace(new RegExp(s, "g"), l[s]);
              var u = [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                c = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ];
              function d(e, t, n) {
                for (
                  var r = typeof e == "number" ? e.toString() : e || "";
                  r.length < t;
                )
                  r = n[0] + r;
                return r;
              }
              function m(e, t) {
                return d(e, t, "0");
              }
              function p(e, t) {
                function n(e) {
                  return e < 0 ? -1 : e > 0 ? 1 : 0;
                }
                var r;
                return (
                  (r = n(e.getFullYear() - t.getFullYear())) === 0 &&
                    (r = n(e.getMonth() - t.getMonth())) === 0 &&
                    (r = n(e.getDate() - t.getDate())),
                  r
                );
              }
              function _(e) {
                switch (e.getDay()) {
                  case 0:
                    return new Date(e.getFullYear() - 1, 11, 29);
                  case 1:
                    return e;
                  case 2:
                    return new Date(e.getFullYear(), 0, 3);
                  case 3:
                    return new Date(e.getFullYear(), 0, 2);
                  case 4:
                    return new Date(e.getFullYear(), 0, 1);
                  case 5:
                    return new Date(e.getFullYear() - 1, 11, 31);
                  case 6:
                    return new Date(e.getFullYear() - 1, 11, 30);
                }
              }
              function f(e) {
                var t = Lo(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                  n = new Date(t.getFullYear(), 0, 4),
                  r = new Date(t.getFullYear() + 1, 0, 4),
                  o = _(n),
                  a = _(r);
                return p(o, t) <= 0
                  ? p(a, t) <= 0
                    ? t.getFullYear() + 1
                    : t.getFullYear()
                  : t.getFullYear() - 1;
              }
              var g = {
                "%a": function (t) {
                  return u[t.tm_wday].substring(0, 3);
                },
                "%A": function (t) {
                  return u[t.tm_wday];
                },
                "%b": function (t) {
                  return c[t.tm_mon].substring(0, 3);
                },
                "%B": function (t) {
                  return c[t.tm_mon];
                },
                "%C": function (t) {
                  var e = t.tm_year + 1900;
                  return m((e / 100) | 0, 2);
                },
                "%d": function (t) {
                  return m(t.tm_mday, 2);
                },
                "%e": function (t) {
                  return d(t.tm_mday, 2, " ");
                },
                "%g": function (t) {
                  return f(t).toString().substring(2);
                },
                "%G": function (t) {
                  return f(t);
                },
                "%H": function (t) {
                  return m(t.tm_hour, 2);
                },
                "%I": function (t) {
                  var e = t.tm_hour;
                  return (e == 0 ? (e = 12) : e > 12 && (e -= 12), m(e, 2));
                },
                "%j": function (t) {
                  return m(
                    t.tm_mday +
                      vo(bo(t.tm_year + 1900) ? So : Ro, t.tm_mon - 1),
                    3,
                  );
                },
                "%m": function (t) {
                  return m(t.tm_mon + 1, 2);
                },
                "%M": function (t) {
                  return m(t.tm_min, 2);
                },
                "%n": function () {
                  return "\n";
                },
                "%p": function (t) {
                  return t.tm_hour >= 0 && t.tm_hour < 12 ? "AM" : "PM";
                },
                "%S": function (t) {
                  return m(t.tm_sec, 2);
                },
                "%t": function () {
                  return "	";
                },
                "%u": function (t) {
                  return t.tm_wday || 7;
                },
                "%U": function (t) {
                  var e = t.tm_yday + 7 - t.tm_wday;
                  return m(Math.floor(e / 7), 2);
                },
                "%V": function (t) {
                  var e = Math.floor(
                    (t.tm_yday + 7 - ((t.tm_wday + 6) % 7)) / 7,
                  );
                  if (((t.tm_wday + 371 - t.tm_yday - 2) % 7 <= 2 && e++, e)) {
                    if (e == 53) {
                      var r = (t.tm_wday + 371 - t.tm_yday) % 7;
                      r != 4 && (r != 3 || !bo(t.tm_year)) && (e = 1);
                    }
                  } else {
                    e = 52;
                    var n = (t.tm_wday + 7 - t.tm_yday - 1) % 7;
                    (n == 4 || (n == 5 && bo((t.tm_year % 400) - 1))) && e++;
                  }
                  return m(e, 2);
                },
                "%w": function (t) {
                  return t.tm_wday;
                },
                "%W": function (t) {
                  var e = t.tm_yday + 7 - ((t.tm_wday + 6) % 7);
                  return m(Math.floor(e / 7), 2);
                },
                "%y": function (t) {
                  return (t.tm_year + 1900).toString().substring(2);
                },
                "%Y": function (t) {
                  return t.tm_year + 1900;
                },
                "%z": function (t) {
                  var e = t.tm_gmtoff,
                    n = e >= 0;
                  return (
                    (e = Math.abs(e) / 60),
                    (e = (e / 60) * 100 + (e % 60)),
                    (n ? "+" : "-") + ("0000" + e).slice(-4)
                  );
                },
                "%Z": function (t) {
                  return t.tm_zone;
                },
                "%%": function () {
                  return "%";
                },
              };
              i = i.replace(/%%/g, "\0\0");
              for (var s in g)
                i.includes(s) && (i = i.replace(new RegExp(s, "g"), g[s](a)));
              i = i.replace(/\0\0/g, "%");
              var h = ut(i, !1);
              return h.length > n ? 0 : (Eo(h, t), h.length - 1);
            },
            Io = function (t, n, r, o, a) {
              return ko(t, n, r, o);
            };
          function To(e) {
            var t = a["_" + e];
            return (
              x(
                t,
                "Cannot call unknown function " +
                  e +
                  ", make sure it is exported",
              ),
              t
            );
          }
          var Do = function (t) {
              var e = lt(t) + 1,
                n = na(e);
              return (pr(t, n, e), n);
            },
            xo = function (t, n, r, o, a) {
              var e = {
                string: function (t) {
                  var e = 0;
                  return (t != null && t !== 0 && (e = Do(t)), e);
                },
                array: function (t) {
                  var e = na(t.length);
                  return (Eo(t, e), e);
                },
              };
              function i(e) {
                return n === "string" ? Me(e) : n === "boolean" ? !!e : e;
              }
              var l = To(t),
                s = [],
                u = 0;
              if ((x(n !== "array", 'Return type should not be "array".'), o))
                for (var c = 0; c < o.length; c++) {
                  var d = e[r[c]];
                  d ? (u === 0 && (u = ea()), (s[c] = d(o[c]))) : (s[c] = o[c]);
                }
              var m = l.apply(null, s);
              function p(e) {
                return (u !== 0 && ta(u), i(e));
              }
              return ((m = p(m)), m);
            };
          function $o(e, t, n, r) {
            return function () {
              return xo(e, t, n, arguments, r);
            };
          }
          var Po = Zr,
            No = function (t, n, r, o) {
              (t || (t = this),
                (this.parent = t),
                (this.mount = t.mount),
                (this.mounted = null),
                (this.id = kt.nextInode++),
                (this.name = n),
                (this.mode = r),
                (this.node_ops = {}),
                (this.stream_ops = {}),
                (this.rdev = o));
            },
            Mo = 365,
            wo = 146;
          (Object.defineProperties(No.prototype, {
            read: {
              get: function () {
                return (this.mode & Mo) === Mo;
              },
              set: function (t) {
                t ? (this.mode |= Mo) : (this.mode &= ~Mo);
              },
            },
            write: {
              get: function () {
                return (this.mode & wo) === wo;
              },
              set: function (t) {
                t ? (this.mode |= wo) : (this.mode &= ~wo);
              },
            },
            isFolder: {
              get: function () {
                return kt.isDir(this.mode);
              },
            },
            isDevice: {
              get: function () {
                return kt.isChrdev(this.mode);
              },
            },
          }),
            (kt.FSNode = No),
            (kt.createPreloadedFile = Ct),
            kt.staticInit(),
            (Rt = {
              EPERM: 63,
              ENOENT: 44,
              ESRCH: 71,
              EINTR: 27,
              EIO: 29,
              ENXIO: 60,
              E2BIG: 1,
              ENOEXEC: 45,
              EBADF: 8,
              ECHILD: 12,
              EAGAIN: 6,
              EWOULDBLOCK: 6,
              ENOMEM: 48,
              EACCES: 2,
              EFAULT: 21,
              ENOTBLK: 105,
              EBUSY: 10,
              EEXIST: 20,
              EXDEV: 75,
              ENODEV: 43,
              ENOTDIR: 54,
              EISDIR: 31,
              EINVAL: 28,
              ENFILE: 41,
              EMFILE: 33,
              ENOTTY: 59,
              ETXTBSY: 74,
              EFBIG: 22,
              ENOSPC: 51,
              ESPIPE: 70,
              EROFS: 69,
              EMLINK: 34,
              EPIPE: 64,
              EDOM: 18,
              ERANGE: 68,
              ENOMSG: 49,
              EIDRM: 24,
              ECHRNG: 106,
              EL2NSYNC: 156,
              EL3HLT: 107,
              EL3RST: 108,
              ELNRNG: 109,
              EUNATCH: 110,
              ENOCSI: 111,
              EL2HLT: 112,
              EDEADLK: 16,
              ENOLCK: 46,
              EBADE: 113,
              EBADR: 114,
              EXFULL: 115,
              ENOANO: 104,
              EBADRQC: 103,
              EBADSLT: 102,
              EDEADLOCK: 16,
              EBFONT: 101,
              ENOSTR: 100,
              ENODATA: 116,
              ETIME: 117,
              ENOSR: 118,
              ENONET: 119,
              ENOPKG: 120,
              EREMOTE: 121,
              ENOLINK: 47,
              EADV: 122,
              ESRMNT: 123,
              ECOMM: 124,
              EPROTO: 65,
              EMULTIHOP: 36,
              EDOTDOT: 125,
              EBADMSG: 9,
              ENOTUNIQ: 126,
              EBADFD: 127,
              EREMCHG: 128,
              ELIBACC: 129,
              ELIBBAD: 130,
              ELIBSCN: 131,
              ELIBMAX: 132,
              ELIBEXEC: 133,
              ENOSYS: 52,
              ENOTEMPTY: 55,
              ENAMETOOLONG: 37,
              ELOOP: 32,
              EOPNOTSUPP: 138,
              EPFNOSUPPORT: 139,
              ECONNRESET: 15,
              ENOBUFS: 42,
              EAFNOSUPPORT: 5,
              EPROTOTYPE: 67,
              ENOTSOCK: 57,
              ENOPROTOOPT: 50,
              ESHUTDOWN: 140,
              ECONNREFUSED: 14,
              EADDRINUSE: 3,
              ECONNABORTED: 13,
              ENETUNREACH: 40,
              ENETDOWN: 38,
              ETIMEDOUT: 73,
              EHOSTDOWN: 142,
              EHOSTUNREACH: 23,
              EINPROGRESS: 26,
              EALREADY: 7,
              EDESTADDRREQ: 17,
              EMSGSIZE: 35,
              EPROTONOSUPPORT: 66,
              ESOCKTNOSUPPORT: 137,
              EADDRNOTAVAIL: 4,
              ENETRESET: 39,
              EISCONN: 30,
              ENOTCONN: 53,
              ETOOMANYREFS: 141,
              EUSERS: 136,
              EDQUOT: 19,
              ESTALE: 72,
              ENOTSUP: 138,
              ENOMEDIUM: 148,
              EILSEQ: 25,
              EOVERFLOW: 61,
              ECANCELED: 11,
              ENOTRECOVERABLE: 56,
              EOWNERDEAD: 62,
              ESTRPIPE: 135,
            }),
            Pt(),
            (Ot = a.BindingError =
              (function (e) {
                "use strict";
                function t(t) {
                  var n;
                  return (
                    (n = e.call(this, t) || this),
                    (n.name = "BindingError"),
                    n
                  );
                }
                return (babelHelpers.inheritsLoose(t, e), t);
              })(babelHelpers.wrapNativeSuper(Error))),
            (Wt = a.InternalError =
              (function (e) {
                "use strict";
                function t(t) {
                  var n;
                  return (
                    (n = e.call(this, t) || this),
                    (n.name = "InternalError"),
                    n
                  );
                }
                return (babelHelpers.inheritsLoose(t, e), t);
              })(babelHelpers.wrapNativeSuper(Error))),
            Sn(),
            dn(),
            Bn(),
            (zn = a.UnboundTypeError = Gn(Error, "UnboundTypeError")),
            tr(),
            ir());
          function Ao() {
            Le("fetchSettings");
          }
          var Fo = {
              __assert_fail: qe,
              __cxa_begin_catch: He,
              __cxa_end_catch: ze,
              __cxa_find_matching_catch_2: Xe,
              __cxa_find_matching_catch_3: Ye,
              __cxa_rethrow: Je,
              __cxa_throw: Ze,
              __cxa_uncaught_exceptions: et,
              __resumeException: Ke,
              __syscall_fcntl64: Tt,
              __syscall_ioctl: Dt,
              __syscall_openat: xt,
              _embind_register_bigint: zt,
              _embind_register_bool: Kt,
              _embind_register_class: Qn,
              _embind_register_class_constructor: Zn,
              _embind_register_class_function: er,
              _embind_register_emval: sr,
              _embind_register_float: cr,
              _embind_register_integer: dr,
              _embind_register_memory_view: mr,
              _embind_register_std_string: _r,
              _embind_register_std_wstring: Sr,
              _embind_register_void: Rr,
              _emscripten_get_now_is_monotonic: Er,
              _emval_as: Ir,
              _emval_call_void_method: $r,
              _emval_decref: or,
              _emval_get_global: Nr,
              _emval_get_method_caller: Fr,
              _emval_get_property: Or,
              _emval_incref: Br,
              _emval_new: Ur,
              _emval_new_array: Vr,
              _emval_new_cstring: Hr,
              _emval_new_object: Gr,
              _emval_run_destructors: zr,
              _emval_set_property: jr,
              _emval_take_value: Kr,
              _gmtime_js: Jr,
              _tzset_js: eo,
              abort: to,
              emscripten_date_now: no,
              emscripten_get_now: ro,
              emscripten_resize_heap: io,
              environ_get: mo,
              environ_sizes_get: po,
              fd_close: _o,
              fd_read: go,
              fd_seek: ho,
              fd_write: Co,
              invoke_diii: ya,
              invoke_fiii: wa,
              invoke_i: ma,
              invoke_ii: _a,
              invoke_iii: ua,
              invoke_iiii: ga,
              invoke_iiiii: Sa,
              invoke_iiiiii: da,
              invoke_iiiiiii: ba,
              invoke_iiiiiiii: ha,
              invoke_iiiiiiiiiii: Pa,
              invoke_iiiiiiiiiiii: Fa,
              invoke_iiiiiiiiiiiii: Ma,
              invoke_iiiiij: $a,
              invoke_iiiiji: xa,
              invoke_iiiijj: La,
              invoke_ji: Ra,
              invoke_jiiii: Na,
              invoke_v: Ea,
              invoke_vi: fa,
              invoke_vii: ca,
              invoke_viii: pa,
              invoke_viiii: Ca,
              invoke_viiiii: va,
              invoke_viiiiii: ka,
              invoke_viiiiiii: Aa,
              invoke_viiiiiiii: Da,
              invoke_viiiiiiiiii: Oa,
              invoke_viiiiiiiiiiiiiii: Ba,
              invoke_viiiijii: Ta,
              invoke_vij: Ia,
              strftime_l: Io,
            },
            Oo = Se(),
            Bo = pe("__wasm_call_ctors"),
            Wo = pe("__cxa_free_exception"),
            qo = pe("malloc"),
            Uo = (a._free = pe("free")),
            Vo = pe("__errno_location"),
            Ho = pe("__getTypeName"),
            Go = (a.__embind_initialize_bindings = pe(
              "_embind_initialize_bindings",
            )),
            zo = (a._fflush = pe("fflush")),
            jo = pe("emscripten_builtin_memalign"),
            Ko = pe("setThrew"),
            Qo = pe("setTempRet0"),
            Xo = function () {
              return (Xo = I.emscripten_stack_init)();
            },
            Yo = function () {
              return (Yo = I.emscripten_stack_get_free)();
            },
            Jo = function () {
              return (Jo = I.emscripten_stack_get_base)();
            },
            Zo = function () {
              return (Zo = I.emscripten_stack_get_end)();
            },
            ea = pe("stackSave"),
            ta = pe("stackRestore"),
            na = pe("stackAlloc"),
            ra = function () {
              return (ra = I.emscripten_stack_get_current)();
            },
            oa = pe("__cxa_decrement_exception_refcount"),
            aa = pe("__cxa_increment_exception_refcount"),
            ia = (a.___get_exception_message = pe("__get_exception_message")),
            la = pe("__cxa_can_catch"),
            sa = pe("__cxa_is_pointer_type");
          function ua(e, t, n) {
            var r = ea();
            try {
              return Vn(e)(t, n);
            } catch (e) {
              if ((ta(r), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function ca(e, t, n) {
            var r = ea();
            try {
              Vn(e)(t, n);
            } catch (e) {
              if ((ta(r), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function da(e, t, n, r, o, a) {
            var i = ea();
            try {
              return Vn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ta(i), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function ma(e) {
            var t = ea();
            try {
              return Vn(e)();
            } catch (e) {
              if ((ta(t), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function pa(e, t, n, r) {
            var o = ea();
            try {
              Vn(e)(t, n, r);
            } catch (e) {
              if ((ta(o), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function _a(e, t) {
            var n = ea();
            try {
              return Vn(e)(t);
            } catch (e) {
              if ((ta(n), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function fa(e, t) {
            var n = ea();
            try {
              Vn(e)(t);
            } catch (e) {
              if ((ta(n), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function ga(e, t, n, r) {
            var o = ea();
            try {
              return Vn(e)(t, n, r);
            } catch (e) {
              if ((ta(o), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function ha(e, t, n, r, o, a, i, l) {
            var s = ea();
            try {
              return Vn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ta(s), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function ya(e, t, n, r) {
            var o = ea();
            try {
              return Vn(e)(t, n, r);
            } catch (e) {
              if ((ta(o), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function Ca(e, t, n, r, o) {
            var a = ea();
            try {
              Vn(e)(t, n, r, o);
            } catch (e) {
              if ((ta(a), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function ba(e, t, n, r, o, a, i) {
            var l = ea();
            try {
              return Vn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((ta(l), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function va(e, t, n, r, o, a) {
            var i = ea();
            try {
              Vn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ta(i), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function Sa(e, t, n, r, o) {
            var a = ea();
            try {
              return Vn(e)(t, n, r, o);
            } catch (e) {
              if ((ta(a), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function Ra(e, t) {
            var n = ea();
            try {
              return Vn(e)(t);
            } catch (e) {
              if ((ta(n), !(e instanceof _e))) throw e;
              return (Ko(1, 0), BigInt(0));
            }
          }
          function La(e, t, n, r, o, a) {
            var i = ea();
            try {
              return Vn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ta(i), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function Ea(e) {
            var t = ea();
            try {
              Vn(e)();
            } catch (e) {
              if ((ta(t), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function ka(e, t, n, r, o, a, i) {
            var l = ea();
            try {
              Vn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((ta(l), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function Ia(e, t, n) {
            var r = ea();
            try {
              Vn(e)(t, n);
            } catch (e) {
              if ((ta(r), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function Ta(e, t, n, r, o, a, i, l) {
            var s = ea();
            try {
              Vn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ta(s), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function Da(e, t, n, r, o, a, i, l, s) {
            var u = ea();
            try {
              Vn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ta(u), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function xa(e, t, n, r, o, a) {
            var i = ea();
            try {
              return Vn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ta(i), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function $a(e, t, n, r, o, a) {
            var i = ea();
            try {
              return Vn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ta(i), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function Pa(e, t, n, r, o, a, i, l, s, u, c) {
            var d = ea();
            try {
              return Vn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((ta(d), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function Na(e, t, n, r, o) {
            var a = ea();
            try {
              return Vn(e)(t, n, r, o);
            } catch (e) {
              if ((ta(a), !(e instanceof _e))) throw e;
              return (Ko(1, 0), BigInt(0));
            }
          }
          function Ma(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            var p = ea();
            try {
              return Vn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
            } catch (e) {
              if ((ta(p), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function wa(e, t, n, r) {
            var o = ea();
            try {
              return Vn(e)(t, n, r);
            } catch (e) {
              if ((ta(o), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function Aa(e, t, n, r, o, a, i, l) {
            var s = ea();
            try {
              Vn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ta(s), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function Fa(e, t, n, r, o, a, i, l, s, u, c, d) {
            var m = ea();
            try {
              return Vn(e)(t, n, r, o, a, i, l, s, u, c, d);
            } catch (e) {
              if ((ta(m), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function Oa(e, t, n, r, o, a, i, l, s, u, c) {
            var d = ea();
            try {
              Vn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((ta(d), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          function Ba(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
            var g = ea();
            try {
              Vn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
            } catch (e) {
              if ((ta(g), !(e instanceof _e))) throw e;
              Ko(1, 0);
            }
          }
          ((a.ccall = xo),
            (a.cwrap = $o),
            (a.setValue = Be),
            (a.getValue = Fe),
            (a.UTF8ToString = Me),
            (a.allocateUTF8 = Po));
          var Wa = [
            "writeI53ToI64",
            "writeI53ToI64Clamped",
            "writeI53ToI64Signaling",
            "writeI53ToU64Clamped",
            "writeI53ToU64Signaling",
            "readI53FromI64",
            "readI53FromU64",
            "convertI32PairToI53",
            "convertI32PairToI53Checked",
            "convertU32PairToI53",
            "exitJS",
            "ydayFromDate",
            "inetPton4",
            "inetNtop4",
            "inetPton6",
            "inetNtop6",
            "readSockaddr",
            "writeSockaddr",
            "getHostByName",
            "getCallstack",
            "emscriptenLog",
            "convertPCtoSourceLocation",
            "readEmAsmArgs",
            "jstoi_q",
            "jstoi_s",
            "listenOnce",
            "autoResumeAudioContext",
            "getDynCaller",
            "dynCall",
            "handleException",
            "runtimeKeepalivePush",
            "runtimeKeepalivePop",
            "callUserCallback",
            "maybeExit",
            "safeSetTimeout",
            "asmjsMangle",
            "getNativeTypeSize",
            "STACK_SIZE",
            "STACK_ALIGN",
            "POINTER_SIZE",
            "ASSERTIONS",
            "uleb128Encode",
            "sigToWasmTypes",
            "generateFuncType",
            "convertJsFunctionToWasm",
            "getEmptyTableSlot",
            "updateTableMap",
            "getFunctionAddress",
            "addFunction",
            "removeFunction",
            "reallyNegative",
            "unSign",
            "strLen",
            "reSign",
            "formatString",
            "intArrayToString",
            "AsciiToString",
            "registerKeyEventCallback",
            "maybeCStringToJsString",
            "findEventTarget",
            "findCanvasEventTarget",
            "getBoundingClientRect",
            "fillMouseEventData",
            "registerMouseEventCallback",
            "registerWheelEventCallback",
            "registerUiEventCallback",
            "registerFocusEventCallback",
            "fillDeviceOrientationEventData",
            "registerDeviceOrientationEventCallback",
            "fillDeviceMotionEventData",
            "registerDeviceMotionEventCallback",
            "screenOrientation",
            "fillOrientationChangeEventData",
            "registerOrientationChangeEventCallback",
            "fillFullscreenChangeEventData",
            "registerFullscreenChangeEventCallback",
            "JSEvents_requestFullscreen",
            "JSEvents_resizeCanvasForFullscreen",
            "registerRestoreOldStyle",
            "hideEverythingExceptGivenElement",
            "restoreHiddenElements",
            "setLetterbox",
            "softFullscreenResizeWebGLRenderTarget",
            "doRequestFullscreen",
            "fillPointerlockChangeEventData",
            "registerPointerlockChangeEventCallback",
            "registerPointerlockErrorEventCallback",
            "requestPointerLock",
            "fillVisibilityChangeEventData",
            "registerVisibilityChangeEventCallback",
            "registerTouchEventCallback",
            "fillGamepadEventData",
            "registerGamepadEventCallback",
            "registerBeforeUnloadEventCallback",
            "fillBatteryEventData",
            "battery",
            "registerBatteryEventCallback",
            "setCanvasElementSize",
            "getCanvasElementSize",
            "jsStackTrace",
            "stackTrace",
            "checkWasiClock",
            "wasiRightsToMuslOFlags",
            "wasiOFlagsToMuslOFlags",
            "createDyncallWrapper",
            "setImmediateWrapped",
            "clearImmediateWrapped",
            "polyfillSetImmediate",
            "getPromise",
            "makePromise",
            "idsToPromises",
            "makePromiseCallback",
            "setMainLoop",
            "getSocketFromFD",
            "getSocketAddress",
            "_setNetworkCallback",
            "heapObjectForWebGLType",
            "heapAccessShiftForWebGLHeap",
            "webgl_enable_ANGLE_instanced_arrays",
            "webgl_enable_OES_vertex_array_object",
            "webgl_enable_WEBGL_draw_buffers",
            "webgl_enable_WEBGL_multi_draw",
            "emscriptenWebGLGet",
            "computeUnpackAlignedImageSize",
            "colorChannelsInGlTextureFormat",
            "emscriptenWebGLGetTexPixelData",
            "__glGenObject",
            "emscriptenWebGLGetUniform",
            "webglGetUniformLocation",
            "webglPrepareUniformLocationsBeforeFirstUse",
            "webglGetLeftBracePos",
            "emscriptenWebGLGetVertexAttrib",
            "__glGetActiveAttribOrUniform",
            "writeGLArray",
            "registerWebGlEventCallback",
            "runAndAbortIfError",
            "SDL_unicode",
            "SDL_ttfContext",
            "SDL_audio",
            "GLFW_Window",
            "ALLOC_NORMAL",
            "ALLOC_STACK",
            "allocate",
            "writeStringToMemory",
            "writeAsciiToMemory",
            "registerInheritedInstance",
            "unregisterInheritedInstance",
            "enumReadValueFromPointer",
            "validateThis",
          ];
          Wa.forEach(Ie);
          var qa = [
            "run",
            "addOnPreRun",
            "addOnInit",
            "addOnPreMain",
            "addOnExit",
            "addOnPostRun",
            "addRunDependency",
            "removeRunDependency",
            "FS_createFolder",
            "FS_createPath",
            "FS_createDataFile",
            "FS_createLazyFile",
            "FS_createLink",
            "FS_createDevice",
            "FS_unlink",
            "out",
            "err",
            "callMain",
            "abort",
            "keepRuntimeAlive",
            "wasmMemory",
            "wasmTable",
            "wasmExports",
            "stackAlloc",
            "stackSave",
            "stackRestore",
            "getTempRet0",
            "setTempRet0",
            "writeStackCookie",
            "checkStackCookie",
            "MAX_INT53",
            "MIN_INT53",
            "bigintToI53Checked",
            "ptrToString",
            "zeroMemory",
            "getHeapMax",
            "growMemory",
            "ENV",
            "MONTH_DAYS_REGULAR",
            "MONTH_DAYS_LEAP",
            "MONTH_DAYS_REGULAR_CUMULATIVE",
            "MONTH_DAYS_LEAP_CUMULATIVE",
            "isLeapYear",
            "arraySum",
            "addDays",
            "ERRNO_CODES",
            "ERRNO_MESSAGES",
            "setErrNo",
            "DNS",
            "Protocols",
            "Sockets",
            "initRandomFill",
            "randomFill",
            "timers",
            "warnOnce",
            "UNWIND_CACHE",
            "readEmAsmArgsArray",
            "getExecutableName",
            "asyncLoad",
            "alignMemory",
            "mmapAlloc",
            "handleAllocatorInit",
            "HandleAllocator",
            "getCFunc",
            "freeTableIndexes",
            "functionsInTableMap",
            "PATH",
            "PATH_FS",
            "UTF8Decoder",
            "UTF8ArrayToString",
            "stringToUTF8Array",
            "stringToUTF8",
            "lengthBytesUTF8",
            "intArrayFromString",
            "stringToAscii",
            "UTF16Decoder",
            "UTF16ToString",
            "stringToUTF16",
            "lengthBytesUTF16",
            "UTF32ToString",
            "stringToUTF32",
            "lengthBytesUTF32",
            "stringToNewUTF8",
            "stringToUTF8OnStack",
            "writeArrayToMemory",
            "JSEvents",
            "specialHTMLTargets",
            "currentFullscreenStrategy",
            "restoreOldWindowedStyle",
            "demangle",
            "demangleAll",
            "ExitStatus",
            "getEnvStrings",
            "doReadv",
            "doWritev",
            "promiseMap",
            "uncaughtExceptionCount",
            "exceptionLast",
            "exceptionCaught",
            "ExceptionInfo",
            "findMatchingCatch",
            "getExceptionMessageCommon",
            "incrementExceptionRefcount",
            "decrementExceptionRefcount",
            "getExceptionMessage",
            "Browser",
            "wget",
            "SYSCALLS",
            "preloadPlugins",
            "FS_createPreloadedFile",
            "FS_modeStringToFlags",
            "FS_getMode",
            "FS_stdin_getChar_buffer",
            "FS_stdin_getChar",
            "FS",
            "MEMFS",
            "TTY",
            "PIPEFS",
            "SOCKFS",
            "tempFixedLengthArray",
            "miniTempWebGLFloatBuffers",
            "miniTempWebGLIntBuffers",
            "GL",
            "emscripten_webgl_power_preferences",
            "AL",
            "GLUT",
            "EGL",
            "GLEW",
            "IDBStore",
            "SDL",
            "SDL_gfx",
            "GLFW",
            "allocateUTF8OnStack",
            "InternalError",
            "BindingError",
            "throwInternalError",
            "throwBindingError",
            "registeredTypes",
            "awaitingDependencies",
            "typeDependencies",
            "tupleRegistrations",
            "structRegistrations",
            "sharedRegisterType",
            "whenDependentTypesAreResolved",
            "embind_charCodes",
            "embind_init_charCodes",
            "readLatin1String",
            "getTypeName",
            "heap32VectorToArray",
            "requireRegisteredType",
            "UnboundTypeError",
            "PureVirtualError",
            "init_embind",
            "throwUnboundTypeError",
            "ensureOverloadTable",
            "exposePublicSymbol",
            "replacePublicSymbol",
            "extendError",
            "createNamedFunction",
            "embindRepr",
            "registeredInstances",
            "getBasestPointer",
            "getInheritedInstance",
            "getInheritedInstanceCount",
            "getLiveInheritedInstances",
            "registeredPointers",
            "registerType",
            "getShiftFromSize",
            "integerReadValueFromPointer",
            "floatReadValueFromPointer",
            "simpleReadValueFromPointer",
            "runDestructors",
            "craftInvokerFunction",
            "embind__requireFunction",
            "genericPointerToWireType",
            "constNoSmartPtrRawPointerToWireType",
            "nonConstNoSmartPtrRawPointerToWireType",
            "init_RegisteredPointer",
            "RegisteredPointer",
            "RegisteredPointer_getPointee",
            "RegisteredPointer_destructor",
            "RegisteredPointer_deleteObject",
            "RegisteredPointer_fromWireType",
            "runDestructor",
            "releaseClassHandle",
            "finalizationRegistry",
            "detachFinalizer_deps",
            "detachFinalizer",
            "attachFinalizer",
            "makeClassHandle",
            "init_ClassHandle",
            "ClassHandle",
            "ClassHandle_isAliasOf",
            "throwInstanceAlreadyDeleted",
            "ClassHandle_clone",
            "ClassHandle_delete",
            "deletionQueue",
            "ClassHandle_isDeleted",
            "ClassHandle_deleteLater",
            "flushPendingDeletes",
            "delayFunction",
            "setDelayFunction",
            "RegisteredClass",
            "shallowCopyInternalPointer",
            "downcastPointer",
            "upcastPointer",
            "char_0",
            "char_9",
            "makeLegalFunctionName",
            "emval_handles",
            "emval_symbols",
            "init_emval",
            "count_emval_handles",
            "getStringOrSymbol",
            "Emval",
            "emval_newers",
            "craftEmvalAllocator",
            "emval_get_global",
            "emval_lookupTypes",
            "emval_allocateDestructors",
            "emval_methodCallers",
            "emval_addMethodCaller",
            "emval_registeredMethods",
          ];
          qa.forEach(Te);
          var Ua;
          oe = function e() {
            (Ua || Ha(), Ua || (oe = e));
          };
          function Va() {
            (Xo(), V());
          }
          function Ha() {
            if (ne > 0 || (Va(), X(), ne > 0)) return;
            function e() {
              Ua ||
                ((Ua = !0),
                (a.calledRun = !0),
                !T &&
                  (Y(),
                  i(a),
                  a.onRuntimeInitialized && a.onRuntimeInitialized(),
                  x(
                    !a._main,
                    'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]',
                  ),
                  J()));
            }
            (a.setStatus
              ? (a.setStatus("Running..."),
                setTimeout(function () {
                  (setTimeout(function () {
                    a.setStatus("");
                  }, 1),
                    e());
                }, 1))
              : e(),
              H());
          }
          if (a.preInit)
            for (
              typeof a.preInit == "function" && (a.preInit = [a.preInit]);
              a.preInit.length > 0;
            )
              a.preInit.pop()();
          return (Ha(), o.ready);
        };
      })();
    typeof i == "object" && typeof a == "object"
      ? (a.exports = l)
      : typeof define == "function" &&
        define.amd &&
        define([], function () {
          return l;
        });
  },
  null,
);
