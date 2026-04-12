__d(
  "WAWebVoipCallsTabEmptyState.react",
  [
    "cx",
    "fbt",
    "WAWebCallLogEntryDetails.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebLockOutlineIcon.react",
    "WAWebVoipCallsTabEmptyStateButtons.react",
    "WAWebVoipCallsTabPanelManager",
    "WAWebWaLogoIcon.react",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = e.useState,
      m = {
        whatsappLogo: { color: "x1vef352", display: "x1rg5ohu", $$css: !0 },
        drawerWithBorder: {
          borderInlineStartWidth: "xpilrb4",
          borderInlineStartStyle: "x1t7ytsu",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
      };
    function p() {
      var e = d(null),
        t = e[0],
        n = e[1];
      (o("useWAWebListener").useListener(
        r("WAWebVoipCallsTabPanelManager"),
        "openCallLogInfoPanel",
        n,
      ),
        o("useWAWebListener").useListener(
          r("WAWebVoipCallsTabPanelManager"),
          "closeCallLogInfoPanel",
          function () {
            n(null);
          },
        ),
        o("useWAWebListener").useListener(
          r("WAWebVoipCallsTabPanelManager"),
          "updateActveCallLogInfo",
          function (e) {
            e.length !== (t == null ? void 0 : t.length) && n(e);
          },
        ));
      var a = o("useWAWebABPropConfigValue").useABPropConfigValue(
        "web_calls_tab_empty_state_buttons",
      );
      if (t != null)
        return c.jsx(r("WAWebCallLogEntryDetails.react"), { callLogMsgs: t });
      var i = a
          ? c.jsx(r("WAWebVoipCallsTabEmptyStateButtons.react"), {})
          : c.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
              height: 56,
              width: 56,
              iconXstyle: m.whatsappLogo,
            }),
        l = c.jsxs("div", {
          className: "_al_x",
          children: [
            c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
              height: 20,
              width: 20,
            }),
            " ",
            u._(/*BTDS*/ "Your personal calls are end-to-end encrypted"),
          ],
        });
      return c.jsx(r("WAWebDrawer.react"), {
        theme: "white-bg",
        testid: void 0,
        xstyle: m.drawerWithBorder,
        children: c.jsx(r("WAWebDrawerBody.react"), {
          children: c.jsx("div", {
            className: "_al_c",
            children: c.jsxs("div", {
              className: "_al_d",
              children: [c.jsx("div", { children: i }), l],
            }),
          }),
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
