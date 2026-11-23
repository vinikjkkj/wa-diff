__d(
  "WAWebSharableEventPlaceSearchJob",
  ["WAWebRelayClient", "WAWebSharableEventPlaceSearchJobQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventPlaceSearchJobQuery.graphql"));
    async function u(e, t) {
      var n,
        r,
        a = await o("WAWebRelayClient").fetchQuery(
          s,
          {
            input: {
              center: { latitude: t.latitude, longitude: t.longitude },
              query: e,
              use_case_id: "WHATSAPP_MESSAGE",
            },
          },
          { environmentType: "whatsapp_web" },
        );
      return (
        (n =
          a == null || (r = a.whatsapp_maps_typeahead) == null
            ? void 0
            : r.items) != null
          ? n
          : []
      ).flatMap(function (e) {
        var t = e == null ? null : c(e);
        return t == null ? [] : [t];
      });
    }
    function c(e) {
      var t = e.address,
        n = e.id,
        r = e.location,
        o = e.title,
        a = r == null ? void 0 : r.latitude,
        i = r == null ? void 0 : r.longitude;
      if (n == null || o == null || a == null || i == null) return null;
      var l = [
        t == null ? void 0 : t.streetaddress,
        t == null ? void 0 : t.city,
        t == null ? void 0 : t.stateprovince,
      ].filter(function (e) {
        return e != null && e !== "";
      });
      return {
        id: n,
        name: o,
        address: l.length > 0 ? l.join(", ") : null,
        latitude: a,
        longitude: i,
      };
    }
    l.searchSharableEventPlaces = u;
  },
  98,
);
