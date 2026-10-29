__d(
  "WAWebBizOrdersDeprecationBannerContent",
  ["fbt", "WAWebL10N"],
  function (t, n, r, o, a, i, l, s) {
    var e = "orders-deprecation",
      u = "orders-deprecation-charges",
      c = "orders-deprecation-payments-home",
      d = 17947008e5,
      m = Object.freeze({
        CHARGES: Object.freeze({
          cxtEntrypointId: u,
          getDescription: g,
          getTitle: f,
        }),
        ORDERS: Object.freeze({
          cxtEntrypointId: e,
          getDescription: _,
          getTitle: p,
        }),
        PAYMENTS_HOME: Object.freeze({ cxtEntrypointId: c, getDescription: h }),
      });
    function p() {
      return s._(/*BTDS*/ "Removing orders tool");
    }
    function _() {
      return s._(
        /*BTDS*/ "This will not be available after {end_date}. Customers are still able to send orders in chat after that date.",
        [s._param("end_date", y())],
      );
    }
    function f() {
      return s._(/*BTDS*/ "Removing charges function");
    }
    function g() {
      return s._(
        /*BTDS*/ "This will not be available after {end_date}. Customers are still able to send charges in chat after that date.",
        [s._param("end_date", y())],
      );
    }
    function h() {
      return s._(
        /*BTDS*/ "Charges function will not be available after {end_date}. Customers are still able to send charges in chat after that date.",
        [s._param("end_date", y())],
      );
    }
    function y() {
      return new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        day: "numeric",
        month: "short",
        timeZone: "UTC",
      }).format(new Date(d));
    }
    l.OrdersDeprecationBannerContents = m;
  },
  226,
);
