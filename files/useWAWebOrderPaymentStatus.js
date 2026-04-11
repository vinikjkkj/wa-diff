__d(
  "useWAWebOrderPaymentStatus",
  [
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebOrderStatus",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(7),
        a;
      n[0] !== e || n[1] !== t
        ? ((a = function () {
            return e == null || t == null
              ? null
              : o("WAWebOrderStatus").findOrderPaymentStatus(e, t);
          }),
          (n[0] = e),
          (n[1] = t),
          (n[2] = a))
        : (a = n[2]);
      var i = c(a),
        l = i[0],
        s = i[1],
        d,
        m;
      return (
        n[3] !== e || n[4] !== t
          ? ((d = function () {
              if (!(e == null || t == null)) {
                var n = function () {
                    var n = o("WAWebOrderStatus").findOrderPaymentStatus(e, t);
                    s(n);
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
                  i = e.msgs;
                return (
                  i.on("add", a),
                  i.on("change", n),
                  i.on("remove", n),
                  n(),
                  function () {
                    (i.off("add", a), i.off("change", n), i.off("remove", n));
                  }
                );
              }
            }),
            (m = [e, t]),
            (n[3] = e),
            (n[4] = t),
            (n[5] = d),
            (n[6] = m))
          : ((d = n[5]), (m = n[6])),
        u(d, m),
        l
      );
    }
    l.useOrderPaymentStatus = d;
  },
  98,
);
