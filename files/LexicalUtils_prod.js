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
        u = null,
        g = [];
      var d = document.createElement("div");
      function f() {
        (null === a && n(182), null === c && n(183));
        var _c$getBoundingClientR = c.getBoundingClientRect(),
          e = _c$getBoundingClientR.left,
          o = _c$getBoundingClientR.top,
          u = require("LexicalSelection").createRectsFromDOMRange(i, s);
        var f, p;
        d.isConnected || ((p = d), (f = c).insertBefore(p, f.firstChild));
        var $ = !1;
        for (var _t = 0; _t < u.length; _t++) {
          var _n = u[_t],
            _i = g[_t] || document.createElement("div"),
            _s = _i.style;
          "absolute" !== _s.position && ((_s.position = "absolute"), ($ = !0));
          var _l = r(_n.left - e);
          _s.left !== _l && ((_s.left = _l), ($ = !0));
          var _a = r(_n.top - o);
          _s.top !== _a && ((_i.style.top = _a), ($ = !0));
          var _c = r(_n.width);
          _s.width !== _c && ((_i.style.width = _c), ($ = !0));
          var _f = r(_n.height);
          (_s.height !== _f && ((_i.style.height = _f), ($ = !0)),
            _i.parentNode !== d && (d.append(_i), ($ = !0)),
            (g[_t] = _i));
        }
        for (; g.length > u.length; ) g.pop();
        $ && l(g);
      }
      function p() {
        ((c = null),
          (a = null),
          null !== u && u.disconnect(),
          (u = null),
          d.remove());
        for (var _e2 of g) _e2.remove();
        g = [];
      }
      d.style.position = "relative";
      var $ = i.registerRootListener(function t() {
        var n = i.getRootElement();
        if (null === n) return p();
        var r = n.parentElement;
        if (!require("Lexical").isHTMLElement(r)) return p();
        (p(),
          (a = n),
          (c = r),
          (u = new MutationObserver(function (e) {
            var n = i.getRootElement(),
              r = n && n.parentElement;
            if (n !== a || r !== c) return t();
            for (var _t2 of e) if (!d.contains(_t2.target)) return f();
          })),
          u.observe(r, o),
          f());
      });
      return function () {
        ($(), p());
      };
    }
    function s(t, n, r, o) {
      if ("text" !== n.type && require("Lexical").$isElementNode(r)) {
        var _i2 = require("Lexical").$getDOMSlot(r, o, t);
        return [_i2.element, _i2.getFirstChildOffset() + n.offset];
      }
      return [
        (require("Lexical").$isTextNode(r)
          ? require("Lexical").$getDOMTextNode(r, o, t)
          : require("Lexical").getDOMTextNode(o)) || o,
        n.offset,
      ];
    }
    function l(e) {
      for (var _t3 of e) {
        var _e3 = _t3.style;
        ("Highlight" !== _e3.background && (_e3.background = "Highlight"),
          "HighlightText" !== _e3.color && (_e3.color = "HighlightText"),
          _e3.marginTop !== r(-1.5) && (_e3.marginTop = r(-1.5)),
          _e3.paddingTop !== r(4) && (_e3.paddingTop = r(4)),
          _e3.paddingBottom !== r(0) && (_e3.paddingBottom = r(0)));
      }
    }
    function a(t, n) {
      if (n === void 0) {
        n = l;
      }
      var r = null,
        o = null,
        a = null,
        c = null,
        u = null,
        g = null,
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
                (g = null),
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
              S = f.offset,
              C = p.getNode(),
              x = C.getKey(),
              h = p.offset,
              E = t.getElementByKey(m),
              N = t.getElementByKey(x),
              R = null === r || E !== o || S !== a || m !== r.getKey(),
              I = null === c || N !== u || h !== g || x !== c.getKey();
            if ((R || I) && null !== E && null !== N) {
              var _e4 = (function (e, t, n, r, o, i, l) {
                var a = (
                  e._window ? e._window.document : document
                ).createRange();
                return (
                  a.setStart.apply(a, s(e, t, n, r)),
                  a.setEnd.apply(a, s(e, o, i, l)),
                  a
                );
              })(t, f, $, E, p, C, N);
              (d(), (d = i(t, _e4, n)));
            }
            ((r = $), (o = E), (a = S), (c = C), (u = N), (g = h));
          },
          { editor: t },
        );
      }
      return (
        f(t.getEditorState()),
        require("Lexical").mergeRegister(
          t.registerUpdateListener(function (_ref2) {
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
    function u(e, t) {
      return d("next", e, t);
    }
    function g(t, n) {
      var r = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(
        require("Lexical").$getSiblingCaret(t, n),
      );
      return r && r[0];
    }
    function d(t, n, r) {
      var o = require("Lexical").$getRoot(),
        i = n || o,
        s = require("Lexical").$isElementNode(i)
          ? require("Lexical").$getChildCaret(i, t)
          : require("Lexical").$getSiblingCaret(i, t),
        l = f(i),
        a = r
          ? require("Lexical").$getAdjacentChildCaret(
              require("Lexical").$getChildCaretOrSelf(
                require("Lexical").$getSiblingCaret(r, t),
              ),
            ) || g(r, t)
          : g(i, t);
      var c = l;
      return require("Lexical").makeStepwiseIterator({
        hasNext: function hasNext(e) {
          return null !== e;
        },
        initial: s,
        map: function map(e) {
          return { depth: c, node: e.origin };
        },
        step: function step(t) {
          if (t.isSameNodeCaret(a)) return null;
          require("Lexical").$isChildCaret(t) && c++;
          var n = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(t);
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
    function $(t, r, o) {
      var i = require("Lexical").$getCaretInDirection(r, "next");
      (require("Lexical").$isTextPointCaret(i) &&
        (0 === i.offset
          ? (i = require("Lexical")
              .$getSiblingCaret(i.origin, "previous")
              .getFlipped())
          : i.offset === i.origin.getTextContentSize() &&
            (i = require("Lexical").$getSiblingCaret(i.origin, "next"))),
        i.origin.is(t) &&
          (require("Lexical").$isSiblingCaret(i) ||
            n(342, t.getKey(), t.getType()),
          (i = require("Lexical").$rewindSiblingCaret(i))),
        (t.is(i.getNodeAtCaret()) || t.is(i.getFlipped().getNodeAtCaret())) &&
          t.remove(!0));
      for (
        var _t4 = i;
        _t4;
        _t4 = require("Lexical").$splitAtPointCaretNext(_t4, o)
      )
        i = _t4;
      return (
        require("Lexical").$isTextPointCaret(i) && n(283),
        i.insert(
          t.isInline()
            ? require("Lexical").$createParagraphNode().append(t)
            : t,
        ),
        require("Lexical").$getCaretInDirection(
          require("Lexical").$getSiblingCaret(t.getLatest(), "next"),
          r.direction,
        )
      );
    }
    var m =
      !(require("Lexical").IS_FIREFOX || !require("Lexical").CAN_USE_DOM) &&
      void 0;
    function S(t, n, r) {
      var o = !1;
      var _loop = function _loop(_i3) {
        n(_i3)
          ? null !== r && r(_i3)
          : ((o = !0),
            require("Lexical").$isElementNode(_i3) &&
              S(
                _i3,
                n,
                r ||
                  function (e) {
                    return _i3.insertAfter(e);
                  },
              ),
            _i3.remove());
      };
      for (var _i3 of C(t)) {
        _loop(_i3);
      }
      return o;
    }
    function C(t) {
      return x(require("Lexical").$getChildCaret(t, "previous"));
    }
    function x(t) {
      return require("Lexical").makeStepwiseIterator({
        hasNext: require("Lexical").$isSiblingCaret,
        initial: t.getAdjacentCaret(),
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
      (exports.$descendantsMatching = function (t, n) {
        var r = [],
          o = Array.from(t).reverse();
        for (var _t5 = o.pop(); void 0 !== _t5; _t5 = o.pop())
          if (n(_t5)) r.push(_t5);
          else if (require("Lexical").$isElementNode(_t5))
            for (var _e5 of C(_t5)) o.push(_e5);
        return r;
      }),
      (exports.$dfs = function (e, t) {
        return Array.from(u(e, t));
      }),
      (exports.$dfsIterator = u),
      (exports.$filter = function (e, t) {
        var n = [];
        for (var _r = 0; _r < e.length; _r++) {
          var _o = t(e[_r]);
          null !== _o && n.push(_o);
        }
        return n;
      }),
      (exports.$firstToLastIterator = function (t) {
        return x(require("Lexical").$getChildCaret(t, "next"));
      }),
      (exports.$getAdjacentCaret = function (e) {
        return e ? e.getAdjacentCaret() : null;
      }),
      (exports.$getDepth = f),
      (exports.$getNearestBlockElementAncestorOrThrow = function (t) {
        var r = require("Lexical").$findMatchingParent(t, function (t) {
          return require("Lexical").$isElementNode(t) && !t.isInline();
        });
        return (require("Lexical").$isElementNode(r) || n(4, t.__key), r);
      }),
      (exports.$getNearestNodeOfType = function (e, t) {
        var n = e;
        for (; null != n; ) {
          if (n instanceof t) return n;
          n = n.getParent();
        }
        return null;
      }),
      (exports.$getNextRightPreorderNode = function (t) {
        var n = require("Lexical").$getChildCaretOrSelf(
            require("Lexical").$getSiblingCaret(t, "previous"),
          ),
          r = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(
            n,
            "root",
          );
        return r && r[0].origin;
      }),
      (exports.$getNextSiblingOrParentSibling = function (t) {
        var n = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(
          require("Lexical").$getSiblingCaret(t, "next"),
        );
        return n && [n[0].origin, n[1]];
      }),
      (exports.$handleIndentAndOutdent = function (t) {
        var n = require("Lexical").$getSelection();
        if (!require("Lexical").$isRangeSelection(n)) return !1;
        var r = new Set(),
          o = n.getNodes();
        for (var _n4 = 0; _n4 < o.length; _n4++) {
          var _i4 = o[_n4],
            _s2 = _i4.getKey();
          if (r.has(_s2)) continue;
          var _l2 = require("Lexical").$findMatchingParent(_i4, function (t) {
            return require("Lexical").$isElementNode(t) && !t.isInline();
          });
          if (null === _l2) continue;
          var _a2 = _l2.getKey();
          _l2.canIndent() && !r.has(_a2) && (r.add(_a2), t(_l2));
        }
        return r.size > 0;
      }),
      (exports.$insertFirst = function (t, n) {
        require("Lexical").$getChildCaret(t, "next").insert(n);
      }),
      (exports.$insertNodeIntoLeaf = function (t) {
        var n = require("Lexical").$getSelection();
        if (!require("Lexical").$isRangeSelection(n))
          return void (n && n.insertNodes([t]));
        var r = require("Lexical").$caretRangeFromSelection(n);
        var o = require("Lexical").$getCaretRangeInDirection(
          require("Lexical").$removeTextFromCaretRange(r),
          "next",
        ).anchor;
        if (require("Lexical").$isTextPointCaret(o)) {
          var _t6 = require("Lexical").$splitAtPointCaretNext(o);
          if (!_t6) return;
          o = _t6;
        }
        var i = o.getFlipped();
        (i.insert(t),
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCaretRange(i, i),
          ));
      }),
      (exports.$insertNodeToNearestRoot = function (t) {
        var n =
          require("Lexical").$getSelection() ||
          require("Lexical").$getPreviousSelection();
        var r;
        if (require("Lexical").$isRangeSelection(n))
          r = require("Lexical").$caretFromPoint(n.focus, "next");
        else {
          if (null != n) {
            var _t7 = n.getNodes(),
              _o2 = _t7[_t7.length - 1];
            _o2 && (r = require("Lexical").$getSiblingCaret(_o2, "next"));
          }
          r =
            r ||
            require("Lexical")
              .$getChildCaret(require("Lexical").$getRoot(), "previous")
              .getFlipped()
              .insert(require("Lexical").$createParagraphNode());
        }
        var o = $(t, r),
          i = require("Lexical").$getAdjacentChildCaret(o),
          s = require("Lexical").$isChildCaret(i)
            ? require("Lexical").$normalizeCaret(i)
            : o;
        return (
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCollapsedCaretRange(s),
          ),
          t.getLatest()
        );
      }),
      (exports.$insertNodeToNearestRootAtCaret = $),
      (exports.$isEditorIsNestedEditor = function (e) {
        return null !== e._parentEditor;
      }),
      (exports.$lastToFirstIterator = C),
      (exports.$restoreEditorState = function (t, n) {
        var r = new Map(),
          o = t._pendingEditorState;
        for (var _ref4 of n._nodeMap) {
          var _t8 = _ref4[0];
          var _o3 = _ref4[1];
          r.set(_t8, require("Lexical").$cloneWithProperties(_o3));
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
        return S(e, t, null);
      }),
      (exports.$unwrapNode = function (t) {
        require("Lexical")
          .$rewindSiblingCaret(require("Lexical").$getSiblingCaret(t, "next"))
          .splice(1, t.getChildren());
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
              var _e6 = document.createElement("div");
              ((_e6.style.position = "absolute"),
                (_e6.style.opacity = "0"),
                (_e6.style.width = "100px"),
                (_e6.style.left = "-1000px"),
                document.body.appendChild(_e6));
              var _t9 = _e6.getBoundingClientRect();
              (_e6.style.setProperty("zoom", "2"),
                (m = _e6.getBoundingClientRect().width === _t9.width),
                document.body.removeChild(_e6));
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
      (exports.makeStateWrapper = function (t) {
        var n = function n(_n5) {
            return require("Lexical").$getState(_n5, t);
          },
          r = function r(n, _r2) {
            return require("Lexical").$setState(n, t, _r2);
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
          stateConfig: t,
        };
      }),
      (exports.markSelection = a),
      (exports.mediaFileReader = function (e, t) {
        var n =
          e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        return new Promise(function (e, r) {
          var o = [],
            _i5 = function i() {
              var _n$next = n.next(),
                s = _n$next.done,
                l = _n$next.value;
              if (s) return e(o);
              var a = new FileReader();
              (a.addEventListener("error", r),
                a.addEventListener("load", function () {
                  var e = a.result;
                  ("string" == typeof e && o.push({ file: l, result: e }),
                    _i5());
                }),
                c(l, t) ? a.readAsDataURL(l) : _i5());
            };
          _i5();
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
            for (var _e7 = 0; _e7 < t.length; _e7++) {
              var _n6 = t[_e7];
              if (o(_n6)) return null;
            }
            var n = e,
              r = e;
            for (; null !== n; )
              if (((r = n), (n = n.getParent()), o(n)))
                return { child: r, parent: n };
            return null;
          })(e);
          if (null !== t) {
            var _o4 = t.child,
              _i6 = t.parent;
            if (_o4.is(e)) {
              r(_i6, e);
              var _t0 = _o4.getNextSiblings(),
                _s3 = _t0.length;
              if ((_i6.insertAfter(_o4), 0 !== _s3)) {
                var _e8 = n(_i6);
                _o4.insertAfter(_e8);
                for (var _n7 = 0; _n7 < _s3; _n7++) _e8.append(_t0[_n7]);
              }
              _i6.canBeEmpty() || 0 !== _i6.getChildrenSize() || _i6.remove();
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
            var _t1 = e.ownerDocument;
            return (
              _t1.addEventListener("selectionchange", r),
              r(),
              function () {
                (null !== n && n(),
                  _t1.removeEventListener("selectionchange", r));
              }
            );
          }
        });
      }));
  },
  null,
);
