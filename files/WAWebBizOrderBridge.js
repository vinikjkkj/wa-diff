__d(
  "WAWebBizOrderBridge",
  [
    "Promise",
    "WAWebBackendErrors",
    "WAWebBizCreateOrderJob",
    "WAWebBizGatingUtils",
    "WAWebBizLogQplEvents",
    "WAWebBizQueryOrderJob",
    "WAWebBusinessDirectConnectionBridge",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, r, a, i, l) {
      if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
        return (e || (e = n("Promise"))).reject(
          new (o("WAWebBackendErrors").E451)(),
        );
      o("WAWebBizLogQplEvents").qplPointOrderView("datasource_start");
      var s = o(
        "WAWebBusinessDirectConnectionBridge",
      ).attemptWithDirectConnectionRetry(t, function (e) {
        return o("WAWebBizQueryOrderJob").queryOrder(r, a, i, l, e);
      });
      return s.then(function (e) {
        return (
          o("WAWebBizLogQplEvents").qplPointOrderView("datasource_end"),
          e
        );
      });
    }
    function u(t, r) {
      if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
        return (e || (e = n("Promise"))).reject(
          new (o("WAWebBackendErrors").E451)(),
        );
      o("WAWebBizLogQplEvents").qplPointOrderCreate("datasource_start");
      var a = o(
        "WAWebBusinessDirectConnectionBridge",
      ).attemptWithOrderDirectConnectionRetry(t, function (e) {
        return o("WAWebBizCreateOrderJob").createOrderMD(t, r, e);
      });
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
