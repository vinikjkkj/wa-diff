__d(
  "WAWebRunHatchIdea",
  [
    "WALogger",
    "WAWebHatchCvmReadOnlyState",
    "WAWebHatchFrontendGating",
    "WAWebHatchIdeaSelection",
    "WAWebSendHatchIdeaRunMsg",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set();
    async function u(t, n) {
      if (!o("WAWebHatchFrontendGating").isHatchIdeasEnabled())
        return { kind: "unavailable" };
      if (o("WAWebHatchCvmReadOnlyState").getHatchCvmReadOnlyReason() != null)
        return { kind: "read_only" };
      var r = o("WAWebHatchIdeaSelection").getHatchIdeaRunScope(t, n);
      if (r == null) return { kind: "unavailable" };
      var a = c(t.id, r);
      if (s.has(a)) return { kind: "held" };
      s.add(a);
      try {
        var i = await o("WAWebSendHatchIdeaRunMsg").sendHatchIdeaRunMsg({
          card: t,
          scope: r,
        });
        return i == null ? { kind: "not_sent" } : { kind: "sent", result: i };
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
    }
    function c(e, t) {
      return JSON.stringify(t.mode === "full" ? [e] : [e].concat(t.itemIds));
    }
    l.runHatchIdea = u;
  },
  98,
);
