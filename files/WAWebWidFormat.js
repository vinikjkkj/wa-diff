__d(
  "WAWebWidFormat",
  [
    "fbt",
    "WAJids",
    "WALogger",
    "WAMemoizeCache",
    "WATypeUtils",
    "WAWebL10N",
    "WAWebPhoneUtils",
    "WAWebUsernameGatingUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = o("WAMemoizeCache").memoizeWithArgs(
        function (e) {
          return e === "Server" ? e : o("WAWebPhoneUtils").formatPhone(e);
        },
        function (e) {
          return e;
        },
      );
    function c(e) {
      return r("WAWebL10N").isRTL() ? r("WAWebL10N").isolateLTR(u(e)) : u(e);
    }
    function d(t) {
      return (
        o("WAWebUsernameGatingUtils").shouldLogUnknownNumberError() &&
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[GetUnknownNumber] unexpected unknown num for: ",
                "",
              ])),
            t == null ? void 0 : t.toLogString(),
          ),
        s._(/*BTDS*/ "Unknown number").toString()
      );
    }
    function m() {
      return s._(/*BTDS*/ "Unknown user").toString();
    }
    function p(e) {
      return o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
        ? m()
        : d(e);
    }
    function _(e) {
      return e instanceof r("WAWebWid")
        ? e.isLid()
          ? r("gkx")("26258")
            ? p(e)
            : e.toString()
          : c(e.user)
        : o("WATypeUtils").isString(e)
          ? e.endsWith(o("WAJids").LID_DOMAIN)
            ? r("gkx")("26258")
              ? p(o("WAWebWidFactory").createUserWidOrThrow(e))
              : e
            : c(e.split("@")[0])
          : "";
    }
    ((l.getUnknownUserOrNumber = p), (l.widToFormattedUser = _));
  },
  226,
);
