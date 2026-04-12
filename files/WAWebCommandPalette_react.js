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
      var t = e.plugins,
        n = t == null ? c() : t,
        r = n.defaultPlugin,
        a = n.triggeredPlugins;
      return s.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.CommandPaletteV2,
        children: s.jsx(o("WAWebCommandPaletteController").CommandPalette, {
          defaultPlugin: r,
          triggeredPlugins: a,
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      o("WAWebModalManager").ModalManager.open(s.jsx(d, { plugins: e }));
    }
    function p() {
      var e = o("useWAWebSettingsValues").useSettingsValues([
          o("WAWebSettingsGetters").getShowArchiveV2,
        ]),
        t = e[0];
      return s.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.CommandPalette,
        children: s.jsx(
          o("WAWebChatlistPanelFunctional.react").ChatlistPanelFunctional,
          {
            showArchiveV2: t,
            mode: r("WAWebChatlistPanelMode").CommandPalette,
          },
        ),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return (
        u(function () {
          return (
            o("WAWebCommandPaletteUtils").setIsCommandPaletteOpen(!0),
            function () {
              o("WAWebCommandPaletteUtils").setIsCommandPaletteOpen(!1);
            }
          );
        }, []),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "close_command_palette",
          function () {
            return o("WAWebModalManager").ModalManager.close();
          },
        ),
        s.jsx(p, {})
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.openCommandPaletteV2Modal = m),
      (l.CommandPaletteModal = _));
  },
  98,
);
