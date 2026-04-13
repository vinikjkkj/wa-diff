__d(
  "WAWebCommandPalette.react",
  [
    "WAWebChatlistPanelFunctional.react",
    "WAWebChatlistPanelMode",
    "WAWebCmd",
    "WAWebCommandPaletteController",
    "WAWebCommandPalettePlugins",
    "WAWebCommandPaletteUtils",
    "WAWebDefaultCommandPalettePlugin",
    "WAWebHelpCommandPalettePlugin",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSettingsGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebSettingsValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c() {
      var e = o("WAWebCommandPalettePlugins").getAvailablePlugins(),
        t = o("WAWebHelpCommandPalettePlugin").buildHelpCommand(e);
      return {
        defaultPlugin: o("WAWebDefaultCommandPalettePlugin")
          .DefaultCommandPalettePlugin,
        triggeredPlugins: [].concat(e, [t]),
      };
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.plugins,
        r;
      t[0] !== n
        ? ((r = n == null ? c() : n), (t[0] = n), (t[1] = r))
        : (r = t[1]);
      var a = r,
        i = a.defaultPlugin,
        l = a.triggeredPlugins,
        u;
      return (
        t[2] !== i || t[3] !== l
          ? ((u = s.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.CommandPaletteV2,
              children: s.jsx(
                o("WAWebCommandPaletteController").CommandPalette,
                { defaultPlugin: i, triggeredPlugins: l },
              ),
            })),
            (t[2] = i),
            (t[3] = l),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    function m(e) {
      o("WAWebModalManager").ModalManager.open(s.jsx(d, { plugins: e }));
    }
    function p() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [o("WAWebSettingsGetters").getShowArchiveV2]), (e[0] = t))
        : (t = e[0]);
      var n = o("useWAWebSettingsValues").useSettingsValues(t),
        a = n[0],
        i;
      return (
        e[1] !== a
          ? ((i = s.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.CommandPalette,
              children: s.jsx(
                o("WAWebChatlistPanelFunctional.react").ChatlistPanelFunctional,
                {
                  showArchiveV2: a,
                  mode: r("WAWebChatlistPanelMode").CommandPalette,
                },
              ),
            })),
            (e[1] = a),
            (e[2] = i))
          : (i = e[2]),
        i
      );
    }
    function _() {
      var e = o("react-compiler-runtime").c(2),
        t;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]),
        u(g, t),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "close_command_palette",
          f,
        ));
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = s.jsx(p, {})), (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function f() {
      return o("WAWebModalManager").ModalManager.close();
    }
    function g() {
      return (o("WAWebCommandPaletteUtils").setIsCommandPaletteOpen(!0), h);
    }
    function h() {
      o("WAWebCommandPaletteUtils").setIsCommandPaletteOpen(!1);
    }
    ((l.openCommandPaletteV2Modal = m), (l.CommandPaletteModal = _));
  },
  98,
);
