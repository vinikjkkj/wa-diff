__d(
  "WAWebMexFetchGroupIsInternalJob",
  [
    "WAWebMexClient",
    "WAWebMexFetchGroupIsInternalJobQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchGroupIsInternalJobQuery.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebMexClient").fetchQuery(s, { id: e });
          return (
            ((t = n.xwa2_group_query_by_id) == null ||
            (t = t.properties) == null
              ? void 0
              : t.internal) === !0
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.mexFetchGroupIsInternal = u;
  },
  98,
);
