__d(
  "WAWebBusinessAboutSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerBlock.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatStatus",
    "WAWebContactGetters",
    "WAWebCopyPasteSelectable.react",
    "WAWebFrontendContactGetters",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWidFormat",
    "react",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contact,
        n = t.getStatus(),
        a = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebContactGetters").getId,
          o("WAWebFrontendContactGetters").getPhoneNumber,
        ]),
        i = a[0],
        l = a[1],
        c = o("useWAWebModelValues").useModelValues(n, ["status"]),
        d = c.status,
        m =
          d === ""
            ? null
            : u.jsx(r("WAWebChatInfoDrawerBlock.react"), {
                multiline: !0,
                children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                  as: "span",
                  children: u.jsx(o("WAWebChatStatus").StatusWrapper, {
                    id: i,
                  }),
                }),
              }),
        p;
      i.isLid() ? l != null && (p = l) : (p = i);
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
          children: [m, _],
        },
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
