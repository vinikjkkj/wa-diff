__d(
  "WAWebGroupMembershipFormPlainAnswersEncoder",
  ["WAWebGroupMembershipFormProto"],
  function (t, n, r, o, a, i, l) {
    var e = {
      encode: async function (t) {
        return {
          encryptedPayload: o(
            "WAWebGroupMembershipFormProto",
          ).encodeGroupMembershipFormSubmission(t),
          reportingToken: null,
        };
      },
    };
    l.plainGroupMembershipFormAnswersEncoder = e;
  },
  98,
);
