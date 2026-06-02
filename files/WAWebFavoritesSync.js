__d(
  "WAWebFavoritesSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBFavoriteDatabaseApi",
    "WAWebLid1X1MigrationGating",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 1;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.Favorites;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r,
              a,
              i = 0,
              l = 0,
              c = n.map(function (e) {
                var n;
                return e.operation !== "set"
                  ? (i++,
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      t.collectionName,
                    ))
                  : ((n = e.value.favoritesAction) == null
                        ? void 0
                        : n.favorites) == null
                    ? (l++,
                      o("WAWebSyncdIndexUtils").malformedActionValue(
                        t.collectionName,
                      ))
                    : ((a == null || e.timestamp > a.timestamp) && (a = e),
                      {
                        actionState: o("WASyncdConst").SyncActionState.Success,
                      });
              });
            (i > 0 &&
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "favorites sync: ",
                    " operations not supported",
                  ])),
                i,
              ),
              l > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "favorites sync: ",
                      " malformed mutations",
                    ])),
                  l,
                ));
            var d =
              (r = a) == null || (r = r.value.favoritesAction) == null
                ? void 0
                : r.favorites;
            if (d != null) {
              var m = 0,
                p = d.reduce(function (e, t) {
                  var n = t.id;
                  return (n != null && e.push({ id: n, orderIndex: m++ }), e);
                }, []),
                _ = 0,
                f = await Promise.all(
                  p.map(async function (e) {
                    var t = await o(
                      "WAWebSyncdGetChat",
                    ).resolveChatForMutationIndex(
                      o("WAWebWidFactory").createWid(e.id),
                    );
                    if (t.success === !0)
                      return (_++, { orderIndex: e.orderIndex, id: t.chat.id });
                    t.success;
                    var n = o("WAWebWidFactory").createWid(e.id);
                    if (
                      o(
                        "WAWebLid1X1MigrationGating",
                      ).Lid1X1MigrationUtils.isLidMigrated() &&
                      n.isLid()
                    ) {
                      var r = o("WAWebApiContact").getPhoneNumber(n);
                      if (r != null)
                        return { orderIndex: e.orderIndex, id: r.toString() };
                    }
                    return { orderIndex: e.orderIndex, id: e.id };
                  }),
                );
              (await o("WAWebDBFavoriteDatabaseApi").setFavorites(f),
                o("WAWebBackendApi").frontendFireAndForget(
                  "setFavoriteCollection",
                  {
                    favorites: f.map(function (e) {
                      return { id: e.id, orderIndex: e.orderIndex };
                    }),
                  },
                ),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[favorites] set ok, resolved ",
                      " of ",
                      "",
                    ])),
                  _,
                  f.length,
                ));
            }
            return c;
          }),
          (r.getFavoritesMutation = async function (t, n) {
            var e = t.map(function (e) {
                return {
                  orderIndex: e.orderIndex,
                  wid: o("WAWebWidFactory").createWid(e.id),
                };
              }),
              r = await Promise.all(
                e.map(async function (e) {
                  return babelHelpers.extends({}, e, {
                    mutationIndex: await o(
                      "WAWebSyncdGetChat",
                    ).getWidMutationIndexForWid(e.wid),
                  });
                }),
              );
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [],
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              version: this.getVersion(),
              timestamp: n,
              action: this.getAction(),
              value: {
                favoritesAction: {
                  favorites: r
                    .sort(function (e, t) {
                      return e.orderIndex - t.orderIndex;
                    })
                    .map(function (e) {
                      var t = e.mutationIndex;
                      return { id: t };
                    }),
                },
              },
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
