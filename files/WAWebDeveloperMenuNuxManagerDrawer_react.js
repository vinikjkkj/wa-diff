__d(
  "WAWebDeveloperMenuNuxManagerDrawer.react",
  [
    "WAWebCopyPasteSelectable.react",
    "WAWebDebug",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlex.react",
    "WAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebNoop",
    "WAWebNux",
    "WAWebNuxAction",
    "WAWebStopEvent",
    "WAWebText.react",
    "WAWebUserPrefsNuxPreferences",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d() {
      return Object.keys(o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX)
        .map(function (e) {
          return {
            name: e,
            value: !o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
              o("WAWebNux").NUX[e],
            ),
            maxViews: o("WAWebUserPrefsNuxPreferences").getNuxMaxViews(
              o("WAWebNux").NUX[e],
            ),
          };
        })
        .sort(function (e, t) {
          return e.name.localeCompare(t.name);
        });
    }
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onBack,
        l = c(d),
        s = l[0],
        m = l[1],
        p = function (t, n) {
          (n
            ? o("WAWebNuxAction").dismissNux(
                o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX[t],
              )
            : o("WAWebNuxAction").resetNux(
                o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX[t],
              ),
            m(d));
        },
        _ = function () {
          (r("WAWebDebug").resetAllNux(), m(d));
        },
        f = function () {
          (r("WAWebDebug").dismissAllNux(), m(d));
        };
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        theme: "settings",
        testid: void 0,
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: "NUX Manager",
            onBack: i,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(o("WAWebMenu.react").WAWebMenu, {
              size: "medium",
              focusOnMount: !0,
              material: !0,
              children: [
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  margin: 16,
                  shrink: 0,
                  children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
                    children:
                      "On indicates that a nux has been seen the max number of times. Off indicates that the nux has never been seen.",
                  }),
                }),
                u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: "dismiss-all",
                  primary: "Dismiss all",
                  onSelect: f,
                }),
                u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: "reset-all",
                  primary: "Reset all",
                  onSelect: _,
                }),
                u.jsx(o("WAWebMenuItems.react").MenuSeparator, {}),
                s.map(function (e) {
                  return e.maxViews === 1 / 0
                    ? u.jsx(
                        o("WAWebMenuItems.react").ActionMenuItem,
                        {
                          optionId: e.name,
                          primary: u.jsx(
                            o("WAWebCopyPasteSelectable.react").SelectableSpan,
                            {
                              selectable: !0,
                              onClick: o("WAWebStopEvent").stopPropagation,
                              children: e.name,
                            },
                          ),
                          secondary: "Max views: " + e.maxViews,
                          onSelect: r("WAWebNoop"),
                          disabled: !0,
                        },
                        e.name,
                      )
                    : u.jsx(
                        o("WAWebMenuItems.react").SwitchMenuItem,
                        {
                          optionId: e.name,
                          primary: u.jsx(
                            o("WAWebCopyPasteSelectable.react").SelectableSpan,
                            {
                              selectable: !0,
                              onClick: o("WAWebStopEvent").stopPropagation,
                              children: e.name,
                            },
                          ),
                          secondary: "Max views: " + e.maxViews,
                          on: e.value,
                          initialState: e.value,
                          onSelect: function (n) {
                            return p(e.name, n);
                          },
                        },
                        e.name,
                      );
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
