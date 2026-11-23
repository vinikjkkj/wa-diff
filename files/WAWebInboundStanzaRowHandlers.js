__d(
  "WAWebInboundStanzaRowHandlers",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s(t) {
      return e.has(t);
    }
    async function u(t, n) {
      var o = e.get(t);
      if (o == null) throw r("err")("no inbound stanza handler " + t);
      return o(n);
    }
    ((l.hasInboundStanzaHandler = s), (l.applyInboundStanza = u));
  },
  98,
);
