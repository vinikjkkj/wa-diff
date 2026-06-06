__d(
  "WAWebNewsletterReparseMsgAction",
  [
    "WAWebBackendApi",
    "WAWebHandleMsgTypes.flow",
    "WAWebNewsletterFutureProofUtils",
    "WAWebNewsletterUpdateMsgsRecordsJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.futureproofBuffer,
        n = e.futureproofSubtype,
        r = e.futureproofType;
      if (t != null || r == null) return e;
      var a = o("WAWebNewsletterFutureProofUtils").isMsgSupported(e),
        i = a.supported;
      if (!i) return e;
      var l = babelHelpers.extends({}, e, {
        type: r,
        kind: r,
        subtype: n,
        futureproofType: void 0,
        futureproofSubtype: void 0,
      });
      return (
        await o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(
          [l],
        ),
        await o("WAWebBackendApi").frontendSendAndReceive("updateMessageUI", {
          msg: l,
          chatId: e.id.remote,
          messageOverwriteOption: o("WAWebHandleMsgTypes.flow")
            .MessageOverwriteOption.RETRY,
        }),
        l
      );
    }
    l.reparseNewsletterMsg = e;
  },
  98,
);
