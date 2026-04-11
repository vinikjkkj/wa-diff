__d(
  "WAWebKmpSyncdResultUtils",
  ["WAWebSyncdError", "err", "wa-kmp-syncd-engine-api"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e instanceof
        o("wa-kmp-syncd-engine-api").KmpSyncdEngineError.KmpSyncdRetriableError
        ? new (o("WAWebSyncdError").SyncdRetryableError)(e.errorMessage)
        : e instanceof
            o("wa-kmp-syncd-engine-api").KmpSyncdEngineError.KmpSyncdFatalError
          ? new (o("WAWebSyncdError").SyncdFatalError)(e.errorMessage)
          : r("err")(e.errorMessage);
    }
    function s(t) {
      return t.getOrElse(function (t) {
        throw e(t);
      });
    }
    ((l.kmpSyncdEngineErrorToException = e), (l.kmpResultGetOrThrow = s));
  },
  98,
);
