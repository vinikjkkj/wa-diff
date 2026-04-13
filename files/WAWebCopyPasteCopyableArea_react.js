__d(
  "WAWebCopyPasteCopyableArea.react",
  [
    "WAWebClassnames",
    "WAWebCopyPasteClipboard",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["canCut", "children", "className", "ref", "testid"],
      s,
      u = s || (s = o("react")),
      c = "copyable-area";
    function d(t) {
      var n = o("react-compiler-runtime").c(18),
        r,
        a,
        i,
        l,
        s,
        d;
      n[0] !== t
        ? ((r = t.canCut),
          (a = t.children),
          (i = t.className),
          (s = t.ref),
          (d = t.testid),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a),
          (n[3] = i),
          (n[4] = l),
          (n[5] = s),
          (n[6] = d))
        : ((r = n[1]),
          (a = n[2]),
          (i = n[3]),
          (l = n[4]),
          (s = n[5]),
          (d = n[6]));
      var m;
      n[7] !== i
        ? ((m = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            i,
            "xnpuxes",
            c,
          )),
          (n[7] = i),
          (n[8] = m))
        : (m = n[8]);
      var f = r ? _ : void 0,
        g;
      n[9] !== l || n[10] !== m || n[11] !== f
        ? ((g = babelHelpers.extends({}, l, {
            className: m,
            onCopy: p,
            onCut: f,
          })),
          (n[9] = l),
          (n[10] = m),
          (n[11] = f),
          (n[12] = g))
        : (g = n[12]);
      var h = g,
        y;
      return (
        n[13] !== a || n[14] !== h || n[15] !== s || n[16] !== d
          ? ((y = u.jsx(
              "div",
              babelHelpers.extends({}, h, {
                ref: s,
                "data-testid": void 0,
                children: a,
              }),
            )),
            (n[13] = a),
            (n[14] = h),
            (n[15] = s),
            (n[16] = d),
            (n[17] = y))
          : (y = n[17]),
        y
      );
    }
    function m(e, t) {
      var n = e.currentTarget;
      if (!(n instanceof HTMLElement)) return !1;
      var r = o("WAWebCopyPasteClipboard").Clipboard.fromSelection(
        n,
        window.getSelection(),
      );
      e.clipboardData.setData("text/plain", r.toPlainString());
      try {
        e.clipboardData.setData(
          o("WAWebCopyPasteClipboard").APP_TEXT_MIMETYPE,
          r.toAppString(),
        );
      } catch (e) {}
      return !0;
    }
    function p(e) {
      m(e, window.getSelection()) && (e.stopPropagation(), e.preventDefault());
    }
    function _(e) {
      var t = window.getSelection();
      m(e, t) &&
        (t.deleteFromDocument(),
        e.stopPropagation(),
        e.preventDefault(),
        e.target.dispatchEvent(
          new Event("input", { bubbles: !0, cancelable: !0 }),
        ));
    }
    l.default = d;
  },
  98,
);
