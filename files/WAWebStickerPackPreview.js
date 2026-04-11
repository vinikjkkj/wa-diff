__d(
  "WAWebStickerPackPreview",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebImageIcon.react",
    "WAWebL10N",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaLinkPreviewDescription.react",
    "WAWebMediaLinkPreviewTitle.react",
    "WAWebMediaThumbnail.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "WAWebUISpacing",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        deepContainer: { cursor: "xmper1u", $$css: !0 },
        text: { position: "x1n2onr6", top: "x1qiirwl", $$css: !0 },
        textRTL: { textAlign: "xp4054r", $$css: !0 },
        fixedTextHeight: { height: "xdiz9cm", $$css: !0 },
      };
    function m(e) {
      var t = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          o("WAWebMsgGetters").getIsSentByMe,
        ]),
        n = t[0],
        a = e.msg.stickers.length;
      function i() {
        return e.msg.description != null && e.msg.description !== ""
          ? e.msg.description
          : a >= 1
            ? s._(
                /*BTDS*/ '_j{"*":"{stickerCount} stickers","_1":"1 sticker"}',
                [s._plural(a, "stickerCount")],
              )
            : "";
      }
      c(function () {
        r("WAWebMediaDownloadMmsThumbnail")({
          msg: o("WAWebStateUtils").unproxy(e.msg),
          chat: o("WAWebFrontendMsgGetters").getChat(e.msg.unsafe()),
          isPreload: !1,
        });
      }, []);
      var l = r("WAWebL10N").isRTL() ? "rtl" : "ltr";
      return u.jsx(r("WAWebMessageDeeperContainer.react"), {
        xstyle: d.deepContainer,
        outgoingMsg: n,
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: o("WAWebUISpacing").uiPadding.end14,
          align: "start",
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              shrink: 0,
              grow: 0,
              align: "center",
              children: u.jsx(r("WAWebMediaThumbnail.react"), {
                msg: e.msg.unsafe(),
                containerClassName: "xcbkimw x1n2onr6 x1dmp6jm",
                thumbnailPlaceholder: u.jsx(
                  "div",
                  { children: u.jsx(o("WAWebImageIcon.react").ImageIcon, {}) },
                  "default",
                ),
              }),
            }),
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "start",
              grow: 1,
              justify: "center",
              xstyle: [
                d.text,
                o("WAWebUISpacing").uiMargin.vert0,
                r("WAWebL10N").isRTL() && d.textRTL,
                o("WAWebUISpacing").uiMargin.horiz10,
                d.fixedTextHeight,
                o("WAWebUISpacing").uiPadding.end10,
                o("WAWebUISpacing").uiPadding.vert6,
              ],
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  children: u.jsx(r("WAWebMediaLinkPreviewTitle.react"), {
                    isBotPluginLink: !1,
                    isCompose: !1,
                    isStatus: !1,
                    title: e.msg.filename,
                    titleDir: l,
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
                    children: i(),
                  }),
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
