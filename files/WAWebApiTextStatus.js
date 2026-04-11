__d(
  "WAWebApiTextStatus",
  [
    "Promise",
    "WATimeUtils",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageUtils",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      var t = o("WATimeUtils").unixTime();
      return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
        ? o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["contact"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield r("WAWebLidAwareContactsDB").lessThan(
                  ["textStatusExpiryTs"],
                  t,
                );
                if (!(!e || e.length === 0)) {
                  var n = e.map(function (e) {
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
              }),
            )
        : (e || (e = n("Promise"))).resolve();
    }
    l.updateExpiredTextStatusOfContact = s;
  },
  98,
);
