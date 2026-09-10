__d(
  "WAWebCustomerContactResolver",
  ["WAWebApiContact", "WAWebContactCollection", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      if (!e.isUser() || (t != null && t.name !== "")) return t;
      var n = o("WAWebApiContact").getAlternateUserWid(
          o("WAWebWidFactory").asUserWidOrThrow(e),
        ),
        r =
          n != null
            ? o("WAWebContactCollection").ContactCollection.get(n)
            : null;
      return r != null && (t == null || r.name !== "") ? r : t;
    }
    l.resolveCustomerContact = e;
  },
  98,
);
