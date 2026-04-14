__d(
  "WAWebChatInfoDrawerSection.react",
  ["WAWebDrawerSection.react", "WAWebUISpacing", "react"],
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
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = [
          [
            o("WAWebUISpacing").uiPadding.horiz20,
            o("WAWebUISpacing").uiPadding.vert10,
          ],
          a.title == null && _.containerWithoutTitle,
          a.xstyle,
        ],
        l = [a.titleXStyle];
      return d.jsx(
        r("WAWebDrawerSection.react"),
        babelHelpers.extends({}, a, {
          xstyle: i,
          titleXStyle: l,
          theme: "refresh-new",
          ref: n,
          children: a.children,
        }),
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = {
      drawerSectionContainer: { paddingBottom: "x18d9i69", $$css: !0 },
    };
    function h(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return d.jsx(
        f,
        babelHelpers.extends({}, n, {
          xstyle: [g.drawerSectionContainer, n.xstyle],
          ref: t,
          children: d.jsx("div", { children: n.children }),
        }),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
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
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u);
      return d.jsx(
        f,
        babelHelpers.extends({}, n, {
          xstyle: [y.drawerSectionContainer, n.xstyle],
          ref: t,
          children: n.children,
        }),
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.INFO_DRAWER_MAX_ROWS = m),
      (l.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST = p),
      (l.ChatInfoDrawerSection = f),
      (l.ChatInfoDrawerListSection = h),
      (l.ChatInfoDrawerButtonsSection = C));
  },
  98,
);
