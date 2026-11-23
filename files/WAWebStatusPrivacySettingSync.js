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
                var m = null,
                  p,
                  _ = [],
                  f = [];
                e: {
                  if (
                    i ===
                    o("WAWebProtobufSyncAction.pb")
                      .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                      .CONTACTS
                  ) {
                    ((p = o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                      .Contact),
                      (m = { setting: p, list: [] }));
                    break e;
                  }
                  if (
                    i ===
                    o("WAWebProtobufSyncAction.pb")
                      .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                      .ALLOW_LIST
                  ) {
                    ((p = o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                      .AllowList),
                      (_ = c
                        .map(o("WAWebWidFactory").createWid)
                        .filter(function (e) {
                          return e.isUser();
                        })),
                      (m = { setting: p, list: _ }));
                    break e;
                  }
                  if (
                    i ===
                    o("WAWebProtobufSyncAction.pb")
                      .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                      .DENY_LIST
                  ) {
                    ((p = o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                      .DenyList),
                      (f = c
                        .map(o("WAWebWidFactory").createWid)
                        .filter(function (e) {
                          return e.isUser();
                        })),
                      (m = { setting: p, list: f }));
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
                  )
                    break e;
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      i,
                  );
                }
                var g = [];
                if (
                  o(
                    "WAWebCrosspostingBackendGatingUtils",
                  ).crosspostSettingsSyncReceiverEnabled()
                ) {
                  var h = [];
                  (l != null &&
                    h.push(o("WAWebUserPrefsStatus").persistShareToFB(l)),
                    u != null &&
                      h.push(o("WAWebUserPrefsStatus").persistShareToIG(u)),
                    h.length > 0 &&
                      g.push(
                        Promise.all(h).then(function () {
                          o(
                            "WAWebBackendEventBus",
                          ).BackendEventBus.triggerUpdateCrosspostAutoShareSettings(
                            { shareToFB: l, shareToIG: u },
                          );
                        }),
                      ));
                }
                return (
                  m != null &&
                    g.push(
                      d(m).then(function () {
                        o(
                          "WAWebBackendEventBus",
                        ).BackendEventBus.triggerUpdateStatusPrivacySettings({
                          setting: p,
                          allowList: _,
                          denyList: f,
                        });
                      }),
                    ),
                  await Promise.all(g),
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
    var m = new c();
    l.default = m;
  },
  98,
);
