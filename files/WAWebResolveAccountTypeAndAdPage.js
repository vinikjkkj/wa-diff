__d(
  "WAWebResolveAccountTypeAndAdPage",
  [
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
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u() {
      var e = await Promise.all([
          o("WAWebLinkedAccountsJob").queryLinkedPagesInfo(),
          r("WAWebGetWAAEligibility")("dummy_flow_id"),
        ]),
        t = e[0],
        n = e[1],
        a = o("WAWebUserPrefsGeneral").getLastUsedAdAccountType();
      return a === "FB" || t.fbPageId != null || !n
        ? n === !0
          ? ["FB", "WAA"]
          : ["FB"]
        : n === !0
          ? ["WAA", "FB"]
          : ["FB"];
    }
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
        if (n.waPageId != null)
          return { pageId: n.waPageId, pageType: "wa_ads_identity_page" };
      } else if (n.fbPageId != null) {
        var a = n.fbPageId,
          i = await r("WAWebGetFBAccountPages")(e),
          l = i.some(function (e) {
            return e.id === a;
          });
        if (l) return { pageId: a, pageType: "linked_fb_page" };
      } else if (n.waPageId != null) {
        var s = n.waPageId,
          u = await d(e, s);
        if (u) return { pageId: s, pageType: "wa_ads_identity_page" };
      }
      var c = await o("WAWebFetchAdAccountToken").fetchToken(),
        m = r("nullthrows")(c.token),
        p = await r("WAWebGetAccountNonce")(m),
        _ = await r("WAWebCreateWhatsAppAdsIdentity")(e, p);
      return { pageId: _, pageType: "wa_ads_identity_page" };
    }
    ((l.resolveAccountTypes = u),
      (l.resolveIdentityForAccountType = c),
      (l.clearSavedOIDCLoginPreference = m),
      (l.resolveAdsPage = p));
  },
  98,
);
