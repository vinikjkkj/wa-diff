__d(
  "WAWebPttPauseResumeRecordingButton.react",
  [
    "fbt",
    "WDSIconIcKeyboardVoiceFilled.react",
    "WDSIconIcPauseFilled.react",
    "WDSMenuBarItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useRef;
    function m(t) {
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o.confirmOnMouseUp,
        i = o.disabled,
        l = i === void 0 ? !1 : i,
        u = o.onConfirm,
        m = o.recording,
        p = o.tabOrder,
        _ = d(!1),
        f = function (t) {
          ((_.current = !0),
            window.addEventListener(
              "mouseup",
              function () {
                _.current = !1;
              },
              { once: !0 },
            ));
        },
        g = function (t) {
          a && (_.current || (t.button === 0 && u(t)));
        },
        h = function (t) {
          t != null && u(t);
        },
        y = m
          ? s._(/*BTDS*/ "Pause recording")
          : s._(/*BTDS*/ "Resume recording");
      return c.jsx(
        "div",
        babelHelpers.extends(
          { onMouseUp: g, onMouseDown: f, "aria-label": y },
          {
            0: { className: "x14ug900 x144v4sp" },
            1: { className: "x14ug900 x144v4sp" },
          }[!l << 0],
          {
            children: c.jsx(r("WDSMenuBarItem.react"), {
              ref: n,
              testid: void 0,
              title: y,
              onClick: h,
              disabled: l,
              tabOrder: p,
              buttonType: "destructive",
              icon: r(
                m
                  ? "WDSIconIcPauseFilled.react"
                  : "WDSIconIcKeyboardVoiceFilled.react",
              ),
            }),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (m.displayName = "PttPauseAndResumeRecordingButton"),
      (l.default = m));
  },
  226,
);
