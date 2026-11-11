__d(
  "WAWebStickerPackPreview",
  [
    "fbt",
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebCanvasUtils",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaDownloadService",
    "WAWebMediaLinkPreviewDescription.react",
    "WAWebMediaLinkPreviewTitle.react",
    "WAWebMediaOpaqueData",
    "WAWebMediaThumbnail.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMsgCasts",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStateUtils",
    "WAWebStickerPackConstants",
    "WAWebStickerPackUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "WDSIconIcImage.react",
    "WDSMargins.stylex",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
    "useWAWebStableCallback",
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
      var t,
        n = o("react-compiler-runtime").c(29),
        a = e.msgKey,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getDescription,
            o("WAWebMsgGetters").getFilename,
            o("WAWebFrontendMsgGetters").getStickers,
          ]),
          (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebMsgValues").useMsgValues(
          a,
          o("WAWebMsgCasts").castToStickerPackMsg,
          i,
        ),
        u = l[0],
        _ = l[1],
        g = l[2],
        h = l[3],
        y = (t = h == null ? void 0 : h.length) != null ? t : 0,
        C;
      n[1] !== _ || n[2] !== y
        ? ((C = function () {
            return _ != null && _ !== ""
              ? _
              : y >= 1
                ? s._(
                    /*BTDS*/ '_j{"*":"{stickerCount} stickers","_1":"1 sticker"}',
                    [s._plural(y, "stickerCount")],
                  )
                : "";
          }),
          (n[1] = _),
          (n[2] = y),
          (n[3] = C))
        : (C = n[3]);
      var b = C,
        v;
      n[4] !== a
        ? ((v = function () {
            var e,
              t =
                (e = o("WAWebMsgCollection").MsgCollection.get(a)) == null
                  ? void 0
                  : e.safe();
            t == null ||
              t.type !== o("WAWebMsgType").MSG_TYPE.STICKER_PACK ||
              (r("isStringNullOrEmpty")(t.thumbnailDirectPath)
                ? f(t)
                : (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                    ? o("WAWebBackendRuntime").runtime(
                        o("WAWebMediaDownloadService").MediaDownloadService,
                      ).downloadMmsThumbnail
                    : r("WAWebMediaDownloadMmsThumbnail"))({
                    msg: o("WAWebStateUtils").unproxy(t),
                    chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
                    isPreload: !1,
                  }));
          }),
          (n[4] = a),
          (n[5] = v))
        : (v = n[5]);
      var S = r("useWAWebStableCallback")(v),
        R,
        L;
      (n[6] !== S
        ? ((R = function () {
            S();
          }),
          (L = [S]),
          (n[6] = S),
          (n[7] = R),
          (n[8] = L))
        : ((R = n[7]), (L = n[8])),
        d(R, L));
      var E = r("WAWebL10N").isRTL() ? "rtl" : "ltr",
        k;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = "xcbkimw x1n2onr6 x1dmp6jm"), (n[9] = k))
        : (k = n[9]);
      var I;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = c.jsx(
            "div",
            {
              children: c.jsx(r("WDSIconIcImage.react"), {
                height: 42,
                testid: "image",
                width: 42,
              }),
            },
            "default",
          )),
          (n[10] = I))
        : (I = n[10]);
      var T;
      n[11] !== a
        ? ((T = c.jsx(o("WAWebFlex.react").FlexItem, {
            shrink: 0,
            grow: 0,
            align: "center",
            children: c.jsx(r("WAWebMediaThumbnail.react"), {
              msgKey: a,
              containerClassName: k,
              thumbnailPlaceholder: I,
            }),
          })),
          (n[11] = a),
          (n[12] = T))
        : (T = n[12]);
      var D;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = [
            p.text,
            o("WDSMargins.stylex").wdsMargins.marginVer0,
            r("WAWebL10N").isRTL() && p.textRTL,
            m.marginInline10,
            p.fixedTextHeight,
            m.paddingInlineEnd10,
            m.paddingBlock6,
          ]),
          (n[13] = D))
        : (D = n[13]);
      var x;
      n[14] !== g
        ? ((x = c.jsx(o("WAWebFlex.react").FlexItem, {
            children: c.jsx(r("WAWebMediaLinkPreviewTitle.react"), {
              isBotPluginLink: !1,
              isCompose: !1,
              isStatus: !1,
              title: g,
              titleDir: E,
              titleDirMismatch: !1,
            }),
          })),
          (n[14] = g),
          (n[15] = x))
        : (x = n[15]);
      var $;
      n[16] !== b ? (($ = b()), (n[16] = b), (n[17] = $)) : ($ = n[17]);
      var P;
      n[18] !== $
        ? ((P = c.jsx(o("WAWebFlex.react").FlexItem, {
            children: c.jsx(r("WAWebMediaLinkPreviewDescription.react"), {
              isCompose: !1,
              isComposeHQPreview: !1,
              isFullPreview: !1,
              isHighQualityLayout: !1,
              isStatus: !1,
              useTextLimit: !1,
              children: $,
            }),
          })),
          (n[18] = $),
          (n[19] = P))
        : (P = n[19]);
      var N;
      n[20] !== x || n[21] !== P
        ? ((N = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "start",
            grow: 1,
            justify: "center",
            xstyle: D,
            children: [x, P],
          })),
          (n[20] = x),
          (n[21] = P),
          (n[22] = N))
        : (N = n[22]);
      var M;
      n[23] !== N || n[24] !== T
        ? ((M = c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: m.paddingInlineEnd14,
            align: "start",
            children: [T, N],
          })),
          (n[23] = N),
          (n[24] = T),
          (n[25] = M))
        : (M = n[25]);
      var w;
      return (
        n[26] !== u || n[27] !== M
          ? ((w = c.jsx(r("WAWebMessageDeeperContainer.react"), {
              xstyle: p.deepContainer,
              outgoingMsg: u,
              children: M,
            })),
            (n[26] = u),
            (n[27] = M),
            (n[28] = w))
          : (w = n[28]),
        w
      );
    }
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
