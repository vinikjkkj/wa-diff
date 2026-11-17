__d(
  "WAWebGroupMembershipFormPlainAnswersEncoder",
  ["WAWebGroupMembershipFormProto", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = {
      encode: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return {
            encryptedPayload: o(
              "WAWebGroupMembershipFormProto",
            ).encodeGroupMembershipFormSubmission(e),
            reportingToken: null,
          };
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.plainGroupMembershipFormAnswersEncoder = e;
  },
  98,
);
