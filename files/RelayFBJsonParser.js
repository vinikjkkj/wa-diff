__d(
  "RelayFBJsonParser",
  [
    "GHLDetectionUtils",
    "GHLDetectionUtilsPreludeSafe",
    "cr:7329",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!(e == null || typeof e != "object"))
        for (var t = [e]; t.length > 0; ) {
          var n = t.pop();
          if (!(n == null || typeof n != "object")) {
            if (Array.isArray(n)) {
              for (var r = 0; r < n.length; r++) {
                var o = n[r];
                o != null && typeof o == "object" && t.push(o);
              }
              continue;
            }
            n.__typename === "MarketplaceFeedListingItem" &&
              (n.__typename = "MarketplaceFeedAdStory");
            for (var a = Object.keys(n), i = 0; i < a.length; i++) {
              var l = n[a[i]];
              l != null && typeof l == "object" && t.push(l);
            }
          }
        }
    }
    var s = {
        parse: function (a) {
          r("gkx")("23983") &&
            r("justknobx")._("5588") &&
            o("GHLDetectionUtils").isStringShimmed() &&
            o("GHLDetectionUtilsPreludeSafe").restoreNativeString();
          var t;
          return (
            n("cr:7329") && o("GHLDetectionUtils").isJSONParseShimmed()
              ? (t = n("cr:7329").parse(a))
              : (t = JSON.parse(a)),
            a.indexOf("MarketplaceFeedListingItem") !== -1 &&
              r("gkx")("2532") &&
              r("justknobx")._("778") &&
              t != null &&
              e(t),
            t
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
