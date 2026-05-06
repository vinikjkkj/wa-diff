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
    function i(e) {
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
    function l(e, n) {
      if (n === void 0) {
        n = require("Lexical").$getSelection();
      }
      return (
        null == n && i(166),
        (require("Lexical").$isRangeSelection(n) && n.isCollapsed()) ||
        0 === n.getNodes().length
          ? ""
          : require("LexicalHtml").$generateHtmlFromNodes(e, n)
      );
    }
    function s(e, t) {
      if (t === void 0) {
        t = require("Lexical").$getSelection();
      }
      return (
        null == t && i(166),
        (require("Lexical").$isRangeSelection(t) && t.isCollapsed()) ||
        0 === t.getNodes().length
          ? null
          : JSON.stringify(x(e, t))
      );
    }
    function a(e, t) {
      var n = e.getData("text/plain") || e.getData("text/uri-list");
      null != n && t.insertRawText(n);
    }
    function c(e, n, o) {
      var i = e.getData("application/x-lexical-editor");
      if (i)
        try {
          var _e2 = JSON.parse(i);
          if (
            _e2.namespace === o._config.namespace &&
            Array.isArray(_e2.nodes)
          ) {
            return p(o, m(_e2.nodes), n);
          }
        } catch (e) {
          console.error(e);
        }
      var l = e.getData("text/html"),
        s = e.getData("text/plain");
      if (l && s !== l)
        try {
          var _e3 = new DOMParser().parseFromString(
            (function (e) {
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
            })(l),
            "text/html",
          );
          return p(o, require("LexicalHtml").$generateNodesFromDOM(o, _e3), n);
        } catch (e) {
          console.error(e);
        }
      var a = s || e.getData("text/uri-list");
      if (null != a)
        if (require("Lexical").$isRangeSelection(n)) {
          var _e4 = a.split(/(\r?\n|\t)/);
          "" === _e4[_e4.length - 1] && _e4.pop();
          for (var _t = 0; _t < _e4.length; _t++) {
            var _n = require("Lexical").$getSelection();
            if (require("Lexical").$isRangeSelection(_n)) {
              var _o = _e4[_t];
              "\n" === _o || "\r\n" === _o
                ? _n.insertParagraph()
                : "\t" === _o
                  ? _n.insertNodes([require("Lexical").$createTabNode()])
                  : _n.insertText(_o);
            }
          }
        } else n.insertRawText(a);
    }
    var u = "application/x-lexical-drag";
    function d(e) {
      var t = (function (e, t) {
        if (void 0 !== document.caretRangeFromPoint) {
          var _n2 = document.caretRangeFromPoint(e, t);
          return null === _n2
            ? null
            : { node: _n2.startContainer, offset: _n2.startOffset };
        }
        if ("undefined" !== document.caretPositionFromPoint) {
          var _n3 = document.caretPositionFromPoint(e, t);
          return null === _n3
            ? null
            : { node: _n3.offsetNode, offset: _n3.offset };
        }
        return null;
      })(e.clientX, e.clientY);
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
    }
    function f(e, t, n) {
      var o = e.dataTransfer;
      if (null === o) return !1;
      var i = (function (e) {
        var t = e.getData(u);
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
      if (null === i) return !1;
      var l = d(e);
      if (null === l) return !1;
      var s = require("Lexical").$splitAtPointCaretNext(l);
      if (null === s) return !1;
      var a = i.editorKey === t.getKey(),
        c = require("Lexical").$getSelection();
      if (a) {
        if (!require("Lexical").$isRangeSelection(c) || c.isCollapsed())
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
          })(l, c)
        )
          return (e.preventDefault(), !0);
        c.removeText();
      }
      if (!s.origin.isAttached()) return (e.preventDefault(), !0);
      if (
        (n(
          o,
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCollapsedCaretRange(s),
          ),
          t,
        ),
        !a)
      ) {
        var _e5 = t.getRootElement(),
          _n4 = _e5 ? _e5.ownerDocument : null,
          _o2 = _n4
            ? (function (e, t) {
                var n = t.querySelectorAll('[data-lexical-editor="true"]');
                for (var _t2 of Array.from(n)) {
                  var _n5 = _t2.__lexicalEditor;
                  if (_n5 && _n5.getKey() === e) return _t2;
                }
                return null;
              })(i.editorKey, _n4)
            : null;
        null !== _o2 &&
          _o2.dispatchEvent(
            new InputEvent("beforeinput", {
              bubbles: !0,
              cancelable: !0,
              inputType: "deleteByDrag",
            }),
          );
      }
      return (e.preventDefault(), !0);
    }
    function p(e, t, n) {
      e.dispatchCommand(
        require("Lexical").SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
        { nodes: t, selection: n },
      ) ||
        (n.insertNodes(t),
        (function (e) {
          if (require("Lexical").$isRangeSelection(e) && e.isCollapsed()) {
            var _t3 = e.anchor;
            var _n6 = null;
            var _o3 = require("Lexical").$caretFromPoint(_t3, "previous");
            if (_o3)
              if (require("Lexical").$isTextPointCaret(_o3)) _n6 = _o3.origin;
              else {
                var _e6 = require("Lexical").$getCaretRange(
                  _o3,
                  require("Lexical")
                    .$getChildCaret(require("Lexical").$getRoot(), "next")
                    .getFlipped(),
                );
                for (var _t4 of _e6) {
                  if (require("Lexical").$isTextNode(_t4.origin)) {
                    _n6 = _t4.origin;
                    break;
                  }
                  if (
                    require("Lexical").$isElementNode(_t4.origin) &&
                    !_t4.origin.isInline()
                  )
                    break;
                }
              }
            if (_n6 && require("Lexical").$isTextNode(_n6)) {
              var _t5 = _n6.getFormat(),
                _o4 = _n6.getStyle();
              (e.format === _t5 && e.style === _o4) ||
                ((e.format = _t5), (e.style = _o4), (e.dirty = !0));
            }
          }
        })(n));
    }
    function g(e, t, o, l) {
      if (l === void 0) {
        l = [];
      }
      var s = null === t || o.isSelected(t);
      var a = require("Lexical").$isElementNode(o) && o.excludeFromCopy("html");
      var c = o;
      null !== t &&
        require("Lexical").$isTextNode(c) &&
        (c = require("LexicalSelection").$sliceSelectedTextNodeContent(
          t,
          c,
          "clone",
        ));
      var u = require("Lexical").$isElementNode(c) ? c.getChildren() : [],
        d = (function (e) {
          var t = e.exportJSON(),
            n = e.constructor;
          if (
            (t.type !== n.getType() && i(58, n.name),
            require("Lexical").$isElementNode(e))
          ) {
            var _e7 = t.children;
            Array.isArray(_e7) || i(59, n.name);
          }
          return t;
        })(c);
      require("Lexical").$isTextNode(c) &&
        0 === c.getTextContentSize() &&
        (s = !1);
      for (var _n7 = 0; _n7 < u.length; _n7++) {
        var _i = u[_n7],
          _l = g(e, t, _i, d.children);
        !s &&
          require("Lexical").$isElementNode(o) &&
          _l &&
          o.extractWithChild(_i, t, "clone") &&
          (s = !0);
      }
      if (s && !a) l.push(d);
      else if (Array.isArray(d.children))
        for (var _e8 = 0; _e8 < d.children.length; _e8++) {
          var _t6 = d.children[_e8];
          l.push(_t6);
        }
      return s;
    }
    function x(e, t) {
      var n = [],
        o = require("Lexical").$getRoot().getChildren();
      for (var _r = 0; _r < o.length; _r++) {
        g(e, t, o[_r], n);
      }
      return { namespace: e._config.namespace, nodes: n };
    }
    function m(e) {
      var t = [];
      for (var _n8 of e) t.push(require("Lexical").$parseSerializedNode(_n8));
      return t;
    }
    var $ = null;
    function h(e, t, n) {
      if (void 0 === n) {
        var _t7 = require("Lexical").getDOMSelection(e._window),
          _o5 = require("Lexical").$getSelection();
        if (!_o5 || _o5.isCollapsed()) return !1;
        if (!_t7) return !1;
        var _i2 = _t7.anchorNode,
          _l2 = _t7.focusNode;
        if (
          null !== _i2 &&
          null !== _l2 &&
          !require("Lexical").isSelectionWithinEditor(e, _i2, _l2)
        )
          return !1;
        n = y(_o5);
      }
      t.preventDefault();
      var o = t.clipboardData;
      return null !== o && (T(o, n), !0);
    }
    var C = [
      ["text/html", l],
      ["application/x-lexical-editor", s],
    ];
    function y(e) {
      if (e === void 0) {
        e = require("Lexical").$getSelection();
      }
      return (function (e, t) {
        var n = { "text/plain": "" };
        for (var _ref2 of Object.entries(e)) {
          var _o6 = _ref2[0];
          var _r2 = _ref2[1];
          if (_r2) {
            var _e9 = D(_r2, t);
            null !== _e9 && (n[_o6] = _e9);
          }
        }
        return n;
      })(N(), e);
    }
    function T(e, t) {
      for (var _ref4 of C) {
        var _n9 = _ref4[0];
        void 0 === t[_n9] && e.setData(_n9, "");
      }
      for (var _n0 in t) {
        var _o7 = t[_n0];
        void 0 !== _o7 && e.setData(_n0, _o7);
      }
    }
    function N(t) {
      if (t === void 0) {
        t = require("Lexical").$getEditor();
      }
      var n = require("LexicalExtension").getPeerDependencyFromEditor(
        t,
        R.name,
      );
      return n ? n.output : S;
    }
    var S = {
      "application/x-lexical-editor": [
        function (e, t) {
          return e ? s(require("Lexical").$getEditor(), e) : t();
        },
      ],
      "text/html": [
        function (e, t) {
          return e ? l(require("Lexical").$getEditor(), e) : t();
        },
      ],
      "text/plain": [
        function (e, t) {
          return e ? e.getTextContent() : t();
        },
      ],
    };
    function D(e, t) {
      var _n1 = function n(o) {
        return e[o] ? e[o](t, _n1.bind(null, o - 1)) : null;
      };
      return _n1(e.length - 1);
    }
    var R = require("Lexical").defineExtension({
      build: function build(e, t, n) {
        return t.$exportMimeType;
      },
      config: require("Lexical").safeCast({ $exportMimeType: S }),
      mergeConfig: function mergeConfig(e, t) {
        var n = require("Lexical").shallowMergeConfig(e, t);
        if (t.$exportMimeType) {
          var _o8 = babelHelpers["extends"]({}, e.$exportMimeType);
          for (var _ref6 of Object.entries(t.$exportMimeType)) {
            var _e0 = _ref6[0];
            var _n10 = _ref6[1];
            if (_n10) {
              var _t8 = _o8[_e0];
              _o8[_e0] = _t8 ? [].concat(_t8, _n10) : _n10;
            }
          }
          n.$exportMimeType = _o8;
        }
        return n;
      },
      name: "@lexical/clipboard/GetClipboardData",
    });
    ((exports.$exportMimeTypeFromSelection = function (e, t) {
      if (t === void 0) {
        t = require("Lexical").$getSelection();
      }
      return D(N()[e] || [], t);
    }),
      (exports.$generateJSONFromSelectedNodes = x),
      (exports.$generateNodesFromSerializedNodes = m),
      (exports.$getClipboardDataFromSelection = y),
      (exports.$getHtmlContent = l),
      (exports.$getLexicalContent = s),
      (exports.$handlePlainTextDrop = function (e, t) {
        return f(e, t, function (e, t) {
          return a(e, t);
        });
      }),
      (exports.$handleRichTextDrop = function (e, t) {
        return f(e, t, c);
      }),
      (exports.$insertDataTransferForPlainText = a),
      (exports.$insertDataTransferForRichText = c),
      (exports.$insertGeneratedNodes = p),
      (exports.$writeDragSourceToDataTransfer = function (e, t) {
        var n = { editorKey: t.getKey() };
        e.setData(u, JSON.stringify(n));
      }),
      (exports.GetClipboardDataExtension = R),
      (exports.copyToClipboard = async function (e, t, n) {
        if (null !== $) return !1;
        if (null !== t)
          return new Promise(function (o, r) {
            e.update(function () {
              o(h(e, t, n));
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
                    null !== $ && (l.clearTimeout($), ($ = null)),
                    t(h(e, r, n))),
                  !0
                );
              },
              require("Lexical").COMMAND_PRIORITY_CRITICAL,
            );
            (($ = l.setTimeout(function () {
              (a(), ($ = null), t(!1));
            }, 50)),
              s.execCommand("copy"),
              c.remove());
          })
        );
      }),
      (exports.setLexicalClipboardDataTransfer = T));
  },
  null,
);
