__d(
  "WAWebL10nFilesize",
  ["WAWebL10N", "fbs"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        B: (e = r("fbs"))._(/*BTDS*/ "").toString(),
        KiB: e._(/*BTDS*/ "").toString(),
        MiB: e._(/*BTDS*/ "").toString(),
        GiB: e._(/*BTDS*/ "").toString(),
      };
    function u(e) {
      return r("WAWebL10N").filesizeWithParams(e, s);
    }
    l.getL10nFilesize = u;
  },
  226,
);
