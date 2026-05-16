__d(
  "WAWebAcquisitionSourceNames",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    var e = new Map([
      [0, s._(/*BTDS*/ "CTWA Ad")],
      [1, s._(/*BTDS*/ "Organic - FB")],
      [2, s._(/*BTDS*/ "Organic - IG")],
      [3, s._(/*BTDS*/ "Word of mouth")],
      [4, s._(/*BTDS*/ "Referral")],
    ]);
    function u(t, n) {
      e.set(t, n);
    }
    function c() {
      return s._(/*BTDS*/ "Unknown");
    }
    function d(t) {
      var n;
      return (n = e.get(t)) != null ? n : null;
    }
    function m() {
      return Array.from(e.keys());
    }
    function p(t) {
      var n = t.trim().toLowerCase();
      if (n === "") return null;
      for (var r of e) {
        var o = r[0],
          a = r[1];
        if (String(a).toLowerCase() === n) return o;
      }
      return null;
    }
    ((l.registerAcquisitionSource = u),
      (l.getUnknownAcquisitionSourceLabel = c),
      (l.getAcquisitionSourceDisplayName = d),
      (l.getRegisteredAcquisitionSourceIds = m),
      (l.getAcquisitionSourceIdFromName = p));
  },
  226,
);
