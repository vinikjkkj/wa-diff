__d(
  "MAIBASystemPostbackEvent",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "open_customer_list_modal",
      l = "[System: whatsapp-marketing-campaign-customer-list-selected]",
      s = "maiba-system-postback";
    function u(e, t) {
      return l + " " + JSON.stringify({ audience_id: e, name: t });
    }
    var c = new Set(),
      d = new Set(),
      m = [];
    function p(e) {
      if (
        (d.forEach(function (t) {
          return t(e);
        }),
        c.size === 0)
      ) {
        m.push(e);
        return;
      }
      c.forEach(function (t) {
        return t(e);
      });
    }
    function _(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function f(e) {
      c.add(e);
      var t = m;
      return (
        (m = []),
        t.forEach(function (t) {
          return e(t);
        }),
        function () {
          c.delete(e);
        }
      );
    }
    ((i.MAIBA_CUSTOMER_LIST_CTA_OPEN_ACTION = e),
      (i.MAIBA_MARKETING_CUSTOMER_LIST_SELECTED_MESSAGE_PREFIX = l),
      (i.MAIBA_SYSTEM_POSTBACK_EVENT_NAME = s),
      (i.buildMAIBAMarketingCustomerListSelectedPostback = u),
      (i.publishMAIBASystemPostback = p),
      (i.observeMAIBASystemPostbacks = _),
      (i.subscribeMAIBASystemPostbacks = f));
  },
  66,
);
