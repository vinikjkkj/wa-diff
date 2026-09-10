__d(
  "WAWebUsernameStringUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(
        /*BTDS*/ "Usernames can only have a-z, 0-9, periods and underscores.",
      );
    }
    function u(e, t) {
      return s._(
        /*BTDS*/ "Use between {min}-{max} characters for your username.",
        [s._param("min", e), s._param("max", t)],
      );
    }
    function c() {
      return s._(
        /*BTDS*/ "Usernames can't start or end with a period or have 2 periods in a row.",
      );
    }
    function d() {
      return s._(/*BTDS*/ "Usernames can't end with a domain.");
    }
    function m() {
      return s._(/*BTDS*/ "Usernames can't start with www.");
    }
    function p() {
      return s._(/*BTDS*/ "Choose a username with at least one letter.");
    }
    function _() {
      return s._(/*BTDS*/ "This username is available.");
    }
    function f() {
      return s._(/*BTDS*/ "This username is not available.");
    }
    function g() {
      return s._(
        /*BTDS*/ "You can't make changes to your username right now. Try again later.",
      );
    }
    function h() {
      return s._(/*BTDS*/ "Wrong key entered. Try again.");
    }
    function y() {
      return s._(/*BTDS*/ "Too many attempts. Try again later.");
    }
    function C() {
      return s._(
        /*BTDS*/ "This account can't be reached with their key right now. Please try again later or contact them by phone number.",
      );
    }
    function b(e, t) {
      return s._(/*BTDS*/ "Keys must be {min}-{max} characters.", [
        s._param("min", e),
        s._param("max", t),
      ]);
    }
    function v() {
      return s._(/*BTDS*/ "Something went wrong. Please try again later.");
    }
    function S() {
      return s._(/*BTDS*/ "We couldn't complete your request.");
    }
    ((l.getUsernameInvalidCharacterMessage = e),
      (l.getUsernameInvalidLengthMessage = u),
      (l.getUsernameInvalidPeriodsMessage = c),
      (l.getUsernameInvalidDomainSuffixMessage = d),
      (l.getUsernameInvalidWWWPrefixMessage = m),
      (l.getUsernameInvalidNoLettersMessage = p),
      (l.getUsernameAvailableMessage = _),
      (l.getUsernameUnavailableMessage = f),
      (l.getUsernameChangeNotAllowedMessage = g),
      (l.getUsernameKeyWrongKeyMessage = h),
      (l.getUsernameKeyRequestorRateLimitedMessage = y),
      (l.getUsernameKeyRequesteeRateLimitedMessage = C),
      (l.getUsernameKeyInvalidLengthMessage = b),
      (l.getUsernameKeyUnexpectedErrorMessage = v),
      (l.getUsernameGenericErrorMessage = S));
  },
  226,
);
