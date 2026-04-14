__d(
  "WAWebBizSendCatalogLinkFlow.react",
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
      var t = e.catalog,
        n = e.onSend,
        a = o("WAWebCatalogShortLinkUtils").createCatalogLink(t.id.user),
        i = t.id.equals(o("WAWebUserPrefsMeUser").getMaybeMePnUser())
          ? s
              ._(/*BTDS*/ "Follow this link to view our catalog on WhatsApp:")
              .toString() +
            " " +
            a
          : a;
      return u.jsx(r("WAWebSendTextFlow.react"), { text: i, onSend: n });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
