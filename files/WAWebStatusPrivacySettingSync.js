__d(
  "WAWebStatusPrivacySettingSync",
  [
    "Promise",
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebCrosspostingBackendGatingUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName =
              o("WAWebSyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.StatusPrivacy;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                if (t.length !== 1)
                  return (
                    o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] unexpected mutation count ",
                          " for status privacy sync",
                        ])),
                      t.length,
                    ),
                    t.map(function () {
                      return {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Malformed,
                      };
                    })
                  );
                var r = t[t.length - 1];
                if (r.operation === "set")
                  try {
                    var a = r.value,
                      i = a.statusPrivacy;
                    if (!i)
                      return [
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          this.collectionName,
                        ),
                      ];
                    var l = i.mode,
                      c = i.shareToFb,
                      d = i.shareToIg,
                      m = i.userJid;
                    if (l == null)
                      return [
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          this.collectionName,
                        ),
                      ];
                    var p = [],
                      _,
                      f = [],
                      g = [];
                    e: {
                      if (
                        l ===
                        o("WAWebProtobufSyncAction.pb")
                          .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                          .CONTACTS
                      ) {
                        ((_ = o("WAWebUserPrefsStatusType")
                          .StatusPrivacySettingType.Contact),
                          (p = o(
                            "WAWebUserPrefsStatus",
                          ).calculateStatusPrivacyUpdateEntries({
                            setting: _,
                          })));
                        break e;
                      }
                      if (
                        l ===
                        o("WAWebProtobufSyncAction.pb")
                          .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                          .ALLOW_LIST
                      ) {
                        ((_ = o("WAWebUserPrefsStatusType")
                          .StatusPrivacySettingType.AllowList),
                          (f = m
                            .map(o("WAWebWidFactory").createWid)
                            .filter(function (e) {
                              return e.isUser();
                            })),
                          (p = o(
                            "WAWebUserPrefsStatus",
                          ).calculateStatusPrivacyUpdateEntries({
                            setting: _,
                            allowList: f,
                          })));
                        break e;
                      }
                      if (
                        l ===
                        o("WAWebProtobufSyncAction.pb")
                          .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                          .DENY_LIST
                      ) {
                        ((_ = o("WAWebUserPrefsStatusType")
                          .StatusPrivacySettingType.DenyList),
                          (g = m
                            .map(o("WAWebWidFactory").createWid)
                            .filter(function (e) {
                              return e.isUser();
                            })),
                          (p = o(
                            "WAWebUserPrefsStatus",
                          ).calculateStatusPrivacyUpdateEntries({
                            setting: _,
                            denyList: g,
                          })));
                        break e;
                      }
                      if (
                        l ===
                          o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                            .CLOSE_FRIENDS ||
                        l ===
                          o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                            .CUSTOM_LIST
                      )
                        break e;
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          l,
                      );
                    }
                    var h = [];
                    if (
                      o(
                        "WAWebCrosspostingBackendGatingUtils",
                      ).crosspostSettingsSyncReceiverEnabled()
                    ) {
                      var y = [];
                      (c != null &&
                        y.push(o("WAWebUserPrefsStatus").persistShareToFB(c)),
                        d != null &&
                          y.push(o("WAWebUserPrefsStatus").persistShareToIG(d)),
                        y.length > 0 &&
                          h.push(
                            (u || (u = n("Promise"))).all(y).then(function () {
                              o(
                                "WAWebBackendEventBus",
                              ).BackendEventBus.triggerUpdateCrosspostAutoShareSettings(
                                { shareToFB: c, shareToIG: d },
                              );
                            }),
                          ));
                    }
                    return (
                      p.length > 0 &&
                        h.push(
                          o("WAWebUserPrefsIndexedDBStorage")
                            .userPrefsIdb.bulkSetItemsToIndexedDB(p)
                            .then(function () {
                              o(
                                "WAWebBackendEventBus",
                              ).BackendEventBus.triggerUpdateStatusPrivacySettings(
                                { setting: _, allowList: f, denyList: g },
                              );
                            }),
                        ),
                      yield (u || (u = n("Promise"))).all(h),
                      [
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
                        },
                      ]
                    );
                  } catch (e) {
                    return (
                      o("WALogger").ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd] status privacy IDB write failed ",
                            "",
                          ])),
                        e,
                      ),
                      t.map(function () {
                        return {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Failed,
                        };
                      })
                    );
                  }
                return [
                  {
                    actionState:
                      o("WAWebSyncdConst").SyncActionState.Unsupported,
                  },
                ];
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.getStatusPrivacySettingMutation = function (t) {
            var e = t.list,
              n = t.setting,
              r = t.shareToFB,
              a = t.shareToIG,
              i = t.timestamp,
              l;
            switch (n) {
              case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                .Contact:
                l = o("WAWebProtobufSyncAction.pb")
                  .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                  .CONTACTS;
                break;
              case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                .AllowList:
                l = o("WAWebProtobufSyncAction.pb")
                  .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                  .ALLOW_LIST;
                break;
              case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                .DenyList:
                l = o("WAWebProtobufSyncAction.pb")
                  .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                  .DENY_LIST;
                break;
            }
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [],
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              version: this.getVersion(),
              timestamp: i,
              action: this.getAction(),
              value: {
                statusPrivacy: babelHelpers.extends(
                  { mode: l, userJid: e },
                  o(
                    "WAWebCrosspostingBackendGatingUtils",
                  ).crosspostSettingsSyncSenderEnabled()
                    ? { shareToFb: r, shareToIg: a }
                    : {},
                  { customLists: [], modes: [] },
                ),
              },
            });
          }),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
