__d(
  "MAIBASelectedTextStore",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = {
        isFromMAIBAChat: !1,
        selectedText: null,
        selectedTextParentSurface: null,
        selectedTextSource: null,
      },
      c = { current: null },
      d = { current: new Set() },
      m = new Set();
    function p() {
      m.forEach(function (e) {
        return e();
      });
    }
    function _() {
      return u;
    }
    function f() {
      return c;
    }
    function g() {
      return d;
    }
    function h(e, t, n, r) {
      ((u = {
        isFromMAIBAChat: t,
        selectedText: e,
        selectedTextParentSurface: r != null ? r : null,
        selectedTextSource: n != null ? n : null,
      }),
        p());
    }
    function y() {
      ((u = {
        isFromMAIBAChat: !1,
        selectedText: null,
        selectedTextParentSurface: null,
        selectedTextSource: null,
      }),
        p());
    }
    function C() {
      y();
    }
    function b(e) {
      c.current = e;
    }
    function v(e) {
      d.current.add(e);
    }
    function S(e) {
      d.current.delete(e);
    }
    var R = new Set();
    function L(e) {
      return (
        R.add(e),
        function () {
          R.delete(e);
        }
      );
    }
    function E() {
      R.forEach(function (e) {
        return e();
      });
    }
    function k(e) {
      return (
        m.add(e),
        function () {
          m.delete(e);
        }
      );
    }
    function I() {
      return s(k, _, _);
    }
    ((l.getState = _),
      (l.getChatContainerRef = f),
      (l.getSelectableAreasRef = g),
      (l.setSelectedText = h),
      (l.clearSelectedText = y),
      (l.onMessageSent = C),
      (l.setChatContainerRef = b),
      (l.registerSelectableArea = v),
      (l.unregisterSelectableArea = S),
      (l.registerDismissCallback = L),
      (l.notifyDismissListeners = E),
      (l.subscribe = k),
      (l.useMAIBASelectedTextStore = I));
  },
  98,
);
