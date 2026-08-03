__d(
  "WAWebContactManagerCustomerProfilesQuery",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebContactManagerCustomerProfilesQuery.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebLeadStage",
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
      m = 0,
      p = 4;
    function _() {
      return f(null, 0, []);
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield h(e);
          for (var a of (i = r == null ? void 0 : r.profiles) != null
            ? i
            : []) {
            var i,
              l = a.lid;
            l == null ||
              l === "" ||
              n.push({
                acquisitionSource: b(a.acquisition_source),
                chatJid: o("WAJids").toLidUserJid(l),
                email: a.email,
                leadStage: C(a.lead_stage),
                modifiedAt: v(a.last_updates),
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
              : f(u, t + 1, n);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return e === "INTAKE"
        ? o("WAWebLeadStage").LeadStage.INTAKE
        : e === "QUALIFIED"
          ? o("WAWebLeadStage").LeadStage.QUALIFIED
          : e === "CONVERTED"
            ? o("WAWebLeadStage").LeadStage.CONVERTED
            : e === "LOST"
              ? o("WAWebLeadStage").LeadStage.LOST
              : e === "NOT_QUALIFIED"
                ? o("WAWebLeadStage").LeadStage.NOT_QUALIFIED
                : e === "NONE"
                  ? o("WAWebLeadStage").LeadStage.NONE
                  : null;
    }
    function b(e) {
      return e === "CTWA" ? m : e === "REFERRAL" ? p : null;
    }
    function v(e) {
      var t = 0;
      for (var n of e) n.ts != null && n.ts > t && (t = n.ts);
      return o("WATimeUtils").castToUnixTime(t);
    }
    l.fetchCustomerProfileRecords = _;
  },
  98,
);
