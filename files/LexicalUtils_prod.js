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
      var t = function t(e, _t) {
          return (
            _t.left >= e.left - 1 &&
            _t.top >= e.top - 1 &&
            _t.right <= e.right + 1 &&
            _t.bottom <= e.bottom + 1
          );
        },
        n = [];
      var _loop = function _loop(_o) {
        if (
          !(
            _o.width < 0.5 ||
            _o.height < 0.5 ||
            n.some(function (e) {
              return t(_o, e);
            })
          )
        ) {
          for (var _e2 = n.length - 1; _e2 >= 0; _e2--)
            t(n[_e2], _o) && n.splice(_e2, 1);
          n.push(_o);
        }
      };
      for (var _o of Array.from(e)) {
        _loop(_o);
      }
      return n;
    }
    function r(e) {
      return e + "px";
    }
    var i = { attributes: !0, characterData: !0, childList: !0, subtree: !0 };
    function s(s, l, a) {
      var c = null,
        u = null,
        d = null,
        g = [];
      var f = document.createElement("div");
      function p() {
        (null === c && n(182), null === u && n(183));
        var _u$getBoundingClientR = u.getBoundingClientRect(),
          t = _u$getBoundingClientR.left,
          i = _u$getBoundingClientR.top,
          d = o(require("LexicalSelection").createRectsFromDOMRange(s, l));
        var p, $;
        f.isConnected || (($ = f), (p = u).insertBefore($, p.firstChild));
        var h = !1;
        for (var _e3 = 0; _e3 < d.length; _e3++) {
          var _n = d[_e3],
            _o2 = g[_e3] || document.createElement("div"),
            _s = _o2.style;
          "absolute" !== _s.position && ((_s.position = "absolute"), (h = !0));
          var _l = r(_n.left - t);
          _s.left !== _l && ((_s.left = _l), (h = !0));
          var _a = r(_n.top - i);
          _s.top !== _a && ((_o2.style.top = _a), (h = !0));
          var _c = r(_n.width);
          _s.width !== _c && ((_o2.style.width = _c), (h = !0));
          var _u = r(_n.height);
          (_s.height !== _u && ((_o2.style.height = _u), (h = !0)),
            _o2.parentNode !== f && (f.append(_o2), (h = !0)),
            (g[_e3] = _o2));
        }
        for (; g.length > d.length; ) g.pop();
        h && a(g);
      }
      function $() {
        ((u = null),
          (c = null),
          null !== d && d.disconnect(),
          (d = null),
          f.remove());
        for (var _e4 of g) _e4.remove();
        g = [];
      }
      f.style.position = "relative";
      var h = s.registerRootListener(function e() {
        var n = s.getRootElement();
        if (null === n) return $();
        var o = n.parentElement;
        if (!require("Lexical").isHTMLElement(o)) return $();
        ($(),
          (c = n),
          (u = o),
          (d = new MutationObserver(function (t) {
            var n = s.getRootElement(),
              o = n && n.parentElement;
            if (n !== c || o !== u) return e();
            for (var _e5 of t) if (!f.contains(_e5.target)) return p();
          })),
          d.observe(o, i),
          p());
      });
      return function () {
        (h(), $());
      };
    }
    function l(e, n, o, r) {
      if ("text" !== n.type && require("Lexical").$isElementNode(o)) {
        var _i = require("Lexical").$getDOMSlot(o, r, e);
        return [_i.element, _i.getFirstChildOffset() + n.offset];
      }
      return [
        (require("Lexical").$isTextNode(o)
          ? require("Lexical").$getDOMTextNode(o, r, e)
          : require("Lexical").getDOMTextNode(r)) || r,
        n.offset,
      ];
    }
    function a(e) {
      for (var _t2 of e) {
        var _e6 = _t2.style;
        ("Highlight" !== _e6.background && (_e6.background = "Highlight"),
          "HighlightText" !== _e6.color && (_e6.color = "HighlightText"),
          _e6.marginTop !== r(-1.5) && (_e6.marginTop = r(-1.5)),
          _e6.paddingTop !== r(4) && (_e6.paddingTop = r(4)),
          _e6.paddingBottom !== r(0) && (_e6.paddingBottom = r(0)));
      }
    }
    function c(e, n) {
      if (n === void 0) {
        n = a;
      }
      var o = null,
        r = null,
        i = null,
        c = null,
        u = null,
        d = null,
        g = function g() {};
      function f(a) {
        a.read(
          function () {
            var a = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(a))
              return (
                (o = null),
                (i = null),
                (c = null),
                (d = null),
                g(),
                void (g = function g() {})
              );
            var _ref = (function (e) {
                var t = e.getStartEndPoints();
                return e.isBackward() ? [t[1], t[0]] : t;
              })(a),
              f = _ref[0],
              p = _ref[1],
              $ = f.getNode(),
              h = $.getKey(),
              m = f.offset,
              S = p.getNode(),
              x = S.getKey(),
              C = p.offset,
              N = e.getElementByKey(h),
              E = e.getElementByKey(x),
              y = null === o || N !== r || m !== i || h !== o.getKey(),
              R = null === c || E !== u || C !== d || x !== c.getKey();
            if ((y || R) && null !== N && null !== E) {
              var _t3 = (function (e, t, n, o, r, i, s) {
                var a = (
                  e._window ? e._window.document : document
                ).createRange();
                return (
                  a.setStart.apply(a, l(e, t, n, o)),
                  a.setEnd.apply(a, l(e, r, i, s)),
                  a
                );
              })(e, f, $, N, p, S, E);
              (g(), (g = s(e, _t3, n)));
            }
            ((o = $), (r = N), (i = m), (c = S), (u = E), (d = C));
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
    function u(e, t) {
      for (var _n2 of t) if (e.type.startsWith(_n2)) return !0;
      return !1;
    }
    function d(e, t) {
      return $("next", e, t);
    }
    function* g(e, n) {
      for (var _o3 of $("next", e, n)) {
        yield _o3;
        var _e7 = _o3.node,
          _r = _o3.depth;
        if (require("Lexical").$isSlotHost(_e7) && !_e7.is(n))
          for (var _n3 of require("Lexical").$getSlotNames(_e7)) {
            var _o4 = require("Lexical").$getSlot(_e7, _n3);
            null !== _o4 && (yield* f(_o4, _r + 1));
          }
      }
    }
    function* f(e, n) {
      yield { depth: n, node: e };
      var o = n + 1;
      if (require("Lexical").$isSlotHost(e))
        for (var _n4 of require("Lexical").$getSlotNames(e)) {
          var _r2 = require("Lexical").$getSlot(e, _n4);
          null !== _r2 && (yield* f(_r2, o));
        }
      if (require("Lexical").$isElementNode(e))
        for (var _t4 of e.getChildren()) yield* f(_t4, o);
    }
    function p(e, n) {
      var o = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(
        require("Lexical").$getSiblingCaret(e, n),
      );
      return o && o[0];
    }
    function $(e, n, o) {
      var r = require("Lexical").$getRoot(),
        i = n || r,
        s = require("Lexical").$isElementNode(i)
          ? require("Lexical").$getChildCaret(i, e)
          : require("Lexical").$getSiblingCaret(i, e),
        l = h(i),
        a = o
          ? require("Lexical").$getAdjacentChildCaret(
              require("Lexical").$getChildCaretOrSelf(
                require("Lexical").$getSiblingCaret(o, e),
              ),
            ) || p(o, e)
          : p(i, e);
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
    function h(e) {
      var n = -1;
      for (
        var _o5 = e;
        null !== _o5;
        _o5 =
          (_o5$getParent = _o5.getParent()) != null
            ? _o5$getParent
            : require("Lexical").$getSlotHost(_o5)
      ) {
        var _o5$getParent;
        n++;
      }
      return n;
    }
    function m(e, t) {
      return $("previous", e, t);
    }
    function* S(e, n) {
      var o = [];
      for (var _r3 of $("previous", e, n)) {
        for (; o.length > 0 && _r3.depth <= o[o.length - 1].depth; ) {
          var _e8 = o.pop();
          yield* x(_e8.node, _e8.depth + 1);
        }
        yield _r3;
        var _e9 = _r3.node,
          _i2 = _r3.depth;
        require("Lexical").$isSlotHost(_e9) &&
          require("Lexical").$getSlotNames(_e9).length > 0 &&
          !_e9.is(n) &&
          o.push({ depth: _i2, node: _e9 });
      }
      for (; o.length > 0; ) {
        var _e0 = o.pop();
        yield* x(_e0.node, _e0.depth + 1);
      }
    }
    function* x(e, n) {
      var o = require("Lexical").$getSlotNames(e);
      for (var _r4 = o.length - 1; _r4 >= 0; _r4--) {
        var _i3 = require("Lexical").$getSlot(e, o[_r4]);
        null !== _i3 && (yield* C(_i3, n));
      }
    }
    function* C(e, n) {
      yield { depth: n, node: e };
      var o = n + 1;
      if (require("Lexical").$isElementNode(e)) {
        var _t5 = e.getChildren();
        for (var _e1 = _t5.length - 1; _e1 >= 0; _e1--) yield* C(_t5[_e1], o);
      }
      require("Lexical").$isSlotHost(e) && (yield* x(e, o));
    }
    function N(e, t) {
      return null !== e && Object.getPrototypeOf(e).constructor.name === t.name;
    }
    var E =
      !(require("Lexical").IS_FIREFOX || !require("Lexical").CAN_USE_DOM) &&
      void 0;
    function y(e, n, o) {
      var r = !1;
      var _loop2 = function _loop2(_i4) {
        n(_i4)
          ? null !== o && o(_i4)
          : ((r = !0),
            require("Lexical").$isElementNode(_i4) &&
              y(
                _i4,
                n,
                o ||
                  function (e) {
                    return _i4.insertAfter(e);
                  },
              ),
            _i4.remove());
      };
      for (var _i4 of R(e)) {
        _loop2(_i4);
      }
      return r;
    }
    function R(e) {
      return v(require("Lexical").$getChildCaret(e, "previous"));
    }
    function v(e) {
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
    function I(n, o) {
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
      (exports.$insertNodeToNearestRootAtCaret =
        require("Lexical").$insertNodeToNearestRootAtCaret),
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
            for (var _t6 of R(_e10)) r.push(_t6);
        return o;
      }),
      (exports.$dfs = function (e, t) {
        return Array.from(d(e, t));
      }),
      (exports.$dfsIterator = d),
      (exports.$dfsWithSlots = function (e, t) {
        return Array.from(g(e, t));
      }),
      (exports.$dfsWithSlotsIterator = g),
      (exports.$filter = function (e, t) {
        var n = [];
        for (var _o6 = 0; _o6 < e.length; _o6++) {
          var _r5 = t(e[_o6]);
          null !== _r5 && n.push(_r5);
        }
        return n;
      }),
      (exports.$firstToLastIterator = function (e) {
        return v(require("Lexical").$getChildCaret(e, "next"));
      }),
      (exports.$getAdjacentCaret = function (e) {
        return e ? e.getAdjacentCaret() : null;
      }),
      (exports.$getDepth = h),
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
          var _i5 = r[_n5],
            _s2 = _i5.getKey();
          if (o.has(_s2)) continue;
          var _l2 = require("Lexical").$findMatchingParent(_i5, function (e) {
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
        var r = require("Lexical").$insertNodeToNearestRootAtCaret(e, o),
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
      (exports.$isAtEndOfNode = I),
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
              I(o.anchor, _r7)
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
        return Array.from(m(e, t));
      }),
      (exports.$reverseDfsIterator = m),
      (exports.$reverseDfsWithSlots = function (e, t) {
        return Array.from(S(e, t));
      }),
      (exports.$reverseDfsWithSlotsIterator = S),
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
      (exports.calculateZoomLevel = function (e, n) {
        if (n === void 0) {
          n = !1;
        }
        var o = 1;
        if (
          (function () {
            if (void 0 === E) {
              var _e16 = document.createElement("div");
              ((_e16.style.position = "absolute"),
                (_e16.style.opacity = "0"),
                (_e16.style.width = "100px"),
                (_e16.style.left = "-1000px"),
                document.body.appendChild(_e16));
              var _t7 = _e16.getBoundingClientRect();
              (_e16.style.setProperty("zoom", "2"),
                (E = _e16.getBoundingClientRect().width === _t7.width),
                document.body.removeChild(_e16));
            }
            return E;
          })() ||
          n
        ) {
          var _n6 = (e && e.ownerDocument.defaultView) || window;
          for (; e; )
            ((o *= Number(_n6.getComputedStyle(e).getPropertyValue("zoom"))),
              (e = require("Lexical").getParentElement(e)));
        }
        return o;
      }),
      (exports.dedupeSelectionRects = o),
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
      (exports.getScrollParent = function (e, n) {
        var o = e.ownerDocument,
          r = o.defaultView || window;
        var i = r.getComputedStyle(e);
        var s = "absolute" === i.position,
          l = n ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
        if ("fixed" === i.position) return o.body;
        for (var _n7 = e; (_n7 = require("Lexical").getParentElement(_n7)); )
          if (
            ((i = r.getComputedStyle(_n7)),
            (!s || "static" !== i.position) &&
              l.test(i.overflow + i.overflowY + i.overflowX))
          )
            return _n7;
        return o.body;
      }),
      (exports.isMimeType = u),
      (exports.makeStateWrapper = function (e) {
        var n = function n(_n8) {
            return require("Lexical").$getState(_n8, e);
          },
          o = function o(n, _o7) {
            return require("Lexical").$setState(n, e, _o7);
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
      (exports.markSelection = c),
      (exports.mediaFileReader = function (e, t) {
        var n =
          e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        return new Promise(function (e, o) {
          var r = [],
            _i6 = function i() {
              var _n$next = n.next(),
                s = _n$next.done,
                l = _n$next.value;
              if (s) return e(r);
              var a = new FileReader();
              (a.addEventListener("error", o),
                a.addEventListener("load", function () {
                  var e = a.result;
                  ("string" == typeof e && r.push({ file: l, result: e }),
                    _i6());
                }),
                u(l, t) ? a.readAsDataURL(l) : _i6());
            };
          _i6();
        });
      }),
      (exports.objectKlassEquals = N),
      (exports.positionNodeOnRange = s),
      (exports.registerNestedElementResolver = function (e, t, n, o) {
        var r = function r(e) {
          return e instanceof t;
        };
        return e.registerNodeTransform(t, function (e) {
          var t = (function (e) {
            var t = e.getChildren();
            for (var _e17 = 0; _e17 < t.length; _e17++) {
              var _n9 = t[_e17];
              if (r(_n9)) return null;
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
              _i7 = t.parent;
            if (_r0.is(e)) {
              o(_i7, e);
              var _t8 = _r0.getNextSiblings(),
                _s3 = _t8.length;
              if ((_i7.insertAfter(_r0), 0 !== _s3)) {
                var _e18 = n(_i7);
                _r0.insertAfter(_e18);
                for (var _n0 = 0; _n0 < _s3; _n0++) _e18.append(_t8[_n0]);
              }
              _i7.canBeEmpty() || 0 !== _i7.getChildrenSize() || _i7.remove();
            }
          }
        });
      }),
      (exports.selectionAlwaysOnDisplay = function (e, n) {
        var o = null;
        var r = function r() {
          var r = e.getRootElement(),
            i = null !== r ? r.ownerDocument.defaultView : null,
            s = null !== i ? i.getSelection() : null,
            l =
              null !== s
                ? require("Lexical").getDOMSelectionPoints(s, r).anchorNode
                : null;
          null !== l && null !== r && r.contains(l)
            ? null !== o && (o(), (o = null))
            : null === o && (o = c(e, n));
        };
        return e.registerRootListener(function (e) {
          if (e) {
            var _t9 = e.ownerDocument;
            return (
              _t9.addEventListener("selectionchange", r),
              r(),
              function () {
                (null !== o && o(),
                  _t9.removeEventListener("selectionchange", r));
              }
            );
          }
        });
      }));
  },
  null,
);
