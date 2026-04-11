__d(
  "WAWebDebugAds",
  [
    "Promise",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdEntryPointsConfigurationModel",
    "WAWebCTWABizAccessTokenNonceManager",
    "WAWebCTWADebugDrawer.react",
    "WAWebChatCollection",
    "WAWebCtwaConversationDepthUtils",
    "WAWebDrawerManager",
    "WAWebFetchAdAccountToken",
    "WAWebFetchAdEntryPointsConfiguration",
    "WAWebFetchAds",
    "WAWebLinkAdMediaInFacebook",
    "WAWebLinkedAccountsJob",
    "WAWebUploadNativeAdMedia",
    "WAWebUserPrefsCTWA",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c() {
      return o("WAWebCTWABizAccessTokenNonceManager")
        .fetchNonce(!0)
        .then(function (e) {});
    }
    ((c.doc = "Fetch ad account nonce"), (c.paramsToExecute = []));
    function d() {
      return o("WAWebFetchAdAccountToken")
        .fetchToken(!0)
        .then(function (e) {});
    }
    ((d.doc = "Fetch ad account token"), (d.paramsToExecute = []));
    function m() {
      var t = o("WAWebActiveAccountInfoContext.react").getActiveAccountInfo();
      return t == null || t === "not-linked" || t.id == null
        ? (e || (e = n("Promise"))).resolve()
        : o("WAWebFetchAds")
            .fetchAds(t.id)
            .then(function (e) {})
            .catch(function (e) {});
    }
    ((m.doc = "Fetch user ads"), (m.paramsToExecute = []));
    function p() {
      return o("WAWebFetchAdEntryPointsConfiguration")
        .fetchAdEntryPointsConfiguration("debug")
        .then(function (e) {})
        .catch(function (e) {});
    }
    ((p.doc = "Fetch ad entry points configuration"), (p.paramsToExecute = []));
    function _(e, t) {
      o("WAWebAdEntryPointsConfigurationModel").setAdEntryPointsConfiguration({
        entryPoints: t,
        locale: e,
      });
    }
    _.doc = "Update ad entry points configuration in memory";
    function f(e) {
      return o("WAWebLinkAdMediaInFacebook")
        .linkAdMediaInFacebook(e)
        .then(function (e) {})
        .catch(function (e) {});
    }
    f.doc =
      "Link given ad media id in Facebook, so that it is available there for native ads creation flows";
    function g(t) {
      var r = function (t) {
        return o("WAWebUploadNativeAdMedia")
          .uploadBlobAsNativeAdMedia(t, new AbortController().signal)
          .then(function (e) {})
          .catch(function (e) {});
      };
      return t == null
        ? new (e || (e = n("Promise")))(function (e) {
            var t = document.createElement("input");
            ((t.type = "file"),
              (t.onchange = function (t) {
                e(t.target.files[0]);
              }),
              t.click());
          }).then(r)
        : r(t);
    }
    g.doc =
      "Upload given blob as native ad media, so that it is available there for native ads creation flows";
    var h = function () {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        u.jsx(r("WAWebCTWADebugDrawer.react"), {
          onBack: function () {
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
          },
        }),
      );
    };
    ((h.doc = "Opens the CTWA Debug Drawer"), (h.paramsToExecute = []));
    function y() {
      o("WAWebFetchAdAccountToken").markTokenAsInvalid();
    }
    ((y.doc = "Clear WA token from cache and storage"),
      (y.paramsToExecute = []));
    function C() {
      o("WAWebUserPrefsCTWA").clearFBIdentity();
    }
    ((C.doc = "Clear FB identity token from storage"),
      (C.paramsToExecute = []));
    function b(e) {
      o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(e);
    }
    b.doc =
      "Set last used ad account type preference ('FB', 'WAA', or null to clear)";
    function v() {
      (o("WAWebUserPrefsCTWA").clearFBIdentity(),
        o("WAWebFetchAdAccountToken").markTokenAsInvalid(),
        o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(null));
    }
    ((v.doc =
      "Clear all ads identity (FB token, WA token, and last used account type)"),
      (v.paramsToExecute = []));
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsCTWA").getFBIdentity(),
            t = o("WAWebUserPrefsCTWA").getAdAccountToken(),
            n =
              t != null && t.type === "WAA"
                ? t.bp_id + " (" + t.tokenStrength + ")"
                : "null",
            r = o("WAWebUserPrefsGeneral").getLastUsedAdAccountType(),
            a = yield o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
        })),
        R.apply(this, arguments)
      );
    }
    ((S.doc =
      "Print current ads identity details (tokens, account type preference, and linked pages)"),
      (S.paramsToExecute = []));
    function L(e) {
      o("WAWebActiveAccountInfoContext.react").setActiveAccountInfo(e);
    }
    L.doc = "Set the active account info for testing ad entry points";
    function E() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e)
        var t = o("WAWebCtwaConversationDepthUtils").getCtwaConversationDepth(
          e,
        );
    }
    ((E.doc =
      "Print the CTWA conversation depth (biz reply count) for the active chat"),
      (E.paramsToExecute = []));
    var k = {
      fetchAdAccountNonce: c,
      fetchAdAccountToken: d,
      fetchAds: m,
      fetchAdEntryPointsConfiguration: p,
      setAdEntryPointsConfiguration: _,
      linkAdMediaInFacebook: f,
      uploadBlobAsNativeAdMedia: g,
      ctwaOpenDebugDrawer: h,
      clearWAToken: y,
      clearFBToken: C,
      setLastUsedAccountType: b,
      clearAdsIdentity: v,
      printAdsIdentityDetails: S,
      dfsSetActiveAccountInfo: L,
      printCtwaConversationDepth: E,
    };
    l.default = k;
  },
  98,
);
