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
        r = new URLSearchParams();
      r.append("code", e);
      for (
        var _len = arguments.length,
          t = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        t[_key - 1] = arguments[_key];
      }
      for (var _e of t) r.append("v", _e);
      throw (
        (n.search = r.toString()),
        Error(
          "Minified Lexical error #" +
            e +
            "; visit " +
            n.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        )
      );
    }
    function r(e) {
      return e + "px";
    }
    var o = { attributes: !0, characterData: !0, childList: !0, subtree: !0 };
    function i(i, s, l) {
      var a = null,
        c = null,
        g = null,
        u = [];
      var d = document.createElement("div");
      function f() {
        (null === a && n(182), null === c && n(183));
        var _c$getBoundingClientR = c.getBoundingClientRect(),
          t = _c$getBoundingClientR.left,
          o = _c$getBoundingClientR.top,
          g = require("LexicalSelection").createRectsFromDOMRange(i, s);
        var f, p;
        d.isConnected || ((p = d), (f = c).insertBefore(p, f.firstChild));
        var $ = !1;
        for (var _e2 = 0; _e2 < g.length; _e2++) {
          var _n = g[_e2],
            _i = u[_e2] || document.createElement("div"),
            _s = _i.style;
          "absolute" !== _s.position && ((_s.position = "absolute"), ($ = !0));
          var _l = r(_n.left - t);
          _s.left !== _l && ((_s.left = _l), ($ = !0));
          var _a = r(_n.top - o);
          _s.top !== _a && ((_i.style.top = _a), ($ = !0));
          var _c = r(_n.width);
          _s.width !== _c && ((_i.style.width = _c), ($ = !0));
          var _f = r(_n.height);
          (_s.height !== _f && ((_i.style.height = _f), ($ = !0)),
            _i.parentNode !== d && (d.append(_i), ($ = !0)),
            (u[_e2] = _i));
        }
        for (; u.length > g.length; ) u.pop();
        $ && l(u);
      }
      function p() {
        ((c = null),
          (a = null),
          null !== g && g.disconnect(),
          (g = null),
          d.remove());
        for (var _e3 of u) _e3.remove();
        u = [];
      }
      d.style.position = "relative";
      var $ = i.registerRootListener(function e() {
        var n = i.getRootElement();
        if (null === n) return p();
        var r = n.parentElement;
        if (!require("Lexical").isHTMLElement(r)) return p();
        (p(),
          (a = n),
          (c = r),
          (g = new MutationObserver(function (t) {
            var n = i.getRootElement(),
              r = n && n.parentElement;
            if (n !== a || r !== c) return e();
            for (var _e4 of t) if (!d.contains(_e4.target)) return f();
          })),
          g.observe(r, o),
          f());
      });
      return function () {
        ($(), p());
      };
    }
    function s(e, n, r, o) {
      if ("text" !== n.type && require("Lexical").$isElementNode(r)) {
        var _i2 = require("Lexical").$getDOMSlot(r, o, e);
        return [_i2.element, _i2.getFirstChildOffset() + n.offset];
      }
      return [
        (require("Lexical").$isTextNode(r)
          ? require("Lexical").$getDOMTextNode(r, o, e)
          : require("Lexical").getDOMTextNode(o)) || o,
        n.offset,
      ];
    }
    function l(e) {
      for (var _t of e) {
        var _e5 = _t.style;
        ("Highlight" !== _e5.background && (_e5.background = "Highlight"),
          "HighlightText" !== _e5.color && (_e5.color = "HighlightText"),
          _e5.marginTop !== r(-1.5) && (_e5.marginTop = r(-1.5)),
          _e5.paddingTop !== r(4) && (_e5.paddingTop = r(4)),
          _e5.paddingBottom !== r(0) && (_e5.paddingBottom = r(0)));
      }
    }
    function a(e, n) {
      if (n === void 0) {
        n = l;
      }
      var r = null,
        o = null,
        a = null,
        c = null,
        g = null,
        u = null,
        d = function d() {};
      function f(l) {
        l.read(
          function () {
            var l = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(l))
              return (
                (r = null),
                (a = null),
                (c = null),
                (u = null),
                d(),
                void (d = function d() {})
              );
            var _ref = (function (e) {
                var t = e.getStartEndPoints();
                return e.isBackward() ? [t[1], t[0]] : t;
              })(l),
              f = _ref[0],
              p = _ref[1],
              $ = f.getNode(),
              m = $.getKey(),
              h = f.offset,
              S = p.getNode(),
              C = S.getKey(),
              x = p.offset,
              N = e.getElementByKey(m),
              E = e.getElementByKey(C),
              R = null === r || N !== o || h !== a || m !== r.getKey(),
              I = null === c || E !== g || x !== u || C !== c.getKey();
            if ((R || I) && null !== N && null !== E) {
              var _t2 = (function (e, t, n, r, o, i, l) {
                var a = (
                  e._window ? e._window.document : document
                ).createRange();
                return (
                  a.setStart.apply(a, s(e, t, n, r)),
                  a.setEnd.apply(a, s(e, o, i, l)),
                  a
                );
              })(e, f, $, N, p, S, E);
              (d(), (d = i(e, _t2, n)));
            }
            ((r = $), (o = N), (a = h), (c = S), (g = E), (u = x));
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
            d();
          },
        )
      );
    }
    function c(e, t) {
      for (var _n2 of t) if (e.type.startsWith(_n2)) return !0;
      return !1;
    }
    function g(e, t) {
      return d("next", e, t);
    }
    function u(e, n) {
      var r = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(
        require("Lexical").$getSiblingCaret(e, n),
      );
      return r && r[0];
    }
    function d(e, n, r) {
      var o = require("Lexical").$getRoot(),
        i = n || o,
        s = require("Lexical").$isElementNode(i)
          ? require("Lexical").$getChildCaret(i, e)
          : require("Lexical").$getSiblingCaret(i, e),
        l = f(i),
        a = r
          ? require("Lexical").$getAdjacentChildCaret(
              require("Lexical").$getChildCaretOrSelf(
                require("Lexical").$getSiblingCaret(r, e),
              ),
            ) || u(r, e)
          : u(i, e);
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
    function f(e) {
      var t = -1;
      for (var _n3 = e; null !== _n3; _n3 = _n3.getParent()) t++;
      return t;
    }
    function p(e, t) {
      return d("previous", e, t);
    }
    function $(e, r, o) {
      var i = require("Lexical").$getCaretInDirection(r, "next");
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
        var _e6 = i;
        _e6;
        _e6 = require("Lexical").$splitAtPointCaretNext(_e6, o)
      )
        i = _e6;
      return (
        require("Lexical").$isTextPointCaret(i) && n(283),
        i.insert(
          e.isInline()
            ? require("Lexical").$createParagraphNode().append(e)
            : e,
        ),
        require("Lexical").$getCaretInDirection(
          require("Lexical").$getSiblingCaret(e.getLatest(), "next"),
          r.direction,
        )
      );
    }
    var m =
      !(require("Lexical").IS_FIREFOX || !require("Lexical").CAN_USE_DOM) &&
      void 0;
    function h(e, n, r) {
      var o = !1;
      var _loop = function _loop(_i3) {
        n(_i3)
          ? null !== r && r(_i3)
          : ((o = !0),
            require("Lexical").$isElementNode(_i3) &&
              h(
                _i3,
                n,
                r ||
                  function (e) {
                    return _i3.insertAfter(e);
                  },
              ),
            _i3.remove());
      };
      for (var _i3 of S(e)) {
        _loop(_i3);
      }
      return o;
    }
    function S(e) {
      return C(require("Lexical").$getChildCaret(e, "previous"));
    }
    function C(e) {
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
        var r = [],
          o = Array.from(e).reverse();
        for (var _e7 = o.pop(); void 0 !== _e7; _e7 = o.pop())
          if (n(_e7)) r.push(_e7);
          else if (require("Lexical").$isElementNode(_e7))
            for (var _t3 of S(_e7)) o.push(_t3);
        return r;
      }),
      (exports.$dfs = function (e, t) {
        return Array.from(g(e, t));
      }),
      (exports.$dfsIterator = g),
      (exports.$filter = function (e, t) {
        var n = [];
        for (var _r = 0; _r < e.length; _r++) {
          var _o = t(e[_r]);
          null !== _o && n.push(_o);
        }
        return n;
      }),
      (exports.$firstToLastIterator = function (e) {
        return C(require("Lexical").$getChildCaret(e, "next"));
      }),
      (exports.$getAdjacentCaret = function (e) {
        return e ? e.getAdjacentCaret() : null;
      }),
      (exports.$getDepth = f),
      (exports.$getNearestBlockElementAncestorOrThrow = function (e) {
        var r = require("Lexical").$findMatchingParent(e, function (e) {
          return require("Lexical").$isElementNode(e) && !e.isInline();
        });
        return (require("Lexical").$isElementNode(r) || n(4, e.__key), r);
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
          r = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(
            n,
            "root",
          );
        return r && r[0].origin;
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
        var r = new Set(),
          o = n.getNodes();
        for (var _n4 = 0; _n4 < o.length; _n4++) {
          var _i4 = o[_n4],
            _s2 = _i4.getKey();
          if (r.has(_s2)) continue;
          var _l2 = require("Lexical").$findMatchingParent(_i4, function (e) {
            return require("Lexical").$isElementNode(e) && !e.isInline();
          });
          if (null === _l2) continue;
          var _a2 = _l2.getKey();
          _l2.canIndent() && !r.has(_a2) && (r.add(_a2), e(_l2));
        }
        return r.size > 0;
      }),
      (exports.$insertFirst = function (e, n) {
        require("Lexical").$getChildCaret(e, "next").insert(n);
      }),
      (exports.$insertNodeIntoLeaf = function (e) {
        var n = require("Lexical").$getSelection();
        if (!require("Lexical").$isRangeSelection(n))
          return void (n && n.insertNodes([e]));
        var r = require("Lexical").$caretRangeFromSelection(n);
        var o = require("Lexical").$getCaretRangeInDirection(
          require("Lexical").$removeTextFromCaretRange(r),
          "next",
        ).anchor;
        if (require("Lexical").$isTextPointCaret(o)) {
          var _e8 = require("Lexical").$splitAtPointCaretNext(o);
          if (!_e8) return;
          o = _e8;
        }
        var i = o.getFlipped();
        (i.insert(e),
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCaretRange(i, i),
          ));
      }),
      (exports.$insertNodeToNearestRoot = function (e) {
        var n =
          require("Lexical").$getSelection() ||
          require("Lexical").$getPreviousSelection();
        var r;
        if (require("Lexical").$isRangeSelection(n))
          r = require("Lexical").$caretFromPoint(n.focus, "next");
        else {
          if (null != n) {
            var _e9 = n.getNodes(),
              _o2 = _e9[_e9.length - 1];
            _o2 && (r = require("Lexical").$getSiblingCaret(_o2, "next"));
          }
          r =
            r ||
            require("Lexical")
              .$getChildCaret(require("Lexical").$getRoot(), "previous")
              .getFlipped()
              .insert(require("Lexical").$createParagraphNode());
        }
        var o = $(e, r),
          i = require("Lexical").$getAdjacentChildCaret(o),
          s = require("Lexical").$isChildCaret(i)
            ? require("Lexical").$normalizeCaret(i)
            : o;
        return (
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCollapsedCaretRange(s),
          ),
          e.getLatest()
        );
      }),
      (exports.$insertNodeToNearestRootAtCaret = $),
      (exports.$isEditorIsNestedEditor = function (e) {
        return null !== e._parentEditor;
      }),
      (exports.$lastToFirstIterator = S),
      (exports.$onEscapeDown = function (n) {
        var r = require("Lexical").$getSelection();
        if (require("Lexical").$isRangeSelection(r) && r.isCollapsed()) {
          var _o3 = require("Lexical").$findMatchingParent(
            r.anchor.getNode(),
            n,
          );
          if (_o3) {
            var _n5 = _o3.getParent();
            if (null !== _n5 && _n5.getLastChild() === _o3) {
              var _o3$getLastDescendant;
              var _n6 =
                  (_o3$getLastDescendant = _o3.getLastDescendant()) != null
                    ? _o3$getLastDescendant
                    : _o3,
                _i5 = r.anchor.getNode();
              if (
                null !== _n6 &&
                require("LexicalSelection").$isAtNodeEnd(r.anchor) &&
                (_i5 === _n6 ||
                  (require("Lexical").$isElementNode(_i5) &&
                    _i5.getLastDescendant() === _n6))
              )
                return (
                  _o3
                    .insertAfter(require("Lexical").$createParagraphNode())
                    .selectEnd(),
                  !0
                );
            }
          }
        }
        return !1;
      }),
      (exports.$onEscapeUp = function (e) {
        var n = require("Lexical").$getSelection();
        if (
          require("Lexical").$isRangeSelection(n) &&
          n.isCollapsed() &&
          0 === n.anchor.offset
        ) {
          var _r2 = require("Lexical").$findMatchingParent(
            n.anchor.getNode(),
            e,
          );
          if (_r2) {
            var _e0 = _r2.getParent();
            if (null !== _e0 && _e0.getFirstChild() === _r2) {
              var _r2$getFirstDescendan;
              var _e1 =
                  (_r2$getFirstDescendan = _r2.getFirstDescendant()) != null
                    ? _r2$getFirstDescendan
                    : _r2,
                _o4 = n.anchor.getNode();
              if (
                null !== _e1 &&
                (_o4 === _e1 ||
                  (require("Lexical").$isElementNode(_o4) &&
                    _o4.getFirstDescendant() === _e1))
              )
                return (
                  _r2
                    .insertBefore(require("Lexical").$createParagraphNode())
                    .selectEnd(),
                  !0
                );
            }
          }
        }
        return !1;
      }),
      (exports.$restoreEditorState = function (e, n) {
        var r = new Map(),
          o = e._pendingEditorState;
        for (var _ref4 of n._nodeMap) {
          var _e10 = _ref4[0];
          var _o5 = _ref4[1];
          r.set(_e10, require("Lexical").$cloneWithProperties(_o5));
        }
        (o && (o._nodeMap = r), require("Lexical").$fullReconcile());
        var i = n._selection;
        require("Lexical").$setSelection(null === i ? null : i.clone());
      }),
      (exports.$reverseDfs = function (e, t) {
        return Array.from(p(e, t));
      }),
      (exports.$reverseDfsIterator = p),
      (exports.$unwrapAndFilterDescendants = function (e, t) {
        return h(e, t, null);
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
            if (void 0 === m) {
              var _e11 = document.createElement("div");
              ((_e11.style.position = "absolute"),
                (_e11.style.opacity = "0"),
                (_e11.style.width = "100px"),
                (_e11.style.left = "-1000px"),
                document.body.appendChild(_e11));
              var _t4 = _e11.getBoundingClientRect();
              (_e11.style.setProperty("zoom", "2"),
                (m = _e11.getBoundingClientRect().width === _t4.width),
                document.body.removeChild(_e11));
            }
            return m;
          })() ||
          t
        )
          for (; e; )
            ((n *= Number(window.getComputedStyle(e).getPropertyValue("zoom"))),
              (e = e.parentElement));
        return n;
      }),
      (exports.isMimeType = c),
      (exports.makeStateWrapper = function (e) {
        var n = function n(_n7) {
            return require("Lexical").$getState(_n7, e);
          },
          r = function r(n, _r3) {
            return require("Lexical").$setState(n, e, _r3);
          };
        return {
          $get: n,
          $set: r,
          accessors: [n, r],
          makeGetterMethod: function makeGetterMethod() {
            return function () {
              return n(this);
            };
          },
          makeSetterMethod: function makeSetterMethod() {
            return function (e) {
              return r(this, e);
            };
          },
          stateConfig: e,
        };
      }),
      (exports.markSelection = a),
      (exports.mediaFileReader = function (e, t) {
        var n =
          e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        return new Promise(function (e, r) {
          var o = [],
            _i6 = function i() {
              var _n$next = n.next(),
                s = _n$next.done,
                l = _n$next.value;
              if (s) return e(o);
              var a = new FileReader();
              (a.addEventListener("error", r),
                a.addEventListener("load", function () {
                  var e = a.result;
                  ("string" == typeof e && o.push({ file: l, result: e }),
                    _i6());
                }),
                c(l, t) ? a.readAsDataURL(l) : _i6());
            };
          _i6();
        });
      }),
      (exports.objectKlassEquals = function (e, t) {
        return (
          null !== e && Object.getPrototypeOf(e).constructor.name === t.name
        );
      }),
      (exports.positionNodeOnRange = i),
      (exports.registerNestedElementResolver = function (e, t, n, r) {
        var o = function o(e) {
          return e instanceof t;
        };
        return e.registerNodeTransform(t, function (e) {
          var t = (function (e) {
            var t = e.getChildren();
            for (var _e12 = 0; _e12 < t.length; _e12++) {
              var _n8 = t[_e12];
              if (o(_n8)) return null;
            }
            var n = e,
              r = e;
            for (; null !== n; )
              if (((r = n), (n = n.getParent()), o(n)))
                return { child: r, parent: n };
            return null;
          })(e);
          if (null !== t) {
            var _o6 = t.child,
              _i7 = t.parent;
            if (_o6.is(e)) {
              r(_i7, e);
              var _t5 = _o6.getNextSiblings(),
                _s3 = _t5.length;
              if ((_i7.insertAfter(_o6), 0 !== _s3)) {
                var _e13 = n(_i7);
                _o6.insertAfter(_e13);
                for (var _n9 = 0; _n9 < _s3; _n9++) _e13.append(_t5[_n9]);
              }
              _i7.canBeEmpty() || 0 !== _i7.getChildrenSize() || _i7.remove();
            }
          }
        });
      }),
      (exports.selectionAlwaysOnDisplay = function (e, t) {
        var n = null;
        var r = function r() {
          var r = getSelection(),
            o = r && r.anchorNode,
            i = e.getRootElement();
          null !== o && null !== i && i.contains(o)
            ? null !== n && (n(), (n = null))
            : null === n && (n = a(e, t));
        };
        return e.registerRootListener(function (e) {
          if (e) {
            var _t6 = e.ownerDocument;
            return (
              _t6.addEventListener("selectionchange", r),
              r(),
              function () {
                (null !== n && n(),
                  _t6.removeEventListener("selectionchange", r));
              }
            );
          }
        });
      }));
  },
  null,
);
