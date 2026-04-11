__d(
  "WAWebResolveAccountTypeAndAdPage",
  [
    "Promise",
    "WAWebCreateWhatsAppAdsIdentity",
    "WAWebFetchAdAccountToken",
    "WAWebGetAccountNonce",
    "WAWebGetFBAccountPages",
    "WAWebGetWAAEligibility",
    "WAWebLinkedAccountsJob",
    "WAWebRelayClient",
    "WAWebResolveAccountTypeAndAdPageMutation.graphql",
    "WAWebResolveAccountTypeAndAdPageQuery.graphql",
    "WAWebUserPrefsCTWA",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (u || (u = n("Promise"))).all([
              o("WAWebLinkedAccountsJob").queryLinkedPagesInfo(),
              r("WAWebGetWAAEligibility")("dummy_flow_id"),
            ]),
            t = e[0],
            a = e[1],
            i = o("WAWebUserPrefsGeneral").getLastUsedAdAccountType();
          return i === "FB" || t.fbPageId != null || !a
            ? a === !0
              ? ["FB", "WAA"]
              : ["FB"]
            : a === !0
              ? ["WAA", "FB"]
              : ["FB"];
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e === "FB") {
            var t = o("WAWebUserPrefsCTWA").getFBIdentity();
            if (t != null && t.token != null) return t;
          } else if (e === "WAA") {
            var n = yield o("WAWebFetchAdAccountToken").fetchToken();
            if (n.type === "success" && n.token != null) return n.token;
          }
          return null;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a,
            i,
            l =
              e !== void 0
                ? e
                : (e = n("WAWebResolveAccountTypeAndAdPageQuery.graphql")),
            s = yield o("WAWebRelayClient").fetchQuery(
              l,
              { pageId: r },
              { accessToken: t.token, environmentType: "facebook" },
            ),
            u =
              s == null || (a = s.page) == null
                ? void 0
                : a.can_viewer_do_actions;
          return (i = u == null ? void 0 : u.includes("CREATE_ADS")) != null
            ? i
            : !1;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            s !== void 0
              ? s
              : (s = n("WAWebResolveAccountTypeAndAdPageMutation.graphql"));
          yield o("WAWebRelayClient").commitMutation(
            t,
            {},
            { accessToken: e.token, environmentType: "facebook" },
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
            t != null
              ? t
              : yield o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
          if (e.type === "WAA") {
            if (n.waPageId != null) return n.waPageId;
          } else if (n.fbPageId != null) {
            var a = n.fbPageId,
              i = yield r("WAWebGetFBAccountPages")(e),
              l = i.some(function (e) {
                return e.id === a;
              });
            if (l) return a;
          } else if (n.waPageId != null) {
            var s = n.waPageId,
              u = yield _(e, s);
            if (u) return s;
          }
          var c = yield o("WAWebFetchAdAccountToken").fetchToken(),
            d = r("nullthrows")(c.token),
            m = yield r("WAWebGetAccountNonce")(d),
            p = yield r("WAWebCreateWhatsAppAdsIdentity")(e, m);
          return p;
        })),
        C.apply(this, arguments)
      );
    }
    ((l.resolveAccountTypes = c),
      (l.resolveIdentityForAccountType = m),
      (l.clearSavedOIDCLoginPreference = g),
      (l.resolveAdsPage = y));
  },
  98,
);
