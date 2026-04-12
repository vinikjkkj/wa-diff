__d(
  "WAWebVoipWaitingRoomRequestBanner.react",
  ["fbt", "WAWebFlex.react", "WDSButton.react", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        bannerContainer: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "x1nzty39",
          position: "x10l6tqk",
          width: "xeq5yr9",
          minHeight: "x1wxaq2x",
          height: "xt7dq6l",
          insetInlineStart: "x1o0tod",
          insetInlineEnd: "xtijo5x",
          left: null,
          right: null,
          marginInlineStart: "xvc5jky",
          marginInlineEnd: "x11t971q",
          marginLeft: null,
          marginRight: null,
          bottom: "x1d9eok4",
          backgroundColor: "x1c2u55m",
          boxShadow: "xi5p3m0",
          borderStartStartRadius: "x1g83kfv",
          borderStartEndRadius: "x3qq2k7",
          borderEndEndRadius: "x2x8art",
          borderEndStartRadius: "x1qor8vf",
          zIndex: "xf5e64p",
          $$css: !0,
        },
        multiUserBanner: { maxWidth: "xxc7z9f", $$css: !0 },
      };
    function d(e) {
      var t = e.firstUserName,
        n = e.onApprove,
        a = e.onDeny,
        i = e.onSeeAll,
        l = e.waitingRoomUsersCount;
      return l <= 0
        ? null
        : l === 1
          ? u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              columnGap: 8,
              xstyle: c.bannerContainer,
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body2Emphasized",
                  colorName: "persistentAlwaysWhite",
                  children: s._(/*BTDS*/ "{name} requested to join", [
                    s._param("name", t),
                  ]),
                }),
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  columnGap: 8,
                  shrink: 0,
                  children: [
                    u.jsx(r("WDSButton.react"), {
                      variant: "filled",
                      type: "destructive",
                      size: "small",
                      label: s._(/*BTDS*/ "Deny"),
                      onPress: a,
                    }),
                    u.jsx(r("WDSButton.react"), {
                      variant: "tonal",
                      type: "default",
                      size: "small",
                      label: s._(/*BTDS*/ "Approve"),
                      onPress: n,
                    }),
                  ],
                }),
              ],
            })
          : u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              columnGap: 8,
              xstyle: [c.bannerContainer, c.multiUserBanner],
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body2Emphasized",
                  colorName: "persistentAlwaysWhite",
                  children: s._(
                    /*BTDS*/ '_j{"*":"{number} people requested to join","_1":"1 person requested to join"}',
                    [s._plural(l, "number")],
                  ),
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  shrink: 0,
                  children: u.jsx(r("WDSButton.react"), {
                    variant: "tonal",
                    type: "default",
                    size: "small",
                    label: s._(/*BTDS*/ "See all"),
                    onPress: i,
                  }),
                }),
              ],
            });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
