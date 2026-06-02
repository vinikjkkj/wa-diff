__d(
  "WAWebDebugTextStatus",
  ["WAWebContactCollection", "WAWebLidAwareContactsDB", "WAWebTextStatusUtils"],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = await r("WAWebLidAwareContactsDB").all();
      if (!(!e || e.length === 0)) {
        var t = e.map(function (e) {
          return {
            id: e.id,
            textStatusString: void 0,
            textStatusEmoji: void 0,
            textStatusEphemeralDuration: void 0,
            textStatusLastUpdateTime: void 0,
            textStatusExpiryTs: void 0,
          };
        });
        (await r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
          t,
          "DebugTextStatus.resetAllTextStatus",
        ),
          o("WAWebContactCollection").ContactCollection.forEach(function (e) {
            e.set({
              textStatusString: null,
              textStatusEmoji: null,
              textStatusEphemeralDuration: null,
              textStatusLastUpdateTime: o("WAWebTextStatusUtils")
                .TEXT_STATUS_NOT_FETCHED,
              textStatusExpiryTs: null,
            });
          }));
      }
    }
    e.doc =
      'Resets text status (About 2.0) for all contacts to "not fetched" state, forcing re-fetch on next render';
    var s = { resetAllTextStatus: e };
    l.default = s;
  },
  98,
);
