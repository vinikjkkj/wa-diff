__d(
  "Input",
  ["CSS", "DOMControl", "DOMQuery"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return !/\S/.test(e || "");
    }
    function s(t) {
      return e(t.value);
    }
    function u(e) {
      return s(e) ? "" : e.value;
    }
    function c(e) {
      return e.value;
    }
    function d(e, t) {
      e.value = t || "";
      var n = r("DOMControl").getInstance(e);
      n && n.resetHeight && n.resetHeight();
    }
    function m(e, t) {
      var n = t || "";
      (e.setAttribute("aria-label", n), e.setAttribute("placeholder", n));
    }
    function p(e) {
      ((e.value = ""), (e.style.height = ""));
    }
    function _(e, t) {
      o("CSS").conditionClass(e, "enter_submit", t);
    }
    function f(e) {
      return o("CSS").hasClass(e, "enter_submit");
    }
    function g(e, t) {
      t > 0
        ? e.setAttribute("maxlength", t.toString())
        : e.removeAttribute("maxlength");
    }
    ((l.isWhiteSpaceOnly = e),
      (l.isEmpty = s),
      (l.getValue = u),
      (l.getValueRaw = c),
      (l.setValue = d),
      (l.setPlaceholder = m),
      (l.reset = p),
      (l.setSubmitOnEnter = _),
      (l.getSubmitOnEnter = f),
      (l.setMaxLength = g));
  },
  98,
);
