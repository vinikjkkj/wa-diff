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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e ? ((n = A(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r = n,
        a;
      return (
        t[2] !== r || t[3] !== e.selectable
          ? ((a = e.selectable
              ? m.jsx(
                  o("WAWebCopyPasteCopyable.react").CopyableCode,
                  babelHelpers.extends({}, r),
                )
              : m.jsx("code", babelHelpers.extends({}, r))),
            (t[2] = r),
            (t[3] = e.selectable),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e ? ((n = A(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r = n,
        a;
      return (
        t[2] !== r || t[3] !== e.selectable
          ? ((a = e.selectable
              ? m.jsx(
                  o("WAWebCopyPasteCopyable.react").CopyableDel,
                  babelHelpers.extends({}, r),
                )
              : m.jsx("del", babelHelpers.extends({}, r))),
            (t[2] = r),
            (t[3] = e.selectable),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e ? ((n = A(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r = n,
        a;
      return (
        t[2] !== r || t[3] !== e.selectable
          ? ((a = e.selectable
              ? m.jsx(
                  o("WAWebCopyPasteCopyable.react").CopyableDiv,
                  babelHelpers.extends({}, r),
                )
              : m.jsx("div", babelHelpers.extends({}, r))),
            (t[2] = r),
            (t[3] = e.selectable),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function T(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e ? ((n = A(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r = n,
        a;
      return (
        t[2] !== r || t[3] !== e.selectable
          ? ((a = e.selectable
              ? m.jsx(
                  o("WAWebCopyPasteCopyable.react").CopyableEm,
                  babelHelpers.extends({}, r),
                )
              : m.jsx("em", babelHelpers.extends({}, r))),
            (t[2] = r),
            (t[3] = e.selectable),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function D(t) {
      var n = o("react-compiler-runtime").c(9),
        r,
        a,
        i;
      if (n[0] !== t) {
        var l = t.ref,
          s = t.forwardedRef,
          u = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((a = l),
          (r = u),
          (i = A(r)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a),
          (n[3] = i));
      } else ((r = n[1]), (a = n[2]), (i = n[3]));
      var c = i,
        d;
      if (n[4] !== c || n[5] !== r.alt || n[6] !== r.selectable || n[7] !== a) {
        var p;
        ((d = r.selectable
          ? m.jsx(
              o("WAWebCopyPasteCopyable.react").CopyableImg,
              babelHelpers.extends({ forwardedRef: a }, c),
            )
          : m.jsx(
              "img",
              babelHelpers.extends({ ref: a }, c, {
                tabIndex: c.onClick ? 0 : -1,
                alt: (p = r.alt) != null ? p : "",
              }),
            )),
          (n[4] = c),
          (n[5] = r.alt),
          (n[6] = r.selectable),
          (n[7] = a),
          (n[8] = d));
      } else d = n[8];
      return d;
    }
    function x(e) {
      var t = o("react-compiler-runtime").c(7),
        n;
      t[0] !== e ? ((n = A(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var a = n,
        i = e.href;
      if (i != null && i !== "" && !r("WAWebURLUtils").hasValidUrlScheme(i)) {
        var l;
        return (
          t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = m.jsx("span", {})), (t[2] = l))
            : (l = t[2]),
          l
        );
      }
      var s;
      return (
        t[3] !== a || t[4] !== e.dataTab || t[5] !== e.selectable
          ? ((s = e.selectable
              ? m.jsx(
                  o("WAWebCopyPasteCopyable.react").CopyableLink,
                  babelHelpers.extends({ dir: "ltr", dataTab: e.dataTab }, a),
                )
              : m.jsx(
                  o("WAWebExternalLink.react").ExternalLinkEl,
                  babelHelpers.extends({ dataTab: e.dataTab }, a),
                )),
            (t[3] = a),
            (t[4] = e.dataTab),
            (t[5] = e.selectable),
            (t[6] = s))
          : (s = t[6]),
        s
      );
    }
    function $(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e ? ((n = A(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r = n,
        a;
      return (
        t[2] !== r || t[3] !== e.selectable
          ? ((a = e.selectable
              ? m.jsx(
                  o("WAWebCopyPasteCopyable.react").CopyableSpan,
                  babelHelpers.extends({}, r),
                )
              : m.jsx("span", babelHelpers.extends({}, r))),
            (t[2] = r),
            (t[3] = e.selectable),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function P(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e ? ((n = A(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r = n,
        a;
      return (
        t[2] !== r || t[3] !== e.selectable
          ? ((a = e.selectable
              ? m.jsx(
                  o("WAWebCopyPasteCopyable.react").CopyableStrong,
                  babelHelpers.extends({}, r),
                )
              : m.jsx("strong", babelHelpers.extends({}, r))),
            (t[2] = r),
            (t[3] = e.selectable),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function N(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e ? ((n = A(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r = n,
        a;
      return (
        t[2] !== r || t[3] !== e.selectable
          ? ((a = e.selectable
              ? m.jsx(
                  o("WAWebCopyPasteCopyable.react").CopyableBlockQuote,
                  babelHelpers.extends({}, r),
                )
              : m.jsx("blockquote", babelHelpers.extends({}, r))),
            (t[2] = r),
            (t[3] = e.selectable),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function M(e) {
      var t = o("react-compiler-runtime").c(13),
        n,
        r,
        a,
        i;
      t[0] !== e
        ? ((n = e.element),
          (a = e.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (i = A(r)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = a),
          (t[4] = i))
        : ((n = t[1]), (r = t[2]), (a = t[3]), (i = t[4]));
      var l = i;
      if (r.selectable) {
        var s;
        return (
          t[5] !== n || t[6] !== l || t[7] !== a
            ? ((s = m.jsx(
                o("WAWebCopyPasteCopyable.react").Copyable,
                babelHelpers.extends({ element: n }, l, { ref: a }),
              )),
              (t[5] = n),
              (t[6] = l),
              (t[7] = a),
              (t[8] = s))
            : (s = t[8]),
          s
        );
      }
      var c;
      return (
        t[9] !== n || t[10] !== l || t[11] !== a
          ? ((c = m.jsx(n, babelHelpers.extends({}, l, { ref: a }))),
            (t[9] = n),
            (t[10] = l),
            (t[11] = a),
            (t[12] = c))
          : (c = t[12]),
        c
      );
    }
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
