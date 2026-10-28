__d(
  "LexicalHtml.prod",
  [
    "Lexical",
    "LexicalExtensionBlockIdExtension",
    "LexicalExtensionConfig",
    "LexicalExtensionGetExtensionDependency",
    "LexicalExtensionGetPeerDependencyFromEditor",
    "LexicalExtensionHorizontalRuleExtension",
    "LexicalExtensionNamedSignals",
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
    function u(e) {
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
        var _n = t.cfg,
          _o = t.updater;
        return [_n, _o(f(e, _n))];
      }
      return t;
    }
    function m(e, t) {
      var n = t;
      for (var _o2 of e) {
        var _h = h(n, _o2),
          _e3 = _h[0],
          _r = _h[1],
          _s = _e3.key;
        if (n === t && f(n, _e3) === _r) continue;
        var _i = n === t || void 0 === n ? g(t) : n;
        ((_i[_s] = _r), (n = _i));
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
    function T(e, n) {
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
    function y(e, n, o, r) {
      var _Object$assign;
      return Object.assign(
        require("Lexical").createState(Symbol(n), { isEqual: r, parse: o }),
        ((_Object$assign = {}), (_Object$assign[e] = !0), _Object$assign),
      );
    }
    var E = function E(e, t, n) {
      (S(e), n());
    };
    function S(e) {
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
    var O = "@lexical/html/DOM",
      D = Symbol["for"]("@lexical/html/DOMExportContext"),
      I = "@lexical/html/DOMImport",
      N = Symbol["for"]("@lexical/html/DOMImportContext"),
      C = function C() {
        return !0;
      };
    function M(e, t, n) {
      return y(D, e, t, n);
    }
    var k = M("root", Boolean),
      R = M("isExport", Boolean);
    function v(e) {
      var t =
        require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(
          e,
          O,
        );
      return t ? t.output.defaults : void 0;
    }
    function _(e) {
      var t =
        require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(
          e,
          O,
        );
      return t ? t.output.runtime : void 0;
    }
    function b(e) {
      if (e === void 0) {
        e = require("Lexical").$getEditor();
      }
      var n = _(e);
      return n
        ? n.getSessionConfig()
        : require("Lexical").$getEditorDOMRenderConfig(e);
    }
    var A = T(D, v);
    function L(e, t, n) {
      return babelHelpers["extends"]({}, t, n, { nodes: e });
    }
    function w(e) {
      return function (t) {
        return t instanceof e;
      };
    }
    function F(e, _ref) {
      var t = _ref.nodes;
      if ("*" === t) return C;
      var n = {};
      var o = [];
      for (var _r5 of t)
        if ("getType" in _r5) {
          var _t2 = _r5.getType();
          if (n) {
            var _o4 = e.get(_t2);
            void 0 === _o4 && u(339, _r5.name, _t2);
            for (var _e6 of _o4) n[_e6] = !0;
          }
          o.push(w(_r5));
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
    function B(e) {
      return function (t, n, o) {
        return e(t, o);
      };
    }
    function P(e) {
      return function (t, n, o, r) {
        return e(t, n, r);
      };
    }
    function H(e) {
      return function (t, n, o, r, s) {
        return e(t, n, o, s);
      };
    }
    function W(e) {
      return function (t, n, o, r, s, i) {
        return e(t, n, o, r, i);
      };
    }
    function U(e, t) {
      return function (n, o) {
        var r = function r() {
            return e(n, o);
          },
          s = t(n);
        return s ? s(n, r, o) : r();
      };
    }
    function z(e, t) {
      return function (n, o, r) {
        var s = function s() {
            return e(n, o, r);
          },
          i = t(n);
        return i ? i(n, o, s, r) : s();
      };
    }
    var j = z,
      q = P;
    function V(e, t) {
      return function (n, o, r, s) {
        var i = function i() {
            return e(n, o, r, s);
          },
          c = t(n);
        return c ? c(n, o, r, i, s) : i();
      };
    }
    function Y(e, t) {
      return function (n, o, r, s, i) {
        var c = function c() {
            return e(n, o, r, s, i);
          },
          l = t(n);
        return l ? l(n, o, r, s, c, i) : c();
      };
    }
    function G(e, t) {
      return function (n, o, r, s) {
        e(n, o, r, s);
        var i = t(n);
        i && i(n, o, r, s);
      };
    }
    function X(e, t, n, o, r) {
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
    function K(e, t, n, o) {
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
    function J(e) {
      return "*" === e.nodes;
    }
    function Q(e) {
      return e;
    }
    function Z(e, _ref2) {
      var n = _ref2.overrides;
      var o = (function (e, n) {
          var o = require("Lexical").getRegisteredSubtypeMap(
              require("LexicalExtensionConfig").getKnownTypesAndNodes(e).nodes,
            ),
            r = {
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
              if (J(_s2)) n.push(_s2);
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
            var _t7 = F(o, _e1);
            for (var _n7 in r) K(r, _n7, _t7, _e1[_n7]);
          }
          return r;
        })(e, n),
        r = babelHelpers["extends"](
          {},
          require("Lexical").DEFAULT_EDITOR_DOM_CONFIG,
          e.dom,
        );
      return (
        X(o, "$createDOM", r, U, B),
        X(o, "$exportDOM", r, U, B),
        X(o, "$extractWithChild", r, Y, W),
        X(o, "$getDOMSlot", r, j, q),
        X(o, "$shouldExclude", r, z, P),
        X(o, "$shouldInclude", r, z, P),
        X(o, "$getSlotTargetElement", r, V, H),
        X(o, "$updateDOM", r, V, H),
        X(o, "$decorateDOM", r, G, Q),
        r
      );
    }
    function ee(e) {
      return {
        get: function get(t) {
          return f(e, t);
        },
      };
    }
    function te(e) {
      var t = Object.create(null);
      return m(e, t) || t;
    }
    function ne(e, t) {
      var n = ee(t);
      return e.filter(function (e) {
        return !(e.disabledForEditor && e.disabledForEditor(n));
      });
    }
    function oe(e) {
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
    var _re = (function () {
      function re(e, t, n, o) {
        this.sessionCache = (function () {
          return new Map();
        })();
        ((this.editor = e),
          (this.initialEditorConfig = t),
          (this.overrides = n),
          (this.editorContext = o),
          (this.installed = ne(n, o)),
          (this.hasSessionGates = n.some(function (e) {
            return e.disabledForSession;
          })));
      }
      var _proto = re.prototype;
      _proto.setContextValue = function setContextValue(e, n) {
        var o = this.installed;
        this.editorContext[e.key] = n;
        var r = ne(this.overrides, this.editorContext);
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
        var i = Z(this.initialEditorConfig, { overrides: r });
        this.editor._config.dom = i;
        var c = (function (e) {
          var t = [];
          for (var _n9 of e)
            (_n9.$createDOM || _n9.$getDOMSlot || _n9.$decorateDOM) &&
              t.push(oe(_n9));
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
        var n = ee(p(D, this.editor) || this.editorContext),
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
            ((i = Z(this.initialEditorConfig, { overrides: r })),
            this.sessionCache.set(s, i)),
          i
        );
      };
      return re;
    })();
    var se = {
        build: function build(e, t, n) {
          var _n$getInitResult = n.getInitResult(),
            o = _n$getInitResult.initialEditorConfig,
            r = te(t.contextDefaults);
          return { defaults: r, runtime: new _re(e, o, t.overrides, r) };
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
            o = te(t.contextDefaults),
            r = ne(t.overrides, o);
          return ((e.dom = Z(e, { overrides: r })), { initialEditorConfig: n });
        },
        mergeConfig: function mergeConfig(e, n) {
          var o = require("Lexical").shallowMergeConfig(e, n);
          for (var _t9 of ["overrides", "contextDefaults"])
            n[_t9] &&
              (o[_t9] = [].concat(Array.from(e[_t9]), Array.from(n[_t9])));
          return o;
        },
        name: O,
      },
      ie = Symbol["for"]("@lexical/html/SelectorImpl");
    function ce(e, n) {
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
        return ce(e, [].concat(Array.from(n), [t]));
      };
      return (
        (_ref3 = {}),
        (_ref3[ie] = o),
        (_ref3.attr = function attr(e, t, n) {
          return s(ae(e, t, n));
        }),
        (_ref3.classAll = function classAll() {
          for (
            var _len3 = arguments.length, e = new Array(_len3), _key3 = 0;
            _key3 < _len3;
            _key3++
          ) {
            e[_key3] = arguments[_key3];
          }
          return s(ue(e));
        }),
        (_ref3.classAny = function classAny() {
          for (
            var _len4 = arguments.length, e = new Array(_len4), _key4 = 0;
            _key4 < _len4;
            _key4++
          ) {
            e[_key4] = arguments[_key4];
          }
          return s(
            (function (e) {
              var n = le(e);
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
              u(362, JSON.stringify(e));
            })(e, n, o),
          );
        }),
        _ref3
      );
    }
    function le(e) {
      var t = [];
      for (var _n1 of e) _n1 && t.push(_n1);
      return t;
    }
    function ue(e) {
      var n = le(e);
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
    function ae(e, n, o) {
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
      u(361, JSON.stringify(e));
    }
    function fe(e) {
      var _ref4;
      return ((_ref4 = {}), (_ref4[ie] = e), _ref4);
    }
    var de = fe({
        kind: "text",
        predicate: _require_Lexical.isDOMTextNode,
        tags: new Set(),
      }),
      pe = fe({
        kind: "comment",
        predicate: function predicate(e) {
          return 8 === e.nodeType;
        },
        tags: new Set(),
      });
    function he() {
      return ce(new Set(), []);
    }
    function me() {
      return pe;
    }
    function ge() {
      for (
        var _len5 = arguments.length, e = new Array(_len5), _key5 = 0;
        _key5 < _len5;
        _key5++
      ) {
        e[_key5] = arguments[_key5];
      }
      e.length > 0 || u(363);
      var t = new Set();
      for (var _n10 of e) t.add(_n10.toUpperCase());
      return ce(t, []);
    }
    function xe() {
      return de;
    }
    var $e = { any: he, comment: me, tag: ge, text: xe };
    function Te(e, t) {
      var n = [];
      var o = 0,
        r = 0;
      for (; o < e.length && r < t.length; )
        e[o] <= t[r] ? n.push(e[o++]) : n.push(t[r++]);
      for (; o < e.length; ) n.push(e[o++]);
      for (; r < t.length; ) n.push(t[r++]);
      return n;
    }
    function ye(e) {
      var t = [],
        n = new Map(),
        o = [],
        r = [],
        s = [],
        i = new Set();
      e.forEach(function (e, c) {
        var l = (function (e) {
            var t = e[ie];
            return (void 0 === t && u(360), t);
          })(e.match),
          a =
            e.name ||
            (function (e, t) {
              if ("text" === e.kind) return "#text@" + t;
              if ("comment" === e.kind) return "#comment@" + t;
              if (0 === e.tags.size) return "*@" + t;
              return Array.from(e.tags).join(",").toLowerCase() + "@" + t;
            })(l, c);
        if (
          (e.name && i.add(e.name),
          t.push({ $import: e.$import, name: a, predicate: l.predicate }),
          "text" === l.kind)
        )
          r.push(c);
        else if ("comment" === l.kind) s.push(c);
        else if (0 === l.tags.size) o.push(c);
        else
          for (var _e14 of l.tags) {
            var _t0 = n.get(_e14);
            (_t0 || ((_t0 = []), n.set(_e14, _t0)), _t0.push(c));
          }
      });
      var c = new Map();
      if (0 === o.length)
        for (var _ref6 of n) {
          var _e15 = _ref6[0];
          var _t1 = _ref6[1];
          c.set(_e15, _t1);
        }
      else
        for (var _ref8 of n) {
          var _e16 = _ref8[0];
          var _t10 = _ref8[1];
          c.set(_e16, Te(_t10, o));
        }
      return {
        byTag: c,
        commentIndices: s,
        rules: t,
        textIndices: r,
        wildcardIndices: o,
      };
    }
    function Ee(e, n) {
      return require("Lexical").isDOMTextNode(n)
        ? e.textIndices
        : 8 === n.nodeType
          ? e.commentIndices
          : require("Lexical").isHTMLElement(n)
            ? e.byTag.get(n.nodeName) || e.wildcardIndices
            : Se;
    }
    var Se = Object.freeze([]);
    function Oe(e) {
      var t = [];
      for (var _n11 of e)
        if (De(_n11)) for (var _e17 of _n11.rules) t.push(_e17);
        else t.push(_n11);
      return t;
    }
    function De(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        "__type" in e &&
        "CompiledOverlayRules" === e.__type
      );
    }
    function Ie(e) {
      var t = Oe(e);
      return { __type: "CompiledOverlayRules", dispatch: ye(t), rules: t };
    }
    function Ne(e, t, n) {
      return y(N, e, t, n);
    }
    var Ce = Ne("importSource", function () {
        return "unknown";
      }),
      Me = Ne("importSourceDataTransfer", function () {
        return null;
      }),
      ke = Ne("textFormat", function () {
        return 0;
      }),
      Re = Ne("textStyle", function () {
        return {};
      });
    function ve(e) {
      if (!require("Lexical").isHTMLElement(e)) return !1;
      if ("PRE" === e.nodeName) return !0;
      var n = e.style.whiteSpace;
      return "string" == typeof n && n.startsWith("pre");
    }
    function _e(e) {
      if (require("Lexical").isDOMTextNode(e)) return !0;
      if (!require("Lexical").isHTMLElement(e)) return !1;
      var n = e.style.display;
      return n
        ? n.startsWith("inline")
        : !require("Lexical").isBlockDomNode(e) &&
            require("Lexical").isInlineDomNode(e);
    }
    var be = Ne("whitespaceConfig", function () {
        return { isInline: _e, preservesWhitespace: ve };
      }),
      Ae = Ne("importOverlays", function () {
        return [];
      });
    var _Le = (function () {
      function Le(e) {
        this.record = e;
      }
      var _proto2 = Le.prototype;
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
      return Le;
    })();
    function we(e) {
      var t =
        require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(
          e,
          I,
        );
      return t ? t.output.defaults : void 0;
    }
    function Fe(e, n) {
      if (n === void 0) {
        n = require("Lexical").$getEditor();
      }
      return f(
        (function (e) {
          return p(N, e) || we(e);
        })(n),
        e,
      );
    }
    var Be = T(N, we),
      Pe = $e,
      He = new Set(["center", "end", "justify", "left", "right", "start"]);
    function We(e) {
      return He.has(e);
    }
    var Ue = {
        B: { fontWeight: "bold" },
        EM: { fontStyle: "italic" },
        I: { fontStyle: "italic" },
        S: { textDecoration: "line-through" },
        STRONG: { fontWeight: "bold" },
        SUB: { verticalAlign: "sub" },
        SUP: { verticalAlign: "super" },
        U: { textDecoration: "underline" },
      },
      ze = {
        CODE: _require_Lexical.IS_CODE,
        MARK: _require_Lexical.IS_HIGHLIGHT,
      },
      je = new Set([
        "font-weight",
        "font-style",
        "text-decoration",
        "text-transform",
        "vertical-align",
      ]),
      qe = {
        $import: function $import(e, n) {
          var o = e.get(ke),
            r = Ue[n.nodeName],
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
                  var _e18 = i.split(" ");
                  (_e18.includes("underline") &&
                    (n |= require("Lexical").IS_UNDERLINE),
                    _e18.includes("line-through") &&
                      (n |= require("Lexical").IS_STRIKETHROUGH),
                    _e18.includes("none") &&
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
          var a = ze[n.nodeName];
          return (
            a && (l |= a),
            l === o
              ? e.$importChildren(n)
              : e.$importChildren(n, { context: [x(ke, l)] })
          );
        },
        match: Pe.tag(
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
    function Ve(e, n, o) {
      var r = e;
      for (;;) {
        var _e19 = null;
        for (; null === (_e19 = n ? r.nextSibling : r.previousSibling); ) {
          var _e20 = r.parentNode;
          if (null === _e20) return null;
          r = _e20;
        }
        if (((r = _e19), !o.isInline(r))) return null;
        var _s5 = r;
        for (; null !== (_s5 = n ? r.firstChild : r.lastChild); ) r = _s5;
        if (require("Lexical").isDOMTextNode(r)) return r;
        if ("BR" === r.nodeName) return null;
      }
    }
    function Ye(e, n) {
      return 0 !== n && require("Lexical").$isTextNode(e) ? e.setFormat(n) : e;
    }
    function Ge(e, n) {
      if (require("Lexical").$isTextNode(e)) {
        var _t11 = (function (e) {
          var t = "";
          for (var _n12 in e)
            je.has(_n12) || (t += _n12 + ": " + e[_n12] + "; ");
          return t.trimEnd();
        })(n);
        "" !== _t11 && e.setStyle(_t11);
      }
      return e;
    }
    var Xe = {
        $import: function $import(e, n) {
          var o = e.get(ke),
            r = e.get(Re),
            s = e.get(be);
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
            var _e21 = require("Lexical").$generateNodesFromRawText(
              n.textContent || "",
            );
            for (var _t12 of _e21) (Ye(_t12, o), Ge(_t12, r));
            return _e21;
          }
          var i = (function (e, t) {
            var n = (e.textContent || "")
              .replace(/\r/g, "")
              .replace(/[ \t\n]+/g, " ");
            if (0 === n.length) return "";
            if (" " === n[0]) {
              var _o6 = e,
                _r9 = !0;
              for (; null !== _o6 && null !== (_o6 = Ve(_o6, !1, t)); ) {
                var _e22 = _o6.textContent || "";
                if (_e22.length > 0) {
                  (/[ \t\n]$/.test(_e22) && (n = n.slice(1)), (_r9 = !1));
                  break;
                }
              }
              _r9 && (n = n.slice(1));
            }
            if (n.length > 0 && " " === n[n.length - 1]) {
              var _o7 = e,
                _r0 = !0;
              for (; null !== _o7 && null !== (_o7 = Ve(_o7, !0, t)); )
                if (
                  (_o7.textContent || "").replace(/^( |\t|\r?\n)+/, "").length >
                  0
                ) {
                  _r0 = !1;
                  break;
                }
              _r0 && (n = n.slice(0, -1));
            }
            return n;
          })(n, s);
          if ("" === i) return [];
          var c = require("Lexical").$createTextNode(i);
          return (Ye(c, o), Ge(c, r), [c]);
        },
        match: Pe.text(),
        name: "@lexical/html/#text",
      },
      Ke = {
        $import: function $import() {
          return [];
        },
        match: Pe.tag("script", "style"),
        name: "@lexical/html/script-style-ignore",
      },
      Je = {
        $import: function $import(e, n) {
          return require("Lexical").isOnlyChildInBlockNode(n) ||
            require("Lexical").isLastChildInBlockNode(n)
            ? []
            : [require("Lexical").$createLineBreakNode()];
        },
        match: Pe.tag("br"),
        name: "@lexical/html/br",
      },
      Qe = {
        $import: function $import(e, n) {
          var o = require("Lexical").$createParagraphNode();
          if (
            (require("Lexical").$setFormatFromDOM(o, n),
            require("Lexical").setNodeIndentFromDOM(n, o),
            "" === o.getFormatType())
          ) {
            var _e23 = n.getAttribute("align");
            _e23 && We(_e23) && o.setFormat(_e23);
          }
          return (
            require("Lexical").$setDirectionFromDOM(o, n),
            [o.splice(0, 0, e.$importChildren(n))]
          );
        },
        match: Pe.tag("p"),
        name: "@lexical/html/p",
      },
      Ze = {
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
        match: Pe.tag("hr"),
        name: "@lexical/html/hr",
      },
      et = [
        Ke,
        Qe,
        Ze,
        {
          $import: function $import(e, n, o) {
            return require("Lexical").isBlockDomNode(n)
              ? nt(e.$importChildren(n, { schema: rt }), n)
              : o();
          },
          match: Pe.any(),
          name: "@lexical/html/transparent-block",
        },
        Xe,
        Je,
        qe,
      ];
    function tt(e) {
      return (
        require("Lexical").$isBlockElementNode(e) ||
        (require("Lexical").$isDecoratorNode(e) && !e.isInline())
      );
    }
    function nt(e, n) {
      if (!require("Lexical").isHTMLElement(n)) return e;
      var o = n.style.textAlign;
      if (!We(o)) return e;
      for (var _n13 of e)
        require("Lexical").$isBlockElementNode(_n13) &&
          "" === _n13.getFormatType() &&
          _n13.setFormat(o);
      return e;
    }
    function ot(e, n, o) {
      1 === e.length && require("Lexical").$isLineBreakNode(e[0]) && (e = []);
      var r = require("Lexical").$createParagraphNode();
      if (require("Lexical").isHTMLElement(o)) {
        var _e24 = o.style.textAlign;
        We(_e24) && r.setFormat(_e24);
      }
      return [r.splice(0, 0, e)];
    }
    var rt = { $accepts: tt, $packageRun: ot, name: "BlockSchema" },
      st = {
        $accepts: function $accepts(e) {
          return !tt(e);
        },
        name: "InlineSchema",
      },
      it = {
        $accepts: tt,
        $packageRun: function $packageRun(e) {
          return e;
        },
        name: "NestedBlockSchema",
      },
      ct = { $accepts: tt, $packageRun: ot, name: "RootSchema" },
      lt = Object.freeze({});
    function ut(e, t) {
      var n = {
        $importChildren: function $importChildren(t, n) {
          return (function (e, t, n) {
            var o = n && n.rules ? n.rules.dispatch : void 0;
            o && e.overlays.push(o);
            try {
              var _o8 = function _o8() {
                return at(e, t, n);
              };
              return n && n.context ? Be(n.context, e.editor)(_o8) : _o8();
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
          return Fe(t, e.editor);
        },
        session: e.session,
      };
      return n;
    }
    function at(e, t, n) {
      var o = n && n.$onChild,
        r = [];
      for (var _n14 of Array.from(t.childNodes)) {
        var _t13 = ft(e, _n14, void 0);
        for (var _e25 of _t13) {
          var _t14 = o ? o(_e25) : _e25;
          null != _t14 && r.push(_t14);
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
                  for (var _e26 of _s6) r.push(_e26);
                  return;
                }
              }
              if ("hoist" === e.onReject) for (var _e27 of t) r.push(_e27);
            };
            for (var _o9 of t)
              e.$accepts(_o9, n)
                ? (i(), r.push(_o9))
                : (null === s && (s = []), s.push(_o9));
            return (i(), e.$finalize ? e.$finalize(r, n) : r);
          })(i, s, null, t)
        : s;
    }
    function ft(e, t, n) {
      var o = function o() {
        return (function (e, t) {
          var n = (function (e, t) {
            var n = [];
            for (var _o0 = e.overlays.length - 1; _o0 >= 0; _o0--) {
              var _r1 = e.overlays[_o0],
                _s7 = Ee(_r1, t);
              _s7.length > 0 && n.push({ dispatch: _r1, indices: _s7 });
            }
            var o = Ee(e.dispatch, t);
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
                var _n15 = _c[r++],
                  _o1 = _i2.rules[_n15],
                  _l = {};
                if (_o1.predicate(t, _l)) {
                  var _n16 = ut(e, 0 === Object.keys(_l).length ? lt : _l);
                  try {
                    return _o1.$import(_n16, t, _s8);
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
      return n && n.context ? Be(n.context, e.editor)(o) : o();
    }
    function dt(e, t) {
      if (0 === t.childNodes.length) return [];
      var n = [];
      for (var _o10 of Array.from(t.childNodes)) {
        var _t15 = ft(e, _o10, void 0);
        for (var _e28 of _t15) n.push(_e28);
      }
      return n;
    }
    var pt = {
        $import: function $import(e, t) {
          return e.$importChildren(t);
        },
        match: $e.any(),
        name: "@lexical/html/default-hoist",
      },
      ht = {
        build: function build(e, n) {
          var o = ye(Oe(n.rules)),
            r = m(n.contextDefaults, void 0),
            s = n.preprocess;
          return {
            $generateNodesFromDOM: function $generateNodesFromDOM(n, i) {
              var c = p(N, e) || r,
                l = i && i.context ? m(i.context, c) : c,
                u = void 0 !== l && l !== c ? l : Object.create(c || null),
                a = new _Le(u),
                f = { session: a };
              return (
                (function (e, t, n) {
                  var o = e.length - 1;
                  var _r10 = function r() {
                    for (; o >= 0; ) return void (0, e[o--])(t, n, _r10);
                  };
                  _r10();
                })(
                  i && i.preprocess
                    ? [].concat(Array.from(s), Array.from(i.preprocess))
                    : s,
                  n,
                  f,
                ),
                $(
                  N,
                  u,
                  function () {
                    return (function (e, n, o, r) {
                      return at(
                        {
                          dispatch: e,
                          editor: n,
                          overlays: r.get(Ae).map(function (e) {
                            return e.dispatch;
                          }),
                          session: r,
                        },
                        require("Lexical").isDOMDocumentNode(o) ? o.body : o,
                        { schema: ct },
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
        config: { contextDefaults: [], preprocess: [E], rules: [pt] },
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
        name: I,
      },
      mt = "data-block-id";
    function gt(e) {
      return (
        (require("Lexical").$isElementNode(e) ||
          require("Lexical").$isDecoratorNode(e)) &&
        !e.isInline()
      );
    }
    var xt = Ie([
        {
          $import: function $import(e, n, o) {
            var i = o(),
              _s$$getExtensionDepen =
                require("LexicalExtensionGetExtensionDependency").$getExtensionDependency(
                  $t,
                ),
              c = _s$$getExtensionDepen.init,
              l = _s$$getExtensionDepen.output;
            if (!l["import"].peek()) return i;
            var u =
              require("LexicalExtensionBlockIdExtension").blockIdState.parse(
                n.getAttribute(mt),
              );
            if (void 0 !== u)
              for (var _e29 of i)
                if (gt(_e29)) {
                  null ===
                    require("LexicalExtensionBlockIdExtension").$getBlockId(
                      _e29,
                    ) &&
                    (require("Lexical").$setState(
                      _e29,
                      require("LexicalExtensionBlockIdExtension").blockIdState,
                      u,
                    ),
                    c.add(_e29.getKey()));
                  break;
                }
            return i;
          },
          match: $e.any().attr(mt, !0),
          name: "@lexical/html/block-id",
        },
      ]),
      $t = {
        build: function build(e, t) {
          return require("LexicalExtensionNamedSignals").namedSignals(t);
        },
        config: { export: !0, import: !0 },
        dependencies: [
          require("LexicalExtensionBlockIdExtension").BlockIdExtension,
          [
            se,
            {
              overrides: [
                L("*", {
                  $exportDOM: function $exportDOM(e, n) {
                    var o = n();
                    if (
                      require("Lexical").isHTMLElement(o.element) &&
                      require("LexicalExtensionGetExtensionDependency")
                        .$getExtensionOutput($t)
                        ["export"].peek() &&
                      require("LexicalExtensionGetExtensionDependency")
                        .$getExtensionOutput(
                          require("LexicalExtensionBlockIdExtension")
                            .BlockIdExtension,
                        )
                        .$isIdentifiedBlock(e)
                    ) {
                      var _t16 =
                        require("LexicalExtensionBlockIdExtension").$getBlockId(
                          e,
                        );
                      null !== _t16 && o.element.setAttribute(mt, _t16);
                    }
                    return o;
                  },
                }),
              ],
            },
          ],
          [
            ht,
            {
              preprocess: [
                function (e, t, n) {
                  (t.session.update(Ae, function (e) {
                    return [].concat(Array.from(e), [xt]);
                  }),
                    n());
                },
              ],
            },
          ],
        ],
        init: function init() {
          return new Set();
        },
        name: "@lexical/html/BlockIdHTML",
        register: function register(e, n, o) {
          var i = o.getInitResult();
          return e.registerNodeTransform(
            require("Lexical").RootNode,
            function () {
              if (0 === i.size) return;
              var _s$$getExtensionOutpu =
                  require("LexicalExtensionGetExtensionDependency").$getExtensionOutput(
                    require("LexicalExtensionBlockIdExtension")
                      .BlockIdExtension,
                  ),
                e = _s$$getExtensionOutpu.$isIdentifiedBlock;
              for (var _n17 of i) {
                var _o11 = require("Lexical").$getNodeByKey(_n17);
                null !== _o11 &&
                  _o11.isAttached() &&
                  !e(_o11) &&
                  require("Lexical").$setState(
                    _o11,
                    require("LexicalExtensionBlockIdExtension").blockIdState,
                    void 0,
                  );
              }
              i.clear();
            },
          );
        },
      },
      Tt = /[A-Za-z0-9_-]/;
    var _yt = (function () {
      function yt(e, t) {
        ((this.source = e), (this.pos = t));
      }
      var _proto3 = yt.prototype;
      _proto3.peek = function peek(e) {
        if (e === void 0) {
          e = 0;
        }
        return this.source[this.pos + e] || "";
      };
      _proto3.consume = function consume() {
        return this.source[this.pos++] || "";
      };
      _proto3.eof = function eof() {
        return this.pos >= this.source.length;
      };
      _proto3.skipWhitespace = function skipWhitespace() {
        for (; !this.eof() && /\s/.test(this.peek()); ) this.pos++;
      };
      _proto3.readIdent = function readIdent() {
        var e = this.pos;
        for (; !this.eof() && Tt.test(this.peek()); ) this.pos++;
        return this.source.slice(e, this.pos);
      };
      _proto3.readQuoted = function readQuoted() {
        var e = this.consume();
        this.assert('"' === e || "'" === e, "expected quote");
        var t = this.pos;
        for (; !this.eof() && this.peek() !== e; )
          "\\" === this.peek() ? (this.pos += 2) : this.pos++;
        this.assert(!this.eof(), "unterminated string");
        var n = this.source.slice(t, this.pos);
        return (this.pos++, n.replace(/\\(.)/g, "$1"));
      };
      _proto3.assert = function assert(e, t) {
        e || u(364, String(this.pos + 1), t, this.source);
      };
      return yt;
    })();
    function Et(e) {
      var t = new Set(),
        n = [],
        o = [];
      var r = !1;
      if ((e.skipWhitespace(), "*" === e.peek())) (e.consume(), (r = !0));
      else if (Tt.test(e.peek())) {
        var _n18 = e.readIdent();
        _n18 && t.add(_n18.toUpperCase());
      }
      for (; !e.eof(); ) {
        var _t17 = e.peek();
        if ("." === _t17) {
          e.consume();
          var _t18 = e.readIdent();
          (e.assert("" !== _t18, 'expected class name after "."'),
            o.push(_t18));
        } else if ("#" === _t17) {
          e.consume();
          var _t19 = e.readIdent();
          (e.assert("" !== _t19, 'expected id after "#"'),
            n.push(ae("id", _t19)));
        } else {
          if ("[" !== _t17) break;
          {
            (e.consume(), e.skipWhitespace());
            var _t20 = e.readIdent();
            (e.assert("" !== _t20, 'expected attribute name after "["'),
              e.skipWhitespace());
            var _o12 = !0;
            if ("=" === e.peek()) {
              (e.consume(), e.skipWhitespace());
              var _t21 = e.peek();
              ('"' === _t21 || "'" === _t21
                ? (_o12 = e.readQuoted())
                : ((_o12 = e.readIdent()),
                  e.assert("" !== _o12, "expected attribute value")),
                e.skipWhitespace());
            }
            (e.assert("]" === e.peek(), 'expected "]"'),
              e.consume(),
              n.push(ae(_t20, _o12)));
          }
        }
      }
      return (
        o.length > 0 && n.push(ue(o)),
        e.assert(r || t.size > 0 || n.length > 0, "expected a selector"),
        { predicates: n, tags: t }
      );
    }
    function St(e) {
      var t = new _yt(e, 0),
        n = [];
      for (; n.push(Et(t)), t.skipWhitespace(), !t.eof(); )
        (t.assert(
          "," === t.peek(),
          'expected "," (selector lists are the only supported combinator)',
        ),
          t.consume(),
          t.skipWhitespace());
      if (1 === n.length) return ce(n[0].tags, n[0].predicates);
      var o = new Set();
      if (
        n.every(function (e) {
          return e.tags.size > 0;
        })
      )
        for (var _e30 of n) for (var _t22 of _e30.tags) o.add(_t22);
      return ce(o, [
        function (e, t) {
          for (var _o13 of n) {
            var _n19 = e.nodeName;
            if (_o13.tags.size > 0 && !_o13.tags.has(_n19)) continue;
            var _r11 = !0;
            for (var _n20 of _o13.predicates)
              if (!_n20(e, t)) {
                _r11 = !1;
                break;
              }
            if (_r11) return !0;
          }
          return !1;
        },
      ]);
    }
    var Ot = {
        dependencies: [[ht, { rules: et }]],
        name: "@lexical/html/CoreImport",
      },
      Dt = [Ze],
      It = { any: he, comment: me, css: St, tag: ge, text: xe },
      Nt = new Set(["STYLE", "SCRIPT"]);
    function Ct(e, n, o) {
      if (n === void 0) {
        n = null;
      }
      if (o === void 0) {
        o = require("Lexical").$getEditor();
      }
      return A(
        [x(R, !0)],
        o,
      )(function () {
        var r = require("Lexical").$getRoot(),
          s = b(o),
          i = require("Lexical").$getSelectionSlotFrame(n),
          c = e.append.bind(e);
        for (var _e31 of (require("Lexical").$isElementNode(i)
          ? i
          : r
        ).getChildren())
          Mt(o, _e31, c, n, s);
        return e;
      });
    }
    function Mt(n, o, r, s, i) {
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
      var T = null;
      for (var _e32 of g) {
        var _t23 = Mt(n, _e32, $, x, i);
        (_t23 && (T = _e32),
          !c && _t23 && i.$extractWithChild(o, _e32, s, "html", n) && (c = !0));
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
                var _n21 = require("Lexical")
                  .$getDocument()
                  .createElement("br");
                (_n21.setAttribute("data-lexical-managed-linebreak", "true"),
                  e.append(_n21));
              }
            })(f, T)),
          require("Lexical").isDocumentFragment(f))
        ) {
          if (d) {
            var _e33 = d.call(u, f);
            _e33 && f.replaceChildren(_e33);
          }
          r(f);
        } else if ((r(f), d)) {
          var _e34 = d.call(u, f);
          _e34 && f.replaceWith(_e34);
        }
      } else r(m);
      return c;
    }
    function kt(e, n, o, r, s, i) {
      var _l2;
      if (s === void 0) {
        s = new Map();
      }
      var c = [];
      if (Nt.has(e.nodeName)) return c;
      var l = null;
      var u = (function (e, t) {
          var n = e.nodeName,
            o = t._htmlConversions.get(n.toLowerCase());
          var r = null;
          if (void 0 !== o)
            for (var _t24 of o) {
              var _n22 = _t24(e);
              null !== _n22 &&
                (null === r || (r.priority || 0) <= (_n22.priority || 0)) &&
                (r = _n22);
            }
          return null !== r ? r.conversion : null;
        })(e, n),
        a = u ? u(e) : null;
      var f = null;
      if (null !== a) {
        f = a.after;
        var _t25 = a.node;
        if (
          ((l = Array.isArray(_t25) ? _t25[_t25.length - 1] : _t25), null !== l)
        ) {
          for (var _ref0 of s) {
            var _e35 = _ref0[1];
            if (((l = _e35(l, i)), !l)) break;
          }
          l && c.push.apply(c, Array.from(Array.isArray(_t25) ? _t25 : [l]));
        }
        null != a.forChild && s.set(e.nodeName, a.forChild);
      }
      var d = e.childNodes;
      var p = [];
      var h =
        (null == l || !require("Lexical").$isRootOrShadowRoot(l)) &&
        ((null != l && require("Lexical").$isBlockElementNode(l)) || r);
      for (var _e36 = 0; _e36 < d.length; _e36++) {
        var _p;
        (_p = p).push.apply(
          _p,
          Array.from(kt(d[_e36], n, o, h, new Map(s), l)),
        );
      }
      if (
        (null != f && (p = f(p)),
        require("Lexical").isBlockDomNode(e) &&
          (p = (function (e, n, o) {
            var r = e.style.textAlign,
              s = [];
            var i = [];
            for (var _e37 = 0; _e37 < n.length; _e37++) {
              var _c2 = n[_e37];
              if (require("Lexical").$isBlockElementNode(_c2))
                (r && !_c2.getFormat() && _c2.setFormat(r), s.push(_c2));
              else if (
                (i.push(_c2),
                _e37 === n.length - 1 ||
                  (_e37 < n.length - 1 &&
                    require("Lexical").$isBlockElementNode(n[_e37 + 1])))
              ) {
                var _e38 = o();
                (_e38.setFormat(r),
                  _e38.append.apply(_e38, Array.from(i)),
                  s.push(_e38),
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
        if (p.length > 0) for (var _e39 of p) c.push(_e39);
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
      return Mt(e, t, n.append.bind(n), o, b(e));
    }),
      (exports.$distributeInlineWrapper = function e(n, o) {
        var r = [];
        var s = [];
        var i = function i() {
          0 !== s.length && (r.push(o().splice(0, 0, s)), (s = []));
        };
        for (var _c3 of n)
          if (tt(_c3)) {
            if ((i(), require("Lexical").$isElementNode(_c3))) {
              var _t26 = e(_c3.getChildren(), o);
              _c3.splice(0, _c3.getChildrenSize(), _t26);
            }
            r.push(_c3);
          } else s.push(_c3);
        return (i(), r);
      }),
      (exports.$generateDOMFromNodes = Ct),
      (exports.$generateDOMFromRoot = function (e, n) {
        if (n === void 0) {
          n = require("Lexical").$getRoot();
        }
        var o = require("Lexical").$getEditor();
        return A(
          [x(R, !0), x(k, !0)],
          o,
        )(function () {
          var t = b(o),
            r = e.append.bind(e);
          return (Mt(o, n, r, null, t), e);
        });
      }),
      (exports.$generateHtmlFromNodes = function (e, n) {
        if (n === void 0) {
          n = null;
        }
        return (
          ("undefined" == typeof document ||
            ("undefined" == typeof window && void 0 === global.window)) &&
            u(338),
          require("Lexical").$assumeActiveEditor(e),
          Ct(require("Lexical").$getDocument().createElement("div"), n, e)
            .innerHTML
        );
      }),
      (exports.$generateNodesFromDOM = function (e, n) {
        S(n);
        var o = require("Lexical").isDOMDocumentNode(n)
            ? n.body.childNodes
            : n.childNodes,
          r = [],
          s = [];
        for (var _t27 of o)
          if (!Nt.has(_t27.nodeName)) {
            var _n23 = kt(_t27, e, s, !1);
            if (null !== _n23) for (var _e40 of _n23) r.push(_e40);
          }
        return (
          (function (e) {
            for (var _n24 of e)
              _n24.getParent() &&
                _n24.getNextSibling() instanceof
                  require("Lexical").ArtificialNode__DO_NOT_USE &&
                _n24.insertAfter(require("Lexical").$createLineBreakNode());
            for (var _t28 of e) {
              var _e41 = _t28.getParent();
              _e41 &&
                _e41.splice(_t28.getIndexWithinParent(), 1, _t28.getChildren());
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
      (exports.$getImportContextValue = Fe),
      (exports.$getRenderContextValue = function (e, n) {
        if (n === void 0) {
          n = require("Lexical").$getEditor();
        }
        return f(
          (function (e) {
            return p(D, e) || v(e);
          })(n),
          e,
        );
      }),
      (exports.$getSessionDOMRenderConfig = b),
      (exports.$inlineStylesFromStyleSheets = E),
      (exports.$isBlockLevel = tt),
      (exports.$propagateTextAlignToBlockChildren = nt),
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
      (exports.$withImportContext = Be),
      (exports.$withRenderContext = A),
      (exports.BLOCK_ID_ATTRIBUTE = mt),
      (exports.BlockIdHTMLExtension = $t),
      (exports.BlockSchema = rt),
      (exports.CoreImportExtension = Ot),
      (exports.CoreImportRules = et),
      (exports.DOMImportExtension = ht),
      (exports.DOMRenderExtension = se),
      (exports.HorizontalRuleImportRules = Dt),
      (exports.ImportOverlays = Ae),
      (exports.ImportSource = Ce),
      (exports.ImportSourceDataTransfer = Me),
      (exports.ImportTextFormat = ke),
      (exports.ImportTextStyle = Re),
      (exports.ImportWhitespaceConfig = be),
      (exports.InlineSchema = st),
      (exports.NestedBlockSchema = it),
      (exports.RenderContextExport = R),
      (exports.RenderContextRoot = k),
      (exports.RootSchema = ct),
      (exports.contextUpdater = function (e, t) {
        return { cfg: e, updater: t };
      }),
      (exports.contextValue = x),
      (exports.createImportState = Ne),
      (exports.createRenderState = M),
      (exports.defaultIsInline = _e),
      (exports.defaultPreservesWhitespace = ve),
      (exports.defineImportRule = function (e) {
        return e;
      }),
      (exports.defineOverlayRules = Ie),
      (exports.domOverride = L),
      (exports.isElementOfTag = function (e, n) {
        return (
          require("Lexical").isHTMLElement(e) && e.nodeName === n.toUpperCase()
        );
      }),
      (exports.parseSelector = St),
      (exports.sel = It));
  },
  null,
);
