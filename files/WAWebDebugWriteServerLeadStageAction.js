__d(
  "WAWebDebugWriteServerLeadStageAction",
  [
    "WAWebContactManagerCustomerProfileUpsertMutation",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = /^\d+(@lid)?$/;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield o(
            "WAWebContactManagerCustomerProfileUpsertMutation",
          ).upsertCustomerProfileFieldToServer(d(e), {
            field: "leadStage",
            value: t,
          });
        })),
        u.apply(this, arguments)
      );
    }
    function c(t) {
      return e.test(t.trim());
    }
    function d(e) {
      var t = e.trim();
      if (!c(t))
        throw r("err")(
          '[CustomerManager] debug lead stage: expected a LID, got "' + t + '"',
        );
      return o("WAWebWidToJid").widToChatJid(
        o("WAWebWidFactory").createUserLidOrThrow(t, "lid"),
      );
    }
    ((l.writeServerLeadStageForDebug = s), (l.isValidLidInput = c));
  },
  98,
);
