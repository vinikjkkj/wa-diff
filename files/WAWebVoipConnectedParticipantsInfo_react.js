__d(
  "WAWebVoipConnectedParticipantsInfo.react",
  [
    "fbt",
    "WAWebCallLogUtils",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebParticipantListUtils",
    "WDSIconIcArrowDropDown.react",
    "WDSText.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = 28,
      p = 7,
      _ = 12,
      f = 3,
      g = 0.5,
      h = 20,
      y = {
        marginInlineStart: "x4lel18",
        zIndex: "xr3buco",
        borderStartStartRadius: "x1c9tyrk",
        borderStartEndRadius: "xeusxvb",
        borderEndEndRadius: "x1pahc9y",
        borderEndStartRadius: "x1ertn4p",
        borderTopWidth: "x178xt8z",
        borderInlineEndWidth: "x1lun4ml",
        borderBottomWidth: "xso031l",
        borderInlineStartWidth: "xpilrb4",
        borderTopStyle: "x13fuv20",
        borderInlineEndStyle: "x18b5jzi",
        borderBottomStyle: "x1q0q8m5",
        borderInlineStartStyle: "x1t7ytsu",
        borderTopColor: "x1ekq09l",
        borderInlineEndColor: "xlmuga0",
        borderBottomColor: "x54tcbp",
        borderInlineStartColor: "xlzwp1d",
        boxSizing: "x1afcbsf",
        $$css: !0,
      },
      C = {
        leftSection: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          minWidth: "xeuugli",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "x1r8uery",
          $$css: !0,
        },
        nameText: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        rightSection: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        profilePicsContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        profilePicWrapper: function (t) {
          return [
            y,
            {
              "--x-marginInlineStart": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t === 0 ? 0 : -p),
              "--x-zIndex": 10 - t != null ? 10 - t : void 0,
            },
          ];
        },
        dimmedProfilePic: { opacity: "xbyyjgo", $$css: !0 },
        chevronIcon: { color: "xhslqc4", flexShrink: "x2lah0s", $$css: !0 },
        chevronIconExpanded: { transform: "x19jd1h0", $$css: !0 },
      };
    function b(t) {
      var n = t.allParticipants,
        a = t.connectedParticipants,
        i = t.isExpanded,
        l = t.onToggle,
        u = a.length,
        p = d(
          function () {
            if (u === 0) return null;
            var e = o("WAWebCallLogUtils").sortConnectedParticipants(a),
              t = e.sortedParticipants;
            return o(
              "WAWebParticipantListUtils",
            ).formatParticipantWidsPreserveOrder(t, !0);
          },
          [u, a],
        ),
        _ = d(
          function () {
            var e = o("WAWebCallLogUtils").sortConnectedParticipants(a),
              t = e.connectedSet,
              r = e.sortedParticipants,
              i = r.slice(0, f).map(function (e) {
                return { wid: e, isConnected: !0 };
              });
            if (i.length < f) {
              var l = n.filter(function (e) {
                  return !t.has(e.toString());
                }),
                s = o("WAWebCallLogUtils").sortParticipantWidsByPriority(
                  l,
                  null,
                ),
                u = f - i.length,
                c = s.slice(0, u).map(function (e) {
                  return { wid: e, isConnected: !1 };
                });
              i.push.apply(i, c);
            }
            return i;
          },
          [a, n],
        );
      return u === 0 || p == null
        ? null
        : c.jsxs("button", {
            type: "button",
            onClick: l,
            "aria-expanded": i,
            "aria-label": i
              ? s._(/*BTDS*/ "Hide participants list")
              : s._(/*BTDS*/ "Show participants list"),
            className:
              "x78zum5 x6s0dn4 x1qughib xh8yej3 x1f0uite xs2akgl x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xjbqb8w xyi3aci xwf5gio x1p453bz x1suzm8a x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x1ubxc9n",
            children: [
              c.jsxs(o("WAWebFlex.react").FlexItem, {
                xstyle: C.leftSection,
                children: [
                  c.jsx("div", {
                    className:
                      "xsmyaan x1kpxq89 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1qe8gl4 x2lah0s",
                  }),
                  c.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: C.nameText,
                    children: c.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      maxLines: 1,
                      children: p,
                    }),
                  }),
                ],
              }),
              c.jsxs(o("WAWebFlex.react").FlexItem, {
                xstyle: C.rightSection,
                children: [
                  c.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: C.profilePicsContainer,
                    children: _.map(function (t, n) {
                      return c.jsx(
                        "div",
                        babelHelpers.extends(
                          {},
                          (e || (e = r("stylex"))).props(
                            C.profilePicWrapper(n),
                            !t.isConnected && C.dimmedProfilePic,
                          ),
                          {
                            children: c.jsx(
                              o("WAWebDetailImage.react").DetailImage,
                              {
                                id: t.wid,
                                size: m,
                                shape: o("WAWebDetailImage.react")
                                  .DetailImageShape.Circle,
                                waitIdle: !0,
                              },
                            ),
                          },
                        ),
                        t.wid.toString(),
                      );
                    }),
                  }),
                  c.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: [C.chevronIcon, i && C.chevronIconExpanded],
                    children: c.jsx(r("WDSIconIcArrowDropDown.react"), {
                      height: h,
                      width: h,
                    }),
                  }),
                ],
              }),
            ],
          });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
