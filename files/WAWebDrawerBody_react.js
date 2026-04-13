__d(
  "WAWebDrawerBody.react",
  [
    "WAWebFlatListContainer.react",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "ariaLabel",
        "ariaRole",
        "backgroundColor",
        "children",
        "flatListControllers",
        "isRefresh",
        "overflow",
        "theme",
        "xstyle",
      ],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        container: {
          position: "x1n2onr6",
          zIndex: "xupqr0c",
          display: "x78zum5",
          flexBasis: "x1r8uery",
          flexGrow: "x1iyjqo2",
          flexDirection: "xdt5ytf",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          opacity: "x1hc1fzr",
          $$css: !0,
        },
        noscroll: { overflowX: "x6ikm8r", overflowY: "x10wlt62", $$css: !0 },
        centerItem: {
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        padding: { marginTop: "x1anpbxc", marginBottom: "xyorhqc", $$css: !0 },
        centerColumn: {
          width: "x1l2rt3b",
          paddingTop: "x13crsa5",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x1rxj1xn",
          paddingInlineStart: "x1c1uobl",
          marginTop: "xdj266r",
          marginInlineEnd: "x11t971q",
          marginBottom: "xat24cr",
          marginInlineStart: "xvc5jky",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        darkMode: {
          "::-webkit-scrollbar-track_backgroundColor": "x1anedsm",
          $$css: !0,
        },
        lightScrollStyles: { scrollbarColor: "xpi494a", $$css: !0 },
        darkScrollStyles: { scrollbarColor: "xiu8dh7", $$css: !0 },
      },
      p = { default: { backgroundColor: "x1280gxy", $$css: !0 } },
      _ = { default: { backgroundColor: "x1280gxy", $$css: !0 } };
    function f(t) {
      var n = o("react-compiler-runtime").c(34),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = o("WAWebThemeContext").useIsDarkTheme(),
        c,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R;
      if (n[3] !== a) {
        var L = a;
        ((c = L.ariaLabel),
          (f = L.ariaRole),
          (g = L.backgroundColor),
          (h = L.children),
          (y = L.flatListControllers),
          (C = L.isRefresh),
          (v = L.overflow),
          (S = L.theme),
          (R = L.xstyle),
          (b = babelHelpers.objectWithoutPropertiesLoose(L, s)),
          (n[3] = a),
          (n[4] = c),
          (n[5] = f),
          (n[6] = g),
          (n[7] = h),
          (n[8] = y),
          (n[9] = C),
          (n[10] = b),
          (n[11] = v),
          (n[12] = S),
          (n[13] = R));
      } else
        ((c = n[4]),
          (f = n[5]),
          (g = n[6]),
          (h = n[7]),
          (y = n[8]),
          (C = n[9]),
          (b = n[10]),
          (v = n[11]),
          (S = n[12]),
          (R = n[13]));
      var E;
      n[14] !== g ||
      n[15] !== l ||
      n[16] !== C ||
      n[17] !== v ||
      n[18] !== S ||
      n[19] !== R
        ? ((E = (u || (u = r("stylex")))([
            m.container,
            v === "hidden" && m.noscroll,
            S === "center-content" && m.centerItem,
            S === "padding" && m.padding,
            S === "center-column" && m.centerColumn,
            S === "custom-scroll" && !l && m.lightScrollStyles,
            S === "custom-scroll" && l && m.darkScrollStyles,
            l && m.darkMode,
            g != null && (C === !0 ? _[g] : p[g]),
            R,
          ])),
          (n[14] = g),
          (n[15] = l),
          (n[16] = C),
          (n[17] = v),
          (n[18] = S),
          (n[19] = R),
          (n[20] = E))
        : (E = n[20]);
      var k = E;
      if (y && y.length > 0) {
        var I;
        return (
          n[21] !== h ||
          n[22] !== k ||
          n[23] !== y ||
          n[24] !== b ||
          n[25] !== i
            ? ((I = d.jsx(
                r("WAWebFlatListContainer.react"),
                babelHelpers.extends(
                  { ref: i, flatListControllers: y, className: k },
                  b,
                  { children: h },
                ),
              )),
              (n[21] = h),
              (n[22] = k),
              (n[23] = y),
              (n[24] = b),
              (n[25] = i),
              (n[26] = I))
            : (I = n[26]),
          I
        );
      }
      var T;
      return (
        n[27] !== c ||
        n[28] !== f ||
        n[29] !== h ||
        n[30] !== k ||
        n[31] !== b ||
        n[32] !== i
          ? ((T = d.jsx(
              "div",
              babelHelpers.extends(
                { className: k, ref: i, "aria-label": c, role: f },
                b,
                { children: h },
              ),
            )),
            (n[27] = c),
            (n[28] = f),
            (n[29] = h),
            (n[30] = k),
            (n[31] = b),
            (n[32] = i),
            (n[33] = T))
          : (T = n[33]),
        T
      );
    }
    l.default = f;
  },
  98,
);
