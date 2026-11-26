__d(
  "WAWebMediaWasmWorkerClient",
  [
    "FBLogger",
    "QPLUserFlow",
    "WAByteArray",
    "WACustomError",
    "WAPromiseTimeout",
    "WAResultOrError",
    "WAWebCallsOnlyGating",
    "WAWebMediaWasmWorkerResource",
    "WAWebNoop",
    "WorkerBundleResource",
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
      w = function () {
        return r("FBLogger")("media_platform").tags([
          "WAWebMediaWasmWorkerClient",
        ]);
      },
      A = o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() ? null : W();
    function F() {
      return (A == null && (A = W()), A);
    }
    var O = 3e4,
      B = 1e4;
    function W() {
      var t = o("WorkerBundleResource").createDedicatedWebWorker(
          r("WAWebMediaWasmWorkerResource"),
        ),
        n = new (o("WorkerMessagePort").WorkerSyncedMessagePort)(
          t,
          "WAWebMediaWasmWorker",
        );
      return (
        n.addMessageListener("log", function (t) {
          var n = t.logType,
            r = t.message;
          switch (n) {
            case "dev":
              w().DEBUG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "from worker: ",
                    "",
                  ])),
                r,
              );
              break;
            case "error":
              w().MUSTFIX(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "worker error: ",
                    "",
                  ])),
                r,
              );
              break;
            default:
          }
        }),
        n.addMessageListener("qpl", function (e) {
          q(e);
        }),
        n
      );
    }
    function q(e) {
      var t = e.action,
        n = e.event;
      switch (t.type) {
        case "point": {
          r("QPLUserFlow").addPoint(n, t.pointName, {
            instanceKey: t.instanceKey,
          });
          break;
        }
        case "annotations": {
          r("QPLUserFlow").addAnnotations(n, t.annotations, {
            instanceKey: t.instanceKey,
          });
          break;
        }
        default:
          w().MUSTFIX(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Unknown QPL action type from worker: ",
                "",
              ])),
            t.type,
          );
      }
    }
    function U(e) {
      e == null || e.addPoint("get_connected_worker_port_start");
      var t = F();
      return o("WAPromiseTimeout")
        .promiseTimeout(t.fullyConnected, O)
        .then(function (t) {
          return (
            e == null || e.addPoint("get_connected_worker_port_end"),
            o("WAResultOrError").makeResult(t)
          );
        })
        .catch(function (t) {
          return (
            e == null ||
              e.addPoint("get_connected_worker_port_fail", {
                string: {
                  workerPortFailure:
                    t instanceof o("WACustomError").TimeoutError
                      ? "timeout"
                      : "runtime-error",
                },
              }),
            t instanceof o("WACustomError").TimeoutError
              ? o("WAResultOrError").makeError("worker-connection-timeout")
              : (w().MUSTFIX(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "worker-connection-runtime-error: ",
                      "",
                    ])),
                  r("getErrorSafe")(t).message,
                ),
                o("WAResultOrError").makeError(
                  "worker-connection-runtime-error",
                ))
          );
        });
    }
    var V = 0;
    function H() {
      return ++V;
    }
    async function G(e) {
      var t = H();
      w().INFO(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "calculateFilehashInWorker[",
            "]: sending ",
            "MB to worker",
          ])),
        t,
        Math.floor(e.byteLength / (1024 * 1024)),
      );
      var n = await U();
      if (!n.success)
        return {
          transferredBuffer: e,
          result: o("WAResultOrError").makeError(n.error),
        };
      var r = n.value,
        a = r.onMessageOnce("calculateFilehashResponse", function (e) {
          return e.requestId === t;
        });
      r.postMessage(
        { buffer: e, requestId: t, type: "calculateFilehashRequest" },
        [e],
      );
      var i = await a,
        l = i.output,
        s = i.transferredBuffer;
      return l.success
        ? (w().INFO(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "calculateFilehashInWorker[",
                "]: received result from worker",
              ])),
            t,
          ),
          {
            transferredBuffer: s,
            result: o("WAResultOrError").makeResult({ filehash: l.value }),
          })
        : (w().MUSTFIX(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
          });
    }
    async function z(e, t, n) {
      var r = H();
      w().INFO(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "hmacSha256InWorker[",
            "]: sending ",
            "MB to worker",
          ])),
        r,
        Math.floor(t.byteLength / (1024 * 1024)),
      );
      var a = await U();
      if (!a.success)
        return {
          transferredKeyBuffer: e,
          transferredBuffer: t,
          result: o("WAResultOrError").makeError(a.error),
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
      var s = await l,
        u = s.output,
        c = s.transferredBuffer,
        d = s.transferredKeyBuffer;
      return u.success
        ? (w().INFO(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
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
        : (w().MUSTFIX(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "hmacSha256InWorker[",
                "]: failed: ",
                "",
              ])),
            r,
            u.error.errorMessage,
          ),
          {
            transferredKeyBuffer: d,
            transferredBuffer: c,
            result: o("WAResultOrError").makeError(u.error.errorType),
          });
    }
    async function j(e) {
      var t = e.eventFlow,
        n = e.input,
        r = e.mimeType,
        a = e.supportsHevc;
      w().INFO(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "transcodeToMp4InWorker processing video",
          ])),
      );
      var i = H();
      w().INFO(
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
            "sending input bytes to worker, requestId: ",
            "",
          ])),
        i,
      );
      var l = await U(t);
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
      var m = await u,
        p = m.output;
      return (
        w().INFO(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    async function K(e) {
      var t = e.eventFlow,
        n = e.input;
      w().INFO(
        b ||
          (b = babelHelpers.taggedTemplateLiteralLoose([
            "mp4RepairMuxInWorker processing video",
          ])),
      );
      var r = H();
      w().INFO(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "sending input bytes to worker, requestId: ",
            "",
          ])),
        r,
      );
      var a = await U(t);
      if (!a.success) return o("WAResultOrError").makeError(a.error);
      var i = a.value,
        l = i.onMessageOnce("mediaOperationResponse", function (e) {
          return e.requestId === r;
        }),
        s = o("WAByteArray").uint8ArrayToBuffer(n),
        u = s ? [s] : void 0;
      (i.postMessage(
        {
          operation: "mp4RepairMux",
          input: s,
          requestId: r,
          type: "mediaOperationRequest",
        },
        u,
      ),
        t == null || t.addPoint("sent_request_to_media_worker_start"));
      var c = await l,
        d = c.output;
      return d.success
        ? (w().INFO(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "received output from worker, requestId: ",
                "",
              ])),
            r,
          ),
          t == null || t.addPoint("sent_request_to_media_worker_end"),
          o("WAResultOrError").makeResult(d.value))
        : (w().MUSTFIX(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "requestId: ",
                ", error: ",
                "",
              ])),
            r,
            d.error.errorMessage,
          ),
          t == null || t.addPoint("sent_request_to_media_worker_fail"),
          o("WAResultOrError").makeError(d.error.errorType));
    }
    async function Q(e) {
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
        _ = H();
      w().INFO(
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
            "start kaleidoscope classify in worker, requestId: ",
            "",
          ])),
        _,
      );
      var f = await U(r);
      if (!f.success)
        return {
          transferredBuffer: a,
          result: o("WAResultOrError").makeError({ errorName: f.error }),
        };
      var g = f.value,
        h = g.onMessageOnce("kaleidoscopeClassifyResponse", function (e) {
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
      var y = await h,
        C = y.output,
        b = y.transferredBuffer;
      return C.success
        ? (w().INFO(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "received output from worker, requestId: ",
                "",
              ])),
            _,
          ),
          r == null || r.addPoint("sent_request_to_media_worker_end"),
          { transferredBuffer: b, result: C })
        : (r.addPoint("sent_request_to_media_worker_fail"),
          {
            transferredBuffer: b,
            result: o("WAResultOrError").makeError({ errorName: C.error }),
          });
    }
    async function X(e) {
      var t = e.allowlists,
        n = e.eventFlow,
        a = e.hints,
        i = e.input,
        l = e.logProvenanceDetails,
        s = H();
      w().INFO(
        k ||
          (k = babelHelpers.taggedTemplateLiteralLoose([
            "start kaleidoscope provenance detection in worker, requestId: ",
            "",
          ])),
        s,
      );
      var u = await U(n);
      if (!u.success)
        return (
          w().WARN(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "provenance detection failed, requestId: ",
                ", reason: no-worker-port, error: ",
                "",
              ])),
            s,
            u.error,
          ),
          n == null ||
            n.addPoint("worker_roundtrip_fail", {
              string: { failure_reason: "no_worker_port" },
            }),
          { transferredBuffer: i, provenance: null }
        );
      var c = u.value,
        d = r("WAWebNoop"),
        m = new Promise(function (e) {
          var t = c.addMessageListener(
            "kaleidoscopeProvenanceResponse",
            function (t) {
              t.requestId === s &&
                (d(),
                l &&
                  w().INFO(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "received provenance from worker, requestId: ",
                        ", hasSignal: ",
                        "",
                      ])),
                    s,
                    t.provenance != null,
                  ),
                e({
                  transferredBuffer: t.transferredBuffer,
                  provenance: t.provenance,
                  engineErrorCode: t.engineErrorCode,
                  systemProvenance: t.systemProvenance,
                }));
            },
          );
          d = function () {
            c.removeMessageListener("kaleidoscopeProvenanceResponse", t);
          };
        });
      try {
        (n == null || n.addPoint("worker_roundtrip_start"),
          c.postMessage(
            {
              input: i,
              hints: a,
              allowlists: t,
              qplData: n == null ? void 0 : n.flowDetails,
              logProvenanceDetails: l,
              requestId: s,
              type: "kaleidoscopeProvenanceRequest",
            },
            [i],
          ));
        var p = await o("WAPromiseTimeout").promiseTimeout(m, B);
        return (n == null || n.addPoint("worker_roundtrip_end"), p);
      } catch (e) {
        d();
        var _ =
          e instanceof o("WACustomError").TimeoutError
            ? "timeout"
            : "post_failed";
        return (
          w().WARN(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "provenance detection failed, requestId: ",
                ", reason: ",
                ", error: ",
                "",
              ])),
            s,
            _,
            r("getErrorSafe")(e).message,
          ),
          n == null ||
            n.addPoint("worker_roundtrip_fail", {
              string: { failure_reason: _ },
            }),
          { transferredBuffer: i, provenance: null }
        );
      }
    }
    async function Y(e) {
      var t = e.fields,
        n = e.hints,
        a = e.input,
        i = e.logProvenanceDetails,
        l = e.timeoutMs,
        s = l === void 0 ? B : l,
        u = H();
      i &&
        w().INFO(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "start kaleidoscope provenance write in worker, requestId: ",
              "",
            ])),
          u,
        );
      var c = await U();
      if (!c.success)
        return (
          i &&
            w().WARN(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "provenance write failed, requestId: ",
                  ", reason: no-worker-port, error: ",
                  "",
                ])),
              u,
              c.error,
            ),
          o("WAResultOrError").makeError("worker-error")
        );
      var d = c.value,
        m = r("WAWebNoop"),
        p = new Promise(function (e) {
          var t = d.addMessageListener(
            "kaleidoscopeProvenanceWriteResponse",
            function (t) {
              t.requestId === u && (m(), e(t.output));
            },
          );
          m = function () {
            d.removeMessageListener("kaleidoscopeProvenanceWriteResponse", t);
          };
        });
      try {
        return (
          d.postMessage(
            {
              fields: t,
              hints: n,
              input: a,
              logProvenanceDetails: i,
              requestId: u,
              type: "kaleidoscopeProvenanceWriteRequest",
            },
            [a],
          ),
          await o("WAPromiseTimeout").promiseTimeout(p, s)
        );
      } catch (e) {
        m();
        var _ =
          e instanceof o("WACustomError").TimeoutError
            ? "timeout"
            : "post_failed";
        return (
          i &&
            w().WARN(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "provenance write failed, requestId: ",
                  ", reason: ",
                  ", error: ",
                  "",
                ])),
              u,
              _,
              r("getErrorSafe")(e).message,
            ),
          o("WAResultOrError").makeError("worker-error")
        );
      }
    }
    function J(e) {
      (w().INFO(
        N ||
          (N = babelHelpers.taggedTemplateLiteralLoose([
            "start prewarming media wasm worker, operation: ",
            "",
          ])),
        e,
      ),
        o("WAPromiseTimeout")
          .promiseTimeout(F().fullyConnected, O)
          .then(function (t) {
            t.postMessage({ type: "prewarm", operation: e });
          })
          .catch(function (e) {
            w().WARN(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "prewarm failed: ",
                  "",
                ])),
              r("getErrorSafe")(e).message,
            );
          }));
    }
    ((l.getWorkerPortWithTimeout = U),
      (l.calculateFilehashInWorker = G),
      (l.hmacSha256InWorker = z),
      (l.transcodeToMp4InWorker = j),
      (l.mp4RepairMuxInWorker = K),
      (l.kaleidoscopeClassifyInWorker = Q),
      (l.detectAiProvenanceInWorker = X),
      (l.writeMediaMetadataInWorker = Y),
      (l.prewarmMediaWasmWorker = J));
  },
  98,
);
