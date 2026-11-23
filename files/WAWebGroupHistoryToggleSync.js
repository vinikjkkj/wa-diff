__d(
  "WAWebGroupHistoryToggleSync",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.GroupHistoryToggle;
          }),
          (a.applyMutations = async function (t) {
            var e = this;
            return Promise.all(
              t.map(function (t) {
                return e.applyMutation(t);
              }),
            );
          }),
          (a.applyMutation = async function (n) {
            var t;
            if (n.operation !== "set")
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "GroupHistoryToggleSync: unsupported operation ",
                      "",
                    ])),
                  n.operation,
                ),
                {
                  actionState: o("WAWebSyncdConst").SyncActionState.Unsupported,
                }
              );
            var a = p(
              (t = n.value.groupHistoryToggleAction) == null
                ? void 0
                : t.groupHistoryToggleMode,
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
            var i = n.indexParts[this.chatJidIndex];
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
            var m = await o("WAWebSyncdGetChat").resolveChatForMutationIndex(l);
            if (!m.success)
              return {
                actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                orphanModel: m.orphanModel,
              };
            var _ = o("WAWebWidFactory").createWid(m.chat.id),
              f = await o(
                "WAWebGroupHistoryToggleModeStore",
              ).setGroupHistoryToggleMode(_, a);
            return (
              f &&
                (o("WAWebBackendApi").frontendFireAndForget(
                  "updateGroupMetadataModelForShareHistoryDefault",
                  { group: _, shouldDefaultGroupHistoryShareOn: a },
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
          }),
          (a.getGroupHistoryToggleMutation = async function (t, n, r) {
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [
                await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                  r,
                  o("WAWebSyncdConst").Actions.GroupHistoryToggle,
                ),
              ],
              value: {
                groupHistoryToggleAction: {
                  groupHistoryToggleMode: n
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
              timestamp: t,
              action: this.getAction(),
            });
          }),
          (a.sendGroupHistoryToggleMutation = async function (t, n) {
            var e = await this.getGroupHistoryToggleMutation(
              o("WATimeUtils").unixTimeMs(),
              n,
              t,
            );
            await o("WAWebSyncdCoreApi").lockForSync([], [e], function () {
              return Promise.resolve();
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase);
    function p(e) {
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
    var _ = new m();
    l.default = _;
  },
  98,
);
