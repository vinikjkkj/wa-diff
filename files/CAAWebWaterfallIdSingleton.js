__d(
  "CAAWebWaterfallIdSingleton",
  ["ConstUriUtils", "ExecutionEnvironment", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            var t = o("ConstUriUtils").getUri(document.URL);
            if (t != null) {
              var n = Object.fromEntries(t.getQueryParams()),
                a = n.waterfall_id;
              typeof a == "string" && a !== "" && (this.$1 = a);
            }
          }
        }
        var n = t.prototype;
        return (
          (n.getWaterfallID = function () {
            return (
              this.$1 == null &&
                (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
                (this.$1 = r("uuidv4")()),
              this.$1
            );
          }),
          (n.setWaterfallID = function (t) {
            this.$1 = t;
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
