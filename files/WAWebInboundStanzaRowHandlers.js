__d(
  "WAWebInboundStanzaRowHandlers",
  ["asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s(t) {
      return e.has(t);
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var o = e.get(t);
          if (o == null) throw r("err")("no inbound stanza handler " + t);
          return o(n);
        })),
        c.apply(this, arguments)
      );
    }
    ((l.hasInboundStanzaHandler = s), (l.applyInboundStanza = u));
  },
  98,
);
