__d(
  "WAWebVoipWebWasmLoader.worker",
  [
    "Promise",
    "WorkerBundleResource",
    "WorkerClient",
    "WorkerMessagePort",
    "bx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["type", "__name"],
      s,
      u,
      c = "2780294485a5b9a15b1bb76de665be6eb98afc64a8130bd2949c6828217ac7e4",
      d = null,
      m = r("bx").getURL(r("bx")("32180"), { cacheBreaker: "1791785441483" }),
      p = (function () {
        var t =
          typeof document != "undefined" && document.currentScript
            ? document.currentScript.src
            : void 0;
        return function (r) {
          var a = this;
          r === void 0 && (r = {});
          function i() {
            return (q.buffer != j.buffer && re(), j);
          }
          function l() {
            return (q.buffer != j.buffer && re(), K);
          }
          function p() {
            return (q.buffer != j.buffer && re(), Q);
          }
          function _() {
            return (q.buffer != j.buffer && re(), X);
          }
          function f() {
            return (q.buffer != j.buffer && re(), Y);
          }
          function g() {
            return (q.buffer != j.buffer && re(), J);
          }
          function h() {
            return (q.buffer != j.buffer && re(), Z);
          }
          function y() {
            return (q.buffer != j.buffer && re(), ne);
          }
          var C = r,
            b,
            v;
          ((C.ready = new (u || (u = n("Promise")))(function (e, t) {
            ((b = e), (v = t));
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
              Object.getOwnPropertyDescriptor(C.ready, e) ||
                Object.defineProperty(C.ready, e, {
                  get: function () {
                    return Ie(
                      "You are getting " +
                        e +
                        " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                    );
                  },
                  set: function () {
                    return Ie(
                      "You are setting " +
                        e +
                        " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                    );
                  },
                });
            }));
          var S = Object.assign({}, C),
            R = [],
            L = "./this.program",
            E = function (t, n) {
              throw n;
            },
            k = typeof window == "object",
            I = typeof importScripts == "function",
            T =
              typeof process == "object" &&
              typeof process.versions == "object" &&
              typeof process.versions.node == "string",
            D = !k && !T && !I;
          if (C.ENVIRONMENT)
            throw new Error(
              "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)",
            );
          var x = C.ENVIRONMENT_IS_PTHREAD || !1,
            $ = "";
          function P(e) {
            return C.locateFile ? C.locateFile(e, $) : $ + e;
          }
          var N, M, w, A;
          if (D) {
            if (
              (typeof process == "object" && typeof n == "function") ||
              typeof window == "object" ||
              typeof importScripts == "function"
            )
              throw new Error(
                "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
              );
            (typeof read != "undefined" && (N = read),
              (w = function (t) {
                if (typeof readbuffer == "function")
                  return new Uint8Array(readbuffer(t));
                var e = read(t, "binary");
                return (z(typeof e == "object"), e);
              }),
              (M = function (t, n, r) {
                setTimeout(function () {
                  return n(w(t));
                });
              }),
              typeof clearTimeout == "undefined" &&
                (globalThis.clearTimeout = function (e) {}),
              typeof setTimeout == "undefined" &&
                (globalThis.setTimeout = function (e) {
                  return typeof e == "function" ? e() : Ie();
                }),
              typeof scriptArgs != "undefined"
                ? (R = scriptArgs)
                : typeof arguments != "undefined" && (R = arguments),
              typeof quit == "function" &&
                (E = function (t, n) {
                  throw (
                    setTimeout(function () {
                      if (!(n instanceof yt)) {
                        var e = n;
                        (n &&
                          typeof n == "object" &&
                          n.stack &&
                          (e = [n, n.stack]),
                          O("exiting due to exception: " + e));
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
          } else if (k || I) {
            if (
              (I
                ? ($ = self.location.href)
                : typeof document != "undefined" &&
                  document.currentScript &&
                  ($ = document.currentScript.src),
              t && ($ = t),
              $.indexOf("blob:") !== 0
                ? ($ = $.substr(
                    0,
                    $.replace(/[?#].*/, "").lastIndexOf("/") + 1,
                  ))
                : ($ = ""),
              !(
                typeof window == "object" || typeof importScripts == "function"
              ))
            )
              throw new Error(
                "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
              );
            ((N = function (t) {
              var e = new XMLHttpRequest();
              return (e.open("GET", t, !1), e.send(null), e.responseText);
            }),
              I &&
                (w = function (t) {
                  var e = new XMLHttpRequest();
                  return (
                    e.open("GET", t, !1),
                    (e.responseType = "arraybuffer"),
                    e.send(null),
                    new Uint8Array(e.response)
                  );
                }),
              (M = function (t, n, r) {
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
              (A = function (t) {
                return (document.title = t);
              }));
          } else throw new Error("environment detection error");
          var F = C.print || console.log.bind(console),
            O = C.printErr || console.error.bind(console);
          (Object.assign(C, S),
            (S = null),
            Di(),
            C.arguments && (R = C.arguments),
            qe("arguments", "arguments_"),
            C.thisProgram && (L = C.thisProgram),
            qe("thisProgram", "thisProgram"),
            C.quit && (E = C.quit),
            qe("quit", "quit_"),
            z(
              typeof C.memoryInitializerPrefixURL == "undefined",
              "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead",
            ),
            z(
              typeof C.pthreadMainPrefixURL == "undefined",
              "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead",
            ),
            z(
              typeof C.cdInitializerPrefixURL == "undefined",
              "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead",
            ),
            z(
              typeof C.filePackagePrefixURL == "undefined",
              "Module.filePackagePrefixURL option was removed, use Module.locateFile instead",
            ),
            z(
              typeof C.read == "undefined",
              "Module.read option was removed (modify read_ in JS)",
            ),
            z(
              typeof C.readAsync == "undefined",
              "Module.readAsync option was removed (modify readAsync in JS)",
            ),
            z(
              typeof C.readBinary == "undefined",
              "Module.readBinary option was removed (modify readBinary in JS)",
            ),
            z(
              typeof C.setWindowTitle == "undefined",
              "Module.setWindowTitle option was removed (modify setWindowTitle in JS)",
            ),
            z(
              typeof C.TOTAL_MEMORY == "undefined",
              "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY",
            ),
            qe("asm", "wasmExports"),
            qe("read", "read_"),
            qe("readAsync", "readAsync"),
            qe("readBinary", "readBinary"),
            qe("setWindowTitle", "setWindowTitle"),
            z(
              k || I || T,
              "Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)",
            ),
            z(
              !T,
              "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.",
            ),
            z(
              !D,
              "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.",
            ));
          var B;
          (C.wasmBinary && (B = C.wasmBinary), qe("wasmBinary", "wasmBinary"));
          var W = C.noExitRuntime || !0;
          (qe("noExitRuntime", "noExitRuntime"),
            typeof WebAssembly != "object" &&
              Ie("no native wasm support detected"));
          var q,
            U,
            V,
            H = !1,
            G;
          function z(e, t) {
            e || Ie("Assertion failed" + (t ? ": " + t : ""));
          }
          var j, K, Q, X, Y, J, Z, ee, te, ne;
          function re() {
            var e = q.buffer;
            ((C.HEAP8 = j = new Int8Array(e)),
              (C.HEAP16 = Q = new Int16Array(e)),
              (C.HEAP32 = Y = new Int32Array(e)),
              (C.HEAPU8 = K = new Uint8Array(e)),
              (C.HEAPU16 = X = new Uint16Array(e)),
              (C.HEAPU32 = J = new Uint32Array(e)),
              (C.HEAPF32 = Z = new Float32Array(e)),
              (C.HEAPF64 = ne = new Float64Array(e)),
              (C.HEAP64 = ee = new BigInt64Array(e)),
              (C.HEAPU64 = te = new BigUint64Array(e)));
          }
          (z(
            !C.STACK_SIZE,
            "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time",
          ),
            z(
              typeof Int32Array != "undefined" &&
                typeof Float64Array != "undefined" &&
                Int32Array.prototype.subarray != null &&
                Int32Array.prototype.set != null,
              "JS engine does not provide full typed array support",
            ));
          var oe = C.INITIAL_MEMORY || 10485760;
          if (
            (qe("INITIAL_MEMORY", "INITIAL_MEMORY"),
            z(
              oe >= 1048576,
              "INITIAL_MEMORY should be larger than STACK_SIZE, was " +
                oe +
                "! (STACK_SIZE=1048576)",
            ),
            x)
          )
            q = C.wasmMemory;
          else if (C.wasmMemory) q = C.wasmMemory;
          else if (
            ((q = new WebAssembly.Memory({
              initial: oe / 65536,
              maximum: 2147483648 / 65536,
              shared: !0,
            })),
            !(q.buffer instanceof SharedArrayBuffer))
          )
            throw (
              O(
                "requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag",
              ),
              T &&
                O(
                  "(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)",
                ),
              Error("bad memory")
            );
          (re(), (oe = q.buffer.byteLength), z(oe % 65536 === 0));
          var ae;
          function ie() {
            var e = ol();
            (z((e & 3) == 0),
              e == 0 && (e += 4),
              (g()[e >> 2] = 34821223),
              (g()[(e + 4) >> 2] = 2310721022),
              (g()[0] = 1668509029));
          }
          function le() {
            if (!H) {
              var e = ol();
              e == 0 && (e += 4);
              var t = g()[e >> 2],
                n = g()[(e + 4) >> 2];
              ((t != 34821223 || n != 2310721022) &&
                Ie(
                  "Stack overflow! Stack cookie has been overwritten at " +
                    rn(e) +
                    ", expected hex dwords 0x89BACDFE and 0x2135467, but received " +
                    rn(n) +
                    " " +
                    rn(t),
                ),
                g()[0] != 1668509029 &&
                  Ie(
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
          var se = [],
            ue = [],
            ce = [],
            de = !1,
            me = 0;
          function pe() {
            return W || me > 0;
          }
          function _e() {
            if ((z(!x), C.preRun))
              for (
                typeof C.preRun == "function" && (C.preRun = [C.preRun]);
                C.preRun.length;
              )
                he(C.preRun.shift());
            ln(se);
          }
          function fe() {
            (z(!de),
              (de = !0),
              !x &&
                (le(),
                !C.noFSInit && !Yt.init.initialized && Yt.init(),
                (Yt.ignorePermissions = !1),
                At.init(),
                ln(ue)));
          }
          function ge() {
            if ((le(), !x)) {
              if (C.postRun)
                for (
                  typeof C.postRun == "function" && (C.postRun = [C.postRun]);
                  C.postRun.length;
                )
                  Ce(C.postRun.shift());
              ln(ce);
            }
          }
          function he(e) {
            se.unshift(e);
          }
          function ye(e) {
            ue.unshift(e);
          }
          function Ce(e) {
            ce.unshift(e);
          }
          (z(
            Math.imul,
            "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
          ),
            z(
              Math.fround,
              "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
            ),
            z(
              Math.clz32,
              "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
            ),
            z(
              Math.trunc,
              "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
            ));
          var be = 0,
            ve = null,
            Se = null,
            Re = {};
          function Le(e) {
            for (var t = e; ; ) {
              if (!Re[e]) return e;
              e = t + Math.random();
            }
          }
          function Ee(e) {
            (be++,
              C.monitorRunDependencies && C.monitorRunDependencies(be),
              e
                ? (z(!Re[e]),
                  (Re[e] = 1),
                  ve === null &&
                    typeof setInterval != "undefined" &&
                    (ve = setInterval(function () {
                      if (H) {
                        (clearInterval(ve), (ve = null));
                        return;
                      }
                      var e = !1;
                      for (var t in Re)
                        (e ||
                          ((e = !0), O("still waiting on run dependencies:")),
                          O("dependency: " + t));
                      e && O("(end of list)");
                    }, 1e4)))
                : O("warning: run dependency added without ID"));
          }
          function ke(e) {
            if (
              (be--,
              C.monitorRunDependencies && C.monitorRunDependencies(be),
              e
                ? (z(Re[e]), delete Re[e])
                : O("warning: run dependency removed without ID"),
              be == 0 && (ve !== null && (clearInterval(ve), (ve = null)), Se))
            ) {
              var t = Se;
              ((Se = null), t());
            }
          }
          function Ie(e) {
            (C.onAbort && C.onAbort(e),
              (e = "Aborted(" + e + ")"),
              O(e),
              (H = !0),
              (G = 1));
            var t = new WebAssembly.RuntimeError(e);
            throw (v(t), t);
          }
          var Te = "data:application/octet-stream;base64,";
          function De(e) {
            return e.startsWith(Te);
          }
          function xe(e) {
            return e.startsWith("file://");
          }
          function $e(e) {
            return function () {
              z(
                de,
                "native function `" +
                  e +
                  "` called before runtime initialization",
              );
              var t = U[e];
              return (
                z(t, "exported native function `" + e + "` not found"),
                t.apply(null, arguments)
              );
            };
          }
          var Pe = (function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              return (babelHelpers.inheritsLoose(t, e), t);
            })(babelHelpers.wrapNativeSuper(Error)),
            Ne = (function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              return (babelHelpers.inheritsLoose(t, e), t);
            })(Pe),
            Me = (function (e) {
              function t(t) {
                var n;
                ((n = e.call(this, t) || this), (n.excPtr = t));
                var r = mn(t);
                return ((n.name = r[0]), (n.message = r[1]), n);
              }
              return (babelHelpers.inheritsLoose(t, e), t);
            })(Pe),
            we = m;
          function Ae(e) {
            if (e == we && B) return new Uint8Array(B);
            if (w) return w(e);
            throw "both async and sync fetching of the wasm failed";
          }
          function Fe(e) {
            return !B && (k || I) && typeof fetch == "function"
              ? fetch(e, { credentials: "same-origin" })
                  .then(function (t) {
                    if (!t.ok)
                      throw "failed to load wasm binary file at '" + e + "'";
                    return t.arrayBuffer();
                  })
                  .catch(function () {
                    return Ae(e);
                  })
              : (u || (u = n("Promise"))).resolve().then(function () {
                  return Ae(e);
                });
          }
          function Oe(e, t, n) {
            return Fe(e)
              .then(function (e) {
                return WebAssembly.instantiate(e, t);
              })
              .then(function (e) {
                return e;
              })
              .then(n, function (e) {
                (O("failed to asynchronously prepare wasm: " + e),
                  xe(we) &&
                    O(
                      "warning: Loading from a file URI (" +
                        we +
                        ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing",
                    ),
                  Ie(e));
              });
          }
          function Be(e, t, n, r) {
            return !e &&
              typeof WebAssembly.instantiateStreaming == "function" &&
              !De(t) &&
              typeof fetch == "function"
              ? fetch(t, { credentials: "same-origin" }).then(function (e) {
                  var o = WebAssembly.instantiateStreaming(e, n);
                  return o.then(r, function (e) {
                    return (
                      O("wasm streaming compile failed: " + e),
                      O("falling back to ArrayBuffer instantiation"),
                      Oe(t, n, r)
                    );
                  });
                })
              : Oe(t, n, r);
          }
          function We() {
            var e = { env: xi, wasi_snapshot_preview1: xi };
            function t(e, t) {
              var n = e.exports;
              return (
                (U = n),
                fn(U._emscripten_tls_init),
                (ae = U.__indirect_function_table),
                z(ae, "table not found in wasm exports"),
                ye(U.__wasm_call_ctors),
                (V = t),
                ke("wasm-instantiate"),
                n
              );
            }
            Ee("wasm-instantiate");
            var n = C;
            function r(e) {
              (z(
                C === n,
                "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?",
              ),
                (n = null),
                t(e.instance, e.module));
            }
            if (C.instantiateWasm)
              try {
                return C.instantiateWasm(e, t);
              } catch (e) {
                (O("Module.instantiateWasm callback failed with error: " + e),
                  v(e));
              }
            return (Be(B, we, e, r).catch(v), {});
          }
          function qe(e, t, n) {
            (n === void 0 && (n = !0),
              Object.getOwnPropertyDescriptor(C, e) ||
                Object.defineProperty(C, e, {
                  configurable: !0,
                  get: function () {
                    var r = n
                      ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
                      : "";
                    Ie(
                      "`Module." + e + "` has been replaced by `" + t + "`" + r,
                    );
                  },
                }));
          }
          function Ue(e) {
            Object.getOwnPropertyDescriptor(C, e) &&
              Ie(
                "`Module." +
                  e +
                  "` was supplied but `" +
                  e +
                  "` not included in INCOMING_MODULE_JS_API",
              );
          }
          function Ve(e) {
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
          function He(e, t) {
            typeof globalThis != "undefined" &&
              Object.defineProperty(globalThis, e, {
                configurable: !0,
                get: function () {
                  gn("`" + e + "` is not longer defined by emscripten. " + t);
                },
              });
          }
          He("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
          function Ge(e) {
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
                    Ve(e) &&
                      (t +=
                        ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
                    gn(t));
                },
              }),
              ze(e));
          }
          function ze(e) {
            Object.getOwnPropertyDescriptor(C, e) ||
              Object.defineProperty(C, e, {
                configurable: !0,
                get: function () {
                  var t =
                    "'" +
                    e +
                    "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)";
                  (Ve(e) &&
                    (t +=
                      ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
                    Ie(t));
                },
              });
          }
          function je(e) {
            console.warn.apply(console, arguments);
          }
          var Ke = {
            1387871: function () {
              return Date.now();
            },
            1387894: function (t, n) {
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
          function Qe(e, t) {
            var n = t ? Jt(t) : "";
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onCallEvent({
              eventType: e,
              userData: "",
              eventDataJson: n,
            });
          }
          function Xe(e) {
            self.__inMLInference = e;
          }
          function Ye() {
            var e = Ie;
            Ie = function (n) {
              if (self.__inMLInference && C._wasm_throw_ml_abort) {
                (C.onAbort && C.onAbort(n), (n = "Aborted(" + n + ")"), O(n));
                var t = Pt(n) + 1,
                  r = pl(),
                  o = fl(t);
                (jn(n, o, t), C._wasm_throw_ml_abort(o), _l(r));
                return;
              }
              e(n);
            };
          }
          function Je(e, t) {
            if (!e || t <= 0) return 0;
            var n =
              self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getPersistentDirectoryPath();
            if (n) {
              var r = Pt(n) + 1;
              return (jn(n, e, t), r);
            }
            return 0;
          }
          function Ze(e) {
            var t = e ? Jt(e) : null,
              n =
                self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getBweModelPath({
                  versionName: t,
                });
            if (n) {
              var r = Pt(n) + 1,
                o = Mi(r);
              return (jn(n, o, r), o);
            }
            return null;
          }
          function et(e, t) {
            var n = t ? Jt(t) : null,
              r =
                self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getMLModelPathForType(
                  { modelType: e, versionName: n },
                );
            if (r) {
              var o = Pt(r) + 1,
                a = Mi(o);
              return (jn(r, a, o), a);
            }
            return null;
          }
          function tt(e, t) {
            if (t == null) {
              var n = new Error("get_random_bytes_js: rawBytesPtr is null");
              throw (n.stack, n);
            }
            var r = new Uint8Array(e),
              o = self.crypto.getRandomValues(r);
            bi(o, t);
          }
          function nt(e) {
            var t = Jt(e);
            return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.isParticipantKnownContact(
              { jid: t },
            );
          }
          function rt(e, t, n, r, o, a, i, s, u, c) {
            var d = l(),
              m = new Uint8Array(n);
            m.set(d.subarray(t, t + n));
            var p = Jt(e);
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
                  timestamp: s,
                  isKeyFrame: u,
                  isScreenShare: c,
                },
              );
          }
          function ot(e, t, n, r) {
            var o = l(),
              a = new Uint8Array(r);
            a.set(o.subarray(n, n + r));
            var i = Jt(t),
              s = Jt(e);
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onSignalingXmpp({
              peerJid: s,
              callId: i,
              xmlPayload: a,
            });
          }
          function at(e, t, n, r) {
            var o = l(),
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
              { data: i, len: t, ip: Jt(n), port: r },
            );
          }
          function it(e, t, n, r, o, a) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.initCaptureDriverJS({
              sample_rate: e,
              channels: t,
              bits_per_sample: n,
              frames_per_chunk: r,
              device_type: o,
              auto_gain_control: !!a,
            });
          }
          function lt(e) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startCaptureJS({
              device_type: e,
            });
          }
          function st(e) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopCaptureJS({
              device_type: e,
            });
          }
          function ut(e, t, n, r) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.initPlaybackDriverJS(
              {
                sample_rate: e,
                channels: t,
                bits_per_sample: n,
                frames_per_chunk: r,
              },
            );
          }
          function ct() {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startPlaybackJS();
          }
          function dt() {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopPlaybackJS();
          }
          function mt() {
            return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getBrowserAudioProcessingStatus();
          }
          function pt(e, t, n) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startDesktopCaptureJS(
              { width: e, height: t, max_fps: n },
            );
          }
          function _t() {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopDesktopCaptureJS();
          }
          function ft(e, t, n, r, o) {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startVideoCaptureJS({
              camera_id: Jt(e),
              width: t,
              height: n,
              max_fps: r,
              isAVUpgrade: !!o,
            });
          }
          function gt() {
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopVideoCaptureJS();
          }
          function ht(e, t) {
            var n = t ? Jt(t).trim() : "";
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
              level: e,
              message: n,
            });
          }
          function yt(e) {
            ((this.name = "ExitStatus"),
              (this.message = "Program terminated with exit(" + e + ")"),
              (this.status = e));
          }
          var Ct = function (t) {
            (t.terminate(),
              t.removeAllMessageListeners("cmd"),
              t.addMessageListener("cmd", function (e) {
                var n = e.cmd;
                O(
                  'received "' +
                    n +
                    '" command from terminated worker: ' +
                    t.workerID,
                );
              }));
          };
          function bt(e) {
            (z(
              !x,
              "Internal Error! killThread() can only ever be called from main application thread!",
            ),
              z(e, "Internal Error! Null pthread_ptr in killThread!"));
            var t = an.pthreads[e];
            (delete an.pthreads[e],
              Ct(t),
              al(e),
              an.runningWorkers.splice(an.runningWorkers.indexOf(t), 1),
              (t.pthread_ptr = 0));
          }
          function vt(e) {
            (z(
              !x,
              "Internal Error! cancelThread() can only ever be called from main application thread!",
            ),
              z(e, "Internal Error! Null pthread_ptr in cancelThread!"));
            var t = an.pthreads[e];
            t.postMessage({ cmd: "cancel", type: "cmd" });
          }
          function St(e) {
            (z(
              !x,
              "Internal Error! cleanupThread() can only ever be called from main application thread!",
            ),
              z(e, "Internal Error! Null pthread_ptr in cleanupThread!"));
            var t = an.pthreads[e];
            (z(t), an.returnWorkerToPool(t));
          }
          var Rt = function (t, n) {
            return (l().fill(0, t, t + n), t);
          };
          function Lt(e) {
            (z(
              !x,
              "Internal Error! spawnThread() can only ever be called from main application thread!",
            ),
              z(e.pthread_ptr, "Internal error, no pthread ptr!"));
            var t = an.getNewWorker();
            if (!t) return 6;
            (z(!t.pthread_ptr, "Internal error!"),
              an.runningWorkers.push(t),
              (an.pthreads[e.pthread_ptr] = t),
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
          var Et = {
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
                var e = Et.isAbs(t),
                  n = t.substr(-1) === "/";
                return (
                  (t = Et.normalizeArray(
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
                var e = Et.splitPath(t),
                  n = e[0],
                  r = e[1];
                return !n && !r
                  ? "."
                  : (r && (r = r.substr(0, r.length - 1)), n + r);
              },
              basename: function (t) {
                if (t === "/") return "/";
                ((t = Et.normalize(t)), (t = t.replace(/\/$/, "")));
                var e = t.lastIndexOf("/");
                return e === -1 ? t : t.substr(e + 1);
              },
              join: function () {
                var e = Array.prototype.slice.call(arguments);
                return Et.normalize(e.join("/"));
              },
              join2: function (t, n) {
                return Et.normalize(t + "/" + n);
              },
            },
            kt = function () {
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
              Ie(
                "no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };",
              );
            },
            It = function (t) {
              return (It = kt())(t);
            },
            Tt = {
              resolve: function () {
                for (
                  var e = "", t = !1, n = arguments.length - 1;
                  n >= -1 && !t;
                  n--
                ) {
                  var r = n >= 0 ? arguments[n] : Yt.cwd();
                  if (typeof r != "string")
                    throw new TypeError(
                      "Arguments to path.resolve must be strings",
                    );
                  if (!r) return "";
                  ((e = r + "/" + e), (t = Et.isAbs(r)));
                }
                return (
                  (e = Et.normalizeArray(
                    e.split("/").filter(function (e) {
                      return !!e;
                    }),
                    !t,
                  ).join("/")),
                  (t ? "/" : "") + e || "."
                );
              },
              relative: function (t, n) {
                ((t = Tt.resolve(t).substr(1)), (n = Tt.resolve(n).substr(1)));
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
            Dt =
              typeof TextDecoder != "undefined"
                ? new TextDecoder("utf8")
                : void 0,
            xt = function (t, n, r) {
              for (var e = n + r, o = n; t[o] && !(o >= e); ) ++o;
              if (o - n > 16 && t.buffer && Dt) return Dt.decode(t.slice(n, o));
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
                        gn(
                          "Invalid UTF-8 leading byte " +
                            rn(i) +
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
            $t = [],
            Pt = function (t) {
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
            Nt = function (t, n, r, o) {
              if ((z(typeof t == "string"), !(o > 0))) return 0;
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
                    gn(
                      "Invalid Unicode code point " +
                        rn(l) +
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
          function Mt(e, t, n) {
            var r = n > 0 ? n : Pt(e) + 1,
              o = new Array(r),
              a = Nt(e, o, 0, o.length);
            return (t && (o.length = a), o);
          }
          var wt = function () {
              if (!$t.length) {
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
                $t = Mt(e, !0);
              }
              return $t.shift();
            },
            At = {
              ttys: [],
              init: function () {},
              shutdown: function () {},
              register: function (t, n) {
                ((At.ttys[t] = { input: [], output: [], ops: n }),
                  Yt.registerDevice(t, At.stream_ops));
              },
              stream_ops: {
                open: function (t) {
                  var e = At.ttys[t.node.rdev];
                  if (!e) throw new Yt.ErrnoError(43);
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
                    throw new Yt.ErrnoError(60);
                  for (var e = 0, i = 0; i < o; i++) {
                    var l;
                    try {
                      l = t.tty.ops.get_char(t.tty);
                    } catch (e) {
                      throw new Yt.ErrnoError(29);
                    }
                    if (l === void 0 && e === 0) throw new Yt.ErrnoError(6);
                    if (l == null) break;
                    (e++, (n[r + i] = l));
                  }
                  return (e && (t.node.timestamp = Date.now()), e);
                },
                write: function (t, n, r, o, a) {
                  if (!t.tty || !t.tty.ops.put_char)
                    throw new Yt.ErrnoError(60);
                  try {
                    for (var e = 0; e < o; e++)
                      t.tty.ops.put_char(t.tty, n[r + e]);
                  } catch (e) {
                    throw new Yt.ErrnoError(29);
                  }
                  return (o && (t.node.timestamp = Date.now()), e);
                },
              },
              default_tty_ops: {
                get_char: function (t) {
                  return wt();
                },
                put_char: function (t, n) {
                  n === null || n === 10
                    ? (F(xt(t.output, 0)), (t.output = []))
                    : n != 0 && t.output.push(n);
                },
                fsync: function (t) {
                  t.output &&
                    t.output.length > 0 &&
                    (F(xt(t.output, 0)), (t.output = []));
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
                    ? (O(xt(t.output, 0)), (t.output = []))
                    : n != 0 && t.output.push(n);
                },
                fsync: function (t) {
                  t.output &&
                    t.output.length > 0 &&
                    (O(xt(t.output, 0)), (t.output = []));
                },
              },
            },
            Ft = function (t, n) {
              return (
                z(n, "alignment argument is required"),
                Math.ceil(t / n) * n
              );
            },
            Ot = function (t) {
              t = Ft(t, 65536);
              var e = Ki(65536, t);
              return e ? Rt(e, t) : 0;
            },
            Bt = {
              ops_table: null,
              mount: function (t) {
                return Bt.createNode(null, "/", 16895, 0);
              },
              createNode: function (t, n, r, o) {
                if (Yt.isBlkdev(r) || Yt.isFIFO(r)) throw new Yt.ErrnoError(63);
                Bt.ops_table ||
                  (Bt.ops_table = {
                    dir: {
                      node: {
                        getattr: Bt.node_ops.getattr,
                        setattr: Bt.node_ops.setattr,
                        lookup: Bt.node_ops.lookup,
                        mknod: Bt.node_ops.mknod,
                        rename: Bt.node_ops.rename,
                        unlink: Bt.node_ops.unlink,
                        rmdir: Bt.node_ops.rmdir,
                        readdir: Bt.node_ops.readdir,
                        symlink: Bt.node_ops.symlink,
                      },
                      stream: { llseek: Bt.stream_ops.llseek },
                    },
                    file: {
                      node: {
                        getattr: Bt.node_ops.getattr,
                        setattr: Bt.node_ops.setattr,
                      },
                      stream: {
                        llseek: Bt.stream_ops.llseek,
                        read: Bt.stream_ops.read,
                        write: Bt.stream_ops.write,
                        allocate: Bt.stream_ops.allocate,
                        mmap: Bt.stream_ops.mmap,
                        msync: Bt.stream_ops.msync,
                      },
                    },
                    link: {
                      node: {
                        getattr: Bt.node_ops.getattr,
                        setattr: Bt.node_ops.setattr,
                        readlink: Bt.node_ops.readlink,
                      },
                      stream: {},
                    },
                    chrdev: {
                      node: {
                        getattr: Bt.node_ops.getattr,
                        setattr: Bt.node_ops.setattr,
                      },
                      stream: Yt.chrdev_stream_ops,
                    },
                  });
                var e = Yt.createNode(t, n, r, o);
                return (
                  Yt.isDir(e.mode)
                    ? ((e.node_ops = Bt.ops_table.dir.node),
                      (e.stream_ops = Bt.ops_table.dir.stream),
                      (e.contents = {}))
                    : Yt.isFile(e.mode)
                      ? ((e.node_ops = Bt.ops_table.file.node),
                        (e.stream_ops = Bt.ops_table.file.stream),
                        (e.usedBytes = 0),
                        (e.contents = null))
                      : Yt.isLink(e.mode)
                        ? ((e.node_ops = Bt.ops_table.link.node),
                          (e.stream_ops = Bt.ops_table.link.stream))
                        : Yt.isChrdev(e.mode) &&
                          ((e.node_ops = Bt.ops_table.chrdev.node),
                          (e.stream_ops = Bt.ops_table.chrdev.stream)),
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
                    (e.dev = Yt.isChrdev(t.mode) ? t.id : 1),
                    (e.ino = t.id),
                    (e.mode = t.mode),
                    (e.nlink = 1),
                    (e.uid = 0),
                    (e.gid = 0),
                    (e.rdev = t.rdev),
                    Yt.isDir(t.mode)
                      ? (e.size = 4096)
                      : Yt.isFile(t.mode)
                        ? (e.size = t.usedBytes)
                        : Yt.isLink(t.mode)
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
                    n.size !== void 0 && Bt.resizeFileStorage(t, n.size));
                },
                lookup: function (t, n) {
                  throw Yt.genericErrors[44];
                },
                mknod: function (t, n, r, o) {
                  return Bt.createNode(t, n, r, o);
                },
                rename: function (t, n, r) {
                  if (Yt.isDir(t.mode)) {
                    var e;
                    try {
                      e = Yt.lookupNode(n, r);
                    } catch (e) {}
                    if (e)
                      for (var o in e.contents) throw new Yt.ErrnoError(55);
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
                  var e = Yt.lookupNode(t, n);
                  for (var r in e.contents) throw new Yt.ErrnoError(55);
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
                  var e = Bt.createNode(t, n, 41471, 0);
                  return ((e.link = r), e);
                },
                readlink: function (t) {
                  if (!Yt.isLink(t.mode)) throw new Yt.ErrnoError(28);
                  return t.link;
                },
              },
              stream_ops: {
                read: function (t, n, r, o, a) {
                  var e = t.node.contents;
                  if (a >= t.node.usedBytes) return 0;
                  var i = Math.min(t.node.usedBytes - a, o);
                  if ((z(i >= 0), i > 8 && e.subarray))
                    n.set(e.subarray(a, a + i), r);
                  else for (var l = 0; l < i; l++) n[r + l] = e[a + l];
                  return i;
                },
                write: function (t, n, r, o, a, l) {
                  if (
                    (z(!(n instanceof ArrayBuffer)),
                    n.buffer === i().buffer && (l = !1),
                    !o)
                  )
                    return 0;
                  var e = t.node;
                  if (
                    ((e.timestamp = Date.now()),
                    n.subarray && (!e.contents || e.contents.subarray))
                  ) {
                    if (l)
                      return (
                        z(
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
                    (Bt.expandFileStorage(e, a + o),
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
                        Yt.isFile(t.node.mode) &&
                        (e += t.node.usedBytes),
                    e < 0)
                  )
                    throw new Yt.ErrnoError(28);
                  return e;
                },
                allocate: function (t, n, r) {
                  (Bt.expandFileStorage(t.node, n + r),
                    (t.node.usedBytes = Math.max(t.node.usedBytes, n + r)));
                },
                mmap: function (t, n, r, o, a) {
                  if (!Yt.isFile(t.node.mode)) throw new Yt.ErrnoError(43);
                  var e,
                    l,
                    s = t.node.contents;
                  if (!(a & 2) && s.buffer === i().buffer)
                    ((l = !1), (e = s.byteOffset));
                  else {
                    if (
                      ((r > 0 || r + n < s.length) &&
                        (s.subarray
                          ? (s = s.subarray(r, r + n))
                          : (s = Array.prototype.slice.call(s, r, r + n))),
                      (l = !0),
                      (e = Ot(n)),
                      !e)
                    )
                      throw new Yt.ErrnoError(48);
                    i().set(s, e);
                  }
                  return { ptr: e, allocated: l };
                },
                msync: function (t, n, r, o, a) {
                  return (Bt.stream_ops.write(t, n, 0, o, r, !1), 0);
                },
              },
            },
            Wt = function (t, n, r, o) {
              var e = o ? "" : Le("al " + t);
              (M(
                t,
                function (r) {
                  (z(
                    r,
                    'Loading data file "' + t + '" failed (no arrayBuffer).',
                  ),
                    n(new Uint8Array(r)),
                    e && ke(e));
                },
                function (e) {
                  if (r) r();
                  else throw 'Loading data file "' + t + '" failed.';
                },
              ),
                e && Ee(e));
            },
            qt = C.preloadPlugins || [];
          function Ut(e, t, n, r) {
            typeof $a != "undefined" && $a.init();
            var o = !1;
            return (
              qt.forEach(function (a) {
                o || (a.canHandle(t) && (a.handle(e, t, n, r), (o = !0)));
              }),
              o
            );
          }
          function Vt(e, t, n, r, o, a, i, l, s, u) {
            var c = t ? Tt.resolve(Et.join2(e, t)) : e,
              d = Le("cp " + c);
            function m(n) {
              function m(n) {
                (u && u(),
                  l || Yt.createDataFile(e, t, n, r, o, s),
                  a && a(),
                  ke(d));
              }
              Ut(n, c, m, function () {
                (i && i(), ke(d));
              }) || m(n);
            }
            (Ee(d),
              typeof n == "string"
                ? Wt(
                    n,
                    function (e) {
                      return m(e);
                    },
                    i,
                  )
                : m(n));
          }
          function Ht(e) {
            var t = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
              n = t[e];
            if (typeof n == "undefined")
              throw new Error("Unknown file open mode: " + e);
            return n;
          }
          function Gt(e, t) {
            var n = 0;
            return (e && (n |= 365), t && (n |= 146), n);
          }
          var zt = {
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
                  z(e, "IDBFS used, but indexedDB not supported"),
                  e
                );
              }),
              DB_VERSION: 21,
              DB_STORE_NAME: "FILE_DATA",
              mount: function (t) {
                return Bt.mount.apply(null, arguments);
              },
              syncfs: function (t, n, r) {
                zt.getLocalSet(t, function (e, o) {
                  if (e) return r(e);
                  zt.getRemoteSet(t, function (e, t) {
                    if (e) return r(e);
                    var a = n ? t : o,
                      i = n ? o : t;
                    zt.reconcile(a, i, r);
                  });
                });
              },
              quit: function () {
                (Object.values(zt.dbs).forEach(function (e) {
                  return e.close();
                }),
                  (zt.dbs = {}));
              },
              getDB: function (t, n) {
                var e = zt.dbs[t];
                if (e) return n(null, e);
                var r;
                try {
                  r = zt.indexedDB().open(t, zt.DB_VERSION);
                } catch (e) {
                  return n(e);
                }
                if (!r) return n("Unable to connect to IndexedDB");
                ((r.onupgradeneeded = function (e) {
                  var t = e.target.result,
                    n = e.target.transaction,
                    r;
                  (t.objectStoreNames.contains(zt.DB_STORE_NAME)
                    ? (r = n.objectStore(zt.DB_STORE_NAME))
                    : (r = t.createObjectStore(zt.DB_STORE_NAME)),
                    r.indexNames.contains("timestamp") ||
                      r.createIndex("timestamp", "timestamp", { unique: !1 }));
                }),
                  (r.onsuccess = function () {
                    ((e = r.result), (zt.dbs[t] = e), n(null, e));
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
                    return Et.join2(e, t);
                  };
                }
                for (
                  var a = Yt.readdir(t.mountpoint)
                    .filter(r)
                    .map(o(t.mountpoint));
                  a.length;
                ) {
                  var i = a.pop(),
                    l;
                  try {
                    l = Yt.stat(i);
                  } catch (e) {
                    return n(e);
                  }
                  (Yt.isDir(l.mode) &&
                    a.push.apply(a, Yt.readdir(i).filter(r).map(o(i))),
                    (e[i] = { timestamp: l.mtime }));
                }
                return n(null, { type: "local", entries: e });
              },
              getRemoteSet: function (t, n) {
                var e = {};
                zt.getDB(t.mountpoint, function (t, r) {
                  if (t) return n(t);
                  try {
                    var o = r.transaction([zt.DB_STORE_NAME], "readonly");
                    o.onerror = function (e) {
                      (n(e.target.error), e.preventDefault());
                    };
                    var a = o.objectStore(zt.DB_STORE_NAME),
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
                  var o = Yt.lookupPath(t);
                  ((r = o.node), (e = Yt.stat(t)));
                } catch (e) {
                  return n(e);
                }
                return Yt.isDir(e.mode)
                  ? n(null, { timestamp: e.mtime, mode: e.mode })
                  : Yt.isFile(e.mode)
                    ? ((r.contents = Bt.getFileDataAsTypedArray(r)),
                      n(null, {
                        timestamp: e.mtime,
                        mode: e.mode,
                        contents: r.contents,
                      }))
                    : n(new Error("node type not supported"));
              },
              storeLocalEntry: function (t, n, r) {
                try {
                  if (Yt.isDir(n.mode)) Yt.mkdirTree(t, n.mode);
                  else if (Yt.isFile(n.mode))
                    Yt.writeFile(t, n.contents, { canOwn: !0 });
                  else return r(new Error("node type not supported"));
                  (Yt.chmod(t, n.mode), Yt.utime(t, n.timestamp, n.timestamp));
                } catch (e) {
                  return r(e);
                }
                r(null);
              },
              removeLocalEntry: function (t, n) {
                try {
                  var e = Yt.stat(t);
                  Yt.isDir(e.mode)
                    ? Yt.rmdir(t)
                    : Yt.isFile(e.mode) && Yt.unlink(t);
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
                var i = [];
                if (
                  (Object.keys(n.entries).forEach(function (n) {
                    t.entries[n] || (i.push(n), e++);
                  }),
                  !e)
                )
                  return r(null);
                var l = !1,
                  s = t.type === "remote" ? t.db : n.db,
                  u = s.transaction([zt.DB_STORE_NAME], "readwrite"),
                  c = u.objectStore(zt.DB_STORE_NAME);
                function d(e) {
                  if (e && !l) return ((l = !0), r(e));
                }
                ((u.onerror = function (e) {
                  (d(a.error), e.preventDefault());
                }),
                  (u.oncomplete = function (e) {
                    l || r(null);
                  }),
                  o.sort().forEach(function (e) {
                    n.type === "local"
                      ? zt.loadRemoteEntry(c, e, function (t, n) {
                          if (t) return d(t);
                          zt.storeLocalEntry(e, n, d);
                        })
                      : zt.loadLocalEntry(e, function (t, n) {
                          if (t) return d(t);
                          zt.storeRemoteEntry(c, e, n, d);
                        });
                  }),
                  i
                    .sort()
                    .reverse()
                    .forEach(function (e) {
                      n.type === "local"
                        ? zt.removeLocalEntry(e, d)
                        : zt.removeRemoteEntry(c, e, d);
                    }));
              },
            },
            jt = {
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
            Kt = {};
          function Qt(e) {
            return (
              gn(
                "warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling",
              ),
              e
            );
          }
          function Xt(e) {
            var t = /\b_Z[\w\d_]+/g;
            return e.replace(t, function (e) {
              var t = Qt(e);
              return e === t ? e : t + " [" + e + "]";
            });
          }
          var Yt = {
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
                if ((n === void 0 && (n = {}), (t = Tt.resolve(t)), !t))
                  return { path: "", node: null };
                var e = { follow_mount: !0, recurse_count: 0 };
                if (((n = Object.assign(e, n)), n.recurse_count > 8))
                  throw new Yt.ErrnoError(32);
                for (
                  var r = t.split("/").filter(function (e) {
                      return !!e;
                    }),
                    o = Yt.root,
                    a = "/",
                    i = 0;
                  i < r.length;
                  i++
                ) {
                  var l = i === r.length - 1;
                  if (l && n.parent) break;
                  if (
                    ((o = Yt.lookupNode(o, r[i])),
                    (a = Et.join2(a, r[i])),
                    Yt.isMountpoint(o) &&
                      (!l || (l && n.follow_mount)) &&
                      (o = o.mounted.root),
                    !l || n.follow)
                  )
                    for (var s = 0; Yt.isLink(o.mode); ) {
                      var u = Yt.readlink(a);
                      a = Tt.resolve(Et.dirname(a), u);
                      var c = Yt.lookupPath(a, {
                        recurse_count: n.recurse_count + 1,
                      });
                      if (((o = c.node), s++ > 40)) throw new Yt.ErrnoError(32);
                    }
                }
                return { path: a, node: o };
              },
              getPath: function (t) {
                for (var e; ; ) {
                  if (Yt.isRoot(t)) {
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
                return ((t + e) >>> 0) % Yt.nameTable.length;
              },
              hashAddNode: function (t) {
                var e = Yt.hashName(t.parent.id, t.name);
                ((t.name_next = Yt.nameTable[e]), (Yt.nameTable[e] = t));
              },
              hashRemoveNode: function (t) {
                var e = Yt.hashName(t.parent.id, t.name);
                if (Yt.nameTable[e] === t) Yt.nameTable[e] = t.name_next;
                else
                  for (var n = Yt.nameTable[e]; n; ) {
                    if (n.name_next === t) {
                      n.name_next = t.name_next;
                      break;
                    }
                    n = n.name_next;
                  }
              },
              lookupNode: function (t, n) {
                var e = Yt.mayLookup(t);
                if (e) throw new Yt.ErrnoError(e, t);
                for (
                  var r = Yt.hashName(t.id, n), o = Yt.nameTable[r];
                  o;
                  o = o.name_next
                ) {
                  var a = o.name;
                  if (o.parent.id === t.id && a === n) return o;
                }
                return Yt.lookup(t, n);
              },
              createNode: function (t, n, r, o) {
                z(typeof t == "object");
                var e = new Yt.FSNode(t, n, r, o);
                return (Yt.hashAddNode(e), e);
              },
              destroyNode: function (t) {
                Yt.hashRemoveNode(t);
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
                return Yt.ignorePermissions
                  ? 0
                  : (n.includes("r") && !(t.mode & 292)) ||
                      (n.includes("w") && !(t.mode & 146)) ||
                      (n.includes("x") && !(t.mode & 73))
                    ? 2
                    : 0;
              },
              mayLookup: function (t) {
                var e = Yt.nodePermissions(t, "x");
                return e || (t.node_ops.lookup ? 0 : 2);
              },
              mayCreate: function (t, n) {
                try {
                  var e = Yt.lookupNode(t, n);
                  return 20;
                } catch (e) {}
                return Yt.nodePermissions(t, "wx");
              },
              mayDelete: function (t, n, r) {
                var e;
                try {
                  e = Yt.lookupNode(t, n);
                } catch (e) {
                  return e.errno;
                }
                var o = Yt.nodePermissions(t, "wx");
                if (o) return o;
                if (r) {
                  if (!Yt.isDir(e.mode)) return 54;
                  if (Yt.isRoot(e) || Yt.getPath(e) === Yt.cwd()) return 10;
                } else if (Yt.isDir(e.mode)) return 31;
                return 0;
              },
              mayOpen: function (t, n) {
                return t
                  ? Yt.isLink(t.mode)
                    ? 32
                    : Yt.isDir(t.mode) &&
                        (Yt.flagsToPermissionString(n) !== "r" || n & 512)
                      ? 31
                      : Yt.nodePermissions(t, Yt.flagsToPermissionString(n))
                  : 44;
              },
              MAX_OPEN_FDS: 4096,
              nextfd: function () {
                for (var e = 0; e <= Yt.MAX_OPEN_FDS; e++)
                  if (!Yt.streams[e]) return e;
                throw new Yt.ErrnoError(33);
              },
              getStreamChecked: function (t) {
                var e = Yt.getStream(t);
                if (!e) throw new Yt.ErrnoError(8);
                return e;
              },
              getStream: function (t) {
                return Yt.streams[t];
              },
              createStream: function (t, n) {
                return (
                  n === void 0 && (n = -1),
                  Yt.FSStream ||
                    ((Yt.FSStream = function () {
                      this.shared = {};
                    }),
                    (Yt.FSStream.prototype = {}),
                    Object.defineProperties(Yt.FSStream.prototype, {
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
                  (t = Object.assign(new Yt.FSStream(), t)),
                  n == -1 && (n = Yt.nextfd()),
                  (t.fd = n),
                  (Yt.streams[n] = t),
                  t
                );
              },
              closeStream: function (t) {
                Yt.streams[t] = null;
              },
              chrdev_stream_ops: {
                open: function (t) {
                  var e = Yt.getDevice(t.node.rdev);
                  ((t.stream_ops = e.stream_ops),
                    t.stream_ops.open && t.stream_ops.open(t));
                },
                llseek: function () {
                  throw new Yt.ErrnoError(70);
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
                Yt.devices[t] = { stream_ops: n };
              },
              getDevice: function (t) {
                return Yt.devices[t];
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
                  Yt.syncFSRequests++,
                  Yt.syncFSRequests > 1 &&
                    O(
                      "warning: " +
                        Yt.syncFSRequests +
                        " FS.syncfs operations in flight at once, probably just doing extra work",
                    ));
                var e = Yt.getMounts(Yt.root.mount),
                  r = 0;
                function o(e) {
                  return (z(Yt.syncFSRequests > 0), Yt.syncFSRequests--, n(e));
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
                if (e && Yt.root) throw new Yt.ErrnoError(10);
                if (!e && !o) {
                  var i = Yt.lookupPath(r, { follow_mount: !1 });
                  if (((r = i.path), (a = i.node), Yt.isMountpoint(a)))
                    throw new Yt.ErrnoError(10);
                  if (!Yt.isDir(a.mode)) throw new Yt.ErrnoError(54);
                }
                var l = { type: t, opts: n, mountpoint: r, mounts: [] },
                  s = t.mount(l);
                return (
                  (s.mount = l),
                  (l.root = s),
                  e
                    ? (Yt.root = s)
                    : a && ((a.mounted = l), a.mount && a.mount.mounts.push(l)),
                  s
                );
              },
              unmount: function (t) {
                var e = Yt.lookupPath(t, { follow_mount: !1 });
                if (!Yt.isMountpoint(e.node)) throw new Yt.ErrnoError(28);
                var n = e.node,
                  r = n.mounted,
                  o = Yt.getMounts(r);
                (Object.keys(Yt.nameTable).forEach(function (e) {
                  for (var t = Yt.nameTable[e]; t; ) {
                    var n = t.name_next;
                    (o.includes(t.mount) && Yt.destroyNode(t), (t = n));
                  }
                }),
                  (n.mounted = null));
                var a = n.mount.mounts.indexOf(r);
                (z(a !== -1), n.mount.mounts.splice(a, 1));
              },
              lookup: function (t, n) {
                return t.node_ops.lookup(t, n);
              },
              mknod: function (t, n, r) {
                var e = Yt.lookupPath(t, { parent: !0 }),
                  o = e.node,
                  a = Et.basename(t);
                if (!a || a === "." || a === "..") throw new Yt.ErrnoError(28);
                var i = Yt.mayCreate(o, a);
                if (i) throw new Yt.ErrnoError(i);
                if (!o.node_ops.mknod) throw new Yt.ErrnoError(63);
                return o.node_ops.mknod(o, a, n, r);
              },
              create: function (t, n) {
                return (
                  (n = n !== void 0 ? n : 438),
                  (n &= 4095),
                  (n |= 32768),
                  Yt.mknod(t, n, 0)
                );
              },
              mkdir: function (t, n) {
                return (
                  (n = n !== void 0 ? n : 511),
                  (n &= 1023),
                  (n |= 16384),
                  Yt.mknod(t, n, 0)
                );
              },
              mkdirTree: function (t, n) {
                for (var e = t.split("/"), r = "", o = 0; o < e.length; ++o)
                  if (e[o]) {
                    r += "/" + e[o];
                    try {
                      Yt.mkdir(r, n);
                    } catch (e) {
                      if (e.errno != 20) throw e;
                    }
                  }
              },
              mkdev: function (t, n, r) {
                return (
                  typeof r == "undefined" && ((r = n), (n = 438)),
                  (n |= 8192),
                  Yt.mknod(t, n, r)
                );
              },
              symlink: function (t, n) {
                if (!Tt.resolve(t)) throw new Yt.ErrnoError(44);
                var e = Yt.lookupPath(n, { parent: !0 }),
                  r = e.node;
                if (!r) throw new Yt.ErrnoError(44);
                var o = Et.basename(n),
                  a = Yt.mayCreate(r, o);
                if (a) throw new Yt.ErrnoError(a);
                if (!r.node_ops.symlink) throw new Yt.ErrnoError(63);
                return r.node_ops.symlink(r, o, t);
              },
              rename: function (t, n) {
                var e = Et.dirname(t),
                  r = Et.dirname(n),
                  o = Et.basename(t),
                  a = Et.basename(n),
                  i,
                  l,
                  s;
                if (
                  ((i = Yt.lookupPath(t, { parent: !0 })),
                  (l = i.node),
                  (i = Yt.lookupPath(n, { parent: !0 })),
                  (s = i.node),
                  !l || !s)
                )
                  throw new Yt.ErrnoError(44);
                if (l.mount !== s.mount) throw new Yt.ErrnoError(75);
                var u = Yt.lookupNode(l, o),
                  c = Tt.relative(t, r);
                if (c.charAt(0) !== ".") throw new Yt.ErrnoError(28);
                if (((c = Tt.relative(n, e)), c.charAt(0) !== "."))
                  throw new Yt.ErrnoError(55);
                var d;
                try {
                  d = Yt.lookupNode(s, a);
                } catch (e) {}
                if (u !== d) {
                  var m = Yt.isDir(u.mode),
                    p = Yt.mayDelete(l, o, m);
                  if (p) throw new Yt.ErrnoError(p);
                  if (((p = d ? Yt.mayDelete(s, a, m) : Yt.mayCreate(s, a)), p))
                    throw new Yt.ErrnoError(p);
                  if (!l.node_ops.rename) throw new Yt.ErrnoError(63);
                  if (Yt.isMountpoint(u) || (d && Yt.isMountpoint(d)))
                    throw new Yt.ErrnoError(10);
                  if (s !== l && ((p = Yt.nodePermissions(l, "w")), p))
                    throw new Yt.ErrnoError(p);
                  Yt.hashRemoveNode(u);
                  try {
                    l.node_ops.rename(u, s, a);
                  } catch (e) {
                    throw e;
                  } finally {
                    Yt.hashAddNode(u);
                  }
                }
              },
              rmdir: function (t) {
                var e = Yt.lookupPath(t, { parent: !0 }),
                  n = e.node,
                  r = Et.basename(t),
                  o = Yt.lookupNode(n, r),
                  a = Yt.mayDelete(n, r, !0);
                if (a) throw new Yt.ErrnoError(a);
                if (!n.node_ops.rmdir) throw new Yt.ErrnoError(63);
                if (Yt.isMountpoint(o)) throw new Yt.ErrnoError(10);
                (n.node_ops.rmdir(n, r), Yt.destroyNode(o));
              },
              readdir: function (t) {
                var e = Yt.lookupPath(t, { follow: !0 }),
                  n = e.node;
                if (!n.node_ops.readdir) throw new Yt.ErrnoError(54);
                return n.node_ops.readdir(n);
              },
              unlink: function (t) {
                var e = Yt.lookupPath(t, { parent: !0 }),
                  n = e.node;
                if (!n) throw new Yt.ErrnoError(44);
                var r = Et.basename(t),
                  o = Yt.lookupNode(n, r),
                  a = Yt.mayDelete(n, r, !1);
                if (a) throw new Yt.ErrnoError(a);
                if (!n.node_ops.unlink) throw new Yt.ErrnoError(63);
                if (Yt.isMountpoint(o)) throw new Yt.ErrnoError(10);
                (n.node_ops.unlink(n, r), Yt.destroyNode(o));
              },
              readlink: function (t) {
                var e = Yt.lookupPath(t),
                  n = e.node;
                if (!n) throw new Yt.ErrnoError(44);
                if (!n.node_ops.readlink) throw new Yt.ErrnoError(28);
                return Tt.resolve(Yt.getPath(n.parent), n.node_ops.readlink(n));
              },
              stat: function (t, n) {
                var e = Yt.lookupPath(t, { follow: !n }),
                  r = e.node;
                if (!r) throw new Yt.ErrnoError(44);
                if (!r.node_ops.getattr) throw new Yt.ErrnoError(63);
                return r.node_ops.getattr(r);
              },
              lstat: function (t) {
                return Yt.stat(t, !0);
              },
              chmod: function (t, n, r) {
                var e;
                if (typeof t == "string") {
                  var o = Yt.lookupPath(t, { follow: !r });
                  e = o.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new Yt.ErrnoError(63);
                e.node_ops.setattr(e, {
                  mode: (n & 4095) | (e.mode & -4096),
                  timestamp: Date.now(),
                });
              },
              lchmod: function (t, n) {
                Yt.chmod(t, n, !0);
              },
              fchmod: function (t, n) {
                var e = Yt.getStreamChecked(t);
                Yt.chmod(e.node, n);
              },
              chown: function (t, n, r, o) {
                var e;
                if (typeof t == "string") {
                  var a = Yt.lookupPath(t, { follow: !o });
                  e = a.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new Yt.ErrnoError(63);
                e.node_ops.setattr(e, { timestamp: Date.now() });
              },
              lchown: function (t, n, r) {
                Yt.chown(t, n, r, !0);
              },
              fchown: function (t, n, r) {
                var e = Yt.getStreamChecked(t);
                Yt.chown(e.node, n, r);
              },
              truncate: function (t, n) {
                if (n < 0) throw new Yt.ErrnoError(28);
                var e;
                if (typeof t == "string") {
                  var r = Yt.lookupPath(t, { follow: !0 });
                  e = r.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new Yt.ErrnoError(63);
                if (Yt.isDir(e.mode)) throw new Yt.ErrnoError(31);
                if (!Yt.isFile(e.mode)) throw new Yt.ErrnoError(28);
                var o = Yt.nodePermissions(e, "w");
                if (o) throw new Yt.ErrnoError(o);
                e.node_ops.setattr(e, { size: n, timestamp: Date.now() });
              },
              ftruncate: function (t, n) {
                var e = Yt.getStreamChecked(t);
                if ((e.flags & 2097155) === 0) throw new Yt.ErrnoError(28);
                Yt.truncate(e.node, n);
              },
              utime: function (t, n, r) {
                var e = Yt.lookupPath(t, { follow: !0 }),
                  o = e.node;
                o.node_ops.setattr(o, { timestamp: Math.max(n, r) });
              },
              open: function (t, n, r) {
                if (t === "") throw new Yt.ErrnoError(44);
                ((n = typeof n == "string" ? Ht(n) : n),
                  (r = typeof r == "undefined" ? 438 : r),
                  n & 64 ? (r = (r & 4095) | 32768) : (r = 0));
                var e;
                if (typeof t == "object") e = t;
                else {
                  t = Et.normalize(t);
                  try {
                    var o = Yt.lookupPath(t, { follow: !(n & 131072) });
                    e = o.node;
                  } catch (e) {}
                }
                var a = !1;
                if (n & 64)
                  if (e) {
                    if (n & 128) throw new Yt.ErrnoError(20);
                  } else ((e = Yt.mknod(t, r, 0)), (a = !0));
                if (!e) throw new Yt.ErrnoError(44);
                if (
                  (Yt.isChrdev(e.mode) && (n &= -513),
                  n & 65536 && !Yt.isDir(e.mode))
                )
                  throw new Yt.ErrnoError(54);
                if (!a) {
                  var i = Yt.mayOpen(e, n);
                  if (i) throw new Yt.ErrnoError(i);
                }
                (n & 512 && !a && Yt.truncate(e, 0), (n &= -131713));
                var l = Yt.createStream({
                  node: e,
                  path: Yt.getPath(e),
                  flags: n,
                  seekable: !0,
                  position: 0,
                  stream_ops: e.stream_ops,
                  ungotten: [],
                  error: !1,
                });
                return (
                  l.stream_ops.open && l.stream_ops.open(l),
                  C.logReadFiles &&
                    !(n & 1) &&
                    (Yt.readFiles || (Yt.readFiles = {}),
                    t in Yt.readFiles || (Yt.readFiles[t] = 1)),
                  l
                );
              },
              close: function (t) {
                if (Yt.isClosed(t)) throw new Yt.ErrnoError(8);
                t.getdents && (t.getdents = null);
                try {
                  t.stream_ops.close && t.stream_ops.close(t);
                } catch (e) {
                  throw e;
                } finally {
                  Yt.closeStream(t.fd);
                }
                t.fd = null;
              },
              isClosed: function (t) {
                return t.fd === null;
              },
              llseek: function (t, n, r) {
                if (Yt.isClosed(t)) throw new Yt.ErrnoError(8);
                if (!t.seekable || !t.stream_ops.llseek)
                  throw new Yt.ErrnoError(70);
                if (r != 0 && r != 1 && r != 2) throw new Yt.ErrnoError(28);
                return (
                  (t.position = t.stream_ops.llseek(t, n, r)),
                  (t.ungotten = []),
                  t.position
                );
              },
              read: function (t, n, r, o, a) {
                if ((z(r >= 0), o < 0 || a < 0)) throw new Yt.ErrnoError(28);
                if (Yt.isClosed(t)) throw new Yt.ErrnoError(8);
                if ((t.flags & 2097155) === 1) throw new Yt.ErrnoError(8);
                if (Yt.isDir(t.node.mode)) throw new Yt.ErrnoError(31);
                if (!t.stream_ops.read) throw new Yt.ErrnoError(28);
                var e = typeof a != "undefined";
                if (!e) a = t.position;
                else if (!t.seekable) throw new Yt.ErrnoError(70);
                var i = t.stream_ops.read(t, n, r, o, a);
                return (e || (t.position += i), i);
              },
              write: function (t, n, r, o, a, i) {
                if ((z(r >= 0), o < 0 || a < 0)) throw new Yt.ErrnoError(28);
                if (Yt.isClosed(t)) throw new Yt.ErrnoError(8);
                if ((t.flags & 2097155) === 0) throw new Yt.ErrnoError(8);
                if (Yt.isDir(t.node.mode)) throw new Yt.ErrnoError(31);
                if (!t.stream_ops.write) throw new Yt.ErrnoError(28);
                t.seekable && t.flags & 1024 && Yt.llseek(t, 0, 2);
                var e = typeof a != "undefined";
                if (!e) a = t.position;
                else if (!t.seekable) throw new Yt.ErrnoError(70);
                var l = t.stream_ops.write(t, n, r, o, a, i);
                return (e || (t.position += l), l);
              },
              allocate: function (t, n, r) {
                if (Yt.isClosed(t)) throw new Yt.ErrnoError(8);
                if (n < 0 || r <= 0) throw new Yt.ErrnoError(28);
                if ((t.flags & 2097155) === 0) throw new Yt.ErrnoError(8);
                if (!Yt.isFile(t.node.mode) && !Yt.isDir(t.node.mode))
                  throw new Yt.ErrnoError(43);
                if (!t.stream_ops.allocate) throw new Yt.ErrnoError(138);
                t.stream_ops.allocate(t, n, r);
              },
              mmap: function (t, n, r, o, a) {
                if ((o & 2) !== 0 && (a & 2) === 0 && (t.flags & 2097155) !== 2)
                  throw new Yt.ErrnoError(2);
                if ((t.flags & 2097155) === 1) throw new Yt.ErrnoError(2);
                if (!t.stream_ops.mmap) throw new Yt.ErrnoError(43);
                return t.stream_ops.mmap(t, n, r, o, a);
              },
              msync: function (t, n, r, o, a) {
                return (
                  z(r >= 0),
                  t.stream_ops.msync ? t.stream_ops.msync(t, n, r, o, a) : 0
                );
              },
              munmap: function (t) {
                return 0;
              },
              ioctl: function (t, n, r) {
                if (!t.stream_ops.ioctl) throw new Yt.ErrnoError(59);
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
                  r = Yt.open(t, n.flags),
                  o = Yt.stat(t),
                  a = o.size,
                  i = new Uint8Array(a);
                return (
                  Yt.read(r, i, 0, a, 0),
                  n.encoding === "utf8"
                    ? (e = xt(i, 0))
                    : n.encoding === "binary" && (e = i),
                  Yt.close(r),
                  e
                );
              },
              writeFile: function (t, n, r) {
                (r === void 0 && (r = {}), (r.flags = r.flags || 577));
                var e = Yt.open(t, r.flags, r.mode);
                if (typeof n == "string") {
                  var o = new Uint8Array(Pt(n) + 1),
                    a = Nt(n, o, 0, o.length);
                  Yt.write(e, o, 0, a, void 0, r.canOwn);
                } else if (ArrayBuffer.isView(n))
                  Yt.write(e, n, 0, n.byteLength, void 0, r.canOwn);
                else throw new Error("Unsupported data type");
                Yt.close(e);
              },
              cwd: function () {
                return Yt.currentPath;
              },
              chdir: function (t) {
                var e = Yt.lookupPath(t, { follow: !0 });
                if (e.node === null) throw new Yt.ErrnoError(44);
                if (!Yt.isDir(e.node.mode)) throw new Yt.ErrnoError(54);
                var n = Yt.nodePermissions(e.node, "x");
                if (n) throw new Yt.ErrnoError(n);
                Yt.currentPath = e.path;
              },
              createDefaultDirectories: function () {
                (Yt.mkdir("/tmp"),
                  Yt.mkdir("/home"),
                  Yt.mkdir("/home/web_user"));
              },
              createDefaultDevices: function () {
                (Yt.mkdir("/dev"),
                  Yt.registerDevice(Yt.makedev(1, 3), {
                    read: function () {
                      return 0;
                    },
                    write: function (t, n, r, o, a) {
                      return o;
                    },
                  }),
                  Yt.mkdev("/dev/null", Yt.makedev(1, 3)),
                  At.register(Yt.makedev(5, 0), At.default_tty_ops),
                  At.register(Yt.makedev(6, 0), At.default_tty1_ops),
                  Yt.mkdev("/dev/tty", Yt.makedev(5, 0)),
                  Yt.mkdev("/dev/tty1", Yt.makedev(6, 0)));
                var e = new Uint8Array(1024),
                  t = 0,
                  n = function () {
                    return (t === 0 && (t = It(e).byteLength), e[--t]);
                  };
                (Yt.createDevice("/dev", "random", n),
                  Yt.createDevice("/dev", "urandom", n),
                  Yt.mkdir("/dev/shm"),
                  Yt.mkdir("/dev/shm/tmp"));
              },
              createSpecialDirectories: function () {
                Yt.mkdir("/proc");
                var e = Yt.mkdir("/proc/self");
                (Yt.mkdir("/proc/self/fd"),
                  Yt.mount(
                    {
                      mount: function () {
                        var t = Yt.createNode(e, "fd", 16895, 73);
                        return (
                          (t.node_ops = {
                            lookup: function (t, n) {
                              var e = +n,
                                r = Yt.getStreamChecked(e),
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
                (C.stdin
                  ? Yt.createDevice("/dev", "stdin", C.stdin)
                  : Yt.symlink("/dev/tty", "/dev/stdin"),
                  C.stdout
                    ? Yt.createDevice("/dev", "stdout", null, C.stdout)
                    : Yt.symlink("/dev/tty", "/dev/stdout"),
                  C.stderr
                    ? Yt.createDevice("/dev", "stderr", null, C.stderr)
                    : Yt.symlink("/dev/tty1", "/dev/stderr"));
                var e = Yt.open("/dev/stdin", 0),
                  t = Yt.open("/dev/stdout", 1),
                  n = Yt.open("/dev/stderr", 1);
                (z(e.fd === 0, "invalid handle for stdin (" + e.fd + ")"),
                  z(t.fd === 1, "invalid handle for stdout (" + t.fd + ")"),
                  z(n.fd === 2, "invalid handle for stderr (" + n.fd + ")"));
              },
              ensureErrnoError: function () {
                Yt.ErrnoError ||
                  ((Yt.ErrnoError = function (t, n) {
                    ((this.name = "ErrnoError"),
                      (this.node = n),
                      (this.setErrno = function (e) {
                        this.errno = e;
                        for (var t in Kt)
                          if (Kt[t] === e) {
                            this.code = t;
                            break;
                          }
                      }),
                      this.setErrno(t),
                      (this.message = jt[t]),
                      this.stack &&
                        (Object.defineProperty(this, "stack", {
                          value: new Error().stack,
                          writable: !0,
                        }),
                        (this.stack = Xt(this.stack))));
                  }),
                  (Yt.ErrnoError.prototype = new Error()),
                  (Yt.ErrnoError.prototype.constructor = Yt.ErrnoError),
                  [44].forEach(function (e) {
                    ((Yt.genericErrors[e] = new Yt.ErrnoError(e)),
                      (Yt.genericErrors[e].stack =
                        "<generic error, no stack>"));
                  }));
              },
              staticInit: function () {
                (Yt.ensureErrnoError(),
                  (Yt.nameTable = new Array(4096)),
                  Yt.mount(Bt, {}, "/"),
                  Yt.createDefaultDirectories(),
                  Yt.createDefaultDevices(),
                  Yt.createSpecialDirectories(),
                  (Yt.filesystems = { MEMFS: Bt, IDBFS: zt }));
              },
              init: function (t, n, r) {
                (z(
                  !Yt.init.initialized,
                  "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)",
                ),
                  (Yt.init.initialized = !0),
                  Yt.ensureErrnoError(),
                  (C.stdin = t || C.stdin),
                  (C.stdout = n || C.stdout),
                  (C.stderr = r || C.stderr),
                  Yt.createStandardStreams());
              },
              quit: function () {
                ((Yt.init.initialized = !1), Fi(0));
                for (var e = 0; e < Yt.streams.length; e++) {
                  var t = Yt.streams[e];
                  t && Yt.close(t);
                }
              },
              findObject: function (t, n) {
                var e = Yt.analyzePath(t, n);
                return e.exists ? e.object : null;
              },
              analyzePath: function (t, n) {
                try {
                  var e = Yt.lookupPath(t, { follow: !n });
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
                  var e = Yt.lookupPath(t, { parent: !0 });
                  ((r.parentExists = !0),
                    (r.parentPath = e.path),
                    (r.parentObject = e.node),
                    (r.name = Et.basename(t)),
                    (e = Yt.lookupPath(t, { follow: !n })),
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
                t = typeof t == "string" ? t : Yt.getPath(t);
                for (var e = n.split("/").reverse(); e.length; ) {
                  var a = e.pop();
                  if (a) {
                    var i = Et.join2(t, a);
                    try {
                      Yt.mkdir(i);
                    } catch (e) {}
                    t = i;
                  }
                }
                return i;
              },
              createFile: function (t, n, r, o, a) {
                var e = Et.join2(typeof t == "string" ? t : Yt.getPath(t), n),
                  i = Gt(o, a);
                return Yt.create(e, i);
              },
              createDataFile: function (t, n, r, o, a, i) {
                var e = n;
                t &&
                  ((t = typeof t == "string" ? t : Yt.getPath(t)),
                  (e = n ? Et.join2(t, n) : t));
                var l = Gt(o, a),
                  s = Yt.create(e, l);
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
                  Yt.chmod(s, l | 146);
                  var m = Yt.open(s, 577);
                  (Yt.write(m, r, 0, r.length, 0, i),
                    Yt.close(m),
                    Yt.chmod(s, l));
                }
                return s;
              },
              createDevice: function (t, n, r, o) {
                var e = Et.join2(typeof t == "string" ? t : Yt.getPath(t), n),
                  a = Gt(!!r, !!o);
                Yt.createDevice.major || (Yt.createDevice.major = 64);
                var i = Yt.makedev(Yt.createDevice.major++, 0);
                return (
                  Yt.registerDevice(i, {
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
                          throw new Yt.ErrnoError(29);
                        }
                        if (s === void 0 && e === 0) throw new Yt.ErrnoError(6);
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
                          throw new Yt.ErrnoError(29);
                        }
                      return (a && (t.node.timestamp = Date.now()), e);
                    },
                  }),
                  Yt.mkdev(e, a, i)
                );
              },
              forceLoadFile: function (t) {
                if (t.isDevice || t.isFolder || t.link || t.contents) return !0;
                if (typeof XMLHttpRequest != "undefined")
                  throw new Error(
                    "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
                  );
                if (N)
                  try {
                    ((t.contents = Mt(N(t.url), !0)),
                      (t.usedBytes = t.contents.length));
                  } catch (e) {
                    throw new Yt.ErrnoError(29);
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
                          : Mt(e.responseText || "", !0);
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
                        F(
                          "LazyFiles on gzip forces download of the whole file when length is accessed",
                        )),
                      (this._length = t),
                      (this._chunkSize = i),
                      (this.lengthKnown = !0));
                  }),
                  typeof XMLHttpRequest != "undefined")
                ) {
                  if (!I)
                    throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                  var l = new e();
                  Object.defineProperties(l, {
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
                  var s = { isDevice: !1, contents: l };
                } else var s = { isDevice: !1, url: r };
                var u = Yt.createFile(t, n, s, o, a);
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
                    return (Yt.forceLoadFile(u), t.apply(null, arguments));
                  };
                });
                function m(e, t, n, r, o) {
                  var a = e.node.contents;
                  if (o >= a.length) return 0;
                  var i = Math.min(a.length - o, r);
                  if ((z(i >= 0), a.slice))
                    for (var l = 0; l < i; l++) t[n + l] = a[o + l];
                  else for (var l = 0; l < i; l++) t[n + l] = a.get(o + l);
                  return i;
                }
                return (
                  (c.read = function (e, t, n, r, o) {
                    return (Yt.forceLoadFile(u), m(e, t, n, r, o));
                  }),
                  (c.mmap = function (e, t, n, r, o) {
                    Yt.forceLoadFile(u);
                    var a = Ot(t);
                    if (!a) throw new Yt.ErrnoError(48);
                    return (m(e, i(), a, t, n), { ptr: a, allocated: !0 });
                  }),
                  (u.stream_ops = c),
                  u
                );
              },
              absolutePath: function () {
                Ie(
                  "FS.absolutePath has been removed; use PATH_FS.resolve instead",
                );
              },
              createFolder: function () {
                Ie("FS.createFolder has been removed; use FS.mkdir instead");
              },
              createLink: function () {
                Ie("FS.createLink has been removed; use FS.symlink instead");
              },
              joinPath: function () {
                Ie("FS.joinPath has been removed; use PATH.join instead");
              },
              mmapAlloc: function () {
                Ie(
                  "FS.mmapAlloc has been replaced by the top level function mmapAlloc",
                );
              },
              standardizePath: function () {
                Ie(
                  "FS.standardizePath has been removed; use PATH.normalize instead",
                );
              },
            },
            Jt = function (t, n) {
              return (z(typeof t == "number"), t ? xt(l(), t, n) : "");
            },
            Zt = {
              DEFAULT_POLLMASK: 5,
              calculateAt: function (t, n, r) {
                if (Et.isAbs(n)) return n;
                var e;
                if (t === -100) e = Yt.cwd();
                else {
                  var o = Zt.getStreamFromFD(t);
                  e = o.path;
                }
                if (n.length == 0) {
                  if (!r) throw new Yt.ErrnoError(44);
                  return e;
                }
                return Et.join2(e, n);
              },
              doStat: function (t, n, r) {
                try {
                  var e = t(n);
                } catch (e) {
                  if (
                    e &&
                    e.node &&
                    Et.normalize(n) !== Et.normalize(Yt.getPath(e.node))
                  )
                    return -54;
                  throw e;
                }
                ((f()[r >> 2] = e.dev),
                  (f()[(r + 4) >> 2] = e.mode),
                  (g()[(r + 8) >> 2] = e.nlink),
                  (f()[(r + 12) >> 2] = e.uid),
                  (f()[(r + 16) >> 2] = e.gid),
                  (f()[(r + 20) >> 2] = e.rdev),
                  (ee[(r + 24) >> 3] = BigInt(e.size)),
                  (f()[(r + 32) >> 2] = 4096),
                  (f()[(r + 36) >> 2] = e.blocks));
                var o = e.atime.getTime(),
                  a = e.mtime.getTime(),
                  i = e.ctime.getTime();
                return (
                  (ee[(r + 40) >> 3] = BigInt(Math.floor(o / 1e3))),
                  (g()[(r + 48) >> 2] = (o % 1e3) * 1e3),
                  (ee[(r + 56) >> 3] = BigInt(Math.floor(a / 1e3))),
                  (g()[(r + 64) >> 2] = (a % 1e3) * 1e3),
                  (ee[(r + 72) >> 3] = BigInt(Math.floor(i / 1e3))),
                  (g()[(r + 80) >> 2] = (i % 1e3) * 1e3),
                  (ee[(r + 88) >> 3] = BigInt(e.ino)),
                  0
                );
              },
              doMsync: function (t, n, r, o, a) {
                if (!Yt.isFile(n.node.mode)) throw new Yt.ErrnoError(43);
                if (o & 2) return 0;
                var e = l().slice(t, t + r);
                Yt.msync(n, e, a, r, o);
              },
              varargs: void 0,
              get: function () {
                (z(Zt.varargs != null), (Zt.varargs += 4));
                var e = f()[(Zt.varargs - 4) >> 2];
                return e;
              },
              getStr: function (t) {
                var e = Jt(t);
                return e;
              },
              getStreamFromFD: function (t) {
                var e = Yt.getStreamChecked(t);
                return e;
              },
            };
          function en(e) {
            if (x) return Wa(1, 1, e);
            ((G = e),
              pe() ||
                (an.terminateAllThreads(), C.onExit && C.onExit(e), (H = !0)),
              E(e, new yt(e)));
          }
          var tn = function (t, n) {
              if (((G = t), ic(), x)) throw (z(!n), un(t), "unwind");
              if (pe() && !n) {
                var e =
                  "program exited (with status: " +
                  t +
                  "), but keepRuntimeAlive() is set (counter=" +
                  me +
                  ") due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)";
                (v(e), O(e));
              }
              en(t);
            },
            nn = tn,
            rn = function (t) {
              return (
                z(typeof t == "number"),
                (t >>>= 0),
                "0x" + t.toString(16).padStart(8, "0")
              );
            },
            on = function (t) {
              if (t instanceof yt || t == "unwind") return G;
              (le(),
                t instanceof WebAssembly.RuntimeError &&
                  gl() <= 0 &&
                  O(
                    "Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 1048576)",
                  ),
                E(1, t));
            },
            an = {
              unusedWorkers: [],
              runningWorkers: [],
              tlsInitFunctions: [],
              pthreads: {},
              nextWorkerID: 1,
              debugInit: function () {
                function e() {
                  var e = 0;
                  return (
                    de && typeof qi != "undefined" && (e = qi()),
                    "w:" + (C.workerID || 0) + ",t:" + rn(e) + ": "
                  );
                }
                var t = je;
                je = function (r) {
                  return t(e() + r);
                };
              },
              init: function () {
                (an.debugInit(), x ? an.initWorker() : an.initMainThread());
              },
              initMainThread: function () {
                for (
                  var e =
                    typeof C.pthreadPoolSizeOverride == "number"
                      ? C.pthreadPoolSizeOverride
                      : 20;
                  e--;
                )
                  an.allocateUnusedWorker();
                he(function () {
                  Ee("loading-workers");
                  var e = 15e3,
                    t = !1,
                    n = function (o) {
                      if (!t) {
                        ((t = !0), clearTimeout(r));
                        var n = 0;
                        try {
                          if (o) {
                            var a = [],
                              i = [];
                            for (var l of an.unusedWorkers)
                              l.loaded ? a.push(l) : i.push(l);
                            for (var l of i)
                              try {
                                Ct(l);
                              } catch (e) {
                                O(
                                  "voip: ThreadPoolManager: failed to terminate timed-out pthread worker " +
                                    l.workerID +
                                    ": " +
                                    e,
                                );
                              }
                            ((n = i.length),
                              (an.unusedWorkers = a),
                              O(
                                "voip: ThreadPoolManager: pthread worker prewarm timed out after " +
                                  e +
                                  "ms; continuing with " +
                                  a.length +
                                  " ready workers",
                              ));
                          }
                        } finally {
                          ke("loading-workers");
                        }
                      }
                    },
                    r = setTimeout(function () {
                      return n(!0);
                    }, e);
                  an.loadWasmModuleToAllWorkers(function () {
                    return n(!1);
                  });
                });
              },
              initWorker: function () {
                W = !1;
              },
              setExitStatus: function (t) {
                G = t;
              },
              terminateAllThreads__deps: ["$terminateWorker"],
              terminateAllThreads: function () {
                z(
                  !x,
                  "Internal Error! terminateAllThreads() can only ever be called from main application thread!",
                );
                for (var e of an.runningWorkers) Ct(e);
                for (var e of an.unusedWorkers) Ct(e);
                ((an.unusedWorkers = []),
                  (an.runningWorkers = []),
                  (an.pthreads = []));
              },
              returnWorkerToPool: function (t) {
                var e = t.pthread_ptr;
                (delete an.pthreads[e],
                  an.unusedWorkers.push(t),
                  an.runningWorkers.splice(an.runningWorkers.indexOf(t), 1),
                  (t.pthread_ptr = 0),
                  al(e));
              },
              receiveObjectTransfer: function (t) {},
              threadInitTLS: function () {
                an.tlsInitFunctions.forEach(function (e) {
                  return e();
                });
              },
              loadWasmModuleToWorker: function (o) {
                return new (u || (u = n("Promise")))(function (n) {
                  (o.addMessageListener("cmd", function (e) {
                    var t = e,
                      r = t.cmd;
                    if (t.targetThread && t.targetThread != qi()) {
                      var a = an.pthreads[t.targetThread];
                      a
                        ? a.postMessage(
                            babelHelpers.extends({}, t, { type: "cmd" }),
                            t.transferList,
                          )
                        : O(
                            'Internal error! Worker sent a message "' +
                              r +
                              '" to target pthread ' +
                              t.targetThread +
                              ", but that thread no longer exists!",
                          );
                      return;
                    }
                    if (r === "checkMailbox") Zo();
                    else if (r === "spawnThread") Lt(t);
                    else if (r === "cleanupThread") St(t.thread);
                    else if (r === "killThread") bt(t.thread);
                    else if (r === "cancelThread") vt(t.thread);
                    else if (
                      r === "wasmGlueBuildMismatch" ||
                      r === "pinnedWasmGlueLoadFailed"
                    ) {
                      var i =
                        r === "wasmGlueBuildMismatch"
                          ? "voip: worker glue build mismatch source=" +
                            t.source +
                            " expected=" +
                            t.expectedBuildSha +
                            " actual=" +
                            t.actualBuildSha
                          : "voip: pinned worker glue load failed: " + t.error;
                      if (rc && typeof C.onPthreadGlueFailure == "function")
                        C.onPthreadGlueFailure(
                          r === "wasmGlueBuildMismatch"
                            ? {
                                kind: "build_mismatch",
                                actualBuildSha: t.actualBuildSha,
                                expectedBuildSha: t.expectedBuildSha,
                                source: t.source,
                              }
                            : {
                                kind: "pinned_load_failed",
                                error: t.error,
                                workerID: o.workerID,
                              },
                        );
                      else
                        try {
                          Ie(i);
                        } catch (e) {}
                    } else
                      r === "wasmGlueBuildSkewObserved"
                        ? typeof C.onWasmGlueBuildSkewObserved == "function" &&
                          C.onWasmGlueBuildSkewObserved(t)
                        : r === "loaded"
                          ? ((o.loaded = !0), n(o))
                          : r === "alert"
                            ? alert("Thread " + t.threadId + ": " + t.text)
                            : t.target === "setimmediate"
                              ? o.postMessage(
                                  babelHelpers.extends({}, t, { type: "cmd" }),
                                )
                              : r === "callHandler"
                                ? C[t.handler].apply(C, t.args)
                                : r && O("worker sent an unknown command " + r);
                  }),
                    o.addMessageListener(
                      "waWasmWorkerCompatibleCallback",
                      function (t) {
                        var n = t.type,
                          r = t.__name,
                          o = babelHelpers.objectWithoutPropertiesLoose(t, e);
                        a.WhatsAppVoipWasmWorkerCompatibleCallbacks[r](o);
                      },
                    ),
                    (o.onerror = function (e) {
                      var t = "worker sent an error!";
                      throw (
                        o.pthread_ptr &&
                          (t =
                            "Pthread " + rn(o.pthread_ptr) + " sent an error!"),
                        O(
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
                    z(
                      q instanceof WebAssembly.Memory,
                      "WebAssembly memory should have been loaded by now!",
                    ),
                    z(
                      V instanceof WebAssembly.Module,
                      "WebAssembly Module should have been loaded by now!",
                    ));
                  var r = [],
                    i = ["onExit", "onAbort", "print", "printErr"];
                  for (var l of i)
                    Object.prototype.hasOwnProperty.call(C, l) && r.push(l);
                  ((o.workerID = an.nextWorkerID++),
                    o.postMessage({
                      cmd: "load",
                      handlers: r,
                      urlOrBlob: C.mainScriptUrlOrBlob || t,
                      wasmMemory: q,
                      wasmModule: V,
                      workerID: o.workerID,
                      wasmVariant: "prod-nonlab",
                      expectedBuildSha: c,
                      pinnedWorkerGlueUrl:
                        C.pinWorkerGlue === !0 && typeof d == "string"
                          ? d
                          : null,
                      type: "cmd",
                    }));
                });
              },
              loadWasmModuleToAllWorkers: function (t) {
                if (x) return t();
                var e = (u || (u = n("Promise"))).all(
                  an.unusedWorkers.map(an.loadWasmModuleToWorker),
                );
                e.then(t);
              },
              allocateUnusedWorker: function () {
                var e,
                  t = o("WorkerBundleResource").createDedicatedWebWorker(
                    WAWebVoipWebWasmWorkerResource,
                  );
                ((e = new (o("WorkerMessagePort").WorkerMessagePort)(
                  t,
                  "WAWebVoipWebWasmWorker",
                )),
                  o("WorkerClient").init(e),
                  an.unusedWorkers.push(e));
              },
              getNewWorker: function () {
                return (
                  an.unusedWorkers.length == 0 &&
                    (O(
                      "Tried to spawn a new thread, but the thread pool is exhausted.\nThis might result in a deadlock unless some threads eventually exit or the code explicitly breaks out to the event loop.\nIf you want to increase the pool size, use setting `-sPTHREAD_POOL_SIZE=...`.\nIf you want to throw an explicit error instead of the risk of deadlocking in those cases, use setting `-sPTHREAD_POOL_SIZE_STRICT=2`.",
                    ),
                    an.allocateUnusedWorker(),
                    an.loadWasmModuleToWorker(an.unusedWorkers[0])),
                  an.unusedWorkers.pop()
                );
              },
            };
          C.PThread = an;
          var ln = function (t) {
            for (; t.length > 0; ) t.shift()(C);
          };
          function sn() {
            var e = qi(),
              t = f()[(e + 52) >> 2],
              n = f()[(e + 56) >> 2],
              r = t - n;
            (z(t != 0),
              z(r != 0),
              z(t > r, "stackHigh must be higher then stackLow"),
              dl(t, r),
              _l(t),
              ie());
          }
          C.establishStackSpace = sn;
          function un(e) {
            if (x) return Wa(2, 0, e);
            nn(e);
          }
          var cn = function (t) {
              var e = pl(),
                n = t();
              return (_l(e), n);
            },
            dn = function (t) {
              return cn(function () {
                var e = fl(4),
                  n = fl(4);
                hl(t, e, n);
                var r = g()[e >> 2],
                  o = g()[n >> 2],
                  a = Jt(r);
                wi(r);
                var i;
                return (o && ((i = Jt(o)), wi(o)), [a, i]);
              });
            };
          function mn(e) {
            return dn(e);
          }
          C.getExceptionMessage = mn;
          var pn = function (t) {
            return ae.get(t);
          };
          function _n(e, t) {
            var n = pn(e)(t);
            le();
            function r(e) {
              pe() ? an.setExitStatus(e) : il(e);
            }
            r(n);
          }
          C.invokeEntryPoint = _n;
          function fn(e) {
            an.tlsInitFunctions.push(e);
          }
          var gn = function (t) {
              (gn.shown || (gn.shown = {}),
                gn.shown[t] || ((gn.shown[t] = 1), O(t)));
            },
            hn = function (t, n, r, o) {
              Ie(
                "Assertion failed: " +
                  Jt(t) +
                  ", at: " +
                  [
                    n ? Jt(n) : "unknown filename",
                    r,
                    o ? Jt(o) : "unknown function",
                  ],
              );
            },
            yn = [],
            Cn = 0;
          function bn(e) {
            var t = new Ln(e);
            return (
              t.get_caught() || (t.set_caught(!0), Cn--),
              t.set_rethrown(!1),
              yn.push(t),
              Gi(t.excPtr),
              t.get_exception_ptr()
            );
          }
          function vn() {
            if (!yn.length) return 0;
            var e = yn[yn.length - 1];
            return (Gi(e.excPtr), e.excPtr);
          }
          var Sn = 0;
          function Rn() {
            (sl(0, 0), z(yn.length > 0));
            var e = yn.pop();
            (zi(e.excPtr), (Sn = 0));
          }
          function Ln(e) {
            ((this.excPtr = e),
              (this.ptr = e - 24),
              (this.set_type = function (e) {
                g()[(this.ptr + 4) >> 2] = e;
              }),
              (this.get_type = function () {
                return g()[(this.ptr + 4) >> 2];
              }),
              (this.set_destructor = function (e) {
                g()[(this.ptr + 8) >> 2] = e;
              }),
              (this.get_destructor = function () {
                return g()[(this.ptr + 8) >> 2];
              }),
              (this.set_caught = function (e) {
                ((e = e ? 1 : 0), (i()[(this.ptr + 12) >> 0] = e));
              }),
              (this.get_caught = function () {
                return i()[(this.ptr + 12) >> 0] != 0;
              }),
              (this.set_rethrown = function (e) {
                ((e = e ? 1 : 0), (i()[(this.ptr + 13) >> 0] = e));
              }),
              (this.get_rethrown = function () {
                return i()[(this.ptr + 13) >> 0] != 0;
              }),
              (this.init = function (e, t) {
                (this.set_adjusted_ptr(0),
                  this.set_type(e),
                  this.set_destructor(t));
              }),
              (this.set_adjusted_ptr = function (e) {
                g()[(this.ptr + 16) >> 2] = e;
              }),
              (this.get_adjusted_ptr = function () {
                return g()[(this.ptr + 16) >> 2];
              }),
              (this.get_exception_ptr = function () {
                var e = Cl(this.get_type());
                if (e) return g()[this.excPtr >> 2];
                var t = this.get_adjusted_ptr();
                return t !== 0 ? t : this.excPtr;
              }));
          }
          function En(e) {
            throw (Sn || (Sn = new Me(e)), Sn);
          }
          var kn = function (t) {
              var e = Sn && Sn.excPtr;
              if (!e) return (ul(0), 0);
              var n = new Ln(e);
              n.set_adjusted_ptr(e);
              var r = n.get_type();
              if (!r) return (ul(0), e);
              for (var o in t) {
                var a = t[o];
                if (a === 0 || a === r) break;
                var i = n.ptr + 16;
                if (yl(a, r, i)) return (ul(a), e);
              }
              return (ul(r), e);
            },
            In = function () {
              return kn([]);
            },
            Tn = function (t) {
              return kn([t]);
            },
            Dn = function (t, n) {
              return kn([t, n]);
            };
          function xn(e) {
            var t = new Ln(e).get_exception_ptr();
            return t;
          }
          function $n() {
            var e = yn.pop();
            e || Ie("no exception to throw");
            var t = e.excPtr;
            throw (
              e.get_rethrown() ||
                (yn.push(e), e.set_rethrown(!0), e.set_caught(!1), Cn++),
              (Sn = new Me(t)),
              Sn
            );
          }
          function Pn(e) {
            if (e) {
              var t = new Ln(e);
              (yn.push(t), t.set_rethrown(!0), $n());
            }
          }
          function Nn(e, t, n) {
            var r = new Ln(e);
            throw (r.init(t, n), (Sn = new Me(e)), Cn++, Sn);
          }
          function Mn() {
            return Cn;
          }
          function wn(e) {
            (Yi(e, !I, 1, !k, 1048576, !1), an.threadInitTLS());
          }
          function An(e) {
            x
              ? postMessage({ cmd: "cleanupThread", thread: e, type: "cmd" })
              : St(e);
          }
          function Fn(e, t, n, r) {
            return x ? Wa(3, 1, e, t, n, r) : On(e, t, n, r);
          }
          function On(e, t, n, r) {
            if (typeof SharedArrayBuffer == "undefined")
              return (
                O(
                  "Current environment does not support SharedArrayBuffer, pthreads are not available!",
                ),
                6
              );
            var o = [],
              a = 0;
            if (x && (o.length === 0 || a)) return Fn(e, t, n, r);
            var i = {
              startRoutine: n,
              pthread_ptr: e,
              arg: r,
              transferList: o,
            };
            return x
              ? ((i.cmd = "spawnThread"),
                postMessage(babelHelpers.extends({}, i, { type: "cmd" }), o),
                0)
              : Lt(i);
          }
          function Bn(e) {
            if (x) return Wa(4, 1, e);
            try {
              return ((e = Zt.getStr(e)), Yt.chdir(e), 0);
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var Wn = function (t) {
            return ((f()[Oi() >> 2] = t), t);
          };
          function qn(e, t, n) {
            if (x) return Wa(5, 1, e, t, n);
            Zt.varargs = n;
            try {
              var r = Zt.getStreamFromFD(e);
              switch (t) {
                case 0: {
                  var o = Zt.get();
                  if (o < 0) return -28;
                  var a;
                  return ((a = Yt.createStream(r, o)), a.fd);
                }
                case 1:
                case 2:
                  return 0;
                case 3:
                  return r.flags;
                case 4: {
                  var o = Zt.get();
                  return ((r.flags |= o), 0);
                }
                case 5: {
                  var o = Zt.get(),
                    i = 0;
                  return ((p()[(o + i) >> 1] = 2), 0);
                }
                case 6:
                case 7:
                  return 0;
                case 16:
                case 8:
                  return -28;
                case 9:
                  return (Wn(28), -1);
                default:
                  return -28;
              }
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Un(e, t) {
            if (x) return Wa(6, 1, e, t);
            try {
              var n = Zt.getStreamFromFD(e);
              return Zt.doStat(Yt.stat, n.path, t);
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var Vn = 9007199254740992,
            Hn = -9007199254740992;
          function Gn(e) {
            return e < Hn || e > Vn ? NaN : Number(e);
          }
          function zn(e, t) {
            if (x) return Wa(7, 1, e, t);
            t = Gn(t);
            try {
              return isNaN(t) ? 61 : (Yt.ftruncate(e, t), 0);
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var jn = function (t, n, r) {
            return (
              z(
                typeof r == "number",
                "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
              ),
              Nt(t, l(), n, r)
            );
          };
          function Kn(e, t) {
            if (x) return Wa(8, 1, e, t);
            try {
              if (t === 0) return -28;
              var n = Yt.cwd(),
                r = Pt(n) + 1;
              return t < r ? -68 : (jn(n, e, t), r);
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Qn(e, t, n) {
            if (x) return Wa(9, 1, e, t, n);
            try {
              var r = Zt.getStreamFromFD(e);
              r.getdents || (r.getdents = Yt.readdir(r.path));
              for (
                var o = 280,
                  a = 0,
                  l = Yt.llseek(r, 0, 1),
                  s = Math.floor(l / o);
                s < r.getdents.length && a + o <= n;
              ) {
                var u,
                  c,
                  d = r.getdents[s];
                if (d === ".") ((u = r.node.id), (c = 4));
                else if (d === "..") {
                  var m = Yt.lookupPath(r.path, { parent: !0 });
                  ((u = m.node.id), (c = 4));
                } else {
                  var _ = Yt.lookupNode(r.node, d);
                  ((u = _.id),
                    (c = Yt.isChrdev(_.mode)
                      ? 2
                      : Yt.isDir(_.mode)
                        ? 4
                        : Yt.isLink(_.mode)
                          ? 10
                          : 8));
                }
                (z(u),
                  (ee[(t + a) >> 3] = BigInt(u)),
                  (ee[(t + a + 8) >> 3] = BigInt((s + 1) * o)),
                  (p()[(t + a + 16) >> 1] = 280),
                  (i()[(t + a + 18) >> 0] = c),
                  jn(d, t + a + 19, 256),
                  (a += o),
                  (s += 1));
              }
              return (Yt.llseek(r, s * o, 0), a);
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Xn(e, t, n) {
            if (x) return Wa(10, 1, e, t, n);
            Zt.varargs = n;
            try {
              var r = Zt.getStreamFromFD(e);
              switch (t) {
                case 21509:
                  return r.tty ? 0 : -59;
                case 21505: {
                  if (!r.tty) return -59;
                  if (r.tty.ops.ioctl_tcgets) {
                    var o = r.tty.ops.ioctl_tcgets(r),
                      a = Zt.get();
                    ((f()[a >> 2] = o.c_iflag || 0),
                      (f()[(a + 4) >> 2] = o.c_oflag || 0),
                      (f()[(a + 8) >> 2] = o.c_cflag || 0),
                      (f()[(a + 12) >> 2] = o.c_lflag || 0));
                    for (var l = 0; l < 32; l++)
                      i()[(a + l + 17) >> 0] = o.c_cc[l] || 0;
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
                      var a = Zt.get(),
                        s = f()[a >> 2],
                        u = f()[(a + 4) >> 2],
                        c = f()[(a + 8) >> 2],
                        d = f()[(a + 12) >> 2],
                        m = [],
                        l = 0;
                      l < 32;
                      l++
                    )
                      m.push(i()[(a + l + 17) >> 0]);
                    return r.tty.ops.ioctl_tcsets(r.tty, t, {
                      c_iflag: s,
                      c_oflag: u,
                      c_cflag: c,
                      c_lflag: d,
                      c_cc: m,
                    });
                  }
                  return 0;
                }
                case 21519: {
                  if (!r.tty) return -59;
                  var a = Zt.get();
                  return ((f()[a >> 2] = 0), 0);
                }
                case 21520:
                  return r.tty ? -28 : -59;
                case 21531: {
                  var a = Zt.get();
                  return Yt.ioctl(r, t, a);
                }
                case 21523: {
                  if (!r.tty) return -59;
                  if (r.tty.ops.ioctl_tiocgwinsz) {
                    var _ = r.tty.ops.ioctl_tiocgwinsz(r.tty),
                      a = Zt.get();
                    ((p()[a >> 1] = _[0]), (p()[(a + 2) >> 1] = _[1]));
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
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Yn(e, t) {
            if (x) return Wa(11, 1, e, t);
            try {
              return ((e = Zt.getStr(e)), Zt.doStat(Yt.lstat, e, t));
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Jn(e, t, n) {
            if (x) return Wa(12, 1, e, t, n);
            try {
              return (
                (t = Zt.getStr(t)),
                (t = Zt.calculateAt(e, t)),
                (t = Et.normalize(t)),
                t[t.length - 1] === "/" && (t = t.substr(0, t.length - 1)),
                Yt.mkdir(t, n, 0),
                0
              );
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Zn(e, t, n, r) {
            if (x) return Wa(13, 1, e, t, n, r);
            try {
              t = Zt.getStr(t);
              var o = r & 256,
                a = r & 4096;
              return (
                (r = r & -6401),
                z(!r, "unknown flags in __syscall_newfstatat: " + r),
                (t = Zt.calculateAt(e, t, a)),
                Zt.doStat(o ? Yt.lstat : Yt.stat, t, n)
              );
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function er(e, t, n, r) {
            if (x) return Wa(14, 1, e, t, n, r);
            Zt.varargs = r;
            try {
              ((t = Zt.getStr(t)), (t = Zt.calculateAt(e, t)));
              var o = r ? Zt.get() : 0;
              return Yt.open(t, n, o).fd;
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function tr(e, t) {
            if (x) return Wa(15, 1, e, t);
            try {
              return ((e = Zt.getStr(e)), Zt.doStat(Yt.stat, e, t));
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function nr(e, t, n) {
            if (x) return Wa(16, 1, e, t, n);
            try {
              return (
                (t = Zt.getStr(t)),
                (t = Zt.calculateAt(e, t)),
                n === 0
                  ? Yt.unlink(t)
                  : n === 512
                    ? Yt.rmdir(t)
                    : Ie("Invalid flags passed to unlinkat"),
                0
              );
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function rr(e) {
            if (e === null) return "null";
            var t = typeof e;
            return t === "object" || t === "array" || t === "function"
              ? e.toString()
              : "" + e;
          }
          function or() {
            for (var e = new Array(256), t = 0; t < 256; ++t)
              e[t] = String.fromCharCode(t);
            ar = e;
          }
          var ar = void 0;
          function ir(e) {
            for (var t = "", n = e; l()[n]; ) t += ar[l()[n++]];
            return t;
          }
          var lr = {},
            sr = {},
            ur = {},
            cr = void 0;
          function dr(e) {
            throw new cr(e);
          }
          var mr = void 0;
          function pr(e) {
            throw new mr(e);
          }
          function _r(e, t, n) {
            e.forEach(function (e) {
              ur[e] = t;
            });
            function r(t) {
              var r = n(t);
              r.length !== e.length && pr("Mismatched type converter count");
              for (var o = 0; o < e.length; ++o) gr(e[o], r[o]);
            }
            var o = new Array(t.length),
              a = [],
              i = 0;
            (t.forEach(function (e, t) {
              Object.prototype.hasOwnProperty.call(sr, e)
                ? (o[t] = sr[e])
                : (a.push(e),
                  Object.prototype.hasOwnProperty.call(lr, e) || (lr[e] = []),
                  lr[e].push(function () {
                    ((o[t] = sr[e]), ++i, i === a.length && r(o));
                  }));
            }),
              a.length === 0 && r(o));
          }
          function fr(e, t, n) {
            n === void 0 && (n = {});
            var r = t.name;
            if (
              (e ||
                dr(
                  'type "' +
                    r +
                    '" must have a positive integer typeid pointer',
                ),
              Object.prototype.hasOwnProperty.call(sr, e))
            ) {
              if (n.ignoreDuplicateRegistrations) return;
              dr("Cannot register type '" + r + "' twice");
            }
            if (
              ((sr[e] = t),
              delete ur[e],
              Object.prototype.hasOwnProperty.call(lr, e))
            ) {
              var o = lr[e];
              (delete lr[e],
                o.forEach(function (e) {
                  return e();
                }));
            }
          }
          function gr(e, t, n) {
            if ((n === void 0 && (n = {}), !("argPackAdvance" in t)))
              throw new TypeError(
                "registerType registeredInstance requires argPackAdvance",
              );
            return fr(e, t, n);
          }
          function hr(e, t, n) {
            switch (t) {
              case 0:
                return n
                  ? function (t) {
                      return i()[t];
                    }
                  : function (t) {
                      return l()[t];
                    };
              case 1:
                return n
                  ? function (t) {
                      return p()[t >> 1];
                    }
                  : function (t) {
                      return _()[t >> 1];
                    };
              case 2:
                return n
                  ? function (t) {
                      return f()[t >> 2];
                    }
                  : function (t) {
                      return g()[t >> 2];
                    };
              case 3:
                return n
                  ? function (t) {
                      return ee[t >> 3];
                    }
                  : function (t) {
                      return te[t >> 3];
                    };
              default:
                throw new TypeError("Unknown integer type: " + e);
            }
          }
          function yr(e, t, n, r, o) {
            t = ir(t);
            var a = Cr(n),
              i = t.indexOf("u") != -1;
            (i && (o = (BigInt(1) << BigInt(64)) - BigInt(1)),
              gr(e, {
                name: t,
                fromWireType: function (t) {
                  return t;
                },
                toWireType: function (n, a) {
                  if (typeof a != "bigint" && typeof a != "number")
                    throw new TypeError(
                      'Cannot convert "' + rr(a) + '" to ' + this.name,
                    );
                  if (a < r || a > o)
                    throw new TypeError(
                      'Passing a number "' +
                        rr(a) +
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
                readValueFromPointer: hr(t, a, !i),
                destructorFunction: null,
              }));
          }
          function Cr(e) {
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
          function br(e, t, n, r, o) {
            var a = Cr(n);
            ((t = ir(t)),
              gr(e, {
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
                  if (n === 1) e = i();
                  else if (n === 2) e = p();
                  else if (n === 4) e = f();
                  else throw new TypeError("Unknown boolean type size: " + t);
                  return this.fromWireType(e[r >> a]);
                },
                destructorFunction: null,
                jsType: "boolean",
              }));
          }
          function vr(e) {
            if (!(this instanceof Kr) || !(e instanceof Kr)) return !1;
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
          function Sr(e) {
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
          function Rr(e) {
            function t(e) {
              return e.$$.ptrType.registeredClass.name;
            }
            dr(t(e) + " instance already deleted");
          }
          var Lr = !1;
          function Er(e) {}
          function kr(e) {
            e.smartPtr
              ? e.smartPtrType.rawDestructor(e.smartPtr)
              : e.ptrType.registeredClass.rawDestructor(e.ptr);
          }
          function Ir(e) {
            e.count.value -= 1;
            var t = e.count.value === 0;
            t && kr(e);
          }
          function Tr(e, t, n) {
            if (t === n) return e;
            if (n.baseClass === void 0) return null;
            var r = Tr(e, t, n.baseClass);
            return r === null ? null : n.downcast(r);
          }
          var Dr = {};
          function xr() {
            return Object.keys(Fr).length;
          }
          function $r() {
            var e = [];
            for (var t in Fr)
              Object.prototype.hasOwnProperty.call(Fr, t) && e.push(Fr[t]);
            return e;
          }
          var Pr = [];
          function Nr() {
            for (; Pr.length; ) {
              var e = Pr.pop();
              ((e.$$.deleteScheduled = !1), e.delete());
            }
          }
          var Mr = void 0;
          function wr(e) {
            ((Mr = e), Pr.length && Mr && Mr(Nr));
          }
          function Ar() {
            ((C.getInheritedInstanceCount = xr),
              (C.getLiveInheritedInstances = $r),
              (C.flushPendingDeletes = Nr),
              (C.setDelayFunction = wr));
          }
          var Fr = {};
          function Or(e, t) {
            for (
              t === void 0 && dr("ptr should not be undefined");
              e.baseClass;
            )
              ((t = e.upcast(t)), (e = e.baseClass));
            return t;
          }
          function Br(e, t) {
            return ((t = Or(e, t)), Fr[t]);
          }
          function Wr(e, t) {
            (!t.ptrType || !t.ptr) &&
              pr("makeClassHandle requires ptr and ptrType");
            var n = !!t.smartPtrType,
              r = !!t.smartPtr;
            return (
              n !== r && pr("Both smartPtrType and smartPtr must be specified"),
              (t.count = { value: 1 }),
              Ur(Object.create(e, { $$: { value: t } }))
            );
          }
          function qr(e) {
            var t = this.getPointee(e);
            if (!t) return (this.destructor(e), null);
            var n = Br(this.registeredClass, t);
            if (n !== void 0) {
              if (n.$$.count.value === 0)
                return ((n.$$.ptr = t), (n.$$.smartPtr = e), n.clone());
              var r = n.clone();
              return (this.destructor(e), r);
            }
            function o() {
              return this.isSmartPointer
                ? Wr(this.registeredClass.instancePrototype, {
                    ptrType: this.pointeeType,
                    ptr: t,
                    smartPtrType: this,
                    smartPtr: e,
                  })
                : Wr(this.registeredClass.instancePrototype, {
                    ptrType: this,
                    ptr: e,
                  });
            }
            var a = this.registeredClass.getActualType(t),
              i = Dr[a];
            if (!i) return o.call(this);
            var l;
            this.isConst ? (l = i.constPointerType) : (l = i.pointerType);
            var s = Tr(t, this.registeredClass, l.registeredClass);
            return s === null
              ? o.call(this)
              : this.isSmartPointer
                ? Wr(l.registeredClass.instancePrototype, {
                    ptrType: l,
                    ptr: s,
                    smartPtrType: this,
                    smartPtr: e,
                  })
                : Wr(l.registeredClass.instancePrototype, {
                    ptrType: l,
                    ptr: s,
                  });
          }
          var Ur = function (t) {
            return typeof FinalizationRegistry == "undefined"
              ? ((Ur = function (t) {
                  return t;
                }),
                t)
              : ((Lr = new FinalizationRegistry(function (e) {
                  (e.leakWarning.stack.replace(/^Error: /, ""), Ir(e.$$));
                })),
                (Ur = function (t) {
                  var e = t.$$,
                    n = !!e.smartPtr;
                  if (n) {
                    var r = { $$: e },
                      o = e.ptrType.registeredClass;
                    ((r.leakWarning = new Error(
                      "Embind found a leaked C++ instance " +
                        o.name +
                        " <" +
                        rn(e.ptr) +
                        ">.\nWe'll free it automatically in this case, but this functionality is not reliable across various environments.\nMake sure to invoke .delete() manually once you're done with the instance instead.\nOriginally allocated",
                    )),
                      "captureStackTrace" in Error &&
                        Error.captureStackTrace(r.leakWarning, qr),
                      Lr.register(t, r, t));
                  }
                  return t;
                }),
                (Er = function (t) {
                  return Lr.unregister(t);
                }),
                Ur(t));
          };
          function Vr() {
            if ((this.$$.ptr || Rr(this), this.$$.preservePointerOnDelete))
              return ((this.$$.count.value += 1), this);
            var e = Ur(
              Object.create(Object.getPrototypeOf(this), {
                $$: { value: Sr(this.$$) },
              }),
            );
            return ((e.$$.count.value += 1), (e.$$.deleteScheduled = !1), e);
          }
          function Hr() {
            (this.$$.ptr || Rr(this),
              this.$$.deleteScheduled &&
                !this.$$.preservePointerOnDelete &&
                dr("Object already scheduled for deletion"),
              Er(this),
              Ir(this.$$),
              this.$$.preservePointerOnDelete ||
                ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0)));
          }
          function Gr() {
            return !this.$$.ptr;
          }
          function zr() {
            return (
              this.$$.ptr || Rr(this),
              this.$$.deleteScheduled &&
                !this.$$.preservePointerOnDelete &&
                dr("Object already scheduled for deletion"),
              Pr.push(this),
              Pr.length === 1 && Mr && Mr(Nr),
              (this.$$.deleteScheduled = !0),
              this
            );
          }
          function jr() {
            ((Kr.prototype.isAliasOf = vr),
              (Kr.prototype.clone = Vr),
              (Kr.prototype.delete = Hr),
              (Kr.prototype.isDeleted = Gr),
              (Kr.prototype.deleteLater = zr));
          }
          function Kr() {}
          var Qr = 48,
            Xr = 57;
          function Yr(e) {
            if (e === void 0) return "_unknown";
            e = e.replace(/[^a-zA-Z0-9_]/g, "$");
            var t = e.charCodeAt(0);
            return t >= Qr && t <= Xr ? "_" + e : e;
          }
          function Jr(e, t) {
            var n;
            return (
              (e = Yr(e)),
              ((n = {}),
              (n[e] = function () {
                return t.apply(this, arguments);
              }),
              n)[e]
            );
          }
          function Zr(e, t, n) {
            if (e[t].overloadTable === void 0) {
              var r = e[t];
              ((e[t] = function () {
                return (
                  Object.prototype.hasOwnProperty.call(
                    e[t].overloadTable,
                    arguments.length,
                  ) ||
                    dr(
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
          function eo(e, t, n) {
            Object.prototype.hasOwnProperty.call(C, e)
              ? ((n === void 0 ||
                  (C[e].overloadTable !== void 0 &&
                    C[e].overloadTable[n] !== void 0)) &&
                  dr("Cannot register public name '" + e + "' twice"),
                Zr(C, e, e),
                Object.prototype.hasOwnProperty.call(C, n) &&
                  dr(
                    "Cannot register multiple overloads of a function with the same number of arguments (" +
                      n +
                      ")!",
                  ),
                (C[e].overloadTable[n] = t))
              : ((C[e] = t), n !== void 0 && (C[e].numArguments = n));
          }
          function to(e, t, n, r, o, a, i, l) {
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
          function no(e, t, n) {
            for (; t !== n; )
              (t.upcast ||
                dr(
                  "Expected null or instance of " +
                    n.name +
                    ", got an instance of " +
                    t.name,
                ),
                (e = t.upcast(e)),
                (t = t.baseClass));
            return e;
          }
          function ro(e, t) {
            if (t === null)
              return (
                this.isReference && dr("null is not a valid " + this.name),
                0
              );
            (t.$$ || dr('Cannot pass "' + rr(t) + '" as a ' + this.name),
              t.$$.ptr ||
                dr(
                  "Cannot pass deleted object as a pointer of type " +
                    this.name,
                ));
            var n = t.$$.ptrType.registeredClass,
              r = no(t.$$.ptr, n, this.registeredClass);
            return r;
          }
          function oo(e, t) {
            var n;
            if (t === null)
              return (
                this.isReference && dr("null is not a valid " + this.name),
                this.isSmartPointer
                  ? ((n = this.rawConstructor()),
                    e !== null && e.push(this.rawDestructor, n),
                    n)
                  : 0
              );
            (t.$$ || dr('Cannot pass "' + rr(t) + '" as a ' + this.name),
              t.$$.ptr ||
                dr(
                  "Cannot pass deleted object as a pointer of type " +
                    this.name,
                ),
              !this.isConst &&
                t.$$.ptrType.isConst &&
                dr(
                  "Cannot convert argument of type " +
                    (t.$$.smartPtrType
                      ? t.$$.smartPtrType.name
                      : t.$$.ptrType.name) +
                    " to parameter type " +
                    this.name,
                ));
            var r = t.$$.ptrType.registeredClass;
            if (
              ((n = no(t.$$.ptr, r, this.registeredClass)), this.isSmartPointer)
            )
              switch (
                (t.$$.smartPtr === void 0 &&
                  dr("Passing raw pointer to smart pointer is illegal"),
                this.sharingPolicy)
              ) {
                case 0:
                  t.$$.smartPtrType === this
                    ? (n = t.$$.smartPtr)
                    : dr(
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
                      $o.toHandle(function () {
                        o.delete();
                      }),
                    )),
                      e !== null && e.push(this.rawDestructor, n));
                  }
                  break;
                default:
                  dr("Unsupporting sharing policy");
              }
            return n;
          }
          function ao(e, t) {
            if (t === null)
              return (
                this.isReference && dr("null is not a valid " + this.name),
                0
              );
            (t.$$ || dr('Cannot pass "' + rr(t) + '" as a ' + this.name),
              t.$$.ptr ||
                dr(
                  "Cannot pass deleted object as a pointer of type " +
                    this.name,
                ),
              t.$$.ptrType.isConst &&
                dr(
                  "Cannot convert argument of type " +
                    t.$$.ptrType.name +
                    " to parameter type " +
                    this.name,
                ));
            var n = t.$$.ptrType.registeredClass,
              r = no(t.$$.ptr, n, this.registeredClass);
            return r;
          }
          function io(e) {
            return this.fromWireType(f()[e >> 2]);
          }
          function lo(e) {
            return (this.rawGetPointee && (e = this.rawGetPointee(e)), e);
          }
          function so(e) {
            this.rawDestructor && this.rawDestructor(e);
          }
          function uo(e) {
            e !== null && e.delete();
          }
          function co() {
            ((mo.prototype.getPointee = lo),
              (mo.prototype.destructor = so),
              (mo.prototype.argPackAdvance = 8),
              (mo.prototype.readValueFromPointer = io),
              (mo.prototype.deleteObject = uo),
              (mo.prototype.fromWireType = qr));
          }
          function mo(e, t, n, r, o, a, i, l, s, u, c) {
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
                  ? ((this.toWireType = ro), (this.destructorFunction = null))
                  : ((this.toWireType = ao), (this.destructorFunction = null))
                : (this.toWireType = oo));
          }
          function po(e, t, n) {
            (Object.prototype.hasOwnProperty.call(C, e) ||
              pr("Replacing nonexistant public symbol"),
              C[e].overloadTable !== void 0 && n !== void 0
                ? (C[e].overloadTable[n] = t)
                : ((C[e] = t), (C[e].argCount = n)));
          }
          function _o(e, t) {
            e = ir(e);
            function n() {
              return pn(t);
            }
            var r = n();
            return (
              typeof r != "function" &&
                dr("unknown function pointer with signature " + e + ": " + t),
              r
            );
          }
          function fo(e, t) {
            var n = Jr(t, function (e) {
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
          var go = void 0;
          function ho(e) {
            var t = Qi(e),
              n = ir(t);
            return (wi(t), n);
          }
          function yo(e, t) {
            var n = [],
              r = {};
            function o(e) {
              if (!r[e] && !sr[e]) {
                if (ur[e]) {
                  ur[e].forEach(o);
                  return;
                }
                (n.push(e), (r[e] = !0));
              }
            }
            throw (t.forEach(o), new go(e + ": " + n.map(ho).join([", "])));
          }
          function Co(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            ((c = ir(c)),
              (a = _o(o, a)),
              l && (l = _o(i, l)),
              u && (u = _o(s, u)),
              (m = _o(d, m)));
            var p = Yr(c);
            (eo(p, function () {
              yo("Cannot construct " + c + " due to unbound types", [r]);
            }),
              _r([e, t, n], r ? [r] : [], function (t) {
                t = t[0];
                var n, o;
                r
                  ? ((n = t.registeredClass), (o = n.instancePrototype))
                  : (o = Kr.prototype);
                var i = Jr(p, function () {
                    if (Object.getPrototypeOf(this) !== s)
                      throw new cr("Use 'new' to construct " + c);
                    if (d.constructor_body === void 0)
                      throw new cr(c + " has no accessible constructor");
                    var e = d.constructor_body[arguments.length];
                    if (e === void 0)
                      throw new cr(
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
                var d = new to(c, i, s, m, n, a, l, u);
                d.baseClass &&
                  (d.baseClass.__derivedClasses === void 0 &&
                    (d.baseClass.__derivedClasses = []),
                  d.baseClass.__derivedClasses.push(d));
                var _ = new mo(c, d, !0, !1, !1),
                  f = new mo(c + "*", d, !1, !1, !1),
                  g = new mo(c + " const*", d, !1, !0, !1);
                return (
                  (Dr[e] = { pointerType: f, constPointerType: g }),
                  po(p, i),
                  [_, f, g]
                );
              }));
          }
          function bo(e, t) {
            for (var n = [], r = 0; r < e; r++) n.push(g()[(t + r * 4) >> 2]);
            return n;
          }
          function vo(e) {
            for (; e.length; ) {
              var t = e.pop(),
                n = e.pop();
              n(t);
            }
          }
          function So(e, t, n, r, o, a) {
            var i = t.length;
            (i < 2 &&
              dr(
                "argTypes array size mismatch! Must at least get return value and 'this' types!",
              ),
              z(!a, "Async bindings are only supported with JSPI."));
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
                dr(
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
                if (s) vo(_);
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
          function Ro(e, t, n, r, o, a) {
            z(t > 0);
            var i = bo(t, n);
            ((o = _o(r, o)),
              _r([], [e], function (e) {
                e = e[0];
                var n = "constructor " + e.name;
                if (
                  (e.registeredClass.constructor_body === void 0 &&
                    (e.registeredClass.constructor_body = []),
                  e.registeredClass.constructor_body[t - 1] !== void 0)
                )
                  throw new cr(
                    "Cannot register multiple constructors with identical number of parameters (" +
                      (t - 1) +
                      ") for class '" +
                      e.name +
                      "'! Overload resolution is currently only performed using the parameter count, not actual type info!",
                  );
                return (
                  (e.registeredClass.constructor_body[t - 1] = function () {
                    yo(
                      "Cannot construct " + e.name + " due to unbound types",
                      i,
                    );
                  }),
                  _r([], i, function (r) {
                    return (
                      r.splice(1, 0, null),
                      (e.registeredClass.constructor_body[t - 1] = So(
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
          function Lo(e, t, n, r, o, a, i, l, s) {
            var u = bo(n, r);
            ((t = ir(t)),
              (a = _o(o, a)),
              _r([], [e], function (e) {
                e = e[0];
                var r = e.name + "." + t;
                (t.startsWith("@@") && (t = Symbol[t.substring(2)]),
                  l && e.registeredClass.pureVirtualFunctions.push(t));
                function o() {
                  yo("Cannot call " + r + " due to unbound types", u);
                }
                var c = e.registeredClass.instancePrototype,
                  d = c[t];
                return (
                  d === void 0 ||
                  (d.overloadTable === void 0 &&
                    d.className !== e.name &&
                    d.argCount === n - 2)
                    ? ((o.argCount = n - 2), (o.className = e.name), (c[t] = o))
                    : (Zr(c, t, r), (c[t].overloadTable[n - 2] = o)),
                  _r([], u, function (o) {
                    var l = So(r, o, e, a, i, s);
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
          function Eo() {
            Object.assign(ko.prototype, {
              get: function (t) {
                return (
                  z(this.allocated[t] !== void 0, "invalid handle: " + t),
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
                (z(this.allocated[t] !== void 0),
                  (this.allocated[t] = void 0),
                  this.freelist.push(t));
              },
            });
          }
          function ko() {
            ((this.allocated = [void 0]), (this.freelist = []));
          }
          var Io = new ko();
          function To(e) {
            e >= Io.reserved && --Io.get(e).refcount === 0 && Io.free(e);
          }
          function Do() {
            for (var e = 0, t = Io.reserved; t < Io.allocated.length; ++t)
              Io.allocated[t] !== void 0 && ++e;
            return e;
          }
          function xo() {
            (Io.allocated.push(
              { value: void 0 },
              { value: null },
              { value: !0 },
              { value: !1 },
            ),
              (Io.reserved = Io.allocated.length),
              (C.count_emval_handles = Do));
          }
          var $o = {
            toValue: function (t) {
              return (
                t || dr("Cannot use deleted val. handle = " + t),
                Io.get(t).value
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
                  return Io.allocate({ refcount: 1, value: t });
              }
            },
          };
          function Po(e, t) {
            ((t = ir(t)),
              gr(e, {
                name: t,
                fromWireType: function (t) {
                  var e = $o.toValue(t);
                  return (To(t), e);
                },
                toWireType: function (t, n) {
                  return $o.toHandle(n);
                },
                argPackAdvance: 8,
                readValueFromPointer: io,
                destructorFunction: null,
              }));
          }
          function No(e, t) {
            switch (t) {
              case 2:
                return function (e) {
                  return this.fromWireType(h()[e >> 2]);
                };
              case 3:
                return function (e) {
                  return this.fromWireType(y()[e >> 3]);
                };
              default:
                throw new TypeError("Unknown float type: " + e);
            }
          }
          function Mo(e, t, n) {
            var r = Cr(n);
            ((t = ir(t)),
              gr(e, {
                name: t,
                fromWireType: function (t) {
                  return t;
                },
                toWireType: function (t, n) {
                  if (typeof n != "number" && typeof n != "boolean")
                    throw new TypeError(
                      "Cannot convert " + rr(n) + " to " + this.name,
                    );
                  return n;
                },
                argPackAdvance: 8,
                readValueFromPointer: No(t, r),
                destructorFunction: null,
                jsType: "number",
              }));
          }
          function wo(e, t, n, r, o, a, i) {
            var l = bo(t, n);
            ((e = ir(e)),
              (o = _o(r, o)),
              eo(
                e,
                function () {
                  yo("Cannot call " + e + " due to unbound types", l);
                },
                t - 1,
              ),
              _r([], l, function (n) {
                var r = [n[0], null].concat(n.slice(1));
                return (
                  po(e, So(e, r, null, o, a, i), t - 1),
                  C.__WA_INVOKER_FUNCS == null &&
                    (C.__WA_INVOKER_FUNCS = new Map()),
                  C.__WA_INVOKER_FUNCS.set(e, {
                    argTypes: n.slice(1),
                    returnType: n[0],
                  }),
                  []
                );
              }));
          }
          function Ao(e, t, n, r, o) {
            ((t = ir(t)), o === -1 && (o = 4294967295));
            var a = Cr(n),
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
                  throw new TypeError('Cannot convert "' + rr(n) + '" to ' + a);
                if (n < r || n > o)
                  throw new TypeError(
                    'Passing a number "' +
                      rr(n) +
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
              gr(e, {
                name: t,
                fromWireType: i,
                toWireType: c,
                argPackAdvance: 8,
                readValueFromPointer: hr(t, a, r !== 0),
                destructorFunction: null,
                jsType: "number",
              }));
          }
          function Fo(e, t, n) {
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
              var t = g(),
                n = t[e],
                r = t[e + 1];
              return new o(t.buffer, r, n);
            }
            ((n = ir(n)),
              gr(
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
          function Oo(e, t) {
            t = ir(t);
            var n = t === "std::string";
            gr(e, {
              name: t,
              fromWireType: function (t) {
                var e = g()[t >> 2],
                  r = t + 4,
                  o;
                if (n)
                  for (var a = r, i = 0; i <= e; ++i) {
                    var s = r + i;
                    if (i == e || l()[s] == 0) {
                      var u = s - a,
                        c = Jt(a, u);
                      (o === void 0 ? (o = c) : ((o += "\0"), (o += c)),
                        (a = s + 1));
                    }
                  }
                else {
                  for (var d = new Array(e), i = 0; i < e; ++i)
                    d[i] = String.fromCharCode(l()[r + i]);
                  o = d.join("");
                }
                return (wi(t), o);
              },
              toWireType: function (t, r) {
                r instanceof ArrayBuffer && (r = new Uint8Array(r));
                var e,
                  o = typeof r == "string";
                (o ||
                  r instanceof Uint8Array ||
                  r instanceof Uint8ClampedArray ||
                  r instanceof Int8Array ||
                  dr("Cannot pass non-string to std::string"),
                  n && o ? (e = Pt(r)) : (e = r.length));
                var a = Mi(4 + e + 1),
                  i = a + 4;
                if (((g()[a >> 2] = e), n && o)) jn(r, i, e + 1);
                else if (o)
                  for (var s = 0; s < e; ++s) {
                    var u = r.charCodeAt(s);
                    (u > 255 &&
                      (wi(i),
                      dr(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      )),
                      (l()[i + s] = u));
                  }
                else for (var s = 0; s < e; ++s) l()[i + s] = r[s];
                return (t !== null && t.push(wi, a), a);
              },
              argPackAdvance: 8,
              readValueFromPointer: io,
              destructorFunction: function (t) {
                wi(t);
              },
              jsType: "string",
            });
          }
          var Bo =
              typeof TextDecoder != "undefined"
                ? new TextDecoder("utf-16le")
                : void 0,
            Wo = function (t, n) {
              z(
                t % 2 == 0,
                "Pointer passed to UTF16ToString must be aligned to two bytes!",
              );
              for (var e = t, r = e >> 1, o = r + n / 2; !(r >= o) && _()[r]; )
                ++r;
              if (((e = r << 1), e - t > 32 && Bo))
                return Bo.decode(l().slice(t, e));
              for (var a = "", i = 0; !(i >= n / 2); ++i) {
                var s = p()[(t + i * 2) >> 1];
                if (s == 0) break;
                a += String.fromCharCode(s);
              }
              return a;
            },
            qo = function (t, n, r) {
              if (
                (z(
                  n % 2 == 0,
                  "Pointer passed to stringToUTF16 must be aligned to two bytes!",
                ),
                z(
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
                ((p()[n >> 1] = i), (n += 2));
              }
              return ((p()[n >> 1] = 0), n - e);
            },
            Uo = function (t) {
              return t.length * 2;
            },
            Vo = function (t, n) {
              z(
                t % 4 == 0,
                "Pointer passed to UTF32ToString must be aligned to four bytes!",
              );
              for (var e = 0, r = ""; !(e >= n / 4); ) {
                var o = f()[(t + e * 4) >> 2];
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
            Ho = function (t, n, r) {
              if (
                (z(
                  n % 4 == 0,
                  "Pointer passed to stringToUTF32 must be aligned to four bytes!",
                ),
                z(
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
                if (((f()[n >> 2] = i), (n += 4), n + 4 > o)) break;
              }
              return ((f()[n >> 2] = 0), n - e);
            },
            Go = function (t) {
              for (var e = 0, n = 0; n < t.length; ++n) {
                var r = t.charCodeAt(n);
                (r >= 55296 && r <= 57343 && ++n, (e += 4));
              }
              return e;
            },
            zo = function (t, n, r) {
              r = ir(r);
              var e, o, a, i, l;
              (n === 2
                ? ((e = Wo),
                  (o = qo),
                  (i = Uo),
                  (a = function () {
                    return _();
                  }),
                  (l = 1))
                : n === 4 &&
                  ((e = Vo),
                  (o = Ho),
                  (i = Go),
                  (a = function () {
                    return g();
                  }),
                  (l = 2)),
                gr(t, {
                  name: r,
                  fromWireType: function (r) {
                    for (
                      var t = g()[r >> 2], o = a(), i, s = r + 4, u = 0;
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
                    return (wi(r), i);
                  },
                  toWireType: function (t, a) {
                    typeof a != "string" &&
                      dr("Cannot pass non-string to C++ string type " + r);
                    var e = i(a),
                      s = Mi(4 + e + n);
                    return (
                      (g()[s >> 2] = e >> l),
                      o(a, s + 4, e + n),
                      t !== null && t.push(wi, s),
                      s
                    );
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: io,
                  destructorFunction: function (t) {
                    wi(t);
                  },
                }));
            };
          function jo(e, t) {
            ((t = ir(t)),
              gr(e, {
                isVoid: !0,
                name: t,
                argPackAdvance: 0,
                fromWireType: function () {},
                toWireType: function (t, n) {},
                jsType: "void",
              }));
          }
          var Ko = !0,
            Qo = function () {
              return Ko;
            },
            Xo = function () {
              if (!pe())
                try {
                  x ? il(G) : nn(G);
                } catch (e) {
                  on(e);
                }
            },
            Yo = function (t) {
              if (H) {
                O(
                  "user callback triggered after runtime exited or application aborted.  Ignoring.",
                );
                return;
              }
              try {
                (t(), Xo());
              } catch (e) {
                on(e);
              }
            };
          function Jo(e) {
            if (typeof Atomics.waitAsync == "function") {
              var t = Atomics.waitAsync(f(), e >> 2, e);
              (z(t.async), t.value.then(Zo));
              var n = e + 128;
              Atomics.store(f(), n >> 2, 1);
            }
          }
          C.__emscripten_thread_mailbox_await = Jo;
          var Zo = function () {
            var e = qi();
            e &&
              (Jo(e),
              Yo(function () {
                return ll();
              }));
          };
          C.checkMailbox = Zo;
          var ea = function (t, n, r) {
            if (t == n)
              setTimeout(function () {
                return Zo();
              });
            else if (x)
              postMessage({
                targetThread: t,
                cmd: "checkMailbox",
                type: "cmd",
              });
            else {
              var e = an.pthreads[t];
              if (!e) {
                O(
                  "Cannot send message to thread with ID " +
                    t +
                    ", unknown thread ID!",
                );
                return;
              }
              e.postMessage({ cmd: "checkMailbox", type: "cmd" });
            }
          };
          function ta(e, t, n) {
            return (
              O(
                "emscripten_set_offscreencanvas_size: Build with -sOFFSCREENCANVAS_SUPPORT=1 to enable transferring canvases to pthreads.",
              ),
              -1
            );
          }
          function na(e) {}
          var ra = function () {
            throw new Ne();
          };
          function oa(e) {
            e > 4 && (Io.get(e).refcount += 1);
          }
          function aa(e, t) {
            var n = sr[e];
            return (n === void 0 && dr(t + " has unknown type " + ho(e)), n);
          }
          function ia(e, t) {
            e = aa(e, "_emval_take_value");
            var n = e.readValueFromPointer(t);
            return $o.toHandle(n);
          }
          function la(e, t) {
            ((e = Gn(e)), (t = Gn(t)));
            var n = new Date(e * 1e3);
            ((f()[t >> 2] = n.getUTCSeconds()),
              (f()[(t + 4) >> 2] = n.getUTCMinutes()),
              (f()[(t + 8) >> 2] = n.getUTCHours()),
              (f()[(t + 12) >> 2] = n.getUTCDate()),
              (f()[(t + 16) >> 2] = n.getUTCMonth()),
              (f()[(t + 20) >> 2] = n.getUTCFullYear() - 1900),
              (f()[(t + 24) >> 2] = n.getUTCDay()));
            var r = Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
              o = ((n.getTime() - r) / (1e3 * 60 * 60 * 24)) | 0;
            f()[(t + 28) >> 2] = o;
          }
          var sa = function (t) {
              return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
            },
            ua = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
            ca = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            da = function (t) {
              var e = sa(t.getFullYear()),
                n = e ? ua : ca,
                r = n[t.getMonth()] + t.getDate() - 1;
              return r;
            };
          function ma(e, t) {
            ((e = Gn(e)), (t = Gn(t)));
            var n = new Date(e * 1e3);
            ((f()[t >> 2] = n.getSeconds()),
              (f()[(t + 4) >> 2] = n.getMinutes()),
              (f()[(t + 8) >> 2] = n.getHours()),
              (f()[(t + 12) >> 2] = n.getDate()),
              (f()[(t + 16) >> 2] = n.getMonth()),
              (f()[(t + 20) >> 2] = n.getFullYear() - 1900),
              (f()[(t + 24) >> 2] = n.getDay()));
            var r = da(n) | 0;
            ((f()[(t + 28) >> 2] = r),
              (f()[(t + 36) >> 2] = -(n.getTimezoneOffset() * 60)));
            var o = new Date(n.getFullYear(), 0, 1),
              a = new Date(n.getFullYear(), 6, 1).getTimezoneOffset(),
              i = o.getTimezoneOffset(),
              l = (a != i && n.getTimezoneOffset() == Math.min(i, a)) | 0;
            f()[(t + 32) >> 2] = l;
          }
          var pa = function (t) {
            t = Gn(t);
            var e = (function () {
              var e = new Date(
                  f()[(t + 20) >> 2] + 1900,
                  f()[(t + 16) >> 2],
                  f()[(t + 12) >> 2],
                  f()[(t + 8) >> 2],
                  f()[(t + 4) >> 2],
                  f()[t >> 2],
                  0,
                ),
                n = f()[(t + 32) >> 2],
                r = e.getTimezoneOffset(),
                o = new Date(e.getFullYear(), 0, 1),
                a = new Date(e.getFullYear(), 6, 1).getTimezoneOffset(),
                i = o.getTimezoneOffset(),
                l = Math.min(i, a);
              if (n < 0) f()[(t + 32) >> 2] = +(a != i && l == r);
              else if (n > 0 != (l == r)) {
                var s = Math.max(i, a),
                  u = n > 0 ? l : s;
                e.setTime(e.getTime() + (u - r) * 6e4);
              }
              f()[(t + 24) >> 2] = e.getDay();
              var c = da(e) | 0;
              return (
                (f()[(t + 28) >> 2] = c),
                (f()[t >> 2] = e.getSeconds()),
                (f()[(t + 4) >> 2] = e.getMinutes()),
                (f()[(t + 8) >> 2] = e.getHours()),
                (f()[(t + 12) >> 2] = e.getDate()),
                (f()[(t + 16) >> 2] = e.getMonth()),
                (f()[(t + 20) >> 2] = e.getYear()),
                e.getTime() / 1e3
              );
            })();
            return BigInt(e);
          };
          function _a(e, t, n, r, o, a, i) {
            if (x) return Wa(17, 1, e, t, n, r, o, a, i);
            ((e = Gn(e)), (o = Gn(o)), (a = Gn(a)), (i = Gn(i)));
            try {
              if (isNaN(o)) return 61;
              var l = Zt.getStreamFromFD(r),
                s = Yt.mmap(l, e, o, t, n),
                u = s.ptr;
              return ((f()[a >> 2] = s.allocated), (g()[i >> 2] = u), 0);
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function fa(e, t, n, r, o, a) {
            if (x) return Wa(18, 1, e, t, n, r, o, a);
            ((e = Gn(e)), (t = Gn(t)), (a = Gn(a)));
            try {
              return isNaN(a)
                ? 61
                : (Zt.doMsync(e, Zt.getStreamFromFD(o), t, r, a), 0);
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function ga(e, t, n, r, o, a) {
            if (x) return Wa(19, 1, e, t, n, r, o, a);
            ((e = Gn(e)), (t = Gn(t)), (a = Gn(a)));
            try {
              if (isNaN(a)) return 61;
              var i = Zt.getStreamFromFD(o);
              (n & 2 && Zt.doMsync(e, i, t, r, a), Yt.munmap(i));
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var ha = function (t) {
              var e = Pt(t) + 1,
                n = Mi(e);
              return (n && jn(t, n, e), n);
            },
            ya = function (t, n, r) {
              var e = new Date().getFullYear(),
                o = new Date(e, 0, 1),
                a = new Date(e, 6, 1),
                i = o.getTimezoneOffset(),
                l = a.getTimezoneOffset(),
                s = Math.max(i, l);
              ((g()[t >> 2] = s * 60), (f()[n >> 2] = +(i != l)));
              function u(e) {
                var t = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                return t ? t[1] : "GMT";
              }
              var c = u(o),
                d = u(a),
                m = ha(c),
                p = ha(d);
              l < i
                ? ((g()[r >> 2] = m), (g()[(r + 4) >> 2] = p))
                : ((g()[r >> 2] = p), (g()[(r + 4) >> 2] = m));
            },
            Ca = function () {
              Ie("native code called abort()");
            },
            ba = [],
            va = function (t, n) {
              (z(Array.isArray(ba)), z(n % 16 == 0), (ba.length = 0));
              var e;
              for (n >>= 2; (e = l()[t++]); ) {
                var r = String.fromCharCode(e),
                  o = ["d", "f", "i"];
                (o.push("j"),
                  z(
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
                  ba.push(e == 105 ? f()[n] : (e == 106 ? ee : y())[n++ >> 1]),
                  ++n);
              }
              return ba;
            },
            Sa = function (t, n, r) {
              var e = va(n, r);
              return (
                Object.prototype.hasOwnProperty.call(Ke, t) ||
                  Ie("No EM_ASM constant found at address " + t),
                Ke[t].apply(null, e)
              );
            },
            Ra = function (t, n, r) {
              return Sa(t, n, r);
            },
            La = function (t, n, r) {
              return Sa(t, n, r);
            },
            Ea = function () {
              me += 1;
            },
            ka = function () {
              (z(me > 0), (me -= 1));
            },
            Ia = function (t, n) {
              return (
                Ea(),
                setTimeout(function () {
                  (ka(), Yo(t));
                }, n)
              );
            };
          function Ta(e, t) {
            if (
              (($a.mainLoop.timingMode = e),
              ($a.mainLoop.timingValue = t),
              !$a.mainLoop.func)
            )
              return (
                O(
                  "emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.",
                ),
                1
              );
            if (
              ($a.mainLoop.running || (Ea(), ($a.mainLoop.running = !0)),
              e == 0)
            )
              (($a.mainLoop.scheduler = function () {
                var e = Math.max(0, $a.mainLoop.tickStartTime + t - Da()) | 0;
                setTimeout($a.mainLoop.runner, e);
              }),
                ($a.mainLoop.method = "timeout"));
            else if (e == 1)
              (($a.mainLoop.scheduler = function () {
                $a.requestAnimationFrame($a.mainLoop.runner);
              }),
                ($a.mainLoop.method = "rAF"));
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
                      I
                        ? (C.setImmediates === void 0 && (C.setImmediates = []),
                          C.setImmediates.push(t),
                          postMessage({ target: r, type: "cmd" }))
                        : postMessage(
                            babelHelpers.extends({}, r, { type: "cmd" }),
                            "*",
                          ));
                  }));
              }
              (($a.mainLoop.scheduler = function () {
                setImmediate($a.mainLoop.runner);
              }),
                ($a.mainLoop.method = "immediate"));
            }
            return 0;
          }
          var Da;
          Da = function () {
            return performance.timeOrigin + performance.now();
          };
          function xa(e, t, n, r, o) {
            (z(
              !$a.mainLoop.func,
              "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.",
            ),
              ($a.mainLoop.func = e),
              ($a.mainLoop.arg = r));
            var a = $a.mainLoop.currentlyRunningMainloop;
            function i() {
              return a < $a.mainLoop.currentlyRunningMainloop ? (ka(), !1) : !0;
            }
            if (
              (($a.mainLoop.running = !1),
              ($a.mainLoop.runner = function () {
                if (!H) {
                  if ($a.mainLoop.queue.length > 0) {
                    var t = Date.now(),
                      n = $a.mainLoop.queue.shift();
                    if ((n.func(n.arg), $a.mainLoop.remainingBlockers)) {
                      var r = $a.mainLoop.remainingBlockers,
                        o = r % 1 == 0 ? r - 1 : Math.floor(r);
                      n.counted
                        ? ($a.mainLoop.remainingBlockers = o)
                        : ((o = o + 0.5),
                          ($a.mainLoop.remainingBlockers = (8 * r + o) / 9));
                    }
                    if (
                      (F(
                        'main loop blocker "' +
                          n.name +
                          '" took ' +
                          (Date.now() - t) +
                          " ms",
                      ),
                      $a.mainLoop.updateStatus(),
                      !i())
                    )
                      return;
                    setTimeout($a.mainLoop.runner, 0);
                    return;
                  }
                  if (i()) {
                    if (
                      (($a.mainLoop.currentFrameNumber =
                        ($a.mainLoop.currentFrameNumber + 1) | 0),
                      $a.mainLoop.timingMode == 1 &&
                        $a.mainLoop.timingValue > 1 &&
                        $a.mainLoop.currentFrameNumber %
                          $a.mainLoop.timingValue !=
                          0)
                    ) {
                      $a.mainLoop.scheduler();
                      return;
                    } else
                      $a.mainLoop.timingMode == 0 &&
                        ($a.mainLoop.tickStartTime = Da());
                    ($a.mainLoop.method === "timeout" &&
                      C.ctx &&
                      (gn(
                        "Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!",
                      ),
                      ($a.mainLoop.method = "")),
                      $a.mainLoop.runIter(e),
                      le(),
                      i() &&
                        (typeof SDL == "object" &&
                          SDL.audio &&
                          SDL.audio.queueNewAudioData &&
                          SDL.audio.queueNewAudioData(),
                        $a.mainLoop.scheduler()));
                  }
                }
              }),
              o ||
                (t && t > 0 ? Ta(0, 1e3 / t) : Ta(1, 1),
                $a.mainLoop.scheduler()),
              n)
            )
              throw "unwind";
          }
          var $a = {
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
                (($a.mainLoop.scheduler = null),
                  $a.mainLoop.currentlyRunningMainloop++);
              },
              resume: function () {
                $a.mainLoop.currentlyRunningMainloop++;
                var e = $a.mainLoop.timingMode,
                  t = $a.mainLoop.timingValue,
                  n = $a.mainLoop.func;
                (($a.mainLoop.func = null),
                  xa(n, 0, !1, $a.mainLoop.arg, !0),
                  Ta(e, t),
                  $a.mainLoop.scheduler());
              },
              updateStatus: function () {
                if (C.setStatus) {
                  var e = C.statusMessage || "Please wait...",
                    t = $a.mainLoop.remainingBlockers,
                    n = $a.mainLoop.expectedBlockers;
                  t
                    ? t < n
                      ? C.setStatus(e + " (" + (n - t) + "/" + n + ")")
                      : C.setStatus(e)
                    : C.setStatus("");
                }
              },
              runIter: function (t) {
                if (!H) {
                  if (C.preMainLoop) {
                    var e = C.preMainLoop();
                    if (e === !1) return;
                  }
                  (Yo(t), C.postMainLoop && C.postMainLoop());
                }
              },
            },
            isFullscreen: !1,
            pointerLock: !1,
            moduleContextCreatedCallbacks: [],
            workers: [],
            init: function () {
              if ($a.initted) return;
              $a.initted = !0;
              var e = {};
              ((e.canHandle = function (t) {
                return !C.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(t);
              }),
                (e.handle = function (t, n, r, o) {
                  var e = new Blob([t], { type: $a.getMimetype(n) });
                  e.size !== t.length &&
                    (e = new Blob([new Uint8Array(t).buffer], {
                      type: $a.getMimetype(n),
                    }));
                  var a = URL.createObjectURL(e);
                  z(
                    typeof a == "string",
                    "createObjectURL must return a url as a string",
                  );
                  var i = new Image();
                  ((i.onload = function () {
                    z(i.complete, "Image " + n + " could not be decoded");
                    var e = document.createElement("canvas");
                    ((e.width = i.width), (e.height = i.height));
                    var o = e.getContext("2d");
                    (o.drawImage(i, 0, 0),
                      (ki[n] = e),
                      URL.revokeObjectURL(a),
                      r && r(t));
                  }),
                    (i.onerror = function (e) {
                      (F("Image " + a + " could not be decoded"), o && o());
                    }),
                    (i.src = a));
                }),
                qt.push(e));
              var t = {};
              ((t.canHandle = function (t) {
                return (
                  !C.noAudioDecoding &&
                  t.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 }
                );
              }),
                (t.handle = function (t, n, r, o) {
                  var e = !1;
                  function a(o) {
                    e || ((e = !0), (Ii[n] = o), r && r(t));
                  }
                  var i = new Blob([t], { type: $a.getMimetype(n) }),
                    l = URL.createObjectURL(i);
                  z(
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
                      O(
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
                    Ia(function () {
                      a(s);
                    }, 1e4));
                }),
                qt.push(t));
              function n() {
                $a.pointerLock =
                  document.pointerLockElement === C.canvas ||
                  document.mozPointerLockElement === C.canvas ||
                  document.webkitPointerLockElement === C.canvas ||
                  document.msPointerLockElement === C.canvas;
              }
              var r = C.canvas;
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
                C.elementPointerLock &&
                  r.addEventListener(
                    "click",
                    function (e) {
                      !$a.pointerLock &&
                        C.canvas.requestPointerLock &&
                        (C.canvas.requestPointerLock(), e.preventDefault());
                    },
                    !1,
                  ));
            },
            createContext: function (t, n, r, o) {
              if (n && C.ctx && t == C.canvas) return C.ctx;
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
                      z(
                        typeof GLctx == "undefined",
                        "cannot set in module if GLctx is used, but we are a non-GL context that would replace it",
                      ),
                    (C.ctx = e),
                    n && GL.makeContextCurrent(a),
                    (C.useWebGL = n),
                    $a.moduleContextCreatedCallbacks.forEach(function (e) {
                      return e();
                    }),
                    $a.init()),
                  e)
                : null;
            },
            destroyContext: function (t, n, r) {},
            fullscreenHandlersInstalled: !1,
            lockPointer: void 0,
            resizeCanvas: void 0,
            requestFullscreen: function (t, n) {
              (($a.lockPointer = t),
                ($a.resizeCanvas = n),
                typeof $a.lockPointer == "undefined" && ($a.lockPointer = !0),
                typeof $a.resizeCanvas == "undefined" &&
                  ($a.resizeCanvas = !1));
              var e = C.canvas;
              function r() {
                $a.isFullscreen = !1;
                var t = e.parentNode;
                ((document.fullscreenElement ||
                  document.mozFullScreenElement ||
                  document.msFullscreenElement ||
                  document.webkitFullscreenElement ||
                  document.webkitCurrentFullScreenElement) === t
                  ? ((e.exitFullscreen = $a.exitFullscreen),
                    $a.lockPointer && e.requestPointerLock(),
                    ($a.isFullscreen = !0),
                    $a.resizeCanvas
                      ? $a.setFullscreenCanvasSize()
                      : $a.updateCanvasDimensions(e))
                  : (t.parentNode.insertBefore(e, t),
                    t.parentNode.removeChild(t),
                    $a.resizeCanvas
                      ? $a.setWindowedCanvasSize()
                      : $a.updateCanvasDimensions(e)),
                  C.onFullScreen && C.onFullScreen($a.isFullscreen),
                  C.onFullscreen && C.onFullscreen($a.isFullscreen));
              }
              $a.fullscreenHandlersInstalled ||
                (($a.fullscreenHandlersInstalled = !0),
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
              Ie(
                "Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)",
              );
            },
            exitFullscreen: function () {
              if (!$a.isFullscreen) return !1;
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
              if ($a.nextRAF === 0) $a.nextRAF = e + 1e3 / 60;
              else for (; e + 2 >= $a.nextRAF; ) $a.nextRAF += 1e3 / 60;
              var n = Math.max($a.nextRAF - e, 0);
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
              var t = $a.fakeRequestAnimationFrame;
              t(e);
            }),
            safeSetTimeout: function (t, n) {
              return Ia(t, n);
            },
            safeRequestAnimationFrame: function (t) {
              return (
                Ea(),
                $a.requestAnimationFrame(function () {
                  (ka(), Yo(t));
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
              if ($a.pointerLock)
                (t.type != "mousemove" && "mozMovementX" in t
                  ? ($a.mouseMovementX = $a.mouseMovementY = 0)
                  : (($a.mouseMovementX = $a.getMovementX(t)),
                    ($a.mouseMovementY = $a.getMovementY(t))),
                  typeof SDL != "undefined"
                    ? (($a.mouseX = SDL.mouseX + $a.mouseMovementX),
                      ($a.mouseY = SDL.mouseY + $a.mouseMovementY))
                    : (($a.mouseX += $a.mouseMovementX),
                      ($a.mouseY += $a.mouseMovementY)));
              else {
                var e = C.canvas.getBoundingClientRect(),
                  n = C.canvas.width,
                  r = C.canvas.height,
                  o =
                    typeof window.scrollX != "undefined"
                      ? window.scrollX
                      : window.pageXOffset,
                  a =
                    typeof window.scrollY != "undefined"
                      ? window.scrollY
                      : window.pageYOffset;
                if (
                  (z(
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
                    (($a.lastTouches[i.identifier] = u),
                      ($a.touches[i.identifier] = u));
                  else if (t.type === "touchend" || t.type === "touchmove") {
                    var c = $a.touches[i.identifier];
                    (c || (c = u),
                      ($a.lastTouches[i.identifier] = c),
                      ($a.touches[i.identifier] = u));
                  }
                  return;
                }
                var d = t.pageX - (o + e.left),
                  m = t.pageY - (a + e.top);
                ((d = d * (n / e.width)),
                  (m = m * (r / e.height)),
                  ($a.mouseMovementX = d - $a.mouseX),
                  ($a.mouseMovementY = m - $a.mouseY),
                  ($a.mouseX = d),
                  ($a.mouseY = m));
              }
            },
            resizeListeners: [],
            updateResizeListeners: function () {
              var e = C.canvas;
              $a.resizeListeners.forEach(function (t) {
                return t(e.width, e.height);
              });
            },
            setCanvasSize: function (t, n, r) {
              var e = C.canvas;
              ($a.updateCanvasDimensions(e, t, n),
                r || $a.updateResizeListeners());
            },
            windowedWidth: 0,
            windowedHeight: 0,
            setFullscreenCanvasSize: function () {
              if (typeof SDL != "undefined") {
                var e = g()[SDL.screen >> 2];
                ((e = e | 8388608), (f()[SDL.screen >> 2] = e));
              }
              ($a.updateCanvasDimensions(C.canvas), $a.updateResizeListeners());
            },
            setWindowedCanvasSize: function () {
              if (typeof SDL != "undefined") {
                var e = g()[SDL.screen >> 2];
                ((e = e & -8388609), (f()[SDL.screen >> 2] = e));
              }
              ($a.updateCanvasDimensions(C.canvas), $a.updateResizeListeners());
            },
            updateCanvasDimensions: function (t, n, r) {
              n && r
                ? ((t.widthNative = n), (t.heightNative = r))
                : ((n = t.widthNative), (r = t.heightNative));
              var e = n,
                o = r;
              if (
                (C.forcedAspectRatio &&
                  C.forcedAspectRatio > 0 &&
                  (e / o < C.forcedAspectRatio
                    ? (e = Math.round(o * C.forcedAspectRatio))
                    : (o = Math.round(e / C.forcedAspectRatio))),
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
              $a.resizeCanvas
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
          function Pa(e, t, n) {
            function r() {
              pn(e)(t);
            }
            n >= 0 ? Ia(r, n) : $a.safeRequestAnimationFrame(r);
          }
          function Na() {
            I ||
              gn(
                "Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread",
              );
          }
          var Ma = function (t) {
            (z(typeof t == "number"), Jt(t));
          };
          function wa() {
            return Date.now();
          }
          var Aa = function () {
              throw (Ea(), "unwind");
            },
            Fa = function () {
              return 2147483648;
            },
            Oa = function () {
              return Fa();
            };
          function Ba() {
            return navigator.hardwareConcurrency;
          }
          function Wa(e, t) {
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
            return cn(function () {
              for (
                var o = n * 2, a = fl(o * 8), i = a >> 3, l = 0;
                l < n;
                l++
              ) {
                var s = r[2 + l];
                typeof s == "bigint"
                  ? ((ee[i + 2 * l] = BigInt(1)), (ee[i + 2 * l + 1] = s))
                  : ((ee[i + 2 * l] = BigInt(0)), (y()[i + 2 * l + 1] = s));
              }
              return tl(e, o, a, t);
            });
          }
          var qa = [];
          function Ua(e, t, n, r) {
            ((an.currentProxiedOperationCallerThread = t),
              (n /= 2),
              (qa.length = n));
            for (var o = r >> 3, a = 0; a < n; a++)
              ee[o + 2 * a]
                ? (qa[a] = ee[o + 2 * a + 1])
                : (qa[a] = y()[o + 2 * a + 1]);
            var i = e < 0,
              l = i ? Ke[-e - 1] : Ti[e];
            return (
              z(
                l.length == n,
                "Call args mismatch in emscripten_receive_on_main_thread_js",
              ),
              l.apply(null, qa)
            );
          }
          var Va = function (t) {
              var e = q.buffer,
                n = (t - e.byteLength + 65535) >>> 16;
              try {
                return (q.grow(n), re(), 1);
              } catch (n) {
                O(
                  "growMemory: Attempted to grow heap from " +
                    e.byteLength +
                    " bytes to " +
                    t +
                    " bytes, but got error: " +
                    n,
                );
              }
            },
            Ha = function (t) {
              var e = l().length;
              if (((t >>>= 0), t <= e)) return !1;
              var n = Fa();
              if (t > n)
                return (
                  O(
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
                  s = Va(i);
                if (s) return !0;
              }
              return (
                O(
                  "Failed to grow the heap from " +
                    e +
                    " bytes to " +
                    i +
                    " bytes, not enough memory!",
                ),
                !1
              );
            },
            Ga = ka,
            za = Ea,
            ja = {},
            Ka = function () {
              return L || "./this.program";
            },
            Qa = function () {
              if (!Qa.strings) {
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
                    _: Ka(),
                  };
                for (var n in ja)
                  ja[n] === void 0 ? delete t[n] : (t[n] = ja[n]);
                var r = [];
                for (var n in t) r.push(n + "=" + t[n]);
                Qa.strings = r;
              }
              return Qa.strings;
            },
            Xa = function (t, n) {
              for (var e = 0; e < t.length; ++e)
                (z(t.charCodeAt(e) === (t.charCodeAt(e) & 255)),
                  (i()[n++ >> 0] = t.charCodeAt(e)));
              i()[n >> 0] = 0;
            };
          function Ya(e, t) {
            if (x) return Wa(20, 1, e, t);
            var n = 0;
            return (
              Qa().forEach(function (r, o) {
                var a = t + n;
                ((g()[(e + o * 4) >> 2] = a), Xa(r, a), (n += r.length + 1));
              }),
              0
            );
          }
          function Ja(e, t) {
            if (x) return Wa(21, 1, e, t);
            var n = Qa();
            g()[e >> 2] = n.length;
            var r = 0;
            return (
              n.forEach(function (e) {
                r += e.length + 1;
              }),
              (g()[t >> 2] = r),
              0
            );
          }
          function Za(e) {
            if (x) return Wa(22, 1, e);
            try {
              var t = Zt.getStreamFromFD(e);
              return (Yt.close(t), 0);
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var ei = function (t, n, r, o) {
            for (var e = 0, a = 0; a < r; a++) {
              var l = g()[n >> 2],
                s = g()[(n + 4) >> 2];
              n += 8;
              var u = Yt.read(t, i(), l, s, o);
              if (u < 0) return -1;
              if (((e += u), u < s)) break;
              typeof o != "undefined" && (o += u);
            }
            return e;
          };
          function ti(e, t, n, r, o) {
            if (x) return Wa(23, 1, e, t, n, r, o);
            ((t = Gn(t)), (n = Gn(n)), (r = Gn(r)), (o = Gn(o)));
            try {
              if (isNaN(r)) return 61;
              var a = Zt.getStreamFromFD(e),
                i = ei(a, t, n, r);
              return ((g()[o >> 2] = i), 0);
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var ni = function (t, n, r, o) {
            for (var e = 0, a = 0; a < r; a++) {
              var l = g()[n >> 2],
                s = g()[(n + 4) >> 2];
              n += 8;
              var u = Yt.write(t, i(), l, s, o);
              if (u < 0) return -1;
              ((e += u), typeof o != "undefined" && (o += u));
            }
            return e;
          };
          function ri(e, t, n, r, o) {
            if (x) return Wa(24, 1, e, t, n, r, o);
            ((t = Gn(t)), (n = Gn(n)), (r = Gn(r)), (o = Gn(o)));
            try {
              if (isNaN(r)) return 61;
              var a = Zt.getStreamFromFD(e),
                i = ni(a, t, n, r);
              return ((g()[o >> 2] = i), 0);
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          function oi(e, t, n, r) {
            if (x) return Wa(25, 1, e, t, n, r);
            try {
              var o = Zt.getStreamFromFD(e),
                a = ei(o, t, n);
              return ((g()[r >> 2] = a), 0);
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          function ai(e, t, n, r) {
            if (x) return Wa(26, 1, e, t, n, r);
            ((t = Gn(t)), (r = Gn(r)));
            try {
              if (isNaN(t)) return 61;
              var o = Zt.getStreamFromFD(e);
              return (
                Yt.llseek(o, t, n),
                (ee[r >> 3] = BigInt(o.position)),
                o.getdents && t === 0 && n === 0 && (o.getdents = null),
                0
              );
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          function ii(e) {
            if (x) return Wa(27, 1, e);
            try {
              var t = Zt.getStreamFromFD(e);
              return t.stream_ops && t.stream_ops.fsync
                ? t.stream_ops.fsync(t)
                : 0;
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          function li(e, t, n, r) {
            if (x) return Wa(28, 1, e, t, n, r);
            try {
              var o = Zt.getStreamFromFD(e),
                a = ni(o, t, n);
              return ((g()[r >> 2] = a), 0);
            } catch (e) {
              if (typeof Yt == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var si = function (t, n) {
              return (It(l().subarray(t, t + n)), 0);
            },
            ui = function (t) {
              for (var e = t.split("."), n = 0; n < 4; n++) {
                var r = Number(e[n]);
                if (isNaN(r)) return null;
                e[n] = r;
              }
              return (e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24)) >>> 0;
            },
            ci = function (t) {
              return parseInt(t);
            },
            di = function (t) {
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
                        ci(e[e.length - 4]) + ci(e[e.length - 3]) * 256),
                      (e[e.length - 3] =
                        ci(e[e.length - 2]) + ci(e[e.length - 1]) * 256),
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
                  } else i[n + r] = Hi(parseInt(e[n], 16));
                else i[n + r] = e[n];
              return [
                (i[1] << 16) | i[0],
                (i[3] << 16) | i[2],
                (i[5] << 16) | i[4],
                (i[7] << 16) | i[6],
              ];
            },
            mi = {
              address_map: { id: 1, addrs: {}, names: {} },
              lookup_name: function (t) {
                var e = ui(t);
                if (e !== null || ((e = di(t)), e !== null)) return t;
                var n;
                if (mi.address_map.addrs[t]) n = mi.address_map.addrs[t];
                else {
                  var r = mi.address_map.id++;
                  (z(r < 65535, "exceeded max address mappings of 65535"),
                    (n = "172.29." + (r & 255) + "." + (r & 65280)),
                    (mi.address_map.names[n] = t),
                    (mi.address_map.addrs[t] = n));
                }
                return n;
              },
              lookup_addr: function (t) {
                return mi.address_map.names[t] ? mi.address_map.names[t] : null;
              },
            },
            pi = function (t) {
              var e = Mi(20),
                n = ha(t);
              g()[e >> 2] = n;
              var r = Mi(4);
              ((g()[r >> 2] = 0), (g()[(e + 4) >> 2] = r));
              var o = 2;
              ((f()[(e + 8) >> 2] = o), (f()[(e + 12) >> 2] = 4));
              var a = Mi(12);
              return (
                (g()[a >> 2] = a + 8),
                (g()[(a + 4) >> 2] = 0),
                (f()[(a + 8) >> 2] = ui(mi.lookup_name(t))),
                (g()[(e + 16) >> 2] = a),
                e
              );
            };
          function _i(e) {
            return x ? Wa(29, 1, e) : pi(Jt(e));
          }
          function fi(e) {
            return e;
          }
          var gi = function (t, n) {
              for (var e = 0, r = 0; r <= n; e += t[r++]);
              return e;
            },
            hi = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            yi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            Ci = function (t, n) {
              for (var e = new Date(t.getTime()); n > 0; ) {
                var r = sa(e.getFullYear()),
                  o = e.getMonth(),
                  a = (r ? hi : yi)[o];
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
            bi = function (t, n) {
              (z(
                t.length >= 0,
                "writeArrayToMemory array must have a length (should be an array or typed array)",
              ),
                i().set(t, n));
            },
            vi = function (t, n, r, o) {
              var e = f()[(o + 40) >> 2],
                a = {
                  tm_sec: f()[o >> 2],
                  tm_min: f()[(o + 4) >> 2],
                  tm_hour: f()[(o + 8) >> 2],
                  tm_mday: f()[(o + 12) >> 2],
                  tm_mon: f()[(o + 16) >> 2],
                  tm_year: f()[(o + 20) >> 2],
                  tm_wday: f()[(o + 24) >> 2],
                  tm_yday: f()[(o + 28) >> 2],
                  tm_isdst: f()[(o + 32) >> 2],
                  tm_gmtoff: f()[(o + 36) >> 2],
                  tm_zone: e ? Jt(e) : "",
                },
                i = Jt(r),
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
              function g(e) {
                var t = Ci(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
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
                      gi(sa(t.tm_year + 1900) ? hi : yi, t.tm_mon - 1),
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
                      r != 4 && (r != 3 || !sa(t.tm_year)) && (e = 1);
                    }
                  } else {
                    e = 52;
                    var n = (t.tm_wday + 7 - t.tm_yday - 1) % 7;
                    (n == 4 || (n == 5 && sa((t.tm_year % 400) - 1))) && e++;
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
              var y = Mt(i, !1);
              return y.length > n ? 0 : (bi(y, t), y.length - 1);
            },
            Si = function (t, n, r, o, a) {
              return vi(t, n, r, o);
            };
          an.init();
          var Ri = function (t, n, r, o) {
              (t || (t = this),
                (this.parent = t),
                (this.mount = t.mount),
                (this.mounted = null),
                (this.id = Yt.nextInode++),
                (this.name = n),
                (this.mode = r),
                (this.node_ops = {}),
                (this.stream_ops = {}),
                (this.rdev = o));
            },
            Li = 365,
            Ei = 146;
          (Object.defineProperties(Ri.prototype, {
            read: {
              get: function () {
                return (this.mode & Li) === Li;
              },
              set: function (t) {
                t ? (this.mode |= Li) : (this.mode &= ~Li);
              },
            },
            write: {
              get: function () {
                return (this.mode & Ei) === Ei;
              },
              set: function (t) {
                t ? (this.mode |= Ei) : (this.mode &= ~Ei);
              },
            },
            isFolder: {
              get: function () {
                return Yt.isDir(this.mode);
              },
            },
            isDevice: {
              get: function () {
                return Yt.isChrdev(this.mode);
              },
            },
          }),
            (Yt.FSNode = Ri),
            (Yt.createPreloadedFile = Vt),
            Yt.staticInit(),
            (Kt = {
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
            or(),
            (cr = C.BindingError =
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
            (mr = C.InternalError =
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
            jr(),
            Ar(),
            co(),
            (go = C.UnboundTypeError = fo(Error, "UnboundTypeError")),
            Eo(),
            xo(),
            (C.requestFullscreen = function (t, n) {
              $a.requestFullscreen(t, n);
            }),
            (C.requestFullScreen = function () {
              $a.requestFullScreen();
            }),
            (C.requestAnimationFrame = function (t) {
              $a.requestAnimationFrame(t);
            }),
            (C.setCanvasSize = function (t, n, r) {
              $a.setCanvasSize(t, n, r);
            }),
            (C.pauseMainLoop = function () {
              $a.mainLoop.pause();
            }),
            (C.resumeMainLoop = function () {
              $a.mainLoop.resume();
            }),
            (C.getUserMedia = function () {
              $a.getUserMedia();
            }),
            (C.createContext = function (t, n, r, o) {
              return $a.createContext(t, n, r, o);
            }));
          var ki = {},
            Ii = {},
            Ti = [
              null,
              en,
              un,
              Fn,
              Bn,
              qn,
              Un,
              zn,
              Kn,
              Qn,
              Xn,
              Yn,
              Jn,
              Zn,
              er,
              tr,
              nr,
              _a,
              fa,
              ga,
              Ya,
              Ja,
              Za,
              ti,
              ri,
              oi,
              ai,
              ii,
              li,
              _i,
            ];
          function Di() {
            Ue("fetchSettings");
          }
          var xi = {
              __assert_fail: hn,
              __cxa_begin_catch: bn,
              __cxa_current_primary_exception: vn,
              __cxa_end_catch: Rn,
              __cxa_find_matching_catch_2: In,
              __cxa_find_matching_catch_3: Tn,
              __cxa_find_matching_catch_4: Dn,
              __cxa_get_exception_ptr: xn,
              __cxa_rethrow: $n,
              __cxa_rethrow_primary_exception: Pn,
              __cxa_throw: Nn,
              __cxa_uncaught_exceptions: Mn,
              __emscripten_init_main_thread_js: wn,
              __emscripten_thread_cleanup: An,
              __pthread_create_js: On,
              __resumeException: En,
              __syscall_chdir: Bn,
              __syscall_fcntl64: qn,
              __syscall_fstat64: Un,
              __syscall_ftruncate64: zn,
              __syscall_getcwd: Kn,
              __syscall_getdents64: Qn,
              __syscall_ioctl: Xn,
              __syscall_lstat64: Yn,
              __syscall_mkdirat: Jn,
              __syscall_newfstatat: Zn,
              __syscall_openat: er,
              __syscall_stat64: tr,
              __syscall_unlinkat: nr,
              _embind_register_bigint: yr,
              _embind_register_bool: br,
              _embind_register_class: Co,
              _embind_register_class_constructor: Ro,
              _embind_register_class_function: Lo,
              _embind_register_emval: Po,
              _embind_register_float: Mo,
              _embind_register_function: wo,
              _embind_register_integer: Ao,
              _embind_register_memory_view: Fo,
              _embind_register_std_string: Oo,
              _embind_register_std_wstring: zo,
              _embind_register_void: jo,
              _emscripten_get_now_is_monotonic: Qo,
              _emscripten_notify_mailbox_postmessage: ea,
              _emscripten_set_offscreencanvas_size: ta,
              _emscripten_thread_mailbox_await: Jo,
              _emscripten_thread_set_strongref: na,
              _emscripten_throw_longjmp: ra,
              _emval_decref: To,
              _emval_incref: oa,
              _emval_take_value: ia,
              _gmtime_js: la,
              _localtime_js: ma,
              _mktime_js: pa,
              _mmap_js: _a,
              _msync_js: fa,
              _munmap_js: ga,
              _tzset_js: ya,
              abort: Ca,
              call_init_capture_driver_js_sync: it,
              call_init_playback_driver_js_sync: ut,
              call_sendto: at,
              call_start_capture_js_sync: lt,
              call_start_desktop_capture_js_sync: pt,
              call_start_playback_js_sync: ct,
              call_start_video_capture_js_sync: ft,
              call_stop_capture_js_sync: st,
              call_stop_desktop_capture_js_sync: _t,
              call_stop_playback_js_sync: dt,
              call_stop_video_capture_js_sync: gt,
              emscripten_asm_const_double: Ra,
              emscripten_asm_const_int: La,
              emscripten_async_call: Pa,
              emscripten_check_blocking_allowed: Na,
              emscripten_console_error: Ma,
              emscripten_date_now: wa,
              emscripten_exit_with_live_runtime: Aa,
              emscripten_get_heap_max: Oa,
              emscripten_get_now: Da,
              emscripten_num_logical_cores: Ba,
              emscripten_receive_on_main_thread_js: Ua,
              emscripten_resize_heap: Ha,
              emscripten_runtime_keepalive_pop: Ga,
              emscripten_runtime_keepalive_push: za,
              environ_get: Ya,
              environ_sizes_get: Ja,
              exit: nn,
              fd_close: Za,
              fd_pread: ti,
              fd_pwrite: ri,
              fd_read: oi,
              fd_seek: ai,
              fd_sync: ii,
              fd_write: li,
              get_bwe_ml_model_path_js: Ze,
              get_ml_model_path_for_type_js: et,
              get_random_bytes_js: tt,
              getentropy: si,
              gethostbyname: _i,
              invoke_d: Ku,
              invoke_diii: Zu,
              invoke_fi: Xs,
              invoke_fii: gs,
              invoke_fiii: Ju,
              invoke_fiiiiii: Hs,
              invoke_i: Rl,
              invoke_id: Js,
              invoke_ii: El,
              invoke_iid: Uu,
              invoke_iidi: Qu,
              invoke_iidii: Qs,
              invoke_iidjjjidjjjdjjji: is,
              invoke_iidjjjii: _s,
              invoke_iidjjjiii: ss,
              invoke_iiffiii: ys,
              invoke_iiffiiiii: hs,
              invoke_iifi: au,
              invoke_iifii: Ru,
              invoke_iifiii: Ys,
              invoke_iii: kl,
              invoke_iiid: Lu,
              invoke_iiifi: Gs,
              invoke_iiii: Tl,
              invoke_iiiidd: bu,
              invoke_iiiifiii: Rs,
              invoke_iiiifiiiiii: Is,
              invoke_iiiii: Pl,
              invoke_iiiiid: Xu,
              invoke_iiiiii: Bl,
              invoke_iiiiiii: Dl,
              invoke_iiiiiiiddiiid: Wu,
              invoke_iiiiiiii: Fl,
              invoke_iiiiiiiidi: qu,
              invoke_iiiiiiiifii: Vs,
              invoke_iiiiiiiii: Nl,
              invoke_iiiiiiiiii: Al,
              invoke_iiiiiiiiiiffiii: Cs,
              invoke_iiiiiiiiiii: wl,
              invoke_iiiiiiiiiiii: Es,
              invoke_iiiiiiiiiiiiffiii: Ss,
              invoke_iiiiiiiiiiiii: Ts,
              invoke_iiiiiiiiiiiiii: Hl,
              invoke_iiiiiiiiiiiiiiffiiiii: Ls,
              invoke_iiiiiiiiiiiiiii: Ps,
              invoke_iiiiiiiiiiiiiiiffiiiii: bs,
              invoke_iiiiiiiiiiiiiiii: js,
              invoke_iiiiiiiiiiiiiiiiiffiiiii: vs,
              invoke_iiiiiiiiiiiiiiiiii: Gl,
              invoke_iiiiiiiiiiji: Zl,
              invoke_iiiiiiiiij: wu,
              invoke_iiiiiiiij: Pu,
              invoke_iiiiiiij: Ks,
              invoke_iiiiiiijjii: vu,
              invoke_iiiiiij: Nu,
              invoke_iiiiiijiiii: Au,
              invoke_iiiiiijjijiiiiiiiiii: Su,
              invoke_iiiiij: zu,
              invoke_iiiiiji: Du,
              invoke_iiiiijjii: ms,
              invoke_iiiiijjiii: ps,
              invoke_iiiiijjjii: cs,
              invoke_iiiiijjjiii: ds,
              invoke_iiiij: $s,
              invoke_iiiijiii: hu,
              invoke_iiiijiiji: os,
              invoke_iiiijjii: fs,
              invoke_iiiijjiii: us,
              invoke_iiij: Os,
              invoke_iiijddddddd: su,
              invoke_iiiji: Jl,
              invoke_iiijii: Xl,
              invoke_iiijiiji: rs,
              invoke_iiijji: ns,
              invoke_iiijjiiii: du,
              invoke_iij: xs,
              invoke_iiji: Cu,
              invoke_iijii: Mu,
              invoke_iijiii: Ws,
              invoke_iijijijiji: Bu,
              invoke_iijj: pu,
              invoke_iijjjiiii: uu,
              invoke_iijjjj: iu,
              invoke_iijjjji: lu,
              invoke_ij: As,
              invoke_iji: Gu,
              invoke_j: zl,
              invoke_ji: Ql,
              invoke_jii: Us,
              invoke_jiii: Ml,
              invoke_jiiii: Yu,
              invoke_jiiiii: Ou,
              invoke_jiiiiiiii: $u,
              invoke_jiiiiiji: Fu,
              invoke_jiij: _u,
              invoke_jij: Ms,
              invoke_jj: Hu,
              invoke_v: Il,
              invoke_vd: ju,
              invoke_vi: xl,
              invoke_vid: Eu,
              invoke_viddjjii: cu,
              invoke_vif: qs,
              invoke_viff: ku,
              invoke_vii: Ll,
              invoke_viid: tu,
              invoke_viif: Tu,
              invoke_viii: Sl,
              invoke_viiii: $l,
              invoke_viiiii: Ol,
              invoke_viiiiii: Vl,
              invoke_viiiiiidiii: ts,
              invoke_viiiiiii: Ul,
              invoke_viiiiiiiddiii: Yl,
              invoke_viiiiiiii: ql,
              invoke_viiiiiiiii: Wl,
              invoke_viiiiiiiiii: es,
              invoke_viiiiiiiiiiii: Iu,
              invoke_viiiiiiiiiiiii: nu,
              invoke_viiiiiiiiiiiiiii: ec,
              invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiii: ou,
              invoke_viiiiiiij: ru,
              invoke_viiiiij: Zs,
              invoke_viiiiiji: Vu,
              invoke_viiiij: eu,
              invoke_viiiijiiii: ks,
              invoke_viiij: zs,
              invoke_viiiji: as,
              invoke_viij: Fs,
              invoke_viiji: fu,
              invoke_viijii: gu,
              invoke_viijiiii: yu,
              invoke_viijj: xu,
              invoke_viijjdiii: ls,
              invoke_viijji: Ns,
              invoke_vij: Ds,
              invoke_viji: Bs,
              invoke_vijiiiii: jl,
              invoke_vijj: ws,
              invoke_vijji: mu,
              invoke_vjiiiiii: Kl,
              is_participant_known_contact_js: nt,
              llvm_eh_typeid_for: fi,
              loggingCallback_js_sync: ht,
              memory: q || C.wasmMemory,
              on_call_event_js_sync: Qe,
              patch_abort_for_ml_inference: Ye,
              query_browser_audio_processing_status_js_sync: mt,
              renderVideoFrame_js: rt,
              sendSignalingXMPP_js_sync: ot,
              set_ml_inference_flag: Xe,
              strftime_l: Si,
              write_persistent_directory_path_js: Je,
            },
            $i = We(),
            Pi = $e("__wasm_call_ctors"),
            Ni = $e("__cxa_free_exception"),
            Mi = (C._malloc = $e("malloc")),
            wi = (C._free = $e("free")),
            Ai = (C._wasm_throw_ml_abort = $e("wasm_throw_ml_abort")),
            Fi = (C._fflush = $e("fflush")),
            Oi = $e("__errno_location"),
            Bi =
              (C.__ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj =
                $e(
                  "_ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj",
                )),
            Wi =
              (C.__ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj =
                $e(
                  "_ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj",
                )),
            qi = (C._pthread_self = function () {
              return (qi = C._pthread_self = U.pthread_self)();
            }),
            Ui = $e("ntohs"),
            Vi = $e("htonl"),
            Hi = $e("htons"),
            Gi = $e("__cxa_increment_exception_refcount"),
            zi = $e("__cxa_decrement_exception_refcount"),
            ji = (C.__emscripten_tls_init = $e("_emscripten_tls_init")),
            Ki = $e("emscripten_builtin_memalign"),
            Qi = $e("__getTypeName"),
            Xi = (C.__embind_initialize_bindings = $e(
              "_embind_initialize_bindings",
            )),
            Yi = (C.__emscripten_thread_init = $e("_emscripten_thread_init")),
            Ji = (C.__emscripten_thread_crashed = $e(
              "_emscripten_thread_crashed",
            )),
            Zi = $e("emscripten_main_thread_process_queued_calls"),
            el = $e("emscripten_main_runtime_thread_id"),
            tl = $e("_emscripten_run_in_main_runtime_thread_js"),
            nl = $e("emscripten_dispatch_to_thread_"),
            rl = function () {
              return (rl = U.emscripten_stack_get_base)();
            },
            ol = function () {
              return (ol = U.emscripten_stack_get_end)();
            },
            al = $e("_emscripten_thread_free_data"),
            il = (C.__emscripten_thread_exit = $e("_emscripten_thread_exit")),
            ll = (C.__emscripten_check_mailbox = $e(
              "_emscripten_check_mailbox",
            )),
            sl = $e("setThrew"),
            ul = $e("setTempRet0"),
            cl = function () {
              return (cl = U.emscripten_stack_init)();
            },
            dl = function (t, n) {
              return (dl = U.emscripten_stack_set_limits)(t, n);
            },
            ml = function () {
              return (ml = U.emscripten_stack_get_free)();
            },
            pl = $e("stackSave"),
            _l = $e("stackRestore"),
            fl = $e("stackAlloc"),
            gl = function () {
              return (gl = U.emscripten_stack_get_current)();
            },
            hl = (C.___get_exception_message = $e("__get_exception_message")),
            yl = $e("__cxa_can_catch"),
            Cl = $e("__cxa_is_pointer_type"),
            bl = (C.___start_em_js = 1381884),
            vl = (C.___stop_em_js = 1387871);
          function Sl(e, t, n, r) {
            var o = pl();
            try {
              pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Rl(e) {
            var t = pl();
            try {
              return pn(e)();
            } catch (e) {
              if ((_l(t), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ll(e, t, n) {
            var r = pl();
            try {
              pn(e)(t, n);
            } catch (e) {
              if ((_l(r), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function El(e, t) {
            var n = pl();
            try {
              return pn(e)(t);
            } catch (e) {
              if ((_l(n), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function kl(e, t, n) {
            var r = pl();
            try {
              return pn(e)(t, n);
            } catch (e) {
              if ((_l(r), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Il(e) {
            var t = pl();
            try {
              pn(e)();
            } catch (e) {
              if ((_l(t), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Tl(e, t, n, r) {
            var o = pl();
            try {
              return pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Dl(e, t, n, r, o, a, i) {
            var l = pl();
            try {
              return pn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((_l(l), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function xl(e, t) {
            var n = pl();
            try {
              pn(e)(t);
            } catch (e) {
              if ((_l(n), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function $l(e, t, n, r, o) {
            var a = pl();
            try {
              pn(e)(t, n, r, o);
            } catch (e) {
              if ((_l(a), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Pl(e, t, n, r, o) {
            var a = pl();
            try {
              return pn(e)(t, n, r, o);
            } catch (e) {
              if ((_l(a), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Nl(e, t, n, r, o, a, i, l, s) {
            var u = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((_l(u), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ml(e, t, n, r) {
            var o = pl();
            try {
              return pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              return (sl(1, 0), BigInt(0));
            }
          }
          function wl(e, t, n, r, o, a, i, l, s, u, c) {
            var d = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((_l(d), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Al(e, t, n, r, o, a, i, l, s, u) {
            var c = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((_l(c), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Fl(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ol(e, t, n, r, o, a) {
            var i = pl();
            try {
              pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Bl(e, t, n, r, o, a) {
            var i = pl();
            try {
              return pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Wl(e, t, n, r, o, a, i, l, s, u) {
            var c = pl();
            try {
              pn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((_l(c), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ql(e, t, n, r, o, a, i, l, s) {
            var u = pl();
            try {
              pn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((_l(u), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ul(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Vl(e, t, n, r, o, a, i) {
            var l = pl();
            try {
              pn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((_l(l), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Hl(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
            var _ = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p);
            } catch (e) {
              if ((_l(_), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Gl(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h) {
            var y = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h);
            } catch (e) {
              if ((_l(y), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function zl(e) {
            var t = pl();
            try {
              return pn(e)();
            } catch (e) {
              if ((_l(t), !(e instanceof Pe))) throw e;
              return (sl(1, 0), BigInt(0));
            }
          }
          function jl(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Kl(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ql(e, t) {
            var n = pl();
            try {
              return pn(e)(t);
            } catch (e) {
              if ((_l(n), !(e instanceof Pe))) throw e;
              return (sl(1, 0), BigInt(0));
            }
          }
          function Xl(e, t, n, r, o, a) {
            var i = pl();
            try {
              return pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Yl(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            var p = pl();
            try {
              pn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
            } catch (e) {
              if ((_l(p), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Jl(e, t, n, r, o) {
            var a = pl();
            try {
              return pn(e)(t, n, r, o);
            } catch (e) {
              if ((_l(a), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Zl(e, t, n, r, o, a, i, l, s, u, c, d) {
            var m = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c, d);
            } catch (e) {
              if ((_l(m), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function es(e, t, n, r, o, a, i, l, s, u, c) {
            var d = pl();
            try {
              pn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((_l(d), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ts(e, t, n, r, o, a, i, l, s, u, c) {
            var d = pl();
            try {
              pn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((_l(d), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ns(e, t, n, r, o, a) {
            var i = pl();
            try {
              return pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function rs(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function os(e, t, n, r, o, a, i, l, s) {
            var u = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((_l(u), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function as(e, t, n, r, o, a) {
            var i = pl();
            try {
              pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function is(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
            var g = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
            } catch (e) {
              if ((_l(g), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ls(e, t, n, r, o, a, i, l, s) {
            var u = pl();
            try {
              pn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((_l(u), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ss(e, t, n, r, o, a, i, l, s) {
            var u = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((_l(u), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function us(e, t, n, r, o, a, i, l, s) {
            var u = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((_l(u), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function cs(e, t, n, r, o, a, i, l, s, u) {
            var c = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((_l(c), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ds(e, t, n, r, o, a, i, l, s, u, c) {
            var d = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((_l(d), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ms(e, t, n, r, o, a, i, l, s) {
            var u = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((_l(u), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ps(e, t, n, r, o, a, i, l, s, u) {
            var c = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((_l(c), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function _s(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function fs(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function gs(e, t, n) {
            var r = pl();
            try {
              return pn(e)(t, n);
            } catch (e) {
              if ((_l(r), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function hs(e, t, n, r, o, a, i, l, s) {
            var u = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((_l(u), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ys(e, t, n, r, o, a, i) {
            var l = pl();
            try {
              return pn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((_l(l), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Cs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
            var f = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
            } catch (e) {
              if ((_l(f), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function bs(
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
            var S = pl();
            try {
              return pn(e)(
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
              if ((_l(S), !(e instanceof Pe))) throw e;
              sl(1, 0);
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
            v,
            S,
            R,
          ) {
            var L = pl();
            try {
              return pn(e)(
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
              if ((_l(L), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ss(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g) {
            var h = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g);
            } catch (e) {
              if ((_l(h), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Rs(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ls(
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
            var v = pl();
            try {
              return pn(e)(
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
              if ((_l(v), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Es(e, t, n, r, o, a, i, l, s, u, c, d) {
            var m = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c, d);
            } catch (e) {
              if ((_l(m), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ks(e, t, n, r, o, a, i, l, s, u) {
            var c = pl();
            try {
              pn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((_l(c), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Is(e, t, n, r, o, a, i, l, s, u, c) {
            var d = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((_l(d), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ts(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            var p = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
            } catch (e) {
              if ((_l(p), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ds(e, t, n) {
            var r = pl();
            try {
              pn(e)(t, n);
            } catch (e) {
              if ((_l(r), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function xs(e, t, n) {
            var r = pl();
            try {
              return pn(e)(t, n);
            } catch (e) {
              if ((_l(r), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function $s(e, t, n, r, o) {
            var a = pl();
            try {
              return pn(e)(t, n, r, o);
            } catch (e) {
              if ((_l(a), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ps(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
            var f = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
            } catch (e) {
              if ((_l(f), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ns(e, t, n, r, o, a) {
            var i = pl();
            try {
              pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ms(e, t, n) {
            var r = pl();
            try {
              return pn(e)(t, n);
            } catch (e) {
              if ((_l(r), !(e instanceof Pe))) throw e;
              return (sl(1, 0), BigInt(0));
            }
          }
          function ws(e, t, n, r) {
            var o = pl();
            try {
              pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function As(e, t) {
            var n = pl();
            try {
              return pn(e)(t);
            } catch (e) {
              if ((_l(n), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Fs(e, t, n, r) {
            var o = pl();
            try {
              pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Os(e, t, n, r) {
            var o = pl();
            try {
              return pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Bs(e, t, n, r) {
            var o = pl();
            try {
              pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ws(e, t, n, r, o, a) {
            var i = pl();
            try {
              return pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function qs(e, t, n) {
            var r = pl();
            try {
              pn(e)(t, n);
            } catch (e) {
              if ((_l(r), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Us(e, t, n) {
            var r = pl();
            try {
              return pn(e)(t, n);
            } catch (e) {
              if ((_l(r), !(e instanceof Pe))) throw e;
              return (sl(1, 0), BigInt(0));
            }
          }
          function Vs(e, t, n, r, o, a, i, l, s, u, c) {
            var d = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((_l(d), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Hs(e, t, n, r, o, a, i) {
            var l = pl();
            try {
              return pn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((_l(l), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Gs(e, t, n, r, o) {
            var a = pl();
            try {
              return pn(e)(t, n, r, o);
            } catch (e) {
              if ((_l(a), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function zs(e, t, n, r, o) {
            var a = pl();
            try {
              pn(e)(t, n, r, o);
            } catch (e) {
              if ((_l(a), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function js(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
            var g = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
            } catch (e) {
              if ((_l(g), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ks(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Qs(e, t, n, r, o) {
            var a = pl();
            try {
              return pn(e)(t, n, r, o);
            } catch (e) {
              if ((_l(a), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Xs(e, t) {
            var n = pl();
            try {
              return pn(e)(t);
            } catch (e) {
              if ((_l(n), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ys(e, t, n, r, o, a) {
            var i = pl();
            try {
              return pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Js(e, t) {
            var n = pl();
            try {
              return pn(e)(t);
            } catch (e) {
              if ((_l(n), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Zs(e, t, n, r, o, a, i) {
            var l = pl();
            try {
              pn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((_l(l), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function eu(e, t, n, r, o, a) {
            var i = pl();
            try {
              pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function tu(e, t, n, r) {
            var o = pl();
            try {
              pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function nu(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
            var _ = pl();
            try {
              pn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p);
            } catch (e) {
              if ((_l(_), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ru(e, t, n, r, o, a, i, l, s) {
            var u = pl();
            try {
              pn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((_l(u), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ou(
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
            var P = pl();
            try {
              pn(e)(
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
              if ((_l(P), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function au(e, t, n, r) {
            var o = pl();
            try {
              return pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function iu(e, t, n, r, o, a) {
            var i = pl();
            try {
              return pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function lu(e, t, n, r, o, a, i) {
            var l = pl();
            try {
              return pn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((_l(l), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function su(e, t, n, r, o, a, i, l, s, u, c) {
            var d = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((_l(d), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function uu(e, t, n, r, o, a, i, l, s) {
            var u = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((_l(u), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function cu(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function du(e, t, n, r, o, a, i, l, s) {
            var u = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((_l(u), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function mu(e, t, n, r, o) {
            var a = pl();
            try {
              pn(e)(t, n, r, o);
            } catch (e) {
              if ((_l(a), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function pu(e, t, n, r) {
            var o = pl();
            try {
              return pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function _u(e, t, n, r) {
            var o = pl();
            try {
              return pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              return (sl(1, 0), BigInt(0));
            }
          }
          function fu(e, t, n, r, o) {
            var a = pl();
            try {
              pn(e)(t, n, r, o);
            } catch (e) {
              if ((_l(a), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function gu(e, t, n, r, o, a) {
            var i = pl();
            try {
              pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function hu(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function yu(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Cu(e, t, n, r) {
            var o = pl();
            try {
              return pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function bu(e, t, n, r, o, a) {
            var i = pl();
            try {
              return pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function vu(e, t, n, r, o, a, i, l, s, u, c) {
            var d = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((_l(d), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Su(
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
            var b = pl();
            try {
              return pn(e)(
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
              if ((_l(b), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ru(e, t, n, r, o) {
            var a = pl();
            try {
              return pn(e)(t, n, r, o);
            } catch (e) {
              if ((_l(a), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Lu(e, t, n, r) {
            var o = pl();
            try {
              return pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Eu(e, t, n) {
            var r = pl();
            try {
              pn(e)(t, n);
            } catch (e) {
              if ((_l(r), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ku(e, t, n, r) {
            var o = pl();
            try {
              pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Iu(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            var p = pl();
            try {
              pn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
            } catch (e) {
              if ((_l(p), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Tu(e, t, n, r) {
            var o = pl();
            try {
              pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Du(e, t, n, r, o, a, i) {
            var l = pl();
            try {
              return pn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((_l(l), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function xu(e, t, n, r, o) {
            var a = pl();
            try {
              pn(e)(t, n, r, o);
            } catch (e) {
              if ((_l(a), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function $u(e, t, n, r, o, a, i, l, s) {
            var u = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((_l(u), !(e instanceof Pe))) throw e;
              return (sl(1, 0), BigInt(0));
            }
          }
          function Pu(e, t, n, r, o, a, i, l, s) {
            var u = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s);
            } catch (e) {
              if ((_l(u), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Nu(e, t, n, r, o, a, i) {
            var l = pl();
            try {
              return pn(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((_l(l), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Mu(e, t, n, r, o) {
            var a = pl();
            try {
              return pn(e)(t, n, r, o);
            } catch (e) {
              if ((_l(a), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function wu(e, t, n, r, o, a, i, l, s, u) {
            var c = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((_l(c), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Au(e, t, n, r, o, a, i, l, s, u, c) {
            var d = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c);
            } catch (e) {
              if ((_l(d), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Fu(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              return (sl(1, 0), BigInt(0));
            }
          }
          function Ou(e, t, n, r, o, a) {
            var i = pl();
            try {
              return pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              return (sl(1, 0), BigInt(0));
            }
          }
          function Bu(e, t, n, r, o, a, i, l, s, u) {
            var c = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((_l(c), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Wu(e, t, n, r, o, a, i, l, s, u, c, d, m) {
            var p = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
            } catch (e) {
              if ((_l(p), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function qu(e, t, n, r, o, a, i, l, s, u) {
            var c = pl();
            try {
              return pn(e)(t, n, r, o, a, i, l, s, u);
            } catch (e) {
              if ((_l(c), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Uu(e, t, n) {
            var r = pl();
            try {
              return pn(e)(t, n);
            } catch (e) {
              if ((_l(r), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Vu(e, t, n, r, o, a, i, l) {
            var s = pl();
            try {
              pn(e)(t, n, r, o, a, i, l);
            } catch (e) {
              if ((_l(s), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Hu(e, t) {
            var n = pl();
            try {
              return pn(e)(t);
            } catch (e) {
              if ((_l(n), !(e instanceof Pe))) throw e;
              return (sl(1, 0), BigInt(0));
            }
          }
          function Gu(e, t, n) {
            var r = pl();
            try {
              return pn(e)(t, n);
            } catch (e) {
              if ((_l(r), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function zu(e, t, n, r, o, a) {
            var i = pl();
            try {
              return pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ju(e, t) {
            var n = pl();
            try {
              pn(e)(t);
            } catch (e) {
              if ((_l(n), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Ku(e) {
            var t = pl();
            try {
              return pn(e)();
            } catch (e) {
              if ((_l(t), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Qu(e, t, n, r) {
            var o = pl();
            try {
              return pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Xu(e, t, n, r, o, a) {
            var i = pl();
            try {
              return pn(e)(t, n, r, o, a);
            } catch (e) {
              if ((_l(i), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Yu(e, t, n, r, o) {
            var a = pl();
            try {
              return pn(e)(t, n, r, o);
            } catch (e) {
              if ((_l(a), !(e instanceof Pe))) throw e;
              return (sl(1, 0), BigInt(0));
            }
          }
          function Ju(e, t, n, r) {
            var o = pl();
            try {
              return pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function Zu(e, t, n, r) {
            var o = pl();
            try {
              return pn(e)(t, n, r);
            } catch (e) {
              if ((_l(o), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          function ec(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
            var g = pl();
            try {
              pn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
            } catch (e) {
              if ((_l(g), !(e instanceof Pe))) throw e;
              sl(1, 0);
            }
          }
          ((C.keepRuntimeAlive = pe),
            (C.wasmMemory = q),
            (C.GROWABLE_HEAP_U8 = l),
            (C.GROWABLE_HEAP_F32 = h),
            (C.ExitStatus = yt),
            (C.FS = Yt),
            (C.PThread = an),
            (C.registeredTypes = sr));
          var tc = [
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
          tc.forEach(Ge);
          var nc = [
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
          nc.forEach(ze);
          var rc;
          Se = function e() {
            (rc || ac(), rc || (Se = e));
          };
          function oc() {
            (z(!x), cl(), ie());
          }
          function ac() {
            if (be > 0) return;
            if ((x || oc(), x)) {
              (b(C), fe(), startWorker(C));
              return;
            }
            if ((_e(), be > 0)) return;
            function e() {
              rc ||
                ((rc = !0),
                (C.calledRun = !0),
                !H &&
                  (fe(),
                  b(C),
                  C.onRuntimeInitialized && C.onRuntimeInitialized(),
                  z(
                    !C._main,
                    'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]',
                  ),
                  ge()));
            }
            (C.setStatus
              ? (C.setStatus("Running..."),
                setTimeout(function () {
                  (setTimeout(function () {
                    C.setStatus("");
                  }, 1),
                    e());
                }, 1))
              : e(),
              le());
          }
          function ic() {
            var e = F,
              t = O,
              n = !1;
            F = O = function (t) {
              n = !0;
            };
            try {
              (Fi(0),
                ["stdout", "stderr"].forEach(function (e) {
                  var t = Yt.analyzePath("/dev/" + e);
                  if (t) {
                    var r = t.object,
                      o = r.rdev,
                      a = At.ttys[o];
                    a && a.output && a.output.length && (n = !0);
                  }
                }));
            } catch (e) {}
            ((F = e),
              (O = t),
              n &&
                gn(
                  "stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.",
                ));
          }
          if (C.preInit)
            for (
              typeof C.preInit == "function" && (C.preInit = [C.preInit]);
              C.preInit.length > 0;
            )
              C.preInit.pop()();
          return (ac(), r.ready);
        };
      })();
    ((p.BUILD_SHA = c),
      typeof l == "object" && typeof i == "object"
        ? (i.exports = p)
        : typeof define == "function" &&
          define.amd &&
          define([], function () {
            return p;
          }));
  },
  34,
);
