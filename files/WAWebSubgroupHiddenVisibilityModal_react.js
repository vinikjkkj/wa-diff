__d(
  "WAWebSubgroupHiddenVisibilityModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { paddingBottom20: { paddingBottom: "xv6tirj", $$css: !0 } };
    function d() {
      var e = o("react-compiler-runtime").c(4),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(/*BTDS*/ "Group visibility is set to hidden")), (e[0] = t))
        : (t = e[0]);
      var n = t,
        r;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s._(
            /*BTDS*/ "Only invited members and community admins can see this group.",
          )),
          (e[1] = r))
        : (r = e[1]);
      var a = r,
        i;
      if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        var l = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getCommunityGroupsVisibilityFaqUrl(),
          children: s._(/*BTDS*/ "Learn more about group visibility"),
        });
        ((i = s._(
          /*BTDS*/ "To protect member privacy, this setting can't be changed. {learn-more-link}",
          [s._param("learn-more-link", l)],
        )),
          (e[2] = i));
      } else i = e[2];
      var d = i,
        m;
      return (
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: o("WAWebModalManager").closeModalManager,
              title: n,
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                children: [
                  u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: c.paddingBottom20,
                    children: a,
                  }),
                  u.jsx(o("WAWebText.react").WAWebTextMuted, { children: d }),
                ],
              }),
            })),
            (e[3] = m))
          : (m = e[3]),
        m
      );
    }
    l.default = d;
  },
  226,
);
