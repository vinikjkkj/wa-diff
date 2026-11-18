__d(
  "WAWebRichOrderContactInfo",
  ["isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return (
        e != null &&
        (!r("isStringNullOrEmpty")(
          (t = e.support_url) == null ? void 0 : t.url,
        ) ||
          !r("isStringNullOrEmpty")(e.email) ||
          !r("isStringNullOrEmpty")(e.phone_number))
      );
    }
    l.hasRichOrderContactOptions = e;
  },
  98,
);
