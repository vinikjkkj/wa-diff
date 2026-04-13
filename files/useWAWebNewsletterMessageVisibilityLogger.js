__d(
  "useWAWebNewsletterMessageVisibilityLogger",
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
      var t = o("react-compiler-runtime").c(9),
        n = e.channelUserType,
        a = e.cid,
        i = e.isStarredPost,
        l = e.isVpvImpression,
        s = e.mediaData,
        u = e.postId,
        c;
      t[0] !== n ||
      t[1] !== a ||
      t[2] !== i ||
      t[3] !== l ||
      t[4] !== s ||
      t[5] !== u
        ? ((c = function (t) {
            var e = t.hiddenTime,
              r = t.visibleTime;
            o("WAWebMerlinImpressionManager").logNewsletterMessageVisibility({
              enter_ts: r,
              exit_ts: e,
              itemId: u,
              visibilityData: {
                cid: a,
                isStarredPost: i,
                isVpvImpression: l,
                postId: u,
                mediaData: s,
                channelUserType: n,
              },
            });
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s),
          (t[5] = u),
          (t[6] = c))
        : (c = t[6]);
      var d = c,
        m;
      return (
        t[7] !== d
          ? ((m = { onVPVDEnd: d }), (t[7] = d), (t[8] = m))
          : (m = t[8]),
        r("useVPVDImpression")(m)
      );
    }
    l.default = u;
  },
  98,
);
