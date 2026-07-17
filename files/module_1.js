__d(
  "$",
  ["fb-error-lite"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return u(e, typeof e == "string" ? document.getElementById(e) : e);
    }
    function s(e) {
      return u(e, typeof e == "string" ? document.getElementById(e) : e);
    }
    function u(e, t) {
      if (!t) {
        var n = r("fb-error-lite").err(
          'Tried to get element with id of "%s" but it is not present on the page',
          String(e),
        );
        throw (
          (n.taalOpcodes = n.taalOpcodes || []),
          (n.taalOpcodes = [r("fb-error-lite").TAALOpcode.PREVIOUS_FILE]),
          n
        );
      }
      return t;
    }
    ((e.fromIDOrElement = s), (l.default = e));
  },
  98,
);
