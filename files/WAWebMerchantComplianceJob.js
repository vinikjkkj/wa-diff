__d(
  "WAWebMerchantComplianceJob",
  [
    "WAWebBizGetMerchantCompliance",
    "WAWebBizSetMerchantCompliance",
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
          var t = yield o(
            "WAWebBizGetMerchantCompliance",
          ).getMerchantCompliance({ biz_jid: e[0].wid.toJid() });
          if (t.type === "success") return t.merchant_info;
          throw (
            t.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(t.error)
              : t.type,
            r("err")(
              "getMerchantComplianceGraphQL: error handling flow not implemented for " +
                JSON.stringify(t),
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
          var t = e.customerCareDetails,
            n = e.entityName,
            a = e.entityType,
            i = e.entityTypeCustom,
            l = e.grievanceOfficerDetails,
            s = e.isRegistered,
            u = s === void 0 ? !1 : s,
            c = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            d = {};
          if (
            ((d.is_registered = u),
            n !== void 0 && (d.entity_name = n),
            (d.entity_type = f(a)),
            i !== void 0 && (d.entity_type_custom = i),
            t)
          ) {
            var m = {};
            (t.email !== void 0 && (m.email = t.email),
              t.landlineNumber !== void 0 &&
                (m.landline_number = t.landlineNumber),
              t.mobileNumber !== void 0 && (m.mobile_number = t.mobileNumber),
              (d.customer_care_details = m));
          }
          if (l) {
            var p = {};
            (l.name !== void 0 && (p.name = l.name),
              l.email !== void 0 && (p.email = l.email),
              l.landlineNumber !== void 0 &&
                (p.landline_number = l.landlineNumber),
              l.mobileNumber !== void 0 && (p.mobile_number = l.mobileNumber),
              (d.grievance_officer_details = p));
          }
          var _ = yield o(
            "WAWebBizSetMerchantCompliance",
          ).setMerchantCompliance({ biz_jid: c.toJid(), merchant_info: d });
          if (_.type === "success") return _.merchant_info;
          throw (
            _.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(_.error)
              : _.type,
            r("err")(
              "setMerchantComplianceGraphQL: error handling flow not implemented for " +
                JSON.stringify(_),
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
