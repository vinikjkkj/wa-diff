__d(
  "useWAWebThreadQuotedMsgIsolation",
  ["react", "useWAWebListener", "useWAWebSetModelValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo,
      d = s.useRef,
      m = s.useState;
    function p(e) {
      var t = o("useWAWebSetModelValue").useSetModelValue(
          e,
          "composeQuotedMsg",
        ),
        n = d(null),
        r = m(null),
        a = r[0],
        i = r[1];
      return (
        u(
          function () {
            var r = e.composeQuotedMsg;
            return (
              (n.current = r),
              r != null && t(null),
              function () {
                t(n.current);
              }
            );
          },
          [e, t],
        ),
        o("useWAWebListener").useListener(
          e,
          "change:composeQuotedMsg",
          function () {
            var n = e.composeQuotedMsg;
            n != null && (i(n), t(null));
          },
        ),
        c(
          function () {
            return { quotedMsg: a, setQuotedMsg: i };
          },
          [a],
        )
      );
    }
    l.default = p;
  },
  98,
);
