__d(
  "WAWebBizBroadcastPreviewMessageBubble.react",
  [
    "fbt",
    "WAWebBizBroadcastGenAIGating",
    "WAWebBizBroadcastTextFormatUtils",
    "WAWebBizBroadcastsDocumentPreview.react",
    "WAWebBizBroadcastsFileTypeValidator",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebTailOutIcon.react",
    "WDSFontTokenStyles",
    "WDSIconIcCall.react",
    "WDSIconIcLink.react",
    "WDSIconIcReply.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 280,
      d = {
        buttonContainer: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          columnGap: "x1trrmfo",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          width: "x1dz1jew",
          $$css: !0,
        },
        container: {
          minWidth: "xgqtt45",
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          $$css: !0,
        },
        tail: {
          alignSelf: "xpvyfi4",
          color: "x1fa4crm",
          marginInlineStart: "x1hb08if",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.attachmentData,
        a = e.buttonData,
        i = e.message,
        l = n == null ? void 0 : n.previewUrl,
        s = n == null ? void 0 : n.mimetype,
        c;
      t[0] !== l || t[1] !== s
        ? ((c =
            l != null &&
            s != null &&
            (o("WAWebBizBroadcastsFileTypeValidator").isAttachmentImageMimeType(
              s,
            ) ||
              o(
                "WAWebBizBroadcastsFileTypeValidator",
              ).isAttachmentVideoMimeType(s))),
          (t[0] = l),
          (t[1] = s),
          (t[2] = c))
        : (c = t[2]);
      var m = c,
        g;
      t[3] !== i
        ? ((g = i != null && i.trim() !== ""), (t[3] = i), (t[4] = g))
        : (g = t[4]);
      var h = g,
        y;
      t[5] !== a
        ? ((y = a != null && a.displayText.trim() !== ""),
          (t[5] = a),
          (t[6] = y))
        : (y = t[6]);
      var C = y,
        b;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = {
            className: "x1g5lz36 xlr9sxt xwd4zgb xq8v1ta x17un8ov x1jkqq1h",
          }),
          (t[7] = b))
        : (b = t[7]);
      var v;
      t[8] !== n || t[9] !== m || t[10] !== l || t[11] !== s
        ? ((v = m
            ? u.jsx(p, { mediaPreviewUrl: l, mimetype: s })
            : n != null &&
              u.jsx(r("WAWebBizBroadcastsDocumentPreview.react"), {
                documentData: n,
              })),
          (t[8] = n),
          (t[9] = m),
          (t[10] = l),
          (t[11] = s),
          (t[12] = v))
        : (v = t[12]);
      var S;
      t[13] !== h || t[14] !== i
        ? ((S = h && u.jsx(_, { message: i })),
          (t[13] = h),
          (t[14] = i),
          (t[15] = S))
        : (S = t[15]);
      var R;
      t[16] !== a || t[17] !== C
        ? ((R = C && a != null && u.jsx(f, { buttonData: a })),
          (t[16] = a),
          (t[17] = C),
          (t[18] = R))
        : (R = t[18]);
      var L;
      t[19] !== v || t[20] !== S || t[21] !== R
        ? ((L = u.jsxs(
            "div",
            babelHelpers.extends({}, b, { children: [v, S, R] }),
          )),
          (t[19] = v),
          (t[20] = S),
          (t[21] = R),
          (t[22] = L))
        : (L = t[22]);
      var E;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = u.jsx(o("WAWebTailOutIcon.react").TailOutIcon, {
            iconXstyle: d.tail,
            width: 8,
            height: 13,
          })),
          (t[23] = E))
        : (E = t[23]);
      var k;
      return (
        t[24] !== L
          ? ((k = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: d.container,
              justify: "center",
              align: "start",
              children: [L, E],
            })),
            (t[24] = L),
            (t[25] = k))
          : (k = t[25]),
        k
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.mediaPreviewUrl,
        r = e.mimetype,
        a = n === void 0 ? null : n,
        i = r === void 0 ? null : r;
      if (a == null) return null;
      var l;
      t[0] !== i
        ? ((l =
            i != null &&
            o("WAWebBizBroadcastsFileTypeValidator").isAttachmentVideoMimeType(
              i,
            )),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var c = l,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = {
            className:
              "xyi3aci xwf5gio x1p453bz x1suzm8a xav9cv8 x7g7pl8 x4tpdpg x1wbi8v6 x6ikm8r x10wlt62 xh8yej3",
          }),
          (t[2] = d))
        : (d = t[2]);
      var m;
      return (
        t[3] !== c || t[4] !== a
          ? ((m = u.jsx(
              "div",
              babelHelpers.extends({}, d, {
                children: c
                  ? u.jsx("video", {
                      className: "x1lliihq xt7dq6l xl1xv1r xh8yej3",
                      src: a,
                      muted: !0,
                      playsInline: !0,
                      "aria-label": s._(/*BTDS*/ "Video preview"),
                    })
                  : u.jsx("img", {
                      className: "x1lliihq xt7dq6l xl1xv1r xh8yej3",
                      src: a,
                      alt: s._(/*BTDS*/ "Media preview"),
                    }),
              }),
            )),
            (t[3] = c),
            (t[4] = a),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.message,
        r = n === void 0 ? null : n;
      if (r == null || r.trim() === "") return null;
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            className: "x1mzt3pk x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x126k92a",
          }),
          (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== r
          ? ((i = u.jsx(
              "div",
              babelHelpers.extends({}, a, {
                children: o("WAWebBizBroadcastGenAIGating").isGenAITextEnabled()
                  ? u.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: r,
                      formatters: o("WAWebBizBroadcastTextFormatUtils")
                        .AI_TEXT_FORMATTERS,
                    })
                  : u.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: r,
                      xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
                      selectable: !1,
                    }),
              }),
            )),
            (t[1] = r),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.buttonData,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "x2lah0s x1gxa6cn" }), (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] !== n.type
        ? ((i =
            n.type === "quick_reply"
              ? u.jsx(r("WDSIconIcReply.react"), {
                  height: 16,
                  width: 16,
                  colorName: "contentExternalLink",
                })
              : n.type === "cta_call"
                ? u.jsx(r("WDSIconIcCall.react"), {
                    height: 16,
                    width: 16,
                    colorName: "contentExternalLink",
                  })
                : n.type === "cta_url"
                  ? u.jsx(r("WDSIconIcLink.react"), {
                      height: 16,
                      width: 16,
                      colorName: "contentExternalLink",
                    })
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          n.type,
                      );
                    })()),
          (t[1] = n.type),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== i
        ? ((l = u.jsx("div", babelHelpers.extends({}, a, { children: i }))),
          (t[3] = i),
          (t[4] = l))
        : (l = t[4]);
      var s;
      t[5] !== n.displayText
        ? ((s = u.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentExternalLink",
            maxLines: 1,
            children: n.displayText,
          })),
          (t[5] = n.displayText),
          (t[6] = s))
        : (s = t[6]);
      var c;
      return (
        t[7] !== l || t[8] !== s
          ? ((c = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              xstyle: d.buttonContainer,
              children: [l, s],
            })),
            (t[7] = l),
            (t[8] = s),
            (t[9] = c))
          : (c = t[9]),
        c
      );
    }
    l.default = m;
  },
  226,
);
