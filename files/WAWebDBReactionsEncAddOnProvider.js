__d(
  "WAWebDBReactionsEncAddOnProvider",
  ["WAWebMessageAddOnType", "WAWebMsgType", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e = {
      type: o("WAWebMessageAddOnType").MessageAddOnType.ReactionEnc,
      matches: function (t) {
        return t.type === o("WAWebMsgType").MSG_TYPE.REACTION_ENC;
      },
      matchesFutureproof: function (t) {
        return (
          t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
          t.futureproofType === o("WAWebMsgType").MSG_TYPE.REACTION_ENC
        );
      },
      canRenderInUi: function () {
        return !0;
      },
      processOrphansForNewMsg: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          throw r("err")("Reactions provider is deprecated");
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.reactionsEncAddOnProvider = e;
  },
  98,
);
