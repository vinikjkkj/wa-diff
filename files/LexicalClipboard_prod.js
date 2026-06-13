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
      if ("undefined" !== document.caretPositionFromPoint) {
        var _n2 = document.caretPositionFromPoint(e, t);
        return null === _n2
          ? null
          : { node: _n2.offsetNode, offset: _n2.offset };
      }
      return null;
    }
    function l(e) {
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
    var s = {
      "application/x-lexical-editor": 0,
      "text/html": 10,
      "text/plain": 20,
      "text/uri-list": 30,
    };
    function a(e) {
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
    var c = function c(e, t) {
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
      u = {
        "application/x-lexical-editor": [
          function (e, t, n) {
            try {
              var _n3 = require("Lexical").$getEditor(),
                _r = JSON.parse(e);
              if (
                _r &&
                _r.namespace === _n3._config.namespace &&
                Array.isArray(_r.nodes)
              ) {
                return (D(_n3, M(_r.nodes), t), !0);
              }
            } catch (e) {
              console.error(e);
            }
            return n();
          },
        ],
        "text/html": [
          function (e, n, r) {
            try {
              var _r2 = require("Lexical").$getEditor(),
                _i = new DOMParser().parseFromString(a(e), "text/html");
              return (
                D(
                  _r2,
                  require("LexicalHtml").$generateNodesFromDOM(_r2, _i),
                  n,
                ),
                !0
              );
            } catch (e) {
              return (console.error(e), r());
            }
          },
        ],
        "text/plain": [c],
        "text/uri-list": [c],
      };
    function p(e, t, n, r) {
      if (!e) return !1;
      var _o = function o(i) {
        return !!e[i] && e[i](t, n, _o.bind(null, i - 1), r);
      };
      return _o(e.length - 1);
    }
    function d(e, t, n) {
      var r = t.getData("text/plain");
      for (var _o2 of (function (e) {
        return Object.keys(e.$importMimeType)
          .filter(function (t) {
            return void 0 !== e.$importMimeType[t];
          })
          .sort(function (t, n) {
            var r = e.priority[t],
              o = e.priority[n];
            return void 0 === r && void 0 === o
              ? t < n
                ? -1
                : t > n
                  ? 1
                  : 0
              : void 0 === r
                ? 1
                : void 0 === o
                  ? -1
                  : r - o;
          });
      })(e)) {
        var _i2 = t.getData(_o2);
        if (
          _i2 &&
          ("text/html" !== _o2 || _i2 !== r) &&
          p(e.$importMimeType[_o2], _i2, n, t)
        )
          return !0;
      }
      return !1;
    }
    var f = {
      $importMimeType: u,
      $insertDataTransfer: function $insertDataTransfer(e, t) {
        return d({ $importMimeType: u, priority: s }, e, t);
      },
      priority: s,
    };
    var m = (_require_Lexical = require("Lexical")).defineExtension({
        build: function build(e, t) {
          return {
            $importMimeType: t.$importMimeType,
            $insertDataTransfer: function $insertDataTransfer(e, n) {
              return d(t, e, n);
            },
            priority: t.priority,
          };
        },
        config: _require_Lexical.safeCast({ $importMimeType: u, priority: s }),
        mergeConfig: function mergeConfig(e, t) {
          var n = require("Lexical").shallowMergeConfig(e, t);
          if (t.$importMimeType) {
            var _r3 = babelHelpers["extends"]({}, e.$importMimeType);
            for (var _ref2 of Object.entries(t.$importMimeType)) {
              var _e2 = _ref2[0];
              var _n4 = _ref2[1];
              if (_n4) {
                var _t = _r3[_e2];
                _r3[_e2] = _t ? [].concat(_t, _n4) : _n4;
              }
            }
            n.$importMimeType = _r3;
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
          require("LexicalExtension").configExtension(m, {
            $importMimeType: {
              "text/html": [
                function (e, n, r, i) {
                  var _require_LexicalHtml;
                  var l = new DOMParser().parseFromString(a(e), "text/html"),
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
                  return (D(require("Lexical").$getEditor(), s, n), !0);
                },
              ],
            },
          }),
        ],
        name: "@lexical/clipboard/DOMImport",
      });
    function g(e, n) {
      if (n === void 0) {
        n = require("Lexical").$getSelection();
      }
      return (
        null == n && l(166),
        (require("Lexical").$isRangeSelection(n) && n.isCollapsed()) ||
        0 === n.getNodes().length
          ? ""
          : require("LexicalHtml").$generateHtmlFromNodes(e, n)
      );
    }
    function $(e, t) {
      if (t === void 0) {
        t = require("Lexical").$getSelection();
      }
      return (
        null == t && l(166),
        (require("Lexical").$isRangeSelection(t) && t.isCollapsed()) ||
        0 === t.getNodes().length
          ? null
          : JSON.stringify(S(e, t))
      );
    }
    function y(e, t) {
      var n = e.getData("text/plain") || e.getData("text/uri-list");
      null != n && t.insertRawText(n);
    }
    function T(t, n, r) {
      (function () {
        var t = require("LexicalExtension").$getPeerDependency(m.name);
        return t ? t.output : f;
      })().$insertDataTransfer(t, n);
    }
    var C = "application/x-lexical-drag";
    function h(e, t, n) {
      var r = e.dataTransfer;
      if (null === r) return !1;
      var l = (function (e) {
        var t = e.getData(C);
        if (!t) return null;
        var n;
        try {
          n = JSON.parse(t);
        } catch (e) {
          return null;
        }
        return null !== (r = n) &&
          "object" == typeof r &&
          "editorKey" in r &&
          "string" == typeof r.editorKey
          ? n
          : null;
        var r;
      })(r);
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
        var r = n.getParent();
        return null === r
          ? null
          : require("Lexical").$getChildCaretAtIndex(
              r,
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
            var _o$$getCaretRangeInDi =
                require("Lexical").$getCaretRangeInDirection(
                  require("Lexical").$caretRangeFromSelection(t),
                  "next",
                ),
              n = _o$$getCaretRangeInDi.anchor,
              r = _o$$getCaretRangeInDi.focus;
            return (
              require("Lexical").$comparePointCaretNext(n, e) < 0 &&
              require("Lexical").$comparePointCaretNext(e, r) < 0
            );
          })(s, u)
        )
          return (e.preventDefault(), !0);
        u.removeText();
      }
      if (!a.origin.isAttached()) return (e.preventDefault(), !0);
      if (
        (n(
          r,
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCollapsedCaretRange(a),
          ),
          t,
        ),
        !c)
      ) {
        var _e3 = t.getRootElement(),
          _n5 = _e3 ? _e3.ownerDocument : null,
          _r4 = _n5
            ? (function (e, t) {
                var n = t.querySelectorAll('[data-lexical-editor="true"]');
                for (var _t2 of Array.from(n)) {
                  var _n6 = _t2.__lexicalEditor;
                  if (_n6 && _n6.getKey() === e) return _t2;
                }
                return null;
              })(l.editorKey, _n5)
            : null;
        null !== _r4 &&
          _r4.dispatchEvent(
            new InputEvent("beforeinput", {
              bubbles: !0,
              cancelable: !0,
              inputType: "deleteByDrag",
            }),
          );
      }
      return (e.preventDefault(), !0);
    }
    function D(e, t, n) {
      e.dispatchCommand(
        require("Lexical").SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
        { nodes: t, selection: n },
      ) ||
        (n.insertNodes(t),
        (function (e) {
          if (require("Lexical").$isRangeSelection(e) && e.isCollapsed()) {
            var _t3 = e.anchor;
            var _n7 = null;
            var _r5 = require("Lexical").$caretFromPoint(_t3, "previous");
            if (_r5)
              if (require("Lexical").$isTextPointCaret(_r5)) _n7 = _r5.origin;
              else {
                var _e4 = require("Lexical").$getCaretRange(
                  _r5,
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
                _r6 = _n7.getStyle();
              (e.format === _t5 && e.style === _r6) ||
                ((e.format = _t5), (e.style = _r6), (e.dirty = !0));
            }
          }
        })(n));
    }
    function N(e, t, r, i) {
      if (i === void 0) {
        i = [];
      }
      var s = null === t || r.isSelected(t);
      var a = require("Lexical").$isElementNode(r) && r.excludeFromCopy("html");
      var c = r;
      null !== t &&
        require("Lexical").$isTextNode(c) &&
        (c = require("LexicalSelection").$sliceSelectedTextNodeContent(
          t,
          c,
          "clone",
        ));
      var u = require("Lexical").$isElementNode(c) ? c.getChildren() : [],
        p = (function (e) {
          var t = e.exportJSON(),
            n = e.constructor;
          if (
            (t.type !== n.getType() && l(58, n.name),
            require("Lexical").$isElementNode(e))
          ) {
            var _e5 = t.children;
            Array.isArray(_e5) || l(59, n.name);
          }
          return t;
        })(c);
      require("Lexical").$isTextNode(c) &&
        0 === c.getTextContentSize() &&
        (s = !1);
      for (var _n8 = 0; _n8 < u.length; _n8++) {
        var _i3 = u[_n8],
          _l = N(e, t, _i3, p.children);
        !s &&
          require("Lexical").$isElementNode(r) &&
          _l &&
          r.extractWithChild(_i3, t, "clone") &&
          (s = !0);
      }
      if (s && !a) i.push(p);
      else if (Array.isArray(p.children))
        for (var _e6 = 0; _e6 < p.children.length; _e6++) {
          var _t6 = p.children[_e6];
          i.push(_t6);
        }
      return s;
    }
    function S(e, t) {
      var n = [],
        r = require("Lexical").$getRoot().getChildren();
      for (var _o3 = 0; _o3 < r.length; _o3++) {
        N(e, t, r[_o3], n);
      }
      return { namespace: e._config.namespace, nodes: n };
    }
    function M(e) {
      var t = [];
      for (var _n9 of e) t.push(require("Lexical").$parseSerializedNode(_n9));
      return t;
    }
    var E = null;
    function R(e, t, n) {
      if (void 0 === n) {
        var _t7 = require("Lexical").getDOMSelection(e._window),
          _r7 = require("Lexical").$getSelection();
        if (!_r7 || _r7.isCollapsed()) return !1;
        if (!_t7) return !1;
        var _i4 = _t7.anchorNode,
          _l2 = _t7.focusNode;
        if (
          null !== _i4 &&
          null !== _l2 &&
          !require("Lexical").isSelectionWithinEditor(e, _i4, _l2)
        )
          return !1;
        n = b(_r7);
      }
      t.preventDefault();
      var r = t.clipboardData;
      return null !== r && (O(r, n), !0);
    }
    var P = [
      ["text/html", g],
      ["application/x-lexical-editor", $],
    ];
    function b(e) {
      if (e === void 0) {
        e = require("Lexical").$getSelection();
      }
      return (function (e, t) {
        var n = { "text/plain": "" };
        for (var _ref4 of Object.entries(e)) {
          var _r8 = _ref4[0];
          var _o4 = _ref4[1];
          if (_o4) {
            var _e7 = F(_o4, t);
            null !== _e7 && (n[_r8] = _e7);
          }
        }
        return n;
      })(w(), e);
    }
    function O(e, t) {
      for (var _ref6 of P) {
        var _n0 = _ref6[0];
        void 0 === t[_n0] && e.setData(_n0, "");
      }
      for (var _n1 in t) {
        var _r9 = t[_n1];
        void 0 !== _r9 && e.setData(_n1, _r9);
      }
    }
    function w(t) {
      if (t === void 0) {
        t = require("Lexical").$getEditor();
      }
      var n = require("LexicalExtension").getPeerDependencyFromEditor(
        t,
        I.name,
      );
      return n ? n.output : v;
    }
    var v = {
      "application/x-lexical-editor": [
        function (e, t) {
          return e ? $(require("Lexical").$getEditor(), e) : t();
        },
      ],
      "text/html": [
        function (e, t) {
          return e ? g(require("Lexical").$getEditor(), e) : t();
        },
      ],
      "text/plain": [
        function (e, t) {
          return e ? e.getTextContent() : t();
        },
      ],
    };
    function F(e, t) {
      var _n10 = function n(r) {
        return e[r] ? e[r](t, _n10.bind(null, r - 1)) : null;
      };
      return _n10(e.length - 1);
    }
    var I = _require_Lexical.defineExtension({
      build: function build(e, t, n) {
        return t.$exportMimeType;
      },
      config: _require_Lexical.safeCast({ $exportMimeType: v }),
      mergeConfig: function mergeConfig(e, t) {
        var n = require("Lexical").shallowMergeConfig(e, t);
        if (t.$exportMimeType) {
          var _r0 = babelHelpers["extends"]({}, e.$exportMimeType);
          for (var _ref8 of Object.entries(t.$exportMimeType)) {
            var _e8 = _ref8[0];
            var _n11 = _ref8[1];
            if (_n11) {
              var _t8 = _r0[_e8];
              _r0[_e8] = _t8 ? [].concat(_t8, _n11) : _n11;
            }
          }
          n.$exportMimeType = _r0;
        }
        return n;
      },
      name: "@lexical/clipboard/GetClipboardData",
    });
    ((exports.$exportMimeTypeFromSelection = function (e, t) {
      if (t === void 0) {
        t = require("Lexical").$getSelection();
      }
      return F(w()[e] || [], t);
    }),
      (exports.$generateJSONFromSelectedNodes = S),
      (exports.$generateNodesFromSerializedNodes = M),
      (exports.$getClipboardDataFromSelection = b),
      (exports.$getHtmlContent = g),
      (exports.$getLexicalContent = $),
      (exports.$handlePlainTextDrop = function (e, t) {
        return h(e, t, function (e, t) {
          return y(e, t);
        });
      }),
      (exports.$handleRichTextDrop = function (e, t) {
        return h(e, t, T);
      }),
      (exports.$insertDataTransferForPlainText = y),
      (exports.$insertDataTransferForRichText = T),
      (exports.$insertGeneratedNodes = D),
      (exports.$writeDragSourceToDataTransfer = function (e, t) {
        var n = { editorKey: t.getKey() };
        e.setData(C, JSON.stringify(n));
      }),
      (exports.ClipboardDOMImportExtension = x),
      (exports.ClipboardImportExtension = m),
      (exports.DEFAULT_IMPORT_MIME_TYPE = u),
      (exports.DEFAULT_IMPORT_MIME_TYPE_PRIORITY = s),
      (exports.GetClipboardDataExtension = I),
      (exports.caretFromPoint = i),
      (exports.copyToClipboard = async function (e, t, n) {
        if (null !== E) return !1;
        if (null !== t)
          return new Promise(function (r, o) {
            e.update(function () {
              r(R(e, t, n));
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
              function (o) {
                return (
                  require("LexicalUtils").objectKlassEquals(
                    o,
                    ClipboardEvent,
                  ) &&
                    (a(),
                    null !== E && (l.clearTimeout(E), (E = null)),
                    t(R(e, o, n))),
                  !0
                );
              },
              require("Lexical").COMMAND_PRIORITY_CRITICAL,
            );
            ((E = l.setTimeout(function () {
              (a(), (E = null), t(!1));
            }, 50)),
              s.execCommand("copy"),
              c.remove());
          })
        );
      }),
      (exports.setLexicalClipboardDataTransfer = O));
  },
  null,
);
