__d(
  "WAWebChannelVideoDashSegmentPrefetchLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebChannelVideoDashSegmentPrefetch",
        )
          .__setRef("WAWebChannelVideoDashSegmentPrefetchLoadable")
          .load();
      }, "WAWebChannelVideoDashSegmentPrefetch"),
      s = null;
    function u() {
      var t = e();
      return (
        t.then(function (e) {
          s = e;
        }, r("WAWebNoop")),
        t
      );
    }
    function c(e) {
      var t, n;
      return (t = (n = s) == null ? void 0 : n.claimSegmentPrefetch(e)) != null
        ? t
        : !1;
    }
    ((l.requireChannelVideoDashSegmentPrefetch = u),
      (l.claimSegmentPrefetchIfLoaded = c));
  },
  98,
);
