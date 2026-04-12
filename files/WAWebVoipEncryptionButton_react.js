__d(
  "WAWebVoipEncryptionButton.react",
  [
    "fbt",
    "WAWebBizCoexGatingUtils",
    "WAWebCallCollection",
    "WAWebContactCollection",
    "WAWebUserPrefsMultiDevice",
    "WAWebVoipE2EInfoModal.react",
    "WDSButton.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLock.react",
    "WDSTooltip.react",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebVoipModalManager",
    "useWAWebVoipWindowPopoutTooltipProps",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { iconButton: { color: "xhslqc4", $$css: !0 } };
    function d() {
      var e,
        t = r("useWAWebVoipWindowPopoutTooltipProps")(),
        n = t.tooltipAnchorRef,
        a = t.tooltipOwnerDocument,
        i = r("useWAWebVoipModalManager")(),
        l = i.openModal,
        d = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "coex_calling_enabled",
        ),
        m = d && o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled(),
        p =
          m &&
          o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage(),
        _ =
          (e = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : e.peerJid,
        f =
          _ != null
            ? o("WAWebContactCollection").ContactCollection.get(_)
            : null,
        g = m && (f == null ? void 0 : f.isHosted) === !0,
        h = p || g,
        y = function () {
          l(
            u.jsx(r("WAWebVoipE2EInfoModal.react"), {
              isCurrentUserCoex: p,
              isPeerCoex: g,
            }),
          );
        },
        C = r(h ? "WDSIconIcInfo.react" : "WDSIconIcLock.react"),
        b;
      return (
        g
          ? (b = s._(
              /*BTDS*/ "This business uses a secure service from Meta to manage this call",
            ))
          : p
            ? (b = s._(
                /*BTDS*/ "Your business uses a secure service from Meta to manage this call",
              ))
            : (b = s._(/*BTDS*/ "End-to-end encrypted")),
        u.jsx("div", {
          className: "x10l6tqk xugynej x67dgr1 x68pp3s",
          children: u.jsx(r("WDSTooltip.react"), {
            label: b,
            ownerAnchorRef: n,
            ownerDocument: a,
            children: u.jsx(r("WDSButton.react"), {
              Icon: C,
              onPress: y,
              size: "small",
              type: "default",
              variant: "borderless",
              testid: void 0,
              xstyle: c.iconButton,
              "aria-label": b,
            }),
          }),
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
