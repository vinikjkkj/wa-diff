__d(
  "EditAdObjectDraftsProcessor",
  ["fbt", "actionabilityProcessorShared"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      return e === o("actionabilityProcessorShared").MAIBAToolCallStatus.RUNNING
        ? s._(/*BTDS*/ "", [s._param("type", t)])
        : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.COMPLETED
          ? s._(/*BTDS*/ "", [s._param("type", n)])
          : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.FAILED
            ? s._(/*BTDS*/ "", [s._param("type", t)])
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function u(t) {
      var n,
        r = o("actionabilityProcessorShared").asString(
          (n = o("actionabilityProcessorShared").parseArgs(t)) == null
            ? void 0
            : n.ad_object_type,
        ),
        a = o("actionabilityProcessorShared").getAdObjectLevelLabel(r),
        i = o("actionabilityProcessorShared").getAdObjectLevelLabelCapitalized(
          r,
        ),
        l = o("actionabilityProcessorShared").statusOf(t);
      return {
        content: null,
        key: o("actionabilityProcessorShared").keyOf(t),
        status: l,
        title: e(l, a, i),
      };
    }
    var c = {
        getSteps: function (t) {
          var e = [],
            n = [];
          for (var r of t) {
            var a,
              i = o("actionabilityProcessorShared").asString(
                (a = o("actionabilityProcessorShared").parseArgs(r)) == null
                  ? void 0
                  : a.ad_object_type,
              ),
              l = n[n.length - 1];
            (e.length > 0 && i === l && (e.pop(), n.pop()),
              e.push(u(r)),
              n.push(i));
          }
          return e;
        },
      },
      d = c;
    l.default = d;
  },
  226,
);
