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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(21),
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
        m = c(d),
        p = m[0],
        _ = m[1],
        f;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function (t, n) {
            (n
              ? o("WAWebNuxAction").dismissNux(
                  o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX[t],
                )
              : o("WAWebNuxAction").resetNux(
                  o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX[t],
                ),
              _(d));
          }),
          (n[3] = f))
        : (f = n[3]);
      var g = f,
        h;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            (r("WAWebDebug").resetAllNux(), _(d));
          }),
          (n[4] = h))
        : (h = n[4]);
      var y = h,
        C;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function () {
            (r("WAWebDebug").dismissAllNux(), _(d));
          }),
          (n[5] = C))
        : (C = n[5]);
      var b = C,
        v;
      n[6] !== s
        ? ((v = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: "NUX Manager",
            onBack: s,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (n[6] = s),
          (n[7] = v))
        : (v = n[7]);
      var S, R, L, E;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx(o("WAWebFlex.react").FlexRow, {
            margin: 16,
            shrink: 0,
            children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
              children:
                "On indicates that a nux has been seen the max number of times. Off indicates that the nux has never been seen.",
            }),
          })),
          (R = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "dismiss-all",
            primary: "Dismiss all",
            onSelect: b,
          })),
          (L = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "reset-all",
            primary: "Reset all",
            onSelect: y,
          })),
          (E = u.jsx(o("WAWebMenuItems.react").MenuSeparator, {})),
          (n[8] = S),
          (n[9] = R),
          (n[10] = L),
          (n[11] = E))
        : ((S = n[8]), (R = n[9]), (L = n[10]), (E = n[11]));
      var k;
      if (n[12] !== p) {
        var I;
        (n[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = function (t) {
              return t.maxViews === 1 / 0
                ? u.jsx(
                    o("WAWebMenuItems.react").ActionMenuItem,
                    {
                      optionId: t.name,
                      primary: u.jsx(
                        o("WAWebCopyPasteSelectable.react").SelectableSpan,
                        {
                          selectable: !0,
                          onClick: o("WAWebStopEvent").stopPropagation,
                          children: t.name,
                        },
                      ),
                      secondary: "Max views: " + t.maxViews,
                      onSelect: r("WAWebNoop"),
                      disabled: !0,
                    },
                    t.name,
                  )
                : u.jsx(
                    o("WAWebMenuItems.react").SwitchMenuItem,
                    {
                      optionId: t.name,
                      primary: u.jsx(
                        o("WAWebCopyPasteSelectable.react").SelectableSpan,
                        {
                          selectable: !0,
                          onClick: o("WAWebStopEvent").stopPropagation,
                          children: t.name,
                        },
                      ),
                      secondary: "Max views: " + t.maxViews,
                      on: t.value,
                      initialState: t.value,
                      onSelect: function (n) {
                        return g(t.name, n);
                      },
                    },
                    t.name,
                  );
            }),
            (n[14] = I))
          : (I = n[14]),
          (k = p.map(I)),
          (n[12] = p),
          (n[13] = k));
      } else k = n[13];
      var T;
      n[15] !== k
        ? ((T = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(o("WAWebMenu.react").WAWebMenu, {
              size: "medium",
              focusOnMount: !0,
              material: !0,
              children: [S, R, L, E, k],
            }),
          })),
          (n[15] = k),
          (n[16] = T))
        : (T = n[16]);
      var D;
      return (
        n[17] !== i || n[18] !== T || n[19] !== v
          ? ((D = u.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              theme: "settings",
              testid: void 0,
              children: [v, T],
            })),
            (n[17] = i),
            (n[18] = T),
            (n[19] = v),
            (n[20] = D))
          : (D = n[20]),
        D
      );
    }
    l.default = m;
  },
  98,
);
