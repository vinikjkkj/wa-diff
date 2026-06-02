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
                  r = e.requestId,
                  a = o("WAWebPCheck").createWebPCheck({
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
                  i = await a({ input: t });
                if (i.success === !1) {
                  var l, s;
                  o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
                    "error",
                    i.error,
                  );
                  var c = i.payload,
                    d = o("WAResultOrError").makeError({
                      errorType: i.error,
                      errorMessage:
                        "webpCheck failed with: " +
                        ((l = c == null ? void 0 : c.name) != null
                          ? l
                          : "undefined") +
                        ", stack " +
                        ((s = c == null ? void 0 : c.stack) != null
                          ? s
                          : "undefined"),
                    });
                  return m({ output: d, operation: n, requestId: r });
                }
                return m({
                  output: o("WAResultOrError").makeResult(t),
                  operation: n,
                  requestId: r,
                });
              }
              case "mp4RepairMux": {
                var p = e.input,
                  f = e.operation,
                  g = e.requestId,
                  h = await u(p);
                if (h.success === !1) {
                  var y, C;
                  o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
                    "error",
                    h.error,
                  );
                  var b = h.payload,
                    v = o("WAResultOrError").makeError({
                      errorType: h.error,
                      errorMessage:
                        "mp4RepairMux failed with: " +
                        ((y = b == null ? void 0 : b.name) != null
                          ? y
                          : "undefined") +
                        ", stack " +
                        ((C = b == null ? void 0 : b.stack) != null
                          ? C
                          : "undefined"),
                    });
                  return m({ output: v, operation: f, requestId: g });
                }
                var S = o("WAResultOrError").makeResult(h.value);
                return m({ output: S, operation: f, requestId: g });
              }
              case "progressiveJpegEncode": {
                var R = e.height,
                  L = e.input,
                  E = e.operation,
                  k = e.quality,
                  I = e.requestId,
                  T = e.useHdScanConfig,
                  D = e.width,
                  x = await _({
                    imageDataBuffer: L,
                    height: R,
                    width: D,
                    quality: k,
                    useHdScanConfig: T,
                  });
                return m({
                  output: o("WAResultOrError").makeResult(
                    o("WAByteArray").uint8ArrayToBuffer(x),
                  ),
                  operation: E,
                  requestId: I,
                });
              }
              case "progressiveJpegEncodeWithFile": {
                var $ = e.fileName,
                  P = e.fileType,
                  N = e.input,
                  M = e.maxOutputHeight,
                  w = e.maxOutputWidth,
                  A = e.operation,
                  F = e.quality,
                  O = e.requestId,
                  B = e.useHdScanConfig,
                  W = new File([N], $, { type: P }),
                  q = await o("WADecodeImage")
                    .decodeImageWithoutDOM(
                      W,
                      w != null && M != null ? { width: w, height: M } : void 0,
                    )
                    .then(o("WAResultOrError").makeResult)
                    .catch(function (e) {
                      return o("WAResultOrError").makeError(e);
                    });
                if (!q.success) {
                  var U,
                    V,
                    H = q.error;
                  o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
                    "error",
                    "decodeImageWithoutDOM failed",
                  );
                  var G = o("WAResultOrError").makeError({
                    errorType: "decode-image-error",
                    errorMessage:
                      "decodeImageWithoutDOM failed with: " +
                      ((U = H.name) != null ? U : "undefined") +
                      ", stack " +
                      ((V = H.stack) != null ? V : "undefined"),
                  });
                  return m({ output: G, operation: A, requestId: O });
                }
                var z = q.value,
                  j = await _({
                    imageDataBuffer: o("WAByteArray").uint8ArrayToBuffer(
                      z.data,
                    ),
                    height: z.height,
                    width: z.width,
                    quality: F,
                    useHdScanConfig: B,
                  });
                return m({
                  output: o("WAResultOrError").makeResult(
                    o("WAByteArray").uint8ArrayToBuffer(j),
                  ),
                  operation: A,
                  requestId: O,
                });
              }
              default:
                return (
                  e.operation,
                  m({
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
            return m({
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
          var t = e.input,
            n = e.mediaType,
            r = e.rawMimeType,
            a = e.requestId,
            i = await o(
              "WAKaleidoscopeClassify",
            ).kaleidoscopeClassifyByMediaType(t, n, r);
          return d({
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
    self.onerror = function (e) {
      var t = "Uncaught error in WAMediaWasmWorker: " + e.toString();
      o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread("error", t);
    };
    async function m(t) {
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
          return p({
            output: o("WAResultOrError").makeResult({
              blob: d,
              height: c.height,
              width: c.width,
            }),
            requestId: i,
          });
        })
        .catch(function (t) {
          var n =
            "mediaGenerateImageThumbnail has runtime-error " + t.toString();
          return p({
            output: o("WAResultOrError").makeError({
              errorMessage: n,
              errorType: "runtime-error",
            }),
            requestId: e.requestId,
          });
        });
    });
    async function p(e) {
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
    async function _(e) {
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
          var t = await f(e.storageType, e.input, e.requestId);
          return g({ output: t, requestId: e.requestId });
        })
        .catch(function (e) {
          o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
            "dev",
            "failed to read/write storage operation, error: " + e,
          );
        });
    });
    function f(e, t, n) {
      switch (e) {
        case "webcache":
          return o("WAMediaStorageIoTesting").runIoTestingWebCache(t, n);
        case "opfs":
          return o("WAMediaStorageIoTesting").runIoTestingOPFS(t, n);
      }
    }
    async function g(e) {
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
          return h({
            output: o("WAResultOrError").makeResult(t),
            buffer: e.buffer,
            requestId: e.requestId,
          });
        })
        .catch(function (t) {
          var n = "calculateFilehash has runtime-error " + t.toString();
          return h({
            output: o("WAResultOrError").makeError({
              errorMessage: n,
              errorType: "runtime-error",
            }),
            buffer: e.buffer,
            requestId: e.requestId,
          });
        });
    });
    async function h(e) {
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
          return y({
            output: o("WAResultOrError").makeResult(t),
            keyBuffer: e.keyBuffer,
            buffer: e.buffer,
            requestId: e.requestId,
          });
        })
        .catch(function (t) {
          var n = "calculateHmacSha256 has runtime-error " + t.toString();
          return y({
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
    async function y(e) {
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
    function C() {
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
    function b() {
      C();
    }
    l.default = b;
  },
  98,
);
