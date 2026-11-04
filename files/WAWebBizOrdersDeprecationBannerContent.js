__d(
  "WAWebBizOrdersDeprecationBannerContent",
  ["fbt", "WAWebL10N"],
  function (t, n, r, o, a, i, l, s) {
    var e = "orders-deprecation",
      u = "orders-deprecation-charges",
      c = "orders-deprecation-payments-home",
      d = 17947008e5,
      m = 1798416e6,
      p = Object.freeze({
        CHARGES: Object.freeze({
          cxtEntrypointId: u,
          getDescription: C,
          getTitle: y,
        }),
        ORDERS: Object.freeze({
          cxtEntrypointId: e,
          getDescription: f,
          getTitle: _,
          isWarning: !0,
        }),
        ORDERS_ENDED: Object.freeze({
          cxtEntrypointId: e,
          getDescription: h,
          getTitle: g,
          isWarning: !0,
        }),
        PAYMENTS_HOME: Object.freeze({ cxtEntrypointId: c, getDescription: b }),
      });
    function _() {
      return s._(/*BTDS*/ "Orders tool is going away");
    }
    function f() {
      return s._(
        /*BTDS*/ "Orders will not be available starting {end_date}. Customers will still be able to send orders via chat.",
        [s._param("end_date", R())],
      );
    }
    function g() {
      return s._(/*BTDS*/ "Orders tool is gone");
    }
    function h() {
      return s._(
        /*BTDS*/ "Complete accepted orders by {end_date}. You can't accept new orders but you can still manage them in chat.",
        [s._param("end_date", L(m))],
      );
    }
    function y() {
      return s._(/*BTDS*/ "Charges function is going away");
    }
    function C() {
      return s._(
        /*BTDS*/ "Charges will not be available starting {end_date}. Customers will still be able to send charges via chat.",
        [s._param("end_date", R())],
      );
    }
    function b() {
      return s._(
        /*BTDS*/ "Charges function will not be available starting {end_date}. Customers will still be able to send charges via chat.",
        [s._param("end_date", R())],
      );
    }
    function v() {
      return s._(/*BTDS*/ "Charges function is gone");
    }
    function S(e) {
      return s._(
        /*BTDS*/ "Complete accepted charges by {complete_by_date}. You can't accept new charges but you can still manage them in chat.",
        [s._param("complete_by_date", e)],
      );
    }
    function R() {
      return L(d);
    }
    function L(e) {
      return new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        day: "numeric",
        month: "short",
        timeZone: "UTC",
      }).format(new Date(e));
    }
    ((l.OrdersDeprecationBannerContents = p),
      (l.getChargesEndedTitle = v),
      (l.getChargesEndedDescription = S));
  },
  226,
);
