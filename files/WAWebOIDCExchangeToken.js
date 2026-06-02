__d(
  "WAWebOIDCExchangeToken",
  [
    "fbt",
    "FBLogger",
    "WAWebBizNativeAdsStoredFBIdentityStore",
    "WAWebCommonAdsTypes",
    "WAWebGetAccessTokenFromOIDCCode",
    "WAWebResolveAccountTypeAndAdPage",
    "WAWebToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    async function c(e, t, n) {
      try {
        var a = await r("WAWebGetAccessTokenFromOIDCCode")(e, t),
          i = o("WAWebCommonAdsTypes").asAdAccountToken(a.token, a.bp_id, "FB");
        (o("WAWebBizNativeAdsStoredFBIdentityStore").storeFBIdentity(i),
          o("WAWebResolveAccountTypeAndAdPage").clearSavedOIDCLoginPreference(
            i,
          ),
          n != null && n(i));
      } catch (e) {
        (r("FBLogger")("wa_ctwa_web")
          .catching(r("getErrorSafe")(e))
          .mustfix("OIDC flow failed to get access token"),
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ "Unable to get access token, please try again later",
              ),
            }),
            o("WAWebToastManager").ToastPosition.LEFT,
          ));
      }
    }
    l.exchangeOIDCToken = c;
  },
  226,
);
