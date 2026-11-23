__d(
  "MAIBALWIStartDateFieldCopy",
  ["fbt", "invariant", "CometLocalDate"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(e)) {
        var t = r("CometLocalDate").fromISOString(e);
        if (t.toISOString() === e)
          return t.format(
            t.getYear() === r("CometLocalDate").fromDate().getYear()
              ? "M j"
              : "M j, Y",
          );
      }
      return e;
    }
    function c(t, n) {
      return s._(/*BTDS*/ "", [s._param("from", e(t)), s._param("to", e(n))]);
    }
    function d(t, n) {
      var r,
        o =
          (n == null ? void 0 : n.status) === "ok" && n.field === "start_date"
            ? n
            : null;
      return {
        apply: s._(/*BTDS*/ "", [
          s._param("to", e((r = o == null ? void 0 : o.to) != null ? r : t.to)),
        ]),
        concerns: [],
        note:
          o == null || o.to === o.requested
            ? null
            : s._(/*BTDS*/ "", [s._param("to", e(o.to))]),
        resultNote: null,
        undo: s._(/*BTDS*/ "", [s._param("from", e(t.from))]),
      };
    }
    function m(e, t) {
      return e === "STALE_VALUE"
        ? s._(/*BTDS*/ "")
        : e === "FIELD_NOT_PATCHABLE"
          ? s._(/*BTDS*/ "")
          : e === "CONTROL_NOT_MOUNTED"
            ? s._(/*BTDS*/ "")
            : e === "CONTROL_DIRTY"
              ? s._(/*BTDS*/ "")
              : e === "STALE_FORM"
                ? s._(/*BTDS*/ "")
                : e === "LOCKED"
                  ? s._(/*BTDS*/ "")
                  : e === "SUBMITTING"
                    ? s._(/*BTDS*/ "")
                    : t === "preview"
                      ? s._(/*BTDS*/ "")
                      : s._(/*BTDS*/ "");
    }
    function p(t) {
      var n = t.action,
        r = t.receipt;
      if (r.status === "refused")
        return n === "undo" && r.reason === "FORM_DIRTY"
          ? s._(/*BTDS*/ "")
          : n === "undo" && r.reason === "STALE_VALUE"
            ? s._(/*BTDS*/ "")
            : m(r.reason, "result");
      r.field === "start_date" || u(0, 186366, r.field);
      var o = r.requested,
        a = r.to;
      return r.status === "committed_unsettled"
        ? s._(/*BTDS*/ "")
        : r.status === "noop"
          ? s._(/*BTDS*/ "", [s._param("to", e(a))])
          : r.status === "applied"
            ? n === "undo"
              ? s._(/*BTDS*/ "", [s._param("to", e(a))])
              : s._(/*BTDS*/ "", [s._param("to", e(a))])
            : n === "undo" || t.isClamped === !0
              ? s._(/*BTDS*/ "", [
                  s._param("to", e(a)),
                  s._param("requested", e(o)),
                ])
              : s._(/*BTDS*/ "", [
                  s._param("to", e(a)),
                  s._param("requested", e(o)),
                ]);
    }
    var _ = { describeProposal: c, describeRefusal: m, describeResult: p };
    ((l.describeLWIStartDateProposal = c),
      (l.getLWIStartDateCardCopy = d),
      (l.describeLWIStartDateRefusal = m),
      (l.describeLWIStartDateResult = p),
      (l.startDateFieldCopy = _));
  },
  226,
);
