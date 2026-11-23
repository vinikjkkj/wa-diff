__d(
  "WAWebTimedCache",
  ["WALogger", "WATimeUtils", "WAWebApiHydrateWidsUtil"],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      if (e == null) return null;
      var n = o("WATimeUtils").unixTimeMs(),
        r = e.timestamp,
        a = e.value,
        i = n - r;
      return i < t ? a : null;
    }
    function m(e) {
      return { timestamp: o("WATimeUtils").unixTimeMs(), value: e };
    }
    var p = (function () {
        function t(e) {
          var t = e.getCacheTtlMs,
            n = e.mapLoad,
            r = e.mapStore;
          ((this.$1 = n), (this.$2 = r), (this.$3 = t));
        }
        var n = t.prototype;
        return (
          (n.get = async function (n) {
            try {
              var t,
                r = this.$1(),
                a = (t = JSON.stringify(n)) != null ? t : "",
                i = r == null ? void 0 : r.get(a),
                l = o("WAWebApiHydrateWidsUtil").hydrateWids(i);
              return d(l, this.$3());
            } catch (t) {
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to get cache value",
                      ])),
                  )
                  .tags("newsletter")
                  .sendLogs("[TimedMapCache] Failed to get value from cache"),
                null
              );
            }
          }),
          (n.set = async function (t, n) {
            try {
              var e,
                r,
                a = (e = this.$1()) != null ? e : new Map(),
                i = (r = JSON.stringify(t)) != null ? r : "",
                l = m(n);
              (a == null || a.set(i, l), await this.$2(a));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to set cache value",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("[TimedMapCache] Failed to set value in cache");
              return;
            }
          }),
          (n.remove = async function (t) {
            try {
              var e,
                n = this.$1();
              if (n == null) return;
              var r = (e = JSON.stringify(t)) != null ? e : "";
              (n == null || n.delete(r), await this.$2(n));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to remove cache value",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("[TimedMapCache] Failed to remove value from cache");
              return;
            }
          }),
          (n.pop = async function () {
            try {
              var e = this.$1();
              if (e == null) return null;
              var t = e.entries().next().value;
              if (t == null) return null;
              var n = t[0],
                r = t[1];
              (e == null || e.delete(n), await this.$2(e));
              var a = o("WAWebApiHydrateWidsUtil").hydrateWids(r);
              return d(a, this.$3());
            } catch (e) {
              return (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to pop cache value",
                      ])),
                  )
                  .tags("newsletter")
                  .sendLogs("[TimedMapCache] Failed to pop value from cache"),
                null
              );
            }
          }),
          (n.size = function () {
            var e,
              t = this.$1();
            return (e = t == null ? void 0 : t.size) != null ? e : 0;
          }),
          t
        );
      })(),
      _ = (function (e) {
        function t(t) {
          var n,
            r = t.capacity,
            o = t.getCacheTtlMs,
            a = t.mapLoad,
            i = t.mapStore;
          return (
            (n =
              e.call(this, { mapLoad: a, mapStore: i, getCacheTtlMs: o }) ||
              this),
            (n.$TimedLRUMapCache$p_1 = r),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.get = async function (n) {
            var t = await e.prototype.get.call(this, n);
            return (
              t != null &&
                (await e.prototype.remove.call(this, n),
                await e.prototype.set.call(this, n, t)),
              t
            );
          }),
          (n.set = async function (n, r) {
            (await e.prototype.remove.call(this, n),
              await e.prototype.set.call(this, n, r),
              this.size() > this.$TimedLRUMapCache$p_1 &&
                (await e.prototype.pop.call(this)));
          }),
          t
        );
      })(p);
    ((l.getTimedCacheItemValue = d),
      (l.createTimedCacheItem = m),
      (l.TimedMapCache = p),
      (l.TimedLRUMapCache = _));
  },
  98,
);
