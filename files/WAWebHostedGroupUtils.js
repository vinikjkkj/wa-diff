__d(
  "WAWebHostedGroupUtils",
  ["fbt", "WAWebFrontendContactGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return (
        t === void 0 && (t = !1),
        t
          ? s._(
              /*BTDS*/ "{ownerName} uses a secure service from Meta to manage this chat.",
              [
                s._param(
                  "ownerName",
                  o("WAWebFrontendContactGetters").getFormattedName(e),
                ),
              ],
            )
          : s._(
              /*BTDS*/ "{ownerName} uses a secure service from Meta to manage this chat. Tap to learn more.",
              [
                s._param(
                  "ownerName",
                  o("WAWebFrontendContactGetters").getFormattedName(e),
                ),
              ],
            )
      );
    }
    l.getSecureServicesBannerText = e;
  },
  226,
);
