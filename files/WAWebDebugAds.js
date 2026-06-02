__d(
  "WAWebDebugAds",
  [
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdEntryPointsConfigurationModel",
    "WAWebBizNativeAdsStoredFBIdentityStore",
    "WAWebCTWABizAccessTokenNonceManager",
    "WAWebCTWADebugDrawer.react",
    "WAWebChatCollection",
    "WAWebCtwaConversationDepthUtils",
    "WAWebDrawerManager",
    "WAWebFetchAdAccountToken",
    "WAWebFetchAdEntryPointsConfiguration",
    "WAWebLinkAdMediaInFacebook",
    "WAWebLinkedAccountsJob",
    "WAWebUploadNativeAdMedia",
    "WAWebUserPrefsCTWA",
    "WAWebUserPrefsGeneral",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      return o("WAWebCTWABizAccessTokenNonceManager")
        .fetchNonce(!0)
        .then(function (e) {});
    }
    ((u.doc = "Fetch ad account nonce"), (u.paramsToExecute = []));
    function c() {
      return o("WAWebFetchAdAccountToken")
        .fetchToken(!0)
        .then(function (e) {});
    }
    ((c.doc = "Fetch ad account token"), (c.paramsToExecute = []));
    function d() {
      return o("WAWebFetchAdEntryPointsConfiguration")
        .fetchAdEntryPointsConfiguration("debug")
        .then(function (e) {})
        .catch(function (e) {});
    }
    ((d.doc = "Fetch ad entry points configuration"), (d.paramsToExecute = []));
    function m(e, t) {
      o("WAWebAdEntryPointsConfigurationModel").setAdEntryPointsConfiguration({
        entryPoints: t,
        locale: e,
      });
    }
    m.doc = "Update ad entry points configuration in memory";
    function p(e) {
      return o("WAWebLinkAdMediaInFacebook")
        .linkAdMediaInFacebook(e)
        .then(function (e) {})
        .catch(function (e) {});
    }
    p.doc =
      "Link given ad media id in Facebook, so that it is available there for native ads creation flows";
    function _(e) {
      var t = function (t) {
        return o("WAWebUploadNativeAdMedia")
          .uploadBlobAsNativeAdMedia(t, new AbortController().signal)
          .then(function (e) {})
          .catch(function (e) {});
      };
      return e == null
        ? new Promise(function (e) {
            var t = document.createElement("input");
            ((t.type = "file"),
              (t.onchange = function (t) {
                e(t.target.files[0]);
              }),
              t.click());
          }).then(t)
        : t(e);
    }
    _.doc =
      "Upload given blob as native ad media, so that it is available there for native ads creation flows";
    var f = function () {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        s.jsx(r("WAWebCTWADebugDrawer.react"), {
          onBack: function () {
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
          },
        }),
      );
    };
    ((f.doc = "Opens the CTWA Debug Drawer"), (f.paramsToExecute = []));
    function g() {
      o("WAWebFetchAdAccountToken").markTokenAsInvalid();
    }
    ((g.doc = "Clear WA token from cache and storage"),
      (g.paramsToExecute = []));
    function h() {
      o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity();
    }
    ((h.doc = "Clear FB identity token from storage"),
      (h.paramsToExecute = []));
    function y(e) {
      o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(e);
    }
    y.doc =
      "Set last used ad account type preference ('FB', 'WAA', or null to clear)";
    function C() {
      (o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity(),
        o("WAWebFetchAdAccountToken").markTokenAsInvalid(),
        o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(null));
    }
    ((C.doc =
      "Clear all ads identity (FB token, WA token, and last used account type)"),
      (C.paramsToExecute = []));
    async function b() {
      var e = o("WAWebUserPrefsCTWA").getFBIdentity(),
        t = o("WAWebUserPrefsCTWA").getAdAccountToken(),
        n =
          t != null && t.type === "WAA"
            ? t.bp_id + " (" + t.tokenStrength + ")"
            : "null",
        r = o("WAWebUserPrefsGeneral").getLastUsedAdAccountType(),
        a = await o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
    }
    ((b.doc =
      "Print current ads identity details (tokens, account type preference, and linked pages)"),
      (b.paramsToExecute = []));
    function v(e) {
      o("WAWebActiveAccountInfoContext.react").setActiveAccountInfo(e);
    }
    v.doc = "Set the active account info for testing ad entry points";
    function S() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e)
        var t = o("WAWebCtwaConversationDepthUtils").getCtwaConversationDepth(
          e,
        );
    }
    ((S.doc =
      "Print the CTWA conversation depth (biz reply count) for the active chat"),
      (S.paramsToExecute = []));
    var R = {
      fetchAdAccountNonce: u,
      fetchAdAccountToken: c,
      fetchAdEntryPointsConfiguration: d,
      setAdEntryPointsConfiguration: m,
      linkAdMediaInFacebook: p,
      uploadBlobAsNativeAdMedia: _,
      ctwaOpenDebugDrawer: f,
      clearWAToken: g,
      clearFBToken: h,
      setLastUsedAccountType: y,
      clearAdsIdentity: C,
      printAdsIdentityDetails: b,
      dfsSetActiveAccountInfo: v,
      printCtwaConversationDepth: S,
    };
    l.default = R;
  },
  98,
);
