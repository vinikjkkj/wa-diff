__d(
  "WAWebDebugTee",
  [
    "WAHex",
    "WAWebTEENodeTokenThriftFetcher",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          r("vulture")("OSnNqmCC5YydjEc2oqM4fSrjFhA=");
          var n = yield o(
              "WAWebTEENodeTokenThriftFetcher",
            ).fetchNodeTokenViaThrift(
              e != null ? e : "debug",
              t != null ? t : !1,
            ),
            a = {
              chipIdHex: o("WAHex").toHex(n.chipId),
              nodeTokenHex: o("WAHex").toHex(n.nodeToken),
              nodeTokenLength: n.nodeToken.length,
              ports: n.ports,
              tier: n.tier,
            };
          return a;
        })),
        s.apply(this, arguments)
      );
    }
    var u = { fetchNodeTokenThrift: e };
    l.default = u;
  },
  98,
);
