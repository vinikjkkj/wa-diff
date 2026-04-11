__d(
  "WAWebBlocklistCollection",
  [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebBlocklistMigration",
    "WAWebBlocklistModel",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this) || this),
            e.listenTo(e, "add", function (t) {
              e.$BlocklistCollectionImpl$p_1(t.id, !0);
            }),
            e.listenTo(e, "remove", function (t) {
              e.$BlocklistCollectionImpl$p_1(t.id, !1);
            }),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$BlocklistCollectionImpl$p_1 = function (t, n) {
            o("WAWebBlocklistMigration").applyBlocklistV2Rules()
              ? this.$BlocklistCollectionImpl$p_2(t, n)
              : this.$BlocklistCollectionImpl$p_3(t, n);
          }),
          (a.$BlocklistCollectionImpl$p_3 = function (t, n) {
            var e = o("WAWebWidFactory").asUserWidOrThrow(t);
            for (var r of [
              o("WAWebLidMigrationUtils").toPn(e),
              o("WAWebLidMigrationUtils").toLid(e),
            ])
              if (r) {
                var a;
                (a = o("WAWebContactCollection").ContactCollection.get(r)) ==
                  null || a.set("isContactBlocked", n);
              }
          }),
          (a.$BlocklistCollectionImpl$p_2 = function (t, n) {
            var e;
            if (
              ((e = o("WAWebContactCollection").ContactCollection.get(t)) ==
                null || e.set("isContactBlocked", n),
              t.isRegularUser())
            ) {
              if (!t.isLid()) {
                this.$BlocklistCollectionImpl$p_4(t, n);
                return;
              }
              var r = o(
                "WAWebChatCollection",
              ).ChatCollection.getChatByAccountLid(t);
              if (r && !r.id.isLid()) {
                var a;
                (a = o("WAWebContactCollection").ContactCollection.get(r.id)) ==
                  null || a.set("isContactBlocked", n);
              }
            }
          }),
          (a.$BlocklistCollectionImpl$p_4 = function (n, r) {
            var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                "WAReceivedBlocklistMigrationBefore1x1Migration",
              ),
              a = r === !1;
            if (t === !0 || a) {
              var i = a ? "remove" : "between blocklist and 1x1 migration";
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[blocklist] blocklist collection: not a lid: ",
                    ", ",
                    "",
                  ])),
                n.toLogString(),
                i,
              );
            } else {
              var l = o("WAWebBlocklistMigration").isBlocklistMigrated();
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[blocklist] blocklist collection: not a lid: ",
                      ", migrated: ",
                      "",
                    ])),
                  n.toLogString(),
                  l,
                )
                .sendLogs("blocklist-migrated-non-lid");
            }
          }),
          (a.replaceAllWith = function (t) {
            var e = this,
              n = new Map(
                t.map(function (e) {
                  return [
                    e.toString(),
                    new (r("WAWebBlocklistModel"))({ id: e }),
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
          (a.dedupedList = function () {
            var e = this;
            return this.filter(function (t) {
              var n = t.contact(),
                r = n.phoneNumber;
              return n.id.isLid() && r != null ? e.get(r) == null : !0;
            });
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    u.model = r("WAWebBlocklistModel");
    var c = new u();
    l.BlocklistCollection = c;
  },
  98,
);
