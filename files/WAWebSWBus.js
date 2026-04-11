__d(
  "WAWebSWBus",
  [
    "Promise",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebNoop",
    "WAWebSWBusActions",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = [r("WAWebSWBusActions").HEARTBEAT],
      d = (function () {
        function e(t) {
          var o = this;
          ((this.$1 = function (t) {
            if (!(t.data == null || t.data.action == null)) {
              var a = t.data;
              if (!(t.ports == null || t.ports.length === 0)) {
                var i = t.ports;
                if (
                  !(
                    !e.isSW() &&
                    window.navigator.serviceWorker &&
                    t.source !== window.navigator.serviceWorker.controller
                  )
                ) {
                  var l;
                  (typeof t.waitUntil == "function"
                    ? (l = function (n) {
                        return t.waitUntil(n);
                      })
                    : (l = r("WAWebNoop")),
                    l(
                      (u || (u = n("Promise")))
                        .resolve(o.requestHandler(a))
                        .then(function (e) {
                          i[0].postMessage(e);
                        })
                        .catch(function (e) {
                          i[0].postMessage({ error: e && e.toString() });
                        }),
                    ));
                }
              }
            }
          }),
            (this.requestHandler = t));
        }
        var t = e.prototype;
        return (
          (t.init = function () {
            var t = e.isSW() ? self : window.navigator.serviceWorker;
            try {
              if (!t) return;
              t.addEventListener("message", this.$1);
            } catch (e) {}
          }),
          (e.isSW = function () {
            return typeof window == "undefined";
          }),
          (e.getRequestor = function (r) {
            if (e.isSW()) {
              if (typeof r == "string") return self.clients.get(r);
            } else
              return window.navigator.serviceWorker
                ? window.navigator.serviceWorker.ready.then(function () {
                    return window.navigator.serviceWorker
                      ? window.navigator.serviceWorker.controller
                      : null;
                  })
                : (u || (u = n("Promise"))).resolve(null);
            return (u || (u = n("Promise"))).resolve(r);
          }),
          (e.broadcast = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, o) {
                if (!e.isSW())
                  throw r("err")("Broadcast called from non-serviceworker.");
                var a = yield self.clients.matchAll();
                return a.length === 0
                  ? (u || (u = n("Promise"))).reject(
                      r("err")("No clients available."),
                    )
                  : (u || (u = n("Promise"))).all(
                      a.map(function (n) {
                        return e.request(n, t, o);
                      }),
                    );
              },
            );
            function o(e, n) {
              return t.apply(this, arguments);
            }
            return o;
          })()),
          (e.request = function (a, i, l) {
            var t,
              s = o("WAWebBuildConstants").VERSION_STR,
              c = new MessageChannel(),
              d = new (u || (u = n("Promise")))(function (t, n) {
                return (
                  (c.port1.onmessage = function (e) {
                    var r;
                    (r = e.data) != null && r.error
                      ? n(e.data.error)
                      : t(e.data);
                  }),
                  e.getRequestor(a).then(function (e) {
                    if (!e)
                      return n(
                        r("err")("No ServiceWorker controlling this client."),
                      );
                    e.postMessage({ action: i, message: l, version: s }, [
                      c.port2,
                    ]);
                  })
                );
              });
            return d;
          }),
          e
        );
      })();
    l.default = d;
  },
  98,
);
