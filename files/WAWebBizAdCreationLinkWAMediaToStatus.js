__d(
  "WAWebBizAdCreationLinkWAMediaToStatus",
  [
    "FBLogger",
    "WAWebBizAdCreationLinkWAMediaToStatusMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebMmsMediaTypes",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      switch (e) {
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_IMAGE:
          return "IMAGE";
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_VIDEO:
          return "VIDEO";
        default:
          throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
            "Unsupported media type for native ad: " + e,
          );
      }
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a =
              e !== void 0
                ? e
                : (e = n(
                    "WAWebBizAdCreationLinkWAMediaToStatusMutation.graphql",
                  )),
            i = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (i.type === "success") {
            var l = t.map(function (e) {
              return { id: e.fbid, type: s(e.type) };
            });
            yield o("WAWebRelayClient").commitMutation(
              a,
              { input: { media_list: l } },
              { accessToken: i.token, environmentType: "facebook" },
            );
          } else
            throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
              "Failed to fetch token for LinkWAMediaToStatus",
            );
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
