__d(
  "WAWebProductCatalogCatalogDrawerSection.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebChevronIcon.react",
    "WAWebDrawerContext",
    "WAWebDrawerSection.react",
    "WAWebFbshopsIcon.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebMediaGalleryView.react",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductThumb.react",
    "WAWebProductCollection",
    "WAWebStateUtils",
    "WAWebUnstyledButton.react",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useEffect,
      p = 3,
      _ = {
        addIcon: {
          position: "x1n2onr6",
          width: "xa1il55",
          height: "xqtp20y",
          paddingBottom: "x85gtzv",
          marginTop: "xdj266r",
          marginInlineEnd: "xqf2s3x",
          marginBottom: "xefnzgg",
          marginInlineStart: "x1lziwak",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1vynwtf",
          borderInlineEndColor: "xxmg6um",
          borderBottomColor: "x1j5b3ru",
          borderInlineStartColor: "x1mov0ff",
          borderStartStartRadius: "xrxyp3c",
          borderStartEndRadius: "xv0oops",
          borderEndEndRadius: "x1isl5vh",
          borderEndStartRadius: "xn8zj9a",
          "::before_position": "x1hmns74",
          "::before_top": "x1knuo7r",
          "::before_left": "xgdch9p",
          "::before_insetInlineStart": null,
          "::before_insetInlineEnd": null,
          "::before_display": "x1fgarty",
          "::before_width": "x1j6c3ea",
          "::before_height": "xv7f310",
          "::before_content": "x1cpjm7i",
          "::before_background": "x1qncxzq",
          "::before_transform": "xbnewub",
          "::after_position": "x1j6awrg",
          "::after_top": "xoqv437",
          "::after_left": "x16v8oms",
          "::after_insetInlineStart": null,
          "::after_insetInlineEnd": null,
          "::after_display": "xhkezso",
          "::after_width": "xqysinb",
          "::after_height": "x6giem4",
          "::after_content": "x1s928wv",
          "::after_background": "x1hcy2ng",
          "::after_transform": "x128ww4c",
          $$css: !0,
        },
        largeGallerySpacing: {
          width: "x1anfit2",
          height: "xqtp20y",
          marginInlineEnd: "x14z9mp",
          marginBottom: "x14owe82",
          $$css: !0,
        },
        placeholderThumb: {
          width: "xa1il55",
          height: "xdox8uz",
          paddingBottom: "x1ghzhde",
          marginTop: "xdj266r",
          marginInlineEnd: "xqf2s3x",
          marginBottom: "xefnzgg",
          marginInlineStart: "x1lziwak",
          backgroundColor: "xhub2e1",
          borderStartStartRadius: "xrxyp3c",
          borderStartEndRadius: "xv0oops",
          borderEndEndRadius: "x1isl5vh",
          borderEndStartRadius: "xn8zj9a",
          $$css: !0,
        },
        subtitle: {
          marginTop: "xdj266r",
          marginInlineEnd: "xf6vk7d",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          fontSize: "x1f6kntn",
          color: "x1anpt5t",
          $$css: !0,
        },
        chevron: { color: "xhslqc4", $$css: !0 },
      };
    function f(e) {
      var t = e.catalogEntryLabel,
        n = e.onClick;
      return t == null
        ? null
        : u.jsx("div", {
            className: "x1k70j0n x14z9mp xat24cr x1lziwak x2b8uid",
            children: u.jsx(o("WAWebButton.react").Button, {
              testid: void 0,
              type: "secondary",
              onClick: n,
              children: t,
            }),
          });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return (
        r("vulture")("6o3eqfKJBJ6dUqeW3Ia2sjaYDA4="),
        u.jsx("div", {
          className: "xav9cv8 x2b8uid",
          children: u.jsx(o("WAWebFbshopsIcon.react").FbshopsIcon, {
            displayInline: !0,
          }),
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.catalog,
        n = e.filterProductId,
        a = e.hideIncompleteRows,
        i = e.onProductImageClick,
        l = e.onProductThumbClick,
        c = e.productsToShow,
        d = e.seeMoreOverlay,
        m = e.showProductPlaceholders,
        f,
        g,
        h = c;
      if (t != null) {
        g = t.productCollection;
        var y = t.productCollection.getProductModels();
        (a && y.length > p && (h = Math.min(c, y.length - (y.length % p))),
          (f = y
            .slice(0, h + 1)
            .filter(function (e) {
              var t = e.id.toString();
              return t !== n;
            })
            .map(function (e, n) {
              var r,
                a = (r = e.getPreviewImage()) == null ? void 0 : r.mediaData;
              if (!a) return u.jsx(u.Fragment, {});
              var i;
              d === !0 &&
                n === h - 1 &&
                t.productCollection.length > h - 1 &&
                (i = s._(/*BTDS*/ "See more"));
              var c = u.jsx(
                o("WAWebProductCatalogProductThumb.react").ProductThumb,
                {
                  onClick: function () {
                    return l(i != null, e);
                  },
                  mediaData: a,
                  overlayContent: i,
                  theme: "largeGallerySpacing",
                },
                e.id.toString(),
              );
              return c;
            })
            .slice(0, h)));
      } else
        ((g = new (o("WAWebProductCollection").ProductCollection)()),
          g.add({ id: "_ph" }));
      if ((f == null || f.length === 0) && m !== !0) return null;
      var C = _.addIcon,
        b = [];
      if (m === !0)
        for (
          var v = (S = (R = f) == null ? void 0 : R.length) != null ? S : 0;
          v < h;
          v++
        ) {
          var S, R;
          (b.push(
            u.jsx(
              r("WAWebUnstyledButton.react"),
              {
                onClick: i,
                title: s._(/*BTDS*/ "Add product"),
                xstyle: [C, _.largeGallerySpacing],
                children: u.jsx(u.Fragment, {}),
              },
              "_ph" + v,
            ),
          ),
            (C = _.placeholderThumb));
        }
      var L = f != null ? [].concat(f, b) : b;
      return u.jsx(o("WAWebMediaGalleryView.react").MediaGalleryView, {
        productMedias: L,
        mediaCollection: g,
        justify: "space-between",
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.animation,
        n = e.catalog,
        a = e.catalogEntryLabel,
        i = e.filterProductId,
        l = e.hideIncompleteRows,
        c = l === void 0 ? !1 : l,
        p = e.onProductCatalog,
        y = e.onProductDetail,
        C = e.productsToShow,
        b = C === void 0 ? 6 : C,
        v = e.sectionTheme,
        S = v === void 0 ? "padding" : v,
        R = e.seeMoreOverlay,
        L = e.shouldLog,
        E = e.showProductPlaceholders,
        k = e.showShopsLogo,
        I = e.subtitle,
        T = e.title,
        D = d(o("WAWebDrawerContext").DrawerContext);
      m(function () {
        L === !0 &&
          n != null &&
          o("WAWebProductCatalogLogEvents").logBusinessProfileCatalogView({
            catalogOwnerWid: n.id,
            catalogContext: o(
              "WAWebProductCatalogContext",
            ).getProductCatalogContext(D),
          });
      }, []);
      var x = u.jsx(f, {
          catalogEntryLabel: a,
          onClick: function () {
            return p(
              o("WAWebProductCatalogContext").getProductCatalogContext(D),
              "ContactInfo",
            );
          },
        }),
        $ = function (t) {
          (L === !0 &&
            o("WAWebProductCatalogLogEvents").logProfileProductClick({
              product: o("WAWebStateUtils").unproxy(t),
              catalogContext: o(
                "WAWebProductCatalogContext",
              ).getProductCatalogContext(D),
            }),
            y(t));
        },
        P = u.jsx(h, {
          productsToShow: b,
          catalog: n,
          hideIncompleteRows: c,
          filterProductId: i,
          seeMoreOverlay: R,
          showProductPlaceholders: E,
          onProductThumbClick: function (t, n) {
            return t
              ? p(
                  o("WAWebProductCatalogContext").getProductCatalogContext(D),
                  "ContactInfo",
                )
              : $(n);
          },
          onProductImageClick: function () {
            return p(
              o("WAWebProductCatalogContext").getProductCatalogContext(D),
              "ContactInfo",
            );
          },
        }),
        N =
          I != null && I !== ""
            ? u.jsx(r("WAWebFlexItem.react"), {
                xstyle: _.subtitle,
                children: I,
              })
            : null,
        M = u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          "aria-label": "catalog-button",
          children: [
            N,
            u.jsx(r("WAWebFlexItem.react"), {
              children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                xstyle: _.chevron,
                directional: !0,
                height: 21,
              }),
            }),
          ],
        });
      return u.jsxs(r("WAWebDrawerSection.react"), {
        title: T != null && T !== "" ? T : s._(/*BTDS*/ "Products"),
        titleOnClick: function () {
          return p(
            o("WAWebProductCatalogContext").getProductCatalogContext(D),
            "ContactInfo",
          );
        },
        subtitle: M,
        theme: S,
        animation: t,
        children: [P, x, k === !0 ? u.jsx(g, {}) : null],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
