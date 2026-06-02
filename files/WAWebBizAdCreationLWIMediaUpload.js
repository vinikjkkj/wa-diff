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
    async function u(t, a, i) {
      var l =
          e !== void 0
            ? e
            : (e = n("WAWebBizAdCreationLWIMediaUploadMutation.graphql")),
        u = await o("WAWebFetchAdAccountToken").fetchToken();
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
          _ = await o("WAWebRelayClient").commitMutation(
            l,
            {
              ad_account_id: i,
              fb_access_token: p != null ? { sensitive_string_value: p } : null,
              media_ids: d,
              page_id: a,
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
            type: s(e.type),
            url: e.url,
            videoId: e.video_id,
          };
        });
      }
      throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
        "Failed to fetch token for LWI upload",
      );
    }
    l.default = u;
  },
  98,
);
