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
      w = "media_platform",
      A = function () {
        return r("FBLogger")(w).tags(["WAMediaWasmWorkerClient"]);
      };
    function F(t) {
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
          A().MUSTFIX(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unknown QPL action type from worker: ",
                "",
              ])),
            n.type,
          );
      }
    }
    function O() {
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
              A().DEBUG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "from worker: ",
                    "",
                  ])),
                n,
              );
              break;
            case "error":
              A().MUSTFIX(
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
          F(e);
        }),
        t
      );
    }
    var B = new (r("MediaWorkerPool"))(),
      W = O();
    (B.addWorker(W),
      B.markTaskComplete(W),
      A().DEBUG(
        c || (c = babelHelpers.taggedTemplateLiteralLoose(["initiated."])),
      ));
    function q(e) {
      for (var t = 0; B.getSize() < e; ) {
        var n = O();
        (B.addWorker(n),
          B.markTaskComplete(n),
          t++,
          A().INFO(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "expanded pool to ",
                " workers",
              ])),
            B.getSize(),
          ));
      }
      return t;
    }
    function U(e) {
      var t = e.eventFlow,
        n = e.input;
      return Y(
        {
          operation: "webpCheck",
          input: o("WAByteArray").uint8ArrayToBuffer(n),
        },
        t,
      );
    }
    function V(e) {
      var t = e.eventFlow,
        n = e.input;
      return (
        A().INFO(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "mp4RepairMuxInWorker processing video",
            ])),
        ),
        Y(
          {
            operation: "mp4RepairMux",
            input: o("WAByteArray").uint8ArrayToBuffer(n),
          },
          t,
        )
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            n = e.input,
            r = e.mimeType,
            a = e.supportsHevc;
          A().INFO(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "transcodeToMp4InWorker processing video",
              ])),
          );
          var i = X();
          A().INFO(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            i,
          );
          var l = yield B.getNextConnectedPortWithTimeout(t);
          if (!l.success) return o("WAResultOrError").makeError(l.error);
          var s = l.value,
            u = s.onMessageOnce("transcodeToMp4Response", function (e) {
              return e.requestId === i;
            }),
            c = o("WAByteArray").uint8ArrayToBuffer(n),
            d = c ? [c] : void 0;
          (s.postMessage(
            {
              input: c,
              requestId: i,
              mimeType: r,
              supportsHevc: a,
              type: "transcodeToMp4Request",
              qplData: t.flowDetails,
            },
            d,
          ),
            t == null || t.addPoint("sent_request_to_media_worker_start"));
          var m = yield u,
            p = m.output;
          return (
            B.markTaskComplete(s),
            A().INFO(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "received output from worker, requestId: ",
                  ", success: ",
                  "",
                ])),
              i,
              p.success,
            ),
            p.success
              ? (t == null || t.addPoint("sent_request_to_media_worker_end"), p)
              : (t == null || t.addPoint("sent_request_to_media_worker_end"),
                t == null ||
                  t.addAnnotations({
                    string: { errorMessage: p.error.errorMessage },
                  }),
                o("WAResultOrError").makeError(p.error.errorType))
          );
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      var t = e.eventFlow,
        n = e.imageData,
        r = e.quality,
        a = e.useHdScanConfig;
      return Y(
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
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            n = e.file,
            r = e.maxOutputResolution,
            o = e.quality,
            a = e.useHdScanConfig,
            i = yield n.arrayBuffer();
          return Y(
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
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      (A().INFO(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "start prewarming media wasm worker, operation: ",
            "",
          ])),
        e,
      ),
        B.broadcastPrewarm(e));
    }
    var X = (function () {
      var e = 0;
      return function () {
        return ++e;
      };
    })();
    function Y(e, t) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = X();
          A().INFO(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            n,
          );
          var r = yield B.getNextConnectedPortWithTimeout(t);
          if (!r.success) return r;
          var a = r.value,
            i = a.onMessageOnce("mediaOperationResponse", function (e) {
              return e.requestId === n;
            }),
            l = e.input ? [e.input] : void 0;
          (a.postMessage(
            babelHelpers.extends({}, e, {
              requestId: n,
              type: "mediaOperationRequest",
            }),
            l,
          ),
            t == null || t.addPoint("sent_request_to_media_worker_start"));
          var s = yield i,
            u = s.output;
          return (
            B.markTaskComplete(a),
            u.success
              ? (A().INFO(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "received output from worker, requestId: ",
                      "",
                    ])),
                  n,
                ),
                t == null ||
                  t.addPoint("sent_request_to_media_worker_end", {
                    bool: { isOpfsSyncSupported: u.value.isOpfsSyncSupported },
                  }),
                o("WAResultOrError").makeResult(u.value.bytes))
              : (A().MUSTFIX(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "requestId: ",
                      ", error: ",
                      "",
                    ])),
                  n,
                  u.error.errorMessage,
                ),
                t == null || t.addPoint("sent_request_to_media_worker_fail"),
                o("WAResultOrError").makeError(u.error.errorType))
          );
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r,
            a = e.file,
            i = e.maxDimension,
            l = e.thumbnailBlobByteSizeLimitBytes,
            s = e.thumbnailQualityPercentageWhenAboveByteSizeLimit,
            u = X();
          A().INFO(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "sending input to worker, requestId: ",
                "",
              ])),
            u,
          );
          var c = yield B.getNextConnectedPortWithTimeout();
          if (!c.success) return c;
          var d = c.value,
            m = d.onMessageOnce(
              "mediaGenerateImageThumbnailResponse",
              function (e) {
                return e.requestId === u;
              },
            ),
            p = yield a.arrayBuffer(),
            _ = p ? [p] : void 0;
          d.postMessage(
            {
              input: p,
              fileName: a.name,
              fileType: a.type,
              maxDimension: i,
              requestId: u,
              thumbnailBlobByteSizeLimitBytes: l,
              thumbnailQualityPercentageWhenAboveByteSizeLimit: s,
              type: "mediaGenerateImageThumbnailRequest",
            },
            _,
          );
          var f = yield m;
          return (
            B.markTaskComplete(d),
            A().INFO(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "received output from worker, requestId: ",
                  ", success: ",
                  "",
                ])),
              u,
              f.output.success,
            ),
            f.output.success
              ? o("WAResultOrError").makeResult(f.output.value)
              : (A().MUSTFIX(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "requestId: ",
                      ", error: ",
                      "",
                    ])),
                  u,
                  (t = f.output.error) == null ? void 0 : t.errorMessage,
                ),
                (M || (M = n("Promise"))).reject(
                  (r = f.output.error) == null ? void 0 : r.errorMessage,
                ))
          );
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e, t) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          A().INFO(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "start media storage shadow test",
              ])),
          );
          var n = X(),
            r = yield B.getNextConnectedPortWithTimeout();
          if (!r.success)
            return o("WAResultOrError").makeError({
              errorName: "port-init",
              errorMessage: r.error,
            });
          var a = r.value,
            i = a.onMessageOnce("mediaStorageShadowTestResponse", function (e) {
              return e.requestId === n;
            });
          a.postMessage({
            input: e,
            requestId: n,
            storageType: t,
            type: "mediaStorageShadowTestRequest",
          });
          var l = yield i,
            s = l.output;
          return (
            B.markTaskComplete(a),
            s.success
              ? (A().INFO(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "received storage results from worker, requestId: ",
                      "",
                    ])),
                  n,
                ),
                o("WAResultOrError").makeResult(s.value))
              : (A().MUSTFIX(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "media storage test failed for storageType: ",
                      ", error: ",
                      "",
                    ])),
                  t,
                  s.error.errorMessage,
                ),
                o("WAResultOrError").makeError({
                  errorName: s.error.errorName,
                  errorMessage: s.error.errorMessage,
                }))
          );
        })),
        ne.apply(this, arguments)
      );
    }
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            n = e.input,
            r = e.mediaType,
            a = e.rawMimeType,
            i = X();
          A().INFO(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope classifiy in worker, requestId: ",
                "",
              ])),
            i,
          );
          var l = yield B.getNextConnectedPortWithTimeout(t);
          if (!l.success)
            return {
              transferredBuffer: n,
              result: o("WAResultOrError").makeError({ errorName: l.error }),
            };
          var s = l.value,
            u = s.onMessageOnce("kaleidoscopeClassifyResponse", function (e) {
              return e.requestId === i;
            });
          (s.postMessage({
            mediaType: r,
            rawMimeType: a,
            input: n,
            requestId: i,
            type: "kaleidoscopeClassifyRequest",
          }),
            t.addPoint("sent_request_to_media_worker_start"));
          var c = yield u,
            d = c.output;
          return (
            B.markTaskComplete(s),
            d.success
              ? (A().INFO(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "received output from worker, requestId: ",
                      "",
                    ])),
                  i,
                ),
                t == null || t.addPoint("sent_request_to_media_worker_end"),
                { transferredBuffer: n, result: d })
              : (t.addPoint("sent_request_to_media_worker_fail"),
                {
                  transferredBuffer: n,
                  result: o("WAResultOrError").makeError({
                    errorName: d.error,
                  }),
                })
          );
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = X();
          A().INFO(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "calculateFilehashInWorker[",
                "]: sending ",
                "B to worker",
              ])),
            t,
            e.byteLength,
          );
          var n = yield B.getNextConnectedPortWithTimeout();
          if (!n.success) return { transferredBuffer: e, result: n };
          var r = n.value,
            a = r.onMessageOnce("calculateFilehashResponse", function (e) {
              return e.requestId === t;
            });
          r.postMessage(
            { buffer: e, requestId: t, type: "calculateFilehashRequest" },
            [e],
          );
          var i = yield a,
            l = i.output,
            s = i.transferredBuffer;
          return (
            B.markTaskComplete(r),
            l.success
              ? (A().INFO(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "calculateFilehashInWorker[",
                      "]: received result from worker",
                    ])),
                  t,
                ),
                {
                  transferredBuffer: s,
                  result: o("WAResultOrError").makeResult({
                    filehash: l.value,
                  }),
                })
              : (A().MUSTFIX(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "calculateFilehashInWorker[",
                      "]: failed: ",
                      "",
                    ])),
                  t,
                  l.error.errorMessage,
                ),
                {
                  transferredBuffer: s,
                  result: o("WAResultOrError").makeError(l.error.errorType),
                })
          );
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e, t, n) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = X();
            A().INFO(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "hmacSha256InWorker[",
                  "]: sending ",
                  "B to worker",
                ])),
              r,
              t.byteLength,
            );
            var a = yield B.getNextConnectedPortWithTimeout();
            if (!a.success)
              return {
                transferredKeyBuffer: e,
                transferredBuffer: t,
                result: a,
              };
            var i = a.value,
              l = i.onMessageOnce("calculateHmacSha256Response", function (e) {
                return e.requestId === r;
              });
            i.postMessage(
              {
                keyBuffer: e,
                buffer: t,
                length: n,
                requestId: r,
                type: "calculateHmacSha256Request",
              },
              [e, t],
            );
            var s = yield l,
              u = s.output,
              c = s.transferredBuffer,
              d = s.transferredKeyBuffer;
            return (
              B.markTaskComplete(i),
              u.success
                ? (A().INFO(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "hmacSha256InWorker[",
                        "]: received result from worker",
                      ])),
                    r,
                  ),
                  {
                    transferredKeyBuffer: d,
                    transferredBuffer: c,
                    result: o("WAResultOrError").makeResult({ hmac: u.value }),
                  })
                : (A().MUSTFIX(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "hmacSha256InWorker[",
                        "]: failed: ",
                        "",
                      ])),
                    r,
                    u.error.errorMessage,
                  ),
                  {
                    transferredKeyBuffer: e,
                    transferredBuffer: t,
                    result: o("WAResultOrError").makeError(u.error.errorType),
                  })
            );
          },
        )),
        se.apply(this, arguments)
      );
    }
    ((l.expandPool = q),
      (l.webpCheckInWorker = U),
      (l.mp4RepairMuxInWorker = V),
      (l.transcodeToMp4InWorker = H),
      (l.progressiveJpegEncodeInWorker = z),
      (l.progressiveJpegEncodeInWorkerWithFile = j),
      (l.prewarmMediaWasmWorker = Q),
      (l.generateImageThumbnailInWorker = Z),
      (l.runMediaStorageShadowTestWasmWorker = te),
      (l.kaleidoscopeClassifyInWorker = re),
      (l.calculateFilehashInWorker = ae),
      (l.hmacSha256InWorker = le));
  },
  98,
);
