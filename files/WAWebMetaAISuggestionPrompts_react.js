__d(
  "WAWebMetaAISuggestionPrompts.react",
  [
    "Random",
    "WAWebCellV2.react",
    "WAWebGalaxyFlowClickOutsideOfExcludedNote",
    "WAWebMetaAILandingConstants",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useRef,
      d = u.useState;
    function m(e) {
      var t,
        n = o("WAWebMetaAILandingConstants").CATEGORIES.find(function (t) {
          return t.id === e;
        });
      if (n == null) return [];
      for (
        var r = (t = n.pinnedPrompts) != null ? t : [],
          a = 4 - r.length,
          i = n.promptPool,
          l = [].concat(i),
          s = l.length - 1;
        s > 0;
        s--
      ) {
        var u = Math.floor(o("Random").random() * (s + 1)),
          c = l[s];
        ((l[s] = l[u]), (l[u] = c));
      }
      var d = l.slice(0, a).map(function (e) {
        return {
          display: function () {
            return e;
          },
          query: String(e),
        };
      });
      return [].concat(r, d);
    }
    function p(e) {
      var t = e.categoryId,
        n = e.onDismiss,
        a = e.onPromptSelect,
        i = c(null),
        l = d(function () {
          return m(t);
        }),
        u = l[0],
        p = function (t) {
          t.key === "Escape" && (t.stopPropagation(), n());
        };
      return (
        o(
          "WAWebGalaxyFlowClickOutsideOfExcludedNote",
        ).useClickOutsideOfExcludedNode([i], n),
        s.jsx("div", {
          ref: i,
          onKeyDown: p,
          tabIndex: 0,
          className: "x78zum5 xdt5ytf x1cy8zhl xh8yej3 xrlsmeg x9f619",
          children: u.map(function (e) {
            return s.jsx(
              r("WAWebCellV2.react"),
              {
                primary: s.jsx(r("WDSText.react"), {
                  colorName: "contentDefault",
                  type: "Body2",
                  children: e.display(),
                }),
                onClick: function () {
                  return a(e.query);
                },
                size: "medium",
                isRefresh: !0,
              },
              e.query,
            );
          }),
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
