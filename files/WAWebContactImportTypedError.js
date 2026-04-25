__d(
  "WAWebContactImportTypedError",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum").Mirrored([
        "NOT_WHATSAPP_USER",
        "INVALID",
        "DUPLICATE",
      ]),
      l = n("$InternalEnum").Mirrored(["INVALID", "EMPTY"]),
      s = n("$InternalEnum").Mirrored([
        "TYPE",
        "FORMAT",
        "TOO_MANY_ITEMS",
        "TOO_MANY_ERRORS",
      ]),
      u = (function (e) {
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
    ((i.PhoneError = e),
      (i.NameError = l),
      (i.FileError = s),
      (i.WAWebContactImportTypedError = u));
  },
  66,
);
