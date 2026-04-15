__d(
  "WAWebProductCatalogCatalogSettingsDrawer.react",
  [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebBizBusinessProfileAction",
    "WAWebBusinessProfileCollection",
    "WAWebClickableLink.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebNoop",
    "WAWebRadioButtonRow.react",
    "WAWebSpinner.react",
    "WAWebText_DONOTUSE.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useEffect,
      g = _.useState,
      h = { surface: "smb-catalog-settings" },
      y = {
        loadingSpinner: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          height: "x5yr21d",
          $$css: !0,
        },
      };
    function C(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.cartEnabled,
        a = e.setCartEnabled,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = function (t) {
            var e = n;
            (a(t),
              o("WAWebBizBusinessProfileAction")
                .updateCartEnabled(t)
                .catch(function (t) {
                  (o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to update cartEnabled value",
                        ])),
                    )
                    .verbose()
                    .sendLogs("updateCartEnabled: cartEnabled toggle error"),
                    o("WAWebToastManager").ToastManager.open(
                      p.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(/*BTDS*/ "Failed to update the setting."),
                        duration: 6e3,
                      }),
                    ),
                    a(e));
                }));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = o("WAWebFaqUrl").getCatalogCartOnOffFaqUrl()), (t[3] = c))
        : (c = t[3]);
      var m = c,
        _;
      if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
        var f = p.jsx(r("WAWebClickableLink.react"), {
          href: m,
          onClick: function (t) {
            (t.preventDefault(),
              o("WAWebExternalLink.react").openExternalLink(m));
          },
          children: s._(/*BTDS*/ "Learn more"),
        });
        ((_ = s._(
          /*BTDS*/ "Turn this on to let customers add items to a cart when shopping in your catalog. Turning this off won't affect carts you've already received. {learn_more_link}",
          [s._param("learn_more_link", f)],
        )),
          (t[4] = _));
      } else _ = t[4];
      var g = _,
        h;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Add to cart")), (t[5] = h))
        : (h = t[5]);
      var y;
      t[6] !== l
        ? ((y = function () {
            l(!0);
          }),
          (t[6] = l),
          (t[7] = y))
        : (y = t[7]);
      var C;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "On")), (t[8] = C))
        : (C = t[8]);
      var b;
      t[9] !== n || t[10] !== y
        ? ((b = p.jsx(r("WAWebRadioButtonRow.react"), {
            isChosen: n,
            onChoose: y,
            choiceText: C,
          })),
          (t[9] = n),
          (t[10] = y),
          (t[11] = b))
        : (b = t[11]);
      var v = !n,
        S;
      t[12] !== l
        ? ((S = function () {
            l(!1);
          }),
          (t[12] = l),
          (t[13] = S))
        : (S = t[13]);
      var R;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Off")), (t[14] = R))
        : (R = t[14]);
      var L;
      t[15] !== v || t[16] !== S
        ? ((L = p.jsx(r("WAWebRadioButtonRow.react"), {
            isChosen: v,
            onChoose: S,
            choiceText: R,
          })),
          (t[15] = v),
          (t[16] = S),
          (t[17] = L))
        : (L = t[17]);
      var E;
      t[18] !== L || t[19] !== b
        ? ((E = p.jsxs(r("WAWebDrawerSection.react"), {
            title: h,
            theme: "title-larger",
            animation: !1,
            children: [b, L],
          })),
          (t[18] = L),
          (t[19] = b),
          (t[20] = E))
        : (E = t[20]);
      var k;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = p.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            theme: "plain",
            className: (d || (d = r("stylex")))([
              o("WAWebUISpacing").uiPadding.vert20,
              o("WAWebUISpacing").uiPadding.horiz25,
            ]),
            children: g,
          })),
          (t[21] = k))
        : (k = t[21]);
      var I;
      return (
        t[22] !== E
          ? ((I = p.jsxs(p.Fragment, { children: [E, k] })),
            (t[22] = E),
            (t[23] = I))
          : (I = t[23]),
        I
      );
    }
    function b(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onBack,
        l = g(!0),
        u = l[0],
        m = l[1],
        _ = g(!1),
        b = _[0],
        v = _[1],
        S = r("useWAWebUnmountSignal")();
      f(function () {
        r("WAPromiseRaceAbort")(
          o(
            "WAWebBusinessProfileCollection",
          ).BusinessProfileCollection.fetchBizProfile(
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          ),
          S,
        )
          .then(function (e) {
            var t = e.profileOptions;
            (v(t != null && t.cartEnabled === !0), m(!1));
          })
          .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
          .catch(function (e) {
            (o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Error fetching the business profile.",
                  ])),
              )
              .verbose(),
              o("WAWebToastManager").ToastManager.open(
                p.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Failed to load catalog settings."),
                  duration: 6e3,
                }),
              ),
              i());
          });
      }, []);
      var R = function (t) {
        v(t);
      };
      return p.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        theme: "catalog",
        onDrop: a.onBack,
        tsNavigationData: h,
        children: [
          p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Settings"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: a.onBack,
            focusBackOrCancel: !0,
          }),
          p.jsx(r("WAWebDrawerBody.react"), {
            children: u
              ? p.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (d || (d = r("stylex"))).props([
                      y.loadingSpinner,
                      o("WAWebUISpacing").uiPadding.all0,
                    ]),
                    { children: p.jsx(o("WAWebSpinner.react").Spinner, {}) },
                  ),
                )
              : p.jsx(C, { cartEnabled: b, setCartEnabled: R }),
          }),
        ],
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
