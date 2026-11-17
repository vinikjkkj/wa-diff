__d(
  "WAWebGroupMembershipFormCrypto",
  [
    "WAWebGroupMembershipFormContentAnswersDecoder",
    "WAWebGroupMembershipFormDevStore",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupMembershipFormGemPlaceholders",
    "WAWebGroupMembershipFormPlainAnswersEncoder",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o(
        "WAWebGroupMembershipFormContentAnswersDecoder",
      ).makeContentGroupMembershipFormAnswersDecoder(
        o("WAWebGroupMembershipFormGemPlaceholders")
          .gemGroupMembershipFormAnswersDecoder,
      ),
      s = {
        decode: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o(
              "WAWebGroupMembershipFormDevStore",
            ).getDevMembershipFormDecodeResult();
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
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
