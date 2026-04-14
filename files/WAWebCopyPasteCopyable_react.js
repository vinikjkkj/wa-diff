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
      return m.jsx("code", babelHelpers.extends({}, F(e)));
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      return m.jsx("del", babelHelpers.extends({}, F(e)));
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      return m.jsx("div", babelHelpers.extends({}, F(e)));
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      return m.jsx("em", babelHelpers.extends({}, F(e)));
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(t) {
      var n,
        r = t.ref,
        o = t.forwardedRef,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = F(a);
      return m.jsx(
        "img",
        babelHelpers.extends({ ref: o != null ? o : r }, i, {
          tabIndex: i.onClick ? 0 : -1,
          alt: (n = i.alt) != null ? n : "",
        }),
      );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e) {
      var t = F(e),
        n = t.href;
      return !r("isStringNullOrEmpty")(n) &&
        !r("WAWebURLUtils").hasValidUrlScheme(n)
        ? m.jsx("span", {})
        : m.jsx(
            o("WAWebExternalLink.react").ExternalLinkEl,
            babelHelpers.extends({}, t),
          );
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      return m.jsx("span", babelHelpers.extends({}, F(e)));
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N(e) {
      return m.jsx("strong", babelHelpers.extends({}, F(e)));
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M(e) {
      return m.jsx("blockquote", babelHelpers.extends({}, F(e)));
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w(e) {
      var t = e.element,
        n = e.ref,
        r = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return m.jsx(t, babelHelpers.extends({}, F(r), { ref: n }));
    }
    w.displayName = w.name + " [from " + i.id + "]";
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
