__d(
  "WAMediaWasmWorkerClient",
  [
    "FBLogger",
    "MediaWorkerPool",
    "QPLUserFlow",
    "WAByteArray",
    "WAMediaWasmWorkerResource",
    "WAResultOrError",
    "WorkerBundleResource",
    "WorkerClient",
    "WorkerMessagePort",
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
        { port: t, worker: e }
      );
    }
    var B = new (r("MediaWorkerPool"))(),
      W = O(),
      q = W.port,
      U = W.worker;
    (B.addWorker(q, U),
      B.markTaskComplete(q),
      A().DEBUG(
        c || (c = babelHelpers.taggedTemplateLiteralLoose(["initiated."])),
      ));
    function V(e) {
      for (var t = 0; B.getSize() < e; ) {
        var n = O(),
          r = n.port,
          o = n.worker;
        (B.addWorker(r, o, !0),
          B.markTaskComplete(r),
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
    function H(e, t) {
      B.configureIdleCleanup(e, function (e, n, r) {
        (A().INFO(
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
    function G(e) {
      return B.terminateExpansionWorkers(e);
    }
    function z(e) {
      var t = e.eventFlow,
        n = e.input;
      return ee(
        {
          operation: "webpCheck",
          input: o("WAByteArray").uint8ArrayToBuffer(n),
        },
        t,
      );
    }
    function j(e) {
      var t = e.eventFlow,
        n = e.input;
      return (
        A().INFO(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "mp4RepairMuxInWorker processing video",
            ])),
        ),
        ee(
          {
            operation: "mp4RepairMux",
            input: o("WAByteArray").uint8ArrayToBuffer(n),
          },
          t,
        )
      );
    }
    async function K(e) {
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
      var i = J();
      A().INFO(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "sending input bytes to worker, requestId: ",
            "",
          ])),
        i,
      );
      var l = await B.getNextConnectedPortWithTimeout(t);
      if (!l.success) return o("WAResultOrError").makeError(l.error);
      var s = l.value;
      return Z(s, async function () {
        var e = s.onMessageOnce("transcodeToMp4Response", function (e) {
            return e.requestId === i;
          }),
          l = o("WAByteArray").uint8ArrayToBuffer(n),
          u = l ? [l] : void 0;
        (s.postMessage(
          {
            input: l,
            requestId: i,
            mimeType: r,
            supportsHevc: a,
            type: "transcodeToMp4Request",
            qplData: t.flowDetails,
          },
          u,
        ),
          t == null || t.addPoint("sent_request_to_media_worker_start"));
        var c = await e,
          d = c.output;
        return (
          A().INFO(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "received output from worker, requestId: ",
                ", success: ",
                "",
              ])),
            i,
            d.success,
          ),
          d.success
            ? (t == null || t.addPoint("sent_request_to_media_worker_end"), d)
            : (t == null || t.addPoint("sent_request_to_media_worker_end"),
              t == null ||
                t.addAnnotations({
                  string: { errorMessage: d.error.errorMessage },
                }),
              o("WAResultOrError").makeError(d.error.errorType))
        );
      });
    }
    function Q(e) {
      var t = e.eventFlow,
        n = e.imageData,
        r = e.quality,
        a = e.useHdScanConfig;
      return ee(
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
    async function X(e) {
      var t = e.eventFlow,
        n = e.file,
        r = e.maxOutputResolution,
        o = e.quality,
        a = e.useHdScanConfig,
        i = await n.arrayBuffer();
      return ee(
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
    }
    function Y(e) {
      (A().INFO(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "start prewarming media wasm worker, operation: ",
            "",
          ])),
        e,
      ),
        B.broadcastPrewarm(e));
    }
    var J = (function () {
      var e = 0;
      return function () {
        return ++e;
      };
    })();
    async function Z(e, t) {
      try {
        return await t();
      } finally {
        B.markTaskComplete(e);
      }
    }
    async function ee(e, t) {
      var n = J();
      A().INFO(
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
            "sending input bytes to worker, requestId: ",
            "",
          ])),
        n,
      );
      var r = await B.getNextConnectedPortWithTimeout(t);
      if (!r.success) return r;
      var a = r.value;
      return Z(a, async function () {
        var r = a.onMessageOnce("mediaOperationResponse", function (e) {
            return e.requestId === n;
          }),
          i = e.input ? [e.input] : void 0;
        (a.postMessage(
          babelHelpers.extends({}, e, {
            requestId: n,
            type: "mediaOperationRequest",
          }),
          i,
        ),
          t == null || t.addPoint("sent_request_to_media_worker_start"));
        var l = await r,
          s = l.output;
        return s.success
          ? (A().INFO(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "received output from worker, requestId: ",
                  "",
                ])),
              n,
            ),
            t == null ||
              t.addPoint("sent_request_to_media_worker_end", {
                bool: { isOpfsSyncSupported: s.value.isOpfsSyncSupported },
              }),
            o("WAResultOrError").makeResult(s.value.bytes))
          : (A().MUSTFIX(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "requestId: ",
                  ", error: ",
                  "",
                ])),
              n,
              s.error.errorMessage,
            ),
            t == null || t.addPoint("sent_request_to_media_worker_fail"),
            o("WAResultOrError").makeError(s.error.errorType));
      });
    }
    async function te(e) {
      var t = e.file,
        n = e.maxDimension,
        r = e.thumbnailBlobByteSizeLimitBytes,
        a = e.thumbnailQualityPercentageWhenAboveByteSizeLimit,
        i = J();
      A().INFO(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "sending input to worker, requestId: ",
            "",
          ])),
        i,
      );
      var l = await B.getNextConnectedPortWithTimeout();
      if (!l.success) return l;
      var s = l.value;
      return Z(s, async function () {
        var e,
          l,
          u = s.onMessageOnce(
            "mediaGenerateImageThumbnailResponse",
            function (e) {
              return e.requestId === i;
            },
          ),
          c = await t.arrayBuffer(),
          d = c ? [c] : void 0;
        s.postMessage(
          {
            input: c,
            fileName: t.name,
            fileType: t.type,
            maxDimension: n,
            requestId: i,
            thumbnailBlobByteSizeLimitBytes: r,
            thumbnailQualityPercentageWhenAboveByteSizeLimit: a,
            type: "mediaGenerateImageThumbnailRequest",
          },
          d,
        );
        var m = await u;
        return (
          A().INFO(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "received output from worker, requestId: ",
                ", success: ",
                "",
              ])),
            i,
            m.output.success,
          ),
          m.output.success
            ? o("WAResultOrError").makeResult(m.output.value)
            : (A().MUSTFIX(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "requestId: ",
                    ", error: ",
                    "",
                  ])),
                i,
                (e = m.output.error) == null ? void 0 : e.errorMessage,
              ),
              Promise.reject(
                (l = m.output.error) == null ? void 0 : l.errorMessage,
              ))
        );
      });
    }
    async function ne(e, t) {
      A().INFO(
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
            "start media storage shadow test",
          ])),
      );
      var n = J(),
        r = await B.getNextConnectedPortWithTimeout();
      if (!r.success)
        return o("WAResultOrError").makeError({
          errorName: "port-init",
          errorMessage: r.error,
        });
      var a = r.value;
      return Z(a, async function () {
        var r = a.onMessageOnce("mediaStorageShadowTestResponse", function (e) {
          return e.requestId === n;
        });
        a.postMessage({
          input: e,
          requestId: n,
          storageType: t,
          type: "mediaStorageShadowTestRequest",
        });
        var i = await r,
          l = i.output;
        return l.success
          ? (A().INFO(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "received storage results from worker, requestId: ",
                  "",
                ])),
              n,
            ),
            o("WAResultOrError").makeResult(l.value))
          : (A().MUSTFIX(
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
      });
    }
    async function re(e) {
      var t = e.eventFlow,
        n = e.input,
        r = e.mediaType,
        a = e.rawMimeType,
        i = J();
      A().INFO(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
            "start kaleidoscope classifiy in worker, requestId: ",
            "",
          ])),
        i,
      );
      var l = await B.getNextConnectedPortWithTimeout(t);
      if (!l.success)
        return {
          transferredBuffer: n,
          result: o("WAResultOrError").makeError({ errorName: l.error }),
        };
      var s = l.value;
      return Z(s, async function () {
        var e = s.onMessageOnce("kaleidoscopeClassifyResponse", function (e) {
          return e.requestId === i;
        });
        (s.postMessage(
          {
            mediaType: r,
            rawMimeType: a,
            input: n,
            requestId: i,
            type: "kaleidoscopeClassifyRequest",
          },
          [n],
        ),
          t.addPoint("sent_request_to_media_worker_start"));
        var l = await e,
          u = l.output,
          c = l.transferredBuffer;
        return u.success
          ? (A().INFO(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "received output from worker, requestId: ",
                  "",
                ])),
              i,
            ),
            t == null || t.addPoint("sent_request_to_media_worker_end"),
            { transferredBuffer: c, result: u })
          : (t.addPoint("sent_request_to_media_worker_fail"),
            {
              transferredBuffer: c,
              result: o("WAResultOrError").makeError({ errorName: u.error }),
            });
      });
    }
    async function oe(e) {
      var t = J();
      A().INFO(
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
            "calculateFilehashInWorker[",
            "]: sending ",
            "B to worker",
          ])),
        t,
        e.byteLength,
      );
      var n = await B.getNextConnectedPortWithTimeout();
      if (!n.success) return { transferredBuffer: e, result: n };
      var r = n.value;
      return Z(r, async function () {
        var n = r.onMessageOnce("calculateFilehashResponse", function (e) {
          return e.requestId === t;
        });
        r.postMessage(
          { buffer: e, requestId: t, type: "calculateFilehashRequest" },
          [e],
        );
        var a = await n,
          i = a.output,
          l = a.transferredBuffer;
        return i.success
          ? (A().INFO(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "calculateFilehashInWorker[",
                  "]: received result from worker",
                ])),
              t,
            ),
            {
              transferredBuffer: l,
              result: o("WAResultOrError").makeResult({ filehash: i.value }),
            })
          : (A().MUSTFIX(
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
      });
    }
    async function ae(e, t, n) {
      var r = J();
      A().INFO(
        P ||
          (P = babelHelpers.taggedTemplateLiteralLoose([
            "hmacSha256InWorker[",
            "]: sending ",
            "B to worker",
          ])),
        r,
        t.byteLength,
      );
      var a = await B.getNextConnectedPortWithTimeout();
      if (!a.success)
        return { transferredKeyBuffer: e, transferredBuffer: t, result: a };
      var i = a.value;
      return Z(i, async function () {
        var a = i.onMessageOnce("calculateHmacSha256Response", function (e) {
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
        var l = await a,
          s = l.output,
          u = l.transferredBuffer,
          c = l.transferredKeyBuffer;
        return s.success
          ? (A().INFO(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "hmacSha256InWorker[",
                  "]: received result from worker",
                ])),
              r,
            ),
            {
              transferredKeyBuffer: c,
              transferredBuffer: u,
              result: o("WAResultOrError").makeResult({ hmac: s.value }),
            })
          : (A().MUSTFIX(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "hmacSha256InWorker[",
                  "]: failed: ",
                  "",
                ])),
              r,
              s.error.errorMessage,
            ),
            {
              transferredKeyBuffer: e,
              transferredBuffer: t,
              result: o("WAResultOrError").makeError(s.error.errorType),
            });
      });
    }
    ((l.expandPool = V),
      (l.configureIdleCleanup = H),
      (l.terminateExpansionWorkers = G),
      (l.webpCheckInWorker = z),
      (l.mp4RepairMuxInWorker = j),
      (l.transcodeToMp4InWorker = K),
      (l.progressiveJpegEncodeInWorker = Q),
      (l.progressiveJpegEncodeInWorkerWithFile = X),
      (l.prewarmMediaWasmWorker = Y),
      (l.generateImageThumbnailInWorker = te),
      (l.runMediaStorageShadowTestWasmWorker = ne),
      (l.kaleidoscopeClassifyInWorker = re),
      (l.calculateFilehashInWorker = oe),
      (l.hmacSha256InWorker = ae));
  },
  98,
);
