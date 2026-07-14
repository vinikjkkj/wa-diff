__d(
  "WAWebCanonicalHatchChannelUnlinkMutation",
  [
    "WAWebCanonicalHatchChannelUnlinkMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebCanonicalHatchChannelUnlinkMutation.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n = yield o("WAWebRelayClient").commitMutation(
              s,
              {},
              { environmentType: "whatsapp_web" },
            );
          return (e =
            n == null || (t = n.wa_genai_hatch_channel_unlink) == null
              ? void 0
              : t.success) != null
            ? e
            : !1;
        })),
        c.apply(this, arguments)
      );
    }
    l.unlinkHatchChannel = u;
  },
  98,
);
