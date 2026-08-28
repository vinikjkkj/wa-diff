__d(
  "CAAWebBloksYoungAgeStorage",
  ["WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2,
      u = 12;
    function c(e) {
      return "caa.yuca." + e;
    }
    var d = c("byc"),
      m = c("bc"),
      p = c("hbt"),
      _ = (function () {
        function e(e) {
          this.$1 = e;
        }
        var t = e.prototype;
        return (
          (t.$2 = function (t, n) {
            var e = this.$1.getItem(t);
            return e === null ? n : parseInt(e, 10);
          }),
          (t.$3 = function (t) {
            var e;
            return (e = this.$1.getItem(t)) != null ? e : "{}";
          }),
          (t.$4 = function (t, n) {
            this.$1.setItem(t, JSON.stringify(n));
          }),
          (t.$5 = function (t, n) {
            this.$1.setItem(t, n.toString());
          }),
          (t.$6 = function () {
            return Math.round(Date.now() / 1e3);
          }),
          (t.saveAgeWrongAttemptSignal = function (t) {
            var e,
              n = JSON.parse(this.getBirthdayYearCount()),
              r = (e = n[t]) != null ? e : "0";
            ((n[t] = (parseInt(r, 10) + 1).toString()), this.$4(d, n));
          }),
          (t.getBirthdayYearCount = function () {
            return this.$3(d);
          }),
          (t.incrementBlockCountAndHardblock = function () {
            var e = this.$2(m, 0) + 1;
            (this.$5(m, e), e >= s && this.$5(p, this.$6()));
          }),
          (t.shouldHardBlockOrClearBlock = function () {
            var e = this.$2(p, 0);
            if (e === 0) return !1;
            var t = this.$6() - e,
              n = t < u * 60 * 60;
            return (n || (this.$5(p, 0), this.$5(m, 0)), n);
          }),
          e
        );
      })(),
      f = (function () {
        var t = (e || (e = r("WebStorage"))).getLocalStorage();
        return t
          ? new _(t)
          : {
              saveAgeWrongAttemptSignal: function () {},
              incrementBlockCountAndHardblock: function () {},
              shouldHardBlockOrClearBlock: function () {
                return !1;
              },
              getBirthdayYearCount: function () {
                return "";
              },
            };
      })();
    l.CAAWebBloksYoungAgeStorage = f;
  },
  98,
);
