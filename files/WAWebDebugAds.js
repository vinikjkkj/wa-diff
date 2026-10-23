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
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c() {
      return (
        r("vulture")("W0lOodSIf9ds63Wd2QfcQU77a4E="),
        o("WAWebCTWABizAccessTokenNonceManager")
          .fetchNonce(!0)
          .then(function (e) {
            r("vulture")("ZoboKNoMjkKtVpE5hlOnrxgcEYI=");
          })
      );
    }
    ((c.doc = "Fetch ad account nonce"), (c.paramsToExecute = []));
    function d() {
      return (
        r("vulture")("GSciVwdquBD-ObmwJ8QWlaPVsEk="),
        o("WAWebFetchAdAccountToken")
          .fetchToken(!0)
          .then(function (e) {
            r("vulture")("s63jJ1PGqWTGm2bnH-f3p06vy78=");
          })
      );
    }
    ((d.doc = "Fetch ad account token"), (d.paramsToExecute = []));
    function m(e) {
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
    m.doc =
      "Link given ad media id in Facebook, so that it is available there for native ads creation flows";
    function p(t) {
      r("vulture")("0FQeCtoTeVv3n7sU2PmuS3QKA6E=");
      var a = function (t) {
        return o("WAWebUploadNativeAdMedia")
          .uploadBlobAsNativeAdMedia(t, new AbortController().signal)
          .then(function (e) {
            r("vulture")("TTPxEq-Ohjqhyd4pa1yFH1OPTxg=");
          })
          .catch(function (e) {
            r("vulture")("nGSIpExRKolHk6xOJjZHZ4A-Az4=");
          });
      };
      return t == null
        ? new (e || (e = n("Promise")))(function (e) {
            r("vulture")("4dbyAarENYAfwFeOgQi2ODxIh0E=");
            var t = document.createElement("input");
            ((t.type = "file"),
              (t.onchange = function () {
                r("vulture")("Bb-jHripcXRE0UW4XCqiwluJfg8=");
                var n = t.files;
                n != null && e(n[0]);
              }),
              t.click());
          }).then(a)
        : a(t);
    }
    p.doc =
      "Upload given blob as native ad media, so that it is available there for native ads creation flows";
    var _ = function () {
      (r("vulture")("yX4ds40wFoc-N2gM7tVll6nhvpc="),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          u.jsx(r("WAWebCTWADebugDrawer.react"), {
            onBack: function () {
              (r("vulture")("0WBCHgWL4byV7agMJ7iHvevqeD4="),
                o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
            },
          }),
        ));
    };
    ((_.doc = "Opens the CTWA Debug Drawer"), (_.paramsToExecute = []));
    function f() {
      (r("vulture")("XZDeFt2Uv0sMc3J9UGVoybgJFDc="),
        o("WAWebFetchAdAccountToken").markTokenAsInvalid());
    }
    ((f.doc = "Clear WA token from cache and storage"),
      (f.paramsToExecute = []));
    function g() {
      (r("vulture")("8OZSulXzaABEyNIur4eoYphHZzo="),
        o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity());
    }
    ((g.doc = "Clear FB identity token from storage"),
      (g.paramsToExecute = []));
    function h(e) {
      (r("vulture")("QZB2amUjylIS8CMXeXxVc-aE47w="),
        o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(e));
    }
    h.doc =
      "Set last used ad account type preference ('FB', 'WAA', or null to clear)";
    function y() {
      (r("vulture")("5IwEOeUDAXYbCGi8I0VVJo5fMi4="),
        o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity(),
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
          r("vulture")("Hj_e81F9nQwCov64GJvwQ6rRgP0=");
          var e = o("WAWebUserPrefsCTWA").getFBIdentity(),
            t = o("WAWebUserPrefsCTWA").getAdAccountToken(),
            n =
              t != null && t.type === "WAA"
                ? t.bp_id + " (" + t.tokenStrength + ")"
                : "null",
            a = o("WAWebUserPrefsGeneral").getLastUsedAdAccountType(),
            i = yield o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
        })),
        b.apply(this, arguments)
      );
    }
    ((C.doc =
      "Print current ads identity details (tokens, account type preference, and linked pages)"),
      (C.paramsToExecute = []));
    function v(e) {
      (r("vulture")("uPoJQbO1OTf8Zveh2AbJ4Lo1viU="),
        o("WAWebActiveAccountInfoContext.react").setActiveAccountInfo(e));
    }
    v.doc = "Set the active account info for testing ad entry points";
    function S() {
      r("vulture")("NaRaV2Qby6y55aEiFadMG3yRwp0=");
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
