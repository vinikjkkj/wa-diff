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
      d = 20;
    function m() {
      return p(null, 0, []);
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield f(e);
          for (var a of (i = r == null ? void 0 : r.profiles) != null
            ? i
            : []) {
            var i,
              l = a.lid;
            l == null ||
              l === "" ||
              n.push({
                acquisitionSource: o(
                  "WAWebContactManagerCustomerProfileDecoders",
                ).toAcquisitionSourceId(a.acquisition_source),
                chatJid: o("WAJids").toLidUserJid(l),
                email: a.email,
                leadStage: o(
                  "WAWebContactManagerCustomerProfileDecoders",
                ).toLeadStageType(a.lead_stage),
                modifiedAt: o(
                  "WAWebContactManagerCustomerProfileDecoders",
                ).latestUpdateTs(
                  a.last_updates.map(function (e) {
                    var t = e.ts;
                    return t;
                  }),
                ),
                name: a.name,
              });
          }
          var u = r == null ? void 0 : r.cursor;
          return u == null
            ? n
            : t + 1 >= d
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
                n)
              : p(u, t + 1, n);
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
          var t = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (t.type !== "success")
            throw r("err")(
              "[ContactManager] fetchCustomerProfiles: no access token (" +
                t.type +
                ")",
            );
          yield r("WAWebNetworkStatus").waitIfOffline();
          var n = yield o("WAWebRelayClient").fetchQuery(
            u,
            {
              input: {
                candidate_lids: [],
                sort_column: "name",
                sort_descending: !1,
                page_size: c,
                cursor: e,
              },
            },
            { accessToken: t.token, environmentType: "facebook" },
          );
          return n == null ? void 0 : n.xfb_wa_customer_profiles;
        })),
        g.apply(this, arguments)
      );
    }
    l.fetchCustomerProfileRecords = m;
  },
  98,
);
