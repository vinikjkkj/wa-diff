__d(
  "WebBloksDialog",
  [
    "WebBloksComponentContext",
    "WebBloksDialogMinificationKeys",
    "WebBloksEnvironmentContext",
    "WebBloksStyle",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef;
    function p(e) {
      var t,
        n = e.node,
        r = n.styleId,
        a = n.get((t = o("WebBloksDialogMinificationKeys")).DIALOG_MESSAGE),
        i = n.get(t.DIALOG_PRIMARY_BUTTON),
        l = n.get(t.DIALOG_SECONDARY_BUTTON),
        u = n.get(t.DIALOG_TERTIARY_BUTTON),
        d = n.get(t.DIALOG_TITLE),
        m = o("WebBloksComponentContext").useWebBloksContext(),
        p = o("WebBloksEnvironmentContext").useDataBloksName(),
        g = c(
          function (e) {
            e.target === e.currentTarget && m.objectSet.navigationManager.pop();
          },
          [m],
        ),
        h = d != null ? d : a,
        y = d != null ? a : null,
        C = _(),
        b = c(
          function (e) {
            if (e.key === "Escape") {
              (e.stopPropagation(), m.objectSet.navigationManager.pop());
              return;
            }
            if (e.key === "Tab") {
              var t = C.current;
              if (t == null) return;
              var n = Array.from(
                t.querySelectorAll(
                  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [role="button"]',
                ),
              );
              if (n.length === 0) return;
              var r = document.activeElement,
                o = r != null ? n.indexOf(r) : -1,
                a = e.shiftKey
                  ? n[o > 0 ? o - 1 : n.length - 1]
                  : n[o < n.length - 1 ? o + 1 : 0];
              a instanceof HTMLElement &&
                (e.preventDefault(), a.focus({ focusVisible: !0 }));
            }
          },
          [m.objectSet.navigationManager, C],
        );
      return s.jsx(
        "div",
        babelHelpers.extends({}, p(r), {
          className: f.background,
          onClick: g,
          onKeyDown: b,
          role: "presentation",
          children: s.jsxs("div", {
            className: f.container,
            ref: C,
            tabIndex: -1,
            "aria-label": h,
            children: [
              s.jsxs("div", {
                className: f.header,
                children: [
                  h != null &&
                    s.jsx("div", {
                      className: f.title,
                      role: "heading",
                      "aria-level": 2,
                      children: h,
                    }),
                  y != null &&
                    s.jsx("div", { className: f.message, children: y }),
                ],
              }),
              s.jsxs("div", {
                className: f.buttons,
                children: [m.renderNode(i), m.renderNode(l), m.renderNode(u)],
              }),
            ],
          }),
        }),
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      var e = m(null);
      return (
        d(function () {
          e.current &&
            (e.current.contains(document.activeElement) ||
              (e.current && e.current.focus({ focusVisible: !0 })));
        }, []),
        e
      );
    }
    var f = o("WebBloksStyle").createStyles({
      background: {
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        bottom: 0,
        display: "flex",
        justifyContent: "space-around",
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 1e3,
      },
      buttons: {},
      container: {
        backgroundColor: "white",
        borderRadius: 12,
        margin: 32,
        maxWidth: "100%",
        textAlign: "center",
        width: 400,
        outline: "none",
      },
      header: { padding: 32 },
      message: { color: "#65676B", fontSize: 14, marginTop: 12 },
      title: { color: "#1C1E21", fontSize: 18, fontWeight: 600 },
    });
    l.default = p;
  },
  98,
);
