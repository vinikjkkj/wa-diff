__d(
  "WAWebChannelVideoDashSegmentPrefetch",
  [
    "CometDASHPrefetchCacheManager",
    "WALogger",
    "WAWebChannelVideoDashPrefetchODS",
    "WAWebVideoDashManifestCache",
    "WAWebVideoDashPrefetchKey",
    "WAWebVideoDashPrefetchRepresentations",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map(),
      u = new Map(),
      c = !1;
    function d(e) {
      var t;
      (c ||
        ((c = !0),
        o("WAWebVideoDashManifestCache").subscribeToVideoDashManifests(p)),
        s.set(e, ((t = s.get(e)) != null ? t : 0) + 1),
        _(e));
      var n = !0;
      return function () {
        n && ((n = !1), h(e));
      };
    }
    function m(e) {
      for (var t of u) {
        var n = t[0],
          r = t[1];
        if (r.manifestXml === e && r.prefetchKey != null && !r.isClaimed)
          return (u.set(n, babelHelpers.extends({}, r, { isClaimed: !0 })), !0);
      }
      return !1;
    }
    function p() {
      (u.forEach(function (e, t) {
        o("WAWebVideoDashManifestCache").peekVideoDashManifest(t) !==
          e.manifestXml && g(t, e);
      }),
        s.forEach(function (e, t) {
          return _(t);
        }));
    }
    function _(e) {
      var t,
        n = o("WAWebVideoDashManifestCache").peekVideoDashManifest(e);
      n == null ||
        ((t = u.get(e)) == null ? void 0 : t.manifestXml) === n ||
        u.set(e, { isClaimed: !1, manifestXml: n, prefetchKey: f(n) });
    }
    function f(t) {
      try {
        var n = o(
          "WAWebVideoDashPrefetchRepresentations",
        ).getVideoDashPrefetchRepresentations(t);
        if (n.length === 0)
          return (
            o("WAWebChannelVideoDashPrefetchODS").bumpSegmentPrefetchResult(
              "SKIPPED_NO_REPRESENTATIONS",
            ),
            null
          );
        var a = o("WAWebVideoDashPrefetchKey").getVideoDashPrefetchKey(t);
        return (
          r("CometDASHPrefetchCacheManager").fetchUsingNextgendash(a, n),
          o("WAWebChannelVideoDashPrefetchODS").bumpSegmentPrefetchResult(
            "REQUESTED",
          ),
          a
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[video-dash] segment prefetch failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("video-dash-segment-prefetch-unexpected"),
          null
        );
      }
    }
    function g(e, t) {
      (u.delete(e),
        t.prefetchKey != null &&
          (r("CometDASHPrefetchCacheManager").releaseUsingNextgendash(
            t.prefetchKey,
          ),
          o("WAWebChannelVideoDashPrefetchODS").bumpSegmentPrefetchResult(
            "RELEASED",
          )));
    }
    function h(e) {
      var t,
        n = ((t = s.get(e)) != null ? t : 1) - 1;
      n > 0 ? s.set(e, n) : s.delete(e);
    }
    ((l.prefetchChannelVideoDashSegmentsWhenCached = d),
      (l.claimSegmentPrefetch = m));
  },
  98,
);
