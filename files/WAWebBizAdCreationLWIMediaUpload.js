__d(
  "WAWebBizAdCreationLWIMediaUpload",
  [
    "FBLogger",
    "WAWebBizAdCreationLWIMediaUploadMutation.graphql",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebFetchAdAccountToken",
    "WAWebMmsMediaTypes",
    "WAWebRelayClient",
    "WAWebUserPrefsCTWA",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
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
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l =
              e !== void 0
                ? e
                : (e = n("WAWebBizAdCreationLWIMediaUploadMutation.graphql")),
            u = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (u.type === "success") {
            var c,
              d = t.map(function (e) {
                return e.fbid;
              }),
              m = o("WAWebUserPrefsCTWA").getFBIdentity(),
              p =
                o(
                  "WAWebBizAdCreationResolveStoredIdentity",
                ).resolveStoredAccountType() === "FB"
                  ? m == null
                    ? void 0
                    : m.token
                  : null,
              _ = yield o("WAWebRelayClient").commitMutation(
                l,
                {
                  ad_account_id: i,
                  media_ids: d,
                  page_id: a,
                  fb_access_token:
                    p != null ? { sensitive_string_value: p } : null,
                },
                { accessToken: u.token, environmentType: "facebook" },
              ),
              f =
                _ == null || (c = _.wa_ad_creation_lwi_media_upload) == null
                  ? void 0
                  : c.uploaded_media_data;
            if (!f || f.length !== d.length)
              throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
                "LWI media upload failed",
              );
            return f.map(function (e) {
              return {
                hash: e.hash,
                videoId: e.video_id,
                url: e.url,
                type: s(e.type),
              };
            });
          }
          throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
            "Failed to fetch token for LWI upload",
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
