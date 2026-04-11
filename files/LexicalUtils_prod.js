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
    var r =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      o = r && "documentMode" in document ? document.documentMode : null,
      i = r && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
      s = r && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
      l =
        !(!r || !("InputEvent" in window) || o) &&
        "getTargetRanges" in new window.InputEvent("input"),
      a = r && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
      c = r && /Android/.test(navigator.userAgent),
      u = r && /Version\/[\d.]+.*Safari/.test(navigator.userAgent) && !c,
      d = r && /^(?=.*Chrome).*/i.test(navigator.userAgent),
      g = r && c && d,
      f = r && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && i && !d;
    function p(e) {
      return e + "px";
    }
    var m = { attributes: !0, characterData: !0, childList: !0, subtree: !0 };
    function $(r, o, i) {
      var s = null,
        l = null,
        a = null,
        c = [];
      var u = document.createElement("div");
      function d() {
        (null === s && n(182), null === l && n(183));
        var _l$getBoundingClientR = l.getBoundingClientRect(),
          e = _l$getBoundingClientR.left,
          a = _l$getBoundingClientR.top,
          d = require("LexicalSelection").createRectsFromDOMRange(r, o);
        var g, f;
        u.isConnected || ((f = u), (g = l).insertBefore(f, g.firstChild));
        var m = !1;
        for (var _t = 0; _t < d.length; _t++) {
          var _n = d[_t],
            _r = c[_t] || document.createElement("div"),
            _o = _r.style;
          "absolute" !== _o.position && ((_o.position = "absolute"), (m = !0));
          var _i = p(_n.left - e);
          _o.left !== _i && ((_o.left = _i), (m = !0));
          var _s = p(_n.top - a);
          _o.top !== _s && ((_r.style.top = _s), (m = !0));
          var _l = p(_n.width);
          _o.width !== _l && ((_r.style.width = _l), (m = !0));
          var _g = p(_n.height);
          (_o.height !== _g && ((_r.style.height = _g), (m = !0)),
            _r.parentNode !== u && (u.append(_r), (m = !0)),
            (c[_t] = _r));
        }
        for (; c.length > d.length; ) c.pop();
        m && i(c);
      }
      function g() {
        ((l = null),
          (s = null),
          null !== a && a.disconnect(),
          (a = null),
          u.remove());
        for (var _e2 of c) _e2.remove();
        c = [];
      }
      u.style.position = "relative";
      var f = r.registerRootListener(function t() {
        var n = r.getRootElement();
        if (null === n) return g();
        var o = n.parentElement;
        if (!require("Lexical").isHTMLElement(o)) return g();
        (g(),
          (s = n),
          (l = o),
          (a = new MutationObserver(function (e) {
            var n = r.getRootElement(),
              o = n && n.parentElement;
            if (n !== s || o !== l) return t();
            for (var _t2 of e) if (!u.contains(_t2.target)) return d();
          })),
          a.observe(o, m),
          d());
      });
      return function () {
        (f(), g());
      };
    }
    function h(t, n, r) {
      if ("text" !== t.type && require("Lexical").$isElementNode(n)) {
        var _e3 = n.getDOMSlot(r);
        return [_e3.element, _e3.getFirstChildOffset() + t.offset];
      }
      return [require("Lexical").getDOMTextNode(r) || r, t.offset];
    }
    function x(e) {
      for (var _t3 of e) {
        var _e4 = _t3.style;
        ("Highlight" !== _e4.background && (_e4.background = "Highlight"),
          "HighlightText" !== _e4.color && (_e4.color = "HighlightText"),
          _e4.marginTop !== p(-1.5) && (_e4.marginTop = p(-1.5)),
          _e4.paddingTop !== p(4) && (_e4.paddingTop = p(4)),
          _e4.paddingBottom !== p(0) && (_e4.paddingBottom = p(0)));
      }
    }
    function C(t, n) {
      if (n === void 0) {
        n = x;
      }
      var r = null,
        o = null,
        i = null,
        s = null,
        l = null,
        a = null,
        c = function c() {};
      function u(u) {
        u.read(function () {
          var u = require("Lexical").$getSelection();
          if (!require("Lexical").$isRangeSelection(u))
            return (
              (r = null),
              (i = null),
              (s = null),
              (a = null),
              c(),
              void (c = function c() {})
            );
          var _ref = (function (e) {
              var t = e.getStartEndPoints();
              return e.isBackward() ? [t[1], t[0]] : t;
            })(u),
            d = _ref[0],
            g = _ref[1],
            f = d.getNode(),
            p = f.getKey(),
            m = d.offset,
            x = g.getNode(),
            C = x.getKey(),
            S = g.offset,
            E = t.getElementByKey(p),
            N = t.getElementByKey(C),
            v = null === r || E !== o || m !== i || p !== r.getKey(),
            R = null === s || N !== l || S !== a || C !== s.getKey();
          if ((v || R) && null !== E && null !== N) {
            var _e5 = (function (e, t, n, r, o, i, s) {
              var l = (e._window ? e._window.document : document).createRange();
              return (
                l.setStart.apply(l, h(t, n, r)),
                l.setEnd.apply(l, h(o, i, s)),
                l
              );
            })(t, d, f, E, g, x, N);
            (c(), (c = $(t, _e5, n)));
          }
          ((r = f), (o = E), (i = m), (s = x), (l = N), (a = S));
        });
      }
      return (
        u(t.getEditorState()),
        require("Lexical").mergeRegister(
          t.registerUpdateListener(function (_ref2) {
            var e = _ref2.editorState;
            return u(e);
          }),
          function () {
            c();
          },
        )
      );
    }
    var S = l,
      E = r,
      N = c,
      v = g,
      R = i,
      w = f,
      A = d,
      y = s,
      b = a,
      P = u;
    function I(e, t) {
      for (var _n2 of t) if (e.type.startsWith(_n2)) return !0;
      return !1;
    }
    function T(e, t) {
      return M("next", e, t);
    }
    function O(t, n) {
      var r = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(
        require("Lexical").$getSiblingCaret(t, n),
      );
      return r && r[0];
    }
    function M(t, n, r) {
      var o = require("Lexical").$getRoot(),
        i = n || o,
        s = require("Lexical").$isElementNode(i)
          ? require("Lexical").$getChildCaret(i, t)
          : require("Lexical").$getSiblingCaret(i, t),
        l = L(i),
        a = r
          ? require("Lexical").$getAdjacentChildCaret(
              require("Lexical").$getChildCaretOrSelf(
                require("Lexical").$getSiblingCaret(r, t),
              ),
            ) || O(r, t)
          : O(i, t);
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
    function L(e) {
      var t = -1;
      for (var _n3 = e; null !== _n3; _n3 = _n3.getParent()) t++;
      return t;
    }
    function _(e, t) {
      return M("previous", e, t);
    }
    function D(t, r, o) {
      var i = require("Lexical").$getCaretInDirection(r, "next");
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
    var F = !(y || !E) && void 0;
    function B(t, n, r) {
      var o = !1;
      var _loop = function _loop(_i2) {
        n(_i2)
          ? null !== r && r(_i2)
          : ((o = !0),
            require("Lexical").$isElementNode(_i2) &&
              B(
                _i2,
                n,
                r ||
                  function (e) {
                    return _i2.insertAfter(e);
                  },
              ),
            _i2.remove());
      };
      for (var _i2 of j(t)) {
        _loop(_i2);
      }
      return o;
    }
    function j(t) {
      return k(require("Lexical").$getChildCaret(t, "previous"));
    }
    function k(t) {
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
            for (var _e6 of j(_t5)) o.push(_e6);
        return r;
      }),
      (exports.$dfs = function (e, t) {
        return Array.from(T(e, t));
      }),
      (exports.$dfsIterator = T),
      (exports.$filter = function (e, t) {
        var n = [];
        for (var _r2 = 0; _r2 < e.length; _r2++) {
          var _o2 = t(e[_r2]);
          null !== _o2 && n.push(_o2);
        }
        return n;
      }),
      (exports.$firstToLastIterator = function (t) {
        return k(require("Lexical").$getChildCaret(t, "next"));
      }),
      (exports.$getAdjacentCaret = function (e) {
        return e ? e.getAdjacentCaret() : null;
      }),
      (exports.$getDepth = L),
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
          var _i3 = o[_n4],
            _s2 = _i3.getKey();
          if (r.has(_s2)) continue;
          var _l2 = require("Lexical").$findMatchingParent(_i3, function (t) {
            return require("Lexical").$isElementNode(t) && !t.isInline();
          });
          if (null === _l2) continue;
          var _a = _l2.getKey();
          _l2.canIndent() && !r.has(_a) && (r.add(_a), t(_l2));
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
              _o3 = _t7[_t7.length - 1];
            _o3 && (r = require("Lexical").$getSiblingCaret(_o3, "next"));
          }
          r =
            r ||
            require("Lexical")
              .$getChildCaret(require("Lexical").$getRoot(), "previous")
              .getFlipped()
              .insert(require("Lexical").$createParagraphNode());
        }
        var o = D(t, r),
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
      (exports.$insertNodeToNearestRootAtCaret = D),
      (exports.$isEditorIsNestedEditor = function (e) {
        return null !== e._parentEditor;
      }),
      (exports.$lastToFirstIterator = j),
      (exports.$restoreEditorState = function (t, n) {
        var r = new Map(),
          o = t._pendingEditorState;
        for (var _ref4 of n._nodeMap) {
          var _t8 = _ref4[0];
          var _o4 = _ref4[1];
          r.set(_t8, require("Lexical").$cloneWithProperties(_o4));
        }
        (o && (o._nodeMap = r), (t._dirtyType = 2));
        var i = n._selection;
        require("Lexical").$setSelection(null === i ? null : i.clone());
      }),
      (exports.$reverseDfs = function (e, t) {
        return Array.from(_(e, t));
      }),
      (exports.$reverseDfsIterator = _),
      (exports.$unwrapAndFilterDescendants = function (e, t) {
        return B(e, t, null);
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
      (exports.CAN_USE_BEFORE_INPUT = S),
      (exports.CAN_USE_DOM = E),
      (exports.IS_ANDROID = N),
      (exports.IS_ANDROID_CHROME = v),
      (exports.IS_APPLE = R),
      (exports.IS_APPLE_WEBKIT = w),
      (exports.IS_CHROME = A),
      (exports.IS_FIREFOX = y),
      (exports.IS_IOS = b),
      (exports.IS_SAFARI = P),
      (exports.calculateZoomLevel = function (e, t) {
        if (t === void 0) {
          t = !1;
        }
        var n = 1;
        if (
          (function () {
            if (void 0 === F) {
              var _e7 = document.createElement("div");
              ((_e7.style.cssText =
                "position: absolute; opacity: 0; width: 100px; left: -1000px;"),
                document.body.appendChild(_e7));
              var _t9 = _e7.getBoundingClientRect();
              (_e7.style.setProperty("zoom", "2"),
                (F = _e7.getBoundingClientRect().width === _t9.width),
                document.body.removeChild(_e7));
            }
            return F;
          })() ||
          t
        )
          for (; e; )
            ((n *= Number(window.getComputedStyle(e).getPropertyValue("zoom"))),
              (e = e.parentElement));
        return n;
      }),
      (exports.isMimeType = I),
      (exports.makeStateWrapper = function (t) {
        var n = function n(_n5) {
            return require("Lexical").$getState(_n5, t);
          },
          r = function r(n, _r3) {
            return require("Lexical").$setState(n, t, _r3);
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
      (exports.markSelection = C),
      (exports.mediaFileReader = function (e, t) {
        var n =
          e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        return new Promise(function (e, r) {
          var o = [],
            _i4 = function i() {
              var _n$next = n.next(),
                s = _n$next.done,
                l = _n$next.value;
              if (s) return e(o);
              var a = new FileReader();
              (a.addEventListener("error", r),
                a.addEventListener("load", function () {
                  var e = a.result;
                  ("string" == typeof e && o.push({ file: l, result: e }),
                    _i4());
                }),
                I(l, t) ? a.readAsDataURL(l) : _i4());
            };
          _i4();
        });
      }),
      (exports.objectKlassEquals = function (e, t) {
        return (
          null !== e && Object.getPrototypeOf(e).constructor.name === t.name
        );
      }),
      (exports.positionNodeOnRange = $),
      (exports.registerNestedElementResolver = function (e, t, n, r) {
        var o = function o(e) {
          return e instanceof t;
        };
        return e.registerNodeTransform(t, function (e) {
          var t = (function (e) {
            var t = e.getChildren();
            for (var _e8 = 0; _e8 < t.length; _e8++) {
              var _n6 = t[_e8];
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
            var _o5 = t.child,
              _i5 = t.parent;
            if (_o5.is(e)) {
              r(_i5, e);
              var _t0 = _o5.getNextSiblings(),
                _s3 = _t0.length;
              if ((_i5.insertAfter(_o5), 0 !== _s3)) {
                var _e9 = n(_i5);
                _o5.insertAfter(_e9);
                for (var _n7 = 0; _n7 < _s3; _n7++) _e9.append(_t0[_n7]);
              }
              _i5.canBeEmpty() || 0 !== _i5.getChildrenSize() || _i5.remove();
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
            : null === n && (n = C(e, t));
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
