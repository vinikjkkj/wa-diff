__d(
  "WAWebBizMerchantDetailsDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebBizComplianceUtil",
    "WAWebBusinessProfileCollection",
    "WAWebComplianceInfo.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useState;
    function f(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, u),
        l = i.contactId,
        c = _(void 0),
        m = c[0],
        f = c[1],
        g = _(!0),
        h = g[0],
        y = g[1];
      p(function () {
        var t = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.update(l, {
                getMerchantCompliance: !0,
              }),
              n = Array.isArray(t) ? t[0] : t,
              r = n.serialize();
            r
              ? (f(r.legalEntityDetails || void 0), y(!1))
              : o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "compliance: cannot fetch business details (",
                      ")",
                    ])),
                  l.toString(),
                );
          });
          return function () {
            return t.apply(this, arguments);
          };
        })();
        t();
      }, []);
      var C = m != null ? m : {},
        b = C.customerCareDetails,
        v = C.entityName,
        S = C.grievanceOfficerDetails,
        R = o("WAWebBizComplianceUtil").getEntityTypeText(m);
      return d.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: a,
          theme: "striped",
          tsNavigationData: {
            surface: "unknown",
            viewName: "biz-merchant-details",
          },
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Business details"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onCancel: i.onClose,
            }),
            d.jsx(r("WAWebDrawerBody.react"), {
              theme: h ? "center-content" : void 0,
              children: h
                ? d.jsx(
                    o("WAWebComplianceInfo.react").ComplianceInfoLoading,
                    {},
                  )
                : d.jsxs(d.Fragment, {
                    children: [
                      d.jsxs(
                        o("WAWebComplianceInfo.react").ComplianceInfoGroup,
                        {
                          children: [
                            d.jsx(
                              o("WAWebComplianceInfo.react")
                                .ComplianceInfoPrimitiveField,
                              {
                                value: v,
                                label: s._(/*BTDS*/ "Legal name of business"),
                              },
                            ),
                            d.jsx(
                              o("WAWebComplianceInfo.react")
                                .ComplianceInfoPrimitiveField,
                              {
                                value: R,
                                label: s._(/*BTDS*/ "Business type"),
                              },
                            ),
                          ],
                        },
                      ),
                      d.jsxs(
                        o("WAWebComplianceInfo.react").ComplianceInfoGroup,
                        {
                          title: s._(/*BTDS*/ "Customer Care information"),
                          children: [
                            d.jsx(
                              o("WAWebComplianceInfo.react")
                                .ComplianceInfoPrimitiveField,
                              {
                                value: b == null ? void 0 : b.mobileNumber,
                                label: s._(/*BTDS*/ "Mobile phone number"),
                                forceLTR: !0,
                              },
                            ),
                            d.jsx(
                              o("WAWebComplianceInfo.react")
                                .ComplianceInfoPrimitiveField,
                              {
                                value: b == null ? void 0 : b.landlineNumber,
                                label: s._(/*BTDS*/ "Landline phone number"),
                                forceLTR: !0,
                              },
                            ),
                            d.jsx(
                              o("WAWebComplianceInfo.react")
                                .ComplianceInfoPrimitiveField,
                              {
                                value: b == null ? void 0 : b.email,
                                label: s._(/*BTDS*/ "Email address"),
                              },
                            ),
                          ],
                        },
                      ),
                      d.jsxs(
                        o("WAWebComplianceInfo.react").ComplianceInfoGroup,
                        {
                          title: s._(/*BTDS*/ "Grievance Officer information"),
                          children: [
                            d.jsx(
                              o("WAWebComplianceInfo.react")
                                .ComplianceInfoPrimitiveField,
                              {
                                value: S == null ? void 0 : S.name,
                                label: s._(/*BTDS*/ "Name"),
                              },
                            ),
                            d.jsx(
                              o("WAWebComplianceInfo.react")
                                .ComplianceInfoPrimitiveField,
                              {
                                value: S == null ? void 0 : S.mobileNumber,
                                label: s._(/*BTDS*/ "Mobile phone number"),
                                forceLTR: !0,
                              },
                            ),
                            d.jsx(
                              o("WAWebComplianceInfo.react")
                                .ComplianceInfoPrimitiveField,
                              {
                                value: S == null ? void 0 : S.landlineNumber,
                                label: s._(/*BTDS*/ "Landline phone number"),
                              },
                            ),
                            d.jsx(
                              o("WAWebComplianceInfo.react")
                                .ComplianceInfoPrimitiveField,
                              {
                                value: S == null ? void 0 : S.email,
                                label: s._(/*BTDS*/ "Email address"),
                              },
                            ),
                          ],
                        },
                      ),
                    ],
                  }),
            }),
          ],
        },
        "merchant-details-modal",
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
