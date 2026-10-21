__d(
  "WAWebChannelVideoDashManifestPrefetchLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebChannelVideoDashManifestPrefetch",
        )
          .__setRef("WAWebChannelVideoDashManifestPrefetchLoadable")
          .load();
      }, "WAWebChannelVideoDashManifestPrefetch"),
      s = null;
    function u() {
      return ((s = e()), s);
    }
    function c() {
      m(function (e) {
        return e.clearChannelVideoDashManifests();
      });
    }
    function d(e) {
      m(function (t) {
        return t.dropChannelVideoDashManifest(e);
      });
    }
    function m(e) {
      var t;
      (t = s) == null || t.then(e, r("WAWebNoop"));
    }
    ((l.requireChannelVideoDashManifestPrefetch = u),
      (l.clearChannelVideoDashManifestsIfLoaded = c),
      (l.dropChannelVideoDashManifestIfLoaded = d));
  },
  98,
);
