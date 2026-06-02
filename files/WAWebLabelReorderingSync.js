__d(
  "WAWebLabelReorderingSync",
  [
    "WALogger",
    "WAPromiseEach",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebDBLabelsReorder",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "WAWebWamLabelSyncTrackingReporter",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 3;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.LabelReordering;
          }),
          (r.applyMutations = function (n) {
            var t = this;
            return o("WAPromiseEach").promiseEach(n, async function (n) {
              try {
                if (n.operation === "set") {
                  var r = n.value,
                    a = r == null ? void 0 : r.labelReorderingAction;
                  if (
                    a == null ||
                    a.sortedLabelIds == null ||
                    Array.isArray(a.sortedLabelIds) === !1 ||
                    a.sortedLabelIds.length === 0
                  ) {
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[Label] reordering sync: malformed mutation",
                        ])),
                    );
                    var i = await o(
                      "WAWebWamLabelSyncTrackingReporter",
                    ).generateLabelReorderHash(String(Date.now()));
                    return (
                      o("WAWebWamLabelSyncTrackingReporter").logLabelSyncEvent(
                        i,
                        o("WAWebWamLabelSyncTrackingReporter")
                          .LABEL_SYNC_TYPE_ENUM.LABEL_REORDER,
                        o("WAWebWamLabelSyncTrackingReporter")
                          .LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                        o("WAWebWamLabelSyncTrackingReporter")
                          .LABEL_SYNC_RESULT_TYPE.SKIP_EMPTY_LIST,
                        !1,
                        Date.now(),
                      ),
                      o("WAWebSyncdIndexUtils").malformedActionValue(
                        t.collectionName,
                      )
                    );
                  }
                  (await o("WAWebDBLabelsReorder").updateLabelsSortOrder(
                    a.sortedLabelIds,
                  ),
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[Label] reordering sync: operation successful",
                        ])),
                    ));
                  var l = await o(
                    "WAWebWamLabelSyncTrackingReporter",
                  ).generateLabelReorderHash(String(Date.now()));
                  return (
                    o("WAWebWamLabelSyncTrackingReporter").logLabelSyncEvent(
                      l,
                      o("WAWebWamLabelSyncTrackingReporter")
                        .LABEL_SYNC_TYPE_ENUM.LABEL_REORDER,
                      o("WAWebWamLabelSyncTrackingReporter")
                        .LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                      o("WAWebWamLabelSyncTrackingReporter")
                        .LABEL_SYNC_RESULT_TYPE.SUCCESS,
                      !1,
                      Date.now(),
                    ),
                    o("WAWebBackendApi").frontendFireAndForget(
                      "reorderLabels",
                      { sortedLabelIds: a.sortedLabelIds },
                    ),
                    { actionState: o("WASyncdConst").SyncActionState.Success }
                  );
                }
                return (
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[Label] reordering sync: operation not supported",
                      ])),
                  ),
                  { actionState: o("WASyncdConst").SyncActionState.Unsupported }
                );
              } catch (e) {
                return (
                  o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[Label] reordering sync: operation failed",
                        ])),
                    )
                    .verbose(),
                  { actionState: o("WASyncdConst").SyncActionState.Failed }
                );
              }
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
