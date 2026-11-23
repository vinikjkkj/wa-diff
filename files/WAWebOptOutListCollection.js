__d(
  "WAWebOptOutListCollection",
  [
    "WAWebBaseCollection",
    "WAWebContactCollection",
    "WAWebLidMigrationUtils",
    "WAWebOptOutListModel",
    "WAWebUpdateOptOutListDbJob",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        var t;
        return (
          (t = e.call(this) || this),
          (t.updateOptOutListInCollectionAndDb = async function (e) {
            var t = e.isBlocked,
              n = e.targetWid,
              r = o("WAWebWidFactory").asUserWidOrThrow(n);
            if (t) {
              (await o("WAWebUpdateOptOutListDbJob").updateOptOutListDbJob(
                r,
                t,
              ),
                s.add({ id: r }));
              return;
            }
            var a = [
              o("WAWebLidMigrationUtils").toPn(r),
              o("WAWebLidMigrationUtils").toLid(r),
              r,
            ].filter(Boolean);
            await Promise.all(
              a.map(async function (e) {
                (await o("WAWebUpdateOptOutListDbJob").updateOptOutListDbJob(
                  e,
                  t,
                ),
                  s.remove(e));
              }),
            );
          }),
          t.listenTo(t, "add", function (e) {
            t.$OptOutListCollectionImpl$p_1(e.id, !0);
          }),
          t.listenTo(t, "remove", function (e) {
            t.$OptOutListCollectionImpl$p_1(e.id, !1);
          }),
          t
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.$OptOutListCollectionImpl$p_1 = function (t, n) {
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
        (n.replaceAllWith = function (t) {
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
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = r("WAWebOptOutListModel");
    var s = new e();
    l.OptOutListCollection = s;
  },
  98,
);
