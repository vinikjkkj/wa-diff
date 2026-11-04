__d(
  "WAWebBizAiRelayClient",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebFetchAdAccountToken",
    "WAWebFetchWithAdAccountToken",
    "WAWebRelayEnvironment",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield (e || (e = n("Promise"))).all([
              o("WAWebRelayEnvironment").requireRelayRuntime(),
              o("WAWebFetchAdAccountToken").fetchToken(),
              r("JSResourceForInteraction")("WAWebBizAiGraphQLQpl")
                .__setRef("WAWebBizAiRelayClient")
                .load(),
            ]),
            a = t[0],
            i = t[1],
            l = t[2].logBizAiGraphQLRequest;
          if (i.type !== "success")
            throw new (o(
              "WAWebFetchWithAdAccountToken",
            ).FetchAdAccountTokenError)(i);
          var u = i.token.bp_id;
          if (u == null || u === "")
            throw r("err")("The ad-account token has no business person ID");
          var c = s;
          if (c != null && c.actorID === u) return c.environment;
          var d = o("WAWebRelayEnvironment").createRelayEnvironment(a, {
            actorID: u,
            environmentType: "facebook",
            log: l,
            withAccessToken: function (t) {
              return o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
                function (e) {
                  return t(e.token);
                },
              );
            },
          });
          return ((s = { actorID: u, environment: d }), d);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          a === void 0 && (a = {});
          var i = yield (e || (e = n("Promise"))).all([
              o("WAWebRelayEnvironment").requireRelayRuntime(),
              u(),
            ]),
            l = i[0].fetchQuery,
            s = i[1];
          return l(s, t, r, a).toPromise();
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
          a === void 0 && (a = {});
          var i = yield (e || (e = n("Promise"))).all([
              o("WAWebRelayEnvironment").requireRelayRuntime(),
              u(),
            ]),
            l = i[0].commitMutation,
            s = i[1];
          return new e(function (e, n) {
            l(
              s,
              babelHelpers.extends({ mutation: t, variables: r }, a, {
                onCompleted: e,
                onError: n,
              }),
            );
          });
        })),
        _.apply(this, arguments)
      );
    }
    ((l.getBizAiRelayEnvironment = u),
      (l.fetchQuery = d),
      (l.commitMutation = p));
  },
  98,
);
