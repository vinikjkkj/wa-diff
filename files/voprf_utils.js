__d(
  "voprf_utils",
  ["Promise"],
  function $module_voprf_utils(
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

      return function (Module) {
        Module = Module || {};

        var Module = typeof Module !== "undefined" ? Module : {};
        var objAssign = Object.assign;
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new (
          _require_closure_Promise ||
          (_require_closure_Promise = require("Promise"))
        )(function (resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_main")) {
          Object.defineProperty(Module["ready"], "_main", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_main", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(Module["ready"], "_curve_create")
        ) {
          Object.defineProperty(Module["ready"], "_curve_create", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _curve_create on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_curve_create", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _curve_create on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_curve_free")) {
          Object.defineProperty(Module["ready"], "_curve_free", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _curve_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_curve_free", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _curve_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(
            Module["ready"],
            "_curve_init_ristretto",
          )
        ) {
          Object.defineProperty(Module["ready"], "_curve_init_ristretto", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _curve_init_ristretto on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_curve_init_ristretto", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _curve_init_ristretto on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(
            Module["ready"],
            "_get_curve_element_bytes",
          )
        ) {
          Object.defineProperty(Module["ready"], "_get_curve_element_bytes", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _get_curve_element_bytes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_get_curve_element_bytes", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _get_curve_element_bytes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(
            Module["ready"],
            "_get_curve_scalar_bytes",
          )
        ) {
          Object.defineProperty(Module["ready"], "_get_curve_scalar_bytes", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _get_curve_scalar_bytes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_get_curve_scalar_bytes", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _get_curve_scalar_bytes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_kdf_create")) {
          Object.defineProperty(Module["ready"], "_kdf_create", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _kdf_create on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_kdf_create", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _kdf_create on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_kdf_free")) {
          Object.defineProperty(Module["ready"], "_kdf_free", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _kdf_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_kdf_free", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _kdf_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(
            Module["ready"],
            "_kdf_init_naor_reingold",
          )
        ) {
          Object.defineProperty(Module["ready"], "_kdf_init_naor_reingold", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _kdf_init_naor_reingold on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_kdf_init_naor_reingold", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _kdf_init_naor_reingold on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_sodiumInit")) {
          Object.defineProperty(Module["ready"], "_sodiumInit", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _sodiumInit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_sodiumInit", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _sodiumInit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(Module["ready"], "_voprf_create")
        ) {
          Object.defineProperty(Module["ready"], "_voprf_create", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _voprf_create on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_voprf_create", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _voprf_create on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_voprf_free")) {
          Object.defineProperty(Module["ready"], "_voprf_free", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _voprf_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_voprf_free", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _voprf_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(
            Module["ready"],
            "_voprf_init_exp_twohashdh",
          )
        ) {
          Object.defineProperty(Module["ready"], "_voprf_init_exp_twohashdh", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _voprf_init_exp_twohashdh on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_voprf_init_exp_twohashdh", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _voprf_init_exp_twohashdh on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_blind")) {
          Object.defineProperty(Module["ready"], "_blind", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _blind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_blind", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _blind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(
            Module["ready"],
            "_verifiable_unblind",
          )
        ) {
          Object.defineProperty(Module["ready"], "_verifiable_unblind", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _verifiable_unblind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_verifiable_unblind", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _verifiable_unblind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(
            Module["ready"],
            "_voprf_client_finalize",
          )
        ) {
          Object.defineProperty(Module["ready"], "_voprf_client_finalize", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _voprf_client_finalize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_voprf_client_finalize", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _voprf_client_finalize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_voprf_setup")) {
          Object.defineProperty(Module["ready"], "_voprf_setup", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _voprf_setup on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_voprf_setup", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _voprf_setup on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(Module["ready"], "_voprf_evaluate")
        ) {
          Object.defineProperty(Module["ready"], "_voprf_evaluate", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _voprf_evaluate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_voprf_evaluate", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _voprf_evaluate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(
            Module["ready"],
            "_voprf_server_finalize",
          )
        ) {
          Object.defineProperty(Module["ready"], "_voprf_server_finalize", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting _voprf_server_finalize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "_voprf_server_finalize", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting _voprf_server_finalize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(
            Module["ready"],
            "_get_voprf_final_evaluation_bytes",
          )
        ) {
          Object.defineProperty(
            Module["ready"],
            "_get_voprf_final_evaluation_bytes",
            {
              configurable: true,
              get: function get() {
                abort(
                  "You are getting _get_voprf_final_evaluation_bytes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                );
              },
            },
          );
          Object.defineProperty(
            Module["ready"],
            "_get_voprf_final_evaluation_bytes",
            {
              configurable: true,
              set: function set() {
                abort(
                  "You are setting _get_voprf_final_evaluation_bytes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                );
              },
            },
          );
        }
        if (
          !Object.getOwnPropertyDescriptor(Module["ready"], "___getTypeName")
        ) {
          Object.defineProperty(Module["ready"], "___getTypeName", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "___getTypeName", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(
            Module["ready"],
            "___embind_register_native_and_builtin_types",
          )
        ) {
          Object.defineProperty(
            Module["ready"],
            "___embind_register_native_and_builtin_types",
            {
              configurable: true,
              get: function get() {
                abort(
                  "You are getting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                );
              },
            },
          );
          Object.defineProperty(
            Module["ready"],
            "___embind_register_native_and_builtin_types",
            {
              configurable: true,
              set: function set() {
                abort(
                  "You are setting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                );
              },
            },
          );
        }
        if (
          !Object.getOwnPropertyDescriptor(Module["ready"], "___stdio_exit")
        ) {
          Object.defineProperty(Module["ready"], "___stdio_exit", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting ___stdio_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "___stdio_exit", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting ___stdio_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        if (
          !Object.getOwnPropertyDescriptor(
            Module["ready"],
            "onRuntimeInitialized",
          )
        ) {
          Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
            configurable: true,
            get: function get() {
              abort(
                "You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
          Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
            configurable: true,
            set: function set() {
              abort(
                "You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
              );
            },
          });
        }
        var moduleOverrides = objAssign({}, Module);
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
            "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)",
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
        function logExceptionOnExit(e) {
          if (e instanceof ExitStatus) return;
          var toLog = e;
          if (e && typeof e === "object" && e.stack) {
            toLog = [e, e.stack];
          }
          err("exiting due to exception: " + toLog);
        }
        if (typeof document !== "undefined" && document.currentScript) {
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
        if (
          !(typeof window === "object" || typeof importScripts === "function")
        )
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
        var err = Module["printErr"] || console.warn.bind(console);
        objAssign(Module, moduleOverrides);
        moduleOverrides = null;
        if (Module["arguments"]) arguments_ = Module["arguments"];
        if (!Object.getOwnPropertyDescriptor(Module, "arguments")) {
          Object.defineProperty(Module, "arguments", {
            configurable: true,
            get: function get() {
              abort(
                "Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)",
              );
            },
          });
        }
        if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
        if (!Object.getOwnPropertyDescriptor(Module, "thisProgram")) {
          Object.defineProperty(Module, "thisProgram", {
            configurable: true,
            get: function get() {
              abort(
                "Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)",
              );
            },
          });
        }
        if (Module["quit"]) quit_ = Module["quit"];
        if (!Object.getOwnPropertyDescriptor(Module, "quit")) {
          Object.defineProperty(Module, "quit", {
            configurable: true,
            get: function get() {
              abort(
                "Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)",
              );
            },
          });
        }
        assert(
          typeof Module["memoryInitializerPrefixURL"] === "undefined",
          "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead",
        );
        assert(
          typeof Module["pthreadMainPrefixURL"] === "undefined",
          "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead",
        );
        assert(
          typeof Module["cdInitializerPrefixURL"] === "undefined",
          "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead",
        );
        assert(
          typeof Module["filePackagePrefixURL"] === "undefined",
          "Module.filePackagePrefixURL option was removed, use Module.locateFile instead",
        );
        assert(
          typeof Module["read"] === "undefined",
          "Module.read option was removed (modify read_ in JS)",
        );
        assert(
          typeof Module["readAsync"] === "undefined",
          "Module.readAsync option was removed (modify readAsync in JS)",
        );
        assert(
          typeof Module["readBinary"] === "undefined",
          "Module.readBinary option was removed (modify readBinary in JS)",
        );
        assert(
          typeof Module["setWindowTitle"] === "undefined",
          "Module.setWindowTitle option was removed (modify setWindowTitle in JS)",
        );
        assert(
          typeof Module["TOTAL_MEMORY"] === "undefined",
          "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY",
        );
        if (!Object.getOwnPropertyDescriptor(Module, "read")) {
          Object.defineProperty(Module, "read", {
            configurable: true,
            get: function get() {
              abort(
                "Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)",
              );
            },
          });
        }
        if (!Object.getOwnPropertyDescriptor(Module, "readAsync")) {
          Object.defineProperty(Module, "readAsync", {
            configurable: true,
            get: function get() {
              abort(
                "Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)",
              );
            },
          });
        }
        if (!Object.getOwnPropertyDescriptor(Module, "readBinary")) {
          Object.defineProperty(Module, "readBinary", {
            configurable: true,
            get: function get() {
              abort(
                "Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)",
              );
            },
          });
        }
        if (!Object.getOwnPropertyDescriptor(Module, "setWindowTitle")) {
          Object.defineProperty(Module, "setWindowTitle", {
            configurable: true,
            get: function get() {
              abort(
                "Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)",
              );
            },
          });
        }
        assert(
          !ENVIRONMENT_IS_WORKER,
          "worker environment detected but not enabled at build time.  Add 'worker' to `-s ENVIRONMENT` to enable.",
        );
        assert(
          !ENVIRONMENT_IS_NODE,
          "node environment detected but not enabled at build time.  Add 'node' to `-s ENVIRONMENT` to enable.",
        );
        assert(
          !ENVIRONMENT_IS_SHELL,
          "shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable.",
        );
        var POINTER_SIZE = 4;
        function warnOnce(text) {
          if (!warnOnce.shown) warnOnce.shown = {};
          if (!warnOnce.shown[text]) {
            warnOnce.shown[text] = 1;
            err(text);
          }
        }
        function convertJsFunctionToWasm(func, sig) {
          if (typeof WebAssembly.Function === "function") {
            var typeNames = { i: "i32", j: "i64", f: "f32", d: "f64" };
            var type = {
              parameters: [],
              results: sig[0] == "v" ? [] : [typeNames[sig[0]]],
            };
            for (var i = 1; i < sig.length; ++i) {
              type.parameters.push(typeNames[sig[i]]);
            }
            return new WebAssembly.Function(type, func);
          }
          var typeSection = [1, 0, 1, 96];
          var sigRet = sig.slice(0, 1);
          var sigParam = sig.slice(1);
          var typeCodes = { i: 127, j: 126, f: 125, d: 124 };
          typeSection.push(sigParam.length);
          for (var i = 0; i < sigParam.length; ++i) {
            typeSection.push(typeCodes[sigParam[i]]);
          }
          if (sigRet == "v") {
            typeSection.push(0);
          } else {
            typeSection = typeSection.concat([1, typeCodes[sigRet]]);
          }
          typeSection[1] = typeSection.length - 2;
          var bytes = new Uint8Array(
            [0, 97, 115, 109, 1, 0, 0, 0].concat(
              typeSection,
              [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0],
            ),
          );
          var module = new WebAssembly.Module(bytes);
          var instance = new WebAssembly.Instance(module, { e: { f: func } });
          var wrappedFunc = instance.exports["f"];
          return wrappedFunc;
        }
        var freeTableIndexes = [];
        var functionsInTableMap;
        function getEmptyTableSlot() {
          if (freeTableIndexes.length) {
            return freeTableIndexes.pop();
          }
          try {
            wasmTable.grow(1);
          } catch (err) {
            if (!(err instanceof RangeError)) {
              throw err;
            }
            throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
          }
          return wasmTable.length - 1;
        }
        function updateTableMap(offset, count) {
          for (var i = offset; i < offset + count; i++) {
            var item = getWasmTableEntry(i);
            if (item) {
              functionsInTableMap.set(item, i);
            }
          }
        }
        var tempRet0 = 0;
        var wasmBinary;
        if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
        if (!Object.getOwnPropertyDescriptor(Module, "wasmBinary")) {
          Object.defineProperty(Module, "wasmBinary", {
            configurable: true,
            get: function get() {
              abort(
                "Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)",
              );
            },
          });
        }
        var noExitRuntime = Module["noExitRuntime"] || true;
        if (!Object.getOwnPropertyDescriptor(Module, "noExitRuntime")) {
          Object.defineProperty(Module, "noExitRuntime", {
            configurable: true,
            get: function get() {
              abort(
                "Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)",
              );
            },
          });
        }
        if (typeof WebAssembly !== "object") {
          abort("no native wasm support detected");
        }
        function getValue(ptr, type, noSafe) {
          if (type === void 0) {
            type = "i8";
          }
          if (type.charAt(type.length - 1) === "*") type = "i32";
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
              return HEAP32[ptr >> 2];
            case "float":
              return HEAPF32[ptr >> 2];
            case "double":
              return Number(HEAPF64[ptr >> 3]);
            default:
              abort("invalid type for getValue: " + type);
          }
          return null;
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort("Assertion failed" + (text ? ": " + text : ""));
          }
        }
        function getCFunc(ident) {
          var func = Module["_" + ident];
          assert(
            func,
            "Cannot call unknown function " +
              ident +
              ", make sure it is exported",
          );
          return func;
        }
        function ccall(ident, returnType, argTypes, args, opts) {
          var toC = {
            string: function string(str) {
              var ret = 0;
              if (str !== null && str !== undefined && str !== 0) {
                var len = (str.length << 2) + 1;
                ret = stackAlloc(len);
                stringToUTF8(str, ret, len);
              }
              return ret;
            },
            array: function array(arr) {
              var ret = stackAlloc(arr.length);
              writeArrayToMemory(arr, ret);
              return ret;
            },
          };
          function convertReturnValue(ret) {
            if (returnType === "string") return UTF8ToString(ret);
            if (returnType === "boolean") return Boolean(ret);
            return ret;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack = 0;
          assert(returnType !== "array", 'Return type should not be "array".');
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack === 0) stack = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func.apply(null, cArgs);
          function onDone(ret) {
            if (stack !== 0) stackRestore(stack);
            return convertReturnValue(ret);
          }
          ret = onDone(ret);
          return ret;
        }
        var ALLOC_STACK = 1;
        var UTF8Decoder =
          typeof TextDecoder !== "undefined"
            ? new TextDecoder("utf8")
            : undefined;
        function UTF8ArrayToString(heap, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;
          if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
            return UTF8Decoder.decode(heap.subarray(idx, endPtr));
          } else {
            var str = "";
            while (idx < endPtr) {
              var u0 = heap[idx++];
              if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
              }
              var u1 = heap[idx++] & 63;
              if ((u0 & 224) == 192) {
                str += String.fromCharCode(((u0 & 31) << 6) | u1);
                continue;
              }
              var u2 = heap[idx++] & 63;
              if ((u0 & 240) == 224) {
                u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
              } else {
                if ((u0 & 248) != 240)
                  warnOnce(
                    "Invalid UTF-8 leading byte 0x" +
                      u0.toString(16) +
                      " encountered when deserializing a UTF-8 string in wasm memory to a JS string!",
                  );
                u0 =
                  ((u0 & 7) << 18) |
                  (u1 << 12) |
                  (u2 << 6) |
                  (heap[idx++] & 63);
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
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
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
                warnOnce(
                  "Invalid Unicode code point 0x" +
                    u.toString(16) +
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
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          assert(
            typeof maxBytesToWrite == "number",
            "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
          );
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343)
              u = (65536 + ((u & 1023) << 10)) | (str.charCodeAt(++i) & 1023);
            if (u <= 127) ++len;
            else if (u <= 2047) len += 2;
            else if (u <= 65535) len += 3;
            else len += 4;
          }
          return len;
        }
        var UTF16Decoder =
          typeof TextDecoder !== "undefined"
            ? new TextDecoder("utf-16le")
            : undefined;
        function UTF16ToString(ptr, maxBytesToRead) {
          assert(
            ptr % 2 == 0,
            "Pointer passed to UTF16ToString must be aligned to two bytes!",
          );
          var endPtr = ptr;
          var idx = endPtr >> 1;
          var maxIdx = idx + maxBytesToRead / 2;
          while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
          endPtr = idx << 1;
          if (endPtr - ptr > 32 && UTF16Decoder) {
            return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
          } else {
            var str = "";
            for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
              var codeUnit = HEAP16[(ptr + i * 2) >> 1];
              if (codeUnit == 0) break;
              str += String.fromCharCode(codeUnit);
            }
            return str;
          }
        }
        function stringToUTF16(str, outPtr, maxBytesToWrite) {
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
        }
        function lengthBytesUTF16(str) {
          return str.length * 2;
        }
        function UTF32ToString(ptr, maxBytesToRead) {
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
        }
        function stringToUTF32(str, outPtr, maxBytesToWrite) {
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
        }
        function lengthBytesUTF32(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        }
        function writeArrayToMemory(array, buffer) {
          assert(
            array.length >= 0,
            "writeArrayToMemory array must have a length (should be an array or typed array)",
          );
          HEAP8.set(array, buffer);
        }
        function writeAsciiToMemory(str, buffer, dontAddNull) {
          for (var i = 0; i < str.length; ++i) {
            assert(str.charCodeAt(i) === (str.charCodeAt(i) & 255));
            HEAP8[buffer++ >> 0] = str.charCodeAt(i);
          }
          if (!dontAddNull) HEAP8[buffer >> 0] = 0;
        }
        function alignUp(x, multiple) {
          if (x % multiple > 0) {
            x += multiple - (x % multiple);
          }
          return x;
        }
        var buffer,
          HEAP8,
          HEAPU8,
          HEAP16,
          HEAPU16,
          HEAP32,
          HEAPU32,
          HEAPF32,
          HEAPF64;
        function updateGlobalBufferAndViews(buf) {
          buffer = buf;
          Module["HEAP8"] = HEAP8 = new Int8Array(buf);
          Module["HEAP16"] = HEAP16 = new Int16Array(buf);
          Module["HEAP32"] = HEAP32 = new Int32Array(buf);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
          Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
          Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
          Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
          Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
        }
        var TOTAL_STACK = 5242880;
        if (Module["TOTAL_STACK"])
          assert(
            TOTAL_STACK === Module["TOTAL_STACK"],
            "the stack size can no longer be determined at runtime",
          );
        var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
        if (!Object.getOwnPropertyDescriptor(Module, "INITIAL_MEMORY")) {
          Object.defineProperty(Module, "INITIAL_MEMORY", {
            configurable: true,
            get: function get() {
              abort(
                "Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)",
              );
            },
          });
        }
        assert(
          INITIAL_MEMORY >= TOTAL_STACK,
          "INITIAL_MEMORY should be larger than TOTAL_STACK, was " +
            INITIAL_MEMORY +
            "! (TOTAL_STACK=" +
            TOTAL_STACK +
            ")",
        );
        assert(
          typeof Int32Array !== "undefined" &&
            typeof Float64Array !== "undefined" &&
            Int32Array.prototype.subarray !== undefined &&
            Int32Array.prototype.set !== undefined,
          "JS engine does not provide full typed array support",
        );
        assert(
          !Module["wasmMemory"],
          "Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally",
        );
        assert(
          INITIAL_MEMORY == 16777216,
          "Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically",
        );
        var wasmTable;
        function writeStackCookie() {
          var max = _emscripten_stack_get_end();
          assert((max & 3) == 0);
          HEAP32[(max + 4) >> 2] = 34821223;
          HEAP32[(max + 8) >> 2] = 2310721022;
          HEAP32[0] = 1668509029;
        }
        function checkStackCookie() {
          if (ABORT) return;
          var max = _emscripten_stack_get_end();
          var cookie1 = HEAPU32[(max + 4) >> 2];
          var cookie2 = HEAPU32[(max + 8) >> 2];
          if (cookie1 != 34821223 || cookie2 != 2310721022) {
            abort(
              "Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" +
                cookie2.toString(16) +
                " 0x" +
                cookie1.toString(16),
            );
          }
          if (HEAP32[0] !== 1668509029)
            abort(
              "Runtime error: The application has corrupted its heap memory area (address zero)!",
            );
        }
        (function () {
          var h16 = new Int16Array(1);
          var h8 = new Int8Array(h16.buffer);
          h16[0] = 25459;
          if (h8[0] !== 115 || h8[1] !== 99)
            throw "Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)";
        })();
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        var runtimeExited = false;
        var runtimeKeepaliveCounter = 0;
        function keepRuntimeAlive() {
          return noExitRuntime || runtimeKeepaliveCounter > 0;
        }
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
          checkStackCookie();
          assert(!runtimeInitialized);
          runtimeInitialized = true;
          callRuntimeCallbacks(__ATINIT__);
        }
        function exitRuntime() {
          checkStackCookie();
          runtimeExited = true;
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
              typeof setInterval !== "undefined"
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
        Module["preloadedImages"] = {};
        Module["preloadedAudios"] = {};
        function abort(what) {
          {
            if (Module["onAbort"]) {
              Module["onAbort"](what);
            }
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
              "Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1",
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
          loadFilesFromDB: function loadFilesFromDB() {
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
        function createExportWrapper(name, fixedasm) {
          return function () {
            var displayName = name;
            var asm = fixedasm;
            if (!fixedasm) {
              asm = Module["asm"];
            }
            assert(
              runtimeInitialized,
              "native function `" +
                displayName +
                "` called before runtime initialization",
            );
            assert(
              !runtimeExited,
              "native function `" +
                displayName +
                "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)",
            );
            if (!asm[name]) {
              assert(
                asm[name],
                "exported native function `" + displayName + "` not found",
              );
            }
            return asm[name].apply(null, arguments);
          };
        }
        var wasmBinaryFile;
        wasmBinaryFile = "crypto_utils.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            } else {
              throw "both async and sync fetching of the wasm failed";
            }
          } catch (err) {
            abort(err);
          }
        }
        function getBinaryPromise() {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch === "function") {
              return fetch(wasmBinaryFile, { credentials: "same-origin" })
                .then(function (response) {
                  if (!response["ok"]) {
                    throw (
                      "failed to load wasm binary file at '" +
                      wasmBinaryFile +
                      "'"
                    );
                  }
                  return response["arrayBuffer"]();
                })
                ["catch"](function () {
                  return getBinary(wasmBinaryFile);
                });
            }
          }
          return (
            _require_closure_Promise ||
            (_require_closure_Promise = require("Promise"))
          )
            .resolve()
            .then(function () {
              return getBinary(wasmBinaryFile);
            });
        }
        function createWasm() {
          var info = {
            env: asmLibraryArg,
            wasi_snapshot_preview1: asmLibraryArg,
          };
          function receiveInstance(instance, module) {
            var exports = instance.exports;
            Module["asm"] = exports;
            wasmMemory = Module["asm"]["memory"];
            assert(wasmMemory, "memory not found in wasm exports");
            updateGlobalBufferAndViews(wasmMemory.buffer);
            wasmTable = Module["asm"]["__indirect_function_table"];
            assert(wasmTable, "table not found in wasm exports");
            addOnInit(Module["asm"]["__wasm_call_ctors"]);
            removeRunDependency("wasm-instantiate");
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
          function instantiateArrayBuffer(receiver) {
            return getBinaryPromise()
              .then(function (binary) {
                return WebAssembly.instantiate(binary, info);
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
          function instantiateAsync() {
            if (
              !wasmBinary &&
              typeof WebAssembly.instantiateStreaming === "function" &&
              !isDataURI(wasmBinaryFile) &&
              typeof fetch === "function"
            ) {
              return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(
                function (response) {
                  var result = WebAssembly.instantiateStreaming(response, info);
                  return result.then(
                    receiveInstantiationResult,
                    function (reason) {
                      err("wasm streaming compile failed: " + reason);
                      err("falling back to ArrayBuffer instantiation");
                      return instantiateArrayBuffer(receiveInstantiationResult);
                    },
                  );
                },
              );
            } else {
              return instantiateArrayBuffer(receiveInstantiationResult);
            }
          }
          if (Module["instantiateWasm"]) {
            try {
              var exports = Module["instantiateWasm"](info, receiveInstance);
              return exports;
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              return false;
            }
          }
          instantiateAsync()["catch"](readyPromiseReject);
          return {};
        }
        var tempDouble;
        var tempI64;
        var ASM_CONSTS = {
          36860: function _() {
            return Module.getRandomValue();
          },
          36896: function _() {
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
                throw "No secure random number generator found";
              }
            }
          },
        };
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            var callback = callbacks.shift();
            if (typeof callback == "function") {
              callback(Module);
              continue;
            }
            var func = callback.func;
            if (typeof func === "number") {
              if (callback.arg === undefined) {
                getWasmTableEntry(func)();
              } else {
                getWasmTableEntry(func)(callback.arg);
              }
            } else {
              func(callback.arg === undefined ? null : callback.arg);
            }
          }
        }
        function demangle(func) {
          warnOnce(
            "warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling",
          );
          return func;
        }
        function demangleAll(text) {
          var regex = /\b_Z[\w\d_]+/g;
          return text.replace(regex, function (x) {
            var y = demangle(x);
            return x === y ? x : y + " [" + x + "]";
          });
        }
        function getWasmTableEntry(funcPtr) {
          return wasmTable.get(funcPtr);
        }
        function jsStackTrace() {
          var error = new Error();
          if (!error.stack) {
            try {
              throw new Error();
            } catch (e) {
              error = e;
            }
            if (!error.stack) {
              return "(no stack trace available)";
            }
          }
          return error.stack.toString();
        }
        function setWasmTableEntry(idx, func) {
          wasmTable.set(idx, func);
        }
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
        var char_0 = 48;
        var char_9 = 57;
        function makeLegalFunctionName(name) {
          if (undefined === name) {
            return "_unknown";
          }
          name = name.replace(/[^a-zA-Z0-9_]/g, "$");
          var f = name.charCodeAt(0);
          if (f >= char_0 && f <= char_9) {
            return "_" + name;
          } else {
            return name;
          }
        }
        function createNamedFunction(name, body) {
          name = makeLegalFunctionName(name);
          return new Function(
            "body",
            "return function " +
              name +
              "() {\n" +
              '    "use strict";' +
              "    return body.apply(this, arguments);\n" +
              "};\n",
          )(body);
        }
        function extendError(baseErrorType, errorName) {
          var errorClass = createNamedFunction(errorName, function (message) {
            this.name = errorName;
            this.message = message;
            var stack = new Error(message).stack;
            if (stack !== undefined) {
              this.stack =
                this.toString() +
                "\n" +
                stack.replace(/^Error(:[^\n]*)?\n/, "");
            }
          });
          errorClass.prototype = Object.create(baseErrorType.prototype);
          errorClass.prototype.constructor = errorClass;
          errorClass.prototype.toString = function () {
            if (this.message === undefined) {
              return this.name;
            } else {
              return this.name + ": " + this.message;
            }
          };
          return errorClass;
        }
        var BindingError = undefined;
        function throwBindingError(message) {
          throw new BindingError(message);
        }
        var InternalError = undefined;
        function throwInternalError(message) {
          throw new InternalError(message);
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
              cb();
            });
          }
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
        var emval_free_list = [];
        var emval_handle_array = [
          {},
          { value: undefined },
          { value: null },
          { value: true },
          { value: false },
        ];
        function __emval_decref(handle) {
          if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
            emval_handle_array[handle] = undefined;
            emval_free_list.push(handle);
          }
        }
        function count_emval_handles() {
          var count = 0;
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== undefined) {
              ++count;
            }
          }
          return count;
        }
        function get_first_emval() {
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== undefined) {
              return emval_handle_array[i];
            }
          }
          return null;
        }
        function init_emval() {
          Module["count_emval_handles"] = count_emval_handles;
          Module["get_first_emval"] = get_first_emval;
        }
        var Emval = {
          toValue: function toValue(handle) {
            if (!handle) {
              throwBindingError("Cannot use deleted val. handle = " + handle);
            }
            return emval_handle_array[handle].value;
          },
          toHandle: function toHandle(value) {
            switch (value) {
              case undefined: {
                return 1;
              }
              case null: {
                return 2;
              }
              case true: {
                return 3;
              }
              case false: {
                return 4;
              }
              default: {
                var handle = emval_free_list.length
                  ? emval_free_list.pop()
                  : emval_handle_array.length;
                emval_handle_array[handle] = { refcount: 1, value: value };
                return handle;
              }
            }
          },
        };
        function simpleReadValueFromPointer(pointer) {
          return this["fromWireType"](HEAPU32[pointer >> 2]);
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
        function _embind_repr(v) {
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
              if (typeof value !== "number" && typeof value !== "boolean") {
                throw new TypeError(
                  'Cannot convert "' +
                    _embind_repr(value) +
                    '" to ' +
                    this.name,
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
            if (typeof value !== "number" && typeof value !== "boolean") {
              throw new TypeError(
                'Cannot convert "' + _embind_repr(value) + '" to ' + toTypeName,
              );
            }
            if (value < minRange || value > maxRange) {
              throw new TypeError(
                'Passing a number "' +
                  _embind_repr(value) +
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
            return new TA(buffer, data, size);
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
        function __embind_register_std_string(rawType, name) {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, {
            name: name,
            fromWireType: function fromWireType(value) {
              var length = HEAPU32[value >> 2];
              var str;
              if (stdStringIsUTF8) {
                var decodeStartPtr = value + 4;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = value + 4 + i;
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
                  a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
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
              var getLength;
              var valueIsOfTypeString = typeof value === "string";
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
                getLength = function getLength() {
                  return lengthBytesUTF8(value);
                };
              } else {
                getLength = function getLength() {
                  return value.length;
                };
              }
              var length = getLength();
              var ptr = _malloc(4 + length + 1);
              HEAPU32[ptr >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                stringToUTF8(value, ptr + 4, length + 1);
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
                    HEAPU8[ptr + 4 + i] = charCode;
                  }
                } else {
                  for (var i = 0; i < length; ++i) {
                    HEAPU8[ptr + 4 + i] = value[i];
                  }
                }
              }
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
        }
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
              if (!(typeof value === "string")) {
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
        }
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
        function _abort() {
          abort("native code called abort()");
        }
        var readAsmConstArgsArray = [];
        function readAsmConstArgs(sigPtr, buf) {
          assert(Array.isArray(readAsmConstArgsArray));
          assert(buf % 16 == 0);
          readAsmConstArgsArray.length = 0;
          var ch;
          buf >>= 2;
          while ((ch = HEAPU8[sigPtr++])) {
            assert(ch === 100 || ch === 102 || ch === 105);
            var readAsmConstArgsDouble = ch < 105;
            if (readAsmConstArgsDouble && buf & 1) buf++;
            readAsmConstArgsArray.push(
              readAsmConstArgsDouble ? HEAPF64[buf++ >> 1] : HEAP32[buf],
            );
            ++buf;
          }
          return readAsmConstArgsArray;
        }
        function _emscripten_asm_const_int(code, sigPtr, argbuf) {
          var args = readAsmConstArgs(sigPtr, argbuf);
          if (!Object.prototype.hasOwnProperty.call(ASM_CONSTS, code))
            abort("No EM_ASM constant found at address " + code);
          return ASM_CONSTS[code].apply(null, args);
        }
        function _emscripten_get_heap_max() {
          return 2147483648;
        }
        function emscripten_realloc_buffer(size) {
          try {
            wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16);
            updateGlobalBufferAndViews(wasmMemory.buffer);
            return 1;
          } catch (e) {
            err(
              "emscripten_realloc_buffer: Attempted to grow heap from " +
                buffer.byteLength +
                " bytes to " +
                size +
                " bytes, but got error: " +
                e,
            );
          }
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = HEAPU8.length;
          requestedSize = requestedSize >>> 0;
          assert(requestedSize > oldSize);
          var maxHeapSize = 2147483648;
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
            var replacement = emscripten_realloc_buffer(newSize);
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
        }
        embind_init_charCodes();
        BindingError = Module["BindingError"] = extendError(
          Error,
          "BindingError",
        );
        InternalError = Module["InternalError"] = extendError(
          Error,
          "InternalError",
        );
        init_emval();
        var ASSERTIONS = true;
        var asmLibraryArg = {
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
        };
        var asm = createWasm();
        var ___wasm_call_ctors = (Module["___wasm_call_ctors"] =
          createExportWrapper("__wasm_call_ctors"));
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
        var ___errno_location = (Module["___errno_location"] =
          createExportWrapper("__errno_location"));
        var ___getTypeName = (Module["___getTypeName"] =
          createExportWrapper("__getTypeName"));
        var ___embind_register_native_and_builtin_types = (Module[
          "___embind_register_native_and_builtin_types"
        ] = createExportWrapper("__embind_register_native_and_builtin_types"));
        var ___stdio_exit = (Module["___stdio_exit"] =
          createExportWrapper("__stdio_exit"));
        var _memalign = (Module["_memalign"] = createExportWrapper("memalign"));
        var _setThrew = (Module["_setThrew"] = createExportWrapper("setThrew"));
        var _emscripten_stack_init = (Module["_emscripten_stack_init"] =
          function () {
            return (_emscripten_stack_init = Module["_emscripten_stack_init"] =
              Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
          });
        var _emscripten_stack_get_free = (Module["_emscripten_stack_get_free"] =
          function () {
            return (_emscripten_stack_get_free = Module[
              "_emscripten_stack_get_free"
            ] =
              Module["asm"]["emscripten_stack_get_free"]).apply(
              null,
              arguments,
            );
          });
        var _emscripten_stack_get_end = (Module["_emscripten_stack_get_end"] =
          function () {
            return (_emscripten_stack_get_end = Module[
              "_emscripten_stack_get_end"
            ] =
              Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
          });
        var stackSave = (Module["stackSave"] =
          createExportWrapper("stackSave"));
        var stackRestore = (Module["stackRestore"] =
          createExportWrapper("stackRestore"));
        var stackAlloc = (Module["stackAlloc"] =
          createExportWrapper("stackAlloc"));
        var ___cxa_can_catch = (Module["___cxa_can_catch"] =
          createExportWrapper("__cxa_can_catch"));
        var ___cxa_is_pointer_type = (Module["___cxa_is_pointer_type"] =
          createExportWrapper("__cxa_is_pointer_type"));
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
        if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString"))
          Module["intArrayFromString"] = function () {
            return abort(
              "'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString"))
          Module["intArrayToString"] = function () {
            return abort(
              "'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "ccall"))
          Module["ccall"] = function () {
            return abort(
              "'ccall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "cwrap"))
          Module["cwrap"] = function () {
            return abort(
              "'cwrap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "setValue"))
          Module["setValue"] = function () {
            return abort(
              "'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        Module["getValue"] = getValue;
        if (!Object.getOwnPropertyDescriptor(Module, "allocate"))
          Module["allocate"] = function () {
            return abort(
              "'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString"))
          Module["UTF8ArrayToString"] = function () {
            return abort(
              "'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString"))
          Module["UTF8ToString"] = function () {
            return abort(
              "'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array"))
          Module["stringToUTF8Array"] = function () {
            return abort(
              "'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        Module["stringToUTF8"] = stringToUTF8;
        Module["lengthBytesUTF8"] = lengthBytesUTF8;
        if (!Object.getOwnPropertyDescriptor(Module, "stackTrace"))
          Module["stackTrace"] = function () {
            return abort(
              "'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun"))
          Module["addOnPreRun"] = function () {
            return abort(
              "'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "addOnInit"))
          Module["addOnInit"] = function () {
            return abort(
              "'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain"))
          Module["addOnPreMain"] = function () {
            return abort(
              "'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "addOnExit"))
          Module["addOnExit"] = function () {
            return abort(
              "'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun"))
          Module["addOnPostRun"] = function () {
            return abort(
              "'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory"))
          Module["writeStringToMemory"] = function () {
            return abort(
              "'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        Module["writeArrayToMemory"] = writeArrayToMemory;
        if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory"))
          Module["writeAsciiToMemory"] = function () {
            return abort(
              "'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency"))
          Module["addRunDependency"] = function () {
            return abort(
              "'addRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency"))
          Module["removeRunDependency"] = function () {
            return abort(
              "'removeRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder"))
          Module["FS_createFolder"] = function () {
            return abort(
              "'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath"))
          Module["FS_createPath"] = function () {
            return abort(
              "'FS_createPath' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile"))
          Module["FS_createDataFile"] = function () {
            return abort(
              "'FS_createDataFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile"))
          Module["FS_createPreloadedFile"] = function () {
            return abort(
              "'FS_createPreloadedFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile"))
          Module["FS_createLazyFile"] = function () {
            return abort(
              "'FS_createLazyFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink"))
          Module["FS_createLink"] = function () {
            return abort(
              "'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice"))
          Module["FS_createDevice"] = function () {
            return abort(
              "'FS_createDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink"))
          Module["FS_unlink"] = function () {
            return abort(
              "'FS_unlink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getLEB"))
          Module["getLEB"] = function () {
            return abort(
              "'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables"))
          Module["getFunctionTables"] = function () {
            return abort(
              "'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables"))
          Module["alignFunctionTables"] = function () {
            return abort(
              "'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions"))
          Module["registerFunctions"] = function () {
            return abort(
              "'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "addFunction"))
          Module["addFunction"] = function () {
            return abort(
              "'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "removeFunction"))
          Module["removeFunction"] = function () {
            return abort(
              "'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper"))
          Module["getFuncWrapper"] = function () {
            return abort(
              "'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint"))
          Module["prettyPrint"] = function () {
            return abort(
              "'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "dynCall"))
          Module["dynCall"] = function () {
            return abort(
              "'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting"))
          Module["getCompilerSetting"] = function () {
            return abort(
              "'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "print"))
          Module["print"] = function () {
            return abort(
              "'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "printErr"))
          Module["printErr"] = function () {
            return abort(
              "'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0"))
          Module["getTempRet0"] = function () {
            return abort(
              "'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0"))
          Module["setTempRet0"] = function () {
            return abort(
              "'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "callMain"))
          Module["callMain"] = function () {
            return abort(
              "'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "abort"))
          Module["abort"] = function () {
            return abort(
              "'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "keepRuntimeAlive"))
          Module["keepRuntimeAlive"] = function () {
            return abort(
              "'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "zeroMemory"))
          Module["zeroMemory"] = function () {
            return abort(
              "'zeroMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8"))
          Module["stringToNewUTF8"] = function () {
            return abort(
              "'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "setFileTime"))
          Module["setFileTime"] = function () {
            return abort(
              "'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")
        )
          Module["emscripten_realloc_buffer"] = function () {
            return abort(
              "'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "ENV"))
          Module["ENV"] = function () {
            return abort(
              "'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "withStackSave"))
          Module["withStackSave"] = function () {
            return abort(
              "'withStackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES"))
          Module["ERRNO_CODES"] = function () {
            return abort(
              "'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES"))
          Module["ERRNO_MESSAGES"] = function () {
            return abort(
              "'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "setErrNo"))
          Module["setErrNo"] = function () {
            return abort(
              "'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "inetPton4"))
          Module["inetPton4"] = function () {
            return abort(
              "'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "inetNtop4"))
          Module["inetNtop4"] = function () {
            return abort(
              "'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "inetPton6"))
          Module["inetPton6"] = function () {
            return abort(
              "'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "inetNtop6"))
          Module["inetNtop6"] = function () {
            return abort(
              "'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "readSockaddr"))
          Module["readSockaddr"] = function () {
            return abort(
              "'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "writeSockaddr"))
          Module["writeSockaddr"] = function () {
            return abort(
              "'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "DNS"))
          Module["DNS"] = function () {
            return abort(
              "'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getHostByName"))
          Module["getHostByName"] = function () {
            return abort(
              "'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES"))
          Module["GAI_ERRNO_MESSAGES"] = function () {
            return abort(
              "'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "Protocols"))
          Module["Protocols"] = function () {
            return abort(
              "'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "Sockets"))
          Module["Sockets"] = function () {
            return abort(
              "'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice"))
          Module["getRandomDevice"] = function () {
            return abort(
              "'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "traverseStack"))
          Module["traverseStack"] = function () {
            return abort(
              "'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "convertFrameToPC"))
          Module["convertFrameToPC"] = function () {
            return abort(
              "'convertFrameToPC' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE"))
          Module["UNWIND_CACHE"] = function () {
            return abort(
              "'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "saveInUnwindCache"))
          Module["saveInUnwindCache"] = function () {
            return abort(
              "'saveInUnwindCache' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "convertPCtoSourceLocation")
        )
          Module["convertPCtoSourceLocation"] = function () {
            return abort(
              "'convertPCtoSourceLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray"))
          Module["readAsmConstArgsArray"] = function () {
            return abort(
              "'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs"))
          Module["readAsmConstArgs"] = function () {
            return abort(
              "'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM"))
          Module["mainThreadEM_ASM"] = function () {
            return abort(
              "'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q"))
          Module["jstoi_q"] = function () {
            return abort(
              "'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s"))
          Module["jstoi_s"] = function () {
            return abort(
              "'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName"))
          Module["getExecutableName"] = function () {
            return abort(
              "'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "listenOnce"))
          Module["listenOnce"] = function () {
            return abort(
              "'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext"))
          Module["autoResumeAudioContext"] = function () {
            return abort(
              "'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy"))
          Module["dynCallLegacy"] = function () {
            return abort(
              "'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller"))
          Module["getDynCaller"] = function () {
            return abort(
              "'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "dynCall"))
          Module["dynCall"] = function () {
            return abort(
              "'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks"))
          Module["callRuntimeCallbacks"] = function () {
            return abort(
              "'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "setWasmTableEntry"))
          Module["setWasmTableEntry"] = function () {
            return abort(
              "'setWasmTableEntry' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getWasmTableEntry"))
          Module["getWasmTableEntry"] = function () {
            return abort(
              "'getWasmTableEntry' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "handleException"))
          Module["handleException"] = function () {
            return abort(
              "'handleException' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePush"))
          Module["runtimeKeepalivePush"] = function () {
            return abort(
              "'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePop"))
          Module["runtimeKeepalivePop"] = function () {
            return abort(
              "'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "callUserCallback"))
          Module["callUserCallback"] = function () {
            return abort(
              "'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "maybeExit"))
          Module["maybeExit"] = function () {
            return abort(
              "'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "safeSetTimeout"))
          Module["safeSetTimeout"] = function () {
            return abort(
              "'safeSetTimeout' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "asmjsMangle"))
          Module["asmjsMangle"] = function () {
            return abort(
              "'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "asyncLoad"))
          Module["asyncLoad"] = function () {
            return abort(
              "'asyncLoad' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "alignMemory"))
          Module["alignMemory"] = function () {
            return abort(
              "'alignMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc"))
          Module["mmapAlloc"] = function () {
            return abort(
              "'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative"))
          Module["reallyNegative"] = function () {
            return abort(
              "'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "unSign"))
          Module["unSign"] = function () {
            return abort(
              "'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "reSign"))
          Module["reSign"] = function () {
            return abort(
              "'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "formatString"))
          Module["formatString"] = function () {
            return abort(
              "'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "PATH"))
          Module["PATH"] = function () {
            return abort(
              "'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS"))
          Module["PATH_FS"] = function () {
            return abort(
              "'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS"))
          Module["SYSCALLS"] = function () {
            return abort(
              "'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2"))
          Module["syscallMmap2"] = function () {
            return abort(
              "'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap"))
          Module["syscallMunmap"] = function () {
            return abort(
              "'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD"))
          Module["getSocketFromFD"] = function () {
            return abort(
              "'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress"))
          Module["getSocketAddress"] = function () {
            return abort(
              "'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "JSEvents"))
          Module["JSEvents"] = function () {
            return abort(
              "'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback")
        )
          Module["registerKeyEventCallback"] = function () {
            return abort(
              "'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets"))
          Module["specialHTMLTargets"] = function () {
            return abort(
              "'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString"))
          Module["maybeCStringToJsString"] = function () {
            return abort(
              "'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget"))
          Module["findEventTarget"] = function () {
            return abort(
              "'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget"))
          Module["findCanvasEventTarget"] = function () {
            return abort(
              "'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect"))
          Module["getBoundingClientRect"] = function () {
            return abort(
              "'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData"))
          Module["fillMouseEventData"] = function () {
            return abort(
              "'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback")
        )
          Module["registerMouseEventCallback"] = function () {
            return abort(
              "'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback")
        )
          Module["registerWheelEventCallback"] = function () {
            return abort(
              "'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback"))
          Module["registerUiEventCallback"] = function () {
            return abort(
              "'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback")
        )
          Module["registerFocusEventCallback"] = function () {
            return abort(
              "'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "fillDeviceOrientationEventData",
          )
        )
          Module["fillDeviceOrientationEventData"] = function () {
            return abort(
              "'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "registerDeviceOrientationEventCallback",
          )
        )
          Module["registerDeviceOrientationEventCallback"] = function () {
            return abort(
              "'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData")
        )
          Module["fillDeviceMotionEventData"] = function () {
            return abort(
              "'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "registerDeviceMotionEventCallback",
          )
        )
          Module["registerDeviceMotionEventCallback"] = function () {
            return abort(
              "'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation"))
          Module["screenOrientation"] = function () {
            return abort(
              "'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "fillOrientationChangeEventData",
          )
        )
          Module["fillOrientationChangeEventData"] = function () {
            return abort(
              "'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "registerOrientationChangeEventCallback",
          )
        )
          Module["registerOrientationChangeEventCallback"] = function () {
            return abort(
              "'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "fillFullscreenChangeEventData",
          )
        )
          Module["fillFullscreenChangeEventData"] = function () {
            return abort(
              "'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "registerFullscreenChangeEventCallback",
          )
        )
          Module["registerFullscreenChangeEventCallback"] = function () {
            return abort(
              "'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle"))
          Module["registerRestoreOldStyle"] = function () {
            return abort(
              "'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "hideEverythingExceptGivenElement",
          )
        )
          Module["hideEverythingExceptGivenElement"] = function () {
            return abort(
              "'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements"))
          Module["restoreHiddenElements"] = function () {
            return abort(
              "'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox"))
          Module["setLetterbox"] = function () {
            return abort(
              "'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy")
        )
          Module["currentFullscreenStrategy"] = function () {
            return abort(
              "'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle"))
          Module["restoreOldWindowedStyle"] = function () {
            return abort(
              "'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "softFullscreenResizeWebGLRenderTarget",
          )
        )
          Module["softFullscreenResizeWebGLRenderTarget"] = function () {
            return abort(
              "'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen"))
          Module["doRequestFullscreen"] = function () {
            return abort(
              "'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "fillPointerlockChangeEventData",
          )
        )
          Module["fillPointerlockChangeEventData"] = function () {
            return abort(
              "'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "registerPointerlockChangeEventCallback",
          )
        )
          Module["registerPointerlockChangeEventCallback"] = function () {
            return abort(
              "'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "registerPointerlockErrorEventCallback",
          )
        )
          Module["registerPointerlockErrorEventCallback"] = function () {
            return abort(
              "'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock"))
          Module["requestPointerLock"] = function () {
            return abort(
              "'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "fillVisibilityChangeEventData",
          )
        )
          Module["fillVisibilityChangeEventData"] = function () {
            return abort(
              "'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "registerVisibilityChangeEventCallback",
          )
        )
          Module["registerVisibilityChangeEventCallback"] = function () {
            return abort(
              "'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback")
        )
          Module["registerTouchEventCallback"] = function () {
            return abort(
              "'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData"))
          Module["fillGamepadEventData"] = function () {
            return abort(
              "'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "registerGamepadEventCallback",
          )
        )
          Module["registerGamepadEventCallback"] = function () {
            return abort(
              "'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "registerBeforeUnloadEventCallback",
          )
        )
          Module["registerBeforeUnloadEventCallback"] = function () {
            return abort(
              "'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData"))
          Module["fillBatteryEventData"] = function () {
            return abort(
              "'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "battery"))
          Module["battery"] = function () {
            return abort(
              "'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "registerBatteryEventCallback",
          )
        )
          Module["registerBatteryEventCallback"] = function () {
            return abort(
              "'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize"))
          Module["setCanvasElementSize"] = function () {
            return abort(
              "'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize"))
          Module["getCanvasElementSize"] = function () {
            return abort(
              "'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "demangle"))
          Module["demangle"] = function () {
            return abort(
              "'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "demangleAll"))
          Module["demangleAll"] = function () {
            return abort(
              "'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace"))
          Module["jsStackTrace"] = function () {
            return abort(
              "'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "stackTrace"))
          Module["stackTrace"] = function () {
            return abort(
              "'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings"))
          Module["getEnvStrings"] = function () {
            return abort(
              "'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock"))
          Module["checkWasiClock"] = function () {
            return abort(
              "'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "flush_NO_FILESYSTEM"))
          Module["flush_NO_FILESYSTEM"] = function () {
            return abort(
              "'flush_NO_FILESYSTEM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64"))
          Module["writeI53ToI64"] = function () {
            return abort(
              "'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped"))
          Module["writeI53ToI64Clamped"] = function () {
            return abort(
              "'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling"))
          Module["writeI53ToI64Signaling"] = function () {
            return abort(
              "'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped"))
          Module["writeI53ToU64Clamped"] = function () {
            return abort(
              "'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling"))
          Module["writeI53ToU64Signaling"] = function () {
            return abort(
              "'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64"))
          Module["readI53FromI64"] = function () {
            return abort(
              "'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64"))
          Module["readI53FromU64"] = function () {
            return abort(
              "'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53"))
          Module["convertI32PairToI53"] = function () {
            return abort(
              "'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53"))
          Module["convertU32PairToI53"] = function () {
            return abort(
              "'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "setImmediateWrapped"))
          Module["setImmediateWrapped"] = function () {
            return abort(
              "'setImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "clearImmediateWrapped"))
          Module["clearImmediateWrapped"] = function () {
            return abort(
              "'clearImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate"))
          Module["polyfillSetImmediate"] = function () {
            return abort(
              "'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount"))
          Module["uncaughtExceptionCount"] = function () {
            return abort(
              "'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast"))
          Module["exceptionLast"] = function () {
            return abort(
              "'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught"))
          Module["exceptionCaught"] = function () {
            return abort(
              "'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo"))
          Module["ExceptionInfo"] = function () {
            return abort(
              "'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo"))
          Module["CatchInfo"] = function () {
            return abort(
              "'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef"))
          Module["exception_addRef"] = function () {
            return abort(
              "'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef"))
          Module["exception_decRef"] = function () {
            return abort(
              "'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "Browser"))
          Module["Browser"] = function () {
            return abort(
              "'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers"))
          Module["funcWrappers"] = function () {
            return abort(
              "'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper"))
          Module["getFuncWrapper"] = function () {
            return abort(
              "'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop"))
          Module["setMainLoop"] = function () {
            return abort(
              "'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "wget"))
          Module["wget"] = function () {
            return abort(
              "'wget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "FS"))
          Module["FS"] = function () {
            return abort(
              "'FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "MEMFS"))
          Module["MEMFS"] = function () {
            return abort(
              "'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "TTY"))
          Module["TTY"] = function () {
            return abort(
              "'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS"))
          Module["PIPEFS"] = function () {
            return abort(
              "'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS"))
          Module["SOCKFS"] = function () {
            return abort(
              "'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback"))
          Module["_setNetworkCallback"] = function () {
            return abort(
              "'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray"))
          Module["tempFixedLengthArray"] = function () {
            return abort(
              "'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")
        )
          Module["miniTempWebGLFloatBuffers"] = function () {
            return abort(
              "'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType"))
          Module["heapObjectForWebGLType"] = function () {
            return abort(
              "'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "heapAccessShiftForWebGLHeap",
          )
        )
          Module["heapAccessShiftForWebGLHeap"] = function () {
            return abort(
              "'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "GL"))
          Module["GL"] = function () {
            return abort(
              "'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet"))
          Module["emscriptenWebGLGet"] = function () {
            return abort(
              "'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "computeUnpackAlignedImageSize",
          )
        )
          Module["computeUnpackAlignedImageSize"] = function () {
            return abort(
              "'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "emscriptenWebGLGetTexPixelData",
          )
        )
          Module["emscriptenWebGLGetTexPixelData"] = function () {
            return abort(
              "'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")
        )
          Module["emscriptenWebGLGetUniform"] = function () {
            return abort(
              "'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "webglGetUniformLocation"))
          Module["webglGetUniformLocation"] = function () {
            return abort(
              "'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "webglPrepareUniformLocationsBeforeFirstUse",
          )
        )
          Module["webglPrepareUniformLocationsBeforeFirstUse"] = function () {
            return abort(
              "'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "webglGetLeftBracePos"))
          Module["webglGetLeftBracePos"] = function () {
            return abort(
              "'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "emscriptenWebGLGetVertexAttrib",
          )
        )
          Module["emscriptenWebGLGetVertexAttrib"] = function () {
            return abort(
              "'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray"))
          Module["writeGLArray"] = function () {
            return abort(
              "'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "AL"))
          Module["AL"] = function () {
            return abort(
              "'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode"))
          Module["SDL_unicode"] = function () {
            return abort(
              "'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext"))
          Module["SDL_ttfContext"] = function () {
            return abort(
              "'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio"))
          Module["SDL_audio"] = function () {
            return abort(
              "'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "SDL"))
          Module["SDL"] = function () {
            return abort(
              "'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx"))
          Module["SDL_gfx"] = function () {
            return abort(
              "'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "GLUT"))
          Module["GLUT"] = function () {
            return abort(
              "'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "EGL"))
          Module["EGL"] = function () {
            return abort(
              "'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window"))
          Module["GLFW_Window"] = function () {
            return abort(
              "'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "GLFW"))
          Module["GLFW"] = function () {
            return abort(
              "'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "GLEW"))
          Module["GLEW"] = function () {
            return abort(
              "'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "IDBStore"))
          Module["IDBStore"] = function () {
            return abort(
              "'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError"))
          Module["runAndAbortIfError"] = function () {
            return abort(
              "'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "InternalError"))
          Module["InternalError"] = function () {
            return abort(
              "'InternalError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "BindingError"))
          Module["BindingError"] = function () {
            return abort(
              "'BindingError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "UnboundTypeError"))
          Module["UnboundTypeError"] = function () {
            return abort(
              "'UnboundTypeError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "PureVirtualError"))
          Module["PureVirtualError"] = function () {
            return abort(
              "'PureVirtualError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "init_embind"))
          Module["init_embind"] = function () {
            return abort(
              "'init_embind' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "throwInternalError"))
          Module["throwInternalError"] = function () {
            return abort(
              "'throwInternalError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "throwBindingError"))
          Module["throwBindingError"] = function () {
            return abort(
              "'throwBindingError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "throwUnboundTypeError"))
          Module["throwUnboundTypeError"] = function () {
            return abort(
              "'throwUnboundTypeError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "ensureOverloadTable"))
          Module["ensureOverloadTable"] = function () {
            return abort(
              "'ensureOverloadTable' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "exposePublicSymbol"))
          Module["exposePublicSymbol"] = function () {
            return abort(
              "'exposePublicSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "replacePublicSymbol"))
          Module["replacePublicSymbol"] = function () {
            return abort(
              "'replacePublicSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "extendError"))
          Module["extendError"] = function () {
            return abort(
              "'extendError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "createNamedFunction"))
          Module["createNamedFunction"] = function () {
            return abort(
              "'createNamedFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "registeredInstances"))
          Module["registeredInstances"] = function () {
            return abort(
              "'registeredInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getBasestPointer"))
          Module["getBasestPointer"] = function () {
            return abort(
              "'getBasestPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "registerInheritedInstance")
        )
          Module["registerInheritedInstance"] = function () {
            return abort(
              "'registerInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "unregisterInheritedInstance",
          )
        )
          Module["unregisterInheritedInstance"] = function () {
            return abort(
              "'unregisterInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstance"))
          Module["getInheritedInstance"] = function () {
            return abort(
              "'getInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "getInheritedInstanceCount")
        )
          Module["getInheritedInstanceCount"] = function () {
            return abort(
              "'getInheritedInstanceCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "getLiveInheritedInstances")
        )
          Module["getLiveInheritedInstances"] = function () {
            return abort(
              "'getLiveInheritedInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "registeredTypes"))
          Module["registeredTypes"] = function () {
            return abort(
              "'registeredTypes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "awaitingDependencies"))
          Module["awaitingDependencies"] = function () {
            return abort(
              "'awaitingDependencies' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "typeDependencies"))
          Module["typeDependencies"] = function () {
            return abort(
              "'typeDependencies' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "registeredPointers"))
          Module["registeredPointers"] = function () {
            return abort(
              "'registeredPointers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "registerType"))
          Module["registerType"] = function () {
            return abort(
              "'registerType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "whenDependentTypesAreResolved",
          )
        )
          Module["whenDependentTypesAreResolved"] = function () {
            return abort(
              "'whenDependentTypesAreResolved' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "embind_charCodes"))
          Module["embind_charCodes"] = function () {
            return abort(
              "'embind_charCodes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "embind_init_charCodes"))
          Module["embind_init_charCodes"] = function () {
            return abort(
              "'embind_init_charCodes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "readLatin1String"))
          Module["readLatin1String"] = function () {
            return abort(
              "'readLatin1String' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getTypeName"))
          Module["getTypeName"] = function () {
            return abort(
              "'getTypeName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "heap32VectorToArray"))
          Module["heap32VectorToArray"] = function () {
            return abort(
              "'heap32VectorToArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "requireRegisteredType"))
          Module["requireRegisteredType"] = function () {
            return abort(
              "'requireRegisteredType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getShiftFromSize"))
          Module["getShiftFromSize"] = function () {
            return abort(
              "'getShiftFromSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "integerReadValueFromPointer",
          )
        )
          Module["integerReadValueFromPointer"] = function () {
            return abort(
              "'integerReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "enumReadValueFromPointer")
        )
          Module["enumReadValueFromPointer"] = function () {
            return abort(
              "'enumReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "floatReadValueFromPointer")
        )
          Module["floatReadValueFromPointer"] = function () {
            return abort(
              "'floatReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "simpleReadValueFromPointer")
        )
          Module["simpleReadValueFromPointer"] = function () {
            return abort(
              "'simpleReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "runDestructors"))
          Module["runDestructors"] = function () {
            return abort(
              "'runDestructors' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "new_"))
          Module["new_"] = function () {
            return abort(
              "'new_' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "craftInvokerFunction"))
          Module["craftInvokerFunction"] = function () {
            return abort(
              "'craftInvokerFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "embind__requireFunction"))
          Module["embind__requireFunction"] = function () {
            return abort(
              "'embind__requireFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "tupleRegistrations"))
          Module["tupleRegistrations"] = function () {
            return abort(
              "'tupleRegistrations' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "structRegistrations"))
          Module["structRegistrations"] = function () {
            return abort(
              "'structRegistrations' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "genericPointerToWireType")
        )
          Module["genericPointerToWireType"] = function () {
            return abort(
              "'genericPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "constNoSmartPtrRawPointerToWireType",
          )
        )
          Module["constNoSmartPtrRawPointerToWireType"] = function () {
            return abort(
              "'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "nonConstNoSmartPtrRawPointerToWireType",
          )
        )
          Module["nonConstNoSmartPtrRawPointerToWireType"] = function () {
            return abort(
              "'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "init_RegisteredPointer"))
          Module["init_RegisteredPointer"] = function () {
            return abort(
              "'init_RegisteredPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer"))
          Module["RegisteredPointer"] = function () {
            return abort(
              "'RegisteredPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "RegisteredPointer_getPointee",
          )
        )
          Module["RegisteredPointer_getPointee"] = function () {
            return abort(
              "'RegisteredPointer_getPointee' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "RegisteredPointer_destructor",
          )
        )
          Module["RegisteredPointer_destructor"] = function () {
            return abort(
              "'RegisteredPointer_destructor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "RegisteredPointer_deleteObject",
          )
        )
          Module["RegisteredPointer_deleteObject"] = function () {
            return abort(
              "'RegisteredPointer_deleteObject' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "RegisteredPointer_fromWireType",
          )
        )
          Module["RegisteredPointer_fromWireType"] = function () {
            return abort(
              "'RegisteredPointer_fromWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "runDestructor"))
          Module["runDestructor"] = function () {
            return abort(
              "'runDestructor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "releaseClassHandle"))
          Module["releaseClassHandle"] = function () {
            return abort(
              "'releaseClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "finalizationGroup"))
          Module["finalizationGroup"] = function () {
            return abort(
              "'finalizationGroup' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer_deps"))
          Module["detachFinalizer_deps"] = function () {
            return abort(
              "'detachFinalizer_deps' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer"))
          Module["detachFinalizer"] = function () {
            return abort(
              "'detachFinalizer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "attachFinalizer"))
          Module["attachFinalizer"] = function () {
            return abort(
              "'attachFinalizer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "makeClassHandle"))
          Module["makeClassHandle"] = function () {
            return abort(
              "'makeClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "init_ClassHandle"))
          Module["init_ClassHandle"] = function () {
            return abort(
              "'init_ClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle"))
          Module["ClassHandle"] = function () {
            return abort(
              "'ClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isAliasOf"))
          Module["ClassHandle_isAliasOf"] = function () {
            return abort(
              "'ClassHandle_isAliasOf' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(
            Module,
            "throwInstanceAlreadyDeleted",
          )
        )
          Module["throwInstanceAlreadyDeleted"] = function () {
            return abort(
              "'throwInstanceAlreadyDeleted' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_clone"))
          Module["ClassHandle_clone"] = function () {
            return abort(
              "'ClassHandle_clone' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_delete"))
          Module["ClassHandle_delete"] = function () {
            return abort(
              "'ClassHandle_delete' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "deletionQueue"))
          Module["deletionQueue"] = function () {
            return abort(
              "'deletionQueue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isDeleted"))
          Module["ClassHandle_isDeleted"] = function () {
            return abort(
              "'ClassHandle_isDeleted' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_deleteLater"))
          Module["ClassHandle_deleteLater"] = function () {
            return abort(
              "'ClassHandle_deleteLater' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "flushPendingDeletes"))
          Module["flushPendingDeletes"] = function () {
            return abort(
              "'flushPendingDeletes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "delayFunction"))
          Module["delayFunction"] = function () {
            return abort(
              "'delayFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "setDelayFunction"))
          Module["setDelayFunction"] = function () {
            return abort(
              "'setDelayFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "RegisteredClass"))
          Module["RegisteredClass"] = function () {
            return abort(
              "'RegisteredClass' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (
          !Object.getOwnPropertyDescriptor(Module, "shallowCopyInternalPointer")
        )
          Module["shallowCopyInternalPointer"] = function () {
            return abort(
              "'shallowCopyInternalPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "downcastPointer"))
          Module["downcastPointer"] = function () {
            return abort(
              "'downcastPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "upcastPointer"))
          Module["upcastPointer"] = function () {
            return abort(
              "'upcastPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "validateThis"))
          Module["validateThis"] = function () {
            return abort(
              "'validateThis' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "char_0"))
          Module["char_0"] = function () {
            return abort(
              "'char_0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "char_9"))
          Module["char_9"] = function () {
            return abort(
              "'char_9' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "makeLegalFunctionName"))
          Module["makeLegalFunctionName"] = function () {
            return abort(
              "'makeLegalFunctionName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "emval_handle_array"))
          Module["emval_handle_array"] = function () {
            return abort(
              "'emval_handle_array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "emval_free_list"))
          Module["emval_free_list"] = function () {
            return abort(
              "'emval_free_list' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "emval_symbols"))
          Module["emval_symbols"] = function () {
            return abort(
              "'emval_symbols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "init_emval"))
          Module["init_emval"] = function () {
            return abort(
              "'init_emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "count_emval_handles"))
          Module["count_emval_handles"] = function () {
            return abort(
              "'count_emval_handles' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "get_first_emval"))
          Module["get_first_emval"] = function () {
            return abort(
              "'get_first_emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "getStringOrSymbol"))
          Module["getStringOrSymbol"] = function () {
            return abort(
              "'getStringOrSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "Emval"))
          Module["Emval"] = function () {
            return abort(
              "'Emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "emval_newers"))
          Module["emval_newers"] = function () {
            return abort(
              "'emval_newers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "craftEmvalAllocator"))
          Module["craftEmvalAllocator"] = function () {
            return abort(
              "'craftEmvalAllocator' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "emval_get_global"))
          Module["emval_get_global"] = function () {
            return abort(
              "'emval_get_global' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "emval_methodCallers"))
          Module["emval_methodCallers"] = function () {
            return abort(
              "'emval_methodCallers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "emval_registeredMethods"))
          Module["emval_registeredMethods"] = function () {
            return abort(
              "'emval_registeredMethods' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "warnOnce"))
          Module["warnOnce"] = function () {
            return abort(
              "'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "stackSave"))
          Module["stackSave"] = function () {
            return abort(
              "'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "stackRestore"))
          Module["stackRestore"] = function () {
            return abort(
              "'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc"))
          Module["stackAlloc"] = function () {
            return abort(
              "'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString"))
          Module["AsciiToString"] = function () {
            return abort(
              "'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii"))
          Module["stringToAscii"] = function () {
            return abort(
              "'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString"))
          Module["UTF16ToString"] = function () {
            return abort(
              "'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16"))
          Module["stringToUTF16"] = function () {
            return abort(
              "'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16"))
          Module["lengthBytesUTF16"] = function () {
            return abort(
              "'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString"))
          Module["UTF32ToString"] = function () {
            return abort(
              "'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32"))
          Module["stringToUTF32"] = function () {
            return abort(
              "'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32"))
          Module["lengthBytesUTF32"] = function () {
            return abort(
              "'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8"))
          Module["allocateUTF8"] = function () {
            return abort(
              "'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack"))
          Module["allocateUTF8OnStack"] = function () {
            return abort(
              "'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
            );
          };
        Module["writeStackCookie"] = writeStackCookie;
        Module["checkStackCookie"] = checkStackCookie;
        if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL"))
          Object.defineProperty(Module, "ALLOC_NORMAL", {
            configurable: true,
            get: function get() {
              abort(
                "'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
              );
            },
          });
        if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK"))
          Object.defineProperty(Module, "ALLOC_STACK", {
            configurable: true,
            get: function get() {
              abort(
                "'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)",
              );
            },
          });
        var calledRun;
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function stackCheckInit() {
          _emscripten_stack_init();
          writeStackCookie();
        }
        function run(args) {
          args = args || arguments_;
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
        Module["run"] = run;
        function checkUnflushedContent() {
          var oldOut = out;
          var oldErr = err;
          var has = false;
          out = err = function err(x) {
            has = true;
          };
          try {
            var flush = null;
          } catch (e) {}
          out = oldOut;
          err = oldErr;
          if (has) {
            warnOnce(
              "stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.",
            );
            warnOnce(
              "(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)",
            );
          }
        }
        function procExit(code) {
          EXITSTATUS = code;
          if (!keepRuntimeAlive()) {
            if (Module["onExit"]) Module["onExit"](code);
            ABORT = true;
          }
          quit_(code, new ExitStatus(code));
        }
        if (Module["preInit"]) {
          if (typeof Module["preInit"] == "function")
            Module["preInit"] = [Module["preInit"]];
          while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
          }
        }
        run();

        return Module.ready;
      };
    })();
    if (typeof exports === "object" && typeof module === "object")
      module.exports = Module;
    else if (typeof define === "function" && define["amd"])
      define([], function () {
        return Module;
      });
    else if (typeof exports === "object") exports["Module"] = Module;
  },
  null,
);
