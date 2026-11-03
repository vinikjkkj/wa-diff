__d(
  "WAWebMediaWasmWorkerClient",
  [
    "FBLogger",
    "Promise",
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
      A = function () {
        return r("FBLogger")("media_platform").tags([
          "WAWebMediaWasmWorkerClient",
        ]);
      },
      F = o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() ? null : q();
    function O() {
      return (F == null && (F = q()), F);
    }
    var B = 3e4,
      W = 1e4;
    function q() {
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
              A().DEBUG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "from worker: ",
                    "",
                  ])),
                r,
              );
              break;
            case "error":
              A().MUSTFIX(
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
          U(e);
        }),
        n
      );
    }
    function U(e) {
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
          A().MUSTFIX(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Unknown QPL action type from worker: ",
                "",
              ])),
            t.type,
          );
      }
    }
    function V(e) {
      e == null || e.addPoint("get_connected_worker_port_start");
      var t = O();
      return o("WAPromiseTimeout")
        .promiseTimeout(t.fullyConnected, B)
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
              : (A().MUSTFIX(
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
    var H = 0;
    function G() {
      return ++H;
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = G();
          A().INFO(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "calculateFilehashInWorker[",
                "]: sending ",
                "MB to worker",
              ])),
            t,
            Math.floor(e.byteLength / (1024 * 1024)),
          );
          var n = yield V();
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
          var i = yield a,
            l = i.output,
            s = i.transferredBuffer;
          return l.success
            ? (A().INFO(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "calculateFilehashInWorker[",
                    "]: received result from worker",
                  ])),
                t,
              ),
              {
                transferredBuffer: s,
                result: o("WAResultOrError").makeResult({ filehash: l.value }),
              })
            : (A().MUSTFIX(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t, n) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = G();
          A().INFO(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "hmacSha256InWorker[",
                "]: sending ",
                "MB to worker",
              ])),
            r,
            Math.floor(t.byteLength / (1024 * 1024)),
          );
          var a = yield V();
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
          var s = yield l,
            u = s.output,
            c = s.transferredBuffer,
            d = s.transferredKeyBuffer;
          return u.success
            ? (A().INFO(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            n = e.input,
            r = e.mimeType,
            a = e.supportsHevc;
          A().INFO(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "transcodeToMp4InWorker processing video",
              ])),
          );
          var i = G();
          A().INFO(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            i,
          );
          var l = yield V(t);
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
            A().INFO(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
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
        Y.apply(this, arguments)
      );
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            n = e.input;
          A().INFO(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "mp4RepairMuxInWorker processing video",
              ])),
          );
          var r = G();
          A().INFO(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            r,
          );
          var a = yield V(t);
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
          var c = yield l,
            d = c.output;
          return d.success
            ? (A().INFO(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "received output from worker, requestId: ",
                    "",
                  ])),
                r,
              ),
              t == null || t.addPoint("sent_request_to_media_worker_end"),
              o("WAResultOrError").makeResult(d.value))
            : (A().MUSTFIX(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "requestId: ",
                    ", error: ",
                    "",
                  ])),
                r,
                d.error.errorMessage,
              ),
              t == null || t.addPoint("sent_request_to_media_worker_fail"),
              o("WAResultOrError").makeError(d.error.errorType));
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.allowAv1VideoCodec,
            n = e.eventFlow,
            r = e.input,
            a = e.mediaType,
            i = e.rawMimeType,
            l = e.strictJpegScanValidationEnabled,
            s = e.strictMp4ValidationEnabled,
            u = e.strictOggOpusValidationEnabled,
            c = e.zipArchiveCheckEnabled,
            d = G();
          A().INFO(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope classify in worker, requestId: ",
                "",
              ])),
            d,
          );
          var m = yield V(n);
          if (!m.success)
            return {
              transferredBuffer: r,
              result: o("WAResultOrError").makeError({ errorName: m.error }),
            };
          var p = m.value,
            _ = p.onMessageOnce("kaleidoscopeClassifyResponse", function (e) {
              return e.requestId === d;
            });
          (p.postMessage(
            {
              mediaType: a,
              rawMimeType: i,
              strictJpegScanValidationEnabled: l,
              strictOggOpusValidationEnabled: u,
              strictMp4ValidationEnabled: s,
              zipArchiveCheckEnabled: c,
              allowAv1VideoCodec: t,
              input: r,
              requestId: d,
              type: "kaleidoscopeClassifyRequest",
            },
            [r],
          ),
            n.addPoint("sent_request_to_media_worker_start"));
          var f = yield _,
            g = f.output,
            h = f.transferredBuffer;
          return g.success
            ? (A().INFO(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "received output from worker, requestId: ",
                    "",
                  ])),
                d,
              ),
              n == null || n.addPoint("sent_request_to_media_worker_end"),
              { transferredBuffer: h, result: g })
            : (n.addPoint("sent_request_to_media_worker_fail"),
              {
                transferredBuffer: h,
                result: o("WAResultOrError").makeError({ errorName: g.error }),
              });
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            a = e.hints,
            i = e.input,
            l = G();
          A().INFO(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope provenance detection in worker, requestId: ",
                "",
              ])),
            l,
          );
          var s = yield V(t);
          if (!s.success)
            return (
              A().WARN(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
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
          var u = s.value,
            c = r("WAWebNoop"),
            d = new (w || (w = n("Promise")))(function (e) {
              var t = u.addMessageListener(
                "kaleidoscopeProvenanceResponse",
                function (t) {
                  t.requestId === l &&
                    (c(),
                    A().INFO(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "received provenance from worker, requestId: ",
                          ", hasSignal: ",
                          "",
                        ])),
                      l,
                      t.provenance != null,
                    ),
                    e({
                      transferredBuffer: t.transferredBuffer,
                      provenance: t.provenance,
                      engineErrorCode: t.engineErrorCode,
                    }));
                },
              );
              c = function () {
                u.removeMessageListener("kaleidoscopeProvenanceResponse", t);
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
            var m = yield o("WAPromiseTimeout").promiseTimeout(d, W);
            return (t == null || t.addPoint("worker_roundtrip_end"), m);
          } catch (e) {
            c();
            var p =
              e instanceof o("WACustomError").TimeoutError
                ? "timeout"
                : "post_failed";
            return (
              A().WARN(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "provenance detection failed, requestId: ",
                    ", reason: ",
                    ", error: ",
                    "",
                  ])),
                l,
                p,
                r("getErrorSafe")(e).message,
              ),
              t == null ||
                t.addPoint("worker_roundtrip_fail", {
                  string: { failure_reason: p },
                }),
              { transferredBuffer: i, provenance: null }
            );
          }
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.fields,
            a = e.hints,
            i = e.input,
            l = e.timeoutMs,
            s = l === void 0 ? W : l,
            u = G();
          A().INFO(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope provenance write in worker, requestId: ",
                "",
              ])),
            u,
          );
          var c = yield V();
          if (!c.success)
            return (
              A().WARN(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
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
            p = new (w || (w = n("Promise")))(function (e) {
              var t = d.addMessageListener(
                "kaleidoscopeProvenanceWriteResponse",
                function (t) {
                  t.requestId === u && (m(), e(t.output));
                },
              );
              m = function () {
                d.removeMessageListener(
                  "kaleidoscopeProvenanceWriteResponse",
                  t,
                );
              };
            });
          try {
            return (
              d.postMessage(
                {
                  fields: t,
                  hints: a,
                  input: i,
                  requestId: u,
                  type: "kaleidoscopeProvenanceWriteRequest",
                },
                [i],
              ),
              yield o("WAPromiseTimeout").promiseTimeout(p, s)
            );
          } catch (e) {
            m();
            var _ =
              e instanceof o("WACustomError").TimeoutError
                ? "timeout"
                : "post_failed";
            return (
              A().WARN(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e) {
      (A().INFO(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "start prewarming media wasm worker, operation: ",
            "",
          ])),
        e,
      ),
        o("WAPromiseTimeout")
          .promiseTimeout(O().fullyConnected, B)
          .then(function (t) {
            t.postMessage({ type: "prewarm", operation: e });
          })
          .catch(function (e) {
            A().WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "prewarm failed: ",
                  "",
                ])),
              r("getErrorSafe")(e).message,
            );
          }));
    }
    ((l.getWorkerPortWithTimeout = V),
      (l.calculateFilehashInWorker = z),
      (l.hmacSha256InWorker = K),
      (l.transcodeToMp4InWorker = X),
      (l.mp4RepairMuxInWorker = J),
      (l.kaleidoscopeClassifyInWorker = ee),
      (l.detectAiProvenanceInWorker = ne),
      (l.writeMediaMetadataInWorker = oe),
      (l.prewarmMediaWasmWorker = ie));
  },
  98,
);
