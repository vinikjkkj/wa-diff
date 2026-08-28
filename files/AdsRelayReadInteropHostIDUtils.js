__d(
  "AdsRelayReadInteropHostIDUtils",
  ["AdsAdObjectRelayIDUtils", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.split(",");
      if (t.length === 3)
        return o("AdsAdObjectRelayIDUtils").decodeAdObjectRelayID(
          o("AdsAdObjectRelayIDUtils").stringToAdObjectRelayID(e),
        );
      if (t.length !== 2) throw r("err")("Cannot parse relayID " + e);
      var n = t[0],
        a = t[1];
      return { hostID: a != null ? a : "", id: n };
    }
    function s(e, t, n) {
      if (n != null)
        return o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(
          o("AdsAdObjectRelayIDUtils").encodeAdObjectRelayID(e, t, n),
        );
      if (e.includes(",")) throw r("err")("Cannot encode ID with comma " + e);
      if (t.includes(","))
        throw r("err")("Cannot encode hostID with comma " + t);
      return e + "," + t;
    }
    ((l.decodeRelayIDWithHostID = e), (l.encodeRelayIDWithHostID = s));
  },
  98,
);
