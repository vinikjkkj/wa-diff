__d(
  "WAMediaWasmWorker",
  [
    "HandleTranscodeToMp4Request",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        typeof FileSystemFileHandle != "undefined" &&
        "createSyncAccessHandle" in FileSystemFileHandle.prototype,
      u = new (o("WorkerMessagePort").WorkerSyncedMessagePort)(
        self,
        "WAWAMediaWasmWorker",
      );
    (o("WorkerSelf").init(u),
      o("WAMediaWasmWorkerMainThreadBridge").initBridgePort(u),
      u.addMessageListener("prewarm", function (t) {
        return (e || (e = n("Promise")))
          .resolve()
          .then(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              e: {
                if (t.operation === "progressiveJpegEncode") {
                  yield o("WAWasmModuleCache").loadWasmModule(
                    o("WALoadMozjpegWasmV2").WAMozjpegWasmUrlV2,
                  );
                  break e;
                }
                if (t.operation === "mp4RepairMux") {
                  r("gkx")("3272")
                    ? yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm()
                    : yield o("WAWasmModuleCache").loadWasmModule(
                        o("WAMediaUtilsWasmUrl").WAMediaUtilsWasmUrl,
                      );
                  break e;
                }
                if (t.operation === "kaleidoscopeClassify") {
                  yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm();
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t.operation,
                );
              }
            }),
          )
          .catch(function (e) {
            o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
              "dev",
              "failed to prewarm operation: " +
                t.operation +
                ", error: " +
                r("getErrorSafe")(e).message,
            );
          });
      }),
      u.addMessageListener("mediaOperationRequest", function (t) {
        return (e || (e = n("Promise")))
          .resolve()
          .then(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              switch (t.operation) {
                case "webpCheck": {
                  var e = t.input,
                    n = t.operation,
                    r = t.requestId,
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
                    i = yield a({ input: e });
                  if (i.success === !1) {
                    var l, s;
                    o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
                      "error",
                      i.error,
                    );
                    var u = i.payload,
                      d = o("WAResultOrError").makeError({
                        errorType: i.error,
                        errorMessage:
                          "webpCheck failed with: " +
                          ((l = u == null ? void 0 : u.name) != null
                            ? l
                            : "undefined") +
                          ", stack " +
                          ((s = u == null ? void 0 : u.stack) != null
                            ? s
                            : "undefined"),
                      });
                    return h({ output: d, operation: n, requestId: r });
                  }
                  return h({
                    output: o("WAResultOrError").makeResult(e),
                    operation: n,
                    requestId: r,
                  });
                }
                case "mp4RepairMux": {
                  var m = t.input,
                    p = t.operation,
                    _ = t.requestId,
                    f = yield c(m);
                  if (f.success === !1) {
                    var g, y;
                    o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
                      "error",
                      f.error,
                    );
                    var C = f.payload,
                      b = o("WAResultOrError").makeError({
                        errorType: f.error,
                        errorMessage:
                          "mp4RepairMux failed with: " +
                          ((g = C == null ? void 0 : C.name) != null
                            ? g
                            : "undefined") +
                          ", stack " +
                          ((y = C == null ? void 0 : C.stack) != null
                            ? y
                            : "undefined"),
                      });
                    return h({ output: b, operation: p, requestId: _ });
                  }
                  var S = o("WAResultOrError").makeResult(f.value);
                  return h({ output: S, operation: p, requestId: _ });
                }
                case "progressiveJpegEncode": {
                  var R = t.height,
                    L = t.input,
                    E = t.operation,
                    k = t.quality,
                    I = t.requestId,
                    T = t.useHdScanConfig,
                    D = t.width,
                    x = yield v({
                      imageDataBuffer: L,
                      height: R,
                      width: D,
                      quality: k,
                      useHdScanConfig: T,
                    });
                  return h({
                    output: o("WAResultOrError").makeResult(
                      o("WAByteArray").uint8ArrayToBuffer(x),
                    ),
                    operation: E,
                    requestId: I,
                  });
                }
                case "progressiveJpegEncodeWithFile": {
                  var $ = t.fileName,
                    P = t.fileType,
                    N = t.input,
                    M = t.maxOutputHeight,
                    w = t.maxOutputWidth,
                    A = t.operation,
                    F = t.quality,
                    O = t.requestId,
                    B = t.useHdScanConfig,
                    W = new File([N], $, { type: P }),
                    q = yield o("WADecodeImage")
                      .decodeImageWithoutDOM(
                        W,
                        w != null && M != null
                          ? { width: w, height: M }
                          : void 0,
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
                    return h({ output: G, operation: A, requestId: O });
                  }
                  var z = q.value,
                    j = yield v({
                      imageDataBuffer: o("WAByteArray").uint8ArrayToBuffer(
                        z.data,
                      ),
                      height: z.height,
                      width: z.width,
                      quality: F,
                      useHdScanConfig: B,
                    });
                  return h({
                    output: o("WAResultOrError").makeResult(
                      o("WAByteArray").uint8ArrayToBuffer(j),
                    ),
                    operation: A,
                    requestId: O,
                  });
                }
                default:
                  return (
                    t.operation,
                    h({
                      output: o("WAResultOrError").makeError({
                        errorType: "undefined-operation",
                        errorMessage:
                          t.operation + " is not defined in WAMediaWasmWorker",
                      }),
                      operation: t.operation,
                      requestId: t.requestId,
                    })
                  );
              }
            }),
          )
          .catch(function (e) {
            var n =
              "operation: " +
              t.operation +
              " has runtime-error " +
              o("WAErrorMessage").maybeGetMessageFromError(e);
            return h({
              output: o("WAResultOrError").makeError({
                errorType: "runtime-error",
                errorMessage: n,
              }),
              operation: t.operation,
              requestId: t.requestId,
            });
          });
      }),
      u.addMessageListener("transcodeToMp4Request", function (t) {
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
                runMp4RepairMux: c,
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
                d({
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
              d({
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
      }));
    function c(e) {
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.output,
            n = e.requestId,
            r = yield u.fullyConnected;
          r.postMessage(
            { output: t, requestId: n, type: "transcodeToMp4Response" },
            t.success ? [t.value] : void 0,
          );
        })),
        m.apply(this, arguments)
      );
    }
    u.addMessageListener("kaleidoscopeClassifyRequest", function (t) {
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
            return p({
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
            o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
              "error",
              "kaleidoscopeClassify has runtime-error " +
                o("WAErrorMessage").maybeGetMessageFromError(e),
            ),
            p({
              output: o("WAResultOrError").makeError("wasm-runtime-error"),
              input: t.input,
              requestId: t.requestId,
            })
          );
        });
    });
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.input,
            n = e.output,
            r = e.requestId,
            o = yield u.fullyConnected;
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
        _.apply(this, arguments)
      );
    }
    u.addMessageListener("kaleidoscopeProvenanceRequest", function (t) {
      return (e || (e = n("Promise")))
        .resolve()
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = t.input,
              n = t.qplData,
              r = t.requestId,
              a =
                n != null
                  ? o(
                      "WAMediaWasmWorkerQplProxy",
                    ).continueQplMediaWasmWorkeQplFlow(n.event, n.instanceKey)
                  : null,
              i = yield o(
                "WAKaleidoscopeProvenance",
              ).detectAiProvenanceFromBytes(e, a);
            return f({
              provenance: i.provenance,
              engineErrorCode: i.engineErrorCode,
              input: e,
              requestId: r,
            });
          }),
        )
        .catch(function (e) {
          return (
            o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
              "error",
              "kaleidoscopeProvenance has runtime-error " +
                o("WAErrorMessage").maybeGetMessageFromError(e),
            ),
            f({ provenance: null, input: t.input, requestId: t.requestId })
          );
        });
    });
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.engineErrorCode,
            n = e.input,
            r = e.provenance,
            o = e.requestId,
            a = yield u.fullyConnected;
          a.postMessage(
            {
              type: "kaleidoscopeProvenanceResponse",
              provenance: r,
              engineErrorCode: t,
              transferredBuffer: n,
              requestId: o,
            },
            [n],
          );
        })),
        g.apply(this, arguments)
      );
    }
    self.onerror = function (e) {
      var t = "Uncaught error in WAMediaWasmWorker: " + e.toString();
      o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread("error", t);
    };
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.operation,
            n = e.output,
            r = e.requestId,
            a = yield u.fullyConnected,
            i =
              n.success === !0
                ? o("WAResultOrError").makeResult({
                    bytes: n.value,
                    isOpfsSyncSupported: s,
                  })
                : o("WAResultOrError").makeError(n.error);
          a.postMessage(
            {
              type: "mediaOperationResponse",
              operation: t,
              output: i,
              requestId: r,
            },
            n.success ? [n.value] : void 0,
          );
        })),
        y.apply(this, arguments)
      );
    }
    u.addMessageListener("mediaGenerateImageThumbnailRequest", function (t) {
      return (e || (e = n("Promise")))
        .resolve()
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = t.fileName,
              n = t.fileType,
              r = t.input,
              a = t.maxDimension,
              i = t.requestId,
              l = t.thumbnailBlobByteSizeLimitBytes,
              s = t.thumbnailQualityPercentageWhenAboveByteSizeLimit,
              u = new File([r], e, { type: n }),
              c = yield o(
                "WAGenerateImageThumbnailWithoutDOM",
              ).generateImageThumbnailWithoutDOM(u, a, l, s),
              d = yield c.blob.arrayBuffer();
            return C({
              output: o("WAResultOrError").makeResult({
                blob: d,
                height: c.height,
                width: c.width,
              }),
              requestId: i,
            });
          }),
        )
        .catch(function (e) {
          var n =
            "mediaGenerateImageThumbnail has runtime-error " + e.toString();
          return C({
            output: o("WAResultOrError").makeError({
              errorMessage: n,
              errorType: "runtime-error",
            }),
            requestId: t.requestId,
          });
        });
    });
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.output,
            n = e.requestId,
            r = yield u.fullyConnected;
          r.postMessage(
            {
              output: t,
              requestId: n,
              type: "mediaGenerateImageThumbnailResponse",
            },
            t.success ? [t.value.blob] : void 0,
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.height,
            n = e.imageDataBuffer,
            r = e.quality,
            a = e.useHdScanConfig,
            i = e.width,
            l = yield o("WALoadMozjpegWasmV2").loadMozjpegWasm(),
            s = o("WAEncodeProgressiveJpeg").createEncodeProgressiveJpeg(l),
            u = s({
              input: n,
              height: t,
              width: i,
              quality: r,
              useHdScanConfig: a,
            });
          return u;
        })),
        S.apply(this, arguments)
      );
    }
    u.addMessageListener("mediaStorageShadowTestRequest", function (t) {
      return (e || (e = n("Promise")))
        .resolve()
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield R(t.storageType, t.input, t.requestId);
            return L({ output: e, requestId: t.requestId });
          }),
        )
        .catch(function (e) {
          o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
            "dev",
            "failed to read/write storage operation, error: " + e,
          );
        });
    });
    function R(e, t, n) {
      switch (e) {
        case "webcache":
          return o("WAMediaStorageIoTesting").runIoTestingWebCache(t, n);
        case "opfs":
          return o("WAMediaStorageIoTesting").runIoTestingOPFS(t, n);
      }
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.output,
            n = e.requestId,
            r = yield u.fullyConnected;
          r.postMessage({
            type: "mediaStorageShadowTestResponse",
            output: t,
            requestId: n,
          });
        })),
        E.apply(this, arguments)
      );
    }
    u.addMessageListener("calculateFilehashRequest", function (t) {
      return (e || (e = n("Promise")))
        .resolve()
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WACryptoSha256").sha256Base64(t.buffer);
            return k({
              output: o("WAResultOrError").makeResult(e),
              buffer: t.buffer,
              requestId: t.requestId,
            });
          }),
        )
        .catch(function (e) {
          var n = "calculateFilehash has runtime-error " + e.toString();
          return k({
            output: o("WAResultOrError").makeError({
              errorMessage: n,
              errorType: "runtime-error",
            }),
            buffer: t.buffer,
            requestId: t.requestId,
          });
        });
    });
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.buffer,
            n = e.output,
            r = e.requestId,
            o = yield u.fullyConnected;
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
        I.apply(this, arguments)
      );
    }
    u.addMessageListener("calculateHmacSha256Request", function (t) {
      return (e || (e = n("Promise")))
        .resolve()
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WACryptoHmac").hmacSha256(
              t.keyBuffer,
              t.buffer,
              t.length,
            );
            return T({
              output: o("WAResultOrError").makeResult(e),
              keyBuffer: t.keyBuffer,
              buffer: t.buffer,
              requestId: t.requestId,
            });
          }),
        )
        .catch(function (e) {
          var n = "calculateHmacSha256 has runtime-error " + e.toString();
          return T({
            output: o("WAResultOrError").makeError({
              errorMessage: n,
              errorType: "runtime-error",
            }),
            keyBuffer: t.keyBuffer,
            buffer: t.buffer,
            requestId: t.requestId,
          });
        });
    });
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.buffer,
            n = e.keyBuffer,
            r = e.output,
            o = e.requestId,
            a = yield u.fullyConnected;
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
        D.apply(this, arguments)
      );
    }
    function x() {
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
    function $() {
      x();
    }
    l.default = $;
  },
  98,
);
