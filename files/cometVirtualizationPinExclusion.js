__d(
  "cometVirtualizationPinExclusion",
  ["FocusManager", "WeakRefApiUtils", "react"],
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
      return s(function (e) {
        e != null && d.add(e);
      }, []);
    }
    function g() {
      return s(function (e) {
        e != null && m.add(e);
      }, []);
    }
    function h(e) {
      return s(
        function (t) {
          t != null && p.set(t, e);
        },
        [e],
      );
    }
    function y(e) {
      if (e.localName !== "a") return !1;
      var t = e.getAttribute("href");
      return t != null && t !== "" && !t.startsWith("#");
    }
    function C(e) {
      for (
        var t = e instanceof Element ? e : null, n = !1, r = null;
        t != null;
      ) {
        var o;
        if (((r = r != null ? r : p.get(t)), (n = n || y(t)), d.has(t)))
          return { excluded: !0, reason: r != null ? r : "other" };
        if (n && m.has(t))
          return { excluded: !0, reason: r != null ? r : "other" };
        t = (o = t.parentElement) != null ? o : null;
      }
      return { excluded: !1, reason: r != null ? r : "other" };
    }
    function b(e) {
      return C(e).excluded;
    }
    function v(e) {
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
    function S(e, t, n) {
      if (
        e !== "click" ||
        !(t instanceof Element) ||
        !(n instanceof Element) ||
        !n.contains(t)
      )
        return !1;
      for (var r = t; r != null; ) {
        if (v(r)) return !1;
        if (r === n) return !0;
        r = r.parentElement;
      }
      return !1;
    }
    function R(e) {
      return C(e).reason;
    }
    function L(e, t, n) {
      return (
        e === "focus" &&
        t instanceof Node &&
        n instanceof Node &&
        !n.contains(t)
      );
    }
    function E(e) {
      return e === "focus" && o("FocusManager").isFocusingWithoutUserIntent();
    }
    function k(e, t) {
      var n = window.setTimeout(function () {
        var n = C(e);
        n.excluded || t(n.reason);
      }, 0);
      return function () {
        return window.clearTimeout(n);
      };
    }
    ((l.usePinExclusionRef = f),
      (l.useLinkPinExclusionRef = g),
      (l.useInteractionPinReasonRef = h),
      (l.getInteractionPinDecision = C),
      (l.isInteractionExcludedFromPin = b),
      (l.isNonInteractiveClickExcludedFromPin = S),
      (l.getInteractionPinReason = R),
      (l.isPortalFocusExcludedFromPin = L),
      (l.isProgrammaticFocusExcludedFromPin = E),
      (l.schedulePinAfterPendingHydration = k));
  },
  98,
);
