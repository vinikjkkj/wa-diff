__d(
  "MWLSPreloadThreadForContact",
  [
    "FBLogger",
    "I64",
    "LSDatabaseSingleton",
    "LSFactory",
    "LSIntEnum",
    "LSIssueMessagesRangeQueryStoredProcedure",
    "LSMailboxMessagesRangeQueryDirection",
    "LSVerifyThreadRowExistsStoredProcedure",
    "MAWVerifyThreadCutover",
    "Promise",
    "ReQL",
    "ReStoreDbClosedError",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(t) {
      r("promiseDone")(
        (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton.then(
          function (a) {
            return a
              .runInTransaction(
                function (i) {
                  var l = (c || (c = o("I64"))).of_string(t);
                  return o("MAWVerifyThreadCutover")
                    .verifyThreadCutover(
                      (e || (e = n("Promise"))).resolve(a),
                      l,
                    )
                    .then(function (e) {
                      if (!e)
                        return o("ReQL")
                          .firstAsync(
                            o("ReQL")
                              .fromTableAscending(
                                i.messages_ranges_v2__generated,
                              )
                              .getKeyRange(l),
                          )
                          .then(function (e) {
                            return e != null
                              ? e.minMessageId === e.maxMessageId &&
                                e.minMessageId !== ""
                                ? r("LSIssueMessagesRangeQueryStoredProcedure")(
                                    r("LSFactory")(i),
                                    {
                                      direction: (
                                        u || (u = o("LSIntEnum"))
                                      ).ofNumber(
                                        r(
                                          "LSMailboxMessagesRangeQueryDirection",
                                        ).BEFORE,
                                      ),
                                      referenceTimestampMs: e.minTimestampMs,
                                      threadKey: l,
                                    },
                                  )
                                : void 0
                              : r("LSVerifyThreadRowExistsStoredProcedure")(
                                  r("LSFactory")(i),
                                  {
                                    syncGroup: (
                                      u || (u = o("LSIntEnum"))
                                    ).ofNumber(1),
                                    threadKey: l,
                                  },
                                );
                          });
                    });
                },
                "readwrite",
                void 0,
                void 0,
                i.id + ":29",
              )
              .catch(function (e) {
                if (e instanceof r("ReStoreDbClosedError"))
                  r("FBLogger")("messenger_web").info(
                    "Failed to preload thread, db closed.",
                  );
                else throw e;
              });
          },
        ),
      );
    }
    function m() {
      return d;
    }
    ((l.verifyThreadExists = d), (l.usePreloaderForUser = m));
  },
  98,
);
