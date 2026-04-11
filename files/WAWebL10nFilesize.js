__d(
  "WAWebL10nFilesize",
  ["WAWebL10N", "fbs"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        B: (e = r("fbs"))._(/*BTDS*/ "B").toString(),
        KB: e._(/*BTDS*/ "kB").toString(),
        MB: e._(/*BTDS*/ "MB").toString(),
        GB: e._(/*BTDS*/ "GB").toString(),
        KiB: e._(/*BTDS*/ "kB").toString(),
        MiB: e._(/*BTDS*/ "MB").toString(),
        GiB: e._(/*BTDS*/ "GB").toString(),
      };
    function u(e) {
      return r("WAWebL10N").filesizeWithParams(e, s);
    }
    l.getL10nFilesize = u;
  },
  226,
);
