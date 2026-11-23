__d(
  "MAIBAAdDraftErrorResolutionContext",
  [
    "MAIBAAdDraftEditorContext",
    "MAIBAAdDraftValidationErrors",
    "MAIBAS45CanvasImprovements",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useMemo,
      p = u.useState,
      _ = Object.freeze([]),
      f = {
        clearResolutionTarget: function () {},
        isErrorHandlingEnabled: !1,
        openResolutionTarget: function () {},
        resolutionTarget: null,
        validationErrors: _,
      },
      g = s.createContext(f);
    function h(e) {
      var t = e.children,
        n = e.navigateToTarget,
        r = o("MAIBAAdDraftEditorContext").useMAIBAAdDraftEditorContext(),
        a =
          (r == null ? void 0 : r.product) === "ads_manager" &&
          o("MAIBAS45CanvasImprovements").hasErrorImprovements(),
        i = p(null),
        l = i[0],
        u = i[1],
        d = m(
          function () {
            return o(
              "MAIBAAdDraftValidationErrors",
            ).getMAIBAAdDraftValidationErrors(r, a);
          },
          [r, a],
        ),
        _ = c(
          function (e) {
            a && u(n(e) ? e : null);
          },
          [a, n],
        ),
        f = c(function () {
          u(null);
        }, []),
        h = m(
          function () {
            return {
              clearResolutionTarget: f,
              isErrorHandlingEnabled: a,
              openResolutionTarget: _,
              resolutionTarget: a ? l : null,
              validationErrors: d,
            };
          },
          [f, a, _, l, d],
        );
      return s.jsx(g.Provider, { value: h, children: t });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return d(g);
    }
    function C(e, t, n, r, a) {
      (r === void 0 && (r = !1), a === void 0 && (a = "always"));
      var i = y(),
        l = i.isErrorHandlingEnabled,
        s = i.validationErrors;
      return a === "error_handling" && !l
        ? null
        : o(
            "MAIBAAdDraftValidationErrors",
          ).getMAIBAAdDraftFieldValidationMessage(s, e, t, n, r);
    }
    function b() {
      var e = y(),
        t = e.validationErrors;
      return t;
    }
    ((l.MAIBAAdDraftErrorResolutionProvider = h),
      (l.useMAIBAAdDraftErrorResolution = y),
      (l.useMAIBAAdDraftFieldValidationMessage = C),
      (l.useMAIBAAdDraftValidationErrors = b));
  },
  98,
);
