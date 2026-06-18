__d(
  "LexicalUtils.prod",
  ["Lexical", "LexicalSelection"],
  function $module_LexicalUtils_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function n(e) {
      var n = new URL("https://lexical.dev/docs/error"),
        o = new URLSearchParams();
      o.append("code", e);
      for (
        var _len = arguments.length,
          t = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        t[_key - 1] = arguments[_key];
      }
      for (var _e of t) o.append("v", _e);
      throw (
        (n.search = o.toString()),
        Error(
          "Minified Lexical error #" +
            e +
            "; visit " +
            n.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        )
      );
    }
    function o(e) {
      return e + "px";
    }
    var r = { attributes: !0, characterData: !0, childList: !0, subtree: !0 };
    function i(i, s, l) {
      var a = null,
        c = null,
        d = null,
        u = [];
      var g = document.createElement("div");
      function f() {
        (null === a && n(182), null === c && n(183));
        var _c$getBoundingClientR = c.getBoundingClientRect(),
          t = _c$getBoundingClientR.left,
          r = _c$getBoundingClientR.top,
          d = require("LexicalSelection").createRectsFromDOMRange(i, s);
        var f, p;
        g.isConnected || ((p = g), (f = c).insertBefore(p, f.firstChild));
        var $ = !1;
        for (var _e2 = 0; _e2 < d.length; _e2++) {
          var _n = d[_e2],
            _i = u[_e2] || document.createElement("div"),
            _s = _i.style;
          "absolute" !== _s.position && ((_s.position = "absolute"), ($ = !0));
          var _l = o(_n.left - t);
          _s.left !== _l && ((_s.left = _l), ($ = !0));
          var _a = o(_n.top - r);
          _s.top !== _a && ((_i.style.top = _a), ($ = !0));
          var _c = o(_n.width);
          _s.width !== _c && ((_i.style.width = _c), ($ = !0));
          var _f = o(_n.height);
          (_s.height !== _f && ((_i.style.height = _f), ($ = !0)),
            _i.parentNode !== g && (g.append(_i), ($ = !0)),
            (u[_e2] = _i));
        }
        for (; u.length > d.length; ) u.pop();
        $ && l(u);
      }
      function p() {
        ((c = null),
          (a = null),
          null !== d && d.disconnect(),
          (d = null),
          g.remove());
        for (var _e3 of u) _e3.remove();
        u = [];
      }
      g.style.position = "relative";
      var $ = i.registerRootListener(function e() {
        var n = i.getRootElement();
        if (null === n) return p();
        var o = n.parentElement;
        if (!require("Lexical").isHTMLElement(o)) return p();
        (p(),
          (a = n),
          (c = o),
          (d = new MutationObserver(function (t) {
            var n = i.getRootElement(),
              o = n && n.parentElement;
            if (n !== a || o !== c) return e();
            for (var _e4 of t) if (!g.contains(_e4.target)) return f();
          })),
          d.observe(o, r),
          f());
      });
      return function () {
        ($(), p());
      };
    }
    function s(e, n, o, r) {
      if ("text" !== n.type && require("Lexical").$isElementNode(o)) {
        var _i2 = require("Lexical").$getDOMSlot(o, r, e);
        return [_i2.element, _i2.getFirstChildOffset() + n.offset];
      }
      return [
        (require("Lexical").$isTextNode(o)
          ? require("Lexical").$getDOMTextNode(o, r, e)
          : require("Lexical").getDOMTextNode(r)) || r,
        n.offset,
      ];
    }
    function l(e) {
      for (var _t of e) {
        var _e5 = _t.style;
        ("Highlight" !== _e5.background && (_e5.background = "Highlight"),
          "HighlightText" !== _e5.color && (_e5.color = "HighlightText"),
          _e5.marginTop !== o(-1.5) && (_e5.marginTop = o(-1.5)),
          _e5.paddingTop !== o(4) && (_e5.paddingTop = o(4)),
          _e5.paddingBottom !== o(0) && (_e5.paddingBottom = o(0)));
      }
    }
    function a(e, n) {
      if (n === void 0) {
        n = l;
      }
      var o = null,
        r = null,
        a = null,
        c = null,
        d = null,
        u = null,
        g = function g() {};
      function f(l) {
        l.read(
          function () {
            var l = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(l))
              return (
                (o = null),
                (a = null),
                (c = null),
                (u = null),
                g(),
                void (g = function g() {})
              );
            var _ref = (function (e) {
                var t = e.getStartEndPoints();
                return e.isBackward() ? [t[1], t[0]] : t;
              })(l),
              f = _ref[0],
              p = _ref[1],
              $ = f.getNode(),
              h = $.getKey(),
              m = f.offset,
              S = p.getNode(),
              C = S.getKey(),
              x = p.offset,
              N = e.getElementByKey(h),
              E = e.getElementByKey(C),
              y = null === o || N !== r || m !== a || h !== o.getKey(),
              R = null === c || E !== d || x !== u || C !== c.getKey();
            if ((y || R) && null !== N && null !== E) {
              var _t2 = (function (e, t, n, o, r, i, l) {
                var a = (
                  e._window ? e._window.document : document
                ).createRange();
                return (
                  a.setStart.apply(a, s(e, t, n, o)),
                  a.setEnd.apply(a, s(e, r, i, l)),
                  a
                );
              })(e, f, $, N, p, S, E);
              (g(), (g = i(e, _t2, n)));
            }
            ((o = $), (r = N), (a = m), (c = S), (d = E), (u = x));
          },
          { editor: e },
        );
      }
      return (
        f(e.getEditorState()),
        require("Lexical").mergeRegister(
          e.registerUpdateListener(function (_ref2) {
            var e = _ref2.editorState;
            return f(e);
          }),
          function () {
            g();
          },
        )
      );
    }
    function c(e, t) {
      for (var _n2 of t) if (e.type.startsWith(_n2)) return !0;
      return !1;
    }
    function d(e, t) {
      return p("next", e, t);
    }
    function* u(e, n) {
      for (var _o of p("next", e, n)) {
        yield _o;
        var _e6 = _o.node,
          _r = _o.depth;
        if (require("Lexical").$isSlotHost(_e6) && !_e6.is(n))
          for (var _n3 of require("Lexical").$getSlotNames(_e6)) {
            var _o2 = require("Lexical").$getSlot(_e6, _n3);
            null !== _o2 && (yield* g(_o2, _r + 1));
          }
      }
    }
    function* g(e, n) {
      yield { depth: n, node: e };
      var o = n + 1;
      if (require("Lexical").$isSlotHost(e))
        for (var _n4 of require("Lexical").$getSlotNames(e)) {
          var _r2 = require("Lexical").$getSlot(e, _n4);
          null !== _r2 && (yield* g(_r2, o));
        }
      if (require("Lexical").$isElementNode(e))
        for (var _t3 of e.getChildren()) yield* g(_t3, o);
    }
    function f(e, n) {
      var o = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(
        require("Lexical").$getSiblingCaret(e, n),
      );
      return o && o[0];
    }
    function p(e, n, o) {
      var r = require("Lexical").$getRoot(),
        i = n || r,
        s = require("Lexical").$isElementNode(i)
          ? require("Lexical").$getChildCaret(i, e)
          : require("Lexical").$getSiblingCaret(i, e),
        l = $(i),
        a = o
          ? require("Lexical").$getAdjacentChildCaret(
              require("Lexical").$getChildCaretOrSelf(
                require("Lexical").$getSiblingCaret(o, e),
              ),
            ) || f(o, e)
          : f(i, e);
      var c = l;
      return require("Lexical").makeStepwiseIterator({
        hasNext: function hasNext(e) {
          return null !== e;
        },
        initial: s,
        map: function map(e) {
          return { depth: c, node: e.origin };
        },
        step: function step(e) {
          if (e.isSameNodeCaret(a)) return null;
          require("Lexical").$isChildCaret(e) && c++;
          var n = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(e);
          return !n || n[0].isSameNodeCaret(a) ? null : ((c += n[1]), n[0]);
        },
      });
    }
    function $(e) {
      var n = -1;
      for (
        var _o3 = e;
        null !== _o3;
        _o3 =
          (_o3$getParent = _o3.getParent()) != null
            ? _o3$getParent
            : require("Lexical").$getSlotHost(_o3)
      ) {
        var _o3$getParent;
        n++;
      }
      return n;
    }
    function h(e, t) {
      return p("previous", e, t);
    }
    function* m(e, n) {
      var o = [];
      for (var _r3 of p("previous", e, n)) {
        for (; o.length > 0 && _r3.depth <= o[o.length - 1].depth; ) {
          var _e7 = o.pop();
          yield* S(_e7.node, _e7.depth + 1);
        }
        yield _r3;
        var _e8 = _r3.node,
          _i3 = _r3.depth;
        require("Lexical").$isSlotHost(_e8) &&
          require("Lexical").$getSlotNames(_e8).length > 0 &&
          !_e8.is(n) &&
          o.push({ depth: _i3, node: _e8 });
      }
      for (; o.length > 0; ) {
        var _e9 = o.pop();
        yield* S(_e9.node, _e9.depth + 1);
      }
    }
    function* S(e, n) {
      var o = require("Lexical").$getSlotNames(e);
      for (var _r4 = o.length - 1; _r4 >= 0; _r4--) {
        var _i4 = require("Lexical").$getSlot(e, o[_r4]);
        null !== _i4 && (yield* C(_i4, n));
      }
    }
    function* C(e, n) {
      yield { depth: n, node: e };
      var o = n + 1;
      if (require("Lexical").$isElementNode(e)) {
        var _t4 = e.getChildren();
        for (var _e0 = _t4.length - 1; _e0 >= 0; _e0--) yield* C(_t4[_e0], o);
      }
      require("Lexical").$isSlotHost(e) && (yield* S(e, o));
    }
    function x(e, o, r) {
      var i = require("Lexical").$getCaretInDirection(o, "next");
      (require("Lexical").$isTextPointCaret(i) &&
        (0 === i.offset
          ? (i = require("Lexical")
              .$getSiblingCaret(i.origin, "previous")
              .getFlipped())
          : i.offset === i.origin.getTextContentSize() &&
            (i = require("Lexical").$getSiblingCaret(i.origin, "next"))),
        i.origin.is(e) &&
          (require("Lexical").$isSiblingCaret(i) ||
            n(342, e.getKey(), e.getType()),
          (i = require("Lexical").$rewindSiblingCaret(i))),
        (e.is(i.getNodeAtCaret()) || e.is(i.getFlipped().getNodeAtCaret())) &&
          e.remove(!0));
      for (
        var _e1 = i;
        _e1;
        _e1 = require("Lexical").$splitAtPointCaretNext(_e1, r)
      )
        i = _e1;
      return (
        require("Lexical").$isTextPointCaret(i) && n(283),
        i.insert(
          e.isInline()
            ? require("Lexical").$createParagraphNode().append(e)
            : e,
        ),
        require("Lexical").$getCaretInDirection(
          require("Lexical").$getSiblingCaret(e.getLatest(), "next"),
          o.direction,
        )
      );
    }
    function N(e, t) {
      return null !== e && Object.getPrototypeOf(e).constructor.name === t.name;
    }
    var E =
      !(require("Lexical").IS_FIREFOX || !require("Lexical").CAN_USE_DOM) &&
      void 0;
    function y(e, n, o) {
      var r = !1;
      var _loop = function _loop(_i5) {
        n(_i5)
          ? null !== o && o(_i5)
          : ((r = !0),
            require("Lexical").$isElementNode(_i5) &&
              y(
                _i5,
                n,
                o ||
                  function (e) {
                    return _i5.insertAfter(e);
                  },
              ),
            _i5.remove());
      };
      for (var _i5 of R(e)) {
        _loop(_i5);
      }
      return r;
    }
    function R(e) {
      return I(require("Lexical").$getChildCaret(e, "previous"));
    }
    function I(e) {
      return require("Lexical").makeStepwiseIterator({
        hasNext: require("Lexical").$isSiblingCaret,
        initial: e.getAdjacentCaret(),
        map: function map(e) {
          return e.origin.getLatest();
        },
        step: function step(e) {
          return e.getAdjacentCaret();
        },
      });
    }
    function A(e, n) {
      var _n$getFirstDescendant;
      if (0 !== e.offset) return !1;
      var o =
          (_n$getFirstDescendant = n.getFirstDescendant()) != null
            ? _n$getFirstDescendant
            : n,
        r = e.getNode();
      return (
        r === o ||
        (require("Lexical").$isElementNode(r) && r.getFirstDescendant() === o)
      );
    }
    function v(n, o) {
      var _o$getLastDescendant;
      if (!require("LexicalSelection").$isAtNodeEnd(n)) return !1;
      var r =
          (_o$getLastDescendant = o.getLastDescendant()) != null
            ? _o$getLastDescendant
            : o,
        i = n.getNode();
      return (
        i === r ||
        (require("Lexical").$isElementNode(i) && i.getLastDescendant() === r)
      );
    }
    ((exports.$findMatchingParent = require("Lexical").$findMatchingParent),
      (exports.$getAdjacentSiblingOrParentSiblingCaret =
        require("Lexical").$getAdjacentSiblingOrParentSiblingCaret),
      (exports.$splitNode = require("Lexical").$splitNode),
      (exports.CAN_USE_BEFORE_INPUT = require("Lexical").CAN_USE_BEFORE_INPUT),
      (exports.CAN_USE_DOM = require("Lexical").CAN_USE_DOM),
      (exports.IS_ANDROID = require("Lexical").IS_ANDROID),
      (exports.IS_ANDROID_CHROME = require("Lexical").IS_ANDROID_CHROME),
      (exports.IS_APPLE = require("Lexical").IS_APPLE),
      (exports.IS_APPLE_WEBKIT = require("Lexical").IS_APPLE_WEBKIT),
      (exports.IS_CHROME = require("Lexical").IS_CHROME),
      (exports.IS_FIREFOX = require("Lexical").IS_FIREFOX),
      (exports.IS_IOS = require("Lexical").IS_IOS),
      (exports.IS_SAFARI = require("Lexical").IS_SAFARI),
      (exports.addClassNamesToElement =
        require("Lexical").addClassNamesToElement),
      (exports.isBlockDomNode = require("Lexical").isBlockDomNode),
      (exports.isHTMLAnchorElement = require("Lexical").isHTMLAnchorElement),
      (exports.isHTMLElement = require("Lexical").isHTMLElement),
      (exports.isInlineDomNode = require("Lexical").isInlineDomNode),
      (exports.mergeRegister = require("Lexical").mergeRegister),
      (exports.removeClassNamesFromElement =
        require("Lexical").removeClassNamesFromElement),
      (exports.$descendantsMatching = function (e, n) {
        var o = [],
          r = Array.from(e).reverse();
        for (var _e10 = r.pop(); void 0 !== _e10; _e10 = r.pop())
          if (n(_e10)) o.push(_e10);
          else if (require("Lexical").$isElementNode(_e10))
            for (var _t5 of R(_e10)) r.push(_t5);
        return o;
      }),
      (exports.$dfs = function (e, t) {
        return Array.from(d(e, t));
      }),
      (exports.$dfsIterator = d),
      (exports.$dfsWithSlots = function (e, t) {
        return Array.from(u(e, t));
      }),
      (exports.$dfsWithSlotsIterator = u),
      (exports.$filter = function (e, t) {
        var n = [];
        for (var _o4 = 0; _o4 < e.length; _o4++) {
          var _r5 = t(e[_o4]);
          null !== _r5 && n.push(_r5);
        }
        return n;
      }),
      (exports.$firstToLastIterator = function (e) {
        return I(require("Lexical").$getChildCaret(e, "next"));
      }),
      (exports.$getAdjacentCaret = function (e) {
        return e ? e.getAdjacentCaret() : null;
      }),
      (exports.$getDepth = $),
      (exports.$getNearestBlockElementAncestorOrThrow = function (e) {
        var o = require("Lexical").$findMatchingParent(e, function (e) {
          return require("Lexical").$isElementNode(e) && !e.isInline();
        });
        return (require("Lexical").$isElementNode(o) || n(4, e.__key), o);
      }),
      (exports.$getNearestNodeOfType = function (e, t) {
        var n = e;
        for (; null != n; ) {
          if (n instanceof t) return n;
          n = n.getParent();
        }
        return null;
      }),
      (exports.$getNextRightPreorderNode = function (e) {
        var n = require("Lexical").$getChildCaretOrSelf(
            require("Lexical").$getSiblingCaret(e, "previous"),
          ),
          o = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(
            n,
            "root",
          );
        return o && o[0].origin;
      }),
      (exports.$getNextSiblingOrParentSibling = function (e) {
        var n = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(
          require("Lexical").$getSiblingCaret(e, "next"),
        );
        return n && [n[0].origin, n[1]];
      }),
      (exports.$handleIndentAndOutdent = function (e) {
        var n = require("Lexical").$getSelection();
        if (!require("Lexical").$isRangeSelection(n)) return !1;
        var o = new Set(),
          r = n.getNodes();
        for (var _n5 = 0; _n5 < r.length; _n5++) {
          var _i6 = r[_n5],
            _s2 = _i6.getKey();
          if (o.has(_s2)) continue;
          var _l2 = require("Lexical").$findMatchingParent(_i6, function (e) {
            return require("Lexical").$isElementNode(e) && !e.isInline();
          });
          if (null === _l2) continue;
          var _a2 = _l2.getKey();
          _l2.canIndent() && !o.has(_a2) && (o.add(_a2), e(_l2));
        }
        return o.size > 0;
      }),
      (exports.$insertFirst = function (e, n) {
        require("Lexical").$getChildCaret(e, "next").insert(n);
      }),
      (exports.$insertNodeIntoLeaf = function (e) {
        var n = require("Lexical").$getSelection();
        if (!require("Lexical").$isRangeSelection(n))
          return void (n && n.insertNodes([e]));
        var o = require("Lexical").$caretRangeFromSelection(n);
        var r = require("Lexical").$getCaretRangeInDirection(
          require("Lexical").$removeTextFromCaretRange(o),
          "next",
        ).anchor;
        if (require("Lexical").$isTextPointCaret(r)) {
          var _e11 = require("Lexical").$splitAtPointCaretNext(r);
          if (!_e11) return;
          r = _e11;
        }
        var i = r.getFlipped();
        (i.insert(e),
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCaretRange(i, i),
          ));
      }),
      (exports.$insertNodeToNearestRoot = function (e) {
        var n =
          require("Lexical").$getSelection() ||
          require("Lexical").$getPreviousSelection();
        var o;
        if (require("Lexical").$isRangeSelection(n))
          o = require("Lexical").$caretFromPoint(n.focus, "next");
        else {
          if (null != n) {
            var _e12 = n.getNodes(),
              _r6 = _e12[_e12.length - 1];
            _r6 && (o = require("Lexical").$getSiblingCaret(_r6, "next"));
          }
          o =
            o ||
            require("Lexical")
              .$getChildCaret(require("Lexical").$getRoot(), "previous")
              .getFlipped()
              .insert(require("Lexical").$createParagraphNode());
        }
        var r = x(e, o),
          i = require("Lexical").$getAdjacentChildCaret(r),
          s = require("Lexical").$isChildCaret(i)
            ? require("Lexical").$normalizeCaret(i)
            : r;
        return (
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCollapsedCaretRange(s),
          ),
          e.getLatest()
        );
      }),
      (exports.$insertNodeToNearestRootAtCaret = x),
      (exports.$isAtEndOfNode = v),
      (exports.$isAtStartOfNode = A),
      (exports.$isBlockFullySelected = function (e, n) {
        var o = require("Lexical").$getCaretRangeInDirection(
            require("Lexical").$isRangeSelection(n)
              ? require("Lexical").$caretRangeFromSelection(n)
              : n,
            "next",
          ),
          r = require("Lexical").$getSlotFrame(o.anchor.origin),
          i = require("Lexical").$getSlotFrame(e.getLatest());
        if (null === r ? null !== i : !r.is(i)) return !1;
        var s = require("Lexical").$normalizeCaret(
            require("Lexical").$getChildCaret(e, "next"),
          ),
          l = require("Lexical").$getCaretInDirection(
            require("Lexical").$normalizeCaret(
              require("Lexical").$getChildCaret(e, "previous"),
            ),
            "next",
          );
        return (
          require("Lexical").$comparePointCaretNext(o.anchor, s) <= 0 &&
          require("Lexical").$comparePointCaretNext(o.focus, l) >= 0
        );
      }),
      (exports.$isEditorIsNestedEditor = function (e) {
        return null !== e._parentEditor;
      }),
      (exports.$lastToFirstIterator = R),
      (exports.$onEscapeDown = function (e, n) {
        var o = require("Lexical").$getSelection();
        if (require("Lexical").$isRangeSelection(o) && o.isCollapsed()) {
          var _r7 = require("Lexical").$findMatchingParent(
            o.anchor.getNode(),
            e,
          );
          if (_r7) {
            var _e13 = _r7.getParent();
            if (
              null !== _e13 &&
              _e13.getLastChild() === _r7 &&
              v(o.anchor, _r7)
            )
              return (
                _r7
                  .insertAfter(require("Lexical").$createParagraphNode())
                  .selectEnd(),
                n && n.preventDefault(),
                !0
              );
          }
        }
        return !1;
      }),
      (exports.$onEscapeUp = function (e, n) {
        var o = require("Lexical").$getSelection();
        if (require("Lexical").$isRangeSelection(o) && o.isCollapsed()) {
          var _r8 = require("Lexical").$findMatchingParent(
            o.anchor.getNode(),
            e,
          );
          if (_r8) {
            var _e14 = _r8.getParent();
            if (
              null !== _e14 &&
              _e14.getFirstChild() === _r8 &&
              A(o.anchor, _r8)
            )
              return (
                _r8
                  .insertBefore(require("Lexical").$createParagraphNode())
                  .selectEnd(),
                n && n.preventDefault(),
                !0
              );
          }
        }
        return !1;
      }),
      (exports.$restoreEditorState = function (e, n) {
        var o = new Map(),
          r = e._pendingEditorState;
        for (var _ref4 of n._nodeMap) {
          var _e15 = _ref4[0];
          var _r9 = _ref4[1];
          o.set(_e15, require("Lexical").$cloneWithProperties(_r9));
        }
        (r && (r._nodeMap = o), require("Lexical").$fullReconcile());
        var i = n._selection;
        require("Lexical").$setSelection(null === i ? null : i.clone());
      }),
      (exports.$reverseDfs = function (e, t) {
        return Array.from(h(e, t));
      }),
      (exports.$reverseDfsIterator = h),
      (exports.$reverseDfsWithSlots = function (e, t) {
        return Array.from(m(e, t));
      }),
      (exports.$reverseDfsWithSlotsIterator = m),
      (exports.$unwrapAndFilterDescendants = function (e, t) {
        return y(e, t, null);
      }),
      (exports.$unwrapNode = function (e) {
        require("Lexical")
          .$rewindSiblingCaret(require("Lexical").$getSiblingCaret(e, "next"))
          .splice(1, e.getChildren());
      }),
      (exports.$wrapNodeInElement = function (e, t) {
        var n = t();
        return (e.replace(n), n.append(e), n);
      }),
      (exports.calculateZoomLevel = function (e, t) {
        if (t === void 0) {
          t = !1;
        }
        var n = 1;
        if (
          (function () {
            if (void 0 === E) {
              var _e16 = document.createElement("div");
              ((_e16.style.position = "absolute"),
                (_e16.style.opacity = "0"),
                (_e16.style.width = "100px"),
                (_e16.style.left = "-1000px"),
                document.body.appendChild(_e16));
              var _t6 = _e16.getBoundingClientRect();
              (_e16.style.setProperty("zoom", "2"),
                (E = _e16.getBoundingClientRect().width === _t6.width),
                document.body.removeChild(_e16));
            }
            return E;
          })() ||
          t
        )
          for (; e; )
            ((n *= Number(window.getComputedStyle(e).getPropertyValue("zoom"))),
              (e = e.parentElement));
        return n;
      }),
      (exports.eventFiles = function (e) {
        var t = null;
        if (
          (N(e, DragEvent)
            ? (t = e.dataTransfer)
            : N(e, ClipboardEvent) && (t = e.clipboardData),
          null === t)
        )
          return [!1, [], !1];
        var n = t.types,
          o = n.includes("Files"),
          r = n.includes("text/html") || n.includes("text/plain");
        return [o, Array.from(t.files), r];
      }),
      (exports.isMimeType = c),
      (exports.makeStateWrapper = function (e) {
        var n = function n(_n6) {
            return require("Lexical").$getState(_n6, e);
          },
          o = function o(n, _o5) {
            return require("Lexical").$setState(n, e, _o5);
          };
        return {
          $get: n,
          $set: o,
          accessors: [n, o],
          makeGetterMethod: function makeGetterMethod() {
            return function () {
              return n(this);
            };
          },
          makeSetterMethod: function makeSetterMethod() {
            return function (e) {
              return o(this, e);
            };
          },
          stateConfig: e,
        };
      }),
      (exports.markSelection = a),
      (exports.mediaFileReader = function (e, t) {
        var n =
          e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        return new Promise(function (e, o) {
          var r = [],
            _i7 = function i() {
              var _n$next = n.next(),
                s = _n$next.done,
                l = _n$next.value;
              if (s) return e(r);
              var a = new FileReader();
              (a.addEventListener("error", o),
                a.addEventListener("load", function () {
                  var e = a.result;
                  ("string" == typeof e && r.push({ file: l, result: e }),
                    _i7());
                }),
                c(l, t) ? a.readAsDataURL(l) : _i7());
            };
          _i7();
        });
      }),
      (exports.objectKlassEquals = N),
      (exports.positionNodeOnRange = i),
      (exports.registerNestedElementResolver = function (e, t, n, o) {
        var r = function r(e) {
          return e instanceof t;
        };
        return e.registerNodeTransform(t, function (e) {
          var t = (function (e) {
            var t = e.getChildren();
            for (var _e17 = 0; _e17 < t.length; _e17++) {
              var _n7 = t[_e17];
              if (r(_n7)) return null;
            }
            var n = e,
              o = e;
            for (; null !== n; )
              if (((o = n), (n = n.getParent()), r(n)))
                return { child: o, parent: n };
            return null;
          })(e);
          if (null !== t) {
            var _r0 = t.child,
              _i8 = t.parent;
            if (_r0.is(e)) {
              o(_i8, e);
              var _t7 = _r0.getNextSiblings(),
                _s3 = _t7.length;
              if ((_i8.insertAfter(_r0), 0 !== _s3)) {
                var _e18 = n(_i8);
                _r0.insertAfter(_e18);
                for (var _n8 = 0; _n8 < _s3; _n8++) _e18.append(_t7[_n8]);
              }
              _i8.canBeEmpty() || 0 !== _i8.getChildrenSize() || _i8.remove();
            }
          }
        });
      }),
      (exports.selectionAlwaysOnDisplay = function (e, t) {
        var n = null;
        var o = function o() {
          var o = getSelection(),
            r = o && o.anchorNode,
            i = e.getRootElement();
          null !== r && null !== i && i.contains(r)
            ? null !== n && (n(), (n = null))
            : null === n && (n = a(e, t));
        };
        return e.registerRootListener(function (e) {
          if (e) {
            var _t8 = e.ownerDocument;
            return (
              _t8.addEventListener("selectionchange", o),
              o(),
              function () {
                (null !== n && n(),
                  _t8.removeEventListener("selectionchange", o));
              }
            );
          }
        });
      }));
  },
  null,
);
