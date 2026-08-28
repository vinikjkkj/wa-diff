__d(
  "SignalsValidationUtils",
  ["SignalsStringStripModes", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^[a-f0-9]{64}$/i,
      s = /^\s+|\s+$/g,
      u = /\s+/g,
      c = /[!\"#\$%&\'\(\)\*\+,\-\.\/:;<=>\?@ \[\\\]\^_`\{\|\}~\s]+/g,
      d = /\W+/g;
    function m(e) {
      return typeof e == "string" ? e.replace(s, "") : "";
    }
    function p(e, t) {
      t === void 0 && (t = r("SignalsStringStripModes").WHITESPACE_ONLY);
      var n = "";
      if (typeof e == "string")
        switch (t) {
          case r("SignalsStringStripModes").WHITESPACE_ONLY:
            n = e.replace(u, "");
            break;
          case r("SignalsStringStripModes").WHITESPACE_AND_PUNCTUATION:
            n = e.replace(c, "");
            break;
          case r("SignalsStringStripModes").ALL_NON_LATIN_ALPHA_NUMERIC:
            n = e.replace(d, "");
            break;
        }
      return n;
    }
    function _(e, t) {
      return typeof e == "object" && e != null && {}.hasOwnProperty.call(e, t);
    }
    function f(e, t, n) {
      var r = t.split(".");
      n === void 0 && (n = null);
      for (var o = 0; o < r.length - 1; o++) {
        var a = r.shift();
        e = e[a] || (e[a] = {});
      }
      var i = r[0];
      if (!_(e, i)) e[i] = n;
      else {
        var l = e[i];
        Array.isArray(l) ? l.push(n) : (e[i] = [l, n]);
      }
      return e;
    }
    function g(t) {
      return typeof t == "string" && e.test(t);
    }
    function h(e) {
      return (t.File && e instanceof File) || e instanceof Object;
    }
    function y(e, t) {
      throw (
        t === void 0 && (t = null),
        r("err")("Fatal: " + e + ", detail=" + JSON.stringify(t))
      );
    }
    ((l.STRIP_MODES = r("SignalsStringStripModes")),
      (l.addValueAtPath = f),
      (l.hasProp = _),
      (l.isFile = h),
      (l.looksLikeHashed = g),
      (l.strip = p),
      (l.throwFatalError = y),
      (l.trim = m));
  },
  98,
);
