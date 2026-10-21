__d(
  "WAWebAECompanionOffboardMutation",
  [
    "WALogger",
    "WAWebAECompanionEligibility",
    "WAWebAECompanionOffboardMutation.graphql",
    "WAWebCoexBusinessRequest",
    "WAWebCoexCanonicalStateQuery",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        e !== void 0 ? e : (e = n("WAWebAECompanionOffboardMutation.graphql"));
    function d() {
      return o("WAWebCoexBusinessRequest").sendCoexBusinessRequest(
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t,
              n = yield o(
                "WAWebCoexCanonicalStateQuery",
              ).queryCoexCanonicalMembership(e);
            if (n.type !== "authoritative")
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "offboardAECompanion: not sent, membership ",
                      "",
                    ])),
                  n.reason,
                ),
                !1
              );
            if (
              !o("WAWebAECompanionEligibility").canCompanionOffboardAE(
                n.surfaces,
              )
            )
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "offboardAECompanion: not sent, surfaces [",
                      "]",
                    ])),
                  n.surfaces.join(","),
                ),
                !1
              );
            var r = yield o("WAWebRelayClient").commitMutation(
              c,
              { phoneNumber: e.phoneNumber },
              { environmentType: "facebook", accessToken: e.token },
            );
            return (
              (r == null ||
              (t = r.xfb_whatsapp_coexistence_offboard_product) == null
                ? void 0
                : t.success) === !0
            );
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        "ae-companion-offboard-failed",
      );
    }
    l.offboardAECompanion = d;
  },
  98,
);
