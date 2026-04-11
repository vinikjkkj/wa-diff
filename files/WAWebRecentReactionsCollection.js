__d(
  "WAWebRecentReactionsCollection",
  [
    "Promise",
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebDebounce",
    "WAWebRecentReactionModel",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 16,
      u = 100,
      c = (function (t) {
        function o() {
          var o;
          return (
            (o = t.call(this) || this),
            (o.findImpl = function (t) {
              return (e || (e = n("Promise"))).resolve({ id: t });
            }),
            o.listenTo(
              o,
              "add",
              r("WAWebDebounce")(function () {
                return o._sortTrim();
              }, u),
            ),
            o
          );
        }
        babelHelpers.inheritsLoose(o, t);
        var a = o.prototype;
        return (
          (a._sortTrim = function () {
            var e = this.length;
            e && (this.sort(), e > s && this.remove(this.slice(s)));
          }),
          o
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((c.model = r("WAWebRecentReactionModel")),
      (c.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS
          .RECENT_REACTIONS_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 2e3,
      }),
      (c.comparator = function (e, t) {
        return t.timestamp - e.timestamp;
      }));
    var d = new c();
    ((l.RECENT_REACTIONS_LIMIT = s),
      (l.LISTENER_DEBOUNCE_WAIT = u),
      (l.RecentReactionsCollection = d));
  },
  98,
);
