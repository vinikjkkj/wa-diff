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
      for (
        var _len = arguments.length,
          t = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        t[_key - 1] = arguments[_key];
      }
      throw function (e) {
        var n = new URL("https://lexical.dev/docs/error"),
          o = new URLSearchParams();
        o.append("code", e);
        for (
          var _len2 = arguments.length,
            t = new Array(_len2 > 1 ? _len2 - 1 : 0),
            _key2 = 1;
          _key2 < _len2;
          _key2++
        ) {
          t[_key2 - 1] = arguments[_key2];
        }
        for (var _e of t) o.append("v", _e);
        return (
          (n.search = o.toString()),
          new Error(
            "Minified Lexical error #" +
              e +
              "; visit " +
              n.toString() +
              " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
          )
        );
      }.apply(void 0, [e].concat(Array.from(t)));
    }
    function o(e) {
      return e + "px";
    }
    var r = { attributes: !0, characterData: !0, childList: !0, subtree: !0 };
    function i(i, s, l) {
      var a = null,
        c = null,
        u = null,
        d = [];
      var f = require("Lexical")
        .getRootOwnerDocument(i.getRootElement())
        .createElement("div");
      function g() {
        (null === a && n(182), null === c && n(183));
        var _c$getBoundingClientR = c.getBoundingClientRect(),
          r = _c$getBoundingClientR.left,
          u = _c$getBoundingClientR.top,
          g = (function (e) {
            var t = [];
            var _loop = function _loop(_n) {
              _n.width < 0.5 ||
                _n.height < 0.5 ||
                t.some(function (e) {
                  return (
                    Math.abs(e.left - _n.left) <= 1 &&
                    Math.abs(e.top - _n.top) <= 1 &&
                    Math.abs(e.right - _n.right) <= 1 &&
                    Math.abs(e.bottom - _n.bottom) <= 1
                  );
                }) ||
                t.push(_n);
            };
            for (var _n of e) {
              _loop(_n);
            }
            return t;
          })(require("LexicalSelection").createRectsFromDOMRange(i, s));
        var p, h;
        f.isConnected || ((h = f), (p = c).insertBefore(h, p.firstChild));
        var $ = !1;
        for (var _e2 = 0; _e2 < g.length; _e2++) {
          var _n2 = g[_e2],
            _i =
              d[_e2] ||
              require("Lexical").getRootOwnerDocument(a).createElement("div"),
            _s = _i.style;
          "absolute" !== _s.position && ((_s.position = "absolute"), ($ = !0));
          var _l = o(_n2.left - r);
          _s.left !== _l && ((_s.left = _l), ($ = !0));
          var _c = o(_n2.top - u);
          _s.top !== _c && ((_i.style.top = _c), ($ = !0));
          var _p = o(_n2.width);
          _s.width !== _p && ((_i.style.width = _p), ($ = !0));
          var _h = o(_n2.height);
          (_s.height !== _h && ((_i.style.height = _h), ($ = !0)),
            _i.parentNode !== f && (f.append(_i), ($ = !0)),
            (d[_e2] = _i));
        }
        for (; d.length > g.length; ) {
          var _e3 = d.pop();
          null != _e3 && (_e3.remove(), ($ = !0));
        }
        $ && l(d);
      }
      function p() {
        ((c = null),
          (a = null),
          null !== u && u.disconnect(),
          (u = null),
          f.remove());
        for (var _e4 of d) _e4.remove();
        d = [];
      }
      function h() {
        var e = i.getRootElement();
        if (null === e) return p();
        var n = e.parentElement;
        if (!require("Lexical").isHTMLElement(n)) return p();
        (p(),
          (a = e),
          (c = n),
          (u = new MutationObserver(function (e) {
            var t = i.getRootElement(),
              n = t && t.parentElement;
            if (t !== a || n !== c) return h();
            for (var _t of e) if (!f.contains(_t.target)) return g();
          })),
          u.observe(n, r),
          g());
      }
      f.style.position = "relative";
      var $ = i.registerRootListener(function () {
        return (h(), p);
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
      for (var _t2 of e) {
        var _e5 = _t2.style;
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
        u = null,
        d = null,
        f = function f() {};
      function g(l) {
        l.read(
          function () {
            var l = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(l))
              return (
                (o = null),
                (a = null),
                (c = null),
                (d = null),
                f(),
                void (f = function f() {})
              );
            var _ref = (function (e) {
                var t = e.getStartEndPoints();
                return e.isBackward() ? [t[1], t[0]] : t;
              })(l),
              g = _ref[0],
              p = _ref[1],
              h = g.getNode(),
              $ = h.getKey(),
              m = g.offset,
              S = p.getNode(),
              x = S.getKey(),
              C = p.offset,
              E = e.getElementByKey($),
              N = e.getElementByKey(x),
              y = null === o || E !== r || m !== a || $ !== o.getKey(),
              R = null === c || N !== u || C !== d || x !== c.getKey();
            if ((y || R) && null !== E && null !== N) {
              var _t3 = (function (e, t, n, o, r, i, l) {
                var a = (
                  e._window ? e._window.document : document
                ).createRange();
                return (
                  a.setStart.apply(a, Array.from(s(e, t, n, o))),
                  a.setEnd.apply(a, Array.from(s(e, r, i, l))),
                  a
                );
              })(e, g, h, E, p, S, N);
              (f(), (f = i(e, _t3, n)));
            }
            ((o = h), (r = E), (a = m), (c = S), (u = N), (d = C));
          },
          { editor: e },
        );
      }
      return (
        g(e.getEditorState()),
        require("Lexical").mergeRegister(
          e.registerUpdateListener(function (_ref2) {
            var e = _ref2.editorState;
            return g(e);
          }),
          function () {
            f();
          },
        )
      );
    }
    function c(e, t) {
      for (var _n3 of t) if (e.type.startsWith(_n3)) return !0;
      return !1;
    }
    function u(e, t) {
      return p("next", e, t);
    }
    function* d(e, n) {
      for (var _o of p("next", e, n)) {
        yield _o;
        var _e6 = _o.node,
          _r = _o.depth;
        if (require("Lexical").$isSlotHost(_e6) && !_e6.is(n))
          for (var _n4 of require("Lexical").$getSlotNames(_e6)) {
            var _o2 = require("Lexical").$getSlot(_e6, _n4);
            null !== _o2 && (yield* f(_o2, _r + 1));
          }
      }
    }
    function* f(e, n) {
      yield { depth: n, node: e };
      var o = n + 1;
      if (require("Lexical").$isSlotHost(e))
        for (var _n5 of require("Lexical").$getSlotNames(e)) {
          var _r2 = require("Lexical").$getSlot(e, _n5);
          null !== _r2 && (yield* f(_r2, o));
        }
      if (require("Lexical").$isElementNode(e))
        for (var _t4 of e.getChildren()) yield* f(_t4, o);
    }
    function g(e, n) {
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
        l = h(i),
        a = o
          ? require("Lexical").$getAdjacentChildCaret(
              require("Lexical").$getChildCaretOrSelf(
                require("Lexical").$getSiblingCaret(o, e),
              ),
            ) || g(o, e)
          : g(i, e);
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
    function $(e, t) {
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
        null !== _i4 && (yield* x(_i4, n));
      }
    }
    function* x(e, n) {
      yield { depth: n, node: e };
      var o = n + 1;
      if (require("Lexical").$isElementNode(e)) {
        var _t5 = e.getChildren();
        for (var _e0 = _t5.length - 1; _e0 >= 0; _e0--) yield* x(_t5[_e0], o);
      }
      require("Lexical").$isSlotHost(e) && (yield* S(e, o));
    }
    function C(e, t) {
      if (null == e) return !1;
      var n = Object.getPrototypeOf(e);
      return (
        null != n && null != n.constructor && n.constructor.name === t.name
      );
    }
    var E =
      !(require("Lexical").IS_FIREFOX || !require("Lexical").CAN_USE_DOM) &&
      void 0;
    function N(e, n, o) {
      var r = !1;
      var _loop2 = function _loop2(_i5) {
        n(_i5)
          ? null !== o && o(_i5)
          : ((r = !0),
            require("Lexical").$isElementNode(_i5) &&
              N(
                _i5,
                n,
                o ||
                  function (e) {
                    return _i5.insertAfter(e);
                  },
              ),
            _i5.remove());
      };
      for (var _i5 of y(e)) {
        _loop2(_i5);
      }
      return r;
    }
    function y(e) {
      return R(require("Lexical").$getChildCaret(e, "previous"));
    }
    function R(e) {
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
    function b(t, n) {
      return require("LexicalSelection").$isAtEdgeOfElement(t, n, "previous");
    }
    function A(t, n) {
      return require("LexicalSelection").$isAtEdgeOfElement(t, n, "next");
    }
    ((exports.$findMatchingParent = require("Lexical").$findMatchingParent),
      (exports.$getAdjacentSiblingOrParentSiblingCaret =
        require("Lexical").$getAdjacentSiblingOrParentSiblingCaret),
      (exports.$insertNodeToNearestRootAtCaret =
        require("Lexical").$insertNodeToNearestRootAtCaret),
      (exports.$isBlockFullySelected =
        require("Lexical").$isBlockFullySelected),
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
        for (var _e1 = r.pop(); void 0 !== _e1; _e1 = r.pop())
          if (n(_e1)) o.push(_e1);
          else if (require("Lexical").$isElementNode(_e1))
            for (var _t6 of y(_e1)) r.push(_t6);
        return o;
      }),
      (exports.$dfs = function (e, t) {
        return Array.from(u(e, t));
      }),
      (exports.$dfsIterator = u),
      (exports.$dfsWithSlots = function (e, t) {
        return Array.from(d(e, t));
      }),
      (exports.$dfsWithSlotsIterator = d),
      (exports.$filter = function (e, t) {
        var n = [];
        for (var _o4 = 0; _o4 < e.length; _o4++) {
          var _r5 = t(e[_o4]);
          null !== _r5 && n.push(_r5);
        }
        return n;
      }),
      (exports.$firstToLastIterator = function (e) {
        return R(require("Lexical").$getChildCaret(e, "next"));
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
        for (var _n6 = 0; _n6 < r.length; _n6++) {
          var _i6 = r[_n6],
            _s2 = _i6.getKey();
          if (o.has(_s2)) continue;
          var _l2 = require("Lexical").$findMatchingParent(_i6, function (e) {
            return require("Lexical").$isElementNode(e) && !e.isInline();
          });
          if (null === _l2) continue;
          var _a = _l2.getKey();
          _l2.canIndent() && !o.has(_a) && (o.add(_a), e(_l2));
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
          var _e10 = require("Lexical").$splitAtPointCaretNext(r);
          if (!_e10) return;
          r = _e10;
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
            var _e11 = n.getNodes(),
              _r6 = _e11[_e11.length - 1];
            _r6 && (o = require("Lexical").$getSiblingCaret(_r6, "next"));
          }
          o =
            o ||
            require("Lexical")
              .$getChildCaret(require("Lexical").$getRoot(), "previous")
              .getFlipped()
              .insert(require("Lexical").$createParagraphNode());
        }
        var r = require("Lexical").$insertNodeToNearestRootAtCaret(
          e,
          o,
          ((i = o),
          require("Lexical").$isExtendableTextPointCaret(i) ||
          null !==
            require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(
              require("Lexical").$isTextPointCaret(i) ? i.getSiblingCaret() : i,
              "shadowRoot",
            )
            ? {
                $shouldSplit: function $shouldSplit(e, t) {
                  return "last" !== t;
                },
              }
            : void 0),
        );
        var i;
        var s = require("Lexical").$getAdjacentChildCaret(r),
          l = require("Lexical").$isChildCaret(s)
            ? require("Lexical").$normalizeCaret(s)
            : r;
        return (
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCollapsedCaretRange(l),
          ),
          e.getLatest()
        );
      }),
      (exports.$isAtEndOfNode = A),
      (exports.$isAtStartOfNode = b),
      (exports.$isEditorIsNestedEditor = function (e) {
        return null !== e._parentEditor;
      }),
      (exports.$lastToFirstIterator = y),
      (exports.$onEscapeDown = function (e, n) {
        var o = require("Lexical").$getSelection();
        if (require("Lexical").$isRangeSelection(o) && o.isCollapsed()) {
          var _r7 = require("Lexical").$findMatchingParent(
            o.anchor.getNode(),
            e,
          );
          if (_r7) {
            var _e12 = _r7.getParent();
            if (
              null !== _e12 &&
              _e12.getLastChild() === _r7 &&
              A(o.anchor, _r7)
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
            var _e13 = _r8.getParent();
            if (
              null !== _e13 &&
              _e13.getFirstChild() === _r8 &&
              b(o.anchor, _r8)
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
          var _e14 = _ref4[0];
          var _r9 = _ref4[1];
          o.set(_e14, require("Lexical").$cloneWithProperties(_r9));
        }
        (r && (r._nodeMap = o), require("Lexical").$fullReconcile());
        var i = n._selection;
        require("Lexical").$setSelection(null === i ? null : i.clone());
      }),
      (exports.$reverseDfs = function (e, t) {
        return Array.from($(e, t));
      }),
      (exports.$reverseDfsIterator = $),
      (exports.$reverseDfsWithSlots = function (e, t) {
        return Array.from(m(e, t));
      }),
      (exports.$reverseDfsWithSlotsIterator = m),
      (exports.$unwrapAndFilterDescendants = function (e, t) {
        return N(e, t, null);
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
              var _e15 = document.createElement("div");
              ((_e15.style.position = "absolute"),
                (_e15.style.opacity = "0"),
                (_e15.style.width = "100px"),
                (_e15.style.left = "-1000px"),
                document.body.appendChild(_e15));
              var _t7 = _e15.getBoundingClientRect();
              (_e15.style.setProperty("zoom", "2"),
                (E = _e15.getBoundingClientRect().width === _t7.width),
                document.body.removeChild(_e15));
            }
            return E;
          })() ||
          n
        ) {
          var _n7 = (e && e.ownerDocument.defaultView) || window;
          for (; e; )
            ((o *= Number(_n7.getComputedStyle(e).getPropertyValue("zoom"))),
              (e = require("Lexical").getParentElement(e)));
        }
        return o;
      }),
      (exports.dedupeSelectionRects = function (e) {
        var t = function t(e, _t8) {
            return (
              _t8.left >= e.left - 1 &&
              _t8.top >= e.top - 1 &&
              _t8.right <= e.right + 1 &&
              _t8.bottom <= e.bottom + 1
            );
          },
          n = [];
        var _loop3 = function _loop3(_o5) {
          if (
            !(
              _o5.width < 0.5 ||
              _o5.height < 0.5 ||
              n.some(function (e) {
                return t(_o5, e);
              })
            )
          ) {
            for (var _e16 = n.length - 1; _e16 >= 0; _e16--)
              t(n[_e16], _o5) && n.splice(_e16, 1);
            n.push(_o5);
          }
        };
        for (var _o5 of Array.from(e)) {
          _loop3(_o5);
        }
        return n;
      }),
      (exports.eventFiles = function (e) {
        var t = null;
        if (
          (C(e, DragEvent)
            ? (t = e.dataTransfer)
            : C(e, ClipboardEvent) && (t = e.clipboardData),
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
        for (var _n8 = e; (_n8 = require("Lexical").getParentElement(_n8)); )
          if (
            ((i = r.getComputedStyle(_n8)),
            (!s || "static" !== i.position) &&
              l.test(i.overflow + i.overflowY + i.overflowX))
          )
            return _n8;
        return o.body;
      }),
      (exports.isMimeType = c),
      (exports.makeStateWrapper = function (e) {
        var n = function n(_n9) {
            return require("Lexical").$getState(_n9, e);
          },
          o = function o(n, _o6) {
            return require("Lexical").$setState(n, e, _o6);
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
      (exports.objectKlassEquals = C),
      (exports.positionNodeOnRange = i),
      (exports.registerNestedElementResolver = function (e, t, n, o) {
        var r = function r(e) {
          return e instanceof t;
        };
        return e.registerNodeTransform(t, function (e) {
          var t = (function (e) {
            var t = e.getChildren();
            for (var _e17 = 0; _e17 < t.length; _e17++) {
              var _n0 = t[_e17];
              if (r(_n0)) return null;
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
              var _t9 = _r0.getNextSiblings(),
                _s3 = _t9.length;
              if ((_i8.insertAfter(_r0), 0 !== _s3)) {
                var _e18 = n(_i8);
                _r0.insertAfter(_e18);
                for (var _n1 = 0; _n1 < _s3; _n1++) _e18.append(_t9[_n1]);
              }
              _i8.canBeEmpty() || 0 !== _i8.getChildrenSize() || _i8.remove();
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
            : null === o && (o = a(e, n));
        };
        return e.registerRootListener(function (e) {
          if (e) {
            var _n10 = e.ownerDocument,
              _i9 = require("Lexical").mergeRegister(
                require("Lexical").registerEventListener(
                  _n10,
                  "selectionchange",
                  r,
                ),
                function () {
                  null !== o && o();
                },
              );
            return (r(), _i9);
          }
        });
      }));
  },
  null,
);
