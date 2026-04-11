__d(
  "ReactStrictDomWeb",
  ["react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = ["for", "style"],
      u,
      c,
      d = (c || (c = o("react"))).jsx,
      m = {};
    function p(e) {
      (process.env.NODE_ENV !== "test" && m[e]) || ((m[e] = !0), "" + e);
    }
    var _ = new Set([
      "alt",
      "aria-activedescendant",
      "aria-atomic",
      "aria-autocomplete",
      "aria-busy",
      "aria-checked",
      "aria-colcount",
      "aria-colindex",
      "aria-colindextext",
      "aria-colspan",
      "aria-controls",
      "aria-current",
      "aria-describedby",
      "aria-details",
      "aria-disabled",
      "aria-errormessage",
      "aria-expanded",
      "aria-flowto",
      "aria-haspopup",
      "aria-hidden",
      "aria-invalid",
      "aria-keyshortcuts",
      "aria-label",
      "aria-labelledby",
      "aria-level",
      "aria-live",
      "aria-modal",
      "aria-multiline",
      "aria-multiselectable",
      "aria-orientation",
      "aria-owns",
      "aria-placeholder",
      "aria-posinset",
      "aria-pressed",
      "aria-readonly",
      "aria-required",
      "aria-roledescription",
      "aria-rowcount",
      "aria-rowindex",
      "aria-rowindextext",
      "aria-rowspan",
      "aria-selected",
      "aria-setsize",
      "aria-sort",
      "aria-valuemax",
      "aria-valuemin",
      "aria-valuenow",
      "aria-valuetext",
      "autoCapitalize",
      "autoComplete",
      "autoFocus",
      "checked",
      "children",
      "crossOrigin",
      "decoding",
      "defaultChecked",
      "defaultValue",
      "dir",
      "disabled",
      "download",
      "draggable",
      "elementTiming",
      "enterKeyHint",
      "fetchPriority",
      "for",
      "height",
      "hidden",
      "href",
      "id",
      "inert",
      "inputMode",
      "label",
      "lang",
      "loading",
      "max",
      "maxLength",
      "min",
      "minLength",
      "multiple",
      "name",
      "onAuxClick",
      "onBeforeInput",
      "onBlur",
      "onChange",
      "onClick",
      "onContextMenu",
      "onCopy",
      "onCut",
      "onError",
      "onFocus",
      "onFocusIn",
      "onFocusOut",
      "onFullscreenChange",
      "onFullscreenError",
      "onGotPointerCapture",
      "onInput",
      "onInvalid",
      "onKeyDown",
      "onKeyUp",
      "onLoad",
      "onLostPointerCapture",
      "onPaste",
      "onPointerCancel",
      "onPointerDown",
      "onPointerEnter",
      "onPointerLeave",
      "onPointerMove",
      "onPointerOut",
      "onPointerOver",
      "onPointerUp",
      "onScroll",
      "onSelect",
      "onSelectionChange",
      "onWheel",
      "placeholder",
      "readOnly",
      "referrerPolicy",
      "rel",
      "required",
      "role",
      "rows",
      "selected",
      "spellCheck",
      "src",
      "srcSet",
      "step",
      "style",
      "tabIndex",
      "target",
      "type",
      "value",
      "width",
      "suppressHydrationWarning",
      "onMouseDown",
      "onMouseEnter",
      "onMouseLeave",
      "onMouseMove",
      "onMouseOut",
      "onMouseOver",
      "onMouseUp",
      "onTouchCancel",
      "onTouchEnd",
      "onTouchMove",
      "onTouchStart",
    ]);
    function f(e) {
      return _.has(e) || e.indexOf("data-") > -1;
    }
    var g = {};
    Object.defineProperty(g, "__esModule", { value: !0 });
    var h = (g.styleq = void 0),
      y = new WeakMap(),
      C = "$$css";
    function b(e) {
      var t, n, r;
      return (
        e != null &&
          ((t = e.disableCache === !0),
          (n = e.disableMix === !0),
          (r = e.transform)),
        function () {
          for (
            var e = [],
              o = "",
              a = null,
              i = "",
              l = t ? null : y,
              s = new Array(arguments.length),
              u = 0;
            u < arguments.length;
            u++
          )
            s[u] = arguments[u];
          for (; s.length > 0; ) {
            var c = s.pop();
            if (!(c == null || c === !1)) {
              if (Array.isArray(c)) {
                for (var d = 0; d < c.length; d++) s.push(c[d]);
                continue;
              }
              var m = r != null ? r(c) : c;
              if (m.$$css != null) {
                var p = "";
                if (l != null && l.has(m)) {
                  var _ = l.get(m);
                  _ != null &&
                    ((p = _[0]), (i = _[2]), e.push.apply(e, _[1]), (l = _[3]));
                } else {
                  var f = [];
                  for (var g in m) {
                    var h = m[g];
                    if (g === C) {
                      var b = m[g];
                      b !== !0 && (i = i ? b + "; " + i : b);
                      continue;
                    }
                    typeof h == "string" || h === null
                      ? e.includes(g) ||
                        (e.push(g),
                        l != null && f.push(g),
                        typeof h == "string" && (p += p ? " " + h : h))
                      : "styleq: "
                          .concat(g, " typeof ")
                          .concat(String(h), ' is not "string" or "null".');
                  }
                  if (l != null) {
                    var v = new WeakMap();
                    (l.set(m, [p, f, i, v]), (l = v));
                  }
                }
                p && (o = o ? p + " " + o : p);
              } else if (n)
                (a == null && (a = {}), (a = Object.assign({}, m, a)));
              else {
                var S = null;
                for (var R in m) {
                  var L = m[R];
                  L !== void 0 &&
                    (e.includes(R) ||
                      (L != null &&
                        (a == null && (a = {}),
                        S == null && (S = {}),
                        (S[R] = L)),
                      e.push(R),
                      (l = null)));
                }
                S != null && (a = Object.assign(S, a));
              }
            }
          }
          var E = [o, a, i];
          return E;
        }
      );
    }
    var v = (h = g.styleq = b());
    v.factory = b;
    var S = h.factory({ disableMix: !0 });
    function R() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = S(t),
        o = r[0],
        a = r[1],
        i = r[2],
        l = {};
      if (
        (o != null && o !== "" && (l.className = o),
        a != null && (l.style = a),
        i != null && i !== "")
      ) {
        var s = i.split(";"),
          u = {};
        for (var c of s) {
          var d = c.trim(),
            m = d.split(":"),
            p = m[0],
            _ = m[1];
          _ != null && (u[p] = u[p] != null ? u[p] + "," + _ : _);
        }
        l["data-style-src"] = Object.keys(u)
          .map(function (e) {
            return e + ":" + u[e];
          })
          .join("; ");
      }
      return l;
    }
    function L(e) {
      Object.keys(e).forEach(function (t) {
        var n = f(t);
        n || (p('invalid prop "' + t + '"'), delete e[t]);
      });
    }
    function E(t, n) {
      var r = { $$css: !0, "debug::name": "html-" + t };
      function o(o) {
        var a = o.ref,
          i = babelHelpers.objectWithoutPropertiesLoose(o, e),
          l = i.for,
          u = i.style,
          c = babelHelpers.objectWithoutPropertiesLoose(i, s),
          m = c;
        (L(m),
          l != null && (m.htmlFor = l),
          i.role != null &&
            (m.role = i.role === "none" ? "presentation" : i.role),
          t === "button"
            ? (m.type = m.type ? m.type : "button")
            : (t === "input" || t === "textarea") &&
              (m.dir = m.dir ? m.dir : "auto"));
        var p = R([r, n, u]),
          _ = d(t, babelHelpers.extends({}, m, p, { ref: a }));
        return _;
      }
      return ((o.displayName = "html." + t), o);
    }
    var k = {
        block: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        inline: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          textDecoration: "x1hl2dhg",
          textAlign: "x16tdsg8",
          wordWrap: "x1vvkbs",
          $$css: !0,
        },
        inlineblock: {
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        button: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          $$css: !0,
        },
        codePre: {
          fontFamily: "x1lxnp44",
          fontSize: "xrv4cvt",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        heading: { fontSize: "xngnso2", wordWrap: "x1vvkbs", $$css: !0 },
        hr: {
          backgroundColor: "x42x0ya",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          boxSizing: "x9f619",
          height: "xjm9jq1",
          $$css: !0,
        },
        img: {
          aspectRatio: "xuw900x",
          height: "xt7dq6l",
          maxWidth: "x193iq5w",
          $$css: !0,
        },
        input: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          $$css: !0,
        },
        list: {
          listStyleType: "x3ct3a4",
          listStylePosition: null,
          listStyleImage: null,
          $$css: !0,
        },
        strong: { fontWeight: "x117nqv4", $$css: !0 },
        textarea: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          resize: "x288g5",
          $$css: !0,
        },
      },
      I = k.inline,
      T = k.block,
      D = k.block,
      x = k.inline,
      $ = k.inline,
      P = k.inline,
      N = k.block,
      M = null,
      w = [k.inlineblock, k.button],
      A = [k.inline, k.codePre],
      F = null,
      O = k.block,
      B = k.inline,
      W = k.block,
      q = k.block,
      U = k.block,
      V = [k.block, k.heading],
      H = k.block,
      G = [k.block, k.hr],
      z = k.inline,
      j = k.img,
      K = [k.inlineblock, k.input],
      Q = null,
      X = null,
      Y = k.inline,
      J = k.block,
      Z = k.block,
      ee = k.inline,
      te = k.block,
      ne = [k.list, k.block],
      re = null,
      oe = null,
      ae = k.block,
      ie = [k.block, k.codePre],
      le = null,
      se = k.block,
      ue = k.inlineblock,
      ce = k.inline,
      de = [k.inline, k.strong],
      me = k.inline,
      pe = k.inline,
      _e = [k.inlineblock, k.textarea],
      fe = null,
      ge = [k.list, k.block],
      he = {
        a: I,
        article: T,
        aside: D,
        b: x,
        bdi: $,
        bdo: P,
        blockquote: N,
        br: M,
        button: w,
        code: A,
        del: F,
        div: O,
        em: B,
        fieldset: W,
        footer: q,
        form: U,
        h1: V,
        h2: V,
        h3: V,
        h4: V,
        h5: V,
        h6: V,
        header: H,
        hr: G,
        i: z,
        img: j,
        input: K,
        ins: Q,
        kbd: X,
        label: Y,
        li: J,
        main: Z,
        mark: ee,
        nav: te,
        ol: ne,
        optgroup: re,
        option: oe,
        p: ae,
        pre: ie,
        s: le,
        section: se,
        select: ue,
        span: ce,
        strong: de,
        sub: me,
        sup: pe,
        textarea: _e,
        u: fe,
        ul: ge,
      },
      ye = E("a", he.a),
      Ce = E("article", he.article),
      be = E("aside", he.aside),
      ve = E("b", he.b),
      Se = E("bdi", he.bdi),
      Re = E("bdo", he.bdo),
      Le = E("blockquote", he.blockquote),
      Ee = E("br", he.br),
      ke = E("button", he.button),
      Ie = E("code", he.code),
      Te = E("del", he.del),
      De = E("div", he.div),
      xe = E("em", he.em),
      $e = E("fieldset", he.fieldset),
      Pe = E("footer", he.footer),
      Ne = E("form", he.form),
      Me = E("h1", he.h1),
      we = E("h2", he.h2),
      Ae = E("h3", he.h3),
      Fe = E("h4", he.h4),
      Oe = E("h5", he.h5),
      Be = E("h6", he.h6),
      We = E("header", he.header),
      qe = E("hr", he.hr),
      Ue = E("i", he.i),
      Ve = E("img", he.img),
      He = E("input", he.input),
      Ge = E("ins", he.ins),
      ze = E("kbd", he.kbd),
      je = E("label", he.label),
      Ke = E("li", he.li),
      Qe = E("main", he.main),
      Xe = E("mark", he.mark),
      Ye = E("nav", he.nav),
      Je = E("ol", he.ol),
      Ze = E("optgroup", he.optgroup),
      et = E("option", he.option),
      tt = E("p", he.p),
      nt = E("pre", he.pre),
      rt = E("s", he.s),
      ot = E("section", he.section),
      at = E("select", he.select),
      it = E("span", he.span),
      lt = E("strong", he.strong),
      st = E("sub", he.sub),
      ut = E("sup", he.sup),
      ct = E("textarea", he.textarea),
      dt = E("u", he.u),
      mt = E("ul", he.ul),
      pt = Object.freeze({
        __proto__: null,
        a: ye,
        article: Ce,
        aside: be,
        b: ve,
        bdi: Se,
        bdo: Re,
        blockquote: Le,
        br: Ee,
        button: ke,
        code: Ie,
        del: Te,
        div: De,
        em: xe,
        fieldset: $e,
        footer: Pe,
        form: Ne,
        h1: Me,
        h2: we,
        h3: Ae,
        h4: Fe,
        h5: Oe,
        h6: Be,
        header: We,
        hr: qe,
        i: Ue,
        img: Ve,
        input: He,
        ins: Ge,
        kbd: ze,
        label: je,
        li: Ke,
        main: Qe,
        mark: Xe,
        nav: Ye,
        ol: Je,
        optgroup: Ze,
        option: et,
        p: tt,
        pre: nt,
        s: rt,
        section: ot,
        select: at,
        span: it,
        strong: lt,
        sub: st,
        sup: ut,
        textarea: ct,
        u: dt,
        ul: mt,
      });
    ((l.css = u || (u = r("stylex"))), (l.html = pt));
  },
  98,
);
