__d(
  "WAWebHostedGroupUtils",
  ["fbt", "WAWebFrontendContactGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return (
        t === void 0 && (t = !1),
        t
          ? s._(/*BTDS*/ "", [
              s._param(
                "ownerName",
                o("WAWebFrontendContactGetters").getFormattedName(e),
              ),
            ])
          : s._(/*BTDS*/ "", [
              s._param(
                "ownerName",
                o("WAWebFrontendContactGetters").getFormattedName(e),
              ),
            ])
      );
    }
    l.getSecureServicesBannerText = e;
  },
  226,
);
