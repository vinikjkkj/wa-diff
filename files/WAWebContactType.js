__d(
  "WAWebContactType",
  [],
  function (t, n, r, o, a, i) {
    var e = { NONE: 0, CUSTOMER: 1, COLLEAGUE: 2, VENDOR: 3, PERSONAL: 4 },
      l = [e.NONE, e.CUSTOMER, e.COLLEAGUE, e.VENDOR, e.PERSONAL];
    function s(t) {
      return t === 0
        ? e.NONE
        : t === 1
          ? e.CUSTOMER
          : t === 2
            ? e.COLLEAGUE
            : t === 3
              ? e.VENDOR
              : t === 4
                ? e.PERSONAL
                : e.NONE;
    }
    ((i.ContactType = e),
      (i.CONTACT_TYPE_ORDER = l),
      (i.getContactTypeFromNumber = s));
  },
  66,
);
