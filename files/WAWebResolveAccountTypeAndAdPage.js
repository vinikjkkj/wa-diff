__d(
  "WAWebResolveAccountTypeAndAdPage",
  [
    "WAWebCreateWhatsAppAdsIdentity",
    "WAWebFetchAdAccountToken",
    "WAWebGetAccountNonce",
    "WAWebGetFBAccountPages",
    "WAWebLinkedAccountsJob",
    "WAWebRelayClient",
    "WAWebResolveAccountTypeAndAdPageMutation.graphql",
    "WAWebResolveAccountTypeAndAdPageQuery.graphql",
    "WAWebUserPrefsCTWA",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e === "FB") {
            var t = o("WAWebUserPrefsCTWA").getFBIdentity();
            if (t != null && t.token != null) return t;
          } else if (e === "WAA") {
            var n = yield o("WAWebFetchAdAccountToken").fetchToken();
            if (n.type === "success" && n.token != null) return n.token;
          }
          return null;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
            t != null
              ? t
              : yield o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
          if (e.type === "WAA") {
            if (n.waPageId != null)
              return { pageId: n.waPageId, pageType: "wa_ads_identity_page" };
          } else if (n.fbPageId != null) {
            var a = n.fbPageId,
              i = yield r("WAWebGetFBAccountPages")(e),
              l = i.some(function (e) {
                return e.id === a;
              });
            if (l) return { pageId: a, pageType: "linked_fb_page" };
          } else if (n.waPageId != null) {
            var s = n.waPageId,
              u = yield d(e, s);
            if (u) return { pageId: s, pageType: "wa_ads_identity_page" };
          }
          var c = yield o("WAWebFetchAdAccountToken").fetchToken(),
            m = r("nullthrows")(c.token),
            p = yield r("WAWebGetAccountNonce")(m),
            _ = yield r("WAWebCreateWhatsAppAdsIdentity")(e, p);
          return { pageId: _, pageType: "wa_ads_identity_page" };
        })),
        g.apply(this, arguments)
      );
    }
    ((l.resolveIdentityForAccountType = u),
      (l.clearSavedOIDCLoginPreference = p),
      (l.resolveAdsPage = f));
  },
  98,
);
