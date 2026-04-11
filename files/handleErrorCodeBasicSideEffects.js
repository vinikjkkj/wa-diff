__d(
  "handleErrorCodeBasicSideEffects",
  ["errorCode", "UserMismatchExpected"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === 1357032 &&
        o("UserMismatchExpected").getIsUserMismatchExpected() === !0
        ? !0
        : e === 1357001 || e === 1357032
          ? (window.location.reload(!0), !0)
          : !1;
    }
    l.default = e;
  },
  98,
);
