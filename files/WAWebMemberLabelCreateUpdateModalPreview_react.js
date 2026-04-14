__d(
  "WAWebMemberLabelCreateUpdateModalPreview.react",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebConversationBackground.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebTailInIcon.react",
    "WAWebUserPrefsMeUser",
    "WAWebWallpaper",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = {
        chatTitle: {
          marginTop: "xdj266r",
          marginInlineEnd: "xviac27",
          marginBottom: "xat24cr",
          marginInlineStart: "xlese2p",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
        labelPreviewProfile: {
          height: "x1fgtraw",
          marginInlineEnd: "x16q7b9a",
          width: "xgd8bvy",
          $$css: !0,
        },
        labelPreviewMessageBubble: {
          position: "x1n2onr6",
          background: "xlrljjx",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          borderStartEndRadius: "xvvg52n",
          borderStartStartRadius: "x1bczwif",
          paddingBottom: "x12xbjc7",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "xde1mab",
          paddingInlineStart: "x1iw51ew",
          width: "xh8yej3",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        labelPreviewMessageBubbleTail: {
          position: "x1n2onr6",
          color: "x1l1cedg",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        skeleton: {
          background: "x1qzfwts",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          height: "x170jfvy",
          $$css: !0,
        },
        skeletonContainer: {
          marginTop: "xfl633f",
          rowGap: "x129bwdz",
          $$css: !0,
        },
        skeletonLast: { width: "xz84dc7", $$css: !0 },
        doodleContainer: {
          position: "x1n2onr6",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          marginTop: "xdj266r",
          marginInlineEnd: "xviac27",
          marginBottom: "xat24cr",
          marginInlineStart: "xlese2p",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          backgroundColor: "x1q80dvb",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function m(e) {
      var t,
        n = e.memberLabel,
        a = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        i = c(
          function () {
            if (a == null) return null;
            var e = o("WAWebContactCollection").ContactCollection.get(a);
            return e != null
              ? o("WAWebFrontendContactGetters").getFormattedUser(e)
              : null;
          },
          [a],
        );
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx((t = o("WAWebFlex.react")).FlexRow, {
            xstyle: d.chatTitle,
            align: "stretch",
            children: u.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDeemphasized",
              children: s._(/*BTDS*/ "Preview"),
            }),
          }),
          u.jsxs(t.FlexRow, {
            xstyle: d.doodleContainer,
            children: [
              u.jsx(r("WAWebConversationBackground.react"), {
                wallpaper: o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
                showDoodle: !0,
              }),
              u.jsx(t.FlexColumn, {
                grow: 1,
                align: "stretch",
                children: u.jsxs(t.FlexRow, {
                  justify: "stretch",
                  children: [
                    u.jsx(t.FlexRow, {
                      xstyle: d.labelPreviewProfile,
                      children:
                        a != null
                          ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
                              id: a,
                              size: o("WAWebDetailImage.react").DetailImageSize
                                .None,
                            })
                          : null,
                    }),
                    u.jsxs(o("WAWebFlex.react").FlexRow, {
                      grow: 1,
                      children: [
                        u.jsx(o("WAWebTailInIcon.react").TailInIcon, {
                          xstyle: d.labelPreviewMessageBubbleTail,
                        }),
                        u.jsxs(o("WAWebFlex.react").FlexColumn, {
                          xstyle: d.labelPreviewMessageBubble,
                          align: "stretch",
                          children: [
                            u.jsxs("div", {
                              className: "x14hzkev x1f6kntn xd4r4e8 xk50ysn",
                              children: [
                                i != null ? i : s._(/*BTDS*/ "Preview"),
                                " ",
                                s._(/*BTDS*/ "(You)"),
                              ],
                            }),
                            u.jsx(r("WDSText.react"), {
                              colorName: "contentDeemphasized",
                              type: "Body3",
                              children:
                                n != null && n.trim()
                                  ? n
                                  : s._(/*BTDS*/ "Member tag appears here"),
                            }),
                            u.jsx(p, {}),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: d.skeletonContainer,
        align: "stretch",
        children: Array.from({ length: 3 }, function (e, t) {
          var n = t === 2;
          return u.jsx(
            o("WAWebFlex.react").FlexRow,
            { xstyle: [d.skeleton, n && d.skeletonLast] },
            t,
          );
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
