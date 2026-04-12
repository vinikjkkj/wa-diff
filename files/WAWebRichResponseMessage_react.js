__d(
  "WAWebRichResponseMessage.react",
  [
    "FBLogger",
    "WAWebBotBaseGating",
    "WAWebBotTypes",
    "WAWebErrorBoundary.react",
    "WAWebFlex.react",
    "WAWebMessageBubbleTypingIndicator.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebRichResponse.flow",
    "WAWebRichResponseFragment.react",
    "WAWebRichResponseMsgUtils",
    "WAWebUnifiedResponseBubble.react",
    "WAWebUnifiedResponseUtils",
    "WAWebUnsupportedMessage",
    "WAWebUseBotMessageUpdateScrolling",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.displayAuthor,
        n = e.displayType,
        a = e.msg,
        i = o("useWAWebMsgValues").useMsgValues(a.id, [
          o("WAWebMsgGetters").getUnifiedResponse,
        ]),
        l = i[0];
      return l != null &&
        o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(a.unsafe())
        ? s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            name: "WAWebUnifiedResponseBubble",
            fallback: function () {
              return s.jsx(d, { displayAuthor: t, displayType: n, msg: a });
            },
            onError: m,
            children: s.jsx(
              o("WAWebUnifiedResponseBubble.react").WAWebUnifiedResponseBubble,
              {
                displayAuthor: t,
                displayType: n,
                errorFallback: function () {
                  return s.jsx(c, { msg: a });
                },
                msg: a,
                unifiedResponse: l,
              },
            ),
          })
        : o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled()
          ? s.jsx(d, { displayAuthor: t, displayType: n, msg: a })
          : s.jsx(r("WAWebUnsupportedMessage"), {
              msg: a,
              displayAuthor: t,
              hideUpdateButton: !0,
            });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getRichResponse,
        ]),
        a = n[0],
        i = o("WAWebRichResponseMsgUtils")
          .getBundledRichResponseFragments(
            (a == null ? void 0 : a.fragments) || [],
          )
          .map(function (e, n) {
            return s.jsx(
              r("WAWebRichResponseFragment.react"),
              { fragment: e, msg: t },
              n,
            );
          });
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        rowGap: 12,
        children: i,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.displayAuthor,
        n = e.displayType,
        a = e.msg,
        i = o("useWAWebMsgValues").useMsgValues(a.id, [
          o("WAWebMsgGetters").getRichResponse,
          o("WAWebMsgGetters").getBotEditType,
        ]),
        l = i[0],
        u = i[1];
      return (
        o("WAWebUseBotMessageUpdateScrolling").useBotMessageUpdateScrolling(
          a.unsafe(),
        ),
        (l == null ? void 0 : l.parseState) ===
        o("WAWebRichResponse.flow").RichResponseParseState.Unparsed
          ? u == null || u === o("WAWebBotTypes").BotMsgEditType.LAST
            ? s.jsx(r("WAWebUnsupportedMessage"), {
                msg: a,
                displayAuthor: t,
                hideUpdateButton: !0,
              })
            : s.jsx(r("WAWebMessageTextBubble.react"), {
                msg: a,
                displayAuthor: t,
                displayType: n,
                children: s.jsx(r("WAWebMessageBubbleTypingIndicator.react"), {
                  isBotMsgStreaming: !1,
                }),
              })
          : s.jsx(r("WAWebMessageTextBubble.react"), {
              msg: a,
              displayAuthor: t,
              displayType: n,
              children: s.jsx(r("WAWebMessageSpacerText.react"), {
                msg: a.unsafe(),
                children: s.jsx(c, { msg: a }),
              }),
            })
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      r("FBLogger")("wa_web_ur_parser")
        .catching(e)
        .mustfix(
          "Error rendering WAWebUnifiedResponseBubble, falling back to RichResponseBubble",
        );
    }
    l.default = u;
  },
  98,
);
