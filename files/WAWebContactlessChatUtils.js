__d(
  "WAWebContactlessChatUtils",
  [
    "fbt",
    "WAPromiseCache",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebChatCollection",
    "WAWebContactQueryService",
    "WAWebContactSyncLogger",
    "WAWebFindChatAction",
    "WAWebHttpErrors",
    "WAWebMsgGetters",
    "WAWebQueryExistsJob",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = /^\+*[\d ()-]+$/;
    async function u(e, t) {
      t === void 0 && (t = !1);
      var n = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(e);
      if (t)
        return (
          n ||
          (
            await o("WAWebFindChatAction").findOrCreateLatestChat(
              e,
              "newChatFlow",
            )
          ).chat
        );
      var r = !!(
        n != null &&
        n.msgs.some(function (e) {
          return (
            o("WAWebMsgGetters").isRealMessage(e) &&
            !o("WAWebUserUtils").isMeAccount(e.senderObj.id)
          );
        })
      );
      return r ? n : null;
    }
    function c() {
      return new (r("WAPromiseCache"))(m, {
        maxCached: 100,
        maxAge: 1 / 0,
        shouldCache: function (t) {
          return !!t;
        },
      });
    }
    function d(e) {
      var t = s._(/*BTDS*/ ""),
        n = s._(/*BTDS*/ "");
      return e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
        e.status === 429
        ? { text: s._(/*BTDS*/ ""), retryStr: null }
        : (e instanceof o("WAWebHttpErrors").HttpNetworkError &&
            (n = s._(/*BTDS*/ "")),
          { text: n, retryStr: t });
    }
    async function m(e) {
      var t,
        n,
        r = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebContactQueryService").ContactQueryService,
              ).queryPhoneExists
            : o("WAWebQueryExistsJob").queryPhoneExists
        )(
          e,
          o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .UNKNOWN_CONTACT_SEARCH,
        ),
        a = r == null ? void 0 : r.wid;
      if (!a) return null;
      var i = !!(r != null && r.biz),
        l = {
          wid: a,
          isBusiness: i,
          verifiedName:
            r == null || (t = r.bizInfo) == null || (t = t.verifiedName) == null
              ? void 0
              : t.name,
          verifiedLevel:
            r == null || (n = r.bizInfo) == null || (n = n.verifiedName) == null
              ? void 0
              : n.level,
          username: r == null ? void 0 : r.username,
          searchQuery: e,
        },
        s = await u(a, i),
        c = babelHelpers.extends({ chat: s }, l, { isUsernameSearch: !1 });
      return c;
    }
    ((l.PHONE_NUMBER_VALIDATION_REGEX = e),
      (l.getChatByWid = u),
      (l.queryExistsAndGetChatCached = c),
      (l.getErrorStr = d),
      (l.queryExistsAndGetChat = m));
  },
  226,
);
