__d(
  "WAWebVoipRejectCallWithReasonEnc",
  [
    "Promise",
    "WAWebSignalStoreApi",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = yield (e || (e = n("Promise"))).all([
              o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
              o("WAWebVoipStackInterface").getVoipStackInterface(),
            ]),
            s = l[0],
            u = l[1];
          if (s == null) throw r("err")("No registration info found");
          var c = a + 1;
          return (
            yield u == null
              ? void 0
              : u.rejectCallWithoutCallContext(
                  t.call_id,
                  i,
                  t.peer_jid.toString({ legacy: !0, formatIncludeDevice: !0 }),
                  t.call_creator.toString({
                    legacy: !0,
                    formatIncludeDevice: !0,
                  }),
                  i
                    ? o("WAWebVoipSignalingEnums").ENC_RETRY_RECEIPT_ATTRS
                        .GROUP_CALL
                    : o("WAWebVoipSignalingEnums").ENC_RETRY_RECEIPT_ATTRS
                        .SINGLE_PARTICIPANT,
                  c,
                  s.registrationId,
                ),
            c
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.rejectCallWithReasonEnc = s;
  },
  98,
);
