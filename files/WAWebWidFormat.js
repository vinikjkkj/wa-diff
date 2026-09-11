__d(
  "WAWebWidFormat",
  [
    "fbt",
    "WAJids",
    "WAMemoizeCache",
    "WATypeUtils",
    "WAWebL10N",
    "WAWebPhoneUtils",
    "WAWebUsernameGatingUtils",
    "WAWebWid",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = o("WAMemoizeCache").memoizeWithArgs(
      function (e) {
        return e === "Server" ? e : o("WAWebPhoneUtils").formatPhone(e);
      },
      function (e) {
        return e;
      },
    );
    function u(t) {
      return r("WAWebL10N").isRTL() ? r("WAWebL10N").isolateLTR(e(t)) : e(t);
    }
    function c() {
      return s._(/*BTDS*/ "Unknown number").toString();
    }
    function d() {
      return s._(/*BTDS*/ "Unknown user").toString();
    }
    function m() {
      return o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
        ? d()
        : c();
    }
    function p(e) {
      return e instanceof r("WAWebWid")
        ? e.isLid()
          ? r("gkx")("26258")
            ? m()
            : e.toString()
          : u(e.user)
        : o("WATypeUtils").isString(e)
          ? e.endsWith(o("WAJids").LID_DOMAIN)
            ? r("gkx")("26258")
              ? m()
              : e
            : u(e.split("@")[0])
          : "";
    }
    ((l.getUnknownUserOrNumber = m), (l.widToFormattedUser = p));
  },
  226,
);
