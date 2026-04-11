__d(
  "WAWebArchiveSettingSync",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      p,
      _ = [
        o("WASyncdConst").SyncActionState.Success,
        o("WASyncdConst").SyncActionState.Orphan,
      ],
      f = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 4;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.UnarchiveChatsSetting;
          }),
          (i.decodeValue = function (n) {
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
          (i.applyMutations = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var a = this;
                r(
                  "WAWebAndroidUnsupportedActionsSync",
                ).updatePrimaryAllowsAllMutationsFlag("other mutation");
                var i = t.setMutationsPendingToPersist;
                if (e.length > 0) {
                  var l = e[e.length - 1];
                  try {
                    var m = [];
                    if (l.operation === "set") {
                      var p = l.value,
                        _ = p.unarchiveChatsSetting;
                      if ((_ == null ? void 0 : _.unarchiveChats) == null)
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
                      var f = _.unarchiveChats,
                        g = yield o(
                          "WAWebUserPrefsMultiDevice",
                        ).getArchiveV2EnabledSetting();
                      return (
                        g ||
                          (yield o(
                            "WAWebUserPrefsMultiDevice",
                          ).setArchiveV2EnabledSetting(!0),
                          o("WAWebBackendApi").frontendFireAndForget(
                            "applyAppSetting",
                            { field: "archive", value: { enabled: !0 } },
                          )),
                        yield o(
                          "WAWebUserPrefsMultiDevice",
                        ).setUnarchiveChatsSetting(f),
                        o("WAWebBackendApi").frontendFireAndForget(
                          "applyAppSetting",
                          { field: "archive", value: { classic: f } },
                        ),
                        yield o("WAWebModelStorageUtils")
                          .getStorage()
                          .lock(
                            [
                              "message",
                              "chat",
                              "sync-actions",
                              "active-message-ranges",
                            ],
                            n("asyncToGeneratorRuntime").asyncToGenerator(
                              function* () {
                                ((m = yield a.updateSideEffectOnChats(f, i)),
                                  o("WALogger").LOG(
                                    u ||
                                      (u =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          ["applyMutations: update chat table"],
                                        )),
                                  ),
                                  yield o("WAWebSchemaChat")
                                    .getChatTable()
                                    .bulkCreateOrMerge(m));
                              },
                            ),
                          ),
                        m.forEach(function (e) {
                          if (e.id != null) {
                            var t = o("WAWebWidFactory").createWid(e.id);
                            o("WAWebBackendApi").frontendFireAndForget(
                              "chatCollectionUpdate",
                              {
                                updates: [{ id: t, archive: e.archive === !0 }],
                              },
                            );
                          }
                        }),
                        [
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          },
                        ]
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
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ArchiveSettingSync$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  r = [],
                  a = self.performance.now(),
                  i = yield o("WAWebSchemaChat").getChatTable().all(),
                  l = i
                    .filter(function (e) {
                      return e.archive;
                    })
                    .map(function (e) {
                      return e.id;
                    }),
                  s = yield (p || (p = n("Promise"))).all(
                    l.map(function (e) {
                      return o(
                        "WAWebApiActiveMessageRanges",
                      ).getActiveMessageRanges(e);
                    }),
                  ),
                  u = s
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
                  c = l.filter(function (e) {
                    return !u.includes(e);
                  }),
                  d = yield p.all(
                    c.map(function (t) {
                      var r = o("WAWebWidFactory").createWid(t),
                        a = JSON.stringify([
                          o("WASyncdConst").Actions.Archive,
                          r.toString({ legacy: !0 }),
                        ]),
                        i = e.find(function (e) {
                          return e.index === a;
                        });
                      return i
                        ? (p || (p = n("Promise"))).resolve(i)
                        : o("WAWebSyncdDb").getSyncAction(a);
                    }),
                  ),
                  f = d
                    .filter(function (e) {
                      var n;
                      if (!e) return !1;
                      var r =
                        (n = t.decodeValue(e)) == null
                          ? void 0
                          : n.archiveChatAction;
                      return (
                        _.includes(e.actionState) &&
                        (r == null ? void 0 : r.archived) === !0 &&
                        r.messageRange
                      );
                    })
                    .map(function (e) {
                      var n,
                        r =
                          e &&
                          ((n = t.decodeValue(e)) == null
                            ? void 0
                            : n.archiveChatAction),
                        o = e ? JSON.parse(e.index)[1] : "";
                      return [o, r == null ? void 0 : r.messageRange];
                    }),
                  g = new Map(f),
                  h = Array.from(g.keys()),
                  y = yield p.all(
                    h.map(function (e) {
                      return o("WAWebMessageRangeUtils").constructMessageRange(
                        o("WAWebWidFactory").createWid(e),
                        { forOutgoingMutation: !1 },
                      );
                    }),
                  );
                h.forEach(function (e, t) {
                  var n = y[t],
                    a = g.get(e);
                  if (a) {
                    var i = o("WAWebMessageRangeUtils").compareMessageRanges(
                      n,
                      a,
                    );
                    if (
                      i ===
                        o("WAWebMessageRangeUtils").MessageRangeEncloseType
                          .RangeAEnclosesRangeB ||
                      i ===
                        o("WAWebMessageRangeUtils").MessageRangeEncloseType
                          .RangesNotEnclosing
                    ) {
                      var l = o("WAWebWidFactory").createWid(e);
                      r.push({ id: l.toString({ legacy: !1 }), archive: !1 });
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
                var C = self.performance.now();
                return (r.length > 0, r);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ArchiveSettingSync$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  r = [],
                  a = yield o("WAWebSyncdDb").getSyncActionsRows(
                    ["action"],
                    [o("WASyncdConst").Actions.Archive],
                  ),
                  i = e.filter(function (e) {
                    return e.action === o("WASyncdConst").Actions.Archive;
                  }),
                  l = i.map(function (e) {
                    return e.index;
                  }),
                  s = a.filter(function (e) {
                    return !l.includes(e.index);
                  }),
                  u = [].concat(s, i),
                  c = u.filter(function (e) {
                    if (
                      e.actionState ===
                      o("WASyncdConst").SyncActionState.Success
                    ) {
                      var n,
                        r = t.decodeValue(e);
                      return (
                        (r == null || (n = r.archiveChatAction) == null
                          ? void 0
                          : n.archived) === !0
                      );
                    }
                    return !1;
                  }),
                  d = c.map(function (e) {
                    var t = JSON.parse(e.index)[1];
                    return o("WAWebWidFactory").createWid(t);
                  }),
                  m = d.map(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          var t =
                            yield o(
                              "WAWebSyncdGetChat",
                            ).resolveChatForMutationIndex(e);
                          if (t.success)
                            return o("WAWebWidFactory").createWid(t.chat.id);
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ),
                  _ = yield (p || (p = n("Promise"))).all(m);
                return (
                  _.filter(Boolean).forEach(function (e) {
                    r.push({ id: e.toString({ legacy: !1 }), archive: !0 });
                  }),
                  r.length > 0,
                  r
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.updateSideEffectOnChats = function (t, n) {
            return t
              ? this.$ArchiveSettingSync$p_1(n)
              : this.$ArchiveSettingSync$p_2(n);
          }),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      g = new f();
    l.default = g;
  },
  98,
);
