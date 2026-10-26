__d(
  "WAWebBizAiRelayClient",
  [
    "invariant",
    "JSResourceForInteraction",
    "Promise",
    "WAWebFetchAdAccountToken",
    "WAWebRelayEnvironment",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["accessToken"],
      u = ["accessToken"],
      c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.accessToken,
            n = e.actorID;
          (!r("isStringNullOrEmpty")(t) && !r("isStringNullOrEmpty")(n)) ||
            s(0, 186932);
          var a = yield r("JSResourceForInteraction")("WAWebBizAiGraphQLQpl")
              .__setRef("WAWebBizAiRelayClient")
              .load(),
            i = a.logBizAiGraphQLRequest;
          return o("WAWebRelayEnvironment").getEnvironment({
            accessToken: t,
            actorID: n,
            environmentType: "facebook",
            log: i,
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = a === void 0 ? {} : a,
            l = i.accessToken,
            s = babelHelpers.objectWithoutPropertiesLoose(i, e),
            u = yield (c || (c = n("Promise"))).all([
              o("WAWebRelayEnvironment").requireRelayRuntime(),
              h(l),
            ]),
            d = u[0].fetchQuery,
            m = u[1];
          return d(m, t, r, s).toPromise();
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = r === void 0 ? {} : r,
            i = a.accessToken,
            l = babelHelpers.objectWithoutPropertiesLoose(a, u),
            s = yield (c || (c = n("Promise"))).all([
              o("WAWebRelayEnvironment").requireRelayRuntime(),
              h(i),
            ]),
            d = s[0].commitMutation,
            m = s[1];
          return new c(function (n, r) {
            d(
              m,
              babelHelpers.extends({ mutation: e, variables: t }, l, {
                onCompleted: n,
                onError: r,
              }),
            );
          });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e;
          if (t == null) {
            var n = yield o("WAWebFetchAdAccountToken").fetchToken();
            if (n.type !== "success")
              throw r("err")("Unable to resolve BizAI GraphQL credentials");
            t = n.token;
          }
          return d({ accessToken: t.token, actorID: t.bp_id });
        })),
        y.apply(this, arguments)
      );
    }
    ((l.getBizAiRelayEnvironment = d),
      (l.fetchQuery = p),
      (l.commitMutation = f));
  },
  98,
);
