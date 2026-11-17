__d(
  "WAWebGroupMembershipFormGemPlaceholders",
  [
    "WAWebGroupMembershipFormCryptoTypes",
    "WAWebGroupMembershipFormTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        encode: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            throw new (o(
              "WAWebGroupMembershipFormTypes",
            ).GroupMembershipFormJoinError)(
              o("WAWebGroupMembershipFormTypes")
                .GroupMembershipFormJoinErrorCode.NOT_SUPPORTED,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      s = {
        decode: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return {
              type: "failure",
              error: o("WAWebGroupMembershipFormCryptoTypes")
                .GroupMembershipFormDecodeError.NO_KEY,
            };
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    function u() {
      return null;
    }
    ((l.gemGroupMembershipFormAnswersEncoder = e),
      (l.gemGroupMembershipFormAnswersDecoder = s),
      (l.getGemGroupMembershipFormKeyProvider = u));
  },
  98,
);
