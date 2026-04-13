__d(
  "WAWebCopyPasteCopyable.react",
  [
    "WAWebClassnames",
    "WAWebDomAttrToData",
    "WAWebDomElementMatches",
    "WAWebExternalLink.react",
    "WAWebURLUtils",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref", "forwardedRef"],
      s = ["element", "ref"],
      u = ["appTextTemplate", "plainText", "prePlainText", "xstyle"],
      c,
      d,
      m = d || (d = o("react")),
      p = "copyable-text",
      _ = "." + p,
      f = "data-plain-text",
      g = r("WAWebDomAttrToData")(f),
      h = "data-pre-plain-text",
      y = r("WAWebDomAttrToData")(h),
      C = "data-app-text-template",
      b = r("WAWebDomAttrToData")(C);
    function v(e) {
      return e instanceof HTMLElement && r("WAWebDomElementMatches")(e, _);
    }
    function S(e) {
      return e.dataset[y];
    }
    function R(e) {
      return e.dataset[g];
    }
    function L(e) {
      return e.dataset[b];
    }
    function E(e) {
      var t = Array.from(e.querySelectorAll(_));
      return t.filter(function (e) {
        return !t.some(function (t) {
          return t !== e && t.contains(e);
        });
      });
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e ? ((n = F(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r;
      return (
        t[2] !== n
          ? ((r = m.jsx("code", babelHelpers.extends({}, n))),
            (t[2] = n),
            (t[3] = r))
          : (r = t[3]),
        r
      );
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e ? ((n = F(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r;
      return (
        t[2] !== n
          ? ((r = m.jsx("del", babelHelpers.extends({}, n))),
            (t[2] = n),
            (t[3] = r))
          : (r = t[3]),
        r
      );
    }
    function T(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e ? ((n = F(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r;
      return (
        t[2] !== n
          ? ((r = m.jsx("div", babelHelpers.extends({}, n))),
            (t[2] = n),
            (t[3] = r))
          : (r = t[3]),
        r
      );
    }
    function D(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e ? ((n = F(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r;
      return (
        t[2] !== n
          ? ((r = m.jsx("em", babelHelpers.extends({}, n))),
            (t[2] = n),
            (t[3] = r))
          : (r = t[3]),
        r
      );
    }
    function x(t) {
      var n,
        r = o("react-compiler-runtime").c(9),
        a,
        i,
        l;
      if (r[0] !== t) {
        var s = t.ref,
          u = t.forwardedRef,
          c = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((i = s),
          (a = u),
          (l = F(c)),
          (r[0] = t),
          (r[1] = a),
          (r[2] = i),
          (r[3] = l));
      } else ((a = r[1]), (i = r[2]), (l = r[3]));
      var d = l,
        p = a != null ? a : i,
        _ = d.onClick ? 0 : -1,
        f = (n = d.alt) != null ? n : "",
        g;
      return (
        r[4] !== d || r[5] !== p || r[6] !== _ || r[7] !== f
          ? ((g = m.jsx(
              "img",
              babelHelpers.extends({ ref: p }, d, { tabIndex: _, alt: f }),
            )),
            (r[4] = d),
            (r[5] = p),
            (r[6] = _),
            (r[7] = f),
            (r[8] = g))
          : (g = r[8]),
        g
      );
    }
    function $(e) {
      var t = o("react-compiler-runtime").c(6),
        n,
        a;
      if (t[0] !== e) {
        n = F(e);
        var i = n.href;
        ((a =
          !r("isStringNullOrEmpty")(i) &&
          !r("WAWebURLUtils").hasValidUrlScheme(i)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a));
      } else ((n = t[1]), (a = t[2]));
      if (a) {
        var l;
        return (
          t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = m.jsx("span", {})), (t[3] = l))
            : (l = t[3]),
          l
        );
      }
      var s;
      return (
        t[4] !== n
          ? ((s = m.jsx(
              o("WAWebExternalLink.react").ExternalLinkEl,
              babelHelpers.extends({}, n),
            )),
            (t[4] = n),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function P(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e ? ((n = F(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r;
      return (
        t[2] !== n
          ? ((r = m.jsx("span", babelHelpers.extends({}, n))),
            (t[2] = n),
            (t[3] = r))
          : (r = t[3]),
        r
      );
    }
    function N(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e ? ((n = F(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r;
      return (
        t[2] !== n
          ? ((r = m.jsx("strong", babelHelpers.extends({}, n))),
            (t[2] = n),
            (t[3] = r))
          : (r = t[3]),
        r
      );
    }
    function M(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e ? ((n = F(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r;
      return (
        t[2] !== n
          ? ((r = m.jsx("blockquote", babelHelpers.extends({}, n))),
            (t[2] = n),
            (t[3] = r))
          : (r = t[3]),
        r
      );
    }
    function w(e) {
      var t = o("react-compiler-runtime").c(8),
        n,
        r,
        a;
      if (t[0] !== e) {
        var i = e.element,
          l = e.ref,
          u = babelHelpers.objectWithoutPropertiesLoose(e, s);
        ((r = l),
          (n = i),
          (a = F(u)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = a));
      } else ((n = t[1]), (r = t[2]), (a = t[3]));
      var c;
      return (
        t[4] !== n || t[5] !== r || t[6] !== a
          ? ((c = m.jsx(n, babelHelpers.extends({}, a, { ref: r }))),
            (t[4] = n),
            (t[5] = r),
            (t[6] = a),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    var A = w;
    function F(e) {
      var t = e.appTextTemplate,
        n = e.plainText,
        a = e.prePlainText,
        i = e.xstyle,
        l = babelHelpers.objectWithoutPropertiesLoose(e, u),
        s = babelHelpers.extends({}, l);
      return (
        (s.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          l.className,
          p,
        )),
        n != null && (s[f] = n),
        a != null && (s[h] = a),
        t != null && (s[C] = t),
        i != null &&
          (s.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            s.className,
            (c || (c = r("stylex")))(i),
          )),
        s
      );
    }
    ((l.COPYABLE_CSS_CLASS = p),
      (l.PLAIN_TEXT_DATA_ATTR = g),
      (l.APP_TEXT_TEMPLATE_DATA_ATTR = b),
      (l.isCopyable = v),
      (l.getPrePlainTextData = S),
      (l.getPlainTextData = R),
      (l.getAppTextTemplateData = L),
      (l.findCopyableChildren = E),
      (l.CopyableCode = k),
      (l.CopyableDel = I),
      (l.CopyableDiv = T),
      (l.CopyableEm = D),
      (l.CopyableImg = x),
      (l.CopyableLink = $),
      (l.CopyableSpan = P),
      (l.CopyableStrong = N),
      (l.CopyableBlockQuote = M),
      (l.Copyable = A));
  },
  98,
);
