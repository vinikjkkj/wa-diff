__d(
  "WAWebCustomerDataLastUpdated",
  ["fbt", "WATimeUtils"],
  function (t, n, r, o, a, i, l, s) {
    var e = 60,
      u = 3600,
      c = 86400;
    function d(e, t) {
      var n;
      return e == null
        ? null
        : Math.max(
            e.modifiedAt,
            (n = t == null ? void 0 : t.modifiedAt) != null ? n : 0,
          );
    }
    function m(t) {
      var n = Math.max(0, o("WATimeUtils").unixTime() - t);
      if (n < e) return String(s._(/*BTDS*/ "Just now"));
      if (n < u) {
        var r = Math.floor(n / e);
        return String(
          s._(/*BTDS*/ '_j{"*":"{number} min ago","_1":"1 min ago"}', [
            s._plural(r, "number"),
          ]),
        );
      }
      if (n < c) {
        var a = Math.floor(n / u);
        return String(
          s._(/*BTDS*/ '_j{"*":"{number} hours ago","_1":"1 hour ago"}', [
            s._plural(a, "number"),
          ]),
        );
      }
      var i = Math.floor(n / c);
      return String(
        s._(/*BTDS*/ '_j{"*":"{number} days ago","_1":"1 day ago"}', [
          s._plural(i, "number"),
        ]),
      );
    }
    ((l.getLastUpdatedTimestamp = d), (l.formatTimeAgo = m));
  },
  226,
);
