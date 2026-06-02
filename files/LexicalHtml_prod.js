__d(
  "LexicalHtml.prod",
  ["Lexical", "LexicalExtension", "LexicalSelection", "LexicalUtils"],
  function $module_LexicalHtml_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _ce, _ue;
    var _require_Lexical;
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
    var s;
    function i(e, t) {
      var n = t.key;
      return e && n in e ? e[n] : t.defaultValue;
    }
    function c(e) {
      return s && s.editor === e ? s : void 0;
    }
    function l(e, t) {
      var n = c(t);
      return n && n[e];
    }
    function u(e, t) {
      if ("cfg" in t) {
        var _n = t.cfg,
          _o = t.updater;
        return [_n, _o(i(e, _n))];
      }
      return t;
    }
    function a(e, t) {
      var n = t;
      for (var _o2 of e) {
        var _u = u(n, _o2),
          _e3 = _u[0],
          _r = _u[1],
          _s = _e3.key;
        if (n === t && i(n, _e3) === _r) continue;
        var _c = n === t || void 0 === n ? f(t) : n;
        ((_c[_s] = _r), (n = _c));
      }
      return n;
    }
    function f(e) {
      return Object.create(e || null);
    }
    function d(e, t) {
      return [e, t];
    }
    function p(e, n, o, r) {
      if (r === void 0) {
        r = require("Lexical").$getEditor();
      }
      var i = s,
        l = c(r);
      try {
        var _babelHelpers$extends;
        return (
          (s = babelHelpers["extends"](
            {},
            l,
            ((_babelHelpers$extends = { editor: r }),
            (_babelHelpers$extends[e] = n),
            _babelHelpers$extends),
          )),
          o()
        );
      } finally {
        s = i;
      }
    }
    function h(e, n) {
      if (n === void 0) {
        n = function n() {};
      }
      return function (o, r) {
        if (r === void 0) {
          r = require("Lexical").$getEditor();
        }
        return function (t) {
          var s = c(r),
            i = s && s[e],
            l = a(o, i || n(r));
          return l && l !== i ? p(e, l, t, r) : t();
        };
      };
    }
    function m(e, n, o, r) {
      var _Object$assign;
      return Object.assign(
        require("Lexical").createState(Symbol(n), { isEqual: r, parse: o }),
        ((_Object$assign = {}), (_Object$assign[e] = !0), _Object$assign),
      );
    }
    var g = function g(e, t, n) {
      (x(e), n());
    };
    function x(e) {
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
          } catch (e) {
            continue;
          }
          for (var _e5 of Array.from(_r2)) {
            if (!require("LexicalUtils").objectKlassEquals(_e5, CSSStyleRule))
              continue;
            var _r3 = void 0;
            try {
              _r3 = o.querySelectorAll(_e5.selectorText);
            } catch (e) {
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
      } catch (e) {}
    }
    var y = "@lexical/html/DOM",
      $ = Symbol["for"]("@lexical/html/DOMExportContext"),
      S = "@lexical/html/DOMImport",
      E = Symbol["for"]("@lexical/html/DOMImportContext"),
      C = function C() {
        return !0;
      };
    function D(e, t, n) {
      return m($, e, t, n);
    }
    var N = D("root", Boolean),
      I = D("isExport", Boolean);
    function O(e) {
      var t = require("LexicalExtension").getPeerDependencyFromEditor(e, y);
      return t ? t.output.defaults : void 0;
    }
    function v(e) {
      var t = require("LexicalExtension").getPeerDependencyFromEditor(e, y);
      return t ? t.output.runtime : void 0;
    }
    function M(e) {
      if (e === void 0) {
        e = require("Lexical").$getEditor();
      }
      var n = v(e);
      return n
        ? n.getSessionConfig()
        : require("Lexical").$getEditorDOMRenderConfig(e);
    }
    var k = h($, O);
    function T(e) {
      return function (t) {
        return t instanceof e;
      };
    }
    function R(e, _ref) {
      var t = _ref.nodes;
      if ("*" === t) return C;
      var n = {};
      var o = [];
      for (var _s2 of t)
        if ("getType" in _s2) {
          var _t2 = _s2.getType();
          if (n) {
            var _o4 = e[_t2];
            (void 0 === _o4 && r(339, _s2.name, _t2),
              (n = Object.assign(n, _o4.types)));
          }
          o.push(T(_s2));
        } else ((n = void 0), o.push(_s2));
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
    function b(e) {
      return function (t, n, o) {
        return e(t, o);
      };
    }
    function w(e) {
      return function (t, n, o, r) {
        return e(t, n, r);
      };
    }
    function L(e) {
      return function (t, n, o, r, s) {
        return e(t, n, o, s);
      };
    }
    function A(e) {
      return function (t, n, o, r, s, i) {
        return e(t, n, o, r, i);
      };
    }
    function _(e, t) {
      return function (n, o) {
        var r = function r() {
            return e(n, o);
          },
          s = t(n);
        return s ? s(n, r, o) : r();
      };
    }
    function F(e, t) {
      return function (n, o, r) {
        var s = function s() {
            return e(n, o, r);
          },
          i = t(n);
        return i ? i(n, o, s, r) : s();
      };
    }
    var P = F,
      B = w;
    function H(e, t) {
      return function (n, o, r, s) {
        var i = function i() {
            return e(n, o, r, s);
          },
          c = t(n);
        return c ? c(n, o, r, i, s) : i();
      };
    }
    function W(e, t) {
      return function (n, o, r, s, i) {
        var c = function c() {
            return e(n, o, r, s, i);
          },
          l = t(n);
        return l ? l(n, o, r, s, c, i) : c();
      };
    }
    function U(e, t) {
      return function (n, o, r, s) {
        e(n, o, r, s);
        var i = t(n);
        i && i(n, o, r, s);
      };
    }
    function j(e, t, n, o, r) {
      var s = n[t];
      var _loop = function _loop() {
        if ("function" == typeof _n4[0]) {
          var _e6 = _n4[0],
            _t4 = _n4[1];
          s = o(s, function (n) {
            return (_e6(n) && _t4) || void 0;
          });
        } else {
          var _e7 = _n4[1],
            _t5 = {};
          for (var _n5 in _e7) {
            var _r5 = _e7[_n5];
            _r5 &&
              (_t5[_n5] = _r5.reduce(function (e, t) {
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
    function z(e, t, n, o) {
      if (!o) return;
      var r = e[t];
      if ("function" == typeof n) r.push([n, o]);
      else {
        var _e8 = r[r.length - 1];
        var _t6;
        _e8 && "types" === _e8[0]
          ? (_t6 = _e8[1])
          : ((_t6 = {}), r.push(["types", _t6]));
        for (var _e9 in n) {
          var _n6 = _t6[_e9] || [];
          ((_t6[_e9] = _n6), _n6.push(o));
        }
      }
    }
    function V(e) {
      return "*" === e.nodes;
    }
    function G(e, n) {
      var r = (function (e) {
          var n = {},
            _o$getKnownTypesAndNo =
              require("LexicalExtension").getKnownTypesAndNodes(e),
            r = _o$getKnownTypesAndNo.nodes;
          for (var _e0 of r) n[_e0.getType()] = { klass: _e0, types: {} };
          for (var _e1 of Object.values(n))
            if (_e1) {
              var _o5 = _e1.klass.getType();
              for (
                var _r6 = _e1.klass;
                require("Lexical").$isLexicalNode(_r6.prototype);
                _r6 = Object.getPrototypeOf(_r6)
              ) {
                var _t$getStaticNodeConfi =
                    require("Lexical").getStaticNodeConfig(_r6),
                  _e10 = _t$getStaticNodeConfi.ownNodeType,
                  _s3 = _e10 && n[_e10];
                _s3 && (_s3.types[_o5] = !0);
              }
            }
          return n;
        })(e),
        s = {
          $createDOM: [],
          $decorateDOM: [],
          $exportDOM: [],
          $extractWithChild: [],
          $getDOMSlot: [],
          $shouldExclude: [],
          $shouldInclude: [],
          $updateDOM: [],
        };
      for (var _e11 of (function (e) {
        var n = [],
          o = [],
          r = [];
        for (var _s4 of e)
          if (V(_s4)) n.push(_s4);
          else if (Array.isArray(_s4.nodes))
            for (var _e12 of _s4.nodes)
              require("Lexical").$isLexicalNode(_e12.prototype)
                ? r.push(
                    1 === _s4.nodes.length
                      ? _s4
                      : babelHelpers["extends"]({}, _s4, { nodes: [_e12] }),
                  )
                : o.push(
                    1 === _s4.nodes.length
                      ? _s4
                      : babelHelpers["extends"]({}, _s4, { nodes: [_e12] }),
                  );
        var s = new Map(),
          i = function i(e) {
            var n = s.get(e);
            if (void 0 === n) {
              n = 0;
              for (
                var _o6 = e;
                require("Lexical").$isLexicalNode(_o6.prototype);
                _o6 = Object.getPrototypeOf(_o6)
              )
                n++;
              s.set(e, n);
            }
            return n;
          };
        return (
          r.sort(function (e, t) {
            return i(e.nodes[0]) - i(t.nodes[0]);
          }),
          [].concat(r, o, n)
        );
      })(n)) {
        var _t7 = R(r, _e11);
        for (var _n7 in s) {
          z(s, _n7, _t7, _e11[_n7]);
        }
      }
      return s;
    }
    function q(e) {
      return e;
    }
    function K(e, _ref2) {
      var n = _ref2.overrides;
      var o = G(e, n),
        r = babelHelpers["extends"](
          {},
          require("Lexical").DEFAULT_EDITOR_DOM_CONFIG,
          e.dom,
        );
      return (
        j(o, "$createDOM", r, _, b),
        j(o, "$exportDOM", r, _, b),
        j(o, "$extractWithChild", r, W, A),
        j(o, "$getDOMSlot", r, P, B),
        j(o, "$shouldExclude", r, F, w),
        j(o, "$shouldInclude", r, F, w),
        j(o, "$updateDOM", r, H, L),
        j(o, "$decorateDOM", r, U, q),
        r
      );
    }
    function J(e) {
      return {
        get: function get(t) {
          return i(e, t);
        },
      };
    }
    function Q(e) {
      var t = Object.create(null);
      return a(e, t) || t;
    }
    function Y(e, t) {
      var n = J(t);
      return e.filter(function (e) {
        return !(e.disabledForEditor && e.disabledForEditor(n));
      });
    }
    function Z(e) {
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
    var _X = (function () {
      function X(e, t, n, o) {
        this.sessionCache = new Map();
        ((this.editor = e),
          (this.initialEditorConfig = t),
          (this.overrides = n),
          (this.editorContext = o),
          (this.installed = Y(n, o)),
          (this.hasSessionGates = n.some(function (e) {
            return e.disabledForSession;
          })));
      }
      var _proto = X.prototype;
      _proto.setContextValue = function setContextValue(e, n) {
        var o = this.installed;
        this.editorContext[e.key] = n;
        var r = Y(this.overrides, this.editorContext);
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
          for (var _e13 of t) n.has(_e13) || r.push(_e13);
          return r;
        })(o, r);
        ((this.installed = r), this.sessionCache.clear());
        var i = K(this.initialEditorConfig, { overrides: r });
        this.editor._config.dom = i;
        var c = (function (e) {
          var t = [];
          for (var _n9 of e)
            (_n9.$createDOM || _n9.$getDOMSlot || _n9.$decorateDOM) &&
              t.push(Z(_n9));
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
        var n = J(l($, this.editor) || this.editorContext),
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
      return X;
    })();
    var ee = (_require_Lexical = require("Lexical")).defineExtension({
        build: function build(e, t, n) {
          var _n$getInitResult = n.getInitResult(),
            o = _n$getInitResult.initialEditorConfig,
            r = Q(t.contextDefaults);
          return { defaults: r, runtime: new _X(e, o, t.overrides, r) };
        },
        config: { contextDefaults: [], overrides: [] },
        html: {
          export: new Map([
            [
              _require_Lexical.RootNode,
              function () {
                var e = document.createElement("div");
                return ((e.role = "textbox"), { element: e });
              },
            ],
          ]),
        },
        init: function init(e, t) {
          var n = { dom: e.dom, nodes: e.nodes },
            o = Q(t.contextDefaults),
            r = Y(t.overrides, o);
          return ((e.dom = K(e, { overrides: r })), { initialEditorConfig: n });
        },
        mergeConfig: function mergeConfig(e, n) {
          var o = require("Lexical").shallowMergeConfig(e, n);
          for (var _t9 of ["overrides", "contextDefaults"])
            n[_t9] && (o[_t9] = [].concat(e[_t9], n[_t9]));
          return o;
        },
        name: y,
      }),
      te = Symbol["for"]("@lexical/html/SelectorImpl");
    function ne(e, n) {
      var _ref3;
      var o = {
        kind: "element",
        predicate:
          ((s = n),
          0 === s.length
            ? require("Lexical").isHTMLElement
            : 1 === s.length
              ? s[0]
              : function (e, t) {
                  for (var _n0 of s) if (!_n0(e, t)) return !1;
                  return !0;
                }),
        tags: e,
      };
      var s;
      var i = function i(t) {
        return ne(e, [].concat(n, [t]));
      };
      return (
        (_ref3 = {}),
        (_ref3[te] = o),
        (_ref3.attr = function attr(e, t, n) {
          return i(se(e, t, n));
        }),
        (_ref3.classAll = function classAll() {
          for (
            var _len2 = arguments.length, e = new Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          ) {
            e[_key2] = arguments[_key2];
          }
          return i(re(e));
        }),
        (_ref3.classAny = function classAny() {
          for (
            var _len3 = arguments.length, e = new Array(_len3), _key3 = 0;
            _key3 < _len3;
            _key3++
          ) {
            e[_key3] = arguments[_key3];
          }
          return i(
            (function (e) {
              var n = oe(e);
              if (0 === n.length)
                return function () {
                  return !1;
                };
              return function (e) {
                if (!require("Lexical").isHTMLElement(e)) return !1;
                var o = e.classList;
                for (var _e14 of n) if (o.contains(_e14)) return !0;
                return !1;
              };
            })(e),
          );
        }),
        (_ref3.styleAny = function styleAny(e, n, o) {
          return i(
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
                  _s5 = n;
                return function (n, o) {
                  if (!require("Lexical").isHTMLElement(n)) return !1;
                  var i = n.style.getPropertyValue(e);
                  if (!i) return !1;
                  var c = i.match(_s5);
                  return null !== c && (void 0 !== _r7 && (o[_r7] = c), !0);
                };
              }
              r(362, JSON.stringify(e));
            })(e, n, o),
          );
        }),
        _ref3
      );
    }
    function oe(e) {
      var t = [];
      for (var _n1 of e) _n1 && t.push(_n1);
      return t;
    }
    function re(e) {
      var n = oe(e);
      return 0 === n.length
        ? function () {
            return !0;
          }
        : function (e) {
            if (!require("Lexical").isHTMLElement(e)) return !1;
            var o = e.classList;
            for (var _e15 of n) if (!o.contains(_e15)) return !1;
            return !0;
          };
    }
    function se(e, n, o) {
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
          _s6 = n;
        return function (n, o) {
          if (!require("Lexical").isHTMLElement(n)) return !1;
          var i = n.getAttribute(e);
          if (null == i) return !1;
          var c = i.match(_s6);
          return null !== c && (void 0 !== _r8 && (o[_r8] = c), !0);
        };
      }
      r(361, JSON.stringify(e));
    }
    var ie = {
        kind: "text",
        predicate: _require_Lexical.isDOMTextNode,
        tags: new Set(),
      },
      ce = ((_ce = {}), (_ce[te] = ie), _ce),
      le = {
        kind: "comment",
        predicate: function predicate(e) {
          return 8 === e.nodeType;
        },
        tags: new Set(),
      },
      ue = ((_ue = {}), (_ue[te] = le), _ue),
      ae = {
        any: function any() {
          return ne(new Set(), []);
        },
        comment: function comment() {
          return ue;
        },
        tag: function tag() {
          for (
            var _len4 = arguments.length, e = new Array(_len4), _key4 = 0;
            _key4 < _len4;
            _key4++
          ) {
            e[_key4] = arguments[_key4];
          }
          e.length > 0 || r(363);
          var t = new Set();
          for (var _n10 of e) t.add(_n10.toUpperCase());
          return ne(t, []);
        },
        text: function text() {
          return ce;
        },
      };
    var fe = /[A-Za-z0-9_-]/;
    var _de = (function () {
      function de(e, t) {
        ((this.source = e), (this.pos = t));
      }
      var _proto2 = de.prototype;
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
        for (; !this.eof() && fe.test(this.peek()); ) this.pos++;
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
        e || r(364, String(this.pos + 1), t, this.source);
      };
      return de;
    })();
    function pe(e) {
      var t = new Set(),
        n = [],
        o = [];
      if ((e.skipWhitespace(), "*" === e.peek())) e.consume();
      else if (fe.test(e.peek())) {
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
            n.push(se("id", _t10)));
        } else {
          if ("[" !== _t0) break;
          {
            (e.consume(), e.skipWhitespace());
            var _t11 = e.readIdent();
            (e.assert("" !== _t11, 'expected attribute name after "["'),
              e.skipWhitespace());
            var _o7 = !0;
            if ("=" === e.peek()) {
              (e.consume(), e.skipWhitespace());
              var _t12 = e.peek();
              ('"' === _t12 || "'" === _t12
                ? (_o7 = e.readQuoted())
                : ((_o7 = e.readIdent()),
                  e.assert("" !== _o7, "expected attribute value")),
                e.skipWhitespace());
            }
            (e.assert("]" === e.peek(), 'expected "]"'),
              e.consume(),
              n.push(se(_t11, _o7)));
          }
        }
      }
      return (o.length > 0 && n.push(re(o)), { predicates: n, tags: t });
    }
    function he(e) {
      var t = new _de(e, 0),
        n = [];
      for (;;) {
        var _e16 = pe(t);
        if ((n.push(_e16), t.skipWhitespace(), t.eof())) break;
        (t.assert(
          "," === t.peek(),
          'expected "," (selector lists are the only supported combinator)',
        ),
          t.consume(),
          t.skipWhitespace());
      }
      if (1 === n.length) return ne(n[0].tags, n[0].predicates);
      var o = new Set();
      for (var _e17 of n) for (var _t13 of _e17.tags) o.add(_t13);
      return ne(o, [
        function (e, t) {
          for (var _o8 of n) {
            var _n12 = e.nodeName;
            if (_o8.tags.size > 0 && !_o8.tags.has(_n12)) continue;
            var _r9 = !0;
            for (var _n13 of _o8.predicates)
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
    function me(e) {
      return e;
    }
    function ge(e, t, n) {
      return m(E, e, t, n);
    }
    var xe = ge("importSource", function () {
        return "unknown";
      }),
      ye = ge("importSourceDataTransfer", function () {
        return null;
      }),
      $e = ge("textFormat", function () {
        return 0;
      }),
      Se = ge("textStyle", function () {
        return {};
      });
    function Ee(e) {
      if (!require("Lexical").isHTMLElement(e)) return !1;
      if ("PRE" === e.nodeName) return !0;
      var n = e.style.whiteSpace;
      return "string" == typeof n && n.startsWith("pre");
    }
    function Ce(e) {
      if (require("Lexical").isDOMTextNode(e)) return !0;
      if (!require("Lexical").isHTMLElement(e)) return !1;
      var n = e.style.display;
      return n
        ? n.startsWith("inline")
        : !require("Lexical").isBlockDomNode(e) &&
            require("Lexical").isInlineDomNode(e);
    }
    var De = ge("whitespaceConfig", function () {
        return { isInline: Ce, preservesWhitespace: Ee };
      }),
      Ne = ge("importOverlays", function () {
        return [];
      });
    var _Ie = (function () {
      function Ie(e) {
        this.record = e;
      }
      var _proto3 = Ie.prototype;
      _proto3.get = function get(e) {
        return i(this.record, e);
      };
      _proto3.set = function set(e, t) {
        this.record[e.key] = t;
      };
      _proto3.update = function update(e, t) {
        this.record[e.key] = t(i(this.record, e));
      };
      _proto3.has = function has(e) {
        return Object.prototype.hasOwnProperty.call(this.record, e.key);
      };
      return Ie;
    })();
    function Oe(e) {
      var t = require("LexicalExtension").getPeerDependencyFromEditor(e, S);
      return t ? t.output.defaults : void 0;
    }
    function ve(e, n) {
      if (n === void 0) {
        n = require("Lexical").$getEditor();
      }
      return i(
        (function (e) {
          return l(E, e) || Oe(e);
        })(n),
        e,
      );
    }
    var Me = h(E, Oe);
    function ke(e) {
      return (
        require("Lexical").$isBlockElementNode(e) ||
        (require("Lexical").$isDecoratorNode(e) && !e.isInline())
      );
    }
    function Te(e, n) {
      if (!require("Lexical").isHTMLElement(n)) return e;
      var o = n.style.textAlign;
      if (!Pe(o)) return e;
      for (var _n14 of e)
        require("Lexical").$isBlockElementNode(_n14) &&
          "" === _n14.getFormatType() &&
          _n14.setFormat(o);
      return e;
    }
    function Re(e, n, o) {
      1 === e.length && require("Lexical").$isLineBreakNode(e[0]) && (e = []);
      var r = require("Lexical").$createParagraphNode();
      if (require("Lexical").isHTMLElement(o)) {
        var _e18 = o.style.textAlign;
        Pe(_e18) && r.setFormat(_e18);
      }
      return [r.splice(0, 0, e)];
    }
    var be = { $accepts: ke, $packageRun: Re, name: "BlockSchema" },
      we = {
        $accepts: function $accepts(e) {
          return !ke(e);
        },
        name: "InlineSchema",
      },
      Le = {
        $accepts: ke,
        $packageRun: function $packageRun(e) {
          return e;
        },
        name: "NestedBlockSchema",
      },
      Ae = { $accepts: ke, $packageRun: Re, name: "RootSchema" },
      _e = ae,
      Fe = new Set(["center", "end", "justify", "left", "right", "start"]);
    function Pe(e) {
      return Fe.has(e);
    }
    var Be = {
        B: { fontWeight: "bold" },
        EM: { fontStyle: "italic" },
        I: { fontStyle: "italic" },
        S: { textDecoration: "line-through" },
        STRONG: { fontWeight: "bold" },
        SUB: { verticalAlign: "sub" },
        SUP: { verticalAlign: "super" },
        U: { textDecoration: "underline" },
      },
      He = {
        CODE: _require_Lexical.IS_CODE,
        MARK: _require_Lexical.IS_HIGHLIGHT,
      };
    var We = new Set([
      "font-weight",
      "font-style",
      "text-decoration",
      "vertical-align",
    ]);
    var Ue = {
      $import: function $import(e, n) {
        var o = e.get($e),
          r = Be[n.nodeName],
          s = (function (e) {
            return {
              fontStyle: e.style.fontStyle,
              fontWeight: e.style.fontWeight,
              textDecoration: e.style.textDecoration,
              verticalAlign: e.style.verticalAlign,
            };
          })(n),
          i = r
            ? ((c = r),
              {
                fontStyle: (l = s).fontStyle || c.fontStyle,
                fontWeight: l.fontWeight || c.fontWeight,
                textDecoration: l.textDecoration || c.textDecoration,
                verticalAlign: l.verticalAlign || c.verticalAlign,
              })
            : s;
        var c, l;
        var u =
          ((a = o),
          (f = (function (e) {
            var n = 0,
              o = 0;
            var r = e.fontWeight,
              s = e.fontStyle,
              i = e.textDecoration,
              c = e.verticalAlign;
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
              var _e19 = i.split(" ");
              (_e19.includes("underline") &&
                (n |= require("Lexical").IS_UNDERLINE),
                _e19.includes("line-through") &&
                  (n |= require("Lexical").IS_STRIKETHROUGH),
                _e19.includes("none") &&
                  (o |=
                    require("Lexical").IS_UNDERLINE |
                    require("Lexical").IS_STRIKETHROUGH));
            }
            return (
              "sub" === c
                ? ((n |= require("Lexical").IS_SUBSCRIPT),
                  (o |= require("Lexical").IS_SUPERSCRIPT))
                : "super" === c
                  ? ((n |= require("Lexical").IS_SUPERSCRIPT),
                    (o |= require("Lexical").IS_SUBSCRIPT))
                  : "baseline" === c &&
                    (o |=
                      require("Lexical").IS_SUBSCRIPT |
                      require("Lexical").IS_SUPERSCRIPT),
              { clear: o, set: n }
            );
          })(i)),
          (a & ~f.clear) | f.set);
        var a, f;
        var p = He[n.nodeName];
        return (
          p && (u |= p),
          u === o
            ? e.$importChildren(n)
            : e.$importChildren(n, { context: [d($e, u)] })
        );
      },
      match: _e.tag(
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
    function je(e, n, o) {
      var r = e;
      for (;;) {
        var _e20 = null;
        for (; null === (_e20 = n ? r.nextSibling : r.previousSibling); ) {
          var _e21 = r.parentNode;
          if (null === _e21) return null;
          r = _e21;
        }
        if (((r = _e20), !o.isInline(r))) return null;
        var _s7 = r;
        for (; null !== (_s7 = n ? r.firstChild : r.lastChild); ) r = _s7;
        if (require("Lexical").isDOMTextNode(r)) return r;
        if ("BR" === r.nodeName) return null;
      }
    }
    function ze(e, n) {
      return 0 !== n && require("Lexical").$isTextNode(e) ? e.setFormat(n) : e;
    }
    function Ve(e, n) {
      if (require("Lexical").$isTextNode(e)) {
        var _t14 = (function (e) {
          var t = "";
          for (var _n15 in e)
            We.has(_n15) || (t += _n15 + ": " + e[_n15] + "; ");
          return t.trimEnd();
        })(n);
        "" !== _t14 && e.setStyle(_t14);
      }
      return e;
    }
    var Ge = {
        $import: function $import(e, n) {
          var o = e.get($e),
            r = e.get(Se),
            s = e.get(De);
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
            var _e22 = require("Lexical").$generateNodesFromRawText(
              n.textContent || "",
            );
            for (var _t15 of _e22) (ze(_t15, o), Ve(_t15, r));
            return _e22;
          }
          var i = (function (e, t) {
            var n = (e.textContent || "")
              .replace(/\r/g, "")
              .replace(/[ \t\n]+/g, " ");
            if (0 === n.length) return "";
            if (" " === n[0]) {
              var _o9 = e,
                _r0 = !0;
              for (; null !== _o9 && null !== (_o9 = je(_o9, !1, t)); ) {
                var _e23 = _o9.textContent || "";
                if (_e23.length > 0) {
                  (/[ \t\n]$/.test(_e23) && (n = n.slice(1)), (_r0 = !1));
                  break;
                }
              }
              _r0 && (n = n.slice(1));
            }
            if (n.length > 0 && " " === n[n.length - 1]) {
              var _o0 = e,
                _r1 = !0;
              for (; null !== _o0 && null !== (_o0 = je(_o0, !0, t)); )
                if (
                  (_o0.textContent || "").replace(/^( |\t|\r?\n)+/, "").length >
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
          return (ze(c, o), Ve(c, r), [c]);
        },
        match: _e.text(),
        name: "@lexical/html/#text",
      },
      qe = {
        $import: function $import() {
          return [];
        },
        match: _e.tag("script", "style"),
        name: "@lexical/html/script-style-ignore",
      },
      Ke = {
        $import: function $import(e, n) {
          return require("Lexical").isOnlyChildInBlockNode(n) ||
            require("Lexical").isLastChildInBlockNode(n)
            ? []
            : [require("Lexical").$createLineBreakNode()];
        },
        match: _e.tag("br"),
        name: "@lexical/html/br",
      },
      Je = [
        qe,
        {
          $import: function $import(e, n) {
            var o = require("Lexical").$createParagraphNode();
            if (
              (require("Lexical").$setFormatFromDOM(o, n),
              require("Lexical").setNodeIndentFromDOM(n, o),
              "" === o.getFormatType())
            ) {
              var _e24 = n.getAttribute("align");
              _e24 && Pe(_e24) && o.setFormat(_e24);
            }
            return (
              require("Lexical").$setDirectionFromDOM(o, n),
              [o.splice(0, 0, e.$importChildren(n))]
            );
          },
          match: _e.tag("p"),
          name: "@lexical/html/p",
        },
        {
          $import: function $import(e, n, o) {
            return require("Lexical").isBlockDomNode(n)
              ? Te(e.$importChildren(n, { schema: be }), n)
              : o();
          },
          match: _e.any(),
          name: "@lexical/html/transparent-block",
        },
        Ge,
        Ke,
        Ue,
      ];
    function Qe(e, t) {
      var n = [];
      var o = 0,
        r = 0;
      for (; o < e.length && r < t.length; )
        e[o] <= t[r] ? n.push(e[o++]) : n.push(t[r++]);
      for (; o < e.length; ) n.push(e[o++]);
      for (; r < t.length; ) n.push(t[r++]);
      return n;
    }
    function Ye(e) {
      var t = [],
        n = new Map(),
        o = [],
        s = [],
        i = [],
        c = new Set();
      e.forEach(function (e, l) {
        var u = (function (e) {
            var t = e[te];
            return (void 0 === t && r(360), t);
          })(e.match),
          a =
            e.name ||
            (function (e, t) {
              if ("text" === e.kind) return "#text@" + t;
              if ("comment" === e.kind) return "#comment@" + t;
              if (0 === e.tags.size) return "*@" + t;
              var n = Array.from(e.tags).join(",").toLowerCase();
              return n + "@" + t;
            })(u, l);
        if (
          (e.name && c.add(e.name),
          t.push({ $import: e.$import, name: a, predicate: u.predicate }),
          "text" === u.kind)
        )
          s.push(l);
        else if ("comment" === u.kind) i.push(l);
        else if (0 === u.tags.size) o.push(l);
        else
          for (var _e25 of u.tags) {
            var _t16 = n.get(_e25);
            (_t16 || ((_t16 = []), n.set(_e25, _t16)), _t16.push(l));
          }
      });
      var l = new Map();
      if (0 === o.length)
        for (var _ref5 of n) {
          var _e26 = _ref5[0];
          var _t17 = _ref5[1];
          l.set(_e26, _t17);
        }
      else
        for (var _ref7 of n) {
          var _e27 = _ref7[0];
          var _t18 = _ref7[1];
          l.set(_e27, Qe(_t18, o));
        }
      return {
        byTag: l,
        commentIndices: i,
        rules: t,
        textIndices: s,
        wildcardIndices: o,
      };
    }
    function Ze(e, n) {
      return require("Lexical").isDOMTextNode(n)
        ? e.textIndices
        : 8 === n.nodeType
          ? e.commentIndices
          : require("Lexical").isHTMLElement(n)
            ? e.byTag.get(n.nodeName) || e.wildcardIndices
            : Xe;
    }
    var Xe = Object.freeze([]);
    function et(e) {
      var t = [];
      for (var _n16 of e)
        if (tt(_n16)) for (var _e28 of _n16.rules) t.push(_e28);
        else t.push(_n16);
      return t;
    }
    function tt(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        "__type" in e &&
        "CompiledOverlayRules" === e.__type
      );
    }
    var nt = Object.freeze({});
    function ot(e, t) {
      var n = {
        $importChildren: function $importChildren(t, n) {
          return (function (e, t, n) {
            var o = n && n.rules ? n.rules.dispatch : void 0;
            o && e.overlays.push(o);
            try {
              var _o1 = function _o1() {
                return rt(e, t, n);
              };
              return n && n.context ? Me(n.context, e.editor)(_o1) : _o1();
            } finally {
              o && e.overlays.pop();
            }
          })(e, t, n);
        },
        $importOne: function $importOne(t, n) {
          return st(e, t, n);
        },
        captures: t,
        get: function get(t) {
          return ve(t, e.editor);
        },
        session: e.session,
      };
      return n;
    }
    function rt(e, t, n) {
      var o = n && n.$onChild,
        r = [];
      for (var _n17 of Array.from(t.childNodes)) {
        var _t19 = st(e, _n17, void 0);
        for (var _e29 of _t19) {
          var _t20 = o ? o(_e29) : _e29;
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
                var _s8 = e.$packageRun(t, n, o);
                if (_s8.length > 0) {
                  for (var _e30 of _s8) r.push(_e30);
                  return;
                }
              }
              if ("hoist" === e.onReject) for (var _e31 of t) r.push(_e31);
            };
            for (var _o10 of t)
              e.$accepts(_o10, n)
                ? (i(), r.push(_o10))
                : (null === s && (s = []), s.push(_o10));
            return (i(), e.$finalize ? e.$finalize(r, n) : r);
          })(i, s, null, t)
        : s;
    }
    function st(e, t, n) {
      var o = function o() {
        return (function (e, t) {
          var n = (function (e, t) {
            var n = [];
            for (var _o11 = e.overlays.length - 1; _o11 >= 0; _o11--) {
              var _r10 = e.overlays[_o11],
                _s9 = Ze(_r10, t);
              _s9.length > 0 && n.push({ dispatch: _r10, indices: _s9 });
            }
            var o = Ze(e.dispatch, t);
            o.length > 0 && n.push({ dispatch: e.dispatch, indices: o });
            return n;
          })(e, t);
          if (0 === n.length) return it(e, t);
          var o = 0,
            r = 0;
          var _s0 = function s() {
            for (; o < n.length; ) {
              var _n$o = n[o],
                _i = _n$o.dispatch,
                _c2 = _n$o.indices;
              for (; r < _c2.length; ) {
                var _n18 = _c2[r++],
                  _o12 = _i.rules[_n18],
                  _l = {};
                if (_o12.predicate(t, _l)) {
                  var _n19 = ot(e, 0 === Object.keys(_l).length ? nt : _l);
                  try {
                    return _o12.$import(_n19, t, _s0);
                  } catch (e) {
                    throw e;
                  }
                }
              }
              (o++, (r = 0));
            }
            return it(e, t);
          };
          return _s0();
        })(e, t);
      };
      return n && n.context ? Me(n.context, e.editor)(o) : o();
    }
    function it(e, t) {
      if (0 === t.childNodes.length) return [];
      var n = [];
      for (var _o13 of Array.from(t.childNodes)) {
        var _t21 = st(e, _o13, void 0);
        for (var _e32 of _t21) n.push(_e32);
      }
      return n;
    }
    var ct = {
        $import: function $import(e, t) {
          return e.$importChildren(t);
        },
        match: ae.any(),
        name: "@lexical/html/default-hoist",
      },
      lt = _require_Lexical.defineExtension({
        build: function build(e, n) {
          var o = Ye(et(n.rules)),
            r = a(n.contextDefaults, void 0),
            s = n.preprocess;
          return {
            $generateNodesFromDOM: function $generateNodesFromDOM(n, i) {
              var c = i && i.context ? a(i.context, r) : r,
                l = void 0 !== c && c !== r ? c : Object.create(r || null),
                u = new _Ie(l),
                f = { session: u };
              return (
                (function (e, t, n) {
                  var o = e.length - 1;
                  var _r11 = function r() {
                    for (; o >= 0; ) return void (0, e[o--])(t, n, _r11);
                  };
                  _r11();
                })(i && i.preprocess ? [].concat(s, i.preprocess) : s, n, f),
                p(
                  E,
                  l,
                  function () {
                    return (function (e, n, o, r) {
                      return rt(
                        {
                          dispatch: e,
                          editor: n,
                          overlays: r.get(Ne).map(function (e) {
                            return e.dispatch;
                          }),
                          session: r,
                        },
                        require("Lexical").isDOMDocumentNode(o) ? o.body : o,
                        { schema: Ae },
                      );
                    })(o, e, n, u);
                  },
                  e,
                )
              );
            },
            defaults: r,
          };
        },
        config: { contextDefaults: [], preprocess: [g], rules: [ct] },
        mergeConfig: function mergeConfig(e, n) {
          return require("Lexical").shallowMergeConfig(
            e,
            babelHelpers["extends"](
              {},
              n,
              n.contextDefaults && {
                contextDefaults: [].concat(
                  e.contextDefaults,
                  n.contextDefaults,
                ),
              },
              n.preprocess && {
                preprocess: [].concat(e.preprocess, n.preprocess),
              },
              n.rules && { rules: [].concat(n.rules, e.rules) },
            ),
          );
        },
        name: S,
      });
    var ut = _require_Lexical.defineExtension({
        dependencies: [_require_Lexical.configExtension(lt, { rules: Je })],
        name: "@lexical/html/CoreImport",
      }),
      at = [
        {
          $import: function $import() {
            return [require("LexicalExtension").$createHorizontalRuleNode()];
          },
          match: ae.tag("hr"),
          name: "@lexical/html/hr",
        },
      ],
      ft = _require_Lexical.defineExtension({
        dependencies: [
          require("LexicalExtension").HorizontalRuleExtension,
          _require_Lexical.configExtension(lt, { rules: at }),
        ],
        name: "@lexical/html/HorizontalRuleImport",
      }),
      dt = {
        any: ae.any,
        comment: ae.comment,
        css: he,
        tag: ae.tag,
        text: ae.text,
      },
      pt = new Set(["STYLE", "SCRIPT"]);
    function ht(e, n, o) {
      if (n === void 0) {
        n = null;
      }
      if (o === void 0) {
        o = require("Lexical").$getEditor();
      }
      return k(
        [d(I, !0)],
        o,
      )(function () {
        var r = require("Lexical").$getRoot(),
          s = M(o),
          i = e.append.bind(e);
        for (var _e33 of r.getChildren()) mt(o, _e33, i, n, s);
        return e;
      });
    }
    function mt(n, o, r, s, i) {
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
      var m = document.createDocumentFragment(),
        g = h
          ? h()
          : require("Lexical").$isElementNode(u)
            ? u.getChildren()
            : [],
        x = m.append.bind(m);
      for (var _e34 of g) {
        var _t22 = mt(n, _e34, x, s, i);
        !c && _t22 && i.$extractWithChild(o, _e34, s, "html", n) && (c = !0);
      }
      if (c && !l) {
        if (
          ((require("Lexical").isHTMLElement(f) ||
            require("Lexical").isDocumentFragment(f)) &&
            (p ? p(m) : f.append(m)),
          r(f),
          d)
        ) {
          var _e35 = d.call(u, f);
          _e35 &&
            (require("Lexical").isDocumentFragment(f)
              ? f.replaceChildren(_e35)
              : f.replaceWith(_e35));
        }
      } else r(m);
      return c;
    }
    function gt(e, n, o, r, s, i) {
      var _l2;
      if (s === void 0) {
        s = new Map();
      }
      var c = [];
      if (pt.has(e.nodeName)) return c;
      var l = null;
      var u = (function (e, t) {
          var n = e.nodeName,
            o = t._htmlConversions.get(n.toLowerCase());
          var r = null;
          if (void 0 !== o)
            for (var _t23 of o) {
              var _n20 = _t23(e);
              null !== _n20 &&
                (null === r || (r.priority || 0) <= (_n20.priority || 0)) &&
                (r = _n20);
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
          for (var _ref9 of s) {
            var _e36 = _ref9[1];
            if (((l = _e36(l, i)), !l)) break;
          }
          l && c.push.apply(c, Array.isArray(_t24) ? _t24 : [l]);
        }
        null != a.forChild && s.set(e.nodeName, a.forChild);
      }
      var d = e.childNodes;
      var p = [];
      var h =
        (null == l || !require("Lexical").$isRootOrShadowRoot(l)) &&
        ((null != l && require("Lexical").$isBlockElementNode(l)) || r);
      for (var _e37 = 0; _e37 < d.length; _e37++) {
        var _p;
        (_p = p).push.apply(_p, gt(d[_e37], n, o, h, new Map(s), l));
      }
      if (
        (null != f && (p = f(p)),
        require("Lexical").isBlockDomNode(e) &&
          (p = xt(
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
              if (null == e.nextSibling || null == e.previousSibling) return !1;
              return (
                require("Lexical").isInlineDomNode(e.nextSibling) &&
                require("Lexical").isInlineDomNode(e.previousSibling)
              );
            })(e) &&
            c.push(require("Lexical").$createLineBreakNode());
      } else
        require("Lexical").$isElementNode(l) && (_l2 = l).append.apply(_l2, p);
      return c;
    }
    function xt(e, n, o) {
      var r = e.style.textAlign,
        s = [];
      var i = [];
      for (var _e39 = 0; _e39 < n.length; _e39++) {
        var _c3 = n[_e39];
        if (require("Lexical").$isBlockElementNode(_c3))
          (r && !_c3.getFormat() && _c3.setFormat(r), s.push(_c3));
        else if (
          (i.push(_c3),
          _e39 === n.length - 1 ||
            (_e39 < n.length - 1 &&
              require("Lexical").$isBlockElementNode(n[_e39 + 1])))
        ) {
          var _e40 = o();
          (_e40.setFormat(r),
            _e40.append.apply(_e40, i),
            s.push(_e40),
            (i = []));
        }
      }
      return s;
    }
    ((exports.$distributeInlineWrapper = function e(n, o) {
      var r = [];
      var s = [];
      var i = function i() {
        0 !== s.length && (r.push(o().splice(0, 0, s)), (s = []));
      };
      for (var _c4 of n)
        if (ke(_c4)) {
          if ((i(), require("Lexical").$isElementNode(_c4))) {
            var _t25 = e(_c4.getChildren(), o);
            _c4.splice(0, _c4.getChildrenSize(), _t25);
          }
          r.push(_c4);
        } else s.push(_c4);
      return (i(), r);
    }),
      (exports.$generateDOMFromNodes = ht),
      (exports.$generateDOMFromRoot = function (e, n) {
        if (n === void 0) {
          n = require("Lexical").$getRoot();
        }
        var o = require("Lexical").$getEditor();
        return k(
          [d(I, !0), d(N, !0)],
          o,
        )(function () {
          var t = M(o),
            r = e.append.bind(e);
          return (mt(o, n, r, null, t), e);
        });
      }),
      (exports.$generateHtmlFromNodes = function (e, n) {
        if (n === void 0) {
          n = null;
        }
        return (
          ("undefined" == typeof document ||
            ("undefined" == typeof window && void 0 === global.window)) &&
            r(338),
          require("Lexical").$assumeActiveEditor(e),
          ht(document.createElement("div"), n, e).innerHTML
        );
      }),
      (exports.$generateNodesFromDOM = function (e, n) {
        x(n);
        var o = require("Lexical").isDOMDocumentNode(n)
            ? n.body.childNodes
            : n.childNodes,
          r = [],
          s = [];
        for (var _t26 of o)
          if (!pt.has(_t26.nodeName)) {
            var _n21 = gt(_t26, e, s, !1);
            if (null !== _n21) for (var _e41 of _n21) r.push(_e41);
          }
        return (
          (function (e) {
            for (var _n22 of e)
              _n22.getParent() &&
                _n22.getNextSibling() instanceof
                  require("Lexical").ArtificialNode__DO_NOT_USE &&
                _n22.insertAfter(require("Lexical").$createLineBreakNode());
            for (var _t27 of e) {
              var _e42 = _t27.getParent();
              _e42 &&
                _e42.splice(_t27.getIndexWithinParent(), 1, _t27.getChildren());
            }
          })(s),
          r
        );
      }),
      (exports.$generateNodesFromDOMViaExtension = function (e, t) {
        return require("LexicalExtension")
          .$getExtensionOutput(lt)
          .$generateNodesFromDOM(e, t);
      }),
      (exports.$getImportContextValue = ve),
      (exports.$getRenderContextValue = function (e, n) {
        if (n === void 0) {
          n = require("Lexical").$getEditor();
        }
        return i(
          (function (e) {
            return l($, e) || O(e);
          })(n),
          e,
        );
      }),
      (exports.$getSessionDOMRenderConfig = M),
      (exports.$inlineStylesFromStyleSheets = g),
      (exports.$isBlockLevel = ke),
      (exports.$propagateTextAlignToBlockChildren = Te),
      (exports.$setRenderContextValue = function (e, n, o) {
        if (o === void 0) {
          o = require("Lexical").$getEditor();
        }
        var r = v(o);
        r && r.setContextValue(e, n);
      }),
      (exports.$updateRenderContextValue = function (e, n, o) {
        if (o === void 0) {
          o = require("Lexical").$getEditor();
        }
        var r = v(o);
        r && r.setContextValue(e, n(i(r.editorContext, e)));
      }),
      (exports.$withImportContext = Me),
      (exports.$withRenderContext = k),
      (exports.BlockSchema = be),
      (exports.CoreImportExtension = ut),
      (exports.CoreImportRules = Je),
      (exports.DOMImportExtension = lt),
      (exports.DOMRenderExtension = ee),
      (exports.HorizontalRuleImportExtension = ft),
      (exports.HorizontalRuleImportRules = at),
      (exports.ImportOverlays = Ne),
      (exports.ImportSource = xe),
      (exports.ImportSourceDataTransfer = ye),
      (exports.ImportTextFormat = $e),
      (exports.ImportTextStyle = Se),
      (exports.ImportWhitespaceConfig = De),
      (exports.InlineSchema = we),
      (exports.NestedBlockSchema = Le),
      (exports.RenderContextExport = I),
      (exports.RenderContextRoot = N),
      (exports.RootSchema = Ae),
      (exports.contextUpdater = function (e, t) {
        return { cfg: e, updater: t };
      }),
      (exports.contextValue = d),
      (exports.createImportState = ge),
      (exports.createRenderState = D),
      (exports.defaultIsInline = Ce),
      (exports.defaultPreservesWhitespace = Ee),
      (exports.defineImportRule = me),
      (exports.defineOverlayRules = function (e) {
        var t = et(e);
        return { __type: "CompiledOverlayRules", dispatch: Ye(t), rules: t };
      }),
      (exports.domOverride = function (e, t, n) {
        return babelHelpers["extends"]({}, t, n, { nodes: e });
      }),
      (exports.isElementOfTag = function (e, n) {
        return (
          require("Lexical").isHTMLElement(e) && e.nodeName === n.toUpperCase()
        );
      }),
      (exports.parseSelector = he),
      (exports.sel = dt));
  },
  null,
);
