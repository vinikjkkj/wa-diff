__d(
  "WAWebValidationUtils",
  ["WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    var e = new RegExp(
        /^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        "i",
      ),
      s = new RegExp(
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i,
      );
    function u(t) {
      return t == null || t === "" || e.test(t);
    }
    function c(e) {
      return e == null || e === "" || r("WAWebURLUtils").URL_REGEX.test(e);
    }
    function d(e) {
      return e == null || (e.trim() !== "" && s.test(e.trim()));
    }
    ((l.validateEmail = u), (l.validateURL = c), (l.validateUUID = d));
  },
  98,
);
