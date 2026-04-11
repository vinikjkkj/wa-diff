__d(
  "WAWebChatMessageSearch",
  [
    "WANullthrows",
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
    "WAWebStateUtils",
    "WAWebThreadModelResolver",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamEnumWebcQueryTriggerType",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
            t && y && t !== y && f.notifyMsgCollectionMerge(t, y, t);
            var n = e[0],
              a = m ? o("WAWebMsgCollection").MsgCollection.get(m) : d;
            if (a && Array.isArray(n) && n.length < C) {
              var i = a.getMsgChunk(h);
              ((r("WANullthrows")(i).msgLoadState.noEarlierMsgs =
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
    function s(e, t, n, r) {
      n === void 0 && (n = 1);
      var a = o("WAWebStateUtils").unproxy(e);
      if (n === 1) {
        var i = a.ftsCache[t];
        if (i) return i;
        var l = o("WAWebMsgCollection").MsgCollection.search(t, n, r, a.id);
        a.ftsCache[t] = l;
        var s = function () {
          a.ftsCache[t] = null;
        };
        return (
          self.setTimeout(s, o("WAWebChatConstants").FTS_TTL),
          l.catch(s),
          l
        );
      }
      return o("WAWebMsgCollection").MsgCollection.search(t, n, r, a.id);
    }
    function u(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      t.ftsCache = {};
    }
    function c(e) {
      return (
        (!!o("WAWebChatGetters").getHasUnread(e) &&
          !o("WAWebChatGetters").getIsBroadcast(e)) ||
        (o("WAWebChatAssignmentUtils").canAssignChats() &&
          e.isAssignedToMe &&
          e.unopenedByAssignedAgent)
      );
    }
    function d(e, t) {
      t === void 0 && (t = {});
      var n = o("WAWebStateUtils").unproxy(e);
      if (r("isEmptyObject")(t)) return !0;
      if (t.label) return n.labels != null && n.labels.includes(t.label);
      if (t.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD)
        return c(n);
      if (t.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES)
        return n.isFavorite;
      if (t.kind === o("WAWebChatSearchFilters").SearchFilters.CHANNELS) {
        var a;
        return (
          ((a = n.newsletterMetadata) == null
            ? void 0
            : a.isSubscribedOrOwned) === !0 && !n.archive
        );
      }
      if (t.kind === o("WAWebChatSearchFilters").SearchFilters.CONTACT)
        return (
          o("WAWebFrontendContactGetters").getIsMyContact(n.contact) &&
          !o("WAWebContactGetters").getIsGroup(n.contact) &&
          !o("WAWebChatGetters").getIsBroadcast(n)
        );
      if (t.kind === o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT)
        return (
          !o("WAWebFrontendContactGetters").getIsMyContact(n.contact) &&
          !o("WAWebContactGetters").getIsGroup(n.contact) &&
          !o("WAWebChatGetters").getIsBroadcast(n)
        );
      if (t.kind === o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU)
        return (
          o("WAWebChatAssignmentUtils").canAssignChats() && n.isAssignedToMe
        );
      if (t.kind === o("WAWebChatSearchFilters").SearchFilters.COMMUNITY) {
        var i,
          l = (i = n.groupMetadata) == null ? void 0 : i.groupType;
        return (
          o("WAWebContactGetters").getIsGroup(n.contact) &&
          (l === o("WAWebGroupType").GroupType.COMMUNITY ||
            l === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
            l === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
            l === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP)
        );
      }
      var s = o("WAWebFrontendChatGetters").getKind(n);
      return (
        s != null &&
        t.kind === o("WAWebChatSearchFilters").SearchFilters.cast(s)
      );
    }
    ((l.getSearchContext = e),
      (l.fts = s),
      (l.clearFtsCache = u),
      (l.matchFilter = d));
  },
  98,
);
