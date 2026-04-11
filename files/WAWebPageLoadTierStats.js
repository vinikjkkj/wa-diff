__d(
  "WAWebPageLoadTierStats",
  ["CometQPLPayloadStore", "performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var e = u(),
        t = c(),
        n = {},
        r = {
          cache_count: 0,
          cache_rate: 0,
          decoded_body_size: 0,
          encoded_body_size: 0,
          total_count: 0,
          transfer_size: 0,
        };
      for (var o of e) {
        var a = o.refs,
          i = o.url,
          l = t.get(d(i));
        if (l) {
          ((r.decoded_body_size += l.decodedBodySize),
            (r.encoded_body_size += l.encodedBodySize),
            (r.transfer_size += +l.transferSize),
            (r.total_count += 1),
            +l.transferSize == 0 && (r.cache_count += 1));
          for (var s of a) {
            var m,
              p,
              _ = s + "_start",
              f = s + "_end";
            ((n[_] = Math.min(
              l.requestStart,
              (m = n[_]) != null ? m : Number.POSITIVE_INFINITY,
            )),
              (n[f] = Math.max(
                l.responseEnd,
                (p = n[f]) != null ? p : Number.NEGATIVE_INFINITY,
              )));
          }
        }
      }
      return (
        r.total_count > 0 &&
          (r.cache_rate = Math.round((r.cache_count / r.total_count) * 100)),
        [n, r]
      );
    }
    function u() {
      var e = o("CometQPLPayloadStore").getPayloadMap();
      if (!e) return [];
      var t = Object.values(e).at(0);
      return t ? Object.values(t) : [];
    }
    function c() {
      var t = new Map();
      if (typeof (e || (e = r("performance"))).getEntriesByType == "function") {
        var n = (e || (e = r("performance"))).getEntriesByType("resource");
        n.forEach(function (e) {
          var n = d(e.name);
          t.set(n, e);
        });
      }
      return t;
    }
    function d(e) {
      return e.split("#")[0];
    }
    l.getTierStats = s;
  },
  98,
);
