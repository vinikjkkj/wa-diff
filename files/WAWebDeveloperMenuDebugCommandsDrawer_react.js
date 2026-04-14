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
    "useWAWebSearchModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = { successColor: { color: "x1du590y", $$css: !0 } };
    function m(e) {
      var t = e.command,
        n = t.doc,
        a = t.id,
        i = t.paramsToExecute,
        l = c(!1),
        s = l[0],
        m = l[1],
        p = function () {
          i != null && r("WAWebDeveloperMenuUtils").executeDebugCommand(t);
        };
      return u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
        detailRight:
          i != null
            ? u.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
                iconXstyle: s ? d.successColor : void 0,
                height: 24,
              })
            : null,
        onActive: function () {
          return m(!0);
        },
        onInactive: function () {
          return m(!1);
        },
        onSelect: p,
        optionId: a,
        primary: u.jsx(r("WAWebCopiableText.react"), {
          showOnHover: !0,
          text: "Debug." + a,
          children: a,
        }),
        secondary: n,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onBack,
        l = o("useWAWebSearchModel").useSearchModel(function () {
          return new (o("WAWebDebugCommandSearchModel").DebugCommandSearch)();
        }),
        s = l.query,
        c = l.results,
        d =
          (c == null
            ? void 0
            : c.results.map(function (e) {
                return { itemKey: e.id, data: e.data };
              })) || [];
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        testid: void 0,
        theme: "settings",
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onBack: i,
            title: "Debug Commands",
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          u.jsx(o("WAWebSearchInput").DrawerSearchInput, {
            onSearch: s,
            placeholder: "Search for debug command",
            children:
              d.length === 0
                ? u.jsx(o("WAWebEmptyState.react").Empty, {
                    text: "You can add more commands in WAWebDebug.js",
                    title: "No debug command found",
                  })
                : u.jsx(
                    o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu,
                    {
                      colorScheme: "lightest",
                      data: d,
                      material: !0,
                      renderItem: _,
                    },
                  ),
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return u.jsx(m, { command: e.data }, e.data.id);
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
