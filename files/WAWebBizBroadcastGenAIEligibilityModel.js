__d(
  "WAWebBizBroadcastGenAIEligibilityModel",
  [
    "WALogger",
    "WAWebBizBroadcastEligibilityCache",
    "WAWebBizBroadcastGenAIGating",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = null,
      d = !1,
      m = !1;
    function p(t) {
      ((c = t),
        (d = !0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:genai-eligibility] GenAI eligibility updated: ",
              "",
            ])),
          String(t),
        ));
    }
    function _() {
      if (!d && !m) {
        var e = o("WAWebBizBroadcastEligibilityCache").readCache();
        if (e != null) {
          var t;
          ((c =
            ((t = e.result.genai) == null ? void 0 : t.status) === "SUCCESS"),
            (m = !0),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:genai-eligibility] lazy-hydrated from cache: ",
                  "",
                ])),
              String(c),
            ));
        }
      }
      return o("WAWebBizBroadcastGenAIGating").isGenAITextEnabled() && c === !0;
    }
    function f() {
      return d;
    }
    function g(e) {
      ((c = e),
        (d = !0),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:genai-eligibility] debug override: ",
              "",
            ])),
          String(e),
        ));
    }
    function h() {
      ((c = null), (d = !1), (m = !1));
    }
    ((l.updateGenAIEligibility = p),
      (l.isGenAIEligible = _),
      (l.hasLoadedEligibility = f),
      (l.debugSetGenAIEligible = g),
      (l.resetGenAIEligibility = h));
  },
  98,
);
