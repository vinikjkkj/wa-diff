__d(
  "WAWebBizAiProductInfoMutation",
  [
    "WAWebBizAiProductInfoMutation.graphql",
    "WAWebBizAiProductInfoMutationDeleteMutation.graphql",
    "WAWebBizAiProductInfoMutationUpdateMutation.graphql",
    "WAWebBizAiRelayClient",
    "WAWebNetworkStatus",
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
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebBizAiRelayClient")
            .commitMutation(m, { input: h(e), media_options: d })
            .then(function (e) {
              var t =
                e == null ? void 0 : e.xfb_maiba_create_product_info_knowledge;
              return (t == null ? void 0 : t.success) === !0 ? f : g;
            })
            .catch(function (e) {
              return g;
            });
        });
    }
    function C(e, t) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebBizAiRelayClient")
            .commitMutation(p, {
              id: e,
              media_options: d,
              product_params: h(t),
            })
            .then(function (e) {
              var t =
                e == null ? void 0 : e.xfb_maiba_update_product_info_knowledge;
              return (t == null ? void 0 : t.success) === !0 ? f : g;
            })
            .catch(function (e) {
              return g;
            });
        });
    }
    function b(e) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebBizAiRelayClient")
            .commitMutation(_, { product_ids: [].concat(e) })
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
        });
    }
    ((l.createProductInfo = y),
      (l.updateProductInfo = C),
      (l.deleteProductInfo = b));
  },
  98,
);
