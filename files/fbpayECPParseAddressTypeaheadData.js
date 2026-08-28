__d(
  "fbpayECPParseAddressTypeaheadData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n,
        r,
        o,
        a = e == null ? void 0 : e.rawData.suggestions.address_details,
        i = (t = a == null ? void 0 : a.address_line_1) != null ? t : "",
        l = a == null ? void 0 : a.address_line_2,
        s = (n = a == null ? void 0 : a.city) != null ? n : "",
        u = (r = a == null ? void 0 : a.state) != null ? r : "",
        c = (o = a == null ? void 0 : a.postal_code) != null ? o : "",
        d = c.substr(0, 5);
      return { city: s, state: u, street1: i, street2: l, zip: d };
    }
    i.default = e;
  },
  66,
);
