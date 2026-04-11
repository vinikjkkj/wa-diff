__d(
  "WAWebBizCtwaThumbnailImage.react",
  [
    "WAWebBizCtwaAGMUtils",
    "WAWebBizCtwaContextThumbImage.react",
    "WAWebCtwaAGMUtils",
    "WAWebCtwaLogger",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebWarningIcon.react",
    "WAWebWarningOutlineIcon.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useState,
      p = {
        image: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          width: "xh8yej3",
          $$css: !0,
        },
        errorContainer: {
          height: "x5yr21d",
          backgroundColor: "x6egj2d",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        errorIcon: { color: "x1iglcvg", $$css: !0 },
        imageBlur: { filter: "x14tgpju", $$css: !0 },
        errorInThumbnail: { backgroundColor: "xu10ooz", $$css: !0 },
        errorIconInThumbnailBubbleOut: { color: "xvhpnrs", $$css: !0 },
        errorIconInThumbnailBubbleIn: { color: "x1pse0pq", $$css: !0 },
      };
    function _(t) {
      var n = o("react-compiler-runtime").c(25),
        a = t.alt,
        i = t.businessWid,
        l = t.context,
        s = t.fromMe,
        c = t.isThumbnail,
        d = t.xstyle,
        _ = c === void 0 ? !1 : c,
        f = m(!1),
        g = f[0],
        h = f[1],
        y;
      if (_) {
        var C;
        (n[0] !== l || n[1] !== g
          ? ((C = g
              ? o(
                  "WAWebBizCtwaContextThumbImage.react",
                ).generateThumbSrcFromData(l)
              : o("WAWebBizCtwaContextThumbImage.react").getInitialThumbSource(
                  l,
                )),
            (n[0] = l),
            (n[1] = g),
            (n[2] = C))
          : (C = n[2]),
          (y = C));
      }
      var b = _ ? y : l == null ? void 0 : l.originalImageUrl,
        v;
      n[3] !== i || n[4] !== l || n[5] !== s
        ? ((v = function () {
            (l != null &&
              o("WAWebCtwaLogger").logAGMOperation({
                operationType:
                  o("WAWebCtwaLogger").AGM_OPERATION_TYPE
                    .agm_bottom_sheet_image_error,
                fromBusiness: s,
                agmPayload: o("WAWebCtwaAGMUtils").extractAGMPayload(l),
                businessWid: i,
                adId: l == null ? void 0 : l.sourceId,
              }),
              h(!0));
          }),
          (n[3] = i),
          (n[4] = l),
          (n[5] = s),
          (n[6] = v))
        : (v = n[6]);
      var S = v;
      if (g || r("isStringNullOrEmpty")(b)) {
        var R;
        n[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = o("WAWebBizCtwaAGMUtils").getAdImgError()), (n[7] = R))
          : (R = n[7]);
        var L = R,
          E = s
            ? p.errorIconInThumbnailBubbleOut
            : p.errorIconInThumbnailBubbleIn,
          k = _ && p.errorInThumbnail,
          I;
        n[8] !== k || n[9] !== d
          ? ((I = [p.errorContainer, k, d]),
            (n[8] = k),
            (n[9] = d),
            (n[10] = I))
          : (I = n[10]);
        var T;
        n[11] !== _ || n[12] !== E
          ? ((T = _
              ? u.jsx(o("WAWebWarningIcon.react").WarningIcon, { xstyle: E })
              : u.jsxs(u.Fragment, {
                  children: [
                    u.jsx(
                      o("WAWebWarningOutlineIcon.react").WarningOutlineIcon,
                      { xstyle: p.errorIcon },
                    ),
                    u.jsx("div", {
                      className: "x1iglcvg x1f6kntn x1fc57z9 xf4yft",
                      title: L,
                      children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: L,
                      }),
                    }),
                  ],
                })),
            (n[11] = _),
            (n[12] = E),
            (n[13] = T))
          : (T = n[13]);
        var D;
        return (
          n[14] !== I || n[15] !== T
            ? ((D = u.jsx(o("WAWebFlex.react").FlexColumn, {
                grow: 1,
                shrink: 0,
                basis: "auto",
                align: "center",
                justify: "center",
                gap: 8,
                xstyle: I,
                children: T,
              })),
              (n[14] = I),
              (n[15] = T),
              (n[16] = D))
            : (D = n[16]),
          D
        );
      }
      var x = a != null ? a : "",
        $;
      n[17] !== (l == null ? void 0 : l.thumbnailUrl) || n[18] !== d
        ? (($ = (e || (e = r("stylex"))).props(
            p.image,
            (l == null ? void 0 : l.thumbnailUrl) == null && p.imageBlur,
            d,
          )),
          (n[17] = l == null ? void 0 : l.thumbnailUrl),
          (n[18] = d),
          (n[19] = $))
        : ($ = n[19]);
      var P;
      return (
        n[20] !== S || n[21] !== b || n[22] !== x || n[23] !== $
          ? ((P = u.jsx(
              "img",
              babelHelpers.extends({ onError: S, alt: x }, $, { src: b }),
            )),
            (n[20] = S),
            (n[21] = b),
            (n[22] = x),
            (n[23] = $),
            (n[24] = P))
          : (P = n[24]),
        P
      );
    }
    l.default = _;
  },
  98,
);
