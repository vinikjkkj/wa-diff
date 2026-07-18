__d(
  "WDSProfilePhotoUtils",
  [
    "WDSIconIcAdd.react",
    "WDSIconIcCallFilled.react",
    "WDSIconIcCampaignMegaphoneFilled.react",
    "WDSIconIcGridFilled.react",
    "WDSIconIcGroupFilled.react",
    "WDSIconIcPersonFilled.react",
    "WDSIconIcStoreFilled.react",
    "WDSIconWdsIcChannelsFilled.react",
    "WDSIconWdsIcCommunitiesFilled.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "WDSIconWdsIcVerifiedFilled.react",
    "WDSVars.stylex",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        xxxSmall: 20,
        xxSmall: 24,
        extraSmall: 36,
        small: 40,
        medium: 48,
        large: 64,
        extraLarge: 88,
        xxLarge: 120,
      },
      c = {
        extraSmall: !0,
        small: !0,
        medium: !0,
        large: !0,
        extraLarge: !0,
        xxLarge: !0,
      },
      d = {
        36: { gap: 1.5, strokeWidth: 1.5 },
        40: { gap: 2, strokeWidth: 2 },
        48: { gap: 2, strokeWidth: 2 },
        64: { gap: 2, strokeWidth: 2 },
        88: { gap: 3, strokeWidth: 3 },
        120: { gap: 3, strokeWidth: 3 },
      },
      m = { 20: 9, 24: 11, 36: 16, 40: 18, 48: 22, 64: 29, 88: 40, 120: 54 },
      p = { 20: 8, 24: 10, 36: 15, 40: 17, 48: 20, 64: 27, 88: 38, 120: 51 },
      _ = {
        pink: {
          surface:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-surface-pink"
            ],
          content:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-content-pink"
            ],
        },
        red: {
          surface:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-surface-red"
            ],
          content:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-content-red"
            ],
        },
        orange: {
          surface:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-surface-orange"
            ],
          content:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-content-orange"
            ],
        },
        brown: {
          surface:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-surface-brown"
            ],
          content:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-content-brown"
            ],
        },
        yellow: {
          surface:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-surface-yellow"
            ],
          content:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-content-yellow"
            ],
        },
        green: {
          surface:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-surface-green"
            ],
          content:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-content-green"
            ],
        },
        teal: {
          surface:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-surface-teal"
            ],
          content:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-content-teal"
            ],
        },
        skyBlue: {
          surface:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-surface-sky-blue"
            ],
          content:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-content-sky-blue"
            ],
        },
        cobalt: {
          surface:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-surface-cobalt"
            ],
          content:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-content-cobalt"
            ],
        },
        purple: {
          surface:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-surface-purple"
            ],
          content:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-content-purple"
            ],
        },
        gray: {
          surface:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-surface-gray"
            ],
          content:
            o("WDSVars.stylex").WDSColors[
              "--WDS-components-profile-photo-content-gray"
            ],
        },
      },
      f = {
        color:
          o("WDSVars.stylex").WDSColors[
            "--WDS-components-outline-profile-photo"
          ],
        thickness: 0.5,
      },
      g = { 36: 16, 40: 20, 48: 20, 64: 20, 88: 24, 120: 32 },
      h = {
        emphasised: {
          surface: o("WDSVars.stylex").WDSColors["--WDS-accent"],
          content: o("WDSVars.stylex").WDSColors["--WDS-content-on-accent"],
        },
        active: {
          surface:
            o("WDSVars.stylex").WDSColors[
              "--WDS-persistent-activity-indicator"
            ],
          content: o("WDSVars.stylex").WDSColors["--WDS-content-on-accent"],
        },
        discreet: {
          surface: null,
          content: o("WDSVars.stylex").WDSColors["--WDS-content-deemphasized"],
        },
        verified: {
          surface: null,
          content: o("WDSVars.stylex").WDSColors["--WDS-persistent-verified"],
        },
      },
      y = {
        36: { maskSize: 19, offset: 1.5 },
        40: { maskSize: 24, offset: 2 },
        48: { maskSize: 24, offset: 2 },
        64: { maskSize: 24, offset: 2 },
        88: { maskSize: 30, offset: 3 },
        120: { maskSize: 38, offset: 3 },
      },
      C = {
        16: { withSurface: 12, noSurface: 16 },
        20: { withSurface: 14, noSurface: 20 },
        24: { withSurface: 18, noSurface: 24 },
        32: { withSurface: 24, noSurface: 32 },
      },
      b = {
        emphasised: r("WDSIconIcAdd.react"),
        active: r("WDSIconIcCallFilled.react"),
        discreet: r("WDSIconWdsIcDisappearingMessages.react"),
        verified: r("WDSIconWdsIcVerifiedFilled.react"),
      },
      v =
        "M 0, 100 C 0, 20 20, 0 100, 0 S 200, 20 200, 100 180, 200 100, 200 0, 180 0, 100",
      S =
        "M22.6883 11.222L22.6831 11.2167L22.6721 11.2054L21.0681 9.57969L21.6513 7.34858C21.8083 6.75436 21.4494 6.14894 20.855 5.98076L18.6342 5.37533L18.0286 3.15543C17.8715 2.56122 17.2547 2.21366 16.6602 2.35941L14.4282 2.94241L12.7907 1.32794C12.3533 0.890687 11.6467 0.890687 11.2093 1.32794L9.57176 2.94241L7.33979 2.35941C6.74535 2.20245 6.13969 2.56122 5.97145 3.14422L5.36579 5.36412L3.14504 5.96955C2.5506 6.12651 2.20291 6.74315 2.35993 7.33737L2.94316 9.56848L1.32807 11.2054C0.890645 11.6426 0.890645 12.349 1.32807 12.7862L2.94316 14.4231L2.35993 16.6542C2.20291 17.2484 2.56182 17.8539 3.14504 18.022L5.36579 18.6275L5.97145 20.8474C6.12847 21.4416 6.74535 21.8004 7.33979 21.6434L9.57176 21.0604L11.2093 22.6749C11.4224 22.8879 11.714 23 11.9944 23C12.2748 23 12.5664 22.8879 12.7795 22.6749L14.417 21.0604L16.649 21.6434C17.2434 21.8004 17.8491 21.4416 18.0173 20.8474L18.623 18.6275L20.8437 18.022C21.4382 17.8651 21.7859 17.2484 21.6401 16.6542L21.0568 14.4231L22.6719 12.7862C23.1038 12.3545 23.1093 11.6604 22.6883 11.222Z",
      R = {
        type: "custom",
        element: s.jsx("svg", {
          "aria-hidden": !0,
          height: "100%",
          viewBox: "0 0 200 200",
          width: "100%",
          children: s.jsx("path", { d: v }),
        }),
      };
    function L(e, t) {
      return e === "person"
        ? s.jsx(r("WDSIconIcPersonFilled.react"), { height: t, width: t })
        : e === "group"
          ? s.jsx(r("WDSIconIcGroupFilled.react"), { height: t, width: t })
          : e === "business"
            ? s.jsx(r("WDSIconIcStoreFilled.react"), { height: t, width: t })
            : e === "channel"
              ? s.jsx(r("WDSIconWdsIcChannelsFilled.react"), {
                  height: t,
                  width: t,
                })
              : e === "thirdParty"
                ? s.jsx(r("WDSIconIcGridFilled.react"), { height: t, width: t })
                : e === "community"
                  ? s.jsx(r("WDSIconWdsIcCommunitiesFilled.react"), {
                      height: t,
                      width: t,
                    })
                  : e === "announcement"
                    ? s.jsx(r("WDSIconIcCampaignMegaphoneFilled.react"), {
                        height: t,
                        width: t,
                      })
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    ((L.displayName = L.name + " [from " + i.id + "]"),
      (l.SIZE_TO_PX = u),
      (l.RING_SUPPORTED_SIZES = c),
      (l.STATUS_RING_SPEC = d),
      (l.ICON_SIZE_MAP = m),
      (l.INITIALS_FONT_SIZE_MAP = p),
      (l.UNVIEWED_COLOR =
        o("WDSVars.stylex").WDSColors["--WDS-persistent-activity-indicator"]),
      (l.UNVIEWED_CLOSE_FRIENDS_COLOR =
        o("WDSVars.stylex").WDSColors[
          "--WDS-components-profile-photo-status-ring-close-friends"
        ]),
      (l.VIEWED_COLOR =
        o("WDSVars.stylex").WDSColors["--WDS-systems-status-seen"]),
      (l.colorTokenMap = _),
      (l.DECORATIVE_OUTLINE = f),
      (l.BADGE_SIZE_MAP = g),
      (l.BADGE_COLORS = h),
      (l.BADGE_CUTOUT_SPEC = y),
      (l.BADGE_ICON_SIZE = C),
      (l.DEFAULT_BADGE_ICON = b),
      (l.SQUIRCLE_PATH = v),
      (l.VERIFIED_STARBURST_PATH = S),
      (l.SQUIRCLE_SHAPE = R),
      (l.getPlaceholderIcon = L));
  },
  98,
);
