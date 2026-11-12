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
    "react-compiler-runtime",
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
        p = l[0],
        _ = l[1],
        f = l[2],
        g = l[3],
        h = (t = g == null ? void 0 : g.length) != null ? t : 0,
        y;
      n[1] !== _ || n[2] !== h
        ? ((y = function () {
            return _ != null && _ !== ""
              ? _
              : h >= 1
                ? s._(
                    /*BTDS*/ '_j{"*":"{stickerCount} stickers","_1":"1 sticker"}',
                    [s._plural(h, "stickerCount")],
                  )
                : "";
          }),
          (n[1] = _),
          (n[2] = h),
          (n[3] = y))
        : (y = n[3]);
      var C = y,
        b;
      n[4] !== a
        ? ((b = function () {
            var e,
              t =
                (e = o("WAWebMsgCollection").MsgCollection.get(a)) == null
                  ? void 0
                  : e.safe();
            t == null ||
              t.type !== o("WAWebMsgType").MSG_TYPE.STICKER_PACK ||
              o(
                "WAWebStickerPackThumbnailDownload",
              ).downloadStickerPackThumbnail(t);
          }),
          (n[4] = a),
          (n[5] = b))
        : (b = n[5]);
      var v = r("useWAWebStableCallback")(b),
        S,
        R;
      (n[6] !== v
        ? ((S = function () {
            v();
          }),
          (R = [v]),
          (n[6] = v),
          (n[7] = S),
          (n[8] = R))
        : ((S = n[7]), (R = n[8])),
        c(S, R));
      var L = r("WAWebL10N").isRTL() ? "rtl" : "ltr",
        E;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = "xcbkimw x1n2onr6 x1dmp6jm"), (n[9] = E))
        : (E = n[9]);
      var k;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = u.jsx(
            "div",
            {
              children: u.jsx(r("WDSIconIcImage.react"), {
                height: 42,
                testid: "image",
                width: 42,
              }),
            },
            "default",
          )),
          (n[10] = k))
        : (k = n[10]);
      var I;
      n[11] !== a
        ? ((I = u.jsx(o("WAWebFlex.react").FlexItem, {
            shrink: 0,
            grow: 0,
            align: "center",
            children: u.jsx(r("WAWebMediaThumbnail.react"), {
              msgKey: a,
              containerClassName: E,
              thumbnailPlaceholder: k,
            }),
          })),
          (n[11] = a),
          (n[12] = I))
        : (I = n[12]);
      var T;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = [
            m.text,
            o("WDSMargins.stylex").wdsMargins.marginVer0,
            r("WAWebL10N").isRTL() && m.textRTL,
            d.marginInline10,
            m.fixedTextHeight,
            d.paddingInlineEnd10,
            d.paddingBlock6,
          ]),
          (n[13] = T))
        : (T = n[13]);
      var D;
      n[14] !== f
        ? ((D = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(r("WAWebMediaLinkPreviewTitle.react"), {
              isBotPluginLink: !1,
              isCompose: !1,
              isStatus: !1,
              title: f,
              titleDir: L,
              titleDirMismatch: !1,
            }),
          })),
          (n[14] = f),
          (n[15] = D))
        : (D = n[15]);
      var x;
      n[16] !== C ? ((x = C()), (n[16] = C), (n[17] = x)) : (x = n[17]);
      var $;
      n[18] !== x
        ? (($ = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(r("WAWebMediaLinkPreviewDescription.react"), {
              isCompose: !1,
              isComposeHQPreview: !1,
              isFullPreview: !1,
              isHighQualityLayout: !1,
              isStatus: !1,
              useTextLimit: !1,
              children: x,
            }),
          })),
          (n[18] = x),
          (n[19] = $))
        : ($ = n[19]);
      var P;
      n[20] !== D || n[21] !== $
        ? ((P = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "start",
            grow: 1,
            justify: "center",
            xstyle: T,
            children: [D, $],
          })),
          (n[20] = D),
          (n[21] = $),
          (n[22] = P))
        : (P = n[22]);
      var N;
      n[23] !== P || n[24] !== I
        ? ((N = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: d.paddingInlineEnd14,
            align: "start",
            children: [I, P],
          })),
          (n[23] = P),
          (n[24] = I),
          (n[25] = N))
        : (N = n[25]);
      var M;
      return (
        n[26] !== p || n[27] !== N
          ? ((M = u.jsx(r("WAWebMessageDeeperContainer.react"), {
              xstyle: m.deepContainer,
              outgoingMsg: p,
              children: N,
            })),
            (n[26] = p),
            (n[27] = N),
            (n[28] = M))
          : (M = n[28]),
        M
      );
    }
    l.default = p;
  },
  226,
);
