__d(
  "WAWebComplianceInfo.react",
  [
    "fbt",
    "WALogger",
    "WAWebBizBusinessComplianceContactErrorModal",
    "WAWebBizComplianceUtil",
    "WAWebBusinessProfileCollection",
    "WAWebDrawerBlock.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebL10N",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = {
        fieldValue: {
          display: "x1lliihq",
          wordBreak: "x13faqbe",
          whiteSpace: "xti2ec1",
          $$css: !0,
        },
        helpCenterBanner: {
          fontSize: "x1f6kntn",
          lineHeight: "x37zpob",
          $$css: !0,
        },
        displayRight: { textAlign: "xp4054r", $$css: !0 },
      },
      p = function () {
        return s._(/*BTDS*/ "Not provided");
      };
    function _(e) {
      var t = e.children,
        n = e.title;
      return d.jsx(r("WAWebDrawerSection.react"), {
        title: n,
        xstyle: o("WAWebUISpacing").uiPadding.vert8,
        children: t,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.forceLTR,
        n = e.label,
        r = e.value;
      return d.jsxs(h, {
        children: [d.jsx(R, { value: r, forceLTR: t }), d.jsx(S, { label: n })],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.keys,
        n = e.label,
        r = e.valuesMap,
        o = t.reduce(function (e, t) {
          return r[t] ? e.concat(r[t]) : e;
        }, []),
        a = o.length ? o.join(", ") : p();
      return d.jsxs(h, {
        children: [d.jsx(R, { value: a }), d.jsx(S, { label: n })],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.children;
      return d.jsx(r("WAWebDrawerBlock.react"), {
        multiline: !0,
        restrictSpacing: !0,
        children: d.jsx(
          "div",
          babelHelpers.extends(
            {},
            (u || (u = r("stylex"))).props(o("WAWebUISpacing").uiPadding.vert8),
            { children: t },
          ),
        ),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return d.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        testid: void 0,
        children: d.jsx(r("WAWebFlexItem.react"), {
          children: d.jsx(o("WAWebSpinner.react").Spinner, {}),
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.xstyle;
      return d.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props(m.helpCenterBanner, t),
          {
            "data-testid": void 0,
            children: [
              s._(
                /*BTDS*/ "Indian law requires additional information from businesses selling online.",
              ),
              " ",
              d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: o("WAWebFaqUrl").getIndiaEcommerceComplianceFaqUrl(),
                children: s._(/*BTDS*/ "Learn more"),
              }),
            ],
          },
        ),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = function (t) {
        var e = Array.isArray(t) ? t[0] : t;
        return e.serialize();
      },
      v = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.update(t, {
              getMerchantCompliance: !0,
            }),
            r = b(n);
          if (r) return r.legalEntityDetails || void 0;
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "compliance: cannot fetch business details (",
                ")",
              ])),
            t.toString(),
          );
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })();
    function S(e) {
      var t = e.label;
      return d.jsx("div", {
        className: "x1lliihq xo5v014",
        "data-testid": void 0,
        children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
          as: "span",
          children: t,
        }),
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.forceLTR,
        n = t === void 0 ? !1 : t,
        a = e.value,
        i = r("WAWebL10N").isRTL();
      return d.jsx(
        "div",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props(
            m.fieldValue,
            o("WAWebUISpacing").uiMargin.vert3,
            i && n && m.displayRight,
          ),
          {
            dir: n || !i ? "ltr" : "rtl",
            "data-testid": void 0,
            children: a == null || a === "" || a === 0 || a === !1 ? p() : a,
          },
        ),
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    var L = function (t) {
        var e = t.contactId,
          n = t.customerCareDetails,
          a = t.field,
          i = t.value;
        o("WAWebBizComplianceUtil").existsCustomerCareDetailsContact(
          n,
          e,
          a,
          i,
        ) ||
          r("WAWebBizBusinessComplianceContactErrorModal")(
            s._(
              /*BTDS*/ "At least one phone number is required. Please provide another phone number before removing this.",
            ),
          );
      },
      E = function (t, n, a, i) {
        o("WAWebBizComplianceUtil").existsGrievanceOfficerDetailsContact(
          t,
          n,
          a,
          i,
        ) ||
          r("WAWebBizBusinessComplianceContactErrorModal")(
            s._(
              /*BTDS*/ "At least one contact method is required. Please provide another contact method first before removing this.",
            ),
          );
      };
    ((l.ComplianceInfoGroup = _),
      (l.ComplianceInfoPrimitiveField = f),
      (l.ComplianceInfoStructuralField = g),
      (l.ComplianceInfoLoading = y),
      (l.ComplianceInfoHelpCenterBanner = C),
      (l.getLegalEntityDetails = v),
      (l.handleCustomerCareDetailsError = L),
      (l.handleGrievanceOfficerDetailsError = E));
  },
  226,
);
