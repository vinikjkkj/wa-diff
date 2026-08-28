__d(
  "LexicalRichText.prod",
  [
    "Lexical",
    "LexicalA11y",
    "LexicalClipboard",
    "LexicalDragon",
    "LexicalExtension",
    "LexicalHtml",
    "LexicalSelection",
    "LexicalUtils",
  ],
  function $module_LexicalRichText_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_LexicalHtml;
    var _require_Lexical;
    function l(e) {
      var t = require("Lexical").$getNodeByKey(e);
      return E(t) ? t.getTag() : null;
    }
    var c = {
      build: function build(e, n) {
        return require("LexicalExtension").namedSignals(n);
      },
      config: {
        created: "Heading level %s",
        destroyed: "Heading level %s removed",
        disabled: !1,
      },
      dependencies: [require("LexicalA11y").AriaLiveRegionExtension],
      name: "@lexical/rich-text/HeadingAnnounce",
      register: function register(e, n, r) {
        var _r$getOutput = r.getOutput(),
          o = _r$getOutput.created,
          s = _r$getOutput.destroyed,
          a = _r$getOutput.disabled,
          c = r.getDependency(require("LexicalA11y").AriaLiveRegionExtension)
            .output.announce;
        return require("LexicalExtension").effect(function () {
          return a.value
            ? void 0
            : e.registerMutationListener(
                _$,
                function (t, _ref) {
                  var n = _ref.prevEditorState;
                  var r = null,
                    i = null;
                  var _loop = function _loop() {
                    var o = _ref3[0];
                    var s = _ref3[1];
                    "created" === s && null === r
                      ? (r = e.read("latest", function () {
                          return l(o);
                        }))
                      : "destroyed" === s &&
                        null === i &&
                        (i = n.read(function () {
                          return l(o);
                        }));
                  };
                  for (var _ref3 of t) {
                    _loop();
                  }
                  null !== r
                    ? c(o.peek().replace("%s", r.slice(1)))
                    : null !== i && c(s.peek().replace("%s", i.slice(1)));
                },
                { skipInitialization: !0 },
              );
        });
      },
    };
    var g = {
        $import: function $import(e, t) {
          var n = S(t.nodeName.toLowerCase());
          return (
            require("Lexical").setNodeIndentFromDOM(t, n),
            require("Lexical").$setFormatFromDOM(n, t),
            require("Lexical").$setDirectionFromDOM(n, t),
            [n.splice(0, 0, e.$importChildren(t))]
          );
        },
        match: (_require_LexicalHtml = require("LexicalHtml")).sel.tag(
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
        ),
        name: "@lexical/rich-text/heading",
      },
      u = {
        $import: function $import(e, t) {
          var n = D();
          return (
            require("Lexical").$setFormatFromDOM(n, t),
            require("Lexical").setNodeIndentFromDOM(t, n),
            require("Lexical").$setDirectionFromDOM(n, t),
            [n.splice(0, 0, e.$importChildren(t))]
          );
        },
        match: _require_LexicalHtml.sel.tag("blockquote"),
        name: "@lexical/rich-text/blockquote",
      },
      d = {
        $import: function $import(e, t) {
          var n = D({ shadowRoot: !0 });
          return (
            require("Lexical").$setFormatFromDOM(n, t),
            require("Lexical").setNodeIndentFromDOM(t, n),
            require("Lexical").$setDirectionFromDOM(n, t),
            [
              n.splice(
                0,
                0,
                e.$importChildren(t, {
                  schema: require("LexicalHtml").BlockSchema,
                }),
              ),
            ]
          );
        },
        match: _require_LexicalHtml.sel.tag("blockquote"),
        name: "@lexical/rich-text/blockquote-shadow-root",
      },
      f = [
        g,
        u,
        {
          $import: function $import(e, t, n) {
            var r = t.firstChild;
            return r &&
              ((i = r),
              require("Lexical").isHTMLElement(i) &&
                "SPAN" === i.nodeName &&
                "26pt" === i.style.fontSize)
              ? e.$importChildren(t)
              : n();
            var i;
          },
          match: _require_LexicalHtml.sel.tag("p"),
          name: "@lexical/rich-text/google-docs-title-p",
        },
        {
          $import: function $import(e, t, n) {
            return "26pt" !== t.style.fontSize
              ? n()
              : [S("h1").splice(0, 0, e.$importChildren(t))];
          },
          match: _require_LexicalHtml.sel.tag("span"),
          name: "@lexical/rich-text/google-docs-title-span",
        },
      ];
    function m(e, t) {
      return e && null !== t ? require("Lexical").shallowMergeConfig(e, t) : t;
    }
    var p = {
        build: function build(e, n) {
          return require("LexicalExtension").namedSignals(n);
        },
        config: {
          escapeFormatTriggers: {
            capitalize: { enter: !0, space: !0, tab: !0 },
            lowercase: { enter: !0, space: !0, tab: !0 },
            uppercase: { enter: !0, space: !0, tab: !0 },
          },
          shouldHandlePasteAsFiles: w,
        },
        conflictsWith: ["LexicalPlainText"],
        dependencies: [
          c,
          require("LexicalDragon").DragonExtension,
          require("LexicalExtension").NormalizeInlineElementsExtension,
          require("LexicalExtension").NormalizeTripleClickSelectionExtension,
          _require_LexicalHtml.CoreImportExtension,
          [_require_LexicalHtml.DOMImportExtension, { rules: f }],
        ],
        mergeConfig: function mergeConfig(e, t) {
          var n = require("Lexical").shallowMergeConfig(e, t);
          return (
            t.escapeFormatTriggers &&
              (n.escapeFormatTriggers = (function (e, t) {
                var n = require("Lexical").shallowMergeConfig(e, t);
                for (var _r of Object.keys(t)) n[_r] = m(e[_r], t[_r]);
                return n;
              })(e.escapeFormatTriggers, t.escapeFormatTriggers)),
            n
          );
        },
        name: "LexicalRichText",
        nodes: function nodes() {
          return [_$, _C];
        },
        register: function register(e, n, r) {
          return require("LexicalExtension").effect(function () {
            var _r$getOutput2 = r.getOutput(),
              t = _r$getOutput2.escapeFormatTriggers,
              n = _r$getOutput2.shouldHandlePasteAsFiles;
            return k(e, t, n);
          });
        },
      },
      N = { dependencies: [p], name: "@lexical/rich-text/Import" },
      R = (_require_Lexical = require("Lexical")).createCommand(
        "DRAG_DROP_PASTE_FILE",
      ),
      h = _require_Lexical.createState("shadowRoot", { parse: Boolean });
    var _C = (function (_o$ElementNode) {
      function C() {
        return _o$ElementNode.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(C, _o$ElementNode);
      var _proto = C.prototype;
      _proto.$config = function $config() {
        return this.config("quote", {
          extends: require("Lexical").ElementNode,
          importDOM: {
            blockquote: function blockquote() {
              return { conversion: M, priority: 0 };
            },
          },
          stateConfigs: [{ flat: !0, stateConfig: h }],
        });
      };
      _proto.isShadowRoot = function isShadowRoot() {
        return require("Lexical").$getState(this, h);
      };
      _proto.setIsShadowRoot = function setIsShadowRoot(e) {
        return require("Lexical").$setState(this, h, e);
      };
      _proto.createDOM = function createDOM(e) {
        var t = require("Lexical").$getDocument().createElement("blockquote");
        return (require("Lexical").addClassNamesToElement(t, e.theme.quote), t);
      };
      _proto.updateDOM = function updateDOM(e, t, n) {
        return !1;
      };
      _proto.exportDOM = function exportDOM(e) {
        var _o$ElementNode$protot = _o$ElementNode.prototype.exportDOM.call(
            this,
            e,
          ),
          t = _o$ElementNode$protot.element;
        if (require("Lexical").isHTMLElement(t)) {
          this.isEmpty() &&
            t.append(require("Lexical").$getDocument().createElement("br"));
          var _e = this.getFormatType();
          _e && (t.style.textAlign = _e);
          var _n = this.getDirection();
          _n && (t.dir = _n);
        }
        return { element: t };
      };
      _proto.exportJSON = function exportJSON() {
        return _o$ElementNode.prototype.exportJSON.call(this);
      };
      C.importJSON = function importJSON(e) {
        return D().updateFromJSON(e);
      };
      _proto.insertNewAfter = function insertNewAfter(e, t) {
        var n = require("Lexical").$createParagraphNode(),
          r = this.getDirection();
        return (n.setDirection(r), this.insertAfter(n, t), n);
      };
      _proto.collapseAtStart = function collapseAtStart() {
        if (this.isShadowRoot()) {
          for (var _e2 of this.getChildren()) this.insertBefore(_e2);
          return (this.remove(), !0);
        }
        var e = require("Lexical").$createParagraphNode();
        return (
          this.getChildren().forEach(function (t) {
            return e.append(t);
          }),
          this.replace(e),
          !0
        );
      };
      _proto.canMergeWhenEmpty = function canMergeWhenEmpty() {
        return !0;
      };
      return C;
    })(_require_Lexical.ElementNode);
    function D(e) {
      var t = require("Lexical").$applyNodeReplacement(new _C());
      return e && e.shadowRoot ? t.setIsShadowRoot(!0) : t;
    }
    var _$ = (function (_o$ElementNode2) {
      function $(e, t) {
        var _this;
        if (e === void 0) {
          e = "h1";
        }
        ((_this = _o$ElementNode2.call(this, t) || this), (_this.__tag = e));
        return _this;
      }
      babelHelpers.inheritsLoose($, _o$ElementNode2);
      var _proto2 = $.prototype;
      _proto2.$config = function $config() {
        return this.config("heading", {
          extends: require("Lexical").ElementNode,
          importDOM: {
            h1: function h1() {
              return { conversion: T, priority: 0 };
            },
            h2: function h2() {
              return { conversion: T, priority: 0 };
            },
            h3: function h3() {
              return { conversion: T, priority: 0 };
            },
            h4: function h4() {
              return { conversion: T, priority: 0 };
            },
            h5: function h5() {
              return { conversion: T, priority: 0 };
            },
            h6: function h6() {
              return { conversion: T, priority: 0 };
            },
            p: function p(e) {
              var t = e.firstChild;
              return null !== t && O(t)
                ? {
                    conversion: function conversion() {
                      return { node: null };
                    },
                    priority: 3,
                  }
                : null;
            },
            span: function span(e) {
              return O(e)
                ? {
                    conversion: function conversion() {
                      return { node: S("h1") };
                    },
                    priority: 3,
                  }
                : null;
            },
          },
        });
      };
      _proto2.afterCloneFrom = function afterCloneFrom(e) {
        (_o$ElementNode2.prototype.afterCloneFrom.call(this, e),
          (this.__tag = e.__tag));
      };
      _proto2.getTag = function getTag() {
        return this.getLatest().__tag;
      };
      _proto2.setTag = function setTag(e) {
        var t = this.getWritable();
        return ((t.__tag = e), t);
      };
      _proto2.createDOM = function createDOM(e) {
        var t = this.__tag,
          n = require("Lexical").$getDocument().createElement(t),
          r = e.theme.heading;
        if (void 0 !== r) {
          var _e3 = r[t];
          require("Lexical").addClassNamesToElement(n, _e3);
        }
        return n;
      };
      _proto2.updateDOM = function updateDOM(e, t, n) {
        return e.__tag !== this.__tag;
      };
      _proto2.exportDOM = function exportDOM(e) {
        var _o$ElementNode2$proto = _o$ElementNode2.prototype.exportDOM.call(
            this,
            e,
          ),
          t = _o$ElementNode2$proto.element;
        if (require("Lexical").isHTMLElement(t)) {
          this.isEmpty() &&
            t.append(require("Lexical").$getDocument().createElement("br"));
          var _e4 = this.getFormatType();
          _e4 && (t.style.textAlign = _e4);
          var _n2 = this.getDirection();
          _n2 && (t.dir = _n2);
        }
        return { element: t };
      };
      _proto2.updateFromJSON = function updateFromJSON(e) {
        return _o$ElementNode2.prototype.updateFromJSON
          .call(this, e)
          .setTag(e.tag);
      };
      _proto2.exportJSON = function exportJSON() {
        return babelHelpers["extends"](
          {},
          _o$ElementNode2.prototype.exportJSON.call(this),
          { tag: this.getTag() },
        );
      };
      _proto2.insertNewAfter = function insertNewAfter(e, t) {
        if (t === void 0) {
          t = !0;
        }
        var n = e ? e.anchor.offset : 0,
          r = this.getLastDescendant(),
          i =
            !r ||
            (e &&
              e.anchor.key === r.getKey() &&
              n === r.getTextContentSize()) ||
            !e
              ? require("Lexical").$createParagraphNode()
              : S(this.getTag())
                  .setFormat(this.getFormatType())
                  .setStyle(this.getStyle()),
          s = this.getDirection();
        if (
          (i.setDirection(s),
          this.insertAfter(i, t),
          0 === n && !this.isEmpty() && e)
        ) {
          var _e5 = require("Lexical").$createParagraphNode();
          (_e5.select(), this.replace(_e5, !0));
        }
        return i;
      };
      _proto2.collapseAtStart = function collapseAtStart() {
        if (this.isEmpty()) {
          var _e6 = require("Lexical").$createParagraphNode();
          (this.getChildren().forEach(function (t) {
            return _e6.append(t);
          }),
            this.replace(_e6));
        }
        return !0;
      };
      _proto2.extractWithChild = function extractWithChild() {
        return !0;
      };
      return $;
    })(_require_Lexical.ElementNode);
    function O(e) {
      return "span" === e.nodeName.toLowerCase() && "26pt" === e.style.fontSize;
    }
    function T(e) {
      var t = e.nodeName.toLowerCase();
      var n = null;
      return (
        ("h1" !== t &&
          "h2" !== t &&
          "h3" !== t &&
          "h4" !== t &&
          "h5" !== t &&
          "h6" !== t) ||
          ((n = S(t)),
          require("Lexical").setNodeIndentFromDOM(e, n),
          require("Lexical").$setFormatFromDOM(n, e),
          require("Lexical").$setDirectionFromDOM(n, e)),
        { node: n }
      );
    }
    function M(e) {
      var t = D();
      return (
        require("Lexical").$setFormatFromDOM(t, e),
        require("Lexical").setNodeIndentFromDOM(e, t),
        require("Lexical").$setDirectionFromDOM(t, e),
        { node: t }
      );
    }
    function S(e) {
      if (e === void 0) {
        e = "h1";
      }
      return require("Lexical").$applyNodeReplacement(new _$(e));
    }
    function E(e) {
      return e instanceof _$;
    }
    function _(e) {
      var t = require("Lexical").$getNearestNodeFromDOMNode(e);
      return require("Lexical").$isDecoratorNode(t);
    }
    function I(e, t, n, r) {
      var i = !1,
        s = null;
      if (e.isCollapsed() && "text" === e.anchor.type) {
        var _t = e.anchor.getNode();
        if (require("Lexical").$isTextNode(_t)) {
          s = _t;
          var _r2 = e.anchor.offset,
            _o =
              _r2 === _t.getTextContentSize() && null === _t.getNextSibling(),
            _a = 0 === _r2 && null === _t.getPreviousSibling();
          i =
            ("end" === n && _o) ||
            ("start" === n && _a) ||
            ("both" === n && (_o || _a));
        }
      }
      var a = !1;
      for (var _ref5 of Object.entries(r)) {
        var _n3 = _ref5[0];
        var _l = _ref5[1];
        {
          if (null == _l || !_l[t]) continue;
          var _r3 = _n3;
          if (_l.onlyAtBoundary) {
            if (
              !(i && s && require("Lexical").$isTextNode(s) && s.hasFormat(_r3))
            )
              continue;
            a = !0;
          }
          e.hasFormat(_r3) && e.toggleFormat(_r3);
        }
      }
      a && e.setStyle("");
    }
    var A = {
      capitalize: { enter: !0, space: !0, tab: !0 },
      lowercase: { enter: !0, space: !0, tab: !0 },
      uppercase: { enter: !0, space: !0, tab: !0 },
    };
    function x(e, t) {
      return (
        (function (e, t) {
          if (!e.isCollapsed()) return !1;
          var n = require("Lexical").$caretFromPoint(e.focus, t),
            r = require("Lexical").$findMatchingParent(
              n.origin,
              require("Lexical").$isShadowRootNode,
            );
          if (!r) return !1;
          var i = e.focus.getNode();
          if (!r.is(i) && !require("Lexical").$hasAncestor(i, r)) return !1;
          var s = require("Lexical").$getCaretRange(
            n,
            require("Lexical").$getSiblingCaret(r, t),
          );
          if (
            s.getTextSlices().some(function (e) {
              return e && e.getTextContentSize() > 0;
            })
          )
            return !1;
          var a = require("Lexical").$getCaretRange(
            s.anchor.getSiblingCaret(),
            s.focus,
          );
          var l = a.anchor.origin;
          for (var _e7 of a) {
            if (
              !require("Lexical").$isSiblingCaret(_e7) ||
              !_e7.origin.is(l.getParent())
            )
              return !1;
            l = _e7.origin;
          }
          var c = r;
          for (var _e8 of require("Lexical").$extendCaretToRange(
            require("Lexical").$getSiblingCaret(r, t),
          )) {
            if (!_e8.origin.is(c.getParent())) {
              if (require("Lexical").$needsBlockCursorBeside(_e8.origin)) {
                var _e9 = require("Lexical").$getSiblingCaret(c, t);
                return (
                  require("Lexical").$setSelectionFromCaretRange(
                    require("Lexical").$getCaretRange(_e9, _e9),
                  ),
                  !0
                );
              }
              break;
            }
            if (!require("Lexical").$isShadowRootNode(_e8.origin)) break;
            c = _e8.origin;
          }
          return !1;
        })(e, t) ||
        (function (e, t) {
          if (!e.isCollapsed() || "element" !== e.anchor.type) return !1;
          var n = require("Lexical")
            .$caretFromPoint(e.anchor, t)
            .getNodeAtCaret();
          return !(
            !require("Lexical").$isShadowRootNode(n) ||
            n.isInline() ||
            (require("Lexical").$setSelectionFromCaretRange(
              require("Lexical").$getCollapsedCaretRange(
                require("Lexical").$normalizeCaret(
                  require("Lexical").$getChildCaret(n, t),
                ),
              ),
            ),
            0)
          );
        })(e, t)
      );
    }
    function y(e) {
      return (
        require("Lexical").$isDecoratorNode(e) &&
        !e.isInline() &&
        !e.isIsolated() &&
        e.isKeyboardSelectable()
      );
    }
    function P(e) {
      var t = require("Lexical").$createNodeSelection();
      (t.add(e), require("Lexical").$setSelection(t));
    }
    function F(e, t) {
      if (!e.isCollapsed()) return !1;
      var n = e.focus,
        r = n.getNode(),
        i = t ? "previous" : "next",
        s = require("Lexical").$caretFromPoint(n, i);
      if (
        "element" === n.type &&
        require("Lexical").$isElementNode(r) &&
        require("Lexical").$isRootOrShadowRoot(r)
      ) {
        var _e0 = s.getNodeAtCaret();
        return !(null === _e0 || !y(_e0)) && (P(_e0.__key), !0);
      }
      var a = require("Lexical").$findMatchingParent(
        require("Lexical").$isElementNode(r) ? r : r.getParentOrThrow(),
        function (e) {
          return (
            require("Lexical").$isElementNode(e) &&
            !e.isInline() &&
            require("Lexical").$isRootOrShadowRoot(e.getParent())
          );
        },
      );
      if (null === a) return !1;
      var l = require("Lexical").$getSiblingCaret(a, i).getNodeAtCaret();
      if (null === l || !y(l)) return !1;
      if (0 === a.getTextContentSize()) return (P(l.__key), !0);
      var c = require("Lexical").$getEditor().getRootElement();
      if (null === c) return !1;
      var g = require("Lexical").getDOMSelection(c.ownerDocument.defaultView);
      if (null === g || 0 === g.rangeCount) return !1;
      var u = g.anchorNode,
        d = g.anchorOffset,
        f = g.focusNode,
        m = g.focusOffset;
      g.modify("move", t ? "backward" : "forward", "line");
      var p = g.anchorNode,
        N = g.anchorOffset;
      if (null === p) return (v(g, u, d, f, m), !1);
      var R = require("Lexical").$getNearestNodeFromDOMNode(p);
      if ((v(g, u, d, f, m), null === R)) return !1;
      if (p === u && N === d) return (P(l.__key), !0);
      return (
        !R.is(a) && !require("Lexical").$hasAncestor(R, a) && (P(l.__key), !0)
      );
    }
    function v(e, t, n, r, o) {
      null !== t && null !== r && e.setBaseAndExtent(t, n, r, o);
    }
    function b(t, n) {
      if (!t.isCollapsed()) return !1;
      var r = t.focus.getNode(),
        i = require("Lexical").$findMatchingParent(
          require("Lexical").$isElementNode(r) ? r : r.getParentOrThrow(),
          function (e) {
            return require("Lexical").$isElementNode(e) && !e.isInline();
          },
        );
      if (null === i) return !1;
      var s = require("Lexical").$getEditor(),
        a = s.getRootElement();
      if (null === a) return !1;
      var l = a.ownerDocument.defaultView;
      if (null === l) return !1;
      var c = !1;
      for (var _e1 of i.getChildren())
        if (require("Lexical").$isElementNode(_e1) && _e1.isInline()) {
          var _t2 = s.getElementByKey(_e1.getKey());
          if (null !== _t2) {
            var _e10 = l.getComputedStyle(_t2).display;
            if ("inline-grid" === _e10 || "inline-flex" === _e10) {
              c = !0;
              break;
            }
          }
        }
      if (!c) return !1;
      var g = n ? "previous" : "next",
        u = require("Lexical").$getSiblingCaret(i, g).getNodeAtCaret();
      if (null === u || !require("Lexical").$isElementNode(u)) {
        if (n) {
          var _e11 = i.getFirstDescendant();
          require("Lexical").$isTextNode(_e11)
            ? _e11.select(0, 0)
            : i.select(0, 0);
        } else {
          var _e12 = i.getLastDescendant();
          if (require("Lexical").$isTextNode(_e12)) {
            var _t3 = _e12.getTextContentSize();
            _e12.select(_t3, _t3);
          } else {
            var _e13 = i.getChildrenSize();
            i.select(_e13, _e13);
          }
        }
        return !0;
      }
      var d = s.getElementByKey(u.getKey());
      if (null === d) return !1;
      var f = require("Lexical").getDOMSelection(l);
      if (null === f || 0 === f.rangeCount) return !1;
      var m = f.getRangeAt(0).cloneRange();
      m.collapse(!0);
      var p = m.getBoundingClientRect(),
        N = d.getBoundingClientRect(),
        R = N.top + N.height / 2;
      if (p.height > 0) {
        var _n4 = require("LexicalClipboard").caretFromPoint(p.left, R, a);
        if (null !== _n4 && d.contains(_n4.node)) {
          var _e14 = a.ownerDocument.createRange();
          return (
            _e14.setStart(_n4.node, _n4.offset),
            _e14.collapse(!0),
            t.applyDOMRange(_e14),
            (t.dirty = !0),
            !0
          );
        }
      }
      var h = n ? u.getLastDescendant() : u.getFirstDescendant();
      if (require("Lexical").$isTextNode(h)) {
        var _e15 = n ? h.getTextContentSize() : 0;
        h.select(_e15, _e15);
      } else {
        var _e16 = u.getChildrenSize();
        u.select(n ? _e16 : 0, n ? _e16 : 0);
      }
      return !0;
    }
    function K(e, t) {
      var n = require("Lexical").$getSiblingCaret(e, t),
        r = n.getAdjacentCaret();
      null !== r &&
      require("Lexical").$isElementNode(r.origin) &&
      !r.origin.isInline() &&
      r.origin.isShadowRoot()
        ? require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCollapsedCaretRange(n),
          )
        : "next" === t
          ? e.selectNext(0, 0)
          : e.selectPrevious();
    }
    function L(e, t) {
      var n = e
          .getNodes()
          .map(function (e) {
            return require("Lexical").$getSiblingCaret(e, "next");
          })
          .sort(require("Lexical").$comparePointCaretNext),
        r = n[0],
        i = n[n.length - 1];
      if (!r || !i) return !1;
      for (var _e17 = 0; _e17 < n.length - 1; _e17++)
        if (!n[_e17 + 1].origin.is(n[_e17].getNodeAtCaret())) return !1;
      return (
        require("Lexical").$setSelectionFromCaretRange(
          require("Lexical").$getCaretRangeInDirection(
            require("Lexical").$getCaretRange(
              require("Lexical").$rewindSiblingCaret(r),
              i,
            ),
            t,
          ),
        ),
        require("Lexical").$flushSyncAfterUpdate(),
        !0
      );
    }
    function Y(e, t, n) {
      var _o$$findMatchingParen;
      (n.preventDefault(), n.stopPropagation());
      var r = e.getNodes();
      if (0 === r.length) return !0;
      var i = r
          .map(function (e) {
            return require("Lexical").$getSiblingCaret(e, "next");
          })
          .sort(require("Lexical").$comparePointCaretNext),
        s = (t ? i[0] : i[i.length - 1]).origin,
        a =
          (_o$$findMatchingParen = require("Lexical").$findMatchingParent(
            s,
            function (e) {
              return (
                e !== s && require("Lexical").$isElementNode(e) && !e.isInline()
              );
            },
          )) != null
            ? _o$$findMatchingParen
            : require("Lexical").$getRoot(),
        l = t ? 0 : a.getChildrenSize();
      return (a.select(l, l), !0);
    }
    function w(e, t) {
      return e.length > 0 && !t;
    }
    function k(i, s, a) {
      if (s === void 0) {
        s = require("LexicalExtension").signal(A);
      }
      if (a === void 0) {
        a = require("LexicalExtension").signal(w);
      }
      return require("Lexical").mergeRegister(
        i.registerCommand(
          require("Lexical").CLICK_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            if (require("Lexical").$isNodeSelection(t)) {
              var _n5 = e.target;
              if (require("Lexical").isHTMLElement(_n5))
                for (var _e18 of t.getNodes()) {
                  var _t4 = i.getElementByKey(_e18.getKey());
                  if (null !== _t4 && _t4.contains(_n5)) return !1;
                }
              return (t.clear(), !0);
            }
            return (
              require("Lexical").$isRangeSelection(t) &&
                I(t, "click", "both", s.peek()),
              !1
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").DELETE_CHARACTER_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            return require("Lexical").$isRangeSelection(t)
              ? (t.deleteCharacter(e), !0)
              : !!require("Lexical").$isNodeSelection(t) &&
                  (t.deleteNodes(), !0);
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").DELETE_WORD_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(t) && (t.deleteWord(e), !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").DELETE_LINE_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(t) && (t.deleteLine(e), !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").CONTROLLED_TEXT_INSERTION_COMMAND,
          function (t) {
            var n = require("Lexical").$getSelection();
            if ("string" == typeof t) null !== n && n.insertText(t);
            else {
              if (null === n) return !1;
              var _r4 = t.dataTransfer;
              if (null != _r4)
                require("LexicalClipboard").$insertDataTransferForRichText(
                  _r4,
                  n,
                  i,
                );
              else if (require("Lexical").$isRangeSelection(n)) {
                var _e19 = t.data;
                return (_e19 && n.insertText(_e19), !0);
              }
            }
            return !0;
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").REMOVE_TEXT_COMMAND,
          function () {
            var e = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(e) && (e.removeText(), !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").FORMAT_TEXT_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            return (
              !(
                !require("Lexical").$isRangeSelection(t) &&
                !require("Lexical").$isNodeSelection(t)
              ) && (require("Lexical").$formatText(t, e), !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").SET_TEXT_FORMAT_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            return (
              !(
                !require("Lexical").$isRangeSelection(t) &&
                !require("Lexical").$isNodeSelection(t)
              ) && (require("Lexical").$setTextFormat(t, e), !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").FORMAT_ELEMENT_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            if (
              !require("Lexical").$isRangeSelection(t) &&
              !require("Lexical").$isNodeSelection(t)
            )
              return !1;
            var n = t.getNodes();
            for (var _t5 of n) {
              var _n6 = require("Lexical").$findMatchingParent(
                _t5,
                function (e) {
                  return require("Lexical").$isElementNode(e) && !e.isInline();
                },
              );
              null !== _n6 && _n6.setFormat(e);
            }
            return !0;
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").INSERT_LINE_BREAK_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(t) &&
              (t.insertLineBreak(e), !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").INSERT_PARAGRAPH_COMMAND,
          function () {
            var e = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(e) &&
              (e.insertParagraph(), !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").INSERT_TAB_COMMAND,
          function () {
            var e = require("Lexical").$createTabNode(),
              t = require("Lexical").$getSelection();
            return (
              require("Lexical").$isRangeSelection(t) &&
                (e.setFormat(t.format), e.setStyle(t.style)),
              require("Lexical").$insertNodes([e]),
              !0
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").INDENT_CONTENT_COMMAND,
          function () {
            return require("LexicalUtils").$handleIndentAndOutdent(
              function (e) {
                var t = e.getIndent();
                e.setIndent(t + 1);
              },
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").OUTDENT_CONTENT_COMMAND,
          function () {
            return require("LexicalUtils").$handleIndentAndOutdent(
              function (e) {
                var t = e.getIndent();
                t > 0 && e.setIndent(Math.max(0, t - 1));
              },
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").KEY_ARROW_UP_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            if (require("Lexical").$isNodeSelection(t)) {
              var _n7 = t.getNodes();
              if (_n7.length > 0) {
                if (!e.shiftKey || !L(t, "previous"))
                  return (e.preventDefault(), K(_n7[0], "previous"), !0);
                t = require("Lexical").$getSelection();
              }
            }
            if (require("Lexical").$isRangeSelection(t)) {
              if (
                (function (e) {
                  var t = e.focus;
                  return "root" === t.key && 0 === t.offset;
                })(t)
              )
                return (e.preventDefault(), !0);
              if (!e.shiftKey && x(t, "previous"))
                return (e.preventDefault(), !0);
              if (!e.shiftKey && F(t, !0)) return (e.preventDefault(), !0);
              if (!e.shiftKey && b(t, !0)) return (e.preventDefault(), !0);
            }
            return !1;
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").KEY_ARROW_DOWN_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            if (require("Lexical").$isNodeSelection(t)) {
              var _n8 = t.getNodes();
              if (_n8.length > 0) {
                if (!e.shiftKey || !L(t, "next"))
                  return (e.preventDefault(), K(_n8[0], "next"), !0);
                t = require("Lexical").$getSelection();
              }
            }
            if (require("Lexical").$isRangeSelection(t)) {
              if (
                (function (e) {
                  var t = e.focus;
                  return (
                    "root" === t.key &&
                    t.offset === require("Lexical").$getRoot().getChildrenSize()
                  );
                })(t)
              )
                return (e.preventDefault(), !0);
              if (!e.shiftKey && x(t, "next")) return (e.preventDefault(), !0);
              if (!e.shiftKey && F(t, !1)) return (e.preventDefault(), !0);
              if (!e.shiftKey && b(t, !1)) return (e.preventDefault(), !0);
            }
            return !1;
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").KEY_ARROW_LEFT_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            if (require("Lexical").$isNodeSelection(t)) {
              var _r5 = t.getNodes();
              if (_r5.length > 0) {
                var _i = require("LexicalSelection").$isParentRTL(_r5[0])
                  ? "next"
                  : "previous";
                if (!e.shiftKey || !L(t, _i))
                  return (e.preventDefault(), K(_r5[0], _i), !0);
                t = require("Lexical").$getSelection();
              }
            }
            if (!require("Lexical").$isRangeSelection(t)) return !1;
            if (
              !e.shiftKey &&
              x(
                t,
                require("LexicalSelection").$isParentRTL(t.anchor.getNode())
                  ? "next"
                  : "previous",
              )
            )
              return (e.preventDefault(), !0);
            if (
              (e.shiftKey || I(t, "arrow", "start", s.peek()),
              require("LexicalSelection").$shouldOverrideDefaultCharacterSelection(
                t,
                !0,
              ))
            ) {
              var _r6 = e.shiftKey;
              return (
                e.preventDefault(),
                require("LexicalSelection").$moveCharacter(t, _r6, !0),
                !0
              );
            }
            return !1;
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").KEY_ARROW_RIGHT_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            if (require("Lexical").$isNodeSelection(t)) {
              var _r7 = t.getNodes();
              if (_r7.length > 0) {
                var _i2 = require("LexicalSelection").$isParentRTL(_r7[0])
                  ? "previous"
                  : "next";
                if (!e.shiftKey || !L(t, _i2))
                  return (e.preventDefault(), K(_r7[0], _i2), !0);
                t = require("Lexical").$getSelection();
              }
            }
            if (!require("Lexical").$isRangeSelection(t)) return !1;
            if (
              !e.shiftKey &&
              x(
                t,
                require("LexicalSelection").$isParentRTL(t.anchor.getNode())
                  ? "previous"
                  : "next",
              )
            )
              return (e.preventDefault(), !0);
            if (
              (e.shiftKey || I(t, "arrow", "end", s.peek()),
              require("LexicalSelection").$shouldOverrideDefaultCharacterSelection(
                t,
                !1,
              ))
            ) {
              var _r8 = e.shiftKey;
              return (
                e.preventDefault(),
                require("LexicalSelection").$moveCharacter(t, _r8, !1),
                !0
              );
            }
            return !1;
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").KEY_BACKSPACE_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            if (!require("Lexical").$isNodeSelection(t) && _(e.target))
              return !1;
            if (require("Lexical").$isRangeSelection(t)) {
              if (
                (function (e) {
                  if (!e.isCollapsed()) return !1;
                  var t = e.anchor;
                  if (0 !== t.offset) return !1;
                  var n = t.getNode();
                  if (require("Lexical").$isRootNode(n)) return !1;
                  var i =
                    require("LexicalUtils").$getNearestBlockElementAncestorOrThrow(
                      n,
                    );
                  return (
                    i.getIndent() > 0 &&
                    (i.is(n) || n.is(i.getFirstDescendant()))
                  );
                })(t)
              )
                return (
                  e.preventDefault(),
                  i.dispatchCommand(require("Lexical").OUTDENT_CONTENT_COMMAND)
                );
              if (
                require("Lexical").IS_IOS &&
                require("Lexical").CAN_USE_BEFORE_INPUT
              )
                return !1;
            } else if (!require("Lexical").$isNodeSelection(t)) return !1;
            return (
              e.preventDefault(),
              i.dispatchCommand(require("Lexical").DELETE_CHARACTER_COMMAND, !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").KEY_DELETE_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            return (
              !(!require("Lexical").$isNodeSelection(t) && _(e.target)) &&
              !(
                !require("Lexical").$isRangeSelection(t) &&
                !require("Lexical").$isNodeSelection(t)
              ) &&
              (e.preventDefault(),
              i.dispatchCommand(
                require("Lexical").DELETE_CHARACTER_COMMAND,
                !1,
              ))
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").KEY_ENTER_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            if (require("Lexical").$isNodeSelection(t)) {
              var _e20 = t.getNodes();
              1 === _e20.length &&
                require("Lexical").$isDecoratorNode(_e20[0]) &&
                !_e20[0].isInline() &&
                (t = _e20[0].selectNext());
            }
            if (!require("Lexical").$isRangeSelection(t)) return !1;
            if ((I(t, "enter", "both", s.peek()), null !== e)) {
              if (
                (require("Lexical").IS_IOS ||
                  require("Lexical").IS_SAFARI ||
                  require("Lexical").IS_APPLE_WEBKIT) &&
                require("Lexical").CAN_USE_BEFORE_INPUT
              )
                return !1;
              if ((e.preventDefault(), e.shiftKey))
                return i.dispatchCommand(
                  require("Lexical").INSERT_LINE_BREAK_COMMAND,
                  !1,
                );
            }
            return i.dispatchCommand(
              require("Lexical").INSERT_PARAGRAPH_COMMAND,
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").KEY_ESCAPE_COMMAND,
          function () {
            var e = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(e) && (i.blur(), !0);
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").DROP_COMMAND,
          function (t) {
            var _r$eventFiles = require("LexicalUtils").eventFiles(t),
              n = _r$eventFiles[1];
            if (n.length > 0) {
              var _r9 = t.clientX,
                _s = t.clientY,
                _a2 = require("LexicalClipboard").caretFromPoint(
                  _r9,
                  _s,
                  i.getRootElement(),
                );
              if (null !== _a2) {
                var _e21 = _a2.offset,
                  _t6 = _a2.node,
                  _r0 = require("Lexical").$getNearestNodeFromDOMNode(_t6);
                if (null !== _r0) {
                  var _t7 = require("Lexical").$createRangeSelection();
                  if (require("Lexical").$isTextNode(_r0))
                    (_t7.anchor.set(_r0.getKey(), _e21, "text"),
                      _t7.focus.set(_r0.getKey(), _e21, "text"));
                  else {
                    var _e22 = _r0.getParentOrThrow().getKey(),
                      _n9 = _r0.getIndexWithinParent() + 1;
                    (_t7.anchor.set(_e22, _n9, "element"),
                      _t7.focus.set(_e22, _n9, "element"));
                  }
                  var _n0 =
                    require("Lexical").$normalizeSelection__EXPERIMENTAL(_t7);
                  require("Lexical").$setSelection(_n0);
                }
                i.dispatchCommand(R, n);
              }
              return (t.preventDefault(), !0);
            }
            return require("LexicalClipboard").$handleRichTextDrop(t, i);
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").DRAGSTART_COMMAND,
          function (t) {
            var _r$eventFiles2 = require("LexicalUtils").eventFiles(t),
              n = _r$eventFiles2[0],
              s = require("Lexical").$getSelection();
            return (
              !(n && !require("Lexical").$isRangeSelection(s)) &&
              (require("Lexical").$isRangeSelection(s) &&
                !s.isCollapsed() &&
                null !== t.dataTransfer &&
                (require("LexicalClipboard").setLexicalClipboardDataTransfer(
                  t.dataTransfer,
                  require("LexicalClipboard").$getClipboardDataFromSelection(s),
                ),
                require("LexicalClipboard").$writeDragSourceToDataTransfer(
                  t.dataTransfer,
                  i,
                )),
              !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").DRAGOVER_COMMAND,
          function (t) {
            var _r$eventFiles3 = require("LexicalUtils").eventFiles(t),
              n = _r$eventFiles3[0],
              s = require("Lexical").$getSelection();
            if (n && !require("Lexical").$isRangeSelection(s)) return !1;
            var a = t.clientX,
              l = t.clientY,
              c = require("LexicalClipboard").caretFromPoint(
                a,
                l,
                i.getRootElement(),
              );
            if (null !== c) {
              var _e23 = require("Lexical").$getNearestNodeFromDOMNode(c.node);
              require("Lexical").$isDecoratorNode(_e23) && t.preventDefault();
            }
            return !0;
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").SELECT_ALL_COMMAND,
          function () {
            var e = require("Lexical").$getSelection();
            return (
              require("Lexical").$selectAll(
                require("Lexical").$isRangeSelection(e) &&
                  null !== require("Lexical").$getSlotFrame(e.anchor.getNode())
                  ? e
                  : null,
              ),
              !0
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").COPY_COMMAND,
          function (t) {
            return (
              require("LexicalClipboard").copyToClipboard(
                i,
                require("LexicalUtils").objectKlassEquals(t, ClipboardEvent)
                  ? t
                  : null,
              ),
              !0
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").CUT_COMMAND,
          function (t) {
            return (
              (async function (t, n) {
                (await require("LexicalClipboard").copyToClipboard(
                  n,
                  require("LexicalUtils").objectKlassEquals(t, ClipboardEvent)
                    ? t
                    : null,
                ),
                  n.update(
                    function () {
                      var e = require("Lexical").$getSelection();
                      require("Lexical").$isRangeSelection(e)
                        ? e.removeText()
                        : require("Lexical").$isNodeSelection(e) &&
                          e.getNodes().forEach(function (e) {
                            return e.remove();
                          });
                    },
                    { tag: require("Lexical").CUT_TAG },
                  ));
              })(t, i),
              !0
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").PASTE_COMMAND,
          function (t) {
            var _r$eventFiles4 = require("LexicalUtils").eventFiles(t),
              n = _r$eventFiles4[1],
              s = _r$eventFiles4[2];
            if (a.peek()(n, s)) return (i.dispatchCommand(R, n), !0);
            if (
              require("Lexical").isDOMNode(t.target) &&
              require("Lexical").$isSelectionCapturedInDecoratorInput(t.target)
            )
              return !1;
            return (
              null !== require("Lexical").$getSelection() &&
              ((function (t, n) {
                (t.preventDefault(),
                  n.update(
                    function () {
                      var i = require("Lexical").$getSelection(),
                        s =
                          require("LexicalUtils").objectKlassEquals(
                            t,
                            InputEvent,
                          ) ||
                          require("LexicalUtils").objectKlassEquals(
                            t,
                            KeyboardEvent,
                          )
                            ? null
                            : t.clipboardData;
                      null != s &&
                        null !== i &&
                        require("LexicalClipboard").$insertDataTransferForRichText(
                          s,
                          i,
                          n,
                        );
                    },
                    { tag: require("Lexical").PASTE_TAG },
                  ));
              })(t, i),
              !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").KEY_SPACE_COMMAND,
          function () {
            var e = require("Lexical").$getSelection();
            return (
              require("Lexical").$isRangeSelection(e) &&
                I(e, "space", "both", s.peek()),
              !1
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").KEY_TAB_COMMAND,
          function () {
            var e = require("Lexical").$getSelection();
            return (
              require("Lexical").$isRangeSelection(e) &&
                I(e, "tab", "both", s.peek()),
              !1
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").MOVE_TO_END,
          function (e) {
            var t = require("Lexical").$getSelection();
            if (require("Lexical").$isNodeSelection(t)) return Y(t, !1, e);
            if (!require("Lexical").$isRangeSelection(t)) return !1;
            var n = t.anchor;
            if ("element" !== n.type || 0 !== n.offset) return !1;
            var r = n.getNode();
            if (!require("Lexical").$isElementNode(r)) return !1;
            var i = r.getFirstChild();
            if (!require("Lexical").$isDecoratorNode(i) || !i.isInline())
              return !1;
            var s = r.getKey(),
              a = r.selectEnd();
            return (
              e.shiftKey && a.anchor.set(s, 0, "element"),
              e.preventDefault(),
              e.stopPropagation(),
              !0
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").MOVE_TO_START,
          function (e) {
            var t = require("Lexical").$getSelection();
            if (require("Lexical").$isNodeSelection(t)) return Y(t, !0, e);
            if (!require("Lexical").$isRangeSelection(t)) return !1;
            var n = t.anchor,
              r = t.focus,
              i = require("Lexical").$findMatchingParent(
                r.getNode(),
                function (e) {
                  return require("Lexical").$isElementNode(e) && !e.isInline();
                },
              );
            if (null === i) return !1;
            var s = i.getFirstChild();
            if (!require("Lexical").$isDecoratorNode(s) || !s.isInline())
              return !1;
            if (
              require("Lexical").$findMatchingParent(n.getNode(), function (e) {
                return require("Lexical").$isElementNode(e) && !e.isInline();
              }) !== i
            )
              return !1;
            var a = i.getKey();
            return (
              ("element" !== r.type || r.key !== a || 0 !== r.offset) &&
              (t.focus.set(a, 0, "element"),
              e.shiftKey || t.anchor.set(a, 0, "element"),
              e.preventDefault(),
              e.stopPropagation(),
              !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
      );
    }
    ((exports.eventFiles = require("LexicalUtils").eventFiles),
      (exports.$createHeadingNode = S),
      (exports.$createQuoteNode = D),
      (exports.$isHeadingNode = E),
      (exports.$isQuoteNode = function (e) {
        return e instanceof _C;
      }),
      (exports.DRAG_DROP_PASTE = R),
      (exports.HeadingAnnounceExtension = c),
      (exports.HeadingNode = _$),
      (exports.QuoteNode = _C),
      (exports.RichTextExtension = p),
      (exports.RichTextImportExtension = N),
      (exports.RichTextImportRules = f),
      (exports.ShadowRootQuoteRule = d),
      (exports.defaultShouldHandlePasteAsFiles = w),
      (exports.quoteShadowRootState = h),
      (exports.registerRichText = k));
  },
  null,
);
