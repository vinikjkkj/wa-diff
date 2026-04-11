__d(
  "WAResultOrError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return t != null
        ? { success: !1, error: e, payload: t }
        : { success: !1, error: e };
    }
    function l(e) {
      return { success: !0, value: e };
    }
    function s(e) {
      return { success: !1, error: e };
    }
    ((i.DEPRECATED_makeError = e), (i.makeResult = l), (i.makeError = s));
  },
  66,
);
