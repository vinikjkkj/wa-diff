__d(
  "WAMediaWasmWorker",
  [
    "HandleTranscodeToMp4Request",
    "VideoTranscodeToMp4",
    "VideoTranscodeUtils",
    "WAByteArray",
    "WACryptoHmac",
    "WACryptoSha256",
    "WADecodeImage",
    "WAEncodeProgressiveJpeg",
    "WAErrorMessage",
    "WAGenerateImageThumbnailWithoutDOM",
    "WAGetKaleidoscopeWasm",
    "WAKaleidoscopeClassify",
    "WAKaleidoscopeMp4RepairMux",
    "WAKaleidoscopeProvenance",
    "WAKaleidoscopeProvenanceWrite",
    "WALoadMozjpegWasmV2",
    "WAMediaStorageIoTesting",
    "WAMediaUtilsWasmUrl",
    "WAMediaWasmWorkerMainThreadBridge",
    "WAMediaWasmWorkerQplProxy",
    "WAMp4RepairMux",
    "WAResultOrError",
    "WATagsLogger",
    "WAWasmModuleCache",
    "WAWebPCheck",
    "WorkerMessagePort",
    "WorkerSelf",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e =
        typeof FileSystemFileHandle != "undefined" &&
        "createSyncAccessHandle" in FileSystemFileHandle.prototype,
      s = new (o("WorkerMessagePort").WorkerSyncedMessagePort)(
        self,
        "WAWAMediaWasmWorker",
      );
    (o("WorkerSelf").init(s),
      o("WAMediaWasmWorkerMainThreadBridge").initBridgePort(s),
      s.addMessageListener("prewarm", function (e) {
        return Promise.resolve()
          .then(async function () {
            e: {
              if (e.operation === "progressiveJpegEncode") {
                await o("WAWasmModuleCache").loadWasmModule(
                  o("WALoadMozjpegWasmV2").WAMozjpegWasmUrlV2,
                );
                break e;
              }
              if (e.operation === "mp4RepairMux") {
                r("gkx")("3272")
                  ? await o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm()
                  : await o("WAWasmModuleCache").loadWasmModule(
                      o("WAMediaUtilsWasmUrl").WAMediaUtilsWasmUrl,
                    );
                break e;
              }
              if (e.operation === "kaleidoscopeClassify") {
                await o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm();
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e.operation,
              );
            }
          })
          .catch(function (t) {
            o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
              "dev",
              "failed to prewarm operation: " +
                e.operation +
                ", error: " +
                r("getErrorSafe")(t).message,
            );
          });
      }),
      s.addMessageListener("mediaOperationRequest", function (e) {
        return Promise.resolve()
          .then(async function () {
            switch (e.operation) {
              case "webpCheck": {
                var t = e.input,
                  n = e.operation,
                  a = e.requestId,
                  i = o("WAWebPCheck").createWebPCheck({
                    getWasmModule: o("WAWebPCheck").getWebpCheckWasm,
                    logError: function (t) {
                      o(
                        "WAMediaWasmWorkerMainThreadBridge",
                      ).sendLogToMainThread("error", t);
                    },
                    logMessage: function (t) {
                      o(
                        "WAMediaWasmWorkerMainThreadBridge",
                      ).sendLogToMainThread("dev", t);
                    },
                  }),
                  l = await i({ input: t });
                if (l.success === !1) {
                  var s, c;
                  o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
                    "error",
                    l.error,
                  );
                  var d = l.payload,
                    m = o("WAResultOrError").makeError({
                      errorType: l.error,
                      errorMessage:
                        "webpCheck failed with: " +
                        ((s = d == null ? void 0 : d.name) != null
                          ? s
                          : "undefined") +
                        ", stack " +
                        ((c = d == null ? void 0 : d.stack) != null
                          ? c
                          : "undefined"),
                    });
                  return _({ output: m, operation: n, requestId: a });
                }
                return _({
                  output: o("WAResultOrError").makeResult(t),
                  operation: n,
                  requestId: a,
                });
              }
              case "mp4RepairMux": {
                var p = e.input,
                  f = e.operation,
                  h = e.requestId,
                  y = await u(p);
                if (y.success === !1) {
                  var C, b;
                  o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
                    "error",
                    y.error,
                  );
                  var v = y.payload,
                    S = o("WAResultOrError").makeError({
                      errorType: y.error,
                      errorMessage:
                        "mp4RepairMux failed with: " +
                        ((C = v == null ? void 0 : v.name) != null
                          ? C
                          : "undefined") +
                        ", stack " +
                        ((b = v == null ? void 0 : v.stack) != null
                          ? b
                          : "undefined"),
                    });
                  return _({ output: S, operation: f, requestId: h });
                }
                var R = o("WAResultOrError").makeResult(y.value);
                return _({ output: R, operation: f, requestId: h });
              }
              case "progressiveJpegEncode": {
                var L = e.height,
                  E = e.input,
                  k = e.operation,
                  I = e.quality,
                  T = e.requestId,
                  D = e.useHdScanConfig,
                  x = e.width,
                  $ = await g({
                    imageDataBuffer: E,
                    height: L,
                    width: x,
                    quality: I,
                    useHdScanConfig: D,
                  });
                return _({
                  output: o("WAResultOrError").makeResult(
                    o("WAByteArray").uint8ArrayToBuffer($),
                  ),
                  operation: k,
                  requestId: T,
                });
              }
              case "progressiveJpegEncodeWithFile": {
                var P = e.fileName,
                  N = e.fileType,
                  M = e.input,
                  w = e.maxOutputHeight,
                  A = e.maxOutputWidth,
                  F = e.operation,
                  O = e.quality,
                  B = e.requestId,
                  W = e.useHdScanConfig,
                  q = new File([M], P, { type: N }),
                  U = await o("WADecodeImage")
                    .decodeImageWithoutDOM(
                      q,
                      A != null && w != null ? { width: A, height: w } : void 0,
                    )
                    .then(o("WAResultOrError").makeResult)
                    .catch(function (e) {
                      return o("WAResultOrError").makeError(
                        r("getErrorSafe")(e),
                      );
                    });
                if (!U.success) {
                  var V,
                    H,
                    G = U.error;
                  o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
                    "error",
                    "decodeImageWithoutDOM failed",
                  );
                  var z = o("WAResultOrError").makeError({
                    errorType: "decode-image-error",
                    errorMessage:
                      "decodeImageWithoutDOM failed with: " +
                      ((V = G.name) != null ? V : "undefined") +
                      ", stack " +
                      ((H = G.stack) != null ? H : "undefined"),
                  });
                  return _({ output: z, operation: F, requestId: B });
                }
                var j = U.value,
                  K = await g({
                    imageDataBuffer: o("WAByteArray").uint8ArrayToBuffer(
                      j.data,
                    ),
                    height: j.height,
                    width: j.width,
                    quality: O,
                    useHdScanConfig: W,
                  });
                return _({
                  output: o("WAResultOrError").makeResult(
                    o("WAByteArray").uint8ArrayToBuffer(K),
                  ),
                  operation: F,
                  requestId: B,
                });
              }
              default:
                return (
                  e.operation,
                  _({
                    output: o("WAResultOrError").makeError({
                      errorType: "undefined-operation",
                      errorMessage:
                        e.operation + " is not defined in WAMediaWasmWorker",
                    }),
                    operation: e.operation,
                    requestId: e.requestId,
                  })
                );
            }
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
      s.addMessageListener("transcodeToMp4Request", function (e) {
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
              runMp4RepairMux: u,
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
              c({
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
              c({
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
      }));
    function u(e) {
      return r("gkx")("3272")
        ? o("WAKaleidoscopeMp4RepairMux").mp4RepairMux({ input: e })
        : o("WAMp4RepairMux").createMp4RepairMux({
            getWasmModule: function () {
              return o("WAWasmModuleCache").loadWasmModule(
                o("WAMediaUtilsWasmUrl").WAMediaUtilsWasmUrl,
              );
            },
            logError: function (t) {
              o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
                "error",
                t,
              );
            },
            logMessage: function (t) {
              o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
                "dev",
                t,
              );
            },
          })({ input: e });
    }
    async function c(e) {
      var t = e.output,
        n = e.requestId,
        r = await s.fullyConnected;
      r.postMessage(
        { output: t, requestId: n, type: "transcodeToMp4Response" },
        t.success ? [t.value] : void 0,
      );
    }
    s.addMessageListener("kaleidoscopeClassifyRequest", function (e) {
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
            m = e.strictOggOpusValidationEnabled,
            p = e.withStreamCheck,
            _ = e.zipArchiveCheckEnabled,
            f = await o(
              "WAKaleidoscopeClassify",
            ).kaleidoscopeClassifyByMediaType(r, a, i, {
              strictJpegScanValidationEnabled: u,
              strictOggOpusValidationEnabled: m,
              strictMp4ValidationEnabled: c,
              zipArchiveCheckEnabled: _,
              allowAv1VideoCodec: t,
              claimedTypeValidationEnabled: n,
              strictAacAdtsValidationEnabled: s,
              withStreamCheck: p,
            });
          return d({
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
            o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
              "error",
              "kaleidoscopeClassify has runtime-error " +
                o("WAErrorMessage").maybeGetMessageFromError(t),
            ),
            d({
              output: o("WAResultOrError").makeError("wasm-runtime-error"),
              input: e.input,
              requestId: e.requestId,
            })
          );
        });
    });
    async function d(e) {
      var t = e.input,
        n = e.output,
        r = e.requestId,
        o = await s.fullyConnected;
      o.postMessage(
        {
          type: "kaleidoscopeClassifyResponse",
          output: n,
          transferredBuffer: t,
          requestId: r,
        },
        [t],
      );
    }
    s.addMessageListener("kaleidoscopeProvenanceRequest", function (e) {
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
            s = await o("WAKaleidoscopeProvenance").detectAiProvenanceFromBytes(
              r,
              l,
              n,
              t,
            );
          return m({
            provenance: s.provenance,
            engineErrorCode: s.engineErrorCode,
            systemProvenance: s.systemProvenance,
            input: r,
            requestId: i,
          });
        })
        .catch(function (t) {
          return (
            o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
              "error",
              "kaleidoscopeProvenance has runtime-error " +
                o("WAErrorMessage").maybeGetMessageFromError(t),
            ),
            m({ provenance: null, input: e.input, requestId: e.requestId })
          );
        });
    });
    async function m(e) {
      var t = e.engineErrorCode,
        n = e.input,
        r = e.provenance,
        o = e.requestId,
        a = e.systemProvenance,
        i = await s.fullyConnected;
      i.postMessage(
        {
          type: "kaleidoscopeProvenanceResponse",
          provenance: r,
          engineErrorCode: t,
          systemProvenance: a,
          transferredBuffer: n,
          requestId: o,
        },
        [n],
      );
    }
    s.addMessageListener("kaleidoscopeProvenanceWriteRequest", function (e) {
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
          return p({ output: i, requestId: a });
        })
        .catch(function (t) {
          return (
            o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
              "error",
              "kaleidoscopeProvenanceWrite has runtime-error " +
                o("WAErrorMessage").maybeGetMessageFromError(t),
            ),
            p({
              output: o("WAResultOrError").makeError("internal-error"),
              requestId: e.requestId,
            })
          );
        });
    });
    async function p(e) {
      var t = e.output,
        n = e.requestId,
        r = await s.fullyConnected;
      r.postMessage(
        {
          type: "kaleidoscopeProvenanceWriteResponse",
          output: t,
          requestId: n,
        },
        t.success ? [t.value] : [],
      );
    }
    self.onerror = function (e) {
      var t = "Uncaught error in WAMediaWasmWorker: " + e.toString();
      o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread("error", t);
    };
    async function _(t) {
      var n = t.operation,
        r = t.output,
        a = t.requestId,
        i = await s.fullyConnected,
        l =
          r.success === !0
            ? o("WAResultOrError").makeResult({
                bytes: r.value,
                isOpfsSyncSupported: e,
              })
            : o("WAResultOrError").makeError(r.error);
      i.postMessage(
        {
          type: "mediaOperationResponse",
          operation: n,
          output: l,
          requestId: a,
        },
        r.success ? [r.value] : void 0,
      );
    }
    s.addMessageListener("mediaGenerateImageThumbnailRequest", function (e) {
      return Promise.resolve()
        .then(async function () {
          var t = e.fileName,
            n = e.fileType,
            r = e.input,
            a = e.maxDimension,
            i = e.requestId,
            l = e.thumbnailBlobByteSizeLimitBytes,
            s = e.thumbnailQualityPercentageWhenAboveByteSizeLimit,
            u = new File([r], t, { type: n }),
            c = await o(
              "WAGenerateImageThumbnailWithoutDOM",
            ).generateImageThumbnailWithoutDOM(u, a, l, s),
            d = await c.blob.arrayBuffer();
          return f({
            output: o("WAResultOrError").makeResult({
              blob: d,
              height: c.height,
              width: c.width,
            }),
            requestId: i,
          });
        })
        .catch(function (t) {
          var n = "mediaGenerateImageThumbnail has runtime-error " + String(t);
          return f({
            output: o("WAResultOrError").makeError({
              errorMessage: n,
              errorType: "runtime-error",
            }),
            requestId: e.requestId,
          });
        });
    });
    async function f(e) {
      var t = e.output,
        n = e.requestId,
        r = await s.fullyConnected;
      r.postMessage(
        {
          output: t,
          requestId: n,
          type: "mediaGenerateImageThumbnailResponse",
        },
        t.success ? [t.value.blob] : void 0,
      );
    }
    async function g(e) {
      var t = e.height,
        n = e.imageDataBuffer,
        r = e.quality,
        a = e.useHdScanConfig,
        i = e.width,
        l = await o("WALoadMozjpegWasmV2").loadMozjpegWasm(),
        s = o("WAEncodeProgressiveJpeg").createEncodeProgressiveJpeg(l),
        u = s({
          input: n,
          height: t,
          width: i,
          quality: r,
          useHdScanConfig: a,
        });
      return u;
    }
    s.addMessageListener("mediaStorageShadowTestRequest", function (e) {
      return Promise.resolve()
        .then(async function () {
          var t = await h(e.storageType, e.input, e.requestId);
          return y({ output: t, requestId: e.requestId });
        })
        .catch(function (e) {
          o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
            "dev",
            "failed to read/write storage operation, error: " + String(e),
          );
        });
    });
    function h(e, t, n) {
      switch (e) {
        case "webcache":
          return o("WAMediaStorageIoTesting").runIoTestingWebCache(t, n);
        case "opfs":
          return o("WAMediaStorageIoTesting").runIoTestingOPFS(t, n);
      }
    }
    async function y(e) {
      var t = e.output,
        n = e.requestId,
        r = await s.fullyConnected;
      r.postMessage({
        type: "mediaStorageShadowTestResponse",
        output: t,
        requestId: n,
      });
    }
    s.addMessageListener("calculateFilehashRequest", function (e) {
      return Promise.resolve()
        .then(async function () {
          var t = await o("WACryptoSha256").sha256Base64(e.buffer);
          return C({
            output: o("WAResultOrError").makeResult(t),
            buffer: e.buffer,
            requestId: e.requestId,
          });
        })
        .catch(function (t) {
          var n = "calculateFilehash has runtime-error " + String(t);
          return C({
            output: o("WAResultOrError").makeError({
              errorMessage: n,
              errorType: "runtime-error",
            }),
            buffer: e.buffer,
            requestId: e.requestId,
          });
        });
    });
    async function C(e) {
      var t = e.buffer,
        n = e.output,
        r = e.requestId,
        o = await s.fullyConnected;
      o.postMessage(
        {
          type: "calculateFilehashResponse",
          output: n,
          transferredBuffer: t,
          requestId: r,
        },
        [t],
      );
    }
    s.addMessageListener("calculateHmacSha256Request", function (e) {
      return Promise.resolve()
        .then(async function () {
          var t = await o("WACryptoHmac").hmacSha256(
            e.keyBuffer,
            e.buffer,
            e.length,
          );
          return b({
            output: o("WAResultOrError").makeResult(t),
            keyBuffer: e.keyBuffer,
            buffer: e.buffer,
            requestId: e.requestId,
          });
        })
        .catch(function (t) {
          var n = "calculateHmacSha256 has runtime-error " + String(t);
          return b({
            output: o("WAResultOrError").makeError({
              errorMessage: n,
              errorType: "runtime-error",
            }),
            keyBuffer: e.keyBuffer,
            buffer: e.buffer,
            requestId: e.requestId,
          });
        });
    });
    async function b(e) {
      var t = e.buffer,
        n = e.keyBuffer,
        r = e.output,
        o = e.requestId,
        a = await s.fullyConnected;
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
    }
    function v() {
      var e = function (t, n) {
        o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
          n != null ? n : "dev",
          t,
        );
      };
      o("WATagsLogger").initializeWaLogger({
        count: function (n) {
          return e(n);
        },
        debug: function (n) {
          return e(n);
        },
        devConsole: function (n) {
          return e(n);
        },
        error: function (n) {
          return e(n, "error");
        },
        info: function (n) {
          return e(n);
        },
        logRestricted: function (n) {
          return e(n);
        },
        warn: function (n) {
          return e(n);
        },
      });
    }
    function S() {
      v();
    }
    l.default = S;
  },
  98,
);
