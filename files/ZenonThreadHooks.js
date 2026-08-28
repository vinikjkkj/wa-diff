__d(
  "ZenonThreadHooks",
  ["MercuryIDs", "ZenonThreadContext", "ZenonThreadType", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useDebugValue,
      d = s.useMemo;
    function m() {
      var e = u(r("ZenonThreadContext")),
        t = e ? e.id : null;
      return (c(t), t);
    }
    function p() {
      var e = u(r("ZenonThreadContext")),
        t = e ? e.participants : [];
      return (c(t), t);
    }
    function _() {
      var e,
        t,
        n = u(r("ZenonThreadContext")),
        a =
          (e =
            n == null || (t = n.mercuryThread) == null
              ? void 0
              : t.participants) != null
            ? e
            : null,
        i = d(
          function () {
            return a
              ? a
                  .map(function (e) {
                    return o("MercuryIDs").getUserIDFromParticipantID(e);
                  })
                  .filter(Boolean)
              : [];
          },
          [a],
        );
      return (c(i), i);
    }
    function f() {
      var e = u(r("ZenonThreadContext")),
        t = e ? e.imageUrl : null;
      return (c(t), t);
    }
    function g() {
      var e,
        t = u(r("ZenonThreadContext")),
        n =
          (e = t == null ? void 0 : t.type) != null
            ? e
            : r("ZenonThreadType").Other;
      return (c(n), n);
    }
    function h() {
      var e = u(r("ZenonThreadContext")),
        t = e ? e.name : null;
      return (c(t), t);
    }
    function y() {
      var e = u(r("ZenonThreadContext")),
        t = e ? e.hasOngoingCall : null;
      return (c(t), t);
    }
    function C() {
      var e = u(r("ZenonThreadContext")),
        t = e ? e.mercuryThread : null;
      return (c(t), t);
    }
    ((l.useThreadFBID = m),
      (l.useThreadAndCallParticipants = p),
      (l.useThreadParticipants = _),
      (l.useThreadImage = f),
      (l.useThreadType = g),
      (l.useThreadName = h),
      (l.useOngoingCall = y),
      (l.useMercuryThread = C));
  },
  98,
);
