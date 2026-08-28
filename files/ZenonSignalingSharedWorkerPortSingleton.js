__d(
  "ZenonSignalingSharedWorkerPortSingleton",
  [
    "Deferred",
    "JSResourceForInteraction",
    "WAResolvable",
    "ZenonDGWLogger",
    "ZenonSharedWorkerConstants",
    "ZenonSignalingSharedWorkerBundle",
    "err",
    "promiseDone",
    "promiseWithTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")(
        "SharedWorkerBundleResource",
      ).__setRef("ZenonSignalingSharedWorkerPortSingleton"),
      s = p,
      u = new (o("WAResolvable").Resolvable)(),
      c = null;
    function d(e, t) {
      return (c === null && (c = m(e, t)), c);
    }
    function m(t, n) {
      var a = function (t, n, a) {
          (o("ZenonDGWLogger").logDGWCheckpoint(
            "[SW] SW_TERMINATED: workerID=" +
              String(n) +
              " reason=" +
              String(t) +
              " msgType=" +
              String(a),
          ),
            r("promiseDone")(
              r("promiseWithTimeout")(u.promise, {
                rejectOnTimeout: !1,
                timeout: 5e3,
              }).then(function () {
                return s(t, n, a);
              }),
            ));
        },
        i = new (r("Deferred"))(),
        l = e.load().then(function (e) {
          return e.createPushSafeSharedWebWorkerV2Async(
            r("ZenonSignalingSharedWorkerBundle"),
            a,
            { reason: "zenon_signaling_" + t + "_" + n },
          );
        });
      return l.then(function (e) {
        var n = window.setTimeout(function () {
            (i.reject(r("err")("Worker connection ack timeout")),
              o("ZenonDGWLogger").logDGWCheckpoint(
                "[SW] SW_CONNECT_TIMEOUT: " + t + " reason=ack_timeout_10s",
              ));
          }, 1e4),
          a = function (t) {
            var e, r, a;
            if (
              typeof t.data == "object" &&
              ((e = t.data) == null ? void 0 : e.type) ===
                o("ZenonSharedWorkerConstants").CONNECTION_ACK &&
              typeof ((r = t.data) == null ? void 0 : r.response) == "object" &&
              typeof ((a = t.data) == null || (a = a.response) == null
                ? void 0
                : a.from) == "string"
            ) {
              var l,
                s,
                u =
                  typeof ((l = t.data) == null || (l = l.response) == null
                    ? void 0
                    : l.workerID) == "string"
                    ? (s = t.data) == null || (s = s.response) == null
                      ? void 0
                      : s.workerID
                    : void 0;
              u != null && (n != null && window.clearTimeout(n), i.resolve(u));
            }
          };
        return (
          e.port.addEventListener("message", a),
          e.port.postMessage({
            type: o("ZenonSharedWorkerConstants").REGISTER,
            windowType: t,
          }),
          i.getPromise().then(function (t) {
            return { port: e.port, workerID: t };
          })
        );
      });
    }
    function p() {
      c = null;
    }
    function _(e) {
      ((s = e), u.resolve());
    }
    ((l.createOrGetSharedWorkerPort = d),
      (l.resetSharedWorkerPortSingleton = p),
      (l.setOnCloseForWorkerInstance = _));
  },
  98,
);
