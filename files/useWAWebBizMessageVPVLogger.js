__d(
  "useWAWebBizMessageVPVLogger",
  ["WAWebMerlinImpressionManager", "react", "useVPVDImpression"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = e.bodyUrlCountInt,
        n = e.bodyUrlUniqueCountInt,
        a = e.buttonValueJsonArray,
        i = e.chatId,
        l = e.chatsFolderType,
        u = e.clientReceivedTsMillis,
        c = e.contactType,
        d = e.ctaUrlUniqueCountInt,
        m = e.hsmTagStr,
        p = e.isBroadcastMessage,
        _ = e.isInsubContact,
        f = e.isMuted,
        g = e.messageBodyType,
        h = e.messageFieldJsonArray,
        y = e.messageId,
        C = e.mmCarouselCardIndex,
        b = e.onVisibilityChange,
        v = e.qbmFlag,
        S = e.readReceiptsEnabled,
        R = e.serverTimestamp,
        L = e.submessageFieldJsonArray,
        E = e.urlUniqueCountInt,
        k = s(
          function (e) {
            var r = e.hiddenTime,
              s = e.visibleTime;
            (b == null || b(!1),
              o("WAWebMerlinImpressionManager").logBizMessageVisibility({
                enter_ts: s,
                exit_ts: r,
                itemId: y,
                visibilityData: {
                  bodyUrlCountInt: t,
                  bodyUrlUniqueCountInt: n,
                  buttonValueJsonArray: a,
                  chatId: i,
                  chatsFolderType: l,
                  clientReceivedTsMillis: u,
                  contactType: c,
                  ctaUrlUniqueCountInt: d,
                  hsmTagStr: m,
                  isBroadcastMessage: p,
                  isInsubContact: _,
                  isMuted: f,
                  messageBodyType: g,
                  messageFieldJsonArray: h,
                  messageId: y,
                  mmCarouselCardIndex: C,
                  qbmFlag: v,
                  readReceiptsEnabled: S,
                  serverTimestamp: R,
                  submessageFieldJsonArray: L,
                  urlUniqueCountInt: E,
                },
              }));
          },
          [t, n, a, i, l, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E],
        ),
        I = s(
          function (e) {
            b == null || b(!0);
          },
          [b],
        );
      return r("useVPVDImpression")({ onVPVDEnd: k, onVPVDStart: I });
    }
    l.default = u;
  },
  98,
);
