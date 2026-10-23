__d(
  "WAWebContactManagerCustomerProfilesQuery",
  [
    "WAJids",
    "WALogger",
    "WAWebContactManagerCustomerProfilesQuery.graphql",
    "WAWebCustomerManagerCustomerProfileDecoders",
    "WAWebCustomerManagerRequestErrors",
    "WAWebCustomerProfileBirthday",
    "WAWebFBLogger",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
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
      m = { cursor: null, records: [] };
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return f(yield g(e), e.candidateLids != null);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      if (e == null && t)
        throw r("err")(
          "[CustomerManager] fetchCustomerProfilePage: no scoped profile response",
        );
      return e != null ? e : m;
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.candidateLids != null && e.candidateLids.length === 0) return m;
          var t = yield L(e);
          return t == null ? null : { cursor: t.cursor, records: S(t) };
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return b(e != null ? e : {}, e == null ? void 0 : e.cursor, 0, []).then(
        function (e) {
          return e.records;
        },
      );
    }
    function C(e) {
      return b(e != null ? e : {}, e == null ? void 0 : e.cursor, 0, []).then(
        function (e) {
          return e.isComplete ? e.records : null;
        },
      );
    }
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield g(babelHelpers.extends({}, e, { cursor: t }));
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
                    : b(e, a.cursor, n + 1, r));
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e) {
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
            customFieldValues: R(n.custom_field_values),
            email: n.email,
            lastOrder: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toOptionalUnixTime(n.last_order_date),
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
    function R(e) {
      var t = [];
      for (var n of e != null ? e : []) {
        var r,
          a,
          i = n.custom_field_definition,
          l = i == null ? void 0 : i.id,
          s = i == null ? void 0 : i.name,
          u = i == null ? void 0 : i.field_type;
        i == null ||
          l == null ||
          s == null ||
          u == null ||
          t.push({
            currency: i.currency,
            fieldId: l,
            fieldName: s,
            value: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).formatCustomFieldExportValue({
              currencyDecimalPlaces: i.currency_decimal_places,
              dateValue: n.date_value,
              enumLabels: (r = i.enum_values) != null ? r : [],
              enumOptionKey: n.enum_option_key,
              enumOptionKeys: (a = i.enum_option_keys) != null ? a : [],
              fieldType: u,
              moneyAmount: n.money_amount,
              numericValue: n.numeric_value,
              textValue: n.text_value,
            }),
          });
      }
      return t;
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (n.type !== "success")
            throw r("err")(
              "[CustomerManager] fetchCustomerProfiles: no access token (" +
                n.type +
                ")",
            );
          yield r("WAWebNetworkStatus").waitIfOffline();
          var a;
          try {
            var i, l;
            a = yield o("WAWebRelayClient").fetchQuery(
              u,
              {
                input: {
                  candidate_lids: (i = e.candidateLids) != null ? i : [],
                  filters: ((l = e.filters) != null ? l : []).map(function (e) {
                    var t = e.fieldName,
                      n = e.filterText;
                    return { field_name: t, filter_text: n };
                  }),
                  sort_column: e.sortColumn,
                  sort_descending: e.sortDescending === !0,
                  page_size: c,
                  cursor: e.cursor,
                },
                includeCustomFields: e.includeCustomFields === !0,
              },
              { accessToken: n.token, environmentType: "facebook" },
            );
          } catch (e) {
            throw (
              k(e, "read"),
              o(
                "WAWebCustomerManagerRequestErrors",
              ).asCustomerManagerRequestError(e)
            );
          }
          return (t = a) == null ? void 0 : t.xfb_wa_customer_profiles;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      o("WAWebGraphQLServerError").isRateLimitError(e) &&
        o("WAWebFBLogger")
          .WAWebFBLogger()
          .catching(r("getErrorSafe")(e))
          .warn(
            "[CustomerManager] customer profile %s rate limited (customer_manager_profiles_rate_limited)",
            t,
          );
    }
    ((l.fetchCustomerProfilePage = p),
      (l.fetchCustomerProfileRecords = y),
      (l.fetchCompleteCustomerProfileRecords = C),
      (l.logIfRateLimited = k));
  },
  98,
);
