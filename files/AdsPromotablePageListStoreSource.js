__d(
  "AdsPromotablePageListStoreSource",
  [
    "AdsPromotablePageListStoreSourceFragment.graphql",
    "AdsPromotablePageListStoreSourceLoadedQuery.graphql",
    "AdsPromotablePageListStoreSourceServerQuery",
    "RelayHooks",
    "ReverseInteropStoreSourceBase",
    "gkx",
    "promiseDone",
    "readClientFragment",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("gkx")("13081") ? 500 : 100,
      c =
        e !== void 0
          ? e
          : (e = n("AdsPromotablePageListStoreSourceLoadedQuery.graphql")),
      d =
        s !== void 0
          ? s
          : (s = n("AdsPromotablePageListStoreSourceFragment.graphql")),
      m = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return c;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.$AdsPromotablePageListStoreSource$p_1 = function (t, n, a, i) {
            var e = this;
            return (
              i === void 0 && (i = []),
              o("RelayHooks")
                .fetchQuery(
                  this.__environment,
                  r("AdsPromotablePageListStoreSourceServerQuery"),
                  { userId: t, limit: u, after: a },
                  { fetchPolicy: n ? "network-only" : "store-or-network" },
                )
                .toPromise()
                .then(function (n) {
                  var r,
                    o,
                    a,
                    l,
                    s,
                    u =
                      (r =
                        n == null ||
                        (o = n.user) == null ||
                        (o = o.facebook_pages) == null ||
                        (o = o.nodes) == null
                          ? void 0
                          : o
                              .map(function (e) {
                                return e == null
                                  ? void 0
                                  : e.promotablepagelist_spec;
                              })
                              .filter(Boolean)) != null
                        ? r
                        : [];
                  ((a = i).push.apply(a, u), e.__updateRelayCacheRecords(t, u));
                  var c =
                      n == null ||
                      (l = n.user) == null ||
                      (l = l.facebook_pages) == null ||
                      (l = l.page_info) == null
                        ? void 0
                        : l.has_next_page,
                    d =
                      n == null ||
                      (s = n.user) == null ||
                      (s = s.facebook_pages) == null ||
                      (s = s.page_info) == null
                        ? void 0
                        : s.end_cursor;
                  return c === !0
                    ? e.$AdsPromotablePageListStoreSource$p_1(t, !1, d, i)
                    : i;
                })
            );
          }),
          (n.__fetchQuery = function (t, n, o) {
            var e = this;
            o === void 0 && (o = !1);
            var a = t.map(function (e) {
                return e.toString();
              }),
              i = "loaded_pages_for_users",
              l = "User";
            this.updateRecords(a, i, l);
            var s = this.$AdsPromotablePageListStoreSource$p_1(a[0], o).catch(
              function (r) {
                return e.handleFetchQueryError(t, n, r);
              },
            );
            r("promiseDone")(s);
          }),
          (n.__updateRelayCacheRecords = function (t, n) {
            var e = "Page",
              r = "facebook_pages(is_promotable:true)";
            o("relay-runtime").commitLocalUpdate(
              this.__environment,
              function (o) {
                var a,
                  i,
                  l,
                  s,
                  u = t + ":" + r,
                  c = o.getRoot().getOrCreateLinkedRecord(u, e),
                  d = "client:root:" + u,
                  m =
                    (a =
                      (i = o.get(d)) == null
                        ? void 0
                        : i.getLinkedRecords("nodes")) != null
                      ? a
                      : [];
                (n.forEach(function (t) {
                  var n = o.get(t.id);
                  (n ||
                    ((n = o.create(t.id, e)),
                    Object.keys(t).forEach(function (e) {
                      var r;
                      (r = n) == null || r.setValue(t[e], e);
                    })),
                    m.includes(n) || m.push(n));
                }),
                  (l = o.get(d)) == null || l.setLinkedRecords(m, "nodes"),
                  (s = o.get(t)) == null || s.setLinkedRecord(c, r));
              },
            );
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (e) {
                return e.toString();
              }),
              a = o.map(function (t) {
                return {
                  key: t,
                  value: r("readClientFragment")(
                    e.__environment,
                    r("AdsPromotablePageListStoreSourceServerQuery"),
                    d,
                    { userId: t },
                    {},
                    t,
                    function (e) {
                      var t;
                      return e == null || (t = e.facebook_pages) == null
                        ? void 0
                        : t.nodes.map(function (e) {
                            return e.promotablepagelist_spec;
                          });
                    },
                  ),
                };
              });
            return a;
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    l.default = m;
  },
  98,
);
