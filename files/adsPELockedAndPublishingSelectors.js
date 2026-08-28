__d(
  "adsPELockedAndPublishingSelectors",
  [
    "AdsDML",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsDraftPublishDataProvider",
    "adsCreateSelector",
    "computeAncestorIDs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsDraftPublishDataProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return u(t);
        },
        { name: i.id + ".adsPELockedIDsSelector" },
      );
    function u(e) {
      var t = e.requestedAdObjectIDs.union(e.pendingAdObjectIDs),
        n = t.filter(function (t) {
          var n;
          return (
            ((n = e.fragments.get(t)) == null ? void 0 : n.ad_object_type) ===
            "ad"
          );
        }),
        o = t.filter(function (t) {
          var n;
          return (
            ((n = e.fragments.get(t)) == null ? void 0 : n.ad_object_type) ===
            "ad_set"
          );
        }),
        a = r("computeAncestorIDs")(n, o);
      return a.union(e.requestedAdObjectIDs);
    }
    var c = r("adsCreateSelector")(
        [e],
        function (t) {
          return h(t.completedAdObjectIDs, t.pendingAdObjectIDs);
        },
        { name: i.id + ".adsPEPublishingIDsSelector" },
      ),
      d = o("AdsDMLQueryHandler_DerivedDataBase").modularLoaderWithoutArgs(
        function () {
          return c.getStores();
        },
        c,
      ),
      m = r("adsCreateSelector")(
        [s, c],
        function (t, n) {
          return h(t, n);
        },
        { name: i.id + ".adsPELockedAndPublishingSelector" },
      ),
      p = o("AdsDMLQueryHandler_DerivedDataBase").modularLoaderWithoutArgs(
        function () {
          return m.getStores();
        },
        m,
      ),
      _ = o("AdsDMLQueryHandler_DerivedDataBase").modularLoaderWithoutArgs(
        function () {
          return s.getStores();
        },
        s,
      ),
      f = o("AdsDML")
        .Query({ name: i.id })
        .Derived(function () {
          var e = _(),
            t = d();
          return { lockedIDs: e, publishingIDs: t };
        });
    function g() {
      var e = o("AdsDML").useSuspensefulDMLFragment(f),
        t = e.lockedIDs,
        n = e.publishingIDs;
      return h(t, n);
    }
    var h = function (t, n) {
      return t.union(n);
    };
    ((l.adsPELockedIDsSelector = s),
      (l.adsPELockedIDs = u),
      (l.adsPEPublishingIDsSelector = c),
      (l.adsPELockedAndPublishingSelector = m),
      (l.dmlAdsPELockedAndPublishingSelector = p),
      (l.useGetAdsPELockedAndPublishing = g),
      (l.unionOfImmutableSetIDs = h));
  },
  98,
);
