__d(
  "bs_int64",
  ["bs_caml", "bs_caml_format", "bs_caml_int64", "bs_caml_js_exceptions"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e, l;
    function s(t) {
      return (e || (e = n("bs_caml_int64"))).sub(t, e.one);
    }
    function u(t) {
      return (l || (l = n("bs_caml"))).i64_ge(
        t,
        (e || (e = n("bs_caml_int64"))).zero,
      )
        ? t
        : (e || (e = n("bs_caml_int64"))).neg(t);
    }
    function c(t) {
      return (e || (e = n("bs_caml_int64"))).xor(t, e.neg_one);
    }
    function d(e) {
      try {
        return n("bs_caml_format").caml_int64_of_string(e);
      } catch (e) {
        var t = n("bs_caml_js_exceptions").internalToOCamlException(e);
        if (t.RE_EXN_ID === "Failure") return;
        throw t;
      }
    }
    var m = (e || (e = n("bs_caml_int64"))).compare;
    function p(t, r) {
      return (e || (e = n("bs_caml_int64"))).compare(t, r) === 0;
    }
    var _ = e.zero,
      f = e.one,
      g = e.neg_one,
      h = e.succ,
      y = e.max_int,
      C = e.min_int,
      b = e.to_string;
    ((i.zero = _),
      (i.one = f),
      (i.minus_one = g),
      (i.succ = h),
      (i.pred = s),
      (i.abs = u),
      (i.max_int = y),
      (i.min_int = C),
      (i.lognot = c),
      (i.of_string_opt = d),
      (i.to_string = b),
      (i.compare = m),
      (i.equal = p));
  },
  null,
);
