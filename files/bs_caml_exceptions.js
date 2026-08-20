__d(
  "bs_caml_exceptions",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { contents: 0 };
    function l(t) {
      return ((e.contents = (e.contents + 1) | 0), t + ("/" + e.contents));
    }
    function s(e) {
      return e == null ? !1 : typeof e.RE_EXN_ID == "string";
    }
    function u(e) {
      return e.RE_EXN_ID;
    }
    ((i.id = e),
      (i.create = l),
      (i.caml_is_extension = s),
      (i.caml_exn_slot_name = u));
  },
  null,
);
