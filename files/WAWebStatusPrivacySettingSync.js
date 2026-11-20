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
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
                      u = i.shareToFb,
                      d = i.shareToIg,
                      p = i.userJid;
                    if (l == null)
                      return [
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          this.collectionName,
                        ),
                      ];
                    var _ = null,
                      f,
                      g = [],
                      h = [];
                    e: {
                      if (
                        l ===
                        o("WAWebProtobufSyncAction.pb")
                          .SyncActionValue$StatusPrivacyAction$StatusDistributionMode
                          .CONTACTS
                      ) {
                        ((f = o("WAWebUserPrefsStatusType")
                          .StatusPrivacySettingType.Contact),
                          (_ = { setting: f, list: [] }));
                        break e;
                      }
                      if (
                        l ===
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
                          (_ = { setting: f, list: g }));
                        break e;
                      }
                      if (
                        l ===
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
                          (_ = { setting: f, list: h }));
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
                    var y = [];
                    if (
                      o(
                        "WAWebCrosspostingBackendGatingUtils",
                      ).crosspostSettingsSyncReceiverEnabled()
                    ) {
                      var C = [];
                      (u != null &&
                        C.push(o("WAWebUserPrefsStatus").persistShareToFB(u)),
                        d != null &&
                          C.push(o("WAWebUserPrefsStatus").persistShareToIG(d)),
                        C.length > 0 &&
                          y.push(
                            (c || (c = n("Promise"))).all(C).then(function () {
                              o(
                                "WAWebBackendEventBus",
                              ).BackendEventBus.triggerUpdateCrosspostAutoShareSettings(
                                { shareToFB: u, shareToIG: d },
                              );
                            }),
                          ));
                    }
                    return (
                      _ != null &&
                        y.push(
                          m(_).then(function () {
                            o(
                              "WAWebBackendEventBus",
                            ).BackendEventBus.triggerUpdateStatusPrivacySettings(
                              { setting: f, allowList: g, denyList: h },
                            );
                          }),
                        ),
                      yield (c || (c = n("Promise"))).all(y),
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
      })(o("WAWebSyncdAction").AccountSyncdActionBase);
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebUserPrefsStatus").writeStatusPrivacyConfig(e);
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
        })),
        p.apply(this, arguments)
      );
    }
    var _ = new d();
    l.default = _;
  },
  98,
);
