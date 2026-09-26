__d(
  "CometTypeaheadCompositeDataSource",
  [
    "BaseDataEntryKeyBuilder",
    "Promise",
    "baseTypeaheadDedupEntriesBuilder",
    "baseTypeaheadFlattenEntries",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          var t = e.bootstrapDataSource,
            n = e.limit,
            r = e.networkDataSource,
            o = e.nullstateDataSource;
          ((this.$1 = !1),
            (this.$2 = t),
            (this.$3 = n),
            (this.$4 = r),
            (this.$5 = o));
        }
        var o = t.prototype;
        return (
          (o.bootstrap = function () {
            this.$1 ||
              (this.$2 != null && this.$2.bootstrap(),
              this.$5 != null && this.$5.fetchNetwork({ query: "" }),
              (this.$1 = !0));
          }),
          (o.fetchCache = function (t) {
            var e = t.query;
            if (this.$5 != null && e === "") return this.$5.fetchCache(t);
            if (e === "") return { entries: [], params: t };
            if (this.$2 == null)
              return this.$4 != null
                ? this.$4.fetchCache(t)
                : { entries: [], params: t };
            var n = this.$2.fetchCache(t),
              o = n.entries,
              a = r("baseTypeaheadFlattenEntries")(o).length;
            if (a >= this.$3 || this.$4 == null) return n;
            var i = this.$4.fetchCache(t),
              l = i.entries,
              s = i.params,
              u = r("baseTypeaheadDedupEntriesBuilder")(
                r("BaseDataEntryKeyBuilder"),
              )(o != null ? o : [], l != null ? l : []);
            return { entries: u, params: s };
          }),
          (o.fetchNetwork = function (o) {
            var t = o.query;
            if (this.$5 != null && t === "") return this.$5.fetchNetwork(o);
            if (t === "")
              return (e || (e = n("Promise"))).resolve({
                entries: [],
                params: o,
              });
            var a = this.$2;
            if (a == null && this.$4 == null)
              return (e || (e = n("Promise"))).resolve({
                entries: [],
                params: o,
              });
            if (a == null)
              return this.$4 != null
                ? this.$4.fetchNetwork(o)
                : (e || (e = n("Promise"))).resolve({ entries: [], params: o });
            var i = a.fetchCache(o);
            return this.$4 == null
              ? (e || (e = n("Promise"))).resolve(i)
              : this.$4.fetchNetwork(o).then(function (e) {
                  var t = i.entries,
                    n = e.entries,
                    o = e.params,
                    a = r("baseTypeaheadDedupEntriesBuilder")(
                      r("BaseDataEntryKeyBuilder"),
                    )(t != null ? t : [], n != null ? n : []);
                  return { entries: a, params: o };
                });
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
