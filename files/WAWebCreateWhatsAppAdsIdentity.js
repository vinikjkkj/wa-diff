__d(
  "WAWebCreateWhatsAppAdsIdentity",
  [
    "WAWebCreateWhatsAppAdsIdentityMutation.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t, a) {
      var i,
        l,
        s =
          e !== void 0
            ? e
            : (e = n("WAWebCreateWhatsAppAdsIdentityMutation.graphql")),
        u = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
        c = o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
        d = await o("WAWebRelayClient").commitMutation(
          s,
          {
            code: { sensitive_string_value: a },
            lid: c == null ? void 0 : c.user,
            phone_number: {
              sensitive_string_value:
                (i = u == null ? void 0 : u.user) != null ? i : "",
            },
          },
          { accessToken: t.token, environmentType: "facebook" },
        );
      return r("nullthrows")(
        d == null || (l = d.create_or_update_whatsapp_ads_identity) == null
          ? void 0
          : l.id,
      );
    }
    l.default = s;
  },
  98,
);
