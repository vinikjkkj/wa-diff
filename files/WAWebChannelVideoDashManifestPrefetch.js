__d(
  "WAWebChannelVideoDashManifestPrefetch",
  [
    "WALogger",
    "WAWebChannelVideoDashManifestCachePolicy",
    "WAWebChannelVideoDashPrefetchODS",
    "WAWebGetChannelVideoDashManifestUrl",
    "WAWebVideoDashManifestCache",
    "WAWebVideoDashManifestErrors",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 200,
      u = new Map(),
      c = new Set(),
      d = 0,
      m = 0,
      p = 0,
      _ = !1;
    function f(e) {
      if (
        (c.delete(e),
        !o(
          "WAWebGetChannelVideoDashManifestUrl",
        ).isServerMintedChannelDashManifestUrl(e))
      ) {
        o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchSkip("URL_SHAPE");
        return;
      }
      var t = u.get(e);
      if (o("WAWebVideoDashManifestCache").peekVideoDashManifest(e) != null) {
        (t == null && v(e, "OK"),
          o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchSkip(
            t == null ? "CACHED" : "SEEN_CACHED",
          ));
        return;
      }
      if (t === "IN_FLIGHT" || t === "FAILED") {
        o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchSkip(y(t));
        return;
      }
      (t == null
        ? v(e, "IN_FLIGHT")
        : (u.delete(e),
          u.set(e, "IN_FLIGHT"),
          o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchResult(
            "REFETCHED",
          )),
        m++,
        o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchResult("REQUESTED"),
        o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchInFlightAtStart(m));
      var n = p;
      o("WAWebChannelVideoDashManifestCachePolicy")
        .loadChannelVideoDashManifest(e)
        .then(
          function (t) {
            return b(e, t.kind, n);
          },
          function (t) {
            (C(t), b(e, "FAILED", n));
          },
        );
    }
    function g(e) {
      (o("WAWebVideoDashManifestCache").invalidateVideoDashManifest(e),
        u.get(e) === "IN_FLIGHT" && c.add(e));
    }
    function h() {
      (u.clear(),
        (d = 0),
        p++,
        (_ = o(
          "WAWebChannelVideoDashManifestCachePolicy",
        ).leaveChannelVideoDashManifestCache()),
        _ || c.clear());
    }
    function y(e) {
      return e === "IN_FLIGHT"
        ? "SEEN_IN_FLIGHT"
        : e === "FAILED"
          ? "SEEN_FAILED"
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function C(t) {
      t instanceof o("WAWebVideoDashManifestErrors").DashManifestError ||
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[video-dash] manifest prefetch failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("video-dash-manifest-prefetch-unexpected");
    }
    function b(e, t, n) {
      (m--,
        (n === p || _) &&
          c.delete(e) &&
          o("WAWebVideoDashManifestCache").invalidateVideoDashManifest(e),
        n === p && u.has(e) && u.set(e, t),
        o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchResult(t));
    }
    function v(e, t) {
      if (u.size >= s) {
        var n = u.keys().next().value;
        n != null && u.delete(n);
      }
      (u.set(e, t),
        d++,
        o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchSessionReached(d));
    }
    ((l.prefetchChannelVideoDashManifest = f),
      (l.dropChannelVideoDashManifest = g),
      (l.clearChannelVideoDashManifests = h));
  },
  98,
);
