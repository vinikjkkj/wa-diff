__d(
  "VideoUploadSurface",
  ["$InternalEnum", "VideoUploadFlowNotifier", "WaterfallIDGenerator"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        JEST_TESTS: "jest_tests",
        COMMENTS: "comments",
        FEED: "feed",
      }),
      s = (function () {
        function e(e) {
          ((this.$1 = {}), (this.$2 = e));
        }
        var t = e.prototype;
        return (
          (t.getByID = function (t) {
            return this.$1[t];
          }),
          (t.getExistingOrNoOpByID = function (t) {
            var e = this.getByID(t);
            return e == null ? this.$2.noOpProvider() : e;
          }),
          (t.register = function (t, n) {
            var e = n == null ? o("WaterfallIDGenerator").generate() : n;
            return ((this.$1[e] = t), e);
          }),
          (t.clear = function (t) {
            this.$1[t] = void 0;
          }),
          e
        );
      })(),
      u = (function () {
        function e() {
          this.$2 = new s({
            noOpProvider: function () {
              return o(
                "VideoUploadFlowNotifier",
              ).NoOpVideoUploadFlowNotifier.getInstance();
            },
          });
        }
        e.getOrCreate = function (n) {
          var t = e.$1[n];
          return (t == null && ((t = new e()), (e.$1[n] = t)), t);
        };
        var t = e.prototype;
        return (
          (t.notifiers = function () {
            return this.$2;
          }),
          e
        );
      })();
    ((u.$1 = {}), (l.VideoUploadSurfaceIDs = e), (l.VideoUploadSurface = u));
  },
  98,
);
