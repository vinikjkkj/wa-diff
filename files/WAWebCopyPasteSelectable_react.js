__d(
  "WAWebCopyPasteSelectable.react",
  [
    "cx",
    "WAWebClassnames",
    "WAWebCopyPasteCopyable.react",
    "WAWebDomElementMatches",
    "WAWebExternalLink.react",
    "WAWebURLUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref", "forwardedRef"],
      u = ["element", "ref"],
      c = [
        "appTextTemplate",
        "className",
        "plainText",
        "prePlainText",
        "selectable",
        "selectAll",
      ],
      d,
      m = d || (d = o("react")),
      p = "_aupe",
      _ = o("WAWebCopyPasteCopyable.react").COPYABLE_CSS_CLASS + " " + p,
      f = "." + p,
      g = _,
      h = "_aupf",
      y = "." + h;
    function C(e) {
      if (!e) return !1;
      if (!(e instanceof HTMLElement)) {
        var t = e.parentElement;
        return C(t);
      }
      return (
        r("WAWebDomElementMatches")(e, f) ||
        r("WAWebDomElementMatches")(e, f + " *")
      );
    }
    function b(e) {
      return e
        ? e instanceof HTMLElement
          ? r("WAWebDomElementMatches")(e, y)
          : b(e.parentElement)
        : !1;
    }
    function v(e) {
      if (!(e instanceof HTMLElement)) return [];
      var t = C(e);
      if (t) return Array.from(e.childNodes);
      var n = Array.from(e.querySelectorAll(f));
      return n.filter(function (e) {
        return !n.some(function (t) {
          return t !== e && t.contains(e);
        });
      });
    }
    function S(e) {
      return e instanceof HTMLElement ? !!e.querySelector(f) : !1;
    }
    function R(e) {
      return e
        ? e instanceof HTMLElement
          ? r("WAWebDomElementMatches")(e, y + " *")
          : R(e.parentElement)
        : !1;
    }
    function L(e) {
      if (!R(e)) return null;
      for (var t = e, n = 0, r = 5, o; t && n < r; ) {
        if (b(t) && t instanceof HTMLElement) {
          o = t;
          break;
        }
        ((t = t.parentElement), n++);
      }
      return o;
    }
    function E(e) {
      var t = A(e);
      return e.selectable
        ? m.jsx(
            o("WAWebCopyPasteCopyable.react").CopyableCode,
            babelHelpers.extends({}, t),
          )
        : m.jsx("code", babelHelpers.extends({}, t));
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = A(e);
      return e.selectable
        ? m.jsx(
            o("WAWebCopyPasteCopyable.react").CopyableDel,
            babelHelpers.extends({}, t),
          )
        : m.jsx("del", babelHelpers.extends({}, t));
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = A(e);
      return e.selectable
        ? m.jsx(
            o("WAWebCopyPasteCopyable.react").CopyableDiv,
            babelHelpers.extends({}, t),
          )
        : m.jsx("div", babelHelpers.extends({}, t));
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t = A(e);
      return e.selectable
        ? m.jsx(
            o("WAWebCopyPasteCopyable.react").CopyableEm,
            babelHelpers.extends({}, t),
          )
        : m.jsx("em", babelHelpers.extends({}, t));
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(t) {
      var n,
        r = t.ref,
        a = t.forwardedRef,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = A(i);
      return i.selectable
        ? m.jsx(
            o("WAWebCopyPasteCopyable.react").CopyableImg,
            babelHelpers.extends({ forwardedRef: r }, l),
          )
        : m.jsx(
            "img",
            babelHelpers.extends({ ref: r }, l, {
              tabIndex: l.onClick ? 0 : -1,
              alt: (n = i.alt) != null ? n : "",
            }),
          );
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
      var t = A(e),
        n = e.href;
      return n != null && n !== "" && !r("WAWebURLUtils").hasValidUrlScheme(n)
        ? m.jsx("span", {})
        : e.selectable
          ? m.jsx(
              o("WAWebCopyPasteCopyable.react").CopyableLink,
              babelHelpers.extends({ dir: "ltr", dataTab: e.dataTab }, t),
            )
          : m.jsx(
              o("WAWebExternalLink.react").ExternalLinkEl,
              babelHelpers.extends({ dataTab: e.dataTab }, t),
            );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e) {
      var t = A(e);
      return e.selectable
        ? m.jsx(
            o("WAWebCopyPasteCopyable.react").CopyableSpan,
            babelHelpers.extends({}, t),
          )
        : m.jsx("span", babelHelpers.extends({}, t));
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t = A(e);
      return e.selectable
        ? m.jsx(
            o("WAWebCopyPasteCopyable.react").CopyableStrong,
            babelHelpers.extends({}, t),
          )
        : m.jsx("strong", babelHelpers.extends({}, t));
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N(e) {
      var t = A(e);
      return e.selectable
        ? m.jsx(
            o("WAWebCopyPasteCopyable.react").CopyableBlockQuote,
            babelHelpers.extends({}, t),
          )
        : m.jsx("blockquote", babelHelpers.extends({}, t));
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M(e) {
      var t = e.element,
        n = e.ref,
        r = babelHelpers.objectWithoutPropertiesLoose(e, u),
        a = A(r);
      return r.selectable
        ? m.jsx(
            o("WAWebCopyPasteCopyable.react").Copyable,
            babelHelpers.extends({ element: t }, a, { ref: n }),
          )
        : m.jsx(t, babelHelpers.extends({}, a, { ref: n }));
    }
    M.displayName = M.name + " [from " + i.id + "]";
    var w = M;
    function A(e) {
      var t,
        n = e.appTextTemplate,
        r = e.className,
        a = e.plainText,
        i = e.prePlainText,
        l = e.selectable,
        s = e.selectAll,
        u = babelHelpers.objectWithoutPropertiesLoose(e, c),
        d = u;
      if (
        (l &&
          ((d.plainText = a), (d.prePlainText = i), (d.appTextTemplate = n)),
        (d.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          r,
          "_ao3e",
          ((t = {}), (t[p] = l), (t[h] = l && s), t),
        )),
        l)
      ) {
        var m = u["data-testid"],
          _ = s === !0 ? "select-all selectable-text" : "selectable-text";
        d["data-testid"] = m != null ? m + " " + _ : _;
      }
      return d;
    }
    ((l.SELECTABLE_INPUT_CSS_CLASS = g),
      (l.isSelectable = C),
      (l.isSelectAll = b),
      (l.findSelectableChildren = v),
      (l.hasSelectableChildren = S),
      (l.findSelectAllParent = L),
      (l.SelectableCode = E),
      (l.SelectableDel = k),
      (l.SelectableDiv = I),
      (l.SelectableEm = T),
      (l.SelectableImg = D),
      (l.SelectableLink = x),
      (l.SelectableSpan = $),
      (l.SelectableStrong = P),
      (l.SelectableBlockQuote = N),
      (l.Selectable = w));
  },
  98,
);
