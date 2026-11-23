__d(
  "WAWebBizAiRelayClient",
  [
    "JSResourceForInteraction",
    "WAWebFetchAdAccountToken",
    "WAWebFetchWithAdAccountToken",
    "WAWebRelayEnvironment",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null;
    async function s() {
      var t = await Promise.all([
          o("WAWebRelayEnvironment").requireRelayRuntime(),
          o("WAWebFetchAdAccountToken").fetchToken(),
          r("JSResourceForInteraction")("WAWebBizAiGraphQLQpl")
            .__setRef("WAWebBizAiRelayClient")
            .load(),
        ]),
        n = t[0],
        a = t[1],
        i = t[2].logBizAiGraphQLRequest;
      if (a.type !== "success")
        throw new (o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError)(
          a,
        );
      var l = a.token.bp_id;
      if (l == null || l === "")
        throw r("err")("The ad-account token has no business person ID");
      var s = e;
      if (s != null && s.actorID === l) return s.environment;
      var u = o("WAWebRelayEnvironment").createRelayEnvironment(n, {
        actorID: l,
        environmentType: "facebook",
        log: i,
        withAccessToken: function (t) {
          return o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
            function (e) {
              return t(e.token);
            },
          );
        },
      });
      return ((e = { actorID: l, environment: u }), u);
    }
    async function u(e, t, n) {
      n === void 0 && (n = {});
      var r = await Promise.all([
          o("WAWebRelayEnvironment").requireRelayRuntime(),
          s(),
        ]),
        a = r[0].fetchQuery,
        i = r[1];
      return a(i, e, t, n).toPromise();
    }
    async function c(e, t, n) {
      n === void 0 && (n = {});
      var r = await Promise.all([
          o("WAWebRelayEnvironment").requireRelayRuntime(),
          s(),
        ]),
        a = r[0].commitMutation,
        i = r[1];
      return new Promise(function (r, o) {
        a(
          i,
          babelHelpers.extends({ mutation: e, variables: t }, n, {
            onCompleted: r,
            onError: o,
          }),
        );
      });
    }
    ((l.getBizAiRelayEnvironment = s),
      (l.fetchQuery = u),
      (l.commitMutation = c));
  },
  98,
);
