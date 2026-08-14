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
      _,
      f = !1,
      g = !1,
      h = !1,
      y = !1,
      C = "normal",
      b = null,
      v = null;
    function S() {
      (R(), (C = "normal"));
    }
    function R() {
      ((g = !1), (h = !1), (y = !1));
    }
    function L() {
      if (f) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] already active, skipping start",
            ])),
        );
        return;
      }
      ((f = !0),
        (v = null),
        S(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] started",
            ])),
        ));
    }
    function E() {
      f &&
        ((v = k()),
        (f = !1),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] stopped",
            ])),
        ));
    }
    function k() {
      return f
        ? (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:windowMetrics] snapshot: dragged=",
                " resized=",
                " selfPreviewResized=",
                " selfPreviewSize=",
                " renderer=",
                "",
              ])),
            String(g),
            String(h),
            String(y),
            C,
            b != null ? b : "none",
          ),
          {
            rendererType: b,
            selfPreviewResized: y,
            selfPreviewSize: C,
            windowDragged: g,
            windowResized: h,
          })
        : v;
    }
    function I() {
      R();
    }
    function T(e) {
      f &&
        ((y = !0),
        (C = e),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] self-preview size changed: ",
              "",
            ])),
          e,
        ));
    }
    function D() {
      f &&
        ((g = !0),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] window dragged",
            ])),
        ));
    }
    function x() {
      f &&
        ((h = !0),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] window resized",
            ])),
        ));
    }
    function $(e, t) {
      var n = o(
          "WAWebVoipVideoRendererInterface",
        ).WAWebVoipVideoRendererType.getName(e),
        r = o(
          "WAWebVoipVideoRendererInterface",
        ).WAWebVoipVideoRendererThreadingMode.getName(t);
      ((b = n + ":" + r),
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:windowMetrics] renderer type set: ",
              "",
            ])),
          b,
        ));
    }
    ((l.startWindowMetrics = L),
      (l.stopWindowMetrics = E),
      (l.snapshotWindowMetrics = k),
      (l.resetWindowMetrics = I),
      (l.recordSelfPreviewSizeChanged = T),
      (l.recordWindowDragged = D),
      (l.recordWindowResized = x),
      (l.setRendererType = $));
  },
  98,
);
