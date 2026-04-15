__d(
  "WAWebBusinessProductsAndServicesView.react",
  [
    "fbt",
    "WAWebBusinessHoursIcon.react",
    "WAWebBusinessProfileLabels",
    "WAWebDropdown.react",
    "WAWebFlex.react",
    "WAWebPlusIcon.react",
    "WAWebProductCollection",
    "WDSIconIcGridOn.react",
    "WDSMenuBarItem.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebAddItemModal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef,
      d = "128px",
      m = "131px",
      p = {
        contentContainer: {
          alignSelf: "xkh2ocl",
          paddingBottom: "x12xbjc7",
          paddingInlineEnd: "xvtqlqk",
          paddingInlineStart: "x12w63v0",
          paddingTop: "x16ovd2e",
          $$css: !0,
        },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.catalog,
        a = e.fetchProducts,
        i = e.hasProducts,
        l = e.products,
        d = c(null),
        m = r("useWAWebAddItemModal")(n, a),
        _ = m.menuItems,
        g = m.renderModal,
        h;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            var e;
            (e = d.current) == null || e.open();
          }),
          (t[0] = h))
        : (h = t[0]);
      var y = h,
        C;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function (t) {
            if (t.key === "Enter" || t.key === " ") {
              var e;
              (t.preventDefault(), (e = d.current) == null || e.open());
            }
          }),
          (t[1] = C))
        : (C = t[1]);
      var b = C;
      if (i) {
        var v;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = u.jsx("div", {
              className:
                "xhslqc4 x1nqnulx x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1xvr5cs",
              children: u.jsx(r("WDSIconIcGridOn.react"), {}),
            })),
            (t[2] = v))
          : (v = t[2]);
        var S, R;
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = u.jsx(r("WDSText.react"), {
              type: "Body3",
              colorName: "contentDeemphasized",
              children: s._(/*BTDS*/ "Catalog"),
            })),
            (R = { className: "x78zum5 x1a02dak x1qvou4u x1s70e7g" }),
            (t[3] = S),
            (t[4] = R))
          : ((S = t[3]), (R = t[4]));
        var L;
        t[5] !== l
          ? ((L = l.slice(0, 6).map(f)), (t[5] = l), (t[6] = L))
          : (L = t[6]);
        var E;
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = {
              className:
                "x6s0dn4 x1abdmlv xbrszos xea3l6g x18isctg x2q3nzr x1ypdohk x78zum5 x1vlo0dj xl56j7k x2pejg6",
            }),
            (t[7] = E))
          : (E = t[7]);
        var k;
        t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = o("WAWebBusinessProfileLabels").getAddCatalogButtonLabel()),
            (t[8] = k))
          : (k = t[8]);
        var I;
        t[9] !== _
          ? ((I = u.jsx(
              "div",
              babelHelpers.extends(
                { role: "button", tabIndex: 0, onClick: y, onKeyDown: b },
                E,
                {
                  children: u.jsx(r("WDSMenuBarItem.react"), {
                    buttonVariant: "borderless",
                    buttonSize: "large",
                    icon: o("WAWebPlusIcon.react").PlusIcon,
                    title: k,
                    imperativeRef: d,
                    dropdownMenu: {
                      dirX: o("WAWebDropdown.react").DirX.LEFT,
                      flipOnRTL: !0,
                      menu: _,
                      type: o("WAWebDropdown.react").MenuType.DropdownMenu,
                    },
                  }),
                },
              ),
            )),
            (t[9] = _),
            (t[10] = I))
          : (I = t[10]);
        var T;
        t[11] !== L || t[12] !== I
          ? ((T = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "start",
              gap: 8,
              children: [
                S,
                u.jsxs(
                  "div",
                  babelHelpers.extends({}, R, { children: [L, I] }),
                ),
              ],
            })),
            (t[11] = L),
            (t[12] = I),
            (t[13] = T))
          : (T = t[13]);
        var D;
        t[14] !== l || t[15] !== g
          ? ((D = g([].concat(l))), (t[14] = l), (t[15] = g), (t[16] = D))
          : (D = t[16]);
        var x;
        return (
          t[17] !== T || t[18] !== D
            ? ((x = u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "start",
                gap: 12,
                xstyle: p.contentContainer,
                children: [v, T, D],
              })),
              (t[17] = T),
              (t[18] = D),
              (t[19] = x))
            : (x = t[19]),
          x
        );
      }
      var $;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = u.jsx("div", {
            className:
              "xhslqc4 x1nqnulx x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1xvr5cs",
            children: u.jsx(r("WDSIconIcGridOn.react"), {}),
          })),
          (t[20] = $))
        : ($ = t[20]);
      var P, N;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = o("WAWebBusinessProfileLabels").getAddCatalogButtonLabel()),
          (N = o("WAWebBusinessProfileLabels").getAddCatalogButtonLabel()),
          (t[21] = P),
          (t[22] = N))
        : ((P = t[21]), (N = t[22]));
      var M;
      t[23] !== _
        ? ((M = u.jsx(r("WDSMenuBarItem.react"), {
            buttonVariant: "tonal",
            icon: o("WAWebPlusIcon.react").PlusIcon,
            title: P,
            label: N,
            dropdownMenu: {
              dirX: o("WAWebDropdown.react").DirX.LEFT,
              flipOnRTL: !0,
              menu: _,
              type: o("WAWebDropdown.react").MenuType.DropdownMenu,
            },
          })),
          (t[23] = _),
          (t[24] = M))
        : (M = t[24]);
      var w;
      t[25] !== l || t[26] !== g
        ? ((w = g([].concat(l))), (t[25] = l), (t[26] = g), (t[27] = w))
        : (w = t[27]);
      var A;
      return (
        t[28] !== M || t[29] !== w
          ? ((A = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 12,
              xstyle: p.contentContainer,
              children: [$, M, w],
            })),
            (t[28] = M),
            (t[29] = w),
            (t[30] = A))
          : (A = t[30]),
        A
      );
    }
    function f(e) {
      var t = e.imageCdnUrl,
        n = e.reviewStatus,
        r =
          n === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.NO_REVIEW ||
          n === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.OUTDATED ||
          n === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING;
      return u.jsxs(
        "div",
        {
          className:
            "xnj1f2r x2uibgs xkveyfu x12llq9 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 xdt5ytf x1vlo0dj x1qughib x6ikm8r x10wlt62 x1n2onr6 x2pejg6",
          children: [
            t != null &&
              t !== "" &&
              u.jsx("img", {
                alt: e.name,
                src: t,
                className: "x5yr21d xl1xv1r xh8yej3",
              }),
            r &&
              u.jsx("div", {
                className:
                  "x1280gxy x1c9tyrk xeusxvb x1pahc9y x1ertn4p xhslqc4 x1gzglq8 x1tiyuxx x1uc92m x1nbhmlj x181vq82 x10l6tqk x1ngp85i",
                children: u.jsx(
                  o("WAWebBusinessHoursIcon.react").BusinessHoursIcon,
                  { width: 16, height: 16 },
                ),
              }),
          ],
        },
        e.id.toString(),
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
