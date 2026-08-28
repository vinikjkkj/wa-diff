__d(
  "WebBloksCAAFetchSMSCode",
  ["MWebOTP"],
  function (t, n, r, o, a, i, l) {
    var e = "failure",
      s = "success";
    function u(t, n, r) {
      o("MWebOTP").isSupported() &&
        o("MWebOTP").fetchCode(function (o, a) {
          o && a != null && a.length
            ? c(t, n, a, r)
            : t.executeCatch(r, ["", e, n]);
        });
    }
    function c(e, t, n, r) {
      window.setTimeout(function () {
        e.executeCatch(r, [n, s, t]);
      });
    }
    l.default = u;
  },
  98,
);
