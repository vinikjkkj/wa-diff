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
      throw new Error(e);
    }
    var r;
    function s(e, t) {
      var n = t.key;
      return e && n in e ? e[n] : t.defaultValue;
    }
    function i(e) {
      return r && r.editor === e ? r : void 0;
    }
    function c(e, t) {
      if ("cfg" in t) {
        var _n = t.cfg,
          _o = t.updater;
        return [_n, _o(s(e, _n))];
      }
      return t;
    }
    function l(e, t) {
      var n = t;
      for (var _o2 of e) {
        var _c = c(n, _o2),
          _e = _c[0],
          _r = _c[1],
          _i = _e.key;
        if (n === t && s(n, _e) === _r) continue;
        var _l = n || u(t);
        ((_l[_i] = _r), (n = _l));
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
      for (var _s of t)
        if ("getType" in _s) {
          var _t = _s.getType();
          if (n) {
            var _r2 = e[_t];
            (void 0 === _r2 &&
              o(
                "Node class " +
                  _s.name +
                  " with type " +
                  _t +
                  " not registered in editor",
              ),
              (n = Object.assign(n, _r2.types)));
          }
          r.push(g(_s));
        } else ((n = void 0), r.push(_s));
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
    function y(e) {
      return function (t, n, o, r) {
        return e(t, n, r);
      };
    }
    function x(e) {
      return function (t, n, o, r, s) {
        return e(t, n, o, s);
      };
    }
    function $(e) {
      return function (t, n, o, r, s, i) {
        return e(t, n, o, r, i);
      };
    }
    function N(e, t) {
      return function (n, o) {
        var r = function r() {
            return e(n, o);
          },
          s = t(n);
        return s ? s(n, r, o) : r();
      };
    }
    function D(e, t) {
      return function (n, o, r) {
        var s = function s() {
            return e(n, o, r);
          },
          i = t(n);
        return i ? i(n, o, s, r) : s();
      };
    }
    function O(e, t) {
      return function (n, o, r, s) {
        var i = function i() {
            return e(n, o, r, s);
          },
          c = t(n);
        return c ? c(n, o, r, i, s) : i();
      };
    }
    function E(e, t) {
      return function (n, o, r, s, i) {
        var c = function c() {
            return e(n, o, r, s, i);
          },
          l = t(n);
        return l ? l(n, o, r, s, c, i) : c();
      };
    }
    function M(e, t) {
      return function (n, o, r, s) {
        e(n, o, r, s);
        var i = t(n);
        i && i(n, o, r, s);
      };
    }
    function S(e, t, n, o, r) {
      var s = n[t];
      var _loop = function _loop() {
        if ("function" == typeof _n2[0]) {
          var _e2 = _n2[0],
            _t3 = _n2[1];
          s = o(s, function (n) {
            return (_e2(n) && _t3) || void 0;
          });
        } else {
          var _e3 = _n2[1],
            _t4 = {};
          for (var _n3 in _e3) {
            var _r3 = _e3[_n3];
            _r3 &&
              (_t4[_n3] = _r3.reduce(function (e, t) {
                return o(e, function () {
                  return t;
                });
              }, s));
          }
          s = o(s, function (e) {
            var n = _t4[e.getType()];
            return n && r(n);
          });
        }
      };
      for (var _n2 of e[t]) {
        _loop();
      }
      n[t] = s;
    }
    function C(e, t, n, o) {
      if (!o) return;
      var r = e[t];
      if ("function" == typeof n) r.push([n, o]);
      else {
        var _e4 = r[r.length - 1];
        var _t5;
        _e4 && "types" === _e4[0]
          ? (_t5 = _e4[1])
          : ((_t5 = {}), r.push(["types", _t5]));
        for (var _e5 in n) {
          var _n4 = _t5[_e5] || [];
          ((_t5[_e5] = _n4), _n4.push(o));
        }
      }
    }
    function b(e) {
      return "*" === e.nodes;
    }
    function w(e, o) {
      var r = (function (e) {
          var o = {},
            _n$getKnownTypesAndNo =
              require("LexicalExtension").getKnownTypesAndNodes(e),
            r = _n$getKnownTypesAndNo.nodes;
          for (var _e6 of r) o[_e6.getType()] = { klass: _e6, types: {} };
          for (var _e7 of Object.values(o))
            if (_e7) {
              var _n5 = _e7.klass.getType();
              for (
                var _r4 = _e7.klass;
                require("Lexical").$isLexicalNode(_r4.prototype);
                _r4 = Object.getPrototypeOf(_r4)
              ) {
                var _t$getStaticNodeConfi =
                    require("Lexical").getStaticNodeConfig(_r4),
                  _e8 = _t$getStaticNodeConfi.ownNodeType,
                  _s2 = _e8 && o[_e8];
                _s2 && (_s2.types[_n5] = !0);
              }
            }
          return o;
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
      for (var _e9 of (function (e) {
        var n = [],
          o = [],
          r = [];
        for (var _s3 of e)
          if (b(_s3)) n.push(_s3);
          else if (Array.isArray(_s3.nodes))
            for (var _e0 of _s3.nodes)
              require("Lexical").$isLexicalNode(_e0.prototype)
                ? r.push(
                    1 === _s3.nodes.length
                      ? _s3
                      : babelHelpers["extends"]({}, _s3, { nodes: [_e0] }),
                  )
                : o.push(
                    1 === _s3.nodes.length
                      ? _s3
                      : babelHelpers["extends"]({}, _s3, { nodes: [_e0] }),
                  );
        var s = new Map(),
          i = function i(e) {
            var n = s.get(e);
            if (void 0 === n) {
              n = 0;
              for (
                var _o3 = e;
                require("Lexical").$isLexicalNode(_o3.prototype);
                _o3 = Object.getPrototypeOf(_o3)
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
      })(o)) {
        var _t6 = h(r, _e9);
        for (var _n6 in s) {
          C(s, _n6, _t6, _e9[_n6]);
        }
      }
      return s;
    }
    function v(e) {
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
          var o = w(e, n),
            r = babelHelpers["extends"](
              {},
              require("Lexical").DEFAULT_EDITOR_DOM_CONFIG,
              e.dom,
            );
          return (
            S(o, "$createDOM", r, N, m),
            S(o, "$exportDOM", r, N, m),
            S(o, "$extractWithChild", r, E, $),
            S(o, "$getDOMSlot", r, D, y),
            S(o, "$shouldExclude", r, D, y),
            S(o, "$shouldInclude", r, D, y),
            S(o, "$updateDOM", r, O, x),
            S(o, "$decorateDOM", r, M, v),
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
    var A = T("root", Boolean),
      F = T("isExport", Boolean);
    function L(e) {
      var t = require("LexicalExtension").LexicalBuilder.maybeFromEditor(e);
      return t && t.hasExtensionByName(d)
        ? require("LexicalExtension").getExtensionDependencyFromEditor(e, R)
            .output.defaults
        : void 0;
    }
    function k(e) {
      return (
        (function (e, t) {
          var n = i(t);
          return n && n[e];
        })(a, e) || L(e)
      );
    }
    var _ = (function (e, n) {
      if (n === void 0) {
        n = function n() {};
      }
      return function (o, s) {
        if (s === void 0) {
          s = require("Lexical").$getEditor();
        }
        return function (c) {
          var u = i(s),
            f = u && u[e],
            d = l(o, f || n(s));
          return d && d !== f
            ? (function (e, n, o, s) {
                if (s === void 0) {
                  s = require("Lexical").$getEditor();
                }
                var c = r,
                  l = i(s);
                try {
                  var _babelHelpers$extends;
                  return (
                    (r = babelHelpers["extends"](
                      {},
                      l,
                      ((_babelHelpers$extends = { editor: s }),
                      (_babelHelpers$extends[e] = n),
                      _babelHelpers$extends),
                    )),
                    o()
                  );
                } finally {
                  r = c;
                }
              })(e, d, c, s)
            : c();
        };
      };
    })(a, L);
    function B(e) {
      return e.constructor.name === CSSStyleRule.name;
    }
    var P = new Set(["STYLE", "SCRIPT"]);
    function I(e, n, o) {
      if (n === void 0) {
        n = null;
      }
      if (o === void 0) {
        o = require("Lexical").$getEditor();
      }
      return _(
        [f(F, !0)],
        o,
      )(function () {
        var r = require("Lexical").$getRoot(),
          s = require("Lexical").$getEditorDOMRenderConfig(o),
          i = e.append.bind(e);
        for (var _e1 of r.getChildren()) j(o, _e1, i, n, s);
        return e;
      });
    }
    function j(n, o, r, s, i) {
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
      var f = i.$exportDOM(u, n),
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
        y = h.append.bind(h);
      for (var _e10 of m) {
        var _t8 = j(n, _e10, y, s, i);
        !c && _t8 && i.$extractWithChild(o, _e10, s, "html", n) && (c = !0);
      }
      if (c && !l) {
        if (
          ((require("Lexical").isHTMLElement(d) ||
            require("Lexical").isDocumentFragment(d)) &&
            (p ? p(h) : d.append(h)),
          r(d),
          a)
        ) {
          var _e11 = a.call(u, d);
          _e11 &&
            (require("Lexical").isDocumentFragment(d)
              ? d.replaceChildren(_e11)
              : d.replaceWith(_e11));
        }
      } else r(h);
      return c;
    }
    function q(e, n, o, r, s, i) {
      var _l2;
      if (s === void 0) {
        s = new Map();
      }
      var c = [];
      if (P.has(e.nodeName)) return c;
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
          for (var _ref4 of s) {
            var _e12 = _ref4[1];
            if (((l = _e12(l, i)), !l)) break;
          }
          l && c.push.apply(c, Array.isArray(_t0) ? _t0 : [l]);
        }
        null != f.forChild && s.set(e.nodeName, f.forChild);
      }
      var a = e.childNodes;
      var p = [];
      var g =
        (null == l || !require("Lexical").$isRootOrShadowRoot(l)) &&
        ((null != l && require("Lexical").$isBlockElementNode(l)) || r);
      for (var _e13 = 0; _e13 < a.length; _e13++) {
        var _p;
        (_p = p).push.apply(_p, q(a[_e13], n, o, g, new Map(s), l));
      }
      if (
        (null != d && (p = d(p)),
        require("Lexical").isBlockDomNode(e) &&
          (p = H(
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
        if (p.length > 0) for (var _e14 of p) c.push(_e14);
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
    function H(e, n, o) {
      var r = e.style.textAlign,
        s = [];
      var i = [];
      for (var _e15 = 0; _e15 < n.length; _e15++) {
        var _c2 = n[_e15];
        if (require("Lexical").$isBlockElementNode(_c2))
          (r && !_c2.getFormat() && _c2.setFormat(r), s.push(_c2));
        else if (
          (i.push(_c2),
          _e15 === n.length - 1 ||
            (_e15 < n.length - 1 &&
              require("Lexical").$isBlockElementNode(n[_e15 + 1])))
        ) {
          var _e16 = o();
          (_e16.setFormat(r),
            _e16.append.apply(_e16, i),
            s.push(_e16),
            (i = []));
        }
      }
      return s;
    }
    ((exports.$generateDOMFromNodes = I),
      (exports.$generateDOMFromRoot = function (e, n) {
        if (n === void 0) {
          n = require("Lexical").$getRoot();
        }
        var o = require("Lexical").$getEditor();
        return _(
          [f(F, !0), f(A, !0)],
          o,
        )(function () {
          var r = require("Lexical").$getEditorDOMRenderConfig(o),
            s = e.append.bind(e);
          return (j(o, n, s, null, r), e);
        });
      }),
      (exports.$generateHtmlFromNodes = function (e, t) {
        if (t === void 0) {
          t = null;
        }
        return (
          ("undefined" == typeof document ||
            ("undefined" == typeof window && void 0 === global.window)) &&
            o(
              "To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom or use withDOM from @lexical/headless/dom before calling this function.",
            ),
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
                  if (!B(_n0)) continue;
                  var _r6 = void 0;
                  try {
                    _r6 = e.querySelectorAll(_n0.selectorText);
                  } catch (e) {
                    continue;
                  }
                  for (var _e17 of Array.from(_r6)) {
                    if (!require("Lexical").isHTMLElement(_e17)) continue;
                    var _r7 = o(_e17);
                    for (var _t1 = 0; _t1 < _n0.style.length; _t1++) {
                      var _o4 = _n0.style[_t1];
                      _r7.has(_o4) ||
                        _e17.style.setProperty(
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
          s = [];
        for (var _t10 of o)
          if (!P.has(_t10.nodeName)) {
            var _n1 = q(_t10, e, s, !1);
            if (null !== _n1) for (var _e18 of _n1) r.push(_e18);
          }
        return (
          (function (e) {
            for (var _n10 of e)
              _n10.getParent() &&
                _n10.getNextSibling() instanceof
                  require("Lexical").ArtificialNode__DO_NOT_USE &&
                _n10.insertAfter(require("Lexical").$createLineBreakNode());
            for (var _t11 of e) {
              var _e19 = _t11.getParent();
              _e19 &&
                _e19.splice(_t11.getIndexWithinParent(), 1, _t11.getChildren());
            }
          })(s),
          r
        );
      }),
      (exports.$getRenderContextValue = function (e, n) {
        if (n === void 0) {
          n = require("Lexical").$getEditor();
        }
        return s(k(n), e);
      }),
      (exports.$withRenderContext = _),
      (exports.DOMRenderExtension = R),
      (exports.RenderContextExport = F),
      (exports.RenderContextRoot = A),
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
