__d(
  "WAWebUsernameStringUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return s._(
        /*BTDS*/ "Use between {min}-{max} characters for your username.",
        [s._param("min", e), s._param("max", t)],
      );
    }
    function u() {
      return s._(
        /*BTDS*/ "Usernames can't start or end with a period or have 2 periods in a row.",
      );
    }
    function c() {
      return s._(/*BTDS*/ "Usernames can't end with a domain.");
    }
    function d() {
      return s._(/*BTDS*/ "Usernames can't start with www.");
    }
    function m() {
      return s._(/*BTDS*/ "Choose a username with at least one letter.");
    }
    function p() {
      return s._(/*BTDS*/ "This username is not available.");
    }
    function _() {
      return s._(
        /*BTDS*/ "You can't make changes to your username right now. Try again later.",
      );
    }
    function f() {
      return s._(/*BTDS*/ "Wrong key entered. Try again.");
    }
    function g() {
      return s._(/*BTDS*/ "Too many attempts. Try again later.");
    }
    function h() {
      return s._(
        /*BTDS*/ "This account can't be reached with their key right now. Please try again later or contact them by phone number.",
      );
    }
    function y(e, t) {
      return s._(/*BTDS*/ "Keys must be {min}-{max} characters.", [
        s._param("min", e),
        s._param("max", t),
      ]);
    }
    function C() {
      return s._(/*BTDS*/ "Something went wrong. Please try again later.");
    }
    function b() {
      return s._(/*BTDS*/ "We couldn't complete your request.");
    }
    ((l.getUsernameInvalidLengthMessage = e),
      (l.getUsernameInvalidPeriodsMessage = u),
      (l.getUsernameInvalidDomainSuffixMessage = c),
      (l.getUsernameInvalidWWWPrefixMessage = d),
      (l.getUsernameInvalidNoLettersMessage = m),
      (l.getUsernameUnavailableMessage = p),
      (l.getUsernameChangeNotAllowedMessage = _),
      (l.getUsernameKeyWrongKeyMessage = f),
      (l.getUsernameKeyRequestorRateLimitedMessage = g),
      (l.getUsernameKeyRequesteeRateLimitedMessage = h),
      (l.getUsernameKeyInvalidLengthMessage = y),
      (l.getUsernameKeyUnexpectedErrorMessage = C),
      (l.getUsernameGenericErrorMessage = b));
  },
  226,
);
