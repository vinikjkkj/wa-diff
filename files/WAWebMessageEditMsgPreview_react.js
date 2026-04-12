__d(
  "WAWebMessageEditMsgPreview.react",
  [
    "WAWebChatPreferenceCollection",
    "WAWebDisplayType",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebMediaDocument.react",
    "WAWebMediaVideo.react",
    "WAWebMessageGif.react",
    "WAWebMessagePicture.react",
    "WAWebMessageText.react",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebMsgPreview.react",
    "WAWebMsgType",
    "WAWebQuotedMsg.react",
    "WAWebQuotedMsgModelUtils",
    "WAWebWrapperDisplayTypeContext",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 100,
      c = 70,
      d = c - u / 2,
      m = "x7xn9x5-B",
      p = "xjqn293-B",
      _ = {
        wrapper: {
          backgroundColor: "x1g5lz36",
          borderStartStartRadius: "xp43t2z",
          borderStartEndRadius: "x5j5mwf",
          borderEndEndRadius: "xptal55",
          borderEndStartRadius: "xjodkme",
          maxWidth: "x1gfrnbc",
          minWidth: "xt7fyls",
          zIndex: "x1ja2u2z",
          position: "x1n2onr6",
          $$css: !0,
        },
        previewContainer: { maxHeight: "x7ab17h", $$css: !0 },
        previewBody: {
          animationDuration: "xw8ag78",
          animationFillMode: "x10e4vud",
          animationTimingFunction: null,
          $$css: !0,
        },
        pushUp: {
          animationName: "x1uej8s0",
          paddingTop: "x1yfp7c2",
          paddingBottom: "xo5ses6",
          marginBottom: "xat24cr",
          $$css: !0,
        },
        pushDown: {
          animationName: "x131uzpj",
          paddingTop: "x1cnzs8",
          paddingBottom: "xx6bls6",
          marginBottom: "xiv7p99",
          $$css: !0,
        },
        paddingHoriz28: {
          paddingInlineStart: "xdylf7x",
          paddingInlineEnd: "x5s3kwk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function f(e) {
      var t = e.linkPreviewVisible,
        n = e.msg,
        a = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebMsgGetters").getT,
          o("WAWebFrontendMsgGetters").getSenderObj,
        ]),
        i = a[0],
        l = a[1],
        u = o("WAWebFrontendMsgGetters").getChat(n.unsafe()),
        c = n.safe(),
        d = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(n.unsafe()),
        m;
      d &&
        (m = s.jsx(
          r("WAWebQuotedMsg.react"),
          {
            msg: d,
            rootMsg: c,
            displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
            theme: "editing",
            chat: u,
            t: i,
          },
          d.id.toString(),
        ));
      var p;
      switch (c.type) {
        case o("WAWebMsgType").MSG_TYPE.CHAT:
          p = s.jsx(r("WAWebMessageText.react"), {
            msg: c,
            contact: l,
            displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
            quotedMsg: m,
            trusted: o("WAWebMsgModelPropUtils").isTrusted(c.unsafe()),
            displayAuthor: !1,
          });
          break;
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          p = s.jsx(o("WAWebMessagePicture.react").ImageMessage, {
            msg: c,
            displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
            quotedMsg: m,
            trusted: o("WAWebMsgModelPropUtils").isTrusted(c.unsafe()),
            displayAuthor: !1,
            mediaData: c.mediaData,
          });
          break;
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          c.isGif === !0
            ? (p = s.jsx(o("WAWebMessageGif.react").WrappedGif, {
                msg: c,
                displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
                quotedMsg: m,
                trusted: o("WAWebMsgModelPropUtils").isTrusted(c.unsafe()),
                displayAuthor: !1,
                mediaData: c.mediaData,
              }))
            : (p = s.jsx(r("WAWebMediaVideo.react"), {
                msg: c,
                displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
                quotedMsg: m,
                trusted: o("WAWebMsgModelPropUtils").isTrusted(c.unsafe()),
                displayAuthor: !1,
              }));
          break;
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          p = s.jsx(r("WAWebMediaDocument.react"), {
            msg: c,
            displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
            quotedMsg: m,
            trusted: o("WAWebMsgModelPropUtils").isTrusted(c.unsafe()),
            displayAuthor: !1,
          });
          break;
      }
      return p
        ? s.jsx(r("WAWebMsgPreview.react"), {
            chatPreference: r("WAWebChatPreferenceCollection").assertGet(
              "defaultPreference",
            ),
            containerXstyle: _.previewContainer,
            bodyXstyle: [
              _.previewBody,
              _.paddingHoriz28,
              t && _.pushUp,
              !t && _.pushDown,
            ],
            children: s.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              children: s.jsx(r("WAWebFlexItem.react"), {
                xstyle: _.wrapper,
                grow: 0,
                children: s.jsx("div", {
                  "data-nohandle": !0,
                  testid: void 0,
                  children: s.jsx(
                    r("WAWebWrapperDisplayTypeContext").Provider,
                    {
                      value: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
                      children: p,
                    },
                  ),
                }),
              }),
            }),
          })
        : null;
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
