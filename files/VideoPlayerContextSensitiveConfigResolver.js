__d(
  "VideoPlayerContextSensitiveConfigResolver",
  [
    "VideoPlayerContextSensitiveConfigPayload",
    "VideoPlayerContextSensitiveConfigUtils",
    "cr:1724253",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = {}),
          (this.$2 = {}),
          e == null
            ? ((this.$3 = r(
                "VideoPlayerContextSensitiveConfigPayload",
              ).static_values),
              (this.$4 = r(
                "VideoPlayerContextSensitiveConfigPayload",
              ).context_sensitive_values))
            : ((this.$3 = e.staticValues),
              (this.$4 = e.contextSensitiveValues)));
      }
      var t = e.prototype;
      return (
        (t.setContexts = function (t) {
          ((this.$1 = t), (this.$2 = this.$5(t)));
        }),
        (t.getValue = function (t) {
          return this.$2[t] != null
            ? this.$2[t]
            : this.$3[t] != null
              ? this.$3[t]
              : null;
        }),
        (t.$5 = function (t) {
          var e = this;
          return Object.keys(this.$4).reduce(function (n, r) {
            var a = e.$4[r];
            if (a != null) {
              var i = o(
                "VideoPlayerContextSensitiveConfigUtils",
              ).getFirstMatchingValueAndContextTargets(t, a);
              i != null && (n[r] = i.value);
            }
            return n;
          }, {});
        }),
        (e.getPayload = function () {
          return r("VideoPlayerContextSensitiveConfigPayload");
        }),
        (e.getSources = function () {
          return n("cr:1724253");
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
