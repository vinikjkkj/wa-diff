__d(
  "WAWebVoipWindowMetrics",
  ["WALogger", "WAWebVoipVideoRendererInterface"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = !1,
      _ = !1,
      f = !1,
      g = null,
      h = null;
    function y() {
      ((_ = !1), (f = !1));
    }
    function C() {
      if (p) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] already active, skipping start",
            ])),
        );
        return;
      }
      ((p = !0),
        (h = null),
        y(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] started",
            ])),
        ));
    }
    function b() {
      p &&
        ((p = !1),
        (h = { windowDragged: _, windowResized: f, rendererType: g }),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] stopped",
            ])),
        ));
    }
    function v() {
      var e = h;
      return ((h = null), e);
    }
    function S() {
      p &&
        ((_ = !0),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] window dragged",
            ])),
        ));
    }
    function R() {
      p &&
        ((f = !0),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] window resized",
            ])),
        ));
    }
    function L(e) {
      ((g = o(
        "WAWebVoipVideoRendererInterface",
      ).WAWebVoipVideoRendererType.getName(e)),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] renderer type set: ",
              "",
            ])),
          e,
        ));
    }
    ((l.startWindowMetrics = C),
      (l.stopWindowMetrics = b),
      (l.consumeWindowMetrics = v),
      (l.recordWindowDragged = S),
      (l.recordWindowResized = R),
      (l.setRendererType = L));
  },
  98,
);
