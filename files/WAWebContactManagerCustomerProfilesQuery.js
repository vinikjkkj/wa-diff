__d(
  "WAWebContactManagerCustomerProfilesQuery",
  [
    "WAJids",
    "WALogger",
    "WAWebContactManagerCustomerProfileDecoders",
    "WAWebContactManagerCustomerProfilesQuery.graphql",
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
          var t;
          return (t = yield f(e)) != null ? t : m;
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
          if (e.candidateLids != null && e.candidateLids.length === 0) return m;
          var t = yield S(e);
          return t == null ? null : { cursor: t.cursor, records: v(t) };
        })),
        g.apply(this, arguments)
      );
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
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield f(babelHelpers.extends({}, e, { cursor: t }));
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
                              "[ContactManager] fetchCustomerProfileRecords: stopped at ",
                              " pages with a cursor still open",
                            ])),
                          d,
                        )
                        .sendLogs("customer_manager_profiles_page_cap_hit"),
                      { isComplete: !1, records: r })
                    : C(e, a.cursor, n + 1, r));
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      var t = [];
      for (var n of (r = e == null ? void 0 : e.profiles) != null ? r : []) {
        var r,
          a = n.lid;
        a == null ||
          a === "" ||
          t.push({
            acquisitionSource: o(
              "WAWebContactManagerCustomerProfileDecoders",
            ).toProfileAcquisitionSourceId(n.acquisition_source),
            address: n.address,
            birthday: o("WAWebCustomerProfileBirthday").parseBirthdayFromIso(
              n.dob,
            ),
            birthdayIso: n.dob,
            chatJid: o("WAJids").toLidUserJid(a),
            email: n.email,
            lastOrder: o(
              "WAWebContactManagerCustomerProfileDecoders",
            ).toOptionalUnixTime(n.last_order_date),
            leadStage: o(
              "WAWebContactManagerCustomerProfileDecoders",
            ).toLeadStageType(n.lead_stage),
            modifiedAt: o(
              "WAWebContactManagerCustomerProfileDecoders",
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
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (n.type !== "success")
            throw r("err")(
              "[ContactManager] fetchCustomerProfiles: no access token (" +
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
              },
              { accessToken: n.token, environmentType: "facebook" },
            );
          } catch (e) {
            throw (L(e, "read"), e);
          }
          return (t = a) == null ? void 0 : t.xfb_wa_customer_profiles;
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      o("WAWebGraphQLServerError").isRateLimitError(e) &&
        o("WAWebFBLogger")
          .WAWebFBLogger()
          .catching(r("getErrorSafe")(e))
          .warn(
            "[ContactManager] customer profile %s rate limited (customer_manager_profiles_rate_limited)",
            t,
          );
    }
    ((l.fetchCustomerProfilePage = p),
      (l.fetchCustomerProfileRecords = h),
      (l.fetchCompleteCustomerProfileRecords = y),
      (l.logIfRateLimited = L));
  },
  98,
);
