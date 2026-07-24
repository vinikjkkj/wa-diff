__d(
  "WAWebBizAdCreationLWIMediaUpload",
  [
    "FBLogger",
    "WAWebBizAdCreationLWIMediaHelpers",
    "WAWebBizAdCreationLWIMediaUploadMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l =
              e !== void 0
                ? e
                : (e = n("WAWebBizAdCreationLWIMediaUploadMutation.graphql")),
            s = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (s.type === "success") {
            var u,
              c = t.map(function (e) {
                return e.fbid;
              }),
              d = yield o("WAWebRelayClient").commitMutation(
                l,
                {
                  ad_account_id: i,
                  fb_access_token: o(
                    "WAWebBizAdCreationLWIMediaHelpers",
                  ).getFBAccessTokenValue(),
                  media_ids: c,
                  page_id: a,
                },
                { accessToken: s.token, environmentType: "facebook" },
              ),
              m =
                d == null || (u = d.wa_ad_creation_lwi_media_upload) == null
                  ? void 0
                  : u.uploaded_media_data;
            if (!m || m.length !== c.length)
              throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
                "LWI media upload failed",
              );
            return m.map(function (e) {
              return {
                hash: e.hash,
                type: o(
                  "WAWebBizAdCreationLWIMediaHelpers",
                ).coerceToAdMediaType(e.type),
                url: e.url,
                videoId: e.video_id,
              };
            });
          }
          throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
            "Failed to fetch token for LWI upload",
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
