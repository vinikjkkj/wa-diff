__d(
  "useWAWebResolvedBotMode",
  [
    "WAWebAiModeSelectorUtils",
    "WAWebBotBaseGating",
    "react-compiler-runtime",
    "useWAWebBotModeSelection",
    "useWAWebDynamicBotModeOverride",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("react-compiler-runtime").c(17),
        r = o("useWAWebDynamicBotModeOverride").useWAWebDynamicBotModeOverride(
          e,
          t,
        ),
        a = o("useWAWebBotModeSelection").useWAWebBotModeSelection(e, t);
      if (o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()) {
        if (r != null) {
          var i;
          n[0] !== r.type
            ? ((i = o("WAWebAiModeSelectorUtils").getDynamicModeIcon(r.type)),
              (n[0] = r.type),
              (n[1] = i))
            : (i = n[1]);
          var l;
          return (
            n[2] !== r.subtitle || n[3] !== r.title || n[4] !== i
              ? ((l = { icon: i, title: r.title, subtitle: r.subtitle }),
                (n[2] = r.subtitle),
                (n[3] = r.title),
                (n[4] = i),
                (n[5] = l))
              : (l = n[5]),
            l
          );
        }
        var s;
        return (
          n[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = o(
                "WAWebAiModeSelectorUtils",
              ).getDefaultDynamicResolvedBotMode()),
              (n[6] = s))
            : (s = n[6]),
          s
        );
      }
      var u = a.length > 0 ? a[0] : void 0,
        c;
      n[7] !== u
        ? ((c = o("WAWebAiModeSelectorUtils").getBotUserSelectModeIcon(u)),
          (n[7] = u),
          (n[8] = c))
        : (c = n[8]);
      var d;
      n[9] !== u
        ? ((d = o("WAWebAiModeSelectorUtils").getBotUserSelectModeTitle(u)),
          (n[9] = u),
          (n[10] = d))
        : (d = n[10]);
      var m = String(d),
        p;
      n[11] !== u
        ? ((p = o("WAWebAiModeSelectorUtils").getBotUserSelectModeSubtitle(u)),
          (n[11] = u),
          (n[12] = p))
        : (p = n[12]);
      var _ = String(p),
        f;
      return (
        n[13] !== c || n[14] !== m || n[15] !== _
          ? ((f = { icon: c, title: m, subtitle: _ }),
            (n[13] = c),
            (n[14] = m),
            (n[15] = _),
            (n[16] = f))
          : (f = n[16]),
        f
      );
    }
    l.useWAWebResolvedBotMode = e;
  },
  98,
);
