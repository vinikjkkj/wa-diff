__d(
  "VideoPlayerShakaConfig",
  [
    "VideoPlayerContextSensitiveConfigResolver",
    "VideoPlayerShakaConfigContextProvider",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {},
      s = (function () {
        function t(e, t, n) {
          ((this.$1 = new (r("VideoPlayerShakaConfigContextProvider"))()),
            (this.$2 = t || null),
            (this.$3 = new (r("VideoPlayerContextSensitiveConfigResolver"))(n)),
            this.$3.setContexts(e || {}),
            e && this.$1.setAllContexts(e));
        }
        t.setGlobalOverrideConfig = function (n) {
          e = n;
        };
        var n = t.prototype;
        return (
          (n.setContext = function (t, n) {
            var e = this.$1.getAllContexts();
            this.$1.setContext(t, n);
            var r = this.$1.getAllContexts();
            e !== r && this.$3.setContexts(r);
          }),
          (n.setOverrideConfig = function (t) {
            this.$2 = t;
          }),
          (n.getBool = function (t, n) {
            var e = this.$4(t, n);
            return typeof e == "boolean" ? e : n;
          }),
          (n.getNumber = function (t, n) {
            var e = this.$4(t, n);
            return typeof e == "number" ? e : n;
          }),
          (n.getString = function (t, n) {
            var e = this.$4(t, n);
            return typeof e == "string" ? e : n;
          }),
          (n.getAllContexts = function () {
            return this.$1.getAllContexts();
          }),
          (n.$4 = function (n, r) {
            return e && typeof e[n] == typeof r
              ? e[n]
              : typeof this.$3.getValue(n) == typeof r
                ? this.$3.getValue(n)
                : this.$2 && typeof this.$2[n] == typeof r
                  ? this.$2[n]
                  : null;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
