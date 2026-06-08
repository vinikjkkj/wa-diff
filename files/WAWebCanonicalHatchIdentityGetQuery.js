__d(
  "WAWebCanonicalHatchIdentityGetQuery",
  [
    "WAWebAIHatchIdentityStore",
    "WAWebCanonicalHatchIdentityGetQuery.graphql",
    "WAWebHatchGating",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebCanonicalHatchIdentityGetQuery.graphql"));
    function u(e) {
      if (e == null || e.length === 0) return null;
      var t = {},
        n = !1;
      for (var r of e) {
        var a = r.variant,
          i = r.video_url;
        if (a != null && i != null) {
          var l = o("WAWebAIHatchIdentityStore").validateWhatsAppNetUrl(i);
          l != null && ((t[a] = l), (n = !0));
        }
      }
      return n ? t : null;
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n,
            r = yield o("WAWebRelayClient").fetchQuery(
              s,
              {
                includeVideoVariants:
                  o("WAWebHatchGating").isHatchVideoAvatarEnabled(),
              },
              { environmentType: "whatsapp_web" },
            ),
            a =
              r == null || (e = r.wa_genai_hatch_channel_metadata) == null
                ? void 0
                : e.identity,
            i = a == null ? void 0 : a.avatar;
          return {
            name: (t = a == null ? void 0 : a.name) != null ? t : null,
            avatarUrl:
              (n = i == null ? void 0 : i.image_url) != null ? n : null,
            videoVariants: u(i == null ? void 0 : i.video_variants),
          };
        })),
        d.apply(this, arguments)
      );
    }
    l.fetchHatchIdentityGet = c;
  },
  98,
);
