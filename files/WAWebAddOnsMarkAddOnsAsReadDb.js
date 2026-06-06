__d(
  "WAWebAddOnsMarkAddOnsAsReadDb",
  ["WANullthrows", "WAWebDBAddOnProviders", "WAWebDBMarkAsReadForTable"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await Promise.allSettled(
        Array.from(e.entries(), function (e) {
          var t = e[0],
            n = e[1],
            a = r("WANullthrows")(
              o("WAWebDBAddOnProviders").getProviderForAddOnType(t),
            );
          return a.markAsRead == null ? void 0 : a.markAsRead(n);
        }),
      );
      for (var n of t) if (n.status === "rejected") throw n.reason;
    }
    async function s(e) {
      var t = new Map(),
        n = o("WAWebDBAddOnProviders").addOnProviders.map(async function (n) {
          var r = await (n.markAsRead == null ? void 0 : n.markAsRead(e));
          t.set(n.type, r != null ? r : []);
        }),
        r = [],
        a = o("WAWebDBMarkAsReadForTable")
          .markAsReadForTable("message-orphans", e.map(String))
          .then(function (e) {
            r.push.apply(r, e);
          }),
        i = await Promise.allSettled([].concat(n, [a]));
      for (var l of i) if (l.status === "rejected") throw l.reason;
      return { updatedAddOns: t, updatedOrphans: r };
    }
    ((l.markAddOnsAsReadDb = e), (l.markUnclassifiedAddOnsAsReadDb = s));
  },
  98,
);
