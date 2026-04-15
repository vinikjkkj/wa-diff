__d(
  "WAWebBizSendCatalogLinkFlow.react",
  [
    "fbt",
    "WAWebCatalogShortLinkUtils",
    "WAWebSendTextFlow.react",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.catalog,
        a = e.onSend,
        i;
      t[0] !== n.id.user
        ? ((i = o("WAWebCatalogShortLinkUtils").createCatalogLink(n.id.user)),
          (t[0] = n.id.user),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        c;
      t[2] !== n.id || t[3] !== l
        ? ((c = n.id.equals(o("WAWebUserPrefsMeUser").getMaybeMePnUser())
            ? s
                ._(/*BTDS*/ "Follow this link to view our catalog on WhatsApp:")
                .toString() +
              " " +
              l
            : l),
          (t[2] = n.id),
          (t[3] = l),
          (t[4] = c))
        : (c = t[4]);
      var d = c,
        m;
      return (
        t[5] !== a || t[6] !== d
          ? ((m = u.jsx(r("WAWebSendTextFlow.react"), { text: d, onSend: a })),
            (t[5] = a),
            (t[6] = d),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    l.default = c;
  },
  226,
);
