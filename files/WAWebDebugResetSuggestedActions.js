__d(
  "WAWebDebugResetSuggestedActions",
  ["Promise", "WAWebNux", "WAWebNuxAction", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        o("WAWebNux").NUX.CUSTOMER_MANAGER_SUGGESTED_UNREAD_CHATS,
        o("WAWebNux").NUX.CUSTOMER_MANAGER_SUGGESTED_PIPELINE_VIEW,
        o("WAWebNux").NUX.CUSTOMER_MANAGER_SUGGESTED_LEAD_STAGES,
      ];
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield (e || (e = n("Promise"))).all(
            s.map(function (e) {
              return o("WAWebNuxAction").resetNux(e);
            }),
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.resetSuggestedActionsForDebug = u;
  },
  98,
);
