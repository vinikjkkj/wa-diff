__d(
  "WAWebBizBroadcastProHiddenChatStorage",
  [
    "WALogger",
    "WAWebBizBroadcastProHiddenChatClassifier",
    "WAWebChatViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(t, n, r, a, i) {
      var l = o(
          "WAWebBizBroadcastProHiddenChatClassifier",
        ).classifyBizBroadcastProMessageBatch(r, a, i),
        m = l.hasMarketingPeerCopy,
        f = l.hasNonMarketingMessage,
        g = l.latestMarketingPeerCopyTimestamp,
        h = l.latestNonMarketingTimestamp;
      if (t == null)
        return m
          ? f
            ? h == null
              ? n
              : p(n, { t: h })
            : (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[BBProHiddenChat] applyBizBroadcastProHiddenChatState: hiding new chat ",
                    "",
                  ])),
                a.toLogString(),
              ),
              p(n, {
                chatViewMode: o("WAWebChatViewMode.flow").ChatViewModeType
                  .ONLY_MARKETING_FROM_SELF,
                t: _(n.t, g),
              }))
          : n;
      if (
        t.chatViewMode !==
        o("WAWebChatViewMode.flow").ChatViewModeType.ONLY_MARKETING_FROM_SELF
      )
        return m
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BBProHiddenChat] applyBizBroadcastProHiddenChatState: keeping order of visible chat ",
                  "",
                ])),
              a.toLogString(),
            ),
            p(n, { t: _(t.t, h) }))
          : n;
      if (
        !o(
          "WAWebBizBroadcastProHiddenChatClassifier",
        ).isBizBroadcastProHiddenChatsEnabled()
      )
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[BBProHiddenChat] applyBizBroadcastProHiddenChatState: hiding disabled, skipped hidden chat ",
                "",
              ])),
            a.toLogString(),
          ),
          n
        );
      if (!m && !f) return n;
      if (f) {
        var y;
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[BBProHiddenChat] applyBizBroadcastProHiddenChatState: revealing hidden chat ",
                "",
              ])),
            a.toLogString(),
          ),
          p(n, {
            chatViewMode: o("WAWebChatViewMode.flow").ChatViewModeType.VISIBLE,
            t: m ? (h != null ? h : t.t) : (y = n.t) != null ? y : t.t,
          })
        );
      }
      return (
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[BBProHiddenChat] applyBizBroadcastProHiddenChatState: keeping chat ",
              " hidden",
            ])),
          a.toLogString(),
        ),
        p(n, { t: _(t.t, g) })
      );
    }
    function p(e, t) {
      var n = babelHelpers.extends({}, e);
      return (
        t.chatViewMode != null && (n.chatViewMode = t.chatViewMode),
        t.t == null ? delete n.t : (n.t = t.t),
        n
      );
    }
    function _(e, t) {
      return e == null ? t : t == null ? e : Math.max(e, t);
    }
    l.applyBizBroadcastProHiddenChatState = m;
  },
  98,
);
