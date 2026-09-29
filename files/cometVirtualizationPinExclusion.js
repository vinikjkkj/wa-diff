__d(
  "cometVirtualizationPinExclusion",
  [
    "FocusManager",
    "WeakRefApiUtils",
    "justknobx",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback,
      u = o("WeakRefApiUtils").getNativeWeakSetOrFallback(),
      c = o("WeakRefApiUtils").getNativeWeakMapOrFallback(),
      d = new u(),
      m = new u(),
      p = new c(),
      _ = new Set([
        "button",
        "checkbox",
        "combobox",
        "link",
        "menuitem",
        "menuitemcheckbox",
        "menuitemradio",
        "option",
        "radio",
        "scrollbar",
        "searchbox",
        "slider",
        "spinbutton",
        "switch",
        "tab",
        "textbox",
        "treeitem",
      ]);
    function f() {
      return g;
    }
    function g(e) {
      e != null && d.add(e);
    }
    function h() {
      return y;
    }
    function y(e) {
      e != null && m.add(e);
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function (n) {
              n != null && p.set(n, e);
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function b(e) {
      if (e.localName !== "a") return !1;
      var t = e.getAttribute("href");
      return t != null && t !== "" && !t.startsWith("#");
    }
    function v(e) {
      for (
        var t = e instanceof Element ? e : null, n = !1, r = null;
        t != null;
      ) {
        var o;
        if (((r = r != null ? r : p.get(t)), (n = n || b(t)), d.has(t)))
          return { excluded: !0, reason: r != null ? r : "other" };
        if (n && m.has(t))
          return { excluded: !0, reason: r != null ? r : "other" };
        t = (o = t.parentElement) != null ? o : null;
      }
      return { excluded: !1, reason: r != null ? r : "other" };
    }
    function S(e) {
      return v(e).excluded;
    }
    function R(e) {
      var t = e.getAttribute("role");
      return (t != null && _.has(t)) ||
        e.localName === "a" ||
        e.localName === "button" ||
        e.localName === "input" ||
        e.localName === "label" ||
        e.localName === "select" ||
        e.localName === "summary" ||
        e.localName === "textarea"
        ? !0
        : e instanceof HTMLElement && (e.isContentEditable || e.tabIndex >= 0);
    }
    function L(e, t, n) {
      if (
        !r("justknobx")._("6042") ||
        e !== "click" ||
        !(t instanceof Element) ||
        !(n instanceof Element) ||
        !n.contains(t)
      )
        return !1;
      for (var o = t; o != null; ) {
        if (R(o)) return !1;
        if (o === n) return !0;
        o = o.parentElement;
      }
      return !1;
    }
    function E(e) {
      return v(e).reason;
    }
    function k(e, t, n) {
      return (
        e === "focus" &&
        t instanceof Node &&
        n instanceof Node &&
        !n.contains(t)
      );
    }
    function I(e) {
      return e === "focus" && o("FocusManager").isFocusingWithoutUserIntent();
    }
    function T(e, t) {
      var n = window.setTimeout(function () {
        var n = v(e);
        n.excluded || t(n.reason);
      }, 0);
      return function () {
        return window.clearTimeout(n);
      };
    }
    ((l.usePinExclusionRef = f),
      (l.useLinkPinExclusionRef = h),
      (l.useInteractionPinReasonRef = C),
      (l.isInteractionExcludedFromPin = S),
      (l.isNonInteractiveClickExcludedFromPin = L),
      (l.getInteractionPinReason = E),
      (l.isPortalFocusExcludedFromPin = k),
      (l.isProgrammaticFocusExcludedFromPin = I),
      (l.schedulePinAfterPendingHydration = T));
  },
  98,
);
