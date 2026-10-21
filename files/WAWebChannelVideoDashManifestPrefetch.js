__d(
  "WAWebChannelVideoDashManifestPrefetch",
  [
    "WALogger",
    "WAWebChannelVideoDashPrefetchODS",
    "WAWebVideoDashManifestCache",
    "WAWebVideoDashManifestErrors",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 200,
      u = "https://mmg.whatsapp.net",
      c = "/channel/dash",
      d = new Map(),
      m = new Set(),
      p = 0,
      _ = 0,
      f = 0;
    function g(e) {
      if ((m.delete(e), !C(e))) {
        o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchSkip("URL_SHAPE");
        return;
      }
      var t = d.get(e);
      if (o("WAWebVideoDashManifestCache").peekVideoDashManifest(e) != null) {
        (t == null && R(e, "OK"),
          o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchSkip(
            t == null ? "CACHED" : "SEEN_CACHED",
          ));
        return;
      }
      if (t === "IN_FLIGHT" || t === "FAILED") {
        o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchSkip(b(t));
        return;
      }
      (t == null
        ? R(e, "IN_FLIGHT")
        : (d.delete(e),
          d.set(e, "IN_FLIGHT"),
          o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchResult(
            "REFETCHED",
          )),
        _++,
        o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchResult("REQUESTED"),
        o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchInFlightAtStart(_));
      var n = f;
      o("WAWebVideoDashManifestCache")
        .loadVideoDashManifest({
          timeoutMs: o("WAWebVideoDashManifestCache").MANIFEST_FETCH_TIMEOUT_MS,
          url: e,
        })
        .then(
          function (t) {
            return S(e, t.kind, n);
          },
          function (t) {
            (v(t), S(e, "FAILED", n));
          },
        );
    }
    function h(e) {
      (o("WAWebVideoDashManifestCache").invalidateVideoDashManifest(e),
        d.get(e) === "IN_FLIGHT" && m.add(e));
    }
    function y() {
      (d.clear(),
        m.clear(),
        (p = 0),
        f++,
        o("WAWebVideoDashManifestCache").clearVideoDashManifestCache());
    }
    function C(e) {
      var t;
      try {
        t = new URL(e);
      } catch (e) {
        return !1;
      }
      return (
        t.origin === u &&
        t.pathname === c &&
        t.username === "" &&
        t.password === ""
      );
    }
    function b(e) {
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
    function v(t) {
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
    function S(e, t, n) {
      (_--,
        n === f &&
          m.delete(e) &&
          o("WAWebVideoDashManifestCache").invalidateVideoDashManifest(e),
        n === f && d.has(e) && d.set(e, t),
        o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchResult(t));
    }
    function R(e, t) {
      if (d.size >= s) {
        var n = d.keys().next().value;
        n != null && d.delete(n);
      }
      (d.set(e, t),
        p++,
        o("WAWebChannelVideoDashPrefetchODS").bumpPrefetchSessionReached(p));
    }
    ((l.prefetchChannelVideoDashManifest = g),
      (l.dropChannelVideoDashManifest = h),
      (l.clearChannelVideoDashManifests = y));
  },
  98,
);
