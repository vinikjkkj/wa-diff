__d(
  "WAWebMerchantComplianceJob",
  [
    "WAWebBizGetMerchantCompliance",
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
          return u(e);
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
            n = yield o("WAWebBizGetMerchantCompliance").getMerchantCompliance({
              biz_jid:
                (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                  e[0].wid,
                )) != null
                  ? t
                  : e[0].wid.toJid(),
            });
          if (n.type === "success") return n.merchant_info;
          throw (
            n.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(n.error)
              : n.type,
            r("err")(
              "getMerchantComplianceGraphQL: error handling flow not implemented for " +
                JSON.stringify(n),
            )
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e === void 0 ? {} : e,
            n = t.customerCareDetails,
            r = t.entityName,
            o = t.entityType,
            a = t.entityTypeCustom,
            i = t.grievanceOfficerDetails,
            l = t.isRegistered,
            s = l === void 0 ? !1 : l;
          return p({
            customerCareDetails: n,
            entityName: r,
            entityType: o,
            entityTypeCustom: a,
            grievanceOfficerDetails: i,
            isRegistered: s,
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.customerCareDetails,
            a = e.entityName,
            i = e.entityType,
            l = e.entityTypeCustom,
            s = e.grievanceOfficerDetails,
            u = e.isRegistered,
            c = u === void 0 ? !1 : u,
            d = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            m = {};
          if (
            ((m.is_registered = c),
            a !== void 0 && (m.entity_name = a),
            (m.entity_type = f(i)),
            l !== void 0 && (m.entity_type_custom = l),
            n)
          ) {
            var p = {};
            (n.email !== void 0 && (p.email = n.email),
              n.landlineNumber !== void 0 &&
                (p.landline_number = n.landlineNumber),
              n.mobileNumber !== void 0 && (p.mobile_number = n.mobileNumber),
              (m.customer_care_details = p));
          }
          if (s) {
            var _ = {};
            (s.name !== void 0 && (_.name = s.name),
              s.email !== void 0 && (_.email = s.email),
              s.landlineNumber !== void 0 &&
                (_.landline_number = s.landlineNumber),
              s.mobileNumber !== void 0 && (_.mobile_number = s.mobileNumber),
              (m.grievance_officer_details = _));
          }
          var g = yield o(
            "WAWebBizSetMerchantCompliance",
          ).setMerchantCompliance({
            biz_jid:
              (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                d,
              )) != null
                ? t
                : d.toJid(),
            merchant_info: m,
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
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
    ((l.getMerchantCompliance = e), (l.setMerchantCompliance = d));
  },
  98,
);
