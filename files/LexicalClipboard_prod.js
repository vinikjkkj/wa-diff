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
    var _require_Lexical;
    function i(e, t) {
      if (void 0 !== document.caretRangeFromPoint) {
        var _n = document.caretRangeFromPoint(e, t);
        return null === _n
          ? null
          : { node: _n.startContainer, offset: _n.startOffset };
      }
      if (void 0 !== document.caretPositionFromPoint) {
        var _n2 = document.caretPositionFromPoint(e, t);
        return null === _n2
          ? null
          : { node: _n2.offsetNode, offset: _n2.offset };
      }
      return null;
    }
    function l(e) {
      throw new Error(e);
    }
    function s(e) {
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
    var a = {
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
    var u = function u(e, t) {
        if (!require("Lexical").$isRangeSelection(t))
          return (t.insertRawText(e), !0);
        var n = function n(e) {
          var t = require("Lexical").$getSelection();
          require("Lexical").$isRangeSelection(t) && e(t);
        };
        return (
          require("Lexical").tokenizeRawText(e, {
            linebreak: function linebreak() {
              return n(function (e) {
                return e.insertParagraph();
              });
            },
            tab: function tab() {
              return n(function (e) {
                return e.insertNodes([require("Lexical").$createTabNode()]);
              });
            },
            text: function text(e) {
              return n(function (t) {
                return t.insertText(e);
              });
            },
          }),
          !0
        );
      },
      p = {
        "application/x-lexical-editor": [
          function (e, t, n) {
            try {
              var _n3 = require("Lexical").$getEditor(),
                _o = JSON.parse(e);
              if (
                _o &&
                _o.namespace === _n3._config.namespace &&
                Array.isArray(_o.nodes)
              ) {
                return (S(_n3, M(_o.nodes), t), !0);
              }
            } catch (e) {
              console.error(e);
            }
            return n();
          },
        ],
        "text/html": [
          function (e, n, o) {
            try {
              var _o2 = require("Lexical").$getEditor(),
                _i = new DOMParser().parseFromString(c(e), "text/html");
              return (
                S(
                  _o2,
                  require("LexicalHtml").$generateNodesFromDOM(_o2, _i),
                  n,
                ),
                !0
              );
            } catch (e) {
              return (console.error(e), o());
            }
          },
        ],
        "text/plain": [u],
        "text/uri-list": [u],
      };
    function d(e, t, n, o) {
      if (!e) return !1;
      var _r = function r(i) {
        return !!e[i] && e[i](t, n, _r.bind(null, i - 1), o);
      };
      return _r(e.length - 1);
    }
    function f(e, t, n) {
      var o = t.getData("text/plain");
      for (var _r2 of (function (e) {
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
        var _i2 = t.getData(_r2);
        if (
          _i2 &&
          ("text/html" !== _r2 || _i2 !== o) &&
          d(e.$importMimeType[_r2], _i2, n, t)
        )
          return !0;
      }
      return !1;
    }
    var m = {
      $importMimeType: p,
      $insertDataTransfer: function $insertDataTransfer(e, t) {
        return f({ $importMimeType: p, priority: a }, e, t);
      },
      priority: a,
    };
    var g = (_require_Lexical = require("Lexical")).defineExtension({
        build: function build(e, t) {
          return {
            $importMimeType: t.$importMimeType,
            $insertDataTransfer: function $insertDataTransfer(e, n) {
              return f(t, e, n);
            },
            priority: t.priority,
          };
        },
        config: _require_Lexical.safeCast({ $importMimeType: p, priority: a }),
        mergeConfig: function mergeConfig(e, t) {
          var n = require("Lexical").shallowMergeConfig(e, t);
          if (t.$importMimeType) {
            var _o3 = babelHelpers["extends"]({}, e.$importMimeType);
            for (var _ref2 of Object.entries(t.$importMimeType)) {
              var _e2 = _ref2[0];
              var _n4 = _ref2[1];
              if (_n4) {
                var _t = _o3[_e2];
                _o3[_e2] = _t ? [].concat(_t, _n4) : _n4;
              }
            }
            n.$importMimeType = _o3;
          }
          return (
            t.priority &&
              (n.priority = babelHelpers["extends"](
                {},
                e.priority,
                t.priority,
              )),
            n
          );
        },
        name: "@lexical/clipboard/Import",
      }),
      x = _require_Lexical.defineExtension({
        dependencies: [
          require("LexicalHtml").CoreImportExtension,
          require("LexicalExtension").configExtension(g, {
            $importMimeType: {
              "text/html": [
                function (e, n, o, i) {
                  var _require_LexicalHtml;
                  var l = new DOMParser().parseFromString(c(e), "text/html"),
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
                  return (S(require("Lexical").$getEditor(), s, n), !0);
                },
              ],
            },
          }),
        ],
        name: "@lexical/clipboard/DOMImport",
      });
    function $(e, n) {
      if (n === void 0) {
        n = require("Lexical").$getSelection();
      }
      return (
        null == n && s(166),
        (require("Lexical").$isRangeSelection(n) && n.isCollapsed()) ||
        0 === n.getNodes().length
          ? ""
          : require("LexicalHtml").$generateHtmlFromNodes(e, n)
      );
    }
    function y(e, t) {
      if (t === void 0) {
        t = require("Lexical").$getSelection();
      }
      return (
        null == t && s(166),
        (require("Lexical").$isRangeSelection(t) && t.isCollapsed()) ||
        0 === t.getNodes().length
          ? null
          : JSON.stringify(E(e, t))
      );
    }
    function T(e, t) {
      var n = e.getData("text/plain") || e.getData("text/uri-list");
      null != n && t.insertRawText(n);
    }
    function h(t, n, o) {
      (function () {
        var t = require("LexicalExtension").$getPeerDependency(g.name);
        return t ? t.output : m;
      })().$insertDataTransfer(t, n);
    }
    var C = "application/x-lexical-drag";
    function N(e, t, n) {
      var o = e.dataTransfer;
      if (null === o) return !1;
      var l = (function (e) {
        var t = e.getData(C);
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
      })(o);
      if (null === l) return !1;
      var s = (function (e) {
        var t = i(e.clientX, e.clientY);
        if (null === t) return null;
        var n = require("Lexical").$getNearestNodeFromDOMNode(t.node);
        if (null === n) return null;
        if (require("Lexical").$isTextNode(n))
          return require("Lexical").$getTextPointCaret(n, "next", t.offset);
        if (require("Lexical").$isElementNode(n))
          return require("Lexical").$getChildCaretAtIndex(n, t.offset, "next");
        var o = n.getParent();
        return null === o
          ? null
          : require("Lexical").$getChildCaretAtIndex(
              o,
              n.getIndexWithinParent() + 1,
              "next",
            );
      })(e);
      if (null === s) return !1;
      var a = require("Lexical").$splitAtPointCaretNext(s);
      if (null === a) return !1;
      var c = l.editorKey === t.getKey(),
        u = require("Lexical").$getSelection();
      if (c) {
        if (!require("Lexical").$isRangeSelection(u) || u.isCollapsed())
          return !1;
        if (
          (function (e, t) {
            var _r$$getCaretRangeInDi =
                require("Lexical").$getCaretRangeInDirection(
                  require("Lexical").$caretRangeFromSelection(t),
                  "next",
                ),
              n = _r$$getCaretRangeInDi.anchor,
              o = _r$$getCaretRangeInDi.focus;
            return (
              require("Lexical").$comparePointCaretNext(n, e) < 0 &&
              require("Lexical").$comparePointCaretNext(e, o) < 0
            );
          })(s, u)
        )
          return (e.preventDefault(), !0);
        u.removeText();
      }
      if (!a.origin.isAttached()) return (e.preventDefault(), !0);
      if (
        (n(
          o,
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCollapsedCaretRange(a),
          ),
          t,
        ),
        !c)
      ) {
        var _e3 = t.getRootElement(),
          _n5 = _e3 ? _e3.ownerDocument : null,
          _o4 = _n5
            ? (function (e, t) {
                var n = t.querySelectorAll('[data-lexical-editor="true"]');
                for (var _t2 of Array.from(n)) {
                  var _n6 = _t2.__lexicalEditor;
                  if (_n6 && _n6.getKey() === e) return _t2;
                }
                return null;
              })(l.editorKey, _n5)
            : null;
        null !== _o4 &&
          _o4.dispatchEvent(
            new InputEvent("beforeinput", {
              bubbles: !0,
              cancelable: !0,
              inputType: "deleteByDrag",
            }),
          );
      }
      return (e.preventDefault(), !0);
    }
    function S(e, t, n) {
      e.dispatchCommand(
        require("Lexical").SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
        { nodes: t, selection: n },
      ) ||
        (n.insertNodes(t),
        (function (e) {
          if (require("Lexical").$isRangeSelection(e) && e.isCollapsed()) {
            var _t3 = e.anchor;
            var _n7 = null;
            var _o5 = require("Lexical").$caretFromPoint(_t3, "previous");
            if (_o5)
              if (require("Lexical").$isTextPointCaret(_o5)) _n7 = _o5.origin;
              else {
                var _e4 = require("Lexical").$getCaretRange(
                  _o5,
                  require("Lexical")
                    .$getChildCaret(require("Lexical").$getRoot(), "next")
                    .getFlipped(),
                );
                for (var _t4 of _e4) {
                  if (require("Lexical").$isTextNode(_t4.origin)) {
                    _n7 = _t4.origin;
                    break;
                  }
                  if (
                    require("Lexical").$isElementNode(_t4.origin) &&
                    !_t4.origin.isInline()
                  )
                    break;
                }
              }
            if (_n7 && require("Lexical").$isTextNode(_n7)) {
              var _t5 = _n7.getFormat(),
                _o6 = _n7.getStyle();
              (e.format === _t5 && e.style === _o6) ||
                ((e.format = _t5), (e.style = _o6), (e.dirty = !0));
            }
          }
        })(n));
    }
    function D(e, t, o, i) {
      if (i === void 0) {
        i = [];
      }
      var a = null === t || o.isSelected(t);
      var c = require("Lexical").$isElementNode(o) && o.excludeFromCopy("html");
      var u = o;
      null !== t &&
        require("Lexical").$isTextNode(u) &&
        (u = require("LexicalSelection").$sliceSelectedTextNodeContent(
          t,
          u,
          "clone",
        ));
      var p = require("Lexical").$isElementNode(u) ? u.getChildren() : [],
        d = (function (e) {
          var t = e.exportJSON(),
            n = e.constructor;
          if (
            (t.type !== n.getType() && s(58, n.name),
            require("Lexical").$isElementNode(e))
          ) {
            var _e5 = t.children;
            Array.isArray(_e5) || s(59, n.name);
          }
          return t;
        })(u);
      require("Lexical").$isTextNode(u) &&
        0 === u.getTextContentSize() &&
        (a = !1);
      var f =
        a &&
        require("Lexical").$isNodeSelection(t) &&
        require("Lexical").$isElementNode(o)
          ? null
          : t;
      for (var _n8 = 0; _n8 < p.length; _n8++) {
        var _i3 = p[_n8],
          _l = D(e, f, _i3, d.children);
        !a &&
          require("Lexical").$isElementNode(o) &&
          _l &&
          o.extractWithChild(_i3, t, "clone") &&
          (a = !0);
      }
      if (a && !c) {
        var _t6 = require("Lexical").$getSlotNames(u);
        if (_t6.length > 0) {
          var _n9 = {};
          for (var _o7 of _t6) {
            var _t7 = require("Lexical").$getSlot(u, _o7);
            null === _t7 &&
              l(
                "LexicalNode: Node " +
                  u.constructor.name +
                  ' has slot "' +
                  _o7 +
                  '" but it resolved to no node during export.',
              );
            var _i4 = [];
            (D(e, null, _t7, _i4),
              (1 === _i4.length && _i4[0].type === _t7.getType()) ||
                l(
                  'LexicalNode: slot "' +
                    _o7 +
                    '" on ' +
                    u.constructor.name +
                    " did not serialize to exactly the slot value node (got " +
                    String(_i4.length) +
                    " of type " +
                    String(_i4.length > 0 ? _i4[0].type : "none") +
                    "); a slot value must not be excluded from copy.",
                ),
              (_n9[_o7] = _i4[0]));
          }
          d.$slots = _n9;
        }
      }
      if (a && !c) i.push(d);
      else if (Array.isArray(d.children))
        for (var _e6 = 0; _e6 < d.children.length; _e6++) {
          var _t8 = d.children[_e6];
          i.push(_t8);
        }
      return a;
    }
    function E(e, t) {
      var n = [],
        o = require("Lexical").$getRoot(),
        i = require("Lexical").$isRangeSelection(t)
          ? require("Lexical").$getSlotFrame(t.anchor.getNode())
          : null,
        l = (require("Lexical").$isElementNode(i) ? i : o).getChildren();
      for (var _o8 = 0; _o8 < l.length; _o8++) {
        D(e, t, l[_o8], n);
      }
      return { namespace: e._config.namespace, nodes: n };
    }
    function M(e) {
      var t = [];
      for (var _n0 of e) t.push(require("Lexical").$parseSerializedNode(_n0));
      return t;
    }
    var R = null;
    function P(e, t, n) {
      if (void 0 === n) {
        var _t9 = require("Lexical").getDOMSelection(e._window),
          _o9 = require("Lexical").$getSelection();
        if (!_o9 || _o9.isCollapsed()) return !1;
        if (!_t9) return !1;
        var _i5 = _t9.anchorNode,
          _l2 = _t9.focusNode;
        if (
          null !== _i5 &&
          null !== _l2 &&
          !require("Lexical").isSelectionWithinEditor(e, _i5, _l2)
        )
          return !1;
        n = v(_o9);
      }
      t.preventDefault();
      var o = t.clipboardData;
      return null !== o && (w(o, n), !0);
    }
    var b = [
      ["text/html", $],
      ["application/x-lexical-editor", y],
    ];
    function v(e) {
      if (e === void 0) {
        e = require("Lexical").$getSelection();
      }
      return (function (e, t) {
        var n = { "text/plain": "" };
        for (var _ref4 of Object.entries(e)) {
          var _o0 = _ref4[0];
          var _r3 = _ref4[1];
          if (_r3) {
            var _e7 = I(_r3, t);
            null !== _e7 && (n[_o0] = _e7);
          }
        }
        return n;
      })(O(), e);
    }
    function w(e, t) {
      for (var _ref6 of b) {
        var _n1 = _ref6[0];
        void 0 === t[_n1] && e.setData(_n1, "");
      }
      for (var _n10 in t) {
        var _o1 = t[_n10];
        void 0 !== _o1 && e.setData(_n10, _o1);
      }
    }
    function O(t) {
      if (t === void 0) {
        t = require("Lexical").$getEditor();
      }
      var n = require("LexicalExtension").getPeerDependencyFromEditor(
        t,
        A.name,
      );
      return n ? n.output : F;
    }
    var F = {
      "application/x-lexical-editor": [
        function (e, t) {
          return e ? y(require("Lexical").$getEditor(), e) : t();
        },
      ],
      "text/html": [
        function (e, t) {
          return e ? $(require("Lexical").$getEditor(), e) : t();
        },
      ],
      "text/plain": [
        function (e, t) {
          return e ? e.getTextContent() : t();
        },
      ],
    };
    function I(e, t) {
      var _n11 = function n(o) {
        return e[o] ? e[o](t, _n11.bind(null, o - 1)) : null;
      };
      return _n11(e.length - 1);
    }
    var A = _require_Lexical.defineExtension({
      build: function build(e, t, n) {
        return t.$exportMimeType;
      },
      config: _require_Lexical.safeCast({ $exportMimeType: F }),
      mergeConfig: function mergeConfig(e, t) {
        var n = require("Lexical").shallowMergeConfig(e, t);
        if (t.$exportMimeType) {
          var _o10 = babelHelpers["extends"]({}, e.$exportMimeType);
          for (var _ref8 of Object.entries(t.$exportMimeType)) {
            var _e8 = _ref8[0];
            var _n12 = _ref8[1];
            if (_n12) {
              var _t0 = _o10[_e8];
              _o10[_e8] = _t0 ? [].concat(_t0, _n12) : _n12;
            }
          }
          n.$exportMimeType = _o10;
        }
        return n;
      },
      name: "@lexical/clipboard/GetClipboardData",
    });
    ((exports.$exportMimeTypeFromSelection = function (e, t) {
      if (t === void 0) {
        t = require("Lexical").$getSelection();
      }
      return I(O()[e] || [], t);
    }),
      (exports.$generateJSONFromSelectedNodes = E),
      (exports.$generateNodesFromSerializedNodes = M),
      (exports.$getClipboardDataFromSelection = v),
      (exports.$getHtmlContent = $),
      (exports.$getLexicalContent = y),
      (exports.$handlePlainTextDrop = function (e, t) {
        return N(e, t, function (e, t) {
          return T(e, t);
        });
      }),
      (exports.$handleRichTextDrop = function (e, t) {
        return N(e, t, h);
      }),
      (exports.$insertDataTransferForPlainText = T),
      (exports.$insertDataTransferForRichText = h),
      (exports.$insertGeneratedNodes = S),
      (exports.$writeDragSourceToDataTransfer = function (e, t) {
        var n = { editorKey: t.getKey() };
        e.setData(C, JSON.stringify(n));
      }),
      (exports.ClipboardDOMImportExtension = x),
      (exports.ClipboardImportExtension = g),
      (exports.DEFAULT_IMPORT_MIME_TYPE = p),
      (exports.DEFAULT_IMPORT_MIME_TYPE_PRIORITY = a),
      (exports.GetClipboardDataExtension = A),
      (exports.caretFromPoint = i),
      (exports.copyToClipboard = async function (e, t, n) {
        if (null !== R) return !1;
        if (null !== t)
          return new Promise(function (o, r) {
            e.update(function () {
              o(P(e, t, n));
            });
          });
        var i = e.getRootElement(),
          l = e._window || window,
          s = l.document,
          a = require("Lexical").getDOMSelection(l);
        if (null === i || null === a) return !1;
        var c = s.createElement("span");
        ((c.style.position = "fixed"),
          (c.style.top = "-1000px"),
          c.append(s.createTextNode("#")),
          i.append(c));
        var u = new Range();
        return (
          u.setStart(c, 0),
          u.setEnd(c, 1),
          a.removeAllRanges(),
          a.addRange(u),
          new Promise(function (t, i) {
            var a = e.registerCommand(
              require("Lexical").COPY_COMMAND,
              function (r) {
                return (
                  require("LexicalUtils").objectKlassEquals(
                    r,
                    ClipboardEvent,
                  ) &&
                    (a(),
                    null !== R && (l.clearTimeout(R), (R = null)),
                    t(P(e, r, n))),
                  !0
                );
              },
              require("Lexical").COMMAND_PRIORITY_CRITICAL,
            );
            ((R = l.setTimeout(function () {
              (a(), (R = null), t(!1));
            }, 50)),
              s.execCommand("copy"),
              c.remove());
          })
        );
      }),
      (exports.setLexicalClipboardDataTransfer = w));
  },
  null,
);
