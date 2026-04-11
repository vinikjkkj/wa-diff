__d(
  "WebBloksDialogButton",
  [
    "WebBloksAbstractButton",
    "WebBloksComponentContext",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.node,
        a;
      t[0] !== n ? ((a = n.getValues()), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = a,
        l = i.appearance,
        u = i.testing_id,
        d = i.text,
        m;
      t[2] !== n
        ? ((m = n.getExpression("on_click")), (t[2] = n), (t[3] = m))
        : (m = t[3]);
      var p = m,
        _ = o("WebBloksComponentContext").useWebBloksContext(),
        f = _.bloksContext,
        g = _.executeCatch,
        h = _.objectSet,
        y = _.ownerContext,
        C;
      t[4] !== f ||
      t[5] !== g ||
      t[6] !== n ||
      t[7] !== h.navigationManager ||
      t[8] !== p ||
      t[9] !== y
        ? ((C = function (t) {
            (t.preventDefault(),
              t.stopPropagation(),
              h.navigationManager.pop(),
              p != null &&
                (y ? y.executeCatch(p.getValue(), [n, f]) : g(n, p, [n, f])));
          }),
          (t[4] = f),
          (t[5] = g),
          (t[6] = n),
          (t[7] = h.navigationManager),
          (t[8] = p),
          (t[9] = y),
          (t[10] = C))
        : (C = t[10]);
      var b = C,
        v;
      e: switch (l) {
        case "destructive": {
          v = c.destructive;
          break e;
        }
        case "cancel": {
          v = c.cancel;
          break e;
        }
        case "default":
        default:
          v = c.default;
      }
      var S;
      t[11] !== v
        ? ((S = o("WebBloksStyle").classNames(c.button, v)),
          (t[11] = v),
          (t[12] = S))
        : (S = t[12]);
      var R;
      return (
        t[13] !== b || t[14] !== S || t[15] !== u || t[16] !== d
          ? ((R = s.jsx(r("WebBloksAbstractButton"), {
              className: S,
              accessibility_label: d,
              onClick: b,
              title: d,
              "data-testid": void 0,
            })),
            (t[13] = b),
            (t[14] = S),
            (t[15] = u),
            (t[16] = d),
            (t[17] = R))
          : (R = t[17]),
        R
      );
    }
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
