__d(
  "WAWebNoteSync",
  [
    "WAJids",
    "WALogger",
    "WALongInt",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebDBNoteDatabaseApi",
    "WAWebNotesIdUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaNote",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
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
            return o("WASyncdConst").Actions.NoteEdit;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = 0,
              a = 0,
              i = 0,
              l = 0,
              f = 0,
              g = 0,
              h = 0,
              y = 0,
              C = [],
              b = [],
              v = await Promise.all(
                n.map(async function (e) {
                  if (e.operation !== "set")
                    return (
                      r++,
                      {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  try {
                    var n = e.indexParts,
                      s = e.value,
                      u = n[1];
                    if (!u) return t.malformedActionIndex();
                    var c = s.noteEditAction;
                    if (!c)
                      return (
                        a++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          t.collectionName,
                        )
                      );
                    if (c.deleted === !0)
                      return (
                        await o("WAWebSchemaNote").getNoteTable().remove(u),
                        C.push(u),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        }
                      );
                    var d = c.chatJid,
                      m = c.createdAt,
                      p = c.type,
                      _ = c.unstructuredContent;
                    if (p == null)
                      return (
                        i++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          t.collectionName,
                        )
                      );
                    if (d == null)
                      return (
                        l++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          t.collectionName,
                        )
                      );
                    var v = o("WAJids").validateChatJid(d);
                    if (v == null)
                      return (
                        f++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          t.collectionName,
                        )
                      );
                    m == null && g++;
                    var S = o("WALongInt").maybeNumber(m);
                    (m != null && S == null && h++, _ == null && y++);
                    var R = await o(
                      "WAWebSyncdGetChat",
                    ).resolveChatForMutationIndex(
                      o("WAWebWidFactory").createWid(d),
                    );
                    if (!R.success)
                      return {
                        actionState: o("WASyncdConst").SyncActionState.Orphan,
                        orphanModel: R.orphanModel,
                      };
                    var L = o("WAWebWidToJid").widToChatJid(
                        o("WAWebWidFactory").createWid(R.chat.id),
                      ),
                      E = await t.resolveNoteId(v, L, u),
                      k = {
                        id: E,
                        type:
                          p ===
                          o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$NoteEditAction$NoteType
                            .UNSTRUCTURED
                            ? "unstructured"
                            : "structured",
                        chatJid: L,
                        content: _ != null ? _ : "",
                        modifiedAt: Math.floor(e.timestamp / 1e3),
                        createdAt: Math.floor((S != null ? S : 0) / 1e3),
                      };
                    return (
                      await o("WAWebDBNoteDatabaseApi").addOrEditNote(k),
                      b.push(k),
                      { actionState: o("WASyncdConst").SyncActionState.Success }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              C.length > 0 &&
                o("WAWebBackendApi").frontendFireAndForget("removeNotes", {
                  noteIds: C,
                }),
              b.length > 0 &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "upsertNotesFromSyncd",
                  { noteRecords: b },
                ),
              r > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "note sync: ",
                      " operations not supported",
                    ])),
                  r,
                ),
              a > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "note sync: ",
                      " malformed mutations",
                    ])),
                  a,
                ),
              i > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "noteEditAction.type is empty for ",
                      " mutations",
                    ])),
                  i,
                ),
              l > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "noteEditAction.chatJid is empty for ",
                      " mutations",
                    ])),
                  l,
                ),
              f > 0 &&
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "noteEditAction.chatJid invalid for ",
                      " mutations",
                    ])),
                  f,
                ),
              g > 0 &&
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "noteEditAction.createdAt is empty for ",
                      " mutations",
                    ])),
                  g,
                ),
              h > 0 &&
                o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "noteEditAction.createdAt non-safe int for ",
                      " mutations",
                    ])),
                  h,
                ),
              y > 0 &&
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "noteEditAction.unstructuredContent is empty for ",
                      " mutations",
                    ])),
                  y,
                ),
              v
            );
          }),
          (r.resolveNoteId = async function (t, n, r) {
            return n === t ? r : o("WAWebNotesIdUtils").generateNoteId(n);
          }),
          (r.getNoteMutation = async function (t) {
            var e = await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                o("WAWebWidFactory").createWid(t.chatJid),
                o("WASyncdConst").Actions.NoteEdit,
              ),
              n = o("WAWebWidToJid").widToChatJid(
                o("WAWebWidFactory").createWid(e),
              ),
              r = await this.resolveNoteId(t.chatJid, n, String(t.id)),
              a = {
                noteEditAction: {
                  type:
                    t.type === "unstructured"
                      ? o("WAWebProtobufSyncAction.pb")
                          .SyncActionValue$NoteEditAction$NoteType.UNSTRUCTURED
                      : o("WAWebProtobufSyncAction.pb")
                          .SyncActionValue$NoteEditAction$NoteType.STRUCTURED,
                  chatJid: n,
                  unstructuredContent: t.content,
                  createdAt: t.createdAt * 1e3,
                },
              };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [r],
              value: a,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: t.modifiedAt * 1e3,
              action: this.getAction(),
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      g = new f();
    l.default = g;
  },
  98,
);
