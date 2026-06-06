__d(
  "WAWebSWBus",
  ["WALogger", "WAWebBuildConstants", "WAWebNoop", "WAWebSWBusActions", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [r("WAWebSWBusActions").HEARTBEAT],
      c = (function () {
        function e(t) {
          var n = this;
          ((this.$1 = function (t) {
            if (!(t.data == null || t.data.action == null)) {
              var o = t.data;
              if (!(t.ports == null || t.ports.length === 0)) {
                var a = t.ports;
                if (
                  !(
                    !e.isSW() &&
                    window.navigator.serviceWorker &&
                    t.source !== window.navigator.serviceWorker.controller
                  )
                ) {
                  var i;
                  (typeof t.waitUntil == "function"
                    ? (i = function (n) {
                        return t.waitUntil(n);
                      })
                    : (i = r("WAWebNoop")),
                    i(
                      Promise.resolve(n.requestHandler(o))
                        .then(function (e) {
                          a[0].postMessage(e);
                        })
                        .catch(function (e) {
                          a[0].postMessage({ error: String(e) });
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
          (e.getRequestor = function (n) {
            if (e.isSW()) {
              if (typeof n == "string") return self.clients.get(n);
            } else
              return window.navigator.serviceWorker
                ? window.navigator.serviceWorker.ready.then(function () {
                    return window.navigator.serviceWorker
                      ? window.navigator.serviceWorker.controller
                      : null;
                  })
                : Promise.resolve(null);
            return Promise.resolve(n);
          }),
          (e.broadcast = async function (n, o) {
            if (!e.isSW())
              throw r("err")("Broadcast called from non-serviceworker.");
            var t = await self.clients.matchAll();
            return t.length === 0
              ? Promise.reject(r("err")("No clients available."))
              : Promise.all(
                  t.map(function (t) {
                    return e.request(t, n, o);
                  }),
                );
          }),
          (e.request = function (n, a, i) {
            var t,
              l = o("WAWebBuildConstants").VERSION_STR,
              s = new MessageChannel(),
              u = new Promise(function (t, o) {
                return (
                  (s.port1.onmessage = function (e) {
                    var n;
                    (n = e.data) != null && n.error
                      ? o(e.data.error)
                      : t(e.data);
                  }),
                  e.getRequestor(n).then(function (e) {
                    if (!e)
                      return o(
                        r("err")("No ServiceWorker controlling this client."),
                      );
                    e.postMessage({ action: a, message: i, version: l }, [
                      s.port2,
                    ]);
                  })
                );
              });
            return u;
          }),
          e
        );
      })();
    l.default = c;
  },
  98,
);
