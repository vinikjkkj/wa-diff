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
    "WAMediaWasmWorkerMainThreadBridge",
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
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return o("WAKaleidoscopeMp4RepairMux").mp4RepairMux({ input: e });
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.output,
            n = e.requestId,
            r = yield s.fullyConnected;
          r.postMessage(
            { output: t, requestId: n, type: "transcodeToMp4Response" },
            t.success ? [t.value] : void 0,
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        v.apply(this, arguments)
      );
    }
    (o("WorkerSelf").init(s),
      o("WAMediaWasmWorkerMainThreadBridge").initBridgePort(s),
      s.addMessageListener("calculateFilehashRequest", function (t) {
        return (e || (e = n("Promise")))
          .resolve()
          .then(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o("WACryptoSha256").sha256Base64(t.buffer);
              return d({
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
            return d({
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
              return p({
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
            return p({
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
                runMp4RepairMux: f,
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
                g({
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
              g({
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
                a = yield f(e);
              if (a.success === !1) {
                u("error", a.error);
                var i = o("WAResultOrError").makeError({
                  errorType: a.error,
                  errorMessage: "mp4RepairMux failed",
                });
                return y({ output: i, operation: n, requestId: r });
              }
              var l = o("WAResultOrError").makeResult(a.value);
              return y({ output: l, operation: n, requestId: r });
            }),
          )
          .catch(function (e) {
            var n =
              "operation: " +
              t.operation +
              " has runtime-error " +
              o("WAErrorMessage").maybeGetMessageFromError(e);
            return y({
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
              return b({
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
              b({
                output: o("WAResultOrError").makeError("wasm-runtime-error"),
                input: t.input,
                requestId: t.requestId,
              })
            );
          });
      }));
    function S() {}
    ((l.default = S), (l.sendLogToMainThread = u));
  },
  98,
);
