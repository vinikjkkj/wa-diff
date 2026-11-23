__d(
  "WAWebStickerPackPreview",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMediaLinkPreviewDescription.react",
    "WAWebMediaLinkPreviewTitle.react",
    "WAWebMediaThumbnail.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMsgCasts",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStickerPackThumbnailDownload",
    "WDSIconIcImage.react",
    "WDSMargins.stylex",
    "react",
    "useWAWebMsgValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        paddingInlineEnd14: { paddingInlineEnd: "x1pic42t", $$css: !0 },
        marginInline10: {
          marginInlineStart: "x1hm9lzh",
          marginInlineEnd: "x1sa5p1d",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        paddingInlineEnd10: { paddingInlineEnd: "x2vl965", $$css: !0 },
        paddingBlock6: {
          paddingTop: "x1yrsyyn",
          paddingBottom: "x10b6aqq",
          $$css: !0,
        },
      },
      m = {
        deepContainer: { cursor: "xmper1u", $$css: !0 },
        text: { position: "x1n2onr6", top: "x1qiirwl", $$css: !0 },
        textRTL: { textAlign: "xp4054r", $$css: !0 },
        fixedTextHeight: { height: "xdiz9cm", $$css: !0 },
      };
    function p(e) {
      var t,
        n = e.msgKey,
        a = o("useWAWebMsgValues").useMsgValues(
          n,
          o("WAWebMsgCasts").castToStickerPackMsg,
          [
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getDescription,
            o("WAWebMsgGetters").getFilename,
            o("WAWebFrontendMsgGetters").getStickers,
          ],
        ),
        i = a[0],
        l = a[1],
        p = a[2],
        _ = a[3],
        f = (t = _ == null ? void 0 : _.length) != null ? t : 0;
      function g() {
        return l != null && l !== ""
          ? l
          : f >= 1
            ? s._(/*BTDS*/ "", [s._plural(f, "stickerCount")])
            : "";
      }
      var h = r("useWAWebStableCallback")(function () {
        var e,
          t =
            (e = o("WAWebMsgCollection").MsgCollection.get(n)) == null
              ? void 0
              : e.safe();
        t == null ||
          t.type !== o("WAWebMsgType").MSG_TYPE.STICKER_PACK ||
          o("WAWebStickerPackThumbnailDownload").downloadStickerPackThumbnail(
            t,
          );
      });
      c(
        function () {
          h();
        },
        [h],
      );
      var y = r("WAWebL10N").isRTL() ? "rtl" : "ltr";
      return u.jsx(r("WAWebMessageDeeperContainer.react"), {
        xstyle: m.deepContainer,
        outgoingMsg: i,
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: d.paddingInlineEnd14,
          align: "start",
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              shrink: 0,
              grow: 0,
              align: "center",
              children: u.jsx(r("WAWebMediaThumbnail.react"), {
                msgKey: n,
                containerClassName: "xcbkimw x1n2onr6 x1dmp6jm",
                thumbnailPlaceholder: u.jsx(
                  "div",
                  {
                    children: u.jsx(r("WDSIconIcImage.react"), {
                      height: 42,
                      testid: "image",
                      width: 42,
                    }),
                  },
                  "default",
                ),
              }),
            }),
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "start",
              grow: 1,
              justify: "center",
              xstyle: [
                m.text,
                o("WDSMargins.stylex").wdsMargins.marginVer0,
                r("WAWebL10N").isRTL() && m.textRTL,
                d.marginInline10,
                m.fixedTextHeight,
                d.paddingInlineEnd10,
                d.paddingBlock6,
              ],
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  children: u.jsx(r("WAWebMediaLinkPreviewTitle.react"), {
                    isBotPluginLink: !1,
                    isCompose: !1,
                    isStatus: !1,
                    title: p,
                    titleDir: y,
                    titleDirMismatch: !1,
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  children: u.jsx(r("WAWebMediaLinkPreviewDescription.react"), {
                    isCompose: !1,
                    isComposeHQPreview: !1,
                    isFullPreview: !1,
                    isHighQualityLayout: !1,
                    isStatus: !1,
                    useTextLimit: !1,
                    children: g(),
                  }),
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
