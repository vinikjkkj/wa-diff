__d(
  "WAWebFavoritesSync",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.Favorites;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a,
                  i,
                  l = 0,
                  d = 0,
                  m = t.map(function (e) {
                    var t;
                    return e.operation !== "set"
                      ? (l++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          r.collectionName,
                        ))
                      : ((t = e.value.favoritesAction) == null
                            ? void 0
                            : t.favorites) == null
                        ? (d++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            r.collectionName,
                          ))
                        : ((i == null || e.timestamp > i.timestamp) && (i = e),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          });
                  });
                (l > 0 &&
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "favorites sync: ",
                        " operations not supported",
                      ])),
                    l,
                  ),
                  d > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "favorites sync: ",
                          " malformed mutations",
                        ])),
                      d,
                    ));
                var p =
                  (a = i) == null || (a = a.value.favoritesAction) == null
                    ? void 0
                    : a.favorites;
                if (p != null) {
                  var _ = 0,
                    f = p.reduce(function (e, t) {
                      var n = t.id;
                      return (
                        n != null && e.push({ id: n, orderIndex: _++ }),
                        e
                      );
                    }, []),
                    g = 0,
                    h = yield (c || (c = n("Promise"))).all(
                      f.map(
                        (function () {
                          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e) {
                              var t = yield o(
                                "WAWebSyncdGetChat",
                              ).resolveChatForMutationIndex(
                                o("WAWebWidFactory").createWid(e.id),
                              );
                              if (t.success === !0)
                                return (
                                  g++,
                                  { orderIndex: e.orderIndex, id: t.chat.id }
                                );
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
                                  return {
                                    orderIndex: e.orderIndex,
                                    id: r.toString(),
                                  };
                              }
                              return { orderIndex: e.orderIndex, id: e.id };
                            },
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      ),
                    );
                  (yield o("WAWebDBFavoriteDatabaseApi").setFavorites(h),
                    o("WAWebBackendApi").frontendFireAndForget(
                      "setFavoriteCollection",
                      {
                        favorites: h.map(function (e) {
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
                      g,
                      h.length,
                    ));
                }
                return m;
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.getFavoritesMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r = e.map(function (e) {
                    return {
                      orderIndex: e.orderIndex,
                      wid: o("WAWebWidFactory").createWid(e.id),
                    };
                  }),
                  a = yield (c || (c = n("Promise"))).all(
                    r.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            return babelHelpers.extends({}, e, {
                              mutationIndex: yield o(
                                "WAWebSyncdGetChat",
                              ).getWidMutationIndexForWid(e.wid),
                            });
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: this.collectionName,
                  indexArgs: [],
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  version: this.getVersion(),
                  timestamp: t,
                  action: this.getAction(),
                  value: {
                    favoritesAction: {
                      favorites: a
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
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
