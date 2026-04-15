__d(
  "WAWebMetaAISuggestionPrompts.react",
  [
    "Random",
    "WAWebCellV2.react",
    "WAWebGalaxyFlowClickOutsideOfExcludedNote",
    "WAWebMetaAILandingConstants",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(14),
        n = e.categoryId,
        a = e.onDismiss,
        i = e.onPromptSelect,
        l = c(null),
        u;
      t[0] !== n
        ? ((u = function () {
            return m(n);
          }),
          (t[0] = n),
          (t[1] = u))
        : (u = t[1]);
      var p = d(u),
        _ = p[0],
        f;
      t[2] !== a
        ? ((f = function (t) {
            t.key === "Escape" && (t.stopPropagation(), a());
          }),
          (t[2] = a),
          (t[3] = f))
        : (f = t[3]);
      var g = f,
        h;
      (t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = [l]), (t[4] = h))
        : (h = t[4]),
        o(
          "WAWebGalaxyFlowClickOutsideOfExcludedNote",
        ).useClickOutsideOfExcludedNode(h, a));
      var y;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = {
            className: "x78zum5 xdt5ytf x1cy8zhl xh8yej3 xrlsmeg x9f619",
          }),
          (t[5] = y))
        : (y = t[5]);
      var C;
      if (t[6] !== _ || t[7] !== i) {
        var b;
        (t[9] !== i
          ? ((b = function (t) {
              return s.jsx(
                r("WAWebCellV2.react"),
                {
                  primary: s.jsx(r("WDSText.react"), {
                    colorName: "contentDefault",
                    type: "Body2",
                    children: t.display(),
                  }),
                  onClick: function () {
                    return i(t.query);
                  },
                  size: "medium",
                  isRefresh: !0,
                },
                t.query,
              );
            }),
            (t[9] = i),
            (t[10] = b))
          : (b = t[10]),
          (C = _.map(b)),
          (t[6] = _),
          (t[7] = i),
          (t[8] = C));
      } else C = t[8];
      var v;
      return (
        t[11] !== g || t[12] !== C
          ? ((v = s.jsx(
              "div",
              babelHelpers.extends({ ref: l, onKeyDown: g, tabIndex: 0 }, y, {
                children: C,
              }),
            )),
            (t[11] = g),
            (t[12] = C),
            (t[13] = v))
          : (v = t[13]),
        v
      );
    }
    l.default = p;
  },
  98,
);
