__d(
  "ImageDownloadTrackerWWW",
  ["NetworkStatus", "Promise", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2,
      u = 250;
    function c(t, o, a) {
      a === void 0 && (a = void 0);
      var i = 0,
        l;
      return new (e || (e = n("Promise")))(function (e, n) {
        function c() {
          var l = new Image();
          ((l.onload = function () {
            (r("NetworkStatus").reportSuccess(), e());
          }),
            (l.onerror = function () {
              var e = i <= s;
              e
                ? r("setTimeout")(c, u)
                : (r("NetworkStatus").reportError(), n());
            }),
            i++,
            o(),
            a != null && (l.crossOrigin = a),
            (l.src = t));
        }
        r("NetworkStatus").isOnline()
          ? c()
          : (l = r("NetworkStatus").onChange(function (e) {
              var t = e.online;
              t && (c(), l.remove());
            }));
      });
    }
    l.default = c;
  },
  98,
);
