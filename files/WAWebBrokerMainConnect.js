__d(
  "WAWebBrokerMainConnect",
  [
    "WAWebBrokerConnectionManager",
    "WAWebBrokerProtocolHandshake",
    "WAWebInvocationDispatcher",
    "WAWebInvocationHandler",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new MessageChannel(),
        n = t.port1,
        a = t.port2;
      (r("WAWebInvocationHandler").respondTo(n),
        r("WAWebBrokerConnectionManager").init(),
        r("WAWebInvocationDispatcher").setConnectionManager(
          r("WAWebBrokerConnectionManager"),
        ),
        r("WAWebBrokerConnectionManager").connectVia(n),
        e.postMessage(
          o("WAWebBrokerProtocolHandshake").buildHandshakePayload(a),
          [a],
        ));
    }
    l.default = e;
  },
  98,
);
