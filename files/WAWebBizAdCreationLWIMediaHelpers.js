__d(
  "WAWebBizAdCreationLWIMediaHelpers",
  [
    "FBLogger",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebMmsMediaTypes",
    "WAWebUserPrefsCTWA",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("WAWebUserPrefsCTWA").getFBIdentity(),
        t =
          o(
            "WAWebBizAdCreationResolveStoredIdentity",
          ).resolveStoredAccountType() === "FB"
            ? e == null
              ? void 0
              : e.token
            : null;
      return t != null ? { sensitive_string_value: t } : null;
    }
    function s(e) {
      if (
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_IMAGE ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_VIDEO
      )
        return e;
      throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
        "Invalid ad media type: " + e,
      );
    }
    ((l.getFBAccessTokenValue = e), (l.coerceToAdMediaType = s));
  },
  98,
);
