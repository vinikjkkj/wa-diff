__d(
  "WAWebResolveAccountTypeAndAdPage",
  [
    "FBLogger",
    "WAWebBizNativeAdsGatingUtils",
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
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set();
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e === "FB") {
            var t = o("WAWebUserPrefsCTWA").getFBIdentity();
            if (t != null && t.token != null) return t;
          } else if (e === "WAA") {
            var n = yield o("WAWebFetchAdAccountToken").fetchToken();
            if (n.type === "success" && n.token != null) return n.token;
          }
          return null;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
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
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
            t != null
              ? t
              : yield o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
          if (e.type === "WAA") {
            var a = n.waPageId;
            if (a != null)
              return (
                o(
                  "WAWebBizNativeAdsGatingUtils",
                ).nativeAdsWAAAdsIdentityUpsertEnabled() && y(e, a),
                { pageId: a, pageType: "wa_ads_identity_page" }
              );
          } else if (n.fbPageId != null) {
            var i = n.fbPageId,
              l = yield r("WAWebGetFBAccountPages")(e),
              s = l.some(function (e) {
                return e.id === i;
              });
            if (s) return { pageId: i, pageType: "linked_fb_page" };
          } else if (n.waPageId != null) {
            var u = n.waPageId,
              c = yield m(e, u);
            if (c) return { pageId: u, pageType: "wa_ads_identity_page" };
          }
          var d = yield o("WAWebFetchAdAccountToken").fetchToken(),
            p = r("nullthrows")(d.token),
            _ = yield r("WAWebGetAccountNonce")(p),
            f = yield r("WAWebCreateWhatsAppAdsIdentity")(e, _);
          return { pageId: f, pageType: "wa_ads_identity_page" };
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
          if (!u.has(t)) {
            u.add(t);
            try {
              var n = yield r("WAWebGetAccountNonce")(e);
              yield r("WAWebCreateWhatsAppAdsIdentity")(e, n);
            } catch (e) {
              (u.delete(t),
                r("FBLogger")("wa_ctwa_web")
                  .catching(r("getErrorSafe")(e))
                  .warn("Failed to ensure WAA admin on WA ads identity page"));
            }
          }
        })),
        C.apply(this, arguments)
      );
    }
    ((l.resolveIdentityForAccountType = c),
      (l.clearSavedOIDCLoginPreference = _),
      (l.resolveAdsPage = g));
  },
  98,
);
