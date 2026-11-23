__d(
  "DeleteAdFragmentProcessor",
  ["fbt", "actionabilityProcessorShared"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return e === o("actionabilityProcessorShared").MAIBAToolCallStatus.RUNNING
        ? s._(/*BTDS*/ "", [s._param("types", t)])
        : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.COMPLETED
          ? s._(/*BTDS*/ "", [s._param("types", t)])
          : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.FAILED
            ? s._(/*BTDS*/ "", [s._param("types", t)])
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
            var n,
              r = o("actionabilityProcessorShared").getAdObjectLevelLabelPlural(
                o("actionabilityProcessorShared").asString(
                  (n = o("actionabilityProcessorShared").parseArgs(t)) == null
                    ? void 0
                    : n.ad_object_type,
                ),
              ),
              a = o("actionabilityProcessorShared").statusOf(t);
            return {
              content: null,
              key: o("actionabilityProcessorShared").keyOf(t),
              status: a,
              title: e(a, r),
            };
          });
        },
      },
      c = u;
    l.default = c;
  },
  226,
);
