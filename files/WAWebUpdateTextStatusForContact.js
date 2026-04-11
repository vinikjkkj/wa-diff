__d(
  "WAWebUpdateTextStatusForContact",
  [
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBUpdateContactTable",
    "WAWebTextStatusUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, o) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = o("WAWebWidFactory").createUserWidOrThrow(e.user, e.server),
              l = yield o("WAWebApiContact").getContactRecord(i);
            if (l) {
              var s = l.textStatusLastUpdateTime;
              if (
                a == null ||
                (s != null &&
                  a !==
                    o("WAWebTextStatusUtils")
                      .CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL &&
                  a < s)
              )
                return;
              var u;
              r != null &&
                r > 0 &&
                a !==
                  o("WAWebTextStatusUtils")
                    .CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL &&
                (u = Number(a) + Number(r));
              var c = {
                textStatusString: t,
                textStatusEmoji: n,
                textStatusEphemeralDuration: r,
                textStatusLastUpdateTime: a,
                textStatusExpiryTs: u,
              };
              (yield o("WAWebDBUpdateContactTable").updateContactTable(
                i,
                babelHelpers.extends({}, c),
              ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateTextStatus",
                  babelHelpers.extends({}, c, { contactId: i }),
                ));
            }
          },
        )),
        s.apply(this, arguments)
      );
    }
    l.updateTextStatusForContact = e;
  },
  98,
);
