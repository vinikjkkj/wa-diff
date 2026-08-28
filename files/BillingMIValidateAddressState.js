__d(
  "BillingMIValidateAddressState",
  [
    "BillingError",
    "BillingMIValidateAddressScreen.react",
    "BillingMIValidateAddressStateQuery.graphql",
    "BillingWizardDisplayState",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c =
        e !== void 0
          ? e
          : (e = n("BillingMIValidateAddressStateQuery.graphql")),
      d = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "mi_validate_address_state_display"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var o = t.prototype;
        return (
          (o.onEnter = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n,
                  o,
                  a,
                  i,
                  l,
                  s,
                  u,
                  d,
                  m,
                  p,
                  _,
                  f,
                  g,
                  h,
                  y,
                  C,
                  b,
                  v,
                  S = t.relay.fetchQuery,
                  R = { event_action: "enter", event_side: "client_side" };
                if (e.country !== "BR" || !e.registrationNumber)
                  throw new (r("BillingError"))(
                    "BillingMIValidateAddressState mutation came back with no CRMAddress ID",
                    "mutation response came back with missing or invalid value",
                    babelHelpers.extends({}, R, { event_result: "failure" }),
                    { action: "mutate" },
                    "error",
                  );
                var L = yield S({
                  query: c,
                  queryName: c.params.name,
                  variables: {
                    cnpj: (n = e.registrationNumber) != null ? n : "",
                  },
                });
                return (
                  (this.validatedAddress = {
                    city:
                      (o =
                        L == null || (a = L.tax_info_cnpj_wrapper) == null
                          ? void 0
                          : a.city) != null
                        ? o
                        : "",
                    country: (i = e.country) != null ? i : "BR",
                    needsValidation: !1,
                    registrationNumber:
                      (l =
                        L == null || (s = L.tax_info_cnpj_wrapper) == null
                          ? void 0
                          : s.cnpj) != null
                        ? l
                        : "",
                    state:
                      (u =
                        L == null || (d = L.tax_info_cnpj_wrapper) == null
                          ? void 0
                          : d.state) != null
                        ? u
                        : "",
                    street1:
                      (m =
                        L == null || (p = L.tax_info_cnpj_wrapper) == null
                          ? void 0
                          : p.address_line_1) != null
                        ? m
                        : "",
                    street2:
                      (_ =
                        L == null || (f = L.tax_info_cnpj_wrapper) == null
                          ? void 0
                          : f.address_line_2) != null
                        ? _
                        : "",
                    street3:
                      (g =
                        L == null || (h = L.tax_info_cnpj_wrapper) == null
                          ? void 0
                          : h.address_line_3) != null
                        ? g
                        : "",
                    street4:
                      (y =
                        L == null || (C = L.tax_info_cnpj_wrapper) == null
                          ? void 0
                          : C.address_line_4) != null
                        ? y
                        : "",
                    zipCode:
                      (b =
                        L == null || (v = L.tax_info_cnpj_wrapper) == null
                          ? void 0
                          : v.postal_code) != null
                        ? b
                        : "",
                  }),
                  { newProps: e }
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.onDisplay = function (t, n) {
            var e = function (t, r, o, a) {
              var e = a;
              return (
                t === "BILL_TO"
                  ? (e.billToAddress = { id: r, singleLineAddress: o })
                  : t === "LIABLE_TO"
                    ? (e.liableAddress = { id: r, singleLineAddress: o })
                    : t === "SOLD_TO" &&
                      (e.soldToAddress = { id: r, singleLineAddress: o }),
                n("onNext", { miInfo: e })
              );
            };
            return u.jsx(
              r("BillingMIValidateAddressScreen.react"),
              babelHelpers.extends({}, t, {
                onNext: e,
                validatedAddress: this.validatedAddress,
              }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = d;
  },
  98,
);
