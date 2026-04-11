__d(
  "WAWebDocMsgIconAndName.react",
  [
    "fbt",
    "WAWebClickable.react",
    "WAWebDocumentFileIconContained.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebL10nFilesize",
    "WAWebMediaDocumentUtils",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubLogger",
    "WAWebMsgType",
    "WAWebWamEnumActionCode",
    "WDSText.react",
    "react",
    "useWAWebDocumentMediaType",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        container: { display: "xjp7ctv", $$css: !0 },
        text: { verticalAlign: "xxymvpz", $$css: !0 },
        capitalised: { textTransform: "xn80e1m", $$css: !0 },
      };
    function d(e) {
      var t = e.msg,
        n = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        a = n.searchQuery,
        i = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebFrontendMsgGetters").getRtl,
        ]),
        l = i[0],
        d = o("useWAWebModelValues").useModelValues(t.mediaData, [
          "filename",
          "mimetype",
        ]),
        p = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        _ = p.isSelectMode,
        f = o("WAWebMediaDocumentUtils").useMediaAction(t),
        g = f[0],
        h = r("useWAWebDocumentMediaType")({
          mimetype: d.mimetype,
          filename: d.filename,
        }),
        y = t.safe();
      if (y.type !== o("WAWebMsgType").MSG_TYPE.DOCUMENT) return null;
      var C = d.filename || s._(/*BTDS*/ "Untitled"),
        b = o("WAWebFormatConfiguration").SearchName({ terms: [a] });
      return u.jsx(o("WAWebClickable.react").Clickable, {
        title: g.title,
        onClick: _
          ? void 0
          : function (e) {
              (g.onClick == null || g.onClick(e),
                o("WAWebMediaHubLogger").logMediaHubAction({
                  action: o("WAWebWamEnumActionCode").ACTION_CODE.DOWNLOAD,
                }));
            },
        xstyle: c.container,
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          gap: 8,
          children: [
            u.jsx(r("WAWebDocumentFileIconContained.react"), { mediaData: d }),
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              gap: 2,
              grow: 1,
              shrink: 0,
              basis: 0,
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body2Emphasized",
                  maxLines: 1,
                  colorName: "contentDefault",
                  children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    xstyle: c.text,
                    formatters: b,
                    text: C,
                    dirMismatch: l !== r("WAWebL10N").isRTL(),
                    direction: "auto",
                    breakWord: !0,
                  }),
                }),
                u.jsxs(r("WDSText.react"), {
                  type: "Body3",
                  xstyle: c.capitalised,
                  colorName: "contentDeemphasized",
                  children: [
                    u.jsx(m, { msg: t }),
                    h.ext != null && " \u2022 " + h.ext.toUpperCase(),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      "use no forget";
      var t,
        n = e.msg,
        r = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      return (
        o("useWAWebListener").useListener(
          n.mediaData,
          "change:mediaStage change:filehash",
          function () {
            r();
          },
        ),
        o("WAWebL10nFilesize").getL10nFilesize(
          (t = n.mediaData.size) != null ? t : 0,
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
