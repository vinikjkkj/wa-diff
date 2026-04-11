__d(
  "WAWebReportProductJob",
  [
    "WAWebBackendErrors",
    "WAWebBizGatingUtils",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebRelayClient",
    "WAWebReportProductJobMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebReportProductJobMutation.graphql"));
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = { jid: e.toJid(), product_id: t };
          return (
            n !== "" && (r.reason = n),
            o("WAWebRelayClient")
              .commitMutation(s, { input: r })
              .then(function (e) {
                var t,
                  n =
                    e == null ||
                    (t = e.xwa_whatsapp_catalog_report_product) == null
                      ? void 0
                      : t.success;
                if (n !== !0)
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    500,
                  );
              })
              .catch(function (e) {
                e instanceof o("WAWebGraphQLServerError").GraphQLServerError &&
                  o(
                    "WAWebMaybeThrowCatalogErrors",
                  ).maybeThrowLocalErrorForCatalogQuery(e);
              })
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          return u(e, t, n);
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
