__d(
  "cometTypeaheadKeyboardNavigationUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      var o, a;
      if (e.length === 0) {
        n(null, null);
        return;
      }
      var i =
        t != null
          ? e.findIndex(function (e) {
              return e.key === t;
            }) + 1
          : 0;
      i === e.length && (i = 0);
      var l =
        (o = (a = e[i]) == null ? void 0 : a.hasSecondaryAction) != null
          ? o
          : !1;
      n(e[i], l ? r : null);
    }
    function l(e, t, n, r) {
      var o, a;
      if (e.length === 0) {
        n(null, null);
        return;
      }
      var i =
        t != null
          ? e.findIndex(function (e) {
              return e.key === t;
            }) - 1
          : e.length - 1;
      i === -1 && (i = e.length - 1);
      var l =
        (o = (a = e[i]) == null ? void 0 : a.hasSecondaryAction) != null
          ? o
          : !1;
      n(e[i], l ? r : null);
    }
    function s(e, t, n, r) {
      if (e.length === 0) {
        n(null, !1);
        return;
      }
      if (r === !0) {
        var o = e.findIndex(function (e) {
          return e.key === t;
        });
        n(e[o], !1);
      } else l(e, t, n, !0);
    }
    function u(t, n, r, o) {
      if (t.length === 0) {
        r(null, !1);
        return;
      }
      if (o === !0) e(t, n, r, !1);
      else {
        var a = t.findIndex(function (e) {
          return e.key === n;
        });
        r(t[a], !0);
      }
    }
    ((i.moveDown = e), (i.moveUp = l), (i.moveLeft = s), (i.moveRight = u));
  },
  66,
);
