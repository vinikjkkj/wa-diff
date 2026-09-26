__d(
  "FeedComposerCometWithTagTypeaheadDataSource",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (function () {
        function t(e) {
          var t = e.compositeDataSource,
            n = e.matchStrategy;
          ((this.$3 = !1), (this.$1 = t), (this.$2 = n));
        }
        var r = t.prototype;
        return (
          (r.bootstrap = function () {
            this.$3 || ((this.$3 = !0), this.$1.bootstrap());
          }),
          (r.fetchCache = function (t) {
            var e = t.query,
              n = this.$2.findMentionableString(e);
            return n == null
              ? { entries: [], params: t }
              : this.$1.fetchCache(t);
          }),
          (r.fetchNetwork = function (r) {
            var t = r.query,
              o = this.$2.findMentionableString(t);
            return o == null
              ? (e || (e = n("Promise"))).reject()
              : this.$1.fetchNetwork(r);
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
