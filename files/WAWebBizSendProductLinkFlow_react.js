__d(
  "WAWebBizSendProductLinkFlow.react",
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
      var t = o("react-compiler-runtime").c(9),
        n = e.onSend,
        a = e.product,
        i;
      t[0] !== a.catalogWid.user || t[1] !== a.id
        ? ((i = o("WAWebCatalogShortLinkUtils").createProductLink(
            a.catalogWid.user,
            a.id.toString(),
          )),
          (t[0] = a.catalogWid.user),
          (t[1] = a.id),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        c;
      t[3] !== l || t[4] !== a.catalogWid
        ? ((c = o("WAWebUserPrefsMeUser").isMeAccount(a.catalogWid)
            ? s
                ._(/*BTDS*/ "Follow this link to view our item on WhatsApp:")
                .toString() +
              " " +
              l
            : l),
          (t[3] = l),
          (t[4] = a.catalogWid),
          (t[5] = c))
        : (c = t[5]);
      var d = c,
        m;
      return (
        t[6] !== n || t[7] !== d
          ? ((m = u.jsx(r("WAWebSendTextFlow.react"), { text: d, onSend: n })),
            (t[6] = n),
            (t[7] = d),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    l.default = c;
  },
  226,
);
