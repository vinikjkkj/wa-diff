__d(
  "BrowserToolsMessageValidation",
  ["BrowserToolsNamespace"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return typeof e == "object" && e !== null && typeof e.action == "string";
    }
    function s(e) {
      var t = e.namespace;
      return typeof t != "string"
        ? null
        : o("BrowserToolsNamespace").ensureNamespace(t);
    }
    function u(e, t) {
      var n = e[t];
      return typeof n != "string" ? null : n;
    }
    function c(e) {
      return typeof e == "number" ? e : null;
    }
    function d(e) {
      if (!Array.isArray(e)) return null;
      for (var t = [], n = 0; n < e.length; n++) {
        if (typeof e[n] != "string") return null;
        t.push(e[n]);
      }
      return [].concat(t);
    }
    function m(e) {
      return typeof e != "object" ? null : e;
    }
    function p(e) {
      return typeof e != "boolean" ? null : e;
    }
    ((l.isValidMessage = e),
      (l.getMessageNamespace = s),
      (l.getMessageString = u),
      (l.asNumber = c),
      (l.asStringArray = d),
      (l.asObject = m),
      (l.asBoolean = p));
  },
  98,
);
