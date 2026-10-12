__d(
  "WAWebValidationUtils",
  ["WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    var e = new RegExp(
        /^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        "i",
      ),
      s = 64,
      u = 255,
      c = 63,
      d = new RegExp(
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i,
      );
    function m(t) {
      if (t == null || t === "") return !0;
      if (!e.test(t)) return !1;
      var n = t.indexOf("@"),
        r = t.slice(n + 1);
      return (
        n <= s &&
        r.length <= u &&
        r.split(".").every(function (e) {
          return e.length <= c;
        })
      );
    }
    function p(e) {
      return e == null || e === "" || r("WAWebURLUtils").URL_REGEX.test(e);
    }
    function _(e) {
      return e == null || (e.trim() !== "" && d.test(e.trim()));
    }
    ((l.validateEmail = m), (l.validateURL = p), (l.validateUUID = _));
  },
  98,
);
