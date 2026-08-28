__d(
  "Focus",
  [
    "cx",
    "CSS",
    "Event",
    "FocusEvent",
    "KeyStatus",
    "TooltipData",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      if ((t === void 0 && (t = !1), e)) {
        var n = r("ifRequired")(
          "VirtualCursorStatus",
          function (e) {
            return e.isVirtualCursorTriggered();
          },
          function () {
            return !1;
          },
        );
        t || o("KeyStatus").isKeyDown() || n ? m(e) : u(e);
      }
    }
    function u(e) {
      if (e) {
        o("CSS").addClass(e, "_5f0v");
        var t = r("Event").listen(e, "blur", function () {
          (e && o("CSS").removeClass(e, "_5f0v"), t.remove());
        });
        (o("TooltipData").suppress(e, !0),
          m(e),
          o("TooltipData").suppress(e, !1));
      }
    }
    function c(e, t, n) {
      return (
        n === void 0 && (n = { cleanupOnLeave: !0 }),
        o("CSS").addClass(e, "_5f0v"),
        o("FocusEvent").listen(
          e,
          function () {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return d.apply(void 0, [e, t].concat(r));
          },
          n,
        )
      );
    }
    function d(e, t, n) {
      o("CSS").addClass(e, "_5f0v");
      var a = r("ifRequired")(
          "FocusRing",
          function (e) {
            return e.usingKeyboardNavigation();
          },
          function () {
            return !0;
          },
        ),
        i = n && a;
      (o("CSS").conditionClass(t, "_3oxt", i),
        o("CSS").conditionClass(t, "_16jm", i));
    }
    function m(e) {
      try {
        ((e.tabIndex = e.tabIndex), e.focus());
      } catch (e) {}
    }
    ((l.set = e),
      (l.setWithoutOutline = u),
      (l.relocate = c),
      (l.performRelocation = d));
  },
  98,
);
