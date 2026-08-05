__d(
  "WAWebChatMessageSearch",
  [
    "WAWebBizAiAgentStatusUtils",
    "WAWebChatAssignmentUtils",
    "WAWebChatConstants",
    "WAWebChatGetters",
    "WAWebChatLoadMessages",
    "WAWebChatMsgsCollection",
    "WAWebChatSearchFilters",
    "WAWebCollectionConstants",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupType",
    "WAWebMessageAssociation.flow",
    "WAWebMsgCollection",
    "WAWebMsgCountReporter",
    "WAWebProtobufsE2E.pb",
    "WAWebStateUtils",
    "WAWebThreadModelResolver",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamEnumWebcQueryTriggerType",
    "isEmptyObject",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t,
        n,
        a,
        i = e.chat,
        l = e.msgKey,
        s = e.rootMsg,
        u = e.threadId,
        c = o("WAWebStateUtils").unproxy(i),
        d = o("WAWebMsgCollection").MsgCollection.get(l),
        m = l,
        p = s,
        _ = (t = d) == null ? void 0 : t.parentMsgKey;
      _ &&
        ((n = d) == null ? void 0 : n.associationType) ===
          o("WAWebMessageAssociation.flow").MessageAssociationType
            .MEDIA_ALBUM &&
        !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
          (a = d) == null ? void 0 : a.viewMode,
        ) &&
        ((d = o("WAWebMsgCollection").MsgCollection.get(_)), (m = _), (p = d));
      var f = o("WAWebThreadModelResolver").resolveThreadOrChat(c, u),
        g = f !== c,
        h = g ? u : void 0,
        y = d != null ? d.getMsgChunk(h) : void 0,
        C = Math.trunc((o("WAWebCollectionConstants").PAGE_SIZE / 3) * 2);
      if (!y || !y.msgLoadState.contextLoaded) {
        var b;
        y ||
          ((y = new (o("WAWebChatMsgsCollection").ChatMsgsCollection)()),
          h != null && (y.threadId = h),
          f.msgChunks.push(y),
          d && y.add(d));
        var v = {
            anchor: d != null ? d.id : m,
            count: C,
            serverId: (b = d) == null ? void 0 : b.serverId,
            threadId: h,
          },
          S = function () {
            if (d) return d.getMsgChunk(h);
            if (m != null) {
              var e,
                t = o("WAWebMsgCollection").MsgCollection.get(m);
              return (e = t == null ? void 0 : t.getMsgChunk(h)) != null
                ? e
                : y;
            }
            return y;
          },
          R = o("WAWebMsgCountReporter").newMessageQueryEvent(
            o("WAWebWamEnumWebcQueryTriggerType").WEBC_QUERY_TRIGGER_TYPE
              .SEARCH_RESULT_CLICK,
          );
        o("WAWebChatLoadMessages")
          .loadMsgsPromiseLoop(
            c,
            d,
            y,
            function () {
              return o("WAWebMsgCollection").MsgCollection.getContext(v, S);
            },
            "around",
            R,
            p == null,
          )
          .then(function (e) {
            var t = S();
            t &&
              y &&
              t !== y &&
              f.notifyMsgCollectionMerge({ cmc1: t, cmc2: y, cmcResult: t });
            var n = e[0],
              a = m ? o("WAWebMsgCollection").MsgCollection.get(m) : d;
            if (a && Array.isArray(n) && n.length < C) {
              var i = a.getMsgChunk(h);
              ((r("nullthrows")(i).msgLoadState.noEarlierMsgs =
                c.endOfHistoryTransferType !==
                o("WAWebChatConstants")
                  .ConversationEndOfHistoryTransferModelPropType.INCOMPLETE),
                y &&
                  i !== y &&
                  (y.msgLoadState.noEarlierMsgs =
                    c.endOfHistoryTransferType !==
                    o("WAWebChatConstants")
                      .ConversationEndOfHistoryTransferModelPropType
                      .INCOMPLETE));
            }
          })
          .catch(function () {
            p && (p.isQuotedMsgAvailable = !1);
          });
      }
      return { collection: y, msg: d, key: m, highlightMsg: !0 };
    }
    function u(e) {
      var t = e.chat,
        n = e.count,
        r = e.page,
        a = r === void 0 ? 1 : r,
        i = e.searchTerm,
        l = o("WAWebStateUtils").unproxy(t);
      if (a === 1) {
        var s = l.ftsCache[i];
        if (s) return s;
        var u = o("WAWebMsgCollection").MsgCollection.search(i, a, n, l.id);
        l.ftsCache[i] = u;
        var c = function () {
          l.ftsCache[i] = null;
        };
        return (
          self.setTimeout(c, o("WAWebChatConstants").FTS_TTL),
          u.catch(c),
          u
        );
      }
      return o("WAWebMsgCollection").MsgCollection.search(i, a, n, l.id);
    }
    function c(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      t.ftsCache = {};
    }
    function d(e) {
      return (
        (!!o("WAWebChatGetters").getHasUnread(e) &&
          !o("WAWebChatGetters").getIsBroadcast(e)) ||
        (o("WAWebChatAssignmentUtils").canAssignChats() &&
          e.isAssignedToMe &&
          e.unopenedByAssignedAgent)
      );
    }
    function m(e) {
      return (
        o("WAWebFrontendContactGetters").getIsMyContact(e.contact) &&
        !o("WAWebContactGetters").getIsGroup(e.contact) &&
        !o("WAWebChatGetters").getIsBroadcast(e)
      );
    }
    function p(e) {
      return (
        !o("WAWebFrontendContactGetters").getIsMyContact(e.contact) &&
        !o("WAWebContactGetters").getIsGroup(e.contact) &&
        !o("WAWebChatGetters").getIsBroadcast(e)
      );
    }
    function _(e) {
      var t,
        n = (t = e.groupMetadata) == null ? void 0 : t.groupType;
      return (
        o("WAWebContactGetters").getIsGroup(e.contact) &&
        (n === o("WAWebGroupType").GroupType.COMMUNITY ||
          n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
          n === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
          n === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP)
      );
    }
    function f(e) {
      return (
        e.capiThreadControl ===
          o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_PASSED &&
        o("WAWebBizAiAgentStatusUtils").shouldShowAiChipsForChat(e)
      );
    }
    var g = new Map([
      [(e = o("WAWebChatSearchFilters")).SearchFilters.UNREAD, d],
      [
        e.SearchFilters.FAVORITES,
        function (e) {
          return e.isFavorite;
        },
      ],
      [
        e.SearchFilters.CHANNELS,
        function (e) {
          var t;
          return (
            ((t = e.newsletterMetadata) == null
              ? void 0
              : t.isSubscribedOrOwned) === !0 && !e.archive
          );
        },
      ],
      [e.SearchFilters.CONTACT, m],
      [e.SearchFilters.NON_CONTACT, p],
      [
        e.SearchFilters.ASSIGNED_TO_YOU,
        function (e) {
          return (
            o("WAWebChatAssignmentUtils").canAssignChats() && e.isAssignedToMe
          );
        },
      ],
      [e.SearchFilters.COMMUNITY, _],
      [
        e.SearchFilters.AI_RESPONDING,
        function (e) {
          return (
            e.capiThreadControl ===
              o("WAWebProtobufsE2E.pb")
                .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                .CONTROL_TAKEN &&
            o("WAWebBizAiAgentStatusUtils").shouldShowAiChipsForChat(e)
          );
        },
      ],
      [e.SearchFilters.AI_HANDOFF, f],
      [
        e.SearchFilters.TO_YOU,
        function (e) {
          return (
            o("WAWebContactGetters").getIsGroup(e.contact) &&
            e.hasUnreadMention &&
            !e.archive
          );
        },
      ],
    ]);
    function h(e, t) {
      t === void 0 && (t = {});
      var n = o("WAWebStateUtils").unproxy(e);
      if (r("isEmptyObject")(t)) return !0;
      if (t.label != null && t.label !== "")
        return n.labels != null && n.labels.includes(t.label);
      var a = t.kind != null ? g.get(t.kind) : null;
      if (a != null) return a(n);
      var i = o("WAWebFrontendChatGetters").getKind(n);
      return (
        i != null &&
        t.kind === o("WAWebChatSearchFilters").SearchFilters.cast(i)
      );
    }
    ((l.getSearchContext = s),
      (l.fts = u),
      (l.clearFtsCache = c),
      (l.matchFilter = h));
  },
  98,
);
