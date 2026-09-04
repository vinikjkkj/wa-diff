__d(
  "WAWebVoipWebWasmLoader_ContentAddressed_internal",
  [
    "Promise",
    "WAWebCoreActionsODS",
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
      c = "2c7542b3323833fa1951fd8f2e77dfead1d0257b87d053ae60c75922b8344014",
      d = {
        "2c7542b3323833fa1951fd8f2e77dfead1d0257b87d053ae60c75922b8344014":
          function () {
            return r("bx")("90671");
          },
      },
      m = d["2c7542b3323833fa1951fd8f2e77dfead1d0257b87d053ae60c75922b8344014"],
      p = null,
      _ = null;
    try {
      _ = r("bx").getURL(m());
    } catch (e) {
      p = e;
    }
    var f = {
        "2c7542b3323833fa1951fd8f2e77dfead1d0257b87d053ae60c75922b8344014":
          function () {
            return r("bx")("90647");
          },
        b0b39a8fba39d5c5ed00ccbae30b1753cc29da088ba745130241cbbad718accb:
          function () {
            return r("bx")("90633");
          },
        "922df2c3a2e5ecc017744941df7005853ebb5dbddc23d69484b61c82b799055a":
          function () {
            return r("bx")("90622");
          },
        c9e137cb997bd6b0b24f7eca0b773693fcb8db2dcab2c3fea81bd663b1f75582:
          function () {
            return r("bx")("88746");
          },
        f46e629b277a8d16e65949e6fd060064a81e6706e9aa4360a367b84e7fdb8609:
          function () {
            return r("bx")("90619");
          },
        "5af2b9755d98041ff47c2e1c78f9f7c870fb42bd1b99558e67c3c7b53f444c00":
          function () {
            return r("bx")("24838");
          },
        "1588ee378d0538beef5d2e88f45458ed6b67301656731b638d4aee29e89d7d79":
          function () {
            return r("bx")("24833");
          },
        "183ca7eceff78b5c0955fffb72f8ff0ce87a1af3f5a14a173524794e9d247df3":
          function () {
            return r("bx")("24757");
          },
        f5edb27cb056825c72e6c6cd395bc522b5446bcfd248e6f944f465e55ea73322:
          function () {
            return r("bx")("31565");
          },
        e7c02c6a5d53ffc81b22b4870bd8bca20bd4db16b97ac688cd2854984bdbae9d:
          function () {
            return r("bx")("90548");
          },
        "21181f6ed9527b33686394d398ef3f62002c5c243049e89284a6964fe5003d4b":
          function () {
            return r("bx")("90547");
          },
        "97d1d369a2689ff2b588ef5b463351ddf62159c65e86c28f79df60ea02be2b25":
          function () {
            return r("bx")("47566");
          },
        "781e245811250a21d239007321c402f790bbe80927ddd85e2b5898c63aed4bda":
          function () {
            return r("bx")("47565");
          },
        b83c41faa1c975e4401b260b2e30ad956e397a98e29935b931a695bdf809a4c1:
          function () {
            return r("bx")("47554");
          },
        ab7d42fa4cc279369369cc4039ddaecfad716d4a87dd7bc7624405d26162251d:
          function () {
            return r("bx")("47545");
          },
        "7a95296c8a5531948c6de53a23221f8c24dc6c8bcae94597122f081f776e9828":
          function () {
            return r("bx")("47538");
          },
      },
      g = f["2c7542b3323833fa1951fd8f2e77dfead1d0257b87d053ae60c75922b8344014"],
      h = null,
      y;
    try {
      y = r("bx").getURL(g(), { cacheBreaker: "1788412207199" });
    } catch (e) {
      h = e;
    }
    var C = (function () {
      var t =
        typeof document != "undefined" && document.currentScript
          ? document.currentScript.src
          : void 0;
      return function (a) {
        var i = this;
        a === void 0 && (a = {});
        function l() {
          return (V.buffer != Q.buffer && ae(), Q);
        }
        function d() {
          return (V.buffer != Q.buffer && ae(), X);
        }
        function m() {
          return (V.buffer != Q.buffer && ae(), Y);
        }
        function p() {
          return (V.buffer != Q.buffer && ae(), J);
        }
        function f() {
          return (V.buffer != Q.buffer && ae(), Z);
        }
        function g() {
          return (V.buffer != Q.buffer && ae(), ee);
        }
        function C() {
          return (V.buffer != Q.buffer && ae(), te);
        }
        function b() {
          return (V.buffer != Q.buffer && ae(), oe);
        }
        var v = a;
        if (
          (o("WAWebVoipWasmArtifactRegistry").recordSelectedVoipWasmUri(
            "/wasm/whatsapp/versioned/2c7542b3323833fa1951fd8f2e77dfead1d0257b87d053ae60c75922b8344014/wa_voip_shared.wasm",
          ),
          h != null)
        )
          throw (
            o(
              "WAWebCoreActionsODS",
            ).logCallVoipInitWasmArtifactContentAddressedBxLookupFailure(),
            String(h).includes("Unknown file path") &&
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitWasmArtifactContentAddressedBxKeyMissing(),
            h
          );
        o("WAWebVoipWasmArtifactRegistry").recordSelectedVoipWasmUri(y);
        var S, R;
        ((v.ready = new (u || (u = n("Promise")))(function (e, t) {
          ((S = e), (R = t));
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
            Object.getOwnPropertyDescriptor(v.ready, e) ||
              Object.defineProperty(v.ready, e, {
                get: function () {
                  return De(
                    "You are getting " +
                      e +
                      " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                  );
                },
                set: function () {
                  return De(
                    "You are setting " +
                      e +
                      " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                  );
                },
              });
          }));
        var L = Object.assign({}, v),
          E = [],
          k = "./this.program",
          I = function (t, n) {
            throw n;
          },
          T = typeof window == "object",
          D = typeof importScripts == "function",
          x =
            typeof process == "object" &&
            typeof process.versions == "object" &&
            typeof process.versions.node == "string",
          $ = !T && !x && !D;
        if (v.ENVIRONMENT)
          throw new Error(
            "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)",
          );
        var P = v.ENVIRONMENT_IS_PTHREAD || !1,
          N = "";
        function M(e) {
          return v.locateFile ? v.locateFile(e, N) : N + e;
        }
        var w, A, F, O;
        if ($) {
          if (
            (typeof process == "object" && typeof n == "function") ||
            typeof window == "object" ||
            typeof importScripts == "function"
          )
            throw new Error(
              "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
            );
          (typeof read != "undefined" && (w = read),
            (F = function (t) {
              if (typeof readbuffer == "function")
                return new Uint8Array(readbuffer(t));
              var e = read(t, "binary");
              return (K(typeof e == "object"), e);
            }),
            (A = function (t, n, r) {
              setTimeout(function () {
                return n(F(t));
              });
            }),
            typeof clearTimeout == "undefined" &&
              (globalThis.clearTimeout = function (e) {}),
            typeof setTimeout == "undefined" &&
              (globalThis.setTimeout = function (e) {
                return typeof e == "function" ? e() : De();
              }),
            typeof scriptArgs != "undefined"
              ? (E = scriptArgs)
              : typeof arguments != "undefined" && (E = arguments),
            typeof quit == "function" &&
              (I = function (t, n) {
                throw (
                  setTimeout(function () {
                    if (!(n instanceof bt)) {
                      var e = n;
                      (n &&
                        typeof n == "object" &&
                        n.stack &&
                        (e = [n, n.stack]),
                        W("exiting due to exception: " + e));
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
        } else if (T || D) {
          if (
            (D
              ? (N = self.location.href)
              : typeof document != "undefined" &&
                document.currentScript &&
                (N = document.currentScript.src),
            t && (N = t),
            N.indexOf("blob:") !== 0
              ? (N = N.substr(0, N.replace(/[?#].*/, "").lastIndexOf("/") + 1))
              : (N = ""),
            !(typeof window == "object" || typeof importScripts == "function"))
          )
            throw new Error(
              "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
            );
          ((w = function (t) {
            var e = new XMLHttpRequest();
            return (e.open("GET", t, !1), e.send(null), e.responseText);
          }),
            D &&
              (F = function (t) {
                var e = new XMLHttpRequest();
                return (
                  e.open("GET", t, !1),
                  (e.responseType = "arraybuffer"),
                  e.send(null),
                  new Uint8Array(e.response)
                );
              }),
            (A = function (t, n, r) {
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
            (O = function (t) {
              return (document.title = t);
            }));
        } else throw new Error("environment detection error");
        var B = v.print || console.log.bind(console),
          W = v.printErr || console.error.bind(console);
        (Object.assign(v, L),
          (L = null),
          xi(),
          v.arguments && (E = v.arguments),
          Ve("arguments", "arguments_"),
          v.thisProgram && (k = v.thisProgram),
          Ve("thisProgram", "thisProgram"),
          v.quit && (I = v.quit),
          Ve("quit", "quit_"),
          K(
            typeof v.memoryInitializerPrefixURL == "undefined",
            "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead",
          ),
          K(
            typeof v.pthreadMainPrefixURL == "undefined",
            "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead",
          ),
          K(
            typeof v.cdInitializerPrefixURL == "undefined",
            "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead",
          ),
          K(
            typeof v.filePackagePrefixURL == "undefined",
            "Module.filePackagePrefixURL option was removed, use Module.locateFile instead",
          ),
          K(
            typeof v.read == "undefined",
            "Module.read option was removed (modify read_ in JS)",
          ),
          K(
            typeof v.readAsync == "undefined",
            "Module.readAsync option was removed (modify readAsync in JS)",
          ),
          K(
            typeof v.readBinary == "undefined",
            "Module.readBinary option was removed (modify readBinary in JS)",
          ),
          K(
            typeof v.setWindowTitle == "undefined",
            "Module.setWindowTitle option was removed (modify setWindowTitle in JS)",
          ),
          K(
            typeof v.TOTAL_MEMORY == "undefined",
            "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY",
          ),
          Ve("asm", "wasmExports"),
          Ve("read", "read_"),
          Ve("readAsync", "readAsync"),
          Ve("readBinary", "readBinary"),
          Ve("setWindowTitle", "setWindowTitle"),
          K(
            T || D || x,
            "Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)",
          ),
          K(
            !x,
            "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.",
          ),
          K(
            !$,
            "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.",
          ));
        var q;
        (v.wasmBinary && (q = v.wasmBinary), Ve("wasmBinary", "wasmBinary"));
        var U = v.noExitRuntime || !0;
        (Ve("noExitRuntime", "noExitRuntime"),
          typeof WebAssembly != "object" &&
            De("no native wasm support detected"));
        var V,
          H,
          G,
          z = !1,
          j;
        function K(e, t) {
          e || De("Assertion failed" + (t ? ": " + t : ""));
        }
        var Q, X, Y, J, Z, ee, te, ne, re, oe;
        function ae() {
          var e = V.buffer;
          ((v.HEAP8 = Q = new Int8Array(e)),
            (v.HEAP16 = Y = new Int16Array(e)),
            (v.HEAP32 = Z = new Int32Array(e)),
            (v.HEAPU8 = X = new Uint8Array(e)),
            (v.HEAPU16 = J = new Uint16Array(e)),
            (v.HEAPU32 = ee = new Uint32Array(e)),
            (v.HEAPF32 = te = new Float32Array(e)),
            (v.HEAPF64 = oe = new Float64Array(e)),
            (v.HEAP64 = ne = new BigInt64Array(e)),
            (v.HEAPU64 = re = new BigUint64Array(e)));
        }
        (K(
          !v.STACK_SIZE,
          "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time",
        ),
          K(
            typeof Int32Array != "undefined" &&
              typeof Float64Array != "undefined" &&
              Int32Array.prototype.subarray != null &&
              Int32Array.prototype.set != null,
            "JS engine does not provide full typed array support",
          ));
        var ie = v.INITIAL_MEMORY || 10485760;
        if (
          (Ve("INITIAL_MEMORY", "INITIAL_MEMORY"),
          K(
            ie >= 1048576,
            "INITIAL_MEMORY should be larger than STACK_SIZE, was " +
              ie +
              "! (STACK_SIZE=1048576)",
          ),
          P)
        )
          V = v.wasmMemory;
        else if (v.wasmMemory) V = v.wasmMemory;
        else if (
          ((V = new WebAssembly.Memory({
            initial: ie / 65536,
            maximum: 2147483648 / 65536,
            shared: !0,
          })),
          !(V.buffer instanceof SharedArrayBuffer))
        )
          throw (
            W(
              "requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag",
            ),
            x &&
              W(
                "(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)",
              ),
            Error("bad memory")
          );
        (ae(), (ie = V.buffer.byteLength), K(ie % 65536 === 0));
        var le;
        function se() {
          var e = al();
          (K((e & 3) == 0),
            e == 0 && (e += 4),
            (g()[e >> 2] = 34821223),
            (g()[(e + 4) >> 2] = 2310721022),
            (g()[0] = 1668509029));
        }
        function ue() {
          if (!z) {
            var e = al();
            e == 0 && (e += 4);
            var t = g()[e >> 2],
              n = g()[(e + 4) >> 2];
            ((t != 34821223 || n != 2310721022) &&
              De(
                "Stack overflow! Stack cookie has been overwritten at " +
                  an(e) +
                  ", expected hex dwords 0x89BACDFE and 0x2135467, but received " +
                  an(n) +
                  " " +
                  an(t),
              ),
              g()[0] != 1668509029 &&
                De(
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
        var ce = [],
          de = [],
          me = [],
          pe = !1,
          _e = 0;
        function fe() {
          return U || _e > 0;
        }
        function ge() {
          if ((K(!P), v.preRun))
            for (
              typeof v.preRun == "function" && (v.preRun = [v.preRun]);
              v.preRun.length;
            )
              Ce(v.preRun.shift());
          un(ce);
        }
        function he() {
          (K(!pe),
            (pe = !0),
            !P &&
              (ue(),
              !v.noFSInit && !Zt.init.initialized && Zt.init(),
              (Zt.ignorePermissions = !1),
              Ot.init(),
              un(de)));
        }
        function ye() {
          if ((ue(), !P)) {
            if (v.postRun)
              for (
                typeof v.postRun == "function" && (v.postRun = [v.postRun]);
                v.postRun.length;
              )
                ve(v.postRun.shift());
            un(me);
          }
        }
        function Ce(e) {
          ce.unshift(e);
        }
        function be(e) {
          de.unshift(e);
        }
        function ve(e) {
          me.unshift(e);
        }
        (K(
          Math.imul,
          "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
        ),
          K(
            Math.fround,
            "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
          ),
          K(
            Math.clz32,
            "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
          ),
          K(
            Math.trunc,
            "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
          ));
        var Se = 0,
          Re = null,
          Le = null,
          Ee = {};
        function ke(e) {
          for (var t = e; ; ) {
            if (!Ee[e]) return e;
            e = t + Math.random();
          }
        }
        function Ie(e) {
          (Se++,
            v.monitorRunDependencies && v.monitorRunDependencies(Se),
            e
              ? (K(!Ee[e]),
                (Ee[e] = 1),
                Re === null &&
                  typeof setInterval != "undefined" &&
                  (Re = setInterval(function () {
                    if (z) {
                      (clearInterval(Re), (Re = null));
                      return;
                    }
                    var e = !1;
                    for (var t in Ee)
                      (e || ((e = !0), W("still waiting on run dependencies:")),
                        W("dependency: " + t));
                    e && W("(end of list)");
                  }, 1e4)))
              : W("warning: run dependency added without ID"));
        }
        function Te(e) {
          if (
            (Se--,
            v.monitorRunDependencies && v.monitorRunDependencies(Se),
            e
              ? (K(Ee[e]), delete Ee[e])
              : W("warning: run dependency removed without ID"),
            Se == 0 && (Re !== null && (clearInterval(Re), (Re = null)), Le))
          ) {
            var t = Le;
            ((Le = null), t());
          }
        }
        function De(e) {
          (v.onAbort && v.onAbort(e),
            (e = "Aborted(" + e + ")"),
            W(e),
            (z = !0),
            (j = 1));
          var t = new WebAssembly.RuntimeError(e);
          throw (R(t), t);
        }
        var xe = "data:application/octet-stream;base64,";
        function $e(e) {
          return e.startsWith(xe);
        }
        function Pe(e) {
          return e.startsWith("file://");
        }
        function Ne(e) {
          return function () {
            K(
              pe,
              "native function `" +
                e +
                "` called before runtime initialization",
            );
            var t = H[e];
            return (
              K(t, "exported native function `" + e + "` not found"),
              t.apply(null, arguments)
            );
          };
        }
        var Me = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (babelHelpers.inheritsLoose(t, e), t);
          })(babelHelpers.wrapNativeSuper(Error)),
          we = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (babelHelpers.inheritsLoose(t, e), t);
          })(Me),
          Ae = (function (e) {
            function t(t) {
              var n;
              ((n = e.call(this, t) || this), (n.excPtr = t));
              var r = _n(t);
              return ((n.name = r[0]), (n.message = r[1]), n);
            }
            return (babelHelpers.inheritsLoose(t, e), t);
          })(Me),
          Fe = y;
        function Oe(e) {
          if (e == Fe && q) return new Uint8Array(q);
          if (F) return F(e);
          throw "both async and sync fetching of the wasm failed";
        }
        function Be(e) {
          return !q && (T || D) && typeof fetch == "function"
            ? fetch(e, { credentials: "same-origin" })
                .then(function (t) {
                  if (!t.ok)
                    throw "failed to load wasm binary file at '" + e + "'";
                  return t.arrayBuffer();
                })
                .catch(function () {
                  return Oe(e);
                })
            : (u || (u = n("Promise"))).resolve().then(function () {
                return Oe(e);
              });
        }
        function We(e, t, n) {
          return Be(e)
            .then(function (e) {
              return WebAssembly.instantiate(e, t);
            })
            .then(function (e) {
              return e;
            })
            .then(n, function (e) {
              (W("failed to asynchronously prepare wasm: " + e),
                Pe(Fe) &&
                  W(
                    "warning: Loading from a file URI (" +
                      Fe +
                      ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing",
                  ),
                De(e));
            });
        }
        function qe(e, t, n, r) {
          return !e &&
            typeof WebAssembly.instantiateStreaming == "function" &&
            !$e(t) &&
            typeof fetch == "function"
            ? fetch(t, { credentials: "same-origin" }).then(function (e) {
                var o = WebAssembly.instantiateStreaming(e, n);
                return o.then(r, function (e) {
                  return (
                    W("wasm streaming compile failed: " + e),
                    W("falling back to ArrayBuffer instantiation"),
                    We(t, n, r)
                  );
                });
              })
            : We(t, n, r);
        }
        function Ue() {
          var e = { env: $i, wasi_snapshot_preview1: $i };
          function t(e, t) {
            var n = e.exports;
            return (
              (H = n),
              hn(H._emscripten_tls_init),
              (le = H.__indirect_function_table),
              K(le, "table not found in wasm exports"),
              be(H.__wasm_call_ctors),
              (G = t),
              Te("wasm-instantiate"),
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_FETCH_END,
              ),
              n
            );
          }
          (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
            o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_FETCH_START,
          ),
            Ie("wasm-instantiate"));
          var n = v;
          function r(e) {
            (K(
              v === n,
              "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?",
            ),
              (n = null),
              t(e.instance, e.module));
          }
          if (v.instantiateWasm)
            try {
              return v.instantiateWasm(e, t);
            } catch (e) {
              (W("Module.instantiateWasm callback failed with error: " + e),
                R(e));
            }
          return (qe(q, Fe, e, r).catch(R), {});
        }
        function Ve(e, t, n) {
          (n === void 0 && (n = !0),
            Object.getOwnPropertyDescriptor(v, e) ||
              Object.defineProperty(v, e, {
                configurable: !0,
                get: function () {
                  var r = n
                    ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
                    : "";
                  De("`Module." + e + "` has been replaced by `" + t + "`" + r);
                },
              }));
        }
        function He(e) {
          Object.getOwnPropertyDescriptor(v, e) &&
            De(
              "`Module." +
                e +
                "` was supplied but `" +
                e +
                "` not included in INCOMING_MODULE_JS_API",
            );
        }
        function Ge(e) {
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
        function ze(e, t) {
          typeof globalThis != "undefined" &&
            Object.defineProperty(globalThis, e, {
              configurable: !0,
              get: function () {
                yn("`" + e + "` is not longer defined by emscripten. " + t);
              },
            });
        }
        ze("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
        function je(e) {
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
                  Ge(e) &&
                    (t +=
                      ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
                  yn(t));
              },
            }),
            Ke(e));
        }
        function Ke(e) {
          Object.getOwnPropertyDescriptor(v, e) ||
            Object.defineProperty(v, e, {
              configurable: !0,
              get: function () {
                var t =
                  "'" +
                  e +
                  "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)";
                (Ge(e) &&
                  (t +=
                    ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
                  De(t));
              },
            });
        }
        function Qe(e) {
          console.warn.apply(console, arguments);
        }
        var Xe = {
          1351551: function () {
            return Date.now();
          },
          1351574: function (t, n) {
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
        function Ye(e, t) {
          var n = t ? en(t) : "";
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onCallEvent({
            eventType: e,
            userData: "",
            eventDataJson: n,
          });
        }
        function Je(e) {
          self.__inMLInference = e;
        }
        function Ze() {
          var e = De;
          De = function (n) {
            if (self.__inMLInference && v._wasm_throw_ml_abort) {
              (v.onAbort && v.onAbort(n), (n = "Aborted(" + n + ")"), W(n));
              var t = Mt(n) + 1,
                r = _l(),
                o = gl(t);
              (Qn(n, o, t), v._wasm_throw_ml_abort(o), fl(r));
              return;
            }
            e(n);
          };
        }
        function et(e, t) {
          if (!e || t <= 0) return 0;
          var n =
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getPersistentDirectoryPath();
          if (n) {
            var r = Mt(n) + 1;
            return (Qn(n, e, t), r);
          }
          return 0;
        }
        function tt(e) {
          var t = e ? en(e) : null,
            n = self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getBweModelPath({
              versionName: t,
            });
          if (n) {
            var r = Mt(n) + 1,
              o = wi(r);
            return (Qn(n, o, r), o);
          }
          return null;
        }
        function nt(e, t) {
          var n = t ? en(t) : null,
            r =
              self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getMLModelPathForType(
                { modelType: e, versionName: n },
              );
          if (r) {
            var o = Mt(r) + 1,
              a = wi(o);
            return (Qn(r, a, o), a);
          }
          return null;
        }
        function rt(e, t) {
          if (t == null) {
            var n = new Error("get_random_bytes_js: rawBytesPtr is null");
            throw (n.stack, n);
          }
          var r = new Uint8Array(e),
            o = self.crypto.getRandomValues(r);
          vi(o, t);
        }
        function ot(e) {
          var t = en(e);
          return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.isParticipantKnownContact(
            { jid: t },
          );
        }
        function at(e, t, n, r, o, a, i, l, s, u) {
          var c = d(),
            m = new Uint8Array(n);
          m.set(c.subarray(t, t + n));
          var p = en(e);
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
        function it(e, t, n, r) {
          var o = d(),
            a = new Uint8Array(r);
          a.set(o.subarray(n, n + r));
          var i = en(t),
            l = en(e);
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onSignalingXmpp({
            peerJid: l,
            callId: i,
            xmlPayload: a,
          });
        }
        function lt(e, t, n, r) {
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
            { data: i, len: t, ip: en(n), port: r },
          );
        }
        function st(e, t, n, r, o, a) {
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.initCaptureDriverJS({
            sample_rate: e,
            channels: t,
            bits_per_sample: n,
            frames_per_chunk: r,
            device_type: o,
            auto_gain_control: !!a,
          });
        }
        function ut(e) {
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startCaptureJS({
            device_type: e,
          });
        }
        function ct(e) {
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopCaptureJS({
            device_type: e,
          });
        }
        function dt(e, t, n, r) {
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.initPlaybackDriverJS({
            sample_rate: e,
            channels: t,
            bits_per_sample: n,
            frames_per_chunk: r,
          });
        }
        function mt() {
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startPlaybackJS();
        }
        function pt() {
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopPlaybackJS();
        }
        function _t() {
          return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getBrowserAudioProcessingStatus();
        }
        function ft(e, t, n) {
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startDesktopCaptureJS({
            width: e,
            height: t,
            max_fps: n,
          });
        }
        function gt() {
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopDesktopCaptureJS();
        }
        function ht(e, t, n, r, o) {
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startVideoCaptureJS({
            camera_id: en(e),
            width: t,
            height: n,
            max_fps: r,
            isAVUpgrade: !!o,
          });
        }
        function yt() {
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopVideoCaptureJS();
        }
        function Ct(e, t) {
          var n = t ? en(t).trim() : "";
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
            level: e,
            message: n,
          });
        }
        function bt(e) {
          ((this.name = "ExitStatus"),
            (this.message = "Program terminated with exit(" + e + ")"),
            (this.status = e));
        }
        var vt = function (t) {
          (t.terminate(),
            t.removeAllMessageListeners("cmd"),
            t.addMessageListener("cmd", function (e) {
              var n = e.cmd;
              W(
                'received "' +
                  n +
                  '" command from terminated worker: ' +
                  t.workerID,
              );
            }));
        };
        function St(e) {
          (K(
            !P,
            "Internal Error! killThread() can only ever be called from main application thread!",
          ),
            K(e, "Internal Error! Null pthread_ptr in killThread!"));
          var t = sn.pthreads[e];
          (delete sn.pthreads[e],
            vt(t),
            il(e),
            sn.runningWorkers.splice(sn.runningWorkers.indexOf(t), 1),
            (t.pthread_ptr = 0));
        }
        function Rt(e) {
          (K(
            !P,
            "Internal Error! cancelThread() can only ever be called from main application thread!",
          ),
            K(e, "Internal Error! Null pthread_ptr in cancelThread!"));
          var t = sn.pthreads[e];
          t.postMessage({ cmd: "cancel", type: "cmd" });
        }
        function Lt(e) {
          (K(
            !P,
            "Internal Error! cleanupThread() can only ever be called from main application thread!",
          ),
            K(e, "Internal Error! Null pthread_ptr in cleanupThread!"));
          var t = sn.pthreads[e];
          (K(t), sn.returnWorkerToPool(t));
        }
        var Et = function (t, n) {
          return (d().fill(0, t, t + n), t);
        };
        function kt(e) {
          (K(
            !P,
            "Internal Error! spawnThread() can only ever be called from main application thread!",
          ),
            K(e.pthread_ptr, "Internal error, no pthread ptr!"));
          var t = sn.getNewWorker();
          if (!t) return 6;
          (K(!t.pthread_ptr, "Internal error!"),
            sn.runningWorkers.push(t),
            (sn.pthreads[e.pthread_ptr] = t),
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
        var It = {
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
              var e = It.isAbs(t),
                n = t.substr(-1) === "/";
              return (
                (t = It.normalizeArray(
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
              var e = It.splitPath(t),
                n = e[0],
                r = e[1];
              return !n && !r
                ? "."
                : (r && (r = r.substr(0, r.length - 1)), n + r);
            },
            basename: function (t) {
              if (t === "/") return "/";
              ((t = It.normalize(t)), (t = t.replace(/\/$/, "")));
              var e = t.lastIndexOf("/");
              return e === -1 ? t : t.substr(e + 1);
            },
            join: function () {
              var e = Array.prototype.slice.call(arguments);
              return It.normalize(e.join("/"));
            },
            join2: function (t, n) {
              return It.normalize(t + "/" + n);
            },
          },
          Tt = function () {
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
            De(
              "no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };",
            );
          },
          Dt = function (t) {
            return (Dt = Tt())(t);
          },
          xt = {
            resolve: function () {
              for (
                var e = "", t = !1, n = arguments.length - 1;
                n >= -1 && !t;
                n--
              ) {
                var r = n >= 0 ? arguments[n] : Zt.cwd();
                if (typeof r != "string")
                  throw new TypeError(
                    "Arguments to path.resolve must be strings",
                  );
                if (!r) return "";
                ((e = r + "/" + e), (t = It.isAbs(r)));
              }
              return (
                (e = It.normalizeArray(
                  e.split("/").filter(function (e) {
                    return !!e;
                  }),
                  !t,
                ).join("/")),
                (t ? "/" : "") + e || "."
              );
            },
            relative: function (t, n) {
              ((t = xt.resolve(t).substr(1)), (n = xt.resolve(n).substr(1)));
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
          $t =
            typeof TextDecoder != "undefined"
              ? new TextDecoder("utf8")
              : void 0,
          Pt = function (t, n, r) {
            for (var e = n + r, o = n; t[o] && !(o >= e); ) ++o;
            if (o - n > 16 && t.buffer && $t) return $t.decode(t.slice(n, o));
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
                      yn(
                        "Invalid UTF-8 leading byte " +
                          an(i) +
                          " encountered when deserializing a UTF-8 string in wasm memory to a JS string!",
                      ),
                    (i =
                      ((i & 7) << 18) | (l << 12) | (s << 6) | (t[n++] & 63))),
                i < 65536)
              )
                a += String.fromCharCode(i);
              else {
                var u = i - 65536;
                a += String.fromCharCode(55296 | (u >> 10), 56320 | (u & 1023));
              }
            }
            return a;
          },
          Nt = [],
          Mt = function (t) {
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
          wt = function (t, n, r, o) {
            if ((K(typeof t == "string"), !(o > 0))) return 0;
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
                  yn(
                    "Invalid Unicode code point " +
                      an(l) +
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
        function At(e, t, n) {
          var r = n > 0 ? n : Mt(e) + 1,
            o = new Array(r),
            a = wt(e, o, 0, o.length);
          return (t && (o.length = a), o);
        }
        var Ft = function () {
            if (!Nt.length) {
              var e = null;
              if (
                (typeof window != "undefined" &&
                typeof window.prompt == "function"
                  ? ((e = window.prompt("Input: ")), e !== null && (e += "\n"))
                  : typeof readline == "function" &&
                    ((e = readline()), e !== null && (e += "\n")),
                !e)
              )
                return null;
              Nt = At(e, !0);
            }
            return Nt.shift();
          },
          Ot = {
            ttys: [],
            init: function () {},
            shutdown: function () {},
            register: function (t, n) {
              ((Ot.ttys[t] = { input: [], output: [], ops: n }),
                Zt.registerDevice(t, Ot.stream_ops));
            },
            stream_ops: {
              open: function (t) {
                var e = Ot.ttys[t.node.rdev];
                if (!e) throw new Zt.ErrnoError(43);
                ((t.tty = e), (t.seekable = !1));
              },
              close: function (t) {
                t.tty.ops.fsync(t.tty);
              },
              fsync: function (t) {
                t.tty.ops.fsync(t.tty);
              },
              read: function (t, n, r, o, a) {
                if (!t.tty || !t.tty.ops.get_char) throw new Zt.ErrnoError(60);
                for (var e = 0, i = 0; i < o; i++) {
                  var l;
                  try {
                    l = t.tty.ops.get_char(t.tty);
                  } catch (e) {
                    throw new Zt.ErrnoError(29);
                  }
                  if (l === void 0 && e === 0) throw new Zt.ErrnoError(6);
                  if (l == null) break;
                  (e++, (n[r + i] = l));
                }
                return (e && (t.node.timestamp = Date.now()), e);
              },
              write: function (t, n, r, o, a) {
                if (!t.tty || !t.tty.ops.put_char) throw new Zt.ErrnoError(60);
                try {
                  for (var e = 0; e < o; e++)
                    t.tty.ops.put_char(t.tty, n[r + e]);
                } catch (e) {
                  throw new Zt.ErrnoError(29);
                }
                return (o && (t.node.timestamp = Date.now()), e);
              },
            },
            default_tty_ops: {
              get_char: function (t) {
                return Ft();
              },
              put_char: function (t, n) {
                n === null || n === 10
                  ? (B(Pt(t.output, 0)), (t.output = []))
                  : n != 0 && t.output.push(n);
              },
              fsync: function (t) {
                t.output &&
                  t.output.length > 0 &&
                  (B(Pt(t.output, 0)), (t.output = []));
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
                  ? (W(Pt(t.output, 0)), (t.output = []))
                  : n != 0 && t.output.push(n);
              },
              fsync: function (t) {
                t.output &&
                  t.output.length > 0 &&
                  (W(Pt(t.output, 0)), (t.output = []));
              },
            },
          },
          Bt = function (t, n) {
            return (
              K(n, "alignment argument is required"),
              Math.ceil(t / n) * n
            );
          },
          Wt = function (t) {
            t = Bt(t, 65536);
            var e = Qi(65536, t);
            return e ? Et(e, t) : 0;
          },
          qt = {
            ops_table: null,
            mount: function (t) {
              return qt.createNode(null, "/", 16895, 0);
            },
            createNode: function (t, n, r, o) {
              if (Zt.isBlkdev(r) || Zt.isFIFO(r)) throw new Zt.ErrnoError(63);
              qt.ops_table ||
                (qt.ops_table = {
                  dir: {
                    node: {
                      getattr: qt.node_ops.getattr,
                      setattr: qt.node_ops.setattr,
                      lookup: qt.node_ops.lookup,
                      mknod: qt.node_ops.mknod,
                      rename: qt.node_ops.rename,
                      unlink: qt.node_ops.unlink,
                      rmdir: qt.node_ops.rmdir,
                      readdir: qt.node_ops.readdir,
                      symlink: qt.node_ops.symlink,
                    },
                    stream: { llseek: qt.stream_ops.llseek },
                  },
                  file: {
                    node: {
                      getattr: qt.node_ops.getattr,
                      setattr: qt.node_ops.setattr,
                    },
                    stream: {
                      llseek: qt.stream_ops.llseek,
                      read: qt.stream_ops.read,
                      write: qt.stream_ops.write,
                      allocate: qt.stream_ops.allocate,
                      mmap: qt.stream_ops.mmap,
                      msync: qt.stream_ops.msync,
                    },
                  },
                  link: {
                    node: {
                      getattr: qt.node_ops.getattr,
                      setattr: qt.node_ops.setattr,
                      readlink: qt.node_ops.readlink,
                    },
                    stream: {},
                  },
                  chrdev: {
                    node: {
                      getattr: qt.node_ops.getattr,
                      setattr: qt.node_ops.setattr,
                    },
                    stream: Zt.chrdev_stream_ops,
                  },
                });
              var e = Zt.createNode(t, n, r, o);
              return (
                Zt.isDir(e.mode)
                  ? ((e.node_ops = qt.ops_table.dir.node),
                    (e.stream_ops = qt.ops_table.dir.stream),
                    (e.contents = {}))
                  : Zt.isFile(e.mode)
                    ? ((e.node_ops = qt.ops_table.file.node),
                      (e.stream_ops = qt.ops_table.file.stream),
                      (e.usedBytes = 0),
                      (e.contents = null))
                    : Zt.isLink(e.mode)
                      ? ((e.node_ops = qt.ops_table.link.node),
                        (e.stream_ops = qt.ops_table.link.stream))
                      : Zt.isChrdev(e.mode) &&
                        ((e.node_ops = qt.ops_table.chrdev.node),
                        (e.stream_ops = qt.ops_table.chrdev.stream)),
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
                  (e.dev = Zt.isChrdev(t.mode) ? t.id : 1),
                  (e.ino = t.id),
                  (e.mode = t.mode),
                  (e.nlink = 1),
                  (e.uid = 0),
                  (e.gid = 0),
                  (e.rdev = t.rdev),
                  Zt.isDir(t.mode)
                    ? (e.size = 4096)
                    : Zt.isFile(t.mode)
                      ? (e.size = t.usedBytes)
                      : Zt.isLink(t.mode)
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
                  n.size !== void 0 && qt.resizeFileStorage(t, n.size));
              },
              lookup: function (t, n) {
                throw Zt.genericErrors[44];
              },
              mknod: function (t, n, r, o) {
                return qt.createNode(t, n, r, o);
              },
              rename: function (t, n, r) {
                if (Zt.isDir(t.mode)) {
                  var e;
                  try {
                    e = Zt.lookupNode(n, r);
                  } catch (e) {}
                  if (e) for (var o in e.contents) throw new Zt.ErrnoError(55);
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
                var e = Zt.lookupNode(t, n);
                for (var r in e.contents) throw new Zt.ErrnoError(55);
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
                var e = qt.createNode(t, n, 41471, 0);
                return ((e.link = r), e);
              },
              readlink: function (t) {
                if (!Zt.isLink(t.mode)) throw new Zt.ErrnoError(28);
                return t.link;
              },
            },
            stream_ops: {
              read: function (t, n, r, o, a) {
                var e = t.node.contents;
                if (a >= t.node.usedBytes) return 0;
                var i = Math.min(t.node.usedBytes - a, o);
                if ((K(i >= 0), i > 8 && e.subarray))
                  n.set(e.subarray(a, a + i), r);
                else for (var l = 0; l < i; l++) n[r + l] = e[a + l];
                return i;
              },
              write: function (t, n, r, o, a, i) {
                if (
                  (K(!(n instanceof ArrayBuffer)),
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
                      K(
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
                  (qt.expandFileStorage(e, a + o),
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
                      Zt.isFile(t.node.mode) &&
                      (e += t.node.usedBytes),
                  e < 0)
                )
                  throw new Zt.ErrnoError(28);
                return e;
              },
              allocate: function (t, n, r) {
                (qt.expandFileStorage(t.node, n + r),
                  (t.node.usedBytes = Math.max(t.node.usedBytes, n + r)));
              },
              mmap: function (t, n, r, o, a) {
                if (!Zt.isFile(t.node.mode)) throw new Zt.ErrnoError(43);
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
                    (e = Wt(n)),
                    !e)
                  )
                    throw new Zt.ErrnoError(48);
                  l().set(s, e);
                }
                return { ptr: e, allocated: i };
              },
              msync: function (t, n, r, o, a) {
                return (qt.stream_ops.write(t, n, 0, o, r, !1), 0);
              },
            },
          },
          Ut = function (t, n, r, o) {
            var e = o ? "" : ke("al " + t);
            (A(
              t,
              function (r) {
                (K(r, 'Loading data file "' + t + '" failed (no arrayBuffer).'),
                  n(new Uint8Array(r)),
                  e && Te(e));
              },
              function (e) {
                if (r) r();
                else throw 'Loading data file "' + t + '" failed.';
              },
            ),
              e && Ie(e));
          },
          Vt = v.preloadPlugins || [];
        function Ht(e, t, n, r) {
          typeof Pa != "undefined" && Pa.init();
          var o = !1;
          return (
            Vt.forEach(function (a) {
              o || (a.canHandle(t) && (a.handle(e, t, n, r), (o = !0)));
            }),
            o
          );
        }
        function Gt(e, t, n, r, o, a, i, l, s, u) {
          var c = t ? xt.resolve(It.join2(e, t)) : e,
            d = ke("cp " + c);
          function m(n) {
            function m(n) {
              (u && u(),
                l || Zt.createDataFile(e, t, n, r, o, s),
                a && a(),
                Te(d));
            }
            Ht(n, c, m, function () {
              (i && i(), Te(d));
            }) || m(n);
          }
          (Ie(d),
            typeof n == "string"
              ? Ut(
                  n,
                  function (e) {
                    return m(e);
                  },
                  i,
                )
              : m(n));
        }
        function zt(e) {
          var t = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
            n = t[e];
          if (typeof n == "undefined")
            throw new Error("Unknown file open mode: " + e);
          return n;
        }
        function jt(e, t) {
          var n = 0;
          return (e && (n |= 365), t && (n |= 146), n);
        }
        var Kt = {
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
                K(e, "IDBFS used, but indexedDB not supported"),
                e
              );
            }),
            DB_VERSION: 21,
            DB_STORE_NAME: "FILE_DATA",
            mount: function (t) {
              return qt.mount.apply(null, arguments);
            },
            syncfs: function (t, n, r) {
              Kt.getLocalSet(t, function (e, o) {
                if (e) return r(e);
                Kt.getRemoteSet(t, function (e, t) {
                  if (e) return r(e);
                  var a = n ? t : o,
                    i = n ? o : t;
                  Kt.reconcile(a, i, r);
                });
              });
            },
            quit: function () {
              (Object.values(Kt.dbs).forEach(function (e) {
                return e.close();
              }),
                (Kt.dbs = {}));
            },
            getDB: function (t, n) {
              var e = Kt.dbs[t];
              if (e) return n(null, e);
              var r;
              try {
                r = Kt.indexedDB().open(t, Kt.DB_VERSION);
              } catch (e) {
                return n(e);
              }
              if (!r) return n("Unable to connect to IndexedDB");
              ((r.onupgradeneeded = function (e) {
                var t = e.target.result,
                  n = e.target.transaction,
                  r;
                (t.objectStoreNames.contains(Kt.DB_STORE_NAME)
                  ? (r = n.objectStore(Kt.DB_STORE_NAME))
                  : (r = t.createObjectStore(Kt.DB_STORE_NAME)),
                  r.indexNames.contains("timestamp") ||
                    r.createIndex("timestamp", "timestamp", { unique: !1 }));
              }),
                (r.onsuccess = function () {
                  ((e = r.result), (Kt.dbs[t] = e), n(null, e));
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
                  return It.join2(e, t);
                };
              }
              for (
                var a = Zt.readdir(t.mountpoint).filter(r).map(o(t.mountpoint));
                a.length;
              ) {
                var i = a.pop(),
                  l;
                try {
                  l = Zt.stat(i);
                } catch (e) {
                  return n(e);
                }
                (Zt.isDir(l.mode) &&
                  a.push.apply(a, Zt.readdir(i).filter(r).map(o(i))),
                  (e[i] = { timestamp: l.mtime }));
              }
              return n(null, { type: "local", entries: e });
            },
            getRemoteSet: function (t, n) {
              var e = {};
              Kt.getDB(t.mountpoint, function (t, r) {
                if (t) return n(t);
                try {
                  var o = r.transaction([Kt.DB_STORE_NAME], "readonly");
                  o.onerror = function (e) {
                    (n(e.target.error), e.preventDefault());
                  };
                  var a = o.objectStore(Kt.DB_STORE_NAME),
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
                var o = Zt.lookupPath(t);
                ((r = o.node), (e = Zt.stat(t)));
              } catch (e) {
                return n(e);
              }
              return Zt.isDir(e.mode)
                ? n(null, { timestamp: e.mtime, mode: e.mode })
                : Zt.isFile(e.mode)
                  ? ((r.contents = qt.getFileDataAsTypedArray(r)),
                    n(null, {
                      timestamp: e.mtime,
                      mode: e.mode,
                      contents: r.contents,
                    }))
                  : n(new Error("node type not supported"));
            },
            storeLocalEntry: function (t, n, r) {
              try {
                if (Zt.isDir(n.mode)) Zt.mkdirTree(t, n.mode);
                else if (Zt.isFile(n.mode))
                  Zt.writeFile(t, n.contents, { canOwn: !0 });
                else return r(new Error("node type not supported"));
                (Zt.chmod(t, n.mode), Zt.utime(t, n.timestamp, n.timestamp));
              } catch (e) {
                return r(e);
              }
              r(null);
            },
            removeLocalEntry: function (t, n) {
              try {
                var e = Zt.stat(t);
                Zt.isDir(e.mode)
                  ? Zt.rmdir(t)
                  : Zt.isFile(e.mode) && Zt.unlink(t);
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
                u = s.transaction([Kt.DB_STORE_NAME], "readwrite"),
                c = u.objectStore(Kt.DB_STORE_NAME);
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
                    ? Kt.loadRemoteEntry(c, e, function (t, n) {
                        if (t) return d(t);
                        Kt.storeLocalEntry(e, n, d);
                      })
                    : Kt.loadLocalEntry(e, function (t, n) {
                        if (t) return d(t);
                        Kt.storeRemoteEntry(c, e, n, d);
                      });
                }),
                a
                  .sort()
                  .reverse()
                  .forEach(function (e) {
                    n.type === "local"
                      ? Kt.removeLocalEntry(e, d)
                      : Kt.removeRemoteEntry(c, e, d);
                  }));
            },
          },
          Qt = {
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
          Xt = {};
        function Yt(e) {
          return (
            yn(
              "warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling",
            ),
            e
          );
        }
        function Jt(e) {
          var t = /\b_Z[\w\d_]+/g;
          return e.replace(t, function (e) {
            var t = Yt(e);
            return e === t ? e : t + " [" + e + "]";
          });
        }
        var Zt = {
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
              if ((n === void 0 && (n = {}), (t = xt.resolve(t)), !t))
                return { path: "", node: null };
              var e = { follow_mount: !0, recurse_count: 0 };
              if (((n = Object.assign(e, n)), n.recurse_count > 8))
                throw new Zt.ErrnoError(32);
              for (
                var r = t.split("/").filter(function (e) {
                    return !!e;
                  }),
                  o = Zt.root,
                  a = "/",
                  i = 0;
                i < r.length;
                i++
              ) {
                var l = i === r.length - 1;
                if (l && n.parent) break;
                if (
                  ((o = Zt.lookupNode(o, r[i])),
                  (a = It.join2(a, r[i])),
                  Zt.isMountpoint(o) &&
                    (!l || (l && n.follow_mount)) &&
                    (o = o.mounted.root),
                  !l || n.follow)
                )
                  for (var s = 0; Zt.isLink(o.mode); ) {
                    var u = Zt.readlink(a);
                    a = xt.resolve(It.dirname(a), u);
                    var c = Zt.lookupPath(a, {
                      recurse_count: n.recurse_count + 1,
                    });
                    if (((o = c.node), s++ > 40)) throw new Zt.ErrnoError(32);
                  }
              }
              return { path: a, node: o };
            },
            getPath: function (t) {
              for (var e; ; ) {
                if (Zt.isRoot(t)) {
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
              return ((t + e) >>> 0) % Zt.nameTable.length;
            },
            hashAddNode: function (t) {
              var e = Zt.hashName(t.parent.id, t.name);
              ((t.name_next = Zt.nameTable[e]), (Zt.nameTable[e] = t));
            },
            hashRemoveNode: function (t) {
              var e = Zt.hashName(t.parent.id, t.name);
              if (Zt.nameTable[e] === t) Zt.nameTable[e] = t.name_next;
              else
                for (var n = Zt.nameTable[e]; n; ) {
                  if (n.name_next === t) {
                    n.name_next = t.name_next;
                    break;
                  }
                  n = n.name_next;
                }
            },
            lookupNode: function (t, n) {
              var e = Zt.mayLookup(t);
              if (e) throw new Zt.ErrnoError(e, t);
              for (
                var r = Zt.hashName(t.id, n), o = Zt.nameTable[r];
                o;
                o = o.name_next
              ) {
                var a = o.name;
                if (o.parent.id === t.id && a === n) return o;
              }
              return Zt.lookup(t, n);
            },
            createNode: function (t, n, r, o) {
              K(typeof t == "object");
              var e = new Zt.FSNode(t, n, r, o);
              return (Zt.hashAddNode(e), e);
            },
            destroyNode: function (t) {
              Zt.hashRemoveNode(t);
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
              return Zt.ignorePermissions
                ? 0
                : (n.includes("r") && !(t.mode & 292)) ||
                    (n.includes("w") && !(t.mode & 146)) ||
                    (n.includes("x") && !(t.mode & 73))
                  ? 2
                  : 0;
            },
            mayLookup: function (t) {
              var e = Zt.nodePermissions(t, "x");
              return e || (t.node_ops.lookup ? 0 : 2);
            },
            mayCreate: function (t, n) {
              try {
                var e = Zt.lookupNode(t, n);
                return 20;
              } catch (e) {}
              return Zt.nodePermissions(t, "wx");
            },
            mayDelete: function (t, n, r) {
              var e;
              try {
                e = Zt.lookupNode(t, n);
              } catch (e) {
                return e.errno;
              }
              var o = Zt.nodePermissions(t, "wx");
              if (o) return o;
              if (r) {
                if (!Zt.isDir(e.mode)) return 54;
                if (Zt.isRoot(e) || Zt.getPath(e) === Zt.cwd()) return 10;
              } else if (Zt.isDir(e.mode)) return 31;
              return 0;
            },
            mayOpen: function (t, n) {
              return t
                ? Zt.isLink(t.mode)
                  ? 32
                  : Zt.isDir(t.mode) &&
                      (Zt.flagsToPermissionString(n) !== "r" || n & 512)
                    ? 31
                    : Zt.nodePermissions(t, Zt.flagsToPermissionString(n))
                : 44;
            },
            MAX_OPEN_FDS: 4096,
            nextfd: function () {
              for (var e = 0; e <= Zt.MAX_OPEN_FDS; e++)
                if (!Zt.streams[e]) return e;
              throw new Zt.ErrnoError(33);
            },
            getStreamChecked: function (t) {
              var e = Zt.getStream(t);
              if (!e) throw new Zt.ErrnoError(8);
              return e;
            },
            getStream: function (t) {
              return Zt.streams[t];
            },
            createStream: function (t, n) {
              return (
                n === void 0 && (n = -1),
                Zt.FSStream ||
                  ((Zt.FSStream = function () {
                    this.shared = {};
                  }),
                  (Zt.FSStream.prototype = {}),
                  Object.defineProperties(Zt.FSStream.prototype, {
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
                (t = Object.assign(new Zt.FSStream(), t)),
                n == -1 && (n = Zt.nextfd()),
                (t.fd = n),
                (Zt.streams[n] = t),
                t
              );
            },
            closeStream: function (t) {
              Zt.streams[t] = null;
            },
            chrdev_stream_ops: {
              open: function (t) {
                var e = Zt.getDevice(t.node.rdev);
                ((t.stream_ops = e.stream_ops),
                  t.stream_ops.open && t.stream_ops.open(t));
              },
              llseek: function () {
                throw new Zt.ErrnoError(70);
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
              Zt.devices[t] = { stream_ops: n };
            },
            getDevice: function (t) {
              return Zt.devices[t];
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
                Zt.syncFSRequests++,
                Zt.syncFSRequests > 1 &&
                  W(
                    "warning: " +
                      Zt.syncFSRequests +
                      " FS.syncfs operations in flight at once, probably just doing extra work",
                  ));
              var e = Zt.getMounts(Zt.root.mount),
                r = 0;
              function o(e) {
                return (K(Zt.syncFSRequests > 0), Zt.syncFSRequests--, n(e));
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
              if (e && Zt.root) throw new Zt.ErrnoError(10);
              if (!e && !o) {
                var i = Zt.lookupPath(r, { follow_mount: !1 });
                if (((r = i.path), (a = i.node), Zt.isMountpoint(a)))
                  throw new Zt.ErrnoError(10);
                if (!Zt.isDir(a.mode)) throw new Zt.ErrnoError(54);
              }
              var l = { type: t, opts: n, mountpoint: r, mounts: [] },
                s = t.mount(l);
              return (
                (s.mount = l),
                (l.root = s),
                e
                  ? (Zt.root = s)
                  : a && ((a.mounted = l), a.mount && a.mount.mounts.push(l)),
                s
              );
            },
            unmount: function (t) {
              var e = Zt.lookupPath(t, { follow_mount: !1 });
              if (!Zt.isMountpoint(e.node)) throw new Zt.ErrnoError(28);
              var n = e.node,
                r = n.mounted,
                o = Zt.getMounts(r);
              (Object.keys(Zt.nameTable).forEach(function (e) {
                for (var t = Zt.nameTable[e]; t; ) {
                  var n = t.name_next;
                  (o.includes(t.mount) && Zt.destroyNode(t), (t = n));
                }
              }),
                (n.mounted = null));
              var a = n.mount.mounts.indexOf(r);
              (K(a !== -1), n.mount.mounts.splice(a, 1));
            },
            lookup: function (t, n) {
              return t.node_ops.lookup(t, n);
            },
            mknod: function (t, n, r) {
              var e = Zt.lookupPath(t, { parent: !0 }),
                o = e.node,
                a = It.basename(t);
              if (!a || a === "." || a === "..") throw new Zt.ErrnoError(28);
              var i = Zt.mayCreate(o, a);
              if (i) throw new Zt.ErrnoError(i);
              if (!o.node_ops.mknod) throw new Zt.ErrnoError(63);
              return o.node_ops.mknod(o, a, n, r);
            },
            create: function (t, n) {
              return (
                (n = n !== void 0 ? n : 438),
                (n &= 4095),
                (n |= 32768),
                Zt.mknod(t, n, 0)
              );
            },
            mkdir: function (t, n) {
              return (
                (n = n !== void 0 ? n : 511),
                (n &= 1023),
                (n |= 16384),
                Zt.mknod(t, n, 0)
              );
            },
            mkdirTree: function (t, n) {
              for (var e = t.split("/"), r = "", o = 0; o < e.length; ++o)
                if (e[o]) {
                  r += "/" + e[o];
                  try {
                    Zt.mkdir(r, n);
                  } catch (e) {
                    if (e.errno != 20) throw e;
                  }
                }
            },
            mkdev: function (t, n, r) {
              return (
                typeof r == "undefined" && ((r = n), (n = 438)),
                (n |= 8192),
                Zt.mknod(t, n, r)
              );
            },
            symlink: function (t, n) {
              if (!xt.resolve(t)) throw new Zt.ErrnoError(44);
              var e = Zt.lookupPath(n, { parent: !0 }),
                r = e.node;
              if (!r) throw new Zt.ErrnoError(44);
              var o = It.basename(n),
                a = Zt.mayCreate(r, o);
              if (a) throw new Zt.ErrnoError(a);
              if (!r.node_ops.symlink) throw new Zt.ErrnoError(63);
              return r.node_ops.symlink(r, o, t);
            },
            rename: function (t, n) {
              var e = It.dirname(t),
                r = It.dirname(n),
                o = It.basename(t),
                a = It.basename(n),
                i,
                l,
                s;
              if (
                ((i = Zt.lookupPath(t, { parent: !0 })),
                (l = i.node),
                (i = Zt.lookupPath(n, { parent: !0 })),
                (s = i.node),
                !l || !s)
              )
                throw new Zt.ErrnoError(44);
              if (l.mount !== s.mount) throw new Zt.ErrnoError(75);
              var u = Zt.lookupNode(l, o),
                c = xt.relative(t, r);
              if (c.charAt(0) !== ".") throw new Zt.ErrnoError(28);
              if (((c = xt.relative(n, e)), c.charAt(0) !== "."))
                throw new Zt.ErrnoError(55);
              var d;
              try {
                d = Zt.lookupNode(s, a);
              } catch (e) {}
              if (u !== d) {
                var m = Zt.isDir(u.mode),
                  p = Zt.mayDelete(l, o, m);
                if (p) throw new Zt.ErrnoError(p);
                if (((p = d ? Zt.mayDelete(s, a, m) : Zt.mayCreate(s, a)), p))
                  throw new Zt.ErrnoError(p);
                if (!l.node_ops.rename) throw new Zt.ErrnoError(63);
                if (Zt.isMountpoint(u) || (d && Zt.isMountpoint(d)))
                  throw new Zt.ErrnoError(10);
                if (s !== l && ((p = Zt.nodePermissions(l, "w")), p))
                  throw new Zt.ErrnoError(p);
                Zt.hashRemoveNode(u);
                try {
                  l.node_ops.rename(u, s, a);
                } catch (e) {
                  throw e;
                } finally {
                  Zt.hashAddNode(u);
                }
              }
            },
            rmdir: function (t) {
              var e = Zt.lookupPath(t, { parent: !0 }),
                n = e.node,
                r = It.basename(t),
                o = Zt.lookupNode(n, r),
                a = Zt.mayDelete(n, r, !0);
              if (a) throw new Zt.ErrnoError(a);
              if (!n.node_ops.rmdir) throw new Zt.ErrnoError(63);
              if (Zt.isMountpoint(o)) throw new Zt.ErrnoError(10);
              (n.node_ops.rmdir(n, r), Zt.destroyNode(o));
            },
            readdir: function (t) {
              var e = Zt.lookupPath(t, { follow: !0 }),
                n = e.node;
              if (!n.node_ops.readdir) throw new Zt.ErrnoError(54);
              return n.node_ops.readdir(n);
            },
            unlink: function (t) {
              var e = Zt.lookupPath(t, { parent: !0 }),
                n = e.node;
              if (!n) throw new Zt.ErrnoError(44);
              var r = It.basename(t),
                o = Zt.lookupNode(n, r),
                a = Zt.mayDelete(n, r, !1);
              if (a) throw new Zt.ErrnoError(a);
              if (!n.node_ops.unlink) throw new Zt.ErrnoError(63);
              if (Zt.isMountpoint(o)) throw new Zt.ErrnoError(10);
              (n.node_ops.unlink(n, r), Zt.destroyNode(o));
            },
            readlink: function (t) {
              var e = Zt.lookupPath(t),
                n = e.node;
              if (!n) throw new Zt.ErrnoError(44);
              if (!n.node_ops.readlink) throw new Zt.ErrnoError(28);
              return xt.resolve(Zt.getPath(n.parent), n.node_ops.readlink(n));
            },
            stat: function (t, n) {
              var e = Zt.lookupPath(t, { follow: !n }),
                r = e.node;
              if (!r) throw new Zt.ErrnoError(44);
              if (!r.node_ops.getattr) throw new Zt.ErrnoError(63);
              return r.node_ops.getattr(r);
            },
            lstat: function (t) {
              return Zt.stat(t, !0);
            },
            chmod: function (t, n, r) {
              var e;
              if (typeof t == "string") {
                var o = Zt.lookupPath(t, { follow: !r });
                e = o.node;
              } else e = t;
              if (!e.node_ops.setattr) throw new Zt.ErrnoError(63);
              e.node_ops.setattr(e, {
                mode: (n & 4095) | (e.mode & -4096),
                timestamp: Date.now(),
              });
            },
            lchmod: function (t, n) {
              Zt.chmod(t, n, !0);
            },
            fchmod: function (t, n) {
              var e = Zt.getStreamChecked(t);
              Zt.chmod(e.node, n);
            },
            chown: function (t, n, r, o) {
              var e;
              if (typeof t == "string") {
                var a = Zt.lookupPath(t, { follow: !o });
                e = a.node;
              } else e = t;
              if (!e.node_ops.setattr) throw new Zt.ErrnoError(63);
              e.node_ops.setattr(e, { timestamp: Date.now() });
            },
            lchown: function (t, n, r) {
              Zt.chown(t, n, r, !0);
            },
            fchown: function (t, n, r) {
              var e = Zt.getStreamChecked(t);
              Zt.chown(e.node, n, r);
            },
            truncate: function (t, n) {
              if (n < 0) throw new Zt.ErrnoError(28);
              var e;
              if (typeof t == "string") {
                var r = Zt.lookupPath(t, { follow: !0 });
                e = r.node;
              } else e = t;
              if (!e.node_ops.setattr) throw new Zt.ErrnoError(63);
              if (Zt.isDir(e.mode)) throw new Zt.ErrnoError(31);
              if (!Zt.isFile(e.mode)) throw new Zt.ErrnoError(28);
              var o = Zt.nodePermissions(e, "w");
              if (o) throw new Zt.ErrnoError(o);
              e.node_ops.setattr(e, { size: n, timestamp: Date.now() });
            },
            ftruncate: function (t, n) {
              var e = Zt.getStreamChecked(t);
              if ((e.flags & 2097155) === 0) throw new Zt.ErrnoError(28);
              Zt.truncate(e.node, n);
            },
            utime: function (t, n, r) {
              var e = Zt.lookupPath(t, { follow: !0 }),
                o = e.node;
              o.node_ops.setattr(o, { timestamp: Math.max(n, r) });
            },
            open: function (t, n, r) {
              if (t === "") throw new Zt.ErrnoError(44);
              ((n = typeof n == "string" ? zt(n) : n),
                (r = typeof r == "undefined" ? 438 : r),
                n & 64 ? (r = (r & 4095) | 32768) : (r = 0));
              var e;
              if (typeof t == "object") e = t;
              else {
                t = It.normalize(t);
                try {
                  var o = Zt.lookupPath(t, { follow: !(n & 131072) });
                  e = o.node;
                } catch (e) {}
              }
              var a = !1;
              if (n & 64)
                if (e) {
                  if (n & 128) throw new Zt.ErrnoError(20);
                } else ((e = Zt.mknod(t, r, 0)), (a = !0));
              if (!e) throw new Zt.ErrnoError(44);
              if (
                (Zt.isChrdev(e.mode) && (n &= -513),
                n & 65536 && !Zt.isDir(e.mode))
              )
                throw new Zt.ErrnoError(54);
              if (!a) {
                var i = Zt.mayOpen(e, n);
                if (i) throw new Zt.ErrnoError(i);
              }
              (n & 512 && !a && Zt.truncate(e, 0), (n &= -131713));
              var l = Zt.createStream({
                node: e,
                path: Zt.getPath(e),
                flags: n,
                seekable: !0,
                position: 0,
                stream_ops: e.stream_ops,
                ungotten: [],
                error: !1,
              });
              return (
                l.stream_ops.open && l.stream_ops.open(l),
                v.logReadFiles &&
                  !(n & 1) &&
                  (Zt.readFiles || (Zt.readFiles = {}),
                  t in Zt.readFiles || (Zt.readFiles[t] = 1)),
                l
              );
            },
            close: function (t) {
              if (Zt.isClosed(t)) throw new Zt.ErrnoError(8);
              t.getdents && (t.getdents = null);
              try {
                t.stream_ops.close && t.stream_ops.close(t);
              } catch (e) {
                throw e;
              } finally {
                Zt.closeStream(t.fd);
              }
              t.fd = null;
            },
            isClosed: function (t) {
              return t.fd === null;
            },
            llseek: function (t, n, r) {
              if (Zt.isClosed(t)) throw new Zt.ErrnoError(8);
              if (!t.seekable || !t.stream_ops.llseek)
                throw new Zt.ErrnoError(70);
              if (r != 0 && r != 1 && r != 2) throw new Zt.ErrnoError(28);
              return (
                (t.position = t.stream_ops.llseek(t, n, r)),
                (t.ungotten = []),
                t.position
              );
            },
            read: function (t, n, r, o, a) {
              if ((K(r >= 0), o < 0 || a < 0)) throw new Zt.ErrnoError(28);
              if (Zt.isClosed(t)) throw new Zt.ErrnoError(8);
              if ((t.flags & 2097155) === 1) throw new Zt.ErrnoError(8);
              if (Zt.isDir(t.node.mode)) throw new Zt.ErrnoError(31);
              if (!t.stream_ops.read) throw new Zt.ErrnoError(28);
              var e = typeof a != "undefined";
              if (!e) a = t.position;
              else if (!t.seekable) throw new Zt.ErrnoError(70);
              var i = t.stream_ops.read(t, n, r, o, a);
              return (e || (t.position += i), i);
            },
            write: function (t, n, r, o, a, i) {
              if ((K(r >= 0), o < 0 || a < 0)) throw new Zt.ErrnoError(28);
              if (Zt.isClosed(t)) throw new Zt.ErrnoError(8);
              if ((t.flags & 2097155) === 0) throw new Zt.ErrnoError(8);
              if (Zt.isDir(t.node.mode)) throw new Zt.ErrnoError(31);
              if (!t.stream_ops.write) throw new Zt.ErrnoError(28);
              t.seekable && t.flags & 1024 && Zt.llseek(t, 0, 2);
              var e = typeof a != "undefined";
              if (!e) a = t.position;
              else if (!t.seekable) throw new Zt.ErrnoError(70);
              var l = t.stream_ops.write(t, n, r, o, a, i);
              return (e || (t.position += l), l);
            },
            allocate: function (t, n, r) {
              if (Zt.isClosed(t)) throw new Zt.ErrnoError(8);
              if (n < 0 || r <= 0) throw new Zt.ErrnoError(28);
              if ((t.flags & 2097155) === 0) throw new Zt.ErrnoError(8);
              if (!Zt.isFile(t.node.mode) && !Zt.isDir(t.node.mode))
                throw new Zt.ErrnoError(43);
              if (!t.stream_ops.allocate) throw new Zt.ErrnoError(138);
              t.stream_ops.allocate(t, n, r);
            },
            mmap: function (t, n, r, o, a) {
              if ((o & 2) !== 0 && (a & 2) === 0 && (t.flags & 2097155) !== 2)
                throw new Zt.ErrnoError(2);
              if ((t.flags & 2097155) === 1) throw new Zt.ErrnoError(2);
              if (!t.stream_ops.mmap) throw new Zt.ErrnoError(43);
              return t.stream_ops.mmap(t, n, r, o, a);
            },
            msync: function (t, n, r, o, a) {
              return (
                K(r >= 0),
                t.stream_ops.msync ? t.stream_ops.msync(t, n, r, o, a) : 0
              );
            },
            munmap: function (t) {
              return 0;
            },
            ioctl: function (t, n, r) {
              if (!t.stream_ops.ioctl) throw new Zt.ErrnoError(59);
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
                r = Zt.open(t, n.flags),
                o = Zt.stat(t),
                a = o.size,
                i = new Uint8Array(a);
              return (
                Zt.read(r, i, 0, a, 0),
                n.encoding === "utf8"
                  ? (e = Pt(i, 0))
                  : n.encoding === "binary" && (e = i),
                Zt.close(r),
                e
              );
            },
            writeFile: function (t, n, r) {
              (r === void 0 && (r = {}), (r.flags = r.flags || 577));
              var e = Zt.open(t, r.flags, r.mode);
              if (typeof n == "string") {
                var o = new Uint8Array(Mt(n) + 1),
                  a = wt(n, o, 0, o.length);
                Zt.write(e, o, 0, a, void 0, r.canOwn);
              } else if (ArrayBuffer.isView(n))
                Zt.write(e, n, 0, n.byteLength, void 0, r.canOwn);
              else throw new Error("Unsupported data type");
              Zt.close(e);
            },
            cwd: function () {
              return Zt.currentPath;
            },
            chdir: function (t) {
              var e = Zt.lookupPath(t, { follow: !0 });
              if (e.node === null) throw new Zt.ErrnoError(44);
              if (!Zt.isDir(e.node.mode)) throw new Zt.ErrnoError(54);
              var n = Zt.nodePermissions(e.node, "x");
              if (n) throw new Zt.ErrnoError(n);
              Zt.currentPath = e.path;
            },
            createDefaultDirectories: function () {
              (Zt.mkdir("/tmp"), Zt.mkdir("/home"), Zt.mkdir("/home/web_user"));
            },
            createDefaultDevices: function () {
              (Zt.mkdir("/dev"),
                Zt.registerDevice(Zt.makedev(1, 3), {
                  read: function () {
                    return 0;
                  },
                  write: function (t, n, r, o, a) {
                    return o;
                  },
                }),
                Zt.mkdev("/dev/null", Zt.makedev(1, 3)),
                Ot.register(Zt.makedev(5, 0), Ot.default_tty_ops),
                Ot.register(Zt.makedev(6, 0), Ot.default_tty1_ops),
                Zt.mkdev("/dev/tty", Zt.makedev(5, 0)),
                Zt.mkdev("/dev/tty1", Zt.makedev(6, 0)));
              var e = new Uint8Array(1024),
                t = 0,
                n = function () {
                  return (t === 0 && (t = Dt(e).byteLength), e[--t]);
                };
              (Zt.createDevice("/dev", "random", n),
                Zt.createDevice("/dev", "urandom", n),
                Zt.mkdir("/dev/shm"),
                Zt.mkdir("/dev/shm/tmp"));
            },
            createSpecialDirectories: function () {
              Zt.mkdir("/proc");
              var e = Zt.mkdir("/proc/self");
              (Zt.mkdir("/proc/self/fd"),
                Zt.mount(
                  {
                    mount: function () {
                      var t = Zt.createNode(e, "fd", 16895, 73);
                      return (
                        (t.node_ops = {
                          lookup: function (t, n) {
                            var e = +n,
                              r = Zt.getStreamChecked(e),
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
              (v.stdin
                ? Zt.createDevice("/dev", "stdin", v.stdin)
                : Zt.symlink("/dev/tty", "/dev/stdin"),
                v.stdout
                  ? Zt.createDevice("/dev", "stdout", null, v.stdout)
                  : Zt.symlink("/dev/tty", "/dev/stdout"),
                v.stderr
                  ? Zt.createDevice("/dev", "stderr", null, v.stderr)
                  : Zt.symlink("/dev/tty1", "/dev/stderr"));
              var e = Zt.open("/dev/stdin", 0),
                t = Zt.open("/dev/stdout", 1),
                n = Zt.open("/dev/stderr", 1);
              (K(e.fd === 0, "invalid handle for stdin (" + e.fd + ")"),
                K(t.fd === 1, "invalid handle for stdout (" + t.fd + ")"),
                K(n.fd === 2, "invalid handle for stderr (" + n.fd + ")"));
            },
            ensureErrnoError: function () {
              Zt.ErrnoError ||
                ((Zt.ErrnoError = function (t, n) {
                  ((this.name = "ErrnoError"),
                    (this.node = n),
                    (this.setErrno = function (e) {
                      this.errno = e;
                      for (var t in Xt)
                        if (Xt[t] === e) {
                          this.code = t;
                          break;
                        }
                    }),
                    this.setErrno(t),
                    (this.message = Qt[t]),
                    this.stack &&
                      (Object.defineProperty(this, "stack", {
                        value: new Error().stack,
                        writable: !0,
                      }),
                      (this.stack = Jt(this.stack))));
                }),
                (Zt.ErrnoError.prototype = new Error()),
                (Zt.ErrnoError.prototype.constructor = Zt.ErrnoError),
                [44].forEach(function (e) {
                  ((Zt.genericErrors[e] = new Zt.ErrnoError(e)),
                    (Zt.genericErrors[e].stack = "<generic error, no stack>"));
                }));
            },
            staticInit: function () {
              (Zt.ensureErrnoError(),
                (Zt.nameTable = new Array(4096)),
                Zt.mount(qt, {}, "/"),
                Zt.createDefaultDirectories(),
                Zt.createDefaultDevices(),
                Zt.createSpecialDirectories(),
                (Zt.filesystems = { MEMFS: qt, IDBFS: Kt }));
            },
            init: function (t, n, r) {
              (K(
                !Zt.init.initialized,
                "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)",
              ),
                (Zt.init.initialized = !0),
                Zt.ensureErrnoError(),
                (v.stdin = t || v.stdin),
                (v.stdout = n || v.stdout),
                (v.stderr = r || v.stderr),
                Zt.createStandardStreams());
            },
            quit: function () {
              ((Zt.init.initialized = !1), Oi(0));
              for (var e = 0; e < Zt.streams.length; e++) {
                var t = Zt.streams[e];
                t && Zt.close(t);
              }
            },
            findObject: function (t, n) {
              var e = Zt.analyzePath(t, n);
              return e.exists ? e.object : null;
            },
            analyzePath: function (t, n) {
              try {
                var e = Zt.lookupPath(t, { follow: !n });
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
                var e = Zt.lookupPath(t, { parent: !0 });
                ((r.parentExists = !0),
                  (r.parentPath = e.path),
                  (r.parentObject = e.node),
                  (r.name = It.basename(t)),
                  (e = Zt.lookupPath(t, { follow: !n })),
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
              t = typeof t == "string" ? t : Zt.getPath(t);
              for (var e = n.split("/").reverse(); e.length; ) {
                var a = e.pop();
                if (a) {
                  var i = It.join2(t, a);
                  try {
                    Zt.mkdir(i);
                  } catch (e) {}
                  t = i;
                }
              }
              return i;
            },
            createFile: function (t, n, r, o, a) {
              var e = It.join2(typeof t == "string" ? t : Zt.getPath(t), n),
                i = jt(o, a);
              return Zt.create(e, i);
            },
            createDataFile: function (t, n, r, o, a, i) {
              var e = n;
              t &&
                ((t = typeof t == "string" ? t : Zt.getPath(t)),
                (e = n ? It.join2(t, n) : t));
              var l = jt(o, a),
                s = Zt.create(e, l);
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
                Zt.chmod(s, l | 146);
                var m = Zt.open(s, 577);
                (Zt.write(m, r, 0, r.length, 0, i),
                  Zt.close(m),
                  Zt.chmod(s, l));
              }
              return s;
            },
            createDevice: function (t, n, r, o) {
              var e = It.join2(typeof t == "string" ? t : Zt.getPath(t), n),
                a = jt(!!r, !!o);
              Zt.createDevice.major || (Zt.createDevice.major = 64);
              var i = Zt.makedev(Zt.createDevice.major++, 0);
              return (
                Zt.registerDevice(i, {
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
                        throw new Zt.ErrnoError(29);
                      }
                      if (s === void 0 && e === 0) throw new Zt.ErrnoError(6);
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
                        throw new Zt.ErrnoError(29);
                      }
                    return (a && (t.node.timestamp = Date.now()), e);
                  },
                }),
                Zt.mkdev(e, a, i)
              );
            },
            forceLoadFile: function (t) {
              if (t.isDevice || t.isFolder || t.link || t.contents) return !0;
              if (typeof XMLHttpRequest != "undefined")
                throw new Error(
                  "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
                );
              if (w)
                try {
                  ((t.contents = At(w(t.url), !0)),
                    (t.usedBytes = t.contents.length));
                } catch (e) {
                  throw new Zt.ErrnoError(29);
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
                    !((e.status >= 200 && e.status < 300) || e.status === 304))
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
                        : At(e.responseText || "", !0);
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
                      B(
                        "LazyFiles on gzip forces download of the whole file when length is accessed",
                      )),
                    (this._length = t),
                    (this._chunkSize = i),
                    (this.lengthKnown = !0));
                }),
                typeof XMLHttpRequest != "undefined")
              ) {
                if (!D)
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
              var u = Zt.createFile(t, n, s, o, a);
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
                  return (Zt.forceLoadFile(u), t.apply(null, arguments));
                };
              });
              function m(e, t, n, r, o) {
                var a = e.node.contents;
                if (o >= a.length) return 0;
                var i = Math.min(a.length - o, r);
                if ((K(i >= 0), a.slice))
                  for (var l = 0; l < i; l++) t[n + l] = a[o + l];
                else for (var l = 0; l < i; l++) t[n + l] = a.get(o + l);
                return i;
              }
              return (
                (c.read = function (e, t, n, r, o) {
                  return (Zt.forceLoadFile(u), m(e, t, n, r, o));
                }),
                (c.mmap = function (e, t, n, r, o) {
                  Zt.forceLoadFile(u);
                  var a = Wt(t);
                  if (!a) throw new Zt.ErrnoError(48);
                  return (m(e, l(), a, t, n), { ptr: a, allocated: !0 });
                }),
                (u.stream_ops = c),
                u
              );
            },
            absolutePath: function () {
              De(
                "FS.absolutePath has been removed; use PATH_FS.resolve instead",
              );
            },
            createFolder: function () {
              De("FS.createFolder has been removed; use FS.mkdir instead");
            },
            createLink: function () {
              De("FS.createLink has been removed; use FS.symlink instead");
            },
            joinPath: function () {
              De("FS.joinPath has been removed; use PATH.join instead");
            },
            mmapAlloc: function () {
              De(
                "FS.mmapAlloc has been replaced by the top level function mmapAlloc",
              );
            },
            standardizePath: function () {
              De(
                "FS.standardizePath has been removed; use PATH.normalize instead",
              );
            },
          },
          en = function (t, n) {
            return (K(typeof t == "number"), t ? Pt(d(), t, n) : "");
          },
          tn = {
            DEFAULT_POLLMASK: 5,
            calculateAt: function (t, n, r) {
              if (It.isAbs(n)) return n;
              var e;
              if (t === -100) e = Zt.cwd();
              else {
                var o = tn.getStreamFromFD(t);
                e = o.path;
              }
              if (n.length == 0) {
                if (!r) throw new Zt.ErrnoError(44);
                return e;
              }
              return It.join2(e, n);
            },
            doStat: function (t, n, r) {
              try {
                var e = t(n);
              } catch (e) {
                if (
                  e &&
                  e.node &&
                  It.normalize(n) !== It.normalize(Zt.getPath(e.node))
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
                (ne[(r + 24) >> 3] = BigInt(e.size)),
                (f()[(r + 32) >> 2] = 4096),
                (f()[(r + 36) >> 2] = e.blocks));
              var o = e.atime.getTime(),
                a = e.mtime.getTime(),
                i = e.ctime.getTime();
              return (
                (ne[(r + 40) >> 3] = BigInt(Math.floor(o / 1e3))),
                (g()[(r + 48) >> 2] = (o % 1e3) * 1e3),
                (ne[(r + 56) >> 3] = BigInt(Math.floor(a / 1e3))),
                (g()[(r + 64) >> 2] = (a % 1e3) * 1e3),
                (ne[(r + 72) >> 3] = BigInt(Math.floor(i / 1e3))),
                (g()[(r + 80) >> 2] = (i % 1e3) * 1e3),
                (ne[(r + 88) >> 3] = BigInt(e.ino)),
                0
              );
            },
            doMsync: function (t, n, r, o, a) {
              if (!Zt.isFile(n.node.mode)) throw new Zt.ErrnoError(43);
              if (o & 2) return 0;
              var e = d().slice(t, t + r);
              Zt.msync(n, e, a, r, o);
            },
            varargs: void 0,
            get: function () {
              (K(tn.varargs != null), (tn.varargs += 4));
              var e = f()[(tn.varargs - 4) >> 2];
              return e;
            },
            getStr: function (t) {
              var e = en(t);
              return e;
            },
            getStreamFromFD: function (t) {
              var e = Zt.getStreamChecked(t);
              return e;
            },
          };
        function nn(e) {
          if (P) return qa(1, 1, e);
          ((j = e),
            fe() ||
              (sn.terminateAllThreads(), v.onExit && v.onExit(e), (z = !0)),
            I(e, new bt(e)));
        }
        var rn = function (t, n) {
            if (((j = t), ic(), P)) throw (K(!n), dn(t), "unwind");
            if (fe() && !n) {
              var e =
                "program exited (with status: " +
                t +
                "), but keepRuntimeAlive() is set (counter=" +
                _e +
                ") due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)";
              (R(e), W(e));
            }
            nn(t);
          },
          on = rn,
          an = function (t) {
            return (
              K(typeof t == "number"),
              (t >>>= 0),
              "0x" + t.toString(16).padStart(8, "0")
            );
          },
          ln = function (t) {
            if (t instanceof bt || t == "unwind") return j;
            (ue(),
              t instanceof WebAssembly.RuntimeError &&
                hl() <= 0 &&
                W(
                  "Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 1048576)",
                ),
              I(1, t));
          },
          sn = {
            unusedWorkers: [],
            runningWorkers: [],
            tlsInitFunctions: [],
            pthreads: {},
            nextWorkerID: 1,
            debugInit: function () {
              function e() {
                var e = 0;
                return (
                  pe && typeof Wi != "undefined" && (e = Wi()),
                  "w:" + (v.workerID || 0) + ",t:" + an(e) + ": "
                );
              }
              var t = Qe;
              Qe = function (r) {
                return t(e() + r);
              };
            },
            init: function () {
              (sn.debugInit(), P ? sn.initWorker() : sn.initMainThread());
            },
            initMainThread: function () {
              var e =
                typeof v.pthreadPoolSizeOverride == "number"
                  ? v.pthreadPoolSizeOverride
                  : 20;
              for (
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                  o("WAWebVoipQplHelpers").VoipInitQplPoint
                    .WORKER_POOL_ALLOC_START,
                );
                e--;
              )
                sn.allocateUnusedWorker();
              Ce(function () {
                Ie("loading-workers");
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
                          for (var s of sn.unusedWorkers)
                            s.loaded ? i.push(s) : l.push(s);
                          for (var s of l)
                            try {
                              vt(s);
                            } catch (e) {
                              W(
                                "voip: ThreadPoolManager: failed to terminate timed-out pthread worker " +
                                  s.workerID +
                                  ": " +
                                  e,
                              );
                            }
                          ((n = l.length),
                            (sn.unusedWorkers = i),
                            W(
                              "voip: ThreadPoolManager: pthread worker prewarm timed out after " +
                                e +
                                "ms; continuing with " +
                                i.length +
                                " ready workers",
                            ));
                        }
                      } finally {
                        (Te("loading-workers"),
                          o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                            o("WAWebVoipQplHelpers").VoipInitQplPoint
                              .WORKER_POOL_ALLOC_END,
                            {
                              bool: { worker_pool_alloc_timed_out: a },
                              int: {
                                worker_pool_ready_count:
                                  sn.unusedWorkers.length,
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
                sn.loadWasmModuleToAllWorkers(function () {
                  return n(!1);
                });
              });
            },
            initWorker: function () {
              U = !1;
            },
            setExitStatus: function (t) {
              j = t;
            },
            terminateAllThreads__deps: ["$terminateWorker"],
            terminateAllThreads: function () {
              K(
                !P,
                "Internal Error! terminateAllThreads() can only ever be called from main application thread!",
              );
              for (var e of sn.runningWorkers) vt(e);
              for (var e of sn.unusedWorkers) vt(e);
              ((sn.unusedWorkers = []),
                (sn.runningWorkers = []),
                (sn.pthreads = []));
            },
            returnWorkerToPool: function (t) {
              var e = t.pthread_ptr;
              (delete sn.pthreads[e],
                sn.unusedWorkers.push(t),
                sn.runningWorkers.splice(sn.runningWorkers.indexOf(t), 1),
                (t.pthread_ptr = 0),
                il(e));
            },
            receiveObjectTransfer: function (t) {},
            threadInitTLS: function () {
              sn.tlsInitFunctions.forEach(function (e) {
                return e();
              });
            },
            loadWasmModuleToWorker: function (o) {
              return new (u || (u = n("Promise")))(function (n) {
                (o.addMessageListener("cmd", function (e) {
                  var t = e,
                    r = t.cmd;
                  if (t.targetThread && t.targetThread != Wi()) {
                    var a = sn.pthreads[t.targetThread];
                    a
                      ? a.postMessage(
                          babelHelpers.extends({}, t, { type: "cmd" }),
                          t.transferList,
                        )
                      : W(
                          'Internal error! Worker sent a message "' +
                            r +
                            '" to target pthread ' +
                            t.targetThread +
                            ", but that thread no longer exists!",
                        );
                    return;
                  }
                  if (r === "checkMailbox") ea();
                  else if (r === "spawnThread") kt(t);
                  else if (r === "cleanupThread") Lt(t.thread);
                  else if (r === "killThread") St(t.thread);
                  else if (r === "cancelThread") Rt(t.thread);
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
                    if (rc && typeof v.onPthreadGlueFailure == "function")
                      v.onPthreadGlueFailure(
                        r === "wasmGlueBuildMismatch"
                          ? {
                              kind: "build_mismatch",
                              actualBuildSha: t.actualBuildSha,
                              expectedBuildSha: t.expectedBuildSha,
                              source: t.source,
                            }
                          : { kind: "pinned_load_failed", error: t.error },
                      );
                    else
                      try {
                        De(i);
                      } catch (e) {}
                  } else
                    r === "wasmGlueBuildSkewObserved"
                      ? typeof v.onWasmGlueBuildSkewObserved == "function" &&
                        v.onWasmGlueBuildSkewObserved(t)
                      : r === "loaded"
                        ? ((o.loaded = !0), n(o))
                        : r === "alert"
                          ? alert("Thread " + t.threadId + ": " + t.text)
                          : t.target === "setimmediate"
                            ? o.postMessage(
                                babelHelpers.extends({}, t, { type: "cmd" }),
                              )
                            : r === "callHandler"
                              ? v[t.handler].apply(v, t.args)
                              : r && W("worker sent an unknown command " + r);
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
                          "Pthread " + an(o.pthread_ptr) + " sent an error!"),
                      W(
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
                  K(
                    V instanceof WebAssembly.Memory,
                    "WebAssembly memory should have been loaded by now!",
                  ),
                  K(
                    G instanceof WebAssembly.Module,
                    "WebAssembly Module should have been loaded by now!",
                  ));
                var r = [],
                  a = ["onExit", "onAbort", "print", "printErr"];
                for (var l of a)
                  Object.prototype.hasOwnProperty.call(v, l) && r.push(l);
                ((o.workerID = sn.nextWorkerID++),
                  o.postMessage({
                    cmd: "load",
                    handlers: r,
                    urlOrBlob: v.mainScriptUrlOrBlob || t,
                    wasmMemory: V,
                    wasmModule: G,
                    workerID: o.workerID,
                    wasmVariant: "prod-nonlab",
                    expectedBuildSha: c,
                    pinnedWorkerGlueUrl:
                      v.pinWorkerGlue === !0 && typeof _ == "string" ? _ : null,
                    type: "cmd",
                  }));
              });
            },
            loadWasmModuleToAllWorkers: function (t) {
              if (P) return t();
              var e = (u || (u = n("Promise"))).all(
                sn.unusedWorkers.map(sn.loadWasmModuleToWorker),
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
                sn.unusedWorkers.push(e));
            },
            getNewWorker: function () {
              return (
                sn.unusedWorkers.length == 0 &&
                  (W(
                    "Tried to spawn a new thread, but the thread pool is exhausted.\nThis might result in a deadlock unless some threads eventually exit or the code explicitly breaks out to the event loop.\nIf you want to increase the pool size, use setting `-sPTHREAD_POOL_SIZE=...`.\nIf you want to throw an explicit error instead of the risk of deadlocking in those cases, use setting `-sPTHREAD_POOL_SIZE_STRICT=2`.",
                  ),
                  sn.allocateUnusedWorker(),
                  sn.loadWasmModuleToWorker(sn.unusedWorkers[0])),
                sn.unusedWorkers.pop()
              );
            },
          };
        v.PThread = sn;
        var un = function (t) {
          for (; t.length > 0; ) t.shift()(v);
        };
        function cn() {
          var e = Wi(),
            t = f()[(e + 52) >> 2],
            n = f()[(e + 56) >> 2],
            r = t - n;
          (K(t != 0),
            K(r != 0),
            K(t > r, "stackHigh must be higher then stackLow"),
            ml(t, r),
            fl(t),
            se());
        }
        v.establishStackSpace = cn;
        function dn(e) {
          if (P) return qa(2, 0, e);
          on(e);
        }
        var mn = function (t) {
            var e = _l(),
              n = t();
            return (fl(e), n);
          },
          pn = function (t) {
            return mn(function () {
              var e = gl(4),
                n = gl(4);
              yl(t, e, n);
              var r = g()[e >> 2],
                o = g()[n >> 2],
                a = en(r);
              Ai(r);
              var i;
              return (o && ((i = en(o)), Ai(o)), [a, i]);
            });
          };
        function _n(e) {
          return pn(e);
        }
        v.getExceptionMessage = _n;
        var fn = function (t) {
          return le.get(t);
        };
        function gn(e, t) {
          var n = fn(e)(t);
          ue();
          function r(e) {
            fe() ? sn.setExitStatus(e) : ll(e);
          }
          r(n);
        }
        v.invokeEntryPoint = gn;
        function hn(e) {
          sn.tlsInitFunctions.push(e);
        }
        var yn = function (t) {
            (yn.shown || (yn.shown = {}),
              yn.shown[t] || ((yn.shown[t] = 1), W(t)));
          },
          Cn = function (t, n, r, o) {
            De(
              "Assertion failed: " +
                en(t) +
                ", at: " +
                [
                  n ? en(n) : "unknown filename",
                  r,
                  o ? en(o) : "unknown function",
                ],
            );
          },
          bn = [],
          vn = 0;
        function Sn(e) {
          var t = new kn(e);
          return (
            t.get_caught() || (t.set_caught(!0), vn--),
            t.set_rethrown(!1),
            bn.push(t),
            zi(t.excPtr),
            t.get_exception_ptr()
          );
        }
        function Rn() {
          if (!bn.length) return 0;
          var e = bn[bn.length - 1];
          return (zi(e.excPtr), e.excPtr);
        }
        var Ln = 0;
        function En() {
          (ul(0, 0), K(bn.length > 0));
          var e = bn.pop();
          (ji(e.excPtr), (Ln = 0));
        }
        function kn(e) {
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
              g()[(this.ptr + 16) >> 2] = e;
            }),
            (this.get_adjusted_ptr = function () {
              return g()[(this.ptr + 16) >> 2];
            }),
            (this.get_exception_ptr = function () {
              var e = bl(this.get_type());
              if (e) return g()[this.excPtr >> 2];
              var t = this.get_adjusted_ptr();
              return t !== 0 ? t : this.excPtr;
            }));
        }
        function In(e) {
          throw (Ln || (Ln = new Ae(e)), Ln);
        }
        var Tn = function (t) {
            var e = Ln && Ln.excPtr;
            if (!e) return (cl(0), 0);
            var n = new kn(e);
            n.set_adjusted_ptr(e);
            var r = n.get_type();
            if (!r) return (cl(0), e);
            for (var o in t) {
              var a = t[o];
              if (a === 0 || a === r) break;
              var i = n.ptr + 16;
              if (Cl(a, r, i)) return (cl(a), e);
            }
            return (cl(r), e);
          },
          Dn = function () {
            return Tn([]);
          },
          xn = function (t) {
            return Tn([t]);
          },
          $n = function (t, n) {
            return Tn([t, n]);
          };
        function Pn(e) {
          var t = new kn(e).get_exception_ptr();
          return t;
        }
        function Nn() {
          var e = bn.pop();
          e || De("no exception to throw");
          var t = e.excPtr;
          throw (
            e.get_rethrown() ||
              (bn.push(e), e.set_rethrown(!0), e.set_caught(!1), vn++),
            (Ln = new Ae(t)),
            Ln
          );
        }
        function Mn(e) {
          if (e) {
            var t = new kn(e);
            (bn.push(t), t.set_rethrown(!0), Nn());
          }
        }
        function wn(e, t, n) {
          var r = new kn(e);
          throw (r.init(t, n), (Ln = new Ae(e)), vn++, Ln);
        }
        function An() {
          return vn;
        }
        function Fn(e) {
          (Ji(e, !D, 1, !T, 1048576, !1), sn.threadInitTLS());
        }
        function On(e) {
          P
            ? postMessage({ cmd: "cleanupThread", thread: e, type: "cmd" })
            : Lt(e);
        }
        function Bn(e, t, n, r) {
          return P ? qa(3, 1, e, t, n, r) : Wn(e, t, n, r);
        }
        function Wn(e, t, n, r) {
          if (typeof SharedArrayBuffer == "undefined")
            return (
              W(
                "Current environment does not support SharedArrayBuffer, pthreads are not available!",
              ),
              6
            );
          var o = [],
            a = 0;
          if (P && (o.length === 0 || a)) return Bn(e, t, n, r);
          var i = { startRoutine: n, pthread_ptr: e, arg: r, transferList: o };
          return P
            ? ((i.cmd = "spawnThread"),
              postMessage(babelHelpers.extends({}, i, { type: "cmd" }), o),
              0)
            : kt(i);
        }
        function qn(e) {
          if (P) return qa(4, 1, e);
          try {
            return ((e = tn.getStr(e)), Zt.chdir(e), 0);
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        var Un = function (t) {
          return ((f()[Bi() >> 2] = t), t);
        };
        function Vn(e, t, n) {
          if (P) return qa(5, 1, e, t, n);
          tn.varargs = n;
          try {
            var r = tn.getStreamFromFD(e);
            switch (t) {
              case 0: {
                var o = tn.get();
                if (o < 0) return -28;
                var a;
                return ((a = Zt.createStream(r, o)), a.fd);
              }
              case 1:
              case 2:
                return 0;
              case 3:
                return r.flags;
              case 4: {
                var o = tn.get();
                return ((r.flags |= o), 0);
              }
              case 5: {
                var o = tn.get(),
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
                return (Un(28), -1);
              default:
                return -28;
            }
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        function Hn(e, t) {
          if (P) return qa(6, 1, e, t);
          try {
            var n = tn.getStreamFromFD(e);
            return tn.doStat(Zt.stat, n.path, t);
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        var Gn = 9007199254740992,
          zn = -9007199254740992;
        function jn(e) {
          return e < zn || e > Gn ? NaN : Number(e);
        }
        function Kn(e, t) {
          if (P) return qa(7, 1, e, t);
          t = jn(t);
          try {
            return isNaN(t) ? 61 : (Zt.ftruncate(e, t), 0);
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        var Qn = function (t, n, r) {
          return (
            K(
              typeof r == "number",
              "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
            ),
            wt(t, d(), n, r)
          );
        };
        function Xn(e, t, n) {
          if (P) return qa(8, 1, e, t, n);
          try {
            var r = tn.getStreamFromFD(e);
            r.getdents || (r.getdents = Zt.readdir(r.path));
            for (
              var o = 280, a = 0, i = Zt.llseek(r, 0, 1), s = Math.floor(i / o);
              s < r.getdents.length && a + o <= n;
            ) {
              var u,
                c,
                d = r.getdents[s];
              if (d === ".") ((u = r.node.id), (c = 4));
              else if (d === "..") {
                var p = Zt.lookupPath(r.path, { parent: !0 });
                ((u = p.node.id), (c = 4));
              } else {
                var _ = Zt.lookupNode(r.node, d);
                ((u = _.id),
                  (c = Zt.isChrdev(_.mode)
                    ? 2
                    : Zt.isDir(_.mode)
                      ? 4
                      : Zt.isLink(_.mode)
                        ? 10
                        : 8));
              }
              (K(u),
                (ne[(t + a) >> 3] = BigInt(u)),
                (ne[(t + a + 8) >> 3] = BigInt((s + 1) * o)),
                (m()[(t + a + 16) >> 1] = 280),
                (l()[(t + a + 18) >> 0] = c),
                Qn(d, t + a + 19, 256),
                (a += o),
                (s += 1));
            }
            return (Zt.llseek(r, s * o, 0), a);
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        function Yn(e, t, n) {
          if (P) return qa(9, 1, e, t, n);
          tn.varargs = n;
          try {
            var r = tn.getStreamFromFD(e);
            switch (t) {
              case 21509:
                return r.tty ? 0 : -59;
              case 21505: {
                if (!r.tty) return -59;
                if (r.tty.ops.ioctl_tcgets) {
                  var o = r.tty.ops.ioctl_tcgets(r),
                    a = tn.get();
                  ((f()[a >> 2] = o.c_iflag || 0),
                    (f()[(a + 4) >> 2] = o.c_oflag || 0),
                    (f()[(a + 8) >> 2] = o.c_cflag || 0),
                    (f()[(a + 12) >> 2] = o.c_lflag || 0));
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
                    var a = tn.get(),
                      s = f()[a >> 2],
                      u = f()[(a + 4) >> 2],
                      c = f()[(a + 8) >> 2],
                      d = f()[(a + 12) >> 2],
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
                var a = tn.get();
                return ((f()[a >> 2] = 0), 0);
              }
              case 21520:
                return r.tty ? -28 : -59;
              case 21531: {
                var a = tn.get();
                return Zt.ioctl(r, t, a);
              }
              case 21523: {
                if (!r.tty) return -59;
                if (r.tty.ops.ioctl_tiocgwinsz) {
                  var _ = r.tty.ops.ioctl_tiocgwinsz(r.tty),
                    a = tn.get();
                  ((m()[a >> 1] = _[0]), (m()[(a + 2) >> 1] = _[1]));
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
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        function Jn(e, t) {
          if (P) return qa(10, 1, e, t);
          try {
            return ((e = tn.getStr(e)), tn.doStat(Zt.lstat, e, t));
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        function Zn(e, t, n) {
          if (P) return qa(11, 1, e, t, n);
          try {
            return (
              (t = tn.getStr(t)),
              (t = tn.calculateAt(e, t)),
              (t = It.normalize(t)),
              t[t.length - 1] === "/" && (t = t.substr(0, t.length - 1)),
              Zt.mkdir(t, n, 0),
              0
            );
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        function er(e, t, n, r) {
          if (P) return qa(12, 1, e, t, n, r);
          try {
            t = tn.getStr(t);
            var o = r & 256,
              a = r & 4096;
            return (
              (r = r & -6401),
              K(!r, "unknown flags in __syscall_newfstatat: " + r),
              (t = tn.calculateAt(e, t, a)),
              tn.doStat(o ? Zt.lstat : Zt.stat, t, n)
            );
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        function tr(e, t, n, r) {
          if (P) return qa(13, 1, e, t, n, r);
          tn.varargs = r;
          try {
            ((t = tn.getStr(t)), (t = tn.calculateAt(e, t)));
            var o = r ? tn.get() : 0;
            return Zt.open(t, n, o).fd;
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        function nr(e, t) {
          if (P) return qa(14, 1, e, t);
          try {
            return ((e = tn.getStr(e)), tn.doStat(Zt.stat, e, t));
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        function rr(e, t, n) {
          if (P) return qa(15, 1, e, t, n);
          try {
            return (
              (t = tn.getStr(t)),
              (t = tn.calculateAt(e, t)),
              n === 0
                ? Zt.unlink(t)
                : n === 512
                  ? Zt.rmdir(t)
                  : De("Invalid flags passed to unlinkat"),
              0
            );
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        function or(e) {
          if (e === null) return "null";
          var t = typeof e;
          return t === "object" || t === "array" || t === "function"
            ? e.toString()
            : "" + e;
        }
        function ar() {
          for (var e = new Array(256), t = 0; t < 256; ++t)
            e[t] = String.fromCharCode(t);
          ir = e;
        }
        var ir = void 0;
        function lr(e) {
          for (var t = "", n = e; d()[n]; ) t += ir[d()[n++]];
          return t;
        }
        var sr = {},
          ur = {},
          cr = {},
          dr = void 0;
        function mr(e) {
          throw new dr(e);
        }
        var pr = void 0;
        function _r(e) {
          throw new pr(e);
        }
        function fr(e, t, n) {
          e.forEach(function (e) {
            cr[e] = t;
          });
          function r(t) {
            var r = n(t);
            r.length !== e.length && _r("Mismatched type converter count");
            for (var o = 0; o < e.length; ++o) hr(e[o], r[o]);
          }
          var o = new Array(t.length),
            a = [],
            i = 0;
          (t.forEach(function (e, t) {
            Object.prototype.hasOwnProperty.call(ur, e)
              ? (o[t] = ur[e])
              : (a.push(e),
                Object.prototype.hasOwnProperty.call(sr, e) || (sr[e] = []),
                sr[e].push(function () {
                  ((o[t] = ur[e]), ++i, i === a.length && r(o));
                }));
          }),
            a.length === 0 && r(o));
        }
        function gr(e, t, n) {
          n === void 0 && (n = {});
          var r = t.name;
          if (
            (e ||
              mr(
                'type "' + r + '" must have a positive integer typeid pointer',
              ),
            Object.prototype.hasOwnProperty.call(ur, e))
          ) {
            if (n.ignoreDuplicateRegistrations) return;
            mr("Cannot register type '" + r + "' twice");
          }
          if (
            ((ur[e] = t),
            delete cr[e],
            Object.prototype.hasOwnProperty.call(sr, e))
          ) {
            var o = sr[e];
            (delete sr[e],
              o.forEach(function (e) {
                return e();
              }));
          }
        }
        function hr(e, t, n) {
          if ((n === void 0 && (n = {}), !("argPackAdvance" in t)))
            throw new TypeError(
              "registerType registeredInstance requires argPackAdvance",
            );
          return gr(e, t, n);
        }
        function yr(e, t, n) {
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
                    return f()[t >> 2];
                  }
                : function (t) {
                    return g()[t >> 2];
                  };
            case 3:
              return n
                ? function (t) {
                    return ne[t >> 3];
                  }
                : function (t) {
                    return re[t >> 3];
                  };
            default:
              throw new TypeError("Unknown integer type: " + e);
          }
        }
        function Cr(e, t, n, r, o) {
          t = lr(t);
          var a = br(n),
            i = t.indexOf("u") != -1;
          (i && (o = (BigInt(1) << BigInt(64)) - BigInt(1)),
            hr(e, {
              name: t,
              fromWireType: function (t) {
                return t;
              },
              toWireType: function (n, a) {
                if (typeof a != "bigint" && typeof a != "number")
                  throw new TypeError(
                    'Cannot convert "' + or(a) + '" to ' + this.name,
                  );
                if (a < r || a > o)
                  throw new TypeError(
                    'Passing a number "' +
                      or(a) +
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
              readValueFromPointer: yr(t, a, !i),
              destructorFunction: null,
            }));
        }
        function br(e) {
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
        function vr(e, t, n, r, o) {
          var a = br(n);
          ((t = lr(t)),
            hr(e, {
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
                else if (n === 4) e = f();
                else throw new TypeError("Unknown boolean type size: " + t);
                return this.fromWireType(e[r >> a]);
              },
              destructorFunction: null,
              jsType: "boolean",
            }));
        }
        function Sr(e) {
          if (!(this instanceof Qr) || !(e instanceof Qr)) return !1;
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
        function Rr(e) {
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
        function Lr(e) {
          function t(e) {
            return e.$$.ptrType.registeredClass.name;
          }
          mr(t(e) + " instance already deleted");
        }
        var Er = !1;
        function kr(e) {}
        function Ir(e) {
          e.smartPtr
            ? e.smartPtrType.rawDestructor(e.smartPtr)
            : e.ptrType.registeredClass.rawDestructor(e.ptr);
        }
        function Tr(e) {
          e.count.value -= 1;
          var t = e.count.value === 0;
          t && Ir(e);
        }
        function Dr(e, t, n) {
          if (t === n) return e;
          if (n.baseClass === void 0) return null;
          var r = Dr(e, t, n.baseClass);
          return r === null ? null : n.downcast(r);
        }
        var xr = {};
        function $r() {
          return Object.keys(Or).length;
        }
        function Pr() {
          var e = [];
          for (var t in Or)
            Object.prototype.hasOwnProperty.call(Or, t) && e.push(Or[t]);
          return e;
        }
        var Nr = [];
        function Mr() {
          for (; Nr.length; ) {
            var e = Nr.pop();
            ((e.$$.deleteScheduled = !1), e.delete());
          }
        }
        var wr = void 0;
        function Ar(e) {
          ((wr = e), Nr.length && wr && wr(Mr));
        }
        function Fr() {
          ((v.getInheritedInstanceCount = $r),
            (v.getLiveInheritedInstances = Pr),
            (v.flushPendingDeletes = Mr),
            (v.setDelayFunction = Ar));
        }
        var Or = {};
        function Br(e, t) {
          for (t === void 0 && mr("ptr should not be undefined"); e.baseClass; )
            ((t = e.upcast(t)), (e = e.baseClass));
          return t;
        }
        function Wr(e, t) {
          return ((t = Br(e, t)), Or[t]);
        }
        function qr(e, t) {
          (!t.ptrType || !t.ptr) &&
            _r("makeClassHandle requires ptr and ptrType");
          var n = !!t.smartPtrType,
            r = !!t.smartPtr;
          return (
            n !== r && _r("Both smartPtrType and smartPtr must be specified"),
            (t.count = { value: 1 }),
            Vr(Object.create(e, { $$: { value: t } }))
          );
        }
        function Ur(e) {
          var t = this.getPointee(e);
          if (!t) return (this.destructor(e), null);
          var n = Wr(this.registeredClass, t);
          if (n !== void 0) {
            if (n.$$.count.value === 0)
              return ((n.$$.ptr = t), (n.$$.smartPtr = e), n.clone());
            var r = n.clone();
            return (this.destructor(e), r);
          }
          function o() {
            return this.isSmartPointer
              ? qr(this.registeredClass.instancePrototype, {
                  ptrType: this.pointeeType,
                  ptr: t,
                  smartPtrType: this,
                  smartPtr: e,
                })
              : qr(this.registeredClass.instancePrototype, {
                  ptrType: this,
                  ptr: e,
                });
          }
          var a = this.registeredClass.getActualType(t),
            i = xr[a];
          if (!i) return o.call(this);
          var l;
          this.isConst ? (l = i.constPointerType) : (l = i.pointerType);
          var s = Dr(t, this.registeredClass, l.registeredClass);
          return s === null
            ? o.call(this)
            : this.isSmartPointer
              ? qr(l.registeredClass.instancePrototype, {
                  ptrType: l,
                  ptr: s,
                  smartPtrType: this,
                  smartPtr: e,
                })
              : qr(l.registeredClass.instancePrototype, { ptrType: l, ptr: s });
        }
        var Vr = function (t) {
          return typeof FinalizationRegistry == "undefined"
            ? ((Vr = function (t) {
                return t;
              }),
              t)
            : ((Er = new FinalizationRegistry(function (e) {
                (e.leakWarning.stack.replace(/^Error: /, ""), Tr(e.$$));
              })),
              (Vr = function (t) {
                var e = t.$$,
                  n = !!e.smartPtr;
                if (n) {
                  var r = { $$: e },
                    o = e.ptrType.registeredClass;
                  ((r.leakWarning = new Error(
                    "Embind found a leaked C++ instance " +
                      o.name +
                      " <" +
                      an(e.ptr) +
                      ">.\nWe'll free it automatically in this case, but this functionality is not reliable across various environments.\nMake sure to invoke .delete() manually once you're done with the instance instead.\nOriginally allocated",
                  )),
                    "captureStackTrace" in Error &&
                      Error.captureStackTrace(r.leakWarning, Ur),
                    Er.register(t, r, t));
                }
                return t;
              }),
              (kr = function (t) {
                return Er.unregister(t);
              }),
              Vr(t));
        };
        function Hr() {
          if ((this.$$.ptr || Lr(this), this.$$.preservePointerOnDelete))
            return ((this.$$.count.value += 1), this);
          var e = Vr(
            Object.create(Object.getPrototypeOf(this), {
              $$: { value: Rr(this.$$) },
            }),
          );
          return ((e.$$.count.value += 1), (e.$$.deleteScheduled = !1), e);
        }
        function Gr() {
          (this.$$.ptr || Lr(this),
            this.$$.deleteScheduled &&
              !this.$$.preservePointerOnDelete &&
              mr("Object already scheduled for deletion"),
            kr(this),
            Tr(this.$$),
            this.$$.preservePointerOnDelete ||
              ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0)));
        }
        function zr() {
          return !this.$$.ptr;
        }
        function jr() {
          return (
            this.$$.ptr || Lr(this),
            this.$$.deleteScheduled &&
              !this.$$.preservePointerOnDelete &&
              mr("Object already scheduled for deletion"),
            Nr.push(this),
            Nr.length === 1 && wr && wr(Mr),
            (this.$$.deleteScheduled = !0),
            this
          );
        }
        function Kr() {
          ((Qr.prototype.isAliasOf = Sr),
            (Qr.prototype.clone = Hr),
            (Qr.prototype.delete = Gr),
            (Qr.prototype.isDeleted = zr),
            (Qr.prototype.deleteLater = jr));
        }
        function Qr() {}
        var Xr = 48,
          Yr = 57;
        function Jr(e) {
          if (e === void 0) return "_unknown";
          e = e.replace(/[^a-zA-Z0-9_]/g, "$");
          var t = e.charCodeAt(0);
          return t >= Xr && t <= Yr ? "_" + e : e;
        }
        function Zr(e, t) {
          var n;
          return (
            (e = Jr(e)),
            ((n = {}),
            (n[e] = function () {
              return t.apply(this, arguments);
            }),
            n)[e]
          );
        }
        function eo(e, t, n) {
          if (e[t].overloadTable === void 0) {
            var r = e[t];
            ((e[t] = function () {
              return (
                Object.prototype.hasOwnProperty.call(
                  e[t].overloadTable,
                  arguments.length,
                ) ||
                  mr(
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
        function to(e, t, n) {
          Object.prototype.hasOwnProperty.call(v, e)
            ? ((n === void 0 ||
                (v[e].overloadTable !== void 0 &&
                  v[e].overloadTable[n] !== void 0)) &&
                mr("Cannot register public name '" + e + "' twice"),
              eo(v, e, e),
              Object.prototype.hasOwnProperty.call(v, n) &&
                mr(
                  "Cannot register multiple overloads of a function with the same number of arguments (" +
                    n +
                    ")!",
                ),
              (v[e].overloadTable[n] = t))
            : ((v[e] = t), n !== void 0 && (v[e].numArguments = n));
        }
        function no(e, t, n, r, o, a, i, l) {
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
        function ro(e, t, n) {
          for (; t !== n; )
            (t.upcast ||
              mr(
                "Expected null or instance of " +
                  n.name +
                  ", got an instance of " +
                  t.name,
              ),
              (e = t.upcast(e)),
              (t = t.baseClass));
          return e;
        }
        function oo(e, t) {
          if (t === null)
            return (
              this.isReference && mr("null is not a valid " + this.name),
              0
            );
          (t.$$ || mr('Cannot pass "' + or(t) + '" as a ' + this.name),
            t.$$.ptr ||
              mr(
                "Cannot pass deleted object as a pointer of type " + this.name,
              ));
          var n = t.$$.ptrType.registeredClass,
            r = ro(t.$$.ptr, n, this.registeredClass);
          return r;
        }
        function ao(e, t) {
          var n;
          if (t === null)
            return (
              this.isReference && mr("null is not a valid " + this.name),
              this.isSmartPointer
                ? ((n = this.rawConstructor()),
                  e !== null && e.push(this.rawDestructor, n),
                  n)
                : 0
            );
          (t.$$ || mr('Cannot pass "' + or(t) + '" as a ' + this.name),
            t.$$.ptr ||
              mr(
                "Cannot pass deleted object as a pointer of type " + this.name,
              ),
            !this.isConst &&
              t.$$.ptrType.isConst &&
              mr(
                "Cannot convert argument of type " +
                  (t.$$.smartPtrType
                    ? t.$$.smartPtrType.name
                    : t.$$.ptrType.name) +
                  " to parameter type " +
                  this.name,
              ));
          var r = t.$$.ptrType.registeredClass;
          if (
            ((n = ro(t.$$.ptr, r, this.registeredClass)), this.isSmartPointer)
          )
            switch (
              (t.$$.smartPtr === void 0 &&
                mr("Passing raw pointer to smart pointer is illegal"),
              this.sharingPolicy)
            ) {
              case 0:
                t.$$.smartPtrType === this
                  ? (n = t.$$.smartPtr)
                  : mr(
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
                    Po.toHandle(function () {
                      o.delete();
                    }),
                  )),
                    e !== null && e.push(this.rawDestructor, n));
                }
                break;
              default:
                mr("Unsupporting sharing policy");
            }
          return n;
        }
        function io(e, t) {
          if (t === null)
            return (
              this.isReference && mr("null is not a valid " + this.name),
              0
            );
          (t.$$ || mr('Cannot pass "' + or(t) + '" as a ' + this.name),
            t.$$.ptr ||
              mr(
                "Cannot pass deleted object as a pointer of type " + this.name,
              ),
            t.$$.ptrType.isConst &&
              mr(
                "Cannot convert argument of type " +
                  t.$$.ptrType.name +
                  " to parameter type " +
                  this.name,
              ));
          var n = t.$$.ptrType.registeredClass,
            r = ro(t.$$.ptr, n, this.registeredClass);
          return r;
        }
        function lo(e) {
          return this.fromWireType(f()[e >> 2]);
        }
        function so(e) {
          return (this.rawGetPointee && (e = this.rawGetPointee(e)), e);
        }
        function uo(e) {
          this.rawDestructor && this.rawDestructor(e);
        }
        function co(e) {
          e !== null && e.delete();
        }
        function mo() {
          ((po.prototype.getPointee = so),
            (po.prototype.destructor = uo),
            (po.prototype.argPackAdvance = 8),
            (po.prototype.readValueFromPointer = lo),
            (po.prototype.deleteObject = co),
            (po.prototype.fromWireType = Ur));
        }
        function po(e, t, n, r, o, a, i, l, s, u, c) {
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
                ? ((this.toWireType = oo), (this.destructorFunction = null))
                : ((this.toWireType = io), (this.destructorFunction = null))
              : (this.toWireType = ao));
        }
        function _o(e, t, n) {
          (Object.prototype.hasOwnProperty.call(v, e) ||
            _r("Replacing nonexistant public symbol"),
            v[e].overloadTable !== void 0 && n !== void 0
              ? (v[e].overloadTable[n] = t)
              : ((v[e] = t), (v[e].argCount = n)));
        }
        function fo(e, t) {
          e = lr(e);
          function n() {
            return fn(t);
          }
          var r = n();
          return (
            typeof r != "function" &&
              mr("unknown function pointer with signature " + e + ": " + t),
            r
          );
        }
        function go(e, t) {
          var n = Zr(t, function (e) {
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
        var ho = void 0;
        function yo(e) {
          var t = Xi(e),
            n = lr(t);
          return (Ai(t), n);
        }
        function Co(e, t) {
          var n = [],
            r = {};
          function o(e) {
            if (!r[e] && !ur[e]) {
              if (cr[e]) {
                cr[e].forEach(o);
                return;
              }
              (n.push(e), (r[e] = !0));
            }
          }
          throw (t.forEach(o), new ho(e + ": " + n.map(yo).join([", "])));
        }
        function bo(e, t, n, r, o, a, i, l, s, u, c, d, m) {
          ((c = lr(c)),
            (a = fo(o, a)),
            l && (l = fo(i, l)),
            u && (u = fo(s, u)),
            (m = fo(d, m)));
          var p = Jr(c);
          (to(p, function () {
            Co("Cannot construct " + c + " due to unbound types", [r]);
          }),
            fr([e, t, n], r ? [r] : [], function (t) {
              t = t[0];
              var n, o;
              r
                ? ((n = t.registeredClass), (o = n.instancePrototype))
                : (o = Qr.prototype);
              var i = Zr(p, function () {
                  if (Object.getPrototypeOf(this) !== s)
                    throw new dr("Use 'new' to construct " + c);
                  if (d.constructor_body === void 0)
                    throw new dr(c + " has no accessible constructor");
                  var e = d.constructor_body[arguments.length];
                  if (e === void 0)
                    throw new dr(
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
              var d = new no(c, i, s, m, n, a, l, u);
              d.baseClass &&
                (d.baseClass.__derivedClasses === void 0 &&
                  (d.baseClass.__derivedClasses = []),
                d.baseClass.__derivedClasses.push(d));
              var _ = new po(c, d, !0, !1, !1),
                f = new po(c + "*", d, !1, !1, !1),
                g = new po(c + " const*", d, !1, !0, !1);
              return (
                (xr[e] = { pointerType: f, constPointerType: g }),
                _o(p, i),
                [_, f, g]
              );
            }));
        }
        function vo(e, t) {
          for (var n = [], r = 0; r < e; r++) n.push(g()[(t + r * 4) >> 2]);
          return n;
        }
        function So(e) {
          for (; e.length; ) {
            var t = e.pop(),
              n = e.pop();
            n(t);
          }
        }
        function Ro(e, t, n, r, o, a) {
          var i = t.length;
          (i < 2 &&
            mr(
              "argTypes array size mismatch! Must at least get return value and 'this' types!",
            ),
            K(!a, "Async bindings are only supported with JSPI."));
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
              mr(
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
              if (s) So(_);
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
        function Lo(e, t, n, r, o, a) {
          K(t > 0);
          var i = vo(t, n);
          ((o = fo(r, o)),
            fr([], [e], function (e) {
              e = e[0];
              var n = "constructor " + e.name;
              if (
                (e.registeredClass.constructor_body === void 0 &&
                  (e.registeredClass.constructor_body = []),
                e.registeredClass.constructor_body[t - 1] !== void 0)
              )
                throw new dr(
                  "Cannot register multiple constructors with identical number of parameters (" +
                    (t - 1) +
                    ") for class '" +
                    e.name +
                    "'! Overload resolution is currently only performed using the parameter count, not actual type info!",
                );
              return (
                (e.registeredClass.constructor_body[t - 1] = function () {
                  Co("Cannot construct " + e.name + " due to unbound types", i);
                }),
                fr([], i, function (r) {
                  return (
                    r.splice(1, 0, null),
                    (e.registeredClass.constructor_body[t - 1] = Ro(
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
        function Eo(e, t, n, r, o, a, i, l, s) {
          var u = vo(n, r);
          ((t = lr(t)),
            (a = fo(o, a)),
            fr([], [e], function (e) {
              e = e[0];
              var r = e.name + "." + t;
              (t.startsWith("@@") && (t = Symbol[t.substring(2)]),
                l && e.registeredClass.pureVirtualFunctions.push(t));
              function o() {
                Co("Cannot call " + r + " due to unbound types", u);
              }
              var c = e.registeredClass.instancePrototype,
                d = c[t];
              return (
                d === void 0 ||
                (d.overloadTable === void 0 &&
                  d.className !== e.name &&
                  d.argCount === n - 2)
                  ? ((o.argCount = n - 2), (o.className = e.name), (c[t] = o))
                  : (eo(c, t, r), (c[t].overloadTable[n - 2] = o)),
                fr([], u, function (o) {
                  var l = Ro(r, o, e, a, i, s);
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
        function ko() {
          Object.assign(Io.prototype, {
            get: function (t) {
              return (
                K(this.allocated[t] !== void 0, "invalid handle: " + t),
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
              (K(this.allocated[t] !== void 0),
                (this.allocated[t] = void 0),
                this.freelist.push(t));
            },
          });
        }
        function Io() {
          ((this.allocated = [void 0]), (this.freelist = []));
        }
        var To = new Io();
        function Do(e) {
          e >= To.reserved && --To.get(e).refcount === 0 && To.free(e);
        }
        function xo() {
          for (var e = 0, t = To.reserved; t < To.allocated.length; ++t)
            To.allocated[t] !== void 0 && ++e;
          return e;
        }
        function $o() {
          (To.allocated.push(
            { value: void 0 },
            { value: null },
            { value: !0 },
            { value: !1 },
          ),
            (To.reserved = To.allocated.length),
            (v.count_emval_handles = xo));
        }
        var Po = {
          toValue: function (t) {
            return (
              t || mr("Cannot use deleted val. handle = " + t),
              To.get(t).value
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
                return To.allocate({ refcount: 1, value: t });
            }
          },
        };
        function No(e, t) {
          ((t = lr(t)),
            hr(e, {
              name: t,
              fromWireType: function (t) {
                var e = Po.toValue(t);
                return (Do(t), e);
              },
              toWireType: function (t, n) {
                return Po.toHandle(n);
              },
              argPackAdvance: 8,
              readValueFromPointer: lo,
              destructorFunction: null,
            }));
        }
        function Mo(e, t) {
          switch (t) {
            case 2:
              return function (e) {
                return this.fromWireType(C()[e >> 2]);
              };
            case 3:
              return function (e) {
                return this.fromWireType(b()[e >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + e);
          }
        }
        function wo(e, t, n) {
          var r = br(n);
          ((t = lr(t)),
            hr(e, {
              name: t,
              fromWireType: function (t) {
                return t;
              },
              toWireType: function (t, n) {
                if (typeof n != "number" && typeof n != "boolean")
                  throw new TypeError(
                    "Cannot convert " + or(n) + " to " + this.name,
                  );
                return n;
              },
              argPackAdvance: 8,
              readValueFromPointer: Mo(t, r),
              destructorFunction: null,
              jsType: "number",
            }));
        }
        function Ao(e, t, n, r, o, a, i) {
          var l = vo(t, n);
          ((e = lr(e)),
            (o = fo(r, o)),
            to(
              e,
              function () {
                Co("Cannot call " + e + " due to unbound types", l);
              },
              t - 1,
            ),
            fr([], l, function (n) {
              var r = [n[0], null].concat(n.slice(1));
              return (
                _o(e, Ro(e, r, null, o, a, i), t - 1),
                v.__WA_INVOKER_FUNCS == null &&
                  (v.__WA_INVOKER_FUNCS = new Map()),
                v.__WA_INVOKER_FUNCS.set(e, {
                  argTypes: n.slice(1),
                  returnType: n[0],
                }),
                []
              );
            }));
        }
        function Fo(e, t, n, r, o) {
          ((t = lr(t)), o === -1 && (o = 4294967295));
          var a = br(n),
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
                throw new TypeError('Cannot convert "' + or(n) + '" to ' + a);
              if (n < r || n > o)
                throw new TypeError(
                  'Passing a number "' +
                    or(n) +
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
            hr(e, {
              name: t,
              fromWireType: i,
              toWireType: c,
              argPackAdvance: 8,
              readValueFromPointer: yr(t, a, r !== 0),
              destructorFunction: null,
              jsType: "number",
            }));
        }
        function Oo(e, t, n) {
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
          ((n = lr(n)),
            hr(
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
        function Bo(e, t) {
          t = lr(t);
          var n = t === "std::string";
          hr(e, {
            name: t,
            fromWireType: function (t) {
              var e = g()[t >> 2],
                r = t + 4,
                o;
              if (n)
                for (var a = r, i = 0; i <= e; ++i) {
                  var l = r + i;
                  if (i == e || d()[l] == 0) {
                    var s = l - a,
                      u = en(a, s);
                    (o === void 0 ? (o = u) : ((o += "\0"), (o += u)),
                      (a = l + 1));
                  }
                }
              else {
                for (var c = new Array(e), i = 0; i < e; ++i)
                  c[i] = String.fromCharCode(d()[r + i]);
                o = c.join("");
              }
              return (Ai(t), o);
            },
            toWireType: function (t, r) {
              r instanceof ArrayBuffer && (r = new Uint8Array(r));
              var e,
                o = typeof r == "string";
              (o ||
                r instanceof Uint8Array ||
                r instanceof Uint8ClampedArray ||
                r instanceof Int8Array ||
                mr("Cannot pass non-string to std::string"),
                n && o ? (e = Mt(r)) : (e = r.length));
              var a = wi(4 + e + 1),
                i = a + 4;
              if (((g()[a >> 2] = e), n && o)) Qn(r, i, e + 1);
              else if (o)
                for (var l = 0; l < e; ++l) {
                  var s = r.charCodeAt(l);
                  (s > 255 &&
                    (Ai(i),
                    mr(
                      "String has UTF-16 code units that do not fit in 8 bits",
                    )),
                    (d()[i + l] = s));
                }
              else for (var l = 0; l < e; ++l) d()[i + l] = r[l];
              return (t !== null && t.push(Ai, a), a);
            },
            argPackAdvance: 8,
            readValueFromPointer: lo,
            destructorFunction: function (t) {
              Ai(t);
            },
            jsType: "string",
          });
        }
        var Wo =
            typeof TextDecoder != "undefined"
              ? new TextDecoder("utf-16le")
              : void 0,
          qo = function (t, n) {
            K(
              t % 2 == 0,
              "Pointer passed to UTF16ToString must be aligned to two bytes!",
            );
            for (var e = t, r = e >> 1, o = r + n / 2; !(r >= o) && p()[r]; )
              ++r;
            if (((e = r << 1), e - t > 32 && Wo))
              return Wo.decode(d().slice(t, e));
            for (var a = "", i = 0; !(i >= n / 2); ++i) {
              var l = m()[(t + i * 2) >> 1];
              if (l == 0) break;
              a += String.fromCharCode(l);
            }
            return a;
          },
          Uo = function (t, n, r) {
            if (
              (K(
                n % 2 == 0,
                "Pointer passed to stringToUTF16 must be aligned to two bytes!",
              ),
              K(
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
          Vo = function (t) {
            return t.length * 2;
          },
          Ho = function (t, n) {
            K(
              t % 4 == 0,
              "Pointer passed to UTF32ToString must be aligned to four bytes!",
            );
            for (var e = 0, r = ""; !(e >= n / 4); ) {
              var o = f()[(t + e * 4) >> 2];
              if (o == 0) break;
              if ((++e, o >= 65536)) {
                var a = o - 65536;
                r += String.fromCharCode(55296 | (a >> 10), 56320 | (a & 1023));
              } else r += String.fromCharCode(o);
            }
            return r;
          },
          Go = function (t, n, r) {
            if (
              (K(
                n % 4 == 0,
                "Pointer passed to stringToUTF32 must be aligned to four bytes!",
              ),
              K(
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
          zo = function (t) {
            for (var e = 0, n = 0; n < t.length; ++n) {
              var r = t.charCodeAt(n);
              (r >= 55296 && r <= 57343 && ++n, (e += 4));
            }
            return e;
          },
          jo = function (t, n, r) {
            r = lr(r);
            var e, o, a, i, l;
            (n === 2
              ? ((e = qo),
                (o = Uo),
                (i = Vo),
                (a = function () {
                  return p();
                }),
                (l = 1))
              : n === 4 &&
                ((e = Ho),
                (o = Go),
                (i = zo),
                (a = function () {
                  return g();
                }),
                (l = 2)),
              hr(t, {
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
                  return (Ai(r), i);
                },
                toWireType: function (t, a) {
                  typeof a != "string" &&
                    mr("Cannot pass non-string to C++ string type " + r);
                  var e = i(a),
                    s = wi(4 + e + n);
                  return (
                    (g()[s >> 2] = e >> l),
                    o(a, s + 4, e + n),
                    t !== null && t.push(Ai, s),
                    s
                  );
                },
                argPackAdvance: 8,
                readValueFromPointer: lo,
                destructorFunction: function (t) {
                  Ai(t);
                },
              }));
          };
        function Ko(e, t) {
          ((t = lr(t)),
            hr(e, {
              isVoid: !0,
              name: t,
              argPackAdvance: 0,
              fromWireType: function () {},
              toWireType: function (t, n) {},
              jsType: "void",
            }));
        }
        var Qo = !0,
          Xo = function () {
            return Qo;
          },
          Yo = function () {
            if (!fe())
              try {
                P ? ll(j) : on(j);
              } catch (e) {
                ln(e);
              }
          },
          Jo = function (t) {
            if (z) {
              W(
                "user callback triggered after runtime exited or application aborted.  Ignoring.",
              );
              return;
            }
            try {
              (t(), Yo());
            } catch (e) {
              ln(e);
            }
          };
        function Zo(e) {
          if (typeof Atomics.waitAsync == "function") {
            var t = Atomics.waitAsync(f(), e >> 2, e);
            (K(t.async), t.value.then(ea));
            var n = e + 128;
            Atomics.store(f(), n >> 2, 1);
          }
        }
        v.__emscripten_thread_mailbox_await = Zo;
        var ea = function () {
          var e = Wi();
          e &&
            (Zo(e),
            Jo(function () {
              return sl();
            }));
        };
        v.checkMailbox = ea;
        var ta = function (t, n, r) {
          if (t == n)
            setTimeout(function () {
              return ea();
            });
          else if (P)
            postMessage({ targetThread: t, cmd: "checkMailbox", type: "cmd" });
          else {
            var e = sn.pthreads[t];
            if (!e) {
              W(
                "Cannot send message to thread with ID " +
                  t +
                  ", unknown thread ID!",
              );
              return;
            }
            e.postMessage({ cmd: "checkMailbox", type: "cmd" });
          }
        };
        function na(e, t, n) {
          return (
            W(
              "emscripten_set_offscreencanvas_size: Build with -sOFFSCREENCANVAS_SUPPORT=1 to enable transferring canvases to pthreads.",
            ),
            -1
          );
        }
        function ra(e) {}
        var oa = function () {
          throw new we();
        };
        function aa(e) {
          e > 4 && (To.get(e).refcount += 1);
        }
        function ia(e, t) {
          var n = ur[e];
          return (n === void 0 && mr(t + " has unknown type " + yo(e)), n);
        }
        function la(e, t) {
          e = ia(e, "_emval_take_value");
          var n = e.readValueFromPointer(t);
          return Po.toHandle(n);
        }
        function sa(e, t) {
          ((e = jn(e)), (t = jn(t)));
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
        var ua = function (t) {
            return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
          },
          ca = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
          da = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
          ma = function (t) {
            var e = ua(t.getFullYear()),
              n = e ? ca : da,
              r = n[t.getMonth()] + t.getDate() - 1;
            return r;
          };
        function pa(e, t) {
          ((e = jn(e)), (t = jn(t)));
          var n = new Date(e * 1e3);
          ((f()[t >> 2] = n.getSeconds()),
            (f()[(t + 4) >> 2] = n.getMinutes()),
            (f()[(t + 8) >> 2] = n.getHours()),
            (f()[(t + 12) >> 2] = n.getDate()),
            (f()[(t + 16) >> 2] = n.getMonth()),
            (f()[(t + 20) >> 2] = n.getFullYear() - 1900),
            (f()[(t + 24) >> 2] = n.getDay()));
          var r = ma(n) | 0;
          ((f()[(t + 28) >> 2] = r),
            (f()[(t + 36) >> 2] = -(n.getTimezoneOffset() * 60)));
          var o = new Date(n.getFullYear(), 0, 1),
            a = new Date(n.getFullYear(), 6, 1).getTimezoneOffset(),
            i = o.getTimezoneOffset(),
            l = (a != i && n.getTimezoneOffset() == Math.min(i, a)) | 0;
          f()[(t + 32) >> 2] = l;
        }
        var _a = function (t) {
          t = jn(t);
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
            var c = ma(e) | 0;
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
        function fa(e, t, n, r, o, a, i) {
          if (P) return qa(16, 1, e, t, n, r, o, a, i);
          ((e = jn(e)), (o = jn(o)), (a = jn(a)), (i = jn(i)));
          try {
            if (isNaN(o)) return 61;
            var l = tn.getStreamFromFD(r),
              s = Zt.mmap(l, e, o, t, n),
              u = s.ptr;
            return ((f()[a >> 2] = s.allocated), (g()[i >> 2] = u), 0);
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        function ga(e, t, n, r, o, a) {
          if (P) return qa(17, 1, e, t, n, r, o, a);
          ((e = jn(e)), (t = jn(t)), (a = jn(a)));
          try {
            return isNaN(a)
              ? 61
              : (tn.doMsync(e, tn.getStreamFromFD(o), t, r, a), 0);
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        function ha(e, t, n, r, o, a) {
          if (P) return qa(18, 1, e, t, n, r, o, a);
          ((e = jn(e)), (t = jn(t)), (a = jn(a)));
          try {
            if (isNaN(a)) return 61;
            var i = tn.getStreamFromFD(o);
            (n & 2 && tn.doMsync(e, i, t, r, a), Zt.munmap(i));
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return -e.errno;
          }
        }
        var ya = function (t) {
            var e = Mt(t) + 1,
              n = wi(e);
            return (n && Qn(t, n, e), n);
          },
          Ca = function (t, n, r) {
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
              m = ya(c),
              p = ya(d);
            l < i
              ? ((g()[r >> 2] = m), (g()[(r + 4) >> 2] = p))
              : ((g()[r >> 2] = p), (g()[(r + 4) >> 2] = m));
          },
          ba = function () {
            De("native code called abort()");
          },
          va = [],
          Sa = function (t, n) {
            (K(Array.isArray(va)), K(n % 16 == 0), (va.length = 0));
            var e;
            for (n >>= 2; (e = d()[t++]); ) {
              var r = String.fromCharCode(e),
                o = ["d", "f", "i"];
              (o.push("j"),
                K(
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
                va.push(e == 105 ? f()[n] : (e == 106 ? ne : b())[n++ >> 1]),
                ++n);
            }
            return va;
          },
          Ra = function (t, n, r) {
            var e = Sa(n, r);
            return (
              Object.prototype.hasOwnProperty.call(Xe, t) ||
                De("No EM_ASM constant found at address " + t),
              Xe[t].apply(null, e)
            );
          },
          La = function (t, n, r) {
            return Ra(t, n, r);
          },
          Ea = function (t, n, r) {
            return Ra(t, n, r);
          },
          ka = function () {
            _e += 1;
          },
          Ia = function () {
            (K(_e > 0), (_e -= 1));
          },
          Ta = function (t, n) {
            return (
              ka(),
              setTimeout(function () {
                (Ia(), Jo(t));
              }, n)
            );
          };
        function Da(e, t) {
          if (
            ((Pa.mainLoop.timingMode = e),
            (Pa.mainLoop.timingValue = t),
            !Pa.mainLoop.func)
          )
            return (
              W(
                "emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.",
              ),
              1
            );
          if (
            (Pa.mainLoop.running || (ka(), (Pa.mainLoop.running = !0)), e == 0)
          )
            ((Pa.mainLoop.scheduler = function () {
              var e = Math.max(0, Pa.mainLoop.tickStartTime + t - xa()) | 0;
              setTimeout(Pa.mainLoop.runner, e);
            }),
              (Pa.mainLoop.method = "timeout"));
          else if (e == 1)
            ((Pa.mainLoop.scheduler = function () {
              Pa.requestAnimationFrame(Pa.mainLoop.runner);
            }),
              (Pa.mainLoop.method = "rAF"));
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
                    D
                      ? (v.setImmediates === void 0 && (v.setImmediates = []),
                        v.setImmediates.push(t),
                        postMessage({ target: r, type: "cmd" }))
                      : postMessage(
                          babelHelpers.extends({}, r, { type: "cmd" }),
                          "*",
                        ));
                }));
            }
            ((Pa.mainLoop.scheduler = function () {
              setImmediate(Pa.mainLoop.runner);
            }),
              (Pa.mainLoop.method = "immediate"));
          }
          return 0;
        }
        var xa;
        xa = function () {
          return performance.timeOrigin + performance.now();
        };
        function $a(e, t, n, r, o) {
          (K(
            !Pa.mainLoop.func,
            "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.",
          ),
            (Pa.mainLoop.func = e),
            (Pa.mainLoop.arg = r));
          var a = Pa.mainLoop.currentlyRunningMainloop;
          function i() {
            return a < Pa.mainLoop.currentlyRunningMainloop ? (Ia(), !1) : !0;
          }
          if (
            ((Pa.mainLoop.running = !1),
            (Pa.mainLoop.runner = function () {
              if (!z) {
                if (Pa.mainLoop.queue.length > 0) {
                  var t = Date.now(),
                    n = Pa.mainLoop.queue.shift();
                  if ((n.func(n.arg), Pa.mainLoop.remainingBlockers)) {
                    var r = Pa.mainLoop.remainingBlockers,
                      o = r % 1 == 0 ? r - 1 : Math.floor(r);
                    n.counted
                      ? (Pa.mainLoop.remainingBlockers = o)
                      : ((o = o + 0.5),
                        (Pa.mainLoop.remainingBlockers = (8 * r + o) / 9));
                  }
                  if (
                    (B(
                      'main loop blocker "' +
                        n.name +
                        '" took ' +
                        (Date.now() - t) +
                        " ms",
                    ),
                    Pa.mainLoop.updateStatus(),
                    !i())
                  )
                    return;
                  setTimeout(Pa.mainLoop.runner, 0);
                  return;
                }
                if (i()) {
                  if (
                    ((Pa.mainLoop.currentFrameNumber =
                      (Pa.mainLoop.currentFrameNumber + 1) | 0),
                    Pa.mainLoop.timingMode == 1 &&
                      Pa.mainLoop.timingValue > 1 &&
                      Pa.mainLoop.currentFrameNumber %
                        Pa.mainLoop.timingValue !=
                        0)
                  ) {
                    Pa.mainLoop.scheduler();
                    return;
                  } else
                    Pa.mainLoop.timingMode == 0 &&
                      (Pa.mainLoop.tickStartTime = xa());
                  (Pa.mainLoop.method === "timeout" &&
                    v.ctx &&
                    (yn(
                      "Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!",
                    ),
                    (Pa.mainLoop.method = "")),
                    Pa.mainLoop.runIter(e),
                    ue(),
                    i() &&
                      (typeof SDL == "object" &&
                        SDL.audio &&
                        SDL.audio.queueNewAudioData &&
                        SDL.audio.queueNewAudioData(),
                      Pa.mainLoop.scheduler()));
                }
              }
            }),
            o ||
              (t && t > 0 ? Da(0, 1e3 / t) : Da(1, 1), Pa.mainLoop.scheduler()),
            n)
          )
            throw "unwind";
        }
        var Pa = {
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
              ((Pa.mainLoop.scheduler = null),
                Pa.mainLoop.currentlyRunningMainloop++);
            },
            resume: function () {
              Pa.mainLoop.currentlyRunningMainloop++;
              var e = Pa.mainLoop.timingMode,
                t = Pa.mainLoop.timingValue,
                n = Pa.mainLoop.func;
              ((Pa.mainLoop.func = null),
                $a(n, 0, !1, Pa.mainLoop.arg, !0),
                Da(e, t),
                Pa.mainLoop.scheduler());
            },
            updateStatus: function () {
              if (v.setStatus) {
                var e = v.statusMessage || "Please wait...",
                  t = Pa.mainLoop.remainingBlockers,
                  n = Pa.mainLoop.expectedBlockers;
                t
                  ? t < n
                    ? v.setStatus(e + " (" + (n - t) + "/" + n + ")")
                    : v.setStatus(e)
                  : v.setStatus("");
              }
            },
            runIter: function (t) {
              if (!z) {
                if (v.preMainLoop) {
                  var e = v.preMainLoop();
                  if (e === !1) return;
                }
                (Jo(t), v.postMainLoop && v.postMainLoop());
              }
            },
          },
          isFullscreen: !1,
          pointerLock: !1,
          moduleContextCreatedCallbacks: [],
          workers: [],
          init: function () {
            if (Pa.initted) return;
            Pa.initted = !0;
            var e = {};
            ((e.canHandle = function (t) {
              return !v.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(t);
            }),
              (e.handle = function (t, n, r, o) {
                var e = new Blob([t], { type: Pa.getMimetype(n) });
                e.size !== t.length &&
                  (e = new Blob([new Uint8Array(t).buffer], {
                    type: Pa.getMimetype(n),
                  }));
                var a = URL.createObjectURL(e);
                K(
                  typeof a == "string",
                  "createObjectURL must return a url as a string",
                );
                var i = new Image();
                ((i.onload = function () {
                  K(i.complete, "Image " + n + " could not be decoded");
                  var e = document.createElement("canvas");
                  ((e.width = i.width), (e.height = i.height));
                  var o = e.getContext("2d");
                  (o.drawImage(i, 0, 0),
                    (Ii[n] = e),
                    URL.revokeObjectURL(a),
                    r && r(t));
                }),
                  (i.onerror = function (e) {
                    (B("Image " + a + " could not be decoded"), o && o());
                  }),
                  (i.src = a));
              }),
              Vt.push(e));
            var t = {};
            ((t.canHandle = function (t) {
              return (
                !v.noAudioDecoding &&
                t.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 }
              );
            }),
              (t.handle = function (t, n, r, o) {
                var e = !1;
                function a(o) {
                  e || ((e = !0), (Ti[n] = o), r && r(t));
                }
                var i = new Blob([t], { type: Pa.getMimetype(n) }),
                  l = URL.createObjectURL(i);
                K(
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
                    W(
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
                  Ta(function () {
                    a(s);
                  }, 1e4));
              }),
              Vt.push(t));
            function n() {
              Pa.pointerLock =
                document.pointerLockElement === v.canvas ||
                document.mozPointerLockElement === v.canvas ||
                document.webkitPointerLockElement === v.canvas ||
                document.msPointerLockElement === v.canvas;
            }
            var r = v.canvas;
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
              v.elementPointerLock &&
                r.addEventListener(
                  "click",
                  function (e) {
                    !Pa.pointerLock &&
                      v.canvas.requestPointerLock &&
                      (v.canvas.requestPointerLock(), e.preventDefault());
                  },
                  !1,
                ));
          },
          createContext: function (t, n, r, o) {
            if (n && v.ctx && t == v.canvas) return v.ctx;
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
                    K(
                      typeof GLctx == "undefined",
                      "cannot set in module if GLctx is used, but we are a non-GL context that would replace it",
                    ),
                  (v.ctx = e),
                  n && GL.makeContextCurrent(a),
                  (v.useWebGL = n),
                  Pa.moduleContextCreatedCallbacks.forEach(function (e) {
                    return e();
                  }),
                  Pa.init()),
                e)
              : null;
          },
          destroyContext: function (t, n, r) {},
          fullscreenHandlersInstalled: !1,
          lockPointer: void 0,
          resizeCanvas: void 0,
          requestFullscreen: function (t, n) {
            ((Pa.lockPointer = t),
              (Pa.resizeCanvas = n),
              typeof Pa.lockPointer == "undefined" && (Pa.lockPointer = !0),
              typeof Pa.resizeCanvas == "undefined" && (Pa.resizeCanvas = !1));
            var e = v.canvas;
            function r() {
              Pa.isFullscreen = !1;
              var t = e.parentNode;
              ((document.fullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement ||
                document.webkitFullscreenElement ||
                document.webkitCurrentFullScreenElement) === t
                ? ((e.exitFullscreen = Pa.exitFullscreen),
                  Pa.lockPointer && e.requestPointerLock(),
                  (Pa.isFullscreen = !0),
                  Pa.resizeCanvas
                    ? Pa.setFullscreenCanvasSize()
                    : Pa.updateCanvasDimensions(e))
                : (t.parentNode.insertBefore(e, t),
                  t.parentNode.removeChild(t),
                  Pa.resizeCanvas
                    ? Pa.setWindowedCanvasSize()
                    : Pa.updateCanvasDimensions(e)),
                v.onFullScreen && v.onFullScreen(Pa.isFullscreen),
                v.onFullscreen && v.onFullscreen(Pa.isFullscreen));
            }
            Pa.fullscreenHandlersInstalled ||
              ((Pa.fullscreenHandlersInstalled = !0),
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
            De(
              "Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)",
            );
          },
          exitFullscreen: function () {
            if (!Pa.isFullscreen) return !1;
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
            if (Pa.nextRAF === 0) Pa.nextRAF = e + 1e3 / 60;
            else for (; e + 2 >= Pa.nextRAF; ) Pa.nextRAF += 1e3 / 60;
            var n = Math.max(Pa.nextRAF - e, 0);
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
            var t = Pa.fakeRequestAnimationFrame;
            t(e);
          }),
          safeSetTimeout: function (t, n) {
            return Ta(t, n);
          },
          safeRequestAnimationFrame: function (t) {
            return (
              ka(),
              Pa.requestAnimationFrame(function () {
                (Ia(), Jo(t));
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
                    throw "unrecognized mouse wheel delta mode: " + t.deltaMode;
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
            if (Pa.pointerLock)
              (t.type != "mousemove" && "mozMovementX" in t
                ? (Pa.mouseMovementX = Pa.mouseMovementY = 0)
                : ((Pa.mouseMovementX = Pa.getMovementX(t)),
                  (Pa.mouseMovementY = Pa.getMovementY(t))),
                typeof SDL != "undefined"
                  ? ((Pa.mouseX = SDL.mouseX + Pa.mouseMovementX),
                    (Pa.mouseY = SDL.mouseY + Pa.mouseMovementY))
                  : ((Pa.mouseX += Pa.mouseMovementX),
                    (Pa.mouseY += Pa.mouseMovementY)));
            else {
              var e = v.canvas.getBoundingClientRect(),
                n = v.canvas.width,
                r = v.canvas.height,
                o =
                  typeof window.scrollX != "undefined"
                    ? window.scrollX
                    : window.pageXOffset,
                a =
                  typeof window.scrollY != "undefined"
                    ? window.scrollY
                    : window.pageYOffset;
              if (
                (K(
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
                  ((Pa.lastTouches[i.identifier] = u),
                    (Pa.touches[i.identifier] = u));
                else if (t.type === "touchend" || t.type === "touchmove") {
                  var c = Pa.touches[i.identifier];
                  (c || (c = u),
                    (Pa.lastTouches[i.identifier] = c),
                    (Pa.touches[i.identifier] = u));
                }
                return;
              }
              var d = t.pageX - (o + e.left),
                m = t.pageY - (a + e.top);
              ((d = d * (n / e.width)),
                (m = m * (r / e.height)),
                (Pa.mouseMovementX = d - Pa.mouseX),
                (Pa.mouseMovementY = m - Pa.mouseY),
                (Pa.mouseX = d),
                (Pa.mouseY = m));
            }
          },
          resizeListeners: [],
          updateResizeListeners: function () {
            var e = v.canvas;
            Pa.resizeListeners.forEach(function (t) {
              return t(e.width, e.height);
            });
          },
          setCanvasSize: function (t, n, r) {
            var e = v.canvas;
            (Pa.updateCanvasDimensions(e, t, n),
              r || Pa.updateResizeListeners());
          },
          windowedWidth: 0,
          windowedHeight: 0,
          setFullscreenCanvasSize: function () {
            if (typeof SDL != "undefined") {
              var e = g()[SDL.screen >> 2];
              ((e = e | 8388608), (f()[SDL.screen >> 2] = e));
            }
            (Pa.updateCanvasDimensions(v.canvas), Pa.updateResizeListeners());
          },
          setWindowedCanvasSize: function () {
            if (typeof SDL != "undefined") {
              var e = g()[SDL.screen >> 2];
              ((e = e & -8388609), (f()[SDL.screen >> 2] = e));
            }
            (Pa.updateCanvasDimensions(v.canvas), Pa.updateResizeListeners());
          },
          updateCanvasDimensions: function (t, n, r) {
            n && r
              ? ((t.widthNative = n), (t.heightNative = r))
              : ((n = t.widthNative), (r = t.heightNative));
            var e = n,
              o = r;
            if (
              (v.forcedAspectRatio &&
                v.forcedAspectRatio > 0 &&
                (e / o < v.forcedAspectRatio
                  ? (e = Math.round(o * v.forcedAspectRatio))
                  : (o = Math.round(e / v.forcedAspectRatio))),
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
            Pa.resizeCanvas
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
        function Na(e, t, n) {
          function r() {
            fn(e)(t);
          }
          n >= 0 ? Ta(r, n) : Pa.safeRequestAnimationFrame(r);
        }
        function Ma() {
          D ||
            yn(
              "Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread",
            );
        }
        var wa = function (t) {
          (K(typeof t == "number"), en(t));
        };
        function Aa() {
          return Date.now();
        }
        var Fa = function () {
            throw (ka(), "unwind");
          },
          Oa = function () {
            return 2147483648;
          },
          Ba = function () {
            return Oa();
          };
        function Wa() {
          return navigator.hardwareConcurrency;
        }
        function qa(e, t) {
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
          return mn(function () {
            for (var o = n * 2, a = gl(o * 8), i = a >> 3, l = 0; l < n; l++) {
              var s = r[2 + l];
              typeof s == "bigint"
                ? ((ne[i + 2 * l] = BigInt(1)), (ne[i + 2 * l + 1] = s))
                : ((ne[i + 2 * l] = BigInt(0)), (b()[i + 2 * l + 1] = s));
            }
            return nl(e, o, a, t);
          });
        }
        var Ua = [];
        function Va(e, t, n, r) {
          ((sn.currentProxiedOperationCallerThread = t),
            (n /= 2),
            (Ua.length = n));
          for (var o = r >> 3, a = 0; a < n; a++)
            ne[o + 2 * a]
              ? (Ua[a] = ne[o + 2 * a + 1])
              : (Ua[a] = b()[o + 2 * a + 1]);
          var i = e < 0,
            l = i ? Xe[-e - 1] : Di[e];
          return (
            K(
              l.length == n,
              "Call args mismatch in emscripten_receive_on_main_thread_js",
            ),
            l.apply(null, Ua)
          );
        }
        var Ha = function (t) {
            var e = V.buffer,
              n = (t - e.byteLength + 65535) >>> 16;
            try {
              return (V.grow(n), ae(), 1);
            } catch (n) {
              W(
                "growMemory: Attempted to grow heap from " +
                  e.byteLength +
                  " bytes to " +
                  t +
                  " bytes, but got error: " +
                  n,
              );
            }
          },
          Ga = function (t) {
            var e = d().length;
            if (((t >>>= 0), t <= e)) return !1;
            var n = Oa();
            if (t > n)
              return (
                W(
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
                l = Ha(i);
              if (l) return !0;
            }
            return (
              W(
                "Failed to grow the heap from " +
                  e +
                  " bytes to " +
                  i +
                  " bytes, not enough memory!",
              ),
              !1
            );
          },
          za = Ia,
          ja = ka,
          Ka = {},
          Qa = function () {
            return k || "./this.program";
          },
          Xa = function () {
            if (!Xa.strings) {
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
                  _: Qa(),
                };
              for (var n in Ka) Ka[n] === void 0 ? delete t[n] : (t[n] = Ka[n]);
              var r = [];
              for (var n in t) r.push(n + "=" + t[n]);
              Xa.strings = r;
            }
            return Xa.strings;
          },
          Ya = function (t, n) {
            for (var e = 0; e < t.length; ++e)
              (K(t.charCodeAt(e) === (t.charCodeAt(e) & 255)),
                (l()[n++ >> 0] = t.charCodeAt(e)));
            l()[n >> 0] = 0;
          };
        function Ja(e, t) {
          if (P) return qa(19, 1, e, t);
          var n = 0;
          return (
            Xa().forEach(function (r, o) {
              var a = t + n;
              ((g()[(e + o * 4) >> 2] = a), Ya(r, a), (n += r.length + 1));
            }),
            0
          );
        }
        function Za(e, t) {
          if (P) return qa(20, 1, e, t);
          var n = Xa();
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
        function ei(e) {
          if (P) return qa(21, 1, e);
          try {
            var t = tn.getStreamFromFD(e);
            return (Zt.close(t), 0);
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return e.errno;
          }
        }
        var ti = function (t, n, r, o) {
          for (var e = 0, a = 0; a < r; a++) {
            var i = g()[n >> 2],
              s = g()[(n + 4) >> 2];
            n += 8;
            var u = Zt.read(t, l(), i, s, o);
            if (u < 0) return -1;
            if (((e += u), u < s)) break;
            typeof o != "undefined" && (o += u);
          }
          return e;
        };
        function ni(e, t, n, r, o) {
          if (P) return qa(22, 1, e, t, n, r, o);
          ((t = jn(t)), (n = jn(n)), (r = jn(r)), (o = jn(o)));
          try {
            if (isNaN(r)) return 61;
            var a = tn.getStreamFromFD(e),
              i = ti(a, t, n, r);
            return ((g()[o >> 2] = i), 0);
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return e.errno;
          }
        }
        var ri = function (t, n, r, o) {
          for (var e = 0, a = 0; a < r; a++) {
            var i = g()[n >> 2],
              s = g()[(n + 4) >> 2];
            n += 8;
            var u = Zt.write(t, l(), i, s, o);
            if (u < 0) return -1;
            ((e += u), typeof o != "undefined" && (o += u));
          }
          return e;
        };
        function oi(e, t, n, r, o) {
          if (P) return qa(23, 1, e, t, n, r, o);
          ((t = jn(t)), (n = jn(n)), (r = jn(r)), (o = jn(o)));
          try {
            if (isNaN(r)) return 61;
            var a = tn.getStreamFromFD(e),
              i = ri(a, t, n, r);
            return ((g()[o >> 2] = i), 0);
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return e.errno;
          }
        }
        function ai(e, t, n, r) {
          if (P) return qa(24, 1, e, t, n, r);
          try {
            var o = tn.getStreamFromFD(e),
              a = ti(o, t, n);
            return ((g()[r >> 2] = a), 0);
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return e.errno;
          }
        }
        function ii(e, t, n, r) {
          if (P) return qa(25, 1, e, t, n, r);
          ((t = jn(t)), (r = jn(r)));
          try {
            if (isNaN(t)) return 61;
            var o = tn.getStreamFromFD(e);
            return (
              Zt.llseek(o, t, n),
              (ne[r >> 3] = BigInt(o.position)),
              o.getdents && t === 0 && n === 0 && (o.getdents = null),
              0
            );
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return e.errno;
          }
        }
        function li(e) {
          if (P) return qa(26, 1, e);
          try {
            var t = tn.getStreamFromFD(e);
            return t.stream_ops && t.stream_ops.fsync
              ? t.stream_ops.fsync(t)
              : 0;
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return e.errno;
          }
        }
        function si(e, t, n, r) {
          if (P) return qa(27, 1, e, t, n, r);
          try {
            var o = tn.getStreamFromFD(e),
              a = ri(o, t, n);
            return ((g()[r >> 2] = a), 0);
          } catch (e) {
            if (typeof Zt == "undefined" || e.name !== "ErrnoError") throw e;
            return e.errno;
          }
        }
        var ui = function (t, n) {
            return (Dt(d().subarray(t, t + n)), 0);
          },
          ci = function (t) {
            for (var e = t.split("."), n = 0; n < 4; n++) {
              var r = Number(e[n]);
              if (isNaN(r)) return null;
              e[n] = r;
            }
            return (e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24)) >>> 0;
          },
          di = function (t) {
            return parseInt(t);
          },
          mi = function (t) {
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
                      di(e[e.length - 4]) + di(e[e.length - 3]) * 256),
                    (e[e.length - 3] =
                      di(e[e.length - 2]) + di(e[e.length - 1]) * 256),
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
                } else i[n + r] = Vi(parseInt(e[n], 16));
              else i[n + r] = e[n];
            return [
              (i[1] << 16) | i[0],
              (i[3] << 16) | i[2],
              (i[5] << 16) | i[4],
              (i[7] << 16) | i[6],
            ];
          },
          pi = {
            address_map: { id: 1, addrs: {}, names: {} },
            lookup_name: function (t) {
              var e = ci(t);
              if (e !== null || ((e = mi(t)), e !== null)) return t;
              var n;
              if (pi.address_map.addrs[t]) n = pi.address_map.addrs[t];
              else {
                var r = pi.address_map.id++;
                (K(r < 65535, "exceeded max address mappings of 65535"),
                  (n = "172.29." + (r & 255) + "." + (r & 65280)),
                  (pi.address_map.names[n] = t),
                  (pi.address_map.addrs[t] = n));
              }
              return n;
            },
            lookup_addr: function (t) {
              return pi.address_map.names[t] ? pi.address_map.names[t] : null;
            },
          },
          _i = function (t) {
            var e = wi(20),
              n = ya(t);
            g()[e >> 2] = n;
            var r = wi(4);
            ((g()[r >> 2] = 0), (g()[(e + 4) >> 2] = r));
            var o = 2;
            ((f()[(e + 8) >> 2] = o), (f()[(e + 12) >> 2] = 4));
            var a = wi(12);
            return (
              (g()[a >> 2] = a + 8),
              (g()[(a + 4) >> 2] = 0),
              (f()[(a + 8) >> 2] = ci(pi.lookup_name(t))),
              (g()[(e + 16) >> 2] = a),
              e
            );
          };
        function fi(e) {
          return P ? qa(28, 1, e) : _i(en(e));
        }
        function gi(e) {
          return e;
        }
        var hi = function (t, n) {
            for (var e = 0, r = 0; r <= n; e += t[r++]);
            return e;
          },
          yi = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          Ci = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          bi = function (t, n) {
            for (var e = new Date(t.getTime()); n > 0; ) {
              var r = ua(e.getFullYear()),
                o = e.getMonth(),
                a = (r ? yi : Ci)[o];
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
          vi = function (t, n) {
            (K(
              t.length >= 0,
              "writeArrayToMemory array must have a length (should be an array or typed array)",
            ),
              l().set(t, n));
          },
          Si = function (t, n, r, o) {
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
                tm_zone: e ? en(e) : "",
              },
              i = en(r),
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
              var t = bi(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
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
                  t.tm_mday + hi(ua(t.tm_year + 1900) ? yi : Ci, t.tm_mon - 1),
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
                var e = Math.floor((t.tm_yday + 7 - ((t.tm_wday + 6) % 7)) / 7);
                if (((t.tm_wday + 371 - t.tm_yday - 2) % 7 <= 2 && e++, e)) {
                  if (e == 53) {
                    var r = (t.tm_wday + 371 - t.tm_yday) % 7;
                    r != 4 && (r != 3 || !ua(t.tm_year)) && (e = 1);
                  }
                } else {
                  e = 52;
                  var n = (t.tm_wday + 7 - t.tm_yday - 1) % 7;
                  (n == 4 || (n == 5 && ua((t.tm_year % 400) - 1))) && e++;
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
            var y = At(i, !1);
            return y.length > n ? 0 : (vi(y, t), y.length - 1);
          },
          Ri = function (t, n, r, o, a) {
            return Si(t, n, r, o);
          };
        sn.init();
        var Li = function (t, n, r, o) {
            (t || (t = this),
              (this.parent = t),
              (this.mount = t.mount),
              (this.mounted = null),
              (this.id = Zt.nextInode++),
              (this.name = n),
              (this.mode = r),
              (this.node_ops = {}),
              (this.stream_ops = {}),
              (this.rdev = o));
          },
          Ei = 365,
          ki = 146;
        (Object.defineProperties(Li.prototype, {
          read: {
            get: function () {
              return (this.mode & Ei) === Ei;
            },
            set: function (t) {
              t ? (this.mode |= Ei) : (this.mode &= ~Ei);
            },
          },
          write: {
            get: function () {
              return (this.mode & ki) === ki;
            },
            set: function (t) {
              t ? (this.mode |= ki) : (this.mode &= ~ki);
            },
          },
          isFolder: {
            get: function () {
              return Zt.isDir(this.mode);
            },
          },
          isDevice: {
            get: function () {
              return Zt.isChrdev(this.mode);
            },
          },
        }),
          (Zt.FSNode = Li),
          (Zt.createPreloadedFile = Gt),
          Zt.staticInit(),
          (Xt = {
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
          ar(),
          (dr = v.BindingError =
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
          (pr = v.InternalError =
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
          Kr(),
          Fr(),
          mo(),
          (ho = v.UnboundTypeError = go(Error, "UnboundTypeError")),
          ko(),
          $o(),
          (v.requestFullscreen = function (t, n) {
            Pa.requestFullscreen(t, n);
          }),
          (v.requestFullScreen = function () {
            Pa.requestFullScreen();
          }),
          (v.requestAnimationFrame = function (t) {
            Pa.requestAnimationFrame(t);
          }),
          (v.setCanvasSize = function (t, n, r) {
            Pa.setCanvasSize(t, n, r);
          }),
          (v.pauseMainLoop = function () {
            Pa.mainLoop.pause();
          }),
          (v.resumeMainLoop = function () {
            Pa.mainLoop.resume();
          }),
          (v.getUserMedia = function () {
            Pa.getUserMedia();
          }),
          (v.createContext = function (t, n, r, o) {
            return Pa.createContext(t, n, r, o);
          }));
        var Ii = {},
          Ti = {},
          Di = [
            null,
            nn,
            dn,
            Bn,
            qn,
            Vn,
            Hn,
            Kn,
            Xn,
            Yn,
            Jn,
            Zn,
            er,
            tr,
            nr,
            rr,
            fa,
            ga,
            ha,
            Ja,
            Za,
            ei,
            ni,
            oi,
            ai,
            ii,
            li,
            si,
            fi,
          ];
        function xi() {
          He("fetchSettings");
        }
        var $i = {
            __assert_fail: Cn,
            __cxa_begin_catch: Sn,
            __cxa_current_primary_exception: Rn,
            __cxa_end_catch: En,
            __cxa_find_matching_catch_2: Dn,
            __cxa_find_matching_catch_3: xn,
            __cxa_find_matching_catch_4: $n,
            __cxa_get_exception_ptr: Pn,
            __cxa_rethrow: Nn,
            __cxa_rethrow_primary_exception: Mn,
            __cxa_throw: wn,
            __cxa_uncaught_exceptions: An,
            __emscripten_init_main_thread_js: Fn,
            __emscripten_thread_cleanup: On,
            __pthread_create_js: Wn,
            __resumeException: In,
            __syscall_chdir: qn,
            __syscall_fcntl64: Vn,
            __syscall_fstat64: Hn,
            __syscall_ftruncate64: Kn,
            __syscall_getdents64: Xn,
            __syscall_ioctl: Yn,
            __syscall_lstat64: Jn,
            __syscall_mkdirat: Zn,
            __syscall_newfstatat: er,
            __syscall_openat: tr,
            __syscall_stat64: nr,
            __syscall_unlinkat: rr,
            _embind_register_bigint: Cr,
            _embind_register_bool: vr,
            _embind_register_class: bo,
            _embind_register_class_constructor: Lo,
            _embind_register_class_function: Eo,
            _embind_register_emval: No,
            _embind_register_float: wo,
            _embind_register_function: Ao,
            _embind_register_integer: Fo,
            _embind_register_memory_view: Oo,
            _embind_register_std_string: Bo,
            _embind_register_std_wstring: jo,
            _embind_register_void: Ko,
            _emscripten_get_now_is_monotonic: Xo,
            _emscripten_notify_mailbox_postmessage: ta,
            _emscripten_set_offscreencanvas_size: na,
            _emscripten_thread_mailbox_await: Zo,
            _emscripten_thread_set_strongref: ra,
            _emscripten_throw_longjmp: oa,
            _emval_decref: Do,
            _emval_incref: aa,
            _emval_take_value: la,
            _gmtime_js: sa,
            _localtime_js: pa,
            _mktime_js: _a,
            _mmap_js: fa,
            _msync_js: ga,
            _munmap_js: ha,
            _tzset_js: Ca,
            abort: ba,
            call_init_capture_driver_js_sync: st,
            call_init_playback_driver_js_sync: dt,
            call_sendto: lt,
            call_start_capture_js_sync: ut,
            call_start_desktop_capture_js_sync: ft,
            call_start_playback_js_sync: mt,
            call_start_video_capture_js_sync: ht,
            call_stop_capture_js_sync: ct,
            call_stop_desktop_capture_js_sync: gt,
            call_stop_playback_js_sync: pt,
            call_stop_video_capture_js_sync: yt,
            emscripten_asm_const_double: La,
            emscripten_asm_const_int: Ea,
            emscripten_async_call: Na,
            emscripten_check_blocking_allowed: Ma,
            emscripten_console_error: wa,
            emscripten_date_now: Aa,
            emscripten_exit_with_live_runtime: Fa,
            emscripten_get_heap_max: Ba,
            emscripten_get_now: xa,
            emscripten_num_logical_cores: Wa,
            emscripten_receive_on_main_thread_js: Va,
            emscripten_resize_heap: Ga,
            emscripten_runtime_keepalive_pop: za,
            emscripten_runtime_keepalive_push: ja,
            environ_get: Ja,
            environ_sizes_get: Za,
            exit: on,
            fd_close: ei,
            fd_pread: ni,
            fd_pwrite: oi,
            fd_read: ai,
            fd_seek: ii,
            fd_sync: li,
            fd_write: si,
            get_bwe_ml_model_path_js: tt,
            get_ml_model_path_for_type_js: nt,
            get_random_bytes_js: rt,
            getentropy: ui,
            gethostbyname: fi,
            invoke_d: Ku,
            invoke_diii: Zu,
            invoke_fi: Zs,
            invoke_fii: hs,
            invoke_fiii: Ju,
            invoke_fiiiiii: Nu,
            invoke_i: Ll,
            invoke_id: mu,
            invoke_ii: kl,
            invoke_iid: Hu,
            invoke_iidi: Qu,
            invoke_iidii: hu,
            invoke_iidjjjidjjjdjjji: ls,
            invoke_iidjjjii: fs,
            invoke_iidjjjiii: us,
            invoke_iiffiii: Cs,
            invoke_iiffiiiii: ys,
            invoke_iifi: Tu,
            invoke_iifii: uu,
            invoke_iifiii: du,
            invoke_iii: Il,
            invoke_iiid: cu,
            invoke_iiifi: pu,
            invoke_iiii: Dl,
            invoke_iiiidd: Wu,
            invoke_iiiifiii: Ls,
            invoke_iiiifiiiiii: Ts,
            invoke_iiiii: Nl,
            invoke_iiiiid: Xu,
            invoke_iiiiii: Bl,
            invoke_iiiiiii: xl,
            invoke_iiiiiiiddiiid: Uu,
            invoke_iiiiiiii: Fl,
            invoke_iiiiiiiidi: Vu,
            invoke_iiiiiiiifii: su,
            invoke_iiiiiiiii: Ml,
            invoke_iiiiiiiiii: Al,
            invoke_iiiiiiiiiiffiii: bs,
            invoke_iiiiiiiiiii: Xl,
            invoke_iiiiiiiiiiii: ks,
            invoke_iiiiiiiiiiiiffiii: Rs,
            invoke_iiiiiiiiiiiii: Ds,
            invoke_iiiiiiiiiiiiii: Hl,
            invoke_iiiiiiiiiiiiiiffiiiii: Es,
            invoke_iiiiiiiiiiiiiii: Ns,
            invoke_iiiiiiiiiiiiiiiffiiiii: vs,
            invoke_iiiiiiiiiiiiiiii: Js,
            invoke_iiiiiiiiiiiiiiiiiffiiiii: Ss,
            invoke_iiiiiiiiiiiiiiiiii: Gl,
            invoke_iiiiiiiiiiji: es,
            invoke_iiiiiiiiij: js,
            invoke_iiiiiiiij: Hs,
            invoke_iiiiiiij: Ws,
            invoke_iiiiiiijjii: eu,
            invoke_iiiiiij: Gs,
            invoke_iiiiiijiiii: Ks,
            invoke_iiiiiijjijiiiiiiiiii: nu,
            invoke_iiiiij: zu,
            invoke_iiiiiji: Us,
            invoke_iiiiijjii: ps,
            invoke_iiiiijjiii: _s,
            invoke_iiiiijjjii: ds,
            invoke_iiiiijjjiii: ms,
            invoke_iiiij: Ps,
            invoke_iiiijiii: gu,
            invoke_iiiijiiji: as,
            invoke_iiiijjii: gs,
            invoke_iiiijjiii: cs,
            invoke_iiij: qs,
            invoke_iiijddddddd: ku,
            invoke_iiiji: Zl,
            invoke_iiijii: Yl,
            invoke_iiijiiji: os,
            invoke_iiijji: rs,
            invoke_iiijjiiii: vu,
            invoke_iij: $s,
            invoke_iiji: Qs,
            invoke_iijii: zs,
            invoke_iijiii: $u,
            invoke_iijijijiji: qu,
            invoke_iijj: Ru,
            invoke_iijjjiiii: Cu,
            invoke_iijjjj: Du,
            invoke_iijjjji: Eu,
            invoke_ij: wu,
            invoke_iji: Bu,
            invoke_j: zl,
            invoke_ji: Ql,
            invoke_jii: Bs,
            invoke_jiii: wl,
            invoke_jiiii: Yu,
            invoke_jiiiii: Ys,
            invoke_jiiiiiiii: Vs,
            invoke_jiiiiiji: Xs,
            invoke_jiij: Lu,
            invoke_jij: ru,
            invoke_jj: Mu,
            invoke_v: Tl,
            invoke_vd: ju,
            invoke_vi: $l,
            invoke_vid: au,
            invoke_viddjjii: bu,
            invoke_vif: Ms,
            invoke_viff: Fs,
            invoke_vii: El,
            invoke_viid: yu,
            invoke_viif: Os,
            invoke_viii: Rl,
            invoke_viiii: Pl,
            invoke_viiiii: Ol,
            invoke_viiiiii: Vl,
            invoke_viiiiiidiii: ns,
            invoke_viiiiiii: Ul,
            invoke_viiiiiiiddiii: Jl,
            invoke_viiiiiiii: ql,
            invoke_viiiiiiiii: Wl,
            invoke_viiiiiiiiii: ts,
            invoke_viiiiiiiiiiii: ws,
            invoke_viiiiiiiiiiiii: Fu,
            invoke_viiiiiiiiiiiiiii: ec,
            invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiii: Iu,
            invoke_viiiiiiij: Au,
            invoke_viiiiij: _u,
            invoke_viiiiiji: Gu,
            invoke_viiiij: fu,
            invoke_viiiijiiii: Is,
            invoke_viiij: Pu,
            invoke_viiiji: is,
            invoke_viij: As,
            invoke_viiji: iu,
            invoke_viijii: lu,
            invoke_viijiiii: tu,
            invoke_viijj: Ou,
            invoke_viijjdiii: ss,
            invoke_vij: xs,
            invoke_viji: xu,
            invoke_vijiiiii: jl,
            invoke_vijj: ou,
            invoke_vijji: Su,
            invoke_vjiiiiii: Kl,
            is_participant_known_contact_js: ot,
            llvm_eh_typeid_for: gi,
            loggingCallback_js_sync: Ct,
            memory: V || v.wasmMemory,
            on_call_event_js_sync: Ye,
            patch_abort_for_ml_inference: Ze,
            query_browser_audio_processing_status_js_sync: _t,
            renderVideoFrame_js: at,
            sendSignalingXMPP_js_sync: it,
            set_ml_inference_flag: Je,
            strftime_l: Ri,
            write_persistent_directory_path_js: et,
          },
          Pi = Ue(),
          Ni = Ne("__wasm_call_ctors"),
          Mi = Ne("__cxa_free_exception"),
          wi = (v._malloc = Ne("malloc")),
          Ai = (v._free = Ne("free")),
          Fi = (v._wasm_throw_ml_abort = Ne("wasm_throw_ml_abort")),
          Oi = (v._fflush = Ne("fflush")),
          Bi = Ne("__errno_location"),
          Wi = (v._pthread_self = function () {
            return (Wi = v._pthread_self = H.pthread_self)();
          }),
          qi = Ne("ntohs"),
          Ui = Ne("htonl"),
          Vi = Ne("htons"),
          Hi =
            (v.__ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj =
              Ne(
                "_ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj",
              )),
          Gi =
            (v.__ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj =
              Ne(
                "_ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj",
              )),
          zi = Ne("__cxa_increment_exception_refcount"),
          ji = Ne("__cxa_decrement_exception_refcount"),
          Ki = (v.__emscripten_tls_init = Ne("_emscripten_tls_init")),
          Qi = Ne("emscripten_builtin_memalign"),
          Xi = Ne("__getTypeName"),
          Yi = (v.__embind_initialize_bindings = Ne(
            "_embind_initialize_bindings",
          )),
          Ji = (v.__emscripten_thread_init = Ne("_emscripten_thread_init")),
          Zi = (v.__emscripten_thread_crashed = Ne(
            "_emscripten_thread_crashed",
          )),
          el = Ne("emscripten_main_thread_process_queued_calls"),
          tl = Ne("emscripten_main_runtime_thread_id"),
          nl = Ne("_emscripten_run_in_main_runtime_thread_js"),
          rl = Ne("emscripten_dispatch_to_thread_"),
          ol = function () {
            return (ol = H.emscripten_stack_get_base)();
          },
          al = function () {
            return (al = H.emscripten_stack_get_end)();
          },
          il = Ne("_emscripten_thread_free_data"),
          ll = (v.__emscripten_thread_exit = Ne("_emscripten_thread_exit")),
          sl = (v.__emscripten_check_mailbox = Ne("_emscripten_check_mailbox")),
          ul = Ne("setThrew"),
          cl = Ne("setTempRet0"),
          dl = function () {
            return (dl = H.emscripten_stack_init)();
          },
          ml = function (t, n) {
            return (ml = H.emscripten_stack_set_limits)(t, n);
          },
          pl = function () {
            return (pl = H.emscripten_stack_get_free)();
          },
          _l = Ne("stackSave"),
          fl = Ne("stackRestore"),
          gl = Ne("stackAlloc"),
          hl = function () {
            return (hl = H.emscripten_stack_get_current)();
          },
          yl = (v.___get_exception_message = Ne("__get_exception_message")),
          Cl = Ne("__cxa_can_catch"),
          bl = Ne("__cxa_is_pointer_type"),
          vl = (v.___start_em_js = 1345564),
          Sl = (v.___stop_em_js = 1351551);
        function Rl(e, t, n, r) {
          var o = _l();
          try {
            fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ll(e) {
          var t = _l();
          try {
            return fn(e)();
          } catch (e) {
            if ((fl(t), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function El(e, t, n) {
          var r = _l();
          try {
            fn(e)(t, n);
          } catch (e) {
            if ((fl(r), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function kl(e, t) {
          var n = _l();
          try {
            return fn(e)(t);
          } catch (e) {
            if ((fl(n), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Il(e, t, n) {
          var r = _l();
          try {
            return fn(e)(t, n);
          } catch (e) {
            if ((fl(r), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Tl(e) {
          var t = _l();
          try {
            fn(e)();
          } catch (e) {
            if ((fl(t), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Dl(e, t, n, r) {
          var o = _l();
          try {
            return fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function xl(e, t, n, r, o, a, i) {
          var l = _l();
          try {
            return fn(e)(t, n, r, o, a, i);
          } catch (e) {
            if ((fl(l), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function $l(e, t) {
          var n = _l();
          try {
            fn(e)(t);
          } catch (e) {
            if ((fl(n), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Pl(e, t, n, r, o) {
          var a = _l();
          try {
            fn(e)(t, n, r, o);
          } catch (e) {
            if ((fl(a), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Nl(e, t, n, r, o) {
          var a = _l();
          try {
            return fn(e)(t, n, r, o);
          } catch (e) {
            if ((fl(a), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ml(e, t, n, r, o, a, i, l, s) {
          var u = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s);
          } catch (e) {
            if ((fl(u), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function wl(e, t, n, r) {
          var o = _l();
          try {
            return fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            return (ul(1, 0), BigInt(0));
          }
        }
        function Al(e, t, n, r, o, a, i, l, s, u) {
          var c = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u);
          } catch (e) {
            if ((fl(c), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Fl(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ol(e, t, n, r, o, a) {
          var i = _l();
          try {
            fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Bl(e, t, n, r, o, a) {
          var i = _l();
          try {
            return fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Wl(e, t, n, r, o, a, i, l, s, u) {
          var c = _l();
          try {
            fn(e)(t, n, r, o, a, i, l, s, u);
          } catch (e) {
            if ((fl(c), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ql(e, t, n, r, o, a, i, l, s) {
          var u = _l();
          try {
            fn(e)(t, n, r, o, a, i, l, s);
          } catch (e) {
            if ((fl(u), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ul(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Vl(e, t, n, r, o, a, i) {
          var l = _l();
          try {
            fn(e)(t, n, r, o, a, i);
          } catch (e) {
            if ((fl(l), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Hl(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
          var _ = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p);
          } catch (e) {
            if ((fl(_), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Gl(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h) {
          var y = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h);
          } catch (e) {
            if ((fl(y), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function zl(e) {
          var t = _l();
          try {
            return fn(e)();
          } catch (e) {
            if ((fl(t), !(e instanceof Me))) throw e;
            return (ul(1, 0), BigInt(0));
          }
        }
        function jl(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Kl(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ql(e, t) {
          var n = _l();
          try {
            return fn(e)(t);
          } catch (e) {
            if ((fl(n), !(e instanceof Me))) throw e;
            return (ul(1, 0), BigInt(0));
          }
        }
        function Xl(e, t, n, r, o, a, i, l, s, u, c) {
          var d = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c);
          } catch (e) {
            if ((fl(d), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Yl(e, t, n, r, o, a) {
          var i = _l();
          try {
            return fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Jl(e, t, n, r, o, a, i, l, s, u, c, d, m) {
          var p = _l();
          try {
            fn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
          } catch (e) {
            if ((fl(p), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Zl(e, t, n, r, o) {
          var a = _l();
          try {
            return fn(e)(t, n, r, o);
          } catch (e) {
            if ((fl(a), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function es(e, t, n, r, o, a, i, l, s, u, c, d) {
          var m = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c, d);
          } catch (e) {
            if ((fl(m), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ts(e, t, n, r, o, a, i, l, s, u, c) {
          var d = _l();
          try {
            fn(e)(t, n, r, o, a, i, l, s, u, c);
          } catch (e) {
            if ((fl(d), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ns(e, t, n, r, o, a, i, l, s, u, c) {
          var d = _l();
          try {
            fn(e)(t, n, r, o, a, i, l, s, u, c);
          } catch (e) {
            if ((fl(d), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function rs(e, t, n, r, o, a) {
          var i = _l();
          try {
            return fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function os(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function as(e, t, n, r, o, a, i, l, s) {
          var u = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s);
          } catch (e) {
            if ((fl(u), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function is(e, t, n, r, o, a) {
          var i = _l();
          try {
            fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ls(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
          var g = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
          } catch (e) {
            if ((fl(g), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ss(e, t, n, r, o, a, i, l, s) {
          var u = _l();
          try {
            fn(e)(t, n, r, o, a, i, l, s);
          } catch (e) {
            if ((fl(u), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function us(e, t, n, r, o, a, i, l, s) {
          var u = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s);
          } catch (e) {
            if ((fl(u), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function cs(e, t, n, r, o, a, i, l, s) {
          var u = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s);
          } catch (e) {
            if ((fl(u), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ds(e, t, n, r, o, a, i, l, s, u) {
          var c = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u);
          } catch (e) {
            if ((fl(c), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ms(e, t, n, r, o, a, i, l, s, u, c) {
          var d = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c);
          } catch (e) {
            if ((fl(d), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ps(e, t, n, r, o, a, i, l, s) {
          var u = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s);
          } catch (e) {
            if ((fl(u), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function _s(e, t, n, r, o, a, i, l, s, u) {
          var c = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u);
          } catch (e) {
            if ((fl(c), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function fs(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function gs(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function hs(e, t, n) {
          var r = _l();
          try {
            return fn(e)(t, n);
          } catch (e) {
            if ((fl(r), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ys(e, t, n, r, o, a, i, l, s) {
          var u = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s);
          } catch (e) {
            if ((fl(u), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Cs(e, t, n, r, o, a, i) {
          var l = _l();
          try {
            return fn(e)(t, n, r, o, a, i);
          } catch (e) {
            if ((fl(l), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function bs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
          var f = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
          } catch (e) {
            if ((fl(f), !(e instanceof Me))) throw e;
            ul(1, 0);
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
        ) {
          var S = _l();
          try {
            return fn(e)(
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
            if ((fl(S), !(e instanceof Me))) throw e;
            ul(1, 0);
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
          v,
          S,
          R,
        ) {
          var L = _l();
          try {
            return fn(e)(
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
            if ((fl(L), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Rs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g) {
          var h = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g);
          } catch (e) {
            if ((fl(h), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ls(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Es(
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
          var v = _l();
          try {
            return fn(e)(
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
            if ((fl(v), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ks(e, t, n, r, o, a, i, l, s, u, c, d) {
          var m = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c, d);
          } catch (e) {
            if ((fl(m), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Is(e, t, n, r, o, a, i, l, s, u) {
          var c = _l();
          try {
            fn(e)(t, n, r, o, a, i, l, s, u);
          } catch (e) {
            if ((fl(c), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ts(e, t, n, r, o, a, i, l, s, u, c) {
          var d = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c);
          } catch (e) {
            if ((fl(d), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ds(e, t, n, r, o, a, i, l, s, u, c, d, m) {
          var p = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
          } catch (e) {
            if ((fl(p), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function xs(e, t, n) {
          var r = _l();
          try {
            fn(e)(t, n);
          } catch (e) {
            if ((fl(r), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function $s(e, t, n) {
          var r = _l();
          try {
            return fn(e)(t, n);
          } catch (e) {
            if ((fl(r), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ps(e, t, n, r, o) {
          var a = _l();
          try {
            return fn(e)(t, n, r, o);
          } catch (e) {
            if ((fl(a), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ns(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
          var f = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
          } catch (e) {
            if ((fl(f), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ms(e, t, n) {
          var r = _l();
          try {
            fn(e)(t, n);
          } catch (e) {
            if ((fl(r), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ws(e, t, n, r, o, a, i, l, s, u, c, d, m) {
          var p = _l();
          try {
            fn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
          } catch (e) {
            if ((fl(p), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function As(e, t, n, r) {
          var o = _l();
          try {
            fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Fs(e, t, n, r) {
          var o = _l();
          try {
            fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Os(e, t, n, r) {
          var o = _l();
          try {
            fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Bs(e, t, n) {
          var r = _l();
          try {
            return fn(e)(t, n);
          } catch (e) {
            if ((fl(r), !(e instanceof Me))) throw e;
            return (ul(1, 0), BigInt(0));
          }
        }
        function Ws(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function qs(e, t, n, r) {
          var o = _l();
          try {
            return fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Us(e, t, n, r, o, a, i) {
          var l = _l();
          try {
            return fn(e)(t, n, r, o, a, i);
          } catch (e) {
            if ((fl(l), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Vs(e, t, n, r, o, a, i, l, s) {
          var u = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s);
          } catch (e) {
            if ((fl(u), !(e instanceof Me))) throw e;
            return (ul(1, 0), BigInt(0));
          }
        }
        function Hs(e, t, n, r, o, a, i, l, s) {
          var u = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s);
          } catch (e) {
            if ((fl(u), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Gs(e, t, n, r, o, a, i) {
          var l = _l();
          try {
            return fn(e)(t, n, r, o, a, i);
          } catch (e) {
            if ((fl(l), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function zs(e, t, n, r, o) {
          var a = _l();
          try {
            return fn(e)(t, n, r, o);
          } catch (e) {
            if ((fl(a), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function js(e, t, n, r, o, a, i, l, s, u) {
          var c = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u);
          } catch (e) {
            if ((fl(c), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ks(e, t, n, r, o, a, i, l, s, u, c) {
          var d = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c);
          } catch (e) {
            if ((fl(d), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Qs(e, t, n, r) {
          var o = _l();
          try {
            return fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Xs(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            return (ul(1, 0), BigInt(0));
          }
        }
        function Ys(e, t, n, r, o, a) {
          var i = _l();
          try {
            return fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            return (ul(1, 0), BigInt(0));
          }
        }
        function Js(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
          var g = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
          } catch (e) {
            if ((fl(g), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Zs(e, t) {
          var n = _l();
          try {
            return fn(e)(t);
          } catch (e) {
            if ((fl(n), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function eu(e, t, n, r, o, a, i, l, s, u, c) {
          var d = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c);
          } catch (e) {
            if ((fl(d), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function tu(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function nu(
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
          var b = _l();
          try {
            return fn(e)(
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
            if ((fl(b), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ru(e, t, n) {
          var r = _l();
          try {
            return fn(e)(t, n);
          } catch (e) {
            if ((fl(r), !(e instanceof Me))) throw e;
            return (ul(1, 0), BigInt(0));
          }
        }
        function ou(e, t, n, r) {
          var o = _l();
          try {
            fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function au(e, t, n) {
          var r = _l();
          try {
            fn(e)(t, n);
          } catch (e) {
            if ((fl(r), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function iu(e, t, n, r, o) {
          var a = _l();
          try {
            fn(e)(t, n, r, o);
          } catch (e) {
            if ((fl(a), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function lu(e, t, n, r, o, a) {
          var i = _l();
          try {
            fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function su(e, t, n, r, o, a, i, l, s, u, c) {
          var d = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c);
          } catch (e) {
            if ((fl(d), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function uu(e, t, n, r, o) {
          var a = _l();
          try {
            return fn(e)(t, n, r, o);
          } catch (e) {
            if ((fl(a), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function cu(e, t, n, r) {
          var o = _l();
          try {
            return fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function du(e, t, n, r, o, a) {
          var i = _l();
          try {
            return fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function mu(e, t) {
          var n = _l();
          try {
            return fn(e)(t);
          } catch (e) {
            if ((fl(n), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function pu(e, t, n, r, o) {
          var a = _l();
          try {
            return fn(e)(t, n, r, o);
          } catch (e) {
            if ((fl(a), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function _u(e, t, n, r, o, a, i) {
          var l = _l();
          try {
            fn(e)(t, n, r, o, a, i);
          } catch (e) {
            if ((fl(l), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function fu(e, t, n, r, o, a) {
          var i = _l();
          try {
            fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function gu(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function hu(e, t, n, r, o) {
          var a = _l();
          try {
            return fn(e)(t, n, r, o);
          } catch (e) {
            if ((fl(a), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function yu(e, t, n, r) {
          var o = _l();
          try {
            fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Cu(e, t, n, r, o, a, i, l, s) {
          var u = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s);
          } catch (e) {
            if ((fl(u), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function bu(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function vu(e, t, n, r, o, a, i, l, s) {
          var u = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s);
          } catch (e) {
            if ((fl(u), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Su(e, t, n, r, o) {
          var a = _l();
          try {
            fn(e)(t, n, r, o);
          } catch (e) {
            if ((fl(a), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ru(e, t, n, r) {
          var o = _l();
          try {
            return fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Lu(e, t, n, r) {
          var o = _l();
          try {
            return fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            return (ul(1, 0), BigInt(0));
          }
        }
        function Eu(e, t, n, r, o, a, i) {
          var l = _l();
          try {
            return fn(e)(t, n, r, o, a, i);
          } catch (e) {
            if ((fl(l), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ku(e, t, n, r, o, a, i, l, s, u, c) {
          var d = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c);
          } catch (e) {
            if ((fl(d), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Iu(
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
          var P = _l();
          try {
            fn(e)(
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
            if ((fl(P), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Tu(e, t, n, r) {
          var o = _l();
          try {
            return fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Du(e, t, n, r, o, a) {
          var i = _l();
          try {
            return fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function xu(e, t, n, r) {
          var o = _l();
          try {
            fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function $u(e, t, n, r, o, a) {
          var i = _l();
          try {
            return fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Pu(e, t, n, r, o) {
          var a = _l();
          try {
            fn(e)(t, n, r, o);
          } catch (e) {
            if ((fl(a), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Nu(e, t, n, r, o, a, i) {
          var l = _l();
          try {
            return fn(e)(t, n, r, o, a, i);
          } catch (e) {
            if ((fl(l), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Mu(e, t) {
          var n = _l();
          try {
            return fn(e)(t);
          } catch (e) {
            if ((fl(n), !(e instanceof Me))) throw e;
            return (ul(1, 0), BigInt(0));
          }
        }
        function wu(e, t) {
          var n = _l();
          try {
            return fn(e)(t);
          } catch (e) {
            if ((fl(n), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Au(e, t, n, r, o, a, i, l, s) {
          var u = _l();
          try {
            fn(e)(t, n, r, o, a, i, l, s);
          } catch (e) {
            if ((fl(u), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Fu(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
          var _ = _l();
          try {
            fn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p);
          } catch (e) {
            if ((fl(_), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ou(e, t, n, r, o) {
          var a = _l();
          try {
            fn(e)(t, n, r, o);
          } catch (e) {
            if ((fl(a), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Bu(e, t, n) {
          var r = _l();
          try {
            return fn(e)(t, n);
          } catch (e) {
            if ((fl(r), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Wu(e, t, n, r, o, a) {
          var i = _l();
          try {
            return fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function qu(e, t, n, r, o, a, i, l, s, u) {
          var c = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u);
          } catch (e) {
            if ((fl(c), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Uu(e, t, n, r, o, a, i, l, s, u, c, d, m) {
          var p = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
          } catch (e) {
            if ((fl(p), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Vu(e, t, n, r, o, a, i, l, s, u) {
          var c = _l();
          try {
            return fn(e)(t, n, r, o, a, i, l, s, u);
          } catch (e) {
            if ((fl(c), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Hu(e, t, n) {
          var r = _l();
          try {
            return fn(e)(t, n);
          } catch (e) {
            if ((fl(r), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Gu(e, t, n, r, o, a, i, l) {
          var s = _l();
          try {
            fn(e)(t, n, r, o, a, i, l);
          } catch (e) {
            if ((fl(s), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function zu(e, t, n, r, o, a) {
          var i = _l();
          try {
            return fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ju(e, t) {
          var n = _l();
          try {
            fn(e)(t);
          } catch (e) {
            if ((fl(n), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Ku(e) {
          var t = _l();
          try {
            return fn(e)();
          } catch (e) {
            if ((fl(t), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Qu(e, t, n, r) {
          var o = _l();
          try {
            return fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Xu(e, t, n, r, o, a) {
          var i = _l();
          try {
            return fn(e)(t, n, r, o, a);
          } catch (e) {
            if ((fl(i), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Yu(e, t, n, r, o) {
          var a = _l();
          try {
            return fn(e)(t, n, r, o);
          } catch (e) {
            if ((fl(a), !(e instanceof Me))) throw e;
            return (ul(1, 0), BigInt(0));
          }
        }
        function Ju(e, t, n, r) {
          var o = _l();
          try {
            return fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function Zu(e, t, n, r) {
          var o = _l();
          try {
            return fn(e)(t, n, r);
          } catch (e) {
            if ((fl(o), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        function ec(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
          var g = _l();
          try {
            fn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
          } catch (e) {
            if ((fl(g), !(e instanceof Me))) throw e;
            ul(1, 0);
          }
        }
        ((v.keepRuntimeAlive = fe),
          (v.wasmMemory = V),
          (v.GROWABLE_HEAP_U8 = d),
          (v.GROWABLE_HEAP_F32 = C),
          (v.ExitStatus = bt),
          (v.FS = Zt),
          (v.PThread = sn),
          (v.registeredTypes = ur));
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
        tc.forEach(je);
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
        nc.forEach(Ke);
        var rc;
        Le = function e() {
          (rc || ac(), rc || (Le = e));
        };
        function oc() {
          (K(!P), dl(), se());
        }
        function ac() {
          if (Se > 0) return;
          if ((P || oc(), P)) {
            (S(v), he(), startWorker(v));
            return;
          }
          if ((ge(), Se > 0)) return;
          function e() {
            rc ||
              ((rc = !0),
              (v.calledRun = !0),
              !z &&
                (he(),
                S(v),
                v.onRuntimeInitialized && v.onRuntimeInitialized(),
                K(
                  !v._main,
                  'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]',
                ),
                ye()));
          }
          (v.setStatus
            ? (v.setStatus("Running..."),
              setTimeout(function () {
                (setTimeout(function () {
                  v.setStatus("");
                }, 1),
                  e());
              }, 1))
            : e(),
            ue());
        }
        function ic() {
          var e = B,
            t = W,
            n = !1;
          B = W = function (t) {
            n = !0;
          };
          try {
            (Oi(0),
              ["stdout", "stderr"].forEach(function (e) {
                var t = Zt.analyzePath("/dev/" + e);
                if (t) {
                  var r = t.object,
                    o = r.rdev,
                    a = Ot.ttys[o];
                  a && a.output && a.output.length && (n = !0);
                }
              }));
          } catch (e) {}
          ((B = e),
            (W = t),
            n &&
              yn(
                "stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.",
              ));
        }
        if (v.preInit)
          for (
            typeof v.preInit == "function" && (v.preInit = [v.preInit]);
            v.preInit.length > 0;
          )
            v.preInit.pop()();
        return (ac(), a.ready);
      };
    })();
    ((C.BUILD_SHA = c),
      typeof l == "object" && typeof i == "object"
        ? (i.exports = C)
        : typeof define == "function" &&
          define.amd &&
          define([], function () {
            return C;
          }),
      (C.PINNED_WORKER_GLUE_BX_ERROR = p));
  },
  34,
);
