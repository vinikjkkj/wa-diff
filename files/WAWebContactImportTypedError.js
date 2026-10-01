__d(
  "WAWebContactImportTypedError",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e,
      l = (e = n("$InternalEnum")).Mirrored([
        "NOT_WHATSAPP_USER",
        "INVALID",
        "DUPLICATE",
      ]),
      s = e.Mirrored(["INVALID", "EMPTY"]),
      u = e.Mirrored(["DUPLICATE", "MISMATCH", "REQUIRES_PHONE"]),
      c = e.Mirrored(["ALREADY_EXISTS"]),
      d = e.Mirrored(["INVALID_DATE"]),
      m = e.Mirrored(["TYPE", "FORMAT", "TOO_MANY_ITEMS", "TOO_MANY_ERRORS"]),
      p = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, "TypedError") || this),
            (n.name = "WAWebContactImportTypedError"),
            (n.type = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    ((i.PhoneError = l),
      (i.NameError = s),
      (i.UsernameError = u),
      (i.ExistingContactError = c),
      (i.DateError = d),
      (i.FileError = m),
      (i.WAWebContactImportTypedError = p));
  },
  66,
);
