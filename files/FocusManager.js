__d(
  "FocusManager",
  ["getTabbableNodes"],
  function (t, n, r, o, a, i, l) {
    var e = !1,
      s = !1,
      u = !1,
      c = 500;
    function d() {
      try {
        var e = document.createElement("div");
        (e.addEventListener(
          "focus",
          function (e) {
            (e.preventDefault(), e.stopPropagation());
          },
          !0,
        ),
          e.focus(
            Object.defineProperty({}, "preventScroll", {
              get: function () {
                s = !0;
              },
            }),
          ));
      } catch (e) {}
    }
    function m(e) {
      for (
        var t = e.parentElement,
          n = [],
          r = document.scrollingElement || document.documentElement;
        t && t !== r;
      ) {
        var o = t,
          a = o.offsetHeight,
          i = o.offsetWidth;
        ((a < t.scrollHeight || i < t.scrollWidth) &&
          n.push([t, t.scrollTop, t.scrollLeft]),
          (t = t.parentElement));
      }
      return (r && n.push([r, r.scrollTop, r.scrollLeft]), n);
    }
    function p(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t],
          r = n[0],
          o = n[1],
          a = n[2];
        ((r.scrollTop = o), (r.scrollLeft = a));
      }
    }
    function _(e, t) {
      for (var n = Array.isArray(e) ? e : [e], r = 0; r < n.length; r++) {
        var o = t.DO_NOT_USE_queryAllNodes(n[r]);
        if (o) return o;
      }
      return null;
    }
    function f(e, t) {
      for (var n = Array.isArray(e) ? e : [e], r = 0; r < n.length; r++) {
        var o = t.DO_NOT_USE_queryFirstNode(n[r]);
        if (o) return o;
      }
      return null;
    }
    function g(e, t, n) {
      var r = n || {},
        o = r.focusWithAutoFocus,
        a = r.focusWithoutUserIntent,
        i = r.preventScroll,
        l = f(e, t);
      l != null &&
        C(l, {
          preventScroll: i,
          focusWithoutUserIntent: a,
          focusWithAutoFocus: o,
        });
    }
    function h() {
      return e;
    }
    function y(e) {
      return e._focusWithAutoFocus === !0;
    }
    function C(t, n) {
      var r = n || {},
        o = r.focusWithAutoFocus,
        a = r.focusWithoutUserIntent,
        i = r.preventScroll;
      if (t !== null) {
        u || ((u = !0), d());
        var l = t._tabIndexState;
        if (l && l.canTab === !1) return;
        var _ = l ? l.value : t.tabIndex;
        t.tabIndex = -1;
        var f = e,
          g = i || !1;
        o === !0 &&
          ((t._focusWithAutoFocus = !0),
          window.setTimeout(function () {
            t._focusWithAutoFocus = !1;
          }, c));
        try {
          e = a || !1;
          var h = t.__lexicalEditor;
          if (h !== void 0) h.focus();
          else if (!g) E(t);
          else if (s) E(t, { preventScroll: !0 });
          else {
            var y = m(t);
            (E(t), p(y));
          }
        } catch (e) {
        } finally {
          e = f;
        }
        t.tabIndex = _;
      }
    }
    function b(e, t, n) {
      var o = r("getTabbableNodes")(e, t),
        a = o[0],
        i = o[2],
        l = o[3],
        s = o[4];
      s !== null && s !== i && a && C(a[l + 1], { preventScroll: n });
    }
    function v(e, t, n) {
      var o = r("getTabbableNodes")(e, t),
        a = o[0],
        i = o[1],
        l = o[3],
        s = o[4];
      s !== null && s !== i && a && C(a[l - 1], { preventScroll: n });
    }
    function S(e, t, n, o, a) {
      var i = r("getTabbableNodes")(e, t),
        l = i[0],
        s = i[1],
        u = i[2],
        c = i[3],
        d = i[4];
      d === null ||
        l === null ||
        (d === u
          ? a != null
            ? a()
            : o === !0 && (C(s), n.preventDefault(), n.stopPropagation())
          : (C(l[c + 1]), n.preventDefault(), n.stopPropagation()));
    }
    function R(e, t, n, o, a) {
      var i = r("getTabbableNodes")(e, t),
        l = i[0],
        s = i[1],
        u = i[2],
        c = i[3],
        d = i[4];
      d === null ||
        l === null ||
        (d === s
          ? a != null
            ? a()
            : o === !0 && (C(u), n.preventDefault(), n.stopPropagation())
          : (C(l[c - 1]), n.preventDefault(), n.stopPropagation()));
    }
    function L(e, t) {
      HTMLElement.prototype.focus.call(e, t);
    }
    var E = function (t, n) {
      "focus" in t ? t.focus(n) : L(t, n);
    };
    ((l.getAllNodesFromOneOrManyQueries = _),
      (l.getFirstNodeFromOneOrManyQueries = f),
      (l.focusFirst = g),
      (l.isFocusingWithoutUserIntent = h),
      (l.wasElementAutoFocused = y),
      (l.focusElement = C),
      (l.focusNext = b),
      (l.focusPrevious = v),
      (l.focusNextContained = S),
      (l.focusPreviousContained = R));
  },
  98,
);
