__d(
  "ls_voprf_utils_v2",
  ["Promise"],
  function $module_ls_voprf_utils_v2(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    var _require_closure_Promise;

    var Module = (function () {
      var _scriptDir =
        typeof document !== "undefined" && document.currentScript
          ? document.currentScript.src
          : undefined;

      return function (moduleArg) {
        if (moduleArg === void 0) {
          moduleArg = {};
        }

        var Module = moduleArg;
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new (
          _require_closure_Promise ||
          (_require_closure_Promise = require("Promise"))
        )(function (resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        [
          "_main",
          "getExceptionMessage",
          "___get_exception_message",
          "_free",
          "_memory",
          "_curve_create",
          "_curve_free",
          "_curve_init_ristretto",
          "_get_curve_element_bytes",
          "_get_curve_scalar_bytes",
          "_kdf_create",
          "_kdf_free",
          "_kdf_init_naor_reingold",
          "_sodiumInit",
          "_voprf_create",
          "_voprf_free",
          "_voprf_init_exp_twohashdh",
          "_blind",
          "_verifiable_unblind",
          "_voprf_client_finalize",
          "_voprf_setup",
          "_voprf_evaluate",
          "_voprf_server_finalize",
          "_get_voprf_final_evaluation_bytes",
          "___indirect_function_table",
          "__embind_initialize_bindings",
          "_fflush",
          "___start_em_asm",
          "___stop_em_asm",
          "onRuntimeInitialized",
        ].forEach(function (prop) {
          if (!Object.getOwnPropertyDescriptor(Module["ready"], prop)) {
            Object.defineProperty(Module["ready"], prop, {
              get: function get() {
                return abort(
                  "You are getting " +
                    prop +
                    " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                );
              },
              set: function set() {
                return abort(
                  "You are setting " +
                    prop +
                    " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                );
              },
            });
          }
        });
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = function quit_(status, toThrow) {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = true;
        var ENVIRONMENT_IS_WORKER = false;
        var ENVIRONMENT_IS_NODE = false;
        var ENVIRONMENT_IS_SHELL = false;
        if (Module["ENVIRONMENT"]) {
          throw new Error(
            "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)",
          );
        }
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module["locateFile"]) {
            return Module["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        if (typeof document != "undefined" && document.currentScript) {
          scriptDirectory = document.currentScript.src;
        }
        if (_scriptDir) {
          scriptDirectory = _scriptDir;
        }
        if (scriptDirectory.indexOf("blob:") !== 0) {
          scriptDirectory = scriptDirectory.substr(
            0,
            scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1,
          );
        } else {
          scriptDirectory = "";
        }
        if (!(typeof window == "object" || typeof importScripts == "function"))
          throw new Error(
            "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
          );
        {
          read_ = function read_(url) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.send(null);
            return xhr.responseText;
          };
          readAsync = function readAsync(url, onload, onerror) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = function () {
              if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
                onload(xhr.response);
                return;
              }
              onerror();
            };
            xhr.onerror = onerror;
            xhr.send(null);
          };
        }
        setWindowTitle = function setWindowTitle(title) {
          return (document.title = title);
        };
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.error.bind(console);
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        checkIncomingModuleAPI();
        if (Module["arguments"]) arguments_ = Module["arguments"];
        legacyModuleProp("arguments", "arguments_");
        if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
        legacyModuleProp("thisProgram", "thisProgram");
        if (Module["quit"]) quit_ = Module["quit"];
        legacyModuleProp("quit", "quit_");
        assert(
          typeof Module["memoryInitializerPrefixURL"] == "undefined",
          "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead",
        );
        assert(
          typeof Module["pthreadMainPrefixURL"] == "undefined",
          "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead",
        );
        assert(
          typeof Module["cdInitializerPrefixURL"] == "undefined",
          "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead",
        );
        assert(
          typeof Module["filePackagePrefixURL"] == "undefined",
          "Module.filePackagePrefixURL option was removed, use Module.locateFile instead",
        );
        assert(
          typeof Module["read"] == "undefined",
          "Module.read option was removed (modify read_ in JS)",
        );
        assert(
          typeof Module["readAsync"] == "undefined",
          "Module.readAsync option was removed (modify readAsync in JS)",
        );
        assert(
          typeof Module["readBinary"] == "undefined",
          "Module.readBinary option was removed (modify readBinary in JS)",
        );
        assert(
          typeof Module["setWindowTitle"] == "undefined",
          "Module.setWindowTitle option was removed (modify setWindowTitle in JS)",
        );
        assert(
          typeof Module["TOTAL_MEMORY"] == "undefined",
          "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY",
        );
        legacyModuleProp("asm", "wasmExports");
        legacyModuleProp("read", "read_");
        legacyModuleProp("readAsync", "readAsync");
        legacyModuleProp("readBinary", "readBinary");
        legacyModuleProp("setWindowTitle", "setWindowTitle");
        assert(
          !ENVIRONMENT_IS_WORKER,
          "worker environment detected but not enabled at build time.  Add 'worker' to `-sENVIRONMENT` to enable.",
        );
        assert(
          !ENVIRONMENT_IS_NODE,
          "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.",
        );
        assert(
          !ENVIRONMENT_IS_SHELL,
          "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.",
        );
        var wasmBinary;
        if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
        legacyModuleProp("wasmBinary", "wasmBinary");
        var noExitRuntime = Module["noExitRuntime"] || true;
        legacyModuleProp("noExitRuntime", "noExitRuntime");
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var wasmExports;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort("Assertion failed" + (text ? ": " + text : ""));
          }
        }
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() {
          var b = wasmMemory.buffer;
          Module["HEAP8"] = HEAP8 = new Int8Array(b);
          Module["HEAP16"] = HEAP16 = new Int16Array(b);
          Module["HEAP32"] = HEAP32 = new Int32Array(b);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
          Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
          Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
          Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
          Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
        }
        assert(
          !Module["STACK_SIZE"],
          "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time",
        );
        assert(
          typeof Int32Array != "undefined" &&
            typeof Float64Array !== "undefined" &&
            Int32Array.prototype.subarray != undefined &&
            Int32Array.prototype.set != undefined,
          "JS engine does not provide full typed array support",
        );
        assert(
          !Module["wasmMemory"],
          "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally",
        );
        assert(
          !Module["INITIAL_MEMORY"],
          "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically",
        );
        var wasmTable;
        function writeStackCookie() {
          var max = _emscripten_stack_get_end2();
          assert((max & 3) == 0);
          if (max == 0) {
            max += 4;
          }
          HEAPU32[max >> 2] = 34821223;
          HEAPU32[(max + 4) >> 2] = 2310721022;
          HEAPU32[0 >> 2] = 1668509029;
        }
        function checkStackCookie() {
          if (ABORT) return;
          var max = _emscripten_stack_get_end2();
          if (max == 0) {
            max += 4;
          }
          var cookie1 = HEAPU32[max >> 2];
          var cookie2 = HEAPU32[(max + 4) >> 2];
          if (cookie1 != 34821223 || cookie2 != 2310721022) {
            abort(
              "Stack overflow! Stack cookie has been overwritten at " +
                ptrToString(max) +
                ", expected hex dwords 0x89BACDFE and 0x2135467, but received " +
                ptrToString(cookie2) +
                " " +
                ptrToString(cookie1),
            );
          }
          if (HEAPU32[0 >> 2] != 1668509029) {
            abort(
              "Runtime error: The application has corrupted its heap memory area (address zero)!",
            );
          }
        }
        (function () {
          var h16 = new Int16Array(1);
          var h8 = new Int8Array(h16.buffer);
          h16[0] = 25459;
          if (h8[0] !== 115 || h8[1] !== 99)
            throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
        })();
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        var runtimeKeepaliveCounter = 0;
        function preRun() {
          if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function")
              Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
              addOnPreRun(Module["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          assert(!runtimeInitialized);
          runtimeInitialized = true;
          checkStackCookie();
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          checkStackCookie();
          if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function")
              Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
              addOnPostRun(Module["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        assert(
          Math.imul,
          "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
        );
        assert(
          Math.fround,
          "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
        );
        assert(
          Math.clz32,
          "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
        );
        assert(
          Math.trunc,
          "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
        );
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        var runDependencyTracking = {};
        function addRunDependency(id) {
          runDependencies++;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
          if (id) {
            assert(!runDependencyTracking[id]);
            runDependencyTracking[id] = 1;
            if (
              runDependencyWatcher === null &&
              typeof setInterval != "undefined"
            ) {
              runDependencyWatcher = setInterval(function () {
                if (ABORT) {
                  clearInterval(runDependencyWatcher);
                  runDependencyWatcher = null;
                  return;
                }
                var shown = false;
                for (var dep in runDependencyTracking) {
                  if (!shown) {
                    shown = true;
                    err("still waiting on run dependencies:");
                  }
                  err("dependency: " + dep);
                }
                if (shown) {
                  err("(end of list)");
                }
              }, 1e4);
            }
          } else {
            err("warning: run dependency added without ID");
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
          if (id) {
            assert(runDependencyTracking[id]);
            delete runDependencyTracking[id];
          } else {
            err("warning: run dependency removed without ID");
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module["onAbort"]) {
            Module["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var FS = {
          error: function error() {
            abort(
              "Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM",
            );
          },
          init: function init() {
            FS.error();
          },
          createDataFile: function createDataFile() {
            FS.error();
          },
          createPreloadedFile: function createPreloadedFile() {
            FS.error();
          },
          createLazyFile: function createLazyFile() {
            FS.error();
          },
          open: function open() {
            FS.error();
          },
          mkdev: function mkdev() {
            FS.error();
          },
          registerDevice: function registerDevice() {
            FS.error();
          },
          analyzePath: function analyzePath() {
            FS.error();
          },
          ErrnoError: function ErrnoError() {
            FS.error();
          },
        };
        Module["FS_createDataFile"] = FS.createDataFile;
        Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        function isFileURI(filename) {
          return filename.startsWith("file://");
        }
        function createExportWrapper(name) {
          return function () {
            assert(
              runtimeInitialized,
              "native function `" +
                name +
                "` called before runtime initialization",
            );
            var f = wasmExports[name];
            assert(f, "exported native function `" + name + "` not found");
            return f.apply(null, arguments);
          };
        }
        var _EmscriptenEH3 = (function (_Error) {
          "use strict";
          function EmscriptenEH() {
            return _Error.apply(this, arguments) || this;
          }
          babelHelpers.inheritsLoose(EmscriptenEH, _Error);
          return EmscriptenEH;
        })(babelHelpers.wrapNativeSuper(Error));
        var _EmscriptenSjLj = (function (_EmscriptenEH) {
          "use strict";
          function EmscriptenSjLj() {
            return _EmscriptenEH.apply(this, arguments) || this;
          }
          babelHelpers.inheritsLoose(EmscriptenSjLj, _EmscriptenEH);
          return EmscriptenSjLj;
        })(_EmscriptenEH3);
        var _CppException = (function (_EmscriptenEH2) {
          "use strict";
          function CppException(excPtr) {
            var _this;
            _this = _EmscriptenEH2.call(this, excPtr) || this;
            _this.excPtr = excPtr;
            var excInfo = getExceptionMessage(excPtr);
            _this.name = excInfo[0];
            _this.message = excInfo[1];
            return _this;
          }
          babelHelpers.inheritsLoose(CppException, _EmscriptenEH2);
          return CppException;
        })(_EmscriptenEH3);
        var wasmBinaryFile;
        wasmBinaryFile = "crypto_utils_v2.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinarySync(file) {
          if (file == wasmBinaryFile && wasmBinary) {
            return new Uint8Array(wasmBinary);
          }
          if (readBinary) {
            return readBinary(file);
          }
          throw "both async and sync fetching of the wasm failed";
        }
        function getBinaryPromise(binaryFile) {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function") {
              return fetch(binaryFile, { credentials: "same-origin" })
                .then(function (response) {
                  if (!response["ok"]) {
                    throw (
                      "failed to load wasm binary file at '" + binaryFile + "'"
                    );
                  }
                  return response["arrayBuffer"]();
                })
                ["catch"](function () {
                  return getBinarySync(binaryFile);
                });
            }
          }
          return (
            _require_closure_Promise ||
            (_require_closure_Promise = require("Promise"))
          )
            .resolve()
            .then(function () {
              return getBinarySync(binaryFile);
            });
        }
        function instantiateArrayBuffer(binaryFile, imports, receiver) {
          return getBinaryPromise(binaryFile)
            .then(function (binary) {
              return WebAssembly.instantiate(binary, imports);
            })
            .then(function (instance) {
              return instance;
            })
            .then(receiver, function (reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              if (isFileURI(wasmBinaryFile)) {
                err(
                  "warning: Loading from a file URI (" +
                    wasmBinaryFile +
                    ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing",
                );
              }
              abort(reason);
            });
        }
        function instantiateAsync(binary, binaryFile, imports, callback) {
          if (
            !binary &&
            typeof WebAssembly.instantiateStreaming == "function" &&
            !isDataURI(binaryFile) &&
            typeof fetch == "function"
          ) {
            return fetch(binaryFile, { credentials: "same-origin" }).then(
              function (response) {
                var result = WebAssembly.instantiateStreaming(
                  response,
                  imports,
                );
                return result.then(callback, function (reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                });
              },
            );
          }
          return instantiateArrayBuffer(binaryFile, imports, callback);
        }
        function createWasm() {
          var info = { env: wasmImports, wasi_snapshot_preview1: wasmImports };
          function receiveInstance(instance, module) {
            var exports = instance.exports;
            wasmExports = exports;
            wasmMemory = wasmExports["memory"];
            Module["wasmMemory"] = wasmMemory;
            assert(wasmMemory, "memory not found in wasm exports");
            updateMemoryViews();
            wasmTable = wasmExports["__indirect_function_table"];
            assert(wasmTable, "table not found in wasm exports");
            addOnInit(wasmExports["__wasm_call_ctors"]);
            removeRunDependency("wasm-instantiate");
            return exports;
          }
          addRunDependency("wasm-instantiate");
          var trueModule = Module;
          function receiveInstantiationResult(result) {
            assert(
              Module === trueModule,
              "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?",
            );
            trueModule = null;
            receiveInstance(result["instance"]);
          }
          if (Module["instantiateWasm"]) {
            try {
              return Module["instantiateWasm"](info, receiveInstance);
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync(
            wasmBinary,
            wasmBinaryFile,
            info,
            receiveInstantiationResult,
          )["catch"](readyPromiseReject);
          return {};
        }
        function legacyModuleProp(prop, newName, incomming) {
          if (incomming === void 0) {
            incomming = true;
          }
          if (!Object.getOwnPropertyDescriptor(Module, prop)) {
            Object.defineProperty(Module, prop, {
              configurable: true,
              get: function get() {
                var extra = incomming
                  ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
                  : "";
                abort(
                  "`Module." +
                    prop +
                    "` has been replaced by `" +
                    newName +
                    "`" +
                    extra,
                );
              },
            });
          }
        }
        function ignoredModuleProp(prop) {
          if (Object.getOwnPropertyDescriptor(Module, prop)) {
            abort(
              "`Module." +
                prop +
                "` was supplied but `" +
                prop +
                "` not included in INCOMING_MODULE_JS_API",
            );
          }
        }
        function isExportedByForceFilesystem(name) {
          return (
            name === "FS_createPath" ||
            name === "FS_createDataFile" ||
            name === "FS_createPreloadedFile" ||
            name === "FS_unlink" ||
            name === "addRunDependency" ||
            name === "FS_createLazyFile" ||
            name === "FS_createDevice" ||
            name === "removeRunDependency"
          );
        }
        function missingGlobal(sym, msg) {
          if (typeof globalThis !== "undefined") {
            Object.defineProperty(globalThis, sym, {
              configurable: true,
              get: function get() {
                _warnOnce(
                  "`" + sym + "` is not longer defined by emscripten. " + msg,
                );
                return undefined;
              },
            });
          }
        }
        missingGlobal("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
        function missingLibrarySymbol(sym) {
          if (
            typeof globalThis !== "undefined" &&
            !Object.getOwnPropertyDescriptor(globalThis, sym)
          ) {
            Object.defineProperty(globalThis, sym, {
              configurable: true,
              get: function get() {
                var msg =
                  "`" +
                  sym +
                  "` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line";
                var librarySymbol = sym;
                if (!librarySymbol.startsWith("_")) {
                  librarySymbol = "$" + sym;
                }
                msg +=
                  " (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='" +
                  librarySymbol +
                  "')";
                if (isExportedByForceFilesystem(sym)) {
                  msg +=
                    ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
                }
                _warnOnce(msg);
                return undefined;
              },
            });
          }
          unexportedRuntimeSymbol(sym);
        }
        function unexportedRuntimeSymbol(sym) {
          if (!Object.getOwnPropertyDescriptor(Module, sym)) {
            Object.defineProperty(Module, sym, {
              configurable: true,
              get: function get() {
                var msg =
                  "'" +
                  sym +
                  "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)";
                if (isExportedByForceFilesystem(sym)) {
                  msg +=
                    ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
                }
                abort(msg);
              },
            });
          }
        }
        var ASM_CONSTS = {
          50356: function _() {
            return Module.getRandomValue();
          },
          50392: function _() {
            if (Module.getRandomValue === undefined) {
              try {
                var window_ = "object" === typeof window ? window : self;
                var crypto_ =
                  typeof window_.crypto !== "undefined"
                    ? window_.crypto
                    : window_.msCrypto;
                var randomValuesStandard = function randomValuesStandard() {
                  var buf = new Uint32Array(1);
                  crypto_.getRandomValues(buf);
                  return buf[0] >>> 0;
                };
                randomValuesStandard();
                Module.getRandomValue = randomValuesStandard;
              } catch (e) {
                {
                  throw "No secure random number generator found";
                }
              }
            }
          },
        };
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        var callRuntimeCallbacks = function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module);
          }
        };
        var withStackSave = function withStackSave(f) {
          var stack = stackSave();
          var ret = f();
          stackRestore(stack);
          return ret;
        };
        var UTF8Decoder =
          typeof TextDecoder != "undefined"
            ? new TextDecoder("utf8")
            : undefined;
        var UTF8ArrayToString = function UTF8ArrayToString(
          heapOrArray,
          idx,
          maxBytesToRead,
        ) {
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
          if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
          }
          var str = "";
          while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode(((u0 & 31) << 6) | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
            } else {
              if ((u0 & 248) != 240)
                _warnOnce(
                  "Invalid UTF-8 leading byte " +
                    ptrToString(u0) +
                    " encountered when deserializing a UTF-8 string in wasm memory to a JS string!",
                );
              u0 =
                ((u0 & 7) << 18) |
                (u1 << 12) |
                (u2 << 6) |
                (heapOrArray[idx++] & 63);
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            }
          }
          return str;
        };
        var UTF8ToString = function UTF8ToString(ptr, maxBytesToRead) {
          assert(typeof ptr == "number");
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        };
        var getExceptionMessageCommon = function getExceptionMessageCommon(
          ptr,
        ) {
          return withStackSave(function () {
            var type_addr_addr = stackAlloc(4);
            var message_addr_addr = stackAlloc(4);
            ___get_exception_message(ptr, type_addr_addr, message_addr_addr);
            var type_addr = HEAPU32[type_addr_addr >> 2];
            var message_addr = HEAPU32[message_addr_addr >> 2];
            var type = UTF8ToString(type_addr);
            _free(type_addr);
            var message;
            if (message_addr) {
              message = UTF8ToString(message_addr);
              _free(message_addr);
            }
            return [type, message];
          });
        };
        function getExceptionMessage(ptr) {
          return getExceptionMessageCommon(ptr);
        }
        Module["getExceptionMessage"] = getExceptionMessage;
        function getValue(ptr, type) {
          if (type === void 0) {
            type = "i8";
          }
          if (type.endsWith("*")) type = "*";
          switch (type) {
            case "i1":
              return HEAP8[ptr >> 0];
            case "i8":
              return HEAP8[ptr >> 0];
            case "i16":
              return HEAP16[ptr >> 1];
            case "i32":
              return HEAP32[ptr >> 2];
            case "i64":
              abort("to do getValue(i64) use WASM_BIGINT");
            case "float":
              return HEAPF32[ptr >> 2];
            case "double":
              return HEAPF64[ptr >> 3];
            case "*":
              return HEAPU32[ptr >> 2];
            default:
              abort("invalid type for getValue: " + type);
          }
        }
        var ptrToString = function ptrToString(ptr) {
          assert(typeof ptr === "number");
          ptr >>>= 0;
          return "0x" + ptr.toString(16).padStart(8, "0");
        };
        var _warnOnce = function warnOnce(text) {
          if (!_warnOnce.shown) _warnOnce.shown = {};
          if (!_warnOnce.shown[text]) {
            _warnOnce.shown[text] = 1;
            err(text);
          }
        };
        var ___assert_fail = function ___assert_fail(
          condition,
          filename,
          line,
          func,
        ) {
          abort(
            "Assertion failed: " +
              UTF8ToString(condition) +
              ", at: " +
              [
                filename ? UTF8ToString(filename) : "unknown filename",
                line,
                func ? UTF8ToString(func) : "unknown function",
              ],
          );
        };
        var exceptionCaught = [];
        var uncaughtExceptionCount = 0;
        function ___cxa_begin_catch(ptr) {
          var info = new ExceptionInfo(ptr);
          if (!info.get_caught()) {
            info.set_caught(true);
            uncaughtExceptionCount--;
          }
          info.set_rethrown(false);
          exceptionCaught.push(info);
          ___cxa_increment_exception_refcount(info.excPtr);
          return info.get_exception_ptr();
        }
        var exceptionLast = 0;
        function ExceptionInfo(excPtr) {
          this.excPtr = excPtr;
          this.ptr = excPtr - 24;
          this.set_type = function (type) {
            HEAPU32[(this.ptr + 4) >> 2] = type;
          };
          this.get_type = function () {
            return HEAPU32[(this.ptr + 4) >> 2];
          };
          this.set_destructor = function (destructor) {
            HEAPU32[(this.ptr + 8) >> 2] = destructor;
          };
          this.get_destructor = function () {
            return HEAPU32[(this.ptr + 8) >> 2];
          };
          this.set_caught = function (caught) {
            caught = caught ? 1 : 0;
            HEAP8[(this.ptr + 12) >> 0] = caught;
          };
          this.get_caught = function () {
            return HEAP8[(this.ptr + 12) >> 0] != 0;
          };
          this.set_rethrown = function (rethrown) {
            rethrown = rethrown ? 1 : 0;
            HEAP8[(this.ptr + 13) >> 0] = rethrown;
          };
          this.get_rethrown = function () {
            return HEAP8[(this.ptr + 13) >> 0] != 0;
          };
          this.init = function (type, destructor) {
            this.set_adjusted_ptr(0);
            this.set_type(type);
            this.set_destructor(destructor);
          };
          this.set_adjusted_ptr = function (adjustedPtr) {
            HEAPU32[(this.ptr + 16) >> 2] = adjustedPtr;
          };
          this.get_adjusted_ptr = function () {
            return HEAPU32[(this.ptr + 16) >> 2];
          };
          this.get_exception_ptr = function () {
            var isPointer = ___cxa_is_pointer_type(this.get_type());
            if (isPointer) {
              return HEAPU32[this.excPtr >> 2];
            }
            var adjusted = this.get_adjusted_ptr();
            if (adjusted !== 0) return adjusted;
            return this.excPtr;
          };
        }
        function ___resumeException(ptr) {
          if (!exceptionLast) {
            exceptionLast = new _CppException(ptr);
          }
          throw exceptionLast;
        }
        var findMatchingCatch = function findMatchingCatch(args) {
          var thrown = exceptionLast && exceptionLast.excPtr;
          if (!thrown) {
            setTempRet0(0);
            return 0;
          }
          var info = new ExceptionInfo(thrown);
          info.set_adjusted_ptr(thrown);
          var thrownType = info.get_type();
          if (!thrownType) {
            setTempRet0(0);
            return thrown;
          }
          for (var arg in args) {
            var caughtType = args[arg];
            if (caughtType === 0 || caughtType === thrownType) {
              break;
            }
            var adjusted_ptr_addr = info.ptr + 16;
            if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
              setTempRet0(caughtType);
              return thrown;
            }
          }
          setTempRet0(thrownType);
          return thrown;
        };
        var ___cxa_find_matching_catch_2 =
          function ___cxa_find_matching_catch_2() {
            return findMatchingCatch([]);
          };
        var ___cxa_find_matching_catch_3 =
          function ___cxa_find_matching_catch_3(arg0) {
            return findMatchingCatch([arg0]);
          };
        function __embind_register_bigint(
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) {}
        function getShiftFromSize(size) {
          switch (size) {
            case 1:
              return 0;
            case 2:
              return 1;
            case 4:
              return 2;
            case 8:
              return 3;
            default:
              throw new TypeError("Unknown type size: " + size);
          }
        }
        function embind_init_charCodes() {
          var codes = new Array(256);
          for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
          }
          embind_charCodes = codes;
        }
        var embind_charCodes = undefined;
        function readLatin1String(ptr) {
          var ret = "";
          var c = ptr;
          while (HEAPU8[c]) {
            ret += embind_charCodes[HEAPU8[c++]];
          }
          return ret;
        }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var BindingError = undefined;
        function throwBindingError(message) {
          throw new BindingError(message);
        }
        var InternalError = undefined;
        function throwInternalError(message) {
          throw new InternalError(message);
        }
        function sharedRegisterType(rawType, registeredInstance, options) {
          if (options === void 0) {
            options = {};
          }
          var name = registeredInstance.name;
          if (!rawType) {
            throwBindingError(
              'type "' + name + '" must have a positive integer typeid pointer',
            );
          }
          if (Object.prototype.hasOwnProperty.call(registeredTypes, rawType)) {
            if (options.ignoreDuplicateRegistrations) {
              return;
            } else {
              throwBindingError("Cannot register type '" + name + "' twice");
            }
          }
          registeredTypes[rawType] = registeredInstance;
          delete typeDependencies[rawType];
          if (
            Object.prototype.hasOwnProperty.call(awaitingDependencies, rawType)
          ) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach(function (cb) {
              return cb();
            });
          }
        }
        function registerType(rawType, registeredInstance, options) {
          if (options === void 0) {
            options = {};
          }
          if (!("argPackAdvance" in registeredInstance)) {
            throw new TypeError(
              "registerType registeredInstance requires argPackAdvance",
            );
          }
          return sharedRegisterType(rawType, registeredInstance, options);
        }
        function __embind_register_bool(
          rawType,
          name,
          size,
          trueValue,
          falseValue,
        ) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name: name,
            fromWireType: function fromWireType(wt) {
              return !!wt;
            },
            toWireType: function toWireType(destructors, o) {
              return o ? trueValue : falseValue;
            },
            argPackAdvance: 8,
            readValueFromPointer: function readValueFromPointer(pointer) {
              var heap;
              if (size === 1) {
                heap = HEAP8;
              } else if (size === 2) {
                heap = HEAP16;
              } else if (size === 4) {
                heap = HEAP32;
              } else {
                throw new TypeError("Unknown boolean type size: " + name);
              }
              return this["fromWireType"](heap[pointer >> shift]);
            },
            destructorFunction: null,
          });
        }
        function handleAllocatorInit() {
          Object.assign(HandleAllocator.prototype, {
            get: function get(id) {
              assert(this.allocated[id] !== undefined, "invalid handle: " + id);
              return this.allocated[id];
            },
            has: function has(id) {
              return this.allocated[id] !== undefined;
            },
            allocate: function allocate(handle) {
              var id = this.freelist.pop() || this.allocated.length;
              this.allocated[id] = handle;
              return id;
            },
            free: function free(id) {
              assert(this.allocated[id] !== undefined);
              this.allocated[id] = undefined;
              this.freelist.push(id);
            },
          });
        }
        function HandleAllocator() {
          this.allocated = [undefined];
          this.freelist = [];
        }
        var emval_handles = new HandleAllocator();
        function __emval_decref(handle) {
          if (
            handle >= emval_handles.reserved &&
            0 === --emval_handles.get(handle).refcount
          ) {
            emval_handles.free(handle);
          }
        }
        function count_emval_handles() {
          var count = 0;
          for (
            var i = emval_handles.reserved;
            i < emval_handles.allocated.length;
            ++i
          ) {
            if (emval_handles.allocated[i] !== undefined) {
              ++count;
            }
          }
          return count;
        }
        function init_emval() {
          emval_handles.allocated.push(
            { value: undefined },
            { value: null },
            { value: true },
            { value: false },
          );
          emval_handles.reserved = emval_handles.allocated.length;
          Module["count_emval_handles"] = count_emval_handles;
        }
        var Emval = {
          toValue: function toValue(handle) {
            if (!handle) {
              throwBindingError("Cannot use deleted val. handle = " + handle);
            }
            return emval_handles.get(handle).value;
          },
          toHandle: function toHandle(value) {
            switch (value) {
              case undefined:
                return 1;
              case null:
                return 2;
              case true:
                return 3;
              case false:
                return 4;
              default: {
                return emval_handles.allocate({ refcount: 1, value: value });
              }
            }
          },
        };
        function simpleReadValueFromPointer(pointer) {
          return this["fromWireType"](HEAP32[pointer >> 2]);
        }
        function __embind_register_emval(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            name: name,
            fromWireType: function fromWireType(handle) {
              var rv = Emval.toValue(handle);
              __emval_decref(handle);
              return rv;
            },
            toWireType: function toWireType(destructors, value) {
              return Emval.toHandle(value);
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: null,
          });
        }
        function embindRepr(v) {
          if (v === null) {
            return "null";
          }
          var t = typeof v;
          if (t === "object" || t === "array" || t === "function") {
            return v.toString();
          } else {
            return "" + v;
          }
        }
        function floatReadValueFromPointer(name, shift) {
          switch (shift) {
            case 2:
              return function (pointer) {
                return this["fromWireType"](HEAPF32[pointer >> 2]);
              };
            case 3:
              return function (pointer) {
                return this["fromWireType"](HEAPF64[pointer >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + name);
          }
        }
        function __embind_register_float(rawType, name, size) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name: name,
            fromWireType: function fromWireType(value) {
              return value;
            },
            toWireType: function toWireType(destructors, value) {
              if (typeof value != "number" && typeof value != "boolean") {
                throw new TypeError(
                  "Cannot convert " + embindRepr(value) + " to " + this.name,
                );
              }
              return value;
            },
            argPackAdvance: 8,
            readValueFromPointer: floatReadValueFromPointer(name, shift),
            destructorFunction: null,
          });
        }
        function integerReadValueFromPointer(name, shift, signed) {
          switch (shift) {
            case 0:
              return signed
                ? function readS8FromPointer(pointer) {
                    return HEAP8[pointer];
                  }
                : function readU8FromPointer(pointer) {
                    return HEAPU8[pointer];
                  };
            case 1:
              return signed
                ? function readS16FromPointer(pointer) {
                    return HEAP16[pointer >> 1];
                  }
                : function readU16FromPointer(pointer) {
                    return HEAPU16[pointer >> 1];
                  };
            case 2:
              return signed
                ? function readS32FromPointer(pointer) {
                    return HEAP32[pointer >> 2];
                  }
                : function readU32FromPointer(pointer) {
                    return HEAPU32[pointer >> 2];
                  };
            default:
              throw new TypeError("Unknown integer type: " + name);
          }
        }
        function __embind_register_integer(
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) {
          name = readLatin1String(name);
          if (maxRange === -1) {
            maxRange = 4294967295;
          }
          var shift = getShiftFromSize(size);
          var fromWireType = function fromWireType(value) {
            return value;
          };
          if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = function fromWireType(value) {
              return (value << bitshift) >>> bitshift;
            };
          }
          var isUnsignedType = name.includes("unsigned");
          var checkAssertions = function checkAssertions(value, toTypeName) {
            if (typeof value != "number" && typeof value != "boolean") {
              throw new TypeError(
                'Cannot convert "' + embindRepr(value) + '" to ' + toTypeName,
              );
            }
            if (value < minRange || value > maxRange) {
              throw new TypeError(
                'Passing a number "' +
                  embindRepr(value) +
                  '" from JS side to C/C++ side to an argument of type "' +
                  name +
                  '", which is outside the valid range [' +
                  minRange +
                  ", " +
                  maxRange +
                  "]!",
              );
            }
          };
          var toWireType;
          if (isUnsignedType) {
            toWireType = function toWireType(destructors, value) {
              checkAssertions(value, this.name);
              return value >>> 0;
            };
          } else {
            toWireType = function toWireType(destructors, value) {
              checkAssertions(value, this.name);
              return value;
            };
          }
          registerType(primitiveType, {
            name: name,
            fromWireType: fromWireType,
            toWireType: toWireType,
            argPackAdvance: 8,
            readValueFromPointer: integerReadValueFromPointer(
              name,
              shift,
              minRange !== 0,
            ),
            destructorFunction: null,
          });
        }
        function __embind_register_memory_view(rawType, dataTypeIndex, name) {
          var typeMapping = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array,
          ];
          var TA = typeMapping[dataTypeIndex];
          function decodeMemoryView(handle) {
            handle = handle >> 2;
            var heap = HEAPU32;
            var size = heap[handle];
            var data = heap[handle + 1];
            return new TA(heap.buffer, data, size);
          }
          name = readLatin1String(name);
          registerType(
            rawType,
            {
              name: name,
              fromWireType: decodeMemoryView,
              argPackAdvance: 8,
              readValueFromPointer: decodeMemoryView,
            },
            { ignoreDuplicateRegistrations: true },
          );
        }
        var stringToUTF8Array = function stringToUTF8Array(
          str,
          heap,
          outIdx,
          maxBytesToWrite,
        ) {
          assert(typeof str === "string");
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap[outIdx++] = 192 | (u >> 6);
              heap[outIdx++] = 128 | (u & 63);
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap[outIdx++] = 224 | (u >> 12);
              heap[outIdx++] = 128 | ((u >> 6) & 63);
              heap[outIdx++] = 128 | (u & 63);
            } else {
              if (outIdx + 3 >= endIdx) break;
              if (u > 1114111)
                _warnOnce(
                  "Invalid Unicode code point " +
                    ptrToString(u) +
                    " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).",
                );
              heap[outIdx++] = 240 | (u >> 18);
              heap[outIdx++] = 128 | ((u >> 12) & 63);
              heap[outIdx++] = 128 | ((u >> 6) & 63);
              heap[outIdx++] = 128 | (u & 63);
            }
          }
          heap[outIdx] = 0;
          return outIdx - startIdx;
        };
        var stringToUTF8 = function stringToUTF8(str, outPtr, maxBytesToWrite) {
          assert(
            typeof maxBytesToWrite == "number",
            "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
          );
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        };
        var lengthBytesUTF8 = function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        };
        function __embind_register_std_string(rawType, name) {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, {
            name: name,
            fromWireType: function fromWireType(value) {
              var length = HEAPU32[value >> 2];
              var payload = value + 4;
              var str;
              if (stdStringIsUTF8) {
                var decodeStartPtr = payload;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = payload + i;
                  if (i == length || HEAPU8[currentBytePtr] == 0) {
                    var maxRead = currentBytePtr - decodeStartPtr;
                    var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                    if (str === undefined) {
                      str = stringSegment;
                    } else {
                      str += String.fromCharCode(0);
                      str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + 1;
                  }
                }
              } else {
                var a = new Array(length);
                for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(HEAPU8[payload + i]);
                }
                str = a.join("");
              }
              _free(value);
              return str;
            },
            toWireType: function toWireType(destructors, value) {
              if (value instanceof ArrayBuffer) {
                value = new Uint8Array(value);
              }
              var length;
              var valueIsOfTypeString = typeof value == "string";
              if (
                !(
                  valueIsOfTypeString ||
                  value instanceof Uint8Array ||
                  value instanceof Uint8ClampedArray ||
                  value instanceof Int8Array
                )
              ) {
                throwBindingError("Cannot pass non-string to std::string");
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                length = lengthBytesUTF8(value);
              } else {
                length = value.length;
              }
              var base = _malloc(4 + length + 1);
              var ptr = base + 4;
              HEAPU32[base >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                stringToUTF8(value, ptr, length + 1);
              } else {
                if (valueIsOfTypeString) {
                  for (var i = 0; i < length; ++i) {
                    var charCode = value.charCodeAt(i);
                    if (charCode > 255) {
                      _free(ptr);
                      throwBindingError(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      );
                    }
                    HEAPU8[ptr + i] = charCode;
                  }
                } else {
                  for (var i = 0; i < length; ++i) {
                    HEAPU8[ptr + i] = value[i];
                  }
                }
              }
              if (destructors !== null) {
                destructors.push(_free, base);
              }
              return base;
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: function destructorFunction(ptr) {
              _free(ptr);
            },
          });
        }
        var UTF16Decoder =
          typeof TextDecoder != "undefined"
            ? new TextDecoder("utf-16le")
            : undefined;
        var UTF16ToString = function UTF16ToString(ptr, maxBytesToRead) {
          assert(
            ptr % 2 == 0,
            "Pointer passed to UTF16ToString must be aligned to two bytes!",
          );
          var endPtr = ptr;
          var idx = endPtr >> 1;
          var maxIdx = idx + maxBytesToRead / 2;
          while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
          endPtr = idx << 1;
          if (endPtr - ptr > 32 && UTF16Decoder)
            return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
          var str = "";
          for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = HEAP16[(ptr + i * 2) >> 1];
            if (codeUnit == 0) break;
            str += String.fromCharCode(codeUnit);
          }
          return str;
        };
        var stringToUTF16 = function stringToUTF16(
          str,
          outPtr,
          maxBytesToWrite,
        ) {
          assert(
            outPtr % 2 == 0,
            "Pointer passed to stringToUTF16 must be aligned to two bytes!",
          );
          assert(
            typeof maxBytesToWrite == "number",
            "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
          );
          if (maxBytesToWrite === undefined) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 2) return 0;
          maxBytesToWrite -= 2;
          var startPtr = outPtr;
          var numCharsToWrite =
            maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
          for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            HEAP16[outPtr >> 1] = codeUnit;
            outPtr += 2;
          }
          HEAP16[outPtr >> 1] = 0;
          return outPtr - startPtr;
        };
        var lengthBytesUTF16 = function lengthBytesUTF16(str) {
          return str.length * 2;
        };
        var UTF32ToString = function UTF32ToString(ptr, maxBytesToRead) {
          assert(
            ptr % 4 == 0,
            "Pointer passed to UTF32ToString must be aligned to four bytes!",
          );
          var i = 0;
          var str = "";
          while (!(i >= maxBytesToRead / 4)) {
            var utf32 = HEAP32[(ptr + i * 4) >> 2];
            if (utf32 == 0) break;
            ++i;
            if (utf32 >= 65536) {
              var ch = utf32 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            } else {
              str += String.fromCharCode(utf32);
            }
          }
          return str;
        };
        var stringToUTF32 = function stringToUTF32(
          str,
          outPtr,
          maxBytesToWrite,
        ) {
          assert(
            outPtr % 4 == 0,
            "Pointer passed to stringToUTF32 must be aligned to four bytes!",
          );
          assert(
            typeof maxBytesToWrite == "number",
            "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
          );
          if (maxBytesToWrite === undefined) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 4) return 0;
          var startPtr = outPtr;
          var endPtr = startPtr + maxBytesToWrite - 4;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
              var trailSurrogate = str.charCodeAt(++i);
              codeUnit =
                (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023);
            }
            HEAP32[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr) break;
          }
          HEAP32[outPtr >> 2] = 0;
          return outPtr - startPtr;
        };
        var lengthBytesUTF32 = function lengthBytesUTF32(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        };
        var __embind_register_std_wstring =
          function __embind_register_std_wstring(rawType, charSize, name) {
            name = readLatin1String(name);
            var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
            if (charSize === 2) {
              decodeString = UTF16ToString;
              encodeString = stringToUTF16;
              lengthBytesUTF = lengthBytesUTF16;
              getHeap = function getHeap() {
                return HEAPU16;
              };
              shift = 1;
            } else if (charSize === 4) {
              decodeString = UTF32ToString;
              encodeString = stringToUTF32;
              lengthBytesUTF = lengthBytesUTF32;
              getHeap = function getHeap() {
                return HEAPU32;
              };
              shift = 2;
            }
            registerType(rawType, {
              name: name,
              fromWireType: function fromWireType(value) {
                var length = HEAPU32[value >> 2];
                var HEAP = getHeap();
                var str;
                var decodeStartPtr = value + 4;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = value + 4 + i * charSize;
                  if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                    var maxReadBytes = currentBytePtr - decodeStartPtr;
                    var stringSegment = decodeString(
                      decodeStartPtr,
                      maxReadBytes,
                    );
                    if (str === undefined) {
                      str = stringSegment;
                    } else {
                      str += String.fromCharCode(0);
                      str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + charSize;
                  }
                }
                _free(value);
                return str;
              },
              toWireType: function toWireType(destructors, value) {
                if (!(typeof value == "string")) {
                  throwBindingError(
                    "Cannot pass non-string to C++ string type " + name,
                  );
                }
                var length = lengthBytesUTF(value);
                var ptr = _malloc(4 + length + charSize);
                HEAPU32[ptr >> 2] = length >> shift;
                encodeString(value, ptr + 4, length + charSize);
                if (destructors !== null) {
                  destructors.push(_free, ptr);
                }
                return ptr;
              },
              argPackAdvance: 8,
              readValueFromPointer: simpleReadValueFromPointer,
              destructorFunction: function destructorFunction(ptr) {
                _free(ptr);
              },
            });
          };
        function __embind_register_void(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            isVoid: true,
            name: name,
            argPackAdvance: 0,
            fromWireType: function fromWireType() {
              return undefined;
            },
            toWireType: function toWireType(destructors, o) {
              return undefined;
            },
          });
        }
        var _abort = function _abort() {
          abort("native code called abort()");
        };
        var readEmAsmArgsArray = [];
        var readEmAsmArgs = function readEmAsmArgs(sigPtr, buf) {
          assert(Array.isArray(readEmAsmArgsArray));
          assert(buf % 16 == 0);
          readEmAsmArgsArray.length = 0;
          var ch;
          buf >>= 2;
          while ((ch = HEAPU8[sigPtr++])) {
            var chr = String.fromCharCode(ch);
            var validChars = ["d", "f", "i"];
            assert(
              validChars.includes(chr),
              "Invalid character " +
                ch +
                '("' +
                chr +
                '") in readEmAsmArgs! Use only [' +
                validChars +
                '], and do not specify "v" for void return argument.',
            );
            buf += (ch != 105) & buf;
            readEmAsmArgsArray.push(
              ch == 105 ? HEAP32[buf] : HEAPF64[buf++ >> 1],
            );
            ++buf;
          }
          return readEmAsmArgsArray;
        };
        var runEmAsmFunction = function runEmAsmFunction(code, sigPtr, argbuf) {
          var args = readEmAsmArgs(sigPtr, argbuf);
          if (!Object.prototype.hasOwnProperty.call(ASM_CONSTS, code))
            abort("No EM_ASM constant found at address " + code);
          return ASM_CONSTS[code].apply(null, args);
        };
        var _emscripten_asm_const_int = function _emscripten_asm_const_int(
          code,
          sigPtr,
          argbuf,
        ) {
          return runEmAsmFunction(code, sigPtr, argbuf);
        };
        var getHeapMax = function getHeapMax() {
          return 1048576;
        };
        var _emscripten_get_heap_max = function _emscripten_get_heap_max() {
          return getHeapMax();
        };
        var growMemory = function growMemory(size) {
          var b = wasmMemory.buffer;
          var pages = (size - b.byteLength + 65535) >>> 16;
          try {
            wasmMemory.grow(pages);
            updateMemoryViews();
            return 1;
          } catch (e) {
            err(
              "growMemory: Attempted to grow heap from " +
                b.byteLength +
                " bytes to " +
                size +
                " bytes, but got error: " +
                e,
            );
          }
        };
        var _emscripten_resize_heap = function _emscripten_resize_heap(
          requestedSize,
        ) {
          var oldSize = HEAPU8.length;
          requestedSize >>>= 0;
          assert(requestedSize > oldSize);
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            err(
              "Cannot enlarge memory, asked to go up to " +
                requestedSize +
                " bytes, but the limit is " +
                maxHeapSize +
                " bytes!",
            );
            return false;
          }
          var alignUp = function alignUp(x, multiple) {
            return x + ((multiple - (x % multiple)) % multiple);
          };
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(
              overGrownHeapSize,
              requestedSize + 100663296,
            );
            var newSize = Math.min(
              maxHeapSize,
              alignUp(Math.max(requestedSize, overGrownHeapSize), 65536),
            );
            var replacement = growMemory(newSize);
            if (replacement) {
              return true;
            }
          }
          err(
            "Failed to grow the heap from " +
              oldSize +
              " bytes to " +
              newSize +
              " bytes, not enough memory!",
          );
          return false;
        };
        var SYSCALLS = {
          varargs: undefined,
          get: function get() {
            assert(SYSCALLS.varargs != undefined);
            SYSCALLS.varargs += 4;
            var ret = HEAP32[(SYSCALLS.varargs - 4) >> 2];
            return ret;
          },
          getStr: function getStr(ptr) {
            var ret = UTF8ToString(ptr);
            return ret;
          },
        };
        var _fd_close = function _fd_close(fd) {
          abort("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM");
        };
        function convertI32PairToI53Checked(lo, hi) {
          assert(lo == lo >>> 0 || lo == (lo | 0));
          assert(hi === (hi | 0));
          return (hi + 2097152) >>> 0 < 4194305 - !!lo
            ? (lo >>> 0) + hi * 4294967296
            : NaN;
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          var offset = convertI32PairToI53Checked(offset_low, offset_high);
          return 70;
        }
        var printCharBuffers = [null, [], []];
        var printChar = function printChar(stream, curr) {
          var buffer = printCharBuffers[stream];
          assert(buffer);
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
            buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        };
        var flush_NO_FILESYSTEM = function flush_NO_FILESYSTEM() {
          _fflush(0);
          if (printCharBuffers[1].length) printChar(1, 10);
          if (printCharBuffers[2].length) printChar(2, 10);
        };
        var _fd_write = function _fd_write(fd, iov, iovcnt, pnum) {
          var num = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[(iov + 4) >> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
              printChar(fd, HEAPU8[ptr + j]);
            }
            num += len;
          }
          HEAPU32[pnum >> 2] = num;
          return 0;
        };
        var getWasmTableEntry = function getWasmTableEntry(funcPtr) {
          return wasmTable.get(funcPtr);
        };
        var writeArrayToMemory = function writeArrayToMemory(array, buffer) {
          assert(
            array.length >= 0,
            "writeArrayToMemory array must have a length (should be an array or typed array)",
          );
          HEAP8.set(array, buffer);
        };
        embind_init_charCodes();
        BindingError = Module["BindingError"] = (function (_Error2) {
          "use strict";
          function BindingError(message) {
            var _this2;
            _this2 = _Error2.call(this, message) || this;
            _this2.name = "BindingError";
            return _this2;
          }
          babelHelpers.inheritsLoose(BindingError, _Error2);
          return BindingError;
        })(babelHelpers.wrapNativeSuper(Error));
        InternalError = Module["InternalError"] = (function (_Error3) {
          "use strict";
          function InternalError(message) {
            var _this3;
            _this3 = _Error3.call(this, message) || this;
            _this3.name = "InternalError";
            return _this3;
          }
          babelHelpers.inheritsLoose(InternalError, _Error3);
          return InternalError;
        })(babelHelpers.wrapNativeSuper(Error));
        handleAllocatorInit();
        init_emval();
        function checkIncomingModuleAPI() {
          ignoredModuleProp("fetchSettings");
        }
        var wasmImports = {
          __assert_fail: ___assert_fail,
          __cxa_begin_catch: ___cxa_begin_catch,
          __cxa_find_matching_catch_2: ___cxa_find_matching_catch_2,
          __cxa_find_matching_catch_3: ___cxa_find_matching_catch_3,
          __resumeException: ___resumeException,
          _embind_register_bigint: __embind_register_bigint,
          _embind_register_bool: __embind_register_bool,
          _embind_register_emval: __embind_register_emval,
          _embind_register_float: __embind_register_float,
          _embind_register_integer: __embind_register_integer,
          _embind_register_memory_view: __embind_register_memory_view,
          _embind_register_std_string: __embind_register_std_string,
          _embind_register_std_wstring: __embind_register_std_wstring,
          _embind_register_void: __embind_register_void,
          abort: _abort,
          emscripten_asm_const_int: _emscripten_asm_const_int,
          emscripten_get_heap_max: _emscripten_get_heap_max,
          emscripten_resize_heap: _emscripten_resize_heap,
          fd_close: _fd_close,
          fd_seek: _fd_seek,
          fd_write: _fd_write,
          invoke_ii: invoke_ii,
          invoke_iii: invoke_iii,
          invoke_iiii: invoke_iiii,
          invoke_v: invoke_v,
          invoke_vi: invoke_vi,
          invoke_vii: invoke_vii,
          invoke_viii: invoke_viii,
          invoke_viiii: invoke_viiii,
        };
        var asm = createWasm();
        var ___wasm_call_ctors = createExportWrapper("__wasm_call_ctors");
        var _curve_create = (Module["_curve_create"] =
          createExportWrapper("curve_create"));
        var _malloc = (Module["_malloc"] = createExportWrapper("malloc"));
        var _curve_free = (Module["_curve_free"] =
          createExportWrapper("curve_free"));
        var _free = (Module["_free"] = createExportWrapper("free"));
        var _curve_init_ristretto = (Module["_curve_init_ristretto"] =
          createExportWrapper("curve_init_ristretto"));
        var _get_curve_element_bytes = (Module["_get_curve_element_bytes"] =
          createExportWrapper("get_curve_element_bytes"));
        var _get_curve_scalar_bytes = (Module["_get_curve_scalar_bytes"] =
          createExportWrapper("get_curve_scalar_bytes"));
        var _kdf_create = (Module["_kdf_create"] =
          createExportWrapper("kdf_create"));
        var _kdf_free = (Module["_kdf_free"] = createExportWrapper("kdf_free"));
        var _kdf_init_naor_reingold = (Module["_kdf_init_naor_reingold"] =
          createExportWrapper("kdf_init_naor_reingold"));
        var _sodiumInit = (Module["_sodiumInit"] =
          createExportWrapper("sodiumInit"));
        var _voprf_create = (Module["_voprf_create"] =
          createExportWrapper("voprf_create"));
        var _voprf_free = (Module["_voprf_free"] =
          createExportWrapper("voprf_free"));
        var _voprf_init_exp_twohashdh = (Module["_voprf_init_exp_twohashdh"] =
          createExportWrapper("voprf_init_exp_twohashdh"));
        var _blind = (Module["_blind"] = createExportWrapper("blind"));
        var _verifiable_unblind = (Module["_verifiable_unblind"] =
          createExportWrapper("verifiable_unblind"));
        var _voprf_client_finalize = (Module["_voprf_client_finalize"] =
          createExportWrapper("voprf_client_finalize"));
        var _voprf_setup = (Module["_voprf_setup"] =
          createExportWrapper("voprf_setup"));
        var _voprf_evaluate = (Module["_voprf_evaluate"] =
          createExportWrapper("voprf_evaluate"));
        var _voprf_server_finalize = (Module["_voprf_server_finalize"] =
          createExportWrapper("voprf_server_finalize"));
        var _get_voprf_final_evaluation_bytes = (Module[
          "_get_voprf_final_evaluation_bytes"
        ] = createExportWrapper("get_voprf_final_evaluation_bytes"));
        var ___errno_location = createExportWrapper("__errno_location");
        var ___getTypeName = createExportWrapper("__getTypeName");
        var __embind_initialize_bindings = (Module[
          "__embind_initialize_bindings"
        ] = createExportWrapper("_embind_initialize_bindings"));
        var _fflush = (Module["_fflush"] = createExportWrapper("fflush"));
        var _emscripten_builtin_memalign = createExportWrapper(
          "emscripten_builtin_memalign",
        );
        var _setThrew = createExportWrapper("setThrew");
        var setTempRet0 = createExportWrapper("setTempRet0");
        var _emscripten_stack_init2 = function _emscripten_stack_init() {
          return (_emscripten_stack_init2 =
            wasmExports["emscripten_stack_init"])();
        };
        var _emscripten_stack_get_free2 =
          function _emscripten_stack_get_free() {
            return (_emscripten_stack_get_free2 =
              wasmExports["emscripten_stack_get_free"])();
          };
        var _emscripten_stack_get_base2 =
          function _emscripten_stack_get_base() {
            return (_emscripten_stack_get_base2 =
              wasmExports["emscripten_stack_get_base"])();
          };
        var _emscripten_stack_get_end2 = function _emscripten_stack_get_end() {
          return (_emscripten_stack_get_end2 =
            wasmExports["emscripten_stack_get_end"])();
        };
        var stackSave = createExportWrapper("stackSave");
        var stackRestore = createExportWrapper("stackRestore");
        var stackAlloc = createExportWrapper("stackAlloc");
        var _emscripten_stack_get_current2 =
          function _emscripten_stack_get_current() {
            return (_emscripten_stack_get_current2 =
              wasmExports["emscripten_stack_get_current"])();
          };
        var ___cxa_free_exception = createExportWrapper("__cxa_free_exception");
        var ___cxa_increment_exception_refcount = createExportWrapper(
          "__cxa_increment_exception_refcount",
        );
        var ___cxa_decrement_exception_refcount = createExportWrapper(
          "__cxa_decrement_exception_refcount",
        );
        var ___get_exception_message = (Module["___get_exception_message"] =
          createExportWrapper("__get_exception_message"));
        var ___cxa_can_catch = createExportWrapper("__cxa_can_catch");
        var ___cxa_is_pointer_type = createExportWrapper(
          "__cxa_is_pointer_type",
        );
        var dynCall_iiiji = (Module["dynCall_iiiji"] =
          createExportWrapper("dynCall_iiiji"));
        var dynCall_iiij = (Module["dynCall_iiij"] =
          createExportWrapper("dynCall_iiij"));
        var dynCall_iijii = (Module["dynCall_iijii"] =
          createExportWrapper("dynCall_iijii"));
        var dynCall_iiijiji = (Module["dynCall_iiijiji"] =
          createExportWrapper("dynCall_iiijiji"));
        var dynCall_iiijiii = (Module["dynCall_iiijiii"] =
          createExportWrapper("dynCall_iiijiii"));
        var dynCall_jiji = (Module["dynCall_jiji"] =
          createExportWrapper("dynCall_jiji"));
        function invoke_v(index) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)();
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof _EmscriptenEH3)) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_vii(index, a1, a2) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof _EmscriptenEH3)) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiii(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof _EmscriptenEH3)) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_ii(index, a1) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof _EmscriptenEH3)) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iii(index, a1, a2) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof _EmscriptenEH3)) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viii(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof _EmscriptenEH3)) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_vi(index, a1) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof _EmscriptenEH3)) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiii(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof _EmscriptenEH3)) throw e;
            _setThrew(1, 0);
          }
        }
        Module["wasmMemory"] = wasmMemory;
        Module["getValue"] = getValue;
        Module["stringToUTF8"] = stringToUTF8;
        Module["lengthBytesUTF8"] = lengthBytesUTF8;
        Module["writeArrayToMemory"] = writeArrayToMemory;
        var missingLibrarySymbols = [
          "writeI53ToI64",
          "writeI53ToI64Clamped",
          "writeI53ToI64Signaling",
          "writeI53ToU64Clamped",
          "writeI53ToU64Signaling",
          "readI53FromI64",
          "readI53FromU64",
          "convertI32PairToI53",
          "convertU32PairToI53",
          "zeroMemory",
          "exitJS",
          "isLeapYear",
          "ydayFromDate",
          "arraySum",
          "addDays",
          "setErrNo",
          "inetPton4",
          "inetNtop4",
          "inetPton6",
          "inetNtop6",
          "readSockaddr",
          "writeSockaddr",
          "getHostByName",
          "initRandomFill",
          "randomFill",
          "getCallstack",
          "emscriptenLog",
          "convertPCtoSourceLocation",
          "runMainThreadEmAsm",
          "jstoi_q",
          "jstoi_s",
          "getExecutableName",
          "listenOnce",
          "autoResumeAudioContext",
          "dynCallLegacy",
          "getDynCaller",
          "dynCall",
          "setWasmTableEntry",
          "handleException",
          "runtimeKeepalivePush",
          "runtimeKeepalivePop",
          "callUserCallback",
          "maybeExit",
          "safeSetTimeout",
          "asmjsMangle",
          "asyncLoad",
          "alignMemory",
          "mmapAlloc",
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
          "intArrayFromString",
          "intArrayToString",
          "AsciiToString",
          "stringToAscii",
          "stringToNewUTF8",
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
          "setCanvasElementSize",
          "getCanvasElementSize",
          "demangle",
          "demangleAll",
          "jsStackTrace",
          "stackTrace",
          "getEnvStrings",
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
          "FS_createPreloadedFile",
          "FS_modeStringToFlags",
          "FS_getMode",
          "FS_stdin_getChar",
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
          "getTypeName",
          "heap32VectorToArray",
          "requireRegisteredType",
          "init_embind",
          "throwUnboundTypeError",
          "ensureOverloadTable",
          "exposePublicSymbol",
          "replacePublicSymbol",
          "extendError",
          "createNamedFunction",
          "getBasestPointer",
          "registerInheritedInstance",
          "unregisterInheritedInstance",
          "getInheritedInstance",
          "getInheritedInstanceCount",
          "getLiveInheritedInstances",
          "enumReadValueFromPointer",
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
          "detachFinalizer",
          "attachFinalizer",
          "makeClassHandle",
          "init_ClassHandle",
          "ClassHandle",
          "ClassHandle_isAliasOf",
          "throwInstanceAlreadyDeleted",
          "ClassHandle_clone",
          "ClassHandle_delete",
          "ClassHandle_isDeleted",
          "ClassHandle_deleteLater",
          "flushPendingDeletes",
          "setDelayFunction",
          "RegisteredClass",
          "shallowCopyInternalPointer",
          "downcastPointer",
          "upcastPointer",
          "validateThis",
          "char_0",
          "char_9",
          "makeLegalFunctionName",
          "getStringOrSymbol",
          "craftEmvalAllocator",
          "emval_get_global",
          "emval_lookupTypes",
          "emval_allocateDestructors",
          "emval_addMethodCaller",
        ];
        missingLibrarySymbols.forEach(missingLibrarySymbol);
        var unexportedSymbols = [
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
          "wasmTable",
          "wasmExports",
          "stackAlloc",
          "stackSave",
          "stackRestore",
          "getTempRet0",
          "setTempRet0",
          "writeStackCookie",
          "checkStackCookie",
          "convertI32PairToI53Checked",
          "ptrToString",
          "getHeapMax",
          "growMemory",
          "ENV",
          "MONTH_DAYS_REGULAR",
          "MONTH_DAYS_LEAP",
          "MONTH_DAYS_REGULAR_CUMULATIVE",
          "MONTH_DAYS_LEAP_CUMULATIVE",
          "ERRNO_CODES",
          "ERRNO_MESSAGES",
          "DNS",
          "Protocols",
          "Sockets",
          "timers",
          "warnOnce",
          "UNWIND_CACHE",
          "readEmAsmArgsArray",
          "readEmAsmArgs",
          "runEmAsmFunction",
          "getWasmTableEntry",
          "handleAllocatorInit",
          "HandleAllocator",
          "freeTableIndexes",
          "functionsInTableMap",
          "setValue",
          "PATH",
          "PATH_FS",
          "UTF8Decoder",
          "UTF8ArrayToString",
          "UTF8ToString",
          "stringToUTF8Array",
          "UTF16Decoder",
          "UTF16ToString",
          "stringToUTF16",
          "lengthBytesUTF16",
          "UTF32ToString",
          "stringToUTF32",
          "lengthBytesUTF32",
          "JSEvents",
          "specialHTMLTargets",
          "currentFullscreenStrategy",
          "restoreOldWindowedStyle",
          "ExitStatus",
          "flush_NO_FILESYSTEM",
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
          "FS_stdin_getChar_buffer",
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
          "allocateUTF8",
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
          "UnboundTypeError",
          "PureVirtualError",
          "embindRepr",
          "registeredInstances",
          "registeredPointers",
          "registerType",
          "getShiftFromSize",
          "integerReadValueFromPointer",
          "floatReadValueFromPointer",
          "simpleReadValueFromPointer",
          "finalizationRegistry",
          "detachFinalizer_deps",
          "deletionQueue",
          "delayFunction",
          "emval_handles",
          "emval_symbols",
          "init_emval",
          "count_emval_handles",
          "Emval",
          "emval_newers",
          "emval_methodCallers",
          "emval_registeredMethods",
        ];
        unexportedSymbols.forEach(unexportedRuntimeSymbol);
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function stackCheckInit() {
          _emscripten_stack_init2();
          writeStackCookie();
        }
        function run() {
          if (runDependencies > 0) {
            return;
          }
          stackCheckInit();
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module);
            if (Module["onRuntimeInitialized"])
              Module["onRuntimeInitialized"]();
            assert(
              !Module["_main"],
              'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]',
            );
            postRun();
          }
          if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(function () {
              setTimeout(function () {
                Module["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
          checkStackCookie();
        }
        if (Module["preInit"]) {
          if (typeof Module["preInit"] == "function")
            Module["preInit"] = [Module["preInit"]];
          while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
          }
        }
        run();

        return moduleArg.ready;
      };
    })();
    if (typeof exports === "object" && typeof module === "object")
      module.exports = Module;
    else if (typeof define === "function" && define["amd"])
      define([], function () {
        return Module;
      });
  },
  null,
);
