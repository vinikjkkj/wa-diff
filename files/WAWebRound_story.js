__d(
  "WAWebRound.story",
  [
    "WAWebFlex.react",
    "WAWebNoop",
    "WAWebRound.react",
    "WAWebShowroomUtils",
    "WDSIconIcMood.react",
    "WDSIconIcSendFilled.react",
    "react",
    "react-compiler-runtime",
    "useWAWebCheckbox",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = { container: { height: "x18dl8mb", $$css: !0 } };
    function d() {
      var e,
        t = o("react-compiler-runtime").c(19),
        n = (e = o("useWAWebCheckbox")).useCheckBox(
          "large={true} (use this as an action item in all list modals)",
          !1,
        ),
        a = n[0],
        i = n[1],
        l = e.useCheckBox("disabnled={true}", !1),
        d = l[0],
        p = l[1],
        _ = e.useCheckBox("inverted={true}", !1),
        f = _[0],
        g = _[1],
        h = e.useCheckBox("hideBackground={true}", !1),
        y = h[0],
        C = h[1],
        b = u(o("WAWebRound.react").RoundTheme.Default),
        v = b[0],
        S = b[1],
        R;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var L;
        ((R = {
          default: (L = o("WAWebRound.react")).RoundTheme.Default,
          small: L.RoundTheme.Small,
          medium: L.RoundTheme.Medium,
          large: L.RoundTheme.Large,
          inverted: L.RoundTheme.Inverted,
          noShadow: L.RoundTheme.NoShadow,
          svgGrayButton: L.RoundTheme.SVGGrayButton,
          reactionPickerButton: L.RoundTheme.ReactionPickerButton,
          approve: L.RoundTheme.Approve,
          reject: L.RoundTheme.Reject,
          disabled: L.RoundTheme.Disabled,
          quickAction: L.RoundTheme.QuickAction,
          drawerFooter: L.RoundTheme.DrawerFooter,
          error: L.RoundTheme.Error,
        }),
          (t[0] = R));
      } else R = t[0];
      var E = R,
        k;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = Object.keys(E).map(m)), (t[1] = k))
        : (k = t[1]);
      var I = k,
        T;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            var e = t.currentTarget.value;
            S(E[e]);
          }),
          (t[2] = T))
        : (T = t[2]);
      var D = T,
        x;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s.jsx(r("WDSIconIcSendFilled.react"), {
            width: 18,
            height: 18,
            directional: !0,
          })),
          (t[3] = x))
        : (x = t[3]);
      var $;
      t[4] !== d || t[5] !== y || t[6] !== f || t[7] !== a || t[8] !== v
        ? (($ = s.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: c.container,
            children: s.jsx(o("WAWebRound.react").Round, {
              large: a,
              disabled: d,
              inverted: f,
              hideBackground: y,
              theme: v,
              onClick: r("WAWebNoop"),
              children: x,
            }),
          })),
          (t[4] = d),
          (t[5] = y),
          (t[6] = f),
          (t[7] = a),
          (t[8] = v),
          (t[9] = $))
        : ($ = t[9]);
      var P, N;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s.jsx("br", {})),
          (N = s.jsx("h2", { children: "Options" })),
          (t[10] = P),
          (t[11] = N))
        : ((P = t[10]), (N = t[11]));
      var M;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s.jsxs("div", {
            className: "x1sy10c2",
            children: [
              s.jsx("label", {
                htmlFor: "Rount Themes",
                children: "Choose a theme: ",
              }),
              s.jsx("select", {
                name: "Rount Themes",
                onChange: D,
                children: I,
              }),
            ],
          })),
          (t[12] = M))
        : (M = t[12]);
      var w;
      return (
        t[13] !== p || t[14] !== C || t[15] !== g || t[16] !== i || t[17] !== $
          ? ((w = s.jsxs(s.Fragment, { children: [$, P, N, i, p, g, C, M] })),
            (t[13] = p),
            (t[14] = C),
            (t[15] = g),
            (t[16] = i),
            (t[17] = $),
            (t[18] = w))
          : (w = t[18]),
        w
      );
    }
    function m(e) {
      return s.jsx("option", { value: e, children: e }, e);
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = {
      storyName: "WAWebRound",
      component: o("WAWebRound.react").Round,
      description:
        "\n        Action button mainly used for list modals (Forward message, Create group, etc). Expects to have an &lt;SVG /&gt; icon passed in as a child.\n\n        Note: Should use all '-light' versions of icons.\n    ",
      examples: [
        {
          example: d,
          title: "Default",
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").bigPreview,
          ),
        },
        {
          example: function () {
            return s.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              xstyle: c.container,
              children: s.jsx(o("WAWebRound.react").Round, {
                theme: o("WAWebRound.react").RoundTheme.QuickAction,
                small: !0,
                children: s.jsx(r("WDSIconIcMood.react"), {
                  height: 24,
                  width: 24,
                }),
              }),
            });
          },
          title: "Quick Action",
          description: "QuickAction theme for Round button component",
        },
      ],
    };
    l.default = p;
  },
  98,
);
