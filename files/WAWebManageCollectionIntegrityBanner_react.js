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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(1);
      r("vulture")("s9AxrI4ENfIpb3a34jFmDNWLhBE=");
      var t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx("div", {
              className: "x10l6tqk x1kjyjoh x30a034 x1mzt3pk",
              children: c.jsx(r("WDSIconIcInfo.react"), {}),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function _(t) {
      var n,
        a = o("react-compiler-runtime").c(30),
        i = t.collection,
        l = t.onAppeal,
        u = t.onRename;
      r("vulture")("15Go9qbXpHy2dA5fkusBEnfkZrw=");
      var m = (n = i.rejectReason) != null ? n : "other_violation",
        _;
      if (a[0] !== i.commerceUrl || a[1] !== m) {
        var f = m.toLowerCase();
        ((_ = o(
          "WAWebProductCollectionCollectionsRejectTranslations.react",
        ).getRejectedCollectionCopy(f, i.commerceUrl)),
          (a[0] = i.commerceUrl),
          (a[1] = m),
          (a[2] = _));
      } else _ = a[2];
      var g = _,
        h = o("WAWebThemeContext").useIsDarkTheme(),
        y;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "rename the collection")), (a[3] = y))
        : (y = a[3]);
      var C;
      a[4] !== u
        ? ((C = c.jsx(r("WAWebClickableLink.react"), {
            onClick: u,
            children: y,
          })),
          (a[4] = u),
          (a[5] = C))
        : (C = a[5]);
      var b = C;
      if (i.canAppeal) {
        var v;
        a[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = s._(/*BTDS*/ "request another review")), (a[6] = v))
          : (v = a[6]);
        var S;
        a[7] !== l
          ? ((S = c.jsx(r("WAWebClickableLink.react"), {
              onClick: l,
              children: v,
            })),
            (a[7] = l),
            (a[8] = S))
          : (S = a[8]);
        var R = S,
          L;
        a[9] !== R || a[10] !== b
          ? ((L = s._(
              /*BTDS*/ "You can {rename_collection_link} or {request_another_review_link}.",
              [
                s._param("rename_collection_link", b),
                s._param("request_another_review_link", R),
              ],
            )),
            (a[9] = R),
            (a[10] = b),
            (a[11] = L))
          : (L = a[11]);
        var E = L,
          k;
        a[12] !== h
          ? ((k = (e || (e = r("stylex"))).props(
              d.rejectedBannerWithAppeal,
              o("WAWebUISpacing").uiPadding.end40,
              o("WAWebUISpacing").uiPadding.start20,
              o("WAWebUISpacing").uiMargin.bottom10,
              h && d.rejectedBannerDarkBackground,
            )),
            (a[12] = h),
            (a[13] = k))
          : (k = a[13]);
        var I;
        a[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = c.jsx("br", {})), (a[14] = I))
          : (I = a[14]);
        var T;
        a[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = c.jsx(p, {})), (a[15] = T))
          : (T = a[15]);
        var D;
        return (
          a[16] !== E || a[17] !== g.first || a[18] !== k
            ? ((D = c.jsxs(
                "div",
                babelHelpers.extends({}, k, { children: [g.first, I, E, T] }),
              )),
              (a[16] = E),
              (a[17] = g.first),
              (a[18] = k),
              (a[19] = D))
            : (D = a[19]),
          D
        );
      }
      var x;
      a[20] !== b
        ? ((x = s._(/*BTDS*/ "You can {rename_collection_link}.", [
            s._param("rename_collection_link", b),
          ])),
          (a[20] = b),
          (a[21] = x))
        : (x = a[21]);
      var $ = x,
        P;
      a[22] !== h
        ? ((P = {
            0: {
              className:
                "x78zum5 xdt5ytf xl56j7k xb2rc7v x1ba4aug x1y332i5 x6ikm8r x10wlt62 x13a8xbf xdod15v x1bvqhpb xhe2ndm",
            },
            1: {
              className:
                "x78zum5 xdt5ytf xl56j7k xb2rc7v x1ba4aug x1y332i5 x6ikm8r x10wlt62 x13a8xbf xdod15v x1bvqhpb x2fr4xw",
            },
          }[!!h << 0]),
          (a[22] = h),
          (a[23] = P))
        : (P = a[23]);
      var N;
      a[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = c.jsx("br", {})), (a[24] = N))
        : (N = a[24]);
      var M;
      a[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx(p, {})), (a[25] = M))
        : (M = a[25]);
      var w;
      return (
        a[26] !== g.second || a[27] !== $ || a[28] !== P
          ? ((w = c.jsxs(
              "div",
              babelHelpers.extends({}, P, { children: [g.second, N, $, M] }),
            )),
            (a[26] = g.second),
            (a[27] = $),
            (a[28] = P),
            (a[29] = w))
          : (w = a[29]),
        w
      );
    }
    function f(e) {
      return e.reviewStatus ===
        o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED
        ? o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT *
            2 +
            m
        : o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT + m;
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.collection,
        a = e.onEditCollection,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = function () {
            a == null || a(n);
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        u;
      t[3] !== n
        ? ((u = function () {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebBizAppealCollectionPopup.react"), {
                collection: n,
              }),
            );
          }),
          (t[3] = n),
          (t[4] = u))
        : (u = t[4]);
      var d = u;
      switch (n.reviewStatus) {
        case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING: {
          var m;
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = c.jsxs("div", {
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
                })),
                (t[5] = m))
              : (m = t[5]),
            m
          );
        }
        case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED: {
          var p;
          return (
            t[6] !== n || t[7] !== d || t[8] !== l
              ? ((p = c.jsx(_, { collection: n, onRename: l, onAppeal: d })),
                (t[6] = n),
                (t[7] = d),
                (t[8] = l),
                (t[9] = p))
              : (p = t[9]),
            p
          );
        }
        default:
          return null;
      }
    }
    ((l.getCollectionIntegrityHeight = f), (l.CollectionIntegrityBanner = g));
  },
  226,
);
