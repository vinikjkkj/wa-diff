__d(
  "OzMosThresholdRestriction",
  ["MosUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$3 = new Map()),
          (this.$4 = e),
          (this.$1 = e.getNumber("mos_upper_threshold", 0)),
          (this.$2 = e.getNumber("mos_lower_threshold", 0)));
      }
      var t = e.prototype;
      return (
        (t.$5 = function () {
          return this.$4.getBool("cache_mos_threshold", !1)
            ? { mosUpperThreshold: this.$1, mosLowerThreshold: this.$2 }
            : {
                mosUpperThreshold: this.$4.getNumber("mos_upper_threshold", 0),
                mosLowerThreshold: this.$4.getNumber("mos_lower_threshold", 0),
              };
        }),
        (t.$6 = function (t, n) {
          var e = null;
          if (this.$3.get(t)) e = this.$3.get(t);
          else {
            var r = t.getCustomField("playbackResolutionMos");
            r != null &&
              ((e = o("MosUtils").parsePlaybackMos(String(r))),
              e && this.$3.set(t, e));
          }
          return e != null
            ? o("MosUtils").getMosValue(
                e,
                o("MosUtils").getQualityLabel(n.width, n.height),
              )
            : null;
        }),
        (t.$7 = function (t, n) {
          var e = this,
            r = null,
            o = this.$5(),
            a = o.mosUpperThreshold;
          return (
            t.forEach(function (t) {
              var o = e.$6(t, n);
              o != null && o > a && (r == null || r > o) && (r = o);
            }),
            r == null
              ? t.slice()
              : t.filter(function (t) {
                  var o = e.$6(t, n);
                  return o == null ? !0 : o <= a || o === r;
                })
          );
        }),
        (t.$8 = function (t, n) {
          var e = this,
            r = [],
            o = this.$5(),
            a = o.mosLowerThreshold;
          return (
            t.forEach(function (t) {
              var o = e.$6(t, n);
              o != null && o > a && r.push(t);
            }),
            r.length === 0 && r.push(t[t.length - 1]),
            r
          );
        }),
        (t.applyRestriction = function (t, n) {
          if (t.length === 0) return [];
          var e = this.$5(),
            r = e.mosLowerThreshold,
            o = e.mosUpperThreshold,
            a = void 0;
          return (
            o > 0 && (a = this.$7(a != null ? a : t, n)),
            r > 0 && (a = this.$8(a != null ? a : t, n)),
            a != null ? a : t.slice()
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
