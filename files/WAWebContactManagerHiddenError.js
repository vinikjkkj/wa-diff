__d(
  "WAWebContactManagerHiddenError",
  [],
  function (t, n, r, o, a, i) {
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.name = "ContactManagerHiddenError"),
          (n.message =
            "Contact Manager cannot change a contact's hidden state: " + t),
          (n.reason = t),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    i.ContactManagerHiddenError = e;
  },
  66,
);
