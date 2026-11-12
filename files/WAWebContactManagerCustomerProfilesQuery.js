__d(
  "WAWebContactManagerCustomerProfilesQuery",
  [
    "WAJids",
    "WALogger",
    "WAWebContactManagerCustomerProfilesQuery.graphql",
    "WAWebCustomerManagerCustomerProfileDecoders",
    "WAWebCustomerManagerProfileRequest",
    "WAWebCustomerProfileBirthday",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebContactManagerCustomerProfilesQuery.graphql")),
      c = 50,
      d = 21,
      m = (d - 1) * c,
      p = { cursor: null, records: [] };
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return g(yield h(e), e.candidateLids != null);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      if (e == null && t)
        throw r("err")(
          "[CustomerManager] fetchCustomerProfilePage: no scoped profile response",
        );
      return e != null ? e : p;
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.candidateLids != null && e.candidateLids.length === 0) return p;
          var t = yield E(e);
          return t == null ? null : { cursor: t.cursor, records: R(t) };
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return v(e != null ? e : {}, e == null ? void 0 : e.cursor, 0, []).then(
        function (e) {
          return e.records;
        },
      );
    }
    function b(e) {
      return v(e != null ? e : {}, e == null ? void 0 : e.cursor, 0, []).then(
        function (e) {
          return e.isComplete ? e.records : null;
        },
      );
    }
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield h(babelHelpers.extends({}, e, { cursor: t }));
            return a == null
              ? { isComplete: !1, records: r }
              : (r.push.apply(r, a.records),
                a.cursor == null
                  ? { isComplete: !0, records: r }
                  : n + 1 >= d
                    ? (o("WALogger")
                        .WARN(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[CustomerManager] fetchCustomerProfileRecords: stopped at ",
                              " pages with a cursor still open",
                            ])),
                          d,
                        )
                        .sendLogs("customer_manager_profiles_page_cap_hit"),
                      { isComplete: !1, records: r })
                    : v(e, a.cursor, n + 1, r));
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t = [];
      for (var n of (r = e == null ? void 0 : e.profiles) != null ? r : []) {
        var r,
          a =
            n.lid_jid != null
              ? o("WAJids").validateLidUserJid(n.lid_jid)
              : null;
        a != null &&
          t.push({
            acquisitionSource: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toProfileAcquisitionSourceId(n.acquisition_source),
            address: n.address,
            birthday: o("WAWebCustomerProfileBirthday").parseBirthdayFromIso(
              n.dob,
            ),
            birthdayIso: n.dob,
            chatJid: a,
            customFieldValues: L(n.custom_field_values),
            email: n.email,
            lastOrderDescription: n.last_order,
            leadStage: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toLeadStageType(n.lead_stage),
            modifiedAt: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).latestUpdateTs(
              n.last_updates.map(function (e) {
                var t = e.ts;
                return t;
              }),
            ),
            name: n.name,
          });
      }
      return t;
    }
    function L(e) {
      var t = [];
      for (var n of e != null ? e : []) {
        var r = n.custom_field_definition,
          a = r == null ? void 0 : r.id,
          i = r == null ? void 0 : r.name,
          l = r == null ? void 0 : r.field_type;
        r == null ||
          a == null ||
          i == null ||
          l == null ||
          t.push({
            currency: r.currency,
            fieldId: a,
            fieldName: i,
            value: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).formatCustomFieldExportValue({
              currencyDecimalPlaces: r.currency_decimal_places,
              dateValue: n.date_value,
              enumLabels: r.enum_values,
              enumOptionKey: n.enum_option_key,
              enumOptionKeys: r.enum_option_keys,
              fieldType: l,
              moneyAmount: n.money_amount,
              numericValue: n.numeric_value,
              textValue: n.text_value,
            }),
          });
      }
      return t;
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebCustomerManagerProfileRequest",
          ).runCustomerProfileRequest(
            "fetchCustomerProfiles",
            function (t) {
              var n, r, a;
              return o("WAWebRelayClient").fetchQuery(
                u,
                {
                  input: {
                    candidate_lids: (n = e.candidateLids) != null ? n : [],
                    filters: ((r = e.filters) != null ? r : []).map(
                      function (e) {
                        var t = e.fieldName,
                          n = e.filterText;
                        return { field_name: t, filter_text: n };
                      },
                    ),
                    sort_column: e.sortColumn,
                    sort_descending: e.sortDescending === !0,
                    page_size: (a = e.pageSize) != null ? a : c,
                    cursor: e.cursor,
                  },
                  includeCustomFields: e.includeCustomFields === !0,
                },
                t,
              );
            },
            { rateLimitSurface: "read" },
          );
          return t == null ? void 0 : t.xfb_wa_customer_profiles;
        })),
        k.apply(this, arguments)
      );
    }
    ((l.MAX_COMPLETE_PROFILE_RECORDS = m),
      (l.fetchCustomerProfilePage = _),
      (l.fetchCustomerProfileRecords = C),
      (l.fetchCompleteCustomerProfileRecords = b),
      (l.logIfRateLimited = o(
        "WAWebCustomerManagerProfileRequest",
      ).logIfRateLimited));
  },
  98,
);
