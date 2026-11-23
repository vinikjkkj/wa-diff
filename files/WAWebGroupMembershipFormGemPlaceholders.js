__d(
  "WAWebGroupMembershipFormGemPlaceholders",
  ["WAWebGroupMembershipFormCryptoTypes", "WAWebGroupMembershipFormTypes"],
  function (t, n, r, o, a, i, l) {
    var e = {
        encode: async function () {
          throw new (o(
            "WAWebGroupMembershipFormTypes",
          ).GroupMembershipFormJoinError)(
            o("WAWebGroupMembershipFormTypes").GroupMembershipFormJoinErrorCode
              .NOT_SUPPORTED,
          );
        },
      },
      s = {
        decode: async function () {
          return {
            type: "failure",
            error: o("WAWebGroupMembershipFormCryptoTypes")
              .GroupMembershipFormDecodeError.NO_KEY,
          };
        },
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
