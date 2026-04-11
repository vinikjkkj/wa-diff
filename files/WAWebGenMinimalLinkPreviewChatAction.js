__d(
  "WAWebGenMinimalLinkPreviewChatAction",
  ["WALogger", "WAWebLinkPreviewUtils", "WAWebUserPrefsGeneral"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, r, a) {
      if ((r === void 0 && (r = !1), a === void 0 && (a = null), !t || !t.url))
        return null;
      var i = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
        l = i.disableLinkPreviews;
      return l === !0
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "genMinimalLinkPreview: disabled due to user settings",
              ])),
          ),
          null)
        : o("WAWebLinkPreviewUtils").genLinkPreview({
            url: t.url,
            linkDetails: {
              title: t.domain,
              description: t.url,
              richPreviewType: n,
              doNotPlayInline: !0,
              isLoading: r,
            },
            paymentLinkDetails: a,
          });
    }
    l.genMinimalLinkPreview = s;
  },
  98,
);
