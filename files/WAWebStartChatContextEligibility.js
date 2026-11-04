__d(
  "WAWebStartChatContextEligibility",
  [
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebMsgGetters",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 50,
      s = 4;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsMeUser").isMeAccount(e)
            ? "self"
            : (yield o("WAWebApiContact").isAddressBookContact(
                  o("WAWebWidToJid").widToUserJid(e),
                ))
              ? "contact"
              : (yield d(e))
                ? "non_empty_chat"
                : null;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
            e,
          );
          return t == null
            ? !1
            : t.getAllMsgs().some(g)
              ? !0
              : p(t.id, o("WAWebDBMessageUtils").endOfChat(t.id), s);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .between(
              ["internalId"],
              o("WAWebDBMessageUtils").beginningOfChat(t),
              n,
              { limit: e, reverse: !0, upperInclusive: !1 },
            );
          if (a.some(f)) return !0;
          if (a.length < e || r <= 1) return !1;
          var i = a[a.length - 1].internalId;
          return i == null ? !1 : p(t, i, r - 1);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return (
        o("WAWebDBMessageStoreUtils").shouldRenderInUI(e) &&
        g(o("WAWebDBMessageSerialization").messageFromDbRow(e))
      );
    }
    function g(e) {
      return (
        o("WAWebMsgGetters").isRealMessage(e) &&
        !o("WAWebMsgGetters").getIsNotification(e)
      );
    }
    l.getStartChatContextIneligibleReason = u;
  },
  98,
);
