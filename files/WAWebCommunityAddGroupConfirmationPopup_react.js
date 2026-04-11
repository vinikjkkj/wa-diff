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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(19),
        a = t.disclaimer,
        i = t.onCancel,
        l = t.onOK,
        u = t.selectedGroups,
        m = t.title,
        p;
      n[0] !== u
        ? ((p = u != null ? u : []), (n[0] = u), (n[1] = p))
        : (p = n[1]);
      var _ = p,
        f;
      n[2] !== a || n[3] !== _.length
        ? ((f =
            a != null
              ? a
              : _.length === 1
                ? s._(
                    /*BTDS*/ "If the group is approved by an admin, the people in this group will be added to the community as members.",
                  )
                : s._(
                    /*BTDS*/ "If the groups are approved by an admin, the people in these groups will be added to the community as members.",
                  )),
          (n[2] = a),
          (n[3] = _.length),
          (n[4] = f))
        : (f = n[4]);
      var g;
      n[5] !== f
        ? ((g = { text: f, Icon: o("WAWebAlertBellIcon.react").AlertBellIcon }),
          (n[5] = f),
          (n[6] = g))
        : (g = n[6]);
      var h;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = {
            text: s._(
              /*BTDS*/ "They can join or request to join other groups in the community.",
            ),
            Icon: o("WAWebPeopleIcon.react").PeopleIcon,
          }),
          (n[7] = h))
        : (h = n[7]);
      var y;
      n[8] !== g ? ((y = [g, h]), (n[8] = g), (n[9] = y)) : (y = n[9]);
      var C = y,
        b;
      n[10] !== _.length
        ? ((b = s._(
            /*BTDS*/ '_j{"*":"Add {group-count} groups to community?","_1":"Add 1 group to community?"}',
            [s._plural(_.length, "group-count")],
          )),
          (n[10] = _.length),
          (n[11] = b))
        : (b = n[11]);
      var v = b,
        S = m != null ? m : v,
        R;
      n[12] !== C
        ? ((R = c.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: C.map(function (t, n) {
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
                    n !== C.length - 1 &&
                      c.jsx(r("WAWebCellBorder.react"), { noMargin: !0 }),
                  ],
                },
                n,
              );
            }),
          })),
          (n[12] = C),
          (n[13] = R))
        : (R = n[13]);
      var L;
      return (
        n[14] !== i || n[15] !== l || n[16] !== S || n[17] !== R
          ? ((L = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: S,
              onOK: l,
              onCancel: i,
              children: R,
            })),
            (n[14] = i),
            (n[15] = l),
            (n[16] = S),
            (n[17] = R),
            (n[18] = L))
          : (L = n[18]),
        L
      );
    }
    l.default = m;
  },
  226,
);
