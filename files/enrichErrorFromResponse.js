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
      var l = i,
        s = e.payload,
        u = s == null ? void 0 : s.error,
        c =
          (t =
            (n = u == null ? void 0 : u.message) != null
              ? n
              : s == null
                ? void 0
                : s.message) != null
            ? t
            : e.errorSummary;
      (c != null && (i.message = String(c)),
        s != null && typeof s == "object" && (l.responseObject = s),
        Array.isArray(u == null ? void 0 : u.opes_mids) &&
          (l.opes_mids = u.opes_mids),
        (u == null ? void 0 : u.code) != null && (i.code = u.code));
      var d =
        (r = (o = e.payload) == null ? void 0 : o.fbtrace_id) != null
          ? r
          : (a = e.payload) == null
            ? void 0
            : a.__www_request_id__;
      return (d != null && (l.fbtrace_id = String(d)), i);
    }
    i.default = e;
  },
  66,
);
