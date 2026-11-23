__d(
  "WAWebVoipRejectCallWithReasonEnc",
  [
    "WAWebSignalStoreApi",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n) {
      var a = await Promise.all([
          o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
          o("WAWebVoipStackInterface").getVoipStackInterface(),
        ]),
        i = a[0],
        l = a[1];
      if (i == null) throw r("err")("No registration info found");
      var s = t + 1;
      return (
        await (l == null
          ? void 0
          : l.rejectCallWithoutCallContext(
              e.call_id,
              n,
              e.peer_jid.toString({ legacy: !0, formatIncludeDevice: !0 }),
              e.call_creator.toString({ legacy: !0, formatIncludeDevice: !0 }),
              n
                ? o("WAWebVoipSignalingEnums").ENC_RETRY_RECEIPT_ATTRS
                    .GROUP_CALL
                : o("WAWebVoipSignalingEnums").ENC_RETRY_RECEIPT_ATTRS
                    .SINGLE_PARTICIPANT,
              s,
              i.registrationId,
            )),
        s
      );
    }
    l.rejectCallWithReasonEnc = e;
  },
  98,
);
