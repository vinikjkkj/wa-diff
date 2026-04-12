__d(
  "WAWebWrapperReactionsQuickActionButton.react",
  ["fbt", "WAWebRound.react", "WDSIconIcMood.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { svgColorRefreshed: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = e.ref,
        n = e.msg,
        a = e.onToggleReactionTray,
        i = e.showButton,
        l = i
          ? u.jsx(o("WAWebRound.react").Round, {
              testid: void 0,
              label: s._(/*BTDS*/ "React"),
              title: null,
              theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
              onClick: function () {
                return a(n);
              },
              children: u.jsx(r("WDSIconIcMood.react"), {
                xstyle: c.svgColorRefreshed,
                height: 20,
              }),
            })
          : null,
        d = u.jsx("div", { ref: t, children: l });
      return d;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
