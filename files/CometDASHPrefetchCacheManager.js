__d(
  "CometDASHPrefetchCacheManager",
  [
    "CometDASHPrefetchCache",
    "CometDASHPrefetchTaskQueue",
    "RunComet",
    "cr:13904",
    "cr:9469",
    "oz-player/configs/OzGlobalConfig",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        (e = n("cr:9469")) != null
          ? e
          : { preloadVideoPlayerNextgendashWorker: null },
      c = u.preloadVideoPlayerNextgendashWorker,
      d = (s = n("cr:13904")) != null ? s : { prefetchUsingNextgendash: null },
      m = d.prefetchUsingNextgendash,
      p = (function () {
        function e() {
          var e = this;
          ((this.$1 = new Map()),
            (this.MAX_RETRY_COUNT = 1),
            r("oz-player/configs/OzGlobalConfig").getBool(
              "clear_prefetch_before_unload",
              !1,
            ) &&
              o("RunComet").onBeforeUnload(function () {
                (e.$1.forEach(function (e) {
                  (r("vulture")("Mb2UJ4IqRxa1HciXM4nS__r_stE="), e.clear());
                }),
                  r("CometDASHPrefetchTaskQueue").clear());
              }));
        }
        var t = e.prototype;
        return (
          (t.fetchUsingNextgendash = function (t, n) {
            if (!m) {
              this.fetch(t, n);
              return;
            }
            m({ prefetchKey: t, representations: n });
          }),
          (t.fetch = function (t, n) {
            var e = this.$1.get(t),
              o = r("oz-player/configs/OzGlobalConfig").getBool(
                "allow_subsequent_prefetch",
                !1,
              );
            (e ||
              ((e = new (r("CometDASHPrefetchCache"))()),
              this.$1.set(t, e),
              o || e.fetch(n)),
              o && e.fetch(n),
              c == null || c());
          }),
          (t.get = function (t) {
            return this.$1.get(t);
          }),
          (t.schedulePrefetchTask = function (t, n) {
            var e = this.$1.get(t);
            if (!e) {
              ((e = new (r("CometDASHPrefetchCache"))()), this.$1.set(t, e));
              var o = e.getSelectedVideoRepresentation(n),
                a = e.getSelectedAudioRepresentation(n);
              (this.$2(t, o), this.$2(t, a));
            }
          }),
          (t.$2 = function (t, n) {
            if (n != null) {
              var e = r("CometDASHPrefetchTaskQueue").isEmpty(),
                o = { representation: n, videoID: t };
              (r("CometDASHPrefetchTaskQueue").enqueue(o),
                e && this.triggerNextPrefetchTask(!1));
            }
          }),
          (t.triggerNextPrefetchTask = function (t) {
            (t && r("CometDASHPrefetchTaskQueue").dequeue(),
              this.runPrefetchTask(0));
          }),
          (t.runPrefetchTask = function (t) {
            if (t > this.MAX_RETRY_COUNT) {
              this.triggerNextPrefetchTask(!0);
              return;
            }
            var e = r("CometDASHPrefetchTaskQueue").getNextPrefetchTask();
            if (e != null) {
              var n = e.representation,
                o = e.videoID,
                a = this.$1.get(o);
              a != null
                ? a.fetchSegmentsWithRetry(n, t)
                : this.triggerNextPrefetchTask(!0);
            }
          }),
          e
        );
      })(),
      _ = new p(),
      f = _;
    l.default = f;
  },
  98,
);
