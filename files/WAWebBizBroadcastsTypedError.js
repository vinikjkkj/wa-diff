__d(
  "WAWebBizBroadcastsTypedError",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e,
      l = (e = n("$InternalEnum")).Mirrored([
        "NOT_WHATSAPP_USER",
        "INVALID",
        "DUPLICATE",
      ]),
      s = e.Mirrored(["INVALID", "EMPTY"]),
      u = e.Mirrored(["TYPE", "FORMAT", "TOO_MANY_ITEMS", "TOO_MANY_ERRORS"]),
      c = e.Mirrored(["TOO_SMALL"]),
      d = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, "TypedError") || this),
            (n.name = "WAWebBizBroadcastsTypedError"),
            (n.type = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    ((i.PhoneError = l),
      (i.NameError = s),
      (i.FileError = u),
      (i.AudienceError = c),
      (i.WAWebBizBroadcastsTypedError = d));
  },
  66,
);
