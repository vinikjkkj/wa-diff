__d(
  "WAWebMLModelGraphqlErrorProcessor",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "WAWebMLModelGraphqlErrorProcessor";
    function d(t) {
      var n =
        t instanceof Error
          ? t.message
          : String(t != null ? t : "Unknown error");
      return (
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "",
              "/processDeliveryError: Delivery error: ",
              "",
            ])),
          c,
          n,
        ),
        { type: "delivery-error", reason: "Network error: " + n }
      );
    }
    function m(e) {
      return (
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "",
              "/processModelNotFoundError: Model not found: ",
              "",
            ])),
          c,
          e,
        ),
        { type: "model-not-found", reason: e }
      );
    }
    function p(e, t) {
      o("WALogger").ERROR(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "",
            "/",
            ": Critical error: ",
            "",
          ])),
        c,
        e,
        t,
      );
    }
    ((l.processDeliveryError = d),
      (l.processModelNotFoundError = m),
      (l.reportCriticalError = p));
  },
  98,
);
