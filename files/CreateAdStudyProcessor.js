__d(
  "CreateAdStudyProcessor",
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
    var u = {
        getSteps: function (n) {
          return n.map(function (t) {
            var n = o("actionabilityProcessorShared").statusOf(t);
            return {
              content: null,
              key: o("actionabilityProcessorShared").keyOf(t),
              status: n,
              title: e(n),
            };
          });
        },
      },
      c = u;
    l.default = c;
  },
  226,
);
