__d(
  "LexicalList.prod",
  ["Lexical", "LexicalExtension", "LexicalHtml", "LexicalUtils"],
  function $module_LexicalList_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_Lexical;
    var _require_LexicalHtml;
    function i(e) {
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
    function s(e) {
      var t = 1,
        n = e.getParent();
      for (; null != n; ) {
        if (x(n)) {
          var _e2 = n.getParent();
          if (v(_e2)) {
            (t++, (n = _e2.getParent()));
            continue;
          }
          i(40);
        }
        return t;
      }
      return t;
    }
    function o(e) {
      var t = e.getParent();
      v(t) || i(40);
      var n = t,
        r = t;
      for (; null !== r; ) ((r = r.getParent()), v(r) && (n = r));
      return n;
    }
    function l(e) {
      var t = [];
      var n = e.getChildren().filter(x);
      for (var _e3 = 0; _e3 < n.length; _e3++) {
        var _r = n[_e3],
          _i = _r.getFirstChild();
        v(_i) ? (t = t.concat(l(_i))) : t.push(_r);
      }
      return t;
    }
    function c(e) {
      return x(e) && v(e.getFirstChild());
    }
    function a(e, t) {
      return (
        x(e) &&
        (0 === t.length ||
          (1 === t.length && e.is(t[0]) && 0 === e.getChildrenSize()))
      );
    }
    function g(e) {
      var n = require("Lexical").$getSelection();
      if (null !== n) {
        var _r2 = n.getNodes();
        if (require("Lexical").$isRangeSelection(n)) {
          var _n$getStartEndPoints = n.getStartEndPoints(),
            _i2 = _n$getStartEndPoints[0],
            _s = _i2.getNode(),
            _o = _s.getParent();
          if (require("Lexical").$isRootOrShadowRoot(_s)) {
            var _e4 = _s.getFirstChild();
            if (_e4) _r2 = _e4.selectStart().getNodes();
            else {
              var _e5 = require("Lexical").$createParagraphNode();
              (_s.append(_e5), (_r2 = _e5.select().getNodes()));
            }
          } else if (a(_s, _r2)) {
            var _n = k(e);
            if (require("Lexical").$isRootOrShadowRoot(_o)) {
              _s.replace(_n);
              var _e6 = O();
              (require("Lexical").$isElementNode(_s) &&
                (_e6.setFormat(_s.getFormatType()),
                _e6.setIndent(_s.getIndent())),
                _n.append(_e6));
            } else if (x(_s)) {
              var _e7 = _s.getParentOrThrow();
              null === require("Lexical").$getSlotHost(_e7) &&
                (u(_n, _e7.getChildren()), _e7.replace(_n));
            }
            return;
          }
        }
        var _i3 = new Set();
        for (var _n2 = 0; _n2 < _r2.length; _n2++) {
          var _s2 = _r2[_n2];
          if (
            require("Lexical").$isElementNode(_s2) &&
            _s2.isEmpty() &&
            !x(_s2) &&
            null === require("Lexical").$getSlotHost(_s2) &&
            !_i3.has(_s2.getKey())
          ) {
            d(_s2, e);
            continue;
          }
          var _o2 = require("Lexical").$isLeafNode(_s2)
            ? _s2.getParent()
            : x(_s2) && _s2.isEmpty()
              ? _s2
              : null;
          for (; null != _o2; ) {
            var _n3 = _o2.getKey();
            if (v(_o2)) {
              if (
                !_i3.has(_n3) &&
                null === require("Lexical").$getSlotHost(_o2)
              ) {
                var _t = k(e);
                (u(_t, _o2.getChildren()), _o2.replace(_t), _i3.add(_n3));
              }
              break;
            }
            {
              var _r3 = _o2.getParent();
              if (
                require("Lexical").$isRootOrShadowRoot(_r3) &&
                !_i3.has(_n3)
              ) {
                (_i3.add(_n3), d(_o2, e));
                break;
              }
              _o2 = _r3;
            }
          }
        }
      }
    }
    function u(e, t) {
      e.splice(e.getChildrenSize(), 0, t);
    }
    function d(e, n) {
      if (v(e)) return e;
      var r = e.getPreviousSibling(),
        i = e.getNextSibling(),
        s = O();
      var o;
      if ((u(s, e.getChildren()), v(r) && n === r.getListType()))
        (r.append(s),
          v(i) && n === i.getListType() && (u(r, i.getChildren()), i.remove()),
          (o = r));
      else if (v(i) && n === i.getListType())
        (i.getFirstChildOrThrow().insertBefore(s), (o = i));
      else {
        var _t2 = k(n);
        (_t2.append(s), e.replace(_t2), (o = _t2));
      }
      (s.setFormat(e.getFormatType()), s.setIndent(e.getIndent()));
      var l = require("Lexical").$getSelection();
      return (
        require("Lexical").$isRangeSelection(l) &&
          (o.getKey() === l.anchor.key &&
            l.anchor.set(s.getKey(), l.anchor.offset, "element"),
          o.getKey() === l.focus.key &&
            l.focus.set(s.getKey(), l.focus.offset, "element")),
        e.remove(),
        o
      );
    }
    function h(e, t) {
      var n = e.getLastChild(),
        r = t.getFirstChild();
      n &&
        r &&
        c(n) &&
        c(r) &&
        (h(n.getFirstChild(), r.getFirstChild()), r.remove());
      var i = t.getChildren();
      (i.length > 0 && e.append.apply(e, i), t.remove());
    }
    function f() {
      var n = require("Lexical").$getSelection();
      if (require("Lexical").$isRangeSelection(n)) {
        var _r4 = new Set(),
          _i4 = n.getNodes(),
          _s3 = n.anchor.getNode();
        if (a(_s3, _i4)) _r4.add(o(_s3));
        else
          for (var _n4 = 0; _n4 < _i4.length; _n4++) {
            var _s4 = _i4[_n4];
            if (require("Lexical").$isLeafNode(_s4)) {
              var _t3 = require("LexicalUtils").$getNearestNodeOfType(_s4, _N);
              null != _t3 && _r4.add(o(_t3));
            }
          }
        for (var _e8 of _r4) {
          if (null !== require("Lexical").$getSlotHost(_e8)) continue;
          var _r5 = _e8;
          var _i5 = l(_e8);
          for (var _e9 of _i5) {
            var _i6 = require("Lexical")
              .$createParagraphNode()
              .setTextStyle(n.style)
              .setTextFormat(n.format);
            (u(_i6, _e9.getChildren()),
              _r5.insertAfter(_i6),
              (_r5 = _i6),
              _e9.__key === n.anchor.key &&
                require("Lexical").$setPointFromCaret(
                  n.anchor,
                  require("Lexical").$normalizeCaret(
                    require("Lexical").$getChildCaret(_i6, "next"),
                  ),
                ),
              _e9.__key === n.focus.key &&
                require("Lexical").$setPointFromCaret(
                  n.focus,
                  require("Lexical").$normalizeCaret(
                    require("Lexical").$getChildCaret(_i6, "next"),
                  ),
                ),
              _e9.remove());
          }
          _e8.remove();
        }
      }
    }
    function p(e) {
      var t = "check" !== e.getListType();
      var n = e.getStart();
      for (var _r6 of e.getChildren())
        x(_r6) &&
          (_r6.getValue() !== n && _r6.setValue(n),
          t && null != _r6.getLatest().__checked && _r6.setChecked(void 0),
          v(_r6.getFirstChild()) || n++);
    }
    function m(e) {
      var n = new Set();
      if (c(e) || n.has(e.getKey())) return;
      var r = e.getParent(),
        i = e.getNextSibling(),
        s = e.getPreviousSibling();
      if (c(i) && c(s)) {
        var _t4 = s.getFirstChild();
        if (v(_t4)) {
          _t4.append(e);
          var _r7 = i.getFirstChild();
          if (v(_r7)) {
            (u(_t4, _r7.getChildren()), i.remove(), n.add(i.getKey()));
          }
        }
      } else if (c(i)) {
        var _t5 = i.getFirstChild();
        if (v(_t5)) {
          var _n5 = _t5.getFirstChild();
          null !== _n5 && _n5.insertBefore(e);
        }
      } else if (c(s)) {
        var _t6 = s.getFirstChild();
        v(_t6) && _t6.append(e);
      } else if (v(r)) {
        var _n6 = require("Lexical").$copyNode(e),
          _o3 = require("Lexical").$copyNode(r);
        (_n6.append(_o3),
          _o3.append(e),
          s ? s.insertAfter(_n6) : i ? i.insertBefore(_n6) : r.append(_n6));
      }
    }
    function _(e) {
      if (c(e)) return;
      var n = e.getParent(),
        r = n ? n.getParent() : void 0;
      if (v(r ? r.getParent() : void 0) && x(r) && v(n)) {
        var _i7 = n ? n.getFirstChild() : void 0,
          _s5 = n ? n.getLastChild() : void 0;
        if (e.is(_i7)) (r.insertBefore(e), n.isEmpty() && r.remove());
        else if (e.is(_s5)) (r.insertAfter(e), n.isEmpty() && r.remove());
        else {
          var _require_Lexical;
          var _i8 = (_require_Lexical = require("Lexical")).$copyNode(e),
            _s6 = _require_Lexical.$copyNode(n);
          (_i8.append(_s6),
            e.getPreviousSiblings().forEach(function (e) {
              return _s6.append(e);
            }));
          var _o4 = _require_Lexical.$copyNode(e),
            _l = _require_Lexical.$copyNode(n);
          (_o4.append(_l),
            u(_l, e.getNextSiblings()),
            r.insertBefore(_i8),
            r.insertAfter(_o4),
            r.replace(e));
        }
      }
    }
    function C(e) {
      if (e === void 0) {
        e = !1;
      }
      var n = require("Lexical").$getSelection();
      if (!require("Lexical").$isRangeSelection(n) || !n.isCollapsed())
        return !1;
      var r = n.anchor.getNode();
      var s = null;
      if (x(r) && 0 === r.getChildrenSize()) s = r;
      else if (require("Lexical").$isTextNode(r)) {
        var _e0 = r.getParent();
        x(_e0) &&
          _e0.getChildren().every(function (e) {
            return (
              require("Lexical").$isTextNode(e) &&
              "" === e.getTextContent().trim()
            );
          }) &&
          (s = _e0);
      }
      if (null === s) return !1;
      var l = o(s),
        c = s.getParent();
      v(c) || i(40);
      var a = c.getParent();
      var g;
      if (require("Lexical").$isRootOrShadowRoot(a))
        ((g = require("Lexical").$createParagraphNode()), l.insertAfter(g));
      else {
        if (!x(a)) return !1;
        ((g = require("Lexical").$copyNode(a)), a.insertAfter(g));
      }
      g.setTextStyle(n.style).setTextFormat(n.format).select();
      var u = s.getNextSiblings();
      if (u.length > 0) {
        var _n7 = e
            ? (function (e, t) {
                return e.getStart() + t.getIndexWithinParent();
              })(c, s)
            : 1,
          _r8 = require("Lexical").$copyNode(c).setStart(_n7);
        if (x(g)) {
          var _e1 = require("Lexical").$copyNode(g);
          (_e1.append(_r8), g.insertAfter(_e1));
        } else g.insertAfter(_r8);
        _r8.append.apply(_r8, u);
      }
      return (
        (function (e) {
          var t = e;
          for (
            ;
            null == t.getNextSibling() && null == t.getPreviousSibling();
          ) {
            var _e10 = t.getParent();
            if (null == _e10 || (!x(_e10) && !v(_e10))) break;
            t = _e10;
          }
          t.remove();
        })(s),
        !0
      );
    }
    var _N = (function (_t$ElementNode) {
      function N(e, t, n) {
        var _this;
        if (e === void 0) {
          e = 1;
        }
        if (t === void 0) {
          t = void 0;
        }
        ((_this = _t$ElementNode.call(this, n) || this),
          (_this.__value = void 0 === e ? 1 : e),
          (_this.__checked = t));
        return _this;
      }
      babelHelpers.inheritsLoose(N, _t$ElementNode);
      var _proto = N.prototype;
      _proto.$config = function $config() {
        return this.config("listitem", {
          $transform: function $transform(e) {
            var n = e.getParent();
            if (v(n))
              "check" !== n.getListType() &&
                null != e.getChecked() &&
                e.setChecked(void 0);
            else if (n) {
              var _r9 = e.createParentElementNode();
              v(_r9) || i(340);
              var _s7 = [e];
              for (var _n8 of ["previous", "next"]) {
                _s7.reverse();
                for (var _ref2 of require("Lexical").$getSiblingCaret(e, _n8)) {
                  var _r0 = _ref2.origin;
                  if (!x(_r0)) break;
                  _s7.push(_r0);
                }
              }
              (e.insertBefore(_r9),
                _r9.splice(0, 0, _s7),
                require("Lexical").$isRootOrShadowRoot(n) ||
                  (require("Lexical").$insertNodeToNearestRootAtCaret(
                    _r9,
                    require("Lexical").$rewindSiblingCaret(
                      require("Lexical").$getSiblingCaret(_r9, "next"),
                    ),
                    {
                      $shouldSplit: function $shouldSplit() {
                        return !1;
                      },
                      removeEmptyDestination: !0,
                    },
                  ),
                  n.isEmpty() && n.isAttached() && n.remove()));
            }
          },
          extends: require("Lexical").ElementNode,
          importDOM: require("Lexical").buildImportMap({
            li: function li() {
              return { conversion: S, priority: 0 };
            },
          }),
        });
      };
      _proto.afterCloneFrom = function afterCloneFrom(e) {
        (_t$ElementNode.prototype.afterCloneFrom.call(this, e),
          (this.__value = e.__value),
          (this.__checked = e.__checked));
      };
      _proto.createDOM = function createDOM(e) {
        var n = require("Lexical").$getDocument().createElement("li");
        return (this.updateListItemDOM(null, n, e), n);
      };
      _proto.updateListItemDOM = function updateListItemDOM(e, n, r) {
        (!(function (e, t) {
          var n = t.getParent();
          !v(n) || "check" !== n.getListType() || v(t.getFirstChild())
            ? (e.removeAttribute("role"),
              e.removeAttribute("tabIndex"),
              e.removeAttribute("aria-checked"))
            : (e.setAttribute("role", "checkbox"),
              e.setAttribute("tabIndex", "-1"),
              e.setAttribute(
                "aria-checked",
                t.getChecked() ? "true" : "false",
              ));
        })(n, this),
          (n.value = this.__value),
          (function (e, n, r) {
            var i = n.list;
            if (!i) return;
            var s = i.listitem,
              o = i.nested && i.nested.listitem,
              l = r.getParent(),
              c = v(l) && "check" === l.getListType(),
              a = r.getChecked(),
              g = r.getChildren().some(function (e) {
                return v(e);
              }),
              u = [];
            void 0 !== i.listitemChecked && u.push(i.listitemChecked);
            void 0 !== i.listitemUnchecked && u.push(i.listitemUnchecked);
            void 0 !== o &&
              u.push.apply(u, require("Lexical").normalizeClassNames(o));
            u.length > 0 &&
              require("Lexical").removeClassNamesFromElement.apply(
                require("Lexical"),
                [e].concat(u),
              );
            var d = [];
            void 0 !== s &&
              d.push.apply(d, require("Lexical").normalizeClassNames(s));
            if (c) {
              var _e11 = a ? i.listitemChecked : i.listitemUnchecked;
              void 0 !== _e11 && d.push(_e11);
            }
            void 0 !== o &&
              g &&
              d.push.apply(d, require("Lexical").normalizeClassNames(o));
            d.length > 0 &&
              require("Lexical").addClassNamesToElement.apply(
                require("Lexical"),
                [e].concat(d),
              );
          })(n, r.theme, this));
        var i = e ? e.__style : "",
          s = this.__style;
        (i !== s && require("Lexical").setDOMStyleFromCSS(n.style, s, i),
          (function (e, n, r) {
            var i = n.__textStyle,
              s = r ? r.__textStyle : "";
            if (null !== r && s === i) return;
            var o = require("Lexical").getStyleObjectFromCSS(i);
            for (var _t7 in o)
              e.style.setProperty("--listitem-marker-" + _t7, o[_t7]);
            if ("" !== s)
              for (var _n9 in require("Lexical").getStyleObjectFromCSS(s))
                _n9 in o || e.style.removeProperty("--listitem-marker-" + _n9);
          })(n, this, e));
      };
      _proto.updateDOM = function updateDOM(e, t, n) {
        var r = t;
        return (this.updateListItemDOM(e, r, n), !1);
      };
      _proto.updateFromJSON = function updateFromJSON(e) {
        return _t$ElementNode.prototype.updateFromJSON
          .call(this, e)
          .setValue(e.value)
          .setChecked(e.checked);
      };
      _proto.exportDOM = function exportDOM(e) {
        var n = this.createDOM(e._config),
          r = this.getFormatType();
        r && (n.style.textAlign = r);
        var i = this.getDirection();
        return (
          i && (n.dir = i),
          c(this)
            ? {
                after: function after(e) {
                  if (require("Lexical").isHTMLElement(e)) {
                    var _n0 = e.previousElementSibling;
                    if (
                      require("Lexical").isHTMLElement(_n0) &&
                      "LI" === _n0.nodeName
                    ) {
                      for (; e.firstChild; ) _n0.append(e.firstChild);
                      e.remove();
                    }
                  }
                  return e;
                },
                element: n,
              }
            : { element: n }
        );
      };
      _proto.exportJSON = function exportJSON() {
        return babelHelpers["extends"](
          {},
          _t$ElementNode.prototype.exportJSON.call(this),
          { checked: this.getChecked(), value: this.getValue() },
        );
      };
      _proto.append = function append() {
        for (var _n1 = 0; _n1 < arguments.length; _n1++) {
          var _r1 =
            _n1 < 0 || arguments.length <= _n1 ? undefined : arguments[_n1];
          if (
            require("Lexical").$isElementNode(_r1) &&
            this.canMergeWith(_r1)
          ) {
            var _e12 = _r1.getChildren();
            (this.append.apply(this, _e12), _r1.remove());
          } else _t$ElementNode.prototype.append.call(this, _r1);
        }
        return this;
      };
      _proto.replace = function replace(e, n) {
        if (x(e)) return _t$ElementNode.prototype.replace.call(this, e);
        this.setIndent(0);
        var r = this.getParentOrThrow();
        if (!v(r)) return e;
        if (r.__first === this.getKey()) r.insertBefore(e);
        else if (r.__last === this.getKey()) r.insertAfter(e);
        else {
          var _n10 = require("Lexical").$copyNode(r);
          var _i9 = this.getNextSibling();
          for (; _i9; ) {
            var _e13 = _i9;
            ((_i9 = _i9.getNextSibling()), _n10.append(_e13));
          }
          (r.insertAfter(e), e.insertAfter(_n10));
        }
        var s = this.__key;
        var o = 0;
        if (
          (n &&
            (require("Lexical").$isElementNode(e) || i(139),
            (o = e.getChildrenSize()),
            e.splice(o, 0, this.getChildren())),
          n && require("Lexical").$isElementNode(e))
        ) {
          var _n11 = require("Lexical").$getSelection();
          if (require("Lexical").$isRangeSelection(_n11))
            for (var _t8 of _n11.getStartEndPoints())
              _t8.key === s &&
                "element" === _t8.type &&
                _t8.set(e.getKey(), o + _t8.offset, "element");
        }
        return (this.remove(), 0 === r.getChildrenSize() && r.remove(), e);
      };
      _proto.insertAfter = function insertAfter(e, n) {
        if (n === void 0) {
          n = !0;
        }
        var r = this.getParentOrThrow();
        if ((v(r) || i(39), x(e)))
          return _t$ElementNode.prototype.insertAfter.call(this, e, n);
        var s = this.getNextSiblings();
        if ((r.insertAfter(e, n), 0 !== s.length)) {
          var _i0 = require("Lexical").$copyNode(r);
          (s.forEach(function (e) {
            return _i0.append(e);
          }),
            e.insertAfter(_i0, n));
        }
        return e;
      };
      _proto.remove = function remove(e) {
        var t = this.getPreviousSibling(),
          n = this.getNextSibling();
        (_t$ElementNode.prototype.remove.call(this, e),
          t &&
            n &&
            c(t) &&
            c(n) &&
            (h(t.getFirstChild(), n.getFirstChild()), n.remove()));
      };
      _proto.resetOnCopyNodeFrom = function resetOnCopyNodeFrom(e) {
        (_t$ElementNode.prototype.resetOnCopyNodeFrom.call(this, e),
          e.getChecked() && this.setChecked(!1));
      };
      _proto.insertNewAfter = function insertNewAfter(e, n) {
        if (n === void 0) {
          n = !0;
        }
        var r = require("Lexical").$copyNode(this);
        return (this.insertAfter(r, n), r);
      };
      _proto.collapseAtStart = function collapseAtStart(e) {
        var _t$$createParagraphNo;
        if (c(this)) return !1;
        var n = this.getParentOrThrow();
        if (x(n.getParentOrThrow())) return (_(this), !0);
        var r = (_t$$createParagraphNo =
            require("Lexical").$createParagraphNode()).append.apply(
            _t$$createParagraphNo,
            this.getChildren(),
          ),
          i = this.getNextSiblings();
        if (i.length > 0) {
          var _e14 = require("Lexical").$copyNode(n);
          (_e14.append.apply(_e14, i), n.insertAfter(_e14));
        }
        return (
          n.insertAfter(r),
          this.remove(),
          0 === n.getChildrenSize() && n.remove(),
          r.selectStart(),
          !0
        );
      };
      _proto.getValue = function getValue() {
        return this.getLatest().__value;
      };
      _proto.setValue = function setValue(e) {
        var t = this.getWritable();
        return ((t.__value = e), t);
      };
      _proto.getChecked = function getChecked() {
        var e = this.getLatest();
        var t;
        var n = this.getParent();
        return (
          v(n) && (t = n.getListType()),
          "check" === t ? Boolean(e.__checked) : void 0
        );
      };
      _proto.setChecked = function setChecked(e) {
        var t = this.getWritable();
        return ((t.__checked = e), t);
      };
      _proto.toggleChecked = function toggleChecked() {
        var e = this.getWritable();
        return e.setChecked(!e.__checked);
      };
      _proto.getIndent = function getIndent() {
        var e = this.getParent();
        if (null === e || !this.isAttached()) return this.getLatest().__indent;
        var t = e.getParentOrThrow(),
          n = 0;
        for (; x(t); ) ((t = t.getParentOrThrow().getParentOrThrow()), n++);
        return n;
      };
      _proto.setIndent = function setIndent(e) {
        ("number" != typeof e && i(117), (e = Math.floor(e)) >= 0 || i(199));
        var t = this.getIndent();
        for (; t !== e; ) t < e ? (m(this), t++) : (_(this), t--);
        return this;
      };
      _proto.canInsertAfter = function canInsertAfter(e) {
        return x(e);
      };
      _proto.canReplaceWith = function canReplaceWith(e) {
        return x(e);
      };
      _proto.canMergeWith = function canMergeWith(e) {
        return x(e) || require("Lexical").$isParagraphNode(e);
      };
      _proto.extractWithChild = function extractWithChild(e, n) {
        if (!require("Lexical").$isRangeSelection(n)) return !1;
        var r = n.anchor.getNode(),
          i = n.focus.getNode();
        return (
          this.isParentOf(r) &&
          this.isParentOf(i) &&
          this.getTextContent().length === n.getTextContent().length
        );
      };
      _proto.isParentRequired = function isParentRequired() {
        return !0;
      };
      _proto.createParentElementNode = function createParentElementNode() {
        return k("bullet");
      };
      _proto.canMergeWhenEmpty = function canMergeWhenEmpty() {
        return !0;
      };
      return N;
    })((_require_Lexical = require("Lexical")).ElementNode);
    function S(e) {
      if (e.classList.contains("task-list-item"))
        for (var _t9 of e.children) if ("INPUT" === _t9.tagName) return T(_t9);
      if (e.classList.contains("joplin-checkbox"))
        for (var _t0 of e.children)
          if (
            _t0.classList.contains("checkbox-wrapper") &&
            _t0.children.length > 0 &&
            "INPUT" === _t0.children[0].tagName
          )
            return T(_t0.children[0]);
      var n = e.getAttribute("aria-checked"),
        r = O("true" === n || ("false" !== n && void 0));
      return (
        require("Lexical").$setFormatFromDOM(r, e),
        {
          after: y.bind(null, r),
          node: require("Lexical").$setDirectionFromDOM(r, e),
        }
      );
    }
    function T(e) {
      if (!("checkbox" === e.getAttribute("type"))) return { node: null };
      var t = O(e.hasAttribute("checked"));
      return { after: y.bind(null, t), node: t };
    }
    function y(e, n) {
      var r = n[0];
      return 1 === n.length &&
        require("Lexical").$isParagraphNode(r) &&
        !e.getFormatType() &&
        r.getFormatType()
        ? (e.setFormat(r.getFormatType()), r.getChildren())
        : n;
    }
    function O(e) {
      return require("Lexical").$applyNodeReplacement(new _N(void 0, e));
    }
    function x(e) {
      return e instanceof _N;
    }
    var _L = (function (_t$ElementNode2) {
      function L(e, t, n) {
        var _this2;
        if (e === void 0) {
          e = "number";
        }
        if (t === void 0) {
          t = 1;
        }
        _this2 = _t$ElementNode2.call(this, n) || this;
        var r = M[e] || e;
        ((_this2.__listType = r),
          (_this2.__tag = "number" === r ? "ol" : "ul"),
          (_this2.__start = t));
        return _this2;
      }
      babelHelpers.inheritsLoose(L, _t$ElementNode2);
      var _proto2 = L.prototype;
      _proto2.$config = function $config() {
        return this.config("list", {
          $transform: function $transform(e) {
            (!(function (e) {
              var t = e.getNextSibling();
              v(t) && e.getListType() === t.getListType() && h(e, t);
            })(e),
              p(e));
          },
          extends: require("Lexical").ElementNode,
          importDOM: require("Lexical").buildImportMap({
            ol: function ol() {
              return { conversion: E, priority: 0 };
            },
            ul: function ul() {
              return { conversion: E, priority: 0 };
            },
          }),
        });
      };
      _proto2.afterCloneFrom = function afterCloneFrom(e) {
        (_t$ElementNode2.prototype.afterCloneFrom.call(this, e),
          (this.__listType = e.__listType),
          (this.__tag = e.__tag),
          (this.__start = e.__start));
      };
      _proto2.getTag = function getTag() {
        return this.getLatest().__tag;
      };
      _proto2.setListType = function setListType(e) {
        var t = this.getWritable();
        return (
          (t.__listType = e),
          (t.__tag = "number" === e ? "ol" : "ul"),
          t
        );
      };
      _proto2.getListType = function getListType() {
        return this.getLatest().__listType;
      };
      _proto2.getStart = function getStart() {
        return this.getLatest().__start;
      };
      _proto2.setStart = function setStart(e) {
        var t = this.getWritable();
        return ((t.__start = e), t);
      };
      _proto2.createDOM = function createDOM(e, n) {
        var r = this.__tag,
          i = require("Lexical").$getDocument().createElement(r);
        return (
          1 !== this.__start && i.setAttribute("start", String(this.__start)),
          (i.__lexicalListType = this.__listType),
          $(i, e.theme, this),
          i
        );
      };
      _proto2.updateDOM = function updateDOM(e, t, n) {
        return (
          e.__tag !== this.__tag ||
          e.__listType !== this.__listType ||
          ($(t, n.theme, this),
          e.__start !== this.__start &&
            t.setAttribute("start", String(this.__start)),
          !1)
        );
      };
      _proto2.updateFromJSON = function updateFromJSON(e) {
        return _t$ElementNode2.prototype.updateFromJSON
          .call(this, e)
          .setListType(e.listType)
          .setStart(e.start);
      };
      _proto2.exportDOM = function exportDOM(e) {
        var n = this.createDOM(e._config, e);
        return (
          require("Lexical").isHTMLElement(n) &&
            (1 !== this.__start &&
              n.setAttribute("start", String(this.__start)),
            "check" === this.__listType &&
              n.setAttribute("__lexicalListType", "check")),
          { element: n }
        );
      };
      _proto2.exportJSON = function exportJSON() {
        return babelHelpers["extends"](
          {},
          _t$ElementNode2.prototype.exportJSON.call(this),
          {
            listType: this.getListType(),
            start: this.getStart(),
            tag: this.getTag(),
          },
        );
      };
      _proto2.canBeEmpty = function canBeEmpty() {
        return !1;
      };
      _proto2.canIndent = function canIndent() {
        return !1;
      };
      _proto2.splice = function splice(e, n, r) {
        var i = r;
        for (var _e15 = 0; _e15 < r.length; _e15++) {
          var _n12 = r[_e15];
          x(_n12) ||
            (i === r && (i = [].concat(r)),
            (i[_e15] = this.createListItemNode().append(
              !require("Lexical").$isElementNode(_n12) ||
                v(_n12) ||
                _n12.isInline()
                ? _n12
                : require("Lexical").$createTextNode(_n12.getTextContent()),
            )));
        }
        return _t$ElementNode2.prototype.splice.call(this, e, n, i);
      };
      _proto2.extractWithChild = function extractWithChild(e) {
        return x(e);
      };
      _proto2.createListItemNode = function createListItemNode() {
        return O();
      };
      return L;
    })(_require_Lexical.ElementNode);
    function $(e, n, r) {
      var i = [],
        o = [],
        l = n.list;
      if (void 0 !== l) {
        var _e16 = l[r.__tag + "Depth"] || [],
          _n13 = s(r) - 1,
          _c = _n13 % _e16.length,
          _a = _e16[_c],
          _g = l[r.__tag];
        var _u;
        var _d = l.nested,
          _h = l.checklist;
        if (
          (void 0 !== _d && _d.list && (_u = _d.list),
          void 0 !== _g && i.push(_g),
          void 0 !== _h && "check" === r.__listType && i.push(_h),
          void 0 !== _a)
        ) {
          i.push.apply(i, require("Lexical").normalizeClassNames(_a));
          for (var _t1 = 0; _t1 < _e16.length; _t1++)
            _t1 !== _c && o.push(r.__tag + _t1);
        }
        if (void 0 !== _u) {
          var _e17 = require("Lexical").normalizeClassNames(_u);
          _n13 > 1 ? i.push.apply(i, _e17) : o.push.apply(o, _e17);
        }
      }
      (o.length > 0 &&
        require("Lexical").removeClassNamesFromElement.apply(
          require("Lexical"),
          [e].concat(o),
        ),
        i.length > 0 &&
          require("Lexical").addClassNamesToElement.apply(
            require("Lexical"),
            [e].concat(i),
          ));
    }
    function E(e) {
      var n;
      if (
        (function (e) {
          return (
            require("Lexical").isHTMLElement(e) &&
            "ol" === e.nodeName.toLowerCase()
          );
        })(e)
      ) {
        var _t10 = e.start;
        n = k("number", _t10);
      } else
        n = (function (e) {
          if (
            "check" === e.getAttribute("__lexicallisttype") ||
            e.classList.contains("contains-task-list") ||
            "1" === e.getAttribute("data-is-checklist")
          )
            return !0;
          for (var _n14 of e.childNodes)
            if (
              require("Lexical").isHTMLElement(_n14) &&
              _n14.hasAttribute("aria-checked")
            )
              return !0;
          return !1;
        })(e)
          ? k("check")
          : k("bullet");
      return (
        require("Lexical").$setDirectionFromDOM(n, e),
        {
          after: function after(e) {
            return (function (e, t) {
              var n = t.createListItemNode.bind(t),
                r = [];
              for (var _t11 = 0; _t11 < e.length; _t11++) {
                var _i1 = e[_t11];
                if (x(_i1)) {
                  r.push(_i1);
                  var _e18 = _i1.getChildren();
                  _e18.length > 1 &&
                    _e18.forEach(function (e) {
                      v(e) && r.push(n().append(e));
                    });
                } else r.push(n().append(_i1));
              }
              return r;
            })(e, n);
          },
          node: n,
        }
      );
    }
    var M = { ol: "number", ul: "bullet" };
    function k(e, n) {
      if (e === void 0) {
        e = "number";
      }
      if (n === void 0) {
        n = 1;
      }
      return require("Lexical").$applyNodeReplacement(new _L(e, n));
    }
    function v(e) {
      return e instanceof _L;
    }
    var b = _require_Lexical.createCommand("INSERT_CHECK_LIST_COMMAND");
    function P(e, n) {
      var r = (n && n.disableTakeFocusOnClick) || !1,
        i =
          "boolean" == typeof r
            ? function () {
                return r;
              }
            : r.peek.bind(r),
        s = function s(e) {
          var n = e.target;
          if (!require("Lexical").isHTMLElement(n)) return !1;
          var r = n.__lexicalCheckListLastHandled;
          return void 0 !== r && e.timeStamp - r < 500;
        },
        o = function o(e) {
          var n = e.target;
          require("Lexical").isHTMLElement(n) &&
            (n.__lexicalCheckListLastHandled = e.timeStamp);
        },
        l = function l(e) {
          s(e) || (o(e), R(e, i()));
        },
        c = function c(e) {
          "touch" === e.pointerType && (s(e) || (o(e), R(e, i())));
        },
        a = function a(e) {
          !(function (e, t) {
            A(e, function () {
              (e.preventDefault(), t && e.stopPropagation());
            });
          })(e, i());
        };
      return require("Lexical").mergeRegister(
        e.registerCommand(
          b,
          function () {
            return (g("check"), !0);
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ARROW_DOWN_COMMAND,
          function (t) {
            return D(t, e, !1);
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ARROW_UP_COMMAND,
          function (t) {
            return D(t, e, !0);
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ESCAPE_COMMAND,
          function () {
            if (null != I(e)) {
              var _t12 = e.getRootElement();
              return (null != _t12 && _t12.focus(), !0);
            }
            return !1;
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_SPACE_COMMAND,
          function (n) {
            var r = I(e);
            return (
              !(null == r || !e.isEditable()) &&
              (e.update(function () {
                var e = require("Lexical").$getNearestNodeFromDOMNode(r);
                x(e) && (n.preventDefault(), e.toggleChecked());
              }),
              !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ARROW_LEFT_COMMAND,
          function (n) {
            return e.read("latest", function () {
              var r = require("Lexical").$getSelection();
              if (require("Lexical").$isRangeSelection(r) && r.isCollapsed()) {
                var _i10 = r.anchor,
                  _s8 = "element" === _i10.type;
                if (_s8 || 0 === _i10.offset) {
                  var _r10 = _i10.getNode(),
                    _o5 = require("Lexical").$findMatchingParent(
                      _r10,
                      function (e) {
                        return (
                          require("Lexical").$isElementNode(e) && !e.isInline()
                        );
                      },
                    );
                  if (x(_o5)) {
                    var _i11 = _o5.getParent();
                    if (
                      v(_i11) &&
                      "check" === _i11.getListType() &&
                      (_s8 || _o5.getFirstDescendant() === _r10)
                    ) {
                      var _r11 = e.getElementByKey(_o5.__key);
                      if (
                        null != _r11 &&
                        require("Lexical").getActiveElement(_r11) !== _r11
                      )
                        return (_r11.focus(), n.preventDefault(), !0);
                    }
                  }
                }
              }
              return !1;
            });
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerRootListener(function (e) {
          if (null !== e)
            return require("Lexical").mergeRegister(
              require("Lexical").registerEventListeners(e, {
                click: l,
                pointerup: c,
              }),
              require("Lexical").registerEventListeners(
                e,
                { mousedown: a, pointerdown: a },
                { capture: !0 },
              ),
              require("Lexical").registerEventListener(e, "touchstart", a, {
                capture: !0,
                passive: !1,
              }),
            );
        }),
      );
    }
    function A(n, r) {
      var i = n.target;
      if (!require("Lexical").isHTMLElement(i)) return;
      var s = i.firstChild;
      if (
        require("Lexical").isHTMLElement(s) &&
        ("UL" === s.tagName || "OL" === s.tagName)
      )
        return;
      var o = i.parentNode;
      if (!o || "check" !== o.__lexicalListType) return;
      var l = null,
        c = null;
      if ("clientX" in n) l = n.clientX;
      else if ("touches" in n) {
        var _e19 = n.touches;
        _e19.length > 0 && ((l = _e19[0].clientX), (c = "touch"));
      }
      if (null == l) return;
      var a = i.getBoundingClientRect(),
        g = l / require("LexicalUtils").calculateZoomLevel(i),
        u = i.ownerDocument.defaultView,
        d = u ? u.getComputedStyle(i, "::before") : { width: "0px" },
        h = parseFloat(d.width),
        f =
          "touch" === c || ("pointerType" in n && "touch" === n.pointerType)
            ? 32
            : 0;
      ("rtl" === i.dir
        ? g < a.right + f && g > a.right - h - f
        : g > a.left - f && g < a.left + h + f) && r();
    }
    function R(e, n) {
      A(e, function () {
        if (require("Lexical").isHTMLElement(e.target)) {
          var _r12 = e.target,
            _i12 = require("Lexical").getNearestEditorFromDOMNode(_r12);
          null != _i12 &&
            _i12.isEditable() &&
            _i12.update(function () {
              var e = require("Lexical").$getNearestNodeFromDOMNode(_r12);
              x(e) &&
                (n
                  ? (require("Lexical").$addUpdateTag(
                      require("Lexical").SKIP_SELECTION_FOCUS_TAG,
                    ),
                    require("Lexical").$addUpdateTag(
                      require("Lexical").SKIP_DOM_SELECTION_TAG,
                    ))
                  : _r12.focus(),
                e.toggleChecked());
            });
        }
      });
    }
    function I(e) {
      var n = e.getRootElement(),
        r = n ? require("Lexical").getActiveElement(n) : null;
      return require("Lexical").isHTMLElement(r) &&
        "LI" === r.tagName &&
        null != r.parentNode &&
        "check" === r.parentNode.__lexicalListType
        ? r
        : null;
    }
    function D(e, n, r) {
      var i = I(n);
      return (
        null != i &&
          n.update(function () {
            var s = require("Lexical").$getNearestNodeFromDOMNode(i);
            if (!x(s)) return;
            var o = (function (e, t) {
              var n = t ? e.getPreviousSibling() : e.getNextSibling(),
                r = e;
              for (; null == n && x(r); )
                ((r = r.getParentOrThrow().getParent()),
                  null != r &&
                    (n = t ? r.getPreviousSibling() : r.getNextSibling()));
              for (; x(n); ) {
                var _e20 = t ? n.getLastChild() : n.getFirstChild();
                if (!v(_e20)) return n;
                n = t ? _e20.getLastChild() : _e20.getFirstChild();
              }
              return null;
            })(s, r);
            if (null != o) {
              o.selectStart();
              var _t13 = n.getElementByKey(o.__key);
              null != _t13 &&
                (e.preventDefault(),
                setTimeout(function () {
                  _t13.focus();
                }, 0));
            }
          }),
        !1
      );
    }
    function F(e) {
      var t = [];
      for (var _n15 of e)
        if (x(_n15)) {
          t.push(_n15);
          var _e21 = _n15.getChildren();
          if (_e21.length > 1)
            for (var _n16 of _e21) v(_n16) && t.push(O().append(_n16));
        } else t.push(O().append(_n15));
      return t;
    }
    var w = (_require_LexicalHtml = require("LexicalHtml")).defineImportRule({
      $import: function $import(e, n) {
        var i;
        var s;
        return (
          require("LexicalHtml").isElementOfTag(n, "ol")
            ? (i = k("number", n.start))
            : (i =
                (s = n).matches(
                  '[__lexicallisttype="check"], .contains-task-list, [data-is-checklist="1"]',
                ) || null !== s.querySelector(":scope > [aria-checked]")
                  ? k("check")
                  : k("bullet")),
          require("Lexical").$setDirectionFromDOM(i, n),
          [
            i.splice(
              0,
              0,
              require("LexicalHtml").$propagateTextAlignToBlockChildren(
                F(e.$importChildren(n)),
                n,
              ),
            ),
          ]
        );
      },
      match: _require_LexicalHtml.sel.tag("ol", "ul"),
      name: "@lexical/list/list",
    });
    function W(e, n) {
      if (1 !== n.length) return n;
      var r = n[0];
      return require("Lexical").$isParagraphNode(r) &&
        !e.getFormatType() &&
        r.getFormatType()
        ? (e.setFormat(r.getFormatType()), r.getChildren())
        : n;
    }
    function K(e) {
      var n = function n(e) {
        return require("LexicalHtml").$isBlockLevel(e) && !v(e);
      };
      if (!e.some(n)) return e;
      var i = [];
      var s = [];
      var o = function o() {
        s.length > 0 && (i.push(s), (s = []));
      };
      for (var _r13 of e)
        n(_r13)
          ? (o(),
            i.push(
              require("Lexical").$isElementNode(_r13)
                ? _r13.getChildren()
                : [_r13],
            ))
          : s.push(_r13);
      o();
      var l = [];
      for (var _e22 of i)
        (l.length > 0 && l.push(require("Lexical").$createLineBreakNode()),
          l.push.apply(l, _e22));
      return l;
    }
    var H = _require_LexicalHtml.defineImportRule({
      $import: function $import(e, n) {
        var r = n.getAttribute("aria-checked"),
          i = O("true" === r || ("false" !== r && void 0));
        return (
          require("Lexical").$setFormatFromDOM(i, n),
          require("Lexical").$setDirectionFromDOM(i, n),
          [i.splice(0, 0, K(W(i, e.$importChildren(n))))]
        );
      },
      match: _require_LexicalHtml.sel.tag("li"),
      name: "@lexical/list/li",
    });
    function B(e, n, i) {
      var s = require("LexicalHtml").isElementOfTag(i, "input")
        ? i
        : i.querySelector('input[type="checkbox"]');
      if (!s || "checkbox" !== s.getAttribute("type")) return [];
      var o = O(s.hasAttribute("checked"));
      return (
        require("Lexical").$setFormatFromDOM(o, n),
        require("Lexical").$setDirectionFromDOM(o, n),
        [o.splice(0, 0, K(W(o, e.$importChildren(n))))]
      );
    }
    var Y = {
        $accepts: function $accepts(e) {
          return x(e) || v(e);
        },
        $packageRun: function $packageRun(e) {
          return [O().splice(0, 0, e)];
        },
        name: "ListSchema",
      },
      U = [
        _require_LexicalHtml.defineImportRule({
          $import: function $import(e, t, n) {
            var r = t.querySelector(':scope > input[type="checkbox"]');
            return r ? B(e, t, r) : n();
          },
          match: _require_LexicalHtml.sel.tag("li").classAll("task-list-item"),
          name: "@lexical/list/li-task-list-item",
        }),
        _require_LexicalHtml.defineImportRule({
          $import: function $import(e, t, n) {
            var r = t.querySelector(":scope > .checkbox-wrapper");
            if (!r) return n();
            var i = r.querySelector(':scope > input[type="checkbox"]');
            return i ? B(e, t, i) : n();
          },
          match: _require_LexicalHtml.sel.tag("li").classAll("joplin-checkbox"),
          name: "@lexical/list/li-joplin-checkbox",
        }),
        w,
        H,
      ],
      z = _require_Lexical.createCommand("UPDATE_LIST_START_COMMAND"),
      q = _require_Lexical.createCommand("INSERT_UNORDERED_LIST_COMMAND"),
      V = _require_Lexical.createCommand("INSERT_ORDERED_LIST_COMMAND"),
      J = _require_Lexical.createCommand("REMOVE_LIST_COMMAND");
    function j(e, n) {
      var _require_Lexical;
      return (_require_Lexical = require("Lexical")).mergeRegister(
        e.registerCommand(
          V,
          function () {
            return (g("number"), !0);
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          z,
          function (e) {
            var n = e.listNodeKey,
              r = e.newStart,
              i = require("Lexical").$getNodeByKey(n);
            return (
              !!v(i) &&
              ("number" === i.getListType() && (i.setStart(r), p(i)), !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          q,
          function () {
            return (g("bullet"), !0);
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          J,
          function () {
            return (f(), !0);
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          _require_Lexical.INSERT_PARAGRAPH_COMMAND,
          function () {
            return C(!!(n && n.restoreNumbering));
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          _require_Lexical.KEY_BACKSPACE_COMMAND,
          function (e) {
            var n = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(n) || !n.isCollapsed())
              return !1;
            var r = n.anchor;
            if (0 !== r.offset) return !1;
            var i = r.getNode();
            for (; !x(i); ) {
              if (null !== i.getPreviousSibling()) return !1;
              var _e23 = i.getParent();
              if (null === _e23) return !1;
              i = _e23;
            }
            return (
              !(!x(i) || !i.collapseAtStart(n)) && (e.preventDefault(), !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_BEFORE_EDITOR,
        ),
        e.registerNodeTransform(_N, function (e) {
          var n = e.getFirstChild();
          if (n) {
            if (require("Lexical").$isTextNode(n)) {
              var _t14 = n.getStyle(),
                _r14 = n.getFormat();
              (e.getTextStyle() !== _t14 && e.setTextStyle(_t14),
                e.getTextFormat() !== _r14 && e.setTextFormat(_r14));
            }
          } else {
            var _n17 = require("Lexical").$getSelection();
            require("Lexical").$isRangeSelection(_n17) &&
              (_n17.style !== e.getTextStyle() ||
                _n17.format !== e.getTextFormat()) &&
              _n17.isCollapsed() &&
              e.is(_n17.anchor.getNode()) &&
              e.setTextStyle(_n17.style).setTextFormat(_n17.format);
          }
        }),
        e.registerNodeTransform(_require_Lexical.TextNode, function (e) {
          var t = e.getParent();
          if (x(t) && e.is(t.getFirstChild())) {
            var _n18 = e.getStyle(),
              _r15 = e.getFormat();
            (_n18 === t.getTextStyle() && _r15 === t.getTextFormat()) ||
              t.setTextStyle(_n18).setTextFormat(_r15);
          }
        }),
      );
    }
    function G(e) {
      var n = function n(e) {
        var n = e.getParent();
        if (v(e.getFirstChild()) || !v(n)) return;
        var r = require("Lexical").$findMatchingParent(e, function (e) {
          return x(e) && v(e.getParent()) && x(e.getPreviousSibling());
        });
        if (null === r && e.getIndent() > 0) e.setIndent(0);
        else if (x(r)) {
          var _t15 = r.getPreviousSibling();
          if (x(_t15)) {
            var _r16 = (function (e) {
                var t = e,
                  n = t.getFirstChild();
                for (; v(n); ) {
                  var _e24 = n.getLastChild();
                  if (!x(_e24)) break;
                  ((t = _e24), (n = t.getFirstChild()));
                }
                return t;
              })(_t15),
              _i13 = _r16.getParent();
            if (v(_i13)) {
              var _t16 = s(_i13);
              _t16 + 1 < s(n) && e.setIndent(_t16);
            }
          }
        }
      };
      return e.registerNodeTransform(_L, function (e) {
        var t = [e];
        for (; t.length > 0; ) {
          var _e25 = t.shift();
          if (v(_e25))
            for (var _r17 of _e25.getChildren())
              if (x(_r17)) {
                n(_r17);
                var _e26 = _r17.getFirstChild();
                v(_e26) && t.push(_e26);
              }
        }
      });
    }
    var X = _require_Lexical.defineExtension({
        build: function build(e, t, r) {
          return require("LexicalExtension").namedSignals(t);
        },
        config: _require_Lexical.safeCast({
          hasStrictIndent: !1,
          shouldPreserveNumbering: !1,
        }),
        dependencies: [
          _require_LexicalHtml.CoreImportExtension,
          _require_Lexical.configExtension(
            _require_LexicalHtml.DOMImportExtension,
            { rules: U },
          ),
        ],
        name: "@lexical/list/List",
        nodes: function nodes() {
          return [_L, _N];
        },
        register: function register(e, r, i) {
          var s = i.getOutput();
          return require("Lexical").mergeRegister(
            require("LexicalExtension").effect(function () {
              return j(e, {
                restoreNumbering: s.shouldPreserveNumbering.value,
              });
            }),
            require("LexicalExtension").effect(function () {
              return s.hasStrictIndent.value ? G(e) : void 0;
            }),
          );
        },
      }),
      Z = _require_Lexical.defineExtension({
        build: function build(e, t) {
          return require("LexicalExtension").namedSignals(t);
        },
        config: _require_Lexical.safeCast({ disableTakeFocusOnClick: !1 }),
        dependencies: [X],
        name: "@lexical/list/CheckList",
        register: function register(e, t, n) {
          return P(e, n.getOutput());
        },
      }),
      Q = _require_Lexical.defineExtension({
        dependencies: [X],
        name: "@lexical/list/Import",
      });
    ((exports.$createListItemNode = O),
      (exports.$createListNode = k),
      (exports.$getListDepth = s),
      (exports.$handleListInsertParagraph = C),
      (exports.$insertList = g),
      (exports.$isListItemNode = x),
      (exports.$isListNode = v),
      (exports.$removeList = f),
      (exports.CheckListExtension = Z),
      (exports.INSERT_CHECK_LIST_COMMAND = b),
      (exports.INSERT_ORDERED_LIST_COMMAND = V),
      (exports.INSERT_UNORDERED_LIST_COMMAND = q),
      (exports.ListExtension = X),
      (exports.ListImportExtension = Q),
      (exports.ListImportRules = U),
      (exports.ListItemNode = _N),
      (exports.ListNode = _L),
      (exports.ListSchema = Y),
      (exports.REMOVE_LIST_COMMAND = J),
      (exports.UPDATE_LIST_START_COMMAND = z),
      (exports.registerCheckList = P),
      (exports.registerList = j),
      (exports.registerListStrictIndentTransform = G));
  },
  null,
);
