__d(
  "WAWebGroupMembershipFormCrypto",
  [
    "WAWebGroupMembershipFormContentAnswersDecoder",
    "WAWebGroupMembershipFormDevStore",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupMembershipFormGemPlaceholders",
    "WAWebGroupMembershipFormPlainAnswersEncoder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o(
        "WAWebGroupMembershipFormContentAnswersDecoder",
      ).makeContentGroupMembershipFormAnswersDecoder(
        o("WAWebGroupMembershipFormGemPlaceholders")
          .gemGroupMembershipFormAnswersDecoder,
      ),
      s = {
        decode: async function () {
          return o(
            "WAWebGroupMembershipFormDevStore",
          ).getDevMembershipFormDecodeResult();
        },
      };
    function u() {
      return o(
        "WAWebGroupMembershipFormGating",
      ).isGroupMembershipFormGemEnabled()
        ? o("WAWebGroupMembershipFormGemPlaceholders")
            .gemGroupMembershipFormAnswersEncoder
        : o("WAWebGroupMembershipFormPlainAnswersEncoder")
            .plainGroupMembershipFormAnswersEncoder;
    }
    function c() {
      return o("WAWebGroupMembershipFormDevStore").isGMFDevMode() ? s : e;
    }
    function d() {
      return o(
        "WAWebGroupMembershipFormGemPlaceholders",
      ).getGemGroupMembershipFormKeyProvider();
    }
    ((l.getGroupMembershipFormAnswersEncoder = u),
      (l.getGroupMembershipFormAnswersDecoder = c),
      (l.getGroupMembershipFormKeyProvider = d));
  },
  98,
);
