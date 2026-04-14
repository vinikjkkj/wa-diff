__d(
  "WAWebBusinessAboutSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerBlock.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebContactGetters",
    "WAWebCopyPasteSelectable.react",
    "WAWebFrontendContactGetters",
    "WAWebText.react",
    "WAWebTextStatusGatingUtils",
    "WAWebUISpacing",
    "WAWebUseAboutDisplayStatus",
    "WAWebWidFormat",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contact,
        n = o("WAWebUseAboutDisplayStatus").useAboutDisplayStatus(t),
        a = n.hasContent,
        i = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebContactGetters").getId,
          o("WAWebFrontendContactGetters").getPhoneNumber,
        ]),
        l = i[0],
        c = i[1],
        d;
      if (a) {
        var m = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
          ? u.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
              contactId: t.id,
            })
          : u.jsx(o("WAWebChatStatus").StatusWrapper, { id: l });
        d = u.jsx(r("WAWebChatInfoDrawerBlock.react"), {
          multiline: !0,
          children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            children: m,
          }),
        });
      } else d = null;
      var p;
      l.isLid() ? c != null && (p = c) : (p = l);
      var _ = p
          ? u.jsx(r("WAWebChatInfoDrawerBlock.react"), {
              separator: !0,
              children: u.jsx(
                o("WAWebCopyPasteSelectable.react").SelectableSpan,
                {
                  dir: "auto",
                  selectable: !0,
                  children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                    as: "span",
                    children: o("WAWebWidFormat").widToFormattedUser(p),
                  }),
                },
              ),
            })
          : null,
        f = s._(/*BTDS*/ "About and phone number");
      return u.jsxs(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
        {
          xstyle: o("WAWebUISpacing").uiPadding.bottom0,
          titleTestId: "section-about-and-phone-number",
          title: f,
          children: [d, _],
        },
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
