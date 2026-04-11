__d(
  "CometObjectFitContainer.react",
  [
    "FBLogger",
    "cr:964538",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        inner: {
          height: "x5yr21d",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        innerWithAspectRatio: {
          bottom: "x1ey2m1c",
          boxSizing: "x9f619",
          insetInlineEnd: "xtijo5x",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          position: "x10l6tqk",
          top: "x13vifvy",
          $$css: !0,
        },
        outer: {
          height: "x5yr21d",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        outerWithAspectRatio: { height: "xt7dq6l", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(21),
        a = t.children,
        i = t.debugRole,
        l = t.innerInlineStyle,
        s = t.innerXStyle,
        d = t.outerInlineStyle,
        m = t.outerRef,
        p = t.outerXStyle,
        _ = t.testid,
        f = r("isStringNullOrEmpty")(_) ? void 0 : _ + "-outer",
        g = r("isStringNullOrEmpty")(_) ? void 0 : _ + "-inner",
        h;
      n[0] !== i ? ((h = {}), (n[0] = i), (n[1] = h)) : (h = n[1]);
      var y;
      n[2] !== p
        ? ((y = (e || (e = r("stylex")))(c.outer, p)), (n[2] = p), (n[3] = y))
        : (y = n[3]);
      var C;
      n[4] !== i ? ((C = {}), (n[4] = i), (n[5] = C)) : (C = n[5]);
      var b;
      n[6] !== s
        ? ((b = (e || (e = r("stylex")))(c.inner, s)), (n[6] = s), (n[7] = b))
        : (b = n[7]);
      var v;
      n[8] !== a || n[9] !== l || n[10] !== C || n[11] !== b || n[12] !== g
        ? ((v = u.jsx(
            "div",
            babelHelpers.extends({}, C, {
              className: b,
              "data-testid": void 0,
              style: l,
              children: a,
            }),
          )),
          (n[8] = a),
          (n[9] = l),
          (n[10] = C),
          (n[11] = b),
          (n[12] = g),
          (n[13] = v))
        : (v = n[13]);
      var S;
      return (
        n[14] !== d ||
        n[15] !== m ||
        n[16] !== h ||
        n[17] !== y ||
        n[18] !== v ||
        n[19] !== f
          ? ((S = u.jsx(
              "div",
              babelHelpers.extends({}, h, {
                className: y,
                "data-testid": void 0,
                ref: m,
                style: d,
                children: v,
              }),
            )),
            (n[14] = d),
            (n[15] = m),
            (n[16] = h),
            (n[17] = y),
            (n[18] = v),
            (n[19] = f),
            (n[20] = S))
          : (S = n[20]),
        S
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.children,
        a = e.contentAspectRatio,
        i = e.debugRole,
        l = e.objectFitMode,
        s = e.ref,
        m = e.testid,
        p = l === void 0 ? "CONTAINER_SIZE" : l,
        _ = a != null && isFinite(a) && a > 0 ? a : 1.7777777777777777;
      if (p === "CONTAINER_WIDTH_BASED_ASPECT_RATIO") {
        var f = isFinite(_) && _ > 0 ? 100 / _ : 100,
          g;
        t[0] !== f ? ((g = f.toFixed(5)), (t[0] = f), (t[1] = g)) : (g = t[1]);
        var h = g + "%",
          y;
        t[2] !== h
          ? ((y = { paddingBottom: h }), (t[2] = h), (t[3] = y))
          : (y = t[3]);
        var C = y,
          b;
        return (
          t[4] !== n || t[5] !== i || t[6] !== C || t[7] !== s || t[8] !== m
            ? ((b = u.jsx(d, {
                children: n,
                debugRole: i,
                innerXStyle: c.innerWithAspectRatio,
                outerInlineStyle: C,
                outerRef: s,
                outerXStyle: c.outerWithAspectRatio,
                testid: void 0,
              })),
              (t[4] = n),
              (t[5] = i),
              (t[6] = C),
              (t[7] = s),
              (t[8] = m),
              (t[9] = b))
            : (b = t[9]),
          b
        );
      } else if (p === "CONTAINER_SIZE") {
        var v;
        return (
          t[10] !== n || t[11] !== i || t[12] !== s || t[13] !== m
            ? ((v = u.jsx(d, {
                children: n,
                debugRole: i,
                outerRef: s,
                testid: void 0,
              })),
              (t[10] = n),
              (t[11] = i),
              (t[12] = s),
              (t[13] = m),
              (t[14] = v))
            : (v = t[14]),
          v
        );
      } else
        throw r("FBLogger")("comet_ui").mustfixThrow(
          "Unsupported objectFitMode %s",
          p,
        );
    }
    l.default = m;
  },
  98,
);
