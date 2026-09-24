__d(
  "WAWebBizOrderBridge",
  [
    "Promise",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCreateOrderJob",
    "WAWebBizLogQplEvents",
    "WAWebBizQueryOrderJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var r = t.height,
        a = t.orderId,
        i = t.token,
        l = t.width;
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        return (e || (e = n("Promise"))).reject(
          new (o("WAWebBackendErrors").E451)(),
        );
      o("WAWebBizLogQplEvents").qplPointOrderView("datasource_start");
      var s = o("WAWebBizQueryOrderJob").queryOrder({
        directConnectionEncryptedInfo: void 0,
        height: r,
        orderId: a,
        token: i,
        width: l,
      });
      return s.then(function (e) {
        return (
          o("WAWebBizLogQplEvents").qplPointOrderView("datasource_end"),
          e
        );
      });
    }
    function u(t, r) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        return (e || (e = n("Promise"))).reject(
          new (o("WAWebBackendErrors").E451)(),
        );
      o("WAWebBizLogQplEvents").qplPointOrderCreate("datasource_start");
      var a = o("WAWebBizCreateOrderJob").createOrderMD(t, r, void 0);
      return a.then(function (e) {
        return (
          o("WAWebBizLogQplEvents").qplPointOrderCreate("datasource_end"),
          e
        );
      });
    }
    ((l.queryOrder = s), (l.createOrder = u));
  },
  98,
);
