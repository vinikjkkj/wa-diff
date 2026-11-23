__d(
  "MAIBALWIDurationFieldCopy",
  ["fbt", "invariant", "CometLocalDate"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e, t) {
      return s._(/*BTDS*/ "", [
        s._plural(Number(e), "from"),
        s._plural(Number(t), "to"),
      ]);
    }
    function c(e, t, n) {
      var o = r("CometLocalDate").fromISOString(n),
        a = o.format(
          o.getYear() === r("CometLocalDate").fromDate().getYear()
            ? "M j"
            : "M j, Y",
        );
      return t === e
        ? s._(/*BTDS*/ "", [s._param("date", a)])
        : s._(/*BTDS*/ "", [s._plural(t, "to"), s._param("date", a)]);
    }
    function d(e, t, n) {
      var r,
        o =
          (t == null ? void 0 : t.status) === "ok" &&
          t.field === "duration_days"
            ? t
            : null,
        a = [];
      (o == null ? void 0 : o.turnsOffScaling) === !0 &&
        a.push(s._(/*BTDS*/ ""));
      var i = n == null ? void 0 : n.receipt;
      return {
        apply: s._(/*BTDS*/ "", [
          s._plural(
            (r = o == null ? void 0 : o.to) != null ? r : Number(e.to),
            "to",
          ),
        ]),
        concerns: a,
        note: o == null ? null : c(o.requested, o.to, o.endDate),
        resultNote:
          ((i == null ? void 0 : i.status) === "applied" ||
            (i == null ? void 0 : i.status) === "adjusted") &&
          i.note != null
            ? s._(/*BTDS*/ "")
            : null,
        undo: s._(/*BTDS*/ "", [s._plural(Number(e.from), "from")]),
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
    function p(e) {
      var t = e.action,
        n = e.receipt;
      if (n.status === "refused")
        return t === "undo" && n.reason === "FORM_DIRTY"
          ? s._(/*BTDS*/ "")
          : t === "undo" && n.reason === "STALE_VALUE"
            ? s._(/*BTDS*/ "")
            : m(n.reason, "result");
      n.field === "duration_days" || u(0, 185240, n.field);
      var r = n.requested,
        o = n.to;
      return n.status === "committed_unsettled"
        ? s._(/*BTDS*/ "")
        : n.status === "noop"
          ? s._(/*BTDS*/ "", [s._plural(o, "to")])
          : n.status === "applied"
            ? t === "undo"
              ? s._(/*BTDS*/ "", [s._plural(o, "to")])
              : s._(/*BTDS*/ "", [s._plural(o, "to")])
            : t === "undo" || e.isClamped === !0
              ? s._(/*BTDS*/ "", [
                  s._plural(o, "to"),
                  s._plural(r, "requested"),
                ])
              : s._(/*BTDS*/ "", [
                  s._plural(o, "to"),
                  s._plural(r, "requested"),
                ]);
    }
    function _(e) {
      return (
        e.field === "duration_days" || u(0, 185240, e.field),
        e.note == null ? null : s._(/*BTDS*/ "")
      );
    }
    var f = {
      describeProposal: e,
      describeRefusal: m,
      describeResult: p,
      describeUndoDisclosure: _,
    };
    ((l.describeLWIDurationProposal = e),
      (l.getLWIDurationCardCopy = d),
      (l.describeLWIDurationRefusal = m),
      (l.describeLWIDurationResult = p),
      (l.describeLWIDurationUndoDisclosure = _),
      (l.durationFieldCopy = f));
  },
  226,
);
