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
    function s(e) {
      var r = new URL("https://lexical.dev/docs/error"),
        n = new URLSearchParams();
      n.append("code", e);
      for (
        var _len = arguments.length,
          t = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        t[_key - 1] = arguments[_key];
      }
      for (var _e of t) n.append("v", _e);
      throw (
        (r.search = n.toString()),
        Error(
          "Minified Lexical error #" +
            e +
            "; visit " +
            r.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        )
      );
    }
    function i(e) {
      var t = 1,
        r = e.getParent();
      for (; null != r; ) {
        if (x(r)) {
          var _e2 = r.getParent();
          if (b(_e2)) {
            (t++, (r = _e2.getParent()));
            continue;
          }
          s(40);
        }
        return t;
      }
      return t;
    }
    function o(e) {
      var t = e.getParent();
      b(t) || s(40);
      var r = t,
        n = t;
      for (; null !== n; ) ((n = n.getParent()), b(n) && (r = n));
      return r;
    }
    function l(e) {
      var t = [];
      var r = e.getChildren().filter(x);
      for (var _e3 = 0; _e3 < r.length; _e3++) {
        var _n = r[_e3],
          _s = _n.getFirstChild();
        b(_s) ? (t = t.concat(l(_s))) : t.push(_n);
      }
      return t;
    }
    function a(e) {
      return x(e) && b(e.getFirstChild());
    }
    function c(e, t) {
      return (
        x(e) &&
        (0 === t.length ||
          (1 === t.length && e.is(t[0]) && 0 === e.getChildrenSize()))
      );
    }
    function g(e) {
      var r = require("Lexical").$getSelection();
      if (null !== r) {
        var _n2 = r.getNodes();
        if (require("Lexical").$isRangeSelection(r)) {
          var _r$getStartEndPoints = r.getStartEndPoints(),
            _s2 = _r$getStartEndPoints[0],
            _i = _s2.getNode(),
            _o = _i.getParent();
          if (require("Lexical").$isRootOrShadowRoot(_i)) {
            var _e4 = _i.getFirstChild();
            if (_e4) _n2 = _e4.selectStart().getNodes();
            else {
              var _e5 = require("Lexical").$createParagraphNode();
              (_i.append(_e5), (_n2 = _e5.select().getNodes()));
            }
          } else if (c(_i, _n2)) {
            var _r = E(e);
            if (require("Lexical").$isRootOrShadowRoot(_o)) {
              _i.replace(_r);
              var _e6 = L();
              (require("Lexical").$isElementNode(_i) &&
                (_e6.setFormat(_i.getFormatType()),
                _e6.setIndent(_i.getIndent())),
                _r.append(_e6));
            } else if (x(_i)) {
              var _e7 = _i.getParentOrThrow();
              null === require("Lexical").$getSlotHost(_e7) &&
                (u(_r, _e7.getChildren()), _e7.replace(_r));
            }
            return;
          }
        }
        var _s3 = new Set();
        for (var _r2 = 0; _r2 < _n2.length; _r2++) {
          var _i2 = _n2[_r2];
          if (
            require("Lexical").$isElementNode(_i2) &&
            _i2.isEmpty() &&
            !x(_i2) &&
            null === require("Lexical").$getSlotHost(_i2) &&
            !_s3.has(_i2.getKey())
          ) {
            d(_i2, e);
            continue;
          }
          var _o2 = require("Lexical").$isLeafNode(_i2)
            ? _i2.getParent()
            : x(_i2) && _i2.isEmpty()
              ? _i2
              : null;
          for (; null != _o2; ) {
            var _r3 = _o2.getKey();
            if (b(_o2)) {
              if (
                !_s3.has(_r3) &&
                null === require("Lexical").$getSlotHost(_o2)
              ) {
                var _t = E(e);
                (u(_t, _o2.getChildren()), _o2.replace(_t), _s3.add(_r3));
              }
              break;
            }
            {
              var _n3 = _o2.getParent();
              if (
                require("Lexical").$isRootOrShadowRoot(_n3) &&
                !_s3.has(_r3)
              ) {
                (_s3.add(_r3), d(_o2, e));
                break;
              }
              _o2 = _n3;
            }
          }
        }
      }
    }
    function u(e, t) {
      e.splice(e.getChildrenSize(), 0, t);
    }
    function d(e, r) {
      if (b(e)) return e;
      var n = e.getPreviousSibling(),
        s = e.getNextSibling(),
        i = L();
      var o;
      if ((u(i, e.getChildren()), b(n) && r === n.getListType()))
        (n.append(i),
          b(s) && r === s.getListType() && (u(n, s.getChildren()), s.remove()),
          (o = n));
      else if (b(s) && r === s.getListType())
        (s.getFirstChildOrThrow().insertBefore(i), (o = s));
      else {
        var _t2 = E(r);
        (_t2.append(i), e.replace(_t2), (o = _t2));
      }
      (i.setFormat(e.getFormatType()), i.setIndent(e.getIndent()));
      var l = require("Lexical").$getSelection();
      return (
        require("Lexical").$isRangeSelection(l) &&
          (o.getKey() === l.anchor.key &&
            l.anchor.set(i.getKey(), l.anchor.offset, "element"),
          o.getKey() === l.focus.key &&
            l.focus.set(i.getKey(), l.focus.offset, "element")),
        e.remove(),
        o
      );
    }
    function h(e, t) {
      var r = e.getLastChild(),
        n = t.getFirstChild();
      r &&
        n &&
        a(r) &&
        a(n) &&
        (h(r.getFirstChild(), n.getFirstChild()), n.remove());
      var s = t.getChildren();
      (s.length > 0 && e.append.apply(e, s), t.remove());
    }
    function p() {
      var r = require("Lexical").$getSelection();
      if (require("Lexical").$isRangeSelection(r)) {
        var _n4 = new Set(),
          _s4 = r.getNodes(),
          _i3 = r.anchor.getNode();
        if (c(_i3, _s4)) _n4.add(o(_i3));
        else
          for (var _r4 = 0; _r4 < _s4.length; _r4++) {
            var _i4 = _s4[_r4];
            if (require("Lexical").$isLeafNode(_i4)) {
              var _t3 = require("LexicalUtils").$getNearestNodeOfType(_i4, _N);
              null != _t3 && _n4.add(o(_t3));
            }
          }
        for (var _e8 of _n4) {
          if (null !== require("Lexical").$getSlotHost(_e8)) continue;
          var _n5 = _e8;
          var _s5 = l(_e8);
          for (var _e9 of _s5) {
            var _s6 = require("Lexical")
              .$createParagraphNode()
              .setTextStyle(r.style)
              .setTextFormat(r.format);
            (u(_s6, _e9.getChildren()),
              _n5.insertAfter(_s6),
              (_n5 = _s6),
              _e9.__key === r.anchor.key &&
                require("Lexical").$setPointFromCaret(
                  r.anchor,
                  require("Lexical").$normalizeCaret(
                    require("Lexical").$getChildCaret(_s6, "next"),
                  ),
                ),
              _e9.__key === r.focus.key &&
                require("Lexical").$setPointFromCaret(
                  r.focus,
                  require("Lexical").$normalizeCaret(
                    require("Lexical").$getChildCaret(_s6, "next"),
                  ),
                ),
              _e9.remove());
          }
          _e8.remove();
        }
      }
    }
    function f(e) {
      var t = "check" !== e.getListType();
      var r = e.getStart();
      for (var _n6 of e.getChildren())
        x(_n6) &&
          (_n6.getValue() !== r && _n6.setValue(r),
          t && null != _n6.getLatest().__checked && _n6.setChecked(void 0),
          b(_n6.getFirstChild()) || r++);
    }
    function m(e) {
      var r = new Set();
      if (a(e) || r.has(e.getKey())) return;
      var n = e.getParent(),
        s = e.getNextSibling(),
        i = e.getPreviousSibling();
      if (a(s) && a(i)) {
        var _t4 = i.getFirstChild();
        if (b(_t4)) {
          _t4.append(e);
          var _n7 = s.getFirstChild();
          if (b(_n7)) {
            (u(_t4, _n7.getChildren()), s.remove(), r.add(s.getKey()));
          }
        }
      } else if (a(s)) {
        var _t5 = s.getFirstChild();
        if (b(_t5)) {
          var _r5 = _t5.getFirstChild();
          null !== _r5 && _r5.insertBefore(e);
        }
      } else if (a(i)) {
        var _t6 = i.getFirstChild();
        b(_t6) && _t6.append(e);
      } else if (b(n)) {
        var _r6 = require("Lexical").$copyNode(e),
          _o3 = require("Lexical").$copyNode(n);
        (_r6.append(_o3),
          _o3.append(e),
          i ? i.insertAfter(_r6) : s ? s.insertBefore(_r6) : n.append(_r6));
      }
    }
    function _(e) {
      if (a(e)) return;
      var r = e.getParent(),
        n = r ? r.getParent() : void 0;
      if (b(n ? n.getParent() : void 0) && x(n) && b(r)) {
        var _s7 = r ? r.getFirstChild() : void 0,
          _i5 = r ? r.getLastChild() : void 0;
        if (e.is(_s7)) (n.insertBefore(e), r.isEmpty() && n.remove());
        else if (e.is(_i5)) (n.insertAfter(e), r.isEmpty() && n.remove());
        else {
          var _require_Lexical;
          var _s8 = (_require_Lexical = require("Lexical")).$copyNode(e),
            _i6 = _require_Lexical.$copyNode(r);
          (_s8.append(_i6),
            e.getPreviousSiblings().forEach(function (e) {
              return _i6.append(e);
            }));
          var _o4 = _require_Lexical.$copyNode(e),
            _l = _require_Lexical.$copyNode(r);
          (_o4.append(_l),
            u(_l, e.getNextSiblings()),
            n.insertBefore(_s8),
            n.insertAfter(_o4),
            n.replace(e));
        }
      }
    }
    function C(e) {
      if (e === void 0) {
        e = !1;
      }
      var r = require("Lexical").$getSelection();
      if (!require("Lexical").$isRangeSelection(r) || !r.isCollapsed())
        return !1;
      var n = r.anchor.getNode();
      var i = null;
      if (x(n) && 0 === n.getChildrenSize()) i = n;
      else if (require("Lexical").$isTextNode(n)) {
        var _e0 = n.getParent();
        x(_e0) &&
          _e0.getChildren().every(function (e) {
            return (
              require("Lexical").$isTextNode(e) &&
              "" === e.getTextContent().trim()
            );
          }) &&
          (i = _e0);
      }
      if (null === i) return !1;
      var l = o(i),
        a = i.getParent();
      b(a) || s(40);
      var c = a.getParent();
      var g;
      if (require("Lexical").$isRootOrShadowRoot(c))
        ((g = require("Lexical").$createParagraphNode()), l.insertAfter(g));
      else {
        if (!x(c)) return !1;
        ((g = require("Lexical").$copyNode(c)), c.insertAfter(g));
      }
      g.setTextStyle(r.style).setTextFormat(r.format).select();
      var u = i.getNextSiblings();
      if (u.length > 0) {
        var _r7 = e
            ? (function (e, t) {
                return t.getValue();
              })(0, i)
            : 1,
          _n8 = require("Lexical").$copyNode(a).setStart(_r7);
        if (x(g)) {
          var _e1 = require("Lexical").$copyNode(g);
          (_e1.append(_n8), g.insertAfter(_e1));
        } else g.insertAfter(_n8);
        _n8.append.apply(_n8, u);
      }
      return (
        (function (e) {
          var t = e;
          for (
            ;
            null == t.getNextSibling() && null == t.getPreviousSibling();
          ) {
            var _e10 = t.getParent();
            if (null == _e10 || (!x(_e10) && !b(_e10))) break;
            t = _e10;
          }
          t.remove();
        })(i),
        !0
      );
    }
    var _N = (function (_t$ElementNode) {
      function N(e, t, r) {
        var _this;
        if (e === void 0) {
          e = 1;
        }
        if (t === void 0) {
          t = void 0;
        }
        ((_this = _t$ElementNode.call(this, r) || this),
          (_this.__value = void 0 === e ? 1 : e),
          (_this.__checked = t));
        return _this;
      }
      babelHelpers.inheritsLoose(N, _t$ElementNode);
      var _proto = N.prototype;
      _proto.$config = function $config() {
        return this.config("listitem", {
          $transform: function $transform(e) {
            var r = e.getParent();
            if (b(r))
              "check" !== r.getListType() &&
                null != e.getChecked() &&
                e.setChecked(void 0);
            else if (r) {
              var _n9 = e.createParentElementNode();
              b(_n9) || s(340);
              var _i7 = [e];
              for (var _r8 of ["previous", "next"]) {
                _i7.reverse();
                for (var _ref2 of require("Lexical").$getSiblingCaret(e, _r8)) {
                  var _n0 = _ref2.origin;
                  if (!x(_n0)) break;
                  _i7.push(_n0);
                }
              }
              (e.insertBefore(_n9),
                _n9.splice(0, 0, _i7),
                require("Lexical").$isRootOrShadowRoot(r) ||
                  (require("Lexical").$insertNodeToNearestRootAtCaret(
                    _n9,
                    require("Lexical").$rewindSiblingCaret(
                      require("Lexical").$getSiblingCaret(_n9, "next"),
                    ),
                    {
                      $shouldSplit: function $shouldSplit() {
                        return !1;
                      },
                      removeEmptyDestination: !0,
                    },
                  ),
                  r.isEmpty() && r.isAttached() && r.remove()));
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
        var r = require("Lexical").$getDocument().createElement("li");
        return (this.updateListItemDOM(null, r, e), r);
      };
      _proto.updateListItemDOM = function updateListItemDOM(e, r, n) {
        (!(function (e, t) {
          var r = t.getParent();
          !b(r) || "check" !== r.getListType() || b(t.getFirstChild())
            ? (e.removeAttribute("role"),
              e.removeAttribute("tabIndex"),
              e.removeAttribute("aria-checked"))
            : (e.setAttribute("role", "checkbox"),
              e.setAttribute("tabIndex", "-1"),
              e.setAttribute(
                "aria-checked",
                t.getChecked() ? "true" : "false",
              ));
        })(r, this),
          (r.value = this.__value),
          (function (e, r, n) {
            var s = r.list;
            if (!s) return;
            var i = s.listitem,
              o = s.nested && s.nested.listitem,
              l = n.getParent(),
              a = b(l) && "check" === l.getListType(),
              c = n.getChecked(),
              g = n.getChildren().some(function (e) {
                return b(e);
              }),
              u = [];
            void 0 !== s.listitemChecked && u.push(s.listitemChecked);
            void 0 !== s.listitemUnchecked && u.push(s.listitemUnchecked);
            void 0 !== o &&
              u.push.apply(u, require("Lexical").normalizeClassNames(o));
            u.length > 0 &&
              require("Lexical").removeClassNamesFromElement.apply(
                require("Lexical"),
                [e].concat(u),
              );
            var d = [];
            void 0 !== i &&
              d.push.apply(d, require("Lexical").normalizeClassNames(i));
            if (a) {
              var _e11 = c ? s.listitemChecked : s.listitemUnchecked;
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
          })(r, n.theme, this));
        var s = e ? e.__style : "",
          i = this.__style;
        (s !== i && require("Lexical").setDOMStyleFromCSS(r.style, i, s),
          (function (e, r, n) {
            var s = r.__textStyle,
              i = n ? n.__textStyle : "";
            if (null !== n && i === s) return;
            var o = require("Lexical").getStyleObjectFromCSS(s);
            for (var _t7 in o)
              e.style.setProperty("--listitem-marker-" + _t7, o[_t7]);
            if ("" !== i)
              for (var _r9 in require("Lexical").getStyleObjectFromCSS(i))
                _r9 in o || e.style.removeProperty("--listitem-marker-" + _r9);
          })(r, this, e));
      };
      _proto.updateDOM = function updateDOM(e, t, r) {
        var n = t;
        return (this.updateListItemDOM(e, n, r), !1);
      };
      _proto.updateFromJSON = function updateFromJSON(e) {
        return _t$ElementNode.prototype.updateFromJSON
          .call(this, e)
          .setValue(e.value)
          .setChecked(e.checked);
      };
      _proto.exportDOM = function exportDOM(e) {
        var r = this.createDOM(e._config),
          n = this.getFormatType();
        n && (r.style.textAlign = n);
        var s = this.getDirection();
        return (
          s && (r.dir = s),
          a(this)
            ? {
                after: function after(e) {
                  if (require("Lexical").isHTMLElement(e)) {
                    var _r0 = e.previousElementSibling;
                    if (
                      require("Lexical").isHTMLElement(_r0) &&
                      "LI" === _r0.nodeName
                    ) {
                      for (; e.firstChild; ) _r0.append(e.firstChild);
                      e.remove();
                    }
                  }
                  return e;
                },
                element: r,
              }
            : { element: r }
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
        for (var _r1 = 0; _r1 < arguments.length; _r1++) {
          var _n1 =
            _r1 < 0 || arguments.length <= _r1 ? undefined : arguments[_r1];
          if (
            require("Lexical").$isElementNode(_n1) &&
            this.canMergeWith(_n1)
          ) {
            var _e12 = _n1.getChildren();
            (this.append.apply(this, _e12), _n1.remove());
          } else _t$ElementNode.prototype.append.call(this, _n1);
        }
        return this;
      };
      _proto.replace = function replace(e, r) {
        if (x(e)) return _t$ElementNode.prototype.replace.call(this, e);
        this.setIndent(0);
        var n = this.getParentOrThrow();
        if (!b(n)) return e;
        if (n.__first === this.getKey()) n.insertBefore(e);
        else if (n.__last === this.getKey()) n.insertAfter(e);
        else {
          var _r10 = require("Lexical").$copyNode(n);
          var _s9 = this.getNextSibling();
          for (; _s9; ) {
            var _e13 = _s9;
            ((_s9 = _s9.getNextSibling()), _r10.append(_e13));
          }
          (n.insertAfter(e), e.insertAfter(_r10));
        }
        var i = this.__key;
        var o = 0;
        if (
          (r &&
            (require("Lexical").$isElementNode(e) || s(139),
            (o = e.getChildrenSize()),
            e.splice(o, 0, this.getChildren())),
          r && require("Lexical").$isElementNode(e))
        ) {
          var _r11 = require("Lexical").$getSelection();
          if (require("Lexical").$isRangeSelection(_r11))
            for (var _t8 of _r11.getStartEndPoints())
              _t8.key === i &&
                "element" === _t8.type &&
                _t8.set(e.getKey(), o + _t8.offset, "element");
        }
        return (this.remove(), 0 === n.getChildrenSize() && n.remove(), e);
      };
      _proto.insertAfter = function insertAfter(e, r) {
        if (r === void 0) {
          r = !0;
        }
        var n = this.getParentOrThrow();
        if ((b(n) || s(39), x(e)))
          return _t$ElementNode.prototype.insertAfter.call(this, e, r);
        var i = this.getNextSiblings();
        if ((n.insertAfter(e, r), 0 !== i.length)) {
          var _s0 = require("Lexical").$copyNode(n);
          (i.forEach(function (e) {
            return _s0.append(e);
          }),
            e.insertAfter(_s0, r));
        }
        return e;
      };
      _proto.remove = function remove(e) {
        var t = this.getPreviousSibling(),
          r = this.getNextSibling();
        (_t$ElementNode.prototype.remove.call(this, e),
          t &&
            r &&
            a(t) &&
            a(r) &&
            (h(t.getFirstChild(), r.getFirstChild()), r.remove()));
      };
      _proto.resetOnCopyNodeFrom = function resetOnCopyNodeFrom(e) {
        (_t$ElementNode.prototype.resetOnCopyNodeFrom.call(this, e),
          e.getChecked() && this.setChecked(!1));
      };
      _proto.insertNewAfter = function insertNewAfter(e, r) {
        if (r === void 0) {
          r = !0;
        }
        var n = require("Lexical").$copyNode(this);
        return (this.insertAfter(n, r), n);
      };
      _proto.collapseAtStart = function collapseAtStart(e) {
        var _t$$createParagraphNo;
        if (a(this)) return !1;
        var r = this.getParentOrThrow();
        if (x(r.getParentOrThrow())) return (_(this), !0);
        var n = (_t$$createParagraphNo =
            require("Lexical").$createParagraphNode()).append.apply(
            _t$$createParagraphNo,
            this.getChildren(),
          ),
          s = this.getNextSiblings();
        if (s.length > 0) {
          var _e14 = require("Lexical").$copyNode(r);
          (_e14.append.apply(_e14, s), r.insertAfter(_e14));
        }
        return (
          r.insertAfter(n),
          this.remove(),
          0 === r.getChildrenSize() && r.remove(),
          n.selectStart(),
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
        var r = this.getParent();
        return (
          b(r) && (t = r.getListType()),
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
          r = 0;
        for (; x(t); ) ((t = t.getParentOrThrow().getParentOrThrow()), r++);
        return r;
      };
      _proto.setIndent = function setIndent(e) {
        ("number" != typeof e && s(117), (e = Math.floor(e)) >= 0 || s(199));
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
      _proto.extractWithChild = function extractWithChild(e, r) {
        if (!require("Lexical").$isRangeSelection(r)) return !1;
        var n = r.anchor.getNode(),
          s = r.focus.getNode();
        return (
          this.isParentOf(n) &&
          this.isParentOf(s) &&
          this.getTextContent().length === r.getTextContent().length
        );
      };
      _proto.isParentRequired = function isParentRequired() {
        return !0;
      };
      _proto.createParentElementNode = function createParentElementNode() {
        return E("bullet");
      };
      _proto.canMergeWhenEmpty = function canMergeWhenEmpty() {
        return !0;
      };
      return N;
    })((_require_Lexical = require("Lexical")).ElementNode);
    function S(e) {
      if (e.classList.contains("task-list-item"))
        for (var _t9 of e.children) if ("INPUT" === _t9.tagName) return y(_t9);
      if (e.classList.contains("joplin-checkbox"))
        for (var _t0 of e.children)
          if (
            _t0.classList.contains("checkbox-wrapper") &&
            _t0.children.length > 0 &&
            "INPUT" === _t0.children[0].tagName
          )
            return y(_t0.children[0]);
      var r = e.getAttribute("aria-checked"),
        n = L("true" === r || ("false" !== r && void 0));
      return (
        require("Lexical").$setFormatFromDOM(n, e),
        {
          after: T.bind(null, n),
          node: require("Lexical").$setDirectionFromDOM(n, e),
        }
      );
    }
    function y(e) {
      if (!("checkbox" === e.getAttribute("type"))) return { node: null };
      var t = L(e.hasAttribute("checked"));
      return { after: T.bind(null, t), node: t };
    }
    function T(e, r) {
      var n = r[0];
      return 1 === r.length &&
        require("Lexical").$isParagraphNode(n) &&
        !e.getFormatType() &&
        n.getFormatType()
        ? (e.setFormat(n.getFormatType()), n.getChildren())
        : r;
    }
    function L(e) {
      return require("Lexical").$applyNodeReplacement(new _N(void 0, e));
    }
    function x(e) {
      return e instanceof _N;
    }
    var _O = (function (_t$ElementNode2) {
      function O(e, t, r) {
        var _this2;
        if (e === void 0) {
          e = "number";
        }
        if (t === void 0) {
          t = 1;
        }
        _this2 = _t$ElementNode2.call(this, r) || this;
        var n = v[e] || e;
        ((_this2.__listType = n),
          (_this2.__tag = "number" === n ? "ol" : "ul"),
          (_this2.__start = t));
        return _this2;
      }
      babelHelpers.inheritsLoose(O, _t$ElementNode2);
      var _proto2 = O.prototype;
      _proto2.$config = function $config() {
        return this.config("list", {
          $transform: function $transform(e) {
            (!(function (e) {
              var t = e.getNextSibling();
              b(t) && e.getListType() === t.getListType() && h(e, t);
            })(e),
              f(e));
          },
          extends: require("Lexical").ElementNode,
          importDOM: require("Lexical").buildImportMap({
            ol: function ol() {
              return { conversion: M, priority: 0 };
            },
            ul: function ul() {
              return { conversion: M, priority: 0 };
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
      _proto2.createDOM = function createDOM(e, r) {
        var n = this.__tag,
          s = require("Lexical").$getDocument().createElement(n);
        return (
          1 !== this.__start && s.setAttribute("start", String(this.__start)),
          (s.__lexicalListType = this.__listType),
          $(s, e.theme, this),
          s
        );
      };
      _proto2.updateDOM = function updateDOM(e, t, r) {
        return (
          e.__tag !== this.__tag ||
          e.__listType !== this.__listType ||
          ($(t, r.theme, this),
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
        var r = this.createDOM(e._config, e);
        return (
          require("Lexical").isHTMLElement(r) &&
            (1 !== this.__start &&
              r.setAttribute("start", String(this.__start)),
            "check" === this.__listType &&
              r.setAttribute("__lexicalListType", "check")),
          { element: r }
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
      _proto2.splice = function splice(e, r, n) {
        var s = n;
        for (var _e15 = 0; _e15 < n.length; _e15++) {
          var _r12 = n[_e15];
          x(_r12) ||
            (s === n && (s = [].concat(n)),
            (s[_e15] = this.createListItemNode().append(
              !require("Lexical").$isElementNode(_r12) ||
                b(_r12) ||
                _r12.isInline()
                ? _r12
                : require("Lexical").$createTextNode(_r12.getTextContent()),
            )));
        }
        return _t$ElementNode2.prototype.splice.call(this, e, r, s);
      };
      _proto2.extractWithChild = function extractWithChild(e) {
        return x(e);
      };
      _proto2.createListItemNode = function createListItemNode() {
        return L();
      };
      return O;
    })(_require_Lexical.ElementNode);
    function $(e, r, n) {
      var s = [],
        o = [],
        l = r.list;
      if (void 0 !== l) {
        var _e16 = l[n.__tag + "Depth"] || [],
          _r13 = i(n) - 1,
          _a = _r13 % _e16.length,
          _c = _e16[_a],
          _g = l[n.__tag];
        var _u;
        var _d = l.nested,
          _h = l.checklist;
        if (
          (void 0 !== _d && _d.list && (_u = _d.list),
          void 0 !== _g && s.push(_g),
          void 0 !== _h && "check" === n.__listType && s.push(_h),
          void 0 !== _c)
        ) {
          s.push.apply(s, require("Lexical").normalizeClassNames(_c));
          for (var _r14 = 0; _r14 < _e16.length; _r14++)
            _r14 !== _a &&
              o.push.apply(
                o,
                require("Lexical").normalizeClassNames(_e16[_r14]),
              );
        }
        if (void 0 !== _u) {
          var _e17 = require("Lexical").normalizeClassNames(_u);
          _r13 > 1 ? s.push.apply(s, _e17) : o.push.apply(o, _e17);
        }
      }
      (o.length > 0 &&
        require("Lexical").removeClassNamesFromElement.apply(
          require("Lexical"),
          [e].concat(o),
        ),
        s.length > 0 &&
          require("Lexical").addClassNamesToElement.apply(
            require("Lexical"),
            [e].concat(s),
          ));
    }
    function M(e) {
      var r;
      if (
        (function (e) {
          return (
            require("Lexical").isHTMLElement(e) &&
            "ol" === e.nodeName.toLowerCase()
          );
        })(e)
      ) {
        var _t1 = e.start;
        r = E("number", _t1);
      } else
        r = (function (e) {
          if (
            "check" === e.getAttribute("__lexicallisttype") ||
            e.classList.contains("contains-task-list") ||
            "1" === e.getAttribute("data-is-checklist")
          )
            return !0;
          for (var _r15 of e.childNodes)
            if (
              require("Lexical").isHTMLElement(_r15) &&
              _r15.hasAttribute("aria-checked")
            )
              return !0;
          return !1;
        })(e)
          ? E("check")
          : E("bullet");
      return (
        require("Lexical").$setDirectionFromDOM(r, e),
        {
          after: function after(e) {
            return (function (e, t) {
              var r = t.createListItemNode.bind(t),
                n = [];
              for (var _t10 = 0; _t10 < e.length; _t10++) {
                var _s1 = e[_t10];
                if (x(_s1)) {
                  n.push(_s1);
                  var _e18 = _s1.getChildren();
                  _e18.length > 1 &&
                    _e18.forEach(function (e) {
                      b(e) && n.push(r().append(e));
                    });
                } else n.push(r().append(_s1));
              }
              return n;
            })(e, r);
          },
          node: r,
        }
      );
    }
    var v = { ol: "number", ul: "bullet" };
    function E(e, r) {
      if (e === void 0) {
        e = "number";
      }
      if (r === void 0) {
        r = 1;
      }
      return require("Lexical").$applyNodeReplacement(new _O(e, r));
    }
    function b(e) {
      return e instanceof _O;
    }
    var k = _require_Lexical.createCommand("INSERT_CHECK_LIST_COMMAND");
    function A(e, r) {
      var n = (r && r.disableTakeFocusOnClick) || !1,
        s =
          "boolean" == typeof n
            ? function () {
                return n;
              }
            : n.peek.bind(n),
        i = function i(e) {
          var r = e.target;
          if (!require("Lexical").isHTMLElement(r)) return !1;
          var n = r.__lexicalCheckListLastHandled;
          return void 0 !== n && e.timeStamp - n < 500;
        },
        o = function o(e) {
          var r = e.target;
          require("Lexical").isHTMLElement(r) &&
            (r.__lexicalCheckListLastHandled = e.timeStamp);
        },
        l = function l(e) {
          i(e) || (o(e), I(e, s()));
        },
        a = function a(e) {
          "touch" === e.pointerType && (i(e) || (o(e), I(e, s())));
        },
        c = function c(e) {
          !(function (e, t) {
            P(e, function () {
              (e.preventDefault(), t && e.stopPropagation());
            });
          })(e, s());
        };
      return require("Lexical").mergeRegister(
        e.registerCommand(
          k,
          function () {
            return (g("check"), !0);
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ARROW_DOWN_COMMAND,
          function (t) {
            return R(t, e, !1);
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ARROW_UP_COMMAND,
          function (t) {
            return R(t, e, !0);
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ESCAPE_COMMAND,
          function () {
            if (null != F(e)) {
              var _t11 = e.getRootElement();
              return (null != _t11 && _t11.focus(), !0);
            }
            return !1;
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_SPACE_COMMAND,
          function (r) {
            var n = F(e);
            return (
              !(null == n || !e.isEditable()) &&
              (e.update(function () {
                var e = require("Lexical").$getNearestNodeFromDOMNode(n);
                x(e) && (r.preventDefault(), e.toggleChecked());
              }),
              !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ARROW_LEFT_COMMAND,
          function (r) {
            return e.read("latest", function () {
              var n = require("Lexical").$getSelection();
              if (require("Lexical").$isRangeSelection(n) && n.isCollapsed()) {
                var _s10 = n.anchor,
                  _i8 = "element" === _s10.type;
                if (_i8 || 0 === _s10.offset) {
                  var _n10 = _s10.getNode(),
                    _o5 = require("Lexical").$findMatchingParent(
                      _n10,
                      function (e) {
                        return (
                          require("Lexical").$isElementNode(e) && !e.isInline()
                        );
                      },
                    );
                  if (x(_o5)) {
                    var _s11 = _o5.getParent();
                    if (
                      b(_s11) &&
                      "check" === _s11.getListType() &&
                      (_i8 || _o5.getFirstDescendant() === _n10)
                    ) {
                      var _n11 = e.getElementByKey(_o5.__key);
                      if (
                        null != _n11 &&
                        require("Lexical").getActiveElement(_n11) !== _n11
                      )
                        return (_n11.focus(), r.preventDefault(), !0);
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
                pointerup: a,
              }),
              require("Lexical").registerEventListeners(
                e,
                { mousedown: c, pointerdown: c },
                { capture: !0 },
              ),
              require("Lexical").registerEventListener(e, "touchstart", c, {
                capture: !0,
                passive: !1,
              }),
            );
        }),
      );
    }
    function P(r, n) {
      var s = r.target;
      if (!require("Lexical").isHTMLElement(s)) return;
      var i = s.firstChild;
      if (
        require("Lexical").isHTMLElement(i) &&
        ("UL" === i.tagName || "OL" === i.tagName)
      )
        return;
      var o = s.parentNode;
      if (!o || "check" !== o.__lexicalListType) return;
      var l = null,
        a = null;
      if ("clientX" in r) l = r.clientX;
      else if ("touches" in r) {
        var _e19 = r.touches;
        _e19.length > 0 && ((l = _e19[0].clientX), (a = "touch"));
      }
      if (null == l) return;
      var c = s.getBoundingClientRect(),
        g = l / require("LexicalUtils").calculateZoomLevel(s),
        u = s.ownerDocument.defaultView,
        d = u ? u.getComputedStyle(s, "::before") : { width: "0px" },
        h = parseFloat(d.width),
        p =
          "touch" === a || ("pointerType" in r && "touch" === r.pointerType)
            ? 32
            : 0;
      ("rtl" === s.dir
        ? g < c.right + p && g > c.right - h - p
        : g > c.left - p && g < c.left + h + p) && n();
    }
    function I(e, r) {
      P(e, function () {
        if (require("Lexical").isHTMLElement(e.target)) {
          var _n12 = e.target,
            _s12 = require("Lexical").getNearestEditorFromDOMNode(_n12);
          null != _s12 &&
            _s12.isEditable() &&
            _s12.update(function () {
              var e = require("Lexical").$getNearestNodeFromDOMNode(_n12);
              x(e) &&
                (r
                  ? (require("Lexical").$addUpdateTag(
                      require("Lexical").SKIP_SELECTION_FOCUS_TAG,
                    ),
                    require("Lexical").$addUpdateTag(
                      require("Lexical").SKIP_DOM_SELECTION_TAG,
                    ))
                  : _n12.focus(),
                e.toggleChecked());
            });
        }
      });
    }
    function F(e) {
      var r = e.getRootElement(),
        n = r ? require("Lexical").getActiveElement(r) : null;
      return require("Lexical").isHTMLElement(n) &&
        "LI" === n.tagName &&
        null != n.parentNode &&
        "check" === n.parentNode.__lexicalListType
        ? n
        : null;
    }
    function R(e, r, n) {
      var s = F(r);
      return (
        null != s &&
          r.update(function () {
            var i = require("Lexical").$getNearestNodeFromDOMNode(s);
            if (!x(i)) return;
            var o = (function (e, t) {
              var r = t ? e.getPreviousSibling() : e.getNextSibling(),
                n = e;
              for (; null == r && x(n); )
                ((n = n.getParentOrThrow().getParent()),
                  null != n &&
                    (r = t ? n.getPreviousSibling() : n.getNextSibling()));
              for (; x(r); ) {
                var _e20 = t ? r.getLastChild() : r.getFirstChild();
                if (!b(_e20)) return r;
                r = t ? _e20.getLastChild() : _e20.getFirstChild();
              }
              return null;
            })(i, n);
            if (null != o) {
              o.selectStart();
              var _t12 = r.getElementByKey(o.__key);
              null != _t12 &&
                (e.preventDefault(),
                setTimeout(function () {
                  _t12.focus();
                }, 0));
            }
          }),
        !1
      );
    }
    function D(e) {
      var t = [];
      for (var _r16 of e)
        if (x(_r16)) {
          t.push(_r16);
          var _e21 = _r16.getChildren();
          if (_e21.length > 1)
            for (var _r17 of _e21) b(_r17) && t.push(L().append(_r17));
        } else t.push(L().append(_r16));
      return t;
    }
    var w = {
      $import: function $import(e, r) {
        var s;
        var i;
        return (
          require("LexicalHtml").isElementOfTag(r, "ol")
            ? (s = E("number", r.start))
            : (s =
                (i = r).matches(
                  '[__lexicallisttype="check"], .contains-task-list, [data-is-checklist="1"]',
                ) || null !== i.querySelector(":scope > [aria-checked]")
                  ? E("check")
                  : E("bullet")),
          require("Lexical").$setDirectionFromDOM(s, r),
          [
            s.splice(
              0,
              0,
              require("LexicalHtml").$propagateTextAlignToBlockChildren(
                D(e.$importChildren(r)),
                r,
              ),
            ),
          ]
        );
      },
      match: (_require_LexicalHtml = require("LexicalHtml")).sel.tag(
        "ol",
        "ul",
      ),
      name: "@lexical/list/list",
    };
    function W(e, r) {
      if (1 !== r.length) return r;
      var n = r[0];
      return require("Lexical").$isParagraphNode(n) &&
        !e.getFormatType() &&
        n.getFormatType()
        ? (e.setFormat(n.getFormatType()), n.getChildren())
        : r;
    }
    function K(e) {
      var r = function r(e) {
        return require("LexicalHtml").$isBlockLevel(e) && !b(e);
      };
      if (!e.some(r)) return e;
      var s = [];
      var i = [];
      var o = function o() {
        i.length > 0 && (s.push(i), (i = []));
      };
      for (var _n13 of e)
        r(_n13)
          ? (o(),
            s.push(
              require("Lexical").$isElementNode(_n13)
                ? _n13.getChildren()
                : [_n13],
            ))
          : i.push(_n13);
      o();
      var l = [];
      for (var _e22 of s)
        (l.length > 0 && l.push(require("Lexical").$createLineBreakNode()),
          l.push.apply(l, _e22));
      return l;
    }
    var H = {
      $import: function $import(e, r) {
        var n = r.getAttribute("aria-checked"),
          s = L("true" === n || ("false" !== n && void 0));
        return (
          require("Lexical").$setFormatFromDOM(s, r),
          require("Lexical").$setDirectionFromDOM(s, r),
          [s.splice(0, 0, K(W(s, e.$importChildren(r))))]
        );
      },
      match: _require_LexicalHtml.sel.tag("li"),
      name: "@lexical/list/li",
    };
    function B(e, r, s) {
      var i = require("LexicalHtml").isElementOfTag(s, "input")
        ? s
        : s.querySelector('input[type="checkbox"]');
      if (!i || "checkbox" !== i.getAttribute("type")) return [];
      var o = L(i.hasAttribute("checked"));
      return (
        require("Lexical").$setFormatFromDOM(o, r),
        require("Lexical").$setDirectionFromDOM(o, r),
        [o.splice(0, 0, K(W(o, e.$importChildren(r))))]
      );
    }
    var Y = {
        $accepts: function $accepts(e) {
          return x(e) || b(e);
        },
        $packageRun: function $packageRun(e) {
          return [L().splice(0, 0, e)];
        },
        name: "ListSchema",
      },
      U = [
        {
          $import: function $import(e, t, r) {
            var n = t.querySelector(':scope > input[type="checkbox"]');
            return n ? B(e, t, n) : r();
          },
          match: _require_LexicalHtml.sel.tag("li").classAll("task-list-item"),
          name: "@lexical/list/li-task-list-item",
        },
        {
          $import: function $import(e, t, r) {
            var n = t.querySelector(":scope > .checkbox-wrapper");
            if (!n) return r();
            var s = n.querySelector(':scope > input[type="checkbox"]');
            return s ? B(e, t, s) : r();
          },
          match: _require_LexicalHtml.sel.tag("li").classAll("joplin-checkbox"),
          name: "@lexical/list/li-joplin-checkbox",
        },
        w,
        H,
      ],
      z = _require_Lexical.createCommand("UPDATE_LIST_START_COMMAND"),
      q = _require_Lexical.createCommand("INSERT_UNORDERED_LIST_COMMAND"),
      V = _require_Lexical.createCommand("INSERT_ORDERED_LIST_COMMAND"),
      J = _require_Lexical.createCommand("REMOVE_LIST_COMMAND");
    function j(e, r) {
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
            var r = e.listNodeKey,
              n = e.newStart,
              s = require("Lexical").$getNodeByKey(r);
            return (
              !!b(s) &&
              ("number" === s.getListType() && (s.setStart(n), f(s)), !0)
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
            return (p(), !0);
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          _require_Lexical.INSERT_PARAGRAPH_COMMAND,
          function () {
            return C(!!(r && r.restoreNumbering));
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          _require_Lexical.KEY_BACKSPACE_COMMAND,
          function (e) {
            var r = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(r) || !r.isCollapsed())
              return !1;
            var n = r.anchor;
            if (0 !== n.offset) return !1;
            var s = n.getNode();
            for (; !x(s); ) {
              if (null !== s.getPreviousSibling()) return !1;
              var _e23 = s.getParent();
              if (null === _e23) return !1;
              s = _e23;
            }
            return (
              !(!x(s) || !s.collapseAtStart(r)) && (e.preventDefault(), !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_BEFORE_EDITOR,
        ),
        e.registerNodeTransform(_N, function (e) {
          var r = e.getFirstChild();
          if (r) {
            if (require("Lexical").$isTextNode(r)) {
              var _t13 = r.getStyle(),
                _n14 = r.getFormat();
              (e.getTextStyle() !== _t13 && e.setTextStyle(_t13),
                e.getTextFormat() !== _n14 && e.setTextFormat(_n14));
            }
          } else {
            var _r18 = require("Lexical").$getSelection();
            require("Lexical").$isRangeSelection(_r18) &&
              (_r18.style !== e.getTextStyle() ||
                _r18.format !== e.getTextFormat()) &&
              _r18.isCollapsed() &&
              e.is(_r18.anchor.getNode()) &&
              e.setTextStyle(_r18.style).setTextFormat(_r18.format);
          }
        }),
        e.registerNodeTransform(_require_Lexical.TextNode, function (e) {
          var t = e.getParent();
          if (x(t) && e.is(t.getFirstChild())) {
            var _r19 = e.getStyle(),
              _n15 = e.getFormat();
            (_r19 === t.getTextStyle() && _n15 === t.getTextFormat()) ||
              t.setTextStyle(_r19).setTextFormat(_n15);
          }
        }),
      );
    }
    function G(e) {
      var r = function r(e) {
        var r = e.getParent();
        if (b(e.getFirstChild()) || !b(r)) return;
        var n = require("Lexical").$findMatchingParent(e, function (e) {
          return x(e) && b(e.getParent()) && x(e.getPreviousSibling());
        });
        if (null === n && e.getIndent() > 0) e.setIndent(0);
        else if (x(n)) {
          var _t14 = n.getPreviousSibling();
          if (x(_t14)) {
            var _n16 = (function (e) {
                var t = e,
                  r = t.getFirstChild();
                for (; b(r); ) {
                  var _e24 = r.getLastChild();
                  if (!x(_e24)) break;
                  ((t = _e24), (r = t.getFirstChild()));
                }
                return t;
              })(_t14),
              _s13 = _n16.getParent();
            if (b(_s13)) {
              var _t15 = i(_s13);
              _t15 + 1 < i(r) && e.setIndent(_t15);
            }
          }
        }
      };
      return e.registerNodeTransform(_O, function (e) {
        var t = [e];
        for (; t.length > 0; ) {
          var _e25 = t.shift();
          if (b(_e25))
            for (var _n17 of _e25.getChildren())
              if (x(_n17)) {
                r(_n17);
                var _e26 = _n17.getFirstChild();
                b(_e26) && t.push(_e26);
              }
        }
      });
    }
    var X = {
        build: function build(e, t, n) {
          return require("LexicalExtension").namedSignals(t);
        },
        config: { hasStrictIndent: !1, shouldPreserveNumbering: !1 },
        dependencies: [
          _require_LexicalHtml.CoreImportExtension,
          [_require_LexicalHtml.DOMImportExtension, { rules: U }],
        ],
        name: "@lexical/list/List",
        nodes: function nodes() {
          return [_O, _N];
        },
        register: function register(e, n, s) {
          var i = s.getOutput();
          return require("Lexical").mergeRegister(
            require("LexicalExtension").effect(function () {
              return j(e, {
                restoreNumbering: i.shouldPreserveNumbering.value,
              });
            }),
            require("LexicalExtension").effect(function () {
              return i.hasStrictIndent.value ? G(e) : void 0;
            }),
          );
        },
      },
      Z = {
        build: function build(e, t) {
          return require("LexicalExtension").namedSignals(t);
        },
        config: { disableTakeFocusOnClick: !1 },
        dependencies: [X],
        name: "@lexical/list/CheckList",
        register: function register(e, t, r) {
          return A(e, r.getOutput());
        },
      },
      Q = { dependencies: [X], name: "@lexical/list/Import" },
      ee = /^MsoListParagraph(CxSp(First|Middle|Last))?$/,
      te = /^[A-Za-z0-9]+[.)]/,
      re = /Microsoft Word/i,
      ne = "data-mso-list";
    function se(e) {
      var t = (e.getAttribute(ne) || "").match(/level(\d+)/);
      return t ? parseInt(t[1], 10) : 1;
    }
    function ie(e) {
      return e.querySelector("span[" + ne + '="Ignore"]');
    }
    function oe(e) {
      var t = ie(e);
      return t ? (t.textContent || "").trim() : "";
    }
    function le(e) {
      return te.test(e) ? "number" : "bullet";
    }
    function ae(e) {
      var t = ie(e);
      if (!t) return;
      var r = t;
      for (
        ;
        r.parentElement &&
        r.parentElement !== e &&
        "SPAN" === r.parentElement.nodeName;
      )
        r = r.parentElement;
      r.remove();
    }
    function ce(e) {
      return require("Lexical").isHTMLElement(e) && ee.test(e.className);
    }
    function ge(e, t) {
      var r = E(le(t[0].marker)),
        s = [{ level: t[0].level, list: r }];
      for (var _r20 of t) {
        for (; s.length > 1 && s[s.length - 1].level > _r20.level; ) s.pop();
        if (_r20.level > s[s.length - 1].level) {
          var _e27 = E(le(_r20.marker));
          (s[s.length - 1].list.append(L().append(_e27)),
            s.push({ level: _r20.level, list: _e27 }));
        }
        (ae(_r20.el),
          s[s.length - 1].list.append(
            L().splice(
              0,
              0,
              e.$importChildren(_r20.el, {
                schema: require("LexicalHtml").InlineSchema,
              }),
            ),
          ));
      }
      return r;
    }
    var ue = _require_LexicalHtml.createImportState(
        "@lexical/list/word-consumed-list-items",
        function () {
          return null;
        },
      ),
      de = {
        $import: function $import(e, t) {
          var r = e.session.get(ue);
          if (
            (null === r && ((r = new WeakSet()), e.session.set(ue, r)),
            r.has(t))
          )
            return [];
          var n = [];
          var s = t;
          for (
            ;
            s &&
            ce(s) &&
            (r.add(s),
            n.push({ el: s, level: se(s), marker: oe(s) }),
            !s.classList.contains("MsoListParagraphCxSpLast") &&
              "MsoListParagraph" !== s.className);
          )
            s = s.nextElementSibling;
          return [ge(e, n)];
        },
        match: _require_LexicalHtml.sel
          .tag("p")
          .classAny(
            "MsoListParagraph",
            "MsoListParagraphCxSpFirst",
            "MsoListParagraphCxSpMiddle",
            "MsoListParagraphCxSpLast",
          ),
        name: "@lexical/list/word-list-paragraph",
      },
      he = {
        $import: function $import() {
          return [];
        },
        match: _require_LexicalHtml.sel.tag("o:p"),
        name: "@lexical/list/word-o-p",
      },
      pe = _require_LexicalHtml.defineOverlayRules([he, de]),
      fe = {
        dependencies: [
          X,
          [
            _require_LexicalHtml.DOMImportExtension,
            {
              preprocess: [
                function (e, r, s) {
                  var i = e.querySelector('meta[name="Generator"]');
                  if (i && re.test(i.getAttribute("content") || "")) {
                    for (var _r21 of Array.from(
                      e.querySelectorAll('[style*="mso-list"]'),
                    )) {
                      var _e28 = require("Lexical").getStyleObjectFromCSS(
                        _r21.getAttribute("style") || "",
                      )["mso-list"];
                      _e28 && _r21.setAttribute(ne, _e28);
                    }
                    r.session.update(
                      require("LexicalHtml").ImportOverlays,
                      function (e) {
                        return [].concat(e, [pe]);
                      },
                    );
                  }
                  s();
                },
              ],
            },
          ],
        ],
        name: "@lexical/list/WordListImport",
      };
    ((exports.$createListItemNode = L),
      (exports.$createListNode = E),
      (exports.$getListDepth = i),
      (exports.$handleListInsertParagraph = C),
      (exports.$insertList = g),
      (exports.$isListItemNode = x),
      (exports.$isListNode = b),
      (exports.$removeList = p),
      (exports.CheckListExtension = Z),
      (exports.INSERT_CHECK_LIST_COMMAND = k),
      (exports.INSERT_ORDERED_LIST_COMMAND = V),
      (exports.INSERT_UNORDERED_LIST_COMMAND = q),
      (exports.ListExtension = X),
      (exports.ListImportExtension = Q),
      (exports.ListImportRules = U),
      (exports.ListItemNode = _N),
      (exports.ListNode = _O),
      (exports.ListSchema = Y),
      (exports.REMOVE_LIST_COMMAND = J),
      (exports.UPDATE_LIST_START_COMMAND = z),
      (exports.WordListImportExtension = fe),
      (exports.registerCheckList = A),
      (exports.registerList = j),
      (exports.registerListStrictIndentTransform = G));
  },
  null,
);
