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
    "WALoadMozjpegWasmV2",
    "WAMediaStorageIoTesting",
    "WAMediaUtilsWasmUrl",
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
            f(
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
                        f("error", t);
                      },
                      logMessage: function (t) {
                        f("dev", t);
                      },
                    }),
                    i = yield a({ input: e });
                  if (i.success === !1) {
                    var l, s;
                    f("error", i.error);
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
                    return C({ output: d, operation: n, requestId: r });
                  }
                  return C({
                    output: o("WAResultOrError").makeResult(e),
                    operation: n,
                    requestId: r,
                  });
                }
                case "mp4RepairMux": {
                  var m = t.input,
                    p = t.operation,
                    _ = t.requestId,
                    g = yield c(m);
                  if (g.success === !1) {
                    var h, y;
                    f("error", g.error);
                    var b = g.payload,
                      v = o("WAResultOrError").makeError({
                        errorType: g.error,
                        errorMessage:
                          "mp4RepairMux failed with: " +
                          ((h = b == null ? void 0 : b.name) != null
                            ? h
                            : "undefined") +
                          ", stack " +
                          ((y = b == null ? void 0 : b.stack) != null
                            ? y
                            : "undefined"),
                      });
                    return C({ output: v, operation: p, requestId: _ });
                  }
                  var S = o("WAResultOrError").makeResult(g.value);
                  return C({ output: S, operation: p, requestId: _ });
                }
                case "progressiveJpegEncode": {
                  var L = t.height,
                    E = t.input,
                    k = t.operation,
                    I = t.quality,
                    T = t.requestId,
                    D = t.useHdScanConfig,
                    x = t.width,
                    $ = yield R({
                      imageDataBuffer: E,
                      height: L,
                      width: x,
                      quality: I,
                      useHdScanConfig: D,
                    });
                  return C({
                    output: o("WAResultOrError").makeResult(
                      o("WAByteArray").uint8ArrayToBuffer($),
                    ),
                    operation: k,
                    requestId: T,
                  });
                }
                case "progressiveJpegEncodeWithFile": {
                  var P = t.fileName,
                    N = t.fileType,
                    M = t.input,
                    w = t.maxOutputHeight,
                    A = t.maxOutputWidth,
                    F = t.operation,
                    O = t.quality,
                    B = t.requestId,
                    W = t.useHdScanConfig,
                    q = new File([M], P, { type: N }),
                    U = yield o("WADecodeImage")
                      .decodeImageWithoutDOM(
                        q,
                        A != null && w != null
                          ? { width: A, height: w }
                          : void 0,
                      )
                      .then(o("WAResultOrError").makeResult)
                      .catch(function (e) {
                        return o("WAResultOrError").makeError(e);
                      });
                  if (!U.success) {
                    var V,
                      H,
                      G = U.error;
                    f("error", "decodeImageWithoutDOM failed");
                    var z = o("WAResultOrError").makeError({
                      errorType: "decode-image-error",
                      errorMessage:
                        "decodeImageWithoutDOM failed with: " +
                        ((V = G.name) != null ? V : "undefined") +
                        ", stack " +
                        ((H = G.stack) != null ? H : "undefined"),
                    });
                    return C({ output: z, operation: F, requestId: B });
                  }
                  var j = U.value,
                    K = yield R({
                      imageDataBuffer: o("WAByteArray").uint8ArrayToBuffer(
                        j.data,
                      ),
                      height: j.height,
                      width: j.width,
                      quality: O,
                      useHdScanConfig: W,
                    });
                  return C({
                    output: o("WAResultOrError").makeResult(
                      o("WAByteArray").uint8ArrayToBuffer(K),
                    ),
                    operation: F,
                    requestId: B,
                  });
                }
                default:
                  return (
                    t.operation,
                    C({
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
            return C({
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
              f("error", t);
            },
            logMessage: function (t) {
              f("dev", t);
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
    u.addMessageListener(
      "kaleidoscopeClassifyRequest",
      (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.input,
            n = e.mediaType,
            r = e.rawMimeType,
            a = e.requestId,
            i = yield o(
              "WAKaleidoscopeClassify",
            ).kaleidoscopeClassifyByMediaType(t, n, r);
          return p({
            output: i.success
              ? o("WAResultOrError").makeResult({
                  mimetype: i.value.mimetype,
                  extension: i.value.extension,
                  score: i.value.score,
                })
              : i,
            requestId: a,
          });
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
    );
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.output,
            n = e.requestId,
            r = yield u.fullyConnected;
          r.postMessage({
            type: "kaleidoscopeClassifyResponse",
            output: t,
            requestId: n,
          });
        })),
        _.apply(this, arguments)
      );
    }
    self.onerror = function (e) {
      var t = "Uncaught error in WAMediaWasmWorker: " + e.toString();
      f("error", t);
    };
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield u.fullyConnected;
          n.postMessage({ type: "log", logType: e, message: t });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield u.fullyConnected;
          t.postMessage(babelHelpers.extends({ type: "qpl" }, e));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        b.apply(this, arguments)
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
            return v({
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
          return v({
            output: o("WAResultOrError").makeError({
              errorMessage: n,
              errorType: "runtime-error",
            }),
            requestId: t.requestId,
          });
        });
    });
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        L.apply(this, arguments)
      );
    }
    u.addMessageListener("mediaStorageShadowTestRequest", function (t) {
      return (e || (e = n("Promise")))
        .resolve()
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield E(t.storageType, t.input, t.requestId);
            return k({ output: e, requestId: t.requestId });
          }),
        )
        .catch(function (e) {
          f("dev", "failed to read/write storage operation, error: " + e);
        });
    });
    function E(e, t, n) {
      switch (e) {
        case "webcache":
          return o("WAMediaStorageIoTesting").runIoTestingWebCache(t, n);
        case "opfs":
          return o("WAMediaStorageIoTesting").runIoTestingOPFS(t, n);
      }
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.output,
            n = e.requestId,
            r = yield u.fullyConnected;
          r.postMessage({
            type: "mediaStorageShadowTestResponse",
            output: t,
            requestId: n,
          });
        })),
        I.apply(this, arguments)
      );
    }
    u.addMessageListener("calculateFilehashRequest", function (t) {
      return (e || (e = n("Promise")))
        .resolve()
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WACryptoSha256").sha256Base64(t.buffer);
            return T({
              output: o("WAResultOrError").makeResult(e),
              buffer: t.buffer,
              requestId: t.requestId,
            });
          }),
        )
        .catch(function (e) {
          var n = "calculateFilehash has runtime-error " + e.toString();
          return T({
            output: o("WAResultOrError").makeError({
              errorMessage: n,
              errorType: "runtime-error",
            }),
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
        D.apply(this, arguments)
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
            return x({
              output: o("WAResultOrError").makeResult(e),
              keyBuffer: t.keyBuffer,
              buffer: t.buffer,
              requestId: t.requestId,
            });
          }),
        )
        .catch(function (e) {
          var n = "calculateHmacSha256 has runtime-error " + e.toString();
          return x({
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
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        $.apply(this, arguments)
      );
    }
    function P() {
      var e = function (t, n) {
        f(n != null ? n : "dev", t);
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
    function N() {
      P();
    }
    ((l.default = N), (l.sendLogToMainThread = f), (l.sendQplToMainThread = h));
  },
  98,
);
