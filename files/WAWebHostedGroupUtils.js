__d(
  "WAWebHostedGroupUtils",
  ["fbt", "WAWebFrontendContactGetters"],
  function (t, n, r, o, a, i, l, s) {
    var e = function (t, n) {
      return (
        n === void 0 && (n = !1),
        n
          ? s._(
              /*BTDS*/ "{ownerName} uses a secure service from Meta to manage this chat.",
              [
                s._param(
                  "ownerName",
                  o("WAWebFrontendContactGetters").getFormattedName(t),
                ),
              ],
            )
          : s._(
              /*BTDS*/ "{ownerName} uses a secure service from Meta to manage this chat. Tap to learn more.",
              [
                s._param(
                  "ownerName",
                  o("WAWebFrontendContactGetters").getFormattedName(t),
                ),
              ],
            )
      );
    };
    l.getSecureServicesBannerText = e;
  },
  226,
);
