__d(
  "WAWebLimitSharingPairDedup",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 6e4,
      l = 1e3,
      s = new Map();
    function u(e, t) {
      var n,
        r = Number((n = t.settingTimestamp) != null ? n : 0);
      if (!(r <= 0)) {
        var o = Date.now();
        (s.size >= l && m(o),
          s.set(e, {
            enabled: t.enabled,
            fromMe: t.fromMe,
            settingTimestamp: r,
            receivedAt: o,
          }));
      }
    }
    function c(t, n) {
      var r,
        o = s.get(t);
      if (o == null) return !1;
      if (Date.now() - o.receivedAt > e) return (s.delete(t), !1);
      var a =
        o.enabled === n.enabled &&
        o.fromMe === n.fromMe &&
        o.settingTimestamp === Number((r = n.settingTimestamp) != null ? r : 0);
      return (a && s.delete(t), a);
    }
    function d() {
      s.clear();
    }
    function m(t) {
      for (var n of s) {
        var r = n[0],
          o = n[1];
        t - o.receivedAt > e && s.delete(r);
      }
    }
    ((i.recordAcp2ProtocolMessage = u),
      (i.consumePairedRedundantAcp1 = c),
      (i.clearAcp2ProtocolRecordsForTests = d));
  },
  66,
);
