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
      s,
      u = 10,
      c = new Map(),
      d = new Map(),
      m = !1;
    function p(e) {
      var t;
      (m ||
        ((m = !0),
        o("WAWebVideoDashManifestCache").subscribeToVideoDashManifests(f)),
        c.set(e, ((t = c.get(e)) != null ? t : 0) + 1),
        h(e),
        g(e));
      var n = !0;
      return function () {
        n && ((n = !1), S(e));
      };
    }
    function _(e) {
      for (var t of d) {
        var n = t[0],
          r = t[1];
        if (r.manifestXml === e && r.prefetchKey != null && !r.isClaimed)
          return (
            d.delete(n),
            d.set(n, babelHelpers.extends({}, r, { isClaimed: !0 })),
            !0
          );
      }
      return !1;
    }
    function f() {
      (d.forEach(function (e, t) {
        o("WAWebVideoDashManifestCache").peekVideoDashManifest(t) !==
          e.manifestXml && b(t, e);
      }),
        c.forEach(function (e, t) {
          return g(t);
        }));
    }
    function g(e) {
      var t,
        n = o("WAWebVideoDashManifestCache").peekVideoDashManifest(e);
      n == null ||
        ((t = d.get(e)) == null ? void 0 : t.manifestXml) === n ||
        (d.set(e, {
          isClaimed: !1,
          isReleasedOverLimit: !1,
          manifestXml: n,
          prefetchKey: C(n),
        }),
        y());
    }
    function h(e) {
      var t = d.get(e);
      t != null && (d.delete(e), t.isReleasedOverLimit || d.set(e, t));
    }
    function y() {
      var e = Array.from(d).filter(function (e) {
        var t = e[1];
        return t.prefetchKey != null;
      });
      if (!(e.length <= u)) {
        var t = e[0],
          n = t[0],
          r = t[1];
        (d.set(
          n,
          babelHelpers.extends({}, r, {
            isReleasedOverLimit: !0,
            prefetchKey: null,
          }),
        ),
          v(r),
          o("WAWebChannelVideoDashPrefetchODS").bumpSegmentPrefetchResult(
            "RELEASED_OVER_LIMIT",
          ));
      }
    }
    function C(t) {
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
    function b(e, t) {
      (d.delete(e), v(t));
    }
    function v(e) {
      if (e.prefetchKey != null)
        try {
          (r("CometDASHPrefetchCacheManager").releaseUsingNextgendash(
            e.prefetchKey,
          ),
            o("WAWebChannelVideoDashPrefetchODS").bumpSegmentPrefetchResult(
              "RELEASED",
            ));
        } catch (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[video-dash] segment prefetch release failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("video-dash-segment-prefetch-release-failed");
        }
    }
    function S(e) {
      var t,
        n = ((t = c.get(e)) != null ? t : 1) - 1;
      n > 0 ? c.set(e, n) : c.delete(e);
    }
    ((l.prefetchChannelVideoDashSegmentsWhenCached = p),
      (l.claimSegmentPrefetch = _));
  },
  98,
);
