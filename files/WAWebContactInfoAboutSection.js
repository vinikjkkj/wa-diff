__d(
  "WAWebContactInfoAboutSection",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebExternalLink.react",
    "WAWebFrontendContactGetters",
    "WAWebMiscGatingUtils",
    "WAWebText.react",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebUISpacing",
    "WAWebWid",
    "react",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { whatsapp_url: { color: "x14qam3d", $$css: !0 } };
    function d(e) {
      var t,
        n = e.contact,
        a = n.getStatus(),
        i = o("useWAWebModelValues").useModelValues(a, ["status"]),
        l = i.status,
        d = o("useWAWebContactValues").useContactValues(n.id, [
          (t = o("WAWebFrontendContactGetters")).getTextStatusString,
          t.getTextStatusEmoji,
          t.getTextStatusLastUpdateTime,
          t.getTextStatusExpiryTs,
          t.getTextStatusEphemeralDuration,
        ]),
        m = d[0],
        p = d[1],
        _ = d[2],
        f = d[3],
        g = d[4],
        h = o("WAWebTextStatusUtils").shouldDisplayTextStatus(m, p, _, f, g);
      if (r("WAWebWid").isPSA(n.id)) {
        var y = o("WAWebMiscGatingUtils").isBlueEnabled()
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
          C = s._(/*BTDS*/ "Hi! Welcome to this official WhatsApp chat."),
          b = s
            ._(
              /*BTDS*/ "This is where you can get tips, see announcements, and hear about the newest features. Straight from us.",
            )
            .toString(),
          v = o("WAWebText.react").WAWebTextTitleRefreshed;
        return u.jsxs(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
          {
            titleTestId: "section-about",
            title: "",
            children: [
              u.jsxs(v, {
                as: "span",
                children: [C, u.jsx("br", {}), b, u.jsx("br", {}), y],
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
      if (
        !o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
        l === ""
      )
        return null;
      var S = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
          ? h || o("WAWebTextStatusUtils").hasCustomAboutSet(a)
          : !0,
        R = S ? s._(/*BTDS*/ "About") : void 0,
        L = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
          ? u.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
              contactId: n.id,
            })
          : u.jsx(o("WAWebChatStatus").StatusWrapper, { id: n.id });
      return u.jsx(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
        {
          titleTestId: "section-about",
          title: R,
          titleXStyle: o("WAWebUISpacing").uiPadding.all0,
          children: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            color: "wdsContentDefault",
            xstyle: o("WAWebUISpacing").uiMargin.top4,
            children: L,
          }),
        },
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
