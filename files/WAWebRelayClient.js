__d(
  "WAWebRelayClient",
  [
    "Promise",
    "WAWebGraphQLServerError",
    "WAWebRelayEnvironment",
    "asyncToGeneratorRuntime",
    "err",
  ],
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
      ],
      u;
    function c(e) {
      throw r("err")("Invariant Violation");
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = r === void 0 ? {} : r,
            i = a.accessToken,
            l = a.environmentType,
            s = a.eventLogger,
            u = a.getInlineDataReader,
            c = babelHelpers.objectWithoutPropertiesLoose(a, e),
            d = yield o("WAWebRelayEnvironment").requireRelayRuntime(),
            m = d.fetchQuery,
            p = d.readInlineData,
            _ = typeof i == "object" ? i.token : i,
            f = typeof i == "object" ? i.bp_id : null;
          try {
            var g = yield o("WAWebRelayEnvironment").getEnvironment({
                environmentType: l,
                accessToken: _,
                actorID: f,
              }),
              h = (yield m)(g, t, n, c).toPromise();
            return (s == null || s.success(), u == null || u(p), h);
          } catch (e) {
            throw (
              e instanceof o("WAWebGraphQLServerError").GraphQLServerError &&
                (s == null || s.failure(e.source.errors)),
              e
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = r === void 0 ? {} : r,
            i = a.accessToken,
            l = a.environmentType,
            c = a.eventLogger,
            d = a.getInlineDataReader,
            m = babelHelpers.objectWithoutPropertiesLoose(a, s),
            p = yield o("WAWebRelayEnvironment").requireRelayRuntime(),
            _ = p.commitMutation,
            f = p.readInlineData,
            g = typeof i == "object" ? i.token : i,
            h = typeof i == "object" ? i.bp_id : null;
          try {
            var y = yield o("WAWebRelayEnvironment").getEnvironment({
              environmentType: l,
              accessToken: g,
              actorID: h,
            });
            return new (u || (u = n("Promise")))(function (n, r) {
              _(
                y,
                babelHelpers.extends({ mutation: e, variables: t }, m, {
                  onCompleted: function (t) {
                    (c == null || c.success(), d == null || d(f), n(t));
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
                (c == null || c.failure(e.source.errors)),
              e
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.graphql = c), (l.fetchQuery = d), (l.commitMutation = p));
  },
  98,
);
