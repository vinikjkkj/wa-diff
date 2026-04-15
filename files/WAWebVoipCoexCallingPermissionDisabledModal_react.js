__d(
  "WAWebVoipCoexCallingPermissionDisabledModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(/*BTDS*/ "You can't call this customer right now")),
          (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s._(/*BTDS*/ "OK")), (e[1] = n))
        : (n = e[1]);
      var r;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: t,
              onOK: o("WAWebModalManager").closeModalManager,
              okText: n,
              testid: void 0,
              children: s._(
                /*BTDS*/ "They declined your call request. You can still message or accept calls from them.",
              ),
            })),
            (e[2] = r))
          : (r = e[2]),
        r
      );
    }
    l.default = c;
  },
  226,
);
