__d(
  "WAWebContactInfoAboutSection",
  [
    "fbt",
    "WAWebBox.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatTextStatusWrapper",
    "WAWebExternalLink.react",
    "WAWebMiscGatingUtils",
    "WAWebUseAboutDisplayStatus",
    "WAWebWid",
    "WDSPaddings.stylex",
    "WDSSectionDivider.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        aboutText: { paddingBottom: "x1a8lsjc", $$css: !0 },
        whatsapp_url: { color: "x14qam3d", $$css: !0 },
      };
    function d(e) {
      var t = e.contact,
        n = o("WAWebUseAboutDisplayStatus").useAboutDisplayStatus(t),
        a = n.shouldRenderAboutSection;
      if (r("WAWebWid").isPSA(t.id)) {
        var i = o("WAWebMiscGatingUtils").isBlueEnabled()
            ? s._(/*BTDS*/ "").toString()
            : s._(/*BTDS*/ "").toString(),
          l = s._(/*BTDS*/ ""),
          d = s._(/*BTDS*/ "").toString();
        return u.jsxs(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
          {
            titleTestId: "section-about",
            title: "",
            children: [
              u.jsx(r("WAWebBox.react"), {
                as: "span",
                children: u.jsxs(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  children: [l, u.jsx("br", {}), d, u.jsx("br", {}), i],
                }),
              }),
              u.jsx("br", {}),
              u.jsx("br", {}),
              u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: "https://whatsapp.com/",
                xstyle: c.whatsapp_url,
                children: s._(/*BTDS*/ ""),
              }),
            ],
          },
        );
      }
      if (!a) return null;
      var m = u.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
        contactId: t.id,
      });
      return u.jsxs(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
        {
          xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
          children: [
            u.jsx(r("WDSSectionDivider.react"), {
              header: { title: s._(/*BTDS*/ "") },
              testid: "section-about",
            }),
            u.jsx(r("WAWebBox.react"), {
              xstyle: [
                o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
                c.aboutText,
              ],
              children: u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                children: m,
              }),
            }),
          ],
        },
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
