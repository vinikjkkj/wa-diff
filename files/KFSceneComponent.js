__d(
  "KFSceneComponent",
  ["invariant", "KFComponentNames", "vulture"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "update",
      u = "repeat",
      c = "end",
      d = (function () {
        function t(e, t, n, r) {
          ((this.$1 = e),
            (this.$2 = t),
            (this.$3 = n),
            (this.$4 = r),
            (this.$5 = -1),
            (this.$6 = 0),
            (this.$7 = 0),
            (this.$8 = 0),
            (this.$9 = 1),
            (this.$10 = 0),
            (this.$11 = { update: [], repeat: [], end: [] }));
        }
        var n = t.prototype;
        return (
          (n.update = function (n, r) {
            var t = !0;
            if (((this.$7 += r / this.$2), this.$7 > this.$9)) {
              if (
                (this.$6++,
                (this.$7 %= this.$9),
                this.$5 !== -1 && this.$5 <= this.$6)
              )
                return (this.$12(c), this.$7);
              ((t = !1), this.$12(u), (this.$7 += this.$8));
            }
            return (t && this.$12(e), this.$7);
          }),
          (n.getProgress = function () {
            return this.$7;
          }),
          (n.addEntity = function (t) {
            this.$1.push(t);
          }),
          (n.setEntities = function (t) {
            this.$1 = t;
          }),
          (n.removeEntity = function (t) {
            var e = this.$1.indexOf(t);
            e !== -1 && this.$1.splice(e, 1);
          }),
          (n.getEntities = function () {
            return this.$1;
          }),
          (n.getSize = function () {
            return this.$4;
          }),
          (n.onUpdate = function (t) {
            this.$11.update.push(t);
          }),
          (n.onRepeat = function (t) {
            this.$11.repeat.push(t);
          }),
          (n.onEnd = function (t) {
            this.$11.end.push(t);
          }),
          (n.$12 = function (t) {
            for (var e = 0; e < this.$11[t].length; e++)
              this.$11[t][e](this.$7);
          }),
          (n.getDuration = function () {
            return this.$2;
          }),
          (n.getFrameRate = function () {
            return this.$3;
          }),
          (n.toString = function () {
            return (
              r("vulture")("9VdSmb8fTRF6SDG4GbEZ28tDYc4="),
              o("KFComponentNames").SCENE
            );
          }),
          (n.seekToProgress = function (t) {
            ((t >= 0 && t <= 1) || s(0, 749, t), (this.$7 = t));
          }),
          (n.setStartAndEndProgress = function (t, n) {
            ((this.$8 = t), (this.$9 = n));
          }),
          (n.setStartProgress = function (t) {
            this.$8 = t;
          }),
          (n.setEndProgress = function (t) {
            this.$9 = t;
          }),
          (n.setPlayCount = function (t) {
            this.$5 = t;
          }),
          (n.resetPlayCount = function () {
            this.$6 = 0;
          }),
          t
        );
      })(),
      m = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.toString = function () {
            return o("KFComponentNames").ROOT;
          }),
          e
        );
      })();
    ((l.KFSceneComponent = d), (l.KFRootComponent = m));
  },
  98,
);
