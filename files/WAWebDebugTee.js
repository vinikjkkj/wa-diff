__d(
  "WAWebDebugTee",
  ["WAHex", "WAWebTEENodeTokenThriftFetcher", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
              "WAWebTEENodeTokenThriftFetcher",
            ).fetchNodeTokenViaThrift(
              e != null ? e : "debug",
              t != null ? t : !1,
            ),
            r = {
              chipIdHex: o("WAHex").toHex(n.chipId),
              nodeTokenHex: o("WAHex").toHex(n.nodeToken),
              nodeTokenLength: n.nodeToken.length,
              ports: n.ports,
              tier: n.tier,
            };
          return r;
        })),
        s.apply(this, arguments)
      );
    }
    var u = { fetchNodeTokenThrift: e };
    l.default = u;
  },
  98,
);
