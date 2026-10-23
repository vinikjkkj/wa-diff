__d(
  "WAWebDebugTextStatus",
  [
    "WAWebContactCollection",
    "WAWebLidAwareContactsDB",
    "WAWebTextStatusUtils",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("wNdfP37mI08p8k5T0BKXhN6M-5s=");
          var e = yield r("WAWebLidAwareContactsDB").all();
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
            (yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
              t,
              "DebugTextStatus.resetAllTextStatus",
            ),
              o("WAWebContactCollection").ContactCollection.forEach(
                function (e) {
                  (r("vulture")("ieau0nSGgfSki04UqZ6pI4EH8Hg="),
                    e.set({
                      textStatusString: null,
                      textStatusEmoji: null,
                      textStatusEphemeralDuration: null,
                      textStatusLastUpdateTime: o("WAWebTextStatusUtils")
                        .TEXT_STATUS_NOT_FETCHED,
                      textStatusExpiryTs: null,
                    }));
                },
              ));
          }
        })),
        s.apply(this, arguments)
      );
    }
    e.doc =
      'Resets text status (About 2.0) for all contacts to "not fetched" state, forcing re-fetch on next render';
    var u = { resetAllTextStatus: e };
    l.default = u;
  },
  98,
);
