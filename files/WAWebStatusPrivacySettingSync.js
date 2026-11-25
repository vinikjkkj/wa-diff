__d(
  "WAWebStatusPrivacySettingSync",
  [
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebCrosspostingBackendGatingUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
    "WAWebWid",
    "WAWebWidFactory",
    "getErrorSafe",
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
            (e.collectionName =
              o("WAWebSyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 7;
          }),
          (r.getAction = function () {
            return o("WAWebSyncdConst").Actions.StatusPrivacy;
          }),
          (r.applyMutations = async function (n) {
            if (n.length !== 1)
              return (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] unexpected mutation count ",
                      " for status privacy sync",
                    ])),
                  n.length,
                ),
                n.map(function () {
                  return {
                    actionState: o("WAWebSyncdConst").SyncActionState.Malformed,
                  };
                })
              );
            var t = n[n.length - 1];
            if (t.operation === "set")
              try {
                var r = t.value,
                  a = r.statusPrivacy;
                if (!a)
                  return [
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      this.collectionName,
                    ),
                  ];
                var i = a.mode,
                  l = a.shareToFb,
                  u = a.shareToIg,
                  c = a.userJid;
                if (i == null)
                  return [
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      this.collectionName,
                    ),
                  ];
                var p = null,
                  _,
                  f = [],
                  g = [];
                e: {
                  if (
                    i ===
                    o("WAWebProtobufSyncAction.pb")
                      .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                      .CONTACTS
                  ) {
                    ((_ = o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                      .Contact),
                      (p = { setting: _, list: [] }));
                    break e;
                  }
                  if (
                    i ===
                    o("WAWebProtobufSyncAction.pb")
                      .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                      .ALLOW_LIST
                  ) {
                    ((_ = o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                      .AllowList),
                      (f = c
                        .map(o("WAWebWidFactory").createWid)
                        .filter(function (e) {
                          return e.isUser();
                        })),
                      (p = { setting: _, list: f }));
                    break e;
                  }
                  if (
                    i ===
                    o("WAWebProtobufSyncAction.pb")
                      .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                      .DENY_LIST
                  ) {
                    ((_ = o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                      .DenyList),
                      (g = c
                        .map(o("WAWebWidFactory").createWid)
                        .filter(function (e) {
                          return e.isUser();
                        })),
                      (p = { setting: _, list: g }));
                    break e;
                  }
                  if (
                    i ===
                      o("WAWebProtobufSyncAction.pb")
                        .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                        .CLOSE_FRIENDS ||
                    i ===
                      o("WAWebProtobufSyncAction.pb")
                        .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                        .CUSTOM_LIST
                  ) {
                    ((_ = o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                      .AllowList),
                      (f = m(a)),
                      (p = { setting: _, list: f }));
                    break e;
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      i,
                  );
                }
                var h = [];
                if (
                  o(
                    "WAWebCrosspostingBackendGatingUtils",
                  ).crosspostSettingsSyncReceiverEnabled()
                ) {
                  var y = [];
                  (l != null &&
                    y.push(o("WAWebUserPrefsStatus").persistShareToFB(l)),
                    u != null &&
                      y.push(o("WAWebUserPrefsStatus").persistShareToIG(u)),
                    y.length > 0 &&
                      h.push(
                        Promise.all(y).then(function () {
                          o(
                            "WAWebBackendEventBus",
                          ).BackendEventBus.triggerUpdateCrosspostAutoShareSettings(
                            { shareToFB: l, shareToIG: u },
                          );
                        }),
                      ));
                }
                return (
                  p != null &&
                    h.push(
                      d(p).then(function () {
                        o(
                          "WAWebBackendEventBus",
                        ).BackendEventBus.triggerUpdateStatusPrivacySettings({
                          setting: _,
                          allowList: f,
                          denyList: g,
                        });
                      }),
                    ),
                  await Promise.all(h),
                  [
                    {
                      actionState: o("WAWebSyncdConst").SyncActionState.Success,
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
                  n.map(function () {
                    return {
                      actionState: o("WAWebSyncdConst").SyncActionState.Failed,
                    };
                  })
                );
              }
            return [
              { actionState: o("WAWebSyncdConst").SyncActionState.Unsupported },
            ];
          }),
          (r.getStatusPrivacySettingMutation = function (t) {
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
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase);
    async function d(e) {
      try {
        await o("WAWebUserPrefsStatus").writeStatusPrivacyConfig(e);
      } catch (e) {
        throw (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[syncd] status privacy: could not store the synced audience",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("syncd-status-privacy-audience-write-failed"),
          e
        );
      }
      o("WAWebUserPrefsStatus").applyCommittedStatusPrivacyConfig(e);
    }
    function m(e) {
      var t = e.customLists,
        n = e.userJid,
        a =
          t.length > 0
            ? t
                .filter(function (e) {
                  return e.isSelected === !0;
                })
                .flatMap(function (e) {
                  return e.userJid;
                })
            : n;
      return Array.from(new Set(a))
        .filter(function (e) {
          return r("WAWebWid").isWid(e);
        })
        .map(o("WAWebWidFactory").createWid)
        .filter(function (e) {
          return e.isUser();
        });
    }
    var p = new c();
    l.default = p;
  },
  98,
);
