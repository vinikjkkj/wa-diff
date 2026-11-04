__d(
  "WAWebUsernameTypes",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebABProps",
    "WAWebUsernameConstants",
    "WAWebUsernameValidationUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum")({ PNH_CTWA: "ctwa", GENERAL: "general" });
    function c(e) {
      var t = m();
      return t == null ? p(e) : t.test(e);
    }
    function d(e) {
      if (!c(e))
        throw r("err")(
          "[username][key] Cannot convert key string to UsernameKey",
        );
      return e;
    }
    function m() {
      var t = o("WAWebABProps").getABPropConfigValue("username_key_regex");
      if (t === "") return null;
      try {
        return new RegExp("^(?:" + t + ")$");
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[username][key] could not compile username_key_regex: ",
                  "",
                ])),
              t,
            )
            .sendLogs("username-key-regex-invalid", { sampling: 0.01 }),
          null
        );
      }
    }
    function p(e) {
      return (
        e.length >=
          o("WAWebABProps").getABPropConfigValue("username_key_min_length") &&
        e.length <=
          o("WAWebABProps").getABPropConfigValue("username_key_max_length")
      );
    }
    function _(e) {
      return o("WAWebUsernameValidationUtils").validateUsernameLocally(e)
        .isValid;
    }
    function f(e) {
      return e != null && e !== "";
    }
    function g(e) {
      return h(e);
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
    ((l.LidOriginType = u),
      (l.USERNAME_KEY_LENGTH = o("WAWebUsernameConstants").USERNAME_KEY_LENGTH),
      (l.UsernameValidationErrorType = o(
        "WAWebUsernameConstants",
      ).UsernameValidationErrorType),
      (l.isUsernameKey = c),
      (l.asUsernameKey = d),
      (l.isUsernameKeyLengthAllowed = p),
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
