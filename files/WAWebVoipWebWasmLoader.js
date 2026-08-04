__d(
  "WAWebVoipWebWasmLoader",
  [
    "Promise",
    "WAWebVoipQplHelpers",
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
      c = r("bx").getURL(r("bx")("32180"), { cacheBreaker: "1785824638304" }),
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
          var y = a,
            C,
            b;
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
              "_get_persistent_directory_path_js",
              "_get_bwe_ml_model_path_js",
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
                      if (!(n instanceof gt)) {
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
            ki(),
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
            var e = tl();
            (G((e & 3) == 0),
              e == 0 && (e += 4),
              (f()[e >> 2] = 34821223),
              (f()[(e + 4) >> 2] = 2310721022),
              (f()[0] = 1668509029));
          }
          function ie() {
            if (!V) {
              var e = tl();
              e == 0 && (e += 4);
              var t = f()[e >> 2],
                n = f()[(e + 4) >> 2];
              ((t != 34821223 || n != 2310721022) &&
                ke(
                  "Stack overflow! Stack cookie has been overwritten at " +
                    tn(e) +
                    ", expected hex dwords 0x89BACDFE and 0x2135467, but received " +
                    tn(n) +
                    " " +
                    tn(t),
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
            on(le);
          }
          function _e() {
            (G(!ce),
              (ce = !0),
              !D &&
                (ie(),
                !y.noFSInit && !Qt.init.initialized && Qt.init(),
                (Qt.ignorePermissions = !1),
                Mt.init(),
                on(se)));
          }
          function fe() {
            if ((ie(), !D)) {
              if (y.postRun)
                for (
                  typeof y.postRun == "function" && (y.postRun = [y.postRun]);
                  y.postRun.length;
                )
                  ye(y.postRun.shift());
              on(ue);
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
                var r = cn(t);
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
            var e = { env: Ii, wasi_snapshot_preview1: Ii };
            function t(e, t) {
              var n = e.exports;
              return (
                (q = n),
                pn(q._emscripten_tls_init),
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
                  _n("`" + e + "` is not longer defined by emscripten. " + t);
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
                    _n(t));
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
            1332372: function () {
              return Date.now();
            },
            1332395: function (t, n) {
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
            var n = t ? Xt(t) : "";
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
                var t = xt(n) + 1,
                  r = cl(),
                  o = ml(t);
                (Gn(n, o, t), y._wasm_throw_ml_abort(o), dl(r));
                return;
              }
              e(n);
            };
          }
          function Ye() {
            var e =
              self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getPersistentDirectoryPath();
            if (e) {
              var t = xt(e) + 1,
                n = $i(t);
              return (Gn(e, n, t), n);
            }
            return null;
          }
          function Je(e) {
            var t = e ? Xt(e) : null,
              n =
                self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getBweModelPath({
                  versionName: t,
                });
            if (n) {
              var r = xt(n) + 1,
                o = $i(r);
              return (Gn(n, o, r), o);
            }
            return null;
          }
          function Ze(e, t) {
            if (t == null) {
              var n = new Error("get_random_bytes_js: rawBytesPtr is null");
              throw (n.stack, n);
            }
            var r = new Uint8Array(e),
              o = self.crypto.getRandomValues(r);
            hi(o, t);
          }
          function et(e) {
            var t = Xt(e);
            return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.isParticipantKnownContact(
              { jid: t },
            );
          }
          function tt(e, t, n, r, o, a, i, l, s, u) {
            var c = d(),
              m = new Uint8Array(n);
            m.set(c.subarray(t, t + n));
            var p = Xt(e);
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
          function nt(e, t, n, r) {
            var o = d(),
              a = new Uint8Array(r);
            a.set(o.subarray(n, n + r));
            var i = Xt(t),
              l = Xt(e);
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onSignalingXmpp({
              peerJid: l,
              callId: i,
              xmlPayload: a,
            });
          }
          function rt(e, t, n, r) {
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
              { data: i, len: t, ip: Xt(n), port: r },
            );
          }
          function ot(e, t, n, r, o) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.initCaptureDriverJS({
              sample_rate: e,
              channels: t,
              bits_per_sample: n,
              frames_per_chunk: r,
              device_type: o,
            });
          }
          function at(e) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startCaptureJS({
              device_type: e,
            });
          }
          function it(e) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopCaptureJS({
              device_type: e,
            });
          }
          function lt(e, t, n, r) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.initPlaybackDriverJS(
              {
                sample_rate: e,
                channels: t,
                bits_per_sample: n,
                frames_per_chunk: r,
              },
            );
          }
          function st() {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startPlaybackJS();
          }
          function ut() {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopPlaybackJS();
          }
          function ct() {
            return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getBrowserAudioProcessingStatus();
          }
          function dt(e, t, n) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startDesktopCaptureJS(
              { width: e, height: t, max_fps: n },
            );
          }
          function mt() {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopDesktopCaptureJS();
          }
          function pt(e, t, n, r, o) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startVideoCaptureJS({
              camera_id: Xt(e),
              width: t,
              height: n,
              max_fps: r,
              isAVUpgrade: !!o,
            });
          }
          function _t() {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopVideoCaptureJS();
          }
          function ft(e, t) {
            var n = t ? Xt(t).trim() : "";
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
              level: e,
              message: n,
            });
          }
          function gt(e) {
            ((this.name = "ExitStatus"),
              (this.message = "Program terminated with exit(" + e + ")"),
              (this.status = e));
          }
          var ht = function (t) {
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
          function yt(e) {
            (G(
              !D,
              "Internal Error! killThread() can only ever be called from main application thread!",
            ),
              G(e, "Internal Error! Null pthread_ptr in killThread!"));
            var t = rn.pthreads[e];
            (delete rn.pthreads[e],
              ht(t),
              nl(e),
              rn.runningWorkers.splice(rn.runningWorkers.indexOf(t), 1),
              (t.pthread_ptr = 0));
          }
          function Ct(e) {
            (G(
              !D,
              "Internal Error! cancelThread() can only ever be called from main application thread!",
            ),
              G(e, "Internal Error! Null pthread_ptr in cancelThread!"));
            var t = rn.pthreads[e];
            t.postMessage({ cmd: "cancel", type: "cmd" });
          }
          function bt(e) {
            (G(
              !D,
              "Internal Error! cleanupThread() can only ever be called from main application thread!",
            ),
              G(e, "Internal Error! Null pthread_ptr in cleanupThread!"));
            var t = rn.pthreads[e];
            (G(t), rn.returnWorkerToPool(t));
          }
          var vt = function (t, n) {
            return (d().fill(0, t, t + n), t);
          };
          function St(e) {
            (G(
              !D,
              "Internal Error! spawnThread() can only ever be called from main application thread!",
            ),
              G(e.pthread_ptr, "Internal error, no pthread ptr!"));
            var t = rn.getNewWorker();
            if (!t) return 6;
            (G(!t.pthread_ptr, "Internal error!"),
              rn.runningWorkers.push(t),
              (rn.pthreads[e.pthread_ptr] = t),
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
          var Rt = {
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
                var e = Rt.isAbs(t),
                  n = t.substr(-1) === "/";
                return (
                  (t = Rt.normalizeArray(
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
                var e = Rt.splitPath(t),
                  n = e[0],
                  r = e[1];
                return !n && !r
                  ? "."
                  : (r && (r = r.substr(0, r.length - 1)), n + r);
              },
              basename: function (t) {
                if (t === "/") return "/";
                ((t = Rt.normalize(t)), (t = t.replace(/\/$/, "")));
                var e = t.lastIndexOf("/");
                return e === -1 ? t : t.substr(e + 1);
              },
              join: function () {
                var e = Array.prototype.slice.call(arguments);
                return Rt.normalize(e.join("/"));
              },
              join2: function (t, n) {
                return Rt.normalize(t + "/" + n);
              },
            },
            Lt = function () {
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
            Et = function (t) {
              return (Et = Lt())(t);
            },
            kt = {
              resolve: function () {
                for (
                  var e = "", t = !1, n = arguments.length - 1;
                  n >= -1 && !t;
                  n--
                ) {
                  var r = n >= 0 ? arguments[n] : Qt.cwd();
                  if (typeof r != "string")
                    throw new TypeError(
                      "Arguments to path.resolve must be strings",
                    );
                  if (!r) return "";
                  ((e = r + "/" + e), (t = Rt.isAbs(r)));
                }
                return (
                  (e = Rt.normalizeArray(
                    e.split("/").filter(function (e) {
                      return !!e;
                    }),
                    !t,
                  ).join("/")),
                  (t ? "/" : "") + e || "."
                );
              },
              relative: function (t, n) {
                ((t = kt.resolve(t).substr(1)), (n = kt.resolve(n).substr(1)));
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
            It =
              typeof TextDecoder != "undefined"
                ? new TextDecoder("utf8")
                : void 0,
            Tt = function (t, n, r) {
              for (var e = n + r, o = n; t[o] && !(o >= e); ) ++o;
              if (o - n > 16 && t.buffer && It) return It.decode(t.slice(n, o));
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
                        _n(
                          "Invalid UTF-8 leading byte " +
                            tn(i) +
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
            Dt = [],
            xt = function (t) {
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
            $t = function (t, n, r, o) {
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
                    _n(
                      "Invalid Unicode code point " +
                        tn(l) +
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
          function Pt(e, t, n) {
            var r = n > 0 ? n : xt(e) + 1,
              o = new Array(r),
              a = $t(e, o, 0, o.length);
            return (t && (o.length = a), o);
          }
          var Nt = function () {
              if (!Dt.length) {
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
                Dt = Pt(e, !0);
              }
              return Dt.shift();
            },
            Mt = {
              ttys: [],
              init: function () {},
              shutdown: function () {},
              register: function (t, n) {
                ((Mt.ttys[t] = { input: [], output: [], ops: n }),
                  Qt.registerDevice(t, Mt.stream_ops));
              },
              stream_ops: {
                open: function (t) {
                  var e = Mt.ttys[t.node.rdev];
                  if (!e) throw new Qt.ErrnoError(43);
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
                    throw new Qt.ErrnoError(60);
                  for (var e = 0, i = 0; i < o; i++) {
                    var l;
                    try {
                      l = t.tty.ops.get_char(t.tty);
                    } catch (e) {
                      throw new Qt.ErrnoError(29);
                    }
                    if (l === void 0 && e === 0) throw new Qt.ErrnoError(6);
                    if (l == null) break;
                    (e++, (n[r + i] = l));
                  }
                  return (e && (t.node.timestamp = Date.now()), e);
                },
                write: function (t, n, r, o, a) {
                  if (!t.tty || !t.tty.ops.put_char)
                    throw new Qt.ErrnoError(60);
                  try {
                    for (var e = 0; e < o; e++)
                      t.tty.ops.put_char(t.tty, n[r + e]);
                  } catch (e) {
                    throw new Qt.ErrnoError(29);
                  }
                  return (o && (t.node.timestamp = Date.now()), e);
                },
              },
              default_tty_ops: {
                get_char: function (t) {
                  return Nt();
                },
                put_char: function (t, n) {
                  n === null || n === 10
                    ? (A(Tt(t.output, 0)), (t.output = []))
                    : n != 0 && t.output.push(n);
                },
                fsync: function (t) {
                  t.output &&
                    t.output.length > 0 &&
                    (A(Tt(t.output, 0)), (t.output = []));
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
                    ? (F(Tt(t.output, 0)), (t.output = []))
                    : n != 0 && t.output.push(n);
                },
                fsync: function (t) {
                  t.output &&
                    t.output.length > 0 &&
                    (F(Tt(t.output, 0)), (t.output = []));
                },
              },
            },
            wt = function (t, n) {
              return (
                G(n, "alignment argument is required"),
                Math.ceil(t / n) * n
              );
            },
            At = function (t) {
              t = wt(t, 65536);
              var e = Gi(65536, t);
              return e ? vt(e, t) : 0;
            },
            Ft = {
              ops_table: null,
              mount: function (t) {
                return Ft.createNode(null, "/", 16895, 0);
              },
              createNode: function (t, n, r, o) {
                if (Qt.isBlkdev(r) || Qt.isFIFO(r)) throw new Qt.ErrnoError(63);
                Ft.ops_table ||
                  (Ft.ops_table = {
                    dir: {
                      node: {
                        getattr: Ft.node_ops.getattr,
                        setattr: Ft.node_ops.setattr,
                        lookup: Ft.node_ops.lookup,
                        mknod: Ft.node_ops.mknod,
                        rename: Ft.node_ops.rename,
                        unlink: Ft.node_ops.unlink,
                        rmdir: Ft.node_ops.rmdir,
                        readdir: Ft.node_ops.readdir,
                        symlink: Ft.node_ops.symlink,
                      },
                      stream: { llseek: Ft.stream_ops.llseek },
                    },
                    file: {
                      node: {
                        getattr: Ft.node_ops.getattr,
                        setattr: Ft.node_ops.setattr,
                      },
                      stream: {
                        llseek: Ft.stream_ops.llseek,
                        read: Ft.stream_ops.read,
                        write: Ft.stream_ops.write,
                        allocate: Ft.stream_ops.allocate,
                        mmap: Ft.stream_ops.mmap,
                        msync: Ft.stream_ops.msync,
                      },
                    },
                    link: {
                      node: {
                        getattr: Ft.node_ops.getattr,
                        setattr: Ft.node_ops.setattr,
                        readlink: Ft.node_ops.readlink,
                      },
                      stream: {},
                    },
                    chrdev: {
                      node: {
                        getattr: Ft.node_ops.getattr,
                        setattr: Ft.node_ops.setattr,
                      },
                      stream: Qt.chrdev_stream_ops,
                    },
                  });
                var e = Qt.createNode(t, n, r, o);
                return (
                  Qt.isDir(e.mode)
                    ? ((e.node_ops = Ft.ops_table.dir.node),
                      (e.stream_ops = Ft.ops_table.dir.stream),
                      (e.contents = {}))
                    : Qt.isFile(e.mode)
                      ? ((e.node_ops = Ft.ops_table.file.node),
                        (e.stream_ops = Ft.ops_table.file.stream),
                        (e.usedBytes = 0),
                        (e.contents = null))
                      : Qt.isLink(e.mode)
                        ? ((e.node_ops = Ft.ops_table.link.node),
                          (e.stream_ops = Ft.ops_table.link.stream))
                        : Qt.isChrdev(e.mode) &&
                          ((e.node_ops = Ft.ops_table.chrdev.node),
                          (e.stream_ops = Ft.ops_table.chrdev.stream)),
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
                    (e.dev = Qt.isChrdev(t.mode) ? t.id : 1),
                    (e.ino = t.id),
                    (e.mode = t.mode),
                    (e.nlink = 1),
                    (e.uid = 0),
                    (e.gid = 0),
                    (e.rdev = t.rdev),
                    Qt.isDir(t.mode)
                      ? (e.size = 4096)
                      : Qt.isFile(t.mode)
                        ? (e.size = t.usedBytes)
                        : Qt.isLink(t.mode)
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
                    n.size !== void 0 && Ft.resizeFileStorage(t, n.size));
                },
                lookup: function (t, n) {
                  throw Qt.genericErrors[44];
                },
                mknod: function (t, n, r, o) {
                  return Ft.createNode(t, n, r, o);
                },
                rename: function (t, n, r) {
                  if (Qt.isDir(t.mode)) {
                    var e;
                    try {
                      e = Qt.lookupNode(n, r);
                    } catch (e) {}
                    if (e)
                      for (var o in e.contents) throw new Qt.ErrnoError(55);
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
                  var e = Qt.lookupNode(t, n);
                  for (var r in e.contents) throw new Qt.ErrnoError(55);
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
                  var e = Ft.createNode(t, n, 41471, 0);
                  return ((e.link = r), e);
                },
                readlink: function (t) {
                  if (!Qt.isLink(t.mode)) throw new Qt.ErrnoError(28);
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
                    (Ft.expandFileStorage(e, a + o),
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
                        Qt.isFile(t.node.mode) &&
                        (e += t.node.usedBytes),
                    e < 0)
                  )
                    throw new Qt.ErrnoError(28);
                  return e;
                },
                allocate: function (t, n, r) {
                  (Ft.expandFileStorage(t.node, n + r),
                    (t.node.usedBytes = Math.max(t.node.usedBytes, n + r)));
                },
                mmap: function (t, n, r, o, a) {
                  if (!Qt.isFile(t.node.mode)) throw new Qt.ErrnoError(43);
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
                      (e = At(n)),
                      !e)
                    )
                      throw new Qt.ErrnoError(48);
                    l().set(s, e);
                  }
                  return { ptr: e, allocated: i };
                },
                msync: function (t, n, r, o, a) {
                  return (Ft.stream_ops.write(t, n, 0, o, r, !1), 0);
                },
              },
            },
            Ot = function (t, n, r, o) {
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
            Bt = y.preloadPlugins || [];
          function Wt(e, t, n, r) {
            typeof Ta != "undefined" && Ta.init();
            var o = !1;
            return (
              Bt.forEach(function (a) {
                o || (a.canHandle(t) && (a.handle(e, t, n, r), (o = !0)));
              }),
              o
            );
          }
          function qt(e, t, n, r, o, a, i, l, s, u) {
            var c = t ? kt.resolve(Rt.join2(e, t)) : e,
              d = Re("cp " + c);
            function m(n) {
              function m(n) {
                (u && u(),
                  l || Qt.createDataFile(e, t, n, r, o, s),
                  a && a(),
                  Ee(d));
              }
              Wt(n, c, m, function () {
                (i && i(), Ee(d));
              }) || m(n);
            }
            (Le(d),
              typeof n == "string"
                ? Ot(
                    n,
                    function (e) {
                      return m(e);
                    },
                    i,
                  )
                : m(n));
          }
          function Ut(e) {
            var t = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
              n = t[e];
            if (typeof n == "undefined")
              throw new Error("Unknown file open mode: " + e);
            return n;
          }
          function Vt(e, t) {
            var n = 0;
            return (e && (n |= 365), t && (n |= 146), n);
          }
          var Ht = {
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
                return Ft.mount.apply(null, arguments);
              },
              syncfs: function (t, n, r) {
                Ht.getLocalSet(t, function (e, o) {
                  if (e) return r(e);
                  Ht.getRemoteSet(t, function (e, t) {
                    if (e) return r(e);
                    var a = n ? t : o,
                      i = n ? o : t;
                    Ht.reconcile(a, i, r);
                  });
                });
              },
              quit: function () {
                (Object.values(Ht.dbs).forEach(function (e) {
                  return e.close();
                }),
                  (Ht.dbs = {}));
              },
              getDB: function (t, n) {
                var e = Ht.dbs[t];
                if (e) return n(null, e);
                var r;
                try {
                  r = Ht.indexedDB().open(t, Ht.DB_VERSION);
                } catch (e) {
                  return n(e);
                }
                if (!r) return n("Unable to connect to IndexedDB");
                ((r.onupgradeneeded = function (e) {
                  var t = e.target.result,
                    n = e.target.transaction,
                    r;
                  (t.objectStoreNames.contains(Ht.DB_STORE_NAME)
                    ? (r = n.objectStore(Ht.DB_STORE_NAME))
                    : (r = t.createObjectStore(Ht.DB_STORE_NAME)),
                    r.indexNames.contains("timestamp") ||
                      r.createIndex("timestamp", "timestamp", { unique: !1 }));
                }),
                  (r.onsuccess = function () {
                    ((e = r.result), (Ht.dbs[t] = e), n(null, e));
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
                    return Rt.join2(e, t);
                  };
                }
                for (
                  var a = Qt.readdir(t.mountpoint)
                    .filter(r)
                    .map(o(t.mountpoint));
                  a.length;
                ) {
                  var i = a.pop(),
                    l;
                  try {
                    l = Qt.stat(i);
                  } catch (e) {
                    return n(e);
                  }
                  (Qt.isDir(l.mode) &&
                    a.push.apply(a, Qt.readdir(i).filter(r).map(o(i))),
                    (e[i] = { timestamp: l.mtime }));
                }
                return n(null, { type: "local", entries: e });
              },
              getRemoteSet: function (t, n) {
                var e = {};
                Ht.getDB(t.mountpoint, function (t, r) {
                  if (t) return n(t);
                  try {
                    var o = r.transaction([Ht.DB_STORE_NAME], "readonly");
                    o.onerror = function (e) {
                      (n(e.target.error), e.preventDefault());
                    };
                    var a = o.objectStore(Ht.DB_STORE_NAME),
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
                  var o = Qt.lookupPath(t);
                  ((r = o.node), (e = Qt.stat(t)));
                } catch (e) {
                  return n(e);
                }
                return Qt.isDir(e.mode)
                  ? n(null, { timestamp: e.mtime, mode: e.mode })
                  : Qt.isFile(e.mode)
                    ? ((r.contents = Ft.getFileDataAsTypedArray(r)),
                      n(null, {
                        timestamp: e.mtime,
                        mode: e.mode,
                        contents: r.contents,
                      }))
                    : n(new Error("node type not supported"));
              },
              storeLocalEntry: function (t, n, r) {
                try {
                  if (Qt.isDir(n.mode)) Qt.mkdirTree(t, n.mode);
                  else if (Qt.isFile(n.mode))
                    Qt.writeFile(t, n.contents, { canOwn: !0 });
                  else return r(new Error("node type not supported"));
                  (Qt.chmod(t, n.mode), Qt.utime(t, n.timestamp, n.timestamp));
                } catch (e) {
                  return r(e);
                }
                r(null);
              },
              removeLocalEntry: function (t, n) {
                try {
                  var e = Qt.stat(t);
                  Qt.isDir(e.mode)
                    ? Qt.rmdir(t)
                    : Qt.isFile(e.mode) && Qt.unlink(t);
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
                  u = s.transaction([Ht.DB_STORE_NAME], "readwrite"),
                  c = u.objectStore(Ht.DB_STORE_NAME);
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
                      ? Ht.loadRemoteEntry(c, e, function (t, n) {
                          if (t) return d(t);
                          Ht.storeLocalEntry(e, n, d);
                        })
                      : Ht.loadLocalEntry(e, function (t, n) {
                          if (t) return d(t);
                          Ht.storeRemoteEntry(c, e, n, d);
                        });
                  }),
                  a
                    .sort()
                    .reverse()
                    .forEach(function (e) {
                      n.type === "local"
                        ? Ht.removeLocalEntry(e, d)
                        : Ht.removeRemoteEntry(c, e, d);
                    }));
              },
            },
            Gt = {
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
            zt = {};
          function jt(e) {
            return (
              _n(
                "warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling",
              ),
              e
            );
          }
          function Kt(e) {
            var t = /\b_Z[\w\d_]+/g;
            return e.replace(t, function (e) {
              var t = jt(e);
              return e === t ? e : t + " [" + e + "]";
            });
          }
          var Qt = {
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
                if ((n === void 0 && (n = {}), (t = kt.resolve(t)), !t))
                  return { path: "", node: null };
                var e = { follow_mount: !0, recurse_count: 0 };
                if (((n = Object.assign(e, n)), n.recurse_count > 8))
                  throw new Qt.ErrnoError(32);
                for (
                  var r = t.split("/").filter(function (e) {
                      return !!e;
                    }),
                    o = Qt.root,
                    a = "/",
                    i = 0;
                  i < r.length;
                  i++
                ) {
                  var l = i === r.length - 1;
                  if (l && n.parent) break;
                  if (
                    ((o = Qt.lookupNode(o, r[i])),
                    (a = Rt.join2(a, r[i])),
                    Qt.isMountpoint(o) &&
                      (!l || (l && n.follow_mount)) &&
                      (o = o.mounted.root),
                    !l || n.follow)
                  )
                    for (var s = 0; Qt.isLink(o.mode); ) {
                      var u = Qt.readlink(a);
                      a = kt.resolve(Rt.dirname(a), u);
                      var c = Qt.lookupPath(a, {
                        recurse_count: n.recurse_count + 1,
                      });
                      if (((o = c.node), s++ > 40)) throw new Qt.ErrnoError(32);
                    }
                }
                return { path: a, node: o };
              },
              getPath: function (t) {
                for (var e; ; ) {
                  if (Qt.isRoot(t)) {
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
                return ((t + e) >>> 0) % Qt.nameTable.length;
              },
              hashAddNode: function (t) {
                var e = Qt.hashName(t.parent.id, t.name);
                ((t.name_next = Qt.nameTable[e]), (Qt.nameTable[e] = t));
              },
              hashRemoveNode: function (t) {
                var e = Qt.hashName(t.parent.id, t.name);
                if (Qt.nameTable[e] === t) Qt.nameTable[e] = t.name_next;
                else
                  for (var n = Qt.nameTable[e]; n; ) {
                    if (n.name_next === t) {
                      n.name_next = t.name_next;
                      break;
                    }
                    n = n.name_next;
                  }
              },
              lookupNode: function (t, n) {
                var e = Qt.mayLookup(t);
                if (e) throw new Qt.ErrnoError(e, t);
                for (
                  var r = Qt.hashName(t.id, n), o = Qt.nameTable[r];
                  o;
                  o = o.name_next
                ) {
                  var a = o.name;
                  if (o.parent.id === t.id && a === n) return o;
                }
                return Qt.lookup(t, n);
              },
              createNode: function (t, n, r, o) {
                G(typeof t == "object");
                var e = new Qt.FSNode(t, n, r, o);
                return (Qt.hashAddNode(e), e);
              },
              destroyNode: function (t) {
                Qt.hashRemoveNode(t);
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
                return Qt.ignorePermissions
                  ? 0
                  : (n.includes("r") && !(t.mode & 292)) ||
                      (n.includes("w") && !(t.mode & 146)) ||
                      (n.includes("x") && !(t.mode & 73))
                    ? 2
                    : 0;
              },
              mayLookup: function (t) {
                var e = Qt.nodePermissions(t, "x");
                return e || (t.node_ops.lookup ? 0 : 2);
              },
              mayCreate: function (t, n) {
                try {
                  var e = Qt.lookupNode(t, n);
                  return 20;
                } catch (e) {}
                return Qt.nodePermissions(t, "wx");
              },
              mayDelete: function (t, n, r) {
                var e;
                try {
                  e = Qt.lookupNode(t, n);
                } catch (e) {
                  return e.errno;
                }
                var o = Qt.nodePermissions(t, "wx");
                if (o) return o;
                if (r) {
                  if (!Qt.isDir(e.mode)) return 54;
                  if (Qt.isRoot(e) || Qt.getPath(e) === Qt.cwd()) return 10;
                } else if (Qt.isDir(e.mode)) return 31;
                return 0;
              },
              mayOpen: function (t, n) {
                return t
                  ? Qt.isLink(t.mode)
                    ? 32
                    : Qt.isDir(t.mode) &&
                        (Qt.flagsToPermissionString(n) !== "r" || n & 512)
                      ? 31
                      : Qt.nodePermissions(t, Qt.flagsToPermissionString(n))
                  : 44;
              },
              MAX_OPEN_FDS: 4096,
              nextfd: function () {
                for (var e = 0; e <= Qt.MAX_OPEN_FDS; e++)
                  if (!Qt.streams[e]) return e;
                throw new Qt.ErrnoError(33);
              },
              getStreamChecked: function (t) {
                var e = Qt.getStream(t);
                if (!e) throw new Qt.ErrnoError(8);
                return e;
              },
              getStream: function (t) {
                return Qt.streams[t];
              },
              createStream: function (t, n) {
                return (
                  n === void 0 && (n = -1),
                  Qt.FSStream ||
                    ((Qt.FSStream = function () {
                      this.shared = {};
                    }),
                    (Qt.FSStream.prototype = {}),
                    Object.defineProperties(Qt.FSStream.prototype, {
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
                  (t = Object.assign(new Qt.FSStream(), t)),
                  n == -1 && (n = Qt.nextfd()),
                  (t.fd = n),
                  (Qt.streams[n] = t),
                  t
                );
              },
              closeStream: function (t) {
                Qt.streams[t] = null;
              },
              chrdev_stream_ops: {
                open: function (t) {
                  var e = Qt.getDevice(t.node.rdev);
                  ((t.stream_ops = e.stream_ops),
                    t.stream_ops.open && t.stream_ops.open(t));
                },
                llseek: function () {
                  throw new Qt.ErrnoError(70);
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
                Qt.devices[t] = { stream_ops: n };
              },
              getDevice: function (t) {
                return Qt.devices[t];
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
                  Qt.syncFSRequests++,
                  Qt.syncFSRequests > 1 &&
                    F(
                      "warning: " +
                        Qt.syncFSRequests +
                        " FS.syncfs operations in flight at once, probably just doing extra work",
                    ));
                var e = Qt.getMounts(Qt.root.mount),
                  r = 0;
                function o(e) {
                  return (G(Qt.syncFSRequests > 0), Qt.syncFSRequests--, n(e));
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
                if (e && Qt.root) throw new Qt.ErrnoError(10);
                if (!e && !o) {
                  var i = Qt.lookupPath(r, { follow_mount: !1 });
                  if (((r = i.path), (a = i.node), Qt.isMountpoint(a)))
                    throw new Qt.ErrnoError(10);
                  if (!Qt.isDir(a.mode)) throw new Qt.ErrnoError(54);
                }
                var l = { type: t, opts: n, mountpoint: r, mounts: [] },
                  s = t.mount(l);
                return (
                  (s.mount = l),
                  (l.root = s),
                  e
                    ? (Qt.root = s)
                    : a && ((a.mounted = l), a.mount && a.mount.mounts.push(l)),
                  s
                );
              },
              unmount: function (t) {
                var e = Qt.lookupPath(t, { follow_mount: !1 });
                if (!Qt.isMountpoint(e.node)) throw new Qt.ErrnoError(28);
                var n = e.node,
                  r = n.mounted,
                  o = Qt.getMounts(r);
                (Object.keys(Qt.nameTable).forEach(function (e) {
                  for (var t = Qt.nameTable[e]; t; ) {
                    var n = t.name_next;
                    (o.includes(t.mount) && Qt.destroyNode(t), (t = n));
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
                var e = Qt.lookupPath(t, { parent: !0 }),
                  o = e.node,
                  a = Rt.basename(t);
                if (!a || a === "." || a === "..") throw new Qt.ErrnoError(28);
                var i = Qt.mayCreate(o, a);
                if (i) throw new Qt.ErrnoError(i);
                if (!o.node_ops.mknod) throw new Qt.ErrnoError(63);
                return o.node_ops.mknod(o, a, n, r);
              },
              create: function (t, n) {
                return (
                  (n = n !== void 0 ? n : 438),
                  (n &= 4095),
                  (n |= 32768),
                  Qt.mknod(t, n, 0)
                );
              },
              mkdir: function (t, n) {
                return (
                  (n = n !== void 0 ? n : 511),
                  (n &= 1023),
                  (n |= 16384),
                  Qt.mknod(t, n, 0)
                );
              },
              mkdirTree: function (t, n) {
                for (var e = t.split("/"), r = "", o = 0; o < e.length; ++o)
                  if (e[o]) {
                    r += "/" + e[o];
                    try {
                      Qt.mkdir(r, n);
                    } catch (e) {
                      if (e.errno != 20) throw e;
                    }
                  }
              },
              mkdev: function (t, n, r) {
                return (
                  typeof r == "undefined" && ((r = n), (n = 438)),
                  (n |= 8192),
                  Qt.mknod(t, n, r)
                );
              },
              symlink: function (t, n) {
                if (!kt.resolve(t)) throw new Qt.ErrnoError(44);
                var e = Qt.lookupPath(n, { parent: !0 }),
                  r = e.node;
                if (!r) throw new Qt.ErrnoError(44);
                var o = Rt.basename(n),
                  a = Qt.mayCreate(r, o);
                if (a) throw new Qt.ErrnoError(a);
                if (!r.node_ops.symlink) throw new Qt.ErrnoError(63);
                return r.node_ops.symlink(r, o, t);
              },
              rename: function (t, n) {
                var e = Rt.dirname(t),
                  r = Rt.dirname(n),
                  o = Rt.basename(t),
                  a = Rt.basename(n),
                  i,
                  l,
                  s;
                if (
                  ((i = Qt.lookupPath(t, { parent: !0 })),
                  (l = i.node),
                  (i = Qt.lookupPath(n, { parent: !0 })),
                  (s = i.node),
                  !l || !s)
                )
                  throw new Qt.ErrnoError(44);
                if (l.mount !== s.mount) throw new Qt.ErrnoError(75);
                var u = Qt.lookupNode(l, o),
                  c = kt.relative(t, r);
                if (c.charAt(0) !== ".") throw new Qt.ErrnoError(28);
                if (((c = kt.relative(n, e)), c.charAt(0) !== "."))
                  throw new Qt.ErrnoError(55);
                var d;
                try {
                  d = Qt.lookupNode(s, a);
                } catch (e) {}
                if (u !== d) {
                  var m = Qt.isDir(u.mode),
                    p = Qt.mayDelete(l, o, m);
                  if (p) throw new Qt.ErrnoError(p);
                  if (((p = d ? Qt.mayDelete(s, a, m) : Qt.mayCreate(s, a)), p))
                    throw new Qt.ErrnoError(p);
                  if (!l.node_ops.rename) throw new Qt.ErrnoError(63);
                  if (Qt.isMountpoint(u) || (d && Qt.isMountpoint(d)))
                    throw new Qt.ErrnoError(10);
                  if (s !== l && ((p = Qt.nodePermissions(l, "w")), p))
                    throw new Qt.ErrnoError(p);
                  Qt.hashRemoveNode(u);
                  try {
                    l.node_ops.rename(u, s, a);
                  } catch (e) {
                    throw e;
                  } finally {
                    Qt.hashAddNode(u);
                  }
                }
              },
              rmdir: function (t) {
                var e = Qt.lookupPath(t, { parent: !0 }),
                  n = e.node,
                  r = Rt.basename(t),
                  o = Qt.lookupNode(n, r),
                  a = Qt.mayDelete(n, r, !0);
                if (a) throw new Qt.ErrnoError(a);
                if (!n.node_ops.rmdir) throw new Qt.ErrnoError(63);
                if (Qt.isMountpoint(o)) throw new Qt.ErrnoError(10);
                (n.node_ops.rmdir(n, r), Qt.destroyNode(o));
              },
              readdir: function (t) {
                var e = Qt.lookupPath(t, { follow: !0 }),
                  n = e.node;
                if (!n.node_ops.readdir) throw new Qt.ErrnoError(54);
                return n.node_ops.readdir(n);
              },
              unlink: function (t) {
                var e = Qt.lookupPath(t, { parent: !0 }),
                  n = e.node;
                if (!n) throw new Qt.ErrnoError(44);
                var r = Rt.basename(t),
                  o = Qt.lookupNode(n, r),
                  a = Qt.mayDelete(n, r, !1);
                if (a) throw new Qt.ErrnoError(a);
                if (!n.node_ops.unlink) throw new Qt.ErrnoError(63);
                if (Qt.isMountpoint(o)) throw new Qt.ErrnoError(10);
                (n.node_ops.unlink(n, r), Qt.destroyNode(o));
              },
              readlink: function (t) {
                var e = Qt.lookupPath(t),
                  n = e.node;
                if (!n) throw new Qt.ErrnoError(44);
                if (!n.node_ops.readlink) throw new Qt.ErrnoError(28);
                return kt.resolve(Qt.getPath(n.parent), n.node_ops.readlink(n));
              },
              stat: function (t, n) {
                var e = Qt.lookupPath(t, { follow: !n }),
                  r = e.node;
                if (!r) throw new Qt.ErrnoError(44);
                if (!r.node_ops.getattr) throw new Qt.ErrnoError(63);
                return r.node_ops.getattr(r);
              },
              lstat: function (t) {
                return Qt.stat(t, !0);
              },
              chmod: function (t, n, r) {
                var e;
                if (typeof t == "string") {
                  var o = Qt.lookupPath(t, { follow: !r });
                  e = o.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new Qt.ErrnoError(63);
                e.node_ops.setattr(e, {
                  mode: (n & 4095) | (e.mode & -4096),
                  timestamp: Date.now(),
                });
              },
              lchmod: function (t, n) {
                Qt.chmod(t, n, !0);
              },
              fchmod: function (t, n) {
                var e = Qt.getStreamChecked(t);
                Qt.chmod(e.node, n);
              },
              chown: function (t, n, r, o) {
                var e;
                if (typeof t == "string") {
                  var a = Qt.lookupPath(t, { follow: !o });
                  e = a.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new Qt.ErrnoError(63);
                e.node_ops.setattr(e, { timestamp: Date.now() });
              },
              lchown: function (t, n, r) {
                Qt.chown(t, n, r, !0);
              },
              fchown: function (t, n, r) {
                var e = Qt.getStreamChecked(t);
                Qt.chown(e.node, n, r);
              },
              truncate: function (t, n) {
                if (n < 0) throw new Qt.ErrnoError(28);
                var e;
                if (typeof t == "string") {
                  var r = Qt.lookupPath(t, { follow: !0 });
                  e = r.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new Qt.ErrnoError(63);
                if (Qt.isDir(e.mode)) throw new Qt.ErrnoError(31);
                if (!Qt.isFile(e.mode)) throw new Qt.ErrnoError(28);
                var o = Qt.nodePermissions(e, "w");
                if (o) throw new Qt.ErrnoError(o);
                e.node_ops.setattr(e, { size: n, timestamp: Date.now() });
              },
              ftruncate: function (t, n) {
                var e = Qt.getStreamChecked(t);
                if ((e.flags & 2097155) === 0) throw new Qt.ErrnoError(28);
                Qt.truncate(e.node, n);
              },
              utime: function (t, n, r) {
                var e = Qt.lookupPath(t, { follow: !0 }),
                  o = e.node;
                o.node_ops.setattr(o, { timestamp: Math.max(n, r) });
              },
              open: function (t, n, r) {
                if (t === "") throw new Qt.ErrnoError(44);
                ((n = typeof n == "string" ? Ut(n) : n),
                  (r = typeof r == "undefined" ? 438 : r),
                  n & 64 ? (r = (r & 4095) | 32768) : (r = 0));
                var e;
                if (typeof t == "object") e = t;
                else {
                  t = Rt.normalize(t);
                  try {
                    var o = Qt.lookupPath(t, { follow: !(n & 131072) });
                    e = o.node;
                  } catch (e) {}
                }
                var a = !1;
                if (n & 64)
                  if (e) {
                    if (n & 128) throw new Qt.ErrnoError(20);
                  } else ((e = Qt.mknod(t, r, 0)), (a = !0));
                if (!e) throw new Qt.ErrnoError(44);
                if (
                  (Qt.isChrdev(e.mode) && (n &= -513),
                  n & 65536 && !Qt.isDir(e.mode))
                )
                  throw new Qt.ErrnoError(54);
                if (!a) {
                  var i = Qt.mayOpen(e, n);
                  if (i) throw new Qt.ErrnoError(i);
                }
                (n & 512 && !a && Qt.truncate(e, 0), (n &= -131713));
                var l = Qt.createStream({
                  node: e,
                  path: Qt.getPath(e),
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
                    (Qt.readFiles || (Qt.readFiles = {}),
                    t in Qt.readFiles || (Qt.readFiles[t] = 1)),
                  l
                );
              },
              close: function (t) {
                if (Qt.isClosed(t)) throw new Qt.ErrnoError(8);
                t.getdents && (t.getdents = null);
                try {
                  t.stream_ops.close && t.stream_ops.close(t);
                } catch (e) {
                  throw e;
                } finally {
                  Qt.closeStream(t.fd);
                }
                t.fd = null;
              },
              isClosed: function (t) {
                return t.fd === null;
              },
              llseek: function (t, n, r) {
                if (Qt.isClosed(t)) throw new Qt.ErrnoError(8);
                if (!t.seekable || !t.stream_ops.llseek)
                  throw new Qt.ErrnoError(70);
                if (r != 0 && r != 1 && r != 2) throw new Qt.ErrnoError(28);
                return (
                  (t.position = t.stream_ops.llseek(t, n, r)),
                  (t.ungotten = []),
                  t.position
                );
              },
              read: function (t, n, r, o, a) {
                if ((G(r >= 0), o < 0 || a < 0)) throw new Qt.ErrnoError(28);
                if (Qt.isClosed(t)) throw new Qt.ErrnoError(8);
                if ((t.flags & 2097155) === 1) throw new Qt.ErrnoError(8);
                if (Qt.isDir(t.node.mode)) throw new Qt.ErrnoError(31);
                if (!t.stream_ops.read) throw new Qt.ErrnoError(28);
                var e = typeof a != "undefined";
                if (!e) a = t.position;
                else if (!t.seekable) throw new Qt.ErrnoError(70);
                var i = t.stream_ops.read(t, n, r, o, a);
                return (e || (t.position += i), i);
              },
              write: function (t, n, r, o, a, i) {
                if ((G(r >= 0), o < 0 || a < 0)) throw new Qt.ErrnoError(28);
                if (Qt.isClosed(t)) throw new Qt.ErrnoError(8);
                if ((t.flags & 2097155) === 0) throw new Qt.ErrnoError(8);
                if (Qt.isDir(t.node.mode)) throw new Qt.ErrnoError(31);
                if (!t.stream_ops.write) throw new Qt.ErrnoError(28);
                t.seekable && t.flags & 1024 && Qt.llseek(t, 0, 2);
                var e = typeof a != "undefined";
                if (!e) a = t.position;
                else if (!t.seekable) throw new Qt.ErrnoError(70);
                var l = t.stream_ops.write(t, n, r, o, a, i);
                return (e || (t.position += l), l);
              },
              allocate: function (t, n, r) {
                if (Qt.isClosed(t)) throw new Qt.ErrnoError(8);
                if (n < 0 || r <= 0) throw new Qt.ErrnoError(28);
                if ((t.flags & 2097155) === 0) throw new Qt.ErrnoError(8);
                if (!Qt.isFile(t.node.mode) && !Qt.isDir(t.node.mode))
                  throw new Qt.ErrnoError(43);
                if (!t.stream_ops.allocate) throw new Qt.ErrnoError(138);
                t.stream_ops.allocate(t, n, r);
              },
              mmap: function (t, n, r, o, a) {
                if ((o & 2) !== 0 && (a & 2) === 0 && (t.flags & 2097155) !== 2)
                  throw new Qt.ErrnoError(2);
                if ((t.flags & 2097155) === 1) throw new Qt.ErrnoError(2);
                if (!t.stream_ops.mmap) throw new Qt.ErrnoError(43);
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
                if (!t.stream_ops.ioctl) throw new Qt.ErrnoError(59);
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
                  r = Qt.open(t, n.flags),
                  o = Qt.stat(t),
                  a = o.size,
                  i = new Uint8Array(a);
                return (
                  Qt.read(r, i, 0, a, 0),
                  n.encoding === "utf8"
                    ? (e = Tt(i, 0))
                    : n.encoding === "binary" && (e = i),
                  Qt.close(r),
                  e
                );
              },
              writeFile: function (t, n, r) {
                (r === void 0 && (r = {}), (r.flags = r.flags || 577));
                var e = Qt.open(t, r.flags, r.mode);
                if (typeof n == "string") {
                  var o = new Uint8Array(xt(n) + 1),
                    a = $t(n, o, 0, o.length);
                  Qt.write(e, o, 0, a, void 0, r.canOwn);
                } else if (ArrayBuffer.isView(n))
                  Qt.write(e, n, 0, n.byteLength, void 0, r.canOwn);
                else throw new Error("Unsupported data type");
                Qt.close(e);
              },
              cwd: function () {
                return Qt.currentPath;
              },
              chdir: function (t) {
                var e = Qt.lookupPath(t, { follow: !0 });
                if (e.node === null) throw new Qt.ErrnoError(44);
                if (!Qt.isDir(e.node.mode)) throw new Qt.ErrnoError(54);
                var n = Qt.nodePermissions(e.node, "x");
                if (n) throw new Qt.ErrnoError(n);
                Qt.currentPath = e.path;
              },
              createDefaultDirectories: function () {
                (Qt.mkdir("/tmp"),
                  Qt.mkdir("/home"),
                  Qt.mkdir("/home/web_user"));
              },
              createDefaultDevices: function () {
                (Qt.mkdir("/dev"),
                  Qt.registerDevice(Qt.makedev(1, 3), {
                    read: function () {
                      return 0;
                    },
                    write: function (t, n, r, o, a) {
                      return o;
                    },
                  }),
                  Qt.mkdev("/dev/null", Qt.makedev(1, 3)),
                  Mt.register(Qt.makedev(5, 0), Mt.default_tty_ops),
                  Mt.register(Qt.makedev(6, 0), Mt.default_tty1_ops),
                  Qt.mkdev("/dev/tty", Qt.makedev(5, 0)),
                  Qt.mkdev("/dev/tty1", Qt.makedev(6, 0)));
                var e = new Uint8Array(1024),
                  t = 0,
                  n = function () {
                    return (t === 0 && (t = Et(e).byteLength), e[--t]);
                  };
                (Qt.createDevice("/dev", "random", n),
                  Qt.createDevice("/dev", "urandom", n),
                  Qt.mkdir("/dev/shm"),
                  Qt.mkdir("/dev/shm/tmp"));
              },
              createSpecialDirectories: function () {
                Qt.mkdir("/proc");
                var e = Qt.mkdir("/proc/self");
                (Qt.mkdir("/proc/self/fd"),
                  Qt.mount(
                    {
                      mount: function () {
                        var t = Qt.createNode(e, "fd", 16895, 73);
                        return (
                          (t.node_ops = {
                            lookup: function (t, n) {
                              var e = +n,
                                r = Qt.getStreamChecked(e),
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
                  ? Qt.createDevice("/dev", "stdin", y.stdin)
                  : Qt.symlink("/dev/tty", "/dev/stdin"),
                  y.stdout
                    ? Qt.createDevice("/dev", "stdout", null, y.stdout)
                    : Qt.symlink("/dev/tty", "/dev/stdout"),
                  y.stderr
                    ? Qt.createDevice("/dev", "stderr", null, y.stderr)
                    : Qt.symlink("/dev/tty1", "/dev/stderr"));
                var e = Qt.open("/dev/stdin", 0),
                  t = Qt.open("/dev/stdout", 1),
                  n = Qt.open("/dev/stderr", 1);
                (G(e.fd === 0, "invalid handle for stdin (" + e.fd + ")"),
                  G(t.fd === 1, "invalid handle for stdout (" + t.fd + ")"),
                  G(n.fd === 2, "invalid handle for stderr (" + n.fd + ")"));
              },
              ensureErrnoError: function () {
                Qt.ErrnoError ||
                  ((Qt.ErrnoError = function (t, n) {
                    ((this.name = "ErrnoError"),
                      (this.node = n),
                      (this.setErrno = function (e) {
                        this.errno = e;
                        for (var t in zt)
                          if (zt[t] === e) {
                            this.code = t;
                            break;
                          }
                      }),
                      this.setErrno(t),
                      (this.message = Gt[t]),
                      this.stack &&
                        (Object.defineProperty(this, "stack", {
                          value: new Error().stack,
                          writable: !0,
                        }),
                        (this.stack = Kt(this.stack))));
                  }),
                  (Qt.ErrnoError.prototype = new Error()),
                  (Qt.ErrnoError.prototype.constructor = Qt.ErrnoError),
                  [44].forEach(function (e) {
                    ((Qt.genericErrors[e] = new Qt.ErrnoError(e)),
                      (Qt.genericErrors[e].stack =
                        "<generic error, no stack>"));
                  }));
              },
              staticInit: function () {
                (Qt.ensureErrnoError(),
                  (Qt.nameTable = new Array(4096)),
                  Qt.mount(Ft, {}, "/"),
                  Qt.createDefaultDirectories(),
                  Qt.createDefaultDevices(),
                  Qt.createSpecialDirectories(),
                  (Qt.filesystems = { MEMFS: Ft, IDBFS: Ht }));
              },
              init: function (t, n, r) {
                (G(
                  !Qt.init.initialized,
                  "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)",
                ),
                  (Qt.init.initialized = !0),
                  Qt.ensureErrnoError(),
                  (y.stdin = t || y.stdin),
                  (y.stdout = n || y.stdout),
                  (y.stderr = r || y.stderr),
                  Qt.createStandardStreams());
              },
              quit: function () {
                ((Qt.init.initialized = !1), Mi(0));
                for (var e = 0; e < Qt.streams.length; e++) {
                  var t = Qt.streams[e];
                  t && Qt.close(t);
                }
              },
              findObject: function (t, n) {
                var e = Qt.analyzePath(t, n);
                return e.exists ? e.object : null;
              },
              analyzePath: function (t, n) {
                try {
                  var e = Qt.lookupPath(t, { follow: !n });
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
                  var e = Qt.lookupPath(t, { parent: !0 });
                  ((r.parentExists = !0),
                    (r.parentPath = e.path),
                    (r.parentObject = e.node),
                    (r.name = Rt.basename(t)),
                    (e = Qt.lookupPath(t, { follow: !n })),
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
                t = typeof t == "string" ? t : Qt.getPath(t);
                for (var e = n.split("/").reverse(); e.length; ) {
                  var a = e.pop();
                  if (a) {
                    var i = Rt.join2(t, a);
                    try {
                      Qt.mkdir(i);
                    } catch (e) {}
                    t = i;
                  }
                }
                return i;
              },
              createFile: function (t, n, r, o, a) {
                var e = Rt.join2(typeof t == "string" ? t : Qt.getPath(t), n),
                  i = Vt(o, a);
                return Qt.create(e, i);
              },
              createDataFile: function (t, n, r, o, a, i) {
                var e = n;
                t &&
                  ((t = typeof t == "string" ? t : Qt.getPath(t)),
                  (e = n ? Rt.join2(t, n) : t));
                var l = Vt(o, a),
                  s = Qt.create(e, l);
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
                  Qt.chmod(s, l | 146);
                  var m = Qt.open(s, 577);
                  (Qt.write(m, r, 0, r.length, 0, i),
                    Qt.close(m),
                    Qt.chmod(s, l));
                }
                return s;
              },
              createDevice: function (t, n, r, o) {
                var e = Rt.join2(typeof t == "string" ? t : Qt.getPath(t), n),
                  a = Vt(!!r, !!o);
                Qt.createDevice.major || (Qt.createDevice.major = 64);
                var i = Qt.makedev(Qt.createDevice.major++, 0);
                return (
                  Qt.registerDevice(i, {
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
                          throw new Qt.ErrnoError(29);
                        }
                        if (s === void 0 && e === 0) throw new Qt.ErrnoError(6);
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
                          throw new Qt.ErrnoError(29);
                        }
                      return (a && (t.node.timestamp = Date.now()), e);
                    },
                  }),
                  Qt.mkdev(e, a, i)
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
                    ((t.contents = Pt(P(t.url), !0)),
                      (t.usedBytes = t.contents.length));
                  } catch (e) {
                    throw new Qt.ErrnoError(29);
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
                          : Pt(e.responseText || "", !0);
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
                var u = Qt.createFile(t, n, s, o, a);
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
                    return (Qt.forceLoadFile(u), t.apply(null, arguments));
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
                    return (Qt.forceLoadFile(u), m(e, t, n, r, o));
                  }),
                  (c.mmap = function (e, t, n, r, o) {
                    Qt.forceLoadFile(u);
                    var a = At(t);
                    if (!a) throw new Qt.ErrnoError(48);
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
            Xt = function (t, n) {
              return (G(typeof t == "number"), t ? Tt(d(), t, n) : "");
            },
            Yt = {
              DEFAULT_POLLMASK: 5,
              calculateAt: function (t, n, r) {
                if (Rt.isAbs(n)) return n;
                var e;
                if (t === -100) e = Qt.cwd();
                else {
                  var o = Yt.getStreamFromFD(t);
                  e = o.path;
                }
                if (n.length == 0) {
                  if (!r) throw new Qt.ErrnoError(44);
                  return e;
                }
                return Rt.join2(e, n);
              },
              doStat: function (t, n, r) {
                try {
                  var e = t(n);
                } catch (e) {
                  if (
                    e &&
                    e.node &&
                    Rt.normalize(n) !== Rt.normalize(Qt.getPath(e.node))
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
                if (!Qt.isFile(n.node.mode)) throw new Qt.ErrnoError(43);
                if (o & 2) return 0;
                var e = d().slice(t, t + r);
                Qt.msync(n, e, a, r, o);
              },
              varargs: void 0,
              get: function () {
                (G(Yt.varargs != null), (Yt.varargs += 4));
                var e = _()[(Yt.varargs - 4) >> 2];
                return e;
              },
              getStr: function (t) {
                var e = Xt(t);
                return e;
              },
              getStreamFromFD: function (t) {
                var e = Qt.getStreamChecked(t);
                return e;
              },
            };
          function Jt(e) {
            if (D) return Fa(1, 1, e);
            ((H = e),
              me() ||
                (rn.terminateAllThreads(), y.onExit && y.onExit(e), (V = !0)),
              L(e, new gt(e)));
          }
          var Zt = function (t, n) {
              if (((H = t), nc(), D)) throw (G(!n), ln(t), "unwind");
              if (me() && !n) {
                var e =
                  "program exited (with status: " +
                  t +
                  "), but keepRuntimeAlive() is set (counter=" +
                  de +
                  ") due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)";
                (b(e), F(e));
              }
              Jt(t);
            },
            en = Zt,
            tn = function (t) {
              return (
                G(typeof t == "number"),
                (t >>>= 0),
                "0x" + t.toString(16).padStart(8, "0")
              );
            },
            nn = function (t) {
              if (t instanceof gt || t == "unwind") return H;
              (ie(),
                t instanceof WebAssembly.RuntimeError &&
                  pl() <= 0 &&
                  F(
                    "Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 1048576)",
                  ),
                L(1, t));
            },
            rn = {
              unusedWorkers: [],
              runningWorkers: [],
              tlsInitFunctions: [],
              pthreads: {},
              nextWorkerID: 1,
              debugInit: function () {
                function e() {
                  var e = 0;
                  return (
                    ce && typeof Ai != "undefined" && (e = Ai()),
                    "w:" + (y.workerID || 0) + ",t:" + tn(e) + ": "
                  );
                }
                var t = ze;
                ze = function (r) {
                  return t(e() + r);
                };
              },
              init: function () {
                (rn.debugInit(), D ? rn.initWorker() : rn.initMainThread());
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
                  rn.allocateUnusedWorker();
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
                            for (var s of rn.unusedWorkers)
                              s.loaded ? i.push(s) : l.push(s);
                            for (var s of l)
                              try {
                                ht(s);
                              } catch (e) {
                                F(
                                  "voip: ThreadPoolManager: failed to terminate timed-out pthread worker " +
                                    s.workerID +
                                    ": " +
                                    e,
                                );
                              }
                            ((n = l.length),
                              (rn.unusedWorkers = i),
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
                                    rn.unusedWorkers.length,
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
                  rn.loadWasmModuleToAllWorkers(function () {
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
                for (var e of rn.runningWorkers) ht(e);
                for (var e of rn.unusedWorkers) ht(e);
                ((rn.unusedWorkers = []),
                  (rn.runningWorkers = []),
                  (rn.pthreads = []));
              },
              returnWorkerToPool: function (t) {
                var e = t.pthread_ptr;
                (delete rn.pthreads[e],
                  rn.unusedWorkers.push(t),
                  rn.runningWorkers.splice(rn.runningWorkers.indexOf(t), 1),
                  (t.pthread_ptr = 0),
                  nl(e));
              },
              receiveObjectTransfer: function (t) {},
              threadInitTLS: function () {
                rn.tlsInitFunctions.forEach(function (e) {
                  return e();
                });
              },
              loadWasmModuleToWorker: function (o) {
                return new (u || (u = n("Promise")))(function (n) {
                  (o.addMessageListener("cmd", function (e) {
                    var t = e,
                      r = t.cmd;
                    if (t.targetThread && t.targetThread != Ai()) {
                      var a = rn.pthreads[t.targetThread];
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
                      ? Xo()
                      : r === "spawnThread"
                        ? St(t)
                        : r === "cleanupThread"
                          ? bt(t.thread)
                          : r === "killThread"
                            ? yt(t.thread)
                            : r === "cancelThread"
                              ? Ct(t.thread)
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
                            "Pthread " + tn(o.pthread_ptr) + " sent an error!"),
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
                  ((o.workerID = rn.nextWorkerID++),
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
                  rn.unusedWorkers.map(rn.loadWasmModuleToWorker),
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
                  rn.unusedWorkers.push(e));
              },
              getNewWorker: function () {
                return (
                  rn.unusedWorkers.length == 0 &&
                    (F(
                      "Tried to spawn a new thread, but the thread pool is exhausted.\nThis might result in a deadlock unless some threads eventually exit or the code explicitly breaks out to the event loop.\nIf you want to increase the pool size, use setting `-sPTHREAD_POOL_SIZE=...`.\nIf you want to throw an explicit error instead of the risk of deadlocking in those cases, use setting `-sPTHREAD_POOL_SIZE_STRICT=2`.",
                    ),
                    rn.allocateUnusedWorker(),
                    rn.loadWasmModuleToWorker(rn.unusedWorkers[0])),
                  rn.unusedWorkers.pop()
                );
              },
            };
          y.PThread = rn;
          var on = function (t) {
            for (; t.length > 0; ) t.shift()(y);
          };
          function an() {
            var e = Ai(),
              t = _()[(e + 52) >> 2],
              n = _()[(e + 56) >> 2],
              r = t - n;
            (G(t != 0),
              G(r != 0),
              G(t > r, "stackHigh must be higher then stackLow"),
              sl(t, r),
              dl(t),
              ae());
          }
          y.establishStackSpace = an;
          function ln(e) {
            if (D) return Fa(2, 0, e);
            en(e);
          }
          var sn = function (t) {
              var e = cl(),
                n = t();
              return (dl(e), n);
            },
            un = function (t) {
              return sn(function () {
                var e = ml(4),
                  n = ml(4);
                _l(t, e, n);
                var r = f()[e >> 2],
                  o = f()[n >> 2],
                  a = Xt(r);
                Pi(r);
                var i;
                return (o && ((i = Xt(o)), Pi(o)), [a, i]);
              });
            };
          function cn(e) {
            return un(e);
          }
          y.getExceptionMessage = cn;
          var dn = function (t) {
            return oe.get(t);
          };
          function mn(e, t) {
            var n = dn(e)(t);
            ie();
            function r(e) {
              me() ? rn.setExitStatus(e) : rl(e);
            }
            r(n);
          }
          y.invokeEntryPoint = mn;
          function pn(e) {
            rn.tlsInitFunctions.push(e);
          }
          var _n = function (t) {
              (_n.shown || (_n.shown = {}),
                _n.shown[t] || ((_n.shown[t] = 1), F(t)));
            },
            fn = function (t, n, r, o) {
              ke(
                "Assertion failed: " +
                  Xt(t) +
                  ", at: " +
                  [
                    n ? Xt(n) : "unknown filename",
                    r,
                    o ? Xt(o) : "unknown function",
                  ],
              );
            },
            gn = [],
            hn = 0;
          function yn(e) {
            var t = new Sn(e);
            return (
              t.get_caught() || (t.set_caught(!0), hn--),
              t.set_rethrown(!1),
              gn.push(t),
              Ui(t.excPtr),
              t.get_exception_ptr()
            );
          }
          function Cn() {
            if (!gn.length) return 0;
            var e = gn[gn.length - 1];
            return (Ui(e.excPtr), e.excPtr);
          }
          var bn = 0;
          function vn() {
            (al(0, 0), G(gn.length > 0));
            var e = gn.pop();
            (Vi(e.excPtr), (bn = 0));
          }
          function Sn(e) {
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
                var e = gl(this.get_type());
                if (e) return f()[this.excPtr >> 2];
                var t = this.get_adjusted_ptr();
                return t !== 0 ? t : this.excPtr;
              }));
          }
          function Rn(e) {
            throw (bn || (bn = new Ne(e)), bn);
          }
          var Ln = function (t) {
              var e = bn && bn.excPtr;
              if (!e) return (il(0), 0);
              var n = new Sn(e);
              n.set_adjusted_ptr(e);
              var r = n.get_type();
              if (!r) return (il(0), e);
              for (var o in t) {
                var a = t[o];
                if (a === 0 || a === r) break;
                var i = n.ptr + 16;
                if (fl(a, r, i)) return (il(a), e);
              }
              return (il(r), e);
            },
            En = function () {
              return Ln([]);
            },
            kn = function (t) {
              return Ln([t]);
            },
            In = function (t, n) {
              return Ln([t, n]);
            };
          function Tn(e) {
            var t = new Sn(e).get_exception_ptr();
            return t;
          }
          function Dn() {
            var e = gn.pop();
            e || ke("no exception to throw");
            var t = e.excPtr;
            throw (
              e.get_rethrown() ||
                (gn.push(e), e.set_rethrown(!0), e.set_caught(!1), hn++),
              (bn = new Ne(t)),
              bn
            );
          }
          function xn(e) {
            if (e) {
              var t = new Sn(e);
              (gn.push(t), t.set_rethrown(!0), Dn());
            }
          }
          function $n(e, t, n) {
            var r = new Sn(e);
            throw (r.init(t, n), (bn = new Ne(e)), hn++, bn);
          }
          function Pn() {
            return hn;
          }
          function Nn(e) {
            (Ki(e, !k, 1, !E, 1048576, !1), rn.threadInitTLS());
          }
          function Mn(e) {
            D
              ? postMessage({ cmd: "cleanupThread", thread: e, type: "cmd" })
              : bt(e);
          }
          function wn(e, t, n, r) {
            return D ? Fa(3, 1, e, t, n, r) : An(e, t, n, r);
          }
          function An(e, t, n, r) {
            if (typeof SharedArrayBuffer == "undefined")
              return (
                F(
                  "Current environment does not support SharedArrayBuffer, pthreads are not available!",
                ),
                6
              );
            var o = [],
              a = 0;
            if (D && (o.length === 0 || a)) return wn(e, t, n, r);
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
              : St(i);
          }
          function Fn(e) {
            if (D) return Fa(4, 1, e);
            try {
              return ((e = Yt.getStr(e)), Qt.chdir(e), 0);
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var On = function (t) {
            return ((_()[wi() >> 2] = t), t);
          };
          function Bn(e, t, n) {
            if (D) return Fa(5, 1, e, t, n);
            Yt.varargs = n;
            try {
              var r = Yt.getStreamFromFD(e);
              switch (t) {
                case 0: {
                  var o = Yt.get();
                  if (o < 0) return -28;
                  var a;
                  return ((a = Qt.createStream(r, o)), a.fd);
                }
                case 1:
                case 2:
                  return 0;
                case 3:
                  return r.flags;
                case 4: {
                  var o = Yt.get();
                  return ((r.flags |= o), 0);
                }
                case 5: {
                  var o = Yt.get(),
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
                  return (On(28), -1);
                default:
                  return -28;
              }
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Wn(e, t) {
            if (D) return Fa(6, 1, e, t);
            try {
              var n = Yt.getStreamFromFD(e);
              return Yt.doStat(Qt.stat, n.path, t);
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var qn = 9007199254740992,
            Un = -9007199254740992;
          function Vn(e) {
            return e < Un || e > qn ? NaN : Number(e);
          }
          function Hn(e, t) {
            if (D) return Fa(7, 1, e, t);
            t = Vn(t);
            try {
              return isNaN(t) ? 61 : (Qt.ftruncate(e, t), 0);
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var Gn = function (t, n, r) {
            return (
              G(
                typeof r == "number",
                "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
              ),
              $t(t, d(), n, r)
            );
          };
          function zn(e, t, n) {
            if (D) return Fa(8, 1, e, t, n);
            try {
              var r = Yt.getStreamFromFD(e);
              r.getdents || (r.getdents = Qt.readdir(r.path));
              for (
                var o = 280,
                  a = 0,
                  i = Qt.llseek(r, 0, 1),
                  s = Math.floor(i / o);
                s < r.getdents.length && a + o <= n;
              ) {
                var u,
                  c,
                  d = r.getdents[s];
                if (d === ".") ((u = r.node.id), (c = 4));
                else if (d === "..") {
                  var p = Qt.lookupPath(r.path, { parent: !0 });
                  ((u = p.node.id), (c = 4));
                } else {
                  var _ = Qt.lookupNode(r.node, d);
                  ((u = _.id),
                    (c = Qt.isChrdev(_.mode)
                      ? 2
                      : Qt.isDir(_.mode)
                        ? 4
                        : Qt.isLink(_.mode)
                          ? 10
                          : 8));
                }
                (G(u),
                  (Z[(t + a) >> 3] = BigInt(u)),
                  (Z[(t + a + 8) >> 3] = BigInt((s + 1) * o)),
                  (m()[(t + a + 16) >> 1] = 280),
                  (l()[(t + a + 18) >> 0] = c),
                  Gn(d, t + a + 19, 256),
                  (a += o),
                  (s += 1));
              }
              return (Qt.llseek(r, s * o, 0), a);
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function jn(e, t, n) {
            if (D) return Fa(9, 1, e, t, n);
            Yt.varargs = n;
            try {
              var r = Yt.getStreamFromFD(e);
              switch (t) {
                case 21509:
                  return r.tty ? 0 : -59;
                case 21505: {
                  if (!r.tty) return -59;
                  if (r.tty.ops.ioctl_tcgets) {
                    var o = r.tty.ops.ioctl_tcgets(r),
                      a = Yt.get();
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
                      var a = Yt.get(),
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
                  var a = Yt.get();
                  return ((_()[a >> 2] = 0), 0);
                }
                case 21520:
                  return r.tty ? -28 : -59;
                case 21531: {
                  var a = Yt.get();
                  return Qt.ioctl(r, t, a);
                }
                case 21523: {
                  if (!r.tty) return -59;
                  if (r.tty.ops.ioctl_tiocgwinsz) {
                    var f = r.tty.ops.ioctl_tiocgwinsz(r.tty),
                      a = Yt.get();
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
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Kn(e, t) {
            if (D) return Fa(10, 1, e, t);
            try {
              return ((e = Yt.getStr(e)), Yt.doStat(Qt.lstat, e, t));
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Qn(e, t, n) {
            if (D) return Fa(11, 1, e, t, n);
            try {
              return (
                (t = Yt.getStr(t)),
                (t = Yt.calculateAt(e, t)),
                (t = Rt.normalize(t)),
                t[t.length - 1] === "/" && (t = t.substr(0, t.length - 1)),
                Qt.mkdir(t, n, 0),
                0
              );
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Xn(e, t, n, r) {
            if (D) return Fa(12, 1, e, t, n, r);
            try {
              t = Yt.getStr(t);
              var o = r & 256,
                a = r & 4096;
              return (
                (r = r & -6401),
                G(!r, "unknown flags in __syscall_newfstatat: " + r),
                (t = Yt.calculateAt(e, t, a)),
                Yt.doStat(o ? Qt.lstat : Qt.stat, t, n)
              );
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Yn(e, t, n, r) {
            if (D) return Fa(13, 1, e, t, n, r);
            Yt.varargs = r;
            try {
              ((t = Yt.getStr(t)), (t = Yt.calculateAt(e, t)));
              var o = r ? Yt.get() : 0;
              return Qt.open(t, n, o).fd;
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Jn(e, t) {
            if (D) return Fa(14, 1, e, t);
            try {
              return ((e = Yt.getStr(e)), Yt.doStat(Qt.stat, e, t));
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Zn(e, t, n) {
            if (D) return Fa(15, 1, e, t, n);
            try {
              return (
                (t = Yt.getStr(t)),
                (t = Yt.calculateAt(e, t)),
                n === 0
                  ? Qt.unlink(t)
                  : n === 512
                    ? Qt.rmdir(t)
                    : ke("Invalid flags passed to unlinkat"),
                0
              );
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function er(e) {
            if (e === null) return "null";
            var t = typeof e;
            return t === "object" || t === "array" || t === "function"
              ? e.toString()
              : "" + e;
          }
          function tr() {
            for (var e = new Array(256), t = 0; t < 256; ++t)
              e[t] = String.fromCharCode(t);
            nr = e;
          }
          var nr = void 0;
          function rr(e) {
            for (var t = "", n = e; d()[n]; ) t += nr[d()[n++]];
            return t;
          }
          var or = {},
            ar = {},
            ir = {},
            lr = void 0;
          function sr(e) {
            throw new lr(e);
          }
          var ur = void 0;
          function cr(e) {
            throw new ur(e);
          }
          function dr(e, t, n) {
            e.forEach(function (e) {
              ir[e] = t;
            });
            function r(t) {
              var r = n(t);
              r.length !== e.length && cr("Mismatched type converter count");
              for (var o = 0; o < e.length; ++o) pr(e[o], r[o]);
            }
            var o = new Array(t.length),
              a = [],
              i = 0;
            (t.forEach(function (e, t) {
              Object.prototype.hasOwnProperty.call(ar, e)
                ? (o[t] = ar[e])
                : (a.push(e),
                  Object.prototype.hasOwnProperty.call(or, e) || (or[e] = []),
                  or[e].push(function () {
                    ((o[t] = ar[e]), ++i, i === a.length && r(o));
                  }));
            }),
              a.length === 0 && r(o));
          }
          function mr(e, t, n) {
            n === void 0 && (n = {});
            var r = t.name;
            if (
              (e ||
                sr(
                  'type "' +
                    r +
                    '" must have a positive integer typeid pointer',
                ),
              Object.prototype.hasOwnProperty.call(ar, e))
            ) {
              if (n.ignoreDuplicateRegistrations) return;
              sr("Cannot register type '" + r + "' twice");
            }
            if (
              ((ar[e] = t),
              delete ir[e],
              Object.prototype.hasOwnProperty.call(or, e))
            ) {
              var o = or[e];
              (delete or[e],
                o.forEach(function (e) {
                  return e();
                }));
            }
          }
          function pr(e, t, n) {
            if ((n === void 0 && (n = {}), !("argPackAdvance" in t)))
              throw new TypeError(
                "registerType registeredInstance requires argPackAdvance",
              );
            return mr(e, t, n);
          }
          function _r(e, t, n) {
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
          function fr(e, t, n, r, o) {
            t = rr(t);
            var a = gr(n),
              i = t.indexOf("u") != -1;
            (i && (o = (BigInt(1) << BigInt(64)) - BigInt(1)),
              pr(e, {
                name: t,
                fromWireType: function (t) {
                  return t;
                },
                toWireType: function (n, a) {
                  if (typeof a != "bigint" && typeof a != "number")
                    throw new TypeError(
                      'Cannot convert "' + er(a) + '" to ' + this.name,
                    );
                  if (a < r || a > o)
                    throw new TypeError(
                      'Passing a number "' +
                        er(a) +
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
                readValueFromPointer: _r(t, a, !i),
                destructorFunction: null,
              }));
          }
          function gr(e) {
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
          function hr(e, t, n, r, o) {
            var a = gr(n);
            ((t = rr(t)),
              pr(e, {
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
          function yr(e) {
            if (!(this instanceof Gr) || !(e instanceof Gr)) return !1;
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
          function Cr(e) {
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
          function br(e) {
            function t(e) {
              return e.$$.ptrType.registeredClass.name;
            }
            sr(t(e) + " instance already deleted");
          }
          var vr = !1;
          function Sr(e) {}
          function Rr(e) {
            e.smartPtr
              ? e.smartPtrType.rawDestructor(e.smartPtr)
              : e.ptrType.registeredClass.rawDestructor(e.ptr);
          }
          function Lr(e) {
            e.count.value -= 1;
            var t = e.count.value === 0;
            t && Rr(e);
          }
          function Er(e, t, n) {
            if (t === n) return e;
            if (n.baseClass === void 0) return null;
            var r = Er(e, t, n.baseClass);
            return r === null ? null : n.downcast(r);
          }
          var kr = {};
          function Ir() {
            return Object.keys(Mr).length;
          }
          function Tr() {
            var e = [];
            for (var t in Mr)
              Object.prototype.hasOwnProperty.call(Mr, t) && e.push(Mr[t]);
            return e;
          }
          var Dr = [];
          function xr() {
            for (; Dr.length; ) {
              var e = Dr.pop();
              ((e.$$.deleteScheduled = !1), e.delete());
            }
          }
          var $r = void 0;
          function Pr(e) {
            (($r = e), Dr.length && $r && $r(xr));
          }
          function Nr() {
            ((y.getInheritedInstanceCount = Ir),
              (y.getLiveInheritedInstances = Tr),
              (y.flushPendingDeletes = xr),
              (y.setDelayFunction = Pr));
          }
          var Mr = {};
          function wr(e, t) {
            for (
              t === void 0 && sr("ptr should not be undefined");
              e.baseClass;
            )
              ((t = e.upcast(t)), (e = e.baseClass));
            return t;
          }
          function Ar(e, t) {
            return ((t = wr(e, t)), Mr[t]);
          }
          function Fr(e, t) {
            (!t.ptrType || !t.ptr) &&
              cr("makeClassHandle requires ptr and ptrType");
            var n = !!t.smartPtrType,
              r = !!t.smartPtr;
            return (
              n !== r && cr("Both smartPtrType and smartPtr must be specified"),
              (t.count = { value: 1 }),
              Br(Object.create(e, { $$: { value: t } }))
            );
          }
          function Or(e) {
            var t = this.getPointee(e);
            if (!t) return (this.destructor(e), null);
            var n = Ar(this.registeredClass, t);
            if (n !== void 0) {
              if (n.$$.count.value === 0)
                return ((n.$$.ptr = t), (n.$$.smartPtr = e), n.clone());
              var r = n.clone();
              return (this.destructor(e), r);
            }
            function o() {
              return this.isSmartPointer
                ? Fr(this.registeredClass.instancePrototype, {
                    ptrType: this.pointeeType,
                    ptr: t,
                    smartPtrType: this,
                    smartPtr: e,
                  })
                : Fr(this.registeredClass.instancePrototype, {
                    ptrType: this,
                    ptr: e,
                  });
            }
            var a = this.registeredClass.getActualType(t),
              i = kr[a];
            if (!i) return o.call(this);
            var l;
            this.isConst ? (l = i.constPointerType) : (l = i.pointerType);
            var s = Er(t, this.registeredClass, l.registeredClass);
            return s === null
              ? o.call(this)
              : this.isSmartPointer
                ? Fr(l.registeredClass.instancePrototype, {
                    ptrType: l,
                    ptr: s,
                    smartPtrType: this,
                    smartPtr: e,
                  })
                : Fr(l.registeredClass.instancePrototype, {
                    ptrType: l,
                    ptr: s,
                  });
          }
          var Br = function (t) {
            return typeof FinalizationRegistry == "undefined"
              ? ((Br = function (t) {
                  return t;
                }),
                t)
              : ((vr = new FinalizationRegistry(function (e) {
                  (e.leakWarning.stack.replace(/^Error: /, ""), Lr(e.$$));
                })),
                (Br = function (t) {
                  var e = t.$$,
                    n = !!e.smartPtr;
                  if (n) {
                    var r = { $$: e },
                      o = e.ptrType.registeredClass;
                    ((r.leakWarning = new Error(
                      "Embind found a leaked C++ instance " +
                        o.name +
                        " <" +
                        tn(e.ptr) +
                        ">.\nWe'll free it automatically in this case, but this functionality is not reliable across various environments.\nMake sure to invoke .delete() manually once you're done with the instance instead.\nOriginally allocated",
                    )),
                      "captureStackTrace" in Error &&
                        Error.captureStackTrace(r.leakWarning, Or),
                      vr.register(t, r, t));
                  }
                  return t;
                }),
                (Sr = function (t) {
                  return vr.unregister(t);
                }),
                Br(t));
          };
          function Wr() {
            if ((this.$$.ptr || br(this), this.$$.preservePointerOnDelete))
              return ((this.$$.count.value += 1), this);
            var e = Br(
              Object.create(Object.getPrototypeOf(this), {
                $$: { value: Cr(this.$$) },
              }),
            );
            return ((e.$$.count.value += 1), (e.$$.deleteScheduled = !1), e);
          }
          function qr() {
            (this.$$.ptr || br(this),
              this.$$.deleteScheduled &&
                !this.$$.preservePointerOnDelete &&
                sr("Object already scheduled for deletion"),
              Sr(this),
              Lr(this.$$),
              this.$$.preservePointerOnDelete ||
                ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0)));
          }
          function Ur() {
            return !this.$$.ptr;
          }
          function Vr() {
            return (
              this.$$.ptr || br(this),
              this.$$.deleteScheduled &&
                !this.$$.preservePointerOnDelete &&
                sr("Object already scheduled for deletion"),
              Dr.push(this),
              Dr.length === 1 && $r && $r(xr),
              (this.$$.deleteScheduled = !0),
              this
            );
          }
          function Hr() {
            ((Gr.prototype.isAliasOf = yr),
              (Gr.prototype.clone = Wr),
              (Gr.prototype.delete = qr),
              (Gr.prototype.isDeleted = Ur),
              (Gr.prototype.deleteLater = Vr));
          }
          function Gr() {}
          var zr = 48,
            jr = 57;
          function Kr(e) {
            if (e === void 0) return "_unknown";
            e = e.replace(/[^a-zA-Z0-9_]/g, "$");
            var t = e.charCodeAt(0);
            return t >= zr && t <= jr ? "_" + e : e;
          }
          function Qr(e, t) {
            var n;
            return (
              (e = Kr(e)),
              ((n = {}),
              (n[e] = function () {
                return t.apply(this, arguments);
              }),
              n)[e]
            );
          }
          function Xr(e, t, n) {
            if (e[t].overloadTable === void 0) {
              var r = e[t];
              ((e[t] = function () {
                return (
                  Object.prototype.hasOwnProperty.call(
                    e[t].overloadTable,
                    arguments.length,
                  ) ||
                    sr(
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
          function Yr(e, t, n) {
            Object.prototype.hasOwnProperty.call(y, e)
              ? ((n === void 0 ||
                  (y[e].overloadTable !== void 0 &&
                    y[e].overloadTable[n] !== void 0)) &&
                  sr("Cannot register public name '" + e + "' twice"),
                Xr(y, e, e),
                Object.prototype.hasOwnProperty.call(y, n) &&
                  sr(
                    "Cannot register multiple overloads of a function with the same number of arguments (" +
                      n +
                      ")!",
                  ),
                (y[e].overloadTable[n] = t))
              : ((y[e] = t), n !== void 0 && (y[e].numArguments = n));
          }
          function Jr(e, t, n, r, o, a, i, l) {
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
          function Zr(e, t, n) {
            for (; t !== n; )
              (t.upcast ||
                sr(
                  "Expected null or instance of " +
                    n.name +
                    ", got an instance of " +
                    t.name,
                ),
                (e = t.upcast(e)),
                (t = t.baseClass));
            return e;
          }
          function eo(e, t) {
            if (t === null)
              return (
                this.isReference && sr("null is not a valid " + this.name),
                0
              );
            (t.$$ || sr('Cannot pass "' + er(t) + '" as a ' + this.name),
              t.$$.ptr ||
                sr(
                  "Cannot pass deleted object as a pointer of type " +
                    this.name,
                ));
            var n = t.$$.ptrType.registeredClass,
              r = Zr(t.$$.ptr, n, this.registeredClass);
            return r;
          }
          function to(e, t) {
            var n;
            if (t === null)
              return (
                this.isReference && sr("null is not a valid " + this.name),
                this.isSmartPointer
                  ? ((n = this.rawConstructor()),
                    e !== null && e.push(this.rawDestructor, n),
                    n)
                  : 0
              );
            (t.$$ || sr('Cannot pass "' + er(t) + '" as a ' + this.name),
              t.$$.ptr ||
                sr(
                  "Cannot pass deleted object as a pointer of type " +
                    this.name,
                ),
              !this.isConst &&
                t.$$.ptrType.isConst &&
                sr(
                  "Cannot convert argument of type " +
                    (t.$$.smartPtrType
                      ? t.$$.smartPtrType.name
                      : t.$$.ptrType.name) +
                    " to parameter type " +
                    this.name,
                ));
            var r = t.$$.ptrType.registeredClass;
            if (
              ((n = Zr(t.$$.ptr, r, this.registeredClass)), this.isSmartPointer)
            )
              switch (
                (t.$$.smartPtr === void 0 &&
                  sr("Passing raw pointer to smart pointer is illegal"),
                this.sharingPolicy)
              ) {
                case 0:
                  t.$$.smartPtrType === this
                    ? (n = t.$$.smartPtr)
                    : sr(
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
                      To.toHandle(function () {
                        o.delete();
                      }),
                    )),
                      e !== null && e.push(this.rawDestructor, n));
                  }
                  break;
                default:
                  sr("Unsupporting sharing policy");
              }
            return n;
          }
          function no(e, t) {
            if (t === null)
              return (
                this.isReference && sr("null is not a valid " + this.name),
                0
              );
            (t.$$ || sr('Cannot pass "' + er(t) + '" as a ' + this.name),
              t.$$.ptr ||
                sr(
                  "Cannot pass deleted object as a pointer of type " +
                    this.name,
                ),
              t.$$.ptrType.isConst &&
                sr(
                  "Cannot convert argument of type " +
                    t.$$.ptrType.name +
                    " to parameter type " +
                    this.name,
                ));
            var n = t.$$.ptrType.registeredClass,
              r = Zr(t.$$.ptr, n, this.registeredClass);
            return r;
          }
          function ro(e) {
            return this.fromWireType(_()[e >> 2]);
          }
          function oo(e) {
            return (this.rawGetPointee && (e = this.rawGetPointee(e)), e);
          }
          function ao(e) {
            this.rawDestructor && this.rawDestructor(e);
          }
          function io(e) {
            e !== null && e.delete();
          }
          function lo() {
            ((so.prototype.getPointee = oo),
              (so.prototype.destructor = ao),
              (so.prototype.argPackAdvance = 8),
              (so.prototype.readValueFromPointer = ro),
              (so.prototype.deleteObject = io),
              (so.prototype.fromWireType = Or));
          }
          function so(e, t, n, r, o, a, i, l, s, u, c) {
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
                  ? ((this.toWireType = eo), (this.destructorFunction = null))
                  : ((this.toWireType = no), (this.destructorFunction = null))
                : (this.toWireType = to));
          }
          function uo(e, t, n) {
            (Object.prototype.hasOwnProperty.call(y, e) ||
              cr("Replacing nonexistant public symbol"),
              y[e].overloadTable !== void 0 && n !== void 0
                ? (y[e].overloadTable[n] = t)
                : ((y[e] = t), (y[e].argCount = n)));
          }
          function co(e, t) {
            e = rr(e);
            function n() {
              return dn(t);
            }
            var r = n();
            return (
              typeof r != "function" &&
                sr("unknown function pointer with signature " + e + ": " + t),
              r
            );
          }
          function mo(e, t) {
            var n = Qr(t, function (e) {
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
          var po = void 0;
          function _o(e) {
            var t = zi(e),
              n = rr(t);
            return (Pi(t), n);
          }
          function fo(e, t) {
            var n = [],
              r = {};
            function o(e) {
              if (!r[e] && !ar[e]) {
                if (ir[e]) {
                  ir[e].forEach(o);
                  return;
                }
                (n.push(e), (r[e] = !0));
              }
            }
            throw (t.forEach(o), new po(e + ": " + n.map(_o).join([", "])));
          }
          function go(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            ((c = rr(c)),
              (a = co(o, a)),
              l && (l = co(i, l)),
              u && (u = co(s, u)),
              (m = co(d, m)));
            var p = Kr(c);
            (Yr(p, function () {
              fo("Cannot construct " + c + " due to unbound types", [r]);
            }),
              dr([e, t, n], r ? [r] : [], function (t) {
                t = t[0];
                var n, o;
                r
                  ? ((n = t.registeredClass), (o = n.instancePrototype))
                  : (o = Gr.prototype);
                var i = Qr(p, function () {
                    if (Object.getPrototypeOf(this) !== s)
                      throw new lr("Use 'new' to construct " + c);
                    if (d.constructor_body === void 0)
                      throw new lr(c + " has no accessible constructor");
                    var e = d.constructor_body[arguments.length];
                    if (e === void 0)
                      throw new lr(
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
                var d = new Jr(c, i, s, m, n, a, l, u);
                d.baseClass &&
                  (d.baseClass.__derivedClasses === void 0 &&
                    (d.baseClass.__derivedClasses = []),
                  d.baseClass.__derivedClasses.push(d));
                var _ = new so(c, d, !0, !1, !1),
                  f = new so(c + "*", d, !1, !1, !1),
                  g = new so(c + " const*", d, !1, !0, !1);
                return (
                  (kr[e] = { pointerType: f, constPointerType: g }),
                  uo(p, i),
                  [_, f, g]
                );
              }));
          }
          function ho(e, t) {
            for (var n = [], r = 0; r < e; r++) n.push(f()[(t + r * 4) >> 2]);
            return n;
          }
          function yo(e) {
            for (; e.length; ) {
              var t = e.pop(),
                n = e.pop();
              n(t);
            }
          }
          function Co(e, t, n, r, o, a) {
            var i = t.length;
            (i < 2 &&
              sr(
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
                sr(
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
                if (s) yo(_);
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
          function bo(e, t, n, r, o, a) {
            G(t > 0);
            var i = ho(t, n);
            ((o = co(r, o)),
              dr([], [e], function (e) {
                e = e[0];
                var n = "constructor " + e.name;
                if (
                  (e.registeredClass.constructor_body === void 0 &&
                    (e.registeredClass.constructor_body = []),
                  e.registeredClass.constructor_body[t - 1] !== void 0)
                )
                  throw new lr(
                    "Cannot register multiple constructors with identical number of parameters (" +
                      (t - 1) +
                      ") for class '" +
                      e.name +
                      "'! Overload resolution is currently only performed using the parameter count, not actual type info!",
                  );
                return (
                  (e.registeredClass.constructor_body[t - 1] = function () {
                    fo(
                      "Cannot construct " + e.name + " due to unbound types",
                      i,
                    );
                  }),
                  dr([], i, function (r) {
                    return (
                      r.splice(1, 0, null),
                      (e.registeredClass.constructor_body[t - 1] = Co(
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
          function vo(e, t, n, r, o, a, i, l, s) {
            var u = ho(n, r);
            ((t = rr(t)),
              (a = co(o, a)),
              dr([], [e], function (e) {
                e = e[0];
                var r = e.name + "." + t;
                (t.startsWith("@@") && (t = Symbol[t.substring(2)]),
                  l && e.registeredClass.pureVirtualFunctions.push(t));
                function o() {
                  fo("Cannot call " + r + " due to unbound types", u);
                }
                var c = e.registeredClass.instancePrototype,
                  d = c[t];
                return (
                  d === void 0 ||
                  (d.overloadTable === void 0 &&
                    d.className !== e.name &&
                    d.argCount === n - 2)
                    ? ((o.argCount = n - 2), (o.className = e.name), (c[t] = o))
                    : (Xr(c, t, r), (c[t].overloadTable[n - 2] = o)),
                  dr([], u, function (o) {
                    var l = Co(r, o, e, a, i, s);
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
          function So() {
            Object.assign(Ro.prototype, {
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
          function Ro() {
            ((this.allocated = [void 0]), (this.freelist = []));
          }
          var Lo = new Ro();
          function Eo(e) {
            e >= Lo.reserved && --Lo.get(e).refcount === 0 && Lo.free(e);
          }
          function ko() {
            for (var e = 0, t = Lo.reserved; t < Lo.allocated.length; ++t)
              Lo.allocated[t] !== void 0 && ++e;
            return e;
          }
          function Io() {
            (Lo.allocated.push(
              { value: void 0 },
              { value: null },
              { value: !0 },
              { value: !1 },
            ),
              (Lo.reserved = Lo.allocated.length),
              (y.count_emval_handles = ko));
          }
          var To = {
            toValue: function (t) {
              return (
                t || sr("Cannot use deleted val. handle = " + t),
                Lo.get(t).value
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
                  return Lo.allocate({ refcount: 1, value: t });
              }
            },
          };
          function Do(e, t) {
            ((t = rr(t)),
              pr(e, {
                name: t,
                fromWireType: function (t) {
                  var e = To.toValue(t);
                  return (Eo(t), e);
                },
                toWireType: function (t, n) {
                  return To.toHandle(n);
                },
                argPackAdvance: 8,
                readValueFromPointer: ro,
                destructorFunction: null,
              }));
          }
          function xo(e, t) {
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
          function $o(e, t, n) {
            var r = gr(n);
            ((t = rr(t)),
              pr(e, {
                name: t,
                fromWireType: function (t) {
                  return t;
                },
                toWireType: function (t, n) {
                  if (typeof n != "number" && typeof n != "boolean")
                    throw new TypeError(
                      "Cannot convert " + er(n) + " to " + this.name,
                    );
                  return n;
                },
                argPackAdvance: 8,
                readValueFromPointer: xo(t, r),
                destructorFunction: null,
                jsType: "number",
              }));
          }
          function Po(e, t, n, r, o, a, i) {
            var l = ho(t, n);
            ((e = rr(e)),
              (o = co(r, o)),
              Yr(
                e,
                function () {
                  fo("Cannot call " + e + " due to unbound types", l);
                },
                t - 1,
              ),
              dr([], l, function (n) {
                var r = [n[0], null].concat(n.slice(1));
                return (
                  uo(e, Co(e, r, null, o, a, i), t - 1),
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
          function No(e, t, n, r, o) {
            ((t = rr(t)), o === -1 && (o = 4294967295));
            var a = gr(n),
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
                  throw new TypeError('Cannot convert "' + er(n) + '" to ' + a);
                if (n < r || n > o)
                  throw new TypeError(
                    'Passing a number "' +
                      er(n) +
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
              pr(e, {
                name: t,
                fromWireType: i,
                toWireType: c,
                argPackAdvance: 8,
                readValueFromPointer: _r(t, a, r !== 0),
                destructorFunction: null,
                jsType: "number",
              }));
          }
          function Mo(e, t, n) {
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
            ((n = rr(n)),
              pr(
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
          function wo(e, t) {
            t = rr(t);
            var n = t === "std::string";
            pr(e, {
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
                        u = Xt(a, s);
                      (o === void 0 ? (o = u) : ((o += "\0"), (o += u)),
                        (a = l + 1));
                    }
                  }
                else {
                  for (var c = new Array(e), i = 0; i < e; ++i)
                    c[i] = String.fromCharCode(d()[r + i]);
                  o = c.join("");
                }
                return (Pi(t), o);
              },
              toWireType: function (t, r) {
                r instanceof ArrayBuffer && (r = new Uint8Array(r));
                var e,
                  o = typeof r == "string";
                (o ||
                  r instanceof Uint8Array ||
                  r instanceof Uint8ClampedArray ||
                  r instanceof Int8Array ||
                  sr("Cannot pass non-string to std::string"),
                  n && o ? (e = xt(r)) : (e = r.length));
                var a = $i(4 + e + 1),
                  i = a + 4;
                if (((f()[a >> 2] = e), n && o)) Gn(r, i, e + 1);
                else if (o)
                  for (var l = 0; l < e; ++l) {
                    var s = r.charCodeAt(l);
                    (s > 255 &&
                      (Pi(i),
                      sr(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      )),
                      (d()[i + l] = s));
                  }
                else for (var l = 0; l < e; ++l) d()[i + l] = r[l];
                return (t !== null && t.push(Pi, a), a);
              },
              argPackAdvance: 8,
              readValueFromPointer: ro,
              destructorFunction: function (t) {
                Pi(t);
              },
              jsType: "string",
            });
          }
          var Ao =
              typeof TextDecoder != "undefined"
                ? new TextDecoder("utf-16le")
                : void 0,
            Fo = function (t, n) {
              G(
                t % 2 == 0,
                "Pointer passed to UTF16ToString must be aligned to two bytes!",
              );
              for (var e = t, r = e >> 1, o = r + n / 2; !(r >= o) && p()[r]; )
                ++r;
              if (((e = r << 1), e - t > 32 && Ao))
                return Ao.decode(d().slice(t, e));
              for (var a = "", i = 0; !(i >= n / 2); ++i) {
                var l = m()[(t + i * 2) >> 1];
                if (l == 0) break;
                a += String.fromCharCode(l);
              }
              return a;
            },
            Oo = function (t, n, r) {
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
            Bo = function (t) {
              return t.length * 2;
            },
            Wo = function (t, n) {
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
            qo = function (t, n, r) {
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
            Uo = function (t) {
              for (var e = 0, n = 0; n < t.length; ++n) {
                var r = t.charCodeAt(n);
                (r >= 55296 && r <= 57343 && ++n, (e += 4));
              }
              return e;
            },
            Vo = function (t, n, r) {
              r = rr(r);
              var e, o, a, i, l;
              (n === 2
                ? ((e = Fo),
                  (o = Oo),
                  (i = Bo),
                  (a = function () {
                    return p();
                  }),
                  (l = 1))
                : n === 4 &&
                  ((e = Wo),
                  (o = qo),
                  (i = Uo),
                  (a = function () {
                    return f();
                  }),
                  (l = 2)),
                pr(t, {
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
                    return (Pi(r), i);
                  },
                  toWireType: function (t, a) {
                    typeof a != "string" &&
                      sr("Cannot pass non-string to C++ string type " + r);
                    var e = i(a),
                      s = $i(4 + e + n);
                    return (
                      (f()[s >> 2] = e >> l),
                      o(a, s + 4, e + n),
                      t !== null && t.push(Pi, s),
                      s
                    );
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: ro,
                  destructorFunction: function (t) {
                    Pi(t);
                  },
                }));
            };
          function Ho(e, t) {
            ((t = rr(t)),
              pr(e, {
                isVoid: !0,
                name: t,
                argPackAdvance: 0,
                fromWireType: function () {},
                toWireType: function (t, n) {},
                jsType: "void",
              }));
          }
          var Go = !0,
            zo = function () {
              return Go;
            },
            jo = function () {
              if (!me())
                try {
                  D ? rl(H) : en(H);
                } catch (e) {
                  nn(e);
                }
            },
            Ko = function (t) {
              if (V) {
                F(
                  "user callback triggered after runtime exited or application aborted.  Ignoring.",
                );
                return;
              }
              try {
                (t(), jo());
              } catch (e) {
                nn(e);
              }
            };
          function Qo(e) {
            if (typeof Atomics.waitAsync == "function") {
              var t = Atomics.waitAsync(_(), e >> 2, e);
              (G(t.async), t.value.then(Xo));
              var n = e + 128;
              Atomics.store(_(), n >> 2, 1);
            }
          }
          y.__emscripten_thread_mailbox_await = Qo;
          var Xo = function () {
            var e = Ai();
            e &&
              (Qo(e),
              Ko(function () {
                return ol();
              }));
          };
          y.checkMailbox = Xo;
          var Yo = function (t, n, r) {
            if (t == n)
              setTimeout(function () {
                return Xo();
              });
            else if (D)
              postMessage({
                targetThread: t,
                cmd: "checkMailbox",
                type: "cmd",
              });
            else {
              var e = rn.pthreads[t];
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
          function Jo(e, t, n) {
            return (
              F(
                "emscripten_set_offscreencanvas_size: Build with -sOFFSCREENCANVAS_SUPPORT=1 to enable transferring canvases to pthreads.",
              ),
              -1
            );
          }
          function Zo(e) {}
          var ea = function () {
            throw new Pe();
          };
          function ta(e) {
            e > 4 && (Lo.get(e).refcount += 1);
          }
          function na(e, t) {
            var n = ar[e];
            return (n === void 0 && sr(t + " has unknown type " + _o(e)), n);
          }
          function ra(e, t) {
            e = na(e, "_emval_take_value");
            var n = e.readValueFromPointer(t);
            return To.toHandle(n);
          }
          function oa(e, t) {
            ((e = Vn(e)), (t = Vn(t)));
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
          var aa = function (t) {
              return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
            },
            ia = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
            la = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            sa = function (t) {
              var e = aa(t.getFullYear()),
                n = e ? ia : la,
                r = n[t.getMonth()] + t.getDate() - 1;
              return r;
            };
          function ua(e, t) {
            ((e = Vn(e)), (t = Vn(t)));
            var n = new Date(e * 1e3);
            ((_()[t >> 2] = n.getSeconds()),
              (_()[(t + 4) >> 2] = n.getMinutes()),
              (_()[(t + 8) >> 2] = n.getHours()),
              (_()[(t + 12) >> 2] = n.getDate()),
              (_()[(t + 16) >> 2] = n.getMonth()),
              (_()[(t + 20) >> 2] = n.getFullYear() - 1900),
              (_()[(t + 24) >> 2] = n.getDay()));
            var r = sa(n) | 0;
            ((_()[(t + 28) >> 2] = r),
              (_()[(t + 36) >> 2] = -(n.getTimezoneOffset() * 60)));
            var o = new Date(n.getFullYear(), 0, 1),
              a = new Date(n.getFullYear(), 6, 1).getTimezoneOffset(),
              i = o.getTimezoneOffset(),
              l = (a != i && n.getTimezoneOffset() == Math.min(i, a)) | 0;
            _()[(t + 32) >> 2] = l;
          }
          var ca = function (t) {
            t = Vn(t);
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
              var c = sa(e) | 0;
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
          function da(e, t, n, r, o, a, i) {
            if (D) return Fa(16, 1, e, t, n, r, o, a, i);
            ((e = Vn(e)), (o = Vn(o)), (a = Vn(a)), (i = Vn(i)));
            try {
              if (isNaN(o)) return 61;
              var l = Yt.getStreamFromFD(r),
                s = Qt.mmap(l, e, o, t, n),
                u = s.ptr;
              return ((_()[a >> 2] = s.allocated), (f()[i >> 2] = u), 0);
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function ma(e, t, n, r, o, a) {
            if (D) return Fa(17, 1, e, t, n, r, o, a);
            ((e = Vn(e)), (t = Vn(t)), (a = Vn(a)));
            try {
              return isNaN(a)
                ? 61
                : (Yt.doMsync(e, Yt.getStreamFromFD(o), t, r, a), 0);
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function pa(e, t, n, r, o, a) {
            if (D) return Fa(18, 1, e, t, n, r, o, a);
            ((e = Vn(e)), (t = Vn(t)), (a = Vn(a)));
            try {
              if (isNaN(a)) return 61;
              var i = Yt.getStreamFromFD(o);
              (n & 2 && Yt.doMsync(e, i, t, r, a), Qt.munmap(i));
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var _a = function (t) {
              var e = xt(t) + 1,
                n = $i(e);
              return (n && Gn(t, n, e), n);
            },
            fa = function (t, n, r) {
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
                m = _a(c),
                p = _a(d);
              l < i
                ? ((f()[r >> 2] = m), (f()[(r + 4) >> 2] = p))
                : ((f()[r >> 2] = p), (f()[(r + 4) >> 2] = m));
            },
            ga = function () {
              ke("native code called abort()");
            },
            ha = [],
            ya = function (t, n) {
              (G(Array.isArray(ha)), G(n % 16 == 0), (ha.length = 0));
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
                  ha.push(e == 105 ? _()[n] : (e == 106 ? Z : h())[n++ >> 1]),
                  ++n);
              }
              return ha;
            },
            Ca = function (t, n, r) {
              var e = ya(n, r);
              return (
                Object.prototype.hasOwnProperty.call(je, t) ||
                  ke("No EM_ASM constant found at address " + t),
                je[t].apply(null, e)
              );
            },
            ba = function (t, n, r) {
              return Ca(t, n, r);
            },
            va = function (t, n, r) {
              return Ca(t, n, r);
            },
            Sa = function () {
              de += 1;
            },
            Ra = function () {
              (G(de > 0), (de -= 1));
            },
            La = function (t, n) {
              return (
                Sa(),
                setTimeout(function () {
                  (Ra(), Ko(t));
                }, n)
              );
            };
          function Ea(e, t) {
            if (
              ((Ta.mainLoop.timingMode = e),
              (Ta.mainLoop.timingValue = t),
              !Ta.mainLoop.func)
            )
              return (
                F(
                  "emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.",
                ),
                1
              );
            if (
              (Ta.mainLoop.running || (Sa(), (Ta.mainLoop.running = !0)),
              e == 0)
            )
              ((Ta.mainLoop.scheduler = function () {
                var e = Math.max(0, Ta.mainLoop.tickStartTime + t - ka()) | 0;
                setTimeout(Ta.mainLoop.runner, e);
              }),
                (Ta.mainLoop.method = "timeout"));
            else if (e == 1)
              ((Ta.mainLoop.scheduler = function () {
                Ta.requestAnimationFrame(Ta.mainLoop.runner);
              }),
                (Ta.mainLoop.method = "rAF"));
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
              ((Ta.mainLoop.scheduler = function () {
                setImmediate(Ta.mainLoop.runner);
              }),
                (Ta.mainLoop.method = "immediate"));
            }
            return 0;
          }
          var ka;
          ka = function () {
            return performance.timeOrigin + performance.now();
          };
          function Ia(e, t, n, r, o) {
            (G(
              !Ta.mainLoop.func,
              "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.",
            ),
              (Ta.mainLoop.func = e),
              (Ta.mainLoop.arg = r));
            var a = Ta.mainLoop.currentlyRunningMainloop;
            function i() {
              return a < Ta.mainLoop.currentlyRunningMainloop ? (Ra(), !1) : !0;
            }
            if (
              ((Ta.mainLoop.running = !1),
              (Ta.mainLoop.runner = function () {
                if (!V) {
                  if (Ta.mainLoop.queue.length > 0) {
                    var t = Date.now(),
                      n = Ta.mainLoop.queue.shift();
                    if ((n.func(n.arg), Ta.mainLoop.remainingBlockers)) {
                      var r = Ta.mainLoop.remainingBlockers,
                        o = r % 1 == 0 ? r - 1 : Math.floor(r);
                      n.counted
                        ? (Ta.mainLoop.remainingBlockers = o)
                        : ((o = o + 0.5),
                          (Ta.mainLoop.remainingBlockers = (8 * r + o) / 9));
                    }
                    if (
                      (A(
                        'main loop blocker "' +
                          n.name +
                          '" took ' +
                          (Date.now() - t) +
                          " ms",
                      ),
                      Ta.mainLoop.updateStatus(),
                      !i())
                    )
                      return;
                    setTimeout(Ta.mainLoop.runner, 0);
                    return;
                  }
                  if (i()) {
                    if (
                      ((Ta.mainLoop.currentFrameNumber =
                        (Ta.mainLoop.currentFrameNumber + 1) | 0),
                      Ta.mainLoop.timingMode == 1 &&
                        Ta.mainLoop.timingValue > 1 &&
                        Ta.mainLoop.currentFrameNumber %
                          Ta.mainLoop.timingValue !=
                          0)
                    ) {
                      Ta.mainLoop.scheduler();
                      return;
                    } else
                      Ta.mainLoop.timingMode == 0 &&
                        (Ta.mainLoop.tickStartTime = ka());
                    (Ta.mainLoop.method === "timeout" &&
                      y.ctx &&
                      (_n(
                        "Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!",
                      ),
                      (Ta.mainLoop.method = "")),
                      Ta.mainLoop.runIter(e),
                      ie(),
                      i() &&
                        (typeof SDL == "object" &&
                          SDL.audio &&
                          SDL.audio.queueNewAudioData &&
                          SDL.audio.queueNewAudioData(),
                        Ta.mainLoop.scheduler()));
                  }
                }
              }),
              o ||
                (t && t > 0 ? Ea(0, 1e3 / t) : Ea(1, 1),
                Ta.mainLoop.scheduler()),
              n)
            )
              throw "unwind";
          }
          var Ta = {
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
                ((Ta.mainLoop.scheduler = null),
                  Ta.mainLoop.currentlyRunningMainloop++);
              },
              resume: function () {
                Ta.mainLoop.currentlyRunningMainloop++;
                var e = Ta.mainLoop.timingMode,
                  t = Ta.mainLoop.timingValue,
                  n = Ta.mainLoop.func;
                ((Ta.mainLoop.func = null),
                  Ia(n, 0, !1, Ta.mainLoop.arg, !0),
                  Ea(e, t),
                  Ta.mainLoop.scheduler());
              },
              updateStatus: function () {
                if (y.setStatus) {
                  var e = y.statusMessage || "Please wait...",
                    t = Ta.mainLoop.remainingBlockers,
                    n = Ta.mainLoop.expectedBlockers;
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
                  (Ko(t), y.postMainLoop && y.postMainLoop());
                }
              },
            },
            isFullscreen: !1,
            pointerLock: !1,
            moduleContextCreatedCallbacks: [],
            workers: [],
            init: function () {
              if (Ta.initted) return;
              Ta.initted = !0;
              var e = {};
              ((e.canHandle = function (t) {
                return !y.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(t);
              }),
                (e.handle = function (t, n, r, o) {
                  var e = new Blob([t], { type: Ta.getMimetype(n) });
                  e.size !== t.length &&
                    (e = new Blob([new Uint8Array(t).buffer], {
                      type: Ta.getMimetype(n),
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
                      (Ri[n] = e),
                      URL.revokeObjectURL(a),
                      r && r(t));
                  }),
                    (i.onerror = function (e) {
                      (A("Image " + a + " could not be decoded"), o && o());
                    }),
                    (i.src = a));
                }),
                Bt.push(e));
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
                    e || ((e = !0), (Li[n] = o), r && r(t));
                  }
                  var i = new Blob([t], { type: Ta.getMimetype(n) }),
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
                    La(function () {
                      a(s);
                    }, 1e4));
                }),
                Bt.push(t));
              function n() {
                Ta.pointerLock =
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
                      !Ta.pointerLock &&
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
                    Ta.moduleContextCreatedCallbacks.forEach(function (e) {
                      return e();
                    }),
                    Ta.init()),
                  e)
                : null;
            },
            destroyContext: function (t, n, r) {},
            fullscreenHandlersInstalled: !1,
            lockPointer: void 0,
            resizeCanvas: void 0,
            requestFullscreen: function (t, n) {
              ((Ta.lockPointer = t),
                (Ta.resizeCanvas = n),
                typeof Ta.lockPointer == "undefined" && (Ta.lockPointer = !0),
                typeof Ta.resizeCanvas == "undefined" &&
                  (Ta.resizeCanvas = !1));
              var e = y.canvas;
              function r() {
                Ta.isFullscreen = !1;
                var t = e.parentNode;
                ((document.fullscreenElement ||
                  document.mozFullScreenElement ||
                  document.msFullscreenElement ||
                  document.webkitFullscreenElement ||
                  document.webkitCurrentFullScreenElement) === t
                  ? ((e.exitFullscreen = Ta.exitFullscreen),
                    Ta.lockPointer && e.requestPointerLock(),
                    (Ta.isFullscreen = !0),
                    Ta.resizeCanvas
                      ? Ta.setFullscreenCanvasSize()
                      : Ta.updateCanvasDimensions(e))
                  : (t.parentNode.insertBefore(e, t),
                    t.parentNode.removeChild(t),
                    Ta.resizeCanvas
                      ? Ta.setWindowedCanvasSize()
                      : Ta.updateCanvasDimensions(e)),
                  y.onFullScreen && y.onFullScreen(Ta.isFullscreen),
                  y.onFullscreen && y.onFullscreen(Ta.isFullscreen));
              }
              Ta.fullscreenHandlersInstalled ||
                ((Ta.fullscreenHandlersInstalled = !0),
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
              if (!Ta.isFullscreen) return !1;
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
              if (Ta.nextRAF === 0) Ta.nextRAF = e + 1e3 / 60;
              else for (; e + 2 >= Ta.nextRAF; ) Ta.nextRAF += 1e3 / 60;
              var n = Math.max(Ta.nextRAF - e, 0);
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
              var t = Ta.fakeRequestAnimationFrame;
              t(e);
            }),
            safeSetTimeout: function (t, n) {
              return La(t, n);
            },
            safeRequestAnimationFrame: function (t) {
              return (
                Sa(),
                Ta.requestAnimationFrame(function () {
                  (Ra(), Ko(t));
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
              if (Ta.pointerLock)
                (t.type != "mousemove" && "mozMovementX" in t
                  ? (Ta.mouseMovementX = Ta.mouseMovementY = 0)
                  : ((Ta.mouseMovementX = Ta.getMovementX(t)),
                    (Ta.mouseMovementY = Ta.getMovementY(t))),
                  typeof SDL != "undefined"
                    ? ((Ta.mouseX = SDL.mouseX + Ta.mouseMovementX),
                      (Ta.mouseY = SDL.mouseY + Ta.mouseMovementY))
                    : ((Ta.mouseX += Ta.mouseMovementX),
                      (Ta.mouseY += Ta.mouseMovementY)));
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
                    ((Ta.lastTouches[i.identifier] = u),
                      (Ta.touches[i.identifier] = u));
                  else if (t.type === "touchend" || t.type === "touchmove") {
                    var c = Ta.touches[i.identifier];
                    (c || (c = u),
                      (Ta.lastTouches[i.identifier] = c),
                      (Ta.touches[i.identifier] = u));
                  }
                  return;
                }
                var d = t.pageX - (o + e.left),
                  m = t.pageY - (a + e.top);
                ((d = d * (n / e.width)),
                  (m = m * (r / e.height)),
                  (Ta.mouseMovementX = d - Ta.mouseX),
                  (Ta.mouseMovementY = m - Ta.mouseY),
                  (Ta.mouseX = d),
                  (Ta.mouseY = m));
              }
            },
            resizeListeners: [],
            updateResizeListeners: function () {
              var e = y.canvas;
              Ta.resizeListeners.forEach(function (t) {
                return t(e.width, e.height);
              });
            },
            setCanvasSize: function (t, n, r) {
              var e = y.canvas;
              (Ta.updateCanvasDimensions(e, t, n),
                r || Ta.updateResizeListeners());
            },
            windowedWidth: 0,
            windowedHeight: 0,
            setFullscreenCanvasSize: function () {
              if (typeof SDL != "undefined") {
                var e = f()[SDL.screen >> 2];
                ((e = e | 8388608), (_()[SDL.screen >> 2] = e));
              }
              (Ta.updateCanvasDimensions(y.canvas), Ta.updateResizeListeners());
            },
            setWindowedCanvasSize: function () {
              if (typeof SDL != "undefined") {
                var e = f()[SDL.screen >> 2];
                ((e = e & -8388609), (_()[SDL.screen >> 2] = e));
              }
              (Ta.updateCanvasDimensions(y.canvas), Ta.updateResizeListeners());
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
              Ta.resizeCanvas
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
          function Da(e, t, n) {
            function r() {
              dn(e)(t);
            }
            n >= 0 ? La(r, n) : Ta.safeRequestAnimationFrame(r);
          }
          function xa() {
            k ||
              _n(
                "Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread",
              );
          }
          var $a = function (t) {
            (G(typeof t == "number"), Xt(t));
          };
          function Pa() {
            return Date.now();
          }
          var Na = function () {
              throw (Sa(), "unwind");
            },
            Ma = function () {
              return 2147483648;
            },
            wa = function () {
              return Ma();
            };
          function Aa() {
            return navigator.hardwareConcurrency;
          }
          function Fa(e, t) {
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
            return sn(function () {
              for (
                var o = n * 2, a = ml(o * 8), i = a >> 3, l = 0;
                l < n;
                l++
              ) {
                var s = r[2 + l];
                typeof s == "bigint"
                  ? ((Z[i + 2 * l] = BigInt(1)), (Z[i + 2 * l + 1] = s))
                  : ((Z[i + 2 * l] = BigInt(0)), (h()[i + 2 * l + 1] = s));
              }
              return Ji(e, o, a, t);
            });
          }
          var Oa = [];
          function Ba(e, t, n, r) {
            ((rn.currentProxiedOperationCallerThread = t),
              (n /= 2),
              (Oa.length = n));
            for (var o = r >> 3, a = 0; a < n; a++)
              Z[o + 2 * a]
                ? (Oa[a] = Z[o + 2 * a + 1])
                : (Oa[a] = h()[o + 2 * a + 1]);
            var i = e < 0,
              l = i ? je[-e - 1] : Ei[e];
            return (
              G(
                l.length == n,
                "Call args mismatch in emscripten_receive_on_main_thread_js",
              ),
              l.apply(null, Oa)
            );
          }
          var Wa = function (t) {
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
            qa = function (t) {
              var e = d().length;
              if (((t >>>= 0), t <= e)) return !1;
              var n = Ma();
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
                  l = Wa(i);
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
            Ua = Ra,
            Va = Sa,
            Ha = {},
            Ga = function () {
              return R || "./this.program";
            },
            za = function () {
              if (!za.strings) {
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
                    _: Ga(),
                  };
                for (var n in Ha)
                  Ha[n] === void 0 ? delete t[n] : (t[n] = Ha[n]);
                var r = [];
                for (var n in t) r.push(n + "=" + t[n]);
                za.strings = r;
              }
              return za.strings;
            },
            ja = function (t, n) {
              for (var e = 0; e < t.length; ++e)
                (G(t.charCodeAt(e) === (t.charCodeAt(e) & 255)),
                  (l()[n++ >> 0] = t.charCodeAt(e)));
              l()[n >> 0] = 0;
            };
          function Ka(e, t) {
            if (D) return Fa(19, 1, e, t);
            var n = 0;
            return (
              za().forEach(function (r, o) {
                var a = t + n;
                ((f()[(e + o * 4) >> 2] = a), ja(r, a), (n += r.length + 1));
              }),
              0
            );
          }
          function Qa(e, t) {
            if (D) return Fa(20, 1, e, t);
            var n = za();
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
          function Xa(e) {
            if (D) return Fa(21, 1, e);
            try {
              var t = Yt.getStreamFromFD(e);
              return (Qt.close(t), 0);
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var Ya = function (t, n, r, o) {
            for (var e = 0, a = 0; a < r; a++) {
              var i = f()[n >> 2],
                s = f()[(n + 4) >> 2];
              n += 8;
              var u = Qt.read(t, l(), i, s, o);
              if (u < 0) return -1;
              if (((e += u), u < s)) break;
              typeof o != "undefined" && (o += u);
            }
            return e;
          };
          function Ja(e, t, n, r, o) {
            if (D) return Fa(22, 1, e, t, n, r, o);
            ((t = Vn(t)), (n = Vn(n)), (r = Vn(r)), (o = Vn(o)));
            try {
              if (isNaN(r)) return 61;
              var a = Yt.getStreamFromFD(e),
                i = Ya(a, t, n, r);
              return ((f()[o >> 2] = i), 0);
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var Za = function (t, n, r, o) {
            for (var e = 0, a = 0; a < r; a++) {
              var i = f()[n >> 2],
                s = f()[(n + 4) >> 2];
              n += 8;
              var u = Qt.write(t, l(), i, s, o);
              if (u < 0) return -1;
              ((e += u), typeof o != "undefined" && (o += u));
            }
            return e;
          };
          function ei(e, t, n, r, o) {
            if (D) return Fa(23, 1, e, t, n, r, o);
            ((t = Vn(t)), (n = Vn(n)), (r = Vn(r)), (o = Vn(o)));
            try {
              if (isNaN(r)) return 61;
              var a = Yt.getStreamFromFD(e),
                i = Za(a, t, n, r);
              return ((f()[o >> 2] = i), 0);
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          function ti(e, t, n, r) {
            if (D) return Fa(24, 1, e, t, n, r);
            try {
              var o = Yt.getStreamFromFD(e),
                a = Ya(o, t, n);
              return ((f()[r >> 2] = a), 0);
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          function ni(e, t, n, r) {
            if (D) return Fa(25, 1, e, t, n, r);
            ((t = Vn(t)), (r = Vn(r)));
            try {
              if (isNaN(t)) return 61;
              var o = Yt.getStreamFromFD(e);
              return (
                Qt.llseek(o, t, n),
                (Z[r >> 3] = BigInt(o.position)),
                o.getdents && t === 0 && n === 0 && (o.getdents = null),
                0
              );
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          function ri(e) {
            if (D) return Fa(26, 1, e);
            try {
              var t = Yt.getStreamFromFD(e);
              return t.stream_ops && t.stream_ops.fsync
                ? t.stream_ops.fsync(t)
                : 0;
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          function oi(e, t, n, r) {
            if (D) return Fa(27, 1, e, t, n, r);
            try {
              var o = Yt.getStreamFromFD(e),
                a = Za(o, t, n);
              return ((f()[r >> 2] = a), 0);
            } catch (e) {
              if (typeof Qt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var ai = function (t, n) {
              return (Et(d().subarray(t, t + n)), 0);
            },
            ii = function (t) {
              for (var e = t.split("."), n = 0; n < 4; n++) {
                var r = Number(e[n]);
                if (isNaN(r)) return null;
                e[n] = r;
              }
              return (e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24)) >>> 0;
            },
            li = function (t) {
              return parseInt(t);
            },
            si = function (t) {
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
                        li(e[e.length - 4]) + li(e[e.length - 3]) * 256),
                      (e[e.length - 3] =
                        li(e[e.length - 2]) + li(e[e.length - 1]) * 256),
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
                  } else i[n + r] = Bi(parseInt(e[n], 16));
                else i[n + r] = e[n];
              return [
                (i[1] << 16) | i[0],
                (i[3] << 16) | i[2],
                (i[5] << 16) | i[4],
                (i[7] << 16) | i[6],
              ];
            },
            ui = {
              address_map: { id: 1, addrs: {}, names: {} },
              lookup_name: function (t) {
                var e = ii(t);
                if (e !== null || ((e = si(t)), e !== null)) return t;
                var n;
                if (ui.address_map.addrs[t]) n = ui.address_map.addrs[t];
                else {
                  var r = ui.address_map.id++;
                  (G(r < 65535, "exceeded max address mappings of 65535"),
                    (n = "172.29." + (r & 255) + "." + (r & 65280)),
                    (ui.address_map.names[n] = t),
                    (ui.address_map.addrs[t] = n));
                }
                return n;
              },
              lookup_addr: function (t) {
                return ui.address_map.names[t] ? ui.address_map.names[t] : null;
              },
            },
            ci = function (t) {
              var e = $i(20),
                n = _a(t);
              f()[e >> 2] = n;
              var r = $i(4);
              ((f()[r >> 2] = 0), (f()[(e + 4) >> 2] = r));
              var o = 2;
              ((_()[(e + 8) >> 2] = o), (_()[(e + 12) >> 2] = 4));
              var a = $i(12);
              return (
                (f()[a >> 2] = a + 8),
                (f()[(a + 4) >> 2] = 0),
                (_()[(a + 8) >> 2] = ii(ui.lookup_name(t))),
                (f()[(e + 16) >> 2] = a),
                e
              );
            };
          function di(e) {
            return D ? Fa(28, 1, e) : ci(Xt(e));
          }
          function mi(e) {
            return e;
          }
          var pi = function (t, n) {
              for (var e = 0, r = 0; r <= n; e += t[r++]);
              return e;
            },
            _i = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            fi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            gi = function (t, n) {
              for (var e = new Date(t.getTime()); n > 0; ) {
                var r = aa(e.getFullYear()),
                  o = e.getMonth(),
                  a = (r ? _i : fi)[o];
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
            hi = function (t, n) {
              (G(
                t.length >= 0,
                "writeArrayToMemory array must have a length (should be an array or typed array)",
              ),
                l().set(t, n));
            },
            yi = function (t, n, r, o) {
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
                  tm_zone: e ? Xt(e) : "",
                },
                i = Xt(r),
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
                var t = gi(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
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
                      pi(aa(t.tm_year + 1900) ? _i : fi, t.tm_mon - 1),
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
                      r != 4 && (r != 3 || !aa(t.tm_year)) && (e = 1);
                    }
                  } else {
                    e = 52;
                    var n = (t.tm_wday + 7 - t.tm_yday - 1) % 7;
                    (n == 4 || (n == 5 && aa((t.tm_year % 400) - 1))) && e++;
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
              var y = Pt(i, !1);
              return y.length > n ? 0 : (hi(y, t), y.length - 1);
            },
            Ci = function (t, n, r, o, a) {
              return yi(t, n, r, o);
            };
          rn.init();
          var bi = function (t, n, r, o) {
              (t || (t = this),
                (this.parent = t),
                (this.mount = t.mount),
                (this.mounted = null),
                (this.id = Qt.nextInode++),
                (this.name = n),
                (this.mode = r),
                (this.node_ops = {}),
                (this.stream_ops = {}),
                (this.rdev = o));
            },
            vi = 365,
            Si = 146;
          (Object.defineProperties(bi.prototype, {
            read: {
              get: function () {
                return (this.mode & vi) === vi;
              },
              set: function (t) {
                t ? (this.mode |= vi) : (this.mode &= ~vi);
              },
            },
            write: {
              get: function () {
                return (this.mode & Si) === Si;
              },
              set: function (t) {
                t ? (this.mode |= Si) : (this.mode &= ~Si);
              },
            },
            isFolder: {
              get: function () {
                return Qt.isDir(this.mode);
              },
            },
            isDevice: {
              get: function () {
                return Qt.isChrdev(this.mode);
              },
            },
          }),
            (Qt.FSNode = bi),
            (Qt.createPreloadedFile = qt),
            Qt.staticInit(),
            (zt = {
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
            tr(),
            (lr = y.BindingError =
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
            (ur = y.InternalError =
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
            Hr(),
            Nr(),
            lo(),
            (po = y.UnboundTypeError = mo(Error, "UnboundTypeError")),
            So(),
            Io(),
            (y.requestFullscreen = function (t, n) {
              Ta.requestFullscreen(t, n);
            }),
            (y.requestFullScreen = function () {
              Ta.requestFullScreen();
            }),
            (y.requestAnimationFrame = function (t) {
              Ta.requestAnimationFrame(t);
            }),
            (y.setCanvasSize = function (t, n, r) {
              Ta.setCanvasSize(t, n, r);
            }),
            (y.pauseMainLoop = function () {
              Ta.mainLoop.pause();
            }),
            (y.resumeMainLoop = function () {
              Ta.mainLoop.resume();
            }),
            (y.getUserMedia = function () {
              Ta.getUserMedia();
            }),
            (y.createContext = function (t, n, r, o) {
              return Ta.createContext(t, n, r, o);
            }));
          var Ri = {},
            Li = {},
            Ei = [
              null,
              Jt,
              ln,
              wn,
              Fn,
              Bn,
              Wn,
              Hn,
              zn,
              jn,
              Kn,
              Qn,
              Xn,
              Yn,
              Jn,
              Zn,
              da,
              ma,
              pa,
              Ka,
              Qa,
              Xa,
              Ja,
              ei,
              ti,
              ni,
              ri,
              oi,
              di,
            ];
          function ki() {
            qe("fetchSettings");
          }
          var Ii = {
              __assert_fail: fn,
              __cxa_begin_catch: yn,
              __cxa_current_primary_exception: Cn,
              __cxa_end_catch: vn,
              __cxa_find_matching_catch_2: En,
              __cxa_find_matching_catch_3: kn,
              __cxa_find_matching_catch_4: In,
              __cxa_get_exception_ptr: Tn,
              __cxa_rethrow: Dn,
              __cxa_rethrow_primary_exception: xn,
              __cxa_throw: $n,
              __cxa_uncaught_exceptions: Pn,
              __emscripten_init_main_thread_js: Nn,
              __emscripten_thread_cleanup: Mn,
              __pthread_create_js: An,
              __resumeException: Rn,
              __syscall_chdir: Fn,
              __syscall_fcntl64: Bn,
              __syscall_fstat64: Wn,
              __syscall_ftruncate64: Hn,
              __syscall_getdents64: zn,
              __syscall_ioctl: jn,
              __syscall_lstat64: Kn,
              __syscall_mkdirat: Qn,
              __syscall_newfstatat: Xn,
              __syscall_openat: Yn,
              __syscall_stat64: Jn,
              __syscall_unlinkat: Zn,
              _embind_register_bigint: fr,
              _embind_register_bool: hr,
              _embind_register_class: go,
              _embind_register_class_constructor: bo,
              _embind_register_class_function: vo,
              _embind_register_emval: Do,
              _embind_register_float: $o,
              _embind_register_function: Po,
              _embind_register_integer: No,
              _embind_register_memory_view: Mo,
              _embind_register_std_string: wo,
              _embind_register_std_wstring: Vo,
              _embind_register_void: Ho,
              _emscripten_get_now_is_monotonic: zo,
              _emscripten_notify_mailbox_postmessage: Yo,
              _emscripten_set_offscreencanvas_size: Jo,
              _emscripten_thread_mailbox_await: Qo,
              _emscripten_thread_set_strongref: Zo,
              _emscripten_throw_longjmp: ea,
              _emval_decref: Eo,
              _emval_incref: ta,
              _emval_take_value: ra,
              _gmtime_js: oa,
              _localtime_js: ua,
              _mktime_js: ca,
              _mmap_js: da,
              _msync_js: ma,
              _munmap_js: pa,
              _tzset_js: fa,
              abort: ga,
              call_init_capture_driver_js_sync: ot,
              call_init_playback_driver_js_sync: lt,
              call_sendto: rt,
              call_start_capture_js_sync: at,
              call_start_desktop_capture_js_sync: dt,
              call_start_playback_js_sync: st,
              call_start_video_capture_js_sync: pt,
              call_stop_capture_js_sync: it,
              call_stop_desktop_capture_js_sync: mt,
              call_stop_playback_js_sync: ut,
              call_stop_video_capture_js_sync: _t,
              emscripten_asm_const_double: ba,
              emscripten_asm_const_int: va,
              emscripten_async_call: Da,
              emscripten_check_blocking_allowed: xa,
              emscripten_console_error: $a,
              emscripten_date_now: Pa,
              emscripten_exit_with_live_runtime: Na,
              emscripten_get_heap_max: wa,
              emscripten_get_now: ka,
              emscripten_num_logical_cores: Aa,
              emscripten_receive_on_main_thread_js: Ba,
              emscripten_resize_heap: qa,
              emscripten_runtime_keepalive_pop: Ua,
              emscripten_runtime_keepalive_push: Va,
              environ_get: Ka,
              environ_sizes_get: Qa,
              exit: en,
              fd_close: Xa,
              fd_pread: Ja,
              fd_pwrite: ei,
              fd_read: ti,
              fd_seek: ni,
              fd_sync: ri,
              fd_write: oi,
              get_bwe_ml_model_path_js: Je,
              get_persistent_directory_path_js: Ye,
              get_random_bytes_js: Ze,
              getentropy: ai,
              gethostbyname: di,
              invoke_d: Hu,
              invoke_diii: Qu,
              invoke_fi: Qs,
              invoke_fii: ps,
              invoke_fiii: Ku,
              invoke_fiiiiii: Du,
              invoke_i: bl,
              invoke_id: su,
              invoke_ii: Sl,
              invoke_iid: qu,
              invoke_iidi: Gu,
              invoke_iidii: pu,
              invoke_iidjjjidjjjdjjji: rs,
              invoke_iidjjjii: ds,
              invoke_iidjjjiii: as,
              invoke_iiffiii: fs,
              invoke_iiffiiiii: _s,
              invoke_iifi: Lu,
              invoke_iifii: au,
              invoke_iifiii: lu,
              invoke_iii: Rl,
              invoke_iiid: iu,
              invoke_iiifi: uu,
              invoke_iiii: El,
              invoke_iiiidd: Fu,
              invoke_iiiifiii: bs,
              invoke_iiiifiiiiii: Ls,
              invoke_iiiii: Dl,
              invoke_iiiiid: zu,
              invoke_iiiiii: wl,
              invoke_iiiiiii: kl,
              invoke_iiiiiiiddiiid: Bu,
              invoke_iiiiiiii: Nl,
              invoke_iiiiiiiidi: Wu,
              invoke_iiiiiiiifii: ou,
              invoke_iiiiiiiii: xl,
              invoke_iiiiiiiiii: Pl,
              invoke_iiiiiiiiiiffiii: gs,
              invoke_iiiiiiiiiii: zl,
              invoke_iiiiiiiiiiii: Ss,
              invoke_iiiiiiiiiiiiffiii: Cs,
              invoke_iiiiiiiiiiiii: Es,
              invoke_iiiiiiiiiiiiii: Wl,
              invoke_iiiiiiiiiiiiiiffiiiii: vs,
              invoke_iiiiiiiiiiiiiii: Ds,
              invoke_iiiiiiiiiiiiiiiffiiiii: hs,
              invoke_iiiiiiiiiiiiiiii: Ks,
              invoke_iiiiiiiiiiiiiiiiiffiiiii: ys,
              invoke_iiiiiiiiiiiiiiiiii: ql,
              invoke_iiiiiiiiiiji: Xl,
              invoke_iiiiiiiiij: Vs,
              invoke_iiiiiiiij: Ws,
              invoke_iiiiiiij: As,
              invoke_iiiiiiijjii: Xs,
              invoke_iiiiiij: qs,
              invoke_iiiiiijiiii: Hs,
              invoke_iiiiiijjijiiiiiiiiii: Js,
              invoke_iiiiij: xu,
              invoke_iiiiiji: Os,
              invoke_iiiiijjii: us,
              invoke_iiiiijjiii: cs,
              invoke_iiiiijjjii: ls,
              invoke_iiiiijjjiii: ss,
              invoke_iiiij: Ts,
              invoke_iiiijiii: mu,
              invoke_iiiijiiji: ts,
              invoke_iiiijjii: ms,
              invoke_iiiijjiii: is,
              invoke_iiij: Fs,
              invoke_iiijddddddd: Su,
              invoke_iiiji: Ql,
              invoke_iiijii: jl,
              invoke_iiijiiji: es,
              invoke_iiijji: Zl,
              invoke_iiijjiiii: hu,
              invoke_iij: Is,
              invoke_iiji: Gs,
              invoke_iijii: Us,
              invoke_iijiii: Iu,
              invoke_iijijijiji: Ou,
              invoke_iijj: Cu,
              invoke_iijjjiiii: fu,
              invoke_iijjjj: Eu,
              invoke_iijjjji: vu,
              invoke_ij: Pu,
              invoke_iji: Au,
              invoke_j: Ul,
              invoke_ji: Gl,
              invoke_jii: ws,
              invoke_jiii: $l,
              invoke_jiiii: ju,
              invoke_jiiiii: js,
              invoke_jiiiiiiii: Bs,
              invoke_jiiiiiji: zs,
              invoke_jiij: bu,
              invoke_jij: Zs,
              invoke_jj: $u,
              invoke_v: Ll,
              invoke_vd: Vu,
              invoke_vi: Il,
              invoke_vid: tu,
              invoke_viddjjii: gu,
              invoke_vif: xs,
              invoke_viff: Ns,
              invoke_vii: vl,
              invoke_viid: _u,
              invoke_viif: Ms,
              invoke_viii: Cl,
              invoke_viiii: Tl,
              invoke_viiiii: Ml,
              invoke_viiiiii: Bl,
              invoke_viiiiiidiii: Jl,
              invoke_viiiiiii: Ol,
              invoke_viiiiiiiddiii: Kl,
              invoke_viiiiiiii: Fl,
              invoke_viiiiiiiii: Al,
              invoke_viiiiiiiiii: Yl,
              invoke_viiiiiiiiiiii: $s,
              invoke_viiiiiiiiiiiii: Mu,
              invoke_viiiiiiiiiiiiiii: Xu,
              invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiii: Ru,
              invoke_viiiiiiij: Nu,
              invoke_viiiiij: cu,
              invoke_viiiiiji: Uu,
              invoke_viiiij: du,
              invoke_viiiijiiii: Rs,
              invoke_viiij: Tu,
              invoke_viiiji: ns,
              invoke_viij: Ps,
              invoke_viiji: nu,
              invoke_viijii: ru,
              invoke_viijiiii: Ys,
              invoke_viijj: wu,
              invoke_viijjdiii: os,
              invoke_vij: ks,
              invoke_viji: ku,
              invoke_vijiiiii: Vl,
              invoke_vijj: eu,
              invoke_vijji: yu,
              invoke_vjiiiiii: Hl,
              is_participant_known_contact_js: et,
              llvm_eh_typeid_for: mi,
              loggingCallback_js_sync: ft,
              memory: W || y.wasmMemory,
              on_call_event_js_sync: Ke,
              patch_abort_for_ml_inference: Xe,
              query_browser_audio_processing_status_js_sync: ct,
              renderVideoFrame_js: tt,
              sendSignalingXMPP_js_sync: nt,
              set_ml_inference_flag: Qe,
              strftime_l: Ci,
            },
            Ti = Be(),
            Di = xe("__wasm_call_ctors"),
            xi = xe("__cxa_free_exception"),
            $i = (y._malloc = xe("malloc")),
            Pi = (y._free = xe("free")),
            Ni = (y._wasm_throw_ml_abort = xe("wasm_throw_ml_abort")),
            Mi = (y._fflush = xe("fflush")),
            wi = xe("__errno_location"),
            Ai = (y._pthread_self = function () {
              return (Ai = y._pthread_self = q.pthread_self)();
            }),
            Fi = xe("ntohs"),
            Oi = xe("htonl"),
            Bi = xe("htons"),
            Wi =
              (y.__ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj =
                xe(
                  "_ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj",
                )),
            qi =
              (y.__ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj =
                xe(
                  "_ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj",
                )),
            Ui = xe("__cxa_increment_exception_refcount"),
            Vi = xe("__cxa_decrement_exception_refcount"),
            Hi = (y.__emscripten_tls_init = xe("_emscripten_tls_init")),
            Gi = xe("emscripten_builtin_memalign"),
            zi = xe("__getTypeName"),
            ji = (y.__embind_initialize_bindings = xe(
              "_embind_initialize_bindings",
            )),
            Ki = (y.__emscripten_thread_init = xe("_emscripten_thread_init")),
            Qi = (y.__emscripten_thread_crashed = xe(
              "_emscripten_thread_crashed",
            )),
            Xi = xe("emscripten_main_thread_process_queued_calls"),
            Yi = xe("emscripten_main_runtime_thread_id"),
            Ji = xe("_emscripten_run_in_main_runtime_thread_js"),
            Zi = xe("emscripten_dispatch_to_thread_"),
            el = function () {
              return (el = q.emscripten_stack_get_base)();
            },
            tl = function () {
              return (tl = q.emscripten_stack_get_end)();
            },
            nl = xe("_emscripten_thread_free_data"),
            rl = (y.__emscripten_thread_exit = xe("_emscripten_thread_exit")),
            ol = (y.__emscripten_check_mailbox = xe(
              "_emscripten_check_mailbox",
            )),
            al = xe("setThrew"),
            il = xe("setTempRet0"),
            ll = function () {
              return (ll = q.emscripten_stack_init)();
            },
            sl = function (t, n) {
              return (sl = q.emscripten_stack_set_limits)(t, n);
            },
            ul = function () {
              return (ul = q.emscripten_stack_get_free)();
            },
            cl = xe("stackSave"),
            dl = xe("stackRestore"),
            ml = xe("stackAlloc"),
            pl = function () {
              return (pl = q.emscripten_stack_get_current)();
            },
            _l = (y.___get_exception_message = xe("__get_exception_message")),
            fl = xe("__cxa_can_catch"),
            gl = xe("__cxa_is_pointer_type"),
            hl = (y.___start_em_js = 1326940),
            yl = (y.___stop_em_js = 1332372);
          function Cl(e, t, n, r) {
            var o = cl();
            try {
              dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function bl(e) {
            var t = cl();
            try {
              return dn(e)();
            } catch (e) {
              if ((dl(t), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function vl(e, t, n) {
            var r = cl();
            try {
              dn(e)(t, n);
            } catch (e) {
              if ((dl(r), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Sl(e, t) {
            var n = cl();
            try {
              return dn(e)(t);
            } catch (e) {
              if ((dl(n), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Rl(e, t, n) {
            var r = cl();
            try {
              return dn(e)(t, n);
            } catch (e) {
              if ((dl(r), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ll(e) {
            var t = cl();
            try {
              dn(e)();
            } catch (e) {
              if ((dl(t), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function El(e, t, n, r) {
            var o = cl();
            try {
              return dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function kl(e, t, n, r, o, a, i) {
            var l = cl();
            try {
              return dn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((dl(l), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Il(e, t) {
            var n = cl();
            try {
              dn(e)(t);
            } catch (e) {
              if ((dl(n), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Tl(e, t, n, r, o) {
            var a = cl();
            try {
              dn(e)(t, n, r, o);
            } catch (e) {
              if ((dl(a), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Dl(e, t, n, r, o) {
            var a = cl();
            try {
              return dn(e)(t, n, r, o);
            } catch (e) {
              if ((dl(a), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function xl(e, t, n, r, o, a, i, l, s) {
            var u = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((dl(u), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function $l(e, t, n, r) {
            var o = cl();
            try {
              return dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              return (al(1, 0), BigInt(0));
            }
          }
          function Pl(e, t, n, r, o, a, i, l, s, u) {
            var c = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((dl(c), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Nl(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ml(e, t, n, r, o, a) {
            var i = cl();
            try {
              dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function wl(e, t, n, r, o, a) {
            var i = cl();
            try {
              return dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Al(e, t, n, r, o, a, i, l, s, u) {
            var c = cl();
            try {
              dn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((dl(c), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Fl(e, t, n, r, o, a, i, l, s) {
            var u = cl();
            try {
              dn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((dl(u), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ol(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Bl(e, t, n, r, o, a, i) {
            var l = cl();
            try {
              dn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((dl(l), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Wl(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
            var _ = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p);
            } catch (e) {
              if ((dl(_), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ql(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h) {
            var y = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h);
            } catch (e) {
              if ((dl(y), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ul(e) {
            var t = cl();
            try {
              return dn(e)();
            } catch (e) {
              if ((dl(t), !(e instanceof $e))) throw e;
              return (al(1, 0), BigInt(0));
            }
          }
          function Vl(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Hl(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Gl(e, t) {
            var n = cl();
            try {
              return dn(e)(t);
            } catch (e) {
              if ((dl(n), !(e instanceof $e))) throw e;
              return (al(1, 0), BigInt(0));
            }
          }
          function zl(e, t, n, r, o, a, i, l, s, u, c) {
            var d = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((dl(d), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function jl(e, t, n, r, o, a) {
            var i = cl();
            try {
              return dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Kl(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            var p = cl();
            try {
              dn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
            } catch (e) {
              if ((dl(p), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ql(e, t, n, r, o) {
            var a = cl();
            try {
              return dn(e)(t, n, r, o);
            } catch (e) {
              if ((dl(a), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Xl(e, t, n, r, o, a, i, l, s, u, c, d) {
            var m = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c, d);
            } catch (e) {
              if ((dl(m), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Yl(e, t, n, r, o, a, i, l, s, u, c) {
            var d = cl();
            try {
              dn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((dl(d), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Jl(e, t, n, r, o, a, i, l, s, u, c) {
            var d = cl();
            try {
              dn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((dl(d), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Zl(e, t, n, r, o, a) {
            var i = cl();
            try {
              return dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function es(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ts(e, t, n, r, o, a, i, l, s) {
            var u = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((dl(u), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ns(e, t, n, r, o, a) {
            var i = cl();
            try {
              dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function rs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
            var g = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
            } catch (e) {
              if ((dl(g), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function os(e, t, n, r, o, a, i, l, s) {
            var u = cl();
            try {
              dn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((dl(u), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function as(e, t, n, r, o, a, i, l, s) {
            var u = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((dl(u), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function is(e, t, n, r, o, a, i, l, s) {
            var u = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((dl(u), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ls(e, t, n, r, o, a, i, l, s, u) {
            var c = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((dl(c), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ss(e, t, n, r, o, a, i, l, s, u, c) {
            var d = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((dl(d), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function us(e, t, n, r, o, a, i, l, s) {
            var u = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((dl(u), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function cs(e, t, n, r, o, a, i, l, s, u) {
            var c = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((dl(c), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ds(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ms(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ps(e, t, n) {
            var r = cl();
            try {
              return dn(e)(t, n);
            } catch (e) {
              if ((dl(r), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function _s(e, t, n, r, o, a, i, l, s) {
            var u = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((dl(u), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function fs(e, t, n, r, o, a, i) {
            var l = cl();
            try {
              return dn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((dl(l), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function gs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
            var f = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
            } catch (e) {
              if ((dl(f), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function hs(
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
            var S = cl();
            try {
              return dn(e)(
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
              if ((dl(S), !(e instanceof $e))) throw e;
              al(1, 0);
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
            S,
            R,
          ) {
            var L = cl();
            try {
              return dn(e)(
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
              if ((dl(L), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Cs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g) {
            var h = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g);
            } catch (e) {
              if ((dl(h), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function bs(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function vs(
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
            var v = cl();
            try {
              return dn(e)(
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
              if ((dl(v), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ss(e, t, n, r, o, a, i, l, s, u, c, d) {
            var m = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c, d);
            } catch (e) {
              if ((dl(m), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Rs(e, t, n, r, o, a, i, l, s, u) {
            var c = cl();
            try {
              dn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((dl(c), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ls(e, t, n, r, o, a, i, l, s, u, c) {
            var d = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((dl(d), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Es(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            var p = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
            } catch (e) {
              if ((dl(p), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ks(e, t, n) {
            var r = cl();
            try {
              dn(e)(t, n);
            } catch (e) {
              if ((dl(r), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Is(e, t, n) {
            var r = cl();
            try {
              return dn(e)(t, n);
            } catch (e) {
              if ((dl(r), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ts(e, t, n, r, o) {
            var a = cl();
            try {
              return dn(e)(t, n, r, o);
            } catch (e) {
              if ((dl(a), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ds(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
            var f = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
            } catch (e) {
              if ((dl(f), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function xs(e, t, n) {
            var r = cl();
            try {
              dn(e)(t, n);
            } catch (e) {
              if ((dl(r), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function $s(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            var p = cl();
            try {
              dn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
            } catch (e) {
              if ((dl(p), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ps(e, t, n, r) {
            var o = cl();
            try {
              dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ns(e, t, n, r) {
            var o = cl();
            try {
              dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ms(e, t, n, r) {
            var o = cl();
            try {
              dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ws(e, t, n) {
            var r = cl();
            try {
              return dn(e)(t, n);
            } catch (e) {
              if ((dl(r), !(e instanceof $e))) throw e;
              return (al(1, 0), BigInt(0));
            }
          }
          function As(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Fs(e, t, n, r) {
            var o = cl();
            try {
              return dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Os(e, t, n, r, o, a, i) {
            var l = cl();
            try {
              return dn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((dl(l), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Bs(e, t, n, r, o, a, i, l, s) {
            var u = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((dl(u), !(e instanceof $e))) throw e;
              return (al(1, 0), BigInt(0));
            }
          }
          function Ws(e, t, n, r, o, a, i, l, s) {
            var u = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((dl(u), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function qs(e, t, n, r, o, a, i) {
            var l = cl();
            try {
              return dn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((dl(l), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Us(e, t, n, r, o) {
            var a = cl();
            try {
              return dn(e)(t, n, r, o);
            } catch (e) {
              if ((dl(a), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Vs(e, t, n, r, o, a, i, l, s, u) {
            var c = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((dl(c), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Hs(e, t, n, r, o, a, i, l, s, u, c) {
            var d = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((dl(d), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Gs(e, t, n, r) {
            var o = cl();
            try {
              return dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function zs(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              return (al(1, 0), BigInt(0));
            }
          }
          function js(e, t, n, r, o, a) {
            var i = cl();
            try {
              return dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              return (al(1, 0), BigInt(0));
            }
          }
          function Ks(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
            var g = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
            } catch (e) {
              if ((dl(g), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Qs(e, t) {
            var n = cl();
            try {
              return dn(e)(t);
            } catch (e) {
              if ((dl(n), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Xs(e, t, n, r, o, a, i, l, s, u, c) {
            var d = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((dl(d), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ys(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Js(
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
            var b = cl();
            try {
              return dn(e)(
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
              if ((dl(b), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Zs(e, t, n) {
            var r = cl();
            try {
              return dn(e)(t, n);
            } catch (e) {
              if ((dl(r), !(e instanceof $e))) throw e;
              return (al(1, 0), BigInt(0));
            }
          }
          function eu(e, t, n, r) {
            var o = cl();
            try {
              dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function tu(e, t, n) {
            var r = cl();
            try {
              dn(e)(t, n);
            } catch (e) {
              if ((dl(r), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function nu(e, t, n, r, o) {
            var a = cl();
            try {
              dn(e)(t, n, r, o);
            } catch (e) {
              if ((dl(a), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ru(e, t, n, r, o, a) {
            var i = cl();
            try {
              dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ou(e, t, n, r, o, a, i, l, s, u, c) {
            var d = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((dl(d), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function au(e, t, n, r, o) {
            var a = cl();
            try {
              return dn(e)(t, n, r, o);
            } catch (e) {
              if ((dl(a), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function iu(e, t, n, r) {
            var o = cl();
            try {
              return dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function lu(e, t, n, r, o, a) {
            var i = cl();
            try {
              return dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function su(e, t) {
            var n = cl();
            try {
              return dn(e)(t);
            } catch (e) {
              if ((dl(n), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function uu(e, t, n, r, o) {
            var a = cl();
            try {
              return dn(e)(t, n, r, o);
            } catch (e) {
              if ((dl(a), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function cu(e, t, n, r, o, a, i) {
            var l = cl();
            try {
              dn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((dl(l), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function du(e, t, n, r, o, a) {
            var i = cl();
            try {
              dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function mu(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function pu(e, t, n, r, o) {
            var a = cl();
            try {
              return dn(e)(t, n, r, o);
            } catch (e) {
              if ((dl(a), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function _u(e, t, n, r) {
            var o = cl();
            try {
              dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function fu(e, t, n, r, o, a, i, l, s) {
            var u = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((dl(u), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function gu(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function hu(e, t, n, r, o, a, i, l, s) {
            var u = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((dl(u), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function yu(e, t, n, r, o) {
            var a = cl();
            try {
              dn(e)(t, n, r, o);
            } catch (e) {
              if ((dl(a), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Cu(e, t, n, r) {
            var o = cl();
            try {
              return dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function bu(e, t, n, r) {
            var o = cl();
            try {
              return dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              return (al(1, 0), BigInt(0));
            }
          }
          function vu(e, t, n, r, o, a, i) {
            var l = cl();
            try {
              return dn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((dl(l), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Su(e, t, n, r, o, a, i, l, s, u, c) {
            var d = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((dl(d), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ru(
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
            var P = cl();
            try {
              dn(e)(
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
              if ((dl(P), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Lu(e, t, n, r) {
            var o = cl();
            try {
              return dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Eu(e, t, n, r, o, a) {
            var i = cl();
            try {
              return dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ku(e, t, n, r) {
            var o = cl();
            try {
              dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Iu(e, t, n, r, o, a) {
            var i = cl();
            try {
              return dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Tu(e, t, n, r, o) {
            var a = cl();
            try {
              dn(e)(t, n, r, o);
            } catch (e) {
              if ((dl(a), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Du(e, t, n, r, o, a, i) {
            var l = cl();
            try {
              return dn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((dl(l), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function xu(e, t, n, r, o, a) {
            var i = cl();
            try {
              return dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function $u(e, t) {
            var n = cl();
            try {
              return dn(e)(t);
            } catch (e) {
              if ((dl(n), !(e instanceof $e))) throw e;
              return (al(1, 0), BigInt(0));
            }
          }
          function Pu(e, t) {
            var n = cl();
            try {
              return dn(e)(t);
            } catch (e) {
              if ((dl(n), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Nu(e, t, n, r, o, a, i, l, s) {
            var u = cl();
            try {
              dn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((dl(u), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Mu(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
            var _ = cl();
            try {
              dn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p);
            } catch (e) {
              if ((dl(_), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function wu(e, t, n, r, o) {
            var a = cl();
            try {
              dn(e)(t, n, r, o);
            } catch (e) {
              if ((dl(a), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Au(e, t, n) {
            var r = cl();
            try {
              return dn(e)(t, n);
            } catch (e) {
              if ((dl(r), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Fu(e, t, n, r, o, a) {
            var i = cl();
            try {
              return dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Ou(e, t, n, r, o, a, i, l, s, u) {
            var c = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((dl(c), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Bu(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            var p = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
            } catch (e) {
              if ((dl(p), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Wu(e, t, n, r, o, a, i, l, s, u) {
            var c = cl();
            try {
              return dn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((dl(c), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function qu(e, t, n) {
            var r = cl();
            try {
              return dn(e)(t, n);
            } catch (e) {
              if ((dl(r), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Uu(e, t, n, r, o, a, i, l) {
            var s = cl();
            try {
              dn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((dl(s), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Vu(e, t) {
            var n = cl();
            try {
              dn(e)(t);
            } catch (e) {
              if ((dl(n), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Hu(e) {
            var t = cl();
            try {
              return dn(e)();
            } catch (e) {
              if ((dl(t), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Gu(e, t, n, r) {
            var o = cl();
            try {
              return dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function zu(e, t, n, r, o, a) {
            var i = cl();
            try {
              return dn(e)(t, n, r, o, a);
            } catch (e) {
              if ((dl(i), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function ju(e, t, n, r, o) {
            var a = cl();
            try {
              return dn(e)(t, n, r, o);
            } catch (e) {
              if ((dl(a), !(e instanceof $e))) throw e;
              return (al(1, 0), BigInt(0));
            }
          }
          function Ku(e, t, n, r) {
            var o = cl();
            try {
              return dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Qu(e, t, n, r) {
            var o = cl();
            try {
              return dn(e)(t, n, r);
            } catch (e) {
              if ((dl(o), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          function Xu(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
            var g = cl();
            try {
              dn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
            } catch (e) {
              if ((dl(g), !(e instanceof $e))) throw e;
              al(1, 0);
            }
          }
          ((y.keepRuntimeAlive = me),
            (y.wasmMemory = W),
            (y.GROWABLE_HEAP_U8 = d),
            (y.GROWABLE_HEAP_F32 = g),
            (y.ExitStatus = gt),
            (y.FS = Qt),
            (y.PThread = rn),
            (y.registeredTypes = ar));
          var Yu = [
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
          Yu.forEach(He);
          var Ju = [
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
          Ju.forEach(Ge);
          var Zu;
          ve = function e() {
            (Zu || tc(), Zu || (ve = e));
          };
          function ec() {
            (G(!D), ll(), ae());
          }
          function tc() {
            if (Ce > 0) return;
            if ((D || ec(), D)) {
              (C(y), _e(), startWorker(y));
              return;
            }
            if ((pe(), Ce > 0)) return;
            function e() {
              Zu ||
                ((Zu = !0),
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
          function nc() {
            var e = A,
              t = F,
              n = !1;
            A = F = function (t) {
              n = !0;
            };
            try {
              (Mi(0),
                ["stdout", "stderr"].forEach(function (e) {
                  var t = Qt.analyzePath("/dev/" + e);
                  if (t) {
                    var r = t.object,
                      o = r.rdev,
                      a = Mt.ttys[o];
                    a && a.output && a.output.length && (n = !0);
                  }
                }));
            } catch (e) {}
            ((A = e),
              (F = t),
              n &&
                _n(
                  "stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.",
                ));
          }
          if (y.preInit)
            for (
              typeof y.preInit == "function" && (y.preInit = [y.preInit]);
              y.preInit.length > 0;
            )
              y.preInit.pop()();
          return (tc(), a.ready);
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
