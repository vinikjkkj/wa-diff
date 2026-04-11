__d(
  "WAWebBizGetMerchantCompliance",
  [
    "Promise",
    "WALogger",
    "WAWebBizGatingUtils",
    "WAWebBizGetMerchantComplianceQuery.graphql",
    "WAWebBizSetMerchantCompliance",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = { type: "error" },
      p =
        e !== void 0
          ? e
          : (e = n("WAWebBizGetMerchantComplianceQuery.graphql"));
    function _(e) {
      return o("WAWebBizGatingUtils").graphQLForGetComplianceInfo()
        ? f(e).then(function (e) {
            return e.type === "success"
              ? (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "getMerchantComplianceImpl: success",
                    ])),
                ),
                e)
              : (e.type,
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      'fetchCatalog: failed as "',
                      '"',
                    ])),
                  e.type,
                ),
                e);
          })
        : (d || (d = n("Promise"))).resolve({ type: "not-enabled" });
    }
    function f(e) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebRelayClient").fetchQuery(
            p,
            { request: e },
            { environmentType: "whatsapp_catalog" },
          );
        })
        .then(function (e) {
          var t, n, r, a, i, l, s, u;
          if (e == null) return m;
          var c =
            (t = e.xfb_whatsapp_biz_merchant_compliance_info) == null
              ? void 0
              : t.merchant_info;
          if (c == null) return m;
          var d = [
            {
              entity_name: c.entity_name || "",
              entity_type: o(
                "WAWebBizSetMerchantCompliance",
              ).mapEntityTypeToBusinessTypeOption(c.entity_type),
              is_registered: c.is_registered || !1,
              entity_type_custom: c.entity_type_custom || "",
              customer_care_details: {
                email:
                  ((n = c.customer_care_details) == null ? void 0 : n.email) ||
                  "",
                landline_number:
                  ((r = c.customer_care_details) == null
                    ? void 0
                    : r.landline_number) || "",
                mobile_number:
                  ((a = c.customer_care_details) == null
                    ? void 0
                    : a.mobile_number) || "",
              },
              grievance_officer_details: {
                name:
                  ((i = c.grievance_officer_details) == null
                    ? void 0
                    : i.name) || "",
                email:
                  ((l = c.grievance_officer_details) == null
                    ? void 0
                    : l.email) || "",
                landline_number:
                  ((s = c.grievance_officer_details) == null
                    ? void 0
                    : s.landline_number) || "",
                mobile_number:
                  ((u = c.grievance_officer_details) == null
                    ? void 0
                    : u.mobile_number) || "",
              },
            },
          ];
          return { type: "success", merchant_info: d };
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "getMerchantComplianceImpl: failed with error",
                ])),
            ),
            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
              ? { type: "auth-failure" }
              : e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                ? { type: "graphql-error", error: e }
                : m
          );
        });
    }
    l.getMerchantCompliance = _;
  },
  98,
);
