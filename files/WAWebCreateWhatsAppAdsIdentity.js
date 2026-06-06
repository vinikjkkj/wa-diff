__d(
  "WAWebCreateWhatsAppAdsIdentity",
  [
    "WAWebCreateWhatsAppAdsIdentityMutation.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i,
            l,
            s =
              e !== void 0
                ? e
                : (e = n("WAWebCreateWhatsAppAdsIdentityMutation.graphql")),
            u = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
            c = yield o("WAWebRelayClient").commitMutation(
              s,
              {
                code: { sensitive_string_value: a },
                phone_number: {
                  sensitive_string_value:
                    (i = u == null ? void 0 : u.user) != null ? i : "",
                },
              },
              { accessToken: t.token, environmentType: "facebook" },
            );
          return r("nullthrows")(
            c == null || (l = c.create_or_update_whatsapp_ads_identity) == null
              ? void 0
              : l.id,
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
