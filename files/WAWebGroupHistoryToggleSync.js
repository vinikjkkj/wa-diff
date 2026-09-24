__d(
  "WAWebGroupHistoryToggleSync",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryToggleModeStore",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 1),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 1;
          }),
          (i.getAction = function () {
            return o("WAWebSyncdConst").Actions.GroupHistoryToggle;
          }),
          (i.applyMutations = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                return o(
                  "WAWebGroupHistoryGating",
                ).isGroupHistoryPerGroupToggleMdSyncEnabled()
                  ? (m || (m = n("Promise"))).all(
                      e.map(function (e) {
                        return t.applyMutation(e);
                      }),
                    )
                  : e.map(function () {
                      return {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
                      };
                    });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.applyMutation = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n;
                if (t.operation !== "set")
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "GroupHistoryToggleSync: unsupported operation ",
                          "",
                        ])),
                      t.operation,
                    ),
                    {
                      actionState:
                        o("WAWebSyncdConst").SyncActionState.Unsupported,
                    }
                  );
                var a = _(
                  (n = t.value.groupHistoryToggleAction) == null
                    ? void 0
                    : n.groupHistoryToggleMode,
                );
                if (a == null)
                  return (
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "GroupHistoryToggleSync: mutation carries no readable toggle mode",
                        ])),
                    ),
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      this.collectionName,
                    )
                  );
                var i = t.indexParts[this.chatJidIndex];
                if (!r("WAWebWid").isWid(i))
                  return (
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "GroupHistoryToggleSync: index chat jid is not a wid",
                        ])),
                    ),
                    this.malformedActionIndex()
                  );
                var l = o("WAWebWidFactory").createWid(i);
                if (!l.isGroup())
                  return (
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "GroupHistoryToggleSync: index chat jid is not a group",
                        ])),
                    ),
                    this.malformedActionIndex()
                  );
                var m =
                  yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(l);
                if (!m.success)
                  return {
                    actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                    orphanModel: m.orphanModel,
                  };
                var p = o("WAWebWidFactory").createWid(m.chat.id),
                  f = yield o(
                    "WAWebGroupHistoryToggleModeStore",
                  ).setGroupHistoryToggleMode(p, a);
                return (
                  f &&
                    (o("WAWebBackendApi").frontendFireAndForget(
                      "updateGroupMetadataModelForShareHistoryDefault",
                      { group: p, shouldDefaultGroupHistoryShareOn: a },
                    ),
                    o("WAWebBackendApi").frontendFireAndForget(
                      "logGroupHistoryToggleModeMdSyncReceived",
                      { isToggleOn: a },
                    ),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "GroupHistoryToggleSync: applied incoming toggle, on=",
                          "",
                        ])),
                      String(a),
                    )),
                  { actionState: o("WAWebSyncdConst").SyncActionState.Success }
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.getGroupHistoryToggleMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: this.collectionName,
                  indexArgs: [
                    yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                      n,
                      o("WAWebSyncdConst").Actions.GroupHistoryToggle,
                    ),
                  ],
                  value: {
                    groupHistoryToggleAction: {
                      groupHistoryToggleMode: t
                        ? o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$GroupHistoryToggleAction$GroupHistoryToggleMode
                            .GROUP_HISTORY_TOGGLE_MODE_ON
                        : o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$GroupHistoryToggleAction$GroupHistoryToggleMode
                            .GROUP_HISTORY_TOGGLE_MODE_OFF,
                    },
                  },
                  version: this.getVersion(),
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  timestamp: e,
                  action: this.getAction(),
                });
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.sendGroupHistoryToggleMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r = yield this.getGroupHistoryToggleMutation(
                  o("WATimeUtils").unixTimeMs(),
                  t,
                  e,
                );
                yield o("WAWebSyncdCoreApi").lockForSync([], [r], function () {
                  return (m || (m = n("Promise"))).resolve();
                });
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase);
    function _(e) {
      return e ===
        o("WAWebProtobufSyncAction.pb")
          .SyncActionValue$GroupHistoryToggleAction$GroupHistoryToggleMode
          .GROUP_HISTORY_TOGGLE_MODE_ON
        ? !0
        : e ===
            o("WAWebProtobufSyncAction.pb")
              .SyncActionValue$GroupHistoryToggleAction$GroupHistoryToggleMode
              .GROUP_HISTORY_TOGGLE_MODE_OFF
          ? !1
          : null;
    }
    var f = new p();
    l.default = f;
  },
  98,
);
