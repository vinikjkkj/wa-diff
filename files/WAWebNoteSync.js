__d(
  "WAWebNoteSync",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      f,
      g = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
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
            return o("WASyncdConst").Actions.NoteEdit;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = 0,
                  i = 0,
                  l = 0,
                  g = 0,
                  h = 0,
                  y = 0,
                  C = 0,
                  b = 0,
                  v = [],
                  S = [],
                  R = yield (f || (f = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            if (e.operation !== "set")
                              return (
                                a++,
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState
                                      .Unsupported,
                                }
                              );
                            try {
                              var t = e.indexParts,
                                n = e.value,
                                s = t[1];
                              if (!s) return r.malformedActionIndex();
                              var u = n.noteEditAction;
                              if (!u)
                                return (
                                  i++,
                                  o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(r.collectionName)
                                );
                              if (u.deleted === !0)
                                return (
                                  yield o("WAWebSchemaNote")
                                    .getNoteTable()
                                    .remove(s),
                                  v.push(s),
                                  {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Success,
                                  }
                                );
                              var c = u.chatJid,
                                d = u.createdAt,
                                m = u.type,
                                p = u.unstructuredContent;
                              if (m == null)
                                return (
                                  l++,
                                  o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(r.collectionName)
                                );
                              if (c == null)
                                return (
                                  g++,
                                  o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(r.collectionName)
                                );
                              var _ = o("WAJids").validateChatJid(c);
                              if (_ == null)
                                return (
                                  h++,
                                  o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(r.collectionName)
                                );
                              d == null && y++;
                              var f = o("WALongInt").maybeNumber(d);
                              (d != null && f == null && C++, p == null && b++);
                              var R = yield o(
                                "WAWebSyncdGetChat",
                              ).resolveChatForMutationIndex(
                                o("WAWebWidFactory").createWid(c),
                              );
                              if (!R.success)
                                return {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Orphan,
                                  orphanModel: R.orphanModel,
                                };
                              var L = o("WAWebWidToJid").widToChatJid(
                                  o("WAWebWidFactory").createWid(R.chat.id),
                                ),
                                E = yield r.resolveNoteId(_, L, s),
                                k = {
                                  id: E,
                                  type:
                                    m ===
                                    o("WAWebProtobufSyncAction.pb")
                                      .SyncActionValue$NoteEditAction$NoteType
                                      .UNSTRUCTURED
                                      ? "unstructured"
                                      : "structured",
                                  chatJid: L,
                                  content: p != null ? p : "",
                                  modifiedAt: Math.floor(e.timestamp / 1e3),
                                  createdAt: Math.floor(
                                    (f != null ? f : 0) / 1e3,
                                  ),
                                };
                              return (
                                yield o("WAWebDBNoteDatabaseApi").addOrEditNote(
                                  k,
                                ),
                                S.push(k),
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Success,
                                }
                              );
                            } catch (e) {
                              return {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Failed,
                              };
                            }
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return (
                  v.length > 0 &&
                    o("WAWebBackendApi").frontendFireAndForget("removeNotes", {
                      noteIds: v,
                    }),
                  S.length > 0 &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "upsertNotesFromSyncd",
                      { noteRecords: S },
                    ),
                  a > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "note sync: ",
                          " operations not supported",
                        ])),
                      a,
                    ),
                  i > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "note sync: ",
                          " malformed mutations",
                        ])),
                      i,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "noteEditAction.type is empty for ",
                          " mutations",
                        ])),
                      l,
                    ),
                  g > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "noteEditAction.chatJid is empty for ",
                          " mutations",
                        ])),
                      g,
                    ),
                  h > 0 &&
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "noteEditAction.chatJid invalid for ",
                          " mutations",
                        ])),
                      h,
                    ),
                  y > 0 &&
                    o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "noteEditAction.createdAt is empty for ",
                          " mutations",
                        ])),
                      y,
                    ),
                  C > 0 &&
                    o("WALogger").WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "noteEditAction.createdAt non-safe int for ",
                          " mutations",
                        ])),
                      C,
                    ),
                  b > 0 &&
                    o("WALogger").WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "noteEditAction.unstructuredContent is empty for ",
                          " mutations",
                        ])),
                      b,
                    ),
                  R
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.resolveNoteId = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                return t === e ? n : o("WAWebNotesIdUtils").generateNoteId(t);
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getNoteMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o(
                    "WAWebSyncdGetChat",
                  ).getChatJidMutationIndexForChat(
                    o("WAWebWidFactory").createWid(e.chatJid),
                    o("WASyncdConst").Actions.NoteEdit,
                  ),
                  n = o("WAWebWidToJid").widToChatJid(
                    o("WAWebWidFactory").createWid(t),
                  ),
                  r = yield this.resolveNoteId(e.chatJid, n, String(e.id)),
                  a = {
                    noteEditAction: {
                      type:
                        e.type === "unstructured"
                          ? o("WAWebProtobufSyncAction.pb")
                              .SyncActionValue$NoteEditAction$NoteType
                              .UNSTRUCTURED
                          : o("WAWebProtobufSyncAction.pb")
                              .SyncActionValue$NoteEditAction$NoteType
                              .STRUCTURED,
                      chatJid: n,
                      unstructuredContent: e.content,
                      createdAt: e.createdAt * 1e3,
                    },
                  };
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: this.collectionName,
                  indexArgs: [r],
                  value: a,
                  version: this.getVersion(),
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  timestamp: e.modifiedAt * 1e3,
                  action: this.getAction(),
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      h = new g();
    l.default = h;
  },
  98,
);
