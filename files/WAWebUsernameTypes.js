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
      u,
      c = n("$InternalEnum")({ PNH_CTWA: "ctwa", GENERAL: "general" }),
      d = /^[0-9]{4}$/;
    function m(e) {
      return (
        e.length === o("WAWebUsernameConstants").USERNAME_KEY_LENGTH &&
        d.test(e)
      );
    }
    function p(e) {
      if (!m(e))
        throw r("err")(
          "[username][key] Cannot convert key string to UsernameKey",
        );
      return e;
    }
    function _(e) {
      return o("WAWebUsernameValidationUtils").validateUsernameLocally(e)
        .isValid;
    }
    function f(e) {
      return e != null && e !== "";
    }
    function g(t) {
      var n = h(t);
      if (!_(n))
        throw (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[username] failed to convert string of length ",
                  " to Username",
                ])),
              n.length,
            )
            .sendLogs("username-invalid-conversion", { sampling: 0.1 }),
          r("err")("[username] Cannot convert string to Username")
        );
      return n;
    }
    function h(e) {
      return e.startsWith("@")
        ? (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[username] received username with @ prefix",
                ])),
            )
            .sendLogs("username-with-at-prefix", { sampling: 0.01 }),
          e.slice(1))
        : e;
    }
    function y(e) {
      return e == null ? e : e === "" ? null : g(e);
    }
    function C(e) {
      return "@" + e;
    }
    function b(e) {
      return e;
    }
    function v(e) {
      return e == null ? e : e;
    }
    ((l.LidOriginType = c),
      (l.USERNAME_KEY_LENGTH = (u = o(
        "WAWebUsernameConstants",
      )).USERNAME_KEY_LENGTH),
      (l.USERNAME_MAX_LENGTH = u.USERNAME_MAX_LENGTH),
      (l.USERNAME_MIN_LENGTH = u.USERNAME_MIN_LENGTH),
      (l.UsernameValidationErrorType = u.UsernameValidationErrorType),
      (l.isUsernameKey = m),
      (l.asUsernameKey = p),
      (l.isUsername = _),
      (l.isPresentUsername = f),
      (l.asUsername = g),
      (l.asMaybeUsername = y),
      (l.displayUsername = C),
      (l.serializeUsername = b),
      (l.serializeMaybeUsername = v));
  },
  98,
);
