__d(
  "CheckLeadGenTOSProcessor",
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
    function c(e, t) {
      return t
        ? s._(/*BTDS*/ "")
        : (e == null ? void 0 : e.status) === "accepted_but_unreadable"
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
    }
    function d(e) {
      var t = o("actionabilityProcessorShared").statusOf(e),
        n = t === "FAILED",
        a = o("MAIBALeadGenTOSNoticeUtils").parseLeadGenTOSResult(
          e.tool_result,
        );
      return {
        content:
          a == null
            ? null
            : u.jsx(r("MAIBALeadGenTOSNotice.react"), {
                rawResult: e.tool_result,
              }),
        isInitiallyExpanded: !0,
        key: o("actionabilityProcessorShared").keyOf(e),
        status: t,
        title: c(a, n),
      };
    }
    function m(e) {
      var t = o("actionabilityProcessorShared").statusOf(e);
      if (t === "FAILED") return !0;
      if (t !== "COMPLETED") return !1;
      var n = o("MAIBALeadGenTOSNoticeUtils").parseLeadGenTOSResult(
        e.tool_result,
      );
      return n != null && n.status !== "accepted";
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
