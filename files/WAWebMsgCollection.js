__d(
  "WAWebMsgCollection",
  [
    "WALogger",
    "WANullthrows",
    "WAPromiseProps",
    "WATimeUtils",
    "WATypeUtils",
    "WAWebAck",
    "WAWebBackendErrors",
    "WAWebBaseCollection",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebChatCollection",
    "WAWebCollectionConstants",
    "WAWebCollectionUtils",
    "WAWebCoreActionsODS",
    "WAWebDBGetGroupMemberUpdateMessages",
    "WAWebDBMessageFindLocal",
    "WAWebDBMsgUtils",
    "WAWebEventsWaitForBbEvent",
    "WAWebFrontendMsgGetters",
    "WAWebFtsConstants",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebKeepInChatMsgUtils",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgOpaqueData",
    "WAWebMsgType",
    "WAWebNewsletterMsgHistoryUtils",
    "WAWebNewsletterViewModeUIUtils",
    "WAWebNoop",
    "WAWebProcessMultipleMsgsAction",
    "WAWebProductMessageListCollection",
    "WAWebProtobufsE2E.pb",
    "WAWebSyncButtonState",
    "WAWebThreadModelResolver",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWid",
    "WAWebWorkerSafeBackendApi",
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
      _,
      f = 50,
      g = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this) || this),
            (n.pendingAdd = {}),
            (n.ftsCache = {}),
            (n.productListMessagesPrefetchChain = Promise.resolve([])),
            (n._editKeyByParentKey = new Map()),
            (n._parentKeyByEditKey = new Map()),
            (n._encryptedData = null),
            (n.loadMessagesQuery = async function (t) {
              var a = n,
                i = t.anchor,
                l = i.remote,
                u;
              switch (t.direction) {
                case "before":
                case "after":
                  u = t.direction;
                  break;
                default:
                  u = "before";
                  break;
              }
              var c = { add: u, isHistory: !0 },
                d = await o("WAWebDBMessageFindLocal").msgFindByDirection({
                  direction: u,
                  anchor: i,
                  count: t.count,
                  threadId: t.threadId,
                });
              if (d.status >= 400)
                return (
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "model:Msg:findQuery error ",
                        "",
                      ])),
                    d.status,
                  ),
                  Promise.reject(d.status)
                );
              var m = d.messages,
                p = a.get(i);
              r("WAWebWid").isNewsletter(l) &&
                p != null &&
                (m = await o(
                  "WAWebNewsletterMsgHistoryUtils",
                ).fillMsgHistoryGaps({
                  jid: l,
                  msgs:
                    u === "before"
                      ? m.concat(
                          o("WAWebMsgDataFromModel").msgDataFromMsgModel(p),
                        )
                      : [
                          o("WAWebMsgDataFromModel").msgDataFromMsgModel(p),
                        ].concat(m),
                  serverIdsToSkip: o(
                    "WAWebNewsletterViewModeUIUtils",
                  ).getHiddenMessageServerIdsForChat(l),
                }));
              var _ = t.threadId,
                f = function () {
                  var e = a.get(i);
                  if (e != null)
                    return _ != null ? e.getMsgChunk(_) : e.getMsgChunk();
                  var t = o("WAWebChatCollection").ChatCollection.get(l);
                  if (t != null)
                    return o("WAWebThreadModelResolver").resolveThreadOrChat(
                      t,
                      _,
                    ).msgs;
                };
              return (
                m.forEach(function (e) {
                  e.invis = !0;
                }),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "model:Msg:findQuery:got:",
                      ":",
                      "",
                    ])),
                  m.length,
                  t.direction,
                ),
                a.processMultipleMessages(l, m, c, "msgCollectionFindQuery", f)
              );
            }),
            (n.findQueryImpl = async function (e) {
              var t = { anchor: e, count: e.count, serverId: e.serverId };
              return n.loadMessagesQuery(t);
            }),
            (n.byParentMessage = o("WAWebCollectionUtils").aggregated(
              function (e) {
                var t = e.parentMsgKey,
                  n = e.type;
                return n === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
                  n === o("WAWebMsgType").MSG_TYPE.UNKNOWN
                  ? "UNCATEGORIZED"
                  : t;
              },
              { subscribeToKey: "parentMsgKey" },
            )),
            (n.byChat = o("WAWebCollectionUtils").aggregated(function (e) {
              var t = e.id;
              return t.remote;
            })),
            (n.byThreadId = o("WAWebCollectionUtils").aggregated(function (e) {
              var t = e.threadIds;
              return t;
            })),
            n.listenTo(n, "remove", n.removeFromCollection),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.removeFromCollection = function (t) {
            var e = o("WAWebFrontendMsgGetters").getMaybeChat(t);
            e == null || e.removeFromCollection(t);
          }),
          (a.add = function (n, a) {
            var e = Array.isArray(n) ? n : [n],
              i = e.filter(function (e) {
                var t =
                    e.ephemeralDuration != null && e.ephemeralDuration !== 0,
                  n = e.afterReadDuration != null && e.afterReadDuration !== 0;
                if (!t && !n) return !0;
                var r = new (o("WAWebMsgModel").Msg)(e);
                return !o("WAWebKeepInChatMsgUtils").isExpiredAndNotKept(r);
              }),
              l = t.prototype.add.call(this, i, a);
            return (
              this.makeParentMessagesVisibleInChat(l),
              r("WAWebSyncButtonState")(l),
              this._prefetchProductListMessages(l),
              this.processVCardMessagesForLidMappings(l),
              this.processEditedMessages(l),
              l
            );
          }),
          (a.makeParentMessagesVisibleInChat = function (t) {
            var e = this;
            t.filter(Boolean).forEach(function (t) {
              var n = t.parentMsgKey,
                r = t.viewMode;
              if (
                n &&
                !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                  o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                  r,
                )
              ) {
                var a,
                  i = e.get(n);
                i &&
                  (a = o("WAWebInvisiblePlaceholderViewModeProcessor")
                    .InvisiblePlaceholderViewModeProcessor
                    .compatibleMessageTypes) != null &&
                  a.includes(i.type) &&
                  !o("WAWebMessageAssociationUIUtils").shouldHideParentMessage({
                    parentMsg: i,
                    duringDetach: !1,
                  }) &&
                  !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                    o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                    i == null ? void 0 : i.viewMode,
                  ) &&
                  i.set(
                    "viewMode",
                    o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                  );
              }
            });
          }),
          (a.processVCardMessagesForLidMappings = function (t) {
            var e = t.reduce(function (e, t) {
              if (
                t == null ||
                (t.type !== o("WAWebMsgType").MSG_TYPE.VCARD &&
                  t.type !== o("WAWebMsgType").MSG_TYPE.MULTI_VCARD)
              )
                return e;
              var n =
                t.type === o("WAWebMsgType").MSG_TYPE.VCARD
                  ? t.getVcardWids()
                  : t.getMultiVcardWids();
              if (n == null) return e;
              var r = n.filter(function (e) {
                return o("WAWebLidMigrationUtils").toUserLid(e) == null;
              });
              return r.length === 0
                ? e
                : e == null
                  ? new Set(r)
                  : (r.forEach(function (t) {
                      return e.add(t);
                    }),
                    e);
            }, null);
            e != null &&
              o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                "syncContactListJob",
                {
                  contactIds: Array.from(e),
                  shouldSyncDevice: !1,
                  mode: "query",
                },
              );
          }),
          (a._prefetchProductListMessages = function (t) {
            this.productListMessagesPrefetchChain = t
              .filter(function (e) {
                var t, n;
                return (
                  e != null &&
                  e.isNewMsg &&
                  e.type === o("WAWebMsgType").MSG_TYPE.LIST &&
                  ((t = e.list) == null ? void 0 : t.listType) ===
                    o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType
                      .PRODUCT_LIST &&
                  ((n = e.list) == null ? void 0 : n.productListInfo) != null
                );
              })
              .reduce(function (e, t) {
                var n, r;
                if (t == null) return e;
                var a = t.requiresDirectConnection,
                  i = t.isForwarded
                    ? t.businessOwnerJid
                    : t.from.toString({ legacy: !0 }),
                  l = (n = t.list) == null ? void 0 : n.productListInfo;
                if (i == null || l == null) return e;
                var s = o(
                  "WAWebProductMessageListCollection",
                ).ProductMessageListCollection.getOrAdd(
                  t.id,
                  l,
                  a,
                  i,
                  (r = t.list) == null ? void 0 : r.title,
                );
                return s != null &&
                  s.productCollection.getModelsArray().length === 0 &&
                  !s.isFetching()
                  ? e.then(function () {
                      return o(
                        "WAWebProductMessageListCollection",
                      ).ProductMessageListCollection.update(s.id);
                    })
                  : e;
              }, this.productListMessagesPrefetchChain);
          }),
          (a.getStarred = async function (t, n, r) {
            var e =
                typeof n == "number" && !isNaN(n)
                  ? n
                  : o("WAWebCollectionConstants").PAGE_SIZE,
              a = { add: "search" },
              i = await o("WAWebDBMessageFindLocal").msgFindStarred({
                count: e,
                chat: t != null ? t : void 0,
                anchor: r,
              });
            return this.processMultipleMessages(
              void 0,
              i,
              a,
              "msgCollectionGetStarred",
            );
          }),
          (a.getEventMsgs = async function (t, n, r) {
            var e =
                typeof n == "number" && !Number.isNaN(n)
                  ? n
                  : o("WAWebCollectionConstants").PAGE_SIZE,
              a = { add: "search" },
              i = await o("WAWebDBMessageFindLocal").msgFindEvents({
                count: e,
                chat: t,
                anchor: r,
              });
            return this.processMultipleMessages(
              void 0,
              i,
              a,
              "msgCollectionGetEvents",
            );
          }),
          (a.getGroupMemberUpdateMsgs = async function (t, n, r) {
            var e =
                typeof n == "number" && !Number.isNaN(n)
                  ? n
                  : o("WAWebCollectionConstants").PAGE_SIZE,
              a = { add: "search" },
              i = await o(
                "WAWebDBGetGroupMemberUpdateMessages",
              ).getGroupMemberUpdateMessagesForChat(t, e, r);
            return this.processMultipleMessages(
              void 0,
              i,
              a,
              "msgCollectionGetGroupMemberUpdates",
            );
          }),
          (a.getVoipCallLogMsgs = async function (t, n) {
            var e =
                typeof t == "number" && !isNaN(t)
                  ? t
                  : o("WAWebCollectionConstants").PAGE_SIZE,
              r = await o("WAWebDBMessageFindLocal").msgFindCallLog({
                count: e,
                anchor: n,
              });
            return this.processMultipleMessages(
              void 0,
              r,
              { add: "search" },
              "msgCollectionGetVoipCallLogs",
            );
          }),
          (a.getAllDocsMsgs = async function (t, n, r) {
            var e = t != null ? t : f,
              a = r === "after" ? "after" : "before",
              i = await o("WAWebDBMessageFindLocal").getAllDocsMessages({
                chat: n == null ? void 0 : n.remote,
                count: e,
                direction: a,
                msgKey: n,
              });
            return this.processMultipleMessages(
              void 0,
              i,
              { add: "search" },
              "msgCollectionGetAllMedia",
            );
          }),
          (a.getMessagesById = async function (t) {
            var e = await o("WAWebDBMsgUtils").getMsgsByMsgKey(t);
            return o("WAPromiseProps").promiseProps({
              messages: this.processMultipleMessages(
                void 0,
                e,
                { add: "search" },
                "msgCollectionGetMessagesById",
              ),
              eof: !0,
              canceled: !1,
            });
          }),
          (a.hydrateOrGetMessages = async function (t) {
            var e = this,
              n = t.filter(function (t) {
                return !e.get(t);
              });
            if (n.length > 0) {
              var a = await this.getMessagesById(n),
                i = a.messages;
              if (i.length !== n.length)
                throw new (o("WAWebBaseCollection").CollectionSilentQueryError)(
                  "No message found for one or more ids",
                );
            }
            return t.map(function (t) {
              return r("WANullthrows")(e.get(t));
            });
          }),
          (a.incrementalStarredUpdate = function (t) {
            return this.processMultipleMessages(
              void 0,
              t,
              { add: "search" },
              "msgCollectionIncrementalStarredUpdate",
            );
          }),
          (a.search = function (t, n, r, a, i) {
            var e = this;
            (n === void 0 && (n = 1), i === void 0 && (i = {}));
            var l = t + "__" + (i.label || (i.kind && i.kind) || "");
            if (n === 1 && !a) {
              var s = this.ftsCache[l];
              if (s) return s;
              var u = this._search({
                count: r,
                jid: a,
                kind: i.kind,
                label: i.label,
                page: n,
                searchTerm: t,
              });
              this.ftsCache[l] = u;
              var c = function () {
                e.ftsCache[l] = null;
              };
              return (
                self.setTimeout(c, o("WAWebFtsConstants").FTS_TTL),
                u.catch(c),
                u
              );
            }
            return this._search({
              count: r,
              jid: a,
              kind: i.kind,
              label: i.label,
              page: n,
              searchTerm: t,
            });
          }),
          (a._search = async function (t) {
            var e = t.count,
              n = t.jid,
              r = t.kind,
              a = t.label,
              i = t.page,
              l = t.searchTerm,
              s = {
                searchTerm: l,
                page: o("WATypeUtils").isNumber(i) && i !== 0 ? i : 1,
                count:
                  o("WATypeUtils").isNumber(e) && e !== 0
                    ? e
                    : o("WAWebCollectionConstants").PAGE_SIZE,
                remote: n,
                tagToCancel: n ? this.pendingSearchTag : void 0,
                label: a,
                kind: r,
              },
              c = { add: "search" },
              d;
            try {
              d = await o("WAWebDBMessageFindLocal").msgFindSearch(s);
            } catch (e) {
              throw (o("WAWebCoreActionsODS").logGlobalSearchError(), e);
            }
            if (
              (s.tagToCancel === this.pendingSearchTag &&
                (this.pendingSearchTag = void 0),
              d.status === 499)
            )
              return o("WAPromiseProps").promiseProps({
                messages: Promise.resolve([]),
                eof: !1,
                canceled: !0,
              });
            if (d.status === 404)
              return (
                o("WAWebCoreActionsODS").logGlobalSearchError(),
                Promise.reject(new (o("WAWebBackendErrors").E404)())
              );
            if (d.status >= 400)
              return (
                o("WAWebCoreActionsODS").logGlobalSearchError(),
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "model:Msg:search error ",
                      "",
                    ])),
                  d.status,
                ),
                Promise.reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    d.status,
                    "failed to find a msg during fts",
                  ),
                )
              );
            var m = Array.isArray(d) ? d : d.messages,
              p = Array.isArray(d) ? !0 : d.eof,
              _ = m.filter(function (e) {
                return (e == null ? void 0 : e.isGroupStatus) !== !0;
              });
            return o("WAPromiseProps").promiseProps({
              messages: this.processMultipleMessages(
                void 0,
                _,
                c,
                "msgCollectionSearch",
              ),
              eof: p,
              canceled: !1,
            });
          }),
          (a.queryMedia = async function (t, n, r, a, i) {
            var e =
                o("WATypeUtils").isNumber(n) && n !== 0
                  ? n
                  : o("WAWebCollectionConstants").PAGE_SIZE,
              l = r || "before",
              s = { add: "search" },
              u = await o("WAWebDBMessageFindLocal").msgFindMedia({
                count: e,
                mediaType: i,
                direction: l,
                chat: t,
                anchor: a,
              });
            return Array.isArray(u)
              ? this.processMultipleMessages(
                  void 0,
                  u,
                  { add: "search" },
                  "msgCollectionQueryMedia",
                )
              : o("WAPromiseProps").promiseProps({
                  docCount: u.docCount,
                  linkCount: u.linkCount,
                  mediaCount: u.mediaCount,
                  messages: this.processMultipleMessages(
                    void 0,
                    u.messages,
                    s,
                    "msgCollectionQueryMedia",
                  ),
                });
          }),
          (a.getContext = async function (t, n) {
            var e = this,
              a = t.anchor,
              i = a.remote,
              l = this.get(a),
              s = r("WAWebWid").isNewsletter(i);
            if (l != null && !l.fromQuotedMsg)
              return Promise.all([
                o("WAWebDBMessageFindLocal").msgFindBefore({
                  anchor: a,
                  count: t.count,
                  threadId: t.threadId,
                }),
                o("WAWebDBMessageFindLocal").msgFindAfter({
                  anchor: a,
                  count: t.count,
                  threadId: t.threadId,
                }),
              ]).then(async function (r) {
                var a = r[0],
                  u = r[1];
                if ((a.status >= 400 || u.status >= 400) && !s) {
                  if (
                    (o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "model:msg:getContext fetch error",
                        ])),
                    ),
                    a.status >= 400)
                  )
                    throw a.status;
                  if (u.status >= 400) throw u.status;
                }
                var d = a.messages,
                  m = u.messages,
                  p = l.serverId;
                return (
                  (l.search = !1),
                  Promise.all([
                    e.processMultipleMessages(
                      i,
                      !s || p == null
                        ? d
                        : await o(
                            "WAWebNewsletterMsgHistoryUtils",
                          ).fillMsgHistoryGaps({
                            jid: i,
                            msgs: d.concat(
                              o("WAWebMsgDataFromModel").msgDataFromMsgModel(l),
                            ),
                            range: { start: p - t.count, end: p },
                            serverIdsToSkip: o(
                              "WAWebNewsletterViewModeUIUtils",
                            ).getHiddenMessageServerIdsForChat(i),
                          }),
                      { add: "before", isHistory: !0 },
                      "msgCollectionGetContext",
                      n,
                    ),
                    e.processMultipleMessages(
                      i,
                      !s || p == null
                        ? m
                        : await o(
                            "WAWebNewsletterMsgHistoryUtils",
                          ).fillMsgHistoryGaps({
                            jid: i,
                            msgs: [
                              o("WAWebMsgDataFromModel").msgDataFromMsgModel(l),
                            ].concat(m),
                            range: { start: p, end: p + t.count },
                            serverIdsToSkip: o(
                              "WAWebNewsletterViewModeUIUtils",
                            ).getHiddenMessageServerIdsForChat(i),
                          }),
                      { add: "after", isHistory: !0 },
                      "msgCollectionGetContext",
                      n,
                    ),
                  ])
                );
              });
            var u = { add: "after", isHistory: !0 };
            if (!(a instanceof r("WAWebMsgKey"))) return [[], []];
            var _ = await o("WAWebDBMessageFindLocal").msgFindAfter({
              anchor: a,
              count: t.count,
              threadId: t.threadId,
            });
            if (_.status >= 400)
              throw (
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "model:msg:getContext:after fetch error",
                    ])),
                ),
                _.status
              );
            return Promise.resolve(_.messages)
              .then(async function (a) {
                if (r("WAWebWid").isStatus(a[0].id.remote))
                  throw r("err")("status, stop querying before the msg");
                var l = t.serverId;
                return e.processMultipleMessages(
                  i,
                  !s || l == null
                    ? a
                    : await o(
                        "WAWebNewsletterMsgHistoryUtils",
                      ).fillMsgHistoryGaps({
                        jid: i,
                        msgs: a,
                        range: { start: l, end: l + t.count },
                        serverIdsToSkip: o(
                          "WAWebNewsletterViewModeUIUtils",
                        ).getHiddenMessageServerIdsForChat(i),
                      }),
                  u,
                  "msgCollectionFindQuery",
                  n,
                );
              })
              .then(async function (n) {
                var l = r("WANullthrows")(n[0]),
                  u = l.id,
                  c = t.count + 1,
                  d = { add: "before", isHistory: !0 },
                  _ = await o("WAWebDBMessageFindLocal").msgFindBefore({
                    anchor: u,
                    count: c,
                    threadId: t.threadId,
                  });
                if (_.status >= 400)
                  throw (
                    o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "model:msg:getContext:before fetch error",
                        ])),
                    ),
                    _.status
                  );
                var f = _.messages,
                  g = f[f.length - 1];
                g.fromQuotedMsg = !1;
                var h = g.id;
                if (!(a instanceof r("WAWebMsgKey")) || !h.equals(a))
                  throw (
                    o("WALogger").WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "model:msg:getContext:before ctx message mismatch",
                        ])),
                    ),
                    405
                  );
                var y = function () {
                    return l.getMsgChunk();
                  },
                  C = l.serverId;
                return Promise.all([
                  e.processMultipleMessages(
                    i,
                    !s || C == null
                      ? f
                      : await o(
                          "WAWebNewsletterMsgHistoryUtils",
                        ).fillMsgHistoryGaps({
                          jid: i,
                          msgs: f,
                          range: { start: C, end: C - t.count },
                          serverIdsToSkip: o(
                            "WAWebNewsletterViewModeUIUtils",
                          ).getHiddenMessageServerIdsForChat(i),
                        }),
                    d,
                    "msgCollectionFindQuery",
                    y,
                  ),
                  Promise.resolve(n),
                ]);
              });
          }),
          (a.hasSynced = function () {
            return r("WAWebEventsWaitForBbEvent")(
              this,
              o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED,
            );
          }),
          (a.processMultipleMessages = function (t, n, a, i, l, s) {
            var e = this;
            (s === void 0 && (s = !0),
              t != null &&
                t.isRegularUser() &&
                o("WALogger")
                  .LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "processMultipleMessages. processMessageOrigin: ",
                        "",
                      ])),
                    i,
                  )
                  .tags("missing-lid"));
            var u = function () {
              return o(
                "WAWebProcessMultipleMsgsAction",
              )._processMultipleMessages(t, n, a, i, l);
            };
            if (t) {
              var c,
                d = this.pendingAdd[t];
              return (
                d && s ? (c = d.then(u)) : (c = u()),
                c
                  .finally(function () {
                    t && e.pendingAdd[t] === c && (e.pendingAdd[t] = null);
                  })
                  .catch(r("WAWebNoop")),
                (this.pendingAdd[t] = c)
              );
            }
            return u();
          }),
          (a.hasUnsentMessages = function () {
            return this.some(function (e) {
              return (
                e.ack === o("WAWebAck").ACK.CLOCK &&
                e.local &&
                o("WAWebMsgGetters").getIsSentByMe(e)
              );
            });
          }),
          (a.getByEditMsgKey = function (t) {
            var e = this._parentKeyByEditKey.get(t.toString());
            return e && this.get(e);
          }),
          (a.processEditedMessages = function (t) {
            var e = this;
            t.forEach(function (t) {
              if (!(!t || !o("WAWebMsgGetters").getIsEdited(t))) {
                var n = e._editKeyByParentKey.get(t.id.toString());
                n != null && e._parentKeyByEditKey.delete(n);
                var r = t.latestEditMsgKey;
                r &&
                  (e._editKeyByParentKey.set(t.id.toString(), r.toString()),
                  e._parentKeyByEditKey.set(r.toString(), t.id));
              }
            });
          }),
          (a.addInitialBotTypingIndicatorToChat = async function (t, n) {
            var e,
              r = o("WAWebChatCollection").ChatCollection.get(t);
            if (
              !(
                !r ||
                (!(r != null && r.id.isBot()) &&
                  !((e = r.contact.businessProfile) != null && e.isBizBot3p))
              )
            ) {
              if (r.botInitialTypingIndicatorMsgId != null) {
                var a = this.get(r.botInitialTypingIndicatorMsgId);
                if (a == null) return;
                a == null || a.delete({ skipUpdatingSortTime: !0 });
              }
              r.set({ botInitialTypingIndicatorMsgId: n }, { silent: !0 });
              var i = {
                id: n,
                t: o("WATimeUtils").unixTime(),
                from: t,
                to: o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                type: "chat",
                subtype: o("WAWebBotGenTypingIndicatorMsg")
                  .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE,
                body: "",
              };
              this.processMultipleMessages(
                t,
                [babelHelpers.extends({}, i, { recvFresh: !0, isNewMsg: !0 })],
                { add: "after", isHistory: !1 },
                "createChatOnNewMsg",
                null,
                !0,
              );
            }
          }),
          (a.encryptAndClearModels = async function () {
            var e = this._models.map(function (e) {
              return o("WAWebMsgOpaqueData").encryptDataInMsgModel(e);
            });
            await Promise.all(e);
          }),
          (a.decryptAndSetModels = async function (t) {
            var e = this._models.map(function (e) {
              return o("WAWebMsgOpaqueData").decryptDataInMsgModel(e, t);
            });
            await Promise.all(e);
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    g.model = o("WAWebMsgModel").Msg;
    var h = new g();
    ((l.MEDIA_QUERY_LIMIT = f),
      (l.MsgCollectionImpl = g),
      (l.MsgCollection = h));
  },
  98,
);
