__d(
  "WAWebVoipWebWasmLoader",
  [
    "Promise",
    "WAWebVoipQplHelpers",
    "WAWebVoipWasmArtifactRegistry",
    "WAWebVoipWebWasmWorkerResource",
    "WorkerBundleResource",
    "WorkerClient",
    "WorkerMessagePort",
    "bx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["type", "__name"],
      s,
      u,
      c = r("bx").getURL(r("bx")("32180"), { cacheBreaker: "1788155822530" }),
      d = (function () {
        var t =
          typeof document != "undefined" && document.currentScript
            ? document.currentScript.src
            : void 0;
        return function (a) {
          var i = this;
          a === void 0 && (a = {});
          function l() {
            return (W.buffer != z.buffer && ne(), z);
          }
          function d() {
            return (W.buffer != z.buffer && ne(), j);
          }
          function m() {
            return (W.buffer != z.buffer && ne(), K);
          }
          function p() {
            return (W.buffer != z.buffer && ne(), Q);
          }
          function _() {
            return (W.buffer != z.buffer && ne(), X);
          }
          function f() {
            return (W.buffer != z.buffer && ne(), Y);
          }
          function g() {
            return (W.buffer != z.buffer && ne(), J);
          }
          function h() {
            return (W.buffer != z.buffer && ne(), te);
          }
          var y = a;
          o("WAWebVoipWasmArtifactRegistry").recordSelectedVoipWasmUri(c);
          var C, b;
          ((y.ready = new (u || (u = n("Promise")))(function (e, t) {
            ((C = e), (b = t));
          })),
            [
              "_malloc",
              "_free",
              "__emscripten_thread_init",
              "__emscripten_thread_exit",
              "__emscripten_thread_crashed",
              "__emscripten_thread_mailbox_await",
              "__emscripten_tls_init",
              "_pthread_self",
              "checkMailbox",
              "establishStackSpace",
              "invokeEntryPoint",
              "PThread",
              "getExceptionMessage",
              "___get_exception_message",
              "_on_call_event_js_sync",
              "_wasm_throw_ml_abort",
              "_set_ml_inference_flag",
              "_patch_abort_for_ml_inference",
              "_write_persistent_directory_path_js",
              "_get_bwe_ml_model_path_js",
              "_get_ml_model_path_for_type_js",
              "_get_random_bytes_js",
              "_is_participant_known_contact_js",
              "_renderVideoFrame_js",
              "_sendSignalingXMPP_js_sync",
              "_fflush",
              "___indirect_function_table",
              "__ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj",
              "__ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj",
              "_call_sendto",
              "_call_init_capture_driver_js_sync",
              "_call_start_capture_js_sync",
              "_call_stop_capture_js_sync",
              "_call_init_playback_driver_js_sync",
              "_call_start_playback_js_sync",
              "_call_stop_playback_js_sync",
              "_query_browser_audio_processing_status_js_sync",
              "_call_start_desktop_capture_js_sync",
              "_call_stop_desktop_capture_js_sync",
              "_call_start_video_capture_js_sync",
              "_call_stop_video_capture_js_sync",
              "_loggingCallback_js_sync",
              "__embind_initialize_bindings",
              "__emscripten_check_mailbox",
              "___start_em_js",
              "___stop_em_js",
              "___start_em_asm",
              "___stop_em_asm",
              "onRuntimeInitialized",
            ].forEach(function (e) {
              Object.getOwnPropertyDescriptor(y.ready, e) ||
                Object.defineProperty(y.ready, e, {
                  get: function () {
                    return ke(
                      "You are getting " +
                        e +
                        " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                    );
                  },
                  set: function () {
                    return ke(
                      "You are setting " +
                        e +
                        " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                    );
                  },
                });
            }));
          var v = Object.assign({}, y),
            S = [],
            R = "./this.program",
            L = function (t, n) {
              throw n;
            },
            E = typeof window == "object",
            k = typeof importScripts == "function",
            I =
              typeof process == "object" &&
              typeof process.versions == "object" &&
              typeof process.versions.node == "string",
            T = !E && !I && !k;
          if (y.ENVIRONMENT)
            throw new Error(
              "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)",
            );
          var D = y.ENVIRONMENT_IS_PTHREAD || !1,
            x = "";
          function $(e) {
            return y.locateFile ? y.locateFile(e, x) : x + e;
          }
          var P, N, M, w;
          if (T) {
            if (
              (typeof process == "object" && typeof n == "function") ||
              typeof window == "object" ||
              typeof importScripts == "function"
            )
              throw new Error(
                "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
              );
            (typeof read != "undefined" && (P = read),
              (M = function (t) {
                if (typeof readbuffer == "function")
                  return new Uint8Array(readbuffer(t));
                var e = read(t, "binary");
                return (G(typeof e == "object"), e);
              }),
              (N = function (t, n, r) {
                setTimeout(function () {
                  return n(M(t));
                });
              }),
              typeof clearTimeout == "undefined" &&
                (globalThis.clearTimeout = function (e) {}),
              typeof setTimeout == "undefined" &&
                (globalThis.setTimeout = function (e) {
                  return typeof e == "function" ? e() : ke();
                }),
              typeof scriptArgs != "undefined"
                ? (S = scriptArgs)
                : typeof arguments != "undefined" && (S = arguments),
              typeof quit == "function" &&
                (L = function (t, n) {
                  throw (
                    setTimeout(function () {
                      if (!(n instanceof ht)) {
                        var e = n;
                        (n &&
                          typeof n == "object" &&
                          n.stack &&
                          (e = [n, n.stack]),
                          F("exiting due to exception: " + e));
                      }
                      quit(t);
                    }),
                    n
                  );
                }),
              typeof print != "undefined" &&
                (typeof console == "undefined" && (console = {}),
                (console.log = print),
                (console.warn = console.error =
                  typeof printErr != "undefined" ? printErr : print)));
          } else if (E || k) {
            if (
              (k
                ? (x = self.location.href)
                : typeof document != "undefined" &&
                  document.currentScript &&
                  (x = document.currentScript.src),
              t && (x = t),
              x.indexOf("blob:") !== 0
                ? (x = x.substr(
                    0,
                    x.replace(/[?#].*/, "").lastIndexOf("/") + 1,
                  ))
                : (x = ""),
              !(
                typeof window == "object" || typeof importScripts == "function"
              ))
            )
              throw new Error(
                "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
              );
            ((P = function (t) {
              var e = new XMLHttpRequest();
              return (e.open("GET", t, !1), e.send(null), e.responseText);
            }),
              k &&
                (M = function (t) {
                  var e = new XMLHttpRequest();
                  return (
                    e.open("GET", t, !1),
                    (e.responseType = "arraybuffer"),
                    e.send(null),
                    new Uint8Array(e.response)
                  );
                }),
              (N = function (t, n, r) {
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
              (w = function (t) {
                return (document.title = t);
              }));
          } else throw new Error("environment detection error");
          var A = y.print || console.log.bind(console),
            F = y.printErr || console.error.bind(console);
          (Object.assign(y, v),
            (v = null),
            Ii(),
            y.arguments && (S = y.arguments),
            We("arguments", "arguments_"),
            y.thisProgram && (R = y.thisProgram),
            We("thisProgram", "thisProgram"),
            y.quit && (L = y.quit),
            We("quit", "quit_"),
            G(
              typeof y.memoryInitializerPrefixURL == "undefined",
              "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead",
            ),
            G(
              typeof y.pthreadMainPrefixURL == "undefined",
              "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead",
            ),
            G(
              typeof y.cdInitializerPrefixURL == "undefined",
              "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead",
            ),
            G(
              typeof y.filePackagePrefixURL == "undefined",
              "Module.filePackagePrefixURL option was removed, use Module.locateFile instead",
            ),
            G(
              typeof y.read == "undefined",
              "Module.read option was removed (modify read_ in JS)",
            ),
            G(
              typeof y.readAsync == "undefined",
              "Module.readAsync option was removed (modify readAsync in JS)",
            ),
            G(
              typeof y.readBinary == "undefined",
              "Module.readBinary option was removed (modify readBinary in JS)",
            ),
            G(
              typeof y.setWindowTitle == "undefined",
              "Module.setWindowTitle option was removed (modify setWindowTitle in JS)",
            ),
            G(
              typeof y.TOTAL_MEMORY == "undefined",
              "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY",
            ),
            We("asm", "wasmExports"),
            We("read", "read_"),
            We("readAsync", "readAsync"),
            We("readBinary", "readBinary"),
            We("setWindowTitle", "setWindowTitle"),
            G(
              E || k || I,
              "Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)",
            ),
            G(
              !I,
              "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.",
            ),
            G(
              !T,
              "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.",
            ));
          var O;
          (y.wasmBinary && (O = y.wasmBinary), We("wasmBinary", "wasmBinary"));
          var B = y.noExitRuntime || !0;
          (We("noExitRuntime", "noExitRuntime"),
            typeof WebAssembly != "object" &&
              ke("no native wasm support detected"));
          var W,
            q,
            U,
            V = !1,
            H;
          function G(e, t) {
            e || ke("Assertion failed" + (t ? ": " + t : ""));
          }
          var z, j, K, Q, X, Y, J, Z, ee, te;
          function ne() {
            var e = W.buffer;
            ((y.HEAP8 = z = new Int8Array(e)),
              (y.HEAP16 = K = new Int16Array(e)),
              (y.HEAP32 = X = new Int32Array(e)),
              (y.HEAPU8 = j = new Uint8Array(e)),
              (y.HEAPU16 = Q = new Uint16Array(e)),
              (y.HEAPU32 = Y = new Uint32Array(e)),
              (y.HEAPF32 = J = new Float32Array(e)),
              (y.HEAPF64 = te = new Float64Array(e)),
              (y.HEAP64 = Z = new BigInt64Array(e)),
              (y.HEAPU64 = ee = new BigUint64Array(e)));
          }
          (G(
            !y.STACK_SIZE,
            "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time",
          ),
            G(
              typeof Int32Array != "undefined" &&
                typeof Float64Array != "undefined" &&
                Int32Array.prototype.subarray != null &&
                Int32Array.prototype.set != null,
              "JS engine does not provide full typed array support",
            ));
          var re = y.INITIAL_MEMORY || 10485760;
          if (
            (We("INITIAL_MEMORY", "INITIAL_MEMORY"),
            G(
              re >= 1048576,
              "INITIAL_MEMORY should be larger than STACK_SIZE, was " +
                re +
                "! (STACK_SIZE=1048576)",
            ),
            D)
          )
            W = y.wasmMemory;
          else if (y.wasmMemory) W = y.wasmMemory;
          else if (
            ((W = new WebAssembly.Memory({
              initial: re / 65536,
              maximum: 2147483648 / 65536,
              shared: !0,
            })),
            !(W.buffer instanceof SharedArrayBuffer))
          )
            throw (
              F(
                "requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag",
              ),
              I &&
                F(
                  "(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)",
                ),
              Error("bad memory")
            );
          (ne(), (re = W.buffer.byteLength), G(re % 65536 === 0));
          var oe;
          function ae() {
            var e = nl();
            (G((e & 3) == 0),
              e == 0 && (e += 4),
              (f()[e >> 2] = 34821223),
              (f()[(e + 4) >> 2] = 2310721022),
              (f()[0] = 1668509029));
          }
          function ie() {
            if (!V) {
              var e = nl();
              e == 0 && (e += 4);
              var t = f()[e >> 2],
                n = f()[(e + 4) >> 2];
              ((t != 34821223 || n != 2310721022) &&
                ke(
                  "Stack overflow! Stack cookie has been overwritten at " +
                    nn(e) +
                    ", expected hex dwords 0x89BACDFE and 0x2135467, but received " +
                    nn(n) +
                    " " +
                    nn(t),
                ),
                f()[0] != 1668509029 &&
                  ke(
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
          var le = [],
            se = [],
            ue = [],
            ce = !1,
            de = 0;
          function me() {
            return B || de > 0;
          }
          function pe() {
            if ((G(!D), y.preRun))
              for (
                typeof y.preRun == "function" && (y.preRun = [y.preRun]);
                y.preRun.length;
              )
                ge(y.preRun.shift());
            an(le);
          }
          function _e() {
            (G(!ce),
              (ce = !0),
              !D &&
                (ie(),
                !y.noFSInit && !Xt.init.initialized && Xt.init(),
                (Xt.ignorePermissions = !1),
                wt.init(),
                an(se)));
          }
          function fe() {
            if ((ie(), !D)) {
              if (y.postRun)
                for (
                  typeof y.postRun == "function" && (y.postRun = [y.postRun]);
                  y.postRun.length;
                )
                  ye(y.postRun.shift());
              an(ue);
            }
          }
          function ge(e) {
            le.unshift(e);
          }
          function he(e) {
            se.unshift(e);
          }
          function ye(e) {
            ue.unshift(e);
          }
          (G(
            Math.imul,
            "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
          ),
            G(
              Math.fround,
              "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
            ),
            G(
              Math.clz32,
              "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
            ),
            G(
              Math.trunc,
              "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
            ));
          var Ce = 0,
            be = null,
            ve = null,
            Se = {};
          function Re(e) {
            for (var t = e; ; ) {
              if (!Se[e]) return e;
              e = t + Math.random();
            }
          }
          function Le(e) {
            (Ce++,
              y.monitorRunDependencies && y.monitorRunDependencies(Ce),
              e
                ? (G(!Se[e]),
                  (Se[e] = 1),
                  be === null &&
                    typeof setInterval != "undefined" &&
                    (be = setInterval(function () {
                      if (V) {
                        (clearInterval(be), (be = null));
                        return;
                      }
                      var e = !1;
                      for (var t in Se)
                        (e ||
                          ((e = !0), F("still waiting on run dependencies:")),
                          F("dependency: " + t));
                      e && F("(end of list)");
                    }, 1e4)))
                : F("warning: run dependency added without ID"));
          }
          function Ee(e) {
            if (
              (Ce--,
              y.monitorRunDependencies && y.monitorRunDependencies(Ce),
              e
                ? (G(Se[e]), delete Se[e])
                : F("warning: run dependency removed without ID"),
              Ce == 0 && (be !== null && (clearInterval(be), (be = null)), ve))
            ) {
              var t = ve;
              ((ve = null), t());
            }
          }
          function ke(e) {
            (y.onAbort && y.onAbort(e),
              (e = "Aborted(" + e + ")"),
              F(e),
              (V = !0),
              (H = 1));
            var t = new WebAssembly.RuntimeError(e);
            throw (b(t), t);
          }
          var Ie = "data:application/octet-stream;base64,";
          function Te(e) {
            return e.startsWith(Ie);
          }
          function De(e) {
            return e.startsWith("file://");
          }
          function xe(e) {
            return function () {
              G(
                ce,
                "native function `" +
                  e +
                  "` called before runtime initialization",
              );
              var t = q[e];
              return (
                G(t, "exported native function `" + e + "` not found"),
                t.apply(null, arguments)
              );
            };
          }
          var $e = (function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              return (babelHelpers.inheritsLoose(t, e), t);
            })(babelHelpers.wrapNativeSuper(Error)),
            Pe = (function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              return (babelHelpers.inheritsLoose(t, e), t);
            })($e),
            Ne = (function (e) {
              function t(t) {
                var n;
                ((n = e.call(this, t) || this), (n.excPtr = t));
                var r = dn(t);
                return ((n.name = r[0]), (n.message = r[1]), n);
              }
              return (babelHelpers.inheritsLoose(t, e), t);
            })($e),
            Me = c;
          function we(e) {
            if (e == Me && O) return new Uint8Array(O);
            if (M) return M(e);
            throw "both async and sync fetching of the wasm failed";
          }
          function Ae(e) {
            return !O && (E || k) && typeof fetch == "function"
              ? fetch(e, { credentials: "same-origin" })
                  .then(function (t) {
                    if (!t.ok)
                      throw "failed to load wasm binary file at '" + e + "'";
                    return t.arrayBuffer();
                  })
                  .catch(function () {
                    return we(e);
                  })
              : (u || (u = n("Promise"))).resolve().then(function () {
                  return we(e);
                });
          }
          function Fe(e, t, n) {
            return Ae(e)
              .then(function (e) {
                return WebAssembly.instantiate(e, t);
              })
              .then(function (e) {
                return e;
              })
              .then(n, function (e) {
                (F("failed to asynchronously prepare wasm: " + e),
                  De(Me) &&
                    F(
                      "warning: Loading from a file URI (" +
                        Me +
                        ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing",
                    ),
                  ke(e));
              });
          }
          function Oe(e, t, n, r) {
            return !e &&
              typeof WebAssembly.instantiateStreaming == "function" &&
              !Te(t) &&
              typeof fetch == "function"
              ? fetch(t, { credentials: "same-origin" }).then(function (e) {
                  var o = WebAssembly.instantiateStreaming(e, n);
                  return o.then(r, function (e) {
                    return (
                      F("wasm streaming compile failed: " + e),
                      F("falling back to ArrayBuffer instantiation"),
                      Fe(t, n, r)
                    );
                  });
                })
              : Fe(t, n, r);
          }
          function Be() {
            var e = { env: Ti, wasi_snapshot_preview1: Ti };
            function t(e, t) {
              var n = e.exports;
              return (
                (q = n),
                _n(q._emscripten_tls_init),
                (oe = q.__indirect_function_table),
                G(oe, "table not found in wasm exports"),
                he(q.__wasm_call_ctors),
                (U = t),
                Ee("wasm-instantiate"),
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                  o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_FETCH_END,
                ),
                n
              );
            }
            (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_FETCH_START,
            ),
              Le("wasm-instantiate"));
            var n = y;
            function r(e) {
              (G(
                y === n,
                "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?",
              ),
                (n = null),
                t(e.instance, e.module));
            }
            if (y.instantiateWasm)
              try {
                return y.instantiateWasm(e, t);
              } catch (e) {
                (F("Module.instantiateWasm callback failed with error: " + e),
                  b(e));
              }
            return (Oe(O, Me, e, r).catch(b), {});
          }
          function We(e, t, n) {
            (n === void 0 && (n = !0),
              Object.getOwnPropertyDescriptor(y, e) ||
                Object.defineProperty(y, e, {
                  configurable: !0,
                  get: function () {
                    var r = n
                      ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
                      : "";
                    ke(
                      "`Module." + e + "` has been replaced by `" + t + "`" + r,
                    );
                  },
                }));
          }
          function qe(e) {
            Object.getOwnPropertyDescriptor(y, e) &&
              ke(
                "`Module." +
                  e +
                  "` was supplied but `" +
                  e +
                  "` not included in INCOMING_MODULE_JS_API",
              );
          }
          function Ue(e) {
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
          function Ve(e, t) {
            typeof globalThis != "undefined" &&
              Object.defineProperty(globalThis, e, {
                configurable: !0,
                get: function () {
                  fn("`" + e + "` is not longer defined by emscripten. " + t);
                },
              });
          }
          Ve("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
          function He(e) {
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
                    Ue(e) &&
                      (t +=
                        ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
                    fn(t));
                },
              }),
              Ge(e));
          }
          function Ge(e) {
            Object.getOwnPropertyDescriptor(y, e) ||
              Object.defineProperty(y, e, {
                configurable: !0,
                get: function () {
                  var t =
                    "'" +
                    e +
                    "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)";
                  (Ue(e) &&
                    (t +=
                      ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
                    ke(t));
                },
              });
          }
          function ze(e) {
            console.warn.apply(console, arguments);
          }
          var je = {
            1349439: function () {
              return Date.now();
            },
            1349462: function (t, n) {
              var e =
                "voip: [WasmTimestampCalibration] backgrounding detected: skew_old=" +
                t.toFixed(1) +
                "ms, skew_new=" +
                n.toFixed(1) +
                "ms, delta=" +
                (n - t).toFixed(1) +
                "ms";
              self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
                level: 2,
                message: e,
              });
            },
          };
          function Ke(e, t) {
            var n = t ? Yt(t) : "";
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onCallEvent({
              eventType: e,
              userData: "",
              eventDataJson: n,
            });
          }
          function Qe(e) {
            self.__inMLInference = e;
          }
          function Xe() {
            var e = ke;
            ke = function (n) {
              if (self.__inMLInference && y._wasm_throw_ml_abort) {
                (y.onAbort && y.onAbort(n), (n = "Aborted(" + n + ")"), F(n));
                var t = $t(n) + 1,
                  r = dl(),
                  o = pl(t);
                (zn(n, o, t), y._wasm_throw_ml_abort(o), ml(r));
                return;
              }
              e(n);
            };
          }
          function Ye(e, t) {
            if (!e || t <= 0) return 0;
            var n =
              self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getPersistentDirectoryPath();
            if (n) {
              var r = $t(n) + 1;
              return (zn(n, e, t), r);
            }
            return 0;
          }
          function Je(e) {
            var t = e ? Yt(e) : null,
              n =
                self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getBweModelPath({
                  versionName: t,
                });
            if (n) {
              var r = $t(n) + 1,
                o = Pi(r);
              return (zn(n, o, r), o);
            }
            return null;
          }
          function Ze(e, t) {
            var n = t ? Yt(t) : null,
              r =
                self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getMLModelPathForType(
                  { modelType: e, versionName: n },
                );
            if (r) {
              var o = $t(r) + 1,
                a = Pi(o);
              return (zn(r, a, o), a);
            }
            return null;
          }
          function et(e, t) {
            if (t == null) {
              var n = new Error("get_random_bytes_js: rawBytesPtr is null");
              throw (n.stack, n);
            }
            var r = new Uint8Array(e),
              o = self.crypto.getRandomValues(r);
            yi(o, t);
          }
          function tt(e) {
            var t = Yt(e);
            return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.isParticipantKnownContact(
              { jid: t },
            );
          }
          function nt(e, t, n, r, o, a, i, l, s, u) {
            var c = d(),
              m = new Uint8Array(n);
            m.set(c.subarray(t, t + n));
            var p = Yt(e);
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks &&
              self.WhatsAppVoipWasmWorkerCompatibleCallbacks
                .onVideoFrameWasmToJs &&
              self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs(
                {
                  userJid: p,
                  frameBuffer: m.buffer,
                  width: r,
                  height: o,
                  orientation: a,
                  format: i,
                  timestamp: l,
                  isKeyFrame: s,
                  isScreenShare: u,
                },
              );
          }
          function rt(e, t, n, r) {
            var o = d(),
              a = new Uint8Array(r);
            a.set(o.subarray(n, n + r));
            var i = Yt(t),
              l = Yt(e);
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onSignalingXmpp({
              peerJid: l,
              callId: i,
              xmlPayload: a,
            });
          }
          function ot(e, t, n, r) {
            var o = d(),
              a = o.length;
            if (e < 0 || e >= a || t < 0 || e + t > a)
              return (
                ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: call_sendto: Invalid buffer access - buf: ",
                      ", len: ",
                      ", heapSize: ",
                      "",
                    ])),
                  e,
                  t,
                  a,
                ),
                -1
              );
            var i = o.subarray(e, e + t);
            return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.sendDataToRelay(
              { data: i, len: t, ip: Yt(n), port: r },
            );
          }
          function at(e, t, n, r, o, a) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.initCaptureDriverJS({
              sample_rate: e,
              channels: t,
              bits_per_sample: n,
              frames_per_chunk: r,
              device_type: o,
              auto_gain_control: !!a,
            });
          }
          function it(e) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startCaptureJS({
              device_type: e,
            });
          }
          function lt(e) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopCaptureJS({
              device_type: e,
            });
          }
          function st(e, t, n, r) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.initPlaybackDriverJS(
              {
                sample_rate: e,
                channels: t,
                bits_per_sample: n,
                frames_per_chunk: r,
              },
            );
          }
          function ut() {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startPlaybackJS();
          }
          function ct() {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopPlaybackJS();
          }
          function dt() {
            return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getBrowserAudioProcessingStatus();
          }
          function mt(e, t, n) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startDesktopCaptureJS(
              { width: e, height: t, max_fps: n },
            );
          }
          function pt() {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopDesktopCaptureJS();
          }
          function _t(e, t, n, r, o) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startVideoCaptureJS({
              camera_id: Yt(e),
              width: t,
              height: n,
              max_fps: r,
              isAVUpgrade: !!o,
            });
          }
          function ft() {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopVideoCaptureJS();
          }
          function gt(e, t) {
            var n = t ? Yt(t).trim() : "";
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
              level: e,
              message: n,
            });
          }
          function ht(e) {
            ((this.name = "ExitStatus"),
              (this.message = "Program terminated with exit(" + e + ")"),
              (this.status = e));
          }
          var yt = function (t) {
            (t.terminate(),
              t.removeAllMessageListeners("cmd"),
              t.addMessageListener("cmd", function (e) {
                var n = e.cmd;
                F(
                  'received "' +
                    n +
                    '" command from terminated worker: ' +
                    t.workerID,
                );
              }));
          };
          function Ct(e) {
            (G(
              !D,
              "Internal Error! killThread() can only ever be called from main application thread!",
            ),
              G(e, "Internal Error! Null pthread_ptr in killThread!"));
            var t = on.pthreads[e];
            (delete on.pthreads[e],
              yt(t),
              rl(e),
              on.runningWorkers.splice(on.runningWorkers.indexOf(t), 1),
              (t.pthread_ptr = 0));
          }
          function bt(e) {
            (G(
              !D,
              "Internal Error! cancelThread() can only ever be called from main application thread!",
            ),
              G(e, "Internal Error! Null pthread_ptr in cancelThread!"));
            var t = on.pthreads[e];
            t.postMessage({ cmd: "cancel", type: "cmd" });
          }
          function vt(e) {
            (G(
              !D,
              "Internal Error! cleanupThread() can only ever be called from main application thread!",
            ),
              G(e, "Internal Error! Null pthread_ptr in cleanupThread!"));
            var t = on.pthreads[e];
            (G(t), on.returnWorkerToPool(t));
          }
          var St = function (t, n) {
            return (d().fill(0, t, t + n), t);
          };
          function Rt(e) {
            (G(
              !D,
              "Internal Error! spawnThread() can only ever be called from main application thread!",
            ),
              G(e.pthread_ptr, "Internal error, no pthread ptr!"));
            var t = on.getNewWorker();
            if (!t) return 6;
            (G(!t.pthread_ptr, "Internal error!"),
              on.runningWorkers.push(t),
              (on.pthreads[e.pthread_ptr] = t),
              (t.pthread_ptr = e.pthread_ptr));
            var n = {
              cmd: "run",
              start_routine: e.startRoutine,
              arg: e.arg,
              pthread_ptr: e.pthread_ptr,
            };
            return (
              t.postMessage(
                babelHelpers.extends({}, n, { type: "cmd" }),
                e.transferList,
              ),
              0
            );
          }
          var Lt = {
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
                var e = Lt.isAbs(t),
                  n = t.substr(-1) === "/";
                return (
                  (t = Lt.normalizeArray(
                    t.split("/").filter(function (e) {
                      return !!e;
                    }),
                    !e,
                  ).join("/")),
                  !t && !e && (t = "."),
                  t && n && (t += "/"),
                  (e ? "/" : "") + t
                );
              },
              dirname: function (t) {
                var e = Lt.splitPath(t),
                  n = e[0],
                  r = e[1];
                return !n && !r
                  ? "."
                  : (r && (r = r.substr(0, r.length - 1)), n + r);
              },
              basename: function (t) {
                if (t === "/") return "/";
                ((t = Lt.normalize(t)), (t = t.replace(/\/$/, "")));
                var e = t.lastIndexOf("/");
                return e === -1 ? t : t.substr(e + 1);
              },
              join: function () {
                var e = Array.prototype.slice.call(arguments);
                return Lt.normalize(e.join("/"));
              },
              join2: function (t, n) {
                return Lt.normalize(t + "/" + n);
              },
            },
            Et = function () {
              if (
                typeof crypto == "object" &&
                typeof crypto.getRandomValues == "function"
              )
                return function (e) {
                  return (
                    e.set(crypto.getRandomValues(new Uint8Array(e.byteLength))),
                    e
                  );
                };
              ke(
                "no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };",
              );
            },
            kt = function (t) {
              return (kt = Et())(t);
            },
            It = {
              resolve: function () {
                for (
                  var e = "", t = !1, n = arguments.length - 1;
                  n >= -1 && !t;
                  n--
                ) {
                  var r = n >= 0 ? arguments[n] : Xt.cwd();
                  if (typeof r != "string")
                    throw new TypeError(
                      "Arguments to path.resolve must be strings",
                    );
                  if (!r) return "";
                  ((e = r + "/" + e), (t = Lt.isAbs(r)));
                }
                return (
                  (e = Lt.normalizeArray(
                    e.split("/").filter(function (e) {
                      return !!e;
                    }),
                    !t,
                  ).join("/")),
                  (t ? "/" : "") + e || "."
                );
              },
              relative: function (t, n) {
                ((t = It.resolve(t).substr(1)), (n = It.resolve(n).substr(1)));
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
            Tt =
              typeof TextDecoder != "undefined"
                ? new TextDecoder("utf8")
                : void 0,
            Dt = function (t, n, r) {
              for (var e = n + r, o = n; t[o] && !(o >= e); ) ++o;
              if (o - n > 16 && t.buffer && Tt) return Tt.decode(t.slice(n, o));
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
                        fn(
                          "Invalid UTF-8 leading byte " +
                            nn(i) +
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
            xt = [],
            $t = function (t) {
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
            Pt = function (t, n, r, o) {
              if ((G(typeof t == "string"), !(o > 0))) return 0;
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
                    fn(
                      "Invalid Unicode code point " +
                        nn(l) +
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
          function Nt(e, t, n) {
            var r = n > 0 ? n : $t(e) + 1,
              o = new Array(r),
              a = Pt(e, o, 0, o.length);
            return (t && (o.length = a), o);
          }
          var Mt = function () {
              if (!xt.length) {
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
                xt = Nt(e, !0);
              }
              return xt.shift();
            },
            wt = {
              ttys: [],
              init: function () {},
              shutdown: function () {},
              register: function (t, n) {
                ((wt.ttys[t] = { input: [], output: [], ops: n }),
                  Xt.registerDevice(t, wt.stream_ops));
              },
              stream_ops: {
                open: function (t) {
                  var e = wt.ttys[t.node.rdev];
                  if (!e) throw new Xt.ErrnoError(43);
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
                    throw new Xt.ErrnoError(60);
                  for (var e = 0, i = 0; i < o; i++) {
                    var l;
                    try {
                      l = t.tty.ops.get_char(t.tty);
                    } catch (e) {
                      throw new Xt.ErrnoError(29);
                    }
                    if (l === void 0 && e === 0) throw new Xt.ErrnoError(6);
                    if (l == null) break;
                    (e++, (n[r + i] = l));
                  }
                  return (e && (t.node.timestamp = Date.now()), e);
                },
                write: function (t, n, r, o, a) {
                  if (!t.tty || !t.tty.ops.put_char)
                    throw new Xt.ErrnoError(60);
                  try {
                    for (var e = 0; e < o; e++)
                      t.tty.ops.put_char(t.tty, n[r + e]);
                  } catch (e) {
                    throw new Xt.ErrnoError(29);
                  }
                  return (o && (t.node.timestamp = Date.now()), e);
                },
              },
              default_tty_ops: {
                get_char: function (t) {
                  return Mt();
                },
                put_char: function (t, n) {
                  n === null || n === 10
                    ? (A(Dt(t.output, 0)), (t.output = []))
                    : n != 0 && t.output.push(n);
                },
                fsync: function (t) {
                  t.output &&
                    t.output.length > 0 &&
                    (A(Dt(t.output, 0)), (t.output = []));
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
                    ? (F(Dt(t.output, 0)), (t.output = []))
                    : n != 0 && t.output.push(n);
                },
                fsync: function (t) {
                  t.output &&
                    t.output.length > 0 &&
                    (F(Dt(t.output, 0)), (t.output = []));
                },
              },
            },
            At = function (t, n) {
              return (
                G(n, "alignment argument is required"),
                Math.ceil(t / n) * n
              );
            },
            Ft = function (t) {
              t = At(t, 65536);
              var e = zi(65536, t);
              return e ? St(e, t) : 0;
            },
            Ot = {
              ops_table: null,
              mount: function (t) {
                return Ot.createNode(null, "/", 16895, 0);
              },
              createNode: function (t, n, r, o) {
                if (Xt.isBlkdev(r) || Xt.isFIFO(r)) throw new Xt.ErrnoError(63);
                Ot.ops_table ||
                  (Ot.ops_table = {
                    dir: {
                      node: {
                        getattr: Ot.node_ops.getattr,
                        setattr: Ot.node_ops.setattr,
                        lookup: Ot.node_ops.lookup,
                        mknod: Ot.node_ops.mknod,
                        rename: Ot.node_ops.rename,
                        unlink: Ot.node_ops.unlink,
                        rmdir: Ot.node_ops.rmdir,
                        readdir: Ot.node_ops.readdir,
                        symlink: Ot.node_ops.symlink,
                      },
                      stream: { llseek: Ot.stream_ops.llseek },
                    },
                    file: {
                      node: {
                        getattr: Ot.node_ops.getattr,
                        setattr: Ot.node_ops.setattr,
                      },
                      stream: {
                        llseek: Ot.stream_ops.llseek,
                        read: Ot.stream_ops.read,
                        write: Ot.stream_ops.write,
                        allocate: Ot.stream_ops.allocate,
                        mmap: Ot.stream_ops.mmap,
                        msync: Ot.stream_ops.msync,
                      },
                    },
                    link: {
                      node: {
                        getattr: Ot.node_ops.getattr,
                        setattr: Ot.node_ops.setattr,
                        readlink: Ot.node_ops.readlink,
                      },
                      stream: {},
                    },
                    chrdev: {
                      node: {
                        getattr: Ot.node_ops.getattr,
                        setattr: Ot.node_ops.setattr,
                      },
                      stream: Xt.chrdev_stream_ops,
                    },
                  });
                var e = Xt.createNode(t, n, r, o);
                return (
                  Xt.isDir(e.mode)
                    ? ((e.node_ops = Ot.ops_table.dir.node),
                      (e.stream_ops = Ot.ops_table.dir.stream),
                      (e.contents = {}))
                    : Xt.isFile(e.mode)
                      ? ((e.node_ops = Ot.ops_table.file.node),
                        (e.stream_ops = Ot.ops_table.file.stream),
                        (e.usedBytes = 0),
                        (e.contents = null))
                      : Xt.isLink(e.mode)
                        ? ((e.node_ops = Ot.ops_table.link.node),
                          (e.stream_ops = Ot.ops_table.link.stream))
                        : Xt.isChrdev(e.mode) &&
                          ((e.node_ops = Ot.ops_table.chrdev.node),
                          (e.stream_ops = Ot.ops_table.chrdev.stream)),
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
                    (e.dev = Xt.isChrdev(t.mode) ? t.id : 1),
                    (e.ino = t.id),
                    (e.mode = t.mode),
                    (e.nlink = 1),
                    (e.uid = 0),
                    (e.gid = 0),
                    (e.rdev = t.rdev),
                    Xt.isDir(t.mode)
                      ? (e.size = 4096)
                      : Xt.isFile(t.mode)
                        ? (e.size = t.usedBytes)
                        : Xt.isLink(t.mode)
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
                    n.size !== void 0 && Ot.resizeFileStorage(t, n.size));
                },
                lookup: function (t, n) {
                  throw Xt.genericErrors[44];
                },
                mknod: function (t, n, r, o) {
                  return Ot.createNode(t, n, r, o);
                },
                rename: function (t, n, r) {
                  if (Xt.isDir(t.mode)) {
                    var e;
                    try {
                      e = Xt.lookupNode(n, r);
                    } catch (e) {}
                    if (e)
                      for (var o in e.contents) throw new Xt.ErrnoError(55);
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
                  var e = Xt.lookupNode(t, n);
                  for (var r in e.contents) throw new Xt.ErrnoError(55);
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
                  var e = Ot.createNode(t, n, 41471, 0);
                  return ((e.link = r), e);
                },
                readlink: function (t) {
                  if (!Xt.isLink(t.mode)) throw new Xt.ErrnoError(28);
                  return t.link;
                },
              },
              stream_ops: {
                read: function (t, n, r, o, a) {
                  var e = t.node.contents;
                  if (a >= t.node.usedBytes) return 0;
                  var i = Math.min(t.node.usedBytes - a, o);
                  if ((G(i >= 0), i > 8 && e.subarray))
                    n.set(e.subarray(a, a + i), r);
                  else for (var l = 0; l < i; l++) n[r + l] = e[a + l];
                  return i;
                },
                write: function (t, n, r, o, a, i) {
                  if (
                    (G(!(n instanceof ArrayBuffer)),
                    n.buffer === l().buffer && (i = !1),
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
                        G(
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
                    (Ot.expandFileStorage(e, a + o),
                    e.contents.subarray && n.subarray)
                  )
                    e.contents.set(n.subarray(r, r + o), a);
                  else for (var s = 0; s < o; s++) e.contents[a + s] = n[r + s];
                  return ((e.usedBytes = Math.max(e.usedBytes, a + o)), o);
                },
                llseek: function (t, n, r) {
                  var e = n;
                  if (
                    (r === 1
                      ? (e += t.position)
                      : r === 2 &&
                        Xt.isFile(t.node.mode) &&
                        (e += t.node.usedBytes),
                    e < 0)
                  )
                    throw new Xt.ErrnoError(28);
                  return e;
                },
                allocate: function (t, n, r) {
                  (Ot.expandFileStorage(t.node, n + r),
                    (t.node.usedBytes = Math.max(t.node.usedBytes, n + r)));
                },
                mmap: function (t, n, r, o, a) {
                  if (!Xt.isFile(t.node.mode)) throw new Xt.ErrnoError(43);
                  var e,
                    i,
                    s = t.node.contents;
                  if (!(a & 2) && s.buffer === l().buffer)
                    ((i = !1), (e = s.byteOffset));
                  else {
                    if (
                      ((r > 0 || r + n < s.length) &&
                        (s.subarray
                          ? (s = s.subarray(r, r + n))
                          : (s = Array.prototype.slice.call(s, r, r + n))),
                      (i = !0),
                      (e = Ft(n)),
                      !e)
                    )
                      throw new Xt.ErrnoError(48);
                    l().set(s, e);
                  }
                  return { ptr: e, allocated: i };
                },
                msync: function (t, n, r, o, a) {
                  return (Ot.stream_ops.write(t, n, 0, o, r, !1), 0);
                },
              },
            },
            Bt = function (t, n, r, o) {
              var e = o ? "" : Re("al " + t);
              (N(
                t,
                function (r) {
                  (G(
                    r,
                    'Loading data file "' + t + '" failed (no arrayBuffer).',
                  ),
                    n(new Uint8Array(r)),
                    e && Ee(e));
                },
                function (e) {
                  if (r) r();
                  else throw 'Loading data file "' + t + '" failed.';
                },
              ),
                e && Le(e));
            },
            Wt = y.preloadPlugins || [];
          function qt(e, t, n, r) {
            typeof Da != "undefined" && Da.init();
            var o = !1;
            return (
              Wt.forEach(function (a) {
                o || (a.canHandle(t) && (a.handle(e, t, n, r), (o = !0)));
              }),
              o
            );
          }
          function Ut(e, t, n, r, o, a, i, l, s, u) {
            var c = t ? It.resolve(Lt.join2(e, t)) : e,
              d = Re("cp " + c);
            function m(n) {
              function m(n) {
                (u && u(),
                  l || Xt.createDataFile(e, t, n, r, o, s),
                  a && a(),
                  Ee(d));
              }
              qt(n, c, m, function () {
                (i && i(), Ee(d));
              }) || m(n);
            }
            (Le(d),
              typeof n == "string"
                ? Bt(
                    n,
                    function (e) {
                      return m(e);
                    },
                    i,
                  )
                : m(n));
          }
          function Vt(e) {
            var t = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
              n = t[e];
            if (typeof n == "undefined")
              throw new Error("Unknown file open mode: " + e);
            return n;
          }
          function Ht(e, t) {
            var n = 0;
            return (e && (n |= 365), t && (n |= 146), n);
          }
          var Gt = {
              dbs: {},
              indexedDB: (function (e) {
                function t() {
                  return e.apply(this, arguments);
                }
                return (
                  (t.toString = function () {
                    return e.toString();
                  }),
                  t
                );
              })(function () {
                if (typeof indexedDB != "undefined") return indexedDB;
                var e = null;
                return (
                  typeof window == "object" &&
                    (e =
                      window.indexedDB ||
                      window.mozIndexedDB ||
                      window.webkitIndexedDB ||
                      window.msIndexedDB),
                  G(e, "IDBFS used, but indexedDB not supported"),
                  e
                );
              }),
              DB_VERSION: 21,
              DB_STORE_NAME: "FILE_DATA",
              mount: function (t) {
                return Ot.mount.apply(null, arguments);
              },
              syncfs: function (t, n, r) {
                Gt.getLocalSet(t, function (e, o) {
                  if (e) return r(e);
                  Gt.getRemoteSet(t, function (e, t) {
                    if (e) return r(e);
                    var a = n ? t : o,
                      i = n ? o : t;
                    Gt.reconcile(a, i, r);
                  });
                });
              },
              quit: function () {
                (Object.values(Gt.dbs).forEach(function (e) {
                  return e.close();
                }),
                  (Gt.dbs = {}));
              },
              getDB: function (t, n) {
                var e = Gt.dbs[t];
                if (e) return n(null, e);
                var r;
                try {
                  r = Gt.indexedDB().open(t, Gt.DB_VERSION);
                } catch (e) {
                  return n(e);
                }
                if (!r) return n("Unable to connect to IndexedDB");
                ((r.onupgradeneeded = function (e) {
                  var t = e.target.result,
                    n = e.target.transaction,
                    r;
                  (t.objectStoreNames.contains(Gt.DB_STORE_NAME)
                    ? (r = n.objectStore(Gt.DB_STORE_NAME))
                    : (r = t.createObjectStore(Gt.DB_STORE_NAME)),
                    r.indexNames.contains("timestamp") ||
                      r.createIndex("timestamp", "timestamp", { unique: !1 }));
                }),
                  (r.onsuccess = function () {
                    ((e = r.result), (Gt.dbs[t] = e), n(null, e));
                  }),
                  (r.onerror = function (e) {
                    (n(e.target.error), e.preventDefault());
                  }));
              },
              getLocalSet: function (t, n) {
                var e = {};
                function r(e) {
                  return e !== "." && e !== "..";
                }
                function o(e) {
                  return function (t) {
                    return Lt.join2(e, t);
                  };
                }
                for (
                  var a = Xt.readdir(t.mountpoint)
                    .filter(r)
                    .map(o(t.mountpoint));
                  a.length;
                ) {
                  var i = a.pop(),
                    l;
                  try {
                    l = Xt.stat(i);
                  } catch (e) {
                    return n(e);
                  }
                  (Xt.isDir(l.mode) &&
                    a.push.apply(a, Xt.readdir(i).filter(r).map(o(i))),
                    (e[i] = { timestamp: l.mtime }));
                }
                return n(null, { type: "local", entries: e });
              },
              getRemoteSet: function (t, n) {
                var e = {};
                Gt.getDB(t.mountpoint, function (t, r) {
                  if (t) return n(t);
                  try {
                    var o = r.transaction([Gt.DB_STORE_NAME], "readonly");
                    o.onerror = function (e) {
                      (n(e.target.error), e.preventDefault());
                    };
                    var a = o.objectStore(Gt.DB_STORE_NAME),
                      i = a.index("timestamp");
                    i.openKeyCursor().onsuccess = function (t) {
                      var o = t.target.result;
                      if (!o)
                        return n(null, { type: "remote", db: r, entries: e });
                      ((e[o.primaryKey] = { timestamp: o.key }), o.continue());
                    };
                  } catch (e) {
                    return n(e);
                  }
                });
              },
              loadLocalEntry: function (t, n) {
                var e, r;
                try {
                  var o = Xt.lookupPath(t);
                  ((r = o.node), (e = Xt.stat(t)));
                } catch (e) {
                  return n(e);
                }
                return Xt.isDir(e.mode)
                  ? n(null, { timestamp: e.mtime, mode: e.mode })
                  : Xt.isFile(e.mode)
                    ? ((r.contents = Ot.getFileDataAsTypedArray(r)),
                      n(null, {
                        timestamp: e.mtime,
                        mode: e.mode,
                        contents: r.contents,
                      }))
                    : n(new Error("node type not supported"));
              },
              storeLocalEntry: function (t, n, r) {
                try {
                  if (Xt.isDir(n.mode)) Xt.mkdirTree(t, n.mode);
                  else if (Xt.isFile(n.mode))
                    Xt.writeFile(t, n.contents, { canOwn: !0 });
                  else return r(new Error("node type not supported"));
                  (Xt.chmod(t, n.mode), Xt.utime(t, n.timestamp, n.timestamp));
                } catch (e) {
                  return r(e);
                }
                r(null);
              },
              removeLocalEntry: function (t, n) {
                try {
                  var e = Xt.stat(t);
                  Xt.isDir(e.mode)
                    ? Xt.rmdir(t)
                    : Xt.isFile(e.mode) && Xt.unlink(t);
                } catch (e) {
                  return n(e);
                }
                n(null);
              },
              loadRemoteEntry: function (t, n, r) {
                var e = t.get(n);
                ((e.onsuccess = function (e) {
                  r(null, e.target.result);
                }),
                  (e.onerror = function (e) {
                    (r(e.target.error), e.preventDefault());
                  }));
              },
              storeRemoteEntry: function (t, n, r, o) {
                try {
                  var e = t.put(r, n);
                } catch (e) {
                  o(e);
                  return;
                }
                ((e.onsuccess = function () {
                  o(null);
                }),
                  (e.onerror = function (e) {
                    (o(e.target.error), e.preventDefault());
                  }));
              },
              removeRemoteEntry: function (t, n, r) {
                var e = t.delete(n);
                ((e.onsuccess = function () {
                  r(null);
                }),
                  (e.onerror = function (e) {
                    (r(e.target.error), e.preventDefault());
                  }));
              },
              reconcile: function (t, n, r) {
                var e = 0,
                  o = [];
                Object.keys(t.entries).forEach(function (r) {
                  var a = t.entries[r],
                    i = n.entries[r];
                  (!i || a.timestamp.getTime() != i.timestamp.getTime()) &&
                    (o.push(r), e++);
                });
                var a = [];
                if (
                  (Object.keys(n.entries).forEach(function (n) {
                    t.entries[n] || (a.push(n), e++);
                  }),
                  !e)
                )
                  return r(null);
                var l = !1,
                  s = t.type === "remote" ? t.db : n.db,
                  u = s.transaction([Gt.DB_STORE_NAME], "readwrite"),
                  c = u.objectStore(Gt.DB_STORE_NAME);
                function d(e) {
                  if (e && !l) return ((l = !0), r(e));
                }
                ((u.onerror = function (e) {
                  (d(i.error), e.preventDefault());
                }),
                  (u.oncomplete = function (e) {
                    l || r(null);
                  }),
                  o.sort().forEach(function (e) {
                    n.type === "local"
                      ? Gt.loadRemoteEntry(c, e, function (t, n) {
                          if (t) return d(t);
                          Gt.storeLocalEntry(e, n, d);
                        })
                      : Gt.loadLocalEntry(e, function (t, n) {
                          if (t) return d(t);
                          Gt.storeRemoteEntry(c, e, n, d);
                        });
                  }),
                  a
                    .sort()
                    .reverse()
                    .forEach(function (e) {
                      n.type === "local"
                        ? Gt.removeLocalEntry(e, d)
                        : Gt.removeRemoteEntry(c, e, d);
                    }));
              },
            },
            zt = {
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
            jt = {};
          function Kt(e) {
            return (
              fn(
                "warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling",
              ),
              e
            );
          }
          function Qt(e) {
            var t = /\b_Z[\w\d_]+/g;
            return e.replace(t, function (e) {
              var t = Kt(e);
              return e === t ? e : t + " [" + e + "]";
            });
          }
          var Xt = {
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
                if ((n === void 0 && (n = {}), (t = It.resolve(t)), !t))
                  return { path: "", node: null };
                var e = { follow_mount: !0, recurse_count: 0 };
                if (((n = Object.assign(e, n)), n.recurse_count > 8))
                  throw new Xt.ErrnoError(32);
                for (
                  var r = t.split("/").filter(function (e) {
                      return !!e;
                    }),
                    o = Xt.root,
                    a = "/",
                    i = 0;
                  i < r.length;
                  i++
                ) {
                  var l = i === r.length - 1;
                  if (l && n.parent) break;
                  if (
                    ((o = Xt.lookupNode(o, r[i])),
                    (a = Lt.join2(a, r[i])),
                    Xt.isMountpoint(o) &&
                      (!l || (l && n.follow_mount)) &&
                      (o = o.mounted.root),
                    !l || n.follow)
                  )
                    for (var s = 0; Xt.isLink(o.mode); ) {
                      var u = Xt.readlink(a);
                      a = It.resolve(Lt.dirname(a), u);
                      var c = Xt.lookupPath(a, {
                        recurse_count: n.recurse_count + 1,
                      });
                      if (((o = c.node), s++ > 40)) throw new Xt.ErrnoError(32);
                    }
                }
                return { path: a, node: o };
              },
              getPath: function (t) {
                for (var e; ; ) {
                  if (Xt.isRoot(t)) {
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
                return ((t + e) >>> 0) % Xt.nameTable.length;
              },
              hashAddNode: function (t) {
                var e = Xt.hashName(t.parent.id, t.name);
                ((t.name_next = Xt.nameTable[e]), (Xt.nameTable[e] = t));
              },
              hashRemoveNode: function (t) {
                var e = Xt.hashName(t.parent.id, t.name);
                if (Xt.nameTable[e] === t) Xt.nameTable[e] = t.name_next;
                else
                  for (var n = Xt.nameTable[e]; n; ) {
                    if (n.name_next === t) {
                      n.name_next = t.name_next;
                      break;
                    }
                    n = n.name_next;
                  }
              },
              lookupNode: function (t, n) {
                var e = Xt.mayLookup(t);
                if (e) throw new Xt.ErrnoError(e, t);
                for (
                  var r = Xt.hashName(t.id, n), o = Xt.nameTable[r];
                  o;
                  o = o.name_next
                ) {
                  var a = o.name;
                  if (o.parent.id === t.id && a === n) return o;
                }
                return Xt.lookup(t, n);
              },
              createNode: function (t, n, r, o) {
                G(typeof t == "object");
                var e = new Xt.FSNode(t, n, r, o);
                return (Xt.hashAddNode(e), e);
              },
              destroyNode: function (t) {
                Xt.hashRemoveNode(t);
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
                return Xt.ignorePermissions
                  ? 0
                  : (n.includes("r") && !(t.mode & 292)) ||
                      (n.includes("w") && !(t.mode & 146)) ||
                      (n.includes("x") && !(t.mode & 73))
                    ? 2
                    : 0;
              },
              mayLookup: function (t) {
                var e = Xt.nodePermissions(t, "x");
                return e || (t.node_ops.lookup ? 0 : 2);
              },
              mayCreate: function (t, n) {
                try {
                  var e = Xt.lookupNode(t, n);
                  return 20;
                } catch (e) {}
                return Xt.nodePermissions(t, "wx");
              },
              mayDelete: function (t, n, r) {
                var e;
                try {
                  e = Xt.lookupNode(t, n);
                } catch (e) {
                  return e.errno;
                }
                var o = Xt.nodePermissions(t, "wx");
                if (o) return o;
                if (r) {
                  if (!Xt.isDir(e.mode)) return 54;
                  if (Xt.isRoot(e) || Xt.getPath(e) === Xt.cwd()) return 10;
                } else if (Xt.isDir(e.mode)) return 31;
                return 0;
              },
              mayOpen: function (t, n) {
                return t
                  ? Xt.isLink(t.mode)
                    ? 32
                    : Xt.isDir(t.mode) &&
                        (Xt.flagsToPermissionString(n) !== "r" || n & 512)
                      ? 31
                      : Xt.nodePermissions(t, Xt.flagsToPermissionString(n))
                  : 44;
              },
              MAX_OPEN_FDS: 4096,
              nextfd: function () {
                for (var e = 0; e <= Xt.MAX_OPEN_FDS; e++)
                  if (!Xt.streams[e]) return e;
                throw new Xt.ErrnoError(33);
              },
              getStreamChecked: function (t) {
                var e = Xt.getStream(t);
                if (!e) throw new Xt.ErrnoError(8);
                return e;
              },
              getStream: function (t) {
                return Xt.streams[t];
              },
              createStream: function (t, n) {
                return (
                  n === void 0 && (n = -1),
                  Xt.FSStream ||
                    ((Xt.FSStream = function () {
                      this.shared = {};
                    }),
                    (Xt.FSStream.prototype = {}),
                    Object.defineProperties(Xt.FSStream.prototype, {
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
                  (t = Object.assign(new Xt.FSStream(), t)),
                  n == -1 && (n = Xt.nextfd()),
                  (t.fd = n),
                  (Xt.streams[n] = t),
                  t
                );
              },
              closeStream: function (t) {
                Xt.streams[t] = null;
              },
              chrdev_stream_ops: {
                open: function (t) {
                  var e = Xt.getDevice(t.node.rdev);
                  ((t.stream_ops = e.stream_ops),
                    t.stream_ops.open && t.stream_ops.open(t));
                },
                llseek: function () {
                  throw new Xt.ErrnoError(70);
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
                Xt.devices[t] = { stream_ops: n };
              },
              getDevice: function (t) {
                return Xt.devices[t];
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
                  Xt.syncFSRequests++,
                  Xt.syncFSRequests > 1 &&
                    F(
                      "warning: " +
                        Xt.syncFSRequests +
                        " FS.syncfs operations in flight at once, probably just doing extra work",
                    ));
                var e = Xt.getMounts(Xt.root.mount),
                  r = 0;
                function o(e) {
                  return (G(Xt.syncFSRequests > 0), Xt.syncFSRequests--, n(e));
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
                if (e && Xt.root) throw new Xt.ErrnoError(10);
                if (!e && !o) {
                  var i = Xt.lookupPath(r, { follow_mount: !1 });
                  if (((r = i.path), (a = i.node), Xt.isMountpoint(a)))
                    throw new Xt.ErrnoError(10);
                  if (!Xt.isDir(a.mode)) throw new Xt.ErrnoError(54);
                }
                var l = { type: t, opts: n, mountpoint: r, mounts: [] },
                  s = t.mount(l);
                return (
                  (s.mount = l),
                  (l.root = s),
                  e
                    ? (Xt.root = s)
                    : a && ((a.mounted = l), a.mount && a.mount.mounts.push(l)),
                  s
                );
              },
              unmount: function (t) {
                var e = Xt.lookupPath(t, { follow_mount: !1 });
                if (!Xt.isMountpoint(e.node)) throw new Xt.ErrnoError(28);
                var n = e.node,
                  r = n.mounted,
                  o = Xt.getMounts(r);
                (Object.keys(Xt.nameTable).forEach(function (e) {
                  for (var t = Xt.nameTable[e]; t; ) {
                    var n = t.name_next;
                    (o.includes(t.mount) && Xt.destroyNode(t), (t = n));
                  }
                }),
                  (n.mounted = null));
                var a = n.mount.mounts.indexOf(r);
                (G(a !== -1), n.mount.mounts.splice(a, 1));
              },
              lookup: function (t, n) {
                return t.node_ops.lookup(t, n);
              },
              mknod: function (t, n, r) {
                var e = Xt.lookupPath(t, { parent: !0 }),
                  o = e.node,
                  a = Lt.basename(t);
                if (!a || a === "." || a === "..") throw new Xt.ErrnoError(28);
                var i = Xt.mayCreate(o, a);
                if (i) throw new Xt.ErrnoError(i);
                if (!o.node_ops.mknod) throw new Xt.ErrnoError(63);
                return o.node_ops.mknod(o, a, n, r);
              },
              create: function (t, n) {
                return (
                  (n = n !== void 0 ? n : 438),
                  (n &= 4095),
                  (n |= 32768),
                  Xt.mknod(t, n, 0)
                );
              },
              mkdir: function (t, n) {
                return (
                  (n = n !== void 0 ? n : 511),
                  (n &= 1023),
                  (n |= 16384),
                  Xt.mknod(t, n, 0)
                );
              },
              mkdirTree: function (t, n) {
                for (var e = t.split("/"), r = "", o = 0; o < e.length; ++o)
                  if (e[o]) {
                    r += "/" + e[o];
                    try {
                      Xt.mkdir(r, n);
                    } catch (e) {
                      if (e.errno != 20) throw e;
                    }
                  }
              },
              mkdev: function (t, n, r) {
                return (
                  typeof r == "undefined" && ((r = n), (n = 438)),
                  (n |= 8192),
                  Xt.mknod(t, n, r)
                );
              },
              symlink: function (t, n) {
                if (!It.resolve(t)) throw new Xt.ErrnoError(44);
                var e = Xt.lookupPath(n, { parent: !0 }),
                  r = e.node;
                if (!r) throw new Xt.ErrnoError(44);
                var o = Lt.basename(n),
                  a = Xt.mayCreate(r, o);
                if (a) throw new Xt.ErrnoError(a);
                if (!r.node_ops.symlink) throw new Xt.ErrnoError(63);
                return r.node_ops.symlink(r, o, t);
              },
              rename: function (t, n) {
                var e = Lt.dirname(t),
                  r = Lt.dirname(n),
                  o = Lt.basename(t),
                  a = Lt.basename(n),
                  i,
                  l,
                  s;
                if (
                  ((i = Xt.lookupPath(t, { parent: !0 })),
                  (l = i.node),
                  (i = Xt.lookupPath(n, { parent: !0 })),
                  (s = i.node),
                  !l || !s)
                )
                  throw new Xt.ErrnoError(44);
                if (l.mount !== s.mount) throw new Xt.ErrnoError(75);
                var u = Xt.lookupNode(l, o),
                  c = It.relative(t, r);
                if (c.charAt(0) !== ".") throw new Xt.ErrnoError(28);
                if (((c = It.relative(n, e)), c.charAt(0) !== "."))
                  throw new Xt.ErrnoError(55);
                var d;
                try {
                  d = Xt.lookupNode(s, a);
                } catch (e) {}
                if (u !== d) {
                  var m = Xt.isDir(u.mode),
                    p = Xt.mayDelete(l, o, m);
                  if (p) throw new Xt.ErrnoError(p);
                  if (((p = d ? Xt.mayDelete(s, a, m) : Xt.mayCreate(s, a)), p))
                    throw new Xt.ErrnoError(p);
                  if (!l.node_ops.rename) throw new Xt.ErrnoError(63);
                  if (Xt.isMountpoint(u) || (d && Xt.isMountpoint(d)))
                    throw new Xt.ErrnoError(10);
                  if (s !== l && ((p = Xt.nodePermissions(l, "w")), p))
                    throw new Xt.ErrnoError(p);
                  Xt.hashRemoveNode(u);
                  try {
                    l.node_ops.rename(u, s, a);
                  } catch (e) {
                    throw e;
                  } finally {
                    Xt.hashAddNode(u);
                  }
                }
              },
              rmdir: function (t) {
                var e = Xt.lookupPath(t, { parent: !0 }),
                  n = e.node,
                  r = Lt.basename(t),
                  o = Xt.lookupNode(n, r),
                  a = Xt.mayDelete(n, r, !0);
                if (a) throw new Xt.ErrnoError(a);
                if (!n.node_ops.rmdir) throw new Xt.ErrnoError(63);
                if (Xt.isMountpoint(o)) throw new Xt.ErrnoError(10);
                (n.node_ops.rmdir(n, r), Xt.destroyNode(o));
              },
              readdir: function (t) {
                var e = Xt.lookupPath(t, { follow: !0 }),
                  n = e.node;
                if (!n.node_ops.readdir) throw new Xt.ErrnoError(54);
                return n.node_ops.readdir(n);
              },
              unlink: function (t) {
                var e = Xt.lookupPath(t, { parent: !0 }),
                  n = e.node;
                if (!n) throw new Xt.ErrnoError(44);
                var r = Lt.basename(t),
                  o = Xt.lookupNode(n, r),
                  a = Xt.mayDelete(n, r, !1);
                if (a) throw new Xt.ErrnoError(a);
                if (!n.node_ops.unlink) throw new Xt.ErrnoError(63);
                if (Xt.isMountpoint(o)) throw new Xt.ErrnoError(10);
                (n.node_ops.unlink(n, r), Xt.destroyNode(o));
              },
              readlink: function (t) {
                var e = Xt.lookupPath(t),
                  n = e.node;
                if (!n) throw new Xt.ErrnoError(44);
                if (!n.node_ops.readlink) throw new Xt.ErrnoError(28);
                return It.resolve(Xt.getPath(n.parent), n.node_ops.readlink(n));
              },
              stat: function (t, n) {
                var e = Xt.lookupPath(t, { follow: !n }),
                  r = e.node;
                if (!r) throw new Xt.ErrnoError(44);
                if (!r.node_ops.getattr) throw new Xt.ErrnoError(63);
                return r.node_ops.getattr(r);
              },
              lstat: function (t) {
                return Xt.stat(t, !0);
              },
              chmod: function (t, n, r) {
                var e;
                if (typeof t == "string") {
                  var o = Xt.lookupPath(t, { follow: !r });
                  e = o.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new Xt.ErrnoError(63);
                e.node_ops.setattr(e, {
                  mode: (n & 4095) | (e.mode & -4096),
                  timestamp: Date.now(),
                });
              },
              lchmod: function (t, n) {
                Xt.chmod(t, n, !0);
              },
              fchmod: function (t, n) {
                var e = Xt.getStreamChecked(t);
                Xt.chmod(e.node, n);
              },
              chown: function (t, n, r, o) {
                var e;
                if (typeof t == "string") {
                  var a = Xt.lookupPath(t, { follow: !o });
                  e = a.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new Xt.ErrnoError(63);
                e.node_ops.setattr(e, { timestamp: Date.now() });
              },
              lchown: function (t, n, r) {
                Xt.chown(t, n, r, !0);
              },
              fchown: function (t, n, r) {
                var e = Xt.getStreamChecked(t);
                Xt.chown(e.node, n, r);
              },
              truncate: function (t, n) {
                if (n < 0) throw new Xt.ErrnoError(28);
                var e;
                if (typeof t == "string") {
                  var r = Xt.lookupPath(t, { follow: !0 });
                  e = r.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new Xt.ErrnoError(63);
                if (Xt.isDir(e.mode)) throw new Xt.ErrnoError(31);
                if (!Xt.isFile(e.mode)) throw new Xt.ErrnoError(28);
                var o = Xt.nodePermissions(e, "w");
                if (o) throw new Xt.ErrnoError(o);
                e.node_ops.setattr(e, { size: n, timestamp: Date.now() });
              },
              ftruncate: function (t, n) {
                var e = Xt.getStreamChecked(t);
                if ((e.flags & 2097155) === 0) throw new Xt.ErrnoError(28);
                Xt.truncate(e.node, n);
              },
              utime: function (t, n, r) {
                var e = Xt.lookupPath(t, { follow: !0 }),
                  o = e.node;
                o.node_ops.setattr(o, { timestamp: Math.max(n, r) });
              },
              open: function (t, n, r) {
                if (t === "") throw new Xt.ErrnoError(44);
                ((n = typeof n == "string" ? Vt(n) : n),
                  (r = typeof r == "undefined" ? 438 : r),
                  n & 64 ? (r = (r & 4095) | 32768) : (r = 0));
                var e;
                if (typeof t == "object") e = t;
                else {
                  t = Lt.normalize(t);
                  try {
                    var o = Xt.lookupPath(t, { follow: !(n & 131072) });
                    e = o.node;
                  } catch (e) {}
                }
                var a = !1;
                if (n & 64)
                  if (e) {
                    if (n & 128) throw new Xt.ErrnoError(20);
                  } else ((e = Xt.mknod(t, r, 0)), (a = !0));
                if (!e) throw new Xt.ErrnoError(44);
                if (
                  (Xt.isChrdev(e.mode) && (n &= -513),
                  n & 65536 && !Xt.isDir(e.mode))
                )
                  throw new Xt.ErrnoError(54);
                if (!a) {
                  var i = Xt.mayOpen(e, n);
                  if (i) throw new Xt.ErrnoError(i);
                }
                (n & 512 && !a && Xt.truncate(e, 0), (n &= -131713));
                var l = Xt.createStream({
                  node: e,
                  path: Xt.getPath(e),
                  flags: n,
                  seekable: !0,
                  position: 0,
                  stream_ops: e.stream_ops,
                  ungotten: [],
                  error: !1,
                });
                return (
                  l.stream_ops.open && l.stream_ops.open(l),
                  y.logReadFiles &&
                    !(n & 1) &&
                    (Xt.readFiles || (Xt.readFiles = {}),
                    t in Xt.readFiles || (Xt.readFiles[t] = 1)),
                  l
                );
              },
              close: function (t) {
                if (Xt.isClosed(t)) throw new Xt.ErrnoError(8);
                t.getdents && (t.getdents = null);
                try {
                  t.stream_ops.close && t.stream_ops.close(t);
                } catch (e) {
                  throw e;
                } finally {
                  Xt.closeStream(t.fd);
                }
                t.fd = null;
              },
              isClosed: function (t) {
                return t.fd === null;
              },
              llseek: function (t, n, r) {
                if (Xt.isClosed(t)) throw new Xt.ErrnoError(8);
                if (!t.seekable || !t.stream_ops.llseek)
                  throw new Xt.ErrnoError(70);
                if (r != 0 && r != 1 && r != 2) throw new Xt.ErrnoError(28);
                return (
                  (t.position = t.stream_ops.llseek(t, n, r)),
                  (t.ungotten = []),
                  t.position
                );
              },
              read: function (t, n, r, o, a) {
                if ((G(r >= 0), o < 0 || a < 0)) throw new Xt.ErrnoError(28);
                if (Xt.isClosed(t)) throw new Xt.ErrnoError(8);
                if ((t.flags & 2097155) === 1) throw new Xt.ErrnoError(8);
                if (Xt.isDir(t.node.mode)) throw new Xt.ErrnoError(31);
                if (!t.stream_ops.read) throw new Xt.ErrnoError(28);
                var e = typeof a != "undefined";
                if (!e) a = t.position;
                else if (!t.seekable) throw new Xt.ErrnoError(70);
                var i = t.stream_ops.read(t, n, r, o, a);
                return (e || (t.position += i), i);
              },
              write: function (t, n, r, o, a, i) {
                if ((G(r >= 0), o < 0 || a < 0)) throw new Xt.ErrnoError(28);
                if (Xt.isClosed(t)) throw new Xt.ErrnoError(8);
                if ((t.flags & 2097155) === 0) throw new Xt.ErrnoError(8);
                if (Xt.isDir(t.node.mode)) throw new Xt.ErrnoError(31);
                if (!t.stream_ops.write) throw new Xt.ErrnoError(28);
                t.seekable && t.flags & 1024 && Xt.llseek(t, 0, 2);
                var e = typeof a != "undefined";
                if (!e) a = t.position;
                else if (!t.seekable) throw new Xt.ErrnoError(70);
                var l = t.stream_ops.write(t, n, r, o, a, i);
                return (e || (t.position += l), l);
              },
              allocate: function (t, n, r) {
                if (Xt.isClosed(t)) throw new Xt.ErrnoError(8);
                if (n < 0 || r <= 0) throw new Xt.ErrnoError(28);
                if ((t.flags & 2097155) === 0) throw new Xt.ErrnoError(8);
                if (!Xt.isFile(t.node.mode) && !Xt.isDir(t.node.mode))
                  throw new Xt.ErrnoError(43);
                if (!t.stream_ops.allocate) throw new Xt.ErrnoError(138);
                t.stream_ops.allocate(t, n, r);
              },
              mmap: function (t, n, r, o, a) {
                if ((o & 2) !== 0 && (a & 2) === 0 && (t.flags & 2097155) !== 2)
                  throw new Xt.ErrnoError(2);
                if ((t.flags & 2097155) === 1) throw new Xt.ErrnoError(2);
                if (!t.stream_ops.mmap) throw new Xt.ErrnoError(43);
                return t.stream_ops.mmap(t, n, r, o, a);
              },
              msync: function (t, n, r, o, a) {
                return (
                  G(r >= 0),
                  t.stream_ops.msync ? t.stream_ops.msync(t, n, r, o, a) : 0
                );
              },
              munmap: function (t) {
                return 0;
              },
              ioctl: function (t, n, r) {
                if (!t.stream_ops.ioctl) throw new Xt.ErrnoError(59);
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
                  r = Xt.open(t, n.flags),
                  o = Xt.stat(t),
                  a = o.size,
                  i = new Uint8Array(a);
                return (
                  Xt.read(r, i, 0, a, 0),
                  n.encoding === "utf8"
                    ? (e = Dt(i, 0))
                    : n.encoding === "binary" && (e = i),
                  Xt.close(r),
                  e
                );
              },
              writeFile: function (t, n, r) {
                (r === void 0 && (r = {}), (r.flags = r.flags || 577));
                var e = Xt.open(t, r.flags, r.mode);
                if (typeof n == "string") {
                  var o = new Uint8Array($t(n) + 1),
                    a = Pt(n, o, 0, o.length);
                  Xt.write(e, o, 0, a, void 0, r.canOwn);
                } else if (ArrayBuffer.isView(n))
                  Xt.write(e, n, 0, n.byteLength, void 0, r.canOwn);
                else throw new Error("Unsupported data type");
                Xt.close(e);
              },
              cwd: function () {
                return Xt.currentPath;
              },
              chdir: function (t) {
                var e = Xt.lookupPath(t, { follow: !0 });
                if (e.node === null) throw new Xt.ErrnoError(44);
                if (!Xt.isDir(e.node.mode)) throw new Xt.ErrnoError(54);
                var n = Xt.nodePermissions(e.node, "x");
                if (n) throw new Xt.ErrnoError(n);
                Xt.currentPath = e.path;
              },
              createDefaultDirectories: function () {
                (Xt.mkdir("/tmp"),
                  Xt.mkdir("/home"),
                  Xt.mkdir("/home/web_user"));
              },
              createDefaultDevices: function () {
                (Xt.mkdir("/dev"),
                  Xt.registerDevice(Xt.makedev(1, 3), {
                    read: function () {
                      return 0;
                    },
                    write: function (t, n, r, o, a) {
                      return o;
                    },
                  }),
                  Xt.mkdev("/dev/null", Xt.makedev(1, 3)),
                  wt.register(Xt.makedev(5, 0), wt.default_tty_ops),
                  wt.register(Xt.makedev(6, 0), wt.default_tty1_ops),
                  Xt.mkdev("/dev/tty", Xt.makedev(5, 0)),
                  Xt.mkdev("/dev/tty1", Xt.makedev(6, 0)));
                var e = new Uint8Array(1024),
                  t = 0,
                  n = function () {
                    return (t === 0 && (t = kt(e).byteLength), e[--t]);
                  };
                (Xt.createDevice("/dev", "random", n),
                  Xt.createDevice("/dev", "urandom", n),
                  Xt.mkdir("/dev/shm"),
                  Xt.mkdir("/dev/shm/tmp"));
              },
              createSpecialDirectories: function () {
                Xt.mkdir("/proc");
                var e = Xt.mkdir("/proc/self");
                (Xt.mkdir("/proc/self/fd"),
                  Xt.mount(
                    {
                      mount: function () {
                        var t = Xt.createNode(e, "fd", 16895, 73);
                        return (
                          (t.node_ops = {
                            lookup: function (t, n) {
                              var e = +n,
                                r = Xt.getStreamChecked(e),
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
                (y.stdin
                  ? Xt.createDevice("/dev", "stdin", y.stdin)
                  : Xt.symlink("/dev/tty", "/dev/stdin"),
                  y.stdout
                    ? Xt.createDevice("/dev", "stdout", null, y.stdout)
                    : Xt.symlink("/dev/tty", "/dev/stdout"),
                  y.stderr
                    ? Xt.createDevice("/dev", "stderr", null, y.stderr)
                    : Xt.symlink("/dev/tty1", "/dev/stderr"));
                var e = Xt.open("/dev/stdin", 0),
                  t = Xt.open("/dev/stdout", 1),
                  n = Xt.open("/dev/stderr", 1);
                (G(e.fd === 0, "invalid handle for stdin (" + e.fd + ")"),
                  G(t.fd === 1, "invalid handle for stdout (" + t.fd + ")"),
                  G(n.fd === 2, "invalid handle for stderr (" + n.fd + ")"));
              },
              ensureErrnoError: function () {
                Xt.ErrnoError ||
                  ((Xt.ErrnoError = function (t, n) {
                    ((this.name = "ErrnoError"),
                      (this.node = n),
                      (this.setErrno = function (e) {
                        this.errno = e;
                        for (var t in jt)
                          if (jt[t] === e) {
                            this.code = t;
                            break;
                          }
                      }),
                      this.setErrno(t),
                      (this.message = zt[t]),
                      this.stack &&
                        (Object.defineProperty(this, "stack", {
                          value: new Error().stack,
                          writable: !0,
                        }),
                        (this.stack = Qt(this.stack))));
                  }),
                  (Xt.ErrnoError.prototype = new Error()),
                  (Xt.ErrnoError.prototype.constructor = Xt.ErrnoError),
                  [44].forEach(function (e) {
                    ((Xt.genericErrors[e] = new Xt.ErrnoError(e)),
                      (Xt.genericErrors[e].stack =
                        "<generic error, no stack>"));
                  }));
              },
              staticInit: function () {
                (Xt.ensureErrnoError(),
                  (Xt.nameTable = new Array(4096)),
                  Xt.mount(Ot, {}, "/"),
                  Xt.createDefaultDirectories(),
                  Xt.createDefaultDevices(),
                  Xt.createSpecialDirectories(),
                  (Xt.filesystems = { MEMFS: Ot, IDBFS: Gt }));
              },
              init: function (t, n, r) {
                (G(
                  !Xt.init.initialized,
                  "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)",
                ),
                  (Xt.init.initialized = !0),
                  Xt.ensureErrnoError(),
                  (y.stdin = t || y.stdin),
                  (y.stdout = n || y.stdout),
                  (y.stderr = r || y.stderr),
                  Xt.createStandardStreams());
              },
              quit: function () {
                ((Xt.init.initialized = !1), wi(0));
                for (var e = 0; e < Xt.streams.length; e++) {
                  var t = Xt.streams[e];
                  t && Xt.close(t);
                }
              },
              findObject: function (t, n) {
                var e = Xt.analyzePath(t, n);
                return e.exists ? e.object : null;
              },
              analyzePath: function (t, n) {
                try {
                  var e = Xt.lookupPath(t, { follow: !n });
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
                  var e = Xt.lookupPath(t, { parent: !0 });
                  ((r.parentExists = !0),
                    (r.parentPath = e.path),
                    (r.parentObject = e.node),
                    (r.name = Lt.basename(t)),
                    (e = Xt.lookupPath(t, { follow: !n })),
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
                t = typeof t == "string" ? t : Xt.getPath(t);
                for (var e = n.split("/").reverse(); e.length; ) {
                  var a = e.pop();
                  if (a) {
                    var i = Lt.join2(t, a);
                    try {
                      Xt.mkdir(i);
                    } catch (e) {}
                    t = i;
                  }
                }
                return i;
              },
              createFile: function (t, n, r, o, a) {
                var e = Lt.join2(typeof t == "string" ? t : Xt.getPath(t), n),
                  i = Ht(o, a);
                return Xt.create(e, i);
              },
              createDataFile: function (t, n, r, o, a, i) {
                var e = n;
                t &&
                  ((t = typeof t == "string" ? t : Xt.getPath(t)),
                  (e = n ? Lt.join2(t, n) : t));
                var l = Ht(o, a),
                  s = Xt.create(e, l);
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
                  Xt.chmod(s, l | 146);
                  var m = Xt.open(s, 577);
                  (Xt.write(m, r, 0, r.length, 0, i),
                    Xt.close(m),
                    Xt.chmod(s, l));
                }
                return s;
              },
              createDevice: function (t, n, r, o) {
                var e = Lt.join2(typeof t == "string" ? t : Xt.getPath(t), n),
                  a = Ht(!!r, !!o);
                Xt.createDevice.major || (Xt.createDevice.major = 64);
                var i = Xt.makedev(Xt.createDevice.major++, 0);
                return (
                  Xt.registerDevice(i, {
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
                          throw new Xt.ErrnoError(29);
                        }
                        if (s === void 0 && e === 0) throw new Xt.ErrnoError(6);
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
                          throw new Xt.ErrnoError(29);
                        }
                      return (a && (t.node.timestamp = Date.now()), e);
                    },
                  }),
                  Xt.mkdev(e, a, i)
                );
              },
              forceLoadFile: function (t) {
                if (t.isDevice || t.isFolder || t.link || t.contents) return !0;
                if (typeof XMLHttpRequest != "undefined")
                  throw new Error(
                    "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
                  );
                if (P)
                  try {
                    ((t.contents = Nt(P(t.url), !0)),
                      (t.usedBytes = t.contents.length));
                  } catch (e) {
                    throw new Xt.ErrnoError(29);
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
                          : Nt(e.responseText || "", !0);
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
                        A(
                          "LazyFiles on gzip forces download of the whole file when length is accessed",
                        )),
                      (this._length = t),
                      (this._chunkSize = i),
                      (this.lengthKnown = !0));
                  }),
                  typeof XMLHttpRequest != "undefined")
                ) {
                  if (!k)
                    throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                  var i = new e();
                  Object.defineProperties(i, {
                    length: {
                      get: function () {
                        return (
                          this.lengthKnown || this.cacheLength(),
                          this._length
                        );
                      },
                    },
                    chunkSize: {
                      get: function () {
                        return (
                          this.lengthKnown || this.cacheLength(),
                          this._chunkSize
                        );
                      },
                    },
                  });
                  var s = { isDevice: !1, contents: i };
                } else var s = { isDevice: !1, url: r };
                var u = Xt.createFile(t, n, s, o, a);
                (s.contents
                  ? (u.contents = s.contents)
                  : s.url && ((u.contents = null), (u.url = s.url)),
                  Object.defineProperties(u, {
                    usedBytes: {
                      get: function () {
                        return this.contents.length;
                      },
                    },
                  }));
                var c = {},
                  d = Object.keys(u.stream_ops);
                d.forEach(function (e) {
                  var t = u.stream_ops[e];
                  c[e] = function () {
                    return (Xt.forceLoadFile(u), t.apply(null, arguments));
                  };
                });
                function m(e, t, n, r, o) {
                  var a = e.node.contents;
                  if (o >= a.length) return 0;
                  var i = Math.min(a.length - o, r);
                  if ((G(i >= 0), a.slice))
                    for (var l = 0; l < i; l++) t[n + l] = a[o + l];
                  else for (var l = 0; l < i; l++) t[n + l] = a.get(o + l);
                  return i;
                }
                return (
                  (c.read = function (e, t, n, r, o) {
                    return (Xt.forceLoadFile(u), m(e, t, n, r, o));
                  }),
                  (c.mmap = function (e, t, n, r, o) {
                    Xt.forceLoadFile(u);
                    var a = Ft(t);
                    if (!a) throw new Xt.ErrnoError(48);
                    return (m(e, l(), a, t, n), { ptr: a, allocated: !0 });
                  }),
                  (u.stream_ops = c),
                  u
                );
              },
              absolutePath: function () {
                ke(
                  "FS.absolutePath has been removed; use PATH_FS.resolve instead",
                );
              },
              createFolder: function () {
                ke("FS.createFolder has been removed; use FS.mkdir instead");
              },
              createLink: function () {
                ke("FS.createLink has been removed; use FS.symlink instead");
              },
              joinPath: function () {
                ke("FS.joinPath has been removed; use PATH.join instead");
              },
              mmapAlloc: function () {
                ke(
                  "FS.mmapAlloc has been replaced by the top level function mmapAlloc",
                );
              },
              standardizePath: function () {
                ke(
                  "FS.standardizePath has been removed; use PATH.normalize instead",
                );
              },
            },
            Yt = function (t, n) {
              return (G(typeof t == "number"), t ? Dt(d(), t, n) : "");
            },
            Jt = {
              DEFAULT_POLLMASK: 5,
              calculateAt: function (t, n, r) {
                if (Lt.isAbs(n)) return n;
                var e;
                if (t === -100) e = Xt.cwd();
                else {
                  var o = Jt.getStreamFromFD(t);
                  e = o.path;
                }
                if (n.length == 0) {
                  if (!r) throw new Xt.ErrnoError(44);
                  return e;
                }
                return Lt.join2(e, n);
              },
              doStat: function (t, n, r) {
                try {
                  var e = t(n);
                } catch (e) {
                  if (
                    e &&
                    e.node &&
                    Lt.normalize(n) !== Lt.normalize(Xt.getPath(e.node))
                  )
                    return -54;
                  throw e;
                }
                ((_()[r >> 2] = e.dev),
                  (_()[(r + 4) >> 2] = e.mode),
                  (f()[(r + 8) >> 2] = e.nlink),
                  (_()[(r + 12) >> 2] = e.uid),
                  (_()[(r + 16) >> 2] = e.gid),
                  (_()[(r + 20) >> 2] = e.rdev),
                  (Z[(r + 24) >> 3] = BigInt(e.size)),
                  (_()[(r + 32) >> 2] = 4096),
                  (_()[(r + 36) >> 2] = e.blocks));
                var o = e.atime.getTime(),
                  a = e.mtime.getTime(),
                  i = e.ctime.getTime();
                return (
                  (Z[(r + 40) >> 3] = BigInt(Math.floor(o / 1e3))),
                  (f()[(r + 48) >> 2] = (o % 1e3) * 1e3),
                  (Z[(r + 56) >> 3] = BigInt(Math.floor(a / 1e3))),
                  (f()[(r + 64) >> 2] = (a % 1e3) * 1e3),
                  (Z[(r + 72) >> 3] = BigInt(Math.floor(i / 1e3))),
                  (f()[(r + 80) >> 2] = (i % 1e3) * 1e3),
                  (Z[(r + 88) >> 3] = BigInt(e.ino)),
                  0
                );
              },
              doMsync: function (t, n, r, o, a) {
                if (!Xt.isFile(n.node.mode)) throw new Xt.ErrnoError(43);
                if (o & 2) return 0;
                var e = d().slice(t, t + r);
                Xt.msync(n, e, a, r, o);
              },
              varargs: void 0,
              get: function () {
                (G(Jt.varargs != null), (Jt.varargs += 4));
                var e = _()[(Jt.varargs - 4) >> 2];
                return e;
              },
              getStr: function (t) {
                var e = Yt(t);
                return e;
              },
              getStreamFromFD: function (t) {
                var e = Xt.getStreamChecked(t);
                return e;
              },
            };
          function Zt(e) {
            if (D) return Oa(1, 1, e);
            ((H = e),
              me() ||
                (on.terminateAllThreads(), y.onExit && y.onExit(e), (V = !0)),
              L(e, new ht(e)));
          }
          var en = function (t, n) {
              if (((H = t), rc(), D)) throw (G(!n), sn(t), "unwind");
              if (me() && !n) {
                var e =
                  "program exited (with status: " +
                  t +
                  "), but keepRuntimeAlive() is set (counter=" +
                  de +
                  ") due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)";
                (b(e), F(e));
              }
              Zt(t);
            },
            tn = en,
            nn = function (t) {
              return (
                G(typeof t == "number"),
                (t >>>= 0),
                "0x" + t.toString(16).padStart(8, "0")
              );
            },
            rn = function (t) {
              if (t instanceof ht || t == "unwind") return H;
              (ie(),
                t instanceof WebAssembly.RuntimeError &&
                  _l() <= 0 &&
                  F(
                    "Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 1048576)",
                  ),
                L(1, t));
            },
            on = {
              unusedWorkers: [],
              runningWorkers: [],
              tlsInitFunctions: [],
              pthreads: {},
              nextWorkerID: 1,
              debugInit: function () {
                function e() {
                  var e = 0;
                  return (
                    ce && typeof Fi != "undefined" && (e = Fi()),
                    "w:" + (y.workerID || 0) + ",t:" + nn(e) + ": "
                  );
                }
                var t = ze;
                ze = function (r) {
                  return t(e() + r);
                };
              },
              init: function () {
                (on.debugInit(), D ? on.initWorker() : on.initMainThread());
              },
              initMainThread: function () {
                var e =
                  typeof y.pthreadPoolSizeOverride == "number"
                    ? y.pthreadPoolSizeOverride
                    : 20;
                for (
                  o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                    o("WAWebVoipQplHelpers").VoipInitQplPoint
                      .WORKER_POOL_ALLOC_START,
                  );
                  e--;
                )
                  on.allocateUnusedWorker();
                ge(function () {
                  Le("loading-workers");
                  var e = 15e3,
                    t = !1,
                    n = function (a) {
                      if (!t) {
                        ((t = !0), clearTimeout(r));
                        var n = 0;
                        try {
                          if (a) {
                            var i = [],
                              l = [];
                            for (var s of on.unusedWorkers)
                              s.loaded ? i.push(s) : l.push(s);
                            for (var s of l)
                              try {
                                yt(s);
                              } catch (e) {
                                F(
                                  "voip: ThreadPoolManager: failed to terminate timed-out pthread worker " +
                                    s.workerID +
                                    ": " +
                                    e,
                                );
                              }
                            ((n = l.length),
                              (on.unusedWorkers = i),
                              F(
                                "voip: ThreadPoolManager: pthread worker prewarm timed out after " +
                                  e +
                                  "ms; continuing with " +
                                  i.length +
                                  " ready workers",
                              ));
                          }
                        } finally {
                          (Ee("loading-workers"),
                            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                              o("WAWebVoipQplHelpers").VoipInitQplPoint
                                .WORKER_POOL_ALLOC_END,
                              {
                                bool: { worker_pool_alloc_timed_out: a },
                                int: {
                                  worker_pool_ready_count:
                                    on.unusedWorkers.length,
                                  worker_pool_timed_out_count: n,
                                },
                              },
                            ));
                        }
                      }
                    },
                    r = setTimeout(function () {
                      return n(!0);
                    }, e);
                  on.loadWasmModuleToAllWorkers(function () {
                    return n(!1);
                  });
                });
              },
              initWorker: function () {
                B = !1;
              },
              setExitStatus: function (t) {
                H = t;
              },
              terminateAllThreads__deps: ["$terminateWorker"],
              terminateAllThreads: function () {
                G(
                  !D,
                  "Internal Error! terminateAllThreads() can only ever be called from main application thread!",
                );
                for (var e of on.runningWorkers) yt(e);
                for (var e of on.unusedWorkers) yt(e);
                ((on.unusedWorkers = []),
                  (on.runningWorkers = []),
                  (on.pthreads = []));
              },
              returnWorkerToPool: function (t) {
                var e = t.pthread_ptr;
                (delete on.pthreads[e],
                  on.unusedWorkers.push(t),
                  on.runningWorkers.splice(on.runningWorkers.indexOf(t), 1),
                  (t.pthread_ptr = 0),
                  rl(e));
              },
              receiveObjectTransfer: function (t) {},
              threadInitTLS: function () {
                on.tlsInitFunctions.forEach(function (e) {
                  return e();
                });
              },
              loadWasmModuleToWorker: function (o) {
                return new (u || (u = n("Promise")))(function (n) {
                  (o.addMessageListener("cmd", function (e) {
                    var t = e,
                      r = t.cmd;
                    if (t.targetThread && t.targetThread != Fi()) {
                      var a = on.pthreads[t.targetThread];
                      a
                        ? a.postMessage(
                            babelHelpers.extends({}, t, { type: "cmd" }),
                            t.transferList,
                          )
                        : F(
                            'Internal error! Worker sent a message "' +
                              r +
                              '" to target pthread ' +
                              t.targetThread +
                              ", but that thread no longer exists!",
                          );
                      return;
                    }
                    r === "checkMailbox"
                      ? Yo()
                      : r === "spawnThread"
                        ? Rt(t)
                        : r === "cleanupThread"
                          ? vt(t.thread)
                          : r === "killThread"
                            ? Ct(t.thread)
                            : r === "cancelThread"
                              ? bt(t.thread)
                              : r === "loaded"
                                ? ((o.loaded = !0), n(o))
                                : r === "alert"
                                  ? alert(
                                      "Thread " + t.threadId + ": " + t.text,
                                    )
                                  : t.target === "setimmediate"
                                    ? o.postMessage(
                                        babelHelpers.extends({}, t, {
                                          type: "cmd",
                                        }),
                                      )
                                    : r === "callHandler"
                                      ? y[t.handler].apply(y, t.args)
                                      : r &&
                                        F(
                                          "worker sent an unknown command " + r,
                                        );
                  }),
                    o.addMessageListener(
                      "waWasmWorkerCompatibleCallback",
                      function (t) {
                        var n = t.type,
                          r = t.__name,
                          o = babelHelpers.objectWithoutPropertiesLoose(t, e);
                        i.WhatsAppVoipWasmWorkerCompatibleCallbacks[r](o);
                      },
                    ),
                    (o.onerror = function (e) {
                      var t = "worker sent an error!";
                      throw (
                        o.pthread_ptr &&
                          (t =
                            "Pthread " + nn(o.pthread_ptr) + " sent an error!"),
                        F(
                          t +
                            " " +
                            e.filename +
                            ":" +
                            e.lineno +
                            ": " +
                            e.message,
                        ),
                        e
                      );
                    }),
                    G(
                      W instanceof WebAssembly.Memory,
                      "WebAssembly memory should have been loaded by now!",
                    ),
                    G(
                      U instanceof WebAssembly.Module,
                      "WebAssembly Module should have been loaded by now!",
                    ));
                  var r = [],
                    a = ["onExit", "onAbort", "print", "printErr"];
                  for (var l of a)
                    Object.prototype.hasOwnProperty.call(y, l) && r.push(l);
                  ((o.workerID = on.nextWorkerID++),
                    o.postMessage({
                      cmd: "load",
                      handlers: r,
                      urlOrBlob: y.mainScriptUrlOrBlob || t,
                      wasmMemory: W,
                      wasmModule: U,
                      workerID: o.workerID,
                      wasmVariant: "prod-nonlab",
                      type: "cmd",
                    }));
                });
              },
              loadWasmModuleToAllWorkers: function (t) {
                if (D) return t();
                var e = (u || (u = n("Promise"))).all(
                  on.unusedWorkers.map(on.loadWasmModuleToWorker),
                );
                e.then(t);
              },
              allocateUnusedWorker: function () {
                var e,
                  t = o("WorkerBundleResource").createDedicatedWebWorker(
                    r("WAWebVoipWebWasmWorkerResource"),
                  );
                ((e = new (o("WorkerMessagePort").WorkerMessagePort)(
                  t,
                  "WAWebVoipWebWasmWorker",
                )),
                  o("WorkerClient").init(e),
                  on.unusedWorkers.push(e));
              },
              getNewWorker: function () {
                return (
                  on.unusedWorkers.length == 0 &&
                    (F(
                      "Tried to spawn a new thread, but the thread pool is exhausted.\nThis might result in a deadlock unless some threads eventually exit or the code explicitly breaks out to the event loop.\nIf you want to increase the pool size, use setting `-sPTHREAD_POOL_SIZE=...`.\nIf you want to throw an explicit error instead of the risk of deadlocking in those cases, use setting `-sPTHREAD_POOL_SIZE_STRICT=2`.",
                    ),
                    on.allocateUnusedWorker(),
                    on.loadWasmModuleToWorker(on.unusedWorkers[0])),
                  on.unusedWorkers.pop()
                );
              },
            };
          y.PThread = on;
          var an = function (t) {
            for (; t.length > 0; ) t.shift()(y);
          };
          function ln() {
            var e = Fi(),
              t = _()[(e + 52) >> 2],
              n = _()[(e + 56) >> 2],
              r = t - n;
            (G(t != 0),
              G(r != 0),
              G(t > r, "stackHigh must be higher then stackLow"),
              ul(t, r),
              ml(t),
              ae());
          }
          y.establishStackSpace = ln;
          function sn(e) {
            if (D) return Oa(2, 0, e);
            tn(e);
          }
          var un = function (t) {
              var e = dl(),
                n = t();
              return (ml(e), n);
            },
            cn = function (t) {
              return un(function () {
                var e = pl(4),
                  n = pl(4);
                fl(t, e, n);
                var r = f()[e >> 2],
                  o = f()[n >> 2],
                  a = Yt(r);
                Ni(r);
                var i;
                return (o && ((i = Yt(o)), Ni(o)), [a, i]);
              });
            };
          function dn(e) {
            return cn(e);
          }
          y.getExceptionMessage = dn;
          var mn = function (t) {
            return oe.get(t);
          };
          function pn(e, t) {
            var n = mn(e)(t);
            ie();
            function r(e) {
              me() ? on.setExitStatus(e) : ol(e);
            }
            r(n);
          }
          y.invokeEntryPoint = pn;
          function _n(e) {
            on.tlsInitFunctions.push(e);
          }
          var fn = function (t) {
              (fn.shown || (fn.shown = {}),
                fn.shown[t] || ((fn.shown[t] = 1), F(t)));
            },
            gn = function (t, n, r, o) {
              ke(
                "Assertion failed: " +
                  Yt(t) +
                  ", at: " +
                  [
                    n ? Yt(n) : "unknown filename",
                    r,
                    o ? Yt(o) : "unknown function",
                  ],
              );
            },
            hn = [],
            yn = 0;
          function Cn(e) {
            var t = new Rn(e);
            return (
              t.get_caught() || (t.set_caught(!0), yn--),
              t.set_rethrown(!1),
              hn.push(t),
              Vi(t.excPtr),
              t.get_exception_ptr()
            );
          }
          function bn() {
            if (!hn.length) return 0;
            var e = hn[hn.length - 1];
            return (Vi(e.excPtr), e.excPtr);
          }
          var vn = 0;
          function Sn() {
            (il(0, 0), G(hn.length > 0));
            var e = hn.pop();
            (Hi(e.excPtr), (vn = 0));
          }
          function Rn(e) {
            ((this.excPtr = e),
              (this.ptr = e - 24),
              (this.set_type = function (e) {
                f()[(this.ptr + 4) >> 2] = e;
              }),
              (this.get_type = function () {
                return f()[(this.ptr + 4) >> 2];
              }),
              (this.set_destructor = function (e) {
                f()[(this.ptr + 8) >> 2] = e;
              }),
              (this.get_destructor = function () {
                return f()[(this.ptr + 8) >> 2];
              }),
              (this.set_caught = function (e) {
                ((e = e ? 1 : 0), (l()[(this.ptr + 12) >> 0] = e));
              }),
              (this.get_caught = function () {
                return l()[(this.ptr + 12) >> 0] != 0;
              }),
              (this.set_rethrown = function (e) {
                ((e = e ? 1 : 0), (l()[(this.ptr + 13) >> 0] = e));
              }),
              (this.get_rethrown = function () {
                return l()[(this.ptr + 13) >> 0] != 0;
              }),
              (this.init = function (e, t) {
                (this.set_adjusted_ptr(0),
                  this.set_type(e),
                  this.set_destructor(t));
              }),
              (this.set_adjusted_ptr = function (e) {
                f()[(this.ptr + 16) >> 2] = e;
              }),
              (this.get_adjusted_ptr = function () {
                return f()[(this.ptr + 16) >> 2];
              }),
              (this.get_exception_ptr = function () {
                var e = hl(this.get_type());
                if (e) return f()[this.excPtr >> 2];
                var t = this.get_adjusted_ptr();
                return t !== 0 ? t : this.excPtr;
              }));
          }
          function Ln(e) {
            throw (vn || (vn = new Ne(e)), vn);
          }
          var En = function (t) {
              var e = vn && vn.excPtr;
              if (!e) return (ll(0), 0);
              var n = new Rn(e);
              n.set_adjusted_ptr(e);
              var r = n.get_type();
              if (!r) return (ll(0), e);
              for (var o in t) {
                var a = t[o];
                if (a === 0 || a === r) break;
                var i = n.ptr + 16;
                if (gl(a, r, i)) return (ll(a), e);
              }
              return (ll(r), e);
            },
            kn = function () {
              return En([]);
            },
            In = function (t) {
              return En([t]);
            },
            Tn = function (t, n) {
              return En([t, n]);
            };
          function Dn(e) {
            var t = new Rn(e).get_exception_ptr();
            return t;
          }
          function xn() {
            var e = hn.pop();
            e || ke("no exception to throw");
            var t = e.excPtr;
            throw (
              e.get_rethrown() ||
                (hn.push(e), e.set_rethrown(!0), e.set_caught(!1), yn++),
              (vn = new Ne(t)),
              vn
            );
          }
          function $n(e) {
            if (e) {
              var t = new Rn(e);
              (hn.push(t), t.set_rethrown(!0), xn());
            }
          }
          function Pn(e, t, n) {
            var r = new Rn(e);
            throw (r.init(t, n), (vn = new Ne(e)), yn++, vn);
          }
          function Nn() {
            return yn;
          }
          function Mn(e) {
            (Qi(e, !k, 1, !E, 1048576, !1), on.threadInitTLS());
          }
          function wn(e) {
            D
              ? postMessage({ cmd: "cleanupThread", thread: e, type: "cmd" })
              : vt(e);
          }
          function An(e, t, n, r) {
            return D ? Oa(3, 1, e, t, n, r) : Fn(e, t, n, r);
          }
          function Fn(e, t, n, r) {
            if (typeof SharedArrayBuffer == "undefined")
              return (
                F(
                  "Current environment does not support SharedArrayBuffer, pthreads are not available!",
                ),
                6
              );
            var o = [],
              a = 0;
            if (D && (o.length === 0 || a)) return An(e, t, n, r);
            var i = {
              startRoutine: n,
              pthread_ptr: e,
              arg: r,
              transferList: o,
            };
            return D
              ? ((i.cmd = "spawnThread"),
                postMessage(babelHelpers.extends({}, i, { type: "cmd" }), o),
                0)
              : Rt(i);
          }
          function On(e) {
            if (D) return Oa(4, 1, e);
            try {
              return ((e = Jt.getStr(e)), Xt.chdir(e), 0);
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var Bn = function (t) {
            return ((_()[Ai() >> 2] = t), t);
          };
          function Wn(e, t, n) {
            if (D) return Oa(5, 1, e, t, n);
            Jt.varargs = n;
            try {
              var r = Jt.getStreamFromFD(e);
              switch (t) {
                case 0: {
                  var o = Jt.get();
                  if (o < 0) return -28;
                  var a;
                  return ((a = Xt.createStream(r, o)), a.fd);
                }
                case 1:
                case 2:
                  return 0;
                case 3:
                  return r.flags;
                case 4: {
                  var o = Jt.get();
                  return ((r.flags |= o), 0);
                }
                case 5: {
                  var o = Jt.get(),
                    i = 0;
                  return ((m()[(o + i) >> 1] = 2), 0);
                }
                case 6:
                case 7:
                  return 0;
                case 16:
                case 8:
                  return -28;
                case 9:
                  return (Bn(28), -1);
                default:
                  return -28;
              }
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function qn(e, t) {
            if (D) return Oa(6, 1, e, t);
            try {
              var n = Jt.getStreamFromFD(e);
              return Jt.doStat(Xt.stat, n.path, t);
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var Un = 9007199254740992,
            Vn = -9007199254740992;
          function Hn(e) {
            return e < Vn || e > Un ? NaN : Number(e);
          }
          function Gn(e, t) {
            if (D) return Oa(7, 1, e, t);
            t = Hn(t);
            try {
              return isNaN(t) ? 61 : (Xt.ftruncate(e, t), 0);
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var zn = function (t, n, r) {
            return (
              G(
                typeof r == "number",
                "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
              ),
              Pt(t, d(), n, r)
            );
          };
          function jn(e, t, n) {
            if (D) return Oa(8, 1, e, t, n);
            try {
              var r = Jt.getStreamFromFD(e);
              r.getdents || (r.getdents = Xt.readdir(r.path));
              for (
                var o = 280,
                  a = 0,
                  i = Xt.llseek(r, 0, 1),
                  s = Math.floor(i / o);
                s < r.getdents.length && a + o <= n;
              ) {
                var u,
                  c,
                  d = r.getdents[s];
                if (d === ".") ((u = r.node.id), (c = 4));
                else if (d === "..") {
                  var p = Xt.lookupPath(r.path, { parent: !0 });
                  ((u = p.node.id), (c = 4));
                } else {
                  var _ = Xt.lookupNode(r.node, d);
                  ((u = _.id),
                    (c = Xt.isChrdev(_.mode)
                      ? 2
                      : Xt.isDir(_.mode)
                        ? 4
                        : Xt.isLink(_.mode)
                          ? 10
                          : 8));
                }
                (G(u),
                  (Z[(t + a) >> 3] = BigInt(u)),
                  (Z[(t + a + 8) >> 3] = BigInt((s + 1) * o)),
                  (m()[(t + a + 16) >> 1] = 280),
                  (l()[(t + a + 18) >> 0] = c),
                  zn(d, t + a + 19, 256),
                  (a += o),
                  (s += 1));
              }
              return (Xt.llseek(r, s * o, 0), a);
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Kn(e, t, n) {
            if (D) return Oa(9, 1, e, t, n);
            Jt.varargs = n;
            try {
              var r = Jt.getStreamFromFD(e);
              switch (t) {
                case 21509:
                  return r.tty ? 0 : -59;
                case 21505: {
                  if (!r.tty) return -59;
                  if (r.tty.ops.ioctl_tcgets) {
                    var o = r.tty.ops.ioctl_tcgets(r),
                      a = Jt.get();
                    ((_()[a >> 2] = o.c_iflag || 0),
                      (_()[(a + 4) >> 2] = o.c_oflag || 0),
                      (_()[(a + 8) >> 2] = o.c_cflag || 0),
                      (_()[(a + 12) >> 2] = o.c_lflag || 0));
                    for (var i = 0; i < 32; i++)
                      l()[(a + i + 17) >> 0] = o.c_cc[i] || 0;
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
                      var a = Jt.get(),
                        s = _()[a >> 2],
                        u = _()[(a + 4) >> 2],
                        c = _()[(a + 8) >> 2],
                        d = _()[(a + 12) >> 2],
                        p = [],
                        i = 0;
                      i < 32;
                      i++
                    )
                      p.push(l()[(a + i + 17) >> 0]);
                    return r.tty.ops.ioctl_tcsets(r.tty, t, {
                      c_iflag: s,
                      c_oflag: u,
                      c_cflag: c,
                      c_lflag: d,
                      c_cc: p,
                    });
                  }
                  return 0;
                }
                case 21519: {
                  if (!r.tty) return -59;
                  var a = Jt.get();
                  return ((_()[a >> 2] = 0), 0);
                }
                case 21520:
                  return r.tty ? -28 : -59;
                case 21531: {
                  var a = Jt.get();
                  return Xt.ioctl(r, t, a);
                }
                case 21523: {
                  if (!r.tty) return -59;
                  if (r.tty.ops.ioctl_tiocgwinsz) {
                    var f = r.tty.ops.ioctl_tiocgwinsz(r.tty),
                      a = Jt.get();
                    ((m()[a >> 1] = f[0]), (m()[(a + 2) >> 1] = f[1]));
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
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Qn(e, t) {
            if (D) return Oa(10, 1, e, t);
            try {
              return ((e = Jt.getStr(e)), Jt.doStat(Xt.lstat, e, t));
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Xn(e, t, n) {
            if (D) return Oa(11, 1, e, t, n);
            try {
              return (
                (t = Jt.getStr(t)),
                (t = Jt.calculateAt(e, t)),
                (t = Lt.normalize(t)),
                t[t.length - 1] === "/" && (t = t.substr(0, t.length - 1)),
                Xt.mkdir(t, n, 0),
                0
              );
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Yn(e, t, n, r) {
            if (D) return Oa(12, 1, e, t, n, r);
            try {
              t = Jt.getStr(t);
              var o = r & 256,
                a = r & 4096;
              return (
                (r = r & -6401),
                G(!r, "unknown flags in __syscall_newfstatat: " + r),
                (t = Jt.calculateAt(e, t, a)),
                Jt.doStat(o ? Xt.lstat : Xt.stat, t, n)
              );
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Jn(e, t, n, r) {
            if (D) return Oa(13, 1, e, t, n, r);
            Jt.varargs = r;
            try {
              ((t = Jt.getStr(t)), (t = Jt.calculateAt(e, t)));
              var o = r ? Jt.get() : 0;
              return Xt.open(t, n, o).fd;
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Zn(e, t) {
            if (D) return Oa(14, 1, e, t);
            try {
              return ((e = Jt.getStr(e)), Jt.doStat(Xt.stat, e, t));
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function er(e, t, n) {
            if (D) return Oa(15, 1, e, t, n);
            try {
              return (
                (t = Jt.getStr(t)),
                (t = Jt.calculateAt(e, t)),
                n === 0
                  ? Xt.unlink(t)
                  : n === 512
                    ? Xt.rmdir(t)
                    : ke("Invalid flags passed to unlinkat"),
                0
              );
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function tr(e) {
            if (e === null) return "null";
            var t = typeof e;
            return t === "object" || t === "array" || t === "function"
              ? e.toString()
              : "" + e;
          }
          function nr() {
            for (var e = new Array(256), t = 0; t < 256; ++t)
              e[t] = String.fromCharCode(t);
            rr = e;
          }
          var rr = void 0;
          function or(e) {
            for (var t = "", n = e; d()[n]; ) t += rr[d()[n++]];
            return t;
          }
          var ar = {},
            ir = {},
            lr = {},
            sr = void 0;
          function ur(e) {
            throw new sr(e);
          }
          var cr = void 0;
          function dr(e) {
            throw new cr(e);
          }
          function mr(e, t, n) {
            e.forEach(function (e) {
              lr[e] = t;
            });
            function r(t) {
              var r = n(t);
              r.length !== e.length && dr("Mismatched type converter count");
              for (var o = 0; o < e.length; ++o) _r(e[o], r[o]);
            }
            var o = new Array(t.length),
              a = [],
              i = 0;
            (t.forEach(function (e, t) {
              Object.prototype.hasOwnProperty.call(ir, e)
                ? (o[t] = ir[e])
                : (a.push(e),
                  Object.prototype.hasOwnProperty.call(ar, e) || (ar[e] = []),
                  ar[e].push(function () {
                    ((o[t] = ir[e]), ++i, i === a.length && r(o));
                  }));
            }),
              a.length === 0 && r(o));
          }
          function pr(e, t, n) {
            n === void 0 && (n = {});
            var r = t.name;
            if (
              (e ||
                ur(
                  'type "' +
                    r +
                    '" must have a positive integer typeid pointer',
                ),
              Object.prototype.hasOwnProperty.call(ir, e))
            ) {
              if (n.ignoreDuplicateRegistrations) return;
              ur("Cannot register type '" + r + "' twice");
            }
            if (
              ((ir[e] = t),
              delete lr[e],
              Object.prototype.hasOwnProperty.call(ar, e))
            ) {
              var o = ar[e];
              (delete ar[e],
                o.forEach(function (e) {
                  return e();
                }));
            }
          }
          function _r(e, t, n) {
            if ((n === void 0 && (n = {}), !("argPackAdvance" in t)))
              throw new TypeError(
                "registerType registeredInstance requires argPackAdvance",
              );
            return pr(e, t, n);
          }
          function fr(e, t, n) {
            switch (t) {
              case 0:
                return n
                  ? function (t) {
                      return l()[t];
                    }
                  : function (t) {
                      return d()[t];
                    };
              case 1:
                return n
                  ? function (t) {
                      return m()[t >> 1];
                    }
                  : function (t) {
                      return p()[t >> 1];
                    };
              case 2:
                return n
                  ? function (t) {
                      return _()[t >> 2];
                    }
                  : function (t) {
                      return f()[t >> 2];
                    };
              case 3:
                return n
                  ? function (t) {
                      return Z[t >> 3];
                    }
                  : function (t) {
                      return ee[t >> 3];
                    };
              default:
                throw new TypeError("Unknown integer type: " + e);
            }
          }
          function gr(e, t, n, r, o) {
            t = or(t);
            var a = hr(n),
              i = t.indexOf("u") != -1;
            (i && (o = (BigInt(1) << BigInt(64)) - BigInt(1)),
              _r(e, {
                name: t,
                fromWireType: function (t) {
                  return t;
                },
                toWireType: function (n, a) {
                  if (typeof a != "bigint" && typeof a != "number")
                    throw new TypeError(
                      'Cannot convert "' + tr(a) + '" to ' + this.name,
                    );
                  if (a < r || a > o)
                    throw new TypeError(
                      'Passing a number "' +
                        tr(a) +
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
                readValueFromPointer: fr(t, a, !i),
                destructorFunction: null,
              }));
          }
          function hr(e) {
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
          function yr(e, t, n, r, o) {
            var a = hr(n);
            ((t = or(t)),
              _r(e, {
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
                  if (n === 1) e = l();
                  else if (n === 2) e = m();
                  else if (n === 4) e = _();
                  else throw new TypeError("Unknown boolean type size: " + t);
                  return this.fromWireType(e[r >> a]);
                },
                destructorFunction: null,
                jsType: "boolean",
              }));
          }
          function Cr(e) {
            if (!(this instanceof zr) || !(e instanceof zr)) return !1;
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
          function br(e) {
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
          function vr(e) {
            function t(e) {
              return e.$$.ptrType.registeredClass.name;
            }
            ur(t(e) + " instance already deleted");
          }
          var Sr = !1;
          function Rr(e) {}
          function Lr(e) {
            e.smartPtr
              ? e.smartPtrType.rawDestructor(e.smartPtr)
              : e.ptrType.registeredClass.rawDestructor(e.ptr);
          }
          function Er(e) {
            e.count.value -= 1;
            var t = e.count.value === 0;
            t && Lr(e);
          }
          function kr(e, t, n) {
            if (t === n) return e;
            if (n.baseClass === void 0) return null;
            var r = kr(e, t, n.baseClass);
            return r === null ? null : n.downcast(r);
          }
          var Ir = {};
          function Tr() {
            return Object.keys(wr).length;
          }
          function Dr() {
            var e = [];
            for (var t in wr)
              Object.prototype.hasOwnProperty.call(wr, t) && e.push(wr[t]);
            return e;
          }
          var xr = [];
          function $r() {
            for (; xr.length; ) {
              var e = xr.pop();
              ((e.$$.deleteScheduled = !1), e.delete());
            }
          }
          var Pr = void 0;
          function Nr(e) {
            ((Pr = e), xr.length && Pr && Pr($r));
          }
          function Mr() {
            ((y.getInheritedInstanceCount = Tr),
              (y.getLiveInheritedInstances = Dr),
              (y.flushPendingDeletes = $r),
              (y.setDelayFunction = Nr));
          }
          var wr = {};
          function Ar(e, t) {
            for (
              t === void 0 && ur("ptr should not be undefined");
              e.baseClass;
            )
              ((t = e.upcast(t)), (e = e.baseClass));
            return t;
          }
          function Fr(e, t) {
            return ((t = Ar(e, t)), wr[t]);
          }
          function Or(e, t) {
            (!t.ptrType || !t.ptr) &&
              dr("makeClassHandle requires ptr and ptrType");
            var n = !!t.smartPtrType,
              r = !!t.smartPtr;
            return (
              n !== r && dr("Both smartPtrType and smartPtr must be specified"),
              (t.count = { value: 1 }),
              Wr(Object.create(e, { $$: { value: t } }))
            );
          }
          function Br(e) {
            var t = this.getPointee(e);
            if (!t) return (this.destructor(e), null);
            var n = Fr(this.registeredClass, t);
            if (n !== void 0) {
              if (n.$$.count.value === 0)
                return ((n.$$.ptr = t), (n.$$.smartPtr = e), n.clone());
              var r = n.clone();
              return (this.destructor(e), r);
            }
            function o() {
              return this.isSmartPointer
                ? Or(this.registeredClass.instancePrototype, {
                    ptrType: this.pointeeType,
                    ptr: t,
                    smartPtrType: this,
                    smartPtr: e,
                  })
                : Or(this.registeredClass.instancePrototype, {
                    ptrType: this,
                    ptr: e,
                  });
            }
            var a = this.registeredClass.getActualType(t),
              i = Ir[a];
            if (!i) return o.call(this);
            var l;
            this.isConst ? (l = i.constPointerType) : (l = i.pointerType);
            var s = kr(t, this.registeredClass, l.registeredClass);
            return s === null
              ? o.call(this)
              : this.isSmartPointer
                ? Or(l.registeredClass.instancePrototype, {
                    ptrType: l,
                    ptr: s,
                    smartPtrType: this,
                    smartPtr: e,
                  })
                : Or(l.registeredClass.instancePrototype, {
                    ptrType: l,
                    ptr: s,
                  });
          }
          var Wr = function (t) {
            return typeof FinalizationRegistry == "undefined"
              ? ((Wr = function (t) {
                  return t;
                }),
                t)
              : ((Sr = new FinalizationRegistry(function (e) {
                  (e.leakWarning.stack.replace(/^Error: /, ""), Er(e.$$));
                })),
                (Wr = function (t) {
                  var e = t.$$,
                    n = !!e.smartPtr;
                  if (n) {
                    var r = { $$: e },
                      o = e.ptrType.registeredClass;
                    ((r.leakWarning = new Error(
                      "Embind found a leaked C++ instance " +
                        o.name +
                        " <" +
                        nn(e.ptr) +
                        ">.\nWe'll free it automatically in this case, but this functionality is not reliable across various environments.\nMake sure to invoke .delete() manually once you're done with the instance instead.\nOriginally allocated",
                    )),
                      "captureStackTrace" in Error &&
                        Error.captureStackTrace(r.leakWarning, Br),
                      Sr.register(t, r, t));
                  }
                  return t;
                }),
                (Rr = function (t) {
                  return Sr.unregister(t);
                }),
                Wr(t));
          };
          function qr() {
            if ((this.$$.ptr || vr(this), this.$$.preservePointerOnDelete))
              return ((this.$$.count.value += 1), this);
            var e = Wr(
              Object.create(Object.getPrototypeOf(this), {
                $$: { value: br(this.$$) },
              }),
            );
            return ((e.$$.count.value += 1), (e.$$.deleteScheduled = !1), e);
          }
          function Ur() {
            (this.$$.ptr || vr(this),
              this.$$.deleteScheduled &&
                !this.$$.preservePointerOnDelete &&
                ur("Object already scheduled for deletion"),
              Rr(this),
              Er(this.$$),
              this.$$.preservePointerOnDelete ||
                ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0)));
          }
          function Vr() {
            return !this.$$.ptr;
          }
          function Hr() {
            return (
              this.$$.ptr || vr(this),
              this.$$.deleteScheduled &&
                !this.$$.preservePointerOnDelete &&
                ur("Object already scheduled for deletion"),
              xr.push(this),
              xr.length === 1 && Pr && Pr($r),
              (this.$$.deleteScheduled = !0),
              this
            );
          }
          function Gr() {
            ((zr.prototype.isAliasOf = Cr),
              (zr.prototype.clone = qr),
              (zr.prototype.delete = Ur),
              (zr.prototype.isDeleted = Vr),
              (zr.prototype.deleteLater = Hr));
          }
          function zr() {}
          var jr = 48,
            Kr = 57;
          function Qr(e) {
            if (e === void 0) return "_unknown";
            e = e.replace(/[^a-zA-Z0-9_]/g, "$");
            var t = e.charCodeAt(0);
            return t >= jr && t <= Kr ? "_" + e : e;
          }
          function Xr(e, t) {
            var n;
            return (
              (e = Qr(e)),
              ((n = {}),
              (n[e] = function () {
                return t.apply(this, arguments);
              }),
              n)[e]
            );
          }
          function Yr(e, t, n) {
            if (e[t].overloadTable === void 0) {
              var r = e[t];
              ((e[t] = function () {
                return (
                  Object.prototype.hasOwnProperty.call(
                    e[t].overloadTable,
                    arguments.length,
                  ) ||
                    ur(
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
          function Jr(e, t, n) {
            Object.prototype.hasOwnProperty.call(y, e)
              ? ((n === void 0 ||
                  (y[e].overloadTable !== void 0 &&
                    y[e].overloadTable[n] !== void 0)) &&
                  ur("Cannot register public name '" + e + "' twice"),
                Yr(y, e, e),
                Object.prototype.hasOwnProperty.call(y, n) &&
                  ur(
                    "Cannot register multiple overloads of a function with the same number of arguments (" +
                      n +
                      ")!",
                  ),
                (y[e].overloadTable[n] = t))
              : ((y[e] = t), n !== void 0 && (y[e].numArguments = n));
          }
          function Zr(e, t, n, r, o, a, i, l) {
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
          function eo(e, t, n) {
            for (; t !== n; )
              (t.upcast ||
                ur(
                  "Expected null or instance of " +
                    n.name +
                    ", got an instance of " +
                    t.name,
                ),
                (e = t.upcast(e)),
                (t = t.baseClass));
            return e;
          }
          function to(e, t) {
            if (t === null)
              return (
                this.isReference && ur("null is not a valid " + this.name),
                0
              );
            (t.$$ || ur('Cannot pass "' + tr(t) + '" as a ' + this.name),
              t.$$.ptr ||
                ur(
                  "Cannot pass deleted object as a pointer of type " +
                    this.name,
                ));
            var n = t.$$.ptrType.registeredClass,
              r = eo(t.$$.ptr, n, this.registeredClass);
            return r;
          }
          function no(e, t) {
            var n;
            if (t === null)
              return (
                this.isReference && ur("null is not a valid " + this.name),
                this.isSmartPointer
                  ? ((n = this.rawConstructor()),
                    e !== null && e.push(this.rawDestructor, n),
                    n)
                  : 0
              );
            (t.$$ || ur('Cannot pass "' + tr(t) + '" as a ' + this.name),
              t.$$.ptr ||
                ur(
                  "Cannot pass deleted object as a pointer of type " +
                    this.name,
                ),
              !this.isConst &&
                t.$$.ptrType.isConst &&
                ur(
                  "Cannot convert argument of type " +
                    (t.$$.smartPtrType
                      ? t.$$.smartPtrType.name
                      : t.$$.ptrType.name) +
                    " to parameter type " +
                    this.name,
                ));
            var r = t.$$.ptrType.registeredClass;
            if (
              ((n = eo(t.$$.ptr, r, this.registeredClass)), this.isSmartPointer)
            )
              switch (
                (t.$$.smartPtr === void 0 &&
                  ur("Passing raw pointer to smart pointer is illegal"),
                this.sharingPolicy)
              ) {
                case 0:
                  t.$$.smartPtrType === this
                    ? (n = t.$$.smartPtr)
                    : ur(
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
                      Do.toHandle(function () {
                        o.delete();
                      }),
                    )),
                      e !== null && e.push(this.rawDestructor, n));
                  }
                  break;
                default:
                  ur("Unsupporting sharing policy");
              }
            return n;
          }
          function ro(e, t) {
            if (t === null)
              return (
                this.isReference && ur("null is not a valid " + this.name),
                0
              );
            (t.$$ || ur('Cannot pass "' + tr(t) + '" as a ' + this.name),
              t.$$.ptr ||
                ur(
                  "Cannot pass deleted object as a pointer of type " +
                    this.name,
                ),
              t.$$.ptrType.isConst &&
                ur(
                  "Cannot convert argument of type " +
                    t.$$.ptrType.name +
                    " to parameter type " +
                    this.name,
                ));
            var n = t.$$.ptrType.registeredClass,
              r = eo(t.$$.ptr, n, this.registeredClass);
            return r;
          }
          function oo(e) {
            return this.fromWireType(_()[e >> 2]);
          }
          function ao(e) {
            return (this.rawGetPointee && (e = this.rawGetPointee(e)), e);
          }
          function io(e) {
            this.rawDestructor && this.rawDestructor(e);
          }
          function lo(e) {
            e !== null && e.delete();
          }
          function so() {
            ((uo.prototype.getPointee = ao),
              (uo.prototype.destructor = io),
              (uo.prototype.argPackAdvance = 8),
              (uo.prototype.readValueFromPointer = oo),
              (uo.prototype.deleteObject = lo),
              (uo.prototype.fromWireType = Br));
          }
          function uo(e, t, n, r, o, a, i, l, s, u, c) {
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
                  ? ((this.toWireType = to), (this.destructorFunction = null))
                  : ((this.toWireType = ro), (this.destructorFunction = null))
                : (this.toWireType = no));
          }
          function co(e, t, n) {
            (Object.prototype.hasOwnProperty.call(y, e) ||
              dr("Replacing nonexistant public symbol"),
              y[e].overloadTable !== void 0 && n !== void 0
                ? (y[e].overloadTable[n] = t)
                : ((y[e] = t), (y[e].argCount = n)));
          }
          function mo(e, t) {
            e = or(e);
            function n() {
              return mn(t);
            }
            var r = n();
            return (
              typeof r != "function" &&
                ur("unknown function pointer with signature " + e + ": " + t),
              r
            );
          }
          function po(e, t) {
            var n = Xr(t, function (e) {
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
          var _o = void 0;
          function fo(e) {
            var t = ji(e),
              n = or(t);
            return (Ni(t), n);
          }
          function go(e, t) {
            var n = [],
              r = {};
            function o(e) {
              if (!r[e] && !ir[e]) {
                if (lr[e]) {
                  lr[e].forEach(o);
                  return;
                }
                (n.push(e), (r[e] = !0));
              }
            }
            throw (t.forEach(o), new _o(e + ": " + n.map(fo).join([", "])));
          }
          function ho(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            ((c = or(c)),
              (a = mo(o, a)),
              l && (l = mo(i, l)),
              u && (u = mo(s, u)),
              (m = mo(d, m)));
            var p = Qr(c);
            (Jr(p, function () {
              go("Cannot construct " + c + " due to unbound types", [r]);
            }),
              mr([e, t, n], r ? [r] : [], function (t) {
                t = t[0];
                var n, o;
                r
                  ? ((n = t.registeredClass), (o = n.instancePrototype))
                  : (o = zr.prototype);
                var i = Xr(p, function () {
                    if (Object.getPrototypeOf(this) !== s)
                      throw new sr("Use 'new' to construct " + c);
                    if (d.constructor_body === void 0)
                      throw new sr(c + " has no accessible constructor");
                    var e = d.constructor_body[arguments.length];
                    if (e === void 0)
                      throw new sr(
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
                var d = new Zr(c, i, s, m, n, a, l, u);
                d.baseClass &&
                  (d.baseClass.__derivedClasses === void 0 &&
                    (d.baseClass.__derivedClasses = []),
                  d.baseClass.__derivedClasses.push(d));
                var _ = new uo(c, d, !0, !1, !1),
                  f = new uo(c + "*", d, !1, !1, !1),
                  g = new uo(c + " const*", d, !1, !0, !1);
                return (
                  (Ir[e] = { pointerType: f, constPointerType: g }),
                  co(p, i),
                  [_, f, g]
                );
              }));
          }
          function yo(e, t) {
            for (var n = [], r = 0; r < e; r++) n.push(f()[(t + r * 4) >> 2]);
            return n;
          }
          function Co(e) {
            for (; e.length; ) {
              var t = e.pop(),
                n = e.pop();
              n(t);
            }
          }
          function bo(e, t, n, r, o, a) {
            var i = t.length;
            (i < 2 &&
              ur(
                "argTypes array size mismatch! Must at least get return value and 'this' types!",
              ),
              G(!a, "Async bindings are only supported with JSPI."));
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
                ur(
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
                if (s) Co(_);
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
          function vo(e, t, n, r, o, a) {
            G(t > 0);
            var i = yo(t, n);
            ((o = mo(r, o)),
              mr([], [e], function (e) {
                e = e[0];
                var n = "constructor " + e.name;
                if (
                  (e.registeredClass.constructor_body === void 0 &&
                    (e.registeredClass.constructor_body = []),
                  e.registeredClass.constructor_body[t - 1] !== void 0)
                )
                  throw new sr(
                    "Cannot register multiple constructors with identical number of parameters (" +
                      (t - 1) +
                      ") for class '" +
                      e.name +
                      "'! Overload resolution is currently only performed using the parameter count, not actual type info!",
                  );
                return (
                  (e.registeredClass.constructor_body[t - 1] = function () {
                    go(
                      "Cannot construct " + e.name + " due to unbound types",
                      i,
                    );
                  }),
                  mr([], i, function (r) {
                    return (
                      r.splice(1, 0, null),
                      (e.registeredClass.constructor_body[t - 1] = bo(
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
          function So(e, t, n, r, o, a, i, l, s) {
            var u = yo(n, r);
            ((t = or(t)),
              (a = mo(o, a)),
              mr([], [e], function (e) {
                e = e[0];
                var r = e.name + "." + t;
                (t.startsWith("@@") && (t = Symbol[t.substring(2)]),
                  l && e.registeredClass.pureVirtualFunctions.push(t));
                function o() {
                  go("Cannot call " + r + " due to unbound types", u);
                }
                var c = e.registeredClass.instancePrototype,
                  d = c[t];
                return (
                  d === void 0 ||
                  (d.overloadTable === void 0 &&
                    d.className !== e.name &&
                    d.argCount === n - 2)
                    ? ((o.argCount = n - 2), (o.className = e.name), (c[t] = o))
                    : (Yr(c, t, r), (c[t].overloadTable[n - 2] = o)),
                  mr([], u, function (o) {
                    var l = bo(r, o, e, a, i, s);
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
          function Ro() {
            Object.assign(Lo.prototype, {
              get: function (t) {
                return (
                  G(this.allocated[t] !== void 0, "invalid handle: " + t),
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
                (G(this.allocated[t] !== void 0),
                  (this.allocated[t] = void 0),
                  this.freelist.push(t));
              },
            });
          }
          function Lo() {
            ((this.allocated = [void 0]), (this.freelist = []));
          }
          var Eo = new Lo();
          function ko(e) {
            e >= Eo.reserved && --Eo.get(e).refcount === 0 && Eo.free(e);
          }
          function Io() {
            for (var e = 0, t = Eo.reserved; t < Eo.allocated.length; ++t)
              Eo.allocated[t] !== void 0 && ++e;
            return e;
          }
          function To() {
            (Eo.allocated.push(
              { value: void 0 },
              { value: null },
              { value: !0 },
              { value: !1 },
            ),
              (Eo.reserved = Eo.allocated.length),
              (y.count_emval_handles = Io));
          }
          var Do = {
            toValue: function (t) {
              return (
                t || ur("Cannot use deleted val. handle = " + t),
                Eo.get(t).value
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
                  return Eo.allocate({ refcount: 1, value: t });
              }
            },
          };
          function xo(e, t) {
            ((t = or(t)),
              _r(e, {
                name: t,
                fromWireType: function (t) {
                  var e = Do.toValue(t);
                  return (ko(t), e);
                },
                toWireType: function (t, n) {
                  return Do.toHandle(n);
                },
                argPackAdvance: 8,
                readValueFromPointer: oo,
                destructorFunction: null,
              }));
          }
          function $o(e, t) {
            switch (t) {
              case 2:
                return function (e) {
                  return this.fromWireType(g()[e >> 2]);
                };
              case 3:
                return function (e) {
                  return this.fromWireType(h()[e >> 3]);
                };
              default:
                throw new TypeError("Unknown float type: " + e);
            }
          }
          function Po(e, t, n) {
            var r = hr(n);
            ((t = or(t)),
              _r(e, {
                name: t,
                fromWireType: function (t) {
                  return t;
                },
                toWireType: function (t, n) {
                  if (typeof n != "number" && typeof n != "boolean")
                    throw new TypeError(
                      "Cannot convert " + tr(n) + " to " + this.name,
                    );
                  return n;
                },
                argPackAdvance: 8,
                readValueFromPointer: $o(t, r),
                destructorFunction: null,
                jsType: "number",
              }));
          }
          function No(e, t, n, r, o, a, i) {
            var l = yo(t, n);
            ((e = or(e)),
              (o = mo(r, o)),
              Jr(
                e,
                function () {
                  go("Cannot call " + e + " due to unbound types", l);
                },
                t - 1,
              ),
              mr([], l, function (n) {
                var r = [n[0], null].concat(n.slice(1));
                return (
                  co(e, bo(e, r, null, o, a, i), t - 1),
                  y.__WA_INVOKER_FUNCS == null &&
                    (y.__WA_INVOKER_FUNCS = new Map()),
                  y.__WA_INVOKER_FUNCS.set(e, {
                    argTypes: n.slice(1),
                    returnType: n[0],
                  }),
                  []
                );
              }));
          }
          function Mo(e, t, n, r, o) {
            ((t = or(t)), o === -1 && (o = 4294967295));
            var a = hr(n),
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
                  throw new TypeError('Cannot convert "' + tr(n) + '" to ' + a);
                if (n < r || n > o)
                  throw new TypeError(
                    'Passing a number "' +
                      tr(n) +
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
              _r(e, {
                name: t,
                fromWireType: i,
                toWireType: c,
                argPackAdvance: 8,
                readValueFromPointer: fr(t, a, r !== 0),
                destructorFunction: null,
                jsType: "number",
              }));
          }
          function wo(e, t, n) {
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
              var t = f(),
                n = t[e],
                r = t[e + 1];
              return new o(t.buffer, r, n);
            }
            ((n = or(n)),
              _r(
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
          function Ao(e, t) {
            t = or(t);
            var n = t === "std::string";
            _r(e, {
              name: t,
              fromWireType: function (t) {
                var e = f()[t >> 2],
                  r = t + 4,
                  o;
                if (n)
                  for (var a = r, i = 0; i <= e; ++i) {
                    var l = r + i;
                    if (i == e || d()[l] == 0) {
                      var s = l - a,
                        u = Yt(a, s);
                      (o === void 0 ? (o = u) : ((o += "\0"), (o += u)),
                        (a = l + 1));
                    }
                  }
                else {
                  for (var c = new Array(e), i = 0; i < e; ++i)
                    c[i] = String.fromCharCode(d()[r + i]);
                  o = c.join("");
                }
                return (Ni(t), o);
              },
              toWireType: function (t, r) {
                r instanceof ArrayBuffer && (r = new Uint8Array(r));
                var e,
                  o = typeof r == "string";
                (o ||
                  r instanceof Uint8Array ||
                  r instanceof Uint8ClampedArray ||
                  r instanceof Int8Array ||
                  ur("Cannot pass non-string to std::string"),
                  n && o ? (e = $t(r)) : (e = r.length));
                var a = Pi(4 + e + 1),
                  i = a + 4;
                if (((f()[a >> 2] = e), n && o)) zn(r, i, e + 1);
                else if (o)
                  for (var l = 0; l < e; ++l) {
                    var s = r.charCodeAt(l);
                    (s > 255 &&
                      (Ni(i),
                      ur(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      )),
                      (d()[i + l] = s));
                  }
                else for (var l = 0; l < e; ++l) d()[i + l] = r[l];
                return (t !== null && t.push(Ni, a), a);
              },
              argPackAdvance: 8,
              readValueFromPointer: oo,
              destructorFunction: function (t) {
                Ni(t);
              },
              jsType: "string",
            });
          }
          var Fo =
              typeof TextDecoder != "undefined"
                ? new TextDecoder("utf-16le")
                : void 0,
            Oo = function (t, n) {
              G(
                t % 2 == 0,
                "Pointer passed to UTF16ToString must be aligned to two bytes!",
              );
              for (var e = t, r = e >> 1, o = r + n / 2; !(r >= o) && p()[r]; )
                ++r;
              if (((e = r << 1), e - t > 32 && Fo))
                return Fo.decode(d().slice(t, e));
              for (var a = "", i = 0; !(i >= n / 2); ++i) {
                var l = m()[(t + i * 2) >> 1];
                if (l == 0) break;
                a += String.fromCharCode(l);
              }
              return a;
            },
            Bo = function (t, n, r) {
              if (
                (G(
                  n % 2 == 0,
                  "Pointer passed to stringToUTF16 must be aligned to two bytes!",
                ),
                G(
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
                ((m()[n >> 1] = i), (n += 2));
              }
              return ((m()[n >> 1] = 0), n - e);
            },
            Wo = function (t) {
              return t.length * 2;
            },
            qo = function (t, n) {
              G(
                t % 4 == 0,
                "Pointer passed to UTF32ToString must be aligned to four bytes!",
              );
              for (var e = 0, r = ""; !(e >= n / 4); ) {
                var o = _()[(t + e * 4) >> 2];
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
            Uo = function (t, n, r) {
              if (
                (G(
                  n % 4 == 0,
                  "Pointer passed to stringToUTF32 must be aligned to four bytes!",
                ),
                G(
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
                if (((_()[n >> 2] = i), (n += 4), n + 4 > o)) break;
              }
              return ((_()[n >> 2] = 0), n - e);
            },
            Vo = function (t) {
              for (var e = 0, n = 0; n < t.length; ++n) {
                var r = t.charCodeAt(n);
                (r >= 55296 && r <= 57343 && ++n, (e += 4));
              }
              return e;
            },
            Ho = function (t, n, r) {
              r = or(r);
              var e, o, a, i, l;
              (n === 2
                ? ((e = Oo),
                  (o = Bo),
                  (i = Wo),
                  (a = function () {
                    return p();
                  }),
                  (l = 1))
                : n === 4 &&
                  ((e = qo),
                  (o = Uo),
                  (i = Vo),
                  (a = function () {
                    return f();
                  }),
                  (l = 2)),
                _r(t, {
                  name: r,
                  fromWireType: function (r) {
                    for (
                      var t = f()[r >> 2], o = a(), i, s = r + 4, u = 0;
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
                    return (Ni(r), i);
                  },
                  toWireType: function (t, a) {
                    typeof a != "string" &&
                      ur("Cannot pass non-string to C++ string type " + r);
                    var e = i(a),
                      s = Pi(4 + e + n);
                    return (
                      (f()[s >> 2] = e >> l),
                      o(a, s + 4, e + n),
                      t !== null && t.push(Ni, s),
                      s
                    );
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: oo,
                  destructorFunction: function (t) {
                    Ni(t);
                  },
                }));
            };
          function Go(e, t) {
            ((t = or(t)),
              _r(e, {
                isVoid: !0,
                name: t,
                argPackAdvance: 0,
                fromWireType: function () {},
                toWireType: function (t, n) {},
                jsType: "void",
              }));
          }
          var zo = !0,
            jo = function () {
              return zo;
            },
            Ko = function () {
              if (!me())
                try {
                  D ? ol(H) : tn(H);
                } catch (e) {
                  rn(e);
                }
            },
            Qo = function (t) {
              if (V) {
                F(
                  "user callback triggered after runtime exited or application aborted.  Ignoring.",
                );
                return;
              }
              try {
                (t(), Ko());
              } catch (e) {
                rn(e);
              }
            };
          function Xo(e) {
            if (typeof Atomics.waitAsync == "function") {
              var t = Atomics.waitAsync(_(), e >> 2, e);
              (G(t.async), t.value.then(Yo));
              var n = e + 128;
              Atomics.store(_(), n >> 2, 1);
            }
          }
          y.__emscripten_thread_mailbox_await = Xo;
          var Yo = function () {
            var e = Fi();
            e &&
              (Xo(e),
              Qo(function () {
                return al();
              }));
          };
          y.checkMailbox = Yo;
          var Jo = function (t, n, r) {
            if (t == n)
              setTimeout(function () {
                return Yo();
              });
            else if (D)
              postMessage({
                targetThread: t,
                cmd: "checkMailbox",
                type: "cmd",
              });
            else {
              var e = on.pthreads[t];
              if (!e) {
                F(
                  "Cannot send message to thread with ID " +
                    t +
                    ", unknown thread ID!",
                );
                return;
              }
              e.postMessage({ cmd: "checkMailbox", type: "cmd" });
            }
          };
          function Zo(e, t, n) {
            return (
              F(
                "emscripten_set_offscreencanvas_size: Build with -sOFFSCREENCANVAS_SUPPORT=1 to enable transferring canvases to pthreads.",
              ),
              -1
            );
          }
          function ea(e) {}
          var ta = function () {
            throw new Pe();
          };
          function na(e) {
            e > 4 && (Eo.get(e).refcount += 1);
          }
          function ra(e, t) {
            var n = ir[e];
            return (n === void 0 && ur(t + " has unknown type " + fo(e)), n);
          }
          function oa(e, t) {
            e = ra(e, "_emval_take_value");
            var n = e.readValueFromPointer(t);
            return Do.toHandle(n);
          }
          function aa(e, t) {
            ((e = Hn(e)), (t = Hn(t)));
            var n = new Date(e * 1e3);
            ((_()[t >> 2] = n.getUTCSeconds()),
              (_()[(t + 4) >> 2] = n.getUTCMinutes()),
              (_()[(t + 8) >> 2] = n.getUTCHours()),
              (_()[(t + 12) >> 2] = n.getUTCDate()),
              (_()[(t + 16) >> 2] = n.getUTCMonth()),
              (_()[(t + 20) >> 2] = n.getUTCFullYear() - 1900),
              (_()[(t + 24) >> 2] = n.getUTCDay()));
            var r = Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
              o = ((n.getTime() - r) / (1e3 * 60 * 60 * 24)) | 0;
            _()[(t + 28) >> 2] = o;
          }
          var ia = function (t) {
              return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
            },
            la = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
            sa = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            ua = function (t) {
              var e = ia(t.getFullYear()),
                n = e ? la : sa,
                r = n[t.getMonth()] + t.getDate() - 1;
              return r;
            };
          function ca(e, t) {
            ((e = Hn(e)), (t = Hn(t)));
            var n = new Date(e * 1e3);
            ((_()[t >> 2] = n.getSeconds()),
              (_()[(t + 4) >> 2] = n.getMinutes()),
              (_()[(t + 8) >> 2] = n.getHours()),
              (_()[(t + 12) >> 2] = n.getDate()),
              (_()[(t + 16) >> 2] = n.getMonth()),
              (_()[(t + 20) >> 2] = n.getFullYear() - 1900),
              (_()[(t + 24) >> 2] = n.getDay()));
            var r = ua(n) | 0;
            ((_()[(t + 28) >> 2] = r),
              (_()[(t + 36) >> 2] = -(n.getTimezoneOffset() * 60)));
            var o = new Date(n.getFullYear(), 0, 1),
              a = new Date(n.getFullYear(), 6, 1).getTimezoneOffset(),
              i = o.getTimezoneOffset(),
              l = (a != i && n.getTimezoneOffset() == Math.min(i, a)) | 0;
            _()[(t + 32) >> 2] = l;
          }
          var da = function (t) {
            t = Hn(t);
            var e = (function () {
              var e = new Date(
                  _()[(t + 20) >> 2] + 1900,
                  _()[(t + 16) >> 2],
                  _()[(t + 12) >> 2],
                  _()[(t + 8) >> 2],
                  _()[(t + 4) >> 2],
                  _()[t >> 2],
                  0,
                ),
                n = _()[(t + 32) >> 2],
                r = e.getTimezoneOffset(),
                o = new Date(e.getFullYear(), 0, 1),
                a = new Date(e.getFullYear(), 6, 1).getTimezoneOffset(),
                i = o.getTimezoneOffset(),
                l = Math.min(i, a);
              if (n < 0) _()[(t + 32) >> 2] = +(a != i && l == r);
              else if (n > 0 != (l == r)) {
                var s = Math.max(i, a),
                  u = n > 0 ? l : s;
                e.setTime(e.getTime() + (u - r) * 6e4);
              }
              _()[(t + 24) >> 2] = e.getDay();
              var c = ua(e) | 0;
              return (
                (_()[(t + 28) >> 2] = c),
                (_()[t >> 2] = e.getSeconds()),
                (_()[(t + 4) >> 2] = e.getMinutes()),
                (_()[(t + 8) >> 2] = e.getHours()),
                (_()[(t + 12) >> 2] = e.getDate()),
                (_()[(t + 16) >> 2] = e.getMonth()),
                (_()[(t + 20) >> 2] = e.getYear()),
                e.getTime() / 1e3
              );
            })();
            return BigInt(e);
          };
          function ma(e, t, n, r, o, a, i) {
            if (D) return Oa(16, 1, e, t, n, r, o, a, i);
            ((e = Hn(e)), (o = Hn(o)), (a = Hn(a)), (i = Hn(i)));
            try {
              if (isNaN(o)) return 61;
              var l = Jt.getStreamFromFD(r),
                s = Xt.mmap(l, e, o, t, n),
                u = s.ptr;
              return ((_()[a >> 2] = s.allocated), (f()[i >> 2] = u), 0);
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function pa(e, t, n, r, o, a) {
            if (D) return Oa(17, 1, e, t, n, r, o, a);
            ((e = Hn(e)), (t = Hn(t)), (a = Hn(a)));
            try {
              return isNaN(a)
                ? 61
                : (Jt.doMsync(e, Jt.getStreamFromFD(o), t, r, a), 0);
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function _a(e, t, n, r, o, a) {
            if (D) return Oa(18, 1, e, t, n, r, o, a);
            ((e = Hn(e)), (t = Hn(t)), (a = Hn(a)));
            try {
              if (isNaN(a)) return 61;
              var i = Jt.getStreamFromFD(o);
              (n & 2 && Jt.doMsync(e, i, t, r, a), Xt.munmap(i));
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var fa = function (t) {
              var e = $t(t) + 1,
                n = Pi(e);
              return (n && zn(t, n, e), n);
            },
            ga = function (t, n, r) {
              var e = new Date().getFullYear(),
                o = new Date(e, 0, 1),
                a = new Date(e, 6, 1),
                i = o.getTimezoneOffset(),
                l = a.getTimezoneOffset(),
                s = Math.max(i, l);
              ((f()[t >> 2] = s * 60), (_()[n >> 2] = +(i != l)));
              function u(e) {
                var t = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                return t ? t[1] : "GMT";
              }
              var c = u(o),
                d = u(a),
                m = fa(c),
                p = fa(d);
              l < i
                ? ((f()[r >> 2] = m), (f()[(r + 4) >> 2] = p))
                : ((f()[r >> 2] = p), (f()[(r + 4) >> 2] = m));
            },
            ha = function () {
              ke("native code called abort()");
            },
            ya = [],
            Ca = function (t, n) {
              (G(Array.isArray(ya)), G(n % 16 == 0), (ya.length = 0));
              var e;
              for (n >>= 2; (e = d()[t++]); ) {
                var r = String.fromCharCode(e),
                  o = ["d", "f", "i"];
                (o.push("j"),
                  G(
                    o.includes(r),
                    "Invalid character " +
                      e +
                      '("' +
                      r +
                      '") in readEmAsmArgs! Use only [' +
                      o +
                      '], and do not specify "v" for void return argument.',
                  ),
                  (n += (e != 105) & n),
                  ya.push(e == 105 ? _()[n] : (e == 106 ? Z : h())[n++ >> 1]),
                  ++n);
              }
              return ya;
            },
            ba = function (t, n, r) {
              var e = Ca(n, r);
              return (
                Object.prototype.hasOwnProperty.call(je, t) ||
                  ke("No EM_ASM constant found at address " + t),
                je[t].apply(null, e)
              );
            },
            va = function (t, n, r) {
              return ba(t, n, r);
            },
            Sa = function (t, n, r) {
              return ba(t, n, r);
            },
            Ra = function () {
              de += 1;
            },
            La = function () {
              (G(de > 0), (de -= 1));
            },
            Ea = function (t, n) {
              return (
                Ra(),
                setTimeout(function () {
                  (La(), Qo(t));
                }, n)
              );
            };
          function ka(e, t) {
            if (
              ((Da.mainLoop.timingMode = e),
              (Da.mainLoop.timingValue = t),
              !Da.mainLoop.func)
            )
              return (
                F(
                  "emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.",
                ),
                1
              );
            if (
              (Da.mainLoop.running || (Ra(), (Da.mainLoop.running = !0)),
              e == 0)
            )
              ((Da.mainLoop.scheduler = function () {
                var e = Math.max(0, Da.mainLoop.tickStartTime + t - Ia()) | 0;
                setTimeout(Da.mainLoop.runner, e);
              }),
                (Da.mainLoop.method = "timeout"));
            else if (e == 1)
              ((Da.mainLoop.scheduler = function () {
                Da.requestAnimationFrame(Da.mainLoop.runner);
              }),
                (Da.mainLoop.method = "rAF"));
            else if (e == 2) {
              if (typeof setImmediate == "undefined") {
                var n = [],
                  r = "setimmediate",
                  o = function (t) {
                    (t.data === r || t.data.target === r) &&
                      (t.stopPropagation(), n.shift()());
                  };
                (addEventListener("message", o, !0),
                  (setImmediate = function (t) {
                    (n.push(t),
                      k
                        ? (y.setImmediates === void 0 && (y.setImmediates = []),
                          y.setImmediates.push(t),
                          postMessage({ target: r, type: "cmd" }))
                        : postMessage(
                            babelHelpers.extends({}, r, { type: "cmd" }),
                            "*",
                          ));
                  }));
              }
              ((Da.mainLoop.scheduler = function () {
                setImmediate(Da.mainLoop.runner);
              }),
                (Da.mainLoop.method = "immediate"));
            }
            return 0;
          }
          var Ia;
          Ia = function () {
            return performance.timeOrigin + performance.now();
          };
          function Ta(e, t, n, r, o) {
            (G(
              !Da.mainLoop.func,
              "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.",
            ),
              (Da.mainLoop.func = e),
              (Da.mainLoop.arg = r));
            var a = Da.mainLoop.currentlyRunningMainloop;
            function i() {
              return a < Da.mainLoop.currentlyRunningMainloop ? (La(), !1) : !0;
            }
            if (
              ((Da.mainLoop.running = !1),
              (Da.mainLoop.runner = function () {
                if (!V) {
                  if (Da.mainLoop.queue.length > 0) {
                    var t = Date.now(),
                      n = Da.mainLoop.queue.shift();
                    if ((n.func(n.arg), Da.mainLoop.remainingBlockers)) {
                      var r = Da.mainLoop.remainingBlockers,
                        o = r % 1 == 0 ? r - 1 : Math.floor(r);
                      n.counted
                        ? (Da.mainLoop.remainingBlockers = o)
                        : ((o = o + 0.5),
                          (Da.mainLoop.remainingBlockers = (8 * r + o) / 9));
                    }
                    if (
                      (A(
                        'main loop blocker "' +
                          n.name +
                          '" took ' +
                          (Date.now() - t) +
                          " ms",
                      ),
                      Da.mainLoop.updateStatus(),
                      !i())
                    )
                      return;
                    setTimeout(Da.mainLoop.runner, 0);
                    return;
                  }
                  if (i()) {
                    if (
                      ((Da.mainLoop.currentFrameNumber =
                        (Da.mainLoop.currentFrameNumber + 1) | 0),
                      Da.mainLoop.timingMode == 1 &&
                        Da.mainLoop.timingValue > 1 &&
                        Da.mainLoop.currentFrameNumber %
                          Da.mainLoop.timingValue !=
                          0)
                    ) {
                      Da.mainLoop.scheduler();
                      return;
                    } else
                      Da.mainLoop.timingMode == 0 &&
                        (Da.mainLoop.tickStartTime = Ia());
                    (Da.mainLoop.method === "timeout" &&
                      y.ctx &&
                      (fn(
                        "Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!",
                      ),
                      (Da.mainLoop.method = "")),
                      Da.mainLoop.runIter(e),
                      ie(),
                      i() &&
                        (typeof SDL == "object" &&
                          SDL.audio &&
                          SDL.audio.queueNewAudioData &&
                          SDL.audio.queueNewAudioData(),
                        Da.mainLoop.scheduler()));
                  }
                }
              }),
              o ||
                (t && t > 0 ? ka(0, 1e3 / t) : ka(1, 1),
                Da.mainLoop.scheduler()),
              n)
            )
              throw "unwind";
          }
          var Da = {
            mainLoop: {
              running: !1,
              scheduler: null,
              method: "",
              currentlyRunningMainloop: 0,
              func: null,
              arg: 0,
              timingMode: 0,
              timingValue: 0,
              currentFrameNumber: 0,
              queue: [],
              pause: function () {
                ((Da.mainLoop.scheduler = null),
                  Da.mainLoop.currentlyRunningMainloop++);
              },
              resume: function () {
                Da.mainLoop.currentlyRunningMainloop++;
                var e = Da.mainLoop.timingMode,
                  t = Da.mainLoop.timingValue,
                  n = Da.mainLoop.func;
                ((Da.mainLoop.func = null),
                  Ta(n, 0, !1, Da.mainLoop.arg, !0),
                  ka(e, t),
                  Da.mainLoop.scheduler());
              },
              updateStatus: function () {
                if (y.setStatus) {
                  var e = y.statusMessage || "Please wait...",
                    t = Da.mainLoop.remainingBlockers,
                    n = Da.mainLoop.expectedBlockers;
                  t
                    ? t < n
                      ? y.setStatus(e + " (" + (n - t) + "/" + n + ")")
                      : y.setStatus(e)
                    : y.setStatus("");
                }
              },
              runIter: function (t) {
                if (!V) {
                  if (y.preMainLoop) {
                    var e = y.preMainLoop();
                    if (e === !1) return;
                  }
                  (Qo(t), y.postMainLoop && y.postMainLoop());
                }
              },
            },
            isFullscreen: !1,
            pointerLock: !1,
            moduleContextCreatedCallbacks: [],
            workers: [],
            init: function () {
              if (Da.initted) return;
              Da.initted = !0;
              var e = {};
              ((e.canHandle = function (t) {
                return !y.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(t);
              }),
                (e.handle = function (t, n, r, o) {
                  var e = new Blob([t], { type: Da.getMimetype(n) });
                  e.size !== t.length &&
                    (e = new Blob([new Uint8Array(t).buffer], {
                      type: Da.getMimetype(n),
                    }));
                  var a = URL.createObjectURL(e);
                  G(
                    typeof a == "string",
                    "createObjectURL must return a url as a string",
                  );
                  var i = new Image();
                  ((i.onload = function () {
                    G(i.complete, "Image " + n + " could not be decoded");
                    var e = document.createElement("canvas");
                    ((e.width = i.width), (e.height = i.height));
                    var o = e.getContext("2d");
                    (o.drawImage(i, 0, 0),
                      (Li[n] = e),
                      URL.revokeObjectURL(a),
                      r && r(t));
                  }),
                    (i.onerror = function (e) {
                      (A("Image " + a + " could not be decoded"), o && o());
                    }),
                    (i.src = a));
                }),
                Wt.push(e));
              var t = {};
              ((t.canHandle = function (t) {
                return (
                  !y.noAudioDecoding &&
                  t.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 }
                );
              }),
                (t.handle = function (t, n, r, o) {
                  var e = !1;
                  function a(o) {
                    e || ((e = !0), (Ei[n] = o), r && r(t));
                  }
                  var i = new Blob([t], { type: Da.getMimetype(n) }),
                    l = URL.createObjectURL(i);
                  G(
                    typeof l == "string",
                    "createObjectURL must return a url as a string",
                  );
                  var s = new Audio();
                  (s.addEventListener(
                    "canplaythrough",
                    function () {
                      return a(s);
                    },
                    !1,
                  ),
                    (s.onerror = function (o) {
                      if (e) return;
                      F(
                        "warning: browser could not fully decode audio " +
                          n +
                          ", trying slower base64 approach",
                      );
                      function r(e) {
                        for (
                          var t =
                              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                            n = "=",
                            r = "",
                            o = 0,
                            a = 0,
                            i = 0;
                          i < e.length;
                          i++
                        )
                          for (o = (o << 8) | e[i], a += 8; a >= 6; ) {
                            var l = (o >> (a - 6)) & 63;
                            ((a -= 6), (r += t[l]));
                          }
                        return (
                          a == 2
                            ? ((r += t[(o & 3) << 4]), (r += n + n))
                            : a == 4 && ((r += t[(o & 15) << 2]), (r += n)),
                          r
                        );
                      }
                      ((s.src =
                        "data:audio/x-" + n.substr(-3) + ";base64," + r(t)),
                        a(s));
                    }),
                    (s.src = l),
                    Ea(function () {
                      a(s);
                    }, 1e4));
                }),
                Wt.push(t));
              function n() {
                Da.pointerLock =
                  document.pointerLockElement === y.canvas ||
                  document.mozPointerLockElement === y.canvas ||
                  document.webkitPointerLockElement === y.canvas ||
                  document.msPointerLockElement === y.canvas;
              }
              var r = y.canvas;
              r &&
                ((r.requestPointerLock =
                  r.requestPointerLock ||
                  r.mozRequestPointerLock ||
                  r.webkitRequestPointerLock ||
                  r.msRequestPointerLock ||
                  function () {}),
                (r.exitPointerLock =
                  document.exitPointerLock ||
                  document.mozExitPointerLock ||
                  document.webkitExitPointerLock ||
                  document.msExitPointerLock ||
                  function () {}),
                (r.exitPointerLock = r.exitPointerLock.bind(document)),
                document.addEventListener("pointerlockchange", n, !1),
                document.addEventListener("mozpointerlockchange", n, !1),
                document.addEventListener("webkitpointerlockchange", n, !1),
                document.addEventListener("mspointerlockchange", n, !1),
                y.elementPointerLock &&
                  r.addEventListener(
                    "click",
                    function (e) {
                      !Da.pointerLock &&
                        y.canvas.requestPointerLock &&
                        (y.canvas.requestPointerLock(), e.preventDefault());
                    },
                    !1,
                  ));
            },
            createContext: function (t, n, r, o) {
              if (n && y.ctx && t == y.canvas) return y.ctx;
              var e, a;
              if (n) {
                var i = { antialias: !1, alpha: !1, majorVersion: 1 };
                if (o) for (var l in o) i[l] = o[l];
                typeof GL != "undefined" &&
                  ((a = GL.createContext(t, i)),
                  a && (e = GL.getContext(a).GLctx));
              } else e = t.getContext("2d");
              return e
                ? (r &&
                    (n ||
                      G(
                        typeof GLctx == "undefined",
                        "cannot set in module if GLctx is used, but we are a non-GL context that would replace it",
                      ),
                    (y.ctx = e),
                    n && GL.makeContextCurrent(a),
                    (y.useWebGL = n),
                    Da.moduleContextCreatedCallbacks.forEach(function (e) {
                      return e();
                    }),
                    Da.init()),
                  e)
                : null;
            },
            destroyContext: function (t, n, r) {},
            fullscreenHandlersInstalled: !1,
            lockPointer: void 0,
            resizeCanvas: void 0,
            requestFullscreen: function (t, n) {
              ((Da.lockPointer = t),
                (Da.resizeCanvas = n),
                typeof Da.lockPointer == "undefined" && (Da.lockPointer = !0),
                typeof Da.resizeCanvas == "undefined" &&
                  (Da.resizeCanvas = !1));
              var e = y.canvas;
              function r() {
                Da.isFullscreen = !1;
                var t = e.parentNode;
                ((document.fullscreenElement ||
                  document.mozFullScreenElement ||
                  document.msFullscreenElement ||
                  document.webkitFullscreenElement ||
                  document.webkitCurrentFullScreenElement) === t
                  ? ((e.exitFullscreen = Da.exitFullscreen),
                    Da.lockPointer && e.requestPointerLock(),
                    (Da.isFullscreen = !0),
                    Da.resizeCanvas
                      ? Da.setFullscreenCanvasSize()
                      : Da.updateCanvasDimensions(e))
                  : (t.parentNode.insertBefore(e, t),
                    t.parentNode.removeChild(t),
                    Da.resizeCanvas
                      ? Da.setWindowedCanvasSize()
                      : Da.updateCanvasDimensions(e)),
                  y.onFullScreen && y.onFullScreen(Da.isFullscreen),
                  y.onFullscreen && y.onFullscreen(Da.isFullscreen));
              }
              Da.fullscreenHandlersInstalled ||
                ((Da.fullscreenHandlersInstalled = !0),
                document.addEventListener("fullscreenchange", r, !1),
                document.addEventListener("mozfullscreenchange", r, !1),
                document.addEventListener("webkitfullscreenchange", r, !1),
                document.addEventListener("MSFullscreenChange", r, !1));
              var o = document.createElement("div");
              (e.parentNode.insertBefore(o, e),
                o.appendChild(e),
                (o.requestFullscreen =
                  o.requestFullscreen ||
                  o.mozRequestFullScreen ||
                  o.msRequestFullscreen ||
                  (o.webkitRequestFullscreen
                    ? function () {
                        return o.webkitRequestFullscreen(
                          Element.ALLOW_KEYBOARD_INPUT,
                        );
                      }
                    : null) ||
                  (o.webkitRequestFullScreen
                    ? function () {
                        return o.webkitRequestFullScreen(
                          Element.ALLOW_KEYBOARD_INPUT,
                        );
                      }
                    : null)),
                o.requestFullscreen());
            },
            requestFullScreen: function () {
              ke(
                "Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)",
              );
            },
            exitFullscreen: function () {
              if (!Da.isFullscreen) return !1;
              var e =
                document.exitFullscreen ||
                document.cancelFullScreen ||
                document.mozCancelFullScreen ||
                document.msExitFullscreen ||
                document.webkitCancelFullScreen ||
                function () {};
              return (e.apply(document, []), !0);
            },
            nextRAF: 0,
            fakeRequestAnimationFrame: function (t) {
              var e = Date.now();
              if (Da.nextRAF === 0) Da.nextRAF = e + 1e3 / 60;
              else for (; e + 2 >= Da.nextRAF; ) Da.nextRAF += 1e3 / 60;
              var n = Math.max(Da.nextRAF - e, 0);
              setTimeout(t, n);
            },
            requestAnimationFrame: (function (e) {
              function t(t) {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function (e) {
              if (typeof requestAnimationFrame == "function") {
                requestAnimationFrame(e);
                return;
              }
              var t = Da.fakeRequestAnimationFrame;
              t(e);
            }),
            safeSetTimeout: function (t, n) {
              return Ea(t, n);
            },
            safeRequestAnimationFrame: function (t) {
              return (
                Ra(),
                Da.requestAnimationFrame(function () {
                  (La(), Qo(t));
                })
              );
            },
            getMimetype: function (t) {
              return {
                jpg: "image/jpeg",
                jpeg: "image/jpeg",
                png: "image/png",
                bmp: "image/bmp",
                ogg: "audio/ogg",
                wav: "audio/wav",
                mp3: "audio/mpeg",
              }[t.substr(t.lastIndexOf(".") + 1)];
            },
            getUserMedia: function (t) {
              (window.getUserMedia ||
                (window.getUserMedia =
                  navigator.getUserMedia || navigator.mozGetUserMedia),
                window.getUserMedia(t));
            },
            getMovementX: function (t) {
              return t.movementX || t.mozMovementX || t.webkitMovementX || 0;
            },
            getMovementY: function (t) {
              return t.movementY || t.mozMovementY || t.webkitMovementY || 0;
            },
            getMouseWheelDelta: function (t) {
              var e = 0;
              switch (t.type) {
                case "DOMMouseScroll":
                  e = t.detail / 3;
                  break;
                case "mousewheel":
                  e = t.wheelDelta / 120;
                  break;
                case "wheel":
                  switch (((e = t.deltaY), t.deltaMode)) {
                    case 0:
                      e /= 100;
                      break;
                    case 1:
                      e /= 3;
                      break;
                    case 2:
                      e *= 80;
                      break;
                    default:
                      throw (
                        "unrecognized mouse wheel delta mode: " + t.deltaMode
                      );
                  }
                  break;
                default:
                  throw "unrecognized mouse wheel event: " + t.type;
              }
              return e;
            },
            mouseX: 0,
            mouseY: 0,
            mouseMovementX: 0,
            mouseMovementY: 0,
            touches: {},
            lastTouches: {},
            calculateMouseEvent: function (t) {
              if (Da.pointerLock)
                (t.type != "mousemove" && "mozMovementX" in t
                  ? (Da.mouseMovementX = Da.mouseMovementY = 0)
                  : ((Da.mouseMovementX = Da.getMovementX(t)),
                    (Da.mouseMovementY = Da.getMovementY(t))),
                  typeof SDL != "undefined"
                    ? ((Da.mouseX = SDL.mouseX + Da.mouseMovementX),
                      (Da.mouseY = SDL.mouseY + Da.mouseMovementY))
                    : ((Da.mouseX += Da.mouseMovementX),
                      (Da.mouseY += Da.mouseMovementY)));
              else {
                var e = y.canvas.getBoundingClientRect(),
                  n = y.canvas.width,
                  r = y.canvas.height,
                  o =
                    typeof window.scrollX != "undefined"
                      ? window.scrollX
                      : window.pageXOffset,
                  a =
                    typeof window.scrollY != "undefined"
                      ? window.scrollY
                      : window.pageYOffset;
                if (
                  (G(
                    typeof o != "undefined" && typeof a != "undefined",
                    "Unable to retrieve scroll position, mouse positions likely broken.",
                  ),
                  t.type === "touchstart" ||
                    t.type === "touchend" ||
                    t.type === "touchmove")
                ) {
                  var i = t.touch;
                  if (i === void 0) return;
                  var l = i.pageX - (o + e.left),
                    s = i.pageY - (a + e.top);
                  ((l = l * (n / e.width)), (s = s * (r / e.height)));
                  var u = { x: l, y: s };
                  if (t.type === "touchstart")
                    ((Da.lastTouches[i.identifier] = u),
                      (Da.touches[i.identifier] = u));
                  else if (t.type === "touchend" || t.type === "touchmove") {
                    var c = Da.touches[i.identifier];
                    (c || (c = u),
                      (Da.lastTouches[i.identifier] = c),
                      (Da.touches[i.identifier] = u));
                  }
                  return;
                }
                var d = t.pageX - (o + e.left),
                  m = t.pageY - (a + e.top);
                ((d = d * (n / e.width)),
                  (m = m * (r / e.height)),
                  (Da.mouseMovementX = d - Da.mouseX),
                  (Da.mouseMovementY = m - Da.mouseY),
                  (Da.mouseX = d),
                  (Da.mouseY = m));
              }
            },
            resizeListeners: [],
            updateResizeListeners: function () {
              var e = y.canvas;
              Da.resizeListeners.forEach(function (t) {
                return t(e.width, e.height);
              });
            },
            setCanvasSize: function (t, n, r) {
              var e = y.canvas;
              (Da.updateCanvasDimensions(e, t, n),
                r || Da.updateResizeListeners());
            },
            windowedWidth: 0,
            windowedHeight: 0,
            setFullscreenCanvasSize: function () {
              if (typeof SDL != "undefined") {
                var e = f()[SDL.screen >> 2];
                ((e = e | 8388608), (_()[SDL.screen >> 2] = e));
              }
              (Da.updateCanvasDimensions(y.canvas), Da.updateResizeListeners());
            },
            setWindowedCanvasSize: function () {
              if (typeof SDL != "undefined") {
                var e = f()[SDL.screen >> 2];
                ((e = e & -8388609), (_()[SDL.screen >> 2] = e));
              }
              (Da.updateCanvasDimensions(y.canvas), Da.updateResizeListeners());
            },
            updateCanvasDimensions: function (t, n, r) {
              n && r
                ? ((t.widthNative = n), (t.heightNative = r))
                : ((n = t.widthNative), (r = t.heightNative));
              var e = n,
                o = r;
              if (
                (y.forcedAspectRatio &&
                  y.forcedAspectRatio > 0 &&
                  (e / o < y.forcedAspectRatio
                    ? (e = Math.round(o * y.forcedAspectRatio))
                    : (o = Math.round(e / y.forcedAspectRatio))),
                (document.fullscreenElement ||
                  document.mozFullScreenElement ||
                  document.msFullscreenElement ||
                  document.webkitFullscreenElement ||
                  document.webkitCurrentFullScreenElement) === t.parentNode &&
                  typeof screen != "undefined")
              ) {
                var a = Math.min(screen.width / e, screen.height / o);
                ((e = Math.round(e * a)), (o = Math.round(o * a)));
              }
              Da.resizeCanvas
                ? (t.width != e && (t.width = e),
                  t.height != o && (t.height = o),
                  typeof t.style != "undefined" &&
                    (t.style.removeProperty("width"),
                    t.style.removeProperty("height")))
                : (t.width != n && (t.width = n),
                  t.height != r && (t.height = r),
                  typeof t.style != "undefined" &&
                    (e != n || o != r
                      ? (t.style.setProperty("width", e + "px", "important"),
                        t.style.setProperty("height", o + "px", "important"))
                      : (t.style.removeProperty("width"),
                        t.style.removeProperty("height"))));
            },
          };
          function xa(e, t, n) {
            function r() {
              mn(e)(t);
            }
            n >= 0 ? Ea(r, n) : Da.safeRequestAnimationFrame(r);
          }
          function $a() {
            k ||
              fn(
                "Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread",
              );
          }
          var Pa = function (t) {
            (G(typeof t == "number"), Yt(t));
          };
          function Na() {
            return Date.now();
          }
          var Ma = function () {
              throw (Ra(), "unwind");
            },
            wa = function () {
              return 2147483648;
            },
            Aa = function () {
              return wa();
            };
          function Fa() {
            return navigator.hardwareConcurrency;
          }
          function Oa(e, t) {
            var n = arguments.length - 2,
              r = arguments,
              o = 19;
            if (n > o)
              throw (
                "proxyToMainThread: Too many arguments " +
                n +
                " to proxied function idx=" +
                e +
                ", maximum supported is " +
                o
              );
            return un(function () {
              for (
                var o = n * 2, a = pl(o * 8), i = a >> 3, l = 0;
                l < n;
                l++
              ) {
                var s = r[2 + l];
                typeof s == "bigint"
                  ? ((Z[i + 2 * l] = BigInt(1)), (Z[i + 2 * l + 1] = s))
                  : ((Z[i + 2 * l] = BigInt(0)), (h()[i + 2 * l + 1] = s));
              }
              return Zi(e, o, a, t);
            });
          }
          var Ba = [];
          function Wa(e, t, n, r) {
            ((on.currentProxiedOperationCallerThread = t),
              (n /= 2),
              (Ba.length = n));
            for (var o = r >> 3, a = 0; a < n; a++)
              Z[o + 2 * a]
                ? (Ba[a] = Z[o + 2 * a + 1])
                : (Ba[a] = h()[o + 2 * a + 1]);
            var i = e < 0,
              l = i ? je[-e - 1] : ki[e];
            return (
              G(
                l.length == n,
                "Call args mismatch in emscripten_receive_on_main_thread_js",
              ),
              l.apply(null, Ba)
            );
          }
          var qa = function (t) {
              var e = W.buffer,
                n = (t - e.byteLength + 65535) >>> 16;
              try {
                return (W.grow(n), ne(), 1);
              } catch (n) {
                F(
                  "growMemory: Attempted to grow heap from " +
                    e.byteLength +
                    " bytes to " +
                    t +
                    " bytes, but got error: " +
                    n,
                );
              }
            },
            Ua = function (t) {
              var e = d().length;
              if (((t >>>= 0), t <= e)) return !1;
              var n = wa();
              if (t > n)
                return (
                  F(
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
                  l = qa(i);
                if (l) return !0;
              }
              return (
                F(
                  "Failed to grow the heap from " +
                    e +
                    " bytes to " +
                    i +
                    " bytes, not enough memory!",
                ),
                !1
              );
            },
            Va = La,
            Ha = Ra,
            Ga = {},
            za = function () {
              return R || "./this.program";
            },
            ja = function () {
              if (!ja.strings) {
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
                    _: za(),
                  };
                for (var n in Ga)
                  Ga[n] === void 0 ? delete t[n] : (t[n] = Ga[n]);
                var r = [];
                for (var n in t) r.push(n + "=" + t[n]);
                ja.strings = r;
              }
              return ja.strings;
            },
            Ka = function (t, n) {
              for (var e = 0; e < t.length; ++e)
                (G(t.charCodeAt(e) === (t.charCodeAt(e) & 255)),
                  (l()[n++ >> 0] = t.charCodeAt(e)));
              l()[n >> 0] = 0;
            };
          function Qa(e, t) {
            if (D) return Oa(19, 1, e, t);
            var n = 0;
            return (
              ja().forEach(function (r, o) {
                var a = t + n;
                ((f()[(e + o * 4) >> 2] = a), Ka(r, a), (n += r.length + 1));
              }),
              0
            );
          }
          function Xa(e, t) {
            if (D) return Oa(20, 1, e, t);
            var n = ja();
            f()[e >> 2] = n.length;
            var r = 0;
            return (
              n.forEach(function (e) {
                r += e.length + 1;
              }),
              (f()[t >> 2] = r),
              0
            );
          }
          function Ya(e) {
            if (D) return Oa(21, 1, e);
            try {
              var t = Jt.getStreamFromFD(e);
              return (Xt.close(t), 0);
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var Ja = function (t, n, r, o) {
            for (var e = 0, a = 0; a < r; a++) {
              var i = f()[n >> 2],
                s = f()[(n + 4) >> 2];
              n += 8;
              var u = Xt.read(t, l(), i, s, o);
              if (u < 0) return -1;
              if (((e += u), u < s)) break;
              typeof o != "undefined" && (o += u);
            }
            return e;
          };
          function Za(e, t, n, r, o) {
            if (D) return Oa(22, 1, e, t, n, r, o);
            ((t = Hn(t)), (n = Hn(n)), (r = Hn(r)), (o = Hn(o)));
            try {
              if (isNaN(r)) return 61;
              var a = Jt.getStreamFromFD(e),
                i = Ja(a, t, n, r);
              return ((f()[o >> 2] = i), 0);
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var ei = function (t, n, r, o) {
            for (var e = 0, a = 0; a < r; a++) {
              var i = f()[n >> 2],
                s = f()[(n + 4) >> 2];
              n += 8;
              var u = Xt.write(t, l(), i, s, o);
              if (u < 0) return -1;
              ((e += u), typeof o != "undefined" && (o += u));
            }
            return e;
          };
          function ti(e, t, n, r, o) {
            if (D) return Oa(23, 1, e, t, n, r, o);
            ((t = Hn(t)), (n = Hn(n)), (r = Hn(r)), (o = Hn(o)));
            try {
              if (isNaN(r)) return 61;
              var a = Jt.getStreamFromFD(e),
                i = ei(a, t, n, r);
              return ((f()[o >> 2] = i), 0);
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          function ni(e, t, n, r) {
            if (D) return Oa(24, 1, e, t, n, r);
            try {
              var o = Jt.getStreamFromFD(e),
                a = Ja(o, t, n);
              return ((f()[r >> 2] = a), 0);
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          function ri(e, t, n, r) {
            if (D) return Oa(25, 1, e, t, n, r);
            ((t = Hn(t)), (r = Hn(r)));
            try {
              if (isNaN(t)) return 61;
              var o = Jt.getStreamFromFD(e);
              return (
                Xt.llseek(o, t, n),
                (Z[r >> 3] = BigInt(o.position)),
                o.getdents && t === 0 && n === 0 && (o.getdents = null),
                0
              );
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          function oi(e) {
            if (D) return Oa(26, 1, e);
            try {
              var t = Jt.getStreamFromFD(e);
              return t.stream_ops && t.stream_ops.fsync
                ? t.stream_ops.fsync(t)
                : 0;
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          function ai(e, t, n, r) {
            if (D) return Oa(27, 1, e, t, n, r);
            try {
              var o = Jt.getStreamFromFD(e),
                a = ei(o, t, n);
              return ((f()[r >> 2] = a), 0);
            } catch (e) {
              if (typeof Xt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var ii = function (t, n) {
              return (kt(d().subarray(t, t + n)), 0);
            },
            li = function (t) {
              for (var e = t.split("."), n = 0; n < 4; n++) {
                var r = Number(e[n]);
                if (isNaN(r)) return null;
                e[n] = r;
              }
              return (e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24)) >>> 0;
            },
            si = function (t) {
              return parseInt(t);
            },
            ui = function (t) {
              var e,
                n,
                r,
                o,
                a =
                  /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
                i = [];
              if (!a.test(t)) return null;
              if (t === "::") return [0, 0, 0, 0, 0, 0, 0, 0];
              for (
                t.startsWith("::")
                  ? (t = t.replace("::", "Z:"))
                  : (t = t.replace("::", ":Z:")),
                  t.indexOf(".") > 0
                    ? ((t = t.replace(new RegExp("[.]", "g"), ":")),
                      (e = t.split(":")),
                      (e[e.length - 4] =
                        si(e[e.length - 4]) + si(e[e.length - 3]) * 256),
                      (e[e.length - 3] =
                        si(e[e.length - 2]) + si(e[e.length - 1]) * 256),
                      (e = e.slice(0, e.length - 2)))
                    : (e = t.split(":")),
                  r = 0,
                  o = 0,
                  n = 0;
                n < e.length;
                n++
              )
                if (typeof e[n] == "string")
                  if (e[n] === "Z") {
                    for (o = 0; o < 8 - e.length + 1; o++) i[n + o] = 0;
                    r = o - 1;
                  } else i[n + r] = Wi(parseInt(e[n], 16));
                else i[n + r] = e[n];
              return [
                (i[1] << 16) | i[0],
                (i[3] << 16) | i[2],
                (i[5] << 16) | i[4],
                (i[7] << 16) | i[6],
              ];
            },
            ci = {
              address_map: { id: 1, addrs: {}, names: {} },
              lookup_name: function (t) {
                var e = li(t);
                if (e !== null || ((e = ui(t)), e !== null)) return t;
                var n;
                if (ci.address_map.addrs[t]) n = ci.address_map.addrs[t];
                else {
                  var r = ci.address_map.id++;
                  (G(r < 65535, "exceeded max address mappings of 65535"),
                    (n = "172.29." + (r & 255) + "." + (r & 65280)),
                    (ci.address_map.names[n] = t),
                    (ci.address_map.addrs[t] = n));
                }
                return n;
              },
              lookup_addr: function (t) {
                return ci.address_map.names[t] ? ci.address_map.names[t] : null;
              },
            },
            di = function (t) {
              var e = Pi(20),
                n = fa(t);
              f()[e >> 2] = n;
              var r = Pi(4);
              ((f()[r >> 2] = 0), (f()[(e + 4) >> 2] = r));
              var o = 2;
              ((_()[(e + 8) >> 2] = o), (_()[(e + 12) >> 2] = 4));
              var a = Pi(12);
              return (
                (f()[a >> 2] = a + 8),
                (f()[(a + 4) >> 2] = 0),
                (_()[(a + 8) >> 2] = li(ci.lookup_name(t))),
                (f()[(e + 16) >> 2] = a),
                e
              );
            };
          function mi(e) {
            return D ? Oa(28, 1, e) : di(Yt(e));
          }
          function pi(e) {
            return e;
          }
          var _i = function (t, n) {
              for (var e = 0, r = 0; r <= n; e += t[r++]);
              return e;
            },
            fi = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            gi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            hi = function (t, n) {
              for (var e = new Date(t.getTime()); n > 0; ) {
                var r = ia(e.getFullYear()),
                  o = e.getMonth(),
                  a = (r ? fi : gi)[o];
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
            yi = function (t, n) {
              (G(
                t.length >= 0,
                "writeArrayToMemory array must have a length (should be an array or typed array)",
              ),
                l().set(t, n));
            },
            Ci = function (t, n, r, o) {
              var e = _()[(o + 40) >> 2],
                a = {
                  tm_sec: _()[o >> 2],
                  tm_min: _()[(o + 4) >> 2],
                  tm_hour: _()[(o + 8) >> 2],
                  tm_mday: _()[(o + 12) >> 2],
                  tm_mon: _()[(o + 16) >> 2],
                  tm_year: _()[(o + 20) >> 2],
                  tm_wday: _()[(o + 24) >> 2],
                  tm_yday: _()[(o + 28) >> 2],
                  tm_isdst: _()[(o + 32) >> 2],
                  tm_gmtoff: _()[(o + 36) >> 2],
                  tm_zone: e ? Yt(e) : "",
                },
                i = Yt(r),
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
              function f(e) {
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
              function g(e) {
                var t = hi(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                  n = new Date(t.getFullYear(), 0, 4),
                  r = new Date(t.getFullYear() + 1, 0, 4),
                  o = f(n),
                  a = f(r);
                return p(o, t) <= 0
                  ? p(a, t) <= 0
                    ? t.getFullYear() + 1
                    : t.getFullYear()
                  : t.getFullYear() - 1;
              }
              var h = {
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
                  return g(t).toString().substring(2);
                },
                "%G": function (t) {
                  return g(t);
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
                      _i(ia(t.tm_year + 1900) ? fi : gi, t.tm_mon - 1),
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
                      r != 4 && (r != 3 || !ia(t.tm_year)) && (e = 1);
                    }
                  } else {
                    e = 52;
                    var n = (t.tm_wday + 7 - t.tm_yday - 1) % 7;
                    (n == 4 || (n == 5 && ia((t.tm_year % 400) - 1))) && e++;
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
              for (var s in h)
                i.includes(s) && (i = i.replace(new RegExp(s, "g"), h[s](a)));
              i = i.replace(/\0\0/g, "%");
              var y = Nt(i, !1);
              return y.length > n ? 0 : (yi(y, t), y.length - 1);
            },
            bi = function (t, n, r, o, a) {
              return Ci(t, n, r, o);
            };
          on.init();
          var vi = function (t, n, r, o) {
              (t || (t = this),
                (this.parent = t),
                (this.mount = t.mount),
                (this.mounted = null),
                (this.id = Xt.nextInode++),
                (this.name = n),
                (this.mode = r),
                (this.node_ops = {}),
                (this.stream_ops = {}),
                (this.rdev = o));
            },
            Si = 365,
            Ri = 146;
          (Object.defineProperties(vi.prototype, {
            read: {
              get: function () {
                return (this.mode & Si) === Si;
              },
              set: function (t) {
                t ? (this.mode |= Si) : (this.mode &= ~Si);
              },
            },
            write: {
              get: function () {
                return (this.mode & Ri) === Ri;
              },
              set: function (t) {
                t ? (this.mode |= Ri) : (this.mode &= ~Ri);
              },
            },
            isFolder: {
              get: function () {
                return Xt.isDir(this.mode);
              },
            },
            isDevice: {
              get: function () {
                return Xt.isChrdev(this.mode);
              },
            },
          }),
            (Xt.FSNode = vi),
            (Xt.createPreloadedFile = Ut),
            Xt.staticInit(),
            (jt = {
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
            nr(),
            (sr = y.BindingError =
              (function (e) {
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
            (cr = y.InternalError =
              (function (e) {
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
            Gr(),
            Mr(),
            so(),
            (_o = y.UnboundTypeError = po(Error, "UnboundTypeError")),
            Ro(),
            To(),
            (y.requestFullscreen = function (t, n) {
              Da.requestFullscreen(t, n);
            }),
            (y.requestFullScreen = function () {
              Da.requestFullScreen();
            }),
            (y.requestAnimationFrame = function (t) {
              Da.requestAnimationFrame(t);
            }),
            (y.setCanvasSize = function (t, n, r) {
              Da.setCanvasSize(t, n, r);
            }),
            (y.pauseMainLoop = function () {
              Da.mainLoop.pause();
            }),
            (y.resumeMainLoop = function () {
              Da.mainLoop.resume();
            }),
            (y.getUserMedia = function () {
              Da.getUserMedia();
            }),
            (y.createContext = function (t, n, r, o) {
              return Da.createContext(t, n, r, o);
            }));
          var Li = {},
            Ei = {},
            ki = [
              null,
              Zt,
              sn,
              An,
              On,
              Wn,
              qn,
              Gn,
              jn,
              Kn,
              Qn,
              Xn,
              Yn,
              Jn,
              Zn,
              er,
              ma,
              pa,
              _a,
              Qa,
              Xa,
              Ya,
              Za,
              ti,
              ni,
              ri,
              oi,
              ai,
              mi,
            ];
          function Ii() {
            qe("fetchSettings");
          }
          var Ti = {
              __assert_fail: gn,
              __cxa_begin_catch: Cn,
              __cxa_current_primary_exception: bn,
              __cxa_end_catch: Sn,
              __cxa_find_matching_catch_2: kn,
              __cxa_find_matching_catch_3: In,
              __cxa_find_matching_catch_4: Tn,
              __cxa_get_exception_ptr: Dn,
              __cxa_rethrow: xn,
              __cxa_rethrow_primary_exception: $n,
              __cxa_throw: Pn,
              __cxa_uncaught_exceptions: Nn,
              __emscripten_init_main_thread_js: Mn,
              __emscripten_thread_cleanup: wn,
              __pthread_create_js: Fn,
              __resumeException: Ln,
              __syscall_chdir: On,
              __syscall_fcntl64: Wn,
              __syscall_fstat64: qn,
              __syscall_ftruncate64: Gn,
              __syscall_getdents64: jn,
              __syscall_ioctl: Kn,
              __syscall_lstat64: Qn,
              __syscall_mkdirat: Xn,
              __syscall_newfstatat: Yn,
              __syscall_openat: Jn,
              __syscall_stat64: Zn,
              __syscall_unlinkat: er,
              _embind_register_bigint: gr,
              _embind_register_bool: yr,
              _embind_register_class: ho,
              _embind_register_class_constructor: vo,
              _embind_register_class_function: So,
              _embind_register_emval: xo,
              _embind_register_float: Po,
              _embind_register_function: No,
              _embind_register_integer: Mo,
              _embind_register_memory_view: wo,
              _embind_register_std_string: Ao,
              _embind_register_std_wstring: Ho,
              _embind_register_void: Go,
              _emscripten_get_now_is_monotonic: jo,
              _emscripten_notify_mailbox_postmessage: Jo,
              _emscripten_set_offscreencanvas_size: Zo,
              _emscripten_thread_mailbox_await: Xo,
              _emscripten_thread_set_strongref: ea,
              _emscripten_throw_longjmp: ta,
              _emval_decref: ko,
              _emval_incref: na,
              _emval_take_value: oa,
              _gmtime_js: aa,
              _localtime_js: ca,
              _mktime_js: da,
              _mmap_js: ma,
              _msync_js: pa,
              _munmap_js: _a,
              _tzset_js: ga,
              abort: ha,
              call_init_capture_driver_js_sync: at,
              call_init_playback_driver_js_sync: st,
              call_sendto: ot,
              call_start_capture_js_sync: it,
              call_start_desktop_capture_js_sync: mt,
              call_start_playback_js_sync: ut,
              call_start_video_capture_js_sync: _t,
              call_stop_capture_js_sync: lt,
              call_stop_desktop_capture_js_sync: pt,
              call_stop_playback_js_sync: ct,
              call_stop_video_capture_js_sync: ft,
              emscripten_asm_const_double: va,
              emscripten_asm_const_int: Sa,
              emscripten_async_call: xa,
              emscripten_check_blocking_allowed: $a,
              emscripten_console_error: Pa,
              emscripten_date_now: Na,
              emscripten_exit_with_live_runtime: Ma,
              emscripten_get_heap_max: Aa,
              emscripten_get_now: Ia,
              emscripten_num_logical_cores: Fa,
              emscripten_receive_on_main_thread_js: Wa,
              emscripten_resize_heap: Ua,
              emscripten_runtime_keepalive_pop: Va,
              emscripten_runtime_keepalive_push: Ha,
              environ_get: Qa,
              environ_sizes_get: Xa,
              exit: tn,
              fd_close: Ya,
              fd_pread: Za,
              fd_pwrite: ti,
              fd_read: ni,
              fd_seek: ri,
              fd_sync: oi,
              fd_write: ai,
              get_bwe_ml_model_path_js: Je,
              get_ml_model_path_for_type_js: Ze,
              get_random_bytes_js: et,
              getentropy: ii,
              gethostbyname: mi,
              invoke_d: Gu,
              invoke_diii: Xu,
              invoke_fi: Xs,
              invoke_fii: _s,
              invoke_fiii: Qu,
              invoke_fiiiiii: xu,
              invoke_i: vl,
              invoke_id: uu,
              invoke_ii: Rl,
              invoke_iid: Uu,
              invoke_iidi: zu,
              invoke_iidii: _u,
              invoke_iidjjjidjjjdjjji: os,
              invoke_iidjjjii: ms,
              invoke_iidjjjiii: is,
              invoke_iiffiii: gs,
              invoke_iiffiiiii: fs,
              invoke_iifi: Eu,
              invoke_iifii: iu,
              invoke_iifiii: su,
              invoke_iii: Ll,
              invoke_iiid: lu,
              invoke_iiifi: cu,
              invoke_iiii: kl,
              invoke_iiiidd: Ou,
              invoke_iiiifiii: vs,
              invoke_iiiifiiiiii: Es,
              invoke_iiiii: xl,
              invoke_iiiiid: ju,
              invoke_iiiiii: Al,
              invoke_iiiiiii: Il,
              invoke_iiiiiiiddiiid: Wu,
              invoke_iiiiiiii: Ml,
              invoke_iiiiiiiidi: qu,
              invoke_iiiiiiiifii: au,
              invoke_iiiiiiiii: $l,
              invoke_iiiiiiiiii: Nl,
              invoke_iiiiiiiiiiffiii: hs,
              invoke_iiiiiiiiiii: jl,
              invoke_iiiiiiiiiiii: Rs,
              invoke_iiiiiiiiiiiiffiii: bs,
              invoke_iiiiiiiiiiiii: ks,
              invoke_iiiiiiiiiiiiii: ql,
              invoke_iiiiiiiiiiiiiiffiiiii: Ss,
              invoke_iiiiiiiiiiiiiii: xs,
              invoke_iiiiiiiiiiiiiiiffiiiii: ys,
              invoke_iiiiiiiiiiiiiiii: Qs,
              invoke_iiiiiiiiiiiiiiiiiffiiiii: Cs,
              invoke_iiiiiiiiiiiiiiiiii: Ul,
              invoke_iiiiiiiiiiji: Yl,
              invoke_iiiiiiiiij: Hs,
              invoke_iiiiiiiij: qs,
              invoke_iiiiiiij: Fs,
              invoke_iiiiiiijjii: Ys,
              invoke_iiiiiij: Us,
              invoke_iiiiiijiiii: Gs,
              invoke_iiiiiijjijiiiiiiiiii: Zs,
              invoke_iiiiij: $u,
              invoke_iiiiiji: Bs,
              invoke_iiiiijjii: cs,
              invoke_iiiiijjiii: ds,
              invoke_iiiiijjjii: ss,
              invoke_iiiiijjjiii: us,
              invoke_iiiij: Ds,
              invoke_iiiijiii: pu,
              invoke_iiiijiiji: ns,
              invoke_iiiijjii: ps,
              invoke_iiiijjiii: ls,
              invoke_iiij: Os,
              invoke_iiijddddddd: Ru,
              invoke_iiiji: Xl,
              invoke_iiijii: Kl,
              invoke_iiijiiji: ts,
              invoke_iiijji: es,
              invoke_iiijjiiii: yu,
              invoke_iij: Ts,
              invoke_iiji: zs,
              invoke_iijii: Vs,
              invoke_iijiii: Tu,
              invoke_iijijijiji: Bu,
              invoke_iijj: bu,
              invoke_iijjjiiii: gu,
              invoke_iijjjj: ku,
              invoke_iijjjji: Su,
              invoke_ij: Nu,
              invoke_iji: Fu,
              invoke_j: Vl,
              invoke_ji: zl,
              invoke_jii: As,
              invoke_jiii: Pl,
              invoke_jiiii: Ku,
              invoke_jiiiii: Ks,
              invoke_jiiiiiiii: Ws,
              invoke_jiiiiiji: js,
              invoke_jiij: vu,
              invoke_jij: eu,
              invoke_jj: Pu,
              invoke_v: El,
              invoke_vd: Hu,
              invoke_vi: Tl,
              invoke_vid: nu,
              invoke_viddjjii: hu,
              invoke_vif: $s,
              invoke_viff: Ms,
              invoke_vii: Sl,
              invoke_viid: fu,
              invoke_viif: ws,
              invoke_viii: bl,
              invoke_viiii: Dl,
              invoke_viiiii: wl,
              invoke_viiiiii: Wl,
              invoke_viiiiiidiii: Zl,
              invoke_viiiiiii: Bl,
              invoke_viiiiiiiddiii: Ql,
              invoke_viiiiiiii: Ol,
              invoke_viiiiiiiii: Fl,
              invoke_viiiiiiiiii: Jl,
              invoke_viiiiiiiiiiii: Ps,
              invoke_viiiiiiiiiiiii: wu,
              invoke_viiiiiiiiiiiiiii: Yu,
              invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiii: Lu,
              invoke_viiiiiiij: Mu,
              invoke_viiiiij: du,
              invoke_viiiiiji: Vu,
              invoke_viiiij: mu,
              invoke_viiiijiiii: Ls,
              invoke_viiij: Du,
              invoke_viiiji: rs,
              invoke_viij: Ns,
              invoke_viiji: ru,
              invoke_viijii: ou,
              invoke_viijiiii: Js,
              invoke_viijj: Au,
              invoke_viijjdiii: as,
              invoke_vij: Is,
              invoke_viji: Iu,
              invoke_vijiiiii: Hl,
              invoke_vijj: tu,
              invoke_vijji: Cu,
              invoke_vjiiiiii: Gl,
              is_participant_known_contact_js: tt,
              llvm_eh_typeid_for: pi,
              loggingCallback_js_sync: gt,
              memory: W || y.wasmMemory,
              on_call_event_js_sync: Ke,
              patch_abort_for_ml_inference: Xe,
              query_browser_audio_processing_status_js_sync: dt,
              renderVideoFrame_js: nt,
              sendSignalingXMPP_js_sync: rt,
              set_ml_inference_flag: Qe,
              strftime_l: bi,
              write_persistent_directory_path_js: Ye,
            },
            Di = Be(),
            xi = xe("__wasm_call_ctors"),
            $i = xe("__cxa_free_exception"),
            Pi = (y._malloc = xe("malloc")),
            Ni = (y._free = xe("free")),
            Mi = (y._wasm_throw_ml_abort = xe("wasm_throw_ml_abort")),
            wi = (y._fflush = xe("fflush")),
            Ai = xe("__errno_location"),
            Fi = (y._pthread_self = function () {
              return (Fi = y._pthread_self = q.pthread_self)();
            }),
            Oi = xe("ntohs"),
            Bi = xe("htonl"),
            Wi = xe("htons"),
            qi =
              (y.__ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj =
                xe(
                  "_ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj",
                )),
            Ui =
              (y.__ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj =
                xe(
                  "_ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj",
                )),
            Vi = xe("__cxa_increment_exception_refcount"),
            Hi = xe("__cxa_decrement_exception_refcount"),
            Gi = (y.__emscripten_tls_init = xe("_emscripten_tls_init")),
            zi = xe("emscripten_builtin_memalign"),
            ji = xe("__getTypeName"),
            Ki = (y.__embind_initialize_bindings = xe(
              "_embind_initialize_bindings",
            )),
            Qi = (y.__emscripten_thread_init = xe("_emscripten_thread_init")),
            Xi = (y.__emscripten_thread_crashed = xe(
              "_emscripten_thread_crashed",
            )),
            Yi = xe("emscripten_main_thread_process_queued_calls"),
            Ji = xe("emscripten_main_runtime_thread_id"),
            Zi = xe("_emscripten_run_in_main_runtime_thread_js"),
            el = xe("emscripten_dispatch_to_thread_"),
            tl = function () {
              return (tl = q.emscripten_stack_get_base)();
            },
            nl = function () {
              return (nl = q.emscripten_stack_get_end)();
            },
            rl = xe("_emscripten_thread_free_data"),
            ol = (y.__emscripten_thread_exit = xe("_emscripten_thread_exit")),
            al = (y.__emscripten_check_mailbox = xe(
              "_emscripten_check_mailbox",
            )),
            il = xe("setThrew"),
            ll = xe("setTempRet0"),
            sl = function () {
              return (sl = q.emscripten_stack_init)();
            },
            ul = function (t, n) {
              return (ul = q.emscripten_stack_set_limits)(t, n);
            },
            cl = function () {
              return (cl = q.emscripten_stack_get_free)();
            },
            dl = xe("stackSave"),
            ml = xe("stackRestore"),
            pl = xe("stackAlloc"),
            _l = function () {
              return (_l = q.emscripten_stack_get_current)();
            },
            fl = (y.___get_exception_message = xe("__get_exception_message")),
            gl = xe("__cxa_can_catch"),
            hl = xe("__cxa_is_pointer_type"),
            yl = (y.___start_em_js = 1343452),
            Cl = (y.___stop_em_js = 1349439);
          function bl(e, t, n, r) {
            var o = dl();
            try {
              mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function vl(e) {
            var t = dl();
            try {
              return mn(e)();
            } catch (e) {
              if ((ml(t), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Sl(e, t, n) {
            var r = dl();
            try {
              mn(e)(t, n);
            } catch (e) {
              if ((ml(r), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Rl(e, t) {
            var n = dl();
            try {
              return mn(e)(t);
            } catch (e) {
              if ((ml(n), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ll(e, t, n) {
            var r = dl();
            try {
              return mn(e)(t, n);
            } catch (e) {
              if ((ml(r), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function El(e) {
            var t = dl();
            try {
              mn(e)();
            } catch (e) {
              if ((ml(t), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function kl(e, t, n, r) {
            var o = dl();
            try {
              return mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Il(e, t, n, r, o, a, i) {
            var l = dl();
            try {
              return mn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((ml(l), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Tl(e, t) {
            var n = dl();
            try {
              mn(e)(t);
            } catch (e) {
              if ((ml(n), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Dl(e, t, n, r, o) {
            var a = dl();
            try {
              mn(e)(t, n, r, o);
            } catch (e) {
              if ((ml(a), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function xl(e, t, n, r, o) {
            var a = dl();
            try {
              return mn(e)(t, n, r, o);
            } catch (e) {
              if ((ml(a), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function $l(e, t, n, r, o, a, i, l, s) {
            var u = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ml(u), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Pl(e, t, n, r) {
            var o = dl();
            try {
              return mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              return (il(1, 0), BigInt(0));
            }
          }
          function Nl(e, t, n, r, o, a, i, l, s, u) {
            var c = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((ml(c), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ml(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function wl(e, t, n, r, o, a) {
            var i = dl();
            try {
              mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Al(e, t, n, r, o, a) {
            var i = dl();
            try {
              return mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Fl(e, t, n, r, o, a, i, l, s, u) {
            var c = dl();
            try {
              mn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((ml(c), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ol(e, t, n, r, o, a, i, l, s) {
            var u = dl();
            try {
              mn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ml(u), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Bl(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Wl(e, t, n, r, o, a, i) {
            var l = dl();
            try {
              mn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((ml(l), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ql(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
            var _ = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p);
            } catch (e) {
              if ((ml(_), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ul(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h) {
            var y = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h);
            } catch (e) {
              if ((ml(y), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Vl(e) {
            var t = dl();
            try {
              return mn(e)();
            } catch (e) {
              if ((ml(t), !(e instanceof $e))) throw e;
              return (il(1, 0), BigInt(0));
            }
          }
          function Hl(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Gl(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function zl(e, t) {
            var n = dl();
            try {
              return mn(e)(t);
            } catch (e) {
              if ((ml(n), !(e instanceof $e))) throw e;
              return (il(1, 0), BigInt(0));
            }
          }
          function jl(e, t, n, r, o, a, i, l, s, u, c) {
            var d = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((ml(d), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Kl(e, t, n, r, o, a) {
            var i = dl();
            try {
              return mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ql(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            var p = dl();
            try {
              mn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
            } catch (e) {
              if ((ml(p), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Xl(e, t, n, r, o) {
            var a = dl();
            try {
              return mn(e)(t, n, r, o);
            } catch (e) {
              if ((ml(a), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Yl(e, t, n, r, o, a, i, l, s, u, c, d) {
            var m = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c, d);
            } catch (e) {
              if ((ml(m), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Jl(e, t, n, r, o, a, i, l, s, u, c) {
            var d = dl();
            try {
              mn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((ml(d), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Zl(e, t, n, r, o, a, i, l, s, u, c) {
            var d = dl();
            try {
              mn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((ml(d), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function es(e, t, n, r, o, a) {
            var i = dl();
            try {
              return mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ts(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ns(e, t, n, r, o, a, i, l, s) {
            var u = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ml(u), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function rs(e, t, n, r, o, a) {
            var i = dl();
            try {
              mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function os(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
            var g = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
            } catch (e) {
              if ((ml(g), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function as(e, t, n, r, o, a, i, l, s) {
            var u = dl();
            try {
              mn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ml(u), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function is(e, t, n, r, o, a, i, l, s) {
            var u = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ml(u), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ls(e, t, n, r, o, a, i, l, s) {
            var u = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ml(u), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ss(e, t, n, r, o, a, i, l, s, u) {
            var c = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((ml(c), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function us(e, t, n, r, o, a, i, l, s, u, c) {
            var d = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((ml(d), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function cs(e, t, n, r, o, a, i, l, s) {
            var u = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ml(u), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ds(e, t, n, r, o, a, i, l, s, u) {
            var c = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((ml(c), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ms(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ps(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function _s(e, t, n) {
            var r = dl();
            try {
              return mn(e)(t, n);
            } catch (e) {
              if ((ml(r), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function fs(e, t, n, r, o, a, i, l, s) {
            var u = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ml(u), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function gs(e, t, n, r, o, a, i) {
            var l = dl();
            try {
              return mn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((ml(l), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function hs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
            var f = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
            } catch (e) {
              if ((ml(f), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ys(
            e,
            t,
            n,
            r,
            o,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
            h,
            y,
            C,
            b,
            v,
          ) {
            var S = dl();
            try {
              return mn(e)(
                t,
                n,
                r,
                o,
                a,
                i,
                l,
                s,
                u,
                c,
                d,
                m,
                p,
                _,
                f,
                g,
                h,
                y,
                C,
                b,
                v,
              );
            } catch (e) {
              if ((ml(S), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Cs(
            e,
            t,
            n,
            r,
            o,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
            h,
            y,
            C,
            b,
            v,
            S,
            R,
          ) {
            var L = dl();
            try {
              return mn(e)(
                t,
                n,
                r,
                o,
                a,
                i,
                l,
                s,
                u,
                c,
                d,
                m,
                p,
                _,
                f,
                g,
                h,
                y,
                C,
                b,
                v,
                S,
                R,
              );
            } catch (e) {
              if ((ml(L), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function bs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g) {
            var h = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g);
            } catch (e) {
              if ((ml(h), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function vs(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ss(
            e,
            t,
            n,
            r,
            o,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
            h,
            y,
            C,
            b,
          ) {
            var v = dl();
            try {
              return mn(e)(
                t,
                n,
                r,
                o,
                a,
                i,
                l,
                s,
                u,
                c,
                d,
                m,
                p,
                _,
                f,
                g,
                h,
                y,
                C,
                b,
              );
            } catch (e) {
              if ((ml(v), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Rs(e, t, n, r, o, a, i, l, s, u, c, d) {
            var m = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c, d);
            } catch (e) {
              if ((ml(m), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ls(e, t, n, r, o, a, i, l, s, u) {
            var c = dl();
            try {
              mn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((ml(c), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Es(e, t, n, r, o, a, i, l, s, u, c) {
            var d = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((ml(d), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ks(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            var p = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
            } catch (e) {
              if ((ml(p), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Is(e, t, n) {
            var r = dl();
            try {
              mn(e)(t, n);
            } catch (e) {
              if ((ml(r), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ts(e, t, n) {
            var r = dl();
            try {
              return mn(e)(t, n);
            } catch (e) {
              if ((ml(r), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ds(e, t, n, r, o) {
            var a = dl();
            try {
              return mn(e)(t, n, r, o);
            } catch (e) {
              if ((ml(a), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function xs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
            var f = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
            } catch (e) {
              if ((ml(f), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function $s(e, t, n) {
            var r = dl();
            try {
              mn(e)(t, n);
            } catch (e) {
              if ((ml(r), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ps(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            var p = dl();
            try {
              mn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
            } catch (e) {
              if ((ml(p), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ns(e, t, n, r) {
            var o = dl();
            try {
              mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ms(e, t, n, r) {
            var o = dl();
            try {
              mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ws(e, t, n, r) {
            var o = dl();
            try {
              mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function As(e, t, n) {
            var r = dl();
            try {
              return mn(e)(t, n);
            } catch (e) {
              if ((ml(r), !(e instanceof $e))) throw e;
              return (il(1, 0), BigInt(0));
            }
          }
          function Fs(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Os(e, t, n, r) {
            var o = dl();
            try {
              return mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Bs(e, t, n, r, o, a, i) {
            var l = dl();
            try {
              return mn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((ml(l), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ws(e, t, n, r, o, a, i, l, s) {
            var u = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ml(u), !(e instanceof $e))) throw e;
              return (il(1, 0), BigInt(0));
            }
          }
          function qs(e, t, n, r, o, a, i, l, s) {
            var u = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ml(u), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Us(e, t, n, r, o, a, i) {
            var l = dl();
            try {
              return mn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((ml(l), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Vs(e, t, n, r, o) {
            var a = dl();
            try {
              return mn(e)(t, n, r, o);
            } catch (e) {
              if ((ml(a), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Hs(e, t, n, r, o, a, i, l, s, u) {
            var c = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((ml(c), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Gs(e, t, n, r, o, a, i, l, s, u, c) {
            var d = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((ml(d), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function zs(e, t, n, r) {
            var o = dl();
            try {
              return mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function js(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              return (il(1, 0), BigInt(0));
            }
          }
          function Ks(e, t, n, r, o, a) {
            var i = dl();
            try {
              return mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              return (il(1, 0), BigInt(0));
            }
          }
          function Qs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
            var g = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
            } catch (e) {
              if ((ml(g), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Xs(e, t) {
            var n = dl();
            try {
              return mn(e)(t);
            } catch (e) {
              if ((ml(n), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ys(e, t, n, r, o, a, i, l, s, u, c) {
            var d = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((ml(d), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Js(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Zs(
            e,
            t,
            n,
            r,
            o,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
            h,
            y,
            C,
          ) {
            var b = dl();
            try {
              return mn(e)(
                t,
                n,
                r,
                o,
                a,
                i,
                l,
                s,
                u,
                c,
                d,
                m,
                p,
                _,
                f,
                g,
                h,
                y,
                C,
              );
            } catch (e) {
              if ((ml(b), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function eu(e, t, n) {
            var r = dl();
            try {
              return mn(e)(t, n);
            } catch (e) {
              if ((ml(r), !(e instanceof $e))) throw e;
              return (il(1, 0), BigInt(0));
            }
          }
          function tu(e, t, n, r) {
            var o = dl();
            try {
              mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function nu(e, t, n) {
            var r = dl();
            try {
              mn(e)(t, n);
            } catch (e) {
              if ((ml(r), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ru(e, t, n, r, o) {
            var a = dl();
            try {
              mn(e)(t, n, r, o);
            } catch (e) {
              if ((ml(a), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ou(e, t, n, r, o, a) {
            var i = dl();
            try {
              mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function au(e, t, n, r, o, a, i, l, s, u, c) {
            var d = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((ml(d), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function iu(e, t, n, r, o) {
            var a = dl();
            try {
              return mn(e)(t, n, r, o);
            } catch (e) {
              if ((ml(a), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function lu(e, t, n, r) {
            var o = dl();
            try {
              return mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function su(e, t, n, r, o, a) {
            var i = dl();
            try {
              return mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function uu(e, t) {
            var n = dl();
            try {
              return mn(e)(t);
            } catch (e) {
              if ((ml(n), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function cu(e, t, n, r, o) {
            var a = dl();
            try {
              return mn(e)(t, n, r, o);
            } catch (e) {
              if ((ml(a), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function du(e, t, n, r, o, a, i) {
            var l = dl();
            try {
              mn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((ml(l), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function mu(e, t, n, r, o, a) {
            var i = dl();
            try {
              mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function pu(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function _u(e, t, n, r, o) {
            var a = dl();
            try {
              return mn(e)(t, n, r, o);
            } catch (e) {
              if ((ml(a), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function fu(e, t, n, r) {
            var o = dl();
            try {
              mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function gu(e, t, n, r, o, a, i, l, s) {
            var u = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ml(u), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function hu(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function yu(e, t, n, r, o, a, i, l, s) {
            var u = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ml(u), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Cu(e, t, n, r, o) {
            var a = dl();
            try {
              mn(e)(t, n, r, o);
            } catch (e) {
              if ((ml(a), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function bu(e, t, n, r) {
            var o = dl();
            try {
              return mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function vu(e, t, n, r) {
            var o = dl();
            try {
              return mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              return (il(1, 0), BigInt(0));
            }
          }
          function Su(e, t, n, r, o, a, i) {
            var l = dl();
            try {
              return mn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((ml(l), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ru(e, t, n, r, o, a, i, l, s, u, c) {
            var d = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((ml(d), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Lu(
            e,
            t,
            n,
            r,
            o,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
            h,
            y,
            C,
            b,
            v,
            S,
            R,
            L,
            E,
            k,
            I,
            T,
            D,
            x,
            $,
          ) {
            var P = dl();
            try {
              mn(e)(
                t,
                n,
                r,
                o,
                a,
                i,
                l,
                s,
                u,
                c,
                d,
                m,
                p,
                _,
                f,
                g,
                h,
                y,
                C,
                b,
                v,
                S,
                R,
                L,
                E,
                k,
                I,
                T,
                D,
                x,
                $,
              );
            } catch (e) {
              if ((ml(P), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Eu(e, t, n, r) {
            var o = dl();
            try {
              return mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ku(e, t, n, r, o, a) {
            var i = dl();
            try {
              return mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Iu(e, t, n, r) {
            var o = dl();
            try {
              mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Tu(e, t, n, r, o, a) {
            var i = dl();
            try {
              return mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Du(e, t, n, r, o) {
            var a = dl();
            try {
              mn(e)(t, n, r, o);
            } catch (e) {
              if ((ml(a), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function xu(e, t, n, r, o, a, i) {
            var l = dl();
            try {
              return mn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((ml(l), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function $u(e, t, n, r, o, a) {
            var i = dl();
            try {
              return mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Pu(e, t) {
            var n = dl();
            try {
              return mn(e)(t);
            } catch (e) {
              if ((ml(n), !(e instanceof $e))) throw e;
              return (il(1, 0), BigInt(0));
            }
          }
          function Nu(e, t) {
            var n = dl();
            try {
              return mn(e)(t);
            } catch (e) {
              if ((ml(n), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Mu(e, t, n, r, o, a, i, l, s) {
            var u = dl();
            try {
              mn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((ml(u), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function wu(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
            var _ = dl();
            try {
              mn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p);
            } catch (e) {
              if ((ml(_), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Au(e, t, n, r, o) {
            var a = dl();
            try {
              mn(e)(t, n, r, o);
            } catch (e) {
              if ((ml(a), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Fu(e, t, n) {
            var r = dl();
            try {
              return mn(e)(t, n);
            } catch (e) {
              if ((ml(r), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ou(e, t, n, r, o, a) {
            var i = dl();
            try {
              return mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Bu(e, t, n, r, o, a, i, l, s, u) {
            var c = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((ml(c), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Wu(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            var p = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
            } catch (e) {
              if ((ml(p), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function qu(e, t, n, r, o, a, i, l, s, u) {
            var c = dl();
            try {
              return mn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((ml(c), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Uu(e, t, n) {
            var r = dl();
            try {
              return mn(e)(t, n);
            } catch (e) {
              if ((ml(r), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Vu(e, t, n, r, o, a, i, l) {
            var s = dl();
            try {
              mn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((ml(s), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Hu(e, t) {
            var n = dl();
            try {
              mn(e)(t);
            } catch (e) {
              if ((ml(n), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Gu(e) {
            var t = dl();
            try {
              return mn(e)();
            } catch (e) {
              if ((ml(t), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function zu(e, t, n, r) {
            var o = dl();
            try {
              return mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function ju(e, t, n, r, o, a) {
            var i = dl();
            try {
              return mn(e)(t, n, r, o, a);
            } catch (e) {
              if ((ml(i), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Ku(e, t, n, r, o) {
            var a = dl();
            try {
              return mn(e)(t, n, r, o);
            } catch (e) {
              if ((ml(a), !(e instanceof $e))) throw e;
              return (il(1, 0), BigInt(0));
            }
          }
          function Qu(e, t, n, r) {
            var o = dl();
            try {
              return mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Xu(e, t, n, r) {
            var o = dl();
            try {
              return mn(e)(t, n, r);
            } catch (e) {
              if ((ml(o), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          function Yu(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
            var g = dl();
            try {
              mn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
            } catch (e) {
              if ((ml(g), !(e instanceof $e))) throw e;
              il(1, 0);
            }
          }
          ((y.keepRuntimeAlive = me),
            (y.wasmMemory = W),
            (y.GROWABLE_HEAP_U8 = d),
            (y.GROWABLE_HEAP_F32 = g),
            (y.ExitStatus = ht),
            (y.FS = Xt),
            (y.PThread = on),
            (y.registeredTypes = ir));
          var Ju = [
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
            "inetNtop4",
            "inetNtop6",
            "readSockaddr",
            "writeSockaddr",
            "getCallstack",
            "emscriptenLog",
            "convertPCtoSourceLocation",
            "runMainThreadEmAsm",
            "jstoi_s",
            "listenOnce",
            "autoResumeAudioContext",
            "getDynCaller",
            "dynCall",
            "setWasmTableEntry",
            "asmjsMangle",
            "getNativeTypeSize",
            "STACK_SIZE",
            "STACK_ALIGN",
            "POINTER_SIZE",
            "ASSERTIONS",
            "getCFunc",
            "ccall",
            "cwrap",
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
            "stringToUTF8OnStack",
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
            "setCanvasElementSizeCallingThread",
            "setCanvasElementSizeMainThread",
            "setCanvasElementSize",
            "getCanvasSizeCallingThread",
            "getCanvasSizeMainThread",
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
            "emscripten_webgl_destroy_context_before_on_calling_thread",
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
            "getStringOrSymbol",
            "craftEmvalAllocator",
            "emval_get_global",
            "emval_lookupTypes",
            "emval_allocateDestructors",
            "emval_addMethodCaller",
          ];
          Ju.forEach(He);
          var Zu = [
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
            "wasmTable",
            "wasmExports",
            "stackAlloc",
            "stackSave",
            "stackRestore",
            "getTempRet0",
            "setTempRet0",
            "GROWABLE_HEAP_I8",
            "GROWABLE_HEAP_I16",
            "GROWABLE_HEAP_U16",
            "GROWABLE_HEAP_I32",
            "GROWABLE_HEAP_U32",
            "GROWABLE_HEAP_F64",
            "writeStackCookie",
            "checkStackCookie",
            "MAX_INT53",
            "MIN_INT53",
            "bigintToI53Checked",
            "ptrToString",
            "zeroMemory",
            "exitJS",
            "getHeapMax",
            "growMemory",
            "ENV",
            "MONTH_DAYS_REGULAR",
            "MONTH_DAYS_LEAP",
            "MONTH_DAYS_REGULAR_CUMULATIVE",
            "MONTH_DAYS_LEAP_CUMULATIVE",
            "isLeapYear",
            "ydayFromDate",
            "arraySum",
            "addDays",
            "ERRNO_CODES",
            "ERRNO_MESSAGES",
            "setErrNo",
            "inetPton4",
            "inetPton6",
            "DNS",
            "getHostByName",
            "Protocols",
            "Sockets",
            "initRandomFill",
            "randomFill",
            "timers",
            "warnOnce",
            "UNWIND_CACHE",
            "readEmAsmArgsArray",
            "readEmAsmArgs",
            "runEmAsmFunction",
            "jstoi_q",
            "getExecutableName",
            "getWasmTableEntry",
            "handleException",
            "runtimeKeepalivePush",
            "runtimeKeepalivePop",
            "callUserCallback",
            "maybeExit",
            "safeSetTimeout",
            "asyncLoad",
            "alignMemory",
            "mmapAlloc",
            "handleAllocatorInit",
            "HandleAllocator",
            "freeTableIndexes",
            "functionsInTableMap",
            "setValue",
            "getValue",
            "PATH",
            "PATH_FS",
            "UTF8Decoder",
            "UTF8ArrayToString",
            "UTF8ToString",
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
            "writeArrayToMemory",
            "JSEvents",
            "specialHTMLTargets",
            "currentFullscreenStrategy",
            "restoreOldWindowedStyle",
            "demangle",
            "demangleAll",
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
            "setMainLoop",
            "wget",
            "SYSCALLS",
            "preloadPlugins",
            "FS_createPreloadedFile",
            "FS_modeStringToFlags",
            "FS_getMode",
            "FS_stdin_getChar_buffer",
            "FS_stdin_getChar",
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
            "allocateUTF8",
            "allocateUTF8OnStack",
            "terminateWorker",
            "killThread",
            "cleanupThread",
            "registerTLSInit",
            "cancelThread",
            "spawnThread",
            "exitOnMainThread",
            "proxyToMainThread",
            "emscripten_receive_on_main_thread_js_callArgs",
            "invokeEntryPoint",
            "checkMailbox",
            "InternalError",
            "BindingError",
            "throwInternalError",
            "throwBindingError",
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
            "Emval",
            "emval_newers",
            "emval_methodCallers",
            "emval_registeredMethods",
            "IDBFS",
          ];
          Zu.forEach(Ge);
          var ec;
          ve = function e() {
            (ec || nc(), ec || (ve = e));
          };
          function tc() {
            (G(!D), sl(), ae());
          }
          function nc() {
            if (Ce > 0) return;
            if ((D || tc(), D)) {
              (C(y), _e(), startWorker(y));
              return;
            }
            if ((pe(), Ce > 0)) return;
            function e() {
              ec ||
                ((ec = !0),
                (y.calledRun = !0),
                !V &&
                  (_e(),
                  C(y),
                  y.onRuntimeInitialized && y.onRuntimeInitialized(),
                  G(
                    !y._main,
                    'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]',
                  ),
                  fe()));
            }
            (y.setStatus
              ? (y.setStatus("Running..."),
                setTimeout(function () {
                  (setTimeout(function () {
                    y.setStatus("");
                  }, 1),
                    e());
                }, 1))
              : e(),
              ie());
          }
          function rc() {
            var e = A,
              t = F,
              n = !1;
            A = F = function (t) {
              n = !0;
            };
            try {
              (wi(0),
                ["stdout", "stderr"].forEach(function (e) {
                  var t = Xt.analyzePath("/dev/" + e);
                  if (t) {
                    var r = t.object,
                      o = r.rdev,
                      a = wt.ttys[o];
                    a && a.output && a.output.length && (n = !0);
                  }
                }));
            } catch (e) {}
            ((A = e),
              (F = t),
              n &&
                fn(
                  "stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.",
                ));
          }
          if (y.preInit)
            for (
              typeof y.preInit == "function" && (y.preInit = [y.preInit]);
              y.preInit.length > 0;
            )
              y.preInit.pop()();
          return (nc(), a.ready);
        };
      })();
    typeof l == "object" && typeof i == "object"
      ? (i.exports = d)
      : typeof define == "function" &&
        define.amd &&
        define([], function () {
          return d;
        });
  },
  34,
);
