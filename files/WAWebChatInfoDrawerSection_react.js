__d(
  "WAWebChatInfoDrawerSection.react",
  [
    "WAWebDrawerSection.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = ["ref"],
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = 10,
      p = 11,
      _ = {
        containerWithoutTitle: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x5zjp28",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x162tt16",
          marginBottom: "xat24cr",
          $$css: !0,
        },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(14),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebUISpacing").uiPadding.horiz20,
            o("WAWebUISpacing").uiPadding.vert10,
          ]),
          (n[3] = l))
        : (l = n[3]);
      var s = a.title == null && _.containerWithoutTitle,
        u;
      n[4] !== a.xstyle || n[5] !== s
        ? ((u = [l, s, a.xstyle]), (n[4] = a.xstyle), (n[5] = s), (n[6] = u))
        : (u = n[6]);
      var c = u,
        m;
      n[7] !== a.titleXStyle
        ? ((m = [a.titleXStyle]), (n[7] = a.titleXStyle), (n[8] = m))
        : (m = n[8]);
      var p = m,
        f;
      return (
        n[9] !== a || n[10] !== i || n[11] !== p || n[12] !== c
          ? ((f = d.jsx(
              r("WAWebDrawerSection.react"),
              babelHelpers.extends({}, a, {
                xstyle: c,
                titleXStyle: p,
                theme: "refresh-new",
                ref: i,
                children: a.children,
              }),
            )),
            (n[9] = a),
            (n[10] = i),
            (n[11] = p),
            (n[12] = c),
            (n[13] = f))
          : (f = n[13]),
        f
      );
    }
    var g = {
      drawerSectionContainer: { paddingBottom: "x18d9i69", $$css: !0 },
    };
    function h(e) {
      var t = o("react-compiler-runtime").c(12),
        n,
        r;
      t[0] !== e
        ? ((r = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, s)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a;
      t[3] !== n.xstyle
        ? ((a = [g.drawerSectionContainer, n.xstyle]),
          (t[3] = n.xstyle),
          (t[4] = a))
        : (a = t[4]);
      var i;
      t[5] !== n.children
        ? ((i = d.jsx("div", { children: n.children })),
          (t[5] = n.children),
          (t[6] = i))
        : (i = t[6]);
      var l;
      return (
        t[7] !== n || t[8] !== r || t[9] !== a || t[10] !== i
          ? ((l = d.jsx(
              f,
              babelHelpers.extends({}, n, { xstyle: a, ref: r, children: i }),
            )),
            (t[7] = n),
            (t[8] = r),
            (t[9] = a),
            (t[10] = i),
            (t[11] = l))
          : (l = t[11]),
        l
      );
    }
    var y = {
      drawerSectionContainer: {
        paddingTop: "xexx8yu",
        paddingInlineEnd: "xyri2b",
        paddingBottom: "x18d9i69",
        paddingInlineStart: "x1c1uobl",
        $$css: !0,
      },
    };
    function C(e) {
      var t = o("react-compiler-runtime").c(9),
        n,
        r;
      t[0] !== e
        ? ((r = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a;
      t[3] !== n.xstyle
        ? ((a = [y.drawerSectionContainer, n.xstyle]),
          (t[3] = n.xstyle),
          (t[4] = a))
        : (a = t[4]);
      var i;
      return (
        t[5] !== n || t[6] !== r || t[7] !== a
          ? ((i = d.jsx(
              f,
              babelHelpers.extends({}, n, {
                xstyle: a,
                ref: r,
                children: n.children,
              }),
            )),
            (t[5] = n),
            (t[6] = r),
            (t[7] = a),
            (t[8] = i))
          : (i = t[8]),
        i
      );
    }
    ((l.INFO_DRAWER_MAX_ROWS = m),
      (l.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST = p),
      (l.ChatInfoDrawerSection = f),
      (l.ChatInfoDrawerListSection = h),
      (l.ChatInfoDrawerButtonsSection = C));
  },
  98,
);
