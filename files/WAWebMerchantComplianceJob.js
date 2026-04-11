__d(
  "WAWebMerchantComplianceJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWapDeprecatedSmaxID",
    "WAWebBackendErrors",
    "WAWebBizGatingUtils",
    "WAWebBizGetMerchantCompliance",
    "WAWebBizSetMerchantCompliance",
    "WAWebCommsWapMd",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        var e, n, r;
        return {
          email:
            (t == null || (e = t.maybeChild("email")) == null
              ? void 0
              : e.contentString()) || "",
          landline_number:
            (t == null || (n = t.maybeChild("landline_number")) == null
              ? void 0
              : n.contentString()) || "",
          mobile_number:
            (t == null || (r = t.maybeChild("mobile_number")) == null
              ? void 0
              : r.contentString()) || "",
        };
      },
      s = new (r("WADeprecatedWapParser"))(
        "merchantComplianceResponse",
        function (t) {
          (t.assertTag("iq"), t.assertFromServer());
          var n = [];
          return (
            t.forEachChildWithTag("merchant_info", function (t) {
              var r,
                o,
                a,
                i,
                l =
                  ((r = t.maybeChild("entity_name")) == null
                    ? void 0
                    : r.contentString()) || "",
                s =
                  ((o = t.maybeChild("entity_type")) == null
                    ? void 0
                    : o.contentString()) || "",
                u =
                  (a = t.maybeChild("entity_type_custom")) == null
                    ? void 0
                    : a.contentString(),
                c = t.attrString("is_registered") === "true",
                d = t.maybeChild("customer_care_details"),
                m = t.maybeChild("grievance_officer_details"),
                p = babelHelpers.extends({}, e(d)),
                _ = babelHelpers.extends(
                  {
                    name:
                      (m == null || (i = m.maybeChild("name")) == null
                        ? void 0
                        : i.contentString()) || "",
                  },
                  e(m),
                );
              n.push({
                entity_name: l,
                entity_type: s,
                is_registered: c,
                entity_type_custom: u,
                customer_care_details: p,
                grievance_officer_details: _,
              });
            }),
            n
          );
        },
      );
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebBizGatingUtils").graphQLForGetComplianceInfo()
            ? d(e)
            : p(e);
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
            n = (t = o("WAWap")).wap(
              "iq",
              {
                to: t.S_WHATSAPP_NET,
                xmlns: "w:biz:merchant_info",
                id: t.generateId(),
                type: "get",
                smax_id: t.SMAX_ID(
                  r("WAWapDeprecatedSmaxID").MerchantGetComplianceInfo,
                ),
              },
              e.map(function (e) {
                return o("WAWap").wap("merchant_info", {
                  jid: o("WAWebCommsWapMd").USER_JID(e.wid),
                });
              }),
            ),
            a = yield o("WADeprecatedSendIq").deprecatedSendIq(n, s);
          if (a.success) return a.result;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            a.errorCode,
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e === void 0 ? {} : e,
            n = t.customerCareDetails,
            r = t.entityName,
            a = t.entityType,
            i = t.entityTypeCustom,
            l = t.grievanceOfficerDetails,
            s = t.isRegistered,
            u = s === void 0 ? !1 : s;
          return o("WAWebBizGatingUtils").graphQLForSetComplianceInfo()
            ? C(r, a, u, i, n, l)
            : h({
                entityName: r,
                entityType: a,
                isRegistered: u,
                entityTypeCustom: i,
                customerCareDetails: n,
                grievanceOfficerDetails: l,
              });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e === void 0 ? {} : e,
            n = t.customerCareDetails,
            a = t.entityName,
            i = t.entityType,
            l = t.entityTypeCustom,
            u = t.grievanceOfficerDetails,
            c = t.isRegistered,
            d = c === void 0 ? !1 : c,
            m = o("WAWap").wap(
              "iq",
              {
                to: o("WAWap").S_WHATSAPP_NET,
                xmlns: "w:biz:merchant_info",
                id: o("WAWap").generateId(),
                type: "set",
                smax_id: o("WAWap").SMAX_ID(
                  r("WAWapDeprecatedSmaxID").MerchantSetComplianceInfo,
                ),
              },
              o("WAWap").wap(
                "merchant_info",
                { is_registered: d ? "true" : "false" },
                a !== void 0 ? o("WAWap").wap("entity_name", null, a) : null,
                i !== void 0 ? o("WAWap").wap("entity_type", null, i) : null,
                l !== void 0
                  ? o("WAWap").wap("entity_type_custom", null, l)
                  : null,
                n
                  ? o("WAWap").wap(
                      "customer_care_details",
                      null,
                      n.email !== void 0
                        ? o("WAWap").wap("email", null, n.email)
                        : null,
                      n.landlineNumber !== void 0
                        ? o("WAWap").wap(
                            "landline_number",
                            null,
                            n.landlineNumber,
                          )
                        : null,
                      n.mobileNumber !== void 0
                        ? o("WAWap").wap("mobile_number", null, n.mobileNumber)
                        : null,
                    )
                  : null,
                u
                  ? o("WAWap").wap(
                      "grievance_officer_details",
                      null,
                      u.name !== void 0
                        ? o("WAWap").wap("name", null, u.name)
                        : null,
                      u.email !== void 0
                        ? o("WAWap").wap("email", null, u.email)
                        : null,
                      u.landlineNumber !== void 0
                        ? o("WAWap").wap(
                            "landline_number",
                            null,
                            u.landlineNumber,
                          )
                        : null,
                      u.mobileNumber !== void 0
                        ? o("WAWap").wap("mobile_number", null, u.mobileNumber)
                        : null,
                    )
                  : null,
              ),
            ),
            p = yield o("WADeprecatedSendIq").deprecatedSendIq(m, s);
          if (p.success) return p.result;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            p.errorCode,
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, o, a) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            n === void 0 && (n = !1);
            var s = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              u = {};
            if (
              ((u.is_registered = n),
              e !== void 0 && (u.entity_name = e),
              (u.entity_type = v(t)),
              a !== void 0 && (u.entity_type_custom = a),
              i)
            ) {
              var c = {};
              (i.email !== void 0 && (c.email = i.email),
                i.landlineNumber !== void 0 &&
                  (c.landline_number = i.landlineNumber),
                i.mobileNumber !== void 0 && (c.mobile_number = i.mobileNumber),
                (u.customer_care_details = c));
            }
            if (l) {
              var d = {};
              (l.name !== void 0 && (d.name = l.name),
                l.email !== void 0 && (d.email = l.email),
                l.landlineNumber !== void 0 &&
                  (d.landline_number = l.landlineNumber),
                l.mobileNumber !== void 0 && (d.mobile_number = l.mobileNumber),
                (u.grievance_officer_details = d));
            }
            var m = yield o(
              "WAWebBizSetMerchantCompliance",
            ).setMerchantCompliance({ biz_jid: s.toJid(), merchant_info: u });
            if (m.type === "success") return m.merchant_info;
            throw (
              m.type === "graphql-error"
                ? o(
                    "WAWebMaybeThrowCatalogErrors",
                  ).maybeThrowLocalErrorForCatalogQuery(m.error)
                : m.type,
              r("err")(
                "setMerchantComplianceGraphQL: error handling flow not implemented for " +
                  JSON.stringify(m),
              )
            );
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e) {
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
    ((l.getMerchantCompliance = u), (l.setMerchantCompliance = f));
  },
  98,
);
