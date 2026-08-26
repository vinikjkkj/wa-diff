__d(
  "LexicalClipboard.prod",
  [
    "Lexical",
    "LexicalExtension",
    "LexicalHtml",
    "LexicalSelection",
    "LexicalUtils",
  ],
  function $module_LexicalClipboard_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function i(t, n, o) {
      if (o === void 0) {
        o = null;
      }
      var r = require("Lexical").getRootOwnerDocument(o),
        i = o ? require("Lexical").getDOMShadowRoots(o) : [],
        l = null !== o && i.length > 0;
      if (l && "function" == typeof r.caretPositionFromPoint) {
        var _l = r.caretPositionFromPoint(t, n, { shadowRoots: i });
        if (
          null !== _l &&
          (function (t, n) {
            for (var _o = t; null !== _o; ) {
              if (_o === n) return !0;
              _o = require("Lexical").getParentElement(_o);
            }
            return !1;
          })(_l.offsetNode, o)
        )
          return { node: _l.offsetNode, offset: _l.offset };
      }
      if (l) {
        var _i = o.getRootNode();
        if (require("Lexical").isDOMShadowRoot(_i)) {
          var _e = _i.elementFromPoint(t, n);
          if (null !== _e && o.contains(_e)) {
            var _o2 = (function (e, t, n, o) {
              var r = o.createRange(),
                i = function i(e) {
                  return t < e.top
                    ? e.top - t
                    : t > e.bottom
                      ? t - e.bottom
                      : 0;
                },
                l = function l(t) {
                  return e < t.left
                    ? t.left - e
                    : e > t.right
                      ? e - t.right
                      : 0;
                },
                s = o.createTreeWalker(n, NodeFilter.SHOW_TEXT);
              var c = null,
                a = 1 / 0,
                u = 1 / 0;
              for (var _e2 = s.nextNode(); _e2; _e2 = s.nextNode()) {
                r.selectNodeContents(_e2);
                for (var _t of r.getClientRects()) {
                  var _n = i(_t),
                    _o3 = l(_t);
                  (_n < a || (_n === a && _o3 < u)) &&
                    ((a = _n), (u = _o3), (c = _e2));
                }
              }
              if (null === c) return null;
              var f = 0,
                p = 1 / 0,
                d = 1 / 0;
              for (var _t2 = 0; _t2 <= c.length; _t2++) {
                (r.setStart(c, _t2), r.collapse(!0));
                var _n2 = r.getBoundingClientRect(),
                  _o4 = i(_n2),
                  _l2 = Math.abs(e - _n2.left);
                (_o4 < p || (_o4 === p && _l2 < d)) &&
                  ((p = _o4), (d = _l2), (f = _t2));
              }
              return { node: c, offset: f };
            })(t, n, _e, r);
            if (null !== _o2) return _o2;
          }
        }
      }
      if ("function" == typeof r.caretRangeFromPoint) {
        var _e3 = r.caretRangeFromPoint(t, n);
        return null === _e3
          ? null
          : { node: _e3.startContainer, offset: _e3.startOffset };
      }
      if ("function" == typeof r.caretPositionFromPoint) {
        var _e4 = r.caretPositionFromPoint(t, n);
        return null === _e4
          ? null
          : { node: _e4.offsetNode, offset: _e4.offset };
      }
      return null;
    }
    function l(e) {
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
      for (var _e5 of t) o.append("v", _e5);
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
    var s = {
      "application/x-lexical-editor": 0,
      "text/html": 10,
      "text/plain": 20,
      "text/uri-list": 30,
    };
    function c(e) {
      if (window.trustedTypes && window.trustedTypes.createPolicy) {
        return window.trustedTypes
          .createPolicy("Lexical", {
            createHTML: function createHTML(e) {
              return e;
            },
          })
          .createHTML(e);
      }
      return e;
    }
    var a = function a(t, n) {
        if (!require("Lexical").$isRangeSelection(n))
          return (n.insertRawText(t), !0);
        var o = function o(t) {
          var n = require("Lexical").$getSelection();
          require("Lexical").$isRangeSelection(n) && t(n);
        };
        return (
          require("Lexical").tokenizeRawText(t, {
            linebreak: function linebreak() {
              return o(function (e) {
                return e.insertParagraph();
              });
            },
            tab: function tab() {
              return o(function (t) {
                return t.insertNodes([require("Lexical").$createTabNode()]);
              });
            },
            text: function text(e) {
              return o(function (t) {
                return t.insertText(e);
              });
            },
          }),
          !0
        );
      },
      u = {
        "application/x-lexical-editor": [
          function (t, n, o) {
            try {
              var _o5 = require("Lexical").$getEditor(),
                _r = JSON.parse(t);
              if (
                _r &&
                _r.namespace === _o5._config.namespace &&
                Array.isArray(_r.nodes)
              ) {
                return (S(_o5, M(_r.nodes), n), !0);
              }
            } catch (e) {
              console.error(e);
            }
            return o();
          },
        ],
        "text/html": [
          function (t, o, r) {
            try {
              var _r2 = require("Lexical").$getEditor(),
                _i2 = new DOMParser().parseFromString(c(t), "text/html");
              return (
                S(
                  _r2,
                  require("LexicalHtml").$generateNodesFromDOM(_r2, _i2),
                  o,
                ),
                !0
              );
            } catch (e) {
              return (console.error(e), r());
            }
          },
        ],
        "text/plain": [a],
        "text/uri-list": [a],
      };
    function f(e, t, n, o) {
      if (!e) return !1;
      var _r3 = function r(i) {
        return !!e[i] && e[i](t, n, _r3.bind(null, i - 1), o);
      };
      return _r3(e.length - 1);
    }
    function p(e, t, n) {
      var o = t.getData("text/plain");
      for (var _r4 of (function (e) {
        return Object.keys(e.$importMimeType)
          .filter(function (t) {
            return void 0 !== e.$importMimeType[t];
          })
          .sort(function (t, n) {
            var o = e.priority[t],
              r = e.priority[n];
            return void 0 === o && void 0 === r
              ? t < n
                ? -1
                : t > n
                  ? 1
                  : 0
              : void 0 === o
                ? 1
                : void 0 === r
                  ? -1
                  : o - r;
          });
      })(e)) {
        var _i3 = t.getData(_r4);
        if (
          _i3 &&
          ("text/html" !== _r4 || _i3 !== o) &&
          f(e.$importMimeType[_r4], _i3, n, t)
        )
          return !0;
      }
      return !1;
    }
    var d = {
      $importMimeType: u,
      $insertDataTransfer: function $insertDataTransfer(e, t) {
        return p({ $importMimeType: u, priority: s }, e, t);
      },
      priority: s,
    };
    var g = {
        build: function build(e, t) {
          return {
            $importMimeType: t.$importMimeType,
            $insertDataTransfer: function $insertDataTransfer(e, n) {
              return p(t, e, n);
            },
            priority: t.priority,
          };
        },
        config: { $importMimeType: u, priority: s },
        mergeConfig: function mergeConfig(t, n) {
          var o = require("Lexical").shallowMergeConfig(t, n);
          if (n.$importMimeType) {
            var _e6 = babelHelpers["extends"]({}, t.$importMimeType);
            for (var _ref2 of Object.entries(n.$importMimeType)) {
              var _t3 = _ref2[0];
              var _o6 = _ref2[1];
              if (_o6) {
                var _n3 = _e6[_t3];
                _e6[_t3] = _n3 ? [].concat(_n3, _o6) : _o6;
              }
            }
            o.$importMimeType = _e6;
          }
          return (
            n.priority &&
              (o.priority = babelHelpers["extends"](
                {},
                t.priority,
                n.priority,
              )),
            o
          );
        },
        name: "@lexical/clipboard/Import",
      },
      m = {
        dependencies: [
          require("LexicalHtml").CoreImportExtension,
          [
            g,
            {
              $importMimeType: {
                "text/html": [
                  function (t, o, r, i) {
                    var _require_LexicalHtml;
                    var l = new DOMParser().parseFromString(c(t), "text/html"),
                      s =
                        (_require_LexicalHtml = require("LexicalHtml")).$generateNodesFromDOMViaExtension(
                          l,
                          {
                            context: [
                              _require_LexicalHtml.contextValue(
                                _require_LexicalHtml.ImportSource,
                                "paste",
                              ),
                              _require_LexicalHtml.contextValue(
                                _require_LexicalHtml.ImportSourceDataTransfer,
                                i,
                              ),
                            ],
                          },
                        );
                    return (S(require("Lexical").$getEditor(), s, o), !0);
                  },
                ],
              },
            },
          ],
        ],
        name: "@lexical/clipboard/DOMImport",
      };
    function x(t, o) {
      if (o === void 0) {
        o = require("Lexical").$getSelection();
      }
      return (
        null == o && l(166),
        (require("Lexical").$isRangeSelection(o) && o.isCollapsed()) ||
        0 === o.getNodes().length
          ? ""
          : require("LexicalHtml").$generateHtmlFromNodes(t, o)
      );
    }
    function $(t, n) {
      if (n === void 0) {
        n = require("Lexical").$getSelection();
      }
      return (
        null == n && l(166),
        (require("Lexical").$isRangeSelection(n) && n.isCollapsed()) ||
        0 === n.getNodes().length
          ? null
          : JSON.stringify(D(t, n))
      );
    }
    function y(e, t) {
      var n = e.getData("text/plain") || e.getData("text/uri-list");
      null != n && t.insertRawText(n);
    }
    function T(e, n, o) {
      (function () {
        var e = require("LexicalExtension").$getPeerDependency(g.name);
        return e ? e.output : d;
      })().$insertDataTransfer(e, n);
    }
    var h = "application/x-lexical-drag";
    function N(t, n, o) {
      var r = t.dataTransfer;
      if (null === r) return !1;
      var l = (function (e) {
        var t = e.getData(h);
        if (!t) return null;
        var n;
        try {
          n = JSON.parse(t);
        } catch (e) {
          return null;
        }
        return null !== (o = n) &&
          "object" == typeof o &&
          "editorKey" in o &&
          "string" == typeof o.editorKey
          ? n
          : null;
        var o;
      })(r);
      if (null === l) return !1;
      var s = (function (t, n) {
        var o = i(t.clientX, t.clientY, n.getRootElement());
        if (null === o) return null;
        var r = require("Lexical").$getNearestNodeFromDOMNode(o.node);
        if (null === r) return null;
        if (require("Lexical").$isTextNode(r))
          return require("Lexical").$getTextPointCaret(r, "next", o.offset);
        if (require("Lexical").$isElementNode(r))
          return require("Lexical").$getChildCaretAtIndex(r, o.offset, "next");
        var l = r.getParent();
        return null === l
          ? null
          : require("Lexical").$getChildCaretAtIndex(
              l,
              r.getIndexWithinParent() + 1,
              "next",
            );
      })(t, n);
      if (null === s) return !1;
      var c = require("Lexical").$splitAtPointCaretNext(s);
      if (null === c) return !1;
      var a = l.editorKey === n.getKey(),
        u = require("Lexical").$getSelection();
      if (a) {
        if (!require("Lexical").$isRangeSelection(u) || u.isCollapsed())
          return !1;
        if (
          (function (t, n) {
            var _e$$getCaretRangeInDi =
                require("Lexical").$getCaretRangeInDirection(
                  require("Lexical").$caretRangeFromSelection(n),
                  "next",
                ),
              o = _e$$getCaretRangeInDi.anchor,
              r = _e$$getCaretRangeInDi.focus;
            return (
              require("Lexical").$comparePointCaretNext(o, t) < 0 &&
              require("Lexical").$comparePointCaretNext(t, r) < 0
            );
          })(s, u)
        )
          return (t.preventDefault(), !0);
        u.removeText();
      }
      if (!c.origin.isAttached()) return (t.preventDefault(), !0);
      if (
        (o(
          r,
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCollapsedCaretRange(c),
          ),
          n,
        ),
        !a)
      ) {
        var _t4 = n.getRootElement(),
          _o7 = _t4 ? _t4.ownerDocument : null,
          _r5 = _o7
            ? (function (t, n) {
                for (var _o8 of require("Lexical").findAllLexicalElementsDeep(
                  n,
                )) {
                  var _n4 =
                    require("Lexical").getEditorPropertyFromDOMNode(_o8);
                  if (
                    require("Lexical").isLexicalEditor(_n4) &&
                    _n4.getKey() === t &&
                    require("Lexical").isHTMLElement(_o8)
                  )
                    return _o8;
                }
                return null;
              })(l.editorKey, _o7)
            : null;
        null !== _r5 &&
          _r5.dispatchEvent(
            new InputEvent("beforeinput", {
              bubbles: !0,
              cancelable: !0,
              inputType: "deleteByDrag",
            }),
          );
      }
      return (t.preventDefault(), !0);
    }
    function S(t, n, o) {
      t.dispatchCommand(
        require("Lexical").SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
        { nodes: n, selection: o },
      ) ||
        (o.insertNodes(n),
        (function (t) {
          if (require("Lexical").$isRangeSelection(t) && t.isCollapsed()) {
            var _n5 = t.anchor;
            var _o9 = null;
            var _r6 = require("Lexical").$caretFromPoint(_n5, "previous");
            if (_r6)
              if (require("Lexical").$isTextPointCaret(_r6)) _o9 = _r6.origin;
              else {
                var _t5 = require("Lexical").$getCaretRange(
                  _r6,
                  require("Lexical")
                    .$getChildCaret(require("Lexical").$getRoot(), "next")
                    .getFlipped(),
                );
                for (var _n6 of _t5) {
                  if (require("Lexical").$isTextNode(_n6.origin)) {
                    _o9 = _n6.origin;
                    break;
                  }
                  if (
                    require("Lexical").$isElementNode(_n6.origin) &&
                    !_n6.origin.isInline()
                  )
                    break;
                }
              }
            if (_o9 && require("Lexical").$isTextNode(_o9)) {
              var _e7 = _o9.getFormat(),
                _n7 = _o9.getStyle();
              (t.format === _e7 && t.style === _n7) ||
                ((t.format = _e7), (t.style = _n7), (t.dirty = !0));
            }
          }
        })(o));
    }
    function C(t, n, r, i) {
      if (i === void 0) {
        i = [];
      }
      var s = null === n || r.isSelected(n);
      var c =
        require("Lexical").$isElementNode(r) && r.excludeFromCopy("clone");
      var a = r;
      null !== n &&
        require("Lexical").$isTextNode(a) &&
        (a = require("LexicalSelection").$sliceSelectedTextNodeContent(
          n,
          a,
          "clone",
        ));
      var u = require("Lexical").$isElementNode(a) ? a.getChildren() : [],
        f = (function (t) {
          var n = t.exportJSON(),
            o = t.constructor;
          if (
            (n.type !== o.getType() && l(58, o.name),
            require("Lexical").$isElementNode(t))
          ) {
            var _e8 = n.children;
            Array.isArray(_e8) || l(59, o.name);
          }
          return n;
        })(a);
      require("Lexical").$isTextNode(a) &&
        0 === a.getTextContentSize() &&
        (s = !1);
      var p =
        s &&
        require("Lexical").$isNodeSelection(n) &&
        require("Lexical").$isElementNode(r)
          ? null
          : n;
      for (var _o0 = 0; _o0 < u.length; _o0++) {
        var _i4 = u[_o0],
          _l3 = C(t, p, _i4, f.children);
        !s &&
          require("Lexical").$isElementNode(r) &&
          _l3 &&
          r.extractWithChild(_i4, n, "clone") &&
          (s = !0);
      }
      if (s && !c) {
        var _n8 = require("Lexical").$getSlotNames(a);
        if (_n8.length > 0) {
          var _o1 = {};
          for (var _r7 of _n8) {
            var _n9 = require("Lexical").$getSlot(a, _r7);
            null === _n9 && l(366, a.constructor.name, _r7);
            var _i5 = [];
            (C(t, null, _n9, _i5),
              (1 === _i5.length && _i5[0].type === _n9.getType()) ||
                l(
                  385,
                  _r7,
                  a.constructor.name,
                  String(_i5.length),
                  String(_i5.length > 0 ? _i5[0].type : "none"),
                ),
              (_o1[_r7] = _i5[0]));
          }
          f.$slots = _o1;
        }
      }
      if (s && !c) i.push(f);
      else if (Array.isArray(f.children))
        for (var _e9 = 0; _e9 < f.children.length; _e9++) {
          var _t6 = f.children[_e9];
          i.push(_t6);
        }
      return s;
    }
    function D(t, n) {
      var _n$getNodes$;
      var o = [],
        r = require("Lexical").$getRoot(),
        i = require("Lexical").$isRangeSelection(n)
          ? n.anchor.getNode()
          : require("Lexical").$isNodeSelection(n)
            ? (_n$getNodes$ = n.getNodes()[0]) != null
              ? _n$getNodes$
              : null
            : null,
        l = null !== i ? require("Lexical").$getSlotFrame(i) : null,
        s = (require("Lexical").$isElementNode(l) ? l : r).getChildren();
      for (var _e0 = 0; _e0 < s.length; _e0++) {
        C(t, n, s[_e0], o);
      }
      return { namespace: t._config.namespace, nodes: o };
    }
    function M(t) {
      var n = [];
      for (var _o10 of t) n.push(require("Lexical").$parseSerializedNode(_o10));
      return n;
    }
    var E = null;
    function R(t, n, o) {
      if (void 0 === o) {
        var _n0 = require("Lexical").getDOMSelection(t._window),
          _r8 = require("Lexical").$getSelection();
        if (!_r8 || _r8.isCollapsed()) return !1;
        if (!_n0) return !1;
        var _i6 = require("Lexical").getDOMSelectionPoints(
            _n0,
            t.getRootElement(),
          ),
          _l4 = _i6.anchorNode,
          _s = _i6.focusNode;
        if (
          null !== _l4 &&
          null !== _s &&
          !require("Lexical").isSelectionWithinEditor(t, _l4, _s)
        )
          return !1;
        o = O(_r8);
      }
      n.preventDefault();
      var r = n.clipboardData;
      return null !== r && (b(r, o), !0);
    }
    var P = [
      ["text/html", x],
      ["application/x-lexical-editor", $],
    ];
    function O(t) {
      if (t === void 0) {
        t = require("Lexical").$getSelection();
      }
      return (function (e, t) {
        var n = { "text/plain": "" };
        for (var _ref4 of Object.entries(e)) {
          var _o11 = _ref4[0];
          var _r9 = _ref4[1];
          if (_r9) {
            var _e1 = v(_r9, t);
            null !== _e1 && (n[_o11] = _e1);
          }
        }
        return n;
      })(w(), t);
    }
    function b(e, t) {
      for (var _ref6 of P) {
        var _n1 = _ref6[0];
        void 0 === t[_n1] && e.setData(_n1, "");
      }
      for (var _n10 in t) {
        var _o12 = t[_n10];
        void 0 !== _o12 && e.setData(_n10, _o12);
      }
    }
    function w(n) {
      if (n === void 0) {
        n = require("Lexical").$getEditor();
      }
      var o = require("LexicalExtension").getPeerDependencyFromEditor(
        n,
        I.name,
      );
      return o ? o.output : F;
    }
    var F = {
      "application/x-lexical-editor": [
        function (t, n) {
          return t ? $(require("Lexical").$getEditor(), t) : n();
        },
      ],
      "text/html": [
        function (t, n) {
          return t ? x(require("Lexical").$getEditor(), t) : n();
        },
      ],
      "text/plain": [
        function (e, t) {
          return e ? e.getTextContent() : t();
        },
      ],
    };
    function v(e, t) {
      var _n11 = function n(o) {
        return e[o] ? e[o](t, _n11.bind(null, o - 1)) : null;
      };
      return _n11(e.length - 1);
    }
    var I = {
      build: function build(e, t, n) {
        return t.$exportMimeType;
      },
      config: { $exportMimeType: F },
      mergeConfig: function mergeConfig(t, n) {
        var o = require("Lexical").shallowMergeConfig(t, n);
        if (n.$exportMimeType) {
          var _e10 = babelHelpers["extends"]({}, t.$exportMimeType);
          for (var _ref8 of Object.entries(n.$exportMimeType)) {
            var _t7 = _ref8[0];
            var _o13 = _ref8[1];
            if (_o13) {
              var _n12 = _e10[_t7];
              _e10[_t7] = _n12 ? [].concat(_n12, _o13) : _o13;
            }
          }
          o.$exportMimeType = _e10;
        }
        return o;
      },
      name: "@lexical/clipboard/GetClipboardData",
    };
    ((exports.$exportMimeTypeFromSelection = function (t, n) {
      if (n === void 0) {
        n = require("Lexical").$getSelection();
      }
      return v(w()[t] || [], n);
    }),
      (exports.$generateJSONFromSelectedNodes = D),
      (exports.$generateNodesFromSerializedNodes = M),
      (exports.$getClipboardDataFromSelection = O),
      (exports.$getHtmlContent = x),
      (exports.$getLexicalContent = $),
      (exports.$handlePlainTextDrop = function (e, t) {
        return N(e, t, function (e, t) {
          return y(e, t);
        });
      }),
      (exports.$handleRichTextDrop = function (e, t) {
        return N(e, t, T);
      }),
      (exports.$insertDataTransferForPlainText = y),
      (exports.$insertDataTransferForRichText = T),
      (exports.$insertGeneratedNodes = S),
      (exports.$writeDragSourceToDataTransfer = function (e, t) {
        var n = { editorKey: t.getKey() };
        e.setData(h, JSON.stringify(n));
      }),
      (exports.ClipboardDOMImportExtension = m),
      (exports.ClipboardImportExtension = g),
      (exports.DEFAULT_IMPORT_MIME_TYPE = u),
      (exports.DEFAULT_IMPORT_MIME_TYPE_PRIORITY = s),
      (exports.GetClipboardDataExtension = I),
      (exports.caretFromPoint = i),
      (exports.copyToClipboard = async function (t, n, o) {
        if (null !== E) return !1;
        if (null !== n)
          return new Promise(function (e, r) {
            t.update(function () {
              e(R(t, n, o));
            });
          });
        var i = t.getRootElement(),
          l = t._window || window,
          s = l.document,
          c = require("Lexical").getDOMSelection(l);
        if (null === i || null === c) return !1;
        var a = s.createElement("span");
        ((a.style.position = "fixed"),
          (a.style.top = "-1000px"),
          a.append(s.createTextNode("#")),
          i.append(a));
        var u = s.createRange();
        return (
          u.setStart(a, 0),
          u.setEnd(a, 1),
          c.removeAllRanges(),
          c.addRange(u),
          new Promise(function (n, i) {
            var c = t.registerCommand(
              require("Lexical").COPY_COMMAND,
              function (e) {
                return (
                  require("LexicalUtils").objectKlassEquals(
                    e,
                    ClipboardEvent,
                  ) &&
                    (c(),
                    null !== E && (l.clearTimeout(E), (E = null)),
                    n(R(t, e, o))),
                  !0
                );
              },
              require("Lexical").COMMAND_PRIORITY_CRITICAL,
            );
            ((E = l.setTimeout(function () {
              (c(), (E = null), n(!1));
            }, 50)),
              s.execCommand("copy"),
              a.remove());
          })
        );
      }),
      (exports.setLexicalClipboardDataTransfer = b));
  },
  null,
);
