__d(
  "WAMediaWasmWorkerClient",
  [
    "FBLogger",
    "MediaWorkerPool",
    "Promise",
    "QPLUserFlow",
    "WAByteArray",
    "WAMediaWasmWorkerResource",
    "WAResultOrError",
    "WorkerBundleResource",
    "WorkerClient",
    "WorkerMessagePort",
    "asyncToGeneratorRuntime",
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
      A = "media_platform",
      F = function () {
        return r("FBLogger")(A).tags(["WAMediaWasmWorkerClient"]);
      };
    function O(t) {
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
          F().MUSTFIX(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unknown QPL action type from worker: ",
                "",
              ])),
            n.type,
          );
      }
    }
    function B() {
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
              F().DEBUG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "from worker: ",
                    "",
                  ])),
                n,
              );
              break;
            case "error":
              F().MUSTFIX(
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
          O(e);
        }),
        { port: t, worker: e }
      );
    }
    var W = new (r("MediaWorkerPool"))(),
      q = B(),
      U = q.port,
      V = q.worker;
    (W.addWorker(U, V),
      W.markTaskComplete(U),
      F().DEBUG(
        c || (c = babelHelpers.taggedTemplateLiteralLoose(["initiated."])),
      ));
    function H(e) {
      for (var t = 0; W.getSize() < e; ) {
        var n = B(),
          r = n.port,
          o = n.worker;
        (W.addWorker(r, o, !0),
          W.markTaskComplete(r),
          t++,
          F().INFO(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "expanded pool to ",
                " workers",
              ])),
            W.getSize(),
          ));
      }
      return t;
    }
    function G(e, t) {
      W.configureIdleCleanup(e, function (e, n, r) {
        (F().INFO(
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
    function z(e) {
      return W.terminateExpansionWorkers(e);
    }
    function j(e) {
      var t = e.eventFlow,
        n = e.input;
      return oe(
        {
          operation: "webpCheck",
          input: o("WAByteArray").uint8ArrayToBuffer(n),
        },
        t,
      );
    }
    function K(e) {
      var t = e.eventFlow,
        n = e.input;
      return (
        F().INFO(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "mp4RepairMuxInWorker processing video",
            ])),
        ),
        oe(
          {
            operation: "mp4RepairMux",
            input: o("WAByteArray").uint8ArrayToBuffer(n),
          },
          t,
        )
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            r = e.input,
            a = e.mimeType,
            i = e.supportsHevc;
          F().INFO(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "transcodeToMp4InWorker processing video",
              ])),
          );
          var l = te();
          F().INFO(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            l,
          );
          var s = yield W.getNextConnectedPortWithTimeout(t);
          if (!s.success) return o("WAResultOrError").makeError(s.error);
          var u = s.value;
          return ne(
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
                F().INFO(
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
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      var t = e.eventFlow,
        n = e.imageData,
        r = e.quality,
        a = e.useHdScanConfig;
      return oe(
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
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            n = e.file,
            r = e.maxOutputResolution,
            o = e.quality,
            a = e.useHdScanConfig,
            i = yield n.arrayBuffer();
          return oe(
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
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      (F().INFO(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "start prewarming media wasm worker, operation: ",
            "",
          ])),
        e,
      ),
        W.broadcastPrewarm(e));
    }
    var te = (function () {
      var e = 0;
      return function () {
        return ++e;
      };
    })();
    function ne(e, t) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield t();
          } finally {
            W.markTaskComplete(e);
          }
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e, t) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = te();
          F().INFO(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            r,
          );
          var a = yield W.getNextConnectedPortWithTimeout(t);
          if (!a.success) return a;
          var i = a.value;
          return ne(
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
                ? (F().INFO(
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
                : (F().MUSTFIX(
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
        ae.apply(this, arguments)
      );
    }
    function ie(e) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.file,
            r = e.maxDimension,
            a = e.thumbnailBlobByteSizeLimitBytes,
            i = e.thumbnailQualityPercentageWhenAboveByteSizeLimit,
            l = te();
          F().INFO(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "sending input to worker, requestId: ",
                "",
              ])),
            l,
          );
          var s = yield W.getNextConnectedPortWithTimeout();
          if (!s.success) return s;
          var u = s.value;
          return ne(
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
                F().INFO(
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
                  : (F().MUSTFIX(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "requestId: ",
                          ", error: ",
                          "",
                        ])),
                      l,
                      (e = p.output.error) == null ? void 0 : e.errorMessage,
                    ),
                    (w || (w = n("Promise"))).reject(
                      (s = p.output.error) == null ? void 0 : s.errorMessage,
                    ))
              );
            }),
          );
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
          F().INFO(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "start media storage shadow test",
              ])),
          );
          var r = te(),
            a = yield W.getNextConnectedPortWithTimeout();
          if (!a.success)
            return o("WAResultOrError").makeError({
              errorName: "port-init",
              errorMessage: a.error,
            });
          var i = a.value;
          return ne(
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
                ? (F().INFO(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "received storage results from worker, requestId: ",
                        "",
                      ])),
                    r,
                  ),
                  o("WAResultOrError").makeResult(l.value))
                : (F().MUSTFIX(
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
        ue.apply(this, arguments)
      );
    }
    function ce(e) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            r = e.input,
            a = e.mediaType,
            i = e.rawMimeType,
            l = te();
          F().INFO(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope classifiy in worker, requestId: ",
                "",
              ])),
            l,
          );
          var s = yield W.getNextConnectedPortWithTimeout(t);
          if (!s.success)
            return {
              transferredBuffer: r,
              result: o("WAResultOrError").makeError({ errorName: s.error }),
            };
          var u = s.value;
          return ne(
            u,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = u.onMessageOnce(
                "kaleidoscopeClassifyResponse",
                function (e) {
                  return e.requestId === l;
                },
              );
              (u.postMessage({
                mediaType: a,
                rawMimeType: i,
                input: r,
                requestId: l,
                type: "kaleidoscopeClassifyRequest",
              }),
                t.addPoint("sent_request_to_media_worker_start"));
              var n = yield e,
                s = n.output;
              return s.success
                ? (F().INFO(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "received output from worker, requestId: ",
                        "",
                      ])),
                    l,
                  ),
                  t == null || t.addPoint("sent_request_to_media_worker_end"),
                  { transferredBuffer: r, result: s })
                : (t.addPoint("sent_request_to_media_worker_fail"),
                  {
                    transferredBuffer: r,
                    result: o("WAResultOrError").makeError({
                      errorName: s.error,
                    }),
                  });
            }),
          );
        })),
        de.apply(this, arguments)
      );
    }
    function me(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = te();
          F().INFO(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "calculateFilehashInWorker[",
                "]: sending ",
                "B to worker",
              ])),
            t,
            e.byteLength,
          );
          var r = yield W.getNextConnectedPortWithTimeout();
          if (!r.success) return { transferredBuffer: e, result: r };
          var a = r.value;
          return ne(
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
                ? (F().INFO(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
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
                : (F().MUSTFIX(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
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
        pe.apply(this, arguments)
      );
    }
    function _e(e, t, n) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            var a = te();
            F().INFO(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "hmacSha256InWorker[",
                  "]: sending ",
                  "B to worker",
                ])),
              a,
              t.byteLength,
            );
            var i = yield W.getNextConnectedPortWithTimeout();
            if (!i.success)
              return {
                transferredKeyBuffer: e,
                transferredBuffer: t,
                result: i,
              };
            var l = i.value;
            return ne(
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
                  ? (F().INFO(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
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
                  : (F().MUSTFIX(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
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
        fe.apply(this, arguments)
      );
    }
    ((l.expandPool = H),
      (l.configureIdleCleanup = G),
      (l.terminateExpansionWorkers = z),
      (l.webpCheckInWorker = j),
      (l.mp4RepairMuxInWorker = K),
      (l.transcodeToMp4InWorker = Q),
      (l.progressiveJpegEncodeInWorker = Y),
      (l.progressiveJpegEncodeInWorkerWithFile = J),
      (l.prewarmMediaWasmWorker = ee),
      (l.generateImageThumbnailInWorker = ie),
      (l.runMediaStorageShadowTestWasmWorker = se),
      (l.kaleidoscopeClassifyInWorker = ce),
      (l.calculateFilehashInWorker = me),
      (l.hmacSha256InWorker = _e));
  },
  98,
);
