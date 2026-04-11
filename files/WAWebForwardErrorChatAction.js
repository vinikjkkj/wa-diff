__d(
  "WAWebForwardErrorChatAction",
  ["WACustomError"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, "ForwardError") || this),
          (n.name = "ForwardError"),
          (n.reasons = t),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WACustomError").CustomError);
    l.default = e;
  },
  98,
);
