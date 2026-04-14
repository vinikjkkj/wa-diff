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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { paddingBottom20: { paddingBottom: "xv6tirj", $$css: !0 } };
    function d() {
      var e = s._(/*BTDS*/ "Group visibility is set to hidden"),
        t = s._(
          /*BTDS*/ "Only invited members and community admins can see this group.",
        ),
        n = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getCommunityGroupsVisibilityFaqUrl(),
          children: s._(/*BTDS*/ "Learn more about group visibility"),
        }),
        r = s._(
          /*BTDS*/ "To protect member privacy, this setting can't be changed. {learn-more-link}",
          [s._param("learn-more-link", n)],
        );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: o("WAWebModalManager").closeModalManager,
        title: e,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            u.jsx(o("WAWebText.react").WAWebTextMuted, {
              xstyle: c.paddingBottom20,
              children: t,
            }),
            u.jsx(o("WAWebText.react").WAWebTextMuted, { children: r }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
