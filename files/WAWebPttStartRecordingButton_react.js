__d(
  "WAWebPttStartRecordingButton.react",
  [
    "fbt",
    "WAWebMicFilledIcon.react",
    "WAWebMicOutlinedIcon.react",
    "WAWebTabOrder",
    "WDSFocusStateStyles",
    "WDSMenuBarItem.react",
    "react",
    "stylex",
    "useWAWebFocusState",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState;
    function m(t) {
      var n = t.disabled,
        a = t.onConfirm,
        i = d(!1),
        l = i[0],
        u = i[1],
        m = r("useWAWebFocusState")(),
        p = m[1],
        _ = function (t) {
          t.button === 0 && a();
        },
        f = function (t) {
          a();
        },
        g = function () {},
        h = s._(/*BTDS*/ "Voice message"),
        y = [
          p &&
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent,
        ],
        C = c.jsx("button", {
          onMouseEnter: function () {
            return u(!0);
          },
          onMouseLeave: function () {
            return u(!1);
          },
          onMouseDown: _,
          onTouchStart: f,
          onTouchEnd: g,
          "aria-label": h,
          children: c.jsx(r("WDSMenuBarItem.react"), {
            icon: l
              ? o("WAWebMicFilledIcon.react").MicFilledIcon
              : o("WAWebMicOutlinedIcon.react").MicOutlinedIcon,
            title: h,
            onClick: a,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON,
            testid: void 0,
            disabled: n != null ? n : !1,
            buttonSize: "medium",
            buttonVariant: l ? "filled" : "borderless",
            buttonType: "default",
          }),
        });
      return c.jsx(
        "div",
        babelHelpers.extends({}, (e || (e = r("stylex"))).props(y), {
          children: C,
        }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
