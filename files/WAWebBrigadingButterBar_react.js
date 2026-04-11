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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.onDismiss,
        a = e.state,
        i = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
        l = i == null ? void 0 : i.messages,
        c = a === "ENFORCED" && l === "contacts",
        m = a === "DETECTED" && l === "all",
        p = a === "NOT_ENFORCED";
      if (!(c || m || p)) return null;
      var _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(
            /*BTDS*/ "Your device is receiving a high volume of messages",
          )),
          (t[0] = _))
        : (_ = t[0]);
      var f = _,
        g = d,
        h,
        y,
        C,
        b,
        v = "warning";
      e: switch (a) {
        case "DETECTED": {
          h = f;
          var S;
          (t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = s._(/*BTDS*/ "Block messages from unknown accounts.")),
              (t[1] = S))
            : (S = t[1]),
            (y = S));
          var R;
          (t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = s._(/*BTDS*/ "Turn on in settings")), (t[2] = R))
            : (R = t[2]),
            (C = R),
            (b = g));
          break e;
        }
        case "ENFORCED": {
          h = f;
          var L;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = s._(
                /*BTDS*/ "Messages from unknown accounts are being blocked.",
              )),
              (t[3] = L))
            : (L = t[3]),
            (y = L));
          var E;
          (t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = s._(/*BTDS*/ "Turn off in settings")), (t[4] = E))
            : (E = t[4]),
            (C = E),
            (b = g));
          break e;
        }
        case "NOT_ENFORCED": {
          var k;
          (t[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = s._(/*BTDS*/ "Message blocking turned off")), (t[5] = k))
            : (k = t[5]),
            (h = k));
          var I;
          (t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = s._(
                /*BTDS*/ "Messages from unknown accounts aren't being blocked anymore.",
              )),
              (t[6] = I))
            : (I = t[6]),
            (y = I),
            (v = "default"));
          break e;
        }
        default:
      }
      if (y == null) return null;
      var T;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = { className: "x1380le5 xefnzgg x1uvdrpn x14mko6t" }),
          (t[7] = T))
        : (T = t[7]);
      var D = v === "default" ? r("WDSIconIcCheckCircle.react") : void 0,
        x;
      return (
        t[8] !== v ||
        t[9] !== b ||
        t[10] !== C ||
        t[11] !== n ||
        t[12] !== y ||
        t[13] !== D ||
        t[14] !== h
          ? ((x = u.jsx(
              "div",
              babelHelpers.extends({}, T, {
                children: u.jsx(r("WDSBanner.react"), {
                  type: v,
                  title: h,
                  body: y,
                  actionText: C,
                  onAction: b,
                  onDismiss: n,
                  icon: D,
                }),
              }),
            )),
            (t[8] = v),
            (t[9] = b),
            (t[10] = C),
            (t[11] = n),
            (t[12] = y),
            (t[13] = D),
            (t[14] = h),
            (t[15] = x))
          : (x = t[15]),
        x
      );
    }
    function d() {
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
    }
    l.default = c;
  },
  226,
);
