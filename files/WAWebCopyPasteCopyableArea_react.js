__d(
  "WAWebCopyPasteCopyableArea.react",
  ["WAWebClassnames", "WAWebCopyPasteClipboard", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["canCut", "children", "className", "ref", "testid"],
      s,
      u = s || (s = o("react")),
      c = "copyable-area";
    function d(t) {
      var n = t.canCut,
        r = t.children,
        a = t.className,
        i = t.ref,
        l = t.testid,
        s = babelHelpers.objectWithoutPropertiesLoose(t, e),
        d = babelHelpers.extends({}, s, {
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            a,
            "xnpuxes",
            c,
          ),
          onCopy: p,
          onCut: n ? _ : void 0,
        });
      return u.jsx(
        "div",
        babelHelpers.extends({}, d, {
          ref: i,
          "data-testid": void 0,
          children: r,
        }),
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
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
