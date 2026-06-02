__d(
  "WAWebMerchantComplianceJob",
  [
    "WAWebBizGetMerchantCompliance",
    "WAWebBizSetMerchantCompliance",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return s(e);
    }
    async function s(e) {
      var t = await o("WAWebBizGetMerchantCompliance").getMerchantCompliance({
        biz_jid: e[0].wid.toJid(),
      });
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
    }
    async function u(e) {
      var t = e === void 0 ? {} : e,
        n = t.customerCareDetails,
        r = t.entityName,
        o = t.entityType,
        a = t.entityTypeCustom,
        i = t.grievanceOfficerDetails,
        l = t.isRegistered,
        s = l === void 0 ? !1 : l;
      return c({
        customerCareDetails: n,
        entityName: r,
        entityType: o,
        entityTypeCustom: a,
        grievanceOfficerDetails: i,
        isRegistered: s,
      });
    }
    async function c(e) {
      var t = e.customerCareDetails,
        n = e.entityName,
        a = e.entityType,
        i = e.entityTypeCustom,
        l = e.grievanceOfficerDetails,
        s = e.isRegistered,
        u = s === void 0 ? !1 : s,
        c = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        m = {};
      if (
        ((m.is_registered = u),
        n !== void 0 && (m.entity_name = n),
        (m.entity_type = d(a)),
        i !== void 0 && (m.entity_type_custom = i),
        t)
      ) {
        var p = {};
        (t.email !== void 0 && (p.email = t.email),
          t.landlineNumber !== void 0 && (p.landline_number = t.landlineNumber),
          t.mobileNumber !== void 0 && (p.mobile_number = t.mobileNumber),
          (m.customer_care_details = p));
      }
      if (l) {
        var _ = {};
        (l.name !== void 0 && (_.name = l.name),
          l.email !== void 0 && (_.email = l.email),
          l.landlineNumber !== void 0 && (_.landline_number = l.landlineNumber),
          l.mobileNumber !== void 0 && (_.mobile_number = l.mobileNumber),
          (m.grievance_officer_details = _));
      }
      var f = await o("WAWebBizSetMerchantCompliance").setMerchantCompliance({
        biz_jid: c.toJid(),
        merchant_info: m,
      });
      if (f.type === "success") return f.merchant_info;
      throw (
        f.type === "graphql-error"
          ? o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(f.error)
          : f.type,
        r("err")(
          "setMerchantComplianceGraphQL: error handling flow not implemented for " +
            JSON.stringify(f),
        )
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
    ((l.getMerchantCompliance = e), (l.setMerchantCompliance = u));
  },
  98,
);
