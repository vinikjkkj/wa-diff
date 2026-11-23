__d(
  "WAWebContactManagerCustomerProfilesQuery",
  [
    "WAJids",
    "WALogger",
    "WAWebContactManagerCustomerProfilesQuery.graphql",
    "WAWebCustomerManagerCustomFieldTypes",
    "WAWebCustomerManagerCustomerProfileDecoders",
    "WAWebCustomerManagerProfileRequest",
    "WAWebCustomerProfileBirthday",
    "WAWebRelayClient",
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
    async function _(e) {
      return f(await g(e), e.candidateLids != null);
    }
    function f(e, t) {
      if (e == null && t)
        throw r("err")(
          "[CustomerManager] fetchCustomerProfilePage: no scoped profile response",
        );
      return e != null ? e : p;
    }
    async function g(e) {
      if (e.candidateLids != null && e.candidateLids.length === 0) return p;
      var t = await S(e);
      return t == null ? null : { cursor: t.cursor, records: b(t) };
    }
    function h(e) {
      return C(e != null ? e : {}, e == null ? void 0 : e.cursor, 0, []).then(
        function (e) {
          return e.records;
        },
      );
    }
    function y(e) {
      return C(e != null ? e : {}, e == null ? void 0 : e.cursor, 0, []).then(
        function (e) {
          return e.isComplete ? e.records : null;
        },
      );
    }
    async function C(e, t, n, r) {
      var a = await g(babelHelpers.extends({}, e, { cursor: t }));
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
              : C(e, a.cursor, n + 1, r));
    }
    function b(e) {
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
            customFieldValues: v(n.custom_field_values),
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
    function v(e) {
      var t = [];
      for (var n of e != null ? e : []) {
        var r,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
          m = n.custom_field_definition,
          p = m == null ? void 0 : m.id,
          _ = m == null ? void 0 : m.name,
          f = m == null ? void 0 : m.field_type;
        if (!(m == null || p == null || _ == null || f == null)) {
          var g = f;
          t.push({
            currency: m.currency,
            currencyDecimalPlaces:
              (r = m.currency_decimal_places) != null ? r : null,
            dateValue: (a = n.date_value) != null ? a : null,
            enumOptionKey: (i = n.enum_option_key) != null ? i : null,
            enumOptionKeys: [].concat(
              (l = m.enum_option_keys) != null ? l : [],
            ),
            enumValues: [].concat((s = m.enum_values) != null ? s : []),
            fieldId: p,
            fieldName: _,
            fieldType: o(
              "WAWebCustomerManagerCustomFieldTypes",
            ).toCustomFieldType(g),
            moneyAmount: (u = n.money_amount) != null ? u : null,
            numericValue: (c = n.numeric_value) != null ? c : null,
            textValue: (d = n.text_value) != null ? d : null,
            value: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).formatCustomFieldExportValue({
              currencyDecimalPlaces: m.currency_decimal_places,
              dateValue: n.date_value,
              enumLabels: m.enum_values,
              enumOptionKey: n.enum_option_key,
              enumOptionKeys: m.enum_option_keys,
              fieldType: g,
              moneyAmount: n.money_amount,
              numericValue: n.numeric_value,
              textValue: n.text_value,
            }),
          });
        }
      }
      return t;
    }
    async function S(e) {
      var t = await o(
        "WAWebCustomerManagerProfileRequest",
      ).runCustomerProfileRequest(
        "fetchCustomerProfiles",
        function (t) {
          var n, r, a, i;
          return o("WAWebRelayClient").fetchQuery(
            u,
            {
              input: {
                candidate_lids: (n = e.candidateLids) != null ? n : [],
                custom_field_filters: ((r = e.customFieldFilters) != null
                  ? r
                  : []
                ).map(function (e) {
                  return {
                    custom_field_id: e.custom_field_id,
                    date_value: e.date_value,
                    enum_option_key: e.enum_option_key,
                    money_amount: e.money_amount,
                    numeric_value: e.numeric_value,
                    text_value: e.text_value,
                  };
                }),
                filters: ((a = e.filters) != null ? a : []).map(function (e) {
                  var t = e.fieldName,
                    n = e.filterText;
                  return { field_name: t, filter_text: n };
                }),
                sort_column: e.sortColumn,
                sort_descending: e.sortDescending === !0,
                page_size: (i = e.pageSize) != null ? i : c,
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
    }
    ((l.MAX_COMPLETE_PROFILE_RECORDS = m),
      (l.fetchCustomerProfilePage = _),
      (l.fetchCustomerProfileRecords = h),
      (l.fetchCompleteCustomerProfileRecords = y));
  },
  98,
);
