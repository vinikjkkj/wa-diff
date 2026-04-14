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
      var t = e.attachmentData,
        n = e.buttonData,
        a = e.message,
        i = t == null ? void 0 : t.previewUrl,
        l = t == null ? void 0 : t.mimetype,
        s =
          i != null &&
          l != null &&
          (o("WAWebBizBroadcastsFileTypeValidator").isAttachmentImageMimeType(
            l,
          ) ||
            o("WAWebBizBroadcastsFileTypeValidator").isAttachmentVideoMimeType(
              l,
            )),
        c = a != null && a.trim() !== "",
        m = n != null && n.displayText.trim() !== "";
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: d.container,
        justify: "center",
        align: "start",
        children: [
          u.jsxs("div", {
            className: "x1g5lz36 xlr9sxt xwd4zgb xq8v1ta x17un8ov x1jkqq1h",
            children: [
              s
                ? u.jsx(p, { mediaPreviewUrl: i, mimetype: l })
                : t != null &&
                  u.jsx(r("WAWebBizBroadcastsDocumentPreview.react"), {
                    documentData: t,
                  }),
              c && u.jsx(_, { message: a }),
              m && n != null && u.jsx(f, { buttonData: n }),
            ],
          }),
          u.jsx(o("WAWebTailOutIcon.react").TailOutIcon, {
            iconXstyle: d.tail,
            width: 8,
            height: 13,
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.mediaPreviewUrl,
        n = t === void 0 ? null : t,
        r = e.mimetype,
        a = r === void 0 ? null : r;
      if (n == null) return null;
      var i =
        a != null &&
        o("WAWebBizBroadcastsFileTypeValidator").isAttachmentVideoMimeType(a);
      return u.jsx("div", {
        className:
          "xyi3aci xwf5gio x1p453bz x1suzm8a xav9cv8 x7g7pl8 x4tpdpg x1wbi8v6 x6ikm8r x10wlt62 xh8yej3",
        children: i
          ? u.jsx("video", {
              className: "x1lliihq xt7dq6l xl1xv1r xh8yej3",
              src: n,
              muted: !0,
              playsInline: !0,
              "aria-label": s._(/*BTDS*/ "Video preview"),
            })
          : u.jsx("img", {
              className: "x1lliihq xt7dq6l xl1xv1r xh8yej3",
              src: n,
              alt: s._(/*BTDS*/ "Media preview"),
            }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.message,
        n = t === void 0 ? null : t;
      return n == null || n.trim() === ""
        ? null
        : u.jsx("div", {
            className: "x1mzt3pk x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x126k92a",
            children: o("WAWebBizBroadcastGenAIGating").isGenAITextEnabled()
              ? u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: n,
                  formatters: o("WAWebBizBroadcastTextFormatUtils")
                    .AI_TEXT_FORMATTERS,
                })
              : u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: n,
                  xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
                  selectable: !1,
                }),
          });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.buttonData;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        xstyle: d.buttonContainer,
        children: [
          u.jsx("div", {
            className: "x2lah0s x1gxa6cn",
            children:
              t.type === "quick_reply"
                ? u.jsx(r("WDSIconIcReply.react"), {
                    height: 16,
                    width: 16,
                    colorName: "contentExternalLink",
                  })
                : t.type === "cta_call"
                  ? u.jsx(r("WDSIconIcCall.react"), {
                      height: 16,
                      width: 16,
                      colorName: "contentExternalLink",
                    })
                  : t.type === "cta_url"
                    ? u.jsx(r("WDSIconIcLink.react"), {
                        height: 16,
                        width: 16,
                        colorName: "contentExternalLink",
                      })
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            t.type,
                        );
                      })(),
          }),
          u.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentExternalLink",
            maxLines: 1,
            children: t.displayText,
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
