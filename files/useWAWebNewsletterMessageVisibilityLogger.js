__d(
  "useWAWebNewsletterMessageVisibilityLogger",
  ["WAWebMerlinImpressionManager", "react", "useVPVDImpression"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = e.channelUserType,
        n = e.cid,
        a = e.isStarredPost,
        i = e.isVpvImpression,
        l = e.mediaData,
        u = e.postId,
        c = s(
          function (e) {
            var r = e.hiddenTime,
              s = e.visibleTime;
            o("WAWebMerlinImpressionManager").logNewsletterMessageVisibility({
              enter_ts: s,
              exit_ts: r,
              itemId: u,
              visibilityData: {
                cid: n,
                isStarredPost: a,
                isVpvImpression: i,
                postId: u,
                mediaData: l,
                channelUserType: t,
              },
            });
          },
          [u, n, a, i, l, t],
        );
      return r("useVPVDImpression")({ onVPVDEnd: c });
    }
    l.default = u;
  },
  98,
);
