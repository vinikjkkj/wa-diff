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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.msg,
        a = n.ctwaContext;
      if (
        a == null ||
        a.sourceUrl == null ||
        a.mediaType ===
          o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType
            .NONE ||
        (a.adContextPreviewDismissed === !0 &&
          o("WAWebBizGatingUtils").isHideAdContextIfSoftDismissed())
      )
        return null;
      var i =
        o("WAWebCtwaAGMUtils").isWamoAGMIntegrationEnabled(a.sourceApp) &&
        a.automatedGreetingMessageShown === !0;
      if (i) {
        if (
          n.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
          (a.mediaType ===
            o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType
              .VIDEO ||
            a.mediaType ===
              o("WAWebProtobufsE2E.pb")
                .ContextInfo$ExternalAdReplyInfo$MediaType.IMAGE)
        ) {
          var l;
          return (
            t[0] !== a || t[1] !== n
              ? ((l = s.jsx(r("WAWebBizCtwaPreview.react"), {
                  context: a,
                  msg: n,
                })),
                (t[0] = a),
                (t[1] = n),
                (t[2] = l))
              : (l = t[2]),
            l
          );
        }
        return null;
      }
      if (
        a.mediaType ===
        o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType
          .VIDEO
      ) {
        var u;
        return (
          t[3] !== a || t[4] !== n
            ? ((u = s.jsx(r("WAWebBizCtwaContextVideoPreview.react"), {
                msg: n,
                context: a,
              })),
              (t[3] = a),
              (t[4] = n),
              (t[5] = u))
            : (u = t[5]),
          u
        );
      }
      if (
        a.mediaType ===
        o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType
          .IMAGE
      ) {
        if (o("WAWebBizGatingUtils").isAdsAttributionEnabled()) {
          var c;
          return (
            t[6] !== a || t[7] !== n
              ? ((c = s.jsx(r("WAWebBizCtwaContextLargeImagePreview.react"), {
                  context: a,
                  msg: n,
                })),
                (t[6] = a),
                (t[7] = n),
                (t[8] = c))
              : (c = t[8]),
            c
          );
        }
        var d;
        t[9] !== n
          ? ((d = o("WAWebMsgGetters").getIsSentByMe(n)),
            (t[9] = n),
            (t[10] = d))
          : (d = t[10]);
        var m;
        return (
          t[11] !== a || t[12] !== d
            ? ((m = s.jsx(r("WAWebBizCtwaContextImagePreview.react"), {
                context: a,
                isSentByMe: d,
                compose: !1,
              })),
              (t[11] = a),
              (t[12] = d),
              (t[13] = m))
            : (m = t[13]),
          m
        );
      }
      return null;
    }
    function c(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(15),
        i = e.msg,
        l = e.wrapperClass,
        c;
      a[0] !== i
        ? ((c = o("WAWebStateUtils").unproxy(i)), (a[0] = i), (a[1] = c))
        : (c = a[1]);
      var d = c,
        m = d.ctwaContext;
      if (m == null) return null;
      var p;
      a[2] !== m.isSuspiciousLink || a[3] !== d
        ? ((p =
            m.isSuspiciousLink === !0
              ? s.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
                  msg: d,
                })
              : null),
          (a[2] = m.isSuspiciousLink),
          (a[3] = d),
          (a[4] = p))
        : (p = a[4]);
      var _ = p,
        f;
      a[5] !== m.alwaysShowAdAttribution || a[6] !== d
        ? ((f =
            m.alwaysShowAdAttribution === !0
              ? s.jsx(r("WAWebMessageViaAdIndicator.react"), { msg: d })
              : null),
          (a[5] = m.alwaysShowAdAttribution),
          (a[6] = d),
          (a[7] = f))
        : (f = a[7]);
      var g = f,
        h =
          d.type !== o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE ||
          o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
            (t = d.ctwaContext) == null ? void 0 : t.sourceApp,
            d.type,
            (n = d.ctwaContext) == null
              ? void 0
              : n.automatedGreetingMessageShown,
          )
            ? l
            : "",
        y;
      a[8] !== d
        ? ((y = s.jsx(u, { msg: d })), (a[8] = d), (a[9] = y))
        : (y = a[9]);
      var C;
      return (
        a[10] !== _ || a[11] !== h || a[12] !== y || a[13] !== g
          ? ((C = s.jsxs("div", { className: h, children: [_, g, y] })),
            (a[10] = _),
            (a[11] = h),
            (a[12] = y),
            (a[13] = g),
            (a[14] = C))
          : (C = a[14]),
        C
      );
    }
    l.default = c;
  },
  98,
);
