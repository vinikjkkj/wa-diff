__d(
  "WAWebBizSendProductLinkFlow.react",
  [
    "fbt",
    "WAWebCatalogShortLinkUtils",
    "WAWebSendTextFlow.react",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onSend,
        n = e.product,
        a = o("WAWebCatalogShortLinkUtils").createProductLink(
          n.catalogWid.user,
          n.id.toString(),
        ),
        i = o("WAWebUserPrefsMeUser").isMeAccount(n.catalogWid)
          ? s
              ._(/*BTDS*/ "Follow this link to view our item on WhatsApp:")
              .toString() +
            " " +
            a
          : a;
      return u.jsx(r("WAWebSendTextFlow.react"), { text: i, onSend: t });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
