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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(11),
        t = d(null),
        n = t[0],
        a = t[1];
      o("useWAWebListener").useListener(
        r("WAWebVoipCallsTabPanelManager"),
        "openCallLogInfoPanel",
        a,
      );
      var i;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            a(null);
          }),
          (e[0] = i))
        : (i = e[0]),
        o("useWAWebListener").useListener(
          r("WAWebVoipCallsTabPanelManager"),
          "closeCallLogInfoPanel",
          i,
        ));
      var l;
      (e[1] !== (n == null ? void 0 : n.length)
        ? ((l = function (t) {
            t.length !== (n == null ? void 0 : n.length) && a(t);
          }),
          (e[1] = n == null ? void 0 : n.length),
          (e[2] = l))
        : (l = e[2]),
        o("useWAWebListener").useListener(
          r("WAWebVoipCallsTabPanelManager"),
          "updateActveCallLogInfo",
          l,
        ));
      var s = o("useWAWebABPropConfigValue").useABPropConfigValue(
        "web_calls_tab_empty_state_buttons",
      );
      if (n != null) {
        var p;
        return (
          e[3] !== n
            ? ((p = c.jsx(r("WAWebCallLogEntryDetails.react"), {
                callLogMsgs: n,
              })),
              (e[3] = n),
              (e[4] = p))
            : (p = e[4]),
          p
        );
      }
      var _;
      e[5] !== s
        ? ((_ = s
            ? c.jsx(r("WAWebVoipCallsTabEmptyStateButtons.react"), {})
            : c.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
                height: 56,
                width: 56,
                iconXstyle: m.whatsappLogo,
              })),
          (e[5] = s),
          (e[6] = _))
        : (_ = e[6]);
      var f = _,
        g;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
            height: 20,
            width: 20,
          })),
          (e[7] = g))
        : (g = e[7]);
      var h;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = c.jsxs("div", {
            className: "_al_x",
            children: [
              g,
              " ",
              u._(/*BTDS*/ "Your personal calls are end-to-end encrypted"),
            ],
          })),
          (e[8] = h))
        : (h = e[8]);
      var y = h,
        C;
      return (
        e[9] !== f
          ? ((C = c.jsx(r("WAWebDrawer.react"), {
              theme: "white-bg",
              testid: void 0,
              xstyle: m.drawerWithBorder,
              children: c.jsx(r("WAWebDrawerBody.react"), {
                children: c.jsx("div", {
                  className: "_al_c",
                  children: c.jsxs("div", {
                    className: "_al_d",
                    children: [c.jsx("div", { children: f }), y],
                  }),
                }),
              }),
            })),
            (e[9] = f),
            (e[10] = C))
          : (C = e[10]),
        C
      );
    }
    l.default = p;
  },
  226,
);
