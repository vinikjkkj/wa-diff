__d(
  "WAWebArchiveSettingSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebApiActiveMessageRanges",
    "WAWebBackendApi",
    "WAWebMessageRangeUtils",
    "WAWebModelStorageUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaActiveMessageRanges",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = [
        o("WASyncdConst").SyncActionState.Success,
        o("WASyncdConst").SyncActionState.Orphan,
      ],
      _ = (function (t) {
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
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 4;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.UnarchiveChatsSetting;
          }),
          (a.decodeValue = function (n) {
            if (n.binarySyncData) {
              var t = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                n.binarySyncData,
              );
              if (t.value) return t.value;
            } else {
              if (!n.binarySyncAction)
                throw (
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "binarySyncAction should not be null",
                        ])),
                    )
                    .tags("syncd")
                    .sendLogs("syncd binarySyncAction should not be null"),
                  r("err")("binarySyncAction should not be null")
                );
              return o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                n.binarySyncAction,
              );
            }
          }),
          (a.applyMutations = async function (t, n) {
            var e = this;
            r(
              "WAWebAndroidUnsupportedActionsSync",
            ).updatePrimaryAllowsAllMutationsFlag("other mutation");
            var a = n.setMutationsPendingToPersist;
            if (t.length > 0) {
              var i = t[t.length - 1];
              try {
                var l = [];
                if (i.operation === "set") {
                  var m = i.value,
                    p = m.unarchiveChatsSetting;
                  if ((p == null ? void 0 : p.unarchiveChats) == null)
                    return (
                      o("WALogger").WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "archive setting sync: malformed mutation",
                          ])),
                      ),
                      [
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          this.collectionName,
                        ),
                      ]
                    );
                  var _ = p.unarchiveChats,
                    f = await o(
                      "WAWebUserPrefsMultiDevice",
                    ).getArchiveV2EnabledSetting();
                  return (
                    f ||
                      (await o(
                        "WAWebUserPrefsMultiDevice",
                      ).setArchiveV2EnabledSetting(!0),
                      o("WAWebBackendApi").frontendFireAndForget(
                        "applyAppSetting",
                        { field: "archive", value: { enabled: !0 } },
                      )),
                    await o(
                      "WAWebUserPrefsMultiDevice",
                    ).setUnarchiveChatsSetting(_),
                    o("WAWebBackendApi").frontendFireAndForget(
                      "applyAppSetting",
                      { field: "archive", value: { classic: _ } },
                    ),
                    await o("WAWebModelStorageUtils")
                      .getStorage()
                      .lock(
                        [
                          "message",
                          "chat",
                          "sync-actions",
                          "active-message-ranges",
                        ],
                        async function () {
                          ((l = await e.updateSideEffectOnChats(_, a)),
                            o("WALogger").LOG(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "applyMutations: update chat table",
                                ])),
                            ),
                            await o("WAWebSchemaChat")
                              .getChatTable()
                              .bulkCreateOrMerge(l));
                        },
                      ),
                    l.forEach(function (e) {
                      if (e.id != null) {
                        var t = o("WAWebWidFactory").createWid(e.id);
                        o("WAWebBackendApi").frontendFireAndForget(
                          "chatCollectionUpdate",
                          { updates: [{ id: t, archive: e.archive === !0 }] },
                        );
                      }
                    }),
                    [{ actionState: o("WASyncdConst").SyncActionState.Success }]
                  );
                }
                return (
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "archive setting sync: operation not supported",
                      ])),
                  ),
                  [
                    {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    },
                  ]
                );
              } catch (e) {
                return [
                  { actionState: o("WASyncdConst").SyncActionState.Failed },
                ];
              }
            }
            return (
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "archive setting sync: no mutations",
                  ])),
              ),
              [{ actionState: o("WASyncdConst").SyncActionState.Failed }]
            );
          }),
          (a.$ArchiveSettingSync$p_1 = async function (t) {
            var e = this,
              n = [],
              r = self.performance.now(),
              a = await o("WAWebSchemaChat").getChatTable().all(),
              i = a
                .filter(function (e) {
                  return e.archive;
                })
                .map(function (e) {
                  return e.id;
                }),
              l = await Promise.all(
                i.map(function (e) {
                  return o(
                    "WAWebApiActiveMessageRanges",
                  ).getActiveMessageRanges(e);
                }),
              ),
              s = l
                .flat()
                .filter(function (e) {
                  return (
                    e.action ===
                    o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                      .Archive
                  );
                })
                .map(function (e) {
                  return e.chatId;
                }),
              u = i.filter(function (e) {
                return !s.includes(e);
              }),
              c = await Promise.all(
                u.map(function (e) {
                  var n = o("WAWebWidFactory").createWid(e),
                    r = JSON.stringify([
                      o("WASyncdConst").Actions.Archive,
                      n.toString({ legacy: !0 }),
                    ]),
                    a = t.find(function (e) {
                      return e.index === r;
                    });
                  return a
                    ? Promise.resolve(a)
                    : o("WAWebSyncdDb").getSyncAction(r);
                }),
              ),
              d = c
                .filter(function (t) {
                  var n;
                  if (!t) return !1;
                  var r =
                    (n = e.decodeValue(t)) == null
                      ? void 0
                      : n.archiveChatAction;
                  return (
                    p.includes(t.actionState) &&
                    (r == null ? void 0 : r.archived) === !0 &&
                    r.messageRange
                  );
                })
                .map(function (t) {
                  var n,
                    r =
                      t &&
                      ((n = e.decodeValue(t)) == null
                        ? void 0
                        : n.archiveChatAction),
                    o = t ? JSON.parse(t.index)[1] : "";
                  return [o, r == null ? void 0 : r.messageRange];
                }),
              _ = new Map(d),
              f = Array.from(_.keys()),
              g = await Promise.all(
                f.map(function (e) {
                  return o("WAWebMessageRangeUtils").constructMessageRange(
                    o("WAWebWidFactory").createWid(e),
                    { forOutgoingMutation: !1 },
                  );
                }),
              );
            f.forEach(function (e, t) {
              var r = g[t],
                a = _.get(e);
              if (a) {
                var i = o("WAWebMessageRangeUtils").compareMessageRanges(r, a);
                if (
                  i ===
                    o("WAWebMessageRangeUtils").MessageRangeEncloseType
                      .RangeAEnclosesRangeB ||
                  i ===
                    o("WAWebMessageRangeUtils").MessageRangeEncloseType
                      .RangesNotEnclosing
                ) {
                  var l = o("WAWebWidFactory").createWid(e);
                  n.push({ id: l.toString({ legacy: !1 }), archive: !1 });
                } else
                  o("WALogger")
                    .WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "Archive_Setting_Sync: Unsupported rangeEnclosedType ",
                          "",
                        ])),
                      i,
                    )
                    .sendLogs(
                      "ArchiveSettingSync setting true rangeEnclosedType unsupported",
                    );
              }
            });
            var h = self.performance.now();
            return (n.length > 0, n);
          }),
          (a.$ArchiveSettingSync$p_2 = async function (t) {
            var e = this,
              n = [],
              r = await o("WAWebSyncdDb").getSyncActionsRows(
                ["action"],
                [o("WASyncdConst").Actions.Archive],
              ),
              a = t.filter(function (e) {
                return e.action === o("WASyncdConst").Actions.Archive;
              }),
              i = a.map(function (e) {
                return e.index;
              }),
              l = r.filter(function (e) {
                return !i.includes(e.index);
              }),
              s = [].concat(l, a),
              u = s.filter(function (t) {
                if (
                  t.actionState === o("WASyncdConst").SyncActionState.Success
                ) {
                  var n,
                    r = e.decodeValue(t);
                  return (
                    (r == null || (n = r.archiveChatAction) == null
                      ? void 0
                      : n.archived) === !0
                  );
                }
                return !1;
              }),
              c = u.map(function (e) {
                var t = JSON.parse(e.index)[1];
                return o("WAWebWidFactory").createWid(t);
              }),
              d = c.map(async function (e) {
                var t =
                  await o("WAWebSyncdGetChat").resolveChatForMutationIndex(e);
                if (t.success) return o("WAWebWidFactory").createWid(t.chat.id);
              }),
              m = await Promise.all(d);
            return (
              m.filter(Boolean).forEach(function (e) {
                n.push({ id: e.toString({ legacy: !1 }), archive: !0 });
              }),
              n.length > 0,
              n
            );
          }),
          (a.updateSideEffectOnChats = function (t, n) {
            return t
              ? this.$ArchiveSettingSync$p_1(n)
              : this.$ArchiveSettingSync$p_2(n);
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      f = new _();
    l.default = f;
  },
  98,
);
