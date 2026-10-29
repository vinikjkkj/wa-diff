__d(
  "WAWebBizAIQEError",
  ["WAWebFetchWithAdAccountToken"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (
        e instanceof
          o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError ||
        e == null ||
        typeof e != "object"
      )
        return !1;
      var t = e.source;
      if (t == null || typeof t != "object") return e instanceof Error;
      if (t.httpStatus === 429) return !1;
      var n = t.errors;
      return Array.isArray(n) && n.length > 0 && n.every(s);
    }
    function s(e) {
      var t = u(e),
        n = t.code;
      return n === 1675030 || (n >= 500 && n <= 599);
    }
    function u(e) {
      var t;
      if (e == null || typeof e != "object") return { code: 0 };
      var n = e.extensions,
        r = n != null && typeof n == "object" ? n.code : null,
        o = (t = e.code) != null ? t : r;
      return {
        code: typeof o == "number" ? o : 0,
        message: typeof e.message == "string" ? e.message : void 0,
      };
    }
    ((l.canRecoverBizAIQEPrefetch = e), (l.getBizAIQECodedError = u));
  },
  98,
);
