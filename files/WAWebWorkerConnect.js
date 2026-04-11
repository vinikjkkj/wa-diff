__d(
  "WAWebWorkerConnect",
  [
    "invariant",
    "Promise",
    "WANullthrows",
    "WAWebBrokerConnectionManager",
    "WAWebBrokerProtocolHandshake",
    "WAWebFtsWorkerContext",
    "WAWebInvocationDispatcher",
    "WAWebInvocationHandler",
    "WAWebInvocationInterface",
    "WAWebWorkerFrontendInterface",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = [],
      d = o("WAWebFtsWorkerContext").getFtsWorkerContext();
    function m() {
      c.forEach(function (e) {
        self.dispatchEvent(e);
      });
    }
    function p(e) {
      if (!r("WAWebBrokerConnectionManager").isConnected()) {
        var t = o(
          "WAWebBrokerProtocolHandshake",
        ).extractPortFromHandshakePayload(e);
        if (t != null) {
          (r("WAWebBrokerConnectionManager").connectVia(t),
            r("WAWebInvocationHandler").respondTo(t),
            r("WANullthrows")(u).then(function () {
              ((typeof DedicatedWorkerGlobalScope != "undefined" &&
                self instanceof DedicatedWorkerGlobalScope) ||
                s(0, 56318),
                d.removeMessageHandler(p),
                m());
            }));
          return;
        }
      }
      c.push(e);
    }
    function _() {
      return (
        u ||
          ((typeof DedicatedWorkerGlobalScope != "undefined" &&
            self instanceof DedicatedWorkerGlobalScope) ||
            s(0, 56318),
          d.setMessageHandler(p),
          (u = (e || (e = n("Promise"))).resolve(
            r("WAWebBrokerConnectionManager").init(),
          )),
          r("WAWebInvocationDispatcher").setConnectionManager(
            r("WAWebBrokerConnectionManager"),
          ),
          o("WAWebInvocationInterface").set(r("WAWebWorkerFrontendInterface"))),
        r("WANullthrows")(u)
      );
    }
    l.default = _;
  },
  98,
);
