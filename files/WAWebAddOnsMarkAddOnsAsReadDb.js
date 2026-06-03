__d(
  "WAWebAddOnsMarkAddOnsAsReadDb",
  [
    "Promise",
    "WANullthrows",
    "WAWebDBAddOnProviders",
    "WAWebDBMarkAsReadForTable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = yield (e || (e = n("Promise"))).allSettled(
            Array.from(t.entries(), function (e) {
              var t = e[0],
                n = e[1],
                a = r("WANullthrows")(
                  o("WAWebDBAddOnProviders").getProviderForAddOnType(t),
                );
              return a.markAsRead == null ? void 0 : a.markAsRead(n);
            }),
          );
          for (var i of a) if (i.status === "rejected") throw i.reason;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = new Map(),
            a = o("WAWebDBAddOnProviders").addOnProviders.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = yield e.markAsRead == null
                      ? void 0
                      : e.markAsRead(t);
                    r.set(e.type, n != null ? n : []);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            i = [],
            l = o("WAWebDBMarkAsReadForTable")
              .markAsReadForTable("message-orphans", t.map(String))
              .then(function (e) {
                i.push.apply(i, e);
              }),
            s = yield (e || (e = n("Promise"))).allSettled([].concat(a, [l]));
          for (var u of s) if (u.status === "rejected") throw u.reason;
          return { updatedAddOns: r, updatedOrphans: i };
        })),
        d.apply(this, arguments)
      );
    }
    ((l.markAddOnsAsReadDb = s), (l.markUnclassifiedAddOnsAsReadDb = c));
  },
  98,
);
