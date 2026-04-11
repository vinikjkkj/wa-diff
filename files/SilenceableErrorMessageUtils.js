__d(
  "SilenceableErrorMessageUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.is_silent === !0;
    }
    function l(e) {
      var t;
      if (typeof e == "object" && e instanceof Error) {
        var n = e.description,
          r = e.message,
          o = e.source;
        return {
          code: o == null ? void 0 : o.code,
          is_silent: o == null ? void 0 : o.is_silent,
          message: n != null ? n : r,
          timestamp: Date.now(),
        };
      }
      return {
        is_silent: (t = e.source) == null ? void 0 : t.is_silent,
        message: e.description,
      };
    }
    function s(t, n) {
      var r,
        o,
        a,
        i,
        s = t.description,
        u = t.message,
        c = t.source,
        d =
          (r =
            (o =
              (a =
                c == null || (i = c.exception) == null ? void 0 : i.message) !=
              null
                ? a
                : c == null
                  ? void 0
                  : c.description) != null
              ? o
              : s) != null
            ? r
            : u;
      e(l(t)) && n(d);
    }
    ((i.shouldHideErrorMessage = e),
      (i.getMetadataFromError = l),
      (i.handleSilentError = s));
  },
  66,
);
