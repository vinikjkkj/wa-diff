__d(
  "WAWebDebugResetSuggestedActions",
  ["WAWebNux", "WAWebNuxAction"],
  function (t, n, r, o, a, i, l) {
    var e = [
      o("WAWebNux").NUX.CUSTOMER_MANAGER_SUGGESTED_UNREAD_CHATS,
      o("WAWebNux").NUX.CUSTOMER_MANAGER_SUGGESTED_PIPELINE_VIEW,
      o("WAWebNux").NUX.CUSTOMER_MANAGER_SUGGESTED_LEAD_STAGES,
    ];
    async function s() {
      await Promise.all(
        e.map(function (e) {
          return o("WAWebNuxAction").resetNux(e);
        }),
      );
    }
    l.resetSuggestedActionsForDebug = s;
  },
  98,
);
