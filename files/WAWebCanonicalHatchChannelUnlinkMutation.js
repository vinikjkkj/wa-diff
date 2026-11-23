__d(
  "WAWebCanonicalHatchChannelUnlinkMutation",
  ["WAWebCanonicalHatchChannelUnlinkMutation.graphql", "WAWebRelayClient"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebCanonicalHatchChannelUnlinkMutation.graphql"));
    async function u() {
      var e,
        t,
        n = await o("WAWebRelayClient").commitMutation(
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
    }
    l.unlinkHatchChannel = u;
  },
  98,
);
