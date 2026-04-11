__d(
  "WorkerMessagePort",
  [
    "Deferred",
    "FBLogger",
    "MainPageUrl",
    "Promise",
    "PromiseAnnotate",
    "SimpleHook",
    "VirtualMessageChannel",
    "WorkerMessagePortLogging",
    "performanceAbsoluteNow",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      return e;
    }
    var d = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("SimpleHook").SimpleHook);
    function m(e, t) {
      var n = e;
      n.__timing = t;
    }
    function p(e) {
      return e.__timing;
    }
    var _ = (function () {
      function e(e, t) {
        var n = this;
        ((this.$1 = {}),
          (this.onUnhandledMessage = new d()),
          (this.onMessage = new d()),
          (this.onPostMessage = new d()),
          (this.onError = new d()),
          (this.$2 = e),
          (this.name = t),
          this.$2.addEventListener("message", function (e) {
            return n.onMessageHandler(e.data);
          }),
          this.$2.addEventListener("error", function (e) {
            return n.onError.call(e);
          }),
          this.onPostMessage.add(function (e) {
            m(e, {
              receiveDateTime: -1,
              receiveTimestamp: -1,
              sendDateTime: Date.now(),
              sendDelayHighPrecision: 0,
              sendDelayLowPrecision: 0,
              sendTimestamp: (u || (u = r("performanceAbsoluteNow")))(),
            });
          }),
          this.onMessage.add(function (e) {
            var t = p(e);
            if (t != null) {
              var a = t.sendDateTime,
                i = t.sendTimestamp,
                l = (u || (u = r("performanceAbsoluteNow")))(),
                s = Date.now();
              ((t.receiveTimestamp = l),
                (t.receiveDateTime = s),
                (t.sendDelayHighPrecision = l - i),
                (t.sendDelayLowPrecision = s - a),
                o("WorkerMessagePortLogging").logMessageTiming(n.name, t));
            }
          }));
      }
      var t = e.prototype;
      return (
        (t.onMessageHandler = function (t) {
          try {
            this.onMessage.call(t);
            var e = this.$1[t.type];
            e ? e.call(t) : this.onUnhandledMessage.call(t);
          } catch (e) {
            this.onError.call(e);
          }
        }),
        (t.postMessage = function (t, n) {
          (this.onPostMessage.call(t),
            n ? this.$2.postMessage(t, n) : this.$2.postMessage(t));
        }),
        (t.addMessageListener = function (t, n) {
          var e = this.$1[t];
          return (e || ((e = new d()), (this.$1[t] = e)), e.add(n));
        }),
        (t.removeMessageListener = function (t, n) {
          var e = this.$1[t];
          return !!e && e.remove(n);
        }),
        (t.removeAllMessageListeners = function (t) {
          var e = this.$1[t];
          e && e.clear();
        }),
        (t.onMessageOnce = function (t, r) {
          var e = this;
          return new (s || (s = n("Promise")))(function (n) {
            var o = e.addMessageListener(t, function (a) {
              r(a) && (e.removeMessageListener(t, o), n(a));
            });
          });
        }),
        (t.close = function () {
          var e = this.$2;
          (e.close == null || e.close(), e.terminate == null || e.terminate());
        }),
        (t.isWrappingVirtualMessagePort = function () {
          return (
            this.$2 instanceof o("VirtualMessageChannel").VirtualMessagePort
          );
        }),
        e
      );
    })();
    function f(e) {
      return e;
    }
    var g = (function (t) {
      function a(a, i) {
        var l;
        l = t.call(this, a, i) || this;
        var u = l,
          d = new (r("Deferred"))(),
          m = d.getPromise();
        u.addMessageListener("endpoint_started", function (e) {
          d.resolve(e);
          var t = p(e);
          u.postMessage({
            endpoint: e.endpoint,
            startSendTimestamp: t == null ? void 0 : t.sendTimestamp,
            targetEndpoint: l.name,
            type: "endpoint_started_received",
          });
        });
        var _ = u.onMessageOnce("endpoint_started_received", function () {
          return !0;
        });
        return (
          (e || (e = o("PromiseAnnotate"))).setDisplayName(
            m,
            "endpoint_started",
          ),
          e.setDisplayName(_, "endpoint_started_received"),
          u.postMessage({ endpoint: l.name, type: "endpoint_started" }),
          r("promiseDone")(m, function (e) {
            var t = p(e);
            o("WorkerMessagePortLogging").logMessageTiming(l.name, t);
          }),
          r("promiseDone")(_, function (e) {
            var t = p(e);
            t != null &&
              o("WorkerMessagePortLogging").logMessageTiming(l.name, t, !0);
          }),
          (l.fullyConnected = (s || (s = n("Promise")))
            .race([m, _])
            .then(function () {
              return l;
            })),
          l
        );
      }
      return (babelHelpers.inheritsLoose(a, t), a);
    })(_);
    ((l.getMessageTiming = p),
      (l.WorkerMessagePort = _),
      (l.CastWorkerMessagePort = f),
      (l.WorkerSyncedMessagePort = g));
  },
  98,
);
