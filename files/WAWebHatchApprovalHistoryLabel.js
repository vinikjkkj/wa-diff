__d(
  "WAWebHatchApprovalHistoryLabel",
  ["fbt", "WAWebL10N"],
  function (t, n, r, o, a, i, l, s) {
    var e = new Set(["kn_IN", "ur_PK"]);
    function u() {
      return e.has(r("WAWebL10N").getLocale())
        ? s._(/*BTDS*/ "")
        : s._(/*BTDS*/ "");
    }
    function c() {
      return r("WAWebL10N").getLocale() === "gu_IN"
        ? s._(/*BTDS*/ "")
        : s._(/*BTDS*/ "");
    }
    ((l.hatchApprovalHistoryRowLabel = u), (l.hatchApprovalHistoryTitle = c));
  },
  226,
);
