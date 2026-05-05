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
      return o("WAWebFetchAdEntryPointsConfiguration")
        .fetchAdEntryPointsConfiguration("debug")
        .then(function (e) {})
        .catch(function (e) {});
    }
    ((m.doc = "Fetch ad entry points configuration"), (m.paramsToExecute = []));
    function p(e, t) {
      o("WAWebAdEntryPointsConfigurationModel").setAdEntryPointsConfiguration({
        entryPoints: t,
        locale: e,
      });
    }
    p.doc = "Update ad entry points configuration in memory";
    function _(e) {
      return o("WAWebLinkAdMediaInFacebook")
        .linkAdMediaInFacebook(e)
        .then(function (e) {})
        .catch(function (e) {});
    }
    _.doc =
      "Link given ad media id in Facebook, so that it is available there for native ads creation flows";
    function f(t) {
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
    f.doc =
      "Upload given blob as native ad media, so that it is available there for native ads creation flows";
    var g = function () {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        u.jsx(r("WAWebCTWADebugDrawer.react"), {
          onBack: function () {
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
          },
        }),
      );
    };
    ((g.doc = "Opens the CTWA Debug Drawer"), (g.paramsToExecute = []));
    function h() {
      o("WAWebFetchAdAccountToken").markTokenAsInvalid();
    }
    ((h.doc = "Clear WA token from cache and storage"),
      (h.paramsToExecute = []));
    function y() {
      o("WAWebUserPrefsCTWA").clearFBIdentity();
    }
    ((y.doc = "Clear FB identity token from storage"),
      (y.paramsToExecute = []));
    function C(e) {
      o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(e);
    }
    C.doc =
      "Set last used ad account type preference ('FB', 'WAA', or null to clear)";
    function b() {
      (o("WAWebUserPrefsCTWA").clearFBIdentity(),
        o("WAWebFetchAdAccountToken").markTokenAsInvalid(),
        o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(null));
    }
    ((b.doc =
      "Clear all ads identity (FB token, WA token, and last used account type)"),
      (b.paramsToExecute = []));
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsCTWA").getFBIdentity(),
            t = o("WAWebUserPrefsCTWA").getAdAccountToken(),
            n =
              t != null && t.type === "WAA"
                ? t.bp_id + " (" + t.tokenStrength + ")"
                : "null",
            r = o("WAWebUserPrefsGeneral").getLastUsedAdAccountType(),
            a = yield o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
        })),
        S.apply(this, arguments)
      );
    }
    ((v.doc =
      "Print current ads identity details (tokens, account type preference, and linked pages)"),
      (v.paramsToExecute = []));
    function R(e) {
      o("WAWebActiveAccountInfoContext.react").setActiveAccountInfo(e);
    }
    R.doc = "Set the active account info for testing ad entry points";
    function L() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e)
        var t = o("WAWebCtwaConversationDepthUtils").getCtwaConversationDepth(
          e,
        );
    }
    ((L.doc =
      "Print the CTWA conversation depth (biz reply count) for the active chat"),
      (L.paramsToExecute = []));
    var E = {
      fetchAdAccountNonce: c,
      fetchAdAccountToken: d,
      fetchAdEntryPointsConfiguration: m,
      setAdEntryPointsConfiguration: p,
      linkAdMediaInFacebook: _,
      uploadBlobAsNativeAdMedia: f,
      ctwaOpenDebugDrawer: g,
      clearWAToken: h,
      clearFBToken: y,
      setLastUsedAccountType: C,
      clearAdsIdentity: b,
      printAdsIdentityDetails: v,
      dfsSetActiveAccountInfo: R,
      printCtwaConversationDepth: L,
    };
    l.default = E;
  },
  98,
);
