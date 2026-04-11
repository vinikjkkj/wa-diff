__d(
  "WAWebUsernameTypes",
  ["$InternalEnum", "err"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({ PNH_CTWA: "ctwa", GENERAL: "general" }),
      s = n("$InternalEnum").Mirrored([
        "INVALID_CHARACTER",
        "INVALID_LENGTH",
        "INVALID_NO_LETTERS",
        "INVALID_PERIODS",
        "INVALID_DOMAIN_SUFFIX",
        "INVALID_WWW_PREFIX",
      ]),
      u = 3,
      c = 35,
      d = 4,
      m = /^[0-9]{4}$/;
    function p(e) {
      return e.length === d && m.test(e);
    }
    function _(e) {
      if (!p(e))
        throw r("err")(
          "[username][key] Cannot convert key string to UsernameKey",
        );
      return e;
    }
    ((l.LidOriginType = e),
      (l.UsernameValidationErrorType = s),
      (l.USERNAME_MIN_LENGTH = u),
      (l.USERNAME_MAX_LENGTH = c),
      (l.isUsernameKey = p),
      (l.asUsernameKey = _));
  },
  98,
);
