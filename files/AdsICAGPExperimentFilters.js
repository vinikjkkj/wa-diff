__d(
  "AdsICAGPExperimentFilters",
  ["AHGLogUtils", "AdsICFilterFailsIPMHoldoutGK"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [new (r("AdsICFilterFailsIPMHoldoutGK"))()],
      s = "Fails AGP GKs.",
      u = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.getInvisibleReason = function () {
            return s;
          }),
          (n.shouldHideMessageIfFailsRule = function () {
            return !0;
          }),
          (n.filter = function (n, r) {
            if (n.getIsInjected() || n.getMustShow()) return !0;
            var t = !0,
              a = "";
            return (
              e.forEach(function (e) {
                var o = e.filter(n, r);
                if (!o) {
                  var i;
                  a += ((i = e.getInvisibleReason()) != null ? i : "") + ",";
                }
                t = t && o;
              }),
              n.getAYMTData() &&
                o("AHGLogUtils").logExperimentResult(
                  n,
                  r,
                  t ? "normal" : "shadow",
                  a,
                ),
              t
            );
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
