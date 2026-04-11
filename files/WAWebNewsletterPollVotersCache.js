__d(
  "WAWebNewsletterPollVotersCache",
  ["WATimeUtils", "WAWebABProps", "WAWebLruCacheMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10,
      s = 5e3,
      u = (function () {
        function t() {
          this.$1 = new (o("WAWebLruCacheMap").LruCacheMap)({ sizeLimit: e });
        }
        t.isValidEntry = function (t) {
          return (
            t != null &&
            o("WATimeUtils").unixTime() - t.timestamp <
              o("WAWebABProps").getABPropConfigValue(
                "channels_poll_voters_summary_cache_ttl_ms",
              ) /
                1e3
          );
        };
        var n = t.prototype;
        return (
          (n.set = function (t, n) {
            var e = o("WATimeUtils").unixTime(),
              r = { timestamp: e, votersMap: n };
            this.$1.set(t.toString(), r);
          }),
          (n.get = function (t) {
            return this.$1.get(t.toString());
          }),
          t
        );
      })(),
      c = (function () {
        function e() {
          this.$1 = new (o("WAWebLruCacheMap").LruCacheMap)({
            sizeLimit: s,
            getSize: function (t) {
              return t.votersMap.size;
            },
          });
        }
        var t = e.prototype;
        return (
          (t.$2 = function (t, n) {
            return t.toString() + "-" + n;
          }),
          (e.isValidEntry = function (t) {
            return (
              t != null &&
              o("WATimeUtils").unixTime() - t.timestamp <
                o("WAWebABProps").getABPropConfigValue(
                  "channels_poll_voters_details_cache_ttl_ms",
                ) /
                  1e3
            );
          }),
          (t.set = function (t, n, r) {
            var e = o("WATimeUtils").unixTime(),
              a = { timestamp: e, votersMap: n };
            this.$1.set(this.$2(t, r), a);
          }),
          (t.get = function (t, n) {
            return this.$1.get(this.$2(t, n));
          }),
          e
        );
      })(),
      d = new u(),
      m = new c();
    function p(e, t) {
      if (t == null) {
        var n = d.get(e),
          r = function (n) {
            return d.set(e, n);
          };
        return u.isValidEntry(n) ? [n, r] : [null, r];
      }
      var o = m.get(e, t),
        a = function (r) {
          return m.set(e, r, t);
        };
      return c.isValidEntry(o) ? [o, a] : [null, a];
    }
    l.getPollVotersFromCache = p;
  },
  98,
);
