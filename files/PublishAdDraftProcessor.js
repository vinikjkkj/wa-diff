__d(
  "PublishAdDraftProcessor",
  ["fbt", "actionabilityProcessorShared"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === o("actionabilityProcessorShared").MAIBAToolCallStatus.RUNNING
        ? s._(/*BTDS*/ "")
        : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.COMPLETED
          ? s._(/*BTDS*/ "")
          : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.FAILED
            ? s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function u(e) {
      return e === o("actionabilityProcessorShared").MAIBAToolCallStatus.RUNNING
        ? s._(/*BTDS*/ "")
        : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.COMPLETED
          ? s._(/*BTDS*/ "")
          : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.FAILED
            ? s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function c(t) {
      var n = o("actionabilityProcessorShared").parseArgs(t),
        r = o("actionabilityProcessorShared").asString(
          n == null ? void 0 : n.confirmation_token,
        ),
        a = n == null ? void 0 : n.token_timestamp,
        i = r == null || r === "" || a == null,
        l = o("actionabilityProcessorShared").statusOf(t);
      return {
        content: null,
        key: o("actionabilityProcessorShared").keyOf(t),
        status: l,
        title: i ? e(l) : u(l),
      };
    }
    var d = {
        getSteps: function (t) {
          return t.map(c);
        },
      },
      m = d;
    l.default = m;
  },
  226,
);
