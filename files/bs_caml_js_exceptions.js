__d(
  "bs_caml_js_exceptions",
  ["bs_caml_exceptions", "bs_caml_option"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("bs_caml_exceptions").create("Caml_js_exceptions.Error");
    function l(t) {
      return n("bs_caml_exceptions").caml_is_extension(t)
        ? t
        : { RE_EXN_ID: e, _1: t };
    }
    function s(t) {
      if (t.RE_EXN_ID === e) return n("bs_caml_option").some(t._1);
    }
    ((i.$$Error = e), (i.internalToOCamlException = l), (i.caml_as_js_exn = s));
  },
  null,
);
