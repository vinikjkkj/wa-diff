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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a = e.title,
        i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = d.jsx(r("WAWebDrawerSection.react"), {
              title: a,
              xstyle: o("WAWebUISpacing").uiPadding.vert8,
              children: n,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.forceLTR,
        r = e.label,
        a = e.value,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = d.jsx(R, { value: a, forceLTR: n })),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== r
        ? ((l = d.jsx(S, { label: r })), (t[3] = r), (t[4] = l))
        : (l = t[4]);
      var s;
      return (
        t[5] !== i || t[6] !== l
          ? ((s = d.jsxs(h, { children: [i, l] })),
            (t[5] = i),
            (t[6] = l),
            (t[7] = s))
          : (s = t[7]),
        s
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.keys,
        r = e.label,
        a = e.valuesMap,
        i;
      if (t[0] !== n || t[1] !== a) {
        var l;
        t[3] !== a
          ? ((l = function (t, n) {
              return a[n] ? t.concat(a[n]) : t;
            }),
            (t[3] = a),
            (t[4] = l))
          : (l = t[4]);
        var s = n.reduce(l, []);
        ((i = s.length ? s.join(", ") : p()),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i));
      } else i = t[2];
      var u = i,
        c;
      t[5] !== u
        ? ((c = d.jsx(R, { value: u })), (t[5] = u), (t[6] = c))
        : (c = t[6]);
      var m;
      t[7] !== r
        ? ((m = d.jsx(S, { label: r })), (t[7] = r), (t[8] = m))
        : (m = t[8]);
      var _;
      return (
        t[9] !== c || t[10] !== m
          ? ((_ = d.jsxs(h, { children: [c, m] })),
            (t[9] = c),
            (t[10] = m),
            (t[11] = _))
          : (_ = t[11]),
        _
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (u || (u = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.vert8,
          )),
          (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = d.jsx(r("WAWebDrawerBlock.react"), {
              multiline: !0,
              restrictSpacing: !0,
              children: d.jsx(
                "div",
                babelHelpers.extends({}, a, { children: n }),
              ),
            })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function y() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = d.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              testid: void 0,
              children: d.jsx(r("WAWebFlexItem.react"), {
                children: d.jsx(o("WAWebSpinner.react").Spinner, {}),
              }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.xstyle,
        a;
      t[0] !== n
        ? ((a = (u || (u = r("stylex"))).props(m.helpCenterBanner, n)),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(
            /*BTDS*/ "Indian law requires additional information from businesses selling online.",
          )),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = d.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getIndiaEcommerceComplianceFaqUrl(),
            children: s._(/*BTDS*/ "Learn more"),
          })),
          (t[3] = l))
        : (l = t[3]);
      var c;
      return (
        t[4] !== a
          ? ((c = d.jsxs(
              "div",
              babelHelpers.extends({}, a, {
                "data-testid": void 0,
                children: [i, " ", l],
              }),
            )),
            (t[4] = a),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
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
      var t = o("react-compiler-runtime").c(3),
        n = e.label,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { className: "x1lliihq xo5v014" }), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = d.jsx(
              "div",
              babelHelpers.extends({}, r, {
                "data-testid": void 0,
                children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
                  as: "span",
                  children: n,
                }),
              }),
            )),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.forceLTR,
        a = e.value,
        i = n === void 0 ? !1 : n,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = r("WAWebL10N").isRTL()), (t[0] = l))
        : (l = t[0]);
      var s = l,
        c;
      t[1] !== i
        ? ((c = (u || (u = r("stylex"))).props(
            m.fieldValue,
            o("WAWebUISpacing").uiMargin.vert3,
            s && i && m.displayRight,
          )),
          (t[1] = i),
          (t[2] = c))
        : (c = t[2]);
      var _ = i || !s ? "ltr" : "rtl",
        f;
      t[3] !== a
        ? ((f = a == null || a === "" || a === 0 || a === !1 ? p() : a),
          (t[3] = a),
          (t[4] = f))
        : (f = t[4]);
      var g;
      return (
        t[5] !== c || t[6] !== _ || t[7] !== f
          ? ((g = d.jsx(
              "div",
              babelHelpers.extends({}, c, {
                dir: _,
                "data-testid": void 0,
                children: f,
              }),
            )),
            (t[5] = c),
            (t[6] = _),
            (t[7] = f),
            (t[8] = g))
          : (g = t[8]),
        g
      );
    }
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
