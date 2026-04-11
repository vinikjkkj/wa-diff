__d(
  "WAWebNewsletterReparseMsgAction",
  [
    "WAWebBackendApi",
    "WAWebHandleMsgTypes.flow",
    "WAWebNewsletterFutureProofUtils",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            yield o(
              "WAWebNewsletterUpdateMsgsRecordsJob",
            ).addNewsletterMsgsRecords([l]),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "updateMessageUI",
              {
                msg: l,
                chatId: e.id.remote,
                messageOverwriteOption: o("WAWebHandleMsgTypes.flow")
                  .MessageOverwriteOption.RETRY,
              },
            ),
            l
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.reparseNewsletterMsg = e;
  },
  98,
);
