__d(
  "WAWebAddonUpdateDataUtils",
  [
    "Promise",
    "WANullthrows",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonHydrationUtils",
    "WAWebAddonInfraError",
    "WAWebAddonPerfUtils",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebAddonSortUtils",
    "WAWebCommentUtils",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Set([
        (s = o("WAWebAddonConstants")).AddonProcessMode.OnlineReceive,
        s.AddonProcessMode.Revoke,
        s.AddonProcessMode.DeleteForMe,
        s.AddonProcessMode.DeleteWithParent,
      ]);
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            var s,
              u,
              c = [],
              d = (s = i.removeByMsgKey) != null ? s : [],
              m = (u = i.removeByMsgKey) != null ? u : [];
            if (
              (i.remove != null &&
                i.remove.length > 0 &&
                ((d = d.concat(
                  i.remove.map(function (e) {
                    return e.id;
                  }),
                )),
                (m = m.concat(
                  o("WAWebAddonHydrationUtils")
                    .filterAddonsByHydratedStatus(i.remove)
                    .map(function (e) {
                      return e.id;
                    }),
                ))),
              a !== o("WAWebAddonConstants").AddonTableMode.None)
            ) {
              if (i.add != null && i.add.length > 0) {
                var p = (function () {
                  var s = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      var s, u;
                      l == null ||
                        (s = l.sendPerfReporter) == null ||
                        s.startSavedStage();
                      var c = yield o(
                        "WAWebAddonPerfUtils",
                      ).createAddonQplMarker(
                        t === o("WAWebAddonConstants").AddonProcessMode.Send
                          ? o("WAWebAddonPerfUtils").AddonQplMarkerType.Outgoing
                          : o("WAWebAddonPerfUtils").AddonQplMarkerType
                              .Incoming,
                        {
                          mode: a,
                          type: o("WAWebAddonPerfUtils").AnnotationRequestType
                            .BulkUpsert,
                          size: i.add.length,
                        },
                      );
                      try {
                        (t === o("WAWebAddonConstants").AddonProcessMode.SetAck
                          ? yield (e || (e = n("Promise"))).all(
                              i.add.map(function (e) {
                                return o(
                                  "WAWebAddonDBTable",
                                ).addonInternalDBTable.updateAck(
                                  a,
                                  e,
                                  r("WANullthrows")(
                                    e.ack,
                                    "ack is not defined",
                                  ),
                                );
                              }),
                            )
                          : yield o(
                              "WAWebAddonDBTable",
                            ).addonInternalDBTable.bulkUpsert(a, i.add),
                          c == null || c.success());
                      } catch (e) {
                        throw (c == null || c.fail(), e);
                      }
                      l == null ||
                        (u = l.sendPerfReporter) == null ||
                        u.postSavedStage();
                    },
                  );
                  return function () {
                    return s.apply(this, arguments);
                  };
                })();
                c.push(p());
              }
              d.length > 0 &&
                c.push(
                  o(
                    "WAWebAddonDBTable",
                  ).addonInternalDBTable.bulkRemoveByMsgKey(a, d),
                );
            }
            return (
              c.length > 0 && (yield (e || (e = n("Promise"))).all(c)),
              { removeFromUICollection: m }
            );
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = t.processMode,
            l = t.tableMode,
            s = a == null ? void 0 : a.metricReporter;
          if (i === o("WAWebAddonConstants").AddonProcessMode.Hydration)
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
            );
          var d = yield c(i, l, r, s),
            m = d.removeFromUICollection;
          if (i !== o("WAWebAddonConstants").AddonProcessMode.HistorySync)
            if (r.add != null) {
              var p, _;
              (s == null ||
                (p = s.sendPerfReporter) == null ||
                p.startRenderedStage(),
                yield (e || (e = n("Promise"))).all(
                  o("WAWebAddonSortUtils")
                    .groupAddonsByProcessor(i, l, r.add)
                    .map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            var t = o(
                                "WAWebAddonHydrationUtils",
                              ).filterAddonsByHydratedStatus(e.addons),
                              n =
                                t.length !== 0 ||
                                m.length !== 0 ||
                                i ===
                                  o("WAWebAddonConstants").AddonProcessMode
                                    .OnlineReceive;
                            n &&
                              (yield e.processor.updateCollection(
                                { add: t, remove: m },
                                i,
                              ),
                              u.has(i) &&
                                (yield e.processor.manageNotifications(
                                  {
                                    add:
                                      i ===
                                      o("WAWebAddonConstants").AddonProcessMode
                                        .Revoke
                                        ? []
                                        : e.addons,
                                    remove: m,
                                  },
                                  { processMode: i },
                                )));
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                ),
                s == null ||
                  (_ = s.sendPerfReporter) == null ||
                  _.postRenderedStage());
            } else if (r.remove != null) {
              if (
                (yield (e || (e = n("Promise"))).all(
                  o("WAWebAddonSortUtils")
                    .groupAddonsByProcessor(i, l, r.remove)
                    .map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            (yield e.processor.updateCollection(
                              { add: [], remove: m },
                              i,
                            ),
                              u.has(i) &&
                                (yield e.processor.manageNotifications(
                                  { add: [], remove: m },
                                  { processMode: i },
                                )));
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                ),
                i === o("WAWebAddonConstants").AddonProcessMode.DeleteForMe &&
                  l === o("WAWebAddonConstants").AddonTableMode.Comment)
              ) {
                var f = yield o(
                    "WAWebAddonProcessMsgsUtils",
                  ).queryAddonParentMsgs(
                    r.remove,
                    o("WAWebAddonConstants").AddonProcessMode.DeleteForMe,
                  ),
                  g = f[0],
                  h = [];
                for (var y of r.remove)
                  y.kind === o("WAWebMsgType").MsgKind.CommentDecrypted &&
                    h.push(y);
                yield o("WAWebCommentUtils").updateReplyCount(
                  [],
                  o("WAWebAddonSelectUtils").createAddonParentSelector(g),
                  h,
                );
              }
            } else
              throw new (o("WAWebAddonInfraError").AddonInfraError)(
                o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
              );
        })),
        p.apply(this, arguments)
      );
    }
    l.updateAddonsInTableMode = m;
  },
  98,
);
