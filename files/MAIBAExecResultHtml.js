__d(
  "MAIBAExecResultHtml",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "<!--maiba-html-display-->";
    function l(t) {
      return e + "<html>" + t + "</html>";
    }
    function s(t) {
      return t != null && t.startsWith(e) ? t.slice(e.length) : null;
    }
    ((i.toHtmlDisplayMessage = l), (i.getHtmlDisplayMessage = s));
  },
  66,
);
