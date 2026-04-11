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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(16),
        n = e.memberLabel,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o("WAWebUserPrefsMeUser").getMaybeMePnUser()), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      e: {
        if (i == null) {
          l = null;
          break e;
        }
        var c;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
          var m = o("WAWebContactCollection").ContactCollection.get(i);
          ((c =
            m != null
              ? o("WAWebFrontendContactGetters").getFormattedUser(m)
              : null),
            (t[1] = c));
        } else c = t[1];
        l = c;
      }
      var _ = l,
        f;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: d.chatTitle,
            align: "stretch",
            children: u.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDeemphasized",
              children: s._(/*BTDS*/ "Preview"),
            }),
          })),
          (t[2] = f))
        : (f = t[2]);
      var g;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(r("WAWebConversationBackground.react"), {
            wallpaper: o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
            showDoodle: !0,
          })),
          (t[3] = g))
        : (g = t[3]);
      var h;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: d.labelPreviewProfile,
            children:
              i != null
                ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: i,
                    size: o("WAWebDetailImage.react").DetailImageSize.None,
                  })
                : null,
          })),
          (t[4] = h))
        : (h = t[4]);
      var y;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(o("WAWebTailInIcon.react").TailInIcon, {
            xstyle: d.labelPreviewMessageBubbleTail,
          })),
          (t[5] = y))
        : (y = t[5]);
      var C, b;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { className: "x14hzkev x1f6kntn xd4r4e8 xk50ysn" }),
          (b = _ != null ? _ : s._(/*BTDS*/ "Preview")),
          (t[6] = C),
          (t[7] = b))
        : ((C = t[6]), (b = t[7]));
      var v;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsxs(
            "div",
            babelHelpers.extends({}, C, {
              children: [b, " ", s._(/*BTDS*/ "(You)")],
            }),
          )),
          (t[8] = v))
        : (v = t[8]);
      var S;
      t[9] !== n
        ? ((S =
            n != null && n.trim()
              ? n
              : s._(/*BTDS*/ "Member tag appears here")),
          (t[9] = n),
          (t[10] = S))
        : (S = t[10]);
      var R;
      t[11] !== S
        ? ((R = u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body3",
            children: S,
          })),
          (t[11] = S),
          (t[12] = R))
        : (R = t[12]);
      var L;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsx(p, {})), (t[13] = L))
        : (L = t[13]);
      var E;
      if (t[14] !== R) {
        var k;
        ((E = u.jsxs(u.Fragment, {
          children: [
            f,
            u.jsxs((k = o("WAWebFlex.react")).FlexRow, {
              xstyle: d.doodleContainer,
              children: [
                g,
                u.jsx(k.FlexColumn, {
                  grow: 1,
                  align: "stretch",
                  children: u.jsxs(k.FlexRow, {
                    justify: "stretch",
                    children: [
                      h,
                      u.jsxs(k.FlexRow, {
                        grow: 1,
                        children: [
                          y,
                          u.jsxs(k.FlexColumn, {
                            xstyle: d.labelPreviewMessageBubble,
                            align: "stretch",
                            children: [v, R, L],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })),
          (t[14] = R),
          (t[15] = E));
      } else E = t[15];
      return E;
    }
    function p() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: d.skeletonContainer,
              align: "stretch",
              children: Array.from({ length: 3 }, _),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function _(e, t) {
      var n = t === 2;
      return u.jsx(
        o("WAWebFlex.react").FlexRow,
        { xstyle: [d.skeleton, n && d.skeletonLast] },
        t,
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
