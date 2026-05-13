__d(
  "WAWebMediaWasmWorkerClient",
  [
    "FBLogger",
    "QPLUserFlow",
    "WAByteArray",
    "WACustomError",
    "WAPromiseTimeout",
    "WAResultOrError",
    "WAWebMediaWasmWorkerResource",
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
      T = function () {
        return r("FBLogger")("media_platform").tags([
          "WAWebMediaWasmWorkerClient",
        ]);
      },
      D = $(),
      x = 3e4;
    function $() {
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
              T().DEBUG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "from worker: ",
                    "",
                  ])),
                r,
              );
              break;
            case "error":
              T().MUSTFIX(
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
          P(e);
        }),
        n
      );
    }
    function P(e) {
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
          T().MUSTFIX(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Unknown QPL action type from worker: ",
                "",
              ])),
            t.type,
          );
      }
    }
    function N(e) {
      e == null || e.addPoint("get_connected_worker_port_start");
      var t = D;
      return o("WAPromiseTimeout")
        .promiseTimeout(t.fullyConnected, x)
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
              : (T().MUSTFIX(
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
    var M = 0;
    function w() {
      return ++M;
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = w();
          T().INFO(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "calculateFilehashInWorker[",
                "]: sending ",
                "MB to worker",
              ])),
            t,
            Math.floor(e.byteLength / (1024 * 1024)),
          );
          var n = yield N();
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
            ? (T().INFO(
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
            : (T().MUSTFIX(
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
        F.apply(this, arguments)
      );
    }
    function O(e, t, n) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = w();
          T().INFO(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "hmacSha256InWorker[",
                "]: sending ",
                "MB to worker",
              ])),
            r,
            Math.floor(t.byteLength / (1024 * 1024)),
          );
          var a = yield N();
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
            ? (T().INFO(
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
            : (T().MUSTFIX(
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
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            n = e.input,
            r = e.mimeType,
            a = e.supportsHevc;
          T().INFO(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "transcodeToMp4InWorker processing video",
              ])),
          );
          var i = w();
          T().INFO(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            i,
          );
          var l = yield N(t);
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
            T().INFO(
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
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            n = e.input;
          T().INFO(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "mp4RepairMuxInWorker processing video",
              ])),
          );
          var r = w();
          T().INFO(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            r,
          );
          var a = yield N(t);
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
            ? (T().INFO(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "received output from worker, requestId: ",
                    "",
                  ])),
                r,
              ),
              t == null || t.addPoint("sent_request_to_media_worker_end"),
              o("WAResultOrError").makeResult(d.value))
            : (T().MUSTFIX(
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
        V.apply(this, arguments)
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
            r = e.mediaType,
            a = e.rawMimeType,
            i = w();
          T().INFO(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope classify in worker, requestId: ",
                "",
              ])),
            i,
          );
          var l = yield N(t);
          if (!l.success)
            return {
              transferredBuffer: n,
              result: o("WAResultOrError").makeError({ errorName: l.error }),
            };
          var s = l.value,
            u = s.onMessageOnce("kaleidoscopeClassifyResponse", function (e) {
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
          var c = yield u,
            d = c.output,
            m = c.transferredBuffer;
          return d.success
            ? (T().INFO(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "received output from worker, requestId: ",
                    "",
                  ])),
                i,
              ),
              t == null || t.addPoint("sent_request_to_media_worker_end"),
              { transferredBuffer: m, result: d })
            : (t.addPoint("sent_request_to_media_worker_fail"),
              {
                transferredBuffer: m,
                result: o("WAResultOrError").makeError({ errorName: d.error }),
              });
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      (T().INFO(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "start prewarming media wasm worker, operation: ",
            "",
          ])),
        e,
      ),
        o("WAPromiseTimeout")
          .promiseTimeout(D.fullyConnected, x)
          .then(function (t) {
            t.postMessage({ type: "prewarm", operation: e });
          })
          .catch(function (e) {
            T().WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "prewarm failed: ",
                  "",
                ])),
              r("getErrorSafe")(e).message,
            );
          }));
    }
    ((l.getWorkerPortWithTimeout = N),
      (l.calculateFilehashInWorker = A),
      (l.hmacSha256InWorker = O),
      (l.transcodeToMp4InWorker = W),
      (l.mp4RepairMuxInWorker = U),
      (l.kaleidoscopeClassifyInWorker = H),
      (l.prewarmMediaWasmWorker = z));
  },
  98,
);
