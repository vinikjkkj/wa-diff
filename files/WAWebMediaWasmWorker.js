__d(
  "WAWebMediaWasmWorker",
  [
    "HandleTranscodeToMp4Request",
    "Promise",
    "VideoTranscodeToMp4",
    "VideoTranscodeUtils",
    "WACryptoHmac",
    "WACryptoSha256",
    "WAErrorMessage",
    "WAGetKaleidoscopeWasm",
    "WAKaleidoscopeClassify",
    "WAKaleidoscopeMp4RepairMux",
    "WAMediaWasmWorkerQplProxy",
    "WAResultOrError",
    "WorkerMessagePort",
    "WorkerSelf",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (o("WorkerMessagePort").WorkerSyncedMessagePort)(
        self,
        "WAWebMediaWasmWorker",
      );
    self.onerror = function (e) {
      var t = "Uncaught error in WAWebMediaWasmWorker: " + e.toString();
      u("error", t);
    };
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield s.fullyConnected;
          n.postMessage({ type: "log", logType: e, message: t });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield s.fullyConnected;
          t.postMessage(babelHelpers.extends({ type: "qpl" }, e));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.buffer,
            n = e.output,
            r = e.requestId,
            o = yield s.fullyConnected;
          o.postMessage(
            {
              type: "calculateFilehashResponse",
              output: n,
              transferredBuffer: t,
              requestId: r,
            },
            [t],
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.buffer,
            n = e.keyBuffer,
            r = e.output,
            o = e.requestId,
            a = yield s.fullyConnected;
          a.postMessage(
            {
              type: "calculateHmacSha256Response",
              output: r,
              transferredKeyBuffer: n,
              transferredBuffer: t,
              requestId: o,
            },
            [n, t],
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return o("WAKaleidoscopeMp4RepairMux").mp4RepairMux({ input: e });
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.output,
            n = e.requestId,
            r = yield s.fullyConnected;
          r.postMessage(
            { output: t, requestId: n, type: "transcodeToMp4Response" },
            t.success ? [t.value] : void 0,
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.operation,
            n = e.output,
            r = e.requestId,
            o = yield s.fullyConnected;
          o.postMessage(
            {
              type: "mediaOperationResponse",
              operation: t,
              output: n,
              requestId: r,
            },
            n.success ? [n.value] : void 0,
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.input,
            n = e.output,
            r = e.requestId,
            o = yield s.fullyConnected;
          o.postMessage(
            {
              type: "kaleidoscopeClassifyResponse",
              output: n,
              transferredBuffer: t,
              requestId: r,
            },
            [t],
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      (o("WorkerSelf").init(s),
        s.addMessageListener("calculateFilehashRequest", function (t) {
          return (e || (e = n("Promise")))
            .resolve()
            .then(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield o("WACryptoSha256").sha256Base64(t.buffer);
                return p({
                  output: o("WAResultOrError").makeResult(e),
                  buffer: t.buffer,
                  requestId: t.requestId,
                });
              }),
            )
            .catch(function (e) {
              var n =
                "calculateFilehash has runtime-error " +
                o("WAErrorMessage").maybeGetMessageFromError(e);
              return p({
                output: o("WAResultOrError").makeError({
                  errorMessage: n,
                  errorType: "runtime-error",
                }),
                buffer: t.buffer,
                requestId: t.requestId,
              });
            });
        }),
        s.addMessageListener("calculateHmacSha256Request", function (t) {
          return (e || (e = n("Promise")))
            .resolve()
            .then(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield o("WACryptoHmac").hmacSha256(
                  t.keyBuffer,
                  t.buffer,
                  t.length,
                );
                return f({
                  output: o("WAResultOrError").makeResult(e),
                  keyBuffer: t.keyBuffer,
                  buffer: t.buffer,
                  requestId: t.requestId,
                });
              }),
            )
            .catch(function (e) {
              var n =
                "calculateHmacSha256 has runtime-error " +
                o("WAErrorMessage").maybeGetMessageFromError(e);
              return f({
                output: o("WAResultOrError").makeError({
                  errorMessage: n,
                  errorType: "runtime-error",
                }),
                keyBuffer: t.keyBuffer,
                buffer: t.buffer,
                requestId: t.requestId,
              });
            });
        }),
        s.addMessageListener("transcodeToMp4Request", function (t) {
          var r = t.input,
            a = t.mimeType,
            i = t.qplData,
            l = t.supportsHevc,
            s = o("WAMediaWasmWorkerQplProxy").continueQplMediaWasmWorkeQplFlow(
              i.event,
              i.instanceKey,
            );
          return (e || (e = n("Promise")))
            .resolve()
            .then(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield o(
                  "HandleTranscodeToMp4Request",
                ).handleTranscodeToMp4Request({
                  input: r,
                  runMp4RepairMux: h,
                  transcodeToMp4Module: {
                    getOptionalMetadata: o("VideoTranscodeToMp4")
                      .getOptionalMetadata,
                    transcode: o("VideoTranscodeToMp4").transcode,
                  },
                  qplFlow: s,
                  mimeType: a,
                  supportsHevc: l,
                });
                return (
                  o("VideoTranscodeUtils").annotateTranscodeReponse({
                    maybeTranscodeResponse: e.success
                      ? e.value.transcodeResponse
                      : e.error.transcodeResponse,
                    eventFlow: s,
                  }),
                  y({
                    output: e.success
                      ? o("WAResultOrError").makeResult(e.value.buffer)
                      : o("WAResultOrError").makeError(e.error.error),
                    requestId: t.requestId,
                  })
                );
              }),
            )
            .catch(function (e) {
              return (
                s.addPoint("handle_transcode_runtime_error"),
                y({
                  output: o("WAResultOrError").makeError({
                    errorType: "runtime-error",
                    errorMessage:
                      "operation: transcodeToMp4 has runtime-error " +
                      o("WAErrorMessage").maybeGetMessageFromError(e),
                  }),
                  requestId: t.requestId,
                })
              );
            });
        }),
        s.addMessageListener("mediaOperationRequest", function (t) {
          return (e || (e = n("Promise")))
            .resolve()
            .then(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = t.input,
                  n = t.operation,
                  r = t.requestId,
                  a = yield h(e);
                if (a.success === !1) {
                  u("error", a.error);
                  var i = o("WAResultOrError").makeError({
                    errorType: a.error,
                    errorMessage: "mp4RepairMux failed",
                  });
                  return b({ output: i, operation: n, requestId: r });
                }
                var l = o("WAResultOrError").makeResult(a.value);
                return b({ output: l, operation: n, requestId: r });
              }),
            )
            .catch(function (e) {
              var n =
                "operation: " +
                t.operation +
                " has runtime-error " +
                o("WAErrorMessage").maybeGetMessageFromError(e);
              return b({
                output: o("WAResultOrError").makeError({
                  errorType: "runtime-error",
                  errorMessage: n,
                }),
                operation: t.operation,
                requestId: t.requestId,
              });
            });
        }),
        s.addMessageListener("prewarm", function (t) {
          return (e || (e = n("Promise")))
            .resolve()
            .then(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                switch (t.operation) {
                  case "mp4RepairMux":
                  case "kaleidoscopeClassify":
                    yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm();
                    break;
                  default:
                    t.operation;
                }
              }),
            )
            .catch(function (e) {
              u(
                "dev",
                "failed to prewarm operation: " +
                  t.operation +
                  ", error: " +
                  r("getErrorSafe")(e).message,
              );
            });
        }),
        s.addMessageListener("kaleidoscopeClassifyRequest", function (t) {
          return (e || (e = n("Promise")))
            .resolve()
            .then(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = t.input,
                  n = t.mediaType,
                  r = t.rawMimeType,
                  a = t.requestId,
                  i = yield o(
                    "WAKaleidoscopeClassify",
                  ).kaleidoscopeClassifyByMediaType(e, n, r);
                return S({
                  output: i.success
                    ? o("WAResultOrError").makeResult({
                        mimetype: i.value.mimetype,
                        extension: i.value.extension,
                        score: i.value.score,
                      })
                    : i,
                  input: e,
                  requestId: a,
                });
              }),
            )
            .catch(function (e) {
              return (
                u(
                  "error",
                  "kaleidoscopeClassify has runtime-error " +
                    o("WAErrorMessage").maybeGetMessageFromError(e),
                ),
                S({
                  output: o("WAResultOrError").makeError("wasm-runtime-error"),
                  input: t.input,
                  requestId: t.requestId,
                })
              );
            });
        }));
    }
    ((l.default = L), (l.sendLogToMainThread = u), (l.sendQplToMainThread = d));
  },
  98,
);
