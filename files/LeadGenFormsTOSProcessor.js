__d(
  "LeadGenFormsTOSProcessor",
  [
    "fbt",
    "MAIBALeadGenTOSNotice.react",
    "MAIBALeadGenTOSNoticeUtils",
    "actionabilityProcessorShared",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e === "create_lead_gen_form" ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function d(e) {
      return {
        content: u.jsx(r("MAIBALeadGenTOSNotice.react"), {
          rawResult: e.tool_result,
        }),
        isInitiallyExpanded: !0,
        key: o("actionabilityProcessorShared").keyOf(e),
        status: o("actionabilityProcessorShared").statusOf(e),
        title: c(e.tool_name),
      };
    }
    function m(e) {
      if (o("actionabilityProcessorShared").statusOf(e) !== "COMPLETED")
        return !1;
      var t = o("MAIBALeadGenTOSNoticeUtils").parseLeadGenTOSResult(
        e.tool_result,
      );
      return t != null && t.canAcceptInChat;
    }
    var p = {
        getSteps: function (t) {
          return t.filter(m).map(d);
        },
      },
      _ = p;
    l.default = _;
  },
  226,
);
