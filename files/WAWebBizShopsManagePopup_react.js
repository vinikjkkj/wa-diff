__d(
  "WAWebBizShopsManagePopup.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebButton.react",
    "WAWebCancelablePopup.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      return o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        e,
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(30),
        n = e.onCancelClick,
        a = e.onCommerceManagerClick,
        i = e.onViewShopClick;
      r("vulture")("OFaDWXCjoho5MT3nd4myfm3HMW4=");
      var l;
      t[0] !== i
        ? ((l = function () {
            var e = c();
            (o("WAWebBusinessProfileUtils").goToShop(e), i && i());
          }),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var d = l,
        m;
      t[2] !== a
        ? ((m = function () {
            var e = c();
            (o("WAWebBusinessProfileUtils").goToCommerceManager(e), a && a());
          }),
          (t[2] = a),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      t[4] !== n
        ? ((_ = function () {
            (o("WAWebModalManager").ModalManager.close(), n && n());
          }),
          (t[4] = n),
          (t[5] = _))
        : (_ = t[5]);
      var f = _;
      if (o("WAWebBizGatingUtils").bannedShopsEnabled()) {
        var g = c();
        if (o("WAWebBusinessProfileUtils").isShopBanned(g)) {
          var h;
          t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = { surface: "unknown", viewName: "biz-shops-manage" }),
              (t[6] = h))
            : (h = t[6]);
          var y;
          t[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = s._(/*BTDS*/ "Shop disabled")), (t[7] = y))
            : (y = t[7]);
          var C;
          t[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = s._(/*BTDS*/ "Commerce Manager")), (t[8] = C))
            : (C = t[8]);
          var b;
          t[9] !== p
            ? ((b = u.jsx(o("WAWebButton.react").Button, {
                type: "primary",
                onClick: p,
                children: C,
              })),
              (t[9] = p),
              (t[10] = b))
            : (b = t[10]);
          var v;
          t[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = s._(
                /*BTDS*/ "This shop has been disabled for not complying with our policies. Learn more in Commerce Manager.",
              )),
              (t[11] = v))
            : (v = t[11]);
          var S;
          return (
            t[12] !== f || t[13] !== b
              ? ((S = u.jsx(r("WAWebCancelablePopup.react"), {
                  tsNavigationData: h,
                  type: o("WAWebModal.react").ModalTheme.ColumnButtons,
                  title: y,
                  onCancel: f,
                  actions: b,
                  children: v,
                })),
                (t[12] = f),
                (t[13] = b),
                (t[14] = S))
              : (S = t[14]),
            S
          );
        }
      }
      var R;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = { surface: "unknown", viewName: "biz-shops-manage" }),
          (t[15] = R))
        : (R = t[15]);
      var L;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Manage shop on Commerce Manager")), (t[16] = L))
        : (L = t[16]);
      var E;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "View shop")), (t[17] = E))
        : (E = t[17]);
      var k;
      t[18] !== d
        ? ((k = u.jsx(o("WAWebButton.react").Button, {
            type: "primary",
            onClick: d,
            children: E,
          })),
          (t[18] = d),
          (t[19] = k))
        : (k = t[19]);
      var I;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Commerce Manager")), (t[20] = I))
        : (I = t[20]);
      var T;
      t[21] !== p
        ? ((T = u.jsx(o("WAWebButton.react").Button, {
            type: "primary",
            onClick: p,
            children: I,
          })),
          (t[21] = p),
          (t[22] = T))
        : (T = t[22]);
      var D;
      t[23] !== k || t[24] !== T
        ? ((D = u.jsxs(u.Fragment, { children: [k, T] })),
          (t[23] = k),
          (t[24] = T),
          (t[25] = D))
        : (D = t[25]);
      var x;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "Go to Commerce Manager to update your shop.")),
          (t[26] = x))
        : (x = t[26]);
      var $;
      return (
        t[27] !== f || t[28] !== D
          ? (($ = u.jsx(r("WAWebCancelablePopup.react"), {
              tsNavigationData: R,
              type: o("WAWebModal.react").ModalTheme.ColumnButtons,
              title: L,
              onCancel: f,
              actions: D,
              children: x,
            })),
            (t[27] = f),
            (t[28] = D),
            (t[29] = $))
          : ($ = t[29]),
        $
      );
    }
    l.default = d;
  },
  226,
);
