__d(
  "CreateLeadGenFormProcessor",
  [
    "fbt",
    "LeadGenFormsTOSProcessor",
    "MAIBALeadGenFormURLsPrompt.react",
    "MAIBALeadGenFormURLsPromptUtils",
    "actionabilityProcessorShared",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return {
        content: u.jsx(r("MAIBALeadGenFormURLsPrompt.react"), {
          rawResult: e.tool_result,
        }),
        isInitiallyExpanded: !0,
        key: o("actionabilityProcessorShared").keyOf(e),
        status: o("actionabilityProcessorShared").statusOf(e),
        title: s._(/*BTDS*/ ""),
      };
    }
    function d(e) {
      return o("actionabilityProcessorShared").statusOf(e) !== "COMPLETED"
        ? !1
        : o("MAIBALeadGenFormURLsPromptUtils").parseLeadGenFormURLsPrompt(
            e.tool_result,
          ) != null;
    }
    var m = {
        getSteps: function (t) {
          var e = r("LeadGenFormsTOSProcessor").getSteps(t),
            n = new Set(
              e.map(function (e) {
                return e.key;
              }),
            );
          return [].concat(
            e,
            t
              .filter(function (e) {
                return (
                  !n.has(o("actionabilityProcessorShared").keyOf(e)) && d(e)
                );
              })
              .map(c),
          );
        },
      },
      p = m;
    l.default = p;
  },
  226,
);
