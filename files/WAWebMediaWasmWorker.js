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
    "WAKaleidoscopeProvenance",
    "WAKaleidoscopeProvenanceWrite",
    "WAMediaWasmWorkerMainThreadBridge",
    "WAMediaWasmWorkerQplProxy",
    "WAResultOrError",
    "WAWebNoop",
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
    async function c(t) {
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
    function d(e) {
      return o("WAKaleidoscopeMp4RepairMux").mp4RepairMux({ input: e });
    }
    async function m(t) {
      var n = t.output,
        r = t.requestId,
        o = await e.fullyConnected;
      o.postMessage(
        { output: n, requestId: r, type: "transcodeToMp4Response" },
        n.success ? [n.value] : void 0,
      );
    }
    async function p(t) {
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
    async function _(t) {
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
    async function f(t) {
      var n = t.engineErrorCode,
        r = t.input,
        o = t.provenance,
        a = t.requestId,
        i = t.systemProvenance,
        l = await e.fullyConnected;
      l.postMessage(
        {
          type: "kaleidoscopeProvenanceResponse",
          provenance: o,
          engineErrorCode: n,
          systemProvenance: i,
          transferredBuffer: r,
          requestId: a,
        },
        [r],
      );
    }
    (o("WorkerSelf").init(e),
      o("WAMediaWasmWorkerMainThreadBridge").initBridgePort(e),
      e.addMessageListener("calculateFilehashRequest", function (e) {
        return Promise.resolve()
          .then(async function () {
            var t = await o("WACryptoSha256").sha256Base64(e.buffer);
            return u({
              output: o("WAResultOrError").makeResult(t),
              buffer: e.buffer,
              requestId: e.requestId,
            });
          })
          .catch(function (t) {
            var n =
              "calculateFilehash has runtime-error " +
              o("WAErrorMessage").maybeGetMessageFromError(t);
            return u({
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
            return c({
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
            return c({
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
              runMp4RepairMux: d,
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
              m({
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
              m({
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
              a = await d(t);
            if (a.success === !1) {
              s("error", a.error);
              var i = o("WAResultOrError").makeError({
                errorType: a.error,
                errorMessage: "mp4RepairMux failed",
              });
              return p({ output: i, operation: n, requestId: r });
            }
            var l = o("WAResultOrError").makeResult(a.value);
            return p({ output: l, operation: n, requestId: r });
          })
          .catch(function (t) {
            var n =
              "operation: " +
              e.operation +
              " has runtime-error " +
              o("WAErrorMessage").maybeGetMessageFromError(t);
            return p({
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
            var t = e.allowAv1VideoCodec,
              n = e.claimedTypeValidationEnabled,
              r = e.input,
              a = e.mediaType,
              i = e.rawMimeType,
              l = e.requestId,
              s = e.strictAacAdtsValidationEnabled,
              u = e.strictJpegScanValidationEnabled,
              c = e.strictMp4ValidationEnabled,
              d = e.strictOggOpusValidationEnabled,
              m = e.withStreamCheck,
              p = e.zipArchiveCheckEnabled,
              f = await o(
                "WAKaleidoscopeClassify",
              ).kaleidoscopeClassifyByMediaType(r, a, i, {
                strictJpegScanValidationEnabled: u,
                strictOggOpusValidationEnabled: d,
                strictMp4ValidationEnabled: c,
                zipArchiveCheckEnabled: p,
                allowAv1VideoCodec: t,
                claimedTypeValidationEnabled: n,
                strictAacAdtsValidationEnabled: s,
                withStreamCheck: m,
              });
            return _({
              output: f.success
                ? o("WAResultOrError").makeResult({
                    mimetype: f.value.mimetype,
                    extension: f.value.extension,
                    score: f.value.score,
                    reason: f.value.reason,
                  })
                : f,
              input: r,
              requestId: l,
            });
          })
          .catch(function (t) {
            return (
              s(
                "error",
                "kaleidoscopeClassify has runtime-error " +
                  o("WAErrorMessage").maybeGetMessageFromError(t),
              ),
              _({
                output: o("WAResultOrError").makeError("wasm-runtime-error"),
                input: e.input,
                requestId: e.requestId,
              })
            );
          });
      }),
      e.addMessageListener("kaleidoscopeProvenanceRequest", function (e) {
        return Promise.resolve()
          .then(async function () {
            var t = e.allowlists,
              n = e.hints,
              r = e.input,
              a = e.qplData,
              i = e.requestId,
              l =
                a != null
                  ? o(
                      "WAMediaWasmWorkerQplProxy",
                    ).continueQplMediaWasmWorkeQplFlow(a.event, a.instanceKey)
                  : null,
              s = await o(
                "WAKaleidoscopeProvenance",
              ).detectAiProvenanceFromBytes(r, l, n, t);
            return f({
              provenance: s.provenance,
              engineErrorCode: s.engineErrorCode,
              systemProvenance: s.systemProvenance,
              input: r,
              requestId: i,
            });
          })
          .catch(function (t) {
            return (
              s(
                "error",
                "kaleidoscopeProvenance has runtime-error " +
                  o("WAErrorMessage").maybeGetMessageFromError(t),
              ),
              f({ provenance: null, input: e.input, requestId: e.requestId })
            );
          });
      }));
    async function g(t) {
      var n = t.output,
        r = t.requestId,
        o = await e.fullyConnected;
      o.postMessage(
        {
          type: "kaleidoscopeProvenanceWriteResponse",
          output: n,
          requestId: r,
        },
        n.success ? [n.value] : [],
      );
    }
    e.addMessageListener("kaleidoscopeProvenanceWriteRequest", function (e) {
      return Promise.resolve()
        .then(async function () {
          var t = e.fields,
            n = e.hints,
            r = e.input,
            a = e.requestId,
            i = await o("WAKaleidoscopeProvenanceWrite").provenanceWrite({
              fields: t,
              hints: n,
              input: r,
            });
          return g({ output: i, requestId: a });
        })
        .catch(function (t) {
          return (
            s(
              "error",
              "kaleidoscopeProvenanceWrite has runtime-error " +
                o("WAErrorMessage").maybeGetMessageFromError(t),
            ),
            g({
              output: o("WAResultOrError").makeError("internal-error"),
              requestId: e.requestId,
            })
          );
        })
        .catch(r("WAWebNoop"));
    });
    function h() {}
    ((l.default = h), (l.sendLogToMainThread = s));
  },
  98,
);
