__d(
  "useWAWebStatusVisibilityLogger",
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
      var t = o("react-compiler-runtime").c(33),
        n = e.encryptedStatusIdPromise,
        a = e.entryMethod,
        i = e.isCloseSharingPost,
        l = e.isFirstView,
        s = e.isPosterBiz,
        u = e.isSelfView,
        c = e.isSubImpression,
        d = e.isSuccessfulView,
        m = e.itemId,
        p = e.mediaType,
        _ = e.musicBlocked,
        f = e.psaCampaignId,
        g = e.psaLinkAvailable,
        h = e.statusCategory,
        y = e.statusContainsMusic,
        C = e.statusContainsQuestion,
        b = e.statusContentType,
        v = e.statusGroupIdPromise,
        S = e.statusItemViewResult,
        R = e.statusLoadTime,
        L = e.statusPogIndex,
        E = e.statusPosterIdPromise,
        k = e.statusPostIndex,
        I = e.statusPostPlaybackDuration,
        T = e.statusViewEntrypoint,
        D = e.statusViewerSessionId,
        x = e.updatesTabSessionId,
        $ = e.urlStatusType,
        P = e.userRidPromise,
        N = e.viewSequenceIndex,
        M;
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
      t[21] !== k ||
      t[22] !== I ||
      t[23] !== E ||
      t[24] !== T ||
      t[25] !== D ||
      t[26] !== x ||
      t[27] !== $ ||
      t[28] !== P ||
      t[29] !== N
        ? ((M = function (t) {
            var e = t.hiddenTime,
              r = t.visibleDuration,
              M = t.visibleTime;
            o("WAWebMerlinImpressionManager").logStatusVisibility({
              enter_ts: M,
              exit_ts: e,
              statusViewTime: r,
              itemId: m,
              visibilityData: {
                encryptedStatusIdPromise: n,
                userRidPromise: P,
                statusPosterIdPromise: E,
                statusGroupIdPromise: v,
                statusContentType: b,
                mediaType: p,
                isSelfView: u,
                isSubImpression: c,
                isFirstView: l,
                isCloseSharingPost: i,
                statusContainsMusic: y,
                musicBlocked: _,
                statusViewEntrypoint: T,
                updatesTabSessionId: x,
                statusViewerSessionId: D,
                statusPogIndex: L,
                statusPostIndex: k,
                statusCategory: h,
                statusPostPlaybackDuration: I,
                psaCampaignId: f,
                psaLinkAvailable: g,
                statusLoadTime: R,
                urlStatusType: $,
                isPosterBiz: s,
                statusContainsQuestion: C,
                isSuccessfulView: d,
                statusItemViewResult: S,
                entryMethod: a,
                viewSequenceIndex: N,
              },
            });
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
          (t[21] = k),
          (t[22] = I),
          (t[23] = E),
          (t[24] = T),
          (t[25] = D),
          (t[26] = x),
          (t[27] = $),
          (t[28] = P),
          (t[29] = N),
          (t[30] = M))
        : (M = t[30]);
      var w = M,
        A;
      return (
        t[31] !== w
          ? ((A = { onVPVDEnd: w }), (t[31] = w), (t[32] = A))
          : (A = t[32]),
        r("useVPVDImpression")(A)
      );
    }
    l.default = u;
  },
  98,
);
