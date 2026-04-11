__d(
  "WAWebBusinessProfileVersioningBridge",
  ["WAWebBizGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 4,
      u = 16,
      c = 32,
      d = 64,
      m = 128,
      p = 256;
    function _() {
      return f(o("WAWebBizGatingUtils").webBizProfileOptions());
    }
    function f(t) {
      var n = e | s | u | d | m | c;
      return (
        o("WAWebBizGatingUtils").bizLinkedAccountsEnabled() && (n |= p),
        t & n
      );
    }
    ((l.DIRECT_CONNECTION_FLAG = m),
      (l.getBusinessProfileQueryVersion = _),
      (l.getBusinessProfileQueryVersionWithCustomBizProfileOptions = f));
  },
  98,
);
