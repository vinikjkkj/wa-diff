__d(
  "WAWebHatchArtifactSubtitle",
  ["fbt", "WAWebClock"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return e.constructionStatus === "constructing" ||
        e.constructionStatus === "updating"
        ? s._(/*BTDS*/ "Building")
        : e.constructionStatus === "failed" ||
            e.constructionStatus === "interrupted"
          ? s._(/*BTDS*/ "Needs attention")
          : u(e.accessedAtMs, t);
    }
    function u(e, t) {
      if (e == null || e <= 0) return null;
      var n = Math.floor(e / 1e3);
      return e >= new Date(t).setHours(24, 0, 0, 0)
        ? o("WAWebClock").Clock.dateStr(n)
        : o("WAWebClock").Clock.relativeDateStr(n);
    }
    ((l.getHatchArtifactSubtitle = e), (l.accessedAtLabel = u));
  },
  226,
);
