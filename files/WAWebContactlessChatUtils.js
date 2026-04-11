__d(
  "WAWebContactlessChatUtils",
  [
    "fbt",
    "WAPromiseCache",
    "WAWebBackendErrors",
    "WAWebChatCollection",
    "WAWebContactSyncLogger",
    "WAWebFindChatAction",
    "WAWebHttpErrors",
    "WAWebMsgGetters",
    "WAWebQueryExistsJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = /^\+*[\d ()-]+$/;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var n = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
            e,
          );
          if (t)
            return (
              n ||
              (yield o("WAWebFindChatAction").findOrCreateLatestChat(
                e,
                "newChatFlow",
              )).chat
            );
          var r = !!(
            n != null &&
            n.msgs.some(function (e) {
              return (
                o("WAWebMsgGetters").isRealMessage(e) &&
                !o("WAWebUserPrefsMeUser").isMeAccount(e.senderObj.id)
              );
            })
          );
          return r ? n : null;
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return new (r("WAPromiseCache"))(p, {
        maxCached: 100,
        maxAge: 1 / 0,
        shouldCache: function (t) {
          return !!t;
        },
      });
    }
    function m(e) {
      var t = s._(/*BTDS*/ "Retry"),
        n = s._(/*BTDS*/ "Something went wrong. Please try again.");
      return e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
        e.status === 429
        ? {
            text: s._(/*BTDS*/ "Something went wrong. Try again later."),
            retryStr: null,
          }
        : (e instanceof o("WAWebHttpErrors").HttpNetworkError &&
            (n = s._(/*BTDS*/ "Unable to connect to the internet.")),
          { text: n, retryStr: t });
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = yield o("WAWebQueryExistsJob").queryPhoneExists(
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
                r == null ||
                (t = r.bizInfo) == null ||
                (t = t.verifiedName) == null
                  ? void 0
                  : t.name,
              verifiedLevel:
                r == null ||
                (n = r.bizInfo) == null ||
                (n = n.verifiedName) == null
                  ? void 0
                  : n.level,
              username: r == null ? void 0 : r.username,
              searchQuery: e,
            },
            s = yield u(a, i),
            c = babelHelpers.extends({ chat: s }, l, { isUsernameSearch: !1 });
          return c;
        })),
        _.apply(this, arguments)
      );
    }
    ((l.PHONE_NUMBER_VALIDATION_REGEX = e),
      (l.getChatByWid = u),
      (l.queryExistsAndGetChatCached = d),
      (l.getErrorStr = m),
      (l.queryExistsAndGetChat = p));
  },
  226,
);
