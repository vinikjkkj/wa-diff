__d(
  "WAWebContactInfoAboutSection",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebExternalLink.react",
    "WAWebMiscGatingUtils",
    "WAWebText.react",
    "WAWebTextStatusGatingUtils",
    "WAWebUISpacing",
    "WAWebUseAboutDisplayStatus",
    "WAWebWid",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { whatsapp_url: { color: "x14qam3d", $$css: !0 } };
    function d(e) {
      var t = e.contact,
        n = o("WAWebUseAboutDisplayStatus").useAboutDisplayStatus(t),
        a = n.hasContent;
      if (r("WAWebWid").isPSA(t.id)) {
        var i = o("WAWebMiscGatingUtils").isBlueEnabled()
            ? s
                ._(
                  /*BTDS*/ "Official chats from WhatsApp will always have a blue verified badge. And we'll never ask for your personal information.",
                )
                .toString()
            : s
                ._(
                  /*BTDS*/ 'Official chats from WhatsApp will always have a green "verified" checkmark. And we\'ll never ask for your personal information.',
                )
                .toString(),
          l = s._(/*BTDS*/ "Hi! Welcome to this official WhatsApp chat."),
          d = s
            ._(
              /*BTDS*/ "This is where you can get tips, see announcements, and hear about the newest features. Straight from us.",
            )
            .toString(),
          m = o("WAWebText.react").WAWebTextTitleRefreshed;
        return u.jsxs(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
          {
            titleTestId: "section-about",
            title: "",
            children: [
              u.jsxs(m, {
                as: "span",
                children: [l, u.jsx("br", {}), d, u.jsx("br", {}), i],
              }),
              u.jsx("br", {}),
              u.jsx("br", {}),
              u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: "https://whatsapp.com/",
                xstyle: c.whatsapp_url,
                children: s._(/*BTDS*/ "https:\/\/whatsapp.com\/"),
              }),
            ],
          },
        );
      }
      if (!a) return null;
      var p = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
        ? u.jsx(o("WAWebChatTextStatusWrapper").TextStatus, { contactId: t.id })
        : u.jsx(o("WAWebChatStatus").StatusWrapper, { id: t.id });
      return u.jsx(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
        {
          titleTestId: "section-about",
          title: s._(/*BTDS*/ "About"),
          titleXStyle: o("WAWebUISpacing").uiPadding.all0,
          children: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            color: "wdsContentDefault",
            xstyle: o("WAWebUISpacing").uiMargin.top4,
            children: p,
          }),
        },
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
