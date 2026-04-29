__d(
  "LexicalHtml.prod",
  ["Lexical", "LexicalExtension", "LexicalSelection"],
  function $module_LexicalHtml_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function o(e) {
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
    var r;
    function i(e, t) {
      var n = t.key;
      return e && n in e ? e[n] : t.defaultValue;
    }
    function s(e) {
      return r && r.editor === e ? r : void 0;
    }
    function c(e, t) {
      if ("cfg" in t) {
        var _n = t.cfg,
          _o = t.updater;
        return [_n, _o(i(e, _n))];
      }
      return t;
    }
    function l(e, t) {
      var n = t;
      for (var _o2 of e) {
        var _c = c(n, _o2),
          _e2 = _c[0],
          _r = _c[1],
          _s = _e2.key;
        if (n === t && i(n, _e2) === _r) continue;
        var _l = n || u(t);
        ((_l[_s] = _r), (n = _l));
      }
      return n;
    }
    function u(e) {
      return Object.create(e || null);
    }
    function f(e, t) {
      return [e, t];
    }
    var d = "@lexical/html/DOM",
      a = Symbol["for"]("@lexical/html/DOMExportContext"),
      p = function p() {
        return !0;
      };
    function g(e) {
      return function (t) {
        return t instanceof e;
      };
    }
    function h(e, _ref) {
      var t = _ref.nodes;
      if ("*" === t) return p;
      var n = {};
      var r = [];
      for (var _i of t)
        if ("getType" in _i) {
          var _t = _i.getType();
          if (n) {
            var _r2 = e[_t];
            (void 0 === _r2 && o(339, _i.name, _t),
              (n = Object.assign(n, _r2.types)));
          }
          r.push(g(_i));
        } else ((n = void 0), r.push(_i));
      return (
        n ||
        (1 === r.length
          ? r[0]
          : function (e) {
              for (var _t2 of r) if (_t2(e)) return !0;
              return !1;
            })
      );
    }
    function m(e) {
      return function (t, n, o) {
        return e(t, o);
      };
    }
    function x(e) {
      return function (t, n, o, r) {
        return e(t, n, r);
      };
    }
    function y(e) {
      return function (t, n, o, r, i) {
        return e(t, n, o, i);
      };
    }
    function $(e) {
      return function (t, n, o, r, i, s) {
        return e(t, n, o, r, s);
      };
    }
    function N(e, t) {
      return function (n, o) {
        var r = function r() {
            return e(n, o);
          },
          i = t(n);
        return i ? i(n, r, o) : r();
      };
    }
    function D(e, t) {
      return function (n, o, r) {
        var i = function i() {
            return e(n, o, r);
          },
          s = t(n);
        return s ? s(n, o, i, r) : i();
      };
    }
    function O(e, t) {
      return function (n, o, r, i) {
        var s = function s() {
            return e(n, o, r, i);
          },
          c = t(n);
        return c ? c(n, o, r, s, i) : s();
      };
    }
    function E(e, t) {
      return function (n, o, r, i, s) {
        var c = function c() {
            return e(n, o, r, i, s);
          },
          l = t(n);
        return l ? l(n, o, r, i, c, s) : c();
      };
    }
    function M(e, t) {
      return function (n, o, r, i) {
        e(n, o, r, i);
        var s = t(n);
        s && s(n, o, r, i);
      };
    }
    function S(e, t, n, o, r) {
      var i = n[t];
      var _loop = function _loop() {
        if ("function" == typeof _n2[0]) {
          var _e3 = _n2[0],
            _t3 = _n2[1];
          i = o(i, function (n) {
            return (_e3(n) && _t3) || void 0;
          });
        } else {
          var _e4 = _n2[1],
            _t4 = {};
          for (var _n3 in _e4) {
            var _r3 = _e4[_n3];
            _r3 &&
              (_t4[_n3] = _r3.reduce(function (e, t) {
                return o(e, function () {
                  return t;
                });
              }, i));
          }
          i = o(i, function (e) {
            var n = _t4[e.getType()];
            return n && r(n);
          });
        }
      };
      for (var _n2 of e[t]) {
        _loop();
      }
      n[t] = i;
    }
    function v(e, t, n, o) {
      if (!o) return;
      var r = e[t];
      if ("function" == typeof n) r.push([n, o]);
      else {
        var _e5 = r[r.length - 1];
        var _t5;
        _e5 && "types" === _e5[0]
          ? (_t5 = _e5[1])
          : ((_t5 = {}), r.push(["types", _t5]));
        for (var _e6 in n) {
          var _n4 = _t5[_e6] || [];
          ((_t5[_e6] = _n4), _n4.push(o));
        }
      }
    }
    function C(e) {
      return "*" === e.nodes;
    }
    function b(e, o) {
      var r = (function (e) {
          var o = {},
            _n$getKnownTypesAndNo =
              require("LexicalExtension").getKnownTypesAndNodes(e),
            r = _n$getKnownTypesAndNo.nodes;
          for (var _e7 of r) o[_e7.getType()] = { klass: _e7, types: {} };
          for (var _e8 of Object.values(o))
            if (_e8) {
              var _n5 = _e8.klass.getType();
              for (
                var _r4 = _e8.klass;
                require("Lexical").$isLexicalNode(_r4.prototype);
                _r4 = Object.getPrototypeOf(_r4)
              ) {
                var _t$getStaticNodeConfi =
                    require("Lexical").getStaticNodeConfig(_r4),
                  _e9 = _t$getStaticNodeConfi.ownNodeType,
                  _i2 = _e9 && o[_e9];
                _i2 && (_i2.types[_n5] = !0);
              }
            }
          return o;
        })(e),
        i = {
          $createDOM: [],
          $decorateDOM: [],
          $exportDOM: [],
          $extractWithChild: [],
          $getDOMSlot: [],
          $shouldExclude: [],
          $shouldInclude: [],
          $updateDOM: [],
        };
      for (var _e0 of (function (e) {
        var n = [],
          o = [],
          r = [];
        for (var _i3 of e)
          if (C(_i3)) n.push(_i3);
          else if (Array.isArray(_i3.nodes))
            for (var _e1 of _i3.nodes)
              require("Lexical").$isLexicalNode(_e1.prototype)
                ? r.push(
                    1 === _i3.nodes.length
                      ? _i3
                      : babelHelpers["extends"]({}, _i3, { nodes: [_e1] }),
                  )
                : o.push(
                    1 === _i3.nodes.length
                      ? _i3
                      : babelHelpers["extends"]({}, _i3, { nodes: [_e1] }),
                  );
        var i = new Map(),
          s = function s(e) {
            var n = i.get(e);
            if (void 0 === n) {
              n = 0;
              for (
                var _o3 = e;
                require("Lexical").$isLexicalNode(_o3.prototype);
                _o3 = Object.getPrototypeOf(_o3)
              )
                n++;
              i.set(e, n);
            }
            return n;
          };
        return (
          r.sort(function (e, t) {
            return s(e.nodes[0]) - s(t.nodes[0]);
          }),
          [].concat(r, o, n)
        );
      })(o)) {
        var _t6 = h(r, _e0);
        for (var _n6 in i) {
          v(i, _n6, _t6, _e0[_n6]);
        }
      }
      return i;
    }
    function w(e) {
      return e;
    }
    var R = require("Lexical").defineExtension({
      build: function build(e, t, n) {
        return { defaults: l(t.contextDefaults, void 0) };
      },
      config: { contextDefaults: [], overrides: [] },
      html: {
        export: new Map([
          [
            require("Lexical").RootNode,
            function () {
              var e = document.createElement("div");
              return ((e.role = "textbox"), { element: e });
            },
          ],
        ]),
      },
      init: function init(e, n) {
        e.dom = (function (e, _ref2) {
          var n = _ref2.overrides;
          var o = b(e, n),
            r = babelHelpers["extends"](
              {},
              require("Lexical").DEFAULT_EDITOR_DOM_CONFIG,
              e.dom,
            );
          return (
            S(o, "$createDOM", r, N, m),
            S(o, "$exportDOM", r, N, m),
            S(o, "$extractWithChild", r, E, $),
            S(o, "$getDOMSlot", r, D, x),
            S(o, "$shouldExclude", r, D, x),
            S(o, "$shouldInclude", r, D, x),
            S(o, "$updateDOM", r, O, y),
            S(o, "$decorateDOM", r, M, w),
            r
          );
        })(e, n);
      },
      mergeConfig: function mergeConfig(e, n) {
        var o = require("Lexical").shallowMergeConfig(e, n);
        for (var _t7 of ["overrides", "contextDefaults"])
          n[_t7] && (o[_t7] = [].concat(e[_t7], n[_t7]));
        return o;
      },
      name: d,
    });
    function T(e, n, o) {
      return (function (e, n, o, r, _Object$assign) {
        return Object.assign(
          require("Lexical").createState(Symbol(n), { isEqual: r, parse: o }),
          ((_Object$assign = {}), (_Object$assign[e] = !0), _Object$assign),
        );
      })(a, e, n, o);
    }
    var L = T("root", Boolean),
      A = T("isExport", Boolean);
    function F(e) {
      var t = require("LexicalExtension").LexicalBuilder.maybeFromEditor(e);
      return t && t.hasExtensionByName(d)
        ? require("LexicalExtension").getExtensionDependencyFromEditor(e, R)
            .output.defaults
        : void 0;
    }
    function k(e) {
      return (
        (function (e, t) {
          var n = s(t);
          return n && n[e];
        })(a, e) || F(e)
      );
    }
    var P = (function (e, n) {
      if (n === void 0) {
        n = function n() {};
      }
      return function (o, i) {
        if (i === void 0) {
          i = require("Lexical").$getEditor();
        }
        return function (c) {
          var u = s(i),
            f = u && u[e],
            d = l(o, f || n(i));
          return d && d !== f
            ? (function (e, n, o, i) {
                if (i === void 0) {
                  i = require("Lexical").$getEditor();
                }
                var c = r,
                  l = s(i);
                try {
                  var _babelHelpers$extends;
                  return (
                    (r = babelHelpers["extends"](
                      {},
                      l,
                      ((_babelHelpers$extends = { editor: i }),
                      (_babelHelpers$extends[e] = n),
                      _babelHelpers$extends),
                    )),
                    o()
                  );
                } finally {
                  r = c;
                }
              })(e, d, c, i)
            : c();
        };
      };
    })(a, F);
    function _(e) {
      return e.constructor.name === CSSStyleRule.name;
    }
    var B = new Set(["STYLE", "SCRIPT"]);
    function I(e, n, o) {
      if (n === void 0) {
        n = null;
      }
      if (o === void 0) {
        o = require("Lexical").$getEditor();
      }
      return P(
        [f(A, !0)],
        o,
      )(function () {
        var r = require("Lexical").$getRoot(),
          i = require("Lexical").$getEditorDOMRenderConfig(o),
          s = e.append.bind(e);
        for (var _e10 of r.getChildren()) j(o, _e10, s, n, i);
        return e;
      });
    }
    function j(n, o, r, i, s) {
      if (i === void 0) {
        i = null;
      }
      if (s === void 0) {
        s = require("Lexical").$getEditorDOMRenderConfig(n);
      }
      var c = s.$shouldInclude(o, i, n);
      var l = s.$shouldExclude(o, i, n);
      var u = o;
      null !== i &&
        require("Lexical").$isTextNode(o) &&
        (u = require("LexicalSelection").$sliceSelectedTextNodeContent(
          i,
          o,
          "clone",
        ));
      var f = s.$exportDOM(u, n),
        d = f.element,
        a = f.after,
        p = f.append,
        g = f.$getChildNodes;
      if (!d) return !1;
      var h = document.createDocumentFragment(),
        m = g
          ? g()
          : require("Lexical").$isElementNode(u)
            ? u.getChildren()
            : [],
        x = h.append.bind(h);
      for (var _e11 of m) {
        var _t8 = j(n, _e11, x, i, s);
        !c && _t8 && s.$extractWithChild(o, _e11, i, "html", n) && (c = !0);
      }
      if (c && !l) {
        if (
          ((require("Lexical").isHTMLElement(d) ||
            require("Lexical").isDocumentFragment(d)) &&
            (p ? p(h) : d.append(h)),
          r(d),
          a)
        ) {
          var _e12 = a.call(u, d);
          _e12 &&
            (require("Lexical").isDocumentFragment(d)
              ? d.replaceChildren(_e12)
              : d.replaceWith(_e12));
        }
      } else r(h);
      return c;
    }
    function q(e, n, o, r, i, s) {
      var _l2;
      if (i === void 0) {
        i = new Map();
      }
      var c = [];
      if (B.has(e.nodeName)) return c;
      var l = null;
      var u = (function (e, t) {
          var n = e.nodeName,
            o = t._htmlConversions.get(n.toLowerCase());
          var r = null;
          if (void 0 !== o)
            for (var _t9 of o) {
              var _n7 = _t9(e);
              null !== _n7 &&
                (null === r || (r.priority || 0) <= (_n7.priority || 0)) &&
                (r = _n7);
            }
          return null !== r ? r.conversion : null;
        })(e, n),
        f = u ? u(e) : null;
      var d = null;
      if (null !== f) {
        d = f.after;
        var _t0 = f.node;
        if (
          ((l = Array.isArray(_t0) ? _t0[_t0.length - 1] : _t0), null !== l)
        ) {
          for (var _ref4 of i) {
            var _e13 = _ref4[1];
            if (((l = _e13(l, s)), !l)) break;
          }
          l && c.push.apply(c, Array.isArray(_t0) ? _t0 : [l]);
        }
        null != f.forChild && i.set(e.nodeName, f.forChild);
      }
      var a = e.childNodes;
      var p = [];
      var g =
        (null == l || !require("Lexical").$isRootOrShadowRoot(l)) &&
        ((null != l && require("Lexical").$isBlockElementNode(l)) || r);
      for (var _e14 = 0; _e14 < a.length; _e14++) {
        var _p;
        (_p = p).push.apply(_p, q(a[_e14], n, o, g, new Map(i), l));
      }
      if (
        (null != d && (p = d(p)),
        require("Lexical").isBlockDomNode(e) &&
          (p = U(
            e,
            p,
            g
              ? function () {
                  var e = new (require("Lexical").ArtificialNode__DO_NOT_USE)();
                  return (o.push(e), e);
                }
              : require("Lexical").$createParagraphNode,
          )),
        null == l)
      ) {
        if (p.length > 0) for (var _e15 of p) c.push(_e15);
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
    function U(e, n, o) {
      var r = e.style.textAlign,
        i = [];
      var s = [];
      for (var _e16 = 0; _e16 < n.length; _e16++) {
        var _c2 = n[_e16];
        if (require("Lexical").$isBlockElementNode(_c2))
          (r && !_c2.getFormat() && _c2.setFormat(r), i.push(_c2));
        else if (
          (s.push(_c2),
          _e16 === n.length - 1 ||
            (_e16 < n.length - 1 &&
              require("Lexical").$isBlockElementNode(n[_e16 + 1])))
        ) {
          var _e17 = o();
          (_e17.setFormat(r),
            _e17.append.apply(_e17, s),
            i.push(_e17),
            (s = []));
        }
      }
      return i;
    }
    ((exports.$generateDOMFromNodes = I),
      (exports.$generateDOMFromRoot = function (e, n) {
        if (n === void 0) {
          n = require("Lexical").$getRoot();
        }
        var o = require("Lexical").$getEditor();
        return P(
          [f(A, !0), f(L, !0)],
          o,
        )(function () {
          var r = require("Lexical").$getEditorDOMRenderConfig(o),
            i = e.append.bind(e);
          return (j(o, n, i, null, r), e);
        });
      }),
      (exports.$generateHtmlFromNodes = function (e, t) {
        if (t === void 0) {
          t = null;
        }
        return (
          ("undefined" == typeof document ||
            ("undefined" == typeof window && void 0 === global.window)) &&
            o(338),
          I(document.createElement("div"), t, e).innerHTML
        );
      }),
      (exports.$generateNodesFromDOM = function (e, n) {
        require("Lexical").isDOMDocumentNode(n) &&
          (function (e) {
            if (null === e.querySelector("style")) return;
            var n = new Map();
            function o(e) {
              var t = n.get(e);
              if (void 0 === t) {
                t = new Set();
                for (var _n8 = 0; _n8 < e.style.length; _n8++)
                  t.add(e.style[_n8]);
                n.set(e, t);
              }
              return t;
            }
            try {
              for (var _n9 of Array.from(e.styleSheets)) {
                var _r5 = void 0;
                try {
                  _r5 = _n9.cssRules;
                } catch (e) {
                  continue;
                }
                for (var _n0 of Array.from(_r5)) {
                  if (!_(_n0)) continue;
                  var _r6 = void 0;
                  try {
                    _r6 = e.querySelectorAll(_n0.selectorText);
                  } catch (e) {
                    continue;
                  }
                  for (var _e18 of Array.from(_r6)) {
                    if (!require("Lexical").isHTMLElement(_e18)) continue;
                    var _r7 = o(_e18);
                    for (var _t1 = 0; _t1 < _n0.style.length; _t1++) {
                      var _o4 = _n0.style[_t1];
                      _r7.has(_o4) ||
                        _e18.style.setProperty(
                          _o4,
                          _n0.style.getPropertyValue(_o4),
                          _n0.style.getPropertyPriority(_o4),
                        );
                    }
                  }
                }
              }
            } catch (e) {}
          })(n);
        var o = require("Lexical").isDOMDocumentNode(n)
            ? n.body.childNodes
            : n.childNodes,
          r = [],
          i = [];
        for (var _t10 of o)
          if (!B.has(_t10.nodeName)) {
            var _n1 = q(_t10, e, i, !1);
            if (null !== _n1) for (var _e19 of _n1) r.push(_e19);
          }
        return (
          (function (e) {
            for (var _n10 of e)
              _n10.getParent() &&
                _n10.getNextSibling() instanceof
                  require("Lexical").ArtificialNode__DO_NOT_USE &&
                _n10.insertAfter(require("Lexical").$createLineBreakNode());
            for (var _t11 of e) {
              var _e20 = _t11.getParent();
              _e20 &&
                _e20.splice(_t11.getIndexWithinParent(), 1, _t11.getChildren());
            }
          })(i),
          r
        );
      }),
      (exports.$getRenderContextValue = function (e, n) {
        if (n === void 0) {
          n = require("Lexical").$getEditor();
        }
        return i(k(n), e);
      }),
      (exports.$withRenderContext = P),
      (exports.DOMRenderExtension = R),
      (exports.RenderContextExport = A),
      (exports.RenderContextRoot = L),
      (exports.contextUpdater = function (e, t) {
        return { cfg: e, updater: t };
      }),
      (exports.contextValue = f),
      (exports.createRenderState = T),
      (exports.domOverride = function (e, t) {
        return babelHelpers["extends"]({}, t, { nodes: e });
      }));
  },
  null,
);
