__d(
  "WAWebManageCollectionIntegrityBanner.react",
  [
    "fbt",
    "WAWebBizAppealCollectionPopup.react",
    "WAWebClickableLink.react",
    "WAWebModalManager",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCollection",
    "WAWebProductCollectionCollectionsRejectTranslations.react",
    "WAWebThemeContext",
    "WAWebUISpacing",
    "WDSIconIcInfo.react",
    "react",
    "stylex",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        rejectedBannerWithAppeal: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          justifyContent: "xl56j7k",
          height: "xb2rc7v",
          minHeight: "x1ba4aug",
          marginTop: "x1y332i5",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          fontSize: "x13a8xbf",
          lineHeight: "xdod15v",
          color: "x1bvqhpb",
          backgroundColor: "xhe2ndm",
          $$css: !0,
        },
        rejectedBannerDarkBackground: { backgroundColor: "x2fr4xw", $$css: !0 },
      },
      m = 10;
    function p() {
      return (
        r("vulture")("s9AxrI4ENfIpb3a34jFmDNWLhBE="),
        c.jsx("div", {
          className: "x10l6tqk x1kjyjoh x30a034 x1mzt3pk",
          children: c.jsx(r("WDSIconIcInfo.react"), {}),
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n,
        a = t.collection,
        i = t.onAppeal,
        l = t.onRename;
      r("vulture")("15Go9qbXpHy2dA5fkusBEnfkZrw=");
      var u = (
          (n = a.rejectReason) != null ? n : "other_violation"
        ).toLowerCase(),
        m = o(
          "WAWebProductCollectionCollectionsRejectTranslations.react",
        ).getRejectedCollectionCopy(u, a.commerceUrl),
        _ = o("WAWebThemeContext").useIsDarkTheme(),
        f = c.jsx(r("WAWebClickableLink.react"), {
          onClick: l,
          children: s._(/*BTDS*/ "rename the collection"),
        });
      if (a.canAppeal) {
        var g = c.jsx(r("WAWebClickableLink.react"), {
            onClick: i,
            children: s._(/*BTDS*/ "request another review"),
          }),
          h = s._(
            /*BTDS*/ "You can {rename_collection_link} or {request_another_review_link}.",
            [
              s._param("rename_collection_link", f),
              s._param("request_another_review_link", g),
            ],
          );
        return c.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              d.rejectedBannerWithAppeal,
              o("WAWebUISpacing").uiPadding.end40,
              o("WAWebUISpacing").uiPadding.start20,
              o("WAWebUISpacing").uiMargin.bottom10,
              _ && d.rejectedBannerDarkBackground,
            ),
            { children: [m.first, c.jsx("br", {}), h, c.jsx(p, {})] },
          ),
        );
      }
      var y = s._(/*BTDS*/ "You can {rename_collection_link}.", [
        s._param("rename_collection_link", f),
      ]);
      return c.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x78zum5 xdt5ytf xl56j7k xb2rc7v x1ba4aug x1y332i5 x6ikm8r x10wlt62 x13a8xbf xdod15v x1bvqhpb xhe2ndm",
            },
            1: {
              className:
                "x78zum5 xdt5ytf xl56j7k xb2rc7v x1ba4aug x1y332i5 x6ikm8r x10wlt62 x13a8xbf xdod15v x1bvqhpb x2fr4xw",
            },
          }[!!_ << 0],
          { children: [m.second, c.jsx("br", {}), y, c.jsx(p, {})] },
        ),
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return e.reviewStatus ===
        o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED
        ? o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT *
            2 +
            m
        : o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT + m;
    }
    function g(e) {
      var t = e.collection,
        n = e.onEditCollection,
        a = function () {
          n == null || n(t);
        },
        i = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebBizAppealCollectionPopup.react"), { collection: t }),
          );
        };
      switch (t.reviewStatus) {
        case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING:
          return c.jsxs("div", {
            className:
              "x78zum5 x6s0dn4 xjp8j0k x1ba4aug xexx8yu xh7rcd0 x18d9i69 x106a9eq x1y332i5 x6ikm8r x10wlt62 x13a8xbf xdod15v x1bvqhpb x1mzt3pk x1k43qru",
            children: [
              s._(
                /*BTDS*/ "This collection is being reviewed. Once it's approved, your customers will see it in your catalog.",
              ),
              c.jsx("div", {
                className: "x10l6tqk x2ss2xj",
                children: c.jsx(r("WDSIconIcInfo.react"), {}),
              }),
            ],
          });
        case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED:
          return c.jsx(_, { collection: t, onRename: a, onAppeal: i });
        default:
          return null;
      }
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.getCollectionIntegrityHeight = f),
      (l.CollectionIntegrityBanner = g));
  },
  226,
);
