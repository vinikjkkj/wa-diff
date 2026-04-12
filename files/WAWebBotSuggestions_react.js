__d(
  "WAWebBotSuggestions.react",
  [
    "WAWebBotProfileGetters",
    "WAWebUseBusinessProfile.react",
    "react",
    "useWAWebOptionalBotProfileValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.id,
        n = e.onPromptSelect,
        r = o("WAWebUseBusinessProfile.react").useBusinessProfile(t, [
          "prompts",
        ]),
        a = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(
          t,
          [o("WAWebBotProfileGetters").getPrompts],
        ),
        i = a[0],
        l = i != null ? i : r == null ? void 0 : r.prompts;
      return l == null || l.length === 0
        ? null
        : s.jsx("div", {
            className:
              "x78zum5 x10l6tqk xmgkm54 x1nu74zi x14aock7 xuxw1ft x19sv2k2 x16ovd2e x12xbjc7 x1phvje8 xcldk2z",
            children: l.map(function (e) {
              return s.jsx(
                c,
                {
                  prompt: e,
                  onClick: function () {
                    n(e.text);
                  },
                },
                e.text,
              );
            }),
          });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = e.onClick,
        n = e.prompt;
      return s.jsxs("div", {
        onClick: t,
        className:
          "x1f6kntn xdod15v x12l2aii x1mbk4o x14vvt0a x1w3ol1v xk50ysn x1w7vc3g x1ypdohk x16ovd2e x12xbjc7 x1iw51ew xvtqlqk x1wbi8v6 x7g7pl8",
        children: [
          s.jsx("span", { className: "x1rg5ohu x7g7pl8", children: n.emoji }),
          s.jsx("span", { children: n.text }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
