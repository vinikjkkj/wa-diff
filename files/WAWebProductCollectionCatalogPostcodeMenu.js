__d(
  "WAWebProductCollectionCatalogPostcodeMenu",
  [
    "fbt",
    "WALogger",
    "WAPromiseDelays",
    "WAWebAccessibility.react",
    "WAWebBusinessAddressIcon.react",
    "WAWebDropdown.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebProductCollectionCatalogPostcodeChangeModal",
    "WAWebProductCollectionCatalogPostcodeMenuConstants",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUimUie.react",
    "WAWebUimUieTooltip.react",
    "WAWebUserPrefsGeneral",
    "react",
    "useWAWebModelValues",
    "useWAWebOnUnmount",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = {
        postcodeDescription: {
          lineHeight: "xdod15v",
          fontSize: "x1jchvi3",
          $$css: !0,
        },
        postcodeLocationName: {
          lineHeight: "x1fc57z9",
          fontSize: "x1f6kntn",
          $$css: !0,
        },
      },
      h = 5,
      y = function () {
        var e = o("WAWebUserPrefsGeneral").getPostcodeTooltipViewCount();
        o("WAWebUserPrefsGeneral").setPostcodeTooltipViewCount(e + 1);
      },
      C = function () {
        if (o("WAWebUserPrefsGeneral").getPostcodeTooltipViewedInSession())
          return !1;
        var e = o("WAWebUserPrefsGeneral").getPostcodeTooltipViewCount();
        return !(e >= h);
      };
    function b(t) {
      var n = t.businessDirectConnection,
        a = t.catalog,
        i = t.postcodeChangeSuccess,
        l = o("useWAWebModelValues").useModelValues(n, [
          "postcode",
          "postcodeLocationName",
          "postcodeSetByUser",
        ]),
        u = l.postcode,
        d = l.postcodeLocationName,
        h = l.postcodeSetByUser,
        b = o("useWAWebModelValues").useModelValues(a, [
          "id",
          "hasCatalogCategories",
        ]),
        v = b.hasCatalogCategories,
        S = b.id,
        R = h === !0,
        L = f(!1),
        E = L[0],
        k = L[1],
        I = function () {
          (o("WAWebModalManager").ModalManager.close(), k(!1));
        },
        T = function () {
          (o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebProductCollectionCatalogPostcodeChangeModal"), {
              existingPostcode: u != null ? u : "",
              catalogId: S,
              onCancel: I,
              onSuccess: function () {
                (I(), i());
              },
            }),
          ),
            k(!0));
        },
        D = function (t) {
          (t === void 0 && (t = !1),
            o("WAPromiseDelays")
              .delayMs(
                t
                  ? o("WAWebProductCollectionCatalogPostcodeMenuConstants")
                      .CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY
                  : 0,
              )
              .finally(T));
        },
        x = function () {
          D(!1);
        },
        $ = f(null),
        P = $[0],
        N = $[1],
        M = _(null),
        w = _(null),
        A = m(function () {
          return N(null);
        }, []),
        F = o("useWAWebTimeout").useTimeout(
          A,
          o("WAWebProductCollectionCatalogPostcodeMenuConstants")
            .CATALOG_POSTCODE_MENU_TOOLTIP_DURATION,
        ),
        O = F[0],
        B = m(function () {
          var e = w.current ? (w.current.offsetWidth * 3) / 4 : null;
          N({
            menu: c.jsx("div", {
              style: typeof e == "number" ? { maxWidth: e + "px" } : null,
              children: c.jsx(o("WAWebText_DONOTUSE.react").Text, {
                as: "p",
                children: s._(
                  /*BTDS*/ "Click to change pincode to see items available in your area",
                ),
              }),
            }),
            anchor: M.current,
            dirY: o("WAWebDropdown.react").DirY.TOP,
            type: o("WAWebDropdown.react").MenuType.Tooltip,
            horizontal: !0,
            tooltipColorScheme: o("WAWebDropdown.react").TooltipColorScheme
              .Highlight,
          });
        }, []),
        W = o("useWAWebTimeout").useTimeout(function () {
          M.current
            ? (B(), O())
            : o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[direct-connection] change postcode tooltip is not shown",
                  ])),
              );
        }, o("WAWebProductCollectionCatalogPostcodeMenuConstants").CATALOG_POSTCODE_MENU_TOOLTIP_DELAY),
        q = W[0];
      (p(function () {
        R ||
          (C() &&
            (y(),
            o("WAWebUserPrefsGeneral").setPostcodeTooltipViewedInSession(!0),
            q()));
      }, []),
        r("useWAWebOnUnmount")(function () {
          E && I();
        }));
      var U = f(0),
        V = U[0],
        H = U[1];
      p(
        function () {
          v === !0 &&
            H(function (e) {
              return e + 1;
            });
        },
        [v],
      );
      var G = P
        ? c.jsx(
            o("WAWebUimUie.react").UIE,
            {
              displayName: "CatalogPostcodeTooltip",
              popable: !0,
              escapable: !0,
              requestDismiss: A,
              dismissOnWindowResize: !0,
              children: c.jsx(r("WAWebUimUieTooltip.react"), { tooltip: P }),
            },
            V,
          )
        : null;
      return c.jsxs(
        "div",
        babelHelpers.extends(
          {
            className:
              "x78zum5 x6s0dn4 x1280gxy x7wzq59 x13vifvy x1oy9qf3 x1obj6zc x17gydlx",
          },
          o("WAWebAccessibility.react").accessibleClickableButtonProps({
            onClick: x,
          }),
          {
            ref: w,
            children: [
              c.jsx("span", {
                className: "x1h678fw xv6tirj x11ahuha xl3akx1 xvy4d1p xhslqc4",
                children: c.jsx(
                  o("WAWebBusinessAddressIcon.react").BusinessAddressIcon,
                  {},
                ),
              }),
              c.jsxs(o("WAWebFlex.react").FlexColumn, {
                ref: M,
                children: [
                  c.jsx(o("WAWebText_DONOTUSE.react").Text, {
                    as: "p",
                    xstyle: g.postcodeDescription,
                    children: s._(
                      /*BTDS*/ "Deliver to {postcode-of-a-geographic-area}",
                      [s._param("postcode-of-a-geographic-area", u)],
                    ),
                  }),
                  c.jsx(o("WAWebText.react").WAWebTextMuted, {
                    as: "p",
                    xstyle: g.postcodeLocationName,
                    children: R ? d : s._(/*BTDS*/ "Click to change Pincode"),
                  }),
                  G,
                ],
              }),
            ],
          },
        ),
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.MAX_TIMES_POSTCODE_CHANGE_TOOLTIP_TO_SHOW = h),
      (l.CatalogPostcodeMenu = b));
  },
  226,
);
