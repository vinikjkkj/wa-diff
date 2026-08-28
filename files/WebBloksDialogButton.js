__d(
  "WebBloksDialogButton",
  [
    "WebBloksAbstractButton",
    "WebBloksComponentContext",
    "WebBloksDialogMinificationKeys",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.node,
        a = n.get(o("WebBloksDialogMinificationKeys").DIALOG_BUTTON_APPEARANCE),
        i;
      t[0] !== n
        ? ((i = n.get(
            o("WebBloksDialogMinificationKeys").DIALOG_BUTTON_TESTING_ID,
          )),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      t[2] !== n
        ? ((u = n.get(o("WebBloksDialogMinificationKeys").DIALOG_BUTTON_TEXT)),
          (t[2] = n),
          (t[3] = u))
        : (u = t[3]);
      var d = u,
        m;
      t[4] !== n
        ? ((m = n.getExpression(
            o("WebBloksDialogMinificationKeys").DIALOG_BUTTON_ON_CLICK,
          )),
          (t[4] = n),
          (t[5] = m))
        : (m = t[5]);
      var p = m,
        _ = o("WebBloksComponentContext").useWebBloksContext(),
        f = _.bloksContext,
        g = _.executeCatch,
        h = _.objectSet,
        y = _.ownerContext,
        C;
      t[6] !== f ||
      t[7] !== g ||
      t[8] !== n ||
      t[9] !== h.navigationManager ||
      t[10] !== p ||
      t[11] !== y
        ? ((C = function (t) {
            (t.preventDefault(),
              t.stopPropagation(),
              h.navigationManager.pop(),
              p != null &&
                (y ? y.executeCatch(p.getValue(), [n, f]) : g(n, p, [n, f])));
          }),
          (t[6] = f),
          (t[7] = g),
          (t[8] = n),
          (t[9] = h.navigationManager),
          (t[10] = p),
          (t[11] = y),
          (t[12] = C))
        : (C = t[12]);
      var b = C,
        v;
      e: switch (a) {
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
      t[13] !== v
        ? ((S = o("WebBloksStyle").classNames(c.button, v)),
          (t[13] = v),
          (t[14] = S))
        : (S = t[14]);
      var R;
      return (
        t[15] !== b || t[16] !== S || t[17] !== l || t[18] !== d
          ? ((R = s.jsx(r("WebBloksAbstractButton"), {
              className: S,
              accessibility_label: d,
              onClick: b,
              title: d,
              "data-testid": void 0,
            })),
            (t[15] = b),
            (t[16] = S),
            (t[17] = l),
            (t[18] = d),
            (t[19] = R))
          : (R = t[19]),
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
