__d(
  "WAWebValidationUtils",
  ["WAEmailValidation", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    var e = new RegExp(
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i,
    );
    function s(e) {
      return e == null || e === "" || r("WAWebURLUtils").URL_REGEX.test(e);
    }
    function u(t) {
      return t == null || (t.trim() !== "" && e.test(t.trim()));
    }
    ((l.validateEmail = o("WAEmailValidation").validateEmail),
      (l.validateURL = s),
      (l.validateUUID = u));
  },
  98,
);
