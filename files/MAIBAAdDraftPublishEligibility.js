__d(
  "MAIBAAdDraftPublishEligibility",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n = e.some(function (e) {
          return e.status != null && e.status !== "VALIDATED";
        }),
        r = [];
      for (var o of e) {
        var a = o.errorMessages;
        if (a != null) for (var i of a) i !== "" && r.push(i);
      }
      var l = t || n,
        u = !t && n && r.length === 0,
        c = null;
      return (
        t ||
          (r.length > 0
            ? (c = r.join("; "))
            : n && (c = s._(/*BTDS*/ "").toString())),
        {
          disabledTooltip: c,
          isGenericValidationBlocker: u,
          isPublishDisabled: l,
        }
      );
    }
    function u(e, t) {
      return {
        errorMessages: t.map(function (e) {
          return e.error_description;
        }),
        status: e,
      };
    }
    ((l.computeAdDraftPublishEligibility = e),
      (l.projectFragmentValidation = u));
  },
  226,
);
