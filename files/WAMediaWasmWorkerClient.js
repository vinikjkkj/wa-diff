__d(
  "WAMediaWasmWorkerClient",
  [
    "FBLogger",
    "MediaWorkerPool",
    "Promise",
    "QPLUserFlow",
    "WAByteArray",
    "WACustomError",
    "WAMediaWasmWorkerResource",
    "WAPromiseTimeout",
    "WAResultOrError",
    "WorkerBundleResource",
    "WorkerClient",
    "WorkerMessagePort",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W = "media_platform",
      q = function () {
        return r("FBLogger")(W).tags(["WAMediaWasmWorkerClient"]);
      };
    function U(t) {
      var n = t.action,
        o = t.event;
      switch (n.type) {
        case "point": {
          r("QPLUserFlow").addPoint(o, n.pointName, {
            instanceKey: n.instanceKey,
          });
          break;
        }
        case "annotations": {
          r("QPLUserFlow").addAnnotations(o, n.annotations, {
            instanceKey: n.instanceKey,
          });
          break;
        }
        default:
          q().MUSTFIX(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unknown QPL action type from worker: ",
                "",
              ])),
            n.type,
          );
      }
    }
    function V() {
      var e = o("WorkerBundleResource").createDedicatedWebWorker(
          r("WAMediaWasmWorkerResource"),
        ),
        t = new (o("WorkerMessagePort").WorkerSyncedMessagePort)(
          e,
          "WAMediaWasmWorker",
        );
      return (
        o("WorkerClient").init(t),
        t.addMessageListener("log", function (e) {
          var t = e.logType,
            n = e.message;
          switch (t) {
            case "dev":
              q().DEBUG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "from worker: ",
                    "",
                  ])),
                n,
              );
              break;
            case "error":
              q().MUSTFIX(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "worker error: ",
                    "",
                  ])),
                n,
              );
              break;
            default:
          }
        }),
        t.addMessageListener("qpl", function (e) {
          U(e);
        }),
        { port: t, worker: e }
      );
    }
    var H = new (r("MediaWorkerPool"))(),
      G = V(),
      z = G.port,
      j = G.worker;
    (H.addWorker(z, j),
      H.markTaskComplete(z),
      q().DEBUG(
        c || (c = babelHelpers.taggedTemplateLiteralLoose(["initiated."])),
      ));
    function K(e) {
      for (var t = 0; H.getSize() < e; ) {
        var n = V(),
          r = n.port,
          o = n.worker;
        (H.addWorker(r, o, !0),
          H.markTaskComplete(r),
          t++,
          q().INFO(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "expanded pool to ",
                " workers",
              ])),
            H.getSize(),
          ));
      }
      return t;
    }
    function Q(e, t) {
      H.configureIdleCleanup(e, function (e, n, r) {
        (q().INFO(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "terminated idle worker (",
              ")",
            ])),
          r,
        ),
          t == null || t(e, n, r));
      });
    }
    function X(e) {
      return H.terminateExpansionWorkers(e);
    }
    function Y(e) {
      var t = e.eventFlow,
        n = e.input;
      return se(
        {
          operation: "webpCheck",
          input: o("WAByteArray").uint8ArrayToBuffer(n),
        },
        t,
      );
    }
    function J(e) {
      var t = e.eventFlow,
        n = e.input;
      return (
        q().INFO(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "mp4RepairMuxInWorker processing video",
            ])),
        ),
        se(
          {
            operation: "mp4RepairMux",
            input: o("WAByteArray").uint8ArrayToBuffer(n),
          },
          t,
        )
      );
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            r = e.input,
            a = e.mimeType,
            i = e.supportsHevc;
          q().INFO(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "transcodeToMp4InWorker processing video",
              ])),
          );
          var l = ae();
          q().INFO(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            l,
          );
          var s = yield H.getNextConnectedPortWithTimeout(t);
          if (!s.success) return o("WAResultOrError").makeError(s.error);
          var u = s.value;
          return ie(
            u,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = u.onMessageOnce("transcodeToMp4Response", function (e) {
                  return e.requestId === l;
                }),
                n = o("WAByteArray").uint8ArrayToBuffer(r),
                s = n ? [n] : void 0;
              (u.postMessage(
                {
                  input: n,
                  requestId: l,
                  mimeType: a,
                  supportsHevc: i,
                  type: "transcodeToMp4Request",
                  qplData: t.flowDetails,
                },
                s,
              ),
                t == null || t.addPoint("sent_request_to_media_worker_start"));
              var c = yield e,
                d = c.output;
              return (
                q().INFO(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "received output from worker, requestId: ",
                      ", success: ",
                      "",
                    ])),
                  l,
                  d.success,
                ),
                d.success
                  ? (t == null ||
                      t.addPoint("sent_request_to_media_worker_end"),
                    d)
                  : (t == null ||
                      t.addPoint("sent_request_to_media_worker_end"),
                    t == null ||
                      t.addAnnotations({
                        string: { errorMessage: d.error.errorMessage },
                      }),
                    o("WAResultOrError").makeError(d.error.errorType))
              );
            }),
          );
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      var t = e.eventFlow,
        n = e.imageData,
        r = e.quality,
        a = e.useHdScanConfig;
      return se(
        {
          operation: "progressiveJpegEncode",
          input: o("WAByteArray").uint8ArrayToBuffer(n.data),
          height: n.height,
          width: n.width,
          quality: r,
          useHdScanConfig: a,
        },
        t,
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            n = e.file,
            r = e.maxOutputResolution,
            o = e.quality,
            a = e.useHdScanConfig,
            i = yield n.arrayBuffer();
          return se(
            {
              operation: "progressiveJpegEncodeWithFile",
              input: i,
              fileName: n.name,
              fileType: n.type,
              quality: o,
              useHdScanConfig: a,
              maxOutputWidth: r == null ? void 0 : r.width,
              maxOutputHeight: r == null ? void 0 : r.height,
            },
            t,
          );
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      (q().INFO(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "start prewarming media wasm worker, operation: ",
            "",
          ])),
        e,
      ),
        H.broadcastPrewarm(e));
    }
    var ae = (function () {
      var e = 0;
      return function () {
        return ++e;
      };
    })();
    function ie(e, t) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield t();
          } finally {
            H.markTaskComplete(e);
          }
        })),
        le.apply(this, arguments)
      );
    }
    function se(e, t) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = ae();
          q().INFO(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            r,
          );
          var a = yield H.getNextConnectedPortWithTimeout(t);
          if (!a.success) return a;
          var i = a.value;
          return ie(
            i,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = i.onMessageOnce("mediaOperationResponse", function (e) {
                  return e.requestId === r;
                }),
                a = e.input ? [e.input] : void 0;
              (i.postMessage(
                babelHelpers.extends({}, e, {
                  requestId: r,
                  type: "mediaOperationRequest",
                }),
                a,
              ),
                t == null || t.addPoint("sent_request_to_media_worker_start"));
              var l = yield n,
                s = l.output;
              return s.success
                ? (q().INFO(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "received output from worker, requestId: ",
                        "",
                      ])),
                    r,
                  ),
                  t == null ||
                    t.addPoint("sent_request_to_media_worker_end", {
                      bool: {
                        isOpfsSyncSupported: s.value.isOpfsSyncSupported,
                      },
                    }),
                  o("WAResultOrError").makeResult(s.value.bytes))
                : (q().MUSTFIX(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "requestId: ",
                        ", error: ",
                        "",
                      ])),
                    r,
                    s.error.errorMessage,
                  ),
                  t == null || t.addPoint("sent_request_to_media_worker_fail"),
                  o("WAResultOrError").makeError(s.error.errorType));
            }),
          );
        })),
        ue.apply(this, arguments)
      );
    }
    function ce(e) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.file,
            r = e.maxDimension,
            a = e.thumbnailBlobByteSizeLimitBytes,
            i = e.thumbnailQualityPercentageWhenAboveByteSizeLimit,
            l = ae();
          q().INFO(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "sending input to worker, requestId: ",
                "",
              ])),
            l,
          );
          var s = yield H.getNextConnectedPortWithTimeout();
          if (!s.success) return s;
          var u = s.value;
          return ie(
            u,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e,
                s,
                c = u.onMessageOnce(
                  "mediaGenerateImageThumbnailResponse",
                  function (e) {
                    return e.requestId === l;
                  },
                ),
                d = yield t.arrayBuffer(),
                m = d ? [d] : void 0;
              u.postMessage(
                {
                  input: d,
                  fileName: t.name,
                  fileType: t.type,
                  maxDimension: r,
                  requestId: l,
                  thumbnailBlobByteSizeLimitBytes: a,
                  thumbnailQualityPercentageWhenAboveByteSizeLimit: i,
                  type: "mediaGenerateImageThumbnailRequest",
                },
                m,
              );
              var p = yield c;
              return (
                q().INFO(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "received output from worker, requestId: ",
                      ", success: ",
                      "",
                    ])),
                  l,
                  p.output.success,
                ),
                p.output.success
                  ? o("WAResultOrError").makeResult(p.output.value)
                  : (q().MUSTFIX(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "requestId: ",
                          ", error: ",
                          "",
                        ])),
                      l,
                      (e = p.output.error) == null ? void 0 : e.errorMessage,
                    ),
                    (B || (B = n("Promise"))).reject(
                      (s = p.output.error) == null ? void 0 : s.errorMessage,
                    ))
              );
            }),
          );
        })),
        de.apply(this, arguments)
      );
    }
    function me(e, t) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          q().INFO(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "start media storage shadow test",
              ])),
          );
          var r = ae(),
            a = yield H.getNextConnectedPortWithTimeout();
          if (!a.success)
            return o("WAResultOrError").makeError({
              errorName: "port-init",
              errorMessage: a.error,
            });
          var i = a.value;
          return ie(
            i,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = i.onMessageOnce(
                "mediaStorageShadowTestResponse",
                function (e) {
                  return e.requestId === r;
                },
              );
              i.postMessage({
                input: e,
                requestId: r,
                storageType: t,
                type: "mediaStorageShadowTestRequest",
              });
              var a = yield n,
                l = a.output;
              return l.success
                ? (q().INFO(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "received storage results from worker, requestId: ",
                        "",
                      ])),
                    r,
                  ),
                  o("WAResultOrError").makeResult(l.value))
                : (q().MUSTFIX(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "media storage test failed for storageType: ",
                        ", error: ",
                        "",
                      ])),
                    t,
                    l.error.errorMessage,
                  ),
                  o("WAResultOrError").makeError({
                    errorName: l.error.errorName,
                    errorMessage: l.error.errorMessage,
                  }));
            }),
          );
        })),
        pe.apply(this, arguments)
      );
    }
    function _e(e) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            r = e.input,
            a = e.mediaType,
            i = e.rawMimeType,
            l = ae();
          q().INFO(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope classifiy in worker, requestId: ",
                "",
              ])),
            l,
          );
          var s = yield H.getNextConnectedPortWithTimeout(t);
          if (!s.success)
            return {
              transferredBuffer: r,
              result: o("WAResultOrError").makeError({ errorName: s.error }),
            };
          var u = s.value;
          return ie(
            u,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = u.onMessageOnce(
                "kaleidoscopeClassifyResponse",
                function (e) {
                  return e.requestId === l;
                },
              );
              (u.postMessage(
                {
                  mediaType: a,
                  rawMimeType: i,
                  input: r,
                  requestId: l,
                  type: "kaleidoscopeClassifyRequest",
                },
                [r],
              ),
                t.addPoint("sent_request_to_media_worker_start"));
              var n = yield e,
                s = n.output,
                c = n.transferredBuffer;
              return s.success
                ? (q().INFO(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "received output from worker, requestId: ",
                        "",
                      ])),
                    l,
                  ),
                  t == null || t.addPoint("sent_request_to_media_worker_end"),
                  { transferredBuffer: c, result: s })
                : (t.addPoint("sent_request_to_media_worker_fail"),
                  {
                    transferredBuffer: c,
                    result: o("WAResultOrError").makeError({
                      errorName: s.error,
                    }),
                  });
            }),
          );
        })),
        fe.apply(this, arguments)
      );
    }
    var ge = 1e4;
    function he(e) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            a = e.hints,
            i = e.input,
            l = ae();
          q().INFO(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope provenance detection in worker, requestId: ",
                "",
              ])),
            l,
          );
          var s = yield H.getNextConnectedPortWithTimeout(t);
          if (!s.success)
            return (
              q().WARN(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "provenance detection failed, requestId: ",
                    ", reason: no-worker-port, error: ",
                    "",
                  ])),
                l,
                s.error,
              ),
              t == null ||
                t.addPoint("worker_roundtrip_fail", {
                  string: { failure_reason: "no_worker_port" },
                }),
              { transferredBuffer: i, provenance: null }
            );
          var u = s.value;
          return ie(
            u,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = function () {},
                s = new (B || (B = n("Promise")))(function (t) {
                  var n = u.addMessageListener(
                    "kaleidoscopeProvenanceResponse",
                    function (n) {
                      n.requestId === l &&
                        (e(),
                        q().INFO(
                          $ ||
                            ($ = babelHelpers.taggedTemplateLiteralLoose([
                              "received provenance from worker, requestId: ",
                              ", hasSignal: ",
                              "",
                            ])),
                          l,
                          n.provenance != null,
                        ),
                        t({
                          transferredBuffer: n.transferredBuffer,
                          provenance: n.provenance,
                          engineErrorCode: n.engineErrorCode,
                        }));
                    },
                  );
                  e = function () {
                    u.removeMessageListener(
                      "kaleidoscopeProvenanceResponse",
                      n,
                    );
                  };
                });
              try {
                (t == null || t.addPoint("worker_roundtrip_start"),
                  u.postMessage(
                    {
                      input: i,
                      hints: a,
                      qplData: t == null ? void 0 : t.flowDetails,
                      requestId: l,
                      type: "kaleidoscopeProvenanceRequest",
                    },
                    [i],
                  ));
                var c = yield o("WAPromiseTimeout").promiseTimeout(s, ge);
                return (t == null || t.addPoint("worker_roundtrip_end"), c);
              } catch (n) {
                e();
                var d =
                  n instanceof o("WACustomError").TimeoutError
                    ? "timeout"
                    : "post_failed";
                return (
                  q().WARN(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "provenance detection failed, requestId: ",
                        ", reason: ",
                        ", error: ",
                        "",
                      ])),
                    l,
                    d,
                    r("getErrorSafe")(n).message,
                  ),
                  t == null ||
                    t.addPoint("worker_roundtrip_fail", {
                      string: { failure_reason: d },
                    }),
                  { transferredBuffer: i, provenance: null }
                );
              }
            }),
          );
        })),
        ye.apply(this, arguments)
      );
    }
    function Ce(e) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ae();
          q().INFO(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "calculateFilehashInWorker[",
                "]: sending ",
                "B to worker",
              ])),
            t,
            e.byteLength,
          );
          var r = yield H.getNextConnectedPortWithTimeout();
          if (!r.success) return { transferredBuffer: e, result: r };
          var a = r.value;
          return ie(
            a,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = a.onMessageOnce(
                "calculateFilehashResponse",
                function (e) {
                  return e.requestId === t;
                },
              );
              a.postMessage(
                { buffer: e, requestId: t, type: "calculateFilehashRequest" },
                [e],
              );
              var r = yield n,
                i = r.output,
                l = r.transferredBuffer;
              return i.success
                ? (q().INFO(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "calculateFilehashInWorker[",
                        "]: received result from worker",
                      ])),
                    t,
                  ),
                  {
                    transferredBuffer: l,
                    result: o("WAResultOrError").makeResult({
                      filehash: i.value,
                    }),
                  })
                : (q().MUSTFIX(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "calculateFilehashInWorker[",
                        "]: failed: ",
                        "",
                      ])),
                    t,
                    i.error.errorMessage,
                  ),
                  {
                    transferredBuffer: l,
                    result: o("WAResultOrError").makeError(i.error.errorType),
                  });
            }),
          );
        })),
        be.apply(this, arguments)
      );
    }
    function ve(e, t, n) {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            var a = ae();
            q().INFO(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "hmacSha256InWorker[",
                  "]: sending ",
                  "B to worker",
                ])),
              a,
              t.byteLength,
            );
            var i = yield H.getNextConnectedPortWithTimeout();
            if (!i.success)
              return {
                transferredKeyBuffer: e,
                transferredBuffer: t,
                result: i,
              };
            var l = i.value;
            return ie(
              l,
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var n = l.onMessageOnce(
                  "calculateHmacSha256Response",
                  function (e) {
                    return e.requestId === a;
                  },
                );
                l.postMessage(
                  {
                    keyBuffer: e,
                    buffer: t,
                    length: r,
                    requestId: a,
                    type: "calculateHmacSha256Request",
                  },
                  [e, t],
                );
                var i = yield n,
                  s = i.output,
                  u = i.transferredBuffer,
                  c = i.transferredKeyBuffer;
                return s.success
                  ? (q().INFO(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "hmacSha256InWorker[",
                          "]: received result from worker",
                        ])),
                      a,
                    ),
                    {
                      transferredKeyBuffer: c,
                      transferredBuffer: u,
                      result: o("WAResultOrError").makeResult({
                        hmac: s.value,
                      }),
                    })
                  : (q().MUSTFIX(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "hmacSha256InWorker[",
                          "]: failed: ",
                          "",
                        ])),
                      a,
                      s.error.errorMessage,
                    ),
                    {
                      transferredKeyBuffer: e,
                      transferredBuffer: t,
                      result: o("WAResultOrError").makeError(s.error.errorType),
                    });
              }),
            );
          },
        )),
        Se.apply(this, arguments)
      );
    }
    ((l.expandPool = K),
      (l.configureIdleCleanup = Q),
      (l.terminateExpansionWorkers = X),
      (l.webpCheckInWorker = Y),
      (l.mp4RepairMuxInWorker = J),
      (l.transcodeToMp4InWorker = Z),
      (l.progressiveJpegEncodeInWorker = te),
      (l.progressiveJpegEncodeInWorkerWithFile = ne),
      (l.prewarmMediaWasmWorker = oe),
      (l.generateImageThumbnailInWorker = ce),
      (l.runMediaStorageShadowTestWasmWorker = me),
      (l.kaleidoscopeClassifyInWorker = _e),
      (l.detectAiProvenanceInWorker = he),
      (l.calculateFilehashInWorker = Ce),
      (l.hmacSha256InWorker = ve));
  },
  98,
);
