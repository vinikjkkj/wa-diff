__d(
  "LexicalRichText.prod",
  [
    "Lexical",
    "LexicalA11y",
    "LexicalClipboard",
    "LexicalDragon",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionNormalizeInlineElementsExtension",
    "LexicalExtensionNormalizeTripleClickSelectionExtension",
    "LexicalExtensionSignals",
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
    var u = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function g(e, t) {
      if ("number" == typeof e) return Number.isFinite(e) ? e : t;
      if ("string" != typeof e || !u.test(e)) return t;
      var n = Number(e);
      return Number.isFinite(n) ? n : t;
    }
    function f(e, t, n, o, r) {
      var i = g(e, t);
      return i >= n && i <= o && Number.isInteger(i) ? i : t;
    }
    function m(e, t) {
      e.__tag = t.__tag;
    }
    var _ = function _(e) {
        var t = require("Lexical").getterTableOf(e, "format"),
          n = require("Lexical").setterTableOf(e, "format"),
          o = require("Lexical").setterDefaultOf(e, "format");
        return {
          exportJSON: function exportJSON(e) {
            var n = e.__textFormat,
              o = e.__textStyle,
              r = (0 !== n || "" !== o) && e.shouldSerializeTextStyles();
            return {
              children: [],
              tag: e.__tag,
              direction: e.__dir,
              format: t[e.__format],
              indent: e.__indent,
              textFormat: 0 !== n && r ? n : void 0,
              textStyle: "" !== o && r ? o : void 0,
              type: e.__type,
              version: 1,
            };
          },
          exportCompactJSON: function exportCompactJSON(e) {
            var n = e.__textFormat,
              o = e.__textStyle,
              r = (0 !== n || "" !== o) && e.shouldSerializeTextStyles(),
              i = { type: e.__type, children: [] },
              s = e.__tag;
            void 0 !== s && "h1" !== s && (i.tag = s);
            var a = e.__dir;
            null != a && (i.direction = a);
            var l = t[e.__format];
            void 0 !== l && "" !== l && (i.format = l);
            var c = e.__indent;
            return (
              void 0 !== c && 0 !== c && (i.indent = c),
              void 0 !== n && 0 !== n && r && (i.textFormat = n),
              void 0 !== o && "" !== o && r && (i.textStyle = o),
              i
            );
          },
          updateFromJSON: function updateFromJSON(e, t) {
            var r = t.direction;
            e.__dir = null === r || "ltr" === r || "rtl" === r ? r : null;
            var i = t.format;
            ((e.__format = "string" == typeof i && i in n ? n[i] : o),
              (e.__indent = f(t.indent, 0, 0, Infinity)),
              (e.__textFormat = g(t.textFormat, 0)));
            var s = t.textStyle;
            e.__textStyle = "string" == typeof s ? s : "";
            var a = t.tag;
            return (
              (e.__tag =
                "h1" === a ||
                "h2" === a ||
                "h3" === a ||
                "h4" === a ||
                "h5" === a ||
                "h6" === a
                  ? a
                  : "h1"),
              e
            );
          },
          afterCloneFrom: m,
        };
      },
      h = function h(e) {
        var t = require("Lexical").getterTableOf(e, "format"),
          n = require("Lexical").setterTableOf(e, "format"),
          o = require("Lexical").setterDefaultOf(e, "format");
        return {
          exportJSON: function exportJSON(e) {
            var n = e.__textFormat,
              o = e.__textStyle,
              r = (0 !== n || "" !== o) && e.shouldSerializeTextStyles();
            return {
              children: [],
              direction: e.__dir,
              format: t[e.__format],
              indent: e.__indent,
              textFormat: 0 !== n && r ? n : void 0,
              textStyle: "" !== o && r ? o : void 0,
              type: e.__type,
              version: 1,
            };
          },
          exportCompactJSON: function exportCompactJSON(e) {
            var n = e.__textFormat,
              o = e.__textStyle,
              r = (0 !== n || "" !== o) && e.shouldSerializeTextStyles(),
              i = { type: e.__type, children: [] },
              s = e.__dir;
            null != s && (i.direction = s);
            var a = t[e.__format];
            void 0 !== a && "" !== a && (i.format = a);
            var l = e.__indent;
            return (
              void 0 !== l && 0 !== l && (i.indent = l),
              void 0 !== n && 0 !== n && r && (i.textFormat = n),
              void 0 !== o && "" !== o && r && (i.textStyle = o),
              i
            );
          },
          updateFromJSON: function updateFromJSON(e, t) {
            var r = t.direction;
            e.__dir = null === r || "ltr" === r || "rtl" === r ? r : null;
            var i = t.format;
            ((e.__format = "string" == typeof i && i in n ? n[i] : o),
              (e.__indent = f(t.indent, 0, 0, Infinity)),
              (e.__textFormat = g(t.textFormat, 0)));
            var s = t.textStyle;
            return ((e.__textStyle = "string" == typeof s ? s : ""), e);
          },
        };
      };
    function p(e) {
      var t = require("Lexical").$getNodeByKey(e);
      return b(t) ? t.getTag() : null;
    }
    var N = {
        build: function build(e, t) {
          return require("LexicalExtensionNamedSignals").namedSignals(t);
        },
        config: {
          created: "Heading level %s",
          destroyed: "Heading level %s removed",
          disabled: !1,
        },
        dependencies: [require("LexicalA11y").AriaLiveRegionExtension],
        name: "@lexical/rich-text/HeadingAnnounce",
        register: function register(e, n, o) {
          var _o$getOutput = o.getOutput(),
            r = _o$getOutput.created,
            s = _o$getOutput.destroyed,
            a = _o$getOutput.disabled,
            l = o.getDependency(require("LexicalA11y").AriaLiveRegionExtension)
              .output.announce;
          return require("LexicalExtensionSignals").effect(function () {
            return a.value
              ? void 0
              : e.registerMutationListener(
                  _A,
                  function (t, _ref) {
                    var n = _ref.prevEditorState;
                    var o = null,
                      i = null;
                    var _loop = function _loop() {
                      var r = _ref3[0];
                      var s = _ref3[1];
                      "created" === s && null === o
                        ? (o = e.read("latest", function () {
                            return p(r);
                          }))
                        : "destroyed" === s &&
                          null === i &&
                          (i = n.read(function () {
                            return p(r);
                          }));
                    };
                    for (var _ref3 of t) {
                      _loop();
                    }
                    null !== o
                      ? l(r.peek().replace("%s", o.slice(1)))
                      : null !== i && l(s.peek().replace("%s", i.slice(1)));
                  },
                  { skipInitialization: !0 },
                );
          });
        },
      },
      R = {
        $import: function $import(e, t) {
          var n = P(t.nodeName.toLowerCase());
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
      C = {
        $import: function $import(e, t) {
          var n = I();
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
      $ = {
        $import: function $import(e, t) {
          var n = I({ shadowRoot: !0 });
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
      O = [
        R,
        C,
        {
          $import: function $import(e, t, n) {
            var o = t.firstChild;
            return o &&
              ((i = o),
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
              : [P("h1").splice(0, 0, e.$importChildren(t))];
          },
          match: _require_LexicalHtml.sel.tag("span"),
          name: "@lexical/rich-text/google-docs-title-span",
        },
      ];
    function D(e, t) {
      return e && null !== t ? require("Lexical").shallowMergeConfig(e, t) : t;
    }
    var S = {
        build: function build(e, t) {
          return require("LexicalExtensionNamedSignals").namedSignals(t);
        },
        config: {
          escapeFormatTriggers: {
            capitalize: { enter: !0, space: !0, tab: !0 },
            lowercase: { enter: !0, space: !0, tab: !0 },
            uppercase: { enter: !0, space: !0, tab: !0 },
          },
          shouldHandlePasteAsFiles: X,
        },
        conflictsWith: ["LexicalPlainText"],
        dependencies: [
          N,
          require("LexicalDragon").DragonExtension,
          require("LexicalExtensionNormalizeInlineElementsExtension")
            .NormalizeInlineElementsExtension,
          require("LexicalExtensionNormalizeTripleClickSelectionExtension")
            .NormalizeTripleClickSelectionExtension,
          _require_LexicalHtml.CoreImportExtension,
          [_require_LexicalHtml.DOMImportExtension, { rules: O }],
        ],
        mergeConfig: function mergeConfig(e, t) {
          var n = require("Lexical").shallowMergeConfig(e, t);
          return (
            t.escapeFormatTriggers &&
              (n.escapeFormatTriggers = (function (e, t) {
                var n = require("Lexical").shallowMergeConfig(e, t);
                for (var _o of Object.keys(t)) n[_o] = D(e[_o], t[_o]);
                return n;
              })(e.escapeFormatTriggers, t.escapeFormatTriggers)),
            n
          );
        },
        name: "LexicalRichText",
        nodes: function nodes() {
          return [_A, _M];
        },
        register: function register(e, n, o) {
          return require("LexicalExtensionSignals").effect(function () {
            var _o$getOutput2 = o.getOutput(),
              t = _o$getOutput2.escapeFormatTriggers,
              n = _o$getOutput2.shouldHandlePasteAsFiles;
            return Q(e, t, n);
          });
        },
      },
      T = (_require_Lexical = require("Lexical")).createCommand(
        "DRAG_DROP_PASTE_FILE",
      ),
      E = _require_Lexical.createState("shadowRoot", {
        parse: _require_Lexical.booleanValue(),
      });
    var _M = (function (_r$ElementNode) {
      function M() {
        return _r$ElementNode.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(M, _r$ElementNode);
      var _proto = M.prototype;
      _proto.$config = function $config() {
        return this.config("quote", {
          children: "inline",
          extends: require("Lexical").ElementNode,
          generated: h,
          importDOM: {
            blockquote: function blockquote() {
              return { conversion: v, priority: 0 };
            },
          },
          stateConfigs: [{ flat: !0, stateConfig: E }],
        });
      };
      _proto.isShadowRoot = function isShadowRoot() {
        return require("Lexical").$getState(this, E);
      };
      _proto.setIsShadowRoot = function setIsShadowRoot(e) {
        return require("Lexical").$setState(this, E, e);
      };
      _proto.createDOM = function createDOM(e) {
        var t = require("Lexical").$getDocument().createElement("blockquote");
        return (require("Lexical").addClassNamesToElement(t, e.theme.quote), t);
      };
      _proto.updateDOM = function updateDOM(e, t, n) {
        return !1;
      };
      _proto.exportDOM = function exportDOM(e) {
        var _r$ElementNode$protot = _r$ElementNode.prototype.exportDOM.call(
            this,
            e,
          ),
          t = _r$ElementNode$protot.element;
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
      M.importJSON = function importJSON(e) {
        return I().updateFromJSON(e);
      };
      _proto.insertNewAfter = function insertNewAfter(e, t) {
        var n = require("Lexical").$createParagraphNode();
        (n.setTextFormat(e.format), n.setTextStyle(e.style));
        var o = this.getDirection();
        return (
          n.setDirection(o),
          n.setFormat(this.getFormatType()),
          n.setStyle(this.getStyle()),
          this.insertAfter(n, t),
          n
        );
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
      return M;
    })(_require_Lexical.ElementNode);
    function I(e) {
      var t = require("Lexical").$applyNodeReplacement(new _M());
      return e && e.shadowRoot ? t.setIsShadowRoot(!0) : t;
    }
    var x = _require_Lexical.nodeSchema()({
      tag: _require_Lexical.withField(
        _require_Lexical.enumValue(["h1", "h2", "h3", "h4", "h5", "h6"]),
        { field: "__tag" },
      ),
    });
    var _A = (function (_r$ElementNode2) {
      function A(e, t) {
        var _this;
        if (e === void 0) {
          e = "h1";
        }
        ((_this = _r$ElementNode2.call(this, t) || this), (_this.__tag = e));
        return _this;
      }
      babelHelpers.inheritsLoose(A, _r$ElementNode2);
      var _proto2 = A.prototype;
      _proto2.$config = function $config() {
        return this.config("heading", {
          children: "inline",
          extends: require("Lexical").ElementNode,
          generated: _,
          importDOM: {
            h1: function h1() {
              return { conversion: F, priority: 0 };
            },
            h2: function h2() {
              return { conversion: F, priority: 0 };
            },
            h3: function h3() {
              return { conversion: F, priority: 0 };
            },
            h4: function h4() {
              return { conversion: F, priority: 0 };
            },
            h5: function h5() {
              return { conversion: F, priority: 0 };
            },
            h6: function h6() {
              return { conversion: F, priority: 0 };
            },
            p: function p(e) {
              var t = e.firstChild;
              return null !== t && y(t)
                ? {
                    conversion: function conversion() {
                      return { node: null };
                    },
                    priority: 3,
                  }
                : null;
            },
            span: function span(e) {
              return y(e)
                ? {
                    conversion: function conversion() {
                      return { node: P("h1") };
                    },
                    priority: 3,
                  }
                : null;
            },
          },
          json: x,
        });
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
          o = e.theme.heading;
        if (void 0 !== o) {
          var _e3 = o[t];
          require("Lexical").addClassNamesToElement(n, _e3);
        }
        return n;
      };
      _proto2.updateDOM = function updateDOM(e, t, n) {
        return e.__tag !== this.__tag;
      };
      _proto2.exportDOM = function exportDOM(e) {
        var _r$ElementNode2$proto = _r$ElementNode2.prototype.exportDOM.call(
            this,
            e,
          ),
          t = _r$ElementNode2$proto.element;
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
      _proto2.insertNewAfter = function insertNewAfter(e, t) {
        if (t === void 0) {
          t = !0;
        }
        var n =
            !this.getLastDescendant() ||
            (e && require("LexicalUtils").$isAtEndOfNode(e.anchor, this)),
          i = e && require("LexicalUtils").$isAtStartOfNode(e.anchor, this),
          s =
            n || !e
              ? require("Lexical").$createParagraphNode()
              : P(this.getTag())
                  .setFormat(this.getFormatType())
                  .setStyle(this.getStyle()),
          a = this.getDirection();
        if ((s.setDirection(a), this.insertAfter(s, t), i && !this.isEmpty())) {
          var _e5 = require("Lexical").$createParagraphNode();
          (_e5.select(), this.replace(_e5, !0));
        }
        return s;
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
      return A;
    })(_require_Lexical.ElementNode);
    function y(e) {
      return "span" === e.nodeName.toLowerCase() && "26pt" === e.style.fontSize;
    }
    function F(e) {
      var t = e.nodeName.toLowerCase();
      var n = null;
      return (
        ("h1" !== t &&
          "h2" !== t &&
          "h3" !== t &&
          "h4" !== t &&
          "h5" !== t &&
          "h6" !== t) ||
          ((n = P(t)),
          require("Lexical").setNodeIndentFromDOM(e, n),
          require("Lexical").$setFormatFromDOM(n, e),
          require("Lexical").$setDirectionFromDOM(n, e)),
        { node: n }
      );
    }
    function v(e) {
      var t = I();
      return (
        require("Lexical").$setFormatFromDOM(t, e),
        require("Lexical").setNodeIndentFromDOM(e, t),
        require("Lexical").$setDirectionFromDOM(t, e),
        { node: t }
      );
    }
    function P(e) {
      if (e === void 0) {
        e = "h1";
      }
      return require("Lexical").$applyNodeReplacement(new _A(e));
    }
    function b(e) {
      return e instanceof _A;
    }
    function L(e) {
      return (
        require("Lexical").$isDecoratorNode(
          require("Lexical").$getNearestNodeFromDOMNode(e),
        ) &&
        !(
          require("Lexical").isHTMLElement(e) &&
          e.hasAttribute("data-lexical-slot")
        )
      );
    }
    function K(e) {
      var t = e.focus;
      return (
        "root" === t.key &&
        t.offset === require("Lexical").$getRoot().getChildrenSize()
      );
    }
    function Y(e) {
      var t = e.focus;
      return "root" === t.key && 0 === t.offset;
    }
    function w(e, t) {
      if (!e.isCollapsed()) return !1;
      var n = "next" === t;
      if (!(n ? K(e) : Y(e))) return !1;
      var o = e.focus.offset;
      return require("Lexical").$needsBlockCursorBeside(
        require("Lexical")
          .$getRoot()
          .getChildAtIndex(n ? o - 1 : o),
      );
    }
    function k(e, t, n, o) {
      var i = !1,
        s = null;
      if (e.isCollapsed() && "text" === e.anchor.type) {
        var _t = e.anchor.getNode();
        if (require("Lexical").$isTextNode(_t)) {
          s = _t;
          var _o2 = e.anchor.offset,
            _r =
              _o2 === _t.getTextContentSize() && null === _t.getNextSibling(),
            _a = 0 === _o2 && null === _t.getPreviousSibling();
          i =
            ("end" === n && _r) ||
            ("start" === n && _a) ||
            ("both" === n && (_r || _a));
        }
      }
      var a = !1;
      for (var _ref5 of Object.entries(o)) {
        var _n3 = _ref5[0];
        var _l = _ref5[1];
        {
          if (null == _l || !_l[t]) continue;
          var _o3 = _n3;
          if (_l.onlyAtBoundary) {
            if (
              !(i && s && require("Lexical").$isTextNode(s) && s.hasFormat(_o3))
            )
              continue;
            a = !0;
          }
          e.hasFormat(_o3) && e.toggleFormat(_o3);
        }
      }
      a && e.setStyle("");
    }
    var z = {
      capitalize: { enter: !0, space: !0, tab: !0 },
      lowercase: { enter: !0, space: !0, tab: !0 },
      uppercase: { enter: !0, space: !0, tab: !0 },
    };
    function q(e, t) {
      return (
        (function (e, t) {
          if (!e.isCollapsed()) return !1;
          var n = require("Lexical").$caretFromPoint(e.focus, t),
            o = require("Lexical").$findMatchingParent(
              n.origin,
              require("Lexical").$isShadowRootNode,
            );
          if (!o) return !1;
          var i = e.focus.getNode();
          if (!o.is(i) && !require("Lexical").$hasAncestor(i, o)) return !1;
          var s = require("Lexical").$getCaretRange(
            n,
            require("Lexical").$getSiblingCaret(o, t),
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
          var c = o;
          for (var _e8 of require("Lexical").$extendCaretToRange(
            require("Lexical").$getSiblingCaret(o, t),
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
    function B(e) {
      return (
        require("Lexical").$isDecoratorNode(e) &&
        !e.isInline() &&
        !e.isIsolated() &&
        e.isKeyboardSelectable()
      );
    }
    function H(e) {
      var t = require("Lexical").$createNodeSelection();
      (t.add(e), require("Lexical").$setSelection(t));
    }
    function W(e, t) {
      if (!e.isCollapsed()) return !1;
      var n = e.focus,
        o = n.getNode(),
        i = t ? "previous" : "next",
        s = require("Lexical").$caretFromPoint(n, i);
      if (
        "element" === n.type &&
        require("Lexical").$isElementNode(o) &&
        require("Lexical").$isRootOrShadowRoot(o)
      ) {
        var _e0 = s.getNodeAtCaret();
        return !(null === _e0 || !B(_e0) || (H(_e0.__key), 0));
      }
      var a = require("Lexical").$findMatchingParent(
        require("Lexical").$isElementNode(o) ? o : o.getParentOrThrow(),
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
      if (null === l || !B(l)) return !1;
      if (0 === a.getTextContentSize()) return (H(l.__key), !0);
      var c = require("Lexical").$getEditor().getRootElement();
      if (null === c) return !1;
      var d = require("Lexical").getDOMSelection(c.ownerDocument.defaultView);
      if (null === d || 0 === d.rangeCount) return !1;
      var u = d.anchorNode,
        g = d.anchorOffset,
        f = d.focusNode,
        m = d.focusOffset;
      d.modify("move", t ? "backward" : "forward", "line");
      var _ = d.anchorNode,
        h = d.anchorOffset;
      if (null === _) return (U(d, u, g, f, m), !1);
      var p = require("Lexical").$getNearestNodeFromDOMNode(_);
      return (
        U(d, u, g, f, m),
        null !== p &&
          ((_ === u && h === g) ||
            (!p.is(a) && !require("Lexical").$hasAncestor(p, a))) &&
          (H(l.__key), !0)
      );
    }
    function U(e, t, n, o, r) {
      null !== t && null !== o && e.setBaseAndExtent(t, n, o, r);
    }
    function G(t, n) {
      if (!t.isCollapsed()) return !1;
      var o = t.focus.getNode(),
        i = require("Lexical").$findMatchingParent(
          require("Lexical").$isElementNode(o) ? o : o.getParentOrThrow(),
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
      var d = n ? "previous" : "next",
        u = require("Lexical").$getSiblingCaret(i, d).getNodeAtCaret();
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
      var g = s.getElementByKey(u.getKey());
      if (null === g) return !1;
      var f = require("Lexical").getDOMSelection(l);
      if (null === f || 0 === f.rangeCount) return !1;
      var m = f.getRangeAt(0).cloneRange();
      m.collapse(!0);
      var _ = m.getBoundingClientRect(),
        h = g.getBoundingClientRect(),
        p = h.top + h.height / 2;
      if (_.height > 0) {
        var _n4 = require("LexicalClipboard").caretFromPoint(_.left, p, a);
        if (null !== _n4 && g.contains(_n4.node)) {
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
      var N = n ? u.getLastDescendant() : u.getFirstDescendant();
      if (require("Lexical").$isTextNode(N)) {
        var _e15 = n ? N.getTextContentSize() : 0;
        N.select(_e15, _e15);
      } else {
        var _e16 = u.getChildrenSize();
        u.select(n ? _e16 : 0, n ? _e16 : 0);
      }
      return !0;
    }
    function j(e, t) {
      var n = require("Lexical").$getSiblingCaret(e, t),
        o = n.getAdjacentCaret();
      null !== o &&
      require("Lexical").$isElementNode(o.origin) &&
      !o.origin.isInline() &&
      o.origin.isShadowRoot()
        ? require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCollapsedCaretRange(n),
          )
        : "next" === t
          ? e.selectNext(0, 0)
          : e.selectPrevious();
    }
    function J(e, t) {
      var n = e
          .getNodes()
          .map(function (e) {
            return require("Lexical").$getSiblingCaret(e, "next");
          })
          .sort(require("Lexical").$comparePointCaretNext),
        o = n[0],
        i = n[n.length - 1];
      if (!o || !i) return !1;
      for (var _e17 = 0; _e17 < n.length - 1; _e17++)
        if (!n[_e17 + 1].origin.is(n[_e17].getNodeAtCaret())) return !1;
      return (
        require("Lexical").$setSelectionFromCaretRange(
          require("Lexical").$getCaretRangeInDirection(
            require("Lexical").$getCaretRange(
              require("Lexical").$rewindSiblingCaret(o),
              i,
            ),
            t,
          ),
        ),
        require("Lexical").$flushSyncAfterUpdate(),
        !0
      );
    }
    function V(e, t, n) {
      var _r$$findMatchingParen;
      (n.preventDefault(), n.stopPropagation());
      var o = e.getNodes();
      if (0 === o.length) return !0;
      var i = o
          .map(function (e) {
            return require("Lexical").$getSiblingCaret(e, "next");
          })
          .sort(require("Lexical").$comparePointCaretNext),
        s = (t ? i[0] : i[i.length - 1]).origin,
        a =
          (_r$$findMatchingParen = require("Lexical").$findMatchingParent(
            s,
            function (e) {
              return (
                e !== s && require("Lexical").$isElementNode(e) && !e.isInline()
              );
            },
          )) != null
            ? _r$$findMatchingParen
            : require("Lexical").$getRoot(),
        l = t ? 0 : a.getChildrenSize();
      return (a.select(l, l), !0);
    }
    function X(e, t) {
      return e.length > 0 && !t;
    }
    function Q(i, s, a) {
      if (s === void 0) {
        s = require("LexicalExtensionSignals").signal(z);
      }
      if (a === void 0) {
        a = require("LexicalExtensionSignals").signal(X);
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
                k(t, "click", "both", s.peek()),
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
              var _o4 = t.dataTransfer;
              if (null != _o4)
                require("LexicalClipboard").$insertDataTransferForRichText(
                  _o4,
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
            return !(
              (!require("Lexical").$isRangeSelection(t) &&
                !require("Lexical").$isNodeSelection(t)) ||
              (require("Lexical").$formatText(t, e), 0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").SET_TEXT_FORMAT_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            return !(
              (!require("Lexical").$isRangeSelection(t) &&
                !require("Lexical").$isNodeSelection(t)) ||
              (require("Lexical").$setTextFormat(t, e), 0)
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
                if (!e.shiftKey || !J(t, "previous"))
                  return (e.preventDefault(), j(_n7[0], "previous"), !0);
                t = require("Lexical").$getSelection();
              }
            }
            if (require("Lexical").$isRangeSelection(t)) {
              if (Y(t)) return (e.preventDefault(), !0);
              if (!e.shiftKey && q(t, "previous"))
                return (e.preventDefault(), !0);
              if (!e.shiftKey && W(t, !0)) return (e.preventDefault(), !0);
              if (!e.shiftKey && G(t, !0)) return (e.preventDefault(), !0);
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
                if (!e.shiftKey || !J(t, "next"))
                  return (e.preventDefault(), j(_n8[0], "next"), !0);
                t = require("Lexical").$getSelection();
              }
            }
            if (require("Lexical").$isRangeSelection(t)) {
              if (K(t)) return (e.preventDefault(), !0);
              if (!e.shiftKey && q(t, "next")) return (e.preventDefault(), !0);
              if (!e.shiftKey && W(t, !1)) return (e.preventDefault(), !0);
              if (!e.shiftKey && G(t, !1)) return (e.preventDefault(), !0);
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
              var _o5 = t.getNodes();
              if (_o5.length > 0) {
                var _i = require("LexicalSelection").$isParentRTL(_o5[0])
                  ? "next"
                  : "previous";
                if (!e.shiftKey || !J(t, _i))
                  return (e.preventDefault(), j(_o5[0], _i), !0);
                t = require("Lexical").$getSelection();
              }
            }
            if (!require("Lexical").$isRangeSelection(t)) return !1;
            var o = require("LexicalSelection").$isParentRTL(t.anchor.getNode())
              ? "next"
              : "previous";
            if (w(t, o)) return (e.preventDefault(), !0);
            if (!e.shiftKey && q(t, o)) return (e.preventDefault(), !0);
            if (
              (e.shiftKey || k(t, "arrow", "start", s.peek()),
              require("LexicalSelection").$shouldOverrideDefaultCharacterSelection(
                t,
                !0,
              ))
            ) {
              var _o6 = e.shiftKey;
              return (
                e.preventDefault(),
                require("LexicalSelection").$moveCharacter(t, _o6, !0),
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
              var _o7 = t.getNodes();
              if (_o7.length > 0) {
                var _i2 = require("LexicalSelection").$isParentRTL(_o7[0])
                  ? "previous"
                  : "next";
                if (!e.shiftKey || !J(t, _i2))
                  return (e.preventDefault(), j(_o7[0], _i2), !0);
                t = require("Lexical").$getSelection();
              }
            }
            if (!require("Lexical").$isRangeSelection(t)) return !1;
            var o = require("LexicalSelection").$isParentRTL(t.anchor.getNode())
              ? "previous"
              : "next";
            if (w(t, o)) return (e.preventDefault(), !0);
            if (!e.shiftKey && q(t, o)) return (e.preventDefault(), !0);
            if (
              (e.shiftKey || k(t, "arrow", "end", s.peek()),
              require("LexicalSelection").$shouldOverrideDefaultCharacterSelection(
                t,
                !1,
              ))
            ) {
              var _o8 = e.shiftKey;
              return (
                e.preventDefault(),
                require("LexicalSelection").$moveCharacter(t, _o8, !1),
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
            if (!require("Lexical").$isNodeSelection(t) && L(e.target))
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
              !(!require("Lexical").$isNodeSelection(t) && L(e.target)) &&
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
            if ((k(t, "enter", "both", s.peek()), null !== e)) {
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
            var _o$eventFiles = require("LexicalUtils").eventFiles(t),
              n = _o$eventFiles[1];
            if (n.length > 0) {
              var _o9 = t.clientX,
                _s = t.clientY,
                _a2 = require("LexicalClipboard").caretFromPoint(
                  _o9,
                  _s,
                  i.getRootElement(),
                );
              if (null !== _a2) {
                var _e21 = _a2.offset,
                  _t6 = _a2.node,
                  _n9 = require("Lexical").$getNearestNodeFromDOMNode(_t6);
                if (null !== _n9) {
                  var _t7 = require("Lexical").$createRangeSelection();
                  if (require("Lexical").$isTextNode(_n9))
                    (_t7.anchor.set(_n9.getKey(), _e21, "text"),
                      _t7.focus.set(_n9.getKey(), _e21, "text"));
                  else {
                    var _e22 = _n9.getParentOrThrow().getKey(),
                      _o0 = _n9.getIndexWithinParent() + 1;
                    (_t7.anchor.set(_e22, _o0, "element"),
                      _t7.focus.set(_e22, _o0, "element"));
                  }
                  var _o1 =
                    require("Lexical").$normalizeSelection__EXPERIMENTAL(_t7);
                  require("Lexical").$setSelection(_o1);
                }
              }
              return !(
                (!i.dispatchCommand(T, n) &&
                  require("Lexical").IS_IOS &&
                  n.every(function (e) {
                    return "text/plain" === e.type;
                  })) ||
                (t.preventDefault(), 0)
              );
            }
            return require("LexicalClipboard").$handleRichTextDrop(t, i);
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").DRAGSTART_COMMAND,
          function (t) {
            var _o$eventFiles2 = require("LexicalUtils").eventFiles(t),
              n = _o$eventFiles2[0],
              s = require("Lexical").$getSelection();
            return !(
              (n && !require("Lexical").$isRangeSelection(s)) ||
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
              0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").DRAGOVER_COMMAND,
          function (t) {
            var _o$eventFiles3 = require("LexicalUtils").eventFiles(t),
              n = _o$eventFiles3[0],
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
              !require("Lexical").$isEventFromEmbeddedInput(t) &&
              (require("LexicalClipboard").copyToClipboard(
                i,
                require("LexicalUtils").objectKlassEquals(t, ClipboardEvent)
                  ? t
                  : null,
              ),
              !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").CUT_COMMAND,
          function (t) {
            return (
              !require("Lexical").$isEventFromEmbeddedInput(t) &&
              ((async function (t, n) {
                (n.update(
                  function () {
                    var e = require("Lexical").$getSelection();
                    require("Lexical").$isRangeSelection(e) &&
                      !e.isCollapsed() &&
                      require("Lexical").INTERNAL_$expandSelectionToWholeDocument(
                        e,
                      );
                  },
                  { discrete: !0, tag: require("Lexical").CUT_TAG },
                ),
                  await require("LexicalClipboard").copyToClipboard(
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
              !0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").PASTE_COMMAND,
          function (t) {
            var _o$eventFiles4 = require("LexicalUtils").eventFiles(t),
              n = _o$eventFiles4[1],
              s = _o$eventFiles4[2];
            return (
              !(!a.peek()(n, s) || !i.dispatchCommand(T, n)) ||
              (!require("Lexical").$isEventFromEmbeddedInput(t) &&
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
                !0))
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
                k(e, "space", "both", s.peek()),
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
                k(e, "tab", "both", s.peek()),
              !1
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        i.registerCommand(
          require("Lexical").MOVE_TO_END,
          function (e) {
            var t = require("Lexical").$getSelection();
            if (require("Lexical").$isNodeSelection(t)) return V(t, !1, e);
            if (!require("Lexical").$isRangeSelection(t)) return !1;
            var n = t.anchor;
            if ("element" !== n.type || 0 !== n.offset) return !1;
            var o = n.getNode();
            if (!require("Lexical").$isElementNode(o)) return !1;
            var i = o.getFirstChild();
            if (!require("Lexical").$isDecoratorNode(i) || !i.isInline())
              return !1;
            var s = o.getKey(),
              a = o.selectEnd();
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
            if (require("Lexical").$isNodeSelection(t)) return V(t, !0, e);
            if (!require("Lexical").$isRangeSelection(t)) return !1;
            var n = t.anchor,
              o = t.focus,
              i = require("Lexical").$findMatchingParent(
                o.getNode(),
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
              ("element" !== o.type || o.key !== a || 0 !== o.offset) &&
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
      (exports.$createHeadingNode = P),
      (exports.$createQuoteNode = I),
      (exports.$isHeadingNode = b),
      (exports.$isQuoteNode = function (e) {
        return e instanceof _M;
      }),
      (exports.DRAG_DROP_PASTE = T),
      (exports.HeadingAnnounceExtension = N),
      (exports.HeadingNode = _A),
      (exports.QuoteNode = _M),
      (exports.RichTextExtension = S),
      (exports.RichTextImportRules = O),
      (exports.ShadowRootQuoteRule = $),
      (exports.defaultShouldHandlePasteAsFiles = X),
      (exports.quoteShadowRootState = E),
      (exports.registerRichText = Q));
  },
  null,
);
