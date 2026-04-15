__d(
  "WAWebDeveloperMenuDebugCommandsDrawer.react",
  [
    "WAWebCopiableText.react",
    "WAWebDebugCommandSearchModel",
    "WAWebDeveloperMenuUtils",
    "WAWebDrawer.react",
    "WAWebDrawerHeader.react",
    "WAWebEmptyState.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebSearchInput",
    "WAWebWdsIcSendFilledIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebSearchModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = { successColor: { color: "x1du590y", $$css: !0 } };
    function m(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.command,
        a = n.doc,
        i = n.id,
        l = n.paramsToExecute,
        s = c(!1),
        m = s[0],
        p = s[1],
        _;
      t[0] !== n || t[1] !== l
        ? ((_ = function () {
            l != null && r("WAWebDeveloperMenuUtils").executeDebugCommand(n);
          }),
          (t[0] = n),
          (t[1] = l),
          (t[2] = _))
        : (_ = t[2]);
      var f = _,
        g;
      t[3] !== m || t[4] !== l
        ? ((g =
            l != null
              ? u.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
                  iconXstyle: m ? d.successColor : void 0,
                  height: 24,
                })
              : null),
          (t[3] = m),
          (t[4] = l),
          (t[5] = g))
        : (g = t[5]);
      var h, y;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            return p(!0);
          }),
          (y = function () {
            return p(!1);
          }),
          (t[6] = h),
          (t[7] = y))
        : ((h = t[6]), (y = t[7]));
      var C = "Debug." + i,
        b;
      t[8] !== i || t[9] !== C
        ? ((b = u.jsx(r("WAWebCopiableText.react"), {
            showOnHover: !0,
            text: C,
            children: i,
          })),
          (t[8] = i),
          (t[9] = C),
          (t[10] = b))
        : (b = t[10]);
      var v;
      return (
        t[11] !== a || t[12] !== f || t[13] !== i || t[14] !== g || t[15] !== b
          ? ((v = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
              detailRight: g,
              onActive: h,
              onInactive: y,
              onSelect: f,
              optionId: i,
              primary: b,
              secondary: a,
            })),
            (t[11] = a),
            (t[12] = f),
            (t[13] = i),
            (t[14] = g),
            (t[15] = b),
            (t[16] = v))
          : (v = t[16]),
        v
      );
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(16),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.onBack,
        c = o("useWAWebSearchModel").useSearchModel(f),
        d = c.query,
        m = c.results,
        p;
      n[3] !== (m == null ? void 0 : m.results)
        ? ((p = (m == null ? void 0 : m.results.map(_)) || []),
          (n[3] = m == null ? void 0 : m.results),
          (n[4] = p))
        : (p = n[4]);
      var h = p,
        y;
      n[5] !== s
        ? ((y = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onBack: s,
            title: "Debug Commands",
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (n[5] = s),
          (n[6] = y))
        : (y = n[6]);
      var C;
      n[7] !== h
        ? ((C =
            h.length === 0
              ? u.jsx(o("WAWebEmptyState.react").Empty, {
                  text: "You can add more commands in WAWebDebug.js",
                  title: "No debug command found",
                })
              : u.jsx(
                  o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu,
                  {
                    colorScheme: "lightest",
                    data: h,
                    material: !0,
                    renderItem: g,
                  },
                )),
          (n[7] = h),
          (n[8] = C))
        : (C = n[8]);
      var b;
      n[9] !== d || n[10] !== C
        ? ((b = u.jsx(o("WAWebSearchInput").DrawerSearchInput, {
            onSearch: d,
            placeholder: "Search for debug command",
            children: C,
          })),
          (n[9] = d),
          (n[10] = C),
          (n[11] = b))
        : (b = n[11]);
      var v;
      return (
        n[12] !== i || n[13] !== y || n[14] !== b
          ? ((v = u.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              testid: void 0,
              theme: "settings",
              children: [y, b],
            })),
            (n[12] = i),
            (n[13] = y),
            (n[14] = b),
            (n[15] = v))
          : (v = n[15]),
        v
      );
    }
    function _(e) {
      return { itemKey: e.id, data: e.data };
    }
    function f() {
      return new (o("WAWebDebugCommandSearchModel").DebugCommandSearch)();
    }
    function g(e) {
      return u.jsx(m, { command: e.data }, e.data.id);
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
