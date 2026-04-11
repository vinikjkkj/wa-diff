__d(
  "FocusTableUtils",
  [
    "FocusManager",
    "filterNulls",
    "focusKeyboardEventPropagation",
    "focusScopeQueries",
    "setElementCanTab",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.length === 1;
    }
    function s(e) {
      return e instanceof HTMLElement || e instanceof SVGElement;
    }
    function u(e, t) {
      for (
        var n,
          o,
          a,
          i = t instanceof HTMLElement && t.id !== "" ? t.id : null,
          l = new Set(
            t instanceof HTMLElement
              ? r("filterNulls")(
                  [].concat(
                    ((n = t.getAttribute("aria-labelledby")) != null
                      ? n
                      : ""
                    ).split(" "),
                    ((o = t.getAttribute("aria-describedby")) != null
                      ? o
                      : ""
                    ).split(" "),
                    ((a = t.getAttribute("aria-owns")) != null ? a : "").split(
                      " ",
                    ),
                    [t.getAttribute("aria-errormessage")],
                  ),
                ).filter(function (e) {
                  return e !== "";
                })
              : [],
          ),
          u = document.createTreeWalker(
            e,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
            {
              acceptNode: function (n) {
                return n === t ||
                  (n.nodeType === Node.TEXT_NODE &&
                    n.textContent.trim() === "") ||
                  (s(n) && l.has(n.id)) ||
                  (s(n) && n.getAttribute("aria-hidden") === "true") ||
                  (n instanceof HTMLLabelElement &&
                    (n.htmlFor === i || n.contains(t)))
                  ? NodeFilter.FILTER_REJECT
                  : n.hasChildNodes()
                    ? NodeFilter.FILTER_SKIP
                    : s(n) &&
                        n.getAttribute("aria-label") == null &&
                        n.getAttribute("aria-labelledby") == null &&
                        n.getAttribute("aria-describedby") == null &&
                        n.getAttribute("alt") == null &&
                        n.getAttribute("title") == null
                      ? NodeFilter.FILTER_REJECT
                      : NodeFilter.FILTER_ACCEPT;
              },
            },
          ),
          c = u.currentNode;
        c === e;
      )
        c = u.nextNode();
      return c != null;
    }
    var c = new Set(["button", "checkbox", "radio", "reset", "submit"]),
      d = new Set(["checkbox", "link", "switch", "radio", "button"]),
      m = new Set(["a", "button"]);
    function p(e) {
      var t = e.getAttribute("role"),
        n = e.tagName.toLowerCase(),
        r = e instanceof HTMLInputElement ? e.type : null;
      return !!(
        (e instanceof HTMLInputElement && c.has(r)) ||
        d.has(t) ||
        m.has(n)
      );
    }
    function _(e) {
      for (
        var t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: function (t) {
              return t instanceof HTMLElement && p(t)
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          }),
          r = n.nextNode();
        r;
      )
        (t.push(r), (r = n.nextNode()));
      return t;
    }
    function f(e, t) {
      if (!t) return null;
      var n = e.DO_NOT_USE_queryFirstNode(
        o("focusScopeQueries").tableCellScopeQuery,
      );
      if (n == null) return null;
      var r = _(n),
        a = r != null ? r : [],
        i = a[0],
        l = babelHelpers.arrayLikeToArray(a).slice(1);
      if (i != null && l.length === 0 && !u(n, i)) return i;
    }
    function g(e, t, n) {
      if (t) {
        var r = t.scopeRef.current;
        if (r !== null) {
          var a,
            i,
            l = f(r, (a = t.allowWithinCellNavigation) != null ? a : !1),
            s =
              (i = l != null ? l : r.DO_NOT_USE_queryFirstNode(e)) != null
                ? i
                : t.focusStaticCells === !0
                  ? r.DO_NOT_USE_queryFirstNode(
                      o("focusScopeQueries").tableCellScopeQuery,
                    )
                  : null;
          s !== null &&
            (document.activeElement != null &&
              o("setElementCanTab").setElementCanTab(
                document.activeElement,
                !1,
                t.focusStaticCells,
              ),
            o("setElementCanTab").setElementCanTab(s, !0, t.focusStaticCells),
            o("FocusManager").focusElement(s),
            n != null &&
              (n.preventDefault(),
              o(
                "focusKeyboardEventPropagation",
              ).stopFocusKeyboardEventPropagation(n)));
        }
      }
    }
    function h(e, t, n, r, o) {
      var a = r[n],
        i = v(a, o),
        l = 0,
        s,
        u,
        c;
      do {
        if (
          ((s = t - l),
          (s >= 0 && ((c = C(a, s, o, e)), c)) ||
            ((u = t + l), u <= i && ((c = C(a, u, o, e)), c)))
        )
          return c;
        l++;
      } while (s >= 0 && u <= i);
      return null;
    }
    function y(e, t, n, r, o, a, i, l) {
      var s = t.onNavigate;
      if (s) {
        var u = !1,
          c = k(o, r, l),
          d = c[1],
          m = T(t, r, i),
          p = m[0],
          _ = m[1];
        if (p === null) return !1;
        var f = {
          currentCellIndex: d,
          currentRowIndex: _,
          event: n,
          focusCell: function (t, r) {
            g(r || a, t, n);
          },
          getCell: function (t, n) {
            var e = p[t];
            return e != null ? C(e, n, l) : null;
          },
          getCellByTag: function (t) {
            var e = h(t, d, _, p, l);
            if (e) return e;
            for (var n = p.length, r = _ + 1; ; ) {
              if (r === _) return null;
              if (r > n - 1) {
                r = 0;
                continue;
              }
              if (((e = h(t, d, r, p, l)), e)) return e;
              r++;
            }
            return null;
          },
          preventDefault: function () {
            u = !0;
          },
          type: e,
        };
        if ((s(f), u)) return !0;
      }
      return !1;
    }
    function C(e, t, n, r) {
      for (
        var o = e.getChildContextValues(n).filter(function (e) {
            return e != null && (r === void 0 || e.tag === r);
          }),
          a = 0,
          i = 0;
        i < o.length;
        i++
      ) {
        var l = o[i];
        if (l) {
          var s;
          if (((a += (s = l.colSpan) != null ? s : 1), a > t)) return l;
        }
      }
      return null;
    }
    function b(e, t, n, r, o) {
      var a = C(t, n, r);
      if (a !== null) {
        g(e, a, o);
        return;
      }
      var i = t.getChildContextValues(r).filter(Boolean);
      i.length > 0 && g(e, i[i.length - 1], o);
    }
    function v(e, t) {
      for (
        var n,
          r = (n = e.getChildContextValues(t).filter(Boolean)) != null ? n : [],
          o = 0,
          a = 0;
        a < r.length;
        a++
      ) {
        var i,
          l = r[a],
          s = l && ((i = l.colSpan) != null ? i : 1);
        o += s;
      }
      return o;
    }
    function S(e, t, n) {
      for (var r = t.length - 1; r >= 0; r--) {
        var o = t[r],
          a = C(o, e, n);
        if (a !== null) return r + 1;
      }
      return 0;
    }
    function R(e, t, n) {
      for (var r = 0; r < e.length; r++) {
        var o = e[r],
          a = C(o, t, n);
        if (a !== null) return r;
      }
      return -1;
    }
    function L(e, t) {
      for (var n = 0, r = 0; r < e.length; r++) {
        var o = e[r];
        if (o !== null) {
          if (o.scopeRef.current === t) return [r, r + n];
          var a = o.colSpan;
          typeof a == "number" && (n += a - 1);
        }
      }
      return [-1, -1];
    }
    function E(e, t) {
      return e.getChildContextValues(t).filter(Boolean);
    }
    function k(e, t, n) {
      var r = E(t, n);
      if (r.length > 0) {
        var o = L(r, e),
          a = o[0],
          i = o[1];
        return [r, a, i];
      }
      return [null, -1, -1];
    }
    function I(e, t, n) {
      if (e) {
        var r = e.scopeRef.current;
        if (r !== null) {
          for (
            var o = r.getChildContextValues(t), a = [], i = 0;
            i < o.length;
            i++
          ) {
            var l = o[i];
            if (l) {
              var s,
                u,
                c = (s = l.scopeRef) == null ? void 0 : s.current,
                d = (u = n == null ? void 0 : n(l)) != null ? u : !0;
              c && d && a.push(c);
            }
          }
          return a;
        }
      }
      return null;
    }
    function T(e, t, n, r) {
      var o = I(e, n, r);
      if (t && o && o.length > 0) {
        var a = o.indexOf(t);
        return [o, a];
      }
      return [null, -1];
    }
    function D(e) {
      var t = e.altKey,
        n = e.ctrlKey,
        r = e.metaKey,
        o = e.shiftKey;
      return t === !0 || n === !0 || r === !0 || o === !0;
    }
    ((l.isPrintableCharacter = e),
      (l.isArrowKeyLessOperationElement = p),
      (l.getCellSingleInteractiveContentNode = f),
      (l.focusCell = g),
      (l.handleOnNavigateBehavior = y),
      (l.focusCellByColumnIndex = b),
      (l.getTotalSpan = v),
      (l.getLastRowNumInColumn = S),
      (l.getFirstRowIndexInColumn = R),
      (l.getRowCells = E),
      (l.getRowCellsWithIndexes = k),
      (l.getRows = I),
      (l.getRowsWithIndex = T),
      (l.hasModifierKey = D));
  },
  98,
);
