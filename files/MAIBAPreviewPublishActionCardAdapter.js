__d(
  "MAIBAPreviewPublishActionCardAdapter",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return e.map(function (e, n) {
        return babelHelpers.extends(
          {
            imageAlt: t,
            items: [],
            key: e.kind + e.id + String(n),
            overflow_after: 0,
            text: null,
            title: e.caption,
            tone: null,
          },
          (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "change" &&
              "headers" in e &&
              "rows" in e
            ) {
              var t = e.headers,
                n = e.rows;
              return {
                headers: { after: t.after, before: t.before },
                kind: "DELTA",
                rows: n.map(function (e) {
                  return {
                    after: e.after,
                    afterImageUrls: e.afterImageUrls,
                    before: e.before,
                    beforeImageUrls: e.beforeImageUrls,
                    children: [],
                    label: e.field,
                    value: null,
                  };
                }),
              };
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "summary" &&
              "rows" in e
            ) {
              var r = e.rows;
              return {
                kind: "STRUCTURED",
                rows: r.map(function (e) {
                  return {
                    after: null,
                    before: null,
                    children: [],
                    label: e.label,
                    value: e.value,
                  };
                }),
              };
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(e),
        );
      });
    }
    function u(t, n, r) {
      return (
        r === void 0 && (r = null),
        {
          blocks: e(t, n),
          decision: { primary: null, secondary: !1, tone: "DRAFT" },
          header: { action: String(s._(/*BTDS*/ "")) },
          lifecycle: { phase: "REVIEW" },
          policy: {
            ack: r,
            copy: null,
            legal: !1,
            tier: r == null ? "NONE" : "HIGH",
          },
          recipe: "REVIEW",
        }
      );
    }
    ((l.buildPreviewPublishActionCardBlocks = e),
      (l.buildPreviewPublishActionCard = u));
  },
  226,
);
