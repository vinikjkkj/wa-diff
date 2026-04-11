__d(
  "WAWebAttachMediaViewOnce.react",
  [
    "fbt",
    "WAWebAttachMediaViewOnceNux.react",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebNux",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSButton.react",
    "WDSIconWdsIcViewOnce.react",
    "WDSIconWdsIcViewOnceFilled.react",
    "WDSTooltip.react",
    "react",
    "stylex",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m(t) {
      var n = t.containerXstyle,
        a = t.dataTab,
        i = t.disabled,
        l = t.isOn,
        u = t.mediaType,
        m = t.onChange,
        p = t.shouldShowNux,
        _ = p === void 0 ? !0 : p,
        f = t.shouldSkipNuxAndToast,
        g = f === void 0 ? !1 : f,
        h = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_VIEW_ONCE),
        y = h[0],
        C = h[1];
      d(
        function () {
          if (!(!l || g)) {
            if (y && _) {
              var e = function () {
                  (C(), o("WAWebModalManager").ModalManager.close());
                },
                t = c.jsx(r("WAWebAttachMediaViewOnceNux.react"), {
                  onOkClick: e,
                });
              o("WAWebModalManager").ModalManager.open(t);
              return;
            }
            var n;
            switch (u) {
              case o("WAWebMsgType").MSG_TYPE.VIDEO:
                n = s._(/*BTDS*/ "Video set to view once");
                break;
              case o("WAWebMsgType").MSG_TYPE.IMAGE:
                n = s._(/*BTDS*/ "Photo set to view once");
                break;
              case o("WAWebMsgType").MSG_TYPE.PTT:
                n = s._(/*BTDS*/ "Voice message set to view once");
                break;
            }
            var a = o("WAWebToast.react").genId("view-once-toast");
            if (n != null) {
              var i = c.jsx(o("WAWebToast.react").Toast, { msg: n, id: a });
              o("WAWebToastManager").ToastManager.open(i);
            }
            return function () {
              n != null && o("WAWebToastManager").ToastManager.close(a);
            };
          }
        },
        [y, l],
      );
      var b = l
        ? s._(/*BTDS*/ "Turn off view once")
        : s._(/*BTDS*/ "Turn on view once");
      return c.jsx(
        "div",
        babelHelpers.extends({}, (e || (e = r("stylex"))).props(n), {
          children: c.jsx(r("WDSTooltip.react"), {
            label: b,
            position: "above",
            children: c.jsx(r("WDSButton.react"), {
              variant: "borderless",
              size: "medium",
              Icon: r(
                l
                  ? "WDSIconWdsIcViewOnceFilled.react"
                  : "WDSIconWdsIcViewOnce.react",
              ),
              onPress: m,
              "aria-label": b,
              "aria-pressed": l,
              disabled: i,
              testid: void 0,
              tabOrder: a,
            }),
          }),
        }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
