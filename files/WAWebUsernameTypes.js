__d(
  "WAWebUsernameTypes",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebUsernameConstants",
    "WAWebUsernameValidationUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum")({ PNH_CTWA: "ctwa", GENERAL: "general" }),
      c = /^[0-9]{4}$/;
    function d(e) {
      return (
        e.length === o("WAWebUsernameConstants").USERNAME_KEY_LENGTH &&
        c.test(e)
      );
    }
    function m(e) {
      if (!d(e))
        throw r("err")(
          "[username][key] Cannot convert key string to UsernameKey",
        );
      return e;
    }
    function p(e) {
      return o("WAWebUsernameValidationUtils").validateUsernameLocally(e)
        .isValid;
    }
    function _(e) {
      return e != null && e !== "";
    }
    function f(e) {
      return g(e);
    }
    function g(t) {
      return t.startsWith("@")
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[username] received username with @ prefix",
                ])),
            )
            .sendLogs("username-with-at-prefix", { sampling: 0.01 }),
          t.slice(1))
        : t;
    }
    function h(e) {
      return e == null ? e : e === "" ? null : f(e);
    }
    function y(e) {
      return "@" + e;
    }
    function C(e) {
      return e;
    }
    function b(e) {
      return e == null ? e : e;
    }
    ((l.LidOriginType = u),
      (l.USERNAME_KEY_LENGTH = (s = o(
        "WAWebUsernameConstants",
      )).USERNAME_KEY_LENGTH),
      (l.USERNAME_MAX_LENGTH = s.USERNAME_MAX_LENGTH),
      (l.USERNAME_MIN_LENGTH = s.USERNAME_MIN_LENGTH),
      (l.UsernameValidationErrorType = s.UsernameValidationErrorType),
      (l.isUsernameKey = d),
      (l.asUsernameKey = m),
      (l.isUsername = p),
      (l.isPresentUsername = _),
      (l.asUsername = f),
      (l.asMaybeUsername = h),
      (l.displayUsername = y),
      (l.serializeUsername = C),
      (l.serializeMaybeUsername = b));
  },
  98,
);
