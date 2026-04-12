__d(
  "WAWebBizCtwaContext.react",
  [
    "WAWebBizCtwaAGMUtils",
    "WAWebBizCtwaContextImagePreview.react",
    "WAWebBizCtwaContextLargeImagePreview.react",
    "WAWebBizCtwaContextVideoPreview.react",
    "WAWebBizCtwaPreview.react",
    "WAWebBizGatingUtils",
    "WAWebBizSuspiciousLabel.react",
    "WAWebCtwaAGMUtils",
    "WAWebMessageViaAdIndicator.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebStateUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg,
        n = t.ctwaContext;
      if (
        n == null ||
        n.sourceUrl == null ||
        n.mediaType ===
          o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType
            .NONE ||
        (n.adContextPreviewDismissed === !0 &&
          o("WAWebBizGatingUtils").isHideAdContextIfSoftDismissed())
      )
        return null;
      var a =
        o("WAWebCtwaAGMUtils").isWamoAGMIntegrationEnabled(n.sourceApp) &&
        n.automatedGreetingMessageShown === !0;
      return a
        ? t.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
          (n.mediaType ===
            o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType
              .VIDEO ||
            n.mediaType ===
              o("WAWebProtobufsE2E.pb")
                .ContextInfo$ExternalAdReplyInfo$MediaType.IMAGE)
          ? s.jsx(r("WAWebBizCtwaPreview.react"), { context: n, msg: t })
          : null
        : n.mediaType ===
            o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType
              .VIDEO
          ? s.jsx(r("WAWebBizCtwaContextVideoPreview.react"), {
              msg: t,
              context: n,
            })
          : n.mediaType ===
              o("WAWebProtobufsE2E.pb")
                .ContextInfo$ExternalAdReplyInfo$MediaType.IMAGE
            ? o("WAWebBizGatingUtils").isAdsAttributionEnabled()
              ? s.jsx(r("WAWebBizCtwaContextLargeImagePreview.react"), {
                  context: n,
                  msg: t,
                })
              : s.jsx(r("WAWebBizCtwaContextImagePreview.react"), {
                  context: n,
                  isSentByMe: o("WAWebMsgGetters").getIsSentByMe(t),
                  compose: !1,
                })
            : null;
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t,
        n,
        a = e.msg,
        i = e.wrapperClass,
        l = o("WAWebStateUtils").unproxy(a),
        c = l.ctwaContext;
      if (c == null) return null;
      var d =
          c.isSuspiciousLink === !0
            ? s.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
                msg: l,
              })
            : null,
        m =
          c.alwaysShowAdAttribution === !0
            ? s.jsx(r("WAWebMessageViaAdIndicator.react"), { msg: l })
            : null;
      return s.jsxs("div", {
        className:
          l.type !== o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE ||
          o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
            (t = l.ctwaContext) == null ? void 0 : t.sourceApp,
            l.type,
            (n = l.ctwaContext) == null
              ? void 0
              : n.automatedGreetingMessageShown,
          )
            ? i
            : "",
        children: [d, m, s.jsx(u, { msg: l })],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
