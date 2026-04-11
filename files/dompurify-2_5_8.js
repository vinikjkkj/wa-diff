__d(
  "dompurify-2.5.8",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      function e(t) {
        "@babel/helpers - typeof";
        return (
          (e =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    typeof Symbol == "function" &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          e(t)
        );
      }
      function t(e, n) {
        return (
          (t =
            Object.setPrototypeOf ||
            function (t, n) {
              return ((t.__proto__ = n), t);
            }),
          t(e, n)
        );
      }
      function n() {
        if (
          typeof Reflect == "undefined" ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function r(e, o, a) {
        return (
          n()
            ? (r = Reflect.construct)
            : (r = function (n, r, o) {
                var e = [null];
                e.push.apply(e, r);
                var a = Function.bind.apply(n, e),
                  i = new a();
                return (o && t(i, o.prototype), i);
              }),
          r.apply(null, arguments)
        );
      }
      function o(e) {
        return a(e) || i(e) || s(e) || c();
      }
      function a(e) {
        if (Array.isArray(e)) return u(e);
      }
      function i(e) {
        if (
          (typeof Symbol != "undefined" && e[Symbol.iterator] != null) ||
          e["@@iterator"] != null
        )
          return Array.from(e);
      }
      function s(e, t) {
        if (e) {
          if (typeof e == "string") return u(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            (n === "Object" && e.constructor && (n = e.constructor.name),
            n === "Map" || n === "Set")
          )
            return Array.from(e);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return u(e, t);
        }
      }
      function u(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function c() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      var d = Object.hasOwnProperty,
        m = Object.setPrototypeOf,
        p = Object.isFrozen,
        _ = Object.getPrototypeOf,
        f = Object.getOwnPropertyDescriptor,
        g = Object.freeze,
        h = Object.seal,
        y = Object.create,
        C = typeof Reflect != "undefined" && Reflect,
        b = C.apply,
        v = C.construct;
      (b ||
        (b = function (t, n, r) {
          return t.apply(n, r);
        }),
        g ||
          (g = function (t) {
            return t;
          }),
        h ||
          (h = function (t) {
            return t;
          }),
        v ||
          (v = function (t, n) {
            return r(t, o(n));
          }));
      var S = N(Array.prototype.forEach),
        R = N(Array.prototype.pop),
        L = N(Array.prototype.push),
        E = N(String.prototype.toLowerCase),
        k = N(String.prototype.toString),
        I = N(String.prototype.match),
        T = N(String.prototype.replace),
        D = N(String.prototype.indexOf),
        x = N(String.prototype.trim),
        $ = N(RegExp.prototype.test),
        P = M(TypeError);
      function N(e) {
        return function (t) {
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          return b(e, t, r);
        };
      }
      function M(e) {
        return function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return v(e, n);
        };
      }
      function w(e, t, n) {
        var r;
        ((n = (r = n) !== null && r !== void 0 ? r : E), m && m(e, null));
        for (var o = t.length; o--; ) {
          var a = t[o];
          if (typeof a == "string") {
            var i = n(a);
            i !== a && (p(t) || (t[o] = i), (a = i));
          }
          e[a] = !0;
        }
        return e;
      }
      function A(e) {
        var t = y(null),
          n;
        for (n in e) b(d, e, [n]) === !0 && (t[n] = e[n]);
        return t;
      }
      function F(e, t) {
        for (; e !== null; ) {
          var n = f(e, t);
          if (n) {
            if (n.get) return N(n.get);
            if (typeof n.value == "function") return N(n.value);
          }
          e = _(e);
        }
        function r(e) {
          return null;
        }
        return r;
      }
      var O = g([
          "a",
          "abbr",
          "acronym",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "bdi",
          "bdo",
          "big",
          "blink",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "content",
          "data",
          "datalist",
          "dd",
          "decorator",
          "del",
          "details",
          "dfn",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "element",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "font",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meter",
          "nav",
          "nobr",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "section",
          "select",
          "shadow",
          "small",
          "source",
          "spacer",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
        ]),
        B = g([
          "svg",
          "a",
          "altglyph",
          "altglyphdef",
          "altglyphitem",
          "animatecolor",
          "animatemotion",
          "animatetransform",
          "circle",
          "clippath",
          "defs",
          "desc",
          "ellipse",
          "filter",
          "font",
          "g",
          "glyph",
          "glyphref",
          "hkern",
          "image",
          "line",
          "lineargradient",
          "marker",
          "mask",
          "metadata",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialgradient",
          "rect",
          "stop",
          "style",
          "switch",
          "symbol",
          "text",
          "textpath",
          "title",
          "tref",
          "tspan",
          "view",
          "vkern",
        ]),
        W = g([
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
        ]),
        q = g([
          "animate",
          "color-profile",
          "cursor",
          "discard",
          "fedropshadow",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-src",
          "font-face-uri",
          "foreignobject",
          "hatch",
          "hatchpath",
          "mesh",
          "meshgradient",
          "meshpatch",
          "meshrow",
          "missing-glyph",
          "script",
          "set",
          "solidcolor",
          "unknown",
          "use",
        ]),
        U = g([
          "math",
          "menclose",
          "merror",
          "mfenced",
          "mfrac",
          "mglyph",
          "mi",
          "mlabeledtr",
          "mmultiscripts",
          "mn",
          "mo",
          "mover",
          "mpadded",
          "mphantom",
          "mroot",
          "mrow",
          "ms",
          "mspace",
          "msqrt",
          "mstyle",
          "msub",
          "msup",
          "msubsup",
          "mtable",
          "mtd",
          "mtext",
          "mtr",
          "munder",
          "munderover",
        ]),
        V = g([
          "maction",
          "maligngroup",
          "malignmark",
          "mlongdiv",
          "mscarries",
          "mscarry",
          "msgroup",
          "mstack",
          "msline",
          "msrow",
          "semantics",
          "annotation",
          "annotation-xml",
          "mprescripts",
          "none",
        ]),
        H = g(["#text"]),
        G = g([
          "accept",
          "action",
          "align",
          "alt",
          "autocapitalize",
          "autocomplete",
          "autopictureinpicture",
          "autoplay",
          "background",
          "bgcolor",
          "border",
          "capture",
          "cellpadding",
          "cellspacing",
          "checked",
          "cite",
          "class",
          "clear",
          "color",
          "cols",
          "colspan",
          "controls",
          "controlslist",
          "coords",
          "crossorigin",
          "datetime",
          "decoding",
          "default",
          "dir",
          "disabled",
          "disablepictureinpicture",
          "disableremoteplayback",
          "download",
          "draggable",
          "enctype",
          "enterkeyhint",
          "face",
          "for",
          "headers",
          "height",
          "hidden",
          "high",
          "href",
          "hreflang",
          "id",
          "inputmode",
          "integrity",
          "ismap",
          "kind",
          "label",
          "lang",
          "list",
          "loading",
          "loop",
          "low",
          "max",
          "maxlength",
          "media",
          "method",
          "min",
          "minlength",
          "multiple",
          "muted",
          "name",
          "nonce",
          "noshade",
          "novalidate",
          "nowrap",
          "open",
          "optimum",
          "pattern",
          "placeholder",
          "playsinline",
          "poster",
          "preload",
          "pubdate",
          "radiogroup",
          "readonly",
          "rel",
          "required",
          "rev",
          "reversed",
          "role",
          "rows",
          "rowspan",
          "spellcheck",
          "scope",
          "selected",
          "shape",
          "size",
          "sizes",
          "span",
          "srclang",
          "start",
          "src",
          "srcset",
          "step",
          "style",
          "summary",
          "tabindex",
          "title",
          "translate",
          "type",
          "usemap",
          "valign",
          "value",
          "width",
          "xmlns",
          "slot",
        ]),
        z = g([
          "accent-height",
          "accumulate",
          "additive",
          "alignment-baseline",
          "ascent",
          "attributename",
          "attributetype",
          "azimuth",
          "basefrequency",
          "baseline-shift",
          "begin",
          "bias",
          "by",
          "class",
          "clip",
          "clippathunits",
          "clip-path",
          "clip-rule",
          "color",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "cx",
          "cy",
          "d",
          "dx",
          "dy",
          "diffuseconstant",
          "direction",
          "display",
          "divisor",
          "dur",
          "edgemode",
          "elevation",
          "end",
          "fill",
          "fill-opacity",
          "fill-rule",
          "filter",
          "filterunits",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyph-name",
          "glyphref",
          "gradientunits",
          "gradienttransform",
          "height",
          "href",
          "id",
          "image-rendering",
          "in",
          "in2",
          "k",
          "k1",
          "k2",
          "k3",
          "k4",
          "kerning",
          "keypoints",
          "keysplines",
          "keytimes",
          "lang",
          "lengthadjust",
          "letter-spacing",
          "kernelmatrix",
          "kernelunitlength",
          "lighting-color",
          "local",
          "marker-end",
          "marker-mid",
          "marker-start",
          "markerheight",
          "markerunits",
          "markerwidth",
          "maskcontentunits",
          "maskunits",
          "max",
          "mask",
          "media",
          "method",
          "mode",
          "min",
          "name",
          "numoctaves",
          "offset",
          "operator",
          "opacity",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "paint-order",
          "path",
          "pathlength",
          "patterncontentunits",
          "patterntransform",
          "patternunits",
          "points",
          "preservealpha",
          "preserveaspectratio",
          "primitiveunits",
          "r",
          "rx",
          "ry",
          "radius",
          "refx",
          "refy",
          "repeatcount",
          "repeatdur",
          "restart",
          "result",
          "rotate",
          "scale",
          "seed",
          "shape-rendering",
          "specularconstant",
          "specularexponent",
          "spreadmethod",
          "startoffset",
          "stddeviation",
          "stitchtiles",
          "stop-color",
          "stop-opacity",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke",
          "stroke-width",
          "style",
          "surfacescale",
          "systemlanguage",
          "tabindex",
          "targetx",
          "targety",
          "transform",
          "transform-origin",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "textlength",
          "type",
          "u1",
          "u2",
          "unicode",
          "values",
          "viewbox",
          "visibility",
          "version",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "width",
          "word-spacing",
          "wrap",
          "writing-mode",
          "xchannelselector",
          "ychannelselector",
          "x",
          "x1",
          "x2",
          "xmlns",
          "y",
          "y1",
          "y2",
          "z",
          "zoomandpan",
        ]),
        j = g([
          "accent",
          "accentunder",
          "align",
          "bevelled",
          "close",
          "columnsalign",
          "columnlines",
          "columnspan",
          "denomalign",
          "depth",
          "dir",
          "display",
          "displaystyle",
          "encoding",
          "fence",
          "frame",
          "height",
          "href",
          "id",
          "largeop",
          "length",
          "linethickness",
          "lspace",
          "lquote",
          "mathbackground",
          "mathcolor",
          "mathsize",
          "mathvariant",
          "maxsize",
          "minsize",
          "movablelimits",
          "notation",
          "numalign",
          "open",
          "rowalign",
          "rowlines",
          "rowspacing",
          "rowspan",
          "rspace",
          "rquote",
          "scriptlevel",
          "scriptminsize",
          "scriptsizemultiplier",
          "selection",
          "separator",
          "separators",
          "stretchy",
          "subscriptshift",
          "supscriptshift",
          "symmetric",
          "voffset",
          "width",
          "xmlns",
        ]),
        K = g([
          "xlink:href",
          "xml:id",
          "xlink:title",
          "xml:space",
          "xmlns:xlink",
        ]),
        Q = h(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
        X = h(/<%[\w\W]*|[\w\W]*%>/gm),
        Y = h(/\${[\w\W]*}/gm),
        J = h(/^data-[\-\w.\u00B7-\uFFFF]+$/),
        Z = h(/^aria-[\-\w]+$/),
        ee = h(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
        ),
        te = h(/^(?:\w+script|data):/i),
        ne = h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        re = h(/^html$/i),
        oe = h(/^[a-z][.\w]*(-[.\w]+)+$/i),
        ae = function () {
          return typeof window == "undefined" ? null : window;
        },
        ie = function (n, r) {
          if (e(n) !== "object" || typeof n.createPolicy != "function")
            return null;
          var t = null,
            o = "data-tt-policy-suffix";
          r.currentScript &&
            r.currentScript.hasAttribute(o) &&
            (t = r.currentScript.getAttribute(o));
          var a = "dompurify" + (t ? "#" + t : "");
          try {
            return n.createPolicy(a, {
              createHTML: function (t) {
                return t;
              },
              createScriptURL: function (t) {
                return t;
              },
            });
          } catch (e) {
            return ("" + a, null);
          }
        };
      function le() {
        var t =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : ae(),
          n = function (t) {
            return le(t);
          };
        if (
          ((n.version = "2.5.8"),
          (n.removed = []),
          !t || !t.document || t.document.nodeType !== 9)
        )
          return ((n.isSupported = !1), n);
        var r = t.document,
          a = t.document,
          i = t.DocumentFragment,
          l = t.HTMLTemplateElement,
          s = t.Node,
          u = t.Element,
          c = t.NodeFilter,
          d = t.NamedNodeMap,
          m = d === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : d,
          p = t.HTMLFormElement,
          _ = t.DOMParser,
          f = t.trustedTypes,
          h = u.prototype,
          y = F(h, "cloneNode"),
          C = F(h, "nextSibling"),
          b = F(h, "childNodes"),
          v = F(h, "parentNode");
        if (typeof l == "function") {
          var N = a.createElement("template");
          N.content && N.content.ownerDocument && (a = N.content.ownerDocument);
        }
        var M = ie(f, r),
          se = M ? M.createHTML("") : "",
          ue = a,
          ce = ue.implementation,
          de = ue.createNodeIterator,
          me = ue.createDocumentFragment,
          pe = ue.getElementsByTagName,
          _e = r.importNode,
          fe = {};
        try {
          fe = A(a).documentMode ? a.documentMode : {};
        } catch (e) {}
        var ge = {};
        n.isSupported =
          typeof v == "function" &&
          ce &&
          ce.createHTMLDocument !== void 0 &&
          fe !== 9;
        var he = Q,
          ye = X,
          Ce = Y,
          be = J,
          ve = Z,
          Se = te,
          Re = ne,
          Le = oe,
          Ee = ee,
          ke = null,
          Ie = w({}, [].concat(o(O), o(B), o(W), o(U), o(H))),
          Te = null,
          De = w({}, [].concat(o(G), o(z), o(j), o(K))),
          xe = Object.seal(
            Object.create(null, {
              tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null,
              },
              attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null,
              },
              allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1,
              },
            }),
          ),
          $e = null,
          Pe = null,
          Ne = !0,
          Me = !0,
          we = !1,
          Ae = !0,
          Fe = !1,
          Oe = !0,
          Be = !1,
          We = !1,
          qe = !1,
          Ue = !1,
          Ve = !1,
          He = !1,
          Ge = !0,
          ze = !1,
          je = "user-content-",
          Ke = !0,
          Qe = !1,
          Xe = {},
          Ye = null,
          Je = w({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "noscript",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp",
          ]),
          Ze = null,
          et = w({}, ["audio", "video", "img", "source", "image", "track"]),
          tt = null,
          nt = w({}, [
            "alt",
            "class",
            "for",
            "id",
            "label",
            "name",
            "pattern",
            "placeholder",
            "role",
            "summary",
            "title",
            "value",
            "style",
            "xmlns",
          ]),
          rt = "http://www.w3.org/1998/Math/MathML",
          ot = "http://www.w3.org/2000/svg",
          at = "http://www.w3.org/1999/xhtml",
          it = at,
          lt = !1,
          st = null,
          ut = w({}, [rt, ot, at], k),
          ct,
          dt = ["application/xhtml+xml", "text/html"],
          mt = "text/html",
          pt,
          _t = null,
          ft = a.createElement("form"),
          gt = function (t) {
            return t instanceof RegExp || t instanceof Function;
          },
          ht = function (n) {
            (_t && _t === n) ||
              ((!n || e(n) !== "object") && (n = {}),
              (n = A(n)),
              (ct =
                dt.indexOf(n.PARSER_MEDIA_TYPE) === -1
                  ? (ct = mt)
                  : (ct = n.PARSER_MEDIA_TYPE)),
              (pt = ct === "application/xhtml+xml" ? k : E),
              (ke = "ALLOWED_TAGS" in n ? w({}, n.ALLOWED_TAGS, pt) : Ie),
              (Te = "ALLOWED_ATTR" in n ? w({}, n.ALLOWED_ATTR, pt) : De),
              (st =
                "ALLOWED_NAMESPACES" in n
                  ? w({}, n.ALLOWED_NAMESPACES, k)
                  : ut),
              (tt =
                "ADD_URI_SAFE_ATTR" in n
                  ? w(A(nt), n.ADD_URI_SAFE_ATTR, pt)
                  : nt),
              (Ze =
                "ADD_DATA_URI_TAGS" in n
                  ? w(A(et), n.ADD_DATA_URI_TAGS, pt)
                  : et),
              (Ye = "FORBID_CONTENTS" in n ? w({}, n.FORBID_CONTENTS, pt) : Je),
              ($e = "FORBID_TAGS" in n ? w({}, n.FORBID_TAGS, pt) : {}),
              (Pe = "FORBID_ATTR" in n ? w({}, n.FORBID_ATTR, pt) : {}),
              (Xe = "USE_PROFILES" in n ? n.USE_PROFILES : !1),
              (Ne = n.ALLOW_ARIA_ATTR !== !1),
              (Me = n.ALLOW_DATA_ATTR !== !1),
              (we = n.ALLOW_UNKNOWN_PROTOCOLS || !1),
              (Ae = n.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
              (Fe = n.SAFE_FOR_TEMPLATES || !1),
              (Oe = n.SAFE_FOR_XML !== !1),
              (Be = n.WHOLE_DOCUMENT || !1),
              (Ue = n.RETURN_DOM || !1),
              (Ve = n.RETURN_DOM_FRAGMENT || !1),
              (He = n.RETURN_TRUSTED_TYPE || !1),
              (qe = n.FORCE_BODY || !1),
              (Ge = n.SANITIZE_DOM !== !1),
              (ze = n.SANITIZE_NAMED_PROPS || !1),
              (Ke = n.KEEP_CONTENT !== !1),
              (Qe = n.IN_PLACE || !1),
              (Ee = n.ALLOWED_URI_REGEXP || Ee),
              (it = n.NAMESPACE || at),
              (xe = n.CUSTOM_ELEMENT_HANDLING || {}),
              n.CUSTOM_ELEMENT_HANDLING &&
                gt(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                (xe.tagNameCheck = n.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
              n.CUSTOM_ELEMENT_HANDLING &&
                gt(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                (xe.attributeNameCheck =
                  n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
              n.CUSTOM_ELEMENT_HANDLING &&
                typeof n.CUSTOM_ELEMENT_HANDLING
                  .allowCustomizedBuiltInElements == "boolean" &&
                (xe.allowCustomizedBuiltInElements =
                  n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
              Fe && (Me = !1),
              Ve && (Ue = !0),
              Xe &&
                ((ke = w({}, o(H))),
                (Te = []),
                Xe.html === !0 && (w(ke, O), w(Te, G)),
                Xe.svg === !0 && (w(ke, B), w(Te, z), w(Te, K)),
                Xe.svgFilters === !0 && (w(ke, W), w(Te, z), w(Te, K)),
                Xe.mathMl === !0 && (w(ke, U), w(Te, j), w(Te, K))),
              n.ADD_TAGS && (ke === Ie && (ke = A(ke)), w(ke, n.ADD_TAGS, pt)),
              n.ADD_ATTR && (Te === De && (Te = A(Te)), w(Te, n.ADD_ATTR, pt)),
              n.ADD_URI_SAFE_ATTR && w(tt, n.ADD_URI_SAFE_ATTR, pt),
              n.FORBID_CONTENTS &&
                (Ye === Je && (Ye = A(Ye)), w(Ye, n.FORBID_CONTENTS, pt)),
              Ke && (ke["#text"] = !0),
              Be && w(ke, ["html", "head", "body"]),
              ke.table && (w(ke, ["tbody"]), delete $e.tbody),
              g && g(n),
              (_t = n));
          },
          yt = w({}, ["mi", "mo", "mn", "ms", "mtext"]),
          Ct = w({}, ["annotation-xml"]),
          bt = w({}, ["title", "style", "font", "a", "script"]),
          vt = w({}, B);
        (w(vt, W), w(vt, q));
        var St = w({}, U);
        w(St, V);
        var Rt = function (t) {
            var e = v(t);
            (!e || !e.tagName) &&
              (e = { namespaceURI: it, tagName: "template" });
            var n = E(t.tagName),
              r = E(e.tagName);
            return st[t.namespaceURI]
              ? t.namespaceURI === ot
                ? e.namespaceURI === at
                  ? n === "svg"
                  : e.namespaceURI === rt
                    ? n === "svg" && (r === "annotation-xml" || yt[r])
                    : !!vt[n]
                : t.namespaceURI === rt
                  ? e.namespaceURI === at
                    ? n === "math"
                    : e.namespaceURI === ot
                      ? n === "math" && Ct[r]
                      : !!St[n]
                  : t.namespaceURI === at
                    ? (e.namespaceURI === ot && !Ct[r]) ||
                      (e.namespaceURI === rt && !yt[r])
                      ? !1
                      : !St[n] && (bt[n] || !vt[n])
                    : !!(ct === "application/xhtml+xml" && st[t.namespaceURI])
              : !1;
          },
          Lt = function (t) {
            L(n.removed, { element: t });
            try {
              t.parentNode.removeChild(t);
            } catch (e) {
              try {
                t.outerHTML = se;
              } catch (e) {
                t.remove();
              }
            }
          },
          Et = function (t, r) {
            try {
              L(n.removed, { attribute: r.getAttributeNode(t), from: r });
            } catch (e) {
              L(n.removed, { attribute: null, from: r });
            }
            if ((r.removeAttribute(t), t === "is" && !Te[t]))
              if (Ue || Ve)
                try {
                  Lt(r);
                } catch (e) {}
              else
                try {
                  r.setAttribute(t, "");
                } catch (e) {}
          },
          kt = function (t) {
            var e, n;
            if (qe) t = "<remove></remove>" + t;
            else {
              var r = I(t, /^[\r\n\t ]+/);
              n = r && r[0];
            }
            ct === "application/xhtml+xml" &&
              it === at &&
              (t =
                '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                t +
                "</body></html>");
            var o = M ? M.createHTML(t) : t;
            if (it === at)
              try {
                e = new _().parseFromString(o, ct);
              } catch (e) {}
            if (!e || !e.documentElement) {
              e = ce.createDocument(it, "template", null);
              try {
                e.documentElement.innerHTML = lt ? se : o;
              } catch (e) {}
            }
            var i = e.body || e.documentElement;
            return (
              t &&
                n &&
                i.insertBefore(a.createTextNode(n), i.childNodes[0] || null),
              it === at
                ? pe.call(e, Be ? "html" : "body")[0]
                : Be
                  ? e.documentElement
                  : i
            );
          },
          It = function (t) {
            return de.call(
              t.ownerDocument || t,
              t,
              c.SHOW_ELEMENT |
                c.SHOW_COMMENT |
                c.SHOW_TEXT |
                c.SHOW_PROCESSING_INSTRUCTION |
                c.SHOW_CDATA_SECTION,
              null,
              !1,
            );
          },
          Tt = function (t) {
            return (
              t instanceof p &&
              (typeof t.nodeName != "string" ||
                typeof t.textContent != "string" ||
                typeof t.removeChild != "function" ||
                !(t.attributes instanceof m) ||
                typeof t.removeAttribute != "function" ||
                typeof t.setAttribute != "function" ||
                typeof t.namespaceURI != "string" ||
                typeof t.insertBefore != "function" ||
                typeof t.hasChildNodes != "function")
            );
          },
          Dt = function (n) {
            return e(s) === "object"
              ? n instanceof s
              : n &&
                  e(n) === "object" &&
                  typeof n.nodeType == "number" &&
                  typeof n.nodeName == "string";
          },
          xt = function (t, r, o) {
            ge[t] &&
              S(ge[t], function (e) {
                e.call(n, r, o, _t);
              });
          },
          $t = function (t) {
            var e;
            if (
              (xt("beforeSanitizeElements", t, null),
              Tt(t) || $(/[\u0080-\uFFFF]/, t.nodeName))
            )
              return (Lt(t), !0);
            var r = pt(t.nodeName);
            if (
              (xt("uponSanitizeElement", t, { tagName: r, allowedTags: ke }),
              (t.hasChildNodes() &&
                !Dt(t.firstElementChild) &&
                (!Dt(t.content) || !Dt(t.content.firstElementChild)) &&
                $(/<[/\w]/g, t.innerHTML) &&
                $(/<[/\w]/g, t.textContent)) ||
                (r === "select" && $(/<template/i, t.innerHTML)) ||
                t.nodeType === 7 ||
                (Oe && t.nodeType === 8 && $(/<[/\w]/g, t.data)))
            )
              return (Lt(t), !0);
            if (!ke[r] || $e[r]) {
              if (
                !$e[r] &&
                Nt(r) &&
                ((xe.tagNameCheck instanceof RegExp && $(xe.tagNameCheck, r)) ||
                  (xe.tagNameCheck instanceof Function && xe.tagNameCheck(r)))
              )
                return !1;
              if (Ke && !Ye[r]) {
                var o = v(t) || t.parentNode,
                  a = b(t) || t.childNodes;
                if (a && o)
                  for (var i = a.length, l = i - 1; l >= 0; --l) {
                    var s = y(a[l], !0);
                    ((s.__removalCount = (t.__removalCount || 0) + 1),
                      o.insertBefore(s, C(t)));
                  }
              }
              return (Lt(t), !0);
            }
            return (t instanceof u && !Rt(t)) ||
              ((r === "noscript" || r === "noembed" || r === "noframes") &&
                $(/<\/no(script|embed|frames)/i, t.innerHTML))
              ? (Lt(t), !0)
              : (Fe &&
                  t.nodeType === 3 &&
                  ((e = t.textContent),
                  (e = T(e, he, " ")),
                  (e = T(e, ye, " ")),
                  (e = T(e, Ce, " ")),
                  t.textContent !== e &&
                    (L(n.removed, { element: t.cloneNode() }),
                    (t.textContent = e))),
                xt("afterSanitizeElements", t, null),
                !1);
          },
          Pt = function (t, n, r) {
            if (Ge && (n === "id" || n === "name") && (r in a || r in ft))
              return !1;
            if (!(Me && !Pe[n] && $(be, n))) {
              if (!(Ne && $(ve, n))) {
                if (!Te[n] || Pe[n]) {
                  if (
                    !(
                      (Nt(t) &&
                        ((xe.tagNameCheck instanceof RegExp &&
                          $(xe.tagNameCheck, t)) ||
                          (xe.tagNameCheck instanceof Function &&
                            xe.tagNameCheck(t))) &&
                        ((xe.attributeNameCheck instanceof RegExp &&
                          $(xe.attributeNameCheck, n)) ||
                          (xe.attributeNameCheck instanceof Function &&
                            xe.attributeNameCheck(n)))) ||
                      (n === "is" &&
                        xe.allowCustomizedBuiltInElements &&
                        ((xe.tagNameCheck instanceof RegExp &&
                          $(xe.tagNameCheck, r)) ||
                          (xe.tagNameCheck instanceof Function &&
                            xe.tagNameCheck(r))))
                    )
                  )
                    return !1;
                } else if (!tt[n]) {
                  if (!$(Ee, T(r, Re, ""))) {
                    if (
                      !(
                        (n === "src" || n === "xlink:href" || n === "href") &&
                        t !== "script" &&
                        D(r, "data:") === 0 &&
                        Ze[t]
                      )
                    ) {
                      if (!(we && !$(Se, T(r, Re, "")))) {
                        if (r) return !1;
                      }
                    }
                  }
                }
              }
            }
            return !0;
          },
          Nt = function (t) {
            return t !== "annotation-xml" && I(t, Le);
          },
          Mt = function (r) {
            var t, o, a, i;
            xt("beforeSanitizeAttributes", r, null);
            var l = r.attributes;
            if (!(!l || Tt(r))) {
              var s = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: Te,
              };
              for (i = l.length; i--; ) {
                t = l[i];
                var u = t,
                  c = u.name,
                  d = u.namespaceURI;
                if (
                  ((o = c === "value" ? t.value : x(t.value)),
                  (a = pt(c)),
                  (s.attrName = a),
                  (s.attrValue = o),
                  (s.keepAttr = !0),
                  (s.forceKeepAttr = void 0),
                  xt("uponSanitizeAttribute", r, s),
                  (o = s.attrValue),
                  !s.forceKeepAttr && (Et(c, r), !!s.keepAttr))
                ) {
                  if (!Ae && $(/\/>/i, o)) {
                    Et(c, r);
                    continue;
                  }
                  Fe &&
                    ((o = T(o, he, " ")),
                    (o = T(o, ye, " ")),
                    (o = T(o, Ce, " ")));
                  var m = pt(r.nodeName);
                  if (Pt(m, a, o)) {
                    if (
                      (ze &&
                        (a === "id" || a === "name") &&
                        (Et(c, r), (o = je + o)),
                      Oe && $(/((--!?|])>)|<\/(style|title)/i, o))
                    ) {
                      Et(c, r);
                      continue;
                    }
                    if (
                      M &&
                      e(f) === "object" &&
                      typeof f.getAttributeType == "function" &&
                      !d
                    )
                      switch (f.getAttributeType(m, a)) {
                        case "TrustedHTML": {
                          o = M.createHTML(o);
                          break;
                        }
                        case "TrustedScriptURL": {
                          o = M.createScriptURL(o);
                          break;
                        }
                      }
                    try {
                      (d ? r.setAttributeNS(d, c, o) : r.setAttribute(c, o),
                        Tt(r) ? Lt(r) : R(n.removed));
                    } catch (e) {}
                  }
                }
              }
              xt("afterSanitizeAttributes", r, null);
            }
          },
          wt = function e(t) {
            var n,
              r = It(t);
            for (xt("beforeSanitizeShadowDOM", t, null); (n = r.nextNode()); )
              (xt("uponSanitizeShadowNode", n, null),
                $t(n),
                Mt(n),
                n.content instanceof i && e(n.content));
            xt("afterSanitizeShadowDOM", t, null);
          };
        return (
          (n.sanitize = function (o) {
            var a =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              l,
              u,
              c,
              d,
              m;
            if (
              ((lt = !o), lt && (o = "<!-->"), typeof o != "string" && !Dt(o))
            )
              if (typeof o.toString == "function") {
                if (((o = o.toString()), typeof o != "string"))
                  throw P("dirty is not a string, aborting");
              } else throw P("toString is not a function");
            if (!n.isSupported) {
              if (
                e(t.toStaticHTML) === "object" ||
                typeof t.toStaticHTML == "function"
              ) {
                if (typeof o == "string") return t.toStaticHTML(o);
                if (Dt(o)) return t.toStaticHTML(o.outerHTML);
              }
              return o;
            }
            if (
              (We || ht(a),
              (n.removed = []),
              typeof o == "string" && (Qe = !1),
              Qe)
            ) {
              if (o.nodeName) {
                var p = pt(o.nodeName);
                if (!ke[p] || $e[p])
                  throw P(
                    "root node is forbidden and cannot be sanitized in-place",
                  );
              }
            } else if (o instanceof s)
              ((l = kt("<!---->")),
                (u = l.ownerDocument.importNode(o, !0)),
                (u.nodeType === 1 && u.nodeName === "BODY") ||
                u.nodeName === "HTML"
                  ? (l = u)
                  : l.appendChild(u));
            else {
              if (!Ue && !Fe && !Be && o.indexOf("<") === -1)
                return M && He ? M.createHTML(o) : o;
              if (((l = kt(o)), !l)) return Ue ? null : He ? se : "";
            }
            l && qe && Lt(l.firstChild);
            for (var _ = It(Qe ? o : l); (c = _.nextNode()); )
              (c.nodeType === 3 && c === d) ||
                ($t(c),
                Mt(c),
                c.content instanceof i && wt(c.content),
                (d = c));
            if (((d = null), Qe)) return o;
            if (Ue) {
              if (Ve)
                for (m = me.call(l.ownerDocument); l.firstChild; )
                  m.appendChild(l.firstChild);
              else m = l;
              return (
                (Te.shadowroot || Te.shadowrootmod) && (m = _e.call(r, m, !0)),
                m
              );
            }
            var f = Be ? l.outerHTML : l.innerHTML;
            return (
              Be &&
                ke["!doctype"] &&
                l.ownerDocument &&
                l.ownerDocument.doctype &&
                l.ownerDocument.doctype.name &&
                $(re, l.ownerDocument.doctype.name) &&
                (f = "<!DOCTYPE " + l.ownerDocument.doctype.name + ">\n" + f),
              Fe &&
                ((f = T(f, he, " ")), (f = T(f, ye, " ")), (f = T(f, Ce, " "))),
              M && He ? M.createHTML(f) : f
            );
          }),
          (n.setConfig = function (e) {
            (ht(e), (We = !0));
          }),
          (n.clearConfig = function () {
            ((_t = null), (We = !1));
          }),
          (n.isValidAttribute = function (e, t, n) {
            _t || ht({});
            var r = pt(e),
              o = pt(t);
            return Pt(r, o, n);
          }),
          (n.addHook = function (e, t) {
            typeof t == "function" && ((ge[e] = ge[e] || []), L(ge[e], t));
          }),
          (n.removeHook = function (e) {
            if (ge[e]) return R(ge[e]);
          }),
          (n.removeHooks = function (e) {
            ge[e] && (ge[e] = []);
          }),
          (n.removeAllHooks = function () {
            ge = {};
          }),
          n
        );
      }
      var se = le();
      l.exports = se;
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
