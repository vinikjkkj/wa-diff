__d(
  "useWAWebBizMessageVPVLogger",
  [
    "WAWebMerlinImpressionManager",
    "react",
    "react-compiler-runtime",
    "useVPVDImpression",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.bodyUrlCountInt,
        a = e.bodyUrlUniqueCountInt,
        i = e.buttonValueJsonArray,
        l = e.chatId,
        s = e.chatsFolderType,
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
        k;
      t[0] !== n ||
      t[1] !== a ||
      t[2] !== i ||
      t[3] !== l ||
      t[4] !== s ||
      t[5] !== u ||
      t[6] !== c ||
      t[7] !== d ||
      t[8] !== m ||
      t[9] !== p ||
      t[10] !== _ ||
      t[11] !== f ||
      t[12] !== g ||
      t[13] !== h ||
      t[14] !== y ||
      t[15] !== C ||
      t[16] !== b ||
      t[17] !== v ||
      t[18] !== S ||
      t[19] !== R ||
      t[20] !== L ||
      t[21] !== E
        ? ((k = function (t) {
            var e = t.hiddenTime,
              r = t.visibleTime;
            (b == null || b(!1),
              o("WAWebMerlinImpressionManager").logBizMessageVisibility({
                enter_ts: r,
                exit_ts: e,
                itemId: y,
                visibilityData: {
                  bodyUrlCountInt: n,
                  bodyUrlUniqueCountInt: a,
                  buttonValueJsonArray: i,
                  chatId: l,
                  chatsFolderType: s,
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
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s),
          (t[5] = u),
          (t[6] = c),
          (t[7] = d),
          (t[8] = m),
          (t[9] = p),
          (t[10] = _),
          (t[11] = f),
          (t[12] = g),
          (t[13] = h),
          (t[14] = y),
          (t[15] = C),
          (t[16] = b),
          (t[17] = v),
          (t[18] = S),
          (t[19] = R),
          (t[20] = L),
          (t[21] = E),
          (t[22] = k))
        : (k = t[22]);
      var I = k,
        T;
      t[23] !== b
        ? ((T = function (t) {
            b == null || b(!0);
          }),
          (t[23] = b),
          (t[24] = T))
        : (T = t[24]);
      var D = T,
        x;
      return (
        t[25] !== I || t[26] !== D
          ? ((x = { onVPVDEnd: I, onVPVDStart: D }),
            (t[25] = I),
            (t[26] = D),
            (t[27] = x))
          : (x = t[27]),
        r("useVPVDImpression")(x)
      );
    }
    l.default = u;
  },
  98,
);
