__d(
  "WAWebRelayClient",
  [
    "Promise",
    "WAWebGraphQLServerError",
    "WAWebRelayEnvironment",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
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
            _ = f(i),
            g = _.accessTokenString,
            h = _.actorID;
          try {
            var y = yield o("WAWebRelayEnvironment").getEnvironment({
                environmentType: l,
                accessToken: g,
                actorID: h,
              }),
              C = (yield m)(y, t, n, c).toPromise();
            return (s == null || s.success(), u == null || u(p), C);
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
            g = p.readInlineData,
            h = f(i),
            y = h.accessTokenString,
            C = h.actorID;
          try {
            var b = yield o("WAWebRelayEnvironment").getEnvironment({
              environmentType: l,
              accessToken: y,
              actorID: C,
            });
            return new (u || (u = n("Promise")))(function (n, r) {
              _(
                b,
                babelHelpers.extends({ mutation: e, variables: t }, m, {
                  onCompleted: function (t) {
                    (c == null || c.success(), d == null || d(g), n(t));
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
    function f(e) {
      return e == null || typeof e == "string"
        ? { accessTokenString: e, actorID: null }
        : r("isStringNullOrEmpty")(e.actorID)
          ? { accessTokenString: e.token, actorID: e.bp_id }
          : { accessTokenString: e.token, actorID: e.actorID };
    }
    ((l.graphql = c), (l.fetchQuery = d), (l.commitMutation = p));
  },
  98,
);
