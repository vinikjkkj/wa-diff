__d(
  "WAWebBizCartBridge",
  [
    "Promise",
    "WAWebBackendErrors",
    "WAWebBizGatingUtils",
    "WAWebBizLogQplEvents",
    "WAWebBizRefreshCartJob",
    "WAWebBusinessDirectConnectionBridge",
    "WAWebQplFlowWrapper",
    "WAWebSchemaCart",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, r, a, i, l) {
      if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
        return (e || (e = n("Promise"))).reject(
          new (o("WAWebBackendErrors").E451)(),
        );
      l === !0 &&
        o("WAWebBizLogQplEvents").qplPointCartView("datasource_start");
      var s = o(
        "WAWebBusinessDirectConnectionBridge",
      ).attemptWithDirectConnectionRetry(t, function (e) {
        return o("WAWebBizRefreshCartJob").refreshCart(t, r, a, i, e);
      });
      return s.then(function (e) {
        return (
          l === !0 &&
            o("WAWebBizLogQplEvents").qplPointCartView("datasource_end"),
          e
        );
      });
    }
    function u(t, r) {
      if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
        return (e || (e = n("Promise"))).reject(
          new (o("WAWebBackendErrors").E451)(),
        );
      var a = (e || (e = n("Promise"))).resolve();
      if (
        (r && o("WAWebQplFlowWrapper").QPL.markerPoint(r, "datasource_start"),
        t.itemCount > 0 || (t.message != null && t.message.length > 0))
      ) {
        var i = c(t);
        a = o("WAWebSchemaCart").getCartTable().createOrReplace(i);
      } else a = o("WAWebSchemaCart").getCartTable().remove(t.id.toString());
      return (
        a
          .then(function () {
            return (
              r && o("WAWebQplFlowWrapper").QPL.markerPoint(r, "datasource_end")
            );
          })
          .catch(function (e) {
            if (e.errorCode === 451) throw new (o("WAWebBackendErrors").E451)();
          }),
        a
      );
    }
    function c(e) {
      var t = e.cartItemCollection.map(function (e) {
          return {
            id: e.id,
            priceAmount1000: e.priceAmount1000,
            currency: e.currency,
            name: e.name,
            quantity: e.quantity,
            imageHash: e.imageHash,
            variantProperties: e.variantProperties,
          };
        }),
        n = {
          id: e.id.toString(),
          message: e.message,
          total: e.total,
          currency: e.currency,
          itemCount: e.itemCount,
          products: t,
        };
      return n;
    }
    ((l.refreshCart = s), (l.updateCart = u), (l.cartToCartRowType = c));
  },
  98,
);
