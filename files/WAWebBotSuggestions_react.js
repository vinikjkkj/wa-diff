__d(
  "WAWebBotSuggestions.react",
  [
    "WAWebBotProfileGetters",
    "WAWebUseBusinessProfile.react",
    "react",
    "react-compiler-runtime",
    "useWAWebOptionalBotProfileValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.id,
        r = e.onPromptSelect,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["prompts"]), (t[0] = a))
        : (a = t[0]);
      var i = o("WAWebUseBusinessProfile.react").useBusinessProfile(n, a),
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [o("WAWebBotProfileGetters").getPrompts]), (t[1] = l))
        : (l = t[1]);
      var u = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(
          n,
          l,
        ),
        d = u[0],
        m = d != null ? d : i == null ? void 0 : i.prompts;
      if (m == null || m.length === 0) return null;
      var p;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = {
            className:
              "x78zum5 x10l6tqk xmgkm54 x1nu74zi x14aock7 xuxw1ft x19sv2k2 x16ovd2e x12xbjc7 x1phvje8 xcldk2z",
          }),
          (t[2] = p))
        : (p = t[2]);
      var _;
      if (t[3] !== r || t[4] !== m) {
        var f;
        (t[6] !== r
          ? ((f = function (t) {
              return s.jsx(
                c,
                {
                  prompt: t,
                  onClick: function () {
                    r(t.text);
                  },
                },
                t.text,
              );
            }),
            (t[6] = r),
            (t[7] = f))
          : (f = t[7]),
          (_ = m.map(f)),
          (t[3] = r),
          (t[4] = m),
          (t[5] = _));
      } else _ = t[5];
      var g;
      return (
        t[8] !== _
          ? ((g = s.jsx("div", babelHelpers.extends({}, p, { children: _ }))),
            (t[8] = _),
            (t[9] = g))
          : (g = t[9]),
        g
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.onClick,
        r = e.prompt,
        a,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            className:
              "x1f6kntn xdod15v x12l2aii x1mbk4o x14vvt0a x1w3ol1v xk50ysn x1w7vc3g x1ypdohk x16ovd2e x12xbjc7 x1iw51ew xvtqlqk x1wbi8v6 x7g7pl8",
          }),
          (i = { className: "x1rg5ohu x7g7pl8" }),
          (t[0] = a),
          (t[1] = i))
        : ((a = t[0]), (i = t[1]));
      var l;
      t[2] !== r.emoji
        ? ((l = s.jsx(
            "span",
            babelHelpers.extends({}, i, { children: r.emoji }),
          )),
          (t[2] = r.emoji),
          (t[3] = l))
        : (l = t[3]);
      var u;
      t[4] !== r.text
        ? ((u = s.jsx("span", { children: r.text })),
          (t[4] = r.text),
          (t[5] = u))
        : (u = t[5]);
      var c;
      return (
        t[6] !== n || t[7] !== l || t[8] !== u
          ? ((c = s.jsxs(
              "div",
              babelHelpers.extends({ onClick: n }, a, { children: [l, u] }),
            )),
            (t[6] = n),
            (t[7] = l),
            (t[8] = u),
            (t[9] = c))
          : (c = t[9]),
        c
      );
    }
    l.default = u;
  },
  98,
);
