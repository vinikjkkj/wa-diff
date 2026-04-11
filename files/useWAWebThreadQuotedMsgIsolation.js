__d(
  "useWAWebThreadQuotedMsgIsolation",
  [
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebSetModelValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo,
      d = s.useRef,
      m = s.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(11),
        n = o("useWAWebSetModelValue").useSetModelValue(e, "composeQuotedMsg"),
        r = d(null),
        a = m(null),
        i = a[0],
        l = a[1],
        s;
      t[0] !== e.composeQuotedMsg || t[1] !== n
        ? ((s = function () {
            var t = e.composeQuotedMsg;
            return (
              (r.current = t),
              t != null && n(null),
              function () {
                n(r.current);
              }
            );
          }),
          (t[0] = e.composeQuotedMsg),
          (t[1] = n),
          (t[2] = s))
        : (s = t[2]);
      var c;
      (t[3] !== e || t[4] !== n
        ? ((c = [e, n]), (t[3] = e), (t[4] = n), (t[5] = c))
        : (c = t[5]),
        u(s, c));
      var p;
      (t[6] !== e.composeQuotedMsg || t[7] !== n
        ? ((p = function () {
            var t = e.composeQuotedMsg;
            t != null && (l(t), n(null));
          }),
          (t[6] = e.composeQuotedMsg),
          (t[7] = n),
          (t[8] = p))
        : (p = t[8]),
        o("useWAWebListener").useListener(e, "change:composeQuotedMsg", p));
      var _;
      return (
        t[9] !== i
          ? ((_ = { quotedMsg: i, setQuotedMsg: l }), (t[9] = i), (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    l.default = p;
  },
  98,
);
