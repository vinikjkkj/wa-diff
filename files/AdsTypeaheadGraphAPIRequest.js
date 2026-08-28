__d(
  "AdsTypeaheadGraphAPIRequest",
  ["AdsGraphAPI", "GraphSort"],
  function (t, n, r, o, a, i, l) {
    var e = 20;
    function s(t, n, a, l, s, u) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(t)
        .edge(a)
        .batched()
        .get({
          after: s,
          date_format: "U",
          fields: n,
          filtering: u.toAPI(),
          limit: e,
          sort: l + r("GraphSort").DESC,
          summary: !0,
        });
    }
    l.send = s;
  },
  98,
);
