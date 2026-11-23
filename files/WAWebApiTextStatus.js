__d(
  "WAWebApiTextStatus",
  [
    "WATimeUtils",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageUtils",
    "WAWebTextStatusUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WATimeUtils").unixTime();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["contact"], async function () {
          var t = await r("WAWebLidAwareContactsDB").lessThan(
            ["textStatusExpiryTs"],
            e,
          );
          if (!(!t || t.length === 0)) {
            var n = t.map(function (e) {
              return {
                id: e.id,
                textStatusString: void 0,
                textStatusEmoji: void 0,
                textStatusExpiryTs: void 0,
                textStatusEphemeralDuration: void 0,
                textStatusLastUpdateTime: o("WAWebTextStatusUtils")
                  .CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL,
              };
            });
            return r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
              n,
              "ApiTextStatus.updateExpiredTextStatusOfContact",
            );
          }
        });
    }
    l.updateExpiredTextStatusOfContact = e;
  },
  98,
);
