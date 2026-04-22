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
      T,
      D = function () {
        return r("FBLogger")("media_platform").tags([
          "WAWebMediaWasmWorkerClient",
        ]);
      },
      x = null,
      $ = 3e4;
    function P() {
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
              D().DEBUG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "from worker: ",
                    "",
                  ])),
                r,
              );
              break;
            case "error":
              D().MUSTFIX(
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
          N(e);
        }),
        n
      );
    }
    function N(e) {
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
          D().MUSTFIX(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Unknown QPL action type from worker: ",
                "",
              ])),
            t.type,
          );
      }
    }
    function M() {
      var e = x;
      return (
        e == null &&
          ((e = P()),
          (x = e),
          D().DEBUG(
            c || (c = babelHelpers.taggedTemplateLiteralLoose(["initiated."])),
          )),
        o("WAPromiseTimeout")
          .promiseTimeout(e.fullyConnected, $)
          .then(function (e) {
            return o("WAResultOrError").makeResult(e);
          })
          .catch(function (e) {
            return e instanceof o("WACustomError").TimeoutError
              ? o("WAResultOrError").makeError("worker-connection-timeout")
              : o("WAResultOrError").makeError(
                  "worker-connection-runtime-error",
                );
          })
      );
    }
    var w = 0;
    function A() {
      return ++w;
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = A();
          D().INFO(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "calculateFilehashInWorker[",
                "]: sending ",
                "MB to worker",
              ])),
            t,
            Math.floor(e.byteLength / (1024 * 1024)),
          );
          var n = yield M();
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
            ? (D().INFO(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "calculateFilehashInWorker[",
                    "]: received result from worker",
                  ])),
                t,
              ),
              {
                transferredBuffer: s,
                result: o("WAResultOrError").makeResult({ filehash: l.value }),
              })
            : (D().MUSTFIX(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
        O.apply(this, arguments)
      );
    }
    function B(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = A();
          D().INFO(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "hmacSha256InWorker[",
                "]: sending ",
                "MB to worker",
              ])),
            r,
            Math.floor(t.byteLength / (1024 * 1024)),
          );
          var a = yield M();
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
            ? (D().INFO(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
            : (D().MUSTFIX(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
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
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            n = e.input,
            r = e.mimeType,
            a = e.supportsHevc;
          D().INFO(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "transcodeToMp4InWorker processing video",
              ])),
          );
          var i = A();
          D().INFO(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            i,
          );
          var l = yield M();
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
            D().INFO(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
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
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            n = e.input;
          D().INFO(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "mp4RepairMuxInWorker processing video",
              ])),
          );
          var r = A();
          D().INFO(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            r,
          );
          var a = yield M();
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
            ? (D().INFO(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "received output from worker, requestId: ",
                    "",
                  ])),
                r,
              ),
              t == null || t.addPoint("sent_request_to_media_worker_end"),
              o("WAResultOrError").makeResult(d.value))
            : (D().MUSTFIX(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
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
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            n = e.input,
            r = e.mediaType,
            a = e.rawMimeType,
            i = A();
          D().INFO(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope classify in worker, requestId: ",
                "",
              ])),
            i,
          );
          var l = yield M();
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
            ? (D().INFO(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
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
        z.apply(this, arguments)
      );
    }
    function j(e) {
      (e !== "mp4RepairMux" && e !== "kaleidoscopeClassify") ||
        (D().INFO(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "start prewarming media wasm worker, operation: ",
              "",
            ])),
          e,
        ),
        M()
          .then(function (t) {
            if (!t.success) {
              D().MUSTFIX(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "prewarm failed: ",
                    "",
                  ])),
                t.error,
              );
              return;
            }
            t.value.postMessage({ type: "prewarm", operation: e });
          })
          .catch(function (e) {
            D().WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "prewarm failed: ",
                  "",
                ])),
              r("getErrorSafe")(e).message,
            );
          }));
    }
    ((l.getWorkerPort = M),
      (l.calculateFilehashInWorker = F),
      (l.hmacSha256InWorker = B),
      (l.transcodeToMp4InWorker = q),
      (l.mp4RepairMuxInWorker = V),
      (l.kaleidoscopeClassifyInWorker = G),
      (l.prewarmMediaWasmWorker = j));
  },
  98,
);
