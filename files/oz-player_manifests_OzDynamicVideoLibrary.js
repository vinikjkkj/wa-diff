__d(
  "oz-player/manifests/OzDynamicVideoLibrary",
  ["oz-player/shims/OzNetworkDiagnostics"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$4 = null),
          (this.$5 = null),
          (this.$6 = new RegExp(/(.*)\.(m4v|m4a)(\?|$)/)),
          (this.$7 = { m4a: { time: 0 }, m4v: { time: 0 } }),
          (this.$8 = { audio: "m4a", video: "m4v" }),
          (this.$9 = {}));
        var t = e.config;
        this.$3 = t;
      }
      var t = e.prototype;
      return (
        (t.getLastSegmentStartPTS = function () {
          return this.$1;
        }),
        (t.getLast200RequestedTime = function () {
          return this.$5;
        }),
        (t.getLast200RequestedUrlDecisionMinTime = function () {
          var e = [];
          for (var t in this.$7) e.push(this.$7[t].time);
          return Math.min.apply(Math, e);
        }),
        (t.getLast200RequestedUrlDecisionTimeByMimeType = function (t) {
          var e;
          return (e = this.$7[this.$8[t]]) == null ? void 0 : e.time;
        }),
        (t.updateWithResponse = function (t, n, o, a) {
          var e;
          !a.headers ||
            a.status != 200 ||
            ((this.$5 = n),
            (this.$1 =
              (e = r("oz-player/shims/OzNetworkDiagnostics").getDvlSegmentPTS(
                a.headers,
              )) != null
                ? e
                : this.$1),
            (this.$2 = r("oz-player/shims/OzNetworkDiagnostics").getDvlStatus(
              a.headers,
            )),
            this.$10(t, o),
            (this.$2 != null || this.$2 === "200") && (this.$4 = n));
        }),
        (t.$10 = function (t, n) {
          var e = this.$6.exec(t);
          if (e != null) {
            var r = e[2];
            n != null && (this.$7[r] = { time: n });
          }
        }),
        (t.shouldRequestDynamicInfo = function (t) {
          if (t !== "video") return !1;
          this.$11(t);
          var e = this.$12(t);
          return e != null &&
            e <= this.$3.getNumber("dvl_initial_segment_ignore_count")
            ? !1
            : this.$3.getNumber("dvl_update_interval_ms") == 0 ||
                this.$4 == null ||
                this.$4 + this.$3.getNumber("dvl_update_interval_ms") <=
                  Date.now();
        }),
        (t.$11 = function (t) {
          return (
            this.$9[t] == null && (this.$9[t] = { segmentCount: 0 }),
            (this.$9[t].segmentCount =
              this.$9[t].segmentCount != null ? this.$9[t].segmentCount + 1 : 0)
          );
        }),
        (t.$12 = function (t) {
          return this.$9[t].segmentCount;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
