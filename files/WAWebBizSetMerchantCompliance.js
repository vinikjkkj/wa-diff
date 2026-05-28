__d(
  "WAWebBizSetMerchantCompliance",
  [
    "WALogger",
    "WAWebBizSetMerchantComplianceMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      if (e == null) return "Other";
      switch (e) {
        case "SOLE_PROPRIETORSHIP":
          return "Sole proprietorship";
        case "PARTNERSHIP":
          return "Partnership";
        case "PRIVATE_COMPANY":
          return "Private Company";
        case "PUBLIC_COMPANY":
          return "Public Company";
        case "LIMITED_LIABILITY_PARTNERSHIP":
          return "Limited liability partnership";
        case "OTHER":
          return "Other";
        default:
          return "Other";
      }
    }
    var m = { type: "error" },
      p =
        e !== void 0
          ? e
          : (e = n("WAWebBizSetMerchantComplianceMutation.graphql"));
    function _(e) {
      return f(e).then(function (e) {
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
    function f(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? g(t.token, e).then(function (e) {
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
    function g(e, t) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebRelayClient").commitMutation(
            p,
            { input: t },
            { environmentType: "facebook", accessToken: e },
          );
        })
        .then(function (e) {
          var t, n, r, o, a, i, l, s;
          if (e == null) return m;
          var u =
            (t = e.xfb_whatsapp_biz_merchant_set_compliance_info) == null
              ? void 0
              : t.merchant_info;
          if (u == null) return m;
          var c = [
            {
              entity_name: u.entity_name || "",
              entity_type: d(u.entity_type),
              is_registered: u.is_registered || !1,
              entity_type_custom: u.entity_type_custom || "",
              customer_care_details: {
                email:
                  ((n = u.customer_care_details) == null ? void 0 : n.email) ||
                  "",
                landline_number:
                  ((r = u.customer_care_details) == null
                    ? void 0
                    : r.landline_number) || "",
                mobile_number:
                  ((o = u.customer_care_details) == null
                    ? void 0
                    : o.mobile_number) || "",
              },
              grievance_officer_details: {
                name:
                  ((a = u.grievance_officer_details) == null
                    ? void 0
                    : a.name) || "",
                email:
                  ((i = u.grievance_officer_details) == null
                    ? void 0
                    : i.email) || "",
                landline_number:
                  ((l = u.grievance_officer_details) == null
                    ? void 0
                    : l.landline_number) || "",
                mobile_number:
                  ((s = u.grievance_officer_details) == null
                    ? void 0
                    : s.mobile_number) || "",
              },
            },
          ];
          return { type: "success", merchant_info: c };
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
                : m
          );
        });
    }
    ((l.mapEntityTypeToBusinessTypeOption = d), (l.setMerchantCompliance = _));
  },
  98,
);
