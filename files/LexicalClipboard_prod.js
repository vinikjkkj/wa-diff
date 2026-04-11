__d(
  "LexicalClipboard.prod",
  ["Lexical", "LexicalHtml", "LexicalSelection", "LexicalUtils"],
  function $module_LexicalClipboard_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function r(e) {
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
    function i(t, n) {
      if (n === void 0) {
        n = require("Lexical").$getSelection();
      }
      return (
        null == n && r(166),
        (require("Lexical").$isRangeSelection(n) && n.isCollapsed()) ||
        0 === n.getNodes().length
          ? ""
          : require("LexicalHtml").$generateHtmlFromNodes(t, n)
      );
    }
    function s(e, t) {
      if (t === void 0) {
        t = require("Lexical").$getSelection();
      }
      return (
        null == t && r(166),
        (require("Lexical").$isRangeSelection(t) && t.isCollapsed()) ||
        0 === t.getNodes().length
          ? null
          : JSON.stringify(c(e, t))
      );
    }
    function l(e, t, n) {
      e.dispatchCommand(
        require("Lexical").SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
        { nodes: t, selection: n },
      ) ||
        (n.insertNodes(t),
        (function (e) {
          if (require("Lexical").$isRangeSelection(e) && e.isCollapsed()) {
            var _t = e.anchor;
            var _n = null;
            var _r = require("Lexical").$caretFromPoint(_t, "previous");
            if (_r)
              if (require("Lexical").$isTextPointCaret(_r)) _n = _r.origin;
              else {
                var _e2 = require("Lexical").$getCaretRange(
                  _r,
                  require("Lexical")
                    .$getChildCaret(require("Lexical").$getRoot(), "next")
                    .getFlipped(),
                );
                for (var _t2 of _e2) {
                  if (require("Lexical").$isTextNode(_t2.origin)) {
                    _n = _t2.origin;
                    break;
                  }
                  if (
                    require("Lexical").$isElementNode(_t2.origin) &&
                    !_t2.origin.isInline()
                  )
                    break;
                }
              }
            if (_n && require("Lexical").$isTextNode(_n)) {
              var _t3 = _n.getFormat(),
                _o = _n.getStyle();
              (e.format === _t3 && e.style === _o) ||
                ((e.format = _t3), (e.style = _o), (e.dirty = !0));
            }
          }
        })(n));
    }
    function a(e, n, i, s) {
      if (s === void 0) {
        s = [];
      }
      var l = null === n || i.isSelected(n);
      var c = require("Lexical").$isElementNode(i) && i.excludeFromCopy("html");
      var d = i;
      null !== n &&
        require("Lexical").$isTextNode(d) &&
        (d = require("LexicalSelection").$sliceSelectedTextNodeContent(
          n,
          d,
          "clone",
        ));
      var u = require("Lexical").$isElementNode(d) ? d.getChildren() : [],
        f = (function (e) {
          var t = e.exportJSON(),
            n = e.constructor;
          if (
            (t.type !== n.getType() && r(58, n.name),
            require("Lexical").$isElementNode(e))
          ) {
            var _e3 = t.children;
            Array.isArray(_e3) || r(59, n.name);
          }
          return t;
        })(d);
      require("Lexical").$isTextNode(d) &&
        0 === d.getTextContentSize() &&
        (l = !1);
      for (var _t4 = 0; _t4 < u.length; _t4++) {
        var _r2 = u[_t4],
          _s = a(e, n, _r2, f.children);
        !l &&
          require("Lexical").$isElementNode(i) &&
          _s &&
          i.extractWithChild(_r2, n, "clone") &&
          (l = !0);
      }
      if (l && !c) s.push(f);
      else if (Array.isArray(f.children))
        for (var _e4 = 0; _e4 < f.children.length; _e4++) {
          var _t5 = f.children[_e4];
          s.push(_t5);
        }
      return l;
    }
    function c(e, t) {
      var n = [],
        r = require("Lexical").$getRoot().getChildren();
      for (var _o2 = 0; _o2 < r.length; _o2++) {
        a(e, t, r[_o2], n);
      }
      return { namespace: e._config.namespace, nodes: n };
    }
    function d(e) {
      var n = [];
      for (var _r3 = 0; _r3 < e.length; _r3++) {
        var _i = e[_r3],
          _s2 = require("Lexical").$parseSerializedNode(_i);
        (require("Lexical").$isTextNode(_s2) &&
          require("LexicalSelection").$addNodeStyle(_s2),
          n.push(_s2));
      }
      return n;
    }
    var u = null;
    function f(e, t, n) {
      if (void 0 === n) {
        var _t6 = require("Lexical").getDOMSelection(e._window),
          _r4 = require("Lexical").$getSelection();
        if (!_r4 || _r4.isCollapsed()) return !1;
        if (!_t6) return !1;
        var _i2 = _t6.anchorNode,
          _s3 = _t6.focusNode;
        if (
          null !== _i2 &&
          null !== _s3 &&
          !require("Lexical").isSelectionWithinEditor(e, _i2, _s3)
        )
          return !1;
        n = g(_r4);
      }
      t.preventDefault();
      var r = t.clipboardData;
      return null !== r && (x(r, n), !0);
    }
    var p = [
      ["text/html", i],
      ["application/x-lexical-editor", s],
    ];
    function g(e) {
      if (e === void 0) {
        e = require("Lexical").$getSelection();
      }
      var t = { "text/plain": e ? e.getTextContent() : "" };
      if (e) {
        var _n2 = require("Lexical").$getEditor();
        for (var _ref2 of p) {
          var _o3 = _ref2[0];
          var _r5 = _ref2[1];
          {
            var _i3 = _r5(_n2, e);
            null !== _i3 && (t[_o3] = _i3);
          }
        }
      }
      return t;
    }
    function x(e, t) {
      for (var _ref4 of p) {
        var _n3 = _ref4[0];
        void 0 === t[_n3] && e.setData(_n3, "");
      }
      for (var _n4 in t) {
        var _o4 = t[_n4];
        void 0 !== _o4 && e.setData(_n4, _o4);
      }
    }
    ((exports.$generateJSONFromSelectedNodes = c),
      (exports.$generateNodesFromSerializedNodes = d),
      (exports.$getClipboardDataFromSelection = g),
      (exports.$getHtmlContent = i),
      (exports.$getLexicalContent = s),
      (exports.$insertDataTransferForPlainText = function (e, t) {
        var n = e.getData("text/plain") || e.getData("text/uri-list");
        null != n && t.insertRawText(n);
      }),
      (exports.$insertDataTransferForRichText = function (t, n, r) {
        var i = t.getData("application/x-lexical-editor");
        if (i)
          try {
            var _e5 = JSON.parse(i);
            if (
              _e5.namespace === r._config.namespace &&
              Array.isArray(_e5.nodes)
            ) {
              return l(r, d(_e5.nodes), n);
            }
          } catch (e) {
            console.error(e);
          }
        var s = t.getData("text/html"),
          a = t.getData("text/plain");
        if (s && a !== s)
          try {
            var _t7 = new DOMParser().parseFromString(
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
              })(s),
              "text/html",
            );
            return l(
              r,
              require("LexicalHtml").$generateNodesFromDOM(r, _t7),
              n,
            );
          } catch (e) {
            console.error(e);
          }
        var c = a || t.getData("text/uri-list");
        if (null != c)
          if (require("Lexical").$isRangeSelection(n)) {
            var _e6 = c.split(/(\r?\n|\t)/);
            "" === _e6[_e6.length - 1] && _e6.pop();
            for (var _t8 = 0; _t8 < _e6.length; _t8++) {
              var _n5 = require("Lexical").$getSelection();
              if (require("Lexical").$isRangeSelection(_n5)) {
                var _r6 = _e6[_t8];
                "\n" === _r6 || "\r\n" === _r6
                  ? _n5.insertParagraph()
                  : "\t" === _r6
                    ? _n5.insertNodes([require("Lexical").$createTabNode()])
                    : _n5.insertText(_r6);
              }
            }
          } else n.insertRawText(c);
      }),
      (exports.$insertGeneratedNodes = l),
      (exports.copyToClipboard = async function (e, t, r) {
        if (null !== u) return !1;
        if (null !== t)
          return new Promise(function (n, o) {
            e.update(function () {
              n(f(e, t, r));
            });
          });
        var i = e.getRootElement(),
          s = e._window || window,
          l = s.document,
          a = require("Lexical").getDOMSelection(s);
        if (null === i || null === a) return !1;
        var c = l.createElement("span");
        ((c.style.cssText = "position: fixed; top: -1000px;"),
          c.append(l.createTextNode("#")),
          i.append(c));
        var d = new Range();
        return (
          d.setStart(c, 0),
          d.setEnd(c, 1),
          a.removeAllRanges(),
          a.addRange(d),
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
                    null !== u && (s.clearTimeout(u), (u = null)),
                    t(f(e, o, r))),
                  !0
                );
              },
              require("Lexical").COMMAND_PRIORITY_CRITICAL,
            );
            ((u = s.setTimeout(function () {
              (a(), (u = null), t(!1));
            }, 50)),
              l.execCommand("copy"),
              c.remove());
          })
        );
      }),
      (exports.setLexicalClipboardDataTransfer = x));
  },
  null,
);
