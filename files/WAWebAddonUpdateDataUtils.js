__d(
  "WAWebAddonUpdateDataUtils",
  [
    "Promise",
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
    "nullthrows",
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i,
            l = t.addons,
            s = t.metricReporter,
            u = t.processMode,
            c = t.tableMode,
            d = [],
            m = (a = l.removeByMsgKey) != null ? a : [],
            p = (i = l.removeByMsgKey) != null ? i : [];
          if (
            (l.remove != null &&
              l.remove.length > 0 &&
              ((m = m.concat(
                l.remove.map(function (e) {
                  return e.id;
                }),
              )),
              (p = p.concat(
                o("WAWebAddonHydrationUtils")
                  .filterAddonsByHydratedStatus(l.remove)
                  .map(function (e) {
                    return e.id;
                  }),
              ))),
            c !== o("WAWebAddonConstants").AddonTableMode.None)
          ) {
            if (l.add != null && l.add.length > 0) {
              var _ = (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var t, a;
                    s == null ||
                      (t = s.sendPerfReporter) == null ||
                      t.startSavedStage();
                    var i = yield o("WAWebAddonPerfUtils").createAddonQplMarker(
                      u === o("WAWebAddonConstants").AddonProcessMode.Send
                        ? o("WAWebAddonPerfUtils").AddonQplMarkerType.Outgoing
                        : o("WAWebAddonPerfUtils").AddonQplMarkerType.Incoming,
                      {
                        mode: c,
                        type: o("WAWebAddonPerfUtils").AnnotationRequestType
                          .BulkUpsert,
                        size: l.add.length,
                      },
                    );
                    try {
                      (u === o("WAWebAddonConstants").AddonProcessMode.SetAck
                        ? yield (e || (e = n("Promise"))).all(
                            l.add.map(function (e) {
                              return o(
                                "WAWebAddonDBTable",
                              ).addonInternalDBTable.updateAck(
                                c,
                                e,
                                r("nullthrows")(e.ack, "ack is not defined"),
                              );
                            }),
                          )
                        : yield o(
                            "WAWebAddonDBTable",
                          ).addonInternalDBTable.bulkUpsert(c, l.add),
                        i == null || i.success());
                    } catch (e) {
                      throw (i == null || i.fail(), e);
                    }
                    s == null ||
                      (a = s.sendPerfReporter) == null ||
                      a.postSavedStage();
                  },
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })();
              d.push(_());
            }
            m.length > 0 &&
              d.push(
                o("WAWebAddonDBTable").addonInternalDBTable.bulkRemoveByMsgKey(
                  c,
                  m,
                ),
              );
          }
          return (
            d.length > 0 && (yield (e || (e = n("Promise"))).all(d)),
            { removeFromUICollection: p }
          );
        })),
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
          var d = yield c({
              addons: r,
              metricReporter: s,
              processMode: i,
              tableMode: l,
            }),
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
