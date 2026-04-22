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
      p,
      _ = !1,
      f = !1,
      g = !1,
      h = null,
      y = null;
    function C() {
      ((f = !1), (g = !1));
    }
    function b() {
      if (_) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] already active, skipping start",
            ])),
        );
        return;
      }
      ((_ = !0),
        (y = null),
        C(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] started",
            ])),
        ));
    }
    function v() {
      _ &&
        ((y = S()),
        (_ = !1),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] stopped",
            ])),
        ));
    }
    function S() {
      return _
        ? (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:windowMetrics] snapshot: dragged=",
                " resized=",
                " renderer=",
                "",
              ])),
            String(f),
            String(g),
            h != null ? h : "none",
          ),
          { windowDragged: f, windowResized: g, rendererType: h })
        : y;
    }
    function R() {
      ((f = !1), (g = !1));
    }
    function L() {
      _ &&
        ((f = !0),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] window dragged",
            ])),
        ));
    }
    function E() {
      _ &&
        ((g = !0),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] window resized",
            ])),
        ));
    }
    function k(e, t) {
      var n = o(
          "WAWebVoipVideoRendererInterface",
        ).WAWebVoipVideoRendererType.getName(e),
        r = o(
          "WAWebVoipVideoRendererInterface",
        ).WAWebVoipVideoRendererThreadingMode.getName(t);
      ((h = n + ":" + r),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] renderer type set: ",
              "",
            ])),
          h,
        ));
    }
    ((l.startWindowMetrics = b),
      (l.stopWindowMetrics = v),
      (l.snapshotWindowMetrics = S),
      (l.resetWindowMetrics = R),
      (l.recordWindowDragged = L),
      (l.recordWindowResized = E),
      (l.setRendererType = k));
  },
  98,
);
