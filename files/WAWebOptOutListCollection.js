__d(
  "WAWebOptOutListCollection",
  [
    "WAWebBaseCollection",
    "WAWebContactCollection",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebOptOutListModel",
    "WAWebUpdateOptOutListDbJob",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        return o(
          "WAWebLid1X1MigrationGating",
        ).Lid1X1MigrationUtils.isLidMigrated()
          ? o("WAWebLidMigrationUtils").toLid(t)
          : null;
      },
      s = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this) || this),
            (n.updateOptOutListInCollectionAndDb = async function (t) {
              var n = t.isBlocked,
                r = t.targetWid,
                a = o("WAWebWidFactory").asUserWidOrThrow(r);
              if (n) {
                (await o("WAWebUpdateOptOutListDbJob").updateOptOutListDbJob(
                  a,
                  n,
                ),
                  u.add({ id: a }));
                return;
              }
              var i = [o("WAWebLidMigrationUtils").toPn(a), e(a), a].filter(
                Boolean,
              );
              await Promise.all(
                i.map(async function (e) {
                  (await o("WAWebUpdateOptOutListDbJob").updateOptOutListDbJob(
                    e,
                    n,
                  ),
                    u.remove(e));
                }),
              );
            }),
            n.listenTo(n, "add", function (e) {
              n.$OptOutListCollectionImpl$p_1(e.id, !0);
            }),
            n.listenTo(n, "remove", function (e) {
              n.$OptOutListCollectionImpl$p_1(e.id, !1);
            }),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$OptOutListCollectionImpl$p_1 = function (n, r) {
            var t = o("WAWebWidFactory").asUserWidOrThrow(n);
            for (var a of [o("WAWebLidMigrationUtils").toPn(t), e(t)])
              if (a) {
                var i = o("WAWebContactCollection").ContactCollection.get(a);
                i &&
                  (i.set("isContactOptedOut", r),
                  r && i.set("isEverOptedOutOfMarketingMessages", r));
              }
          }),
          (a.replaceAllWith = function (t) {
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
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    s.model = r("WAWebOptOutListModel");
    var u = new s();
    l.OptOutListCollection = u;
  },
  98,
);
