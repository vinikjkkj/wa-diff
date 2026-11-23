__d(
  "WAMediaWasmWorkerClient",
  [
    "FBLogger",
    "MediaWorkerPool",
    "QPLUserFlow",
    "WAByteArray",
    "WACustomError",
    "WAMediaWasmWorkerResource",
    "WAPromiseTimeout",
    "WAResultOrError",
    "WorkerBundleResource",
    "WorkerClient",
    "WorkerMessagePort",
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
      W,
      q,
      U = "media_platform",
      V = function () {
        return r("FBLogger")(U).tags(["WAMediaWasmWorkerClient"]);
      };
    function H(t) {
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
          V().MUSTFIX(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unknown QPL action type from worker: ",
                "",
              ])),
            n.type,
          );
      }
    }
    function G() {
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
              V().DEBUG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "from worker: ",
                    "",
                  ])),
                n,
              );
              break;
            case "error":
              V().MUSTFIX(
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
          H(e);
        }),
        { port: t, worker: e }
      );
    }
    var z = new (r("MediaWorkerPool"))(),
      j = G(),
      K = j.port,
      Q = j.worker;
    (z.addWorker(K, Q),
      z.markTaskComplete(K),
      V().DEBUG(
        c || (c = babelHelpers.taggedTemplateLiteralLoose(["initiated."])),
      ));
    function X(e) {
      for (var t = 0; z.getSize() < e; ) {
        var n = G(),
          r = n.port,
          o = n.worker;
        (z.addWorker(r, o, !0),
          z.markTaskComplete(r),
          t++,
          V().INFO(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "expanded pool to ",
                " workers",
              ])),
            z.getSize(),
          ));
      }
      return t;
    }
    function Y(e, t) {
      z.configureIdleCleanup(e, function (e, n, r) {
        (V().INFO(
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
    function J(e) {
      return z.terminateExpansionWorkers(e);
    }
    function Z(e) {
      var t = e.eventFlow,
        n = e.input;
      return le(
        {
          operation: "webpCheck",
          input: o("WAByteArray").uint8ArrayToBuffer(n),
        },
        t,
      );
    }
    function ee(e) {
      var t = e.eventFlow,
        n = e.input;
      return (
        V().INFO(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "mp4RepairMuxInWorker processing video",
            ])),
        ),
        le(
          {
            operation: "mp4RepairMux",
            input: o("WAByteArray").uint8ArrayToBuffer(n),
          },
          t,
        )
      );
    }
    async function te(e) {
      var t = e.eventFlow,
        n = e.input,
        r = e.mimeType,
        a = e.supportsHevc;
      V().INFO(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "transcodeToMp4InWorker processing video",
          ])),
      );
      var i = ae();
      V().INFO(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "sending input bytes to worker, requestId: ",
            "",
          ])),
        i,
      );
      var l = await z.getNextConnectedPortWithTimeout(t);
      if (!l.success) return o("WAResultOrError").makeError(l.error);
      var s = l.value;
      return ie(s, async function () {
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
          V().INFO(
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
    function ne(e) {
      var t = e.eventFlow,
        n = e.imageData,
        r = e.quality,
        a = e.useHdScanConfig;
      return le(
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
    async function re(e) {
      var t = e.eventFlow,
        n = e.file,
        r = e.maxOutputResolution,
        o = e.quality,
        a = e.useHdScanConfig,
        i = await n.arrayBuffer();
      return le(
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
    function oe(e) {
      (V().INFO(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "start prewarming media wasm worker, operation: ",
            "",
          ])),
        e,
      ),
        z.broadcastPrewarm(e));
    }
    var ae = (function () {
      var e = 0;
      return function () {
        return ++e;
      };
    })();
    async function ie(e, t) {
      try {
        return await t();
      } finally {
        z.markTaskComplete(e);
      }
    }
    async function le(e, t) {
      var n = ae();
      V().INFO(
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
            "sending input bytes to worker, requestId: ",
            "",
          ])),
        n,
      );
      var r = await z.getNextConnectedPortWithTimeout(t);
      if (!r.success) return r;
      var a = r.value;
      return ie(a, async function () {
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
          ? (V().INFO(
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
          : (V().MUSTFIX(
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
    async function se(e) {
      var t = e.file,
        n = e.maxDimension,
        r = e.thumbnailBlobByteSizeLimitBytes,
        a = e.thumbnailQualityPercentageWhenAboveByteSizeLimit,
        i = ae();
      V().INFO(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "sending input to worker, requestId: ",
            "",
          ])),
        i,
      );
      var l = await z.getNextConnectedPortWithTimeout();
      if (!l.success) return l;
      var s = l.value;
      return ie(s, async function () {
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
          V().INFO(
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
            : (V().MUSTFIX(
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
    async function ue(e, t) {
      V().INFO(
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
            "start media storage shadow test",
          ])),
      );
      var n = ae(),
        r = await z.getNextConnectedPortWithTimeout();
      if (!r.success)
        return o("WAResultOrError").makeError({
          errorName: "port-init",
          errorMessage: r.error,
        });
      var a = r.value;
      return ie(a, async function () {
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
          ? (V().INFO(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "received storage results from worker, requestId: ",
                  "",
                ])),
              n,
            ),
            o("WAResultOrError").makeResult(l.value))
          : (V().MUSTFIX(
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
    async function ce(e) {
      var t = e.allowAv1VideoCodec,
        n = e.claimedTypeValidationEnabled,
        r = e.eventFlow,
        a = e.input,
        i = e.mediaType,
        l = e.rawMimeType,
        s = e.strictAacAdtsValidationEnabled,
        u = e.strictJpegScanValidationEnabled,
        c = e.strictMp4ValidationEnabled,
        d = e.strictOggOpusValidationEnabled,
        m = e.withStreamCheck,
        p = e.zipArchiveCheckEnabled,
        _ = ae();
      V().INFO(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
            "start kaleidoscope classifiy in worker, requestId: ",
            "",
          ])),
        _,
      );
      var f = await z.getNextConnectedPortWithTimeout(r);
      if (!f.success)
        return {
          transferredBuffer: a,
          result: o("WAResultOrError").makeError({ errorName: f.error }),
        };
      var g = f.value;
      return ie(g, async function () {
        var e = g.onMessageOnce("kaleidoscopeClassifyResponse", function (e) {
          return e.requestId === _;
        });
        (g.postMessage(
          {
            mediaType: i,
            rawMimeType: l,
            strictJpegScanValidationEnabled: u,
            strictOggOpusValidationEnabled: d,
            strictMp4ValidationEnabled: c,
            zipArchiveCheckEnabled: p,
            allowAv1VideoCodec: t,
            claimedTypeValidationEnabled: n,
            strictAacAdtsValidationEnabled: s,
            withStreamCheck: m,
            input: a,
            requestId: _,
            type: "kaleidoscopeClassifyRequest",
          },
          [a],
        ),
          r.addPoint("sent_request_to_media_worker_start"));
        var f = await e,
          h = f.output,
          y = f.transferredBuffer;
        return h.success
          ? (V().INFO(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "received output from worker, requestId: ",
                  "",
                ])),
              _,
            ),
            r == null || r.addPoint("sent_request_to_media_worker_end"),
            { transferredBuffer: y, result: h })
          : (r.addPoint("sent_request_to_media_worker_fail"),
            {
              transferredBuffer: y,
              result: o("WAResultOrError").makeError({ errorName: h.error }),
            });
      });
    }
    var de = 1e4;
    async function me(e) {
      var t = e.allowlists,
        n = e.eventFlow,
        a = e.hints,
        i = e.input,
        l = ae();
      V().INFO(
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
            "start kaleidoscope provenance detection in worker, requestId: ",
            "",
          ])),
        l,
      );
      var s = await z.getNextConnectedPortWithTimeout(n);
      if (!s.success)
        return (
          V().WARN(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "provenance detection failed, requestId: ",
                ", reason: no-worker-port, error: ",
                "",
              ])),
            l,
            s.error,
          ),
          n == null ||
            n.addPoint("worker_roundtrip_fail", {
              string: { failure_reason: "no_worker_port" },
            }),
          { transferredBuffer: i, provenance: null }
        );
      var u = s.value;
      return ie(u, async function () {
        var e = function () {},
          s = new Promise(function (t) {
            var n = u.addMessageListener(
              "kaleidoscopeProvenanceResponse",
              function (n) {
                n.requestId === l &&
                  (e(),
                  V().INFO(
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
                    systemProvenance: n.systemProvenance,
                  }));
              },
            );
            e = function () {
              u.removeMessageListener("kaleidoscopeProvenanceResponse", n);
            };
          });
        try {
          (n == null || n.addPoint("worker_roundtrip_start"),
            u.postMessage(
              {
                input: i,
                hints: a,
                allowlists: t,
                qplData: n == null ? void 0 : n.flowDetails,
                requestId: l,
                type: "kaleidoscopeProvenanceRequest",
              },
              [i],
            ));
          var c = await o("WAPromiseTimeout").promiseTimeout(s, de);
          return (n == null || n.addPoint("worker_roundtrip_end"), c);
        } catch (t) {
          e();
          var d =
            t instanceof o("WACustomError").TimeoutError
              ? "timeout"
              : "post_failed";
          return (
            V().WARN(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "provenance detection failed, requestId: ",
                  ", reason: ",
                  ", error: ",
                  "",
                ])),
              l,
              d,
              r("getErrorSafe")(t).message,
            ),
            n == null ||
              n.addPoint("worker_roundtrip_fail", {
                string: { failure_reason: d },
              }),
            { transferredBuffer: i, provenance: null }
          );
        }
      });
    }
    async function pe(e) {
      var t = e.fields,
        n = e.hints,
        a = e.input,
        i = e.timeoutMs,
        l = i === void 0 ? de : i,
        s = ae();
      V().INFO(
        N ||
          (N = babelHelpers.taggedTemplateLiteralLoose([
            "start kaleidoscope provenance write in worker, requestId: ",
            "",
          ])),
        s,
      );
      var u = await z.getNextConnectedPortWithTimeout();
      if (!u.success)
        return (
          V().WARN(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "provenance write failed, requestId: ",
                ", reason: no-worker-port, error: ",
                "",
              ])),
            s,
            u.error,
          ),
          o("WAResultOrError").makeError("worker-error")
        );
      var c = u.value;
      return ie(c, async function () {
        var e = function () {},
          i = new Promise(function (t) {
            var n = c.addMessageListener(
              "kaleidoscopeProvenanceWriteResponse",
              function (n) {
                n.requestId === s && (e(), t(n.output));
              },
            );
            e = function () {
              c.removeMessageListener("kaleidoscopeProvenanceWriteResponse", n);
            };
          });
        try {
          return (
            c.postMessage(
              {
                fields: t,
                hints: n,
                input: a,
                requestId: s,
                type: "kaleidoscopeProvenanceWriteRequest",
              },
              [a],
            ),
            await o("WAPromiseTimeout").promiseTimeout(i, l)
          );
        } catch (t) {
          e();
          var u =
            t instanceof o("WACustomError").TimeoutError
              ? "timeout"
              : "post_failed";
          return (
            V().WARN(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "provenance write failed, requestId: ",
                  ", reason: ",
                  ", error: ",
                  "",
                ])),
              s,
              u,
              r("getErrorSafe")(t).message,
            ),
            o("WAResultOrError").makeError("worker-error")
          );
        }
      });
    }
    async function _e(e) {
      var t = ae();
      V().INFO(
        A ||
          (A = babelHelpers.taggedTemplateLiteralLoose([
            "calculateFilehashInWorker[",
            "]: sending ",
            "B to worker",
          ])),
        t,
        e.byteLength,
      );
      var n = await z.getNextConnectedPortWithTimeout();
      if (!n.success) return { transferredBuffer: e, result: n };
      var r = n.value;
      return ie(r, async function () {
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
          ? (V().INFO(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "calculateFilehashInWorker[",
                  "]: received result from worker",
                ])),
              t,
            ),
            {
              transferredBuffer: l,
              result: o("WAResultOrError").makeResult({ filehash: i.value }),
            })
          : (V().MUSTFIX(
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
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
    async function fe(e, t, n) {
      var r = ae();
      V().INFO(
        B ||
          (B = babelHelpers.taggedTemplateLiteralLoose([
            "hmacSha256InWorker[",
            "]: sending ",
            "B to worker",
          ])),
        r,
        t.byteLength,
      );
      var a = await z.getNextConnectedPortWithTimeout();
      if (!a.success)
        return { transferredKeyBuffer: e, transferredBuffer: t, result: a };
      var i = a.value;
      return ie(i, async function () {
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
          ? (V().INFO(
              W ||
                (W = babelHelpers.taggedTemplateLiteralLoose([
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
          : (V().MUSTFIX(
              q ||
                (q = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.expandPool = X),
      (l.configureIdleCleanup = Y),
      (l.terminateExpansionWorkers = J),
      (l.webpCheckInWorker = Z),
      (l.mp4RepairMuxInWorker = ee),
      (l.transcodeToMp4InWorker = te),
      (l.progressiveJpegEncodeInWorker = ne),
      (l.progressiveJpegEncodeInWorkerWithFile = re),
      (l.prewarmMediaWasmWorker = oe),
      (l.generateImageThumbnailInWorker = se),
      (l.runMediaStorageShadowTestWasmWorker = ue),
      (l.kaleidoscopeClassifyInWorker = ce),
      (l.detectAiProvenanceInWorker = me),
      (l.writeMediaMetadataInWorker = pe),
      (l.calculateFilehashInWorker = _e),
      (l.hmacSha256InWorker = fe));
  },
  98,
);
