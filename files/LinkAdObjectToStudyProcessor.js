__d(
  "LinkAdObjectToStudyProcessor",
  ["fbt", "actionabilityProcessorShared"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return e === o("actionabilityProcessorShared").MAIBAToolCallStatus.RUNNING
        ? s._(/*BTDS*/ "", [s._param("type", t)])
        : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.COMPLETED
          ? s._(/*BTDS*/ "", [s._param("type", t)])
          : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.FAILED
            ? s._(/*BTDS*/ "", [s._param("type", t)])
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function u(e, t) {
      return e === o("actionabilityProcessorShared").MAIBAToolCallStatus.RUNNING
        ? s._(/*BTDS*/ "", [s._param("type", t)])
        : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.COMPLETED
          ? s._(/*BTDS*/ "", [s._param("type", t)])
          : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.FAILED
            ? s._(/*BTDS*/ "", [s._param("type", t)])
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function c(e) {
      return e === "CAMPAIGN_GROUP"
        ? s._(/*BTDS*/ "")
        : e === "CAMPAIGN"
          ? s._(/*BTDS*/ "")
          : e === "ADGROUP"
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
    }
    function d(e, t, n) {
      return e === o("actionabilityProcessorShared").MAIBAToolCallStatus.RUNNING
        ? s._(/*BTDS*/ "", [s._param("type", t)])
        : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.COMPLETED
          ? c(n)
          : e === o("actionabilityProcessorShared").MAIBAToolCallStatus.FAILED
            ? s._(/*BTDS*/ "", [s._param("type", t)])
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function m(t, n, r, o) {
      return t === 0 ? e(n, r) : t === 1 ? u(n, r) : d(n, r, o);
    }
    var p = {
        getSteps: function (t) {
          return t.map(function (e, t) {
            var n,
              r = o("actionabilityProcessorShared").statusOf(e),
              a = o("actionabilityProcessorShared").asString(
                (n = o("actionabilityProcessorShared").parseArgs(e)) == null
                  ? void 0
                  : n.ad_object_type,
              ),
              i = o("actionabilityProcessorShared").getAdObjectLevelLabel(a);
            return {
              content: null,
              key: o("actionabilityProcessorShared").keyOf(e),
              status: r,
              title: m(t, r, i, a),
            };
          });
        },
      },
      _ = p;
    l.default = _;
  },
  226,
);
