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
      var n = t.alt,
        a = t.businessWid,
        i = t.context,
        l = t.fromMe,
        s = t.isThumbnail,
        c = s === void 0 ? !1 : s,
        _ = t.xstyle,
        f = m(!1),
        g = f[0],
        h = f[1],
        y;
      c &&
        (y = g
          ? o("WAWebBizCtwaContextThumbImage.react").generateThumbSrcFromData(i)
          : o("WAWebBizCtwaContextThumbImage.react").getInitialThumbSource(i));
      var C = c ? y : i == null ? void 0 : i.originalImageUrl,
        b = d(
          function () {
            (i != null &&
              o("WAWebCtwaLogger").logAGMOperation({
                operationType:
                  o("WAWebCtwaLogger").AGM_OPERATION_TYPE
                    .agm_bottom_sheet_image_error,
                fromBusiness: l,
                agmPayload: o("WAWebCtwaAGMUtils").extractAGMPayload(i),
                businessWid: a,
                adId: i == null ? void 0 : i.sourceId,
              }),
              h(!0));
          },
          [a, i, l],
        );
      if (g || r("isStringNullOrEmpty")(C)) {
        var v = o("WAWebBizCtwaAGMUtils").getAdImgError(),
          S = l
            ? p.errorIconInThumbnailBubbleOut
            : p.errorIconInThumbnailBubbleIn;
        return u.jsx(o("WAWebFlex.react").FlexColumn, {
          grow: 1,
          shrink: 0,
          basis: "auto",
          align: "center",
          justify: "center",
          gap: 8,
          xstyle: [p.errorContainer, c && p.errorInThumbnail, _],
          children: c
            ? u.jsx(o("WAWebWarningIcon.react").WarningIcon, { xstyle: S })
            : u.jsxs(u.Fragment, {
                children: [
                  u.jsx(o("WAWebWarningOutlineIcon.react").WarningOutlineIcon, {
                    xstyle: p.errorIcon,
                  }),
                  u.jsx("div", {
                    className: "x1iglcvg x1f6kntn x1fc57z9 xf4yft",
                    title: v,
                    children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: v,
                    }),
                  }),
                ],
              }),
        });
      }
      return u.jsx(
        "img",
        babelHelpers.extends(
          { onError: b, alt: n != null ? n : "" },
          (e || (e = r("stylex"))).props(
            p.image,
            (i == null ? void 0 : i.thumbnailUrl) == null && p.imageBlur,
            _,
          ),
          { src: C },
        ),
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
