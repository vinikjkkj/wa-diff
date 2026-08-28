__d(
  "AdsWhatsAppNumberUtils",
  ["AdsPageUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["1555", "1711"];
    function s(e, t) {
      var n = e == null ? void 0 : e.whatsapp_numbers_info;
      if (t != null && n != null) {
        var r = n.find(function (e) {
          return e.page_whatsapp_number_id === t;
        });
        return r;
      }
      return null;
    }
    function u(e, t) {
      if (t != null && e != null && e.length > 0) {
        var n = e.find(function (e) {
          return e.page_whatsapp_number_id === t;
        });
        return n == null ? void 0 : n.formatted_whatsapp_number;
      }
      return null;
    }
    function c(e, t) {
      var n = u(e == null ? void 0 : e.whatsapp_numbers_info, t);
      if (n != null) return n;
      var r = o("AdsPageUtils").hasWhatsAppNumber(e);
      return r ? o("AdsPageUtils").getWhatsAppNumberFormatted(e) : null;
    }
    function d(t) {
      if (t == null) return !1;
      var n = t.replace(/\D/g, "");
      return e.some(function (e) {
        return n.startsWith(e);
      });
    }
    function m(e) {
      var t = e.replace(/[^0-9]/, ""),
        n = t.match(
          /15553[0-9]{6}|15554[0-9]{6}|1555600[0-9]{4}|15556010000|15557[0-9]{6}|15558[0-9]{6}|15559[0-9]{6}|1711[0-9]{7}/,
        );
      return n !== null && n[0] === t;
    }
    ((l.getWhatsappInfoForNumber = s),
      (l.getWhatsAppNumberFormatted = c),
      (l.isVirtualNumber = d),
      (l.getIsPhoneNumberInVirtualNumberSpace = m));
  },
  98,
);
