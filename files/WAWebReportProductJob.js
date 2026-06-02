__d(
  "WAWebReportProductJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebRelayClient",
    "WAWebReportProductJobMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebReportProductJobMutation.graphql"));
    async function u(e, t, n) {
      var r = { jid: e.toJid(), product_id: t };
      return (
        n !== "" && (r.reason = n),
        o("WAWebRelayClient")
          .commitMutation(s, { input: r })
          .then(function (e) {
            var t,
              n =
                e == null || (t = e.xwa_whatsapp_catalog_report_product) == null
                  ? void 0
                  : t.success;
            if (n !== !0)
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(500);
          })
          .catch(function (e) {
            e instanceof o("WAWebGraphQLServerError").GraphQLServerError &&
              o(
                "WAWebMaybeThrowCatalogErrors",
              ).maybeThrowLocalErrorForCatalogQuery(e);
          })
      );
    }
    async function c(e, t, n) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return u(e, t, n);
    }
    l.default = c;
  },
  98,
);
