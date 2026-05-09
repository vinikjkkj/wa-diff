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
      c = "76",
      d = { thumbnail_height: c, thumbnail_width: c },
      m = e !== void 0 ? e : (e = n("WAWebBizAiProductInfoMutation.graphql")),
      p =
        s !== void 0
          ? s
          : (s = n("WAWebBizAiProductInfoMutationUpdateMutation.graphql")),
      _ =
        u !== void 0
          ? u
          : (u = n("WAWebBizAiProductInfoMutationDeleteMutation.graphql")),
      f = { isSuccess: !0 },
      g = { isSuccess: !1 };
    function h(e) {
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
                      { input: h(e), media_options: d },
                      { environmentType: "facebook", accessToken: t.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_maiba_create_product_info_knowledge;
                      return (t == null ? void 0 : t.success) === !0 ? f : g;
                    })
                    .catch(function (e) {
                      return g;
                    });
                })
            : g;
        });
    }
    function C(e, t) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (n) {
          return n.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      p,
                      { id: e, media_options: d, product_params: h(t) },
                      { environmentType: "facebook", accessToken: n.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_maiba_update_product_info_knowledge;
                      return (t == null ? void 0 : t.success) === !0 ? f : g;
                    })
                    .catch(function (e) {
                      return g;
                    });
                })
            : g;
        });
    }
    function b(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      _,
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
                        ? f
                        : g;
                    })
                    .catch(function (e) {
                      return g;
                    });
                })
            : g;
        });
    }
    ((l.createProductInfo = y),
      (l.updateProductInfo = C),
      (l.deleteProductInfo = b));
  },
  98,
);
