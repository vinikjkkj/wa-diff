__d(
  "SecuredActionUtils",
  ["errorCode", "fbt"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = u._(/*BTDS*/ "Re-authentication canceled.");
    function c(t) {
      return t.message === e.toString();
    }
    function d(e) {
      return e === 2136001 || e === 3490037;
    }
    ((l.SECURED_ACTION_REAUTH_CANCELED_ERROR = e),
      (l.isSecuredActionError = c),
      (l.isReauthenticationErrorCode = d));
  },
  226,
);
