__d(
  "WAWebDebugAds",
  [
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
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      return (
        r("vulture")("W0lOodSIf9ds63Wd2QfcQU77a4E="),
        o("WAWebCTWABizAccessTokenNonceManager")
          .fetchNonce(!0)
          .then(function (e) {
            r("vulture")("ZoboKNoMjkKtVpE5hlOnrxgcEYI=");
          })
      );
    }
    ((u.doc = "Fetch ad account nonce"), (u.paramsToExecute = []));
    function c() {
      return (
        r("vulture")("GSciVwdquBD-ObmwJ8QWlaPVsEk="),
        o("WAWebFetchAdAccountToken")
          .fetchToken(!0)
          .then(function (e) {
            r("vulture")("s63jJ1PGqWTGm2bnH-f3p06vy78=");
          })
      );
    }
    ((c.doc = "Fetch ad account token"), (c.paramsToExecute = []));
    function d(e) {
      return (
        r("vulture")("spuK7oT0tuLJbCul9RvwWjtAabg="),
        o("WAWebLinkAdMediaInFacebook")
          .linkAdMediaInFacebook(e)
          .then(function (e) {
            r("vulture")("YnfWcd_fA4IrcSIK_1LEE4fzvrI=");
          })
          .catch(function (e) {
            r("vulture")("KIkXTXi3Naxy9DD2gPgW-eEOHbA=");
          })
      );
    }
    d.doc =
      "Link given ad media id in Facebook, so that it is available there for native ads creation flows";
    function m(e) {
      r("vulture")("0FQeCtoTeVv3n7sU2PmuS3QKA6E=");
      var t = function (t) {
        return o("WAWebUploadNativeAdMedia")
          .uploadBlobAsNativeAdMedia(t, new AbortController().signal)
          .then(function (e) {
            r("vulture")("TTPxEq-Ohjqhyd4pa1yFH1OPTxg=");
          })
          .catch(function (e) {
            r("vulture")("nGSIpExRKolHk6xOJjZHZ4A-Az4=");
          });
      };
      return e == null
        ? new Promise(function (e) {
            r("vulture")("4dbyAarENYAfwFeOgQi2ODxIh0E=");
            var t = document.createElement("input");
            ((t.type = "file"),
              (t.onchange = function () {
                r("vulture")("Bb-jHripcXRE0UW4XCqiwluJfg8=");
                var n = t.files;
                n != null && e(n[0]);
              }),
              t.click());
          }).then(t)
        : t(e);
    }
    m.doc =
      "Upload given blob as native ad media, so that it is available there for native ads creation flows";
    var p = function () {
      (r("vulture")("yX4ds40wFoc-N2gM7tVll6nhvpc="),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          s.jsx(r("WAWebCTWADebugDrawer.react"), {
            onBack: function () {
              (r("vulture")("0WBCHgWL4byV7agMJ7iHvevqeD4="),
                o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
            },
          }),
        ));
    };
    ((p.doc = "Opens the CTWA Debug Drawer"), (p.paramsToExecute = []));
    function _() {
      (r("vulture")("XZDeFt2Uv0sMc3J9UGVoybgJFDc="),
        o("WAWebFetchAdAccountToken").markTokenAsInvalid());
    }
    ((_.doc = "Clear WA token from cache and storage"),
      (_.paramsToExecute = []));
    function f() {
      (r("vulture")("8OZSulXzaABEyNIur4eoYphHZzo="),
        o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity());
    }
    ((f.doc = "Clear FB identity token from storage"),
      (f.paramsToExecute = []));
    function g(e) {
      (r("vulture")("QZB2amUjylIS8CMXeXxVc-aE47w="),
        o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(e));
    }
    g.doc =
      "Set last used ad account type preference ('FB', 'WAA', or null to clear)";
    function h() {
      (r("vulture")("5IwEOeUDAXYbCGi8I0VVJo5fMi4="),
        o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity(),
        o("WAWebFetchAdAccountToken").markTokenAsInvalid(),
        o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(null));
    }
    ((h.doc =
      "Clear all ads identity (FB token, WA token, and last used account type)"),
      (h.paramsToExecute = []));
    async function y() {
      r("vulture")("Hj_e81F9nQwCov64GJvwQ6rRgP0=");
      var e = o("WAWebUserPrefsCTWA").getFBIdentity(),
        t = o("WAWebUserPrefsCTWA").getAdAccountToken(),
        n =
          t != null && t.type === "WAA"
            ? t.bp_id + " (" + t.tokenStrength + ")"
            : "null",
        a = o("WAWebUserPrefsGeneral").getLastUsedAdAccountType(),
        i = await o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
    }
    ((y.doc =
      "Print current ads identity details (tokens, account type preference, and linked pages)"),
      (y.paramsToExecute = []));
    function C(e) {
      (r("vulture")("uPoJQbO1OTf8Zveh2AbJ4Lo1viU="),
        o("WAWebActiveAccountInfoContext.react").setActiveAccountInfo(e));
    }
    C.doc = "Set the active account info for testing ad entry points";
    function b() {
      r("vulture")("NaRaV2Qby6y55aEiFadMG3yRwp0=");
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e)
        var t = o("WAWebCtwaConversationDepthUtils").getCtwaConversationDepth(
          e,
        );
    }
    ((b.doc =
      "Print the CTWA conversation depth (biz reply count) for the active chat"),
      (b.paramsToExecute = []));
    var v = {
      fetchAdAccountNonce: u,
      fetchAdAccountToken: c,
      linkAdMediaInFacebook: d,
      uploadBlobAsNativeAdMedia: m,
      ctwaOpenDebugDrawer: p,
      clearWAToken: _,
      clearFBToken: f,
      setLastUsedAccountType: g,
      clearAdsIdentity: h,
      printAdsIdentityDetails: y,
      dfsSetActiveAccountInfo: C,
      printCtwaConversationDepth: b,
    };
    l.default = v;
  },
  98,
);
