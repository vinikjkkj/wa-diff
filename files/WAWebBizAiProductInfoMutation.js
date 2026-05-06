__d(
  "WAWebBizAiProductInfoMutation",
  [
    "WAWebBizAiProductInfoMutation.graphql",
    "WAWebBizAiProductInfoMutationDeleteMutation.graphql",
    "WAWebBizAiProductInfoMutationUpdateMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = e !== void 0 ? e : (e = n("WAWebBizAiProductInfoMutation.graphql")),
      d =
        s !== void 0
          ? s
          : (s = n("WAWebBizAiProductInfoMutationUpdateMutation.graphql")),
      m =
        u !== void 0
          ? u
          : (u = n("WAWebBizAiProductInfoMutationDeleteMutation.graphql")),
      p = { isSuccess: !0 },
      _ = { isSuccess: !1 };
    function f(e) {
      var t,
        n,
        r = {
          name: e.name,
          complex_price: (t = e.price) != null ? t : null,
          description: (n = e.description) != null ? n : null,
        };
      return (
        e.manifoldImageFilePaths != null &&
          e.manifoldImageFilePaths.length > 0 &&
          (r.manifold_image_file_paths = e.manifoldImageFilePaths),
        e.existingImages != null && (r.images = e.existingImages),
        r
      );
    }
    function g(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      c,
                      { input: f(e) },
                      { environmentType: "facebook", accessToken: t.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_maiba_create_product_info_knowledge;
                      return (t == null ? void 0 : t.success) === !0 ? p : _;
                    })
                    .catch(function (e) {
                      return _;
                    });
                })
            : _;
        });
    }
    function h(e, t) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (n) {
          return n.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      d,
                      { id: e, product_params: f(t) },
                      { environmentType: "facebook", accessToken: n.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_maiba_update_product_info_knowledge;
                      return (t == null ? void 0 : t.success) === !0 ? p : _;
                    })
                    .catch(function (e) {
                      return _;
                    });
                })
            : _;
        });
    }
    function y(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      m,
                      { product_ids: [].concat(e) },
                      { environmentType: "facebook", accessToken: t.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_maiba_multi_delete_product_info_knowledge;
                      return t != null &&
                        t.every(function (e) {
                          return (e == null ? void 0 : e.success) === !0;
                        })
                        ? p
                        : _;
                    })
                    .catch(function (e) {
                      return _;
                    });
                })
            : _;
        });
    }
    ((l.createProductInfo = g),
      (l.updateProductInfo = h),
      (l.deleteProductInfo = y));
  },
  98,
);
