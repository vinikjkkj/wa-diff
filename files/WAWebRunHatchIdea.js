__d(
  "WAWebRunHatchIdea",
  [
    "WALogger",
    "WAWebHatchFrontendGating",
    "WAWebHatchIdeaSelection",
    "WAWebSendHatchIdeaRunMsg",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set();
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!o("WAWebHatchFrontendGating").isHatchIdeasEnabled())
            return { kind: "unavailable" };
          var r = o("WAWebHatchIdeaSelection").getHatchIdeaRunScope(t, n);
          if (r == null) return { kind: "unavailable" };
          var a = d(t.id, r);
          if (s.has(a)) return { kind: "held" };
          s.add(a);
          try {
            var i = yield o("WAWebSendHatchIdeaRunMsg").sendHatchIdeaRunMsg({
              card: t,
              scope: r,
            });
            return i == null
              ? { kind: "not_sent" }
              : { kind: "sent", result: i };
          } catch (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-ideas: run message send rejected, outcome unknown",
                  ])),
              ),
              { kind: "unknown" }
            );
          } finally {
            s.delete(a);
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return JSON.stringify(t.mode === "full" ? [e] : [e].concat(t.itemIds));
    }
    l.runHatchIdea = u;
  },
  98,
);
