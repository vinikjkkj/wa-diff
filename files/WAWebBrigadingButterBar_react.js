__d(
  "WAWebBrigadingButterBar.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebSettingsConst",
    "WAWebSettingsFlowLoadable",
    "WAWebUserPrefsGeneral",
    "WDSBanner.react",
    "WDSIconIcCheckCircle.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onDismiss,
        n = e.state,
        a = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
        i = a == null ? void 0 : a.messages,
        l = n === "ENFORCED" && i === "contacts",
        c = n === "DETECTED" && i === "all",
        d = n === "NOT_ENFORCED";
      if (!(l || c || d)) return null;
      var m = s._(
          /*BTDS*/ "Your device is receiving a high volume of messages",
        ),
        p = function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? {
                  descriptorType: "settings",
                  initialStep:
                    o("WAWebSettingsConst").SettingsSteps.PrivacySettings,
                }
              : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
                  onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                  initialStep:
                    o("WAWebSettingsConst").SettingsSteps.PrivacySettings,
                }),
          );
        },
        _,
        f,
        g,
        h,
        y = "warning";
      switch (n) {
        case "DETECTED": {
          ((_ = m),
            (f = s._(/*BTDS*/ "Block messages from unknown accounts.")),
            (g = s._(/*BTDS*/ "Turn on in settings")),
            (h = p));
          break;
        }
        case "ENFORCED": {
          ((_ = m),
            (f = s._(
              /*BTDS*/ "Messages from unknown accounts are being blocked.",
            )),
            (g = s._(/*BTDS*/ "Turn off in settings")),
            (h = p));
          break;
        }
        case "NOT_ENFORCED": {
          ((_ = s._(/*BTDS*/ "Message blocking turned off")),
            (f = s._(
              /*BTDS*/ "Messages from unknown accounts aren't being blocked anymore.",
            )),
            (y = "default"));
          break;
        }
        default:
          break;
      }
      return f == null
        ? null
        : u.jsx("div", {
            className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
            children: u.jsx(r("WDSBanner.react"), {
              type: y,
              title: _,
              body: f,
              actionText: g,
              onAction: h,
              onDismiss: t,
              icon: y === "default" ? r("WDSIconIcCheckCircle.react") : void 0,
            }),
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
