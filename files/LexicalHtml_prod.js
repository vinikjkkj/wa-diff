__d(
  "LexicalHtml.prod",
  [
    "Lexical",
    "LexicalExtensionConfig",
    "LexicalExtensionGetExtensionDependency",
    "LexicalExtensionGetPeerDependencyFromEditor",
    "LexicalExtensionHorizontalRuleExtension",
    "LexicalSelection",
    "LexicalUtils",
  ],
  function $module_LexicalHtml_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_Lexical;
    function c(e) {
      for (
        var _len = arguments.length,
          t = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        t[_key - 1] = arguments[_key];
      }
      throw function (e) {
        var n = new URL("https://lexical.dev/docs/error"),
          o = new URLSearchParams();
        o.append("code", e);
        for (
          var _len2 = arguments.length,
            t = new Array(_len2 > 1 ? _len2 - 1 : 0),
            _key2 = 1;
          _key2 < _len2;
          _key2++
        ) {
          t[_key2 - 1] = arguments[_key2];
        }
        for (var _e2 of t) o.append("v", _e2);
        return (
          (n.search = o.toString()),
          new Error(
            "Minified Lexical error #" +
              e +
              "; visit " +
              n.toString() +
              " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
          )
        );
      }.apply(void 0, [e].concat(Array.from(t)));
    }
    var l = function l(e, t, n) {
      (u(e), n());
    };
    function u(e) {
      if (!require("Lexical").isDOMDocumentNode(e)) return;
      var o = e;
      if (null === o.querySelector("style")) return;
      var r = new Map();
      function s(e) {
        var t = r.get(e);
        if (void 0 === t) {
          t = new Set();
          for (var _n = 0; _n < e.style.length; _n++) t.add(e.style[_n]);
          r.set(e, t);
        }
        return t;
      }
      try {
        for (var _e3 of Array.from(o.styleSheets)) {
          var _r = void 0;
          try {
            _r = _e3.cssRules;
          } catch (_unused) {
            continue;
          }
          for (var _e4 of Array.from(_r)) {
            if (!require("LexicalUtils").objectKlassEquals(_e4, CSSStyleRule))
              continue;
            var _r2 = void 0;
            try {
              _r2 = o.querySelectorAll(_e4.selectorText);
            } catch (_unused2) {
              continue;
            }
            for (var _n2 of Array.from(_r2)) {
              if (!require("Lexical").isHTMLElement(_n2)) continue;
              var _o = s(_n2);
              for (var _t = 0; _t < _e4.style.length; _t++) {
                var _r3 = _e4.style[_t];
                _o.has(_r3) ||
                  _n2.style.setProperty(
                    _r3,
                    _e4.style.getPropertyValue(_r3),
                    _e4.style.getPropertyPriority(_r3),
                  );
              }
            }
          }
        }
      } catch (_unused3) {}
    }
    var a;
    function f(e, t) {
      var n = t.key;
      return e && n in e ? e[n] : t.defaultValue;
    }
    function d(e) {
      return a && a.editor === e ? a : void 0;
    }
    function p(e, t) {
      var n = d(t);
      return n && n[e];
    }
    function h(e, t) {
      if ("cfg" in t) {
        var _n3 = t.cfg,
          _o2 = t.updater;
        return [_n3, _o2(f(e, _n3))];
      }
      return t;
    }
    function m(e, t) {
      var n = t;
      for (var _o3 of e) {
        var _h = h(n, _o3),
          _e5 = _h[0],
          _r4 = _h[1],
          _s = _e5.key;
        if (n === t && f(n, _e5) === _r4) continue;
        var _i = n === t || void 0 === n ? g(t) : n;
        ((_i[_s] = _r4), (n = _i));
      }
      return n;
    }
    function g(e) {
      return Object.create(e || null);
    }
    function x(e, t) {
      return [e, t];
    }
    function $(e, n, o, r) {
      if (r === void 0) {
        r = require("Lexical").$getEditor();
      }
      var s = a,
        i = d(r);
      try {
        var _babelHelpers$extends;
        return (
          (a = babelHelpers["extends"](
            {},
            i,
            ((_babelHelpers$extends = { editor: r }),
            (_babelHelpers$extends[e] = n),
            _babelHelpers$extends),
          )),
          o()
        );
      } finally {
        a = s;
      }
    }
    function y(e, n) {
      if (n === void 0) {
        n = function n() {};
      }
      return function (o, r) {
        if (r === void 0) {
          r = require("Lexical").$getEditor();
        }
        return function (t) {
          var s = d(r),
            i = s && s[e],
            c = m(o, i || n(r));
          return c && c !== i ? $(e, c, t, r) : t();
        };
      };
    }
    function T(e, n, o, r) {
      var _Object$assign;
      return Object.assign(
        require("Lexical").createState(Symbol(n), { isEqual: r, parse: o }),
        ((_Object$assign = {}), (_Object$assign[e] = !0), _Object$assign),
      );
    }
    var S = "@lexical/html/DOM",
      E = Symbol["for"]("@lexical/html/DOMExportContext"),
      O = "@lexical/html/DOMImport",
      D = Symbol["for"]("@lexical/html/DOMImportContext"),
      C = function C() {
        return !0;
      };
    function N(e, t, n) {
      return T(E, e, t, n);
    }
    var M = N("root", Boolean),
      I = N("isExport", Boolean);
    function R(e) {
      var t =
        require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(
          e,
          S,
        );
      return t ? t.output.defaults : void 0;
    }
    function _(e) {
      var t =
        require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(
          e,
          S,
        );
      return t ? t.output.runtime : void 0;
    }
    function v(e) {
      if (e === void 0) {
        e = require("Lexical").$getEditor();
      }
      var n = _(e);
      return n
        ? n.getSessionConfig()
        : require("Lexical").$getEditorDOMRenderConfig(e);
    }
    var k = y(E, R),
      b = Symbol["for"]("@lexical/html/SelectorImpl");
    function w(e, n) {
      var _ref;
      var o = {
        kind: "element",
        predicate:
          ((r = n),
          0 === r.length
            ? require("Lexical").isHTMLElement
            : 1 === r.length
              ? r[0]
              : function (e, t) {
                  for (var _n4 of r) if (!_n4(e, t)) return !1;
                  return !0;
                }),
        tags: e,
      };
      var r;
      var s = function s(t) {
        return w(e, [].concat(Array.from(n), [t]));
      };
      return (
        (_ref = {}),
        (_ref[b] = o),
        (_ref.attr = function attr(e, t, n) {
          return s(L(e, t, n));
        }),
        (_ref.classAll = function classAll() {
          for (
            var _len3 = arguments.length, e = new Array(_len3), _key3 = 0;
            _key3 < _len3;
            _key3++
          ) {
            e[_key3] = arguments[_key3];
          }
          return s(F(e));
        }),
        (_ref.classAny = function classAny() {
          for (
            var _len4 = arguments.length, e = new Array(_len4), _key4 = 0;
            _key4 < _len4;
            _key4++
          ) {
            e[_key4] = arguments[_key4];
          }
          return s(
            (function (e) {
              var n = A(e);
              return 0 === n.length
                ? function () {
                    return !1;
                  }
                : function (e) {
                    if (!require("Lexical").isHTMLElement(e)) return !1;
                    var o = e.classList;
                    for (var _e6 of n) if (o.contains(_e6)) return !0;
                    return !1;
                  };
            })(e),
          );
        }),
        (_ref.styleAny = function styleAny(e, n, o) {
          return s(
            (function (e, n, o) {
              if ("string" == typeof n)
                return function (o) {
                  return (
                    require("Lexical").isHTMLElement(o) &&
                    o.style.getPropertyValue(e) === n
                  );
                };
              if (n instanceof RegExp) {
                var _r5 = o && o.capture,
                  _s2 = n;
                return function (n, o) {
                  if (!require("Lexical").isHTMLElement(n)) return !1;
                  var i = n.style.getPropertyValue(e);
                  if (!i) return !1;
                  var c = i.match(_s2);
                  return null !== c && (void 0 !== _r5 && (o[_r5] = c), !0);
                };
              }
              c(362, JSON.stringify(e));
            })(e, n, o),
          );
        }),
        _ref
      );
    }
    function A(e) {
      var t = [];
      for (var _n5 of e) _n5 && t.push(_n5);
      return t;
    }
    function F(e) {
      var n = A(e);
      return 0 === n.length
        ? function () {
            return !0;
          }
        : function (e) {
            if (!require("Lexical").isHTMLElement(e)) return !1;
            var o = e.classList;
            for (var _e7 of n) if (!o.contains(_e7)) return !1;
            return !0;
          };
    }
    function L(e, n, o) {
      if (!0 === n)
        return function (n) {
          return require("Lexical").isHTMLElement(n) && n.hasAttribute(e);
        };
      if ("string" == typeof n)
        return function (o) {
          return require("Lexical").isHTMLElement(o) && o.getAttribute(e) === n;
        };
      if (n instanceof RegExp) {
        var _r6 = o && o.capture,
          _s3 = n;
        return function (n, o) {
          if (!require("Lexical").isHTMLElement(n)) return !1;
          var i = n.getAttribute(e);
          if (null == i) return !1;
          var c = i.match(_s3);
          return null !== c && (void 0 !== _r6 && (o[_r6] = c), !0);
        };
      }
      c(361, JSON.stringify(e));
    }
    function P(e) {
      var _ref2;
      return ((_ref2 = {}), (_ref2[b] = e), _ref2);
    }
    var B = P({
        kind: "text",
        predicate: (_require_Lexical = require("Lexical")).isDOMTextNode,
        tags: new Set(),
      }),
      H = P({
        kind: "comment",
        predicate: function predicate(e) {
          return 8 === e.nodeType;
        },
        tags: new Set(),
      });
    function W() {
      return w(new Set(), []);
    }
    function U() {
      return H;
    }
    function z() {
      for (
        var _len5 = arguments.length, e = new Array(_len5), _key5 = 0;
        _key5 < _len5;
        _key5++
      ) {
        e[_key5] = arguments[_key5];
      }
      e.length > 0 || c(363);
      var t = new Set();
      for (var _n6 of e) t.add(_n6.toUpperCase());
      return w(t, []);
    }
    function j() {
      return B;
    }
    var V = { any: W, comment: U, tag: z, text: j },
      Y = /[A-Za-z0-9_-]/;
    var _q = (function () {
      function q(e, t) {
        ((this.source = e), (this.pos = t));
      }
      var _proto = q.prototype;
      _proto.peek = function peek(e) {
        if (e === void 0) {
          e = 0;
        }
        return this.source[this.pos + e] || "";
      };
      _proto.consume = function consume() {
        return this.source[this.pos++] || "";
      };
      _proto.eof = function eof() {
        return this.pos >= this.source.length;
      };
      _proto.skipWhitespace = function skipWhitespace() {
        for (; !this.eof() && /\s/.test(this.peek()); ) this.pos++;
      };
      _proto.readIdent = function readIdent() {
        var e = this.pos;
        for (; !this.eof() && Y.test(this.peek()); ) this.pos++;
        return this.source.slice(e, this.pos);
      };
      _proto.readQuoted = function readQuoted() {
        var e = this.consume();
        this.assert('"' === e || "'" === e, "expected quote");
        var t = this.pos;
        for (; !this.eof() && this.peek() !== e; )
          "\\" === this.peek() ? (this.pos += 2) : this.pos++;
        this.assert(!this.eof(), "unterminated string");
        var n = this.source.slice(t, this.pos);
        return (this.pos++, n.replace(/\\(.)/g, "$1"));
      };
      _proto.assert = function assert(e, t) {
        e || c(364, String(this.pos + 1), t, this.source);
      };
      return q;
    })();
    function G(e) {
      var t = new Set(),
        n = [],
        o = [];
      var r = !1;
      if ((e.skipWhitespace(), "*" === e.peek())) (e.consume(), (r = !0));
      else if (Y.test(e.peek())) {
        var _n7 = e.readIdent();
        _n7 && t.add(_n7.toUpperCase());
      }
      for (; !e.eof(); ) {
        var _t2 = e.peek();
        if ("." === _t2) {
          e.consume();
          var _t3 = e.readIdent();
          (e.assert("" !== _t3, 'expected class name after "."'), o.push(_t3));
        } else if ("#" === _t2) {
          e.consume();
          var _t4 = e.readIdent();
          (e.assert("" !== _t4, 'expected id after "#"'), n.push(L("id", _t4)));
        } else {
          if ("[" !== _t2) break;
          {
            (e.consume(), e.skipWhitespace());
            var _t5 = e.readIdent();
            (e.assert("" !== _t5, 'expected attribute name after "["'),
              e.skipWhitespace());
            var _o4 = !0;
            if ("=" === e.peek()) {
              (e.consume(), e.skipWhitespace());
              var _t6 = e.peek();
              ('"' === _t6 || "'" === _t6
                ? (_o4 = e.readQuoted())
                : ((_o4 = e.readIdent()),
                  e.assert("" !== _o4, "expected attribute value")),
                e.skipWhitespace());
            }
            (e.assert("]" === e.peek(), 'expected "]"'),
              e.consume(),
              n.push(L(_t5, _o4)));
          }
        }
      }
      return (
        o.length > 0 && n.push(F(o)),
        e.assert(r || t.size > 0 || n.length > 0, "expected a selector"),
        { predicates: n, tags: t }
      );
    }
    function X(e) {
      var t = new _q(e, 0),
        n = [];
      for (; n.push(G(t)), t.skipWhitespace(), !t.eof(); )
        (t.assert(
          "," === t.peek(),
          'expected "," (selector lists are the only supported combinator)',
        ),
          t.consume(),
          t.skipWhitespace());
      if (1 === n.length) return w(n[0].tags, n[0].predicates);
      var o = new Set();
      if (
        n.every(function (e) {
          return e.tags.size > 0;
        })
      )
        for (var _e8 of n) for (var _t7 of _e8.tags) o.add(_t7);
      return w(o, [
        function (e, t) {
          for (var _o5 of n) {
            var _n8 = e.nodeName;
            if (_o5.tags.size > 0 && !_o5.tags.has(_n8)) continue;
            var _r7 = !0;
            for (var _n9 of _o5.predicates)
              if (!_n9(e, t)) {
                _r7 = !1;
                break;
              }
            if (_r7) return !0;
          }
          return !1;
        },
      ]);
    }
    function K(e, t, n) {
      return T(D, e, t, n);
    }
    var J = K("importSource", function () {
        return "unknown";
      }),
      Q = K("importSourceDataTransfer", function () {
        return null;
      }),
      Z = K("textFormat", function () {
        return 0;
      }),
      ee = K("textStyle", function () {
        return {};
      });
    function te(e) {
      if (!require("Lexical").isHTMLElement(e)) return !1;
      if ("PRE" === e.nodeName) return !0;
      var n = e.style.whiteSpace;
      return "string" == typeof n && n.startsWith("pre");
    }
    function ne(e) {
      if (require("Lexical").isDOMTextNode(e)) return !0;
      if (!require("Lexical").isHTMLElement(e)) return !1;
      var n = e.style.display;
      return n
        ? n.startsWith("inline")
        : !require("Lexical").isBlockDomNode(e) &&
            require("Lexical").isInlineDomNode(e);
    }
    var oe = K("whitespaceConfig", function () {
        return { isInline: ne, preservesWhitespace: te };
      }),
      re = K("importOverlays", function () {
        return [];
      });
    var _se = (function () {
      function se(e) {
        this.record = e;
      }
      var _proto2 = se.prototype;
      _proto2.get = function get(e) {
        return f(this.record, e);
      };
      _proto2.set = function set(e, t) {
        this.record[e.key] = t;
      };
      _proto2.update = function update(e, t) {
        this.record[e.key] = t(f(this.record, e));
      };
      _proto2.has = function has(e) {
        return Object.prototype.hasOwnProperty.call(this.record, e.key);
      };
      return se;
    })();
    function ie(e) {
      var t =
        require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(
          e,
          O,
        );
      return t ? t.output.defaults : void 0;
    }
    function ce(e, n) {
      if (n === void 0) {
        n = require("Lexical").$getEditor();
      }
      return f(
        (function (e) {
          return p(D, e) || ie(e);
        })(n),
        e,
      );
    }
    var le = y(D, ie);
    function ue(e) {
      return (
        require("Lexical").$isBlockElementNode(e) ||
        (require("Lexical").$isDecoratorNode(e) && !e.isInline())
      );
    }
    function ae(e, n) {
      if (!require("Lexical").isHTMLElement(n)) return e;
      var o = n.style.textAlign;
      if (!$e(o)) return e;
      for (var _n0 of e)
        require("Lexical").$isBlockElementNode(_n0) &&
          "" === _n0.getFormatType() &&
          _n0.setFormat(o);
      return e;
    }
    function fe(e, n, o) {
      1 === e.length && require("Lexical").$isLineBreakNode(e[0]) && (e = []);
      var r = require("Lexical").$createParagraphNode();
      if (require("Lexical").isHTMLElement(o)) {
        var _e9 = o.style.textAlign;
        $e(_e9) && r.setFormat(_e9);
      }
      return [r.splice(0, 0, e)];
    }
    var de = { $accepts: ue, $packageRun: fe, name: "BlockSchema" },
      pe = {
        $accepts: function $accepts(e) {
          return !ue(e);
        },
        name: "InlineSchema",
      },
      he = {
        $accepts: ue,
        $packageRun: function $packageRun(e) {
          return e;
        },
        name: "NestedBlockSchema",
      },
      me = { $accepts: ue, $packageRun: fe, name: "RootSchema" },
      ge = V,
      xe = new Set(["center", "end", "justify", "left", "right", "start"]);
    function $e(e) {
      return xe.has(e);
    }
    var ye = {
        B: { fontWeight: "bold" },
        EM: { fontStyle: "italic" },
        I: { fontStyle: "italic" },
        S: { textDecoration: "line-through" },
        STRONG: { fontWeight: "bold" },
        SUB: { verticalAlign: "sub" },
        SUP: { verticalAlign: "super" },
        U: { textDecoration: "underline" },
      },
      Te = {
        CODE: _require_Lexical.IS_CODE,
        MARK: _require_Lexical.IS_HIGHLIGHT,
      },
      Se = new Set([
        "font-weight",
        "font-style",
        "text-decoration",
        "text-transform",
        "vertical-align",
      ]),
      Ee = {
        $import: function $import(e, n) {
          var o = e.get(Z),
            r = ye[n.nodeName],
            s = (function (e) {
              return {
                fontStyle: e.style.fontStyle,
                fontWeight: e.style.fontWeight,
                textDecoration: e.style.textDecoration,
                textTransform: e.style.textTransform,
                verticalAlign: e.style.verticalAlign,
              };
            })(n);
          var i, c;
          var l =
            (o &
              ~(u = (function (e) {
                var n = 0,
                  o = 0;
                var r = e.fontWeight,
                  s = e.fontStyle,
                  i = e.textDecoration,
                  c = e.textTransform,
                  l = e.verticalAlign;
                if (
                  ("700" === r || "bold" === r
                    ? (n |= require("Lexical").IS_BOLD)
                    : ("normal" !== r && "400" !== r) ||
                      (o |= require("Lexical").IS_BOLD),
                  "italic" === s
                    ? (n |= require("Lexical").IS_ITALIC)
                    : "normal" === s && (o |= require("Lexical").IS_ITALIC),
                  i)
                ) {
                  var _e0 = i.split(" ");
                  (_e0.includes("underline") &&
                    (n |= require("Lexical").IS_UNDERLINE),
                    _e0.includes("line-through") &&
                      (n |= require("Lexical").IS_STRIKETHROUGH),
                    _e0.includes("none") &&
                      (o |=
                        require("Lexical").IS_UNDERLINE |
                        require("Lexical").IS_STRIKETHROUGH));
                }
                return (
                  "lowercase" === c
                    ? ((n |= require("Lexical").TEXT_TYPE_TO_FORMAT.lowercase),
                      (o |=
                        require("Lexical").TEXT_TYPE_TO_FORMAT.uppercase |
                        require("Lexical").TEXT_TYPE_TO_FORMAT.capitalize))
                    : "uppercase" === c
                      ? ((n |=
                          require("Lexical").TEXT_TYPE_TO_FORMAT.uppercase),
                        (o |=
                          require("Lexical").TEXT_TYPE_TO_FORMAT.lowercase |
                          require("Lexical").TEXT_TYPE_TO_FORMAT.capitalize))
                      : "capitalize" === c
                        ? ((n |=
                            require("Lexical").TEXT_TYPE_TO_FORMAT.capitalize),
                          (o |=
                            require("Lexical").TEXT_TYPE_TO_FORMAT.lowercase |
                            require("Lexical").TEXT_TYPE_TO_FORMAT.uppercase))
                        : "none" === c &&
                          (o |=
                            require("Lexical").TEXT_TYPE_TO_FORMAT.lowercase |
                            require("Lexical").TEXT_TYPE_TO_FORMAT.uppercase |
                            require("Lexical").TEXT_TYPE_TO_FORMAT.capitalize),
                  "sub" === l
                    ? ((n |= require("Lexical").IS_SUBSCRIPT),
                      (o |= require("Lexical").IS_SUPERSCRIPT))
                    : "super" === l
                      ? ((n |= require("Lexical").IS_SUPERSCRIPT),
                        (o |= require("Lexical").IS_SUBSCRIPT))
                      : "baseline" === l &&
                        (o |=
                          require("Lexical").IS_SUBSCRIPT |
                          require("Lexical").IS_SUPERSCRIPT),
                  { clear: o, set: n }
                );
              })(
                r
                  ? ((i = r),
                    {
                      fontStyle: (c = s).fontStyle || i.fontStyle,
                      fontWeight: c.fontWeight || i.fontWeight,
                      textDecoration: c.textDecoration || i.textDecoration,
                      textTransform: c.textTransform || i.textTransform,
                      verticalAlign: c.verticalAlign || i.verticalAlign,
                    })
                  : s,
              )).clear) |
            u.set;
          var u;
          var a = Te[n.nodeName];
          return (
            a && (l |= a),
            l === o
              ? e.$importChildren(n)
              : e.$importChildren(n, { context: [x(Z, l)] })
          );
        },
        match: ge.tag(
          "b",
          "strong",
          "em",
          "i",
          "code",
          "mark",
          "s",
          "sub",
          "sup",
          "u",
          "span",
        ),
        name: "@lexical/html/inline-format",
      };
    function Oe(e, n, o) {
      var r = e;
      for (;;) {
        var _e1 = null;
        for (; null === (_e1 = n ? r.nextSibling : r.previousSibling); ) {
          var _e10 = r.parentNode;
          if (null === _e10) return null;
          r = _e10;
        }
        if (((r = _e1), !o.isInline(r))) return null;
        var _s4 = r;
        for (; null !== (_s4 = n ? r.firstChild : r.lastChild); ) r = _s4;
        if (require("Lexical").isDOMTextNode(r)) return r;
        if ("BR" === r.nodeName) return null;
      }
    }
    function De(e, n) {
      return 0 !== n && require("Lexical").$isTextNode(e) ? e.setFormat(n) : e;
    }
    function Ce(e, n) {
      if (require("Lexical").$isTextNode(e)) {
        var _t8 = (function (e) {
          var t = "";
          for (var _n1 in e) Se.has(_n1) || (t += _n1 + ": " + e[_n1] + "; ");
          return t.trimEnd();
        })(n);
        "" !== _t8 && e.setStyle(_t8);
      }
      return e;
    }
    var Ne = {
        $import: function $import(e, n) {
          var o = e.get(Z),
            r = e.get(ee),
            s = e.get(oe);
          if (
            (function (e, t) {
              var n = e.parentNode;
              for (; null !== n; ) {
                if (t.preservesWhitespace(n)) return !0;
                n = n.parentNode;
              }
              return !1;
            })(n, s)
          ) {
            var _e11 = require("Lexical").$generateNodesFromRawText(
              n.textContent || "",
            );
            for (var _t9 of _e11) (De(_t9, o), Ce(_t9, r));
            return _e11;
          }
          var i = (function (e, t) {
            var n = (e.textContent || "")
              .replace(/\r/g, "")
              .replace(/[ \t\n]+/g, " ");
            if (0 === n.length) return "";
            if (" " === n[0]) {
              var _o6 = e,
                _r8 = !0;
              for (; null !== _o6 && null !== (_o6 = Oe(_o6, !1, t)); ) {
                var _e12 = _o6.textContent || "";
                if (_e12.length > 0) {
                  (/[ \t\n]$/.test(_e12) && (n = n.slice(1)), (_r8 = !1));
                  break;
                }
              }
              _r8 && (n = n.slice(1));
            }
            if (n.length > 0 && " " === n[n.length - 1]) {
              var _o7 = e,
                _r9 = !0;
              for (; null !== _o7 && null !== (_o7 = Oe(_o7, !0, t)); )
                if (
                  (_o7.textContent || "").replace(/^( |\t|\r?\n)+/, "").length >
                  0
                ) {
                  _r9 = !1;
                  break;
                }
              _r9 && (n = n.slice(0, -1));
            }
            return n;
          })(n, s);
          if ("" === i) return [];
          var c = require("Lexical").$createTextNode(i);
          return (De(c, o), Ce(c, r), [c]);
        },
        match: ge.text(),
        name: "@lexical/html/#text",
      },
      Me = {
        $import: function $import() {
          return [];
        },
        match: ge.tag("script", "style"),
        name: "@lexical/html/script-style-ignore",
      },
      Ie = {
        $import: function $import(e, n) {
          return require("Lexical").isOnlyChildInBlockNode(n) ||
            require("Lexical").isLastChildInBlockNode(n)
            ? []
            : [require("Lexical").$createLineBreakNode()];
        },
        match: ge.tag("br"),
        name: "@lexical/html/br",
      },
      Re = {
        $import: function $import(e, n) {
          var o = require("Lexical").$createParagraphNode();
          if (
            (require("Lexical").$setFormatFromDOM(o, n),
            require("Lexical").setNodeIndentFromDOM(n, o),
            "" === o.getFormatType())
          ) {
            var _e13 = n.getAttribute("align");
            _e13 && $e(_e13) && o.setFormat(_e13);
          }
          return (
            require("Lexical").$setDirectionFromDOM(o, n),
            [o.splice(0, 0, e.$importChildren(n))]
          );
        },
        match: ge.tag("p"),
        name: "@lexical/html/p",
      },
      _e = {
        $import: function $import(e, n, o) {
          return require("Lexical")
            .$getEditor()
            .hasNode(
              require("LexicalExtensionHorizontalRuleExtension")
                .HorizontalRuleNode,
            )
            ? [
                require("LexicalExtensionHorizontalRuleExtension").$createHorizontalRuleNode(),
              ]
            : o();
        },
        match: ge.tag("hr"),
        name: "@lexical/html/hr",
      },
      ve = [
        Me,
        Re,
        _e,
        {
          $import: function $import(e, n, o) {
            return require("Lexical").isBlockDomNode(n)
              ? ae(e.$importChildren(n, { schema: de }), n)
              : o();
          },
          match: ge.any(),
          name: "@lexical/html/transparent-block",
        },
        Ne,
        Ie,
        Ee,
      ];
    function ke(e, t) {
      var n = [];
      var o = 0,
        r = 0;
      for (; o < e.length && r < t.length; )
        e[o] <= t[r] ? n.push(e[o++]) : n.push(t[r++]);
      for (; o < e.length; ) n.push(e[o++]);
      for (; r < t.length; ) n.push(t[r++]);
      return n;
    }
    function be(e) {
      var t = [],
        n = new Map(),
        o = [],
        r = [],
        s = [],
        i = new Set();
      e.forEach(function (e, l) {
        var u = (function (e) {
            var t = e[b];
            return (void 0 === t && c(360), t);
          })(e.match),
          a =
            e.name ||
            (function (e, t) {
              if ("text" === e.kind) return "#text@" + t;
              if ("comment" === e.kind) return "#comment@" + t;
              if (0 === e.tags.size) return "*@" + t;
              return Array.from(e.tags).join(",").toLowerCase() + "@" + t;
            })(u, l);
        if (
          (e.name && i.add(e.name),
          t.push({ $import: e.$import, name: a, predicate: u.predicate }),
          "text" === u.kind)
        )
          r.push(l);
        else if ("comment" === u.kind) s.push(l);
        else if (0 === u.tags.size) o.push(l);
        else
          for (var _e14 of u.tags) {
            var _t0 = n.get(_e14);
            (_t0 || ((_t0 = []), n.set(_e14, _t0)), _t0.push(l));
          }
      });
      var l = new Map();
      if (0 === o.length)
        for (var _ref4 of n) {
          var _e15 = _ref4[0];
          var _t1 = _ref4[1];
          l.set(_e15, _t1);
        }
      else
        for (var _ref6 of n) {
          var _e16 = _ref6[0];
          var _t10 = _ref6[1];
          l.set(_e16, ke(_t10, o));
        }
      return {
        byTag: l,
        commentIndices: s,
        rules: t,
        textIndices: r,
        wildcardIndices: o,
      };
    }
    function we(e, n) {
      return require("Lexical").isDOMTextNode(n)
        ? e.textIndices
        : 8 === n.nodeType
          ? e.commentIndices
          : require("Lexical").isHTMLElement(n)
            ? e.byTag.get(n.nodeName) || e.wildcardIndices
            : Ae;
    }
    var Ae = Object.freeze([]);
    function Fe(e) {
      var t = [];
      for (var _n10 of e)
        if (Le(_n10)) for (var _e17 of _n10.rules) t.push(_e17);
        else t.push(_n10);
      return t;
    }
    function Le(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        "__type" in e &&
        "CompiledOverlayRules" === e.__type
      );
    }
    var Pe = Object.freeze({});
    function Be(e, t) {
      var n = {
        $importChildren: function $importChildren(t, n) {
          return (function (e, t, n) {
            var o = n && n.rules ? n.rules.dispatch : void 0;
            o && e.overlays.push(o);
            try {
              var _o8 = function _o8() {
                return He(e, t, n);
              };
              return n && n.context ? le(n.context, e.editor)(_o8) : _o8();
            } finally {
              o && e.overlays.pop();
            }
          })(e, t, n);
        },
        $importOne: function $importOne(t, n) {
          return We(e, t, n);
        },
        captures: t,
        get: function get(t) {
          return ce(t, e.editor);
        },
        session: e.session,
      };
      return n;
    }
    function He(e, t, n) {
      var o = n && n.$onChild,
        r = [];
      for (var _n11 of Array.from(t.childNodes)) {
        var _t11 = We(e, _n11, void 0);
        for (var _e18 of _t11) {
          var _t12 = o ? o(_e18) : _e18;
          null != _t12 && r.push(_t12);
        }
      }
      var s = n && n.$after ? n.$after(r) : r,
        i = n && n.schema;
      return i
        ? (function (e, t, n, o) {
            var r = [];
            var s = null;
            var i = function i() {
              if (null === s) return;
              var t = s;
              if (((s = null), e.$packageRun)) {
                var _s5 = e.$packageRun(t, n, o);
                if (_s5.length > 0) {
                  for (var _e19 of _s5) r.push(_e19);
                  return;
                }
              }
              if ("hoist" === e.onReject) for (var _e20 of t) r.push(_e20);
            };
            for (var _o9 of t)
              e.$accepts(_o9, n)
                ? (i(), r.push(_o9))
                : (null === s && (s = []), s.push(_o9));
            return (i(), e.$finalize ? e.$finalize(r, n) : r);
          })(i, s, null, t)
        : s;
    }
    function We(e, t, n) {
      var o = function o() {
        return (function (e, t) {
          var n = (function (e, t) {
            var n = [];
            for (var _o0 = e.overlays.length - 1; _o0 >= 0; _o0--) {
              var _r0 = e.overlays[_o0],
                _s6 = we(_r0, t);
              _s6.length > 0 && n.push({ dispatch: _r0, indices: _s6 });
            }
            var o = we(e.dispatch, t);
            return (
              o.length > 0 && n.push({ dispatch: e.dispatch, indices: o }),
              n
            );
          })(e, t);
          if (0 === n.length) return Ue(e, t);
          var o = 0,
            r = 0;
          var _s7 = function s() {
            for (; o < n.length; ) {
              var _n$o = n[o],
                _i2 = _n$o.dispatch,
                _c = _n$o.indices;
              for (; r < _c.length; ) {
                var _n12 = _c[r++],
                  _o1 = _i2.rules[_n12],
                  _l = {};
                if (_o1.predicate(t, _l)) {
                  var _n13 = Be(e, 0 === Object.keys(_l).length ? Pe : _l);
                  try {
                    return _o1.$import(_n13, t, _s7);
                  } catch (e) {
                    throw e;
                  }
                }
              }
              (o++, (r = 0));
            }
            return Ue(e, t);
          };
          return _s7();
        })(e, t);
      };
      return n && n.context ? le(n.context, e.editor)(o) : o();
    }
    function Ue(e, t) {
      if (0 === t.childNodes.length) return [];
      var n = [];
      for (var _o10 of Array.from(t.childNodes)) {
        var _t13 = We(e, _o10, void 0);
        for (var _e21 of _t13) n.push(_e21);
      }
      return n;
    }
    var ze = {
        $import: function $import(e, t) {
          return e.$importChildren(t);
        },
        match: V.any(),
        name: "@lexical/html/default-hoist",
      },
      je = {
        build: function build(e, n) {
          var o = be(Fe(n.rules)),
            r = m(n.contextDefaults, void 0),
            s = n.preprocess;
          return {
            $generateNodesFromDOM: function $generateNodesFromDOM(n, i) {
              var c = p(D, e) || r,
                l = i && i.context ? m(i.context, c) : c,
                u = void 0 !== l && l !== c ? l : Object.create(c || null),
                a = new _se(u),
                f = { session: a };
              return (
                (function (e, t, n) {
                  var o = e.length - 1;
                  var _r1 = function r() {
                    for (; o >= 0; ) return void (0, e[o--])(t, n, _r1);
                  };
                  _r1();
                })(
                  i && i.preprocess
                    ? [].concat(Array.from(s), Array.from(i.preprocess))
                    : s,
                  n,
                  f,
                ),
                $(
                  D,
                  u,
                  function () {
                    return (function (e, n, o, r) {
                      return He(
                        {
                          dispatch: e,
                          editor: n,
                          overlays: r.get(re).map(function (e) {
                            return e.dispatch;
                          }),
                          session: r,
                        },
                        require("Lexical").isDOMDocumentNode(o) ? o.body : o,
                        { schema: me },
                      );
                    })(o, e, n, a);
                  },
                  e,
                )
              );
            },
            defaults: r,
          };
        },
        config: { contextDefaults: [], preprocess: [l], rules: [ze] },
        mergeConfig: function mergeConfig(e, n) {
          return require("Lexical").shallowMergeConfig(
            e,
            babelHelpers["extends"](
              {},
              n,
              n.contextDefaults && {
                contextDefaults: [].concat(
                  Array.from(e.contextDefaults),
                  Array.from(n.contextDefaults),
                ),
              },
              n.preprocess && {
                preprocess: [].concat(
                  Array.from(e.preprocess),
                  Array.from(n.preprocess),
                ),
              },
              n.rules && {
                rules: [].concat(Array.from(n.rules), Array.from(e.rules)),
              },
            ),
          );
        },
        name: O,
      },
      Ve = {
        dependencies: [[je, { rules: ve }]],
        name: "@lexical/html/CoreImport",
      },
      Ye = [_e],
      qe = { any: W, comment: U, css: X, tag: z, text: j };
    function Ge(e) {
      return function (t) {
        return t instanceof e;
      };
    }
    function Xe(e, _ref7) {
      var t = _ref7.nodes;
      if ("*" === t) return C;
      var n = {};
      var o = [];
      for (var _r10 of t)
        if ("getType" in _r10) {
          var _t14 = _r10.getType();
          if (n) {
            var _o11 = e.get(_t14);
            void 0 === _o11 && c(339, _r10.name, _t14);
            for (var _e22 of _o11) n[_e22] = !0;
          }
          o.push(Ge(_r10));
        } else ((n = void 0), o.push(_r10));
      return (
        n ||
        (1 === o.length
          ? o[0]
          : function (e) {
              for (var _t15 of o) if (_t15(e)) return !0;
              return !1;
            })
      );
    }
    function Ke(e) {
      return function (t, n, o) {
        return e(t, o);
      };
    }
    function Je(e) {
      return function (t, n, o, r) {
        return e(t, n, r);
      };
    }
    function Qe(e) {
      return function (t, n, o, r, s) {
        return e(t, n, o, s);
      };
    }
    function Ze(e) {
      return function (t, n, o, r, s, i) {
        return e(t, n, o, r, i);
      };
    }
    function et(e, t) {
      return function (n, o) {
        var r = function r() {
            return e(n, o);
          },
          s = t(n);
        return s ? s(n, r, o) : r();
      };
    }
    function tt(e, t) {
      return function (n, o, r) {
        var s = function s() {
            return e(n, o, r);
          },
          i = t(n);
        return i ? i(n, o, s, r) : s();
      };
    }
    var nt = tt,
      ot = Je;
    function rt(e, t) {
      return function (n, o, r, s) {
        var i = function i() {
            return e(n, o, r, s);
          },
          c = t(n);
        return c ? c(n, o, r, i, s) : i();
      };
    }
    function st(e, t) {
      return function (n, o, r, s, i) {
        var c = function c() {
            return e(n, o, r, s, i);
          },
          l = t(n);
        return l ? l(n, o, r, s, c, i) : c();
      };
    }
    function it(e, t) {
      return function (n, o, r, s) {
        e(n, o, r, s);
        var i = t(n);
        i && i(n, o, r, s);
      };
    }
    function ct(e, t, n, o, r) {
      var s = n[t];
      var _loop = function _loop() {
        if ("function" == typeof _n14[0]) {
          var _e23 = _n14[0],
            _t16 = _n14[1];
          s = o(s, function (n) {
            return (_e23(n) && _t16) || void 0;
          });
        } else {
          var _e24 = _n14[1],
            _t17 = {};
          for (var _n15 in _e24) {
            var _r11 = _e24[_n15];
            _r11 &&
              (_t17[_n15] = _r11.reduce(function (e, t) {
                return o(e, function () {
                  return t;
                });
              }, s));
          }
          s = o(s, function (e) {
            var n = _t17[e.getType()];
            return n && r(n);
          });
        }
      };
      for (var _n14 of e[t]) {
        _loop();
      }
      n[t] = s;
    }
    function lt(e, t, n, o) {
      if (!o) return;
      var r = e[t];
      if ("function" == typeof n) r.push([n, o]);
      else {
        var _e25 = r[r.length - 1];
        var _t18;
        _e25 && "types" === _e25[0]
          ? (_t18 = _e25[1])
          : ((_t18 = {}), r.push(["types", _t18]));
        for (var _e26 in n) {
          var _n16 = _t18[_e26] || [];
          ((_t18[_e26] = _n16), _n16.push(o));
        }
      }
    }
    function ut(e) {
      return "*" === e.nodes;
    }
    function at(e) {
      return e;
    }
    function ft(e, _ref8) {
      var n = _ref8.overrides;
      var o = (function (e, n) {
          var o = require("Lexical").getRegisteredSubtypeMap(
              require("LexicalExtensionConfig").getKnownTypesAndNodes(e).nodes,
            ),
            s = {
              $createDOM: [],
              $decorateDOM: [],
              $exportDOM: [],
              $extractWithChild: [],
              $getDOMSlot: [],
              $getSlotTargetElement: [],
              $shouldExclude: [],
              $shouldInclude: [],
              $updateDOM: [],
            };
          for (var _e27 of (function (e) {
            var n = [],
              o = [],
              r = [];
            for (var _s8 of e)
              if (ut(_s8)) n.push(_s8);
              else if (Array.isArray(_s8.nodes))
                for (var _e28 of _s8.nodes)
                  require("Lexical").$isLexicalNode(_e28.prototype)
                    ? r.push(
                        1 === _s8.nodes.length
                          ? _s8
                          : babelHelpers["extends"]({}, _s8, { nodes: [_e28] }),
                      )
                    : o.push(
                        1 === _s8.nodes.length
                          ? _s8
                          : babelHelpers["extends"]({}, _s8, { nodes: [_e28] }),
                      );
            var s = new Map(),
              i = function i(e) {
                var n = s.get(e);
                if (void 0 === n) {
                  n = -1;
                  for (var _o12 of require("Lexical").iterStaticNodeConfigChain(
                    e,
                  ))
                    n++;
                  s.set(e, n);
                }
                return n;
              };
            return (
              r.sort(function (e, t) {
                return i(e.nodes[0]) - i(t.nodes[0]);
              }),
              [].concat(Array.from(r), Array.from(o), Array.from(n))
            );
          })(n)) {
            var _t19 = Xe(o, _e27);
            for (var _n17 in s) lt(s, _n17, _t19, _e27[_n17]);
          }
          return s;
        })(e, n),
        s = babelHelpers["extends"](
          {},
          require("Lexical").DEFAULT_EDITOR_DOM_CONFIG,
          e.dom,
        );
      return (
        ct(o, "$createDOM", s, et, Ke),
        ct(o, "$exportDOM", s, et, Ke),
        ct(o, "$extractWithChild", s, st, Ze),
        ct(o, "$getDOMSlot", s, nt, ot),
        ct(o, "$shouldExclude", s, tt, Je),
        ct(o, "$shouldInclude", s, tt, Je),
        ct(o, "$getSlotTargetElement", s, rt, Qe),
        ct(o, "$updateDOM", s, rt, Qe),
        ct(o, "$decorateDOM", s, it, at),
        s
      );
    }
    function dt(e) {
      return {
        get: function get(t) {
          return f(e, t);
        },
      };
    }
    function pt(e) {
      var t = Object.create(null);
      return m(e, t) || t;
    }
    function ht(e, t) {
      var n = dt(t);
      return e.filter(function (e) {
        return !(e.disabledForEditor && e.disabledForEditor(n));
      });
    }
    function mt(e) {
      if ("*" === e.nodes)
        return function () {
          return !0;
        };
      var n = e.nodes.map(function (e) {
        var n = e;
        return require("Lexical").$isLexicalNode(n.prototype)
          ? function (e) {
              return e instanceof n;
            }
          : e;
      });
      return function (e) {
        return n.some(function (t) {
          return t(e);
        });
      };
    }
    var _gt = (function () {
      function gt(e, t, n, o) {
        this.sessionCache = (function () {
          return new Map();
        })();
        ((this.editor = e),
          (this.initialEditorConfig = t),
          (this.overrides = n),
          (this.editorContext = o),
          (this.installed = ht(n, o)),
          (this.hasSessionGates = n.some(function (e) {
            return e.disabledForSession;
          })));
      }
      var _proto3 = gt.prototype;
      _proto3.setContextValue = function setContextValue(e, n) {
        var o = this.installed;
        this.editorContext[e.key] = n;
        var r = ht(this.overrides, this.editorContext);
        if (
          (function (e, t) {
            if (e.length !== t.length) return !1;
            for (var _n18 = 0; _n18 < e.length; _n18++)
              if (e[_n18] !== t[_n18]) return !1;
            return !0;
          })(o, r)
        )
          return;
        var s = (function (e, t) {
          var n = new Set(e),
            o = new Set(t),
            r = [];
          for (var _t20 of e) o.has(_t20) || r.push(_t20);
          for (var _e29 of t) n.has(_e29) || r.push(_e29);
          return r;
        })(o, r);
        ((this.installed = r), this.sessionCache.clear());
        var i = ft(this.initialEditorConfig, { overrides: r });
        this.editor._config.dom = i;
        var c = (function (e) {
          var t = [];
          for (var _n19 of e)
            (_n19.$createDOM || _n19.$getDOMSlot || _n19.$decorateDOM) &&
              t.push(mt(_n19));
          return 0 === t.length
            ? null
            : function (e) {
                return t.some(function (t) {
                  return t(e);
                });
              };
        })(s);
        if (!c) return;
        var l = i.$updateDOM;
        ((i.$updateDOM = function (e, t, n, o) {
          return !!c(e) || l(e, t, n, o);
        }),
          this.editor.update(require("Lexical").$fullReconcile, {
            discrete: !0,
          }),
          (i.$updateDOM = l));
      };
      _proto3.getSessionConfig = function getSessionConfig() {
        var e =
          this.editor._config.dom ||
          require("Lexical").DEFAULT_EDITOR_DOM_CONFIG;
        if (!this.hasSessionGates) return e;
        var n = dt(p(E, this.editor) || this.editorContext),
          o = [],
          r = [];
        if (
          (this.installed.forEach(function (e, t) {
            e.disabledForSession && e.disabledForSession(n)
              ? o.push(String(t))
              : r.push(e);
          }),
          0 === o.length)
        )
          return e;
        var s = o.join(",");
        var i = this.sessionCache.get(s);
        return (
          i ||
            ((i = ft(this.initialEditorConfig, { overrides: r })),
            this.sessionCache.set(s, i)),
          i
        );
      };
      return gt;
    })();
    var xt = {
        build: function build(e, t, n) {
          var _n$getInitResult = n.getInitResult(),
            o = _n$getInitResult.initialEditorConfig,
            r = pt(t.contextDefaults);
          return { defaults: r, runtime: new _gt(e, o, t.overrides, r) };
        },
        config: { contextDefaults: [], overrides: [] },
        html: {
          export: new Map([
            [
              _require_Lexical.RootNode,
              function () {
                var e = require("Lexical").$getDocument().createElement("div");
                return ((e.role = "textbox"), { element: e });
              },
            ],
          ]),
        },
        init: function init(e, t) {
          var n = { dom: e.dom, nodes: e.nodes },
            o = pt(t.contextDefaults),
            r = ht(t.overrides, o);
          return (
            (e.dom = ft(e, { overrides: r })),
            { initialEditorConfig: n }
          );
        },
        mergeConfig: function mergeConfig(e, n) {
          var o = require("Lexical").shallowMergeConfig(e, n);
          for (var _t21 of ["overrides", "contextDefaults"])
            n[_t21] &&
              (o[_t21] = [].concat(Array.from(e[_t21]), Array.from(n[_t21])));
          return o;
        },
        name: S,
      },
      $t = new Set(["STYLE", "SCRIPT"]);
    function yt(e, n, o) {
      if (n === void 0) {
        n = null;
      }
      if (o === void 0) {
        o = require("Lexical").$getEditor();
      }
      return k(
        [x(I, !0)],
        o,
      )(function () {
        var r = require("Lexical").$getRoot(),
          s = v(o),
          i = require("Lexical").$getSelectionSlotFrame(n),
          c = e.append.bind(e);
        for (var _e30 of (require("Lexical").$isElementNode(i)
          ? i
          : r
        ).getChildren())
          Tt(o, _e30, c, n, s);
        return e;
      });
    }
    function Tt(n, o, r, s, i) {
      if (s === void 0) {
        s = null;
      }
      if (i === void 0) {
        i = require("Lexical").$getEditorDOMRenderConfig(n);
      }
      var c = i.$shouldInclude(o, s, n);
      var l = i.$shouldExclude(o, s, n);
      var u = o;
      null !== s &&
        require("Lexical").$isTextNode(o) &&
        (u = require("LexicalSelection").$sliceSelectedTextNodeContent(
          s,
          o,
          "clone",
        ));
      var a = i.$exportDOM(u, n),
        f = a.element,
        d = a.after,
        p = a.append,
        h = a.$getChildNodes;
      if (!f) return !1;
      var m = require("Lexical").$getDocument().createDocumentFragment(),
        g = h
          ? h()
          : require("Lexical").$isElementNode(u)
            ? u.getChildren()
            : [],
        x =
          c &&
          require("Lexical").$isNodeSelection(s) &&
          require("Lexical").$isElementNode(o)
            ? null
            : s,
        $ = m.append.bind(m);
      var y = null;
      for (var _e31 of g) {
        var _t22 = Tt(n, _e31, $, x, i);
        (_t22 && (y = _e31),
          !c && _t22 && i.$extractWithChild(o, _e31, s, "html", n) && (c = !0));
      }
      if (c && !l) {
        if (
          ((require("Lexical").isHTMLElement(f) ||
            require("Lexical").isDocumentFragment(f)) &&
            (p ? p(m) : f.append(m),
            (function (e, n) {
              var o = e.lastChild;
              if (
                require("Lexical").$isLineBreakNode(n) &&
                require("Lexical").isHTMLElement(e) &&
                require("Lexical").isBlockDomNode(e) &&
                null !== o &&
                "BR" === o.nodeName
              ) {
                var _n20 = require("Lexical")
                  .$getDocument()
                  .createElement("br");
                (_n20.setAttribute("data-lexical-managed-linebreak", "true"),
                  e.append(_n20));
              }
            })(f, y)),
          require("Lexical").isDocumentFragment(f))
        ) {
          if (d) {
            var _e32 = d.call(u, f);
            _e32 && f.replaceChildren(_e32);
          }
          r(f);
        } else if ((r(f), d)) {
          var _e33 = d.call(u, f);
          _e33 && f.replaceWith(_e33);
        }
      } else r(m);
      return c;
    }
    function St(e, n, o, r, s, i) {
      var _l2;
      if (s === void 0) {
        s = new Map();
      }
      var c = [];
      if ($t.has(e.nodeName)) return c;
      var l = null;
      var u = (function (e, t) {
          var n = e.nodeName,
            o = t._htmlConversions.get(n.toLowerCase());
          var r = null;
          if (void 0 !== o)
            for (var _t23 of o) {
              var _n21 = _t23(e);
              null !== _n21 &&
                (null === r || (r.priority || 0) <= (_n21.priority || 0)) &&
                (r = _n21);
            }
          return null !== r ? r.conversion : null;
        })(e, n),
        a = u ? u(e) : null;
      var f = null;
      if (null !== a) {
        f = a.after;
        var _t24 = a.node;
        if (
          ((l = Array.isArray(_t24) ? _t24[_t24.length - 1] : _t24), null !== l)
        ) {
          for (var _ref0 of s) {
            var _e34 = _ref0[1];
            if (((l = _e34(l, i)), !l)) break;
          }
          l && c.push.apply(c, Array.from(Array.isArray(_t24) ? _t24 : [l]));
        }
        null != a.forChild && s.set(e.nodeName, a.forChild);
      }
      var d = e.childNodes;
      var p = [];
      var h =
        (null == l || !require("Lexical").$isRootOrShadowRoot(l)) &&
        ((null != l && require("Lexical").$isBlockElementNode(l)) || r);
      for (var _e35 = 0; _e35 < d.length; _e35++) {
        var _p;
        (_p = p).push.apply(
          _p,
          Array.from(St(d[_e35], n, o, h, new Map(s), l)),
        );
      }
      if (
        (null != f && (p = f(p)),
        require("Lexical").isBlockDomNode(e) &&
          (p = (function (e, n, o) {
            var r = e.style.textAlign,
              s = [];
            var i = [];
            for (var _e36 = 0; _e36 < n.length; _e36++) {
              var _c2 = n[_e36];
              if (require("Lexical").$isBlockElementNode(_c2))
                (r && !_c2.getFormat() && _c2.setFormat(r), s.push(_c2));
              else if (
                (i.push(_c2),
                _e36 === n.length - 1 ||
                  (_e36 < n.length - 1 &&
                    require("Lexical").$isBlockElementNode(n[_e36 + 1])))
              ) {
                var _e37 = o();
                (_e37.setFormat(r),
                  _e37.append.apply(_e37, Array.from(i)),
                  s.push(_e37),
                  (i = []));
              }
            }
            return s;
          })(
            e,
            p,
            h
              ? function () {
                  var e = new (require("Lexical").ArtificialNode__DO_NOT_USE)();
                  return (o.push(e), e);
                }
              : require("Lexical").$createParagraphNode,
          )),
        null == l)
      ) {
        if (p.length > 0) for (var _e38 of p) c.push(_e38);
        else
          require("Lexical").isBlockDomNode(e) &&
            (function (e) {
              return (
                null != e.nextSibling &&
                null != e.previousSibling &&
                require("Lexical").isInlineDomNode(e.nextSibling) &&
                require("Lexical").isInlineDomNode(e.previousSibling)
              );
            })(e) &&
            c.push(require("Lexical").$createLineBreakNode());
      } else
        require("Lexical").$isElementNode(l) &&
          (_l2 = l).append.apply(_l2, Array.from(p));
      return c;
    }
    ((exports.$appendNodeToHTML = function (e, t, n, o) {
      if (o === void 0) {
        o = null;
      }
      return Tt(e, t, n.append.bind(n), o, v(e));
    }),
      (exports.$distributeInlineWrapper = function e(n, o) {
        var r = [];
        var s = [];
        var i = function i() {
          0 !== s.length && (r.push(o().splice(0, 0, s)), (s = []));
        };
        for (var _c3 of n)
          if (ue(_c3)) {
            if ((i(), require("Lexical").$isElementNode(_c3))) {
              var _t25 = e(_c3.getChildren(), o);
              _c3.splice(0, _c3.getChildrenSize(), _t25);
            }
            r.push(_c3);
          } else s.push(_c3);
        return (i(), r);
      }),
      (exports.$generateDOMFromNodes = yt),
      (exports.$generateDOMFromRoot = function (e, n) {
        if (n === void 0) {
          n = require("Lexical").$getRoot();
        }
        var o = require("Lexical").$getEditor();
        return k(
          [x(I, !0), x(M, !0)],
          o,
        )(function () {
          var t = v(o),
            r = e.append.bind(e);
          return (Tt(o, n, r, null, t), e);
        });
      }),
      (exports.$generateHtmlFromNodes = function (e, n) {
        if (n === void 0) {
          n = null;
        }
        return (
          ("undefined" == typeof document ||
            ("undefined" == typeof window && void 0 === global.window)) &&
            c(338),
          require("Lexical").$assumeActiveEditor(e),
          yt(require("Lexical").$getDocument().createElement("div"), n, e)
            .innerHTML
        );
      }),
      (exports.$generateNodesFromDOM = function (e, n) {
        u(n);
        var o = require("Lexical").isDOMDocumentNode(n)
            ? n.body.childNodes
            : n.childNodes,
          r = [],
          s = [];
        for (var _t26 of o)
          if (!$t.has(_t26.nodeName)) {
            var _n22 = St(_t26, e, s, !1);
            if (null !== _n22) for (var _e39 of _n22) r.push(_e39);
          }
        return (
          (function (e) {
            for (var _n23 of e)
              _n23.getParent() &&
                _n23.getNextSibling() instanceof
                  require("Lexical").ArtificialNode__DO_NOT_USE &&
                _n23.insertAfter(require("Lexical").$createLineBreakNode());
            for (var _t27 of e) {
              var _e40 = _t27.getParent();
              _e40 &&
                _e40.splice(_t27.getIndexWithinParent(), 1, _t27.getChildren());
            }
          })(s),
          r
        );
      }),
      (exports.$generateNodesFromDOMViaExtension = function (e, t) {
        return require("LexicalExtensionGetExtensionDependency")
          .$getExtensionOutput(je)
          .$generateNodesFromDOM(e, t);
      }),
      (exports.$getImportContextValue = ce),
      (exports.$getRenderContextValue = function (e, n) {
        if (n === void 0) {
          n = require("Lexical").$getEditor();
        }
        return f(
          (function (e) {
            return p(E, e) || R(e);
          })(n),
          e,
        );
      }),
      (exports.$getSessionDOMRenderConfig = v),
      (exports.$inlineStylesFromStyleSheets = l),
      (exports.$isBlockLevel = ue),
      (exports.$propagateTextAlignToBlockChildren = ae),
      (exports.$setRenderContextValue = function (e, n, o) {
        if (o === void 0) {
          o = require("Lexical").$getEditor();
        }
        var r = _(o);
        r && r.setContextValue(e, n);
      }),
      (exports.$updateRenderContextValue = function (e, n, o) {
        if (o === void 0) {
          o = require("Lexical").$getEditor();
        }
        var r = _(o);
        r && r.setContextValue(e, n(f(r.editorContext, e)));
      }),
      (exports.$withImportContext = le),
      (exports.$withRenderContext = k),
      (exports.BlockSchema = de),
      (exports.CoreImportExtension = Ve),
      (exports.CoreImportRules = ve),
      (exports.DOMImportExtension = je),
      (exports.DOMRenderExtension = xt),
      (exports.HorizontalRuleImportRules = Ye),
      (exports.ImportOverlays = re),
      (exports.ImportSource = J),
      (exports.ImportSourceDataTransfer = Q),
      (exports.ImportTextFormat = Z),
      (exports.ImportTextStyle = ee),
      (exports.ImportWhitespaceConfig = oe),
      (exports.InlineSchema = pe),
      (exports.NestedBlockSchema = he),
      (exports.RenderContextExport = I),
      (exports.RenderContextRoot = M),
      (exports.RootSchema = me),
      (exports.contextUpdater = function (e, t) {
        return { cfg: e, updater: t };
      }),
      (exports.contextValue = x),
      (exports.createImportState = K),
      (exports.createRenderState = N),
      (exports.defaultIsInline = ne),
      (exports.defaultPreservesWhitespace = te),
      (exports.defineImportRule = function (e) {
        return e;
      }),
      (exports.defineOverlayRules = function (e) {
        var t = Fe(e);
        return { __type: "CompiledOverlayRules", dispatch: be(t), rules: t };
      }),
      (exports.domOverride = function (e, t, n) {
        return babelHelpers["extends"]({}, t, n, { nodes: e });
      }),
      (exports.isElementOfTag = function (e, n) {
        return (
          require("Lexical").isHTMLElement(e) && e.nodeName === n.toUpperCase()
        );
      }),
      (exports.parseSelector = X),
      (exports.sel = qe));
  },
  null,
);
