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
        function a() {
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
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 7;
          }),
          (i.getAction = function () {
            return o("WAWebSyncdConst").Actions.StatusPrivacy;
          }),
          (i.applyMutations = (function () {
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
                var a = t[t.length - 1];
                if (a.operation === "set")
                  try {
                    var i = a.value,
                      l = i.statusPrivacy;
                    if (!l)
                      return [
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          this.collectionName,
                        ),
                      ];
                    var c = l.mode,
                      d = l.shareToFb,
                      m = l.shareToIg,
                      p = l.userJid;
                    if (c == null)
                      return [
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          this.collectionName,
                        ),
                      ];
                    var _ = [],
                      f,
                      g = [],
                      h = [];
                    e: {
                      if (
                        c ===
                        o("WAWebProtobufSyncAction.pb")
                          .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                          .CONTACTS
                      ) {
                        ((f = o("WAWebUserPrefsStatusType")
                          .StatusPrivacySettingType.Contact),
                          (_ = r(
                            "WAWebUserPrefsStatus",
                          ).calculateStatusPrivacyUpdateEntries({
                            setting: f,
                          })));
                        break e;
                      }
                      if (
                        c ===
                        o("WAWebProtobufSyncAction.pb")
                          .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                          .ALLOW_LIST
                      ) {
                        ((f = o("WAWebUserPrefsStatusType")
                          .StatusPrivacySettingType.AllowList),
                          (g = p
                            .map(o("WAWebWidFactory").createWid)
                            .filter(function (e) {
                              return e.isUser();
                            })),
                          (_ = r(
                            "WAWebUserPrefsStatus",
                          ).calculateStatusPrivacyUpdateEntries({
                            setting: f,
                            allowList: g,
                          })));
                        break e;
                      }
                      if (
                        c ===
                        o("WAWebProtobufSyncAction.pb")
                          .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                          .DENY_LIST
                      ) {
                        ((f = o("WAWebUserPrefsStatusType")
                          .StatusPrivacySettingType.DenyList),
                          (h = p
                            .map(o("WAWebWidFactory").createWid)
                            .filter(function (e) {
                              return e.isUser();
                            })),
                          (_ = r(
                            "WAWebUserPrefsStatus",
                          ).calculateStatusPrivacyUpdateEntries({
                            setting: f,
                            denyList: h,
                          })));
                        break e;
                      }
                      if (
                        c ===
                          o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                            .CLOSE_FRIENDS ||
                        c ===
                          o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                            .CUSTOM_LIST
                      )
                        break e;
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          c,
                      );
                    }
                    var y = [];
                    if (
                      o(
                        "WAWebCrosspostingBackendGatingUtils",
                      ).crosspostSettingsSyncReceiverEnabled()
                    ) {
                      var C = [];
                      (d != null &&
                        C.push(r("WAWebUserPrefsStatus").persistShareToFB(d)),
                        m != null &&
                          C.push(r("WAWebUserPrefsStatus").persistShareToIG(m)),
                        C.length > 0 &&
                          y.push(
                            (u || (u = n("Promise"))).all(C).then(function () {
                              o(
                                "WAWebBackendEventBus",
                              ).BackendEventBus.triggerUpdateCrosspostAutoShareSettings(
                                { shareToFB: d, shareToIG: m },
                              );
                            }),
                          ));
                    }
                    return (
                      _.length > 0 &&
                        y.push(
                          o("WAWebUserPrefsIndexedDBStorage")
                            .userPrefsIdb.bulkSetItemsToIndexedDB(_)
                            .then(function () {
                              o(
                                "WAWebBackendEventBus",
                              ).BackendEventBus.triggerUpdateStatusPrivacySettings(
                                { setting: f, allowList: g, denyList: h },
                              );
                            }),
                        ),
                      yield (u || (u = n("Promise"))).all(y),
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
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.getStatusPrivacySettingMutation = function (t) {
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
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
