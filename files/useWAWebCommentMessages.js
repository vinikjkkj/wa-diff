__d(
  "useWAWebCommentMessages",
  [
    "WAWebAddonHydrationUtils",
    "WAWebCommentCollection",
    "WAWebMsgType",
    "react",
    "useWAWebAggregatedMultiple",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo;
    function d(e) {
      var t = o("useWAWebAggregatedMultiple").useAggregatedMultiple(
        o("WAWebCommentCollection").CommentCollection.byParent,
        c(function () {
          return e;
        }, []),
      );
      return (
        u(
          function () {
            o("WAWebAddonHydrationUtils").hydrateAddons({
              ids: e,
              hydrationType: o("WAWebMsgType").MSG_TYPE.COMMENT,
            });
          },
          [e],
        ),
        t.toSorted(function (e, t) {
          return e.t - t.t;
        })
      );
    }
    l.useHydrateAndAggregateComments = d;
  },
  98,
);
