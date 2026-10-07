__d(
  "WAWebSetMerchantComplianceJob",
  [
    "WAWebBizSetMerchantCompliance",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e === void 0 ? {} : e,
            n = t.customerCareDetails,
            r = t.entityName,
            o = t.entityType,
            a = t.entityTypeCustom,
            i = t.grievanceOfficerDetails,
            l = t.isRegistered,
            s = l === void 0 ? !1 : l;
          return u({
            customerCareDetails: n,
            entityName: r,
            entityType: o,
            entityTypeCustom: a,
            grievanceOfficerDetails: i,
            isRegistered: s,
          });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.customerCareDetails,
            a = e.entityName,
            i = e.entityType,
            l = e.entityTypeCustom,
            s = e.grievanceOfficerDetails,
            u = e.isRegistered,
            c = u === void 0 ? !1 : u,
            m = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            p = {};
          if (
            ((p.is_registered = c),
            a !== void 0 && (p.entity_name = a),
            (p.entity_type = d(i)),
            l !== void 0 && (p.entity_type_custom = l),
            n)
          ) {
            var _ = {};
            (n.email !== void 0 && (_.email = n.email),
              n.landlineNumber !== void 0 &&
                (_.landline_number = n.landlineNumber),
              n.mobileNumber !== void 0 && (_.mobile_number = n.mobileNumber),
              (p.customer_care_details = _));
          }
          if (s) {
            var f = {};
            (s.name !== void 0 && (f.name = s.name),
              s.email !== void 0 && (f.email = s.email),
              s.landlineNumber !== void 0 &&
                (f.landline_number = s.landlineNumber),
              s.mobileNumber !== void 0 && (f.mobile_number = s.mobileNumber),
              (p.grievance_officer_details = f));
          }
          var g = yield o(
            "WAWebBizSetMerchantCompliance",
          ).setMerchantCompliance({
            biz_jid:
              (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                m,
              )) != null
                ? t
                : m.toJid(),
            merchant_info: p,
          });
          if (g.type === "success") return g.merchant_info;
          throw (
            g.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(g.error)
              : g.type,
            r("err")(
              "setMerchantComplianceGraphQL: error handling flow not implemented for " +
                JSON.stringify(g),
            )
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return e == null
        ? "OTHER"
        : e === "Limited liability partnership"
          ? "LIMITED_LIABILITY_PARTNERSHIP"
          : e === "Sole proprietorship"
            ? "SOLE_PROPRIETORSHIP"
            : e === "Partnership"
              ? "PARTNERSHIP"
              : e === "Public Company"
                ? "PUBLIC_COMPANY"
                : e === "Private Company"
                  ? "PRIVATE_COMPANY"
                  : e === "Other"
                    ? "OTHER"
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    l.setMerchantCompliance = e;
  },
  98,
);
