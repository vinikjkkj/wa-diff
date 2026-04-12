__d(
  "WAWebPinnedMessagesBannerBody.react",
  [
    "WAFilteredCatch",
    "WALogger",
    "WAReplaceRepeatingWhitespace",
    "WAWebABProps",
    "WAWebBaseCollection",
    "WAWebChatMsgSymbol.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFormatMsgText",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMediaMsgPreview.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebName.react",
    "WAWebPinInChatCollection",
    "WAWebText.react",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "useWAWebAsync",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m(t) {
      var n,
        a = t.pinInChat,
        i = r("useWAWebAsync")(
          function () {
            return o("WAWebMsgCollection")
              .MsgCollection.hydrateOrGetMessages([a.parentMsgKey.toString()])
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBaseCollection").CollectionSilentQueryError,
                  function (t) {
                    return (
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Removing pin in chat with id '",
                            "': ",
                            "",
                          ])),
                        a.id,
                        t.message,
                      ),
                      o("WAWebPinInChatCollection").PinInChatCollection.remove(
                        a.id,
                      ),
                      []
                    );
                  },
                ),
              );
          },
          [a],
        );
      if (i.loading) return null;
      if (i.error)
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to hydrate pin in chat parent message with id '",
                "': ",
                "",
              ])),
            a.parentMsgKey,
            i.error.message,
          ),
          null
        );
      var l = (n = i.value) == null ? void 0 : n[0];
      return l != null && c.jsx(_, { msg: l });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = {
      text: {
        fontSize: "x1f6kntn",
        lineHeight: "x1fc57z9",
        display: "x1rg5ohu",
        color: "xhslqc4",
        $$css: !0,
      },
      content: {
        height: "x5yr21d",
        whiteSpace: "xuxw1ft",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        textOverflow: "xlyipyv",
        $$css: !0,
      },
      mediaPreview: {
        minWidth: "x900493",
        width: "x1useyqa",
        height: "xsdox4t",
        $$css: !0,
      },
      authorName: { whiteSpace: "xuxw1ft", $$css: !0 },
      paddingEnd28: { paddingInlineEnd: "x5s3kwk", $$css: !0 },
    };
    function _(e) {
      var t,
        n = e.msg,
        a = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebFrontendMsgGetters").getRtl,
          (t = o("WAWebMsgGetters")).getIsGroupMsg,
          t.getLatestEditMsgKey,
          t.getAck,
          t.getType,
        ]),
        i = a[0],
        l = a[1],
        s = a[2],
        u = a[3],
        d = a[4],
        m = a[5],
        _ = a[6];
      o("useWAWebListener").useListener(n, "change:msgKey", function (e) {
        var t = e.oldKey;
        o(
          "WAWebPinInChatCollection",
        ).PinInChatCollection.deleteByParentMessageKey(t);
      });
      var g = [];
      (u &&
        g.push(
          c.jsxs("div", {
            className: "x78zum5 x11lfxj5",
            children: [
              c.jsx(
                o("WAWebText.react").WAWebTextMuted,
                {
                  color: "wdsContentDeemphasized",
                  weight: "semibold",
                  children: c.jsx(o("WAWebName.react").ContactName, {
                    xstyle: p.authorName,
                    contact: i,
                    useShortName: !0,
                  }),
                },
                i.id.toString(),
              ),
              c.jsx(o("WAWebText.react").WAWebTextMuted, { children: ":" }),
            ],
          }),
        ),
        o("WAWebMsgModelPropUtils").hasSymbol(n.unsafe()) &&
          g.push(
            c.jsx(
              r("WAWebChatMsgSymbol.react"),
              { msg: n.unsafe() },
              "msg-symbol",
            ),
          ));
      var h = r("WAWebFormatMsgText")({
        msg: n,
        options: { unformat: !1 },
      }).toString();
      return (
        g.push(
          c.jsx(
            o("WAWebEmojiText.react").EmojiText,
            {
              xstyle: [p.text, p.paddingEnd28],
              direction: l,
              text: r("WAReplaceRepeatingWhitespace")(h, !0),
              dirMismatch: s !== r("WAWebL10N").isRTL(),
              ellipsify: !0,
              inlineblock: !0,
              formatters: o("WAWebFormatConfiguration").InlineMessage({
                mentions: n.mentionMap(),
                groupMentions: n.groupMentionMap(),
              }),
            },
            "text",
          ),
        ),
        o("WAWebMediaMsgPreview.react").isMediaTypeWithImage(_) &&
          o("WAWebABProps").getABPropConfigValue(
            "pinned_messages_m2_image_thumbnail",
          ) &&
          g.push(c.jsx(f, { msg: n })),
        c.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "pin-message",
          children: c.jsx(
            o("WAWebFlex.react").FlexRow,
            { xstyle: p.content, align: "center", children: g },
            n.id,
          ),
        })
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebFrontendMsgGetters").getMediaData,
        ]),
        r = n[0],
        a = o("useWAWebModelValues").useModelValues(r, [
          "preview",
          "fullPreviewData",
        ]),
        i = a.fullPreviewData,
        l = a.preview;
      d(
        function () {
          t.downloadMedia({
            downloadEvenIfExpensive: !1,
            isUserInitiated: !1,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .OTHER,
          });
        },
        [t],
      );
      var s = l != null || i != null;
      return s
        ? c.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: p.mediaPreview,
            children: c.jsx(
              o("WAWebMediaMsgPreview.react").MediaMsgPreview,
              { mediaData: r },
              "media-preview",
            ),
          })
        : null;
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
