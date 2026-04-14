__d(
  "WAWebCommunityAddGroupConfirmationPopup.react",
  [
    "fbt",
    "WAWebAlertBellIcon.react",
    "WAWebCellBorder.react",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebPeopleIcon.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        iconColor: { color: "x1v5yvga", $$css: !0 },
        sectionTitle: { width: "x1l2rt3b", $$css: !0 },
      };
    function m(t) {
      var n = t.disclaimer,
        a = t.onCancel,
        i = t.onOK,
        l = t.selectedGroups,
        u = t.title,
        m = l != null ? l : [],
        p = [
          {
            text:
              n != null
                ? n
                : m.length === 1
                  ? s._(
                      /*BTDS*/ "If the group is approved by an admin, the people in this group will be added to the community as members.",
                    )
                  : s._(
                      /*BTDS*/ "If the groups are approved by an admin, the people in these groups will be added to the community as members.",
                    ),
            Icon: o("WAWebAlertBellIcon.react").AlertBellIcon,
          },
          {
            text: s._(
              /*BTDS*/ "They can join or request to join other groups in the community.",
            ),
            Icon: o("WAWebPeopleIcon.react").PeopleIcon,
          },
        ],
        _ = s._(
          /*BTDS*/ '_j{"*":"Add {group-count} groups to community?","_1":"Add 1 group to community?"}',
          [s._plural(m.length, "group-count")],
        );
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: u != null ? u : _,
        onOK: i,
        onCancel: a,
        children: c.jsx(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          children: p.map(function (t, n) {
            var a = t.Icon,
              i = t.text;
            return c.jsxs(
              "div",
              {
                children: [
                  c.jsxs(o("WAWebFlex.react").FlexRow, {
                    className: (e || (e = r("stylex")))(
                      o("WAWebUISpacing").uiMargin.vert14,
                    ),
                    children: [
                      c.jsx(o("WAWebFlex.react").FlexItem, {
                        xstyle: o("WAWebUISpacing").uiPadding.horiz8,
                        children: c.jsx(a, {
                          width: 18,
                          height: 18,
                          iconXstyle: d.iconColor,
                        }),
                      }),
                      c.jsx(o("WAWebFlex.react").FlexItem, {
                        xstyle: [
                          o("WAWebUISpacing").uiPadding.horiz8,
                          d.sectionTitle,
                        ],
                        children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: i,
                        }),
                      }),
                    ],
                  }),
                  n !== p.length - 1 &&
                    c.jsx(r("WAWebCellBorder.react"), { noMargin: !0 }),
                ],
              },
              n,
            );
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
