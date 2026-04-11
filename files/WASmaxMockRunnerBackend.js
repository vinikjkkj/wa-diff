__d(
  "WASmaxMockRunnerBackend",
  ["WASmaxMockRunnerUtils", "WASmaxWasmMemoryManagement"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t) {
        (t === void 0 && (t = function () {}),
          (this.wasmModule = o(
            "WASmaxWasmMemoryManagement",
          ).enableWasmMemoryManagement(e)),
          this.wasmModule.enterStackFrame());
        var n = o("WASmaxMockRunnerUtils").makePointer(this.wasmModule),
          r = o("WASmaxMockRunnerUtils").makePointer(this.wasmModule),
          a = e._malloc(12),
          i = e.addFunction(function (n, r, o) {
            t(e.UTF8ToString(r), e.UTF8ToString(o));
          }, "viii");
        (e.setValue(a, 0, "*"),
          e.setValue(a + 4, i, "*"),
          e.setValue(a + 8, 0, "*"),
          this.wasmModule.ccall(
            "SmaxFlipperPluginBackendCreate",
            null,
            ["number", "number", "number"],
            [n, r, a],
          ),
          (this.backendPointer = this.wasmModule.getValue(n, "*")),
          (this.runnerPointer = this.wasmModule.getValue(r, "*")));
      }
      var t = e.prototype;
      return (
        (t.handleRpc = function (t) {
          var e = this,
            n = o("WASmaxMockRunnerUtils").makePointer(this.wasmModule),
            r = o("WASmaxMockRunnerUtils").withError(
              this.wasmModule,
              function (r) {
                var o = JSON.stringify(t),
                  a = e.wasmModule.lengthBytesUTF8(o) + 1,
                  i = e.wasmModule._malloc(a);
                (e.wasmModule.stringToUTF8(o, i, a),
                  e.wasmModule.ccall(
                    "SmaxFlipperPluginBackendHandleRpc",
                    null,
                    ["number", "number", "number", "number"],
                    [e.backendPointer, i, n, r],
                  ));
              },
            ),
            a = this.wasmModule.getValue(n, "*"),
            i = this.wasmModule.UTF8ToString(a);
          return (
            this.wasmModule.ccall(
              "SmaxFlipperPluginBackendFreeResponse",
              null,
              ["number"],
              [a],
            ),
            JSON.parse(i)
          );
        }),
        (t.cleanup = function () {
          (this.wasmModule.ccall(
            "SmaxFlipperPluginBackendFree",
            null,
            ["number"],
            [this.backendPointer],
          ),
            this.wasmModule.exitStackFrame(),
            this.wasmModule.ensureNoMemoryLeaks());
        }),
        e
      );
    })();
    l.SmaxMockRunnerBackend = e;
  },
  98,
);
