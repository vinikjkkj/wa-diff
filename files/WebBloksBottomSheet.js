__d(
  "WebBloksBottomSheet",
  [
    "WebBloksAbstractButton",
    "WebBloksBottomSheetBase",
    "WebBloksComponentContext",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
    "useClickablePropsForWebBloks",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = "#",
      p = "&",
      _ = "5",
      f = "$",
      g = ",",
      h = "-",
      y = ".",
      C = "0";
    function b(e) {
      var t = o("react-compiler-runtime").c(36),
        n = e.node,
        a;
      t[0] !== n
        ? ((a = n.getExpression(p)), (t[0] = n), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== n
        ? ((l = n.getExpression(h)), (t[2] = n), (t[3] = l))
        : (l = t[3]);
      var u = l,
        c;
      t[4] !== n ? ((c = n.get(g)), (t[4] = n), (t[5] = c)) : (c = t[5]);
      var b = c,
        R;
      t[6] !== n ? ((R = n.get(C)), (t[6] = n), (t[7] = R)) : (R = t[7]);
      var L = R,
        E = n.get(y),
        k;
      t[8] !== n ? ((k = n.get(f)), (t[8] = n), (t[9] = k)) : (k = t[9]);
      var I = k,
        T;
      t[10] !== n ? ((T = n.get(_)), (t[10] = n), (t[11] = T)) : (T = t[11]);
      var D = T,
        x = o("WebBloksComponentContext").useWebBloksContext(),
        $;
      t[12] !== x.objectSet.navigationManager
        ? (($ = function () {
            x.objectSet.navigationManager.pop();
          }),
          (t[12] = x.objectSet.navigationManager),
          (t[13] = $))
        : ($ = t[13]);
      var P = $,
        N;
      t[14] !== x.objectSet.navigationManager || t[15] !== i
        ? ((N = function () {
            if (i != null) {
              var e;
              (e = x.objectSet.navigationManager.getCurrentModal()) == null ||
                e.setDismissCallback(i);
            }
          }),
          (t[14] = x.objectSet.navigationManager),
          (t[15] = i),
          (t[16] = N))
        : (N = t[16]);
      var M;
      (t[17] !== x || t[18] !== i
        ? ((M = [x, i]), (t[17] = x), (t[18] = i), (t[19] = M))
        : (M = t[19]),
        d(N, M));
      var w,
        A = r("useClickablePropsForWebBloks")(n, u);
      u != null &&
        (w = s.jsx(
          r("WebBloksAbstractButton"),
          babelHelpers.extends(
            {
              trailing: !0,
              accessibility_label: b,
              title: L,
              icon: v(x.objectSet, E),
            },
            A,
          ),
        ));
      var F;
      t[20] !== P || t[21] !== x.objectSet
        ? ((F =
            x.objectSet.navigationManager.getModalCount() > 1
              ? s.jsx(r("WebBloksAbstractButton"), {
                  icon: x.objectSet.getAsset("chevronLeft24"),
                  accessibility_label: "Back",
                  onClick: P,
                })
              : null),
          (t[20] = P),
          (t[21] = x.objectSet),
          (t[22] = F))
        : (F = t[22]);
      var O = F,
        B = D != null ? D + "%" : "auto",
        W;
      t[23] !== O || t[24] !== I || t[25] !== w
        ? ((W =
            w || O || I != null
              ? s.jsxs("div", {
                  className: S.titleBar,
                  children: [
                    O,
                    s.jsx("div", { className: S.title, children: I }),
                    w,
                  ],
                })
              : null),
          (t[23] = O),
          (t[24] = I),
          (t[25] = w),
          (t[26] = W))
        : (W = t[26]);
      var q = W,
        U;
      t[27] !== x || t[28] !== n
        ? ((U = x.renderNode(n.getSubNode(m))),
          (t[27] = x),
          (t[28] = n),
          (t[29] = U))
        : (U = t[29]);
      var V = U,
        H;
      return (
        t[30] !== P ||
        t[31] !== V ||
        t[32] !== B ||
        t[33] !== q ||
        t[34] !== n.styleId
          ? ((H = s.jsx(r("WebBloksBottomSheetBase"), {
              closeDialog: P,
              content: V,
              height: B,
              name: n.styleId,
              navbar: q,
            })),
            (t[30] = P),
            (t[31] = V),
            (t[32] = B),
            (t[33] = q),
            (t[34] = n.styleId),
            (t[35] = H))
          : (H = t[35]),
        H
      );
    }
    function v(e, t) {
      switch (t) {
        case "close":
          return e.getAsset("navCross");
        case "settings":
          return e.getAsset("settings");
        case "overflow":
          return e.getAsset("nav3DotHorizontal");
        default:
          return null;
      }
    }
    var S = o("WebBloksStyle").createStyles({
      titleBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 52,
        paddingLeft: 16,
        paddingRight: 16,
        fontWeight: "bold",
        borderBottom: "0.5px solid #dbdbdb",
      },
      title: { flex: "1 1 0", textAlign: "center", margin: 8 },
    });
    l.default = b;
  },
  98,
);
