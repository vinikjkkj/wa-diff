__d(
  "WAWebContactManagerCustomerProfilesQuery",
  [
    "WAJids",
    "WALogger",
    "WAWebContactManagerCustomerProfileDecoders",
    "WAWebContactManagerCustomerProfilesQuery.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
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
      c = 100,
      d = 20,
      m = { cursor: null, records: [] };
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.candidateLids != null && e.candidateLids.length === 0) return m;
          var t = yield C(e);
          return { cursor: t == null ? void 0 : t.cursor, records: y(t) };
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g(e != null ? e : {}, e == null ? void 0 : e.cursor, 0, []);
    }
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield p(babelHelpers.extends({}, e, { cursor: t }));
            return (
              r.push.apply(r, a.records),
              a.cursor == null
                ? r
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
                    r)
                  : g(e, a.cursor, n + 1, r)
            );
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e) {
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
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (a.type !== "success")
            throw r("err")(
              "[ContactManager] fetchCustomerProfiles: no access token (" +
                a.type +
                ")",
            );
          yield r("WAWebNetworkStatus").waitIfOffline();
          var i = yield o("WAWebRelayClient").fetchQuery(
            u,
            {
              input: {
                candidate_lids: (t = e.candidateLids) != null ? t : [],
                filters: ((n = e.filters) != null ? n : []).map(function (e) {
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
            { accessToken: a.token, environmentType: "facebook" },
          );
          return i == null ? void 0 : i.xfb_wa_customer_profiles;
        })),
        b.apply(this, arguments)
      );
    }
    ((l.fetchCustomerProfilePage = p), (l.fetchCustomerProfileRecords = f));
  },
  98,
);
