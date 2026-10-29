__d(
  "WAWebGenMinimalLinkPreviewChatAction",
  ["WALogger", "WAWebLinkPreviewUtils", "WAWebUserPrefsGeneral"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = t.isLoading,
        r = n === void 0 ? !1 : n,
        a = t.link,
        i = t.paymentLinkDetails,
        l = i === void 0 ? null : i,
        s = t.richPreviewType;
      if (!a || !a.url) return null;
      var u = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
        c = u.disableLinkPreviews;
      return c === !0
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "genMinimalLinkPreview: disabled due to user settings",
              ])),
          ),
          null)
        : o("WAWebLinkPreviewUtils").genLinkPreview({
            url: a.url,
            linkDetails: {
              title: a.domain,
              description: a.url,
              richPreviewType: s,
              doNotPlayInline: !0,
              isLoading: r,
            },
            paymentLinkDetails: l,
          });
    }
    l.genMinimalLinkPreview = s;
  },
  98,
);
