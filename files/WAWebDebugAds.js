__d(
  "WAWebDebugAds",
  [
    "Promise",
    "WAWebActiveAccountInfoContext.react",
    "WAWebBizNativeAdsStoredFBIdentityStore",
    "WAWebCTWABizAccessTokenNonceManager",
    "WAWebCTWADebugDrawer.react",
    "WAWebChatCollection",
    "WAWebCtwaConversationDepthUtils",
    "WAWebDrawerManager",
    "WAWebFetchAdAccountToken",
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
    function m(e) {
      return o("WAWebLinkAdMediaInFacebook")
        .linkAdMediaInFacebook(e)
        .then(function (e) {})
        .catch(function (e) {});
    }
    m.doc =
      "Link given ad media id in Facebook, so that it is available there for native ads creation flows";
    function p(t) {
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
    p.doc =
      "Upload given blob as native ad media, so that it is available there for native ads creation flows";
    var _ = function () {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        u.jsx(r("WAWebCTWADebugDrawer.react"), {
          onBack: function () {
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
          },
        }),
      );
    };
    ((_.doc = "Opens the CTWA Debug Drawer"), (_.paramsToExecute = []));
    function f() {
      o("WAWebFetchAdAccountToken").markTokenAsInvalid();
    }
    ((f.doc = "Clear WA token from cache and storage"),
      (f.paramsToExecute = []));
    function g() {
      o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity();
    }
    ((g.doc = "Clear FB identity token from storage"),
      (g.paramsToExecute = []));
    function h(e) {
      o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(e);
    }
    h.doc =
      "Set last used ad account type preference ('FB', 'WAA', or null to clear)";
    function y() {
      (o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity(),
        o("WAWebFetchAdAccountToken").markTokenAsInvalid(),
        o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(null));
    }
    ((y.doc =
      "Clear all ads identity (FB token, WA token, and last used account type)"),
      (y.paramsToExecute = []));
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsCTWA").getFBIdentity(),
            t = o("WAWebUserPrefsCTWA").getAdAccountToken(),
            n =
              t != null && t.type === "WAA"
                ? t.bp_id + " (" + t.tokenStrength + ")"
                : "null",
            r = o("WAWebUserPrefsGeneral").getLastUsedAdAccountType(),
            a = yield o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
        })),
        b.apply(this, arguments)
      );
    }
    ((C.doc =
      "Print current ads identity details (tokens, account type preference, and linked pages)"),
      (C.paramsToExecute = []));
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
      fetchAdAccountNonce: c,
      fetchAdAccountToken: d,
      linkAdMediaInFacebook: m,
      uploadBlobAsNativeAdMedia: p,
      ctwaOpenDebugDrawer: _,
      clearWAToken: f,
      clearFBToken: g,
      setLastUsedAccountType: h,
      clearAdsIdentity: y,
      printAdsIdentityDetails: C,
      dfsSetActiveAccountInfo: v,
      printCtwaConversationDepth: S,
    };
    l.default = R;
  },
  98,
);
