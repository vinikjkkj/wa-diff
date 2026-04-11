__d(
  "WAWebValidationUtils",
  ["WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    var e = new RegExp(
        /^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      ),
      s = new RegExp(
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i,
      ),
      u = function (n) {
        return n == null || n === "" || e.test(n);
      },
      c = function (t) {
        return t == null || t === "" || r("WAWebURLUtils").URL_REGEX.test(t);
      },
      d = function (t) {
        return t == null || (t.trim() !== "" && s.test(t.trim()));
      };
    ((l.validateEmail = u), (l.validateURL = c), (l.validateUUID = d));
  },
  98,
);
