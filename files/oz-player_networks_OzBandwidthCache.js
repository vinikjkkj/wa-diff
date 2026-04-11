__d(
  "oz-player/networks/OzBandwidthCache",
  [
    "oz-player/configs/OzGlobalConfig",
    "oz-player/shims/OzCacheStorage",
    "oz-player/shims/OzWindowEvents",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t, n, o) {
        var a = this;
        ((this.$1 = e),
          (this.$2 = t),
          (this.$3 = n),
          (this.$4 = o),
          r("oz-player/shims/OzWindowEvents").onUnload(function () {
            a.updateCache();
          }));
      }
      var t = e.prototype;
      return (
        (t.getCachedBandwidth = function () {
          var e = r("oz-player/shims/OzCacheStorage").get(this.$1);
          if (e == null) return null;
          var t = Number(e);
          return isNaN(t) ? null : t;
        }),
        (t.getCachedSamples = function () {
          if (this.$5 != null) return this.$5;
          var t = r("oz-player/shims/OzCacheStorage").get(this.$2);
          return t == null ? null : ((this.$5 = e.deserialize(t)), this.$5);
        }),
        (t.updateCache = function () {
          r("oz-player/shims/OzCacheStorage").set(this.$1, String(this.$3()));
          var t = r("oz-player/configs/OzGlobalConfig").getNumber(
            "bandwidth_ttfb_samples_to_save",
            5,
          );
          if (t > 0) {
            var n = this.$4(),
              o = n.bandwidth.length,
              a = n.navigationTiming.length,
              i = {
                bandwidth: n.bandwidth.slice(Math.max(0, o - t), o),
                navigationTiming: n.navigationTiming.slice(
                  Math.max(0, a - t),
                  a,
                ),
              };
            r("oz-player/shims/OzCacheStorage").set(this.$2, e.serialize(i));
          }
        }),
        (e.deserialize = function (t) {
          var e = {};
          try {
            e = JSON.parse(t);
          } catch (e) {}
          return typeof e == "object" &&
            Array.isArray(e.b) &&
            Array.isArray(e.t)
            ? {
                bandwidth: e.b.reduce(function (e, t) {
                  return (
                    typeof t.b == "number" &&
                      typeof t.t == "number" &&
                      typeof t.s == "number" &&
                      e.push({ bytes: t.b, timeInMs: t.t, timestamp: t.s }),
                    e
                  );
                }, []),
                navigationTiming: e.t.reduce(function (e, t) {
                  return (
                    typeof t.t == "number" &&
                      typeof t.s == "number" &&
                      (typeof t.l == "number" && typeof t.b == "number"
                        ? e.push({
                            timeToFirstByteMs: t.t,
                            timeToLastByteMs: t.l,
                            bytes: t.b,
                            timestamp: t.s,
                          })
                        : e.push({
                            timeToFirstByteMs: t.t,
                            timeToLastByteMs: 0,
                            bytes: 0,
                            timestamp: t.s,
                          })),
                    e
                  );
                }, []),
              }
            : null;
        }),
        (e.serialize = function (t) {
          var e = {
            b: t.bandwidth.map(function (e) {
              return { b: e.bytes, s: e.timestamp, t: e.timeInMs };
            }),
            t: t.navigationTiming.map(function (e) {
              return {
                s: e.timestamp,
                t: e.timeToFirstByteMs,
                l: e.timeToLastByteMs,
                b: e.bytes,
              };
            }),
          };
          return JSON.stringify(e);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
