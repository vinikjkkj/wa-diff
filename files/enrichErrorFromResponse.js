__d(
  "enrichErrorFromResponse",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n,
        r,
        o,
        a,
        i = e.toError();
      if (i == null) return i;
      var l = e.payload,
        s = l == null ? void 0 : l.error,
        u =
          (t =
            (n = s == null ? void 0 : s.message) != null
              ? n
              : l == null
                ? void 0
                : l.message) != null
            ? t
            : e.errorSummary;
      if (
        (u != null && (i.message = String(u)),
        l != null && typeof l == "object")
      ) {
        var c = i;
        c.responseObject = l;
      }
      (Array.isArray(s == null ? void 0 : s.opes_mids) &&
        (i.opes_mids = s.opes_mids),
        (s == null ? void 0 : s.code) != null && (i.code = s.code));
      var d =
        (r = (o = e.payload) == null ? void 0 : o.fbtrace_id) != null
          ? r
          : (a = e.payload) == null
            ? void 0
            : a.__www_request_id__;
      return (d != null && (i.fbtrace_id = String(d)), i);
    }
    i.default = e;
  },
  66,
);
