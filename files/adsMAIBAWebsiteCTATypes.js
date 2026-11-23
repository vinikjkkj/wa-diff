__d(
  "adsMAIBAWebsiteCTATypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "APPLY_NOW",
      "BOOK_NOW",
      "BOOK_TRAVEL",
      "BUY_NOW",
      "CONTACT_US",
      "DONATE_NOW",
      "DOWNLOAD",
      "GET_QUOTE",
      "LEARN_MORE",
      "REQUEST_TIME",
      "SAVE",
      "SEE_MENU",
      "SHOP_NOW",
      "SIGN_UP",
      "SUBSCRIBE",
      "WATCH_MORE",
    ]);
    function l(t) {
      return t != null && t !== "" && e.has(t);
    }
    ((i.WEBSITE_CTA_TYPES = e), (i.isWebsiteCTAType = l));
  },
  66,
);
