__d(
  "WAWebConfirmationModal.react",
  [
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSButtonGroup.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e, t) {
      return t
        ? "default"
        : e === "solid-warning" || e === "warning" || e === "warning-secondary"
          ? "destructive"
          : "default";
    }
    function d(e, t) {
      return t || e === "solid-warning" || e === "primary"
        ? "filled"
        : "outline";
    }
    function m(e) {
      var t = e.actionFailure,
        n = e.actionText,
        a = e.actionType,
        i = e.children,
        l = e.contentText,
        m = e.failureText,
        p = e.isInputEmpty,
        _ = e.isRunningAction,
        f = e.onCancel,
        g = e.onSubmit,
        h = e.testidPrefix,
        y = e.tsNavigationData,
        C = u(
          function () {
            (o("WAWebModalManager").ModalManager.close(), f == null || f());
          },
          [f],
        ),
        b = t ? r("WAWebFbtCommon")("Try again") : n,
        v = s.jsx(r("WDSButtonGroup.react"), {
          width: "hug",
          orientation: "horizontal",
          primaryButtonProps: {
            variant: d(a, t),
            type: c(a, t),
            onPress: g,
            testid: h + "-action-button",
            disabled: p || _,
            loading: _,
            label: b,
          },
          tertiaryButtonProps: {
            variant: "outline",
            type: "default",
            onPress: C,
            testid: h + "-cancel-button",
            disabled: _,
            label: r("WAWebFbtCommon")("Cancel"),
          },
        }),
        S = t
          ? s.jsx(o("WAWebText.react").WAWebTextMuted, {
              testid: void 0,
              children: m,
            })
          : s.jsx(o("WAWebText.react").WAWebTextLarge, {
              testid: void 0,
              children: l,
            });
      return s.jsxs(o("WAWebModal.react").Modal, {
        testid: void 0,
        type: t
          ? o("WAWebModal.react").ModalTheme.Small
          : o("WAWebModal.react").ModalTheme.DeleteNewsletter,
        actions: v,
        overflow: "visible",
        tsNavigationData: y,
        children: [
          s.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: o("WAWebUISpacing").uiMargin.bottom10,
            children: S,
          }),
          t ? null : i,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
