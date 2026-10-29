__d(
  "WAWebBizAIRelayEnvironment",
  [
    "CometRelay",
    "JSResourceForInteraction",
    "Promise",
    "WAWebBizAIQEError",
    "WAWebFetchAdAccountToken",
    "WAWebFetchWithAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebRelayEnvironment",
    "WAWebUserPrefsCTWA",
    "err",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("WAWebBizAiGraphQLQpl").__setRef(
        "WAWebBizAIRelayEnvironment",
      ),
      u = null,
      c = null;
    function d() {
      if (u != null) return u;
      var e = o("WAWebRelayEnvironment").getRelayRuntimeIfLoaded(),
        t = s.getModuleIfRequired(),
        n = _(o("WAWebUserPrefsCTWA").getAdAccountToken());
      return e == null || t == null || n == null
        ? null
        : f(e, n, t.logBizAiGraphQLRequest);
    }
    function m(e, t, n, r) {
      var a = o("relay-runtime").createOperationDescriptor(
        o("relay-runtime").getRequest(t),
        n,
      );
      return o("CometRelay")
        .fetchQuery(e, t, n, { fetchPolicy: "network-only" })
        .map(function (t) {
          var n,
            r = (n = e.lookup(a.fragment).fieldErrors) != null ? n : [],
            i = r.flatMap(function (e) {
              return e.kind === "relay_field_payload.error"
                ? [o("WAWebBizAIQEError").getBizAIQECodedError(e.error)]
                : [];
            });
          if (i.length > 0)
            throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
              errors: i,
            });
          return t;
        })
        .subscribe(r);
    }
    function p() {
      var t = d();
      if (t != null) return (e || (e = n("Promise"))).resolve(t);
      if (c == null) {
        var a = (e || (e = n("Promise")))
            .all([
              o("WAWebRelayEnvironment").requireRelayRuntime(),
              o("WAWebFetchAdAccountToken").fetchToken(),
              s.load(),
            ])
            .then(function (e) {
              var t = e[0],
                n = e[1],
                a = e[2];
              if (n.type !== "success")
                throw new (o(
                  "WAWebFetchWithAdAccountToken",
                ).FetchAdAccountTokenError)(n);
              var i = _(n.token);
              if (i == null)
                throw r("err")(
                  "The ad-account token has no business person ID",
                );
              return u != null ? u : f(t, i, a.logBizAiGraphQLRequest);
            }),
          i = function () {
            c === a && (c = null);
          };
        return ((c = a), a.then(i, i), a);
      }
      return c;
    }
    function _(e) {
      var t = e == null ? void 0 : e.bp_id;
      return t != null && t !== "" ? t : null;
    }
    function f(e, t, n) {
      var r = o("WAWebRelayEnvironment").createRelayEnvironment(e, {
        actorID: t,
        environmentType: "facebook",
        log: n,
        withAccessToken: function (t) {
          return o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
            function (e) {
              return t(e.token);
            },
          );
        },
      });
      return ((u = r), r);
    }
    ((l.getBizAIRelayEnvironmentIfReady = d),
      (l.subscribeBizAIQuery = m),
      (l.loadBizAIRelayEnvironment = p));
  },
  98,
);
