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
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set();
    async function c(e) {
      if (e === "FB") {
        var t = o("WAWebUserPrefsCTWA").getFBIdentity();
        if (t != null && t.token != null) return t;
      } else if (e === "WAA") {
        var n = await o("WAWebFetchAdAccountToken").fetchToken();
        if (n.type === "success" && n.token != null) return n.token;
      }
      return null;
    }
    async function d(t, r) {
      var a,
        i,
        l =
          e !== void 0
            ? e
            : (e = n("WAWebResolveAccountTypeAndAdPageQuery.graphql")),
        s = await o("WAWebRelayClient").fetchQuery(
          l,
          { pageId: r },
          { accessToken: t.token, environmentType: "facebook" },
        ),
        u =
          s == null || (a = s.page) == null ? void 0 : a.can_viewer_do_actions;
      return (i = u == null ? void 0 : u.includes("CREATE_ADS")) != null
        ? i
        : !1;
    }
    async function m(e) {
      var t =
        s !== void 0
          ? s
          : (s = n("WAWebResolveAccountTypeAndAdPageMutation.graphql"));
      await o("WAWebRelayClient").commitMutation(
        t,
        {},
        { accessToken: e.token, environmentType: "facebook" },
      );
    }
    async function p(e, t) {
      var n =
        t != null
          ? t
          : await o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
      if (e.type === "WAA") {
        var a = n.waPageId;
        if (a != null)
          return (
            o(
              "WAWebBizNativeAdsGatingUtils",
            ).nativeAdsWAAAdsIdentityUpsertEnabled() && _(e, a),
            { pageId: a, pageType: "wa_ads_identity_page" }
          );
      } else if (n.fbPageId != null) {
        var i = n.fbPageId,
          l = await r("WAWebGetFBAccountPages")(e),
          s = l.some(function (e) {
            return e.id === i;
          });
        if (s) return { pageId: i, pageType: "linked_fb_page" };
      } else if (n.waPageId != null) {
        var u = n.waPageId,
          c = await d(e, u);
        if (c) return { pageId: u, pageType: "wa_ads_identity_page" };
      }
      var m = await o("WAWebFetchAdAccountToken").fetchToken(),
        p = r("nullthrows")(m.token),
        f = await r("WAWebGetAccountNonce")(p),
        g = await r("WAWebCreateWhatsAppAdsIdentity")(e, f);
      return { pageId: g, pageType: "wa_ads_identity_page" };
    }
    async function _(e, t) {
      if (!u.has(t)) {
        u.add(t);
        try {
          var n = await r("WAWebGetAccountNonce")(e);
          await r("WAWebCreateWhatsAppAdsIdentity")(e, n);
        } catch (e) {
          (u.delete(t),
            r("FBLogger")("wa_ctwa_web")
              .catching(r("getErrorSafe")(e))
              .warn("Failed to ensure WAA admin on WA ads identity page"));
        }
      }
    }
    ((l.resolveIdentityForAccountType = c),
      (l.clearSavedOIDCLoginPreference = m),
      (l.resolveAdsPage = p));
  },
  98,
);
