__d(
  "WAWebMexFetchGroupInviteCodeJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchGroupInviteCodeJobQuery.graphql",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchGroupInviteCodeJobQuery.graphql"));
    async function d(e) {
      var t;
      o("WALogger")
        .LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[MEX][GROUP] fetching group invite code for ",
              "",
            ])),
          e.toString(),
        )
        .tags("GQL", "MEX");
      var n = await o("WAWebMexClient").fetchQuery(c, {
          id: e.toString(),
          query_context: "INVITE_CODE",
        }),
        a = (t = n.xwa2_group_query_by_id) == null ? void 0 : t.invite_code;
      if (
        (o("WALogger")
          .LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[MEX][GROUP] fetched group invite code for ",
                "",
              ])),
            e,
          )
          .tags("GQL", "MEX"),
        a == null)
      )
        throw r("err")("[MEX][GROUP] group invite code is null");
      return a;
    }
    l.fetchMexGroupInviteCode = d;
  },
  98,
);
