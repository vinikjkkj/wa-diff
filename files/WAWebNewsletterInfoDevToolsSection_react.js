__d(
  "WAWebNewsletterInfoDevToolsSection.react",
  [
    "WAWebChatInfoDrawerSection.react",
    "WAWebDevOnlyBadge.react",
    "WAWebExternalLink.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebURLUtils",
    "WAWebWid",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.chat,
        a;
      if (t[0] !== n.id) {
        var i = r("WAWebWid").user(n.id) || "";
        ((a = r("WAWebURLUtils").build(
          "https://www.internalfb.com/intern/whatsapp/admin/channel_info",
          { cid: i },
        )),
          (t[0] = n.id),
          (t[1] = a));
      } else a = t[1];
      var l = a,
        u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
            label: "Developer Section",
          })),
          (t[2] = u))
        : (u = t[2]);
      var c;
      return (
        t[3] !== l
          ? ((c = s.jsx(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              {
                title: u,
                xstyle: o("WAWebUISpacing").uiMargin.top10,
                children: s.jsx(o("WAWebText.react").WAWebTextTitle, {
                  as: "span",
                  children: s.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: l,
                    children: "Admin Tool - Channel Info",
                  }),
                }),
              },
            )),
            (t[3] = l),
            (t[4] = c))
          : (c = t[4]),
        c
      );
    }
    l.default = u;
  },
  98,
);
