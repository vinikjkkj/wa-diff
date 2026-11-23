__d(
  "WAWebDebugTee",
  ["WAHex", "WAWebTEENodeTokenThriftFetcher", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      r("vulture")("OSnNqmCC5YydjEc2oqM4fSrjFhA=");
      var n = await o("WAWebTEENodeTokenThriftFetcher").fetchNodeTokenViaThrift(
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
    }
    var s = { fetchNodeTokenThrift: e };
    l.default = s;
  },
  98,
);
