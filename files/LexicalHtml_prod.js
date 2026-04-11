__d(
  "LexicalHtml.prod",
  ["Lexical", "LexicalSelection", "LexicalUtils"],
  function $module_LexicalHtml_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function o(l, i, r, s) {
      if (s === void 0) {
        s = null;
      }
      var c = null === s || i.isSelected(s);
      var d = require("Lexical").$isElementNode(i) && i.excludeFromCopy("html");
      var u = i;
      null !== s &&
        require("Lexical").$isTextNode(i) &&
        (u = require("LexicalSelection").$sliceSelectedTextNodeContent(
          s,
          i,
          "clone",
        ));
      var a = require("Lexical").$isElementNode(u) ? u.getChildren() : [],
        f = require("Lexical").getRegisteredNode(l, u.getType());
      var m;
      m = f && void 0 !== f.exportDOM ? f.exportDOM(l, u) : u.exportDOM(l);
      var _m = m,
        h = _m.element,
        p = _m.after;
      if (!h) return !1;
      var g = document.createDocumentFragment();
      for (var _e = 0; _e < a.length; _e++) {
        var _n = a[_e],
          _r = o(l, _n, g, s);
        !c &&
          require("Lexical").$isElementNode(i) &&
          _r &&
          i.extractWithChild(_n, s, "html") &&
          (c = !0);
      }
      if (c && !d) {
        if (
          ((require("LexicalUtils").isHTMLElement(h) ||
            require("Lexical").isDocumentFragment(h)) &&
            h.append(g),
          r.append(h),
          p)
        ) {
          var _e2 = p.call(u, h);
          _e2 &&
            (require("Lexical").isDocumentFragment(h)
              ? h.replaceChildren(_e2)
              : h.replaceWith(_e2));
        }
      } else r.append(g);
      return c;
    }
    var l = new Set(["STYLE", "SCRIPT"]);
    function i(e, o, s, c, d, u) {
      var _f;
      if (d === void 0) {
        d = new Map();
      }
      var a = [];
      if (l.has(e.nodeName)) return a;
      var f = null;
      var m = (function (e, n) {
          var t = e.nodeName,
            o = n._htmlConversions.get(t.toLowerCase());
          var l = null;
          if (void 0 !== o)
            for (var _n2 of o) {
              var _t = _n2(e);
              null !== _t &&
                (null === l || (l.priority || 0) <= (_t.priority || 0)) &&
                (l = _t);
            }
          return null !== l ? l.conversion : null;
        })(e, o),
        h = m ? m(e) : null;
      var p = null;
      if (null !== h) {
        p = h.after;
        var _n3 = h.node;
        if (
          ((f = Array.isArray(_n3) ? _n3[_n3.length - 1] : _n3), null !== f)
        ) {
          var _a;
          for (var _ref2 of d) {
            var _e3 = _ref2[1];
            if (((f = _e3(f, u)), !f)) break;
          }
          f && (_a = a).push.apply(_a, Array.isArray(_n3) ? _n3 : [f]);
        }
        null != h.forChild && d.set(e.nodeName, h.forChild);
      }
      var g = e.childNodes;
      var N = [];
      var $ =
        (null == f || !require("Lexical").$isRootOrShadowRoot(f)) &&
        ((null != f && require("Lexical").$isBlockElementNode(f)) || c);
      for (var _e4 = 0; _e4 < g.length; _e4++) {
        var _N;
        (_N = N).push.apply(_N, i(g[_e4], o, s, $, new Map(d), f));
      }
      return (
        null != p && (N = p(N)),
        require("LexicalUtils").isBlockDomNode(e) &&
          (N = r(
            e,
            N,
            $
              ? function () {
                  var e = new (require("Lexical").ArtificialNode__DO_NOT_USE)();
                  return (s.push(e), e);
                }
              : require("Lexical").$createParagraphNode,
          )),
        null == f
          ? N.length > 0
            ? (a = a.concat(N))
            : require("LexicalUtils").isBlockDomNode(e) &&
              (function (e) {
                if (null == e.nextSibling || null == e.previousSibling)
                  return !1;
                return (
                  require("Lexical").isInlineDomNode(e.nextSibling) &&
                  require("Lexical").isInlineDomNode(e.previousSibling)
                );
              })(e) &&
              (a = a.concat(require("Lexical").$createLineBreakNode()))
          : require("Lexical").$isElementNode(f) &&
            (_f = f).append.apply(_f, N),
        a
      );
    }
    function r(e, n, o) {
      var l = e.style.textAlign,
        i = [];
      var r = [];
      for (var _e5 = 0; _e5 < n.length; _e5++) {
        var s = n[_e5];
        if (require("Lexical").$isBlockElementNode(s))
          (l && !s.getFormat() && s.setFormat(l), i.push(s));
        else if (
          (r.push(s),
          _e5 === n.length - 1 ||
            (_e5 < n.length - 1 &&
              require("Lexical").$isBlockElementNode(n[_e5 + 1])))
        ) {
          var _e6 = o();
          (_e6.setFormat(l), _e6.append.apply(_e6, r), i.push(_e6), (r = []));
        }
      }
      return i;
    }
    ((exports.$generateHtmlFromNodes = function (e, n) {
      if (
        "undefined" == typeof document ||
        ("undefined" == typeof window && void 0 === global.window)
      )
        throw new Error(
          "To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.",
        );
      var l = document.createElement("div"),
        i = require("Lexical").$getRoot().getChildren();
      for (var _t2 = 0; _t2 < i.length; _t2++) {
        o(e, i[_t2], l, n);
      }
      return l.innerHTML;
    }),
      (exports.$generateNodesFromDOM = function (e, n) {
        var o = require("Lexical").isDOMDocumentNode(n)
          ? n.body.childNodes
          : n.childNodes;
        var r = [];
        var s = [];
        for (var _n4 of o)
          if (!l.has(_n4.nodeName)) {
            var _t3 = i(_n4, e, s, !1);
            null !== _t3 && (r = r.concat(_t3));
          }
        return (
          (function (e) {
            for (var _n5 of e)
              _n5.getNextSibling() instanceof
                require("Lexical").ArtificialNode__DO_NOT_USE &&
                _n5.insertAfter(require("Lexical").$createLineBreakNode());
            for (var _n6 of e) {
              var _e7 = _n6.getChildren();
              for (var _t4 of _e7) _n6.insertBefore(_t4);
              _n6.remove();
            }
          })(s),
          r
        );
      }));
  },
  null,
);
