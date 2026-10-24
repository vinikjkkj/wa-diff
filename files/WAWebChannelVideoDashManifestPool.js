__d(
  "WAWebChannelVideoDashManifestPool",
  [
    "WAWebCanPlayChannelVideoDash",
    "WAWebChannelVideoDashManifestPrefetchLoadable",
    "WAWebChannelVideoDashPrefetchODS",
    "WAWebMediaTypes",
    "WAWebNearestChannelVideos",
    "WAWebNoop",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = new Set(),
      u = new Map(),
      c = null,
      d = !1;
    function m(t, n) {
      (e.set(t, n), h());
    }
    function p(t) {
      e.delete(t) && h();
    }
    function _() {
      return c === !1;
    }
    function f(e) {
      return (
        s.add(e),
        function () {
          s.delete(e);
        }
      );
    }
    function g() {
      (e.clear(), (u = new Map()), b(null));
    }
    function h() {
      d ||
        ((d = !0),
        queueMicrotask(function () {
          ((d = !1), y());
        }));
    }
    function y() {
      if (c !== !1) {
        var t = Array.from(e)
            .filter(function (e) {
              var t = e[1];
              return t.element.isConnected;
            })
            .sort(function (e, t) {
              var n = e[1],
                r = t[1];
              return v(n.element, r.element);
            }),
          n = o("WAWebNearestChannelVideos").selectNearestChannelVideos(
            t.map(function (e) {
              var t = e[0],
                n = e[1];
              return { isOnScreen: n.isOnScreen, key: t };
            }),
            Array.from(u.keys()),
          ),
          r = u;
        ((u = new Map()),
          n.forEach(function (t) {
            var n = e.get(t);
            n != null && u.set(t, n.url);
          }));
        var a = new Set(u.values());
        (r.forEach(function (e) {
          a.has(e) ||
            o(
              "WAWebChannelVideoDashManifestPrefetchLoadable",
            ).dropChannelVideoDashManifestIfLoaded(e);
        }),
          u.forEach(function (t, n) {
            var o = e.get(n);
            o != null && r.get(n) !== t && C(o);
          }));
      }
    }
    function C(e) {
      var t,
        n = e.isNewsletterMsg,
        a = e.url;
      (c == null &&
        b(
          o("WAWebCanPlayChannelVideoDash").canPlayChannelVideoDashFor({
            isNewsletterMsg: n,
            manifestUrl: a,
          }),
        ),
        c === !0 &&
          (((t = e.mediaData) == null ? void 0 : t.mediaStage) ===
            o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
            o(
              "WAWebChannelVideoDashPrefetchODS",
            ).bumpPrefetchResolvedAtTrigger(),
          o("WAWebChannelVideoDashManifestPrefetchLoadable")
            .requireChannelVideoDashManifestPrefetch()
            .then(function (e) {
              return e.prefetchChannelVideoDashManifest(a);
            }, r("WAWebNoop"))));
    }
    function b(e) {
      var t = _();
      ((c = e),
        t !== _() &&
          s.forEach(function (e) {
            return e();
          }));
    }
    function v(e, t) {
      if (e === t) return 0;
      var n = e.compareDocumentPosition(t);
      return n === Node.DOCUMENT_POSITION_FOLLOWING ||
        n ===
          Node.DOCUMENT_POSITION_FOLLOWING + Node.DOCUMENT_POSITION_CONTAINED_BY
        ? -1
        : 1;
    }
    ((l.reportChannelVideo = m),
      (l.removeChannelVideo = p),
      (l.isChannelVideoDashPrefetchRefused = _),
      (l.subscribeToChannelVideoDashPrefetchGate = f),
      (l.clearChannelVideos = g));
  },
  98,
);
