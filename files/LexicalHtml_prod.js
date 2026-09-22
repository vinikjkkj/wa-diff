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
      for (var _e2 of t) o.append("v", _e2);
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
    var l;
    function u(e, t) {
      var n = t.key;
      return e && n in e ? e[n] : t.defaultValue;
    }
    function a(e) {
      return l && l.editor === e ? l : void 0;
    }
    function f(e, t) {
      var n = a(t);
      return n && n[e];
    }
    function d(e, t) {
      if ("cfg" in t) {
        var _n = t.cfg,
          _o = t.updater;
        return [_n, _o(u(e, _n))];
      }
      return t;
    }
    function p(e, t) {
      var n = t;
      for (var _o2 of e) {
        var _d = d(n, _o2),
          _e3 = _d[0],
          _r = _d[1],
          _s = _e3.key;
        if (n === t && u(n, _e3) === _r) continue;
        var _i = n === t || void 0 === n ? h(t) : n;
        ((_i[_s] = _r), (n = _i));
      }
      return n;
    }
    function h(e) {
      return Object.create(e || null);
    }
    function m(e, t) {
      return [e, t];
    }
    function g(e, n, o, r) {
      if (r === void 0) {
        r = require("Lexical").$getEditor();
      }
      var s = l,
        i = a(r);
      try {
        var _babelHelpers$extends;
        return (
          (l = babelHelpers["extends"](
            {},
            i,
            ((_babelHelpers$extends = { editor: r }),
            (_babelHelpers$extends[e] = n),
            _babelHelpers$extends),
          )),
          o()
        );
      } finally {
        l = s;
      }
    }
    function x(e, n) {
      if (n === void 0) {
        n = function n() {};
      }
      return function (o, r) {
        if (r === void 0) {
          r = require("Lexical").$getEditor();
        }
        return function (t) {
          var s = a(r),
            i = s && s[e],
            c = p(o, i || n(r));
          return c && c !== i ? g(e, c, t, r) : t();
        };
      };
    }
    function $(e, n, o, r) {
      var _Object$assign;
      return Object.assign(
        require("Lexical").createState(Symbol(n), { isEqual: r, parse: o }),
        ((_Object$assign = {}), (_Object$assign[e] = !0), _Object$assign),
      );
    }
    var y = function y(e, t, n) {
      (T(e), n());
    };
    function T(e) {
      if (!require("Lexical").isDOMDocumentNode(e)) return;
      var o = e;
      if (null === o.querySelector("style")) return;
      var r = new Map();
      function s(e) {
        var t = r.get(e);
        if (void 0 === t) {
          t = new Set();
          for (var _n2 = 0; _n2 < e.style.length; _n2++) t.add(e.style[_n2]);
          r.set(e, t);
        }
        return t;
      }
      try {
        for (var _e4 of Array.from(o.styleSheets)) {
          var _r2 = void 0;
          try {
            _r2 = _e4.cssRules;
          } catch (_unused) {
            continue;
          }
          for (var _e5 of Array.from(_r2)) {
            if (!require("LexicalUtils").objectKlassEquals(_e5, CSSStyleRule))
              continue;
            var _r3 = void 0;
            try {
              _r3 = o.querySelectorAll(_e5.selectorText);
            } catch (_unused2) {
              continue;
            }
            for (var _n3 of Array.from(_r3)) {
              if (!require("Lexical").isHTMLElement(_n3)) continue;
              var _o3 = s(_n3);
              for (var _t = 0; _t < _e5.style.length; _t++) {
                var _r4 = _e5.style[_t];
                _o3.has(_r4) ||
                  _n3.style.setProperty(
                    _r4,
                    _e5.style.getPropertyValue(_r4),
                    _e5.style.getPropertyPriority(_r4),
                  );
              }
            }
          }
        }
      } catch (_unused3) {}
    }
    var S = "@lexical/html/DOM",
      E = Symbol["for"]("@lexical/html/DOMExportContext"),
      O = "@lexical/html/DOMImport",
      D = Symbol["for"]("@lexical/html/DOMImportContext"),
      C = function C() {
        return !0;
      };
    function N(e, t, n) {
      return $(E, e, t, n);
    }
    var I = N("root", Boolean),
      M = N("isExport", Boolean);
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
    var k = x(E, R);
    function b(e) {
      return function (t) {
        return t instanceof e;
      };
    }
    function A(e, _ref) {
      var t = _ref.nodes;
      if ("*" === t) return C;
      var n = {};
      var o = [];
      for (var _r5 of t)
        if ("getType" in _r5) {
          var _t2 = _r5.getType();
          if (n) {
            var _o4 = e.get(_t2);
            void 0 === _o4 && c(339, _r5.name, _t2);
            for (var _e6 of _o4) n[_e6] = !0;
          }
          o.push(b(_r5));
        } else ((n = void 0), o.push(_r5));
      return (
        n ||
        (1 === o.length
          ? o[0]
          : function (e) {
              for (var _t3 of o) if (_t3(e)) return !0;
              return !1;
            })
      );
    }
    function w(e) {
      return function (t, n, o) {
        return e(t, o);
      };
    }
    function F(e) {
      return function (t, n, o, r) {
        return e(t, n, r);
      };
    }
    function L(e) {
      return function (t, n, o, r, s) {
        return e(t, n, o, s);
      };
    }
    function P(e) {
      return function (t, n, o, r, s, i) {
        return e(t, n, o, r, i);
      };
    }
    function B(e, t) {
      return function (n, o) {
        var r = function r() {
            return e(n, o);
          },
          s = t(n);
        return s ? s(n, r, o) : r();
      };
    }
    function H(e, t) {
      return function (n, o, r) {
        var s = function s() {
            return e(n, o, r);
          },
          i = t(n);
        return i ? i(n, o, s, r) : s();
      };
    }
    var W = H,
      U = F;
    function z(e, t) {
      return function (n, o, r, s) {
        var i = function i() {
            return e(n, o, r, s);
          },
          c = t(n);
        return c ? c(n, o, r, i, s) : i();
      };
    }
    function j(e, t) {
      return function (n, o, r, s, i) {
        var c = function c() {
            return e(n, o, r, s, i);
          },
          l = t(n);
        return l ? l(n, o, r, s, c, i) : c();
      };
    }
    function V(e, t) {
      return function (n, o, r, s) {
        e(n, o, r, s);
        var i = t(n);
        i && i(n, o, r, s);
      };
    }
    function Y(e, t, n, o, r) {
      var s = n[t];
      var _loop = function _loop() {
        if ("function" == typeof _n4[0]) {
          var _e7 = _n4[0],
            _t4 = _n4[1];
          s = o(s, function (n) {
            return (_e7(n) && _t4) || void 0;
          });
        } else {
          var _e8 = _n4[1],
            _t5 = {};
          for (var _n5 in _e8) {
            var _r6 = _e8[_n5];
            _r6 &&
              (_t5[_n5] = _r6.reduce(function (e, t) {
                return o(e, function () {
                  return t;
                });
              }, s));
          }
          s = o(s, function (e) {
            var n = _t5[e.getType()];
            return n && r(n);
          });
        }
      };
      for (var _n4 of e[t]) {
        _loop();
      }
      n[t] = s;
    }
    function q(e, t, n, o) {
      if (!o) return;
      var r = e[t];
      if ("function" == typeof n) r.push([n, o]);
      else {
        var _e9 = r[r.length - 1];
        var _t6;
        _e9 && "types" === _e9[0]
          ? (_t6 = _e9[1])
          : ((_t6 = {}), r.push(["types", _t6]));
        for (var _e0 in n) {
          var _n6 = _t6[_e0] || [];
          ((_t6[_e0] = _n6), _n6.push(o));
        }
      }
    }
    function G(e) {
      return "*" === e.nodes;
    }
    function X(e) {
      return e;
    }
    function K(e, _ref2) {
      var n = _ref2.overrides;
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
          for (var _e1 of (function (e) {
            var n = [],
              o = [],
              r = [];
            for (var _s2 of e)
              if (G(_s2)) n.push(_s2);
              else if (Array.isArray(_s2.nodes))
                for (var _e10 of _s2.nodes)
                  require("Lexical").$isLexicalNode(_e10.prototype)
                    ? r.push(
                        1 === _s2.nodes.length
                          ? _s2
                          : babelHelpers["extends"]({}, _s2, { nodes: [_e10] }),
                      )
                    : o.push(
                        1 === _s2.nodes.length
                          ? _s2
                          : babelHelpers["extends"]({}, _s2, { nodes: [_e10] }),
                      );
            var s = new Map(),
              i = function i(e) {
                var n = s.get(e);
                if (void 0 === n) {
                  n = -1;
                  for (var _o5 of require("Lexical").iterStaticNodeConfigChain(
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
            var _t7 = A(o, _e1);
            for (var _n7 in s) q(s, _n7, _t7, _e1[_n7]);
          }
          return s;
        })(e, n),
        s = babelHelpers["extends"](
          {},
          require("Lexical").DEFAULT_EDITOR_DOM_CONFIG,
          e.dom,
        );
      return (
        Y(o, "$createDOM", s, B, w),
        Y(o, "$exportDOM", s, B, w),
        Y(o, "$extractWithChild", s, j, P),
        Y(o, "$getDOMSlot", s, W, U),
        Y(o, "$shouldExclude", s, H, F),
        Y(o, "$shouldInclude", s, H, F),
        Y(o, "$getSlotTargetElement", s, z, L),
        Y(o, "$updateDOM", s, z, L),
        Y(o, "$decorateDOM", s, V, X),
        s
      );
    }
    function J(e) {
      return {
        get: function get(t) {
          return u(e, t);
        },
      };
    }
    function Q(e) {
      var t = Object.create(null);
      return p(e, t) || t;
    }
    function Z(e, t) {
      var n = J(t);
      return e.filter(function (e) {
        return !(e.disabledForEditor && e.disabledForEditor(n));
      });
    }
    function ee(e) {
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
    var _te = (function () {
      function te(e, t, n, o) {
        this.sessionCache = (function () {
          return new Map();
        })();
        ((this.editor = e),
          (this.initialEditorConfig = t),
          (this.overrides = n),
          (this.editorContext = o),
          (this.installed = Z(n, o)),
          (this.hasSessionGates = n.some(function (e) {
            return e.disabledForSession;
          })));
      }
      var _proto = te.prototype;
      _proto.setContextValue = function setContextValue(e, n) {
        var o = this.installed;
        this.editorContext[e.key] = n;
        var r = Z(this.overrides, this.editorContext);
        if (
          (function (e, t) {
            if (e.length !== t.length) return !1;
            for (var _n8 = 0; _n8 < e.length; _n8++)
              if (e[_n8] !== t[_n8]) return !1;
            return !0;
          })(o, r)
        )
          return;
        var s = (function (e, t) {
          var n = new Set(e),
            o = new Set(t),
            r = [];
          for (var _t8 of e) o.has(_t8) || r.push(_t8);
          for (var _e11 of t) n.has(_e11) || r.push(_e11);
          return r;
        })(o, r);
        ((this.installed = r), this.sessionCache.clear());
        var i = K(this.initialEditorConfig, { overrides: r });
        this.editor._config.dom = i;
        var c = (function (e) {
          var t = [];
          for (var _n9 of e)
            (_n9.$createDOM || _n9.$getDOMSlot || _n9.$decorateDOM) &&
              t.push(ee(_n9));
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
      _proto.getSessionConfig = function getSessionConfig() {
        var e =
          this.editor._config.dom ||
          require("Lexical").DEFAULT_EDITOR_DOM_CONFIG;
        if (!this.hasSessionGates) return e;
        var n = J(f(E, this.editor) || this.editorContext),
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
            ((i = K(this.initialEditorConfig, { overrides: r })),
            this.sessionCache.set(s, i)),
          i
        );
      };
      return te;
    })();
    var ne = {
        build: function build(e, t, n) {
          var _n$getInitResult = n.getInitResult(),
            o = _n$getInitResult.initialEditorConfig,
            r = Q(t.contextDefaults);
          return { defaults: r, runtime: new _te(e, o, t.overrides, r) };
        },
        config: { contextDefaults: [], overrides: [] },
        html: {
          export: new Map([
            [
              (_require_Lexical = require("Lexical")).RootNode,
              function () {
                var e = require("Lexical").$getDocument().createElement("div");
                return ((e.role = "textbox"), { element: e });
              },
            ],
          ]),
        },
        init: function init(e, t) {
          var n = { dom: e.dom, nodes: e.nodes },
            o = Q(t.contextDefaults),
            r = Z(t.overrides, o);
          return ((e.dom = K(e, { overrides: r })), { initialEditorConfig: n });
        },
        mergeConfig: function mergeConfig(e, n) {
          var o = require("Lexical").shallowMergeConfig(e, n);
          for (var _t9 of ["overrides", "contextDefaults"])
            n[_t9] &&
              (o[_t9] = [].concat(Array.from(e[_t9]), Array.from(n[_t9])));
          return o;
        },
        name: S,
      },
      oe = Symbol["for"]("@lexical/html/SelectorImpl");
    function re(e, n) {
      var _ref3;
      var o = {
        kind: "element",
        predicate:
          ((r = n),
          0 === r.length
            ? require("Lexical").isHTMLElement
            : 1 === r.length
              ? r[0]
              : function (e, t) {
                  for (var _n0 of r) if (!_n0(e, t)) return !1;
                  return !0;
                }),
        tags: e,
      };
      var r;
      var s = function s(t) {
        return re(e, [].concat(Array.from(n), [t]));
      };
      return (
        (_ref3 = {}),
        (_ref3[oe] = o),
        (_ref3.attr = function attr(e, t, n) {
          return s(ce(e, t, n));
        }),
        (_ref3.classAll = function classAll() {
          for (
            var _len2 = arguments.length, e = new Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          ) {
            e[_key2] = arguments[_key2];
          }
          return s(ie(e));
        }),
        (_ref3.classAny = function classAny() {
          for (
            var _len3 = arguments.length, e = new Array(_len3), _key3 = 0;
            _key3 < _len3;
            _key3++
          ) {
            e[_key3] = arguments[_key3];
          }
          return s(
            (function (e) {
              var n = se(e);
              return 0 === n.length
                ? function () {
                    return !1;
                  }
                : function (e) {
                    if (!require("Lexical").isHTMLElement(e)) return !1;
                    var o = e.classList;
                    for (var _e12 of n) if (o.contains(_e12)) return !0;
                    return !1;
                  };
            })(e),
          );
        }),
        (_ref3.styleAny = function styleAny(e, n, o) {
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
                var _r7 = o && o.capture,
                  _s3 = n;
                return function (n, o) {
                  if (!require("Lexical").isHTMLElement(n)) return !1;
                  var i = n.style.getPropertyValue(e);
                  if (!i) return !1;
                  var c = i.match(_s3);
                  return null !== c && (void 0 !== _r7 && (o[_r7] = c), !0);
                };
              }
              c(362, JSON.stringify(e));
            })(e, n, o),
          );
        }),
        _ref3
      );
    }
    function se(e) {
      var t = [];
      for (var _n1 of e) _n1 && t.push(_n1);
      return t;
    }
    function ie(e) {
      var n = se(e);
      return 0 === n.length
        ? function () {
            return !0;
          }
        : function (e) {
            if (!require("Lexical").isHTMLElement(e)) return !1;
            var o = e.classList;
            for (var _e13 of n) if (!o.contains(_e13)) return !1;
            return !0;
          };
    }
    function ce(e, n, o) {
      if (!0 === n)
        return function (n) {
          return require("Lexical").isHTMLElement(n) && n.hasAttribute(e);
        };
      if ("string" == typeof n)
        return function (o) {
          return require("Lexical").isHTMLElement(o) && o.getAttribute(e) === n;
        };
      if (n instanceof RegExp) {
        var _r8 = o && o.capture,
          _s4 = n;
        return function (n, o) {
          if (!require("Lexical").isHTMLElement(n)) return !1;
          var i = n.getAttribute(e);
          if (null == i) return !1;
          var c = i.match(_s4);
          return null !== c && (void 0 !== _r8 && (o[_r8] = c), !0);
        };
      }
      c(361, JSON.stringify(e));
    }
    function le(e) {
      var _ref4;
      return ((_ref4 = {}), (_ref4[oe] = e), _ref4);
    }
    var ue = le({
        kind: "text",
        predicate: _require_Lexical.isDOMTextNode,
        tags: new Set(),
      }),
      ae = le({
        kind: "comment",
        predicate: function predicate(e) {
          return 8 === e.nodeType;
        },
        tags: new Set(),
      });
    function fe() {
      return re(new Set(), []);
    }
    function de() {
      return ae;
    }
    function pe() {
      for (
        var _len4 = arguments.length, e = new Array(_len4), _key4 = 0;
        _key4 < _len4;
        _key4++
      ) {
        e[_key4] = arguments[_key4];
      }
      e.length > 0 || c(363);
      var t = new Set();
      for (var _n10 of e) t.add(_n10.toUpperCase());
      return re(t, []);
    }
    function he() {
      return ue;
    }
    var me = { any: fe, comment: de, tag: pe, text: he },
      ge = /[A-Za-z0-9_-]/;
    var _xe = (function () {
      function xe(e, t) {
        ((this.source = e), (this.pos = t));
      }
      var _proto2 = xe.prototype;
      _proto2.peek = function peek(e) {
        if (e === void 0) {
          e = 0;
        }
        return this.source[this.pos + e] || "";
      };
      _proto2.consume = function consume() {
        return this.source[this.pos++] || "";
      };
      _proto2.eof = function eof() {
        return this.pos >= this.source.length;
      };
      _proto2.skipWhitespace = function skipWhitespace() {
        for (; !this.eof() && /\s/.test(this.peek()); ) this.pos++;
      };
      _proto2.readIdent = function readIdent() {
        var e = this.pos;
        for (; !this.eof() && ge.test(this.peek()); ) this.pos++;
        return this.source.slice(e, this.pos);
      };
      _proto2.readQuoted = function readQuoted() {
        var e = this.consume();
        this.assert('"' === e || "'" === e, "expected quote");
        var t = this.pos;
        for (; !this.eof() && this.peek() !== e; )
          "\\" === this.peek() ? (this.pos += 2) : this.pos++;
        this.assert(!this.eof(), "unterminated string");
        var n = this.source.slice(t, this.pos);
        return (this.pos++, n.replace(/\\(.)/g, "$1"));
      };
      _proto2.assert = function assert(e, t) {
        e || c(364, String(this.pos + 1), t, this.source);
      };
      return xe;
    })();
    function $e(e) {
      var t = new Set(),
        n = [],
        o = [];
      var r = !1;
      if ((e.skipWhitespace(), "*" === e.peek())) (e.consume(), (r = !0));
      else if (ge.test(e.peek())) {
        var _n11 = e.readIdent();
        _n11 && t.add(_n11.toUpperCase());
      }
      for (; !e.eof(); ) {
        var _t0 = e.peek();
        if ("." === _t0) {
          e.consume();
          var _t1 = e.readIdent();
          (e.assert("" !== _t1, 'expected class name after "."'), o.push(_t1));
        } else if ("#" === _t0) {
          e.consume();
          var _t10 = e.readIdent();
          (e.assert("" !== _t10, 'expected id after "#"'),
            n.push(ce("id", _t10)));
        } else {
          if ("[" !== _t0) break;
          {
            (e.consume(), e.skipWhitespace());
            var _t11 = e.readIdent();
            (e.assert("" !== _t11, 'expected attribute name after "["'),
              e.skipWhitespace());
            var _o6 = !0;
            if ("=" === e.peek()) {
              (e.consume(), e.skipWhitespace());
              var _t12 = e.peek();
              ('"' === _t12 || "'" === _t12
                ? (_o6 = e.readQuoted())
                : ((_o6 = e.readIdent()),
                  e.assert("" !== _o6, "expected attribute value")),
                e.skipWhitespace());
            }
            (e.assert("]" === e.peek(), 'expected "]"'),
              e.consume(),
              n.push(ce(_t11, _o6)));
          }
        }
      }
      return (
        o.length > 0 && n.push(ie(o)),
        e.assert(r || t.size > 0 || n.length > 0, "expected a selector"),
        { predicates: n, tags: t }
      );
    }
    function ye(e) {
      var t = new _xe(e, 0),
        n = [];
      for (; n.push($e(t)), t.skipWhitespace(), !t.eof(); )
        (t.assert(
          "," === t.peek(),
          'expected "," (selector lists are the only supported combinator)',
        ),
          t.consume(),
          t.skipWhitespace());
      if (1 === n.length) return re(n[0].tags, n[0].predicates);
      var o = new Set();
      if (
        n.every(function (e) {
          return e.tags.size > 0;
        })
      )
        for (var _e14 of n) for (var _t13 of _e14.tags) o.add(_t13);
      return re(o, [
        function (e, t) {
          for (var _o7 of n) {
            var _n12 = e.nodeName;
            if (_o7.tags.size > 0 && !_o7.tags.has(_n12)) continue;
            var _r9 = !0;
            for (var _n13 of _o7.predicates)
              if (!_n13(e, t)) {
                _r9 = !1;
                break;
              }
            if (_r9) return !0;
          }
          return !1;
        },
      ]);
    }
    function Te(e, t, n) {
      return $(D, e, t, n);
    }
    var Se = Te("importSource", function () {
        return "unknown";
      }),
      Ee = Te("importSourceDataTransfer", function () {
        return null;
      }),
      Oe = Te("textFormat", function () {
        return 0;
      }),
      De = Te("textStyle", function () {
        return {};
      });
    function Ce(e) {
      if (!require("Lexical").isHTMLElement(e)) return !1;
      if ("PRE" === e.nodeName) return !0;
      var n = e.style.whiteSpace;
      return "string" == typeof n && n.startsWith("pre");
    }
    function Ne(e) {
      if (require("Lexical").isDOMTextNode(e)) return !0;
      if (!require("Lexical").isHTMLElement(e)) return !1;
      var n = e.style.display;
      return n
        ? n.startsWith("inline")
        : !require("Lexical").isBlockDomNode(e) &&
            require("Lexical").isInlineDomNode(e);
    }
    var Ie = Te("whitespaceConfig", function () {
        return { isInline: Ne, preservesWhitespace: Ce };
      }),
      Me = Te("importOverlays", function () {
        return [];
      });
    var _Re = (function () {
      function Re(e) {
        this.record = e;
      }
      var _proto3 = Re.prototype;
      _proto3.get = function get(e) {
        return u(this.record, e);
      };
      _proto3.set = function set(e, t) {
        this.record[e.key] = t;
      };
      _proto3.update = function update(e, t) {
        this.record[e.key] = t(u(this.record, e));
      };
      _proto3.has = function has(e) {
        return Object.prototype.hasOwnProperty.call(this.record, e.key);
      };
      return Re;
    })();
    function _e(e) {
      var t =
        require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(
          e,
          O,
        );
      return t ? t.output.defaults : void 0;
    }
    function ve(e, n) {
      if (n === void 0) {
        n = require("Lexical").$getEditor();
      }
      return u(
        (function (e) {
          return f(D, e) || _e(e);
        })(n),
        e,
      );
    }
    var ke = x(D, _e);
    function be(e) {
      return (
        require("Lexical").$isBlockElementNode(e) ||
        (require("Lexical").$isDecoratorNode(e) && !e.isInline())
      );
    }
    function Ae(e, n) {
      if (!require("Lexical").isHTMLElement(n)) return e;
      var o = n.style.textAlign;
      if (!Ue(o)) return e;
      for (var _n14 of e)
        require("Lexical").$isBlockElementNode(_n14) &&
          "" === _n14.getFormatType() &&
          _n14.setFormat(o);
      return e;
    }
    function we(e, n, o) {
      1 === e.length && require("Lexical").$isLineBreakNode(e[0]) && (e = []);
      var r = require("Lexical").$createParagraphNode();
      if (require("Lexical").isHTMLElement(o)) {
        var _e15 = o.style.textAlign;
        Ue(_e15) && r.setFormat(_e15);
      }
      return [r.splice(0, 0, e)];
    }
    var Fe = { $accepts: be, $packageRun: we, name: "BlockSchema" },
      Le = {
        $accepts: function $accepts(e) {
          return !be(e);
        },
        name: "InlineSchema",
      },
      Pe = {
        $accepts: be,
        $packageRun: function $packageRun(e) {
          return e;
        },
        name: "NestedBlockSchema",
      },
      Be = { $accepts: be, $packageRun: we, name: "RootSchema" },
      He = me,
      We = new Set(["center", "end", "justify", "left", "right", "start"]);
    function Ue(e) {
      return We.has(e);
    }
    var ze = {
        B: { fontWeight: "bold" },
        EM: { fontStyle: "italic" },
        I: { fontStyle: "italic" },
        S: { textDecoration: "line-through" },
        STRONG: { fontWeight: "bold" },
        SUB: { verticalAlign: "sub" },
        SUP: { verticalAlign: "super" },
        U: { textDecoration: "underline" },
      },
      je = {
        CODE: _require_Lexical.IS_CODE,
        MARK: _require_Lexical.IS_HIGHLIGHT,
      },
      Ve = new Set([
        "font-weight",
        "font-style",
        "text-decoration",
        "text-transform",
        "vertical-align",
      ]),
      Ye = {
        $import: function $import(e, n) {
          var o = e.get(Oe),
            r = ze[n.nodeName],
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
                  var _e16 = i.split(" ");
                  (_e16.includes("underline") &&
                    (n |= require("Lexical").IS_UNDERLINE),
                    _e16.includes("line-through") &&
                      (n |= require("Lexical").IS_STRIKETHROUGH),
                    _e16.includes("none") &&
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
          var a = je[n.nodeName];
          return (
            a && (l |= a),
            l === o
              ? e.$importChildren(n)
              : e.$importChildren(n, { context: [m(Oe, l)] })
          );
        },
        match: He.tag(
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
    function qe(e, n, o) {
      var r = e;
      for (;;) {
        var _e17 = null;
        for (; null === (_e17 = n ? r.nextSibling : r.previousSibling); ) {
          var _e18 = r.parentNode;
          if (null === _e18) return null;
          r = _e18;
        }
        if (((r = _e17), !o.isInline(r))) return null;
        var _s5 = r;
        for (; null !== (_s5 = n ? r.firstChild : r.lastChild); ) r = _s5;
        if (require("Lexical").isDOMTextNode(r)) return r;
        if ("BR" === r.nodeName) return null;
      }
    }
    function Ge(e, n) {
      return 0 !== n && require("Lexical").$isTextNode(e) ? e.setFormat(n) : e;
    }
    function Xe(e, n) {
      if (require("Lexical").$isTextNode(e)) {
        var _t14 = (function (e) {
          var t = "";
          for (var _n15 in e)
            Ve.has(_n15) || (t += _n15 + ": " + e[_n15] + "; ");
          return t.trimEnd();
        })(n);
        "" !== _t14 && e.setStyle(_t14);
      }
      return e;
    }
    var Ke = {
        $import: function $import(e, n) {
          var o = e.get(Oe),
            r = e.get(De),
            s = e.get(Ie);
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
            var _e19 = require("Lexical").$generateNodesFromRawText(
              n.textContent || "",
            );
            for (var _t15 of _e19) (Ge(_t15, o), Xe(_t15, r));
            return _e19;
          }
          var i = (function (e, t) {
            var n = (e.textContent || "")
              .replace(/\r/g, "")
              .replace(/[ \t\n]+/g, " ");
            if (0 === n.length) return "";
            if (" " === n[0]) {
              var _o8 = e,
                _r0 = !0;
              for (; null !== _o8 && null !== (_o8 = qe(_o8, !1, t)); ) {
                var _e20 = _o8.textContent || "";
                if (_e20.length > 0) {
                  (/[ \t\n]$/.test(_e20) && (n = n.slice(1)), (_r0 = !1));
                  break;
                }
              }
              _r0 && (n = n.slice(1));
            }
            if (n.length > 0 && " " === n[n.length - 1]) {
              var _o9 = e,
                _r1 = !0;
              for (; null !== _o9 && null !== (_o9 = qe(_o9, !0, t)); )
                if (
                  (_o9.textContent || "").replace(/^( |\t|\r?\n)+/, "").length >
                  0
                ) {
                  _r1 = !1;
                  break;
                }
              _r1 && (n = n.slice(0, -1));
            }
            return n;
          })(n, s);
          if ("" === i) return [];
          var c = require("Lexical").$createTextNode(i);
          return (Ge(c, o), Xe(c, r), [c]);
        },
        match: He.text(),
        name: "@lexical/html/#text",
      },
      Je = {
        $import: function $import() {
          return [];
        },
        match: He.tag("script", "style"),
        name: "@lexical/html/script-style-ignore",
      },
      Qe = {
        $import: function $import(e, n) {
          return require("Lexical").isOnlyChildInBlockNode(n) ||
            require("Lexical").isLastChildInBlockNode(n)
            ? []
            : [require("Lexical").$createLineBreakNode()];
        },
        match: He.tag("br"),
        name: "@lexical/html/br",
      },
      Ze = {
        $import: function $import(e, n) {
          var o = require("Lexical").$createParagraphNode();
          if (
            (require("Lexical").$setFormatFromDOM(o, n),
            require("Lexical").setNodeIndentFromDOM(n, o),
            "" === o.getFormatType())
          ) {
            var _e21 = n.getAttribute("align");
            _e21 && Ue(_e21) && o.setFormat(_e21);
          }
          return (
            require("Lexical").$setDirectionFromDOM(o, n),
            [o.splice(0, 0, e.$importChildren(n))]
          );
        },
        match: He.tag("p"),
        name: "@lexical/html/p",
      },
      et = {
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
        match: He.tag("hr"),
        name: "@lexical/html/hr",
      },
      tt = [
        Je,
        Ze,
        et,
        {
          $import: function $import(e, n, o) {
            return require("Lexical").isBlockDomNode(n)
              ? Ae(e.$importChildren(n, { schema: Fe }), n)
              : o();
          },
          match: He.any(),
          name: "@lexical/html/transparent-block",
        },
        Ke,
        Qe,
        Ye,
      ];
    function nt(e, t) {
      var n = [];
      var o = 0,
        r = 0;
      for (; o < e.length && r < t.length; )
        e[o] <= t[r] ? n.push(e[o++]) : n.push(t[r++]);
      for (; o < e.length; ) n.push(e[o++]);
      for (; r < t.length; ) n.push(t[r++]);
      return n;
    }
    function ot(e) {
      var t = [],
        n = new Map(),
        o = [],
        r = [],
        s = [],
        i = new Set();
      e.forEach(function (e, l) {
        var u = (function (e) {
            var t = e[oe];
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
          for (var _e22 of u.tags) {
            var _t16 = n.get(_e22);
            (_t16 || ((_t16 = []), n.set(_e22, _t16)), _t16.push(l));
          }
      });
      var l = new Map();
      if (0 === o.length)
        for (var _ref6 of n) {
          var _e23 = _ref6[0];
          var _t17 = _ref6[1];
          l.set(_e23, _t17);
        }
      else
        for (var _ref8 of n) {
          var _e24 = _ref8[0];
          var _t18 = _ref8[1];
          l.set(_e24, nt(_t18, o));
        }
      return {
        byTag: l,
        commentIndices: s,
        rules: t,
        textIndices: r,
        wildcardIndices: o,
      };
    }
    function rt(e, n) {
      return require("Lexical").isDOMTextNode(n)
        ? e.textIndices
        : 8 === n.nodeType
          ? e.commentIndices
          : require("Lexical").isHTMLElement(n)
            ? e.byTag.get(n.nodeName) || e.wildcardIndices
            : st;
    }
    var st = Object.freeze([]);
    function it(e) {
      var t = [];
      for (var _n16 of e)
        if (ct(_n16)) for (var _e25 of _n16.rules) t.push(_e25);
        else t.push(_n16);
      return t;
    }
    function ct(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        "__type" in e &&
        "CompiledOverlayRules" === e.__type
      );
    }
    var lt = Object.freeze({});
    function ut(e, t) {
      var n = {
        $importChildren: function $importChildren(t, n) {
          return (function (e, t, n) {
            var o = n && n.rules ? n.rules.dispatch : void 0;
            o && e.overlays.push(o);
            try {
              var _o0 = function _o0() {
                return at(e, t, n);
              };
              return n && n.context ? ke(n.context, e.editor)(_o0) : _o0();
            } finally {
              o && e.overlays.pop();
            }
          })(e, t, n);
        },
        $importOne: function $importOne(t, n) {
          return ft(e, t, n);
        },
        captures: t,
        get: function get(t) {
          return ve(t, e.editor);
        },
        session: e.session,
      };
      return n;
    }
    function at(e, t, n) {
      var o = n && n.$onChild,
        r = [];
      for (var _n17 of Array.from(t.childNodes)) {
        var _t19 = ft(e, _n17, void 0);
        for (var _e26 of _t19) {
          var _t20 = o ? o(_e26) : _e26;
          null != _t20 && r.push(_t20);
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
                var _s6 = e.$packageRun(t, n, o);
                if (_s6.length > 0) {
                  for (var _e27 of _s6) r.push(_e27);
                  return;
                }
              }
              if ("hoist" === e.onReject) for (var _e28 of t) r.push(_e28);
            };
            for (var _o1 of t)
              e.$accepts(_o1, n)
                ? (i(), r.push(_o1))
                : (null === s && (s = []), s.push(_o1));
            return (i(), e.$finalize ? e.$finalize(r, n) : r);
          })(i, s, null, t)
        : s;
    }
    function ft(e, t, n) {
      var o = function o() {
        return (function (e, t) {
          var n = (function (e, t) {
            var n = [];
            for (var _o10 = e.overlays.length - 1; _o10 >= 0; _o10--) {
              var _r10 = e.overlays[_o10],
                _s7 = rt(_r10, t);
              _s7.length > 0 && n.push({ dispatch: _r10, indices: _s7 });
            }
            var o = rt(e.dispatch, t);
            return (
              o.length > 0 && n.push({ dispatch: e.dispatch, indices: o }),
              n
            );
          })(e, t);
          if (0 === n.length) return dt(e, t);
          var o = 0,
            r = 0;
          var _s8 = function s() {
            for (; o < n.length; ) {
              var _n$o = n[o],
                _i2 = _n$o.dispatch,
                _c = _n$o.indices;
              for (; r < _c.length; ) {
                var _n18 = _c[r++],
                  _o11 = _i2.rules[_n18],
                  _l = {};
                if (_o11.predicate(t, _l)) {
                  var _n19 = ut(e, 0 === Object.keys(_l).length ? lt : _l);
                  try {
                    return _o11.$import(_n19, t, _s8);
                  } catch (e) {
                    throw e;
                  }
                }
              }
              (o++, (r = 0));
            }
            return dt(e, t);
          };
          return _s8();
        })(e, t);
      };
      return n && n.context ? ke(n.context, e.editor)(o) : o();
    }
    function dt(e, t) {
      if (0 === t.childNodes.length) return [];
      var n = [];
      for (var _o12 of Array.from(t.childNodes)) {
        var _t21 = ft(e, _o12, void 0);
        for (var _e29 of _t21) n.push(_e29);
      }
      return n;
    }
    var pt = {
        $import: function $import(e, t) {
          return e.$importChildren(t);
        },
        match: me.any(),
        name: "@lexical/html/default-hoist",
      },
      ht = {
        build: function build(e, n) {
          var o = ot(it(n.rules)),
            r = p(n.contextDefaults, void 0),
            s = n.preprocess;
          return {
            $generateNodesFromDOM: function $generateNodesFromDOM(n, i) {
              var c = f(D, e) || r,
                l = i && i.context ? p(i.context, c) : c,
                u = void 0 !== l && l !== c ? l : Object.create(c || null),
                a = new _Re(u),
                d = { session: a };
              return (
                (function (e, t, n) {
                  var o = e.length - 1;
                  var _r11 = function r() {
                    for (; o >= 0; ) return void (0, e[o--])(t, n, _r11);
                  };
                  _r11();
                })(
                  i && i.preprocess
                    ? [].concat(Array.from(s), Array.from(i.preprocess))
                    : s,
                  n,
                  d,
                ),
                g(
                  D,
                  u,
                  function () {
                    return (function (e, n, o, r) {
                      return at(
                        {
                          dispatch: e,
                          editor: n,
                          overlays: r.get(Me).map(function (e) {
                            return e.dispatch;
                          }),
                          session: r,
                        },
                        require("Lexical").isDOMDocumentNode(o) ? o.body : o,
                        { schema: Be },
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
        config: { contextDefaults: [], preprocess: [y], rules: [pt] },
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
      mt = {
        dependencies: [[ht, { rules: tt }]],
        name: "@lexical/html/CoreImport",
      },
      gt = [et],
      xt = {
        dependencies: [
          require("LexicalExtensionHorizontalRuleExtension")
            .HorizontalRuleExtension,
          mt,
        ],
        name: "@lexical/html/HorizontalRuleImport",
      },
      $t = { any: fe, comment: de, css: ye, tag: pe, text: he },
      yt = new Set(["STYLE", "SCRIPT"]);
    function Tt(e, n, o) {
      if (n === void 0) {
        n = null;
      }
      if (o === void 0) {
        o = require("Lexical").$getEditor();
      }
      return k(
        [m(M, !0)],
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
          St(o, _e30, c, n, s);
        return e;
      });
    }
    function St(n, o, r, s, i) {
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
        var _t22 = St(n, _e31, $, x, i);
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
    function Et(e, n, o, r, s, i) {
      var _l2;
      if (s === void 0) {
        s = new Map();
      }
      var c = [];
      if (yt.has(e.nodeName)) return c;
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
          Array.from(Et(d[_e35], n, o, h, new Map(s), l)),
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
      return St(e, t, n.append.bind(n), o, v(e));
    }),
      (exports.$distributeInlineWrapper = function e(n, o) {
        var r = [];
        var s = [];
        var i = function i() {
          0 !== s.length && (r.push(o().splice(0, 0, s)), (s = []));
        };
        for (var _c3 of n)
          if (be(_c3)) {
            if ((i(), require("Lexical").$isElementNode(_c3))) {
              var _t25 = e(_c3.getChildren(), o);
              _c3.splice(0, _c3.getChildrenSize(), _t25);
            }
            r.push(_c3);
          } else s.push(_c3);
        return (i(), r);
      }),
      (exports.$generateDOMFromNodes = Tt),
      (exports.$generateDOMFromRoot = function (e, n) {
        if (n === void 0) {
          n = require("Lexical").$getRoot();
        }
        var o = require("Lexical").$getEditor();
        return k(
          [m(M, !0), m(I, !0)],
          o,
        )(function () {
          var t = v(o),
            r = e.append.bind(e);
          return (St(o, n, r, null, t), e);
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
          Tt(require("Lexical").$getDocument().createElement("div"), n, e)
            .innerHTML
        );
      }),
      (exports.$generateNodesFromDOM = function (e, n) {
        T(n);
        var o = require("Lexical").isDOMDocumentNode(n)
            ? n.body.childNodes
            : n.childNodes,
          r = [],
          s = [];
        for (var _t26 of o)
          if (!yt.has(_t26.nodeName)) {
            var _n22 = Et(_t26, e, s, !1);
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
          .$getExtensionOutput(ht)
          .$generateNodesFromDOM(e, t);
      }),
      (exports.$getImportContextValue = ve),
      (exports.$getRenderContextValue = function (e, n) {
        if (n === void 0) {
          n = require("Lexical").$getEditor();
        }
        return u(
          (function (e) {
            return f(E, e) || R(e);
          })(n),
          e,
        );
      }),
      (exports.$getSessionDOMRenderConfig = v),
      (exports.$inlineStylesFromStyleSheets = y),
      (exports.$isBlockLevel = be),
      (exports.$propagateTextAlignToBlockChildren = Ae),
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
        r && r.setContextValue(e, n(u(r.editorContext, e)));
      }),
      (exports.$withImportContext = ke),
      (exports.$withRenderContext = k),
      (exports.BlockSchema = Fe),
      (exports.CoreImportExtension = mt),
      (exports.CoreImportRules = tt),
      (exports.DOMImportExtension = ht),
      (exports.DOMRenderExtension = ne),
      (exports.HorizontalRuleImportExtension = xt),
      (exports.HorizontalRuleImportRules = gt),
      (exports.ImportOverlays = Me),
      (exports.ImportSource = Se),
      (exports.ImportSourceDataTransfer = Ee),
      (exports.ImportTextFormat = Oe),
      (exports.ImportTextStyle = De),
      (exports.ImportWhitespaceConfig = Ie),
      (exports.InlineSchema = Le),
      (exports.NestedBlockSchema = Pe),
      (exports.RenderContextExport = M),
      (exports.RenderContextRoot = I),
      (exports.RootSchema = Be),
      (exports.contextUpdater = function (e, t) {
        return { cfg: e, updater: t };
      }),
      (exports.contextValue = m),
      (exports.createImportState = Te),
      (exports.createRenderState = N),
      (exports.defaultIsInline = Ne),
      (exports.defaultPreservesWhitespace = Ce),
      (exports.defineImportRule = function (e) {
        return e;
      }),
      (exports.defineOverlayRules = function (e) {
        var t = it(e);
        return { __type: "CompiledOverlayRules", dispatch: ot(t), rules: t };
      }),
      (exports.domOverride = function (e, t, n) {
        return babelHelpers["extends"]({}, t, n, { nodes: e });
      }),
      (exports.isElementOfTag = function (e, n) {
        return (
          require("Lexical").isHTMLElement(e) && e.nodeName === n.toUpperCase()
        );
      }),
      (exports.parseSelector = ye),
      (exports.sel = $t));
  },
  null,
);
