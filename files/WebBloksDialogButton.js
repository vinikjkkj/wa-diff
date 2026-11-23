__d(
  "WebBloksDialogButton",
  [
    "WebBloksAbstractButton",
    "WebBloksComponentContext",
    "WebBloksDialogMinificationKeys",
    "WebBloksStyle",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = e.node,
        a = n.get(
          (t = o("WebBloksDialogMinificationKeys")).DIALOG_BUTTON_APPEARANCE,
        ),
        i = n.get(t.DIALOG_BUTTON_TESTING_ID),
        l = n.get(t.DIALOG_BUTTON_TEXT),
        u = n.getExpression(t.DIALOG_BUTTON_ON_CLICK),
        d = o("WebBloksComponentContext").useWebBloksContext(),
        m = d.bloksContext,
        p = d.executeCatch,
        _ = d.objectSet,
        f = d.ownerContext,
        g = function (t) {
          (t.preventDefault(),
            t.stopPropagation(),
            _.navigationManager.pop(),
            u != null &&
              (f ? f.executeCatch(u.getValue(), [n, m]) : p(n, u, [n, m])));
        },
        h;
      switch (a) {
        case "destructive":
          h = c.destructive;
          break;
        case "cancel":
          h = c.cancel;
          break;
        case "default":
        default:
          h = c.default;
          break;
      }
      return s.jsx(r("WebBloksAbstractButton"), {
        className: o("WebBloksStyle").classNames(c.button, h),
        accessibility_label: l,
        onClick: g,
        title: l,
        "data-testid": void 0,
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    var c = o("WebBloksStyle").createStyles({
      button: function (t) {
        var e;
        return (
          (e = {}),
          (e["div" + t] = {
            display: "block",
            borderTop: "1px solid #CED0D4",
            cursor: "pointer",
            fontSize: 16,
            lineHeight: 24 / 16,
            padding: "12px 10px",
            pointerEvents: "auto !important",
            marginLeft: "0px !important",
          }),
          e
        );
      },
      cancel: { color: "#1C1E21" },
      destructive: { color: "hsl(350, 87%, 55%)" },
      default: { color: "#0064E0" },
    });
    l.default = u;
  },
  98,
);
