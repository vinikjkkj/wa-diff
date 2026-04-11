__d(
  "WAWebBizBroadcastGenAIEligibilityModel",
  ["WALogger", "WAWebBizBroadcastGenAIGating"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null,
      c = !1;
    function d(t) {
      ((u = t),
        (c = !0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:genai-eligibility] GenAI eligibility updated: ",
              "",
            ])),
          String(t),
        ));
    }
    function m() {
      return o("WAWebBizBroadcastGenAIGating").isGenAITextEnabled() && u === !0;
    }
    function p() {
      return c;
    }
    function _(e) {
      ((u = e),
        (c = !0),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:genai-eligibility] debug override: ",
              "",
            ])),
          String(e),
        ));
    }
    function f() {
      ((u = null), (c = !1));
    }
    ((l.updateGenAIEligibility = d),
      (l.isGenAIEligible = m),
      (l.hasLoadedEligibility = p),
      (l.debugSetGenAIEligible = _),
      (l.resetGenAIEligibility = f));
  },
  98,
);
