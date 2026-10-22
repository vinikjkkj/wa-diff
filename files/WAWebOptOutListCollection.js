__d(
  "WAWebOptOutListCollection",
  [
    "Promise",
    "WAWebBaseCollection",
    "WAWebContactCollection",
    "WAWebLidMigrationUtils",
    "WAWebOptOutListModel",
    "WAWebUpdateOptOutListDbJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function a() {
          var r;
          return (
            (r = t.call(this) || this),
            (r.updateOptOutListInCollectionAndDb = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var r = t.isBlocked,
                    a = t.targetWid,
                    i = o("WAWebWidFactory").asUserWidOrThrow(a);
                  if (r) {
                    (yield o(
                      "WAWebUpdateOptOutListDbJob",
                    ).updateOptOutListDbJob(i, r),
                      u.add({ id: i }));
                    return;
                  }
                  var l = [
                    o("WAWebLidMigrationUtils").toPn(i),
                    o("WAWebLidMigrationUtils").toLid(i),
                    i,
                  ].filter(Boolean);
                  yield (e || (e = n("Promise"))).all(
                    l.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            (yield o(
                              "WAWebUpdateOptOutListDbJob",
                            ).updateOptOutListDbJob(e, r),
                              u.remove(e));
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            r.listenTo(r, "add", function (e) {
              r.$OptOutListCollectionImpl$p_1(e.id, !0);
            }),
            r.listenTo(r, "remove", function (e) {
              r.$OptOutListCollectionImpl$p_1(e.id, !1);
            }),
            r
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.$OptOutListCollectionImpl$p_1 = function (t, n) {
            var e = o("WAWebWidFactory").asUserWidOrThrow(t);
            for (var r of [
              o("WAWebLidMigrationUtils").toPn(e),
              o("WAWebLidMigrationUtils").toLid(e),
            ])
              if (r) {
                var a = o("WAWebContactCollection").ContactCollection.get(r);
                a &&
                  (a.set("isContactOptedOut", n),
                  n && a.set("isEverOptedOutOfMarketingMessages", n));
              }
          }),
          (i.replaceAllWith = function (t) {
            var e = this,
              n = new Map(
                t.map(function (e) {
                  return [
                    e.wid.toString(),
                    new (r("WAWebOptOutListModel"))({ id: e.wid }),
                  ];
                }),
              );
            (this.toArray().forEach(function (t) {
              n.has(t.id.toString()) ? n.delete(t.id.toString()) : e.remove(t);
            }),
              n.forEach(function (t) {
                return e.add(t);
              }));
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    s.model = r("WAWebOptOutListModel");
    var u = new s();
    l.OptOutListCollection = u;
  },
  98,
);
