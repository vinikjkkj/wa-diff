__d(
  "WAWebCustomerDataLastUpdated",
  ["fbt", "WATimeUtils"],
  function (t, n, r, o, a, i, l, s) {
    var e = 60,
      u = 3600,
      c = 86400,
      d = 30;
    function m(e, t) {
      var n;
      return e == null
        ? null
        : Math.max(
            e.modifiedAt,
            (n = t == null ? void 0 : t.modifiedAt) != null ? n : 0,
          );
    }
    function p(t) {
      var n = Math.max(0, o("WATimeUtils").unixTime() - t);
      if (n < e) return s._(/*BTDS*/ "");
      if (n < u) {
        var r = Math.floor(n / e);
        return s._(/*BTDS*/ "", [s._plural(r, "count")]);
      }
      if (n < c) {
        var a = Math.floor(n / u);
        return s._(/*BTDS*/ "", [s._plural(a, "count")]);
      }
      var i = Math.floor(n / c);
      return i > d
        ? s._(/*BTDS*/ "")
        : s._(/*BTDS*/ "", [s._plural(i, "count")]);
    }
    ((l.getLastUpdatedTimestamp = m), (l.formatLastUpdated = p));
  },
  226,
);
