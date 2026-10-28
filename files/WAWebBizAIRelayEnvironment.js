__d(
  "WAWebBizAIRelayEnvironment",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebFetchAdAccountToken",
    "WAWebFetchWithAdAccountToken",
    "WAWebRelayEnvironment",
    "WAWebUserPrefsCTWA",
    "err",
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
        n = p(o("WAWebUserPrefsCTWA").getAdAccountToken());
      return e == null || t == null || n == null
        ? null
        : _(e, n, t.logBizAiGraphQLRequest);
    }
    function m() {
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
              var i = p(n.token);
              if (i == null)
                throw r("err")(
                  "The ad-account token has no business person ID",
                );
              return u != null ? u : _(t, i, a.logBizAiGraphQLRequest);
            }),
          i = function () {
            c === a && (c = null);
          };
        return ((c = a), a.then(i, i), a);
      }
      return c;
    }
    function p(e) {
      var t = e == null ? void 0 : e.bp_id;
      return t != null && t !== "" ? t : null;
    }
    function _(e, t, n) {
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
      (l.loadBizAIRelayEnvironment = m));
  },
  98,
);
