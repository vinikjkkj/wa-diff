__d(
  "WAWebStatusDrawerFlow.react",
  [
    "$InternalEnum",
    "WAWebDrawerManager",
    "WAWebPrivacySettingsStatusPostDrawer.react",
    "WAWebStatusDrawer.react",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored([
        "StatusDrawer",
        "StatusPrivacySettingDrawer",
      ]);
    function c(e) {
      var t = e.onBack,
        n = function () {
          t != null
            ? t()
            : o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
        },
        a = function () {
          c.pop();
        },
        i = o("useWAWebFlow").useFlow(u.StatusDrawer, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: n,
        }),
        l = i[0],
        c = i[1];
      if (c.step == null) return null;
      var d =
        c.step === u.StatusDrawer
          ? s.jsx(r("WAWebStatusDrawer.react"), {
              onBack: n,
              onOpenStatusPrivacySettingDrawer: function () {
                c.push(u.StatusPrivacySettingDrawer);
              },
            })
          : c.step === u.StatusPrivacySettingDrawer
            ? s.jsx(r("WAWebPrivacySettingsStatusPostDrawer.react"), {
                onClose: a,
              })
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    c.step,
                );
              })();
      return s.jsx(l, { flow: c, children: d });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
