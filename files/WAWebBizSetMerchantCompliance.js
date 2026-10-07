__d(
  "WAWebBizSetMerchantCompliance",
  [
    "WALogger",
    "WAWebBizSetMerchantComplianceMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebMerchantComplianceUtils",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = { type: "error" },
      m =
        e !== void 0
          ? e
          : (e = n("WAWebBizSetMerchantComplianceMutation.graphql"));
    function p(e) {
      return _(e).then(function (e) {
        return e.type === "success"
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "setMerchantComplianceGraphQL: success",
                ])),
            ),
            e)
          : (e.type,
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  ' setMerchantCompliance: failed as "',
                  '"',
                ])),
              e.type,
            ),
            e);
      });
    }
    function _(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? f(t.token, e).then(function (e) {
                return (
                  e.type !== "success" && e.type === "auth-failure"
                    ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
                    : e.type,
                  e
                );
              })
            : (t.type, t);
        });
    }
    function f(e, t) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebRelayClient").commitMutation(
            m,
            { input: t },
            { environmentType: "facebook", accessToken: e },
          );
        })
        .then(function (e) {
          var t, n, r, a, i, l, s, u;
          if (e == null) return d;
          var c =
            (t = e.xfb_whatsapp_biz_merchant_set_compliance_info) == null
              ? void 0
              : t.merchant_info;
          if (c == null) return d;
          var m = [
            {
              entity_name: c.entity_name || "",
              entity_type: o(
                "WAWebMerchantComplianceUtils",
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
          return { type: "success", merchant_info: m };
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "setMerchantComplianceWithToken: failed with error",
                ])),
            ),
            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
              ? { type: "auth-failure" }
              : e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                ? { type: "graphql-error", error: e }
                : d
          );
        });
    }
    l.setMerchantCompliance = p;
  },
  98,
);
