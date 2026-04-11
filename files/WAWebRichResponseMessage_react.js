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
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [o("WAWebMsgGetters").getUnifiedResponse]), (t[0] = l))
        : (l = t[0]);
      var u = o("useWAWebMsgValues").useMsgValues(i.id, l),
        p = u[0];
      if (
        p != null &&
        o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(i.unsafe())
      ) {
        var _;
        t[1] !== n || t[2] !== a || t[3] !== i
          ? ((_ = function () {
              return s.jsx(d, { displayAuthor: n, displayType: a, msg: i });
            }),
            (t[1] = n),
            (t[2] = a),
            (t[3] = i),
            (t[4] = _))
          : (_ = t[4]);
        var f;
        t[5] !== i
          ? ((f = function () {
              return s.jsx(c, { msg: i });
            }),
            (t[5] = i),
            (t[6] = f))
          : (f = t[6]);
        var g;
        t[7] !== n || t[8] !== a || t[9] !== i || t[10] !== f || t[11] !== p
          ? ((g = s.jsx(
              o("WAWebUnifiedResponseBubble.react").WAWebUnifiedResponseBubble,
              {
                displayAuthor: n,
                displayType: a,
                errorFallback: f,
                msg: i,
                unifiedResponse: p,
              },
            )),
            (t[7] = n),
            (t[8] = a),
            (t[9] = i),
            (t[10] = f),
            (t[11] = p),
            (t[12] = g))
          : (g = t[12]);
        var h;
        return (
          t[13] !== _ || t[14] !== g
            ? ((h = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                name: "WAWebUnifiedResponseBubble",
                fallback: _,
                onError: m,
                children: g,
              })),
              (t[13] = _),
              (t[14] = g),
              (t[15] = h))
            : (h = t[15]),
          h
        );
      } else if (
        !o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled()
      ) {
        var y;
        return (
          t[16] !== n || t[17] !== i
            ? ((y = s.jsx(r("WAWebUnsupportedMessage"), {
                msg: i,
                displayAuthor: n,
                hideUpdateButton: !0,
              })),
              (t[16] = n),
              (t[17] = i),
              (t[18] = y))
            : (y = t[18]),
          y
        );
      }
      var C;
      return (
        t[19] !== n || t[20] !== a || t[21] !== i
          ? ((C = s.jsx(d, { displayAuthor: n, displayType: a, msg: i })),
            (t[19] = n),
            (t[20] = a),
            (t[21] = i),
            (t[22] = C))
          : (C = t[22]),
        C
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.msg,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebMsgGetters").getRichResponse]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(n.id, a),
        l = i[0],
        u;
      if (t[1] !== n || t[2] !== (l == null ? void 0 : l.fragments)) {
        var c;
        t[4] !== (l == null ? void 0 : l.fragments)
          ? ((c = (l == null ? void 0 : l.fragments) || []),
            (t[4] = l == null ? void 0 : l.fragments),
            (t[5] = c))
          : (c = t[5]);
        var d;
        (t[6] !== n
          ? ((d = function (t, o) {
              return s.jsx(
                r("WAWebRichResponseFragment.react"),
                { fragment: t, msg: n },
                o,
              );
            }),
            (t[6] = n),
            (t[7] = d))
          : (d = t[7]),
          (u = o("WAWebRichResponseMsgUtils")
            .getBundledRichResponseFragments(c)
            .map(d)),
          (t[1] = n),
          (t[2] = l == null ? void 0 : l.fragments),
          (t[3] = u));
      } else u = t[3];
      var m = u,
        p;
      return (
        t[8] !== m
          ? ((p = s.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              rowGap: 12,
              children: m,
            })),
            (t[8] = m),
            (t[9] = p))
          : (p = t[9]),
        p
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebMsgGetters").getRichResponse,
            o("WAWebMsgGetters").getBotEditType,
          ]),
          (t[0] = l))
        : (l = t[0]);
      var u = o("useWAWebMsgValues").useMsgValues(i.id, l),
        d = u[0],
        m = u[1],
        p;
      if (
        (t[1] !== i ? ((p = i.unsafe()), (t[1] = i), (t[2] = p)) : (p = t[2]),
        o("WAWebUseBotMessageUpdateScrolling").useBotMessageUpdateScrolling(p),
        (d == null ? void 0 : d.parseState) ===
          o("WAWebRichResponse.flow").RichResponseParseState.Unparsed)
      ) {
        var _;
        return (
          t[3] !== m || t[4] !== n || t[5] !== a || t[6] !== i
            ? ((_ =
                m == null || m === o("WAWebBotTypes").BotMsgEditType.LAST
                  ? s.jsx(r("WAWebUnsupportedMessage"), {
                      msg: i,
                      displayAuthor: n,
                      hideUpdateButton: !0,
                    })
                  : s.jsx(r("WAWebMessageTextBubble.react"), {
                      msg: i,
                      displayAuthor: n,
                      displayType: a,
                      children: s.jsx(
                        r("WAWebMessageBubbleTypingIndicator.react"),
                        { isBotMsgStreaming: !1 },
                      ),
                    })),
              (t[3] = m),
              (t[4] = n),
              (t[5] = a),
              (t[6] = i),
              (t[7] = _))
            : (_ = t[7]),
          _
        );
      }
      var f;
      t[8] !== i ? ((f = i.unsafe()), (t[8] = i), (t[9] = f)) : (f = t[9]);
      var g;
      t[10] !== i
        ? ((g = s.jsx(c, { msg: i })), (t[10] = i), (t[11] = g))
        : (g = t[11]);
      var h;
      t[12] !== f || t[13] !== g
        ? ((h = s.jsx(r("WAWebMessageSpacerText.react"), {
            msg: f,
            children: g,
          })),
          (t[12] = f),
          (t[13] = g),
          (t[14] = h))
        : (h = t[14]);
      var y;
      return (
        t[15] !== n || t[16] !== a || t[17] !== i || t[18] !== h
          ? ((y = s.jsx(r("WAWebMessageTextBubble.react"), {
              msg: i,
              displayAuthor: n,
              displayType: a,
              children: h,
            })),
            (t[15] = n),
            (t[16] = a),
            (t[17] = i),
            (t[18] = h),
            (t[19] = y))
          : (y = t[19]),
        y
      );
    }
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
