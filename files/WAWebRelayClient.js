__d(
  "WAWebRelayClient",
  ["WAWebGraphQLServerError", "WAWebRelayEnvironment", "err"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "accessToken",
        "environmentType",
        "eventLogger",
        "getInlineDataReader",
      ],
      s = [
        "accessToken",
        "environmentType",
        "eventLogger",
        "getInlineDataReader",
      ];
    function u(e) {
      throw r("err")("Invariant Violation");
    }
    async function c(t, n, r) {
      var a = r === void 0 ? {} : r,
        i = a.accessToken,
        l = a.environmentType,
        s = a.eventLogger,
        u = a.getInlineDataReader,
        c = babelHelpers.objectWithoutPropertiesLoose(a, e),
        d = await o("WAWebRelayEnvironment").requireRelayRuntime(),
        m = d.fetchQuery,
        p = d.readInlineData,
        _ = typeof i == "object" ? i.token : i,
        f = typeof i == "object" ? i.bp_id : null;
      try {
        var g = await o("WAWebRelayEnvironment").getEnvironment({
            environmentType: l,
            accessToken: _,
            actorID: f,
          }),
          h = (await m)(g, t, n, c).toPromise();
        return (s == null || s.success(), u == null || u(p), h);
      } catch (e) {
        throw (
          e instanceof o("WAWebGraphQLServerError").GraphQLServerError &&
            (s == null || s.failure(e.source.errors)),
          e
        );
      }
    }
    async function d(e, t, n) {
      var r = n === void 0 ? {} : n,
        a = r.accessToken,
        i = r.environmentType,
        l = r.eventLogger,
        u = r.getInlineDataReader,
        c = babelHelpers.objectWithoutPropertiesLoose(r, s),
        d = await o("WAWebRelayEnvironment").requireRelayRuntime(),
        m = d.commitMutation,
        p = d.readInlineData,
        _ = typeof a == "object" ? a.token : a,
        f = typeof a == "object" ? a.bp_id : null;
      try {
        var g = await o("WAWebRelayEnvironment").getEnvironment({
          environmentType: i,
          accessToken: _,
          actorID: f,
        });
        return new Promise(function (n, r) {
          m(
            g,
            babelHelpers.extends({ mutation: e, variables: t }, c, {
              onCompleted: function (t) {
                (l == null || l.success(), u == null || u(p), n(t));
              },
              onError: function (t) {
                r(t);
              },
            }),
          );
        });
      } catch (e) {
        throw (
          e instanceof o("WAWebGraphQLServerError").GraphQLServerError &&
            (l == null || l.failure(e.source.errors)),
          e
        );
      }
    }
    ((l.graphql = u), (l.fetchQuery = c), (l.commitMutation = d));
  },
  98,
);
