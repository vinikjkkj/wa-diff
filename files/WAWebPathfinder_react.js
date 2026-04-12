__d(
  "WAWebPathfinder.react",
  [
    "WAWebModalManager",
    "WAWebPathfinderApp",
    "WAWebPathfinderKeyboard",
    "WAWebPathfinderNavigation",
    "WAWebPathfinderUserTouch",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u() {
      var e, t, n, r;
      return (
        (e = o("useWAWebListener")).useListener(
          window,
          "click",
          (t = o("WAWebPathfinderUserTouch")).handleClick,
          { capture: !0 },
        ),
        e.useListener(window, "dblclick", t.handleDoubleClick, { capture: !0 }),
        e.useListener(window, "scroll", t.handleScroll, { capture: !0 }),
        e.useListener(window, "pointerdown", t.handlePointerDown, {
          capture: !0,
        }),
        e.useListener(window, "pointerup", t.handlePointerUp, { capture: !0 }),
        e.useListener(window, "pointercancel", t.handlePointerCancel, {
          capture: !0,
        }),
        e.useListener(
          window,
          "focusin",
          o("WAWebPathfinderKeyboard").handleFocusIn,
          { capture: !0 },
        ),
        e.useListener(
          window,
          "focusout",
          o("WAWebPathfinderKeyboard").handleFocusOut,
          { capture: !0 },
        ),
        e.useListener(
          window,
          "input",
          o("WAWebPathfinderKeyboard").handleInput,
          { capture: !0 },
        ),
        e.useListener(
          (n = o("WAWebModalManager")).ModalManager,
          "open_modal",
          (r = o("WAWebPathfinderApp")).handleAlertShown,
        ),
        e.useListener(n.ModalManager, "open_alert", r.handleAlertShown),
        e.useListener(n.ModalManager, "close_modal", r.handleAlertClosed),
        e.useListener(n.ModalManager, "close_alert", r.handleAlertClosed),
        s(function () {
          return o("WAWebPathfinderNavigation").initNavigationListener();
        }, []),
        null
      );
    }
    l.default = u;
  },
  98,
);
