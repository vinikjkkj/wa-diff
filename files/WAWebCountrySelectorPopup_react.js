__d(
  "WAWebCountrySelectorPopup.react",
  [
    "fbt",
    "WAWebBusinessProfileIconSection.react",
    "WAWebButton.react",
    "WAWebCatalogLogEvents",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebRichTextField.react",
    "WAWebSearchIcon.react",
    "WAWebUISpacing",
    "WAWebWamEnumSurfaceType",
    "fbs",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = {
        inputWrapper: {
          display: "x78zum5",
          alignSelf: "xamitd3",
          paddingInlineEnd: "x1xnnf8n",
          $$css: !0,
        },
        formWrapper: { overflowY: "x1odjw0f", $$css: !0 },
        search: {
          backgroundColor: "x1od0jb8",
          paddingTop: "x889kno",
          paddingInlineEnd: "x5zjp28",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "x162tt16",
          $$css: !0,
        },
        description: {
          color: "xhslqc4",
          fontSize: "x1jchvi3",
          lineHeight: "xa7kkou",
          $$css: !0,
        },
        footer: {
          paddingTop: "x889kno",
          paddingInlineEnd: "x2vl965",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "xe2zdcy",
          backgroundColor: "x1280gxy",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
      };
    function _(e) {
      var t = e.countries,
        n = e.countryCode,
        a = e.description,
        i = e.lastUsedCountryCode,
        l = e.onSave,
        c = e.surface,
        _ = e.title,
        g = m(""),
        h = g[0],
        y = g[1],
        C = m(n || ""),
        b = C[0],
        v = C[1],
        S = d(
          function () {
            (o("WAWebCatalogLogEvents").logSMBCountryListClicked(
              c,
              o("WAWebCatalogLogEvents").SmbUserActionTargetEnum.Continue,
              { country: b },
            ),
              o("WAWebModalManager").ModalManager.close(),
              l(b));
          },
          [b, l],
        ),
        R = d(function (e) {
          (o("WAWebCatalogLogEvents").logSMBCountryListClicked(
            c,
            o("WAWebCatalogLogEvents").SmbUserActionTargetEnum.Country,
          ),
            v(e.target.value));
        }, []);
      return u.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Box,
        children: u.jsxs(r("WAWebDrawer.react"), {
          theme: "settings",
          tsNavigationData: {
            surface: "unknown",
            viewName: "country-selector",
          },
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: _,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
              onCancel: function () {
                (c ===
                  o("WAWebWamEnumSurfaceType").SURFACE_TYPE.ORIGIN_COUNTRY &&
                  o("WAWebCatalogLogEvents").logSMBCountryListClicked(
                    c,
                    o("WAWebCatalogLogEvents").SmbUserActionTargetEnum.Back,
                  ),
                  o("WAWebModalManager").ModalManager.close());
              },
            }),
            u.jsx(r("WAWebDrawerBody.react"), {
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "stretch",
                children: [
                  u.jsx(r("WAWebFlexItem.react"), {
                    shrink: 0,
                    xstyle: p.search,
                    children: u.jsx(
                      o("WAWebBusinessProfileIconSection.react").IconSection,
                      {
                        Icon: o("WAWebSearchIcon.react").SearchIcon,
                        theme: o("WAWebBusinessProfileIconSection.react")
                          .IconSectionTheme.NoMarginSmallGutter,
                        content: u.jsx(
                          o("WAWebRichTextField.react").RichTextField,
                          {
                            value: h,
                            editable: !0,
                            inputPlaceholder: s._(/*BTDS*/ "Search\u2026"),
                            onChange: function (t) {
                              return y(t.text);
                            },
                            focusOnMount: !0,
                            theme: "text-input",
                            lowProfile: !0,
                          },
                        ),
                      },
                    ),
                  }),
                  u.jsx(r("WAWebFlexItem.react"), {
                    shrink: 0,
                    xstyle: [
                      p.description,
                      o("WAWebUISpacing").uiPadding.vert10,
                      o("WAWebUISpacing").uiPadding.horiz30,
                    ],
                    children: a,
                  }),
                  u.jsx(r("WAWebFlexItem.react"), {
                    xstyle: p.formWrapper,
                    grow: 1,
                    children: u.jsx("form", {
                      className: "x123j3cw xyri2b xs9asl8 x1c1uobl",
                      children: u.jsx("ol", {
                        children: t
                          .filter(function (e) {
                            var t = e[0],
                              n = e[1];
                            return (
                              t.toLowerCase().includes(h.toLowerCase()) ||
                              n
                                .toString()
                                .toLowerCase()
                                .includes(h.toLowerCase())
                            );
                          })
                          .map(function (e) {
                            var t = e[0],
                              n = e[1];
                            return u.jsx(
                              f,
                              {
                                selectedCountryCode: b,
                                lastUsedCountryCode: i,
                                countryCode: t,
                                label: n,
                                onChange: R,
                              },
                              t,
                            );
                          }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "end",
              xstyle: p.footer,
              children: u.jsx(r("WAWebFlexItem.react"), {
                children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                  onClick: S,
                  children: s._(/*BTDS*/ "Save"),
                }),
              }),
            }),
          ],
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.countryCode,
        a = e["data-testid"],
        i = e.label,
        l = e.lastUsedCountryCode,
        s = e.onChange,
        c = e.selectedCountryCode,
        d = a === void 0 ? "country-selector-popup-option" : a,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { className: "x889kno x5zjp28 x1a8lsjc x162tt16 x1ypdohk" }),
          (t[0] = m))
        : (m = t[0]);
      var _ = n === c,
        f;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "x1ypdohk" }), (t[1] = f))
        : (f = t[1]);
      var g;
      t[2] !== n || t[3] !== s || t[4] !== _
        ? ((g = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: p.inputWrapper,
            children: u.jsx(
              "input",
              babelHelpers.extends(
                {
                  id: n,
                  value: n,
                  type: "radio",
                  name: "countryCode",
                  checked: _,
                },
                f,
                { onChange: s },
              ),
            ),
          })),
          (t[2] = n),
          (t[3] = s),
          (t[4] = _),
          (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { className: "x1lliihq x1lkfr7t x1ypdohk" }), (t[6] = h))
        : (h = t[6]);
      var y = d + "-label",
        C;
      t[7] !== n || t[8] !== i || t[9] !== y
        ? ((C = u.jsx(
            "label",
            babelHelpers.extends({ htmlFor: n }, h, {
              "data-testid": void 0,
              children: i,
            }),
          )),
          (t[7] = n),
          (t[8] = i),
          (t[9] = y),
          (t[10] = C))
        : (C = t[10]);
      var b;
      t[11] !== n || t[12] !== l
        ? ((b =
            l === n &&
            u.jsx("span", {
              className: "x1lliihq xhslqc4 x1jchvi3 xa7kkou",
              children: r("fbs")._(/*BTDS*/ "(Last Used)"),
            })),
          (t[11] = n),
          (t[12] = l),
          (t[13] = b))
        : (b = t[13]);
      var v;
      t[14] !== C || t[15] !== b
        ? ((v = u.jsxs(r("WAWebFlexItem.react"), {
            grow: 1,
            children: [C, b],
          })),
          (t[14] = C),
          (t[15] = b),
          (t[16] = v))
        : (v = t[16]);
      var S;
      return (
        t[17] !== v || t[18] !== g
          ? ((S = u.jsx(
              "li",
              babelHelpers.extends({}, m, {
                children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  children: [g, v],
                }),
              }),
            )),
            (t[17] = v),
            (t[18] = g),
            (t[19] = S))
          : (S = t[19]),
        S
      );
    }
    l.default = _;
  },
  226,
);
