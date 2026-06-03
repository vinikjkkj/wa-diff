__d(
  "WAWebTimedCache",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiHydrateWidsUtil",
    "asyncToGeneratorRuntime",
  ],
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
        var r = t.prototype;
        return (
          (r.get = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                try {
                  var n,
                    r = this.$1(),
                    a = (n = JSON.stringify(t)) != null ? n : "",
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
                      .sendLogs(
                        "[TimedMapCache] Failed to get value from cache",
                      ),
                    null
                  );
                }
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.set = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                try {
                  var n,
                    r,
                    a = (n = this.$1()) != null ? n : new Map(),
                    i = (r = JSON.stringify(e)) != null ? r : "",
                    l = m(t);
                  (a == null || a.set(i, l), yield this.$2(a));
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
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.remove = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  var t,
                    n = this.$1();
                  if (n == null) return;
                  var r = (t = JSON.stringify(e)) != null ? t : "";
                  (n == null || n.delete(r), yield this.$2(n));
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to remove cache value",
                        ])),
                    )
                    .tags("newsletter")
                    .sendLogs(
                      "[TimedMapCache] Failed to remove value from cache",
                    );
                  return;
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.pop = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e = this.$1();
                if (e == null) return null;
                var t = e.entries().next().value;
                if (t == null) return null;
                var n = t[0],
                  r = t[1];
                (e == null || e.delete(n), yield this.$2(e));
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
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.size = function () {
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
        var r = t.prototype;
        return (
          (r.get = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = yield e.prototype.get.call(this, t);
                return (
                  n != null &&
                    (yield e.prototype.remove.call(this, t),
                    yield e.prototype.set.call(this, t, n)),
                  n
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.set = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                (yield e.prototype.remove.call(this, t),
                  yield e.prototype.set.call(this, t, n),
                  this.size() > this.$TimedLRUMapCache$p_1 &&
                    (yield e.prototype.pop.call(this)));
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
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
