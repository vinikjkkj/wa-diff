__d(
  "WAWebStickerPackPreview",
  [
    "fbt",
    "WALogger",
    "WAWebCanvasUtils",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebImageIcon.react",
    "WAWebL10N",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaLinkPreviewDescription.react",
    "WAWebMediaLinkPreviewTitle.react",
    "WAWebMediaOpaqueData",
    "WAWebMediaThumbnail.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "WAWebStickerPackConstants",
    "WAWebStickerPackUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "WDSMargins.stylex",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = {
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
      p = {
        deepContainer: { cursor: "xmper1u", $$css: !0 },
        text: { position: "x1n2onr6", top: "x1qiirwl", $$css: !0 },
        textRTL: { textAlign: "xp4054r", $$css: !0 },
        fixedTextHeight: { height: "xdiz9cm", $$css: !0 },
      };
    function _(e) {
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
      d(function () {
        var t = e.msg;
        r("isStringNullOrEmpty")(t.thumbnailDirectPath)
          ? f(t)
          : r("WAWebMediaDownloadMmsThumbnail")({
              msg: o("WAWebStateUtils").unproxy(t),
              chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
              isPreload: !1,
            });
      }, []);
      var l = r("WAWebL10N").isRTL() ? "rtl" : "ltr";
      return c.jsx(r("WAWebMessageDeeperContainer.react"), {
        xstyle: p.deepContainer,
        outgoingMsg: n,
        children: c.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: m.paddingInlineEnd14,
          align: "start",
          children: [
            c.jsx(o("WAWebFlex.react").FlexItem, {
              shrink: 0,
              grow: 0,
              align: "center",
              children: c.jsx(r("WAWebMediaThumbnail.react"), {
                msg: e.msg.unsafe(),
                containerClassName: "xcbkimw x1n2onr6 x1dmp6jm",
                thumbnailPlaceholder: c.jsx(
                  "div",
                  { children: c.jsx(o("WAWebImageIcon.react").ImageIcon, {}) },
                  "default",
                ),
              }),
            }),
            c.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "start",
              grow: 1,
              justify: "center",
              xstyle: [
                p.text,
                o("WDSMargins.stylex").wdsMargins.marginVer0,
                r("WAWebL10N").isRTL() && p.textRTL,
                m.marginInline10,
                p.fixedTextHeight,
                m.paddingInlineEnd10,
                m.paddingBlock6,
              ],
              children: [
                c.jsx(o("WAWebFlex.react").FlexItem, {
                  children: c.jsx(r("WAWebMediaLinkPreviewTitle.react"), {
                    isBotPluginLink: !1,
                    isCompose: !1,
                    isStatus: !1,
                    title: e.msg.filename,
                    titleDir: l,
                    titleDirMismatch: !1,
                  }),
                }),
                c.jsx(o("WAWebFlex.react").FlexItem, {
                  children: c.jsx(r("WAWebMediaLinkPreviewDescription.react"), {
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
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            yield t.downloadMedia({
              downloadEvenIfExpensive: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .DOCUMENT_DOWNLOAD,
              isUserInitiated: !1,
            });
            var n = o("WAWebStateUtils").unproxy(t).mediaObject;
            if (n == null) return;
            var a = o("WAWebStateUtils").unproxy(t.unsafe()).mediaData
                .mediaBlob,
              i = yield o("WAWebStickerPackUtils").decompressStickerPackMedia(
                a,
                t,
              ),
              l = yield o("WAWebStickerPackUtils").generateStickerGridThumbnail(
                i,
              ),
              s = yield o("WAWebCanvasUtils").canvasToBlob(l, "image/png");
            n.consolidate({
              fullPreviewData: yield r("WAWebMediaOpaqueData").createFromData(
                s,
                "image/png",
              ),
              fullPreviewSize: {
                height: o("WAWebStickerPackConstants").THUMBNAIL_WIDTH,
                width: o("WAWebStickerPackConstants").THUMBNAIL_LENGTH,
              },
            });
          } catch (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "StickerPackPreview: failed to generate grid thumbnail",
                ])),
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    l.default = _;
  },
  226,
);
