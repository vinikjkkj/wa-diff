__d(
  "WAWebMsgCollection",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      f,
      g = 50,
      h = (function (t) {
        function a() {
          var a;
          return (
            (a = t.call(this) || this),
            (a.pendingAdd = {}),
            (a.ftsCache = {}),
            (a.productListMessagesPrefetchChain = (
              f || (f = n("Promise"))
            ).resolve([])),
            (a._editKeyByParentKey = new Map()),
            (a._parentKeyByEditKey = new Map()),
            (a._encryptedData = null),
            (a.loadMessagesQuery = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var i = a,
                    l = t.anchor,
                    u = l.remote,
                    c;
                  switch (t.direction) {
                    case "before":
                    case "after":
                      c = t.direction;
                      break;
                    default:
                      c = "before";
                      break;
                  }
                  var d = { add: c, isHistory: !0 },
                    m = yield o("WAWebDBMessageFindLocal").msgFindByDirection({
                      direction: c,
                      anchor: l,
                      count: t.count,
                      threadId: t.threadId,
                    });
                  if (m.status >= 400)
                    return (
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "model:Msg:findQuery error ",
                            "",
                          ])),
                        m.status,
                      ),
                      (f || (f = n("Promise"))).reject(m.status)
                    );
                  var p = m.messages,
                    _ = i.get(l);
                  r("WAWebWid").isNewsletter(u) &&
                    _ != null &&
                    (p = yield o(
                      "WAWebNewsletterMsgHistoryUtils",
                    ).fillMsgHistoryGaps({
                      jid: u,
                      msgs:
                        c === "before"
                          ? p.concat(
                              o("WAWebMsgDataFromModel").msgDataFromMsgModel(_),
                            )
                          : [
                              o("WAWebMsgDataFromModel").msgDataFromMsgModel(_),
                            ].concat(p),
                      serverIdsToSkip: o(
                        "WAWebNewsletterViewModeUIUtils",
                      ).getHiddenMessageServerIdsForChat(u),
                    }));
                  var g = t.threadId,
                    h = function () {
                      var e = i.get(l);
                      if (e != null)
                        return g != null ? e.getMsgChunk(g) : e.getMsgChunk();
                      var t = o("WAWebChatCollection").ChatCollection.get(u);
                      if (t != null)
                        return o(
                          "WAWebThreadModelResolver",
                        ).resolveThreadOrChat(t, g).msgs;
                    };
                  return (
                    p.forEach(function (e) {
                      e.invis = !0;
                    }),
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "model:Msg:findQuery:got:",
                          ":",
                          "",
                        ])),
                      p.length,
                      t.direction,
                    ),
                    i.processMultipleMessages(
                      u,
                      p,
                      d,
                      "msgCollectionFindQuery",
                      h,
                    )
                  );
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            (a.findQueryImpl = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = { anchor: e, count: e.count, serverId: e.serverId };
                  return a.loadMessagesQuery(t);
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (a.byParentMessage = o("WAWebCollectionUtils").aggregated(
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
            (a.byChat = o("WAWebCollectionUtils").aggregated(function (e) {
              var t = e.id;
              return t.remote;
            })),
            (a.byThreadId = o("WAWebCollectionUtils").aggregated(function (e) {
              var t = e.threadIds;
              return t;
            })),
            a.listenTo(a, "remove", a.removeFromCollection),
            a
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.removeFromCollection = function (t) {
            var e = o("WAWebFrontendMsgGetters").getMaybeChat(t);
            e == null || e.removeFromCollection(t);
          }),
          (i.add = function (n, a) {
            var e = Array.isArray(n) ? n : [n],
              i = e.filter(function (e) {
                if (e.ephemeralDuration == null || e.ephemeralDuration === 0)
                  return !0;
                var t = new (o("WAWebMsgModel").Msg)(e);
                return !o("WAWebKeepInChatMsgUtils").isExpiredAndNotKept(t);
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
          (i.makeParentMessagesVisibleInChat = function (t) {
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
          (i.processVCardMessagesForLidMappings = function (t) {
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
          (i._prefetchProductListMessages = function (t) {
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
          (i.getStarred = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r =
                    typeof t == "number" && !isNaN(t)
                      ? t
                      : o("WAWebCollectionConstants").PAGE_SIZE,
                  a = { add: "search" },
                  i = yield o("WAWebDBMessageFindLocal").msgFindStarred({
                    count: r,
                    chat: e != null ? e : void 0,
                    anchor: n,
                  });
                return this.processMultipleMessages(
                  void 0,
                  i,
                  a,
                  "msgCollectionGetStarred",
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getEventMsgs = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r =
                    typeof t == "number" && !Number.isNaN(t)
                      ? t
                      : o("WAWebCollectionConstants").PAGE_SIZE,
                  a = { add: "search" },
                  i = yield o("WAWebDBMessageFindLocal").msgFindEvents({
                    count: r,
                    chat: e,
                    anchor: n,
                  });
                return this.processMultipleMessages(
                  void 0,
                  i,
                  a,
                  "msgCollectionGetEvents",
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getGroupMemberUpdateMsgs = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r =
                    typeof t == "number" && !Number.isNaN(t)
                      ? t
                      : o("WAWebCollectionConstants").PAGE_SIZE,
                  a = { add: "search" },
                  i = yield o(
                    "WAWebDBGetGroupMemberUpdateMessages",
                  ).getGroupMemberUpdateMessagesForChat(e, r, n);
                return this.processMultipleMessages(
                  void 0,
                  i,
                  a,
                  "msgCollectionGetGroupMemberUpdates",
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getVoipCallLogMsgs = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n =
                    typeof e == "number" && !isNaN(e)
                      ? e
                      : o("WAWebCollectionConstants").PAGE_SIZE,
                  r = yield o("WAWebDBMessageFindLocal").msgFindCallLog({
                    count: n,
                    anchor: t,
                  });
                return this.processMultipleMessages(
                  void 0,
                  r,
                  { add: "search" },
                  "msgCollectionGetVoipCallLogs",
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getAllDocsMsgs = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = e != null ? e : g,
                  a = n === "after" ? "after" : "before",
                  i = yield o("WAWebDBMessageFindLocal").getAllDocsMessages(
                    r,
                    t,
                    a,
                    t == null ? void 0 : t.remote,
                  );
                return this.processMultipleMessages(
                  void 0,
                  i,
                  { add: "search" },
                  "msgCollectionGetAllMedia",
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getMessagesById = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(e);
                return o("WAPromiseProps").promiseProps({
                  messages: this.processMultipleMessages(
                    void 0,
                    t,
                    { add: "search" },
                    "msgCollectionGetMessagesById",
                  ),
                  eof: !0,
                  canceled: !1,
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.hydrateOrGetMessages = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = e.filter(function (e) {
                    return !t.get(e);
                  });
                if (n.length > 0) {
                  var a = yield this.getMessagesById(n),
                    i = a.messages;
                  if (i.length !== n.length)
                    throw new (o(
                      "WAWebBaseCollection",
                    ).CollectionSilentQueryError)(
                      "No message found for one or more ids",
                    );
                }
                return e.map(function (e) {
                  return r("WANullthrows")(t.get(e));
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.incrementalStarredUpdate = function (t) {
            return this.processMultipleMessages(
              void 0,
              t,
              { add: "search" },
              "msgCollectionIncrementalStarredUpdate",
            );
          }),
          (i.search = function (t, n, r, a, i) {
            var e = this;
            (n === void 0 && (n = 1), i === void 0 && (i = {}));
            var l = t + "__" + (i.label || (i.kind && i.kind) || "");
            if (n === 1 && !a) {
              var s = this.ftsCache[l];
              if (s) return s;
              var u = this._search(t, n, r, a, i.label, i.kind);
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
            return this._search(t, n, r, a, i.label, i.kind);
          }),
          (i._search = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r, a, i, l) {
                var s = {
                    searchTerm: e,
                    page: o("WATypeUtils").isNumber(t) && t !== 0 ? t : 1,
                    count:
                      o("WATypeUtils").isNumber(r) && r !== 0
                        ? r
                        : o("WAWebCollectionConstants").PAGE_SIZE,
                    remote: a,
                    tagToCancel: a ? this.pendingSearchTag : void 0,
                    label: i,
                    kind: l,
                  },
                  c = { add: "search" },
                  d;
                try {
                  d = yield o("WAWebDBMessageFindLocal").msgFindSearch(s);
                } catch (e) {
                  throw (o("WAWebCoreActionsODS").logGlobalSearchError(), e);
                }
                if (
                  (s.tagToCancel === this.pendingSearchTag &&
                    (this.pendingSearchTag = void 0),
                  d.status === 499)
                )
                  return o("WAPromiseProps").promiseProps({
                    messages: (f || (f = n("Promise"))).resolve([]),
                    eof: !1,
                    canceled: !0,
                  });
                if (d.status === 404)
                  return (
                    o("WAWebCoreActionsODS").logGlobalSearchError(),
                    (f || (f = n("Promise"))).reject(
                      new (o("WAWebBackendErrors").E404)(),
                    )
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
                    (f || (f = n("Promise"))).reject(
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
              },
            );
            function t(t, n, r, o, a, i) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.queryMedia = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, a) {
                var i =
                    o("WATypeUtils").isNumber(t) && t !== 0
                      ? t
                      : o("WAWebCollectionConstants").PAGE_SIZE,
                  l = n || "before",
                  s = { add: "search" },
                  u = yield o("WAWebDBMessageFindLocal").msgFindMedia({
                    count: i,
                    mediaType: a,
                    direction: l,
                    chat: e,
                    anchor: r,
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
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getContext = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var a = this,
                  i = e.anchor,
                  l = i.remote,
                  s = this.get(i),
                  u = r("WAWebWid").isNewsletter(l);
                if (s != null && !s.fromQuotedMsg)
                  return (f || (f = n("Promise")))
                    .all([
                      o("WAWebDBMessageFindLocal").msgFindBefore({
                        anchor: i,
                        count: e.count,
                        threadId: e.threadId,
                      }),
                      o("WAWebDBMessageFindLocal").msgFindAfter({
                        anchor: i,
                        count: e.count,
                        threadId: e.threadId,
                      }),
                    ])
                    .then(
                      (function () {
                        var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (r) {
                            var i = r[0],
                              d = r[1];
                            if ((i.status >= 400 || d.status >= 400) && !u) {
                              if (
                                (o("WALogger").WARN(
                                  c ||
                                    (c =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "model:msg:getContext fetch error",
                                      ])),
                                ),
                                i.status >= 400)
                              )
                                throw i.status;
                              if (d.status >= 400) throw d.status;
                            }
                            var m = i.messages,
                              p = d.messages,
                              _ = s.serverId;
                            return (
                              (s.search = !1),
                              (f || (f = n("Promise"))).all([
                                a.processMultipleMessages(
                                  l,
                                  !u || _ == null
                                    ? m
                                    : yield o(
                                        "WAWebNewsletterMsgHistoryUtils",
                                      ).fillMsgHistoryGaps({
                                        jid: l,
                                        msgs: m.concat(
                                          o(
                                            "WAWebMsgDataFromModel",
                                          ).msgDataFromMsgModel(s),
                                        ),
                                        range: { start: _ - e.count, end: _ },
                                        serverIdsToSkip: o(
                                          "WAWebNewsletterViewModeUIUtils",
                                        ).getHiddenMessageServerIdsForChat(l),
                                      }),
                                  { add: "before", isHistory: !0 },
                                  "msgCollectionGetContext",
                                  t,
                                ),
                                a.processMultipleMessages(
                                  l,
                                  !u || _ == null
                                    ? p
                                    : yield o(
                                        "WAWebNewsletterMsgHistoryUtils",
                                      ).fillMsgHistoryGaps({
                                        jid: l,
                                        msgs: [
                                          o(
                                            "WAWebMsgDataFromModel",
                                          ).msgDataFromMsgModel(s),
                                        ].concat(p),
                                        range: { start: _, end: _ + e.count },
                                        serverIdsToSkip: o(
                                          "WAWebNewsletterViewModeUIUtils",
                                        ).getHiddenMessageServerIdsForChat(l),
                                      }),
                                  { add: "after", isHistory: !0 },
                                  "msgCollectionGetContext",
                                  t,
                                ),
                              ])
                            );
                          },
                        );
                        return function (e) {
                          return r.apply(this, arguments);
                        };
                      })(),
                    );
                var _ = { add: "after", isHistory: !0 };
                if (!(i instanceof r("WAWebMsgKey"))) return [[], []];
                var g = yield o("WAWebDBMessageFindLocal").msgFindAfter({
                  anchor: i,
                  count: e.count,
                  threadId: e.threadId,
                });
                if (g.status >= 400)
                  throw (
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "model:msg:getContext:after fetch error",
                        ])),
                    ),
                    g.status
                  );
                return (f || (f = n("Promise")))
                  .resolve(g.messages)
                  .then(
                    (function () {
                      var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (n) {
                          if (r("WAWebWid").isStatus(n[0].id.remote))
                            throw r("err")(
                              "status, stop querying before the msg",
                            );
                          var i = e.serverId;
                          return a.processMultipleMessages(
                            l,
                            !u || i == null
                              ? n
                              : yield o(
                                  "WAWebNewsletterMsgHistoryUtils",
                                ).fillMsgHistoryGaps({
                                  jid: l,
                                  msgs: n,
                                  range: { start: i, end: i + e.count },
                                  serverIdsToSkip: o(
                                    "WAWebNewsletterViewModeUIUtils",
                                  ).getHiddenMessageServerIdsForChat(l),
                                }),
                            _,
                            "msgCollectionFindQuery",
                            t,
                          );
                        },
                      );
                      return function (e) {
                        return i.apply(this, arguments);
                      };
                    })(),
                  )
                  .then(
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t) {
                          var s = r("WANullthrows")(t[0]),
                            c = s.id,
                            d = e.count + 1,
                            _ = { add: "before", isHistory: !0 },
                            g = yield o(
                              "WAWebDBMessageFindLocal",
                            ).msgFindBefore({
                              anchor: c,
                              count: d,
                              threadId: e.threadId,
                            });
                          if (g.status >= 400)
                            throw (
                              o("WALogger").WARN(
                                m ||
                                  (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "model:msg:getContext:before fetch error",
                                  ])),
                              ),
                              g.status
                            );
                          var h = g.messages,
                            y = h[h.length - 1];
                          y.fromQuotedMsg = !1;
                          var C = y.id;
                          if (!(i instanceof r("WAWebMsgKey")) || !C.equals(i))
                            throw (
                              o("WALogger").WARN(
                                p ||
                                  (p = babelHelpers.taggedTemplateLiteralLoose([
                                    "model:msg:getContext:before ctx message mismatch",
                                  ])),
                              ),
                              405
                            );
                          var b = function () {
                              return s.getMsgChunk();
                            },
                            v = s.serverId;
                          return (f || (f = n("Promise"))).all([
                            a.processMultipleMessages(
                              l,
                              !u || v == null
                                ? h
                                : yield o(
                                    "WAWebNewsletterMsgHistoryUtils",
                                  ).fillMsgHistoryGaps({
                                    jid: l,
                                    msgs: h,
                                    range: { start: v, end: v - e.count },
                                    serverIdsToSkip: o(
                                      "WAWebNewsletterViewModeUIUtils",
                                    ).getHiddenMessageServerIdsForChat(l),
                                  }),
                              _,
                              "msgCollectionFindQuery",
                              b,
                            ),
                            f.resolve(t),
                          ]);
                        },
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.hasSynced = function () {
            return r("WAWebEventsWaitForBbEvent")(
              this,
              o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED,
            );
          }),
          (i.processMultipleMessages = function (t, n, a, i, l, s) {
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
          (i.hasUnsentMessages = function () {
            return this.some(function (e) {
              return (
                e.ack === o("WAWebAck").ACK.CLOCK &&
                e.local &&
                o("WAWebMsgGetters").getIsSentByMe(e)
              );
            });
          }),
          (i.getByEditMsgKey = function (t) {
            var e = this._parentKeyByEditKey.get(t.toString());
            return e && this.get(e);
          }),
          (i.processEditedMessages = function (t) {
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
          (i.addInitialBotTypingIndicatorToChat = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n,
                  r = o("WAWebChatCollection").ChatCollection.get(e);
                if (
                  !(
                    !r ||
                    (!(r != null && r.id.isBot()) &&
                      !(
                        (n = r.contact.businessProfile) != null && n.isBizBot3p
                      ))
                  )
                ) {
                  if (r.botInitialTypingIndicatorMsgId != null) {
                    var a = this.get(r.botInitialTypingIndicatorMsgId);
                    if (a == null) return;
                    a == null || a.delete({ skipUpdatingSortTime: !0 });
                  }
                  r.set({ botInitialTypingIndicatorMsgId: t }, { silent: !0 });
                  var i = {
                    id: t,
                    t: o("WATimeUtils").unixTime(),
                    from: e,
                    to: o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                    type: "chat",
                    subtype: o("WAWebBotGenTypingIndicatorMsg")
                      .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE,
                    body: "",
                  };
                  this.processMultipleMessages(
                    e,
                    [
                      babelHelpers.extends({}, i, {
                        recvFresh: !0,
                        isNewMsg: !0,
                      }),
                    ],
                    { add: "after", isHistory: !1 },
                    "createChatOnNewMsg",
                    null,
                    !0,
                  );
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.encryptAndClearModels = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this._models.map(function (e) {
                return o("WAWebMsgOpaqueData").encryptDataInMsgModel(e);
              });
              yield (f || (f = n("Promise"))).all(e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.decryptAndSetModels = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this._models.map(function (t) {
                  return o("WAWebMsgOpaqueData").decryptDataInMsgModel(t, e);
                });
                yield (f || (f = n("Promise"))).all(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    h.model = o("WAWebMsgModel").Msg;
    var y = new h();
    ((l.MEDIA_QUERY_LIMIT = g),
      (l.MsgCollectionImpl = h),
      (l.MsgCollection = y));
  },
  98,
);
