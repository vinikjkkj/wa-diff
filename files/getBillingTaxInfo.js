__d(
  "getBillingTaxInfo",
  [
    "BillingAccountInformationUtilsEurope",
    "RelayHooks",
    "getBillingCountryCurrencyTimezone",
    "getBillingTaxInfo_agencyInfo.graphql",
    "getBillingTaxInfo_paymentAccount.graphql",
    "getBillingTaxInfo_taxInfo.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0 ? e : (e = n("getBillingTaxInfo_paymentAccount.graphql")),
      d = s !== void 0 ? s : (s = n("getBillingTaxInfo_taxInfo.graphql")),
      m = u !== void 0 ? u : (u = n("getBillingTaxInfo_agencyInfo.graphql")),
      p = function (t) {
        var e,
          n,
          r,
          a,
          i,
          l,
          s,
          u,
          c,
          p,
          f,
          g,
          h,
          y,
          C,
          b,
          v,
          S,
          R,
          L,
          E,
          k,
          I,
          T,
          D,
          x,
          $,
          P,
          N,
          M,
          w,
          A,
          F,
          O,
          B,
          W,
          q,
          U,
          V,
          H,
          G,
          z,
          j,
          K,
          Q,
          X,
          Y,
          J = o(
            "getBillingCountryCurrencyTimezone",
          ).getBillingCountryCurrencyTimezone(
            o("RelayHooks").readInlineData(
              o("getBillingCountryCurrencyTimezone")
                .countryCurrencyTimezoneFragment,
              t,
            ),
          ),
          Z = J.country,
          ee = J.currency,
          te = J.timezone,
          ne = o("RelayHooks").readInlineData(
            d,
            (e =
              t == null || (n = t.billable_account) == null
                ? void 0
                : n.billable_account_tax_info) != null
              ? e
              : t == null
                ? void 0
                : t.tax_info,
          ),
          re = o("RelayHooks").readInlineData(
            m,
            t == null || (r = t.billable_account) == null
              ? void 0
              : r.agency_client_declaration,
          ),
          oe = o("BillingAccountInformationUtilsEurope").getVATPrefix(
            Z,
            ne == null ? void 0 : ne.tax_id,
          ),
          ae = _([
            {
              condition: Z === "FR" || Z === "MX",
              fields: {
                clientAddress1:
                  (a =
                    re == null || (i = re.client_address) == null
                      ? void 0
                      : i.street) != null
                    ? a
                    : "",
                clientAddress2:
                  (l =
                    re == null || (s = re.client_address) == null
                      ? void 0
                      : s.building) != null
                    ? l
                    : "",
                clientCity:
                  (u =
                    re == null || (c = re.client_address) == null
                      ? void 0
                      : c.city) != null
                    ? u
                    : "",
                clientCountry:
                  (p =
                    re == null || (f = re.client_address) == null
                      ? void 0
                      : f.country) != null
                    ? p
                    : "",
                clientEmailAddress:
                  (g = re == null ? void 0 : re.client_email_address) != null
                    ? g
                    : "",
                clientName:
                  (h = re == null ? void 0 : re.client_name) != null ? h : "",
                clientPostalCode:
                  (y =
                    re == null || (C = re.client_address) == null
                      ? void 0
                      : C.postal_code) != null
                    ? y
                    : "",
                clientState:
                  (b =
                    re == null || (v = re.client_address) == null
                      ? void 0
                      : v.region) != null
                    ? b
                    : "",
                hasWrittenMandateFromAdvertiser:
                  (S =
                    re == null
                      ? void 0
                      : re.has_written_mandate_from_advertiser) != null
                    ? S
                    : !1,
                isAdvertisingForMultipleClients:
                  (R =
                    re == null
                      ? void 0
                      : re.is_advertising_for_multiple_clients) != null
                    ? R
                    : !1,
                isAgencyRepresentingClient:
                  (L = re == null ? void 0 : re.agency_representing_client) !=
                  null
                    ? L
                    : !1,
                isClientBasedInFrance:
                  (E = re == null ? void 0 : re.client_based_in_france) != null
                    ? E
                    : !1,
                isClientPayingInvoices:
                  (k = re == null ? void 0 : re.is_client_paying_invoices) !=
                  null
                    ? k
                    : !1,
              },
            },
            {
              condition:
                (t == null || (I = t.billable_account) == null
                  ? void 0
                  : I.require_additional_info_for_enhanced_authentication) ===
                !0,
              fields: {
                businessVerificationMethod:
                  ne == null ? void 0 : ne.business_verification_type,
                website:
                  (T = ne == null ? void 0 : ne.website) != null ? T : "",
              },
            },
            {
              condition:
                o(
                  "BillingAccountInformationUtilsEurope",
                ).eupopeanCountryCodes.indexOf(Z) !== -1,
              fields: { taxIDCountry: oe === "EL" ? "GR" : oe },
            },
            {
              condition:
                (t == null || (D = t.billable_account) == null
                  ? void 0
                  : D.__typename) === "WhatsAppBusinessAccount",
              fields: {
                poNumber:
                  (x =
                    t == null || ($ = t.billable_account) == null
                      ? void 0
                      : $.purchase_order_number) != null
                    ? x
                    : "",
              },
            },
          ]),
          ie = Z === "BR" && (t == null ? void 0 : t.brazilGK) === !0,
          le =
            (P =
              ne == null || (N = ne.intl_address) == null
                ? void 0
                : N.street) != null
              ? P
              : "",
          se = "",
          ue =
            (M =
              ne == null || (w = ne.intl_address) == null
                ? void 0
                : w.street) != null
              ? M
              : "",
          ce =
            (A =
              ne == null || (F = ne.intl_address) == null
                ? void 0
                : F.building) != null
              ? A
              : "";
        if (ie) {
          var de = le,
            me = le.match(/^(\d+)\s(.*)$/);
          (me != null && ((se = me[1]), (de = me[2])),
            (ue = de.split(",")[0].trim()),
            (ce = de.substring(de.indexOf(",") + 1).trim()));
        }
        return babelHelpers.extends(
          {
            address1: ue,
            address2: ce,
            city:
              (O =
                ne == null || (B = ne.intl_address) == null
                  ? void 0
                  : B.city) != null
                ? O
                : "",
            country: Z,
            currency: ee,
            email: (W = ne == null ? void 0 : ne.email) != null ? W : "",
            isPersonal:
              (q = ne == null ? void 0 : ne.is_personal) != null ? q : !1,
            name: (U = ne == null ? void 0 : ne.business_name) != null ? U : "",
            phoneNumber:
              (V = ne == null ? void 0 : ne.phone_number) != null ? V : "",
            postalCode:
              (H =
                ne == null || (G = ne.intl_address) == null
                  ? void 0
                  : G.postal_code) != null
                ? H
                : "",
            secondaryTaxID:
              (z = ne == null ? void 0 : ne.second_tax_id) != null ? z : "",
            secondTaxIDType: ne == null ? void 0 : ne.second_tax_id_type_enum,
            state:
              (j =
                ne == null || (K = ne.intl_address) == null
                  ? void 0
                  : K.region) != null
                ? j
                : "",
            streetNumber: se,
            taxExempt:
              (Q = ne == null ? void 0 : ne.tax_exempt) != null ? Q : !1,
            taxID: (X = ne == null ? void 0 : ne.tax_id) != null ? X : "",
            taxIDType: ne == null ? void 0 : ne.tax_id_type_enum,
            taxIDVerificationCode:
              (Y = ne == null ? void 0 : ne.tax_id_verification_code) != null
                ? Y
                : "",
            taxRegistrationStatus: "",
            timezone: te,
          },
          ae,
        );
      };
    function _(e) {
      var t = {};
      for (var n of e) {
        var r = n.condition,
          o = n.fields;
        r && (t = babelHelpers.extends({}, t, o));
      }
      return t;
    }
    ((l.taxInfoPaymentAccountFragment = c),
      (l.agencyInfoFragment = m),
      (l.getBillingTaxInfo = p));
  },
  98,
);
