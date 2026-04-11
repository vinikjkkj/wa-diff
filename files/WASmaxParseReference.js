__d(
  "WASmaxParseReference",
  ["WAHasProperty", "WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, o) {
      var a = m(t, n);
      if (!a.success) return _(a);
      var i = e(a.value, n[n.length - 1], r, o);
      return i.success ? i : _(i);
    }
    function s(t, n, r, a, i) {
      return p(n, r) ? e(t, n, r, a, i) : o("WASmaxParseUtils").voidSuccess;
    }
    function u(t, n) {
      return e(o("WASmaxParseUtils").attrString, t, n);
    }
    function c(e, t) {
      return p(e, t) ? u(e, t) : o("WASmaxParseUtils").voidSuccess;
    }
    function d(e, t) {
      var n = m(e, t);
      if (!n.success) return _(n);
      var r = o("WASmaxParseUtils").contentString(n.value);
      return r.success ? r : _(r);
    }
    function m(e, t) {
      for (var n = t.length, r = e, a = 0; a < n - 1; a++) {
        var i = t[a],
          l = o("WASmaxParseUtils").flattenedChildWithTag(r, i);
        if (!l.success) return l;
        r = l.value;
      }
      return o("WAResultOrError").makeResult(r);
    }
    function p(e, t) {
      var n = m(e, t);
      return n.success && r("WAHasProperty")(n.value.attrs, t[t.length - 1]);
    }
    function _(e) {
      return o("WAResultOrError").makeError("in the reference, " + e.error);
    }
    ((l.attrFromReference = e),
      (l.optionalAttrFromReference = s),
      (l.attrStringFromReference = u),
      (l.optionalAttrStringFromReference = c),
      (l.contentStringFromReference = d));
  },
  98,
);
