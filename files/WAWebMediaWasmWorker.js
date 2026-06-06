__d(
  "WAWebMediaWasmWorker",
  [
    "HandleTranscodeToMp4Request",
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (o("WorkerMessagePort").WorkerSyncedMessagePort)(
      self,
      "WAWebMediaWasmWorker",
    );
    self.onerror = function (e) {
      var t = "Uncaught error in WAWebMediaWasmWorker: " + e.toString();
      s("error", t);
    };
    async function s(t, n) {
      var r = await e.fullyConnected;
      r.postMessage({ type: "log", logType: t, message: n });
    }
    async function u(t) {
      var n = await e.fullyConnected;
      n.postMessage(babelHelpers.extends({ type: "qpl" }, t));
    }
    async function c(t) {
      var n = t.buffer,
        r = t.output,
        o = t.requestId,
        a = await e.fullyConnected;
      a.postMessage(
        {
          type: "calculateFilehashResponse",
          output: r,
          transferredBuffer: n,
          requestId: o,
        },
        [n],
      );
    }
    async function d(t) {
      var n = t.buffer,
        r = t.keyBuffer,
        o = t.output,
        a = t.requestId,
        i = await e.fullyConnected;
      i.postMessage(
        {
          type: "calculateHmacSha256Response",
          output: o,
          transferredKeyBuffer: r,
          transferredBuffer: n,
          requestId: a,
        },
        [r, n],
      );
    }
    function m(e) {
      return o("WAKaleidoscopeMp4RepairMux").mp4RepairMux({ input: e });
    }
    async function p(t) {
      var n = t.output,
        r = t.requestId,
        o = await e.fullyConnected;
      o.postMessage(
        { output: n, requestId: r, type: "transcodeToMp4Response" },
        n.success ? [n.value] : void 0,
      );
    }
    async function _(t) {
      var n = t.operation,
        r = t.output,
        o = t.requestId,
        a = await e.fullyConnected;
      a.postMessage(
        {
          type: "mediaOperationResponse",
          operation: n,
          output: r,
          requestId: o,
        },
        r.success ? [r.value] : void 0,
      );
    }
    async function f(t) {
      var n = t.input,
        r = t.output,
        o = t.requestId,
        a = await e.fullyConnected;
      a.postMessage(
        {
          type: "kaleidoscopeClassifyResponse",
          output: r,
          transferredBuffer: n,
          requestId: o,
        },
        [n],
      );
    }
    (o("WorkerSelf").init(e),
      o("WAMediaWasmWorkerMainThreadBridge").initBridgePort(e),
      e.addMessageListener("calculateFilehashRequest", function (e) {
        return Promise.resolve()
          .then(async function () {
            var t = await o("WACryptoSha256").sha256Base64(e.buffer);
            return c({
              output: o("WAResultOrError").makeResult(t),
              buffer: e.buffer,
              requestId: e.requestId,
            });
          })
          .catch(function (t) {
            var n =
              "calculateFilehash has runtime-error " +
              o("WAErrorMessage").maybeGetMessageFromError(t);
            return c({
              output: o("WAResultOrError").makeError({
                errorMessage: n,
                errorType: "runtime-error",
              }),
              buffer: e.buffer,
              requestId: e.requestId,
            });
          });
      }),
      e.addMessageListener("calculateHmacSha256Request", function (e) {
        return Promise.resolve()
          .then(async function () {
            var t = await o("WACryptoHmac").hmacSha256(
              e.keyBuffer,
              e.buffer,
              e.length,
            );
            return d({
              output: o("WAResultOrError").makeResult(t),
              keyBuffer: e.keyBuffer,
              buffer: e.buffer,
              requestId: e.requestId,
            });
          })
          .catch(function (t) {
            var n =
              "calculateHmacSha256 has runtime-error " +
              o("WAErrorMessage").maybeGetMessageFromError(t);
            return d({
              output: o("WAResultOrError").makeError({
                errorMessage: n,
                errorType: "runtime-error",
              }),
              keyBuffer: e.keyBuffer,
              buffer: e.buffer,
              requestId: e.requestId,
            });
          });
      }),
      e.addMessageListener("transcodeToMp4Request", function (e) {
        var t = e.input,
          n = e.mimeType,
          r = e.qplData,
          a = e.supportsHevc,
          i = o("WAMediaWasmWorkerQplProxy").continueQplMediaWasmWorkeQplFlow(
            r.event,
            r.instanceKey,
          );
        return Promise.resolve()
          .then(async function () {
            var r = await o(
              "HandleTranscodeToMp4Request",
            ).handleTranscodeToMp4Request({
              input: t,
              runMp4RepairMux: m,
              transcodeToMp4Module: {
                getOptionalMetadata: o("VideoTranscodeToMp4")
                  .getOptionalMetadata,
                transcode: o("VideoTranscodeToMp4").transcode,
              },
              qplFlow: i,
              mimeType: n,
              supportsHevc: a,
            });
            return (
              o("VideoTranscodeUtils").annotateTranscodeReponse({
                maybeTranscodeResponse: r.success
                  ? r.value.transcodeResponse
                  : r.error.transcodeResponse,
                eventFlow: i,
              }),
              p({
                output: r.success
                  ? o("WAResultOrError").makeResult(r.value.buffer)
                  : o("WAResultOrError").makeError(r.error.error),
                requestId: e.requestId,
              })
            );
          })
          .catch(function (t) {
            return (
              i.addPoint("handle_transcode_runtime_error"),
              p({
                output: o("WAResultOrError").makeError({
                  errorType: "runtime-error",
                  errorMessage:
                    "operation: transcodeToMp4 has runtime-error " +
                    o("WAErrorMessage").maybeGetMessageFromError(t),
                }),
                requestId: e.requestId,
              })
            );
          });
      }),
      e.addMessageListener("mediaOperationRequest", function (e) {
        return Promise.resolve()
          .then(async function () {
            var t = e.input,
              n = e.operation,
              r = e.requestId,
              a = await m(t);
            if (a.success === !1) {
              s("error", a.error);
              var i = o("WAResultOrError").makeError({
                errorType: a.error,
                errorMessage: "mp4RepairMux failed",
              });
              return _({ output: i, operation: n, requestId: r });
            }
            var l = o("WAResultOrError").makeResult(a.value);
            return _({ output: l, operation: n, requestId: r });
          })
          .catch(function (t) {
            var n =
              "operation: " +
              e.operation +
              " has runtime-error " +
              o("WAErrorMessage").maybeGetMessageFromError(t);
            return _({
              output: o("WAResultOrError").makeError({
                errorType: "runtime-error",
                errorMessage: n,
              }),
              operation: e.operation,
              requestId: e.requestId,
            });
          });
      }),
      e.addMessageListener("prewarm", function (e) {
        return Promise.resolve()
          .then(async function () {
            switch (e.operation) {
              case "mp4RepairMux":
              case "kaleidoscopeClassify":
                await o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm();
                break;
              default:
                e.operation;
            }
          })
          .catch(function (t) {
            s(
              "dev",
              "failed to prewarm operation: " +
                e.operation +
                ", error: " +
                r("getErrorSafe")(t).message,
            );
          });
      }),
      e.addMessageListener("kaleidoscopeClassifyRequest", function (e) {
        return Promise.resolve()
          .then(async function () {
            var t = e.input,
              n = e.mediaType,
              r = e.rawMimeType,
              a = e.requestId,
              i = await o(
                "WAKaleidoscopeClassify",
              ).kaleidoscopeClassifyByMediaType(t, n, r);
            return f({
              output: i.success
                ? o("WAResultOrError").makeResult({
                    mimetype: i.value.mimetype,
                    extension: i.value.extension,
                    score: i.value.score,
                  })
                : i,
              input: t,
              requestId: a,
            });
          })
          .catch(function (t) {
            return (
              s(
                "error",
                "kaleidoscopeClassify has runtime-error " +
                  o("WAErrorMessage").maybeGetMessageFromError(t),
              ),
              f({
                output: o("WAResultOrError").makeError("wasm-runtime-error"),
                input: e.input,
                requestId: e.requestId,
              })
            );
          });
      }));
    function g() {}
    ((l.default = g), (l.sendLogToMainThread = s), (l.sendQplToMainThread = u));
  },
  98,
);
