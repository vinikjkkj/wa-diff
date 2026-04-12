__d(
  "useWAWebOrderPaymentStatus",
  ["WAWebInteractiveMessagesNativeFlowName", "WAWebOrderStatus", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t) {
      var n = c(function () {
          return e == null || t == null
            ? null
            : o("WAWebOrderStatus").findOrderPaymentStatus(e, t);
        }),
        a = n[0],
        i = n[1];
      return (
        u(
          function () {
            if (!(e == null || t == null)) {
              var n = function () {
                  var n = o("WAWebOrderStatus").findOrderPaymentStatus(e, t);
                  i(n);
                },
                a = function (a) {
                  if (
                    a.nativeFlowName ===
                    r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
                  ) {
                    var e = o("WAWebOrderStatus").getOrderStatusInfo(a);
                    (e == null ? void 0 : e.refId) === t && n();
                  }
                },
                l = e.msgs;
              return (
                l.on("add", a),
                l.on("change", n),
                l.on("remove", n),
                n(),
                function () {
                  (l.off("add", a), l.off("change", n), l.off("remove", n));
                }
              );
            }
          },
          [e, t],
        ),
        a
      );
    }
    l.useOrderPaymentStatus = d;
  },
  98,
);
