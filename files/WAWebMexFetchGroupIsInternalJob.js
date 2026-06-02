__d(
  "WAWebMexFetchGroupIsInternalJob",
  ["WAWebMexClient", "WAWebMexFetchGroupIsInternalJobQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchGroupIsInternalJobQuery.graphql"));
    async function u(e) {
      var t,
        n = await o("WAWebMexClient").fetchQuery(s, { id: e });
      return (
        ((t = n.xwa2_group_query_by_id) == null || (t = t.properties) == null
          ? void 0
          : t.internal) === !0
      );
    }
    l.mexFetchGroupIsInternal = u;
  },
  98,
);
