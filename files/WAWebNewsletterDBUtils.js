__d(
  "WAWebNewsletterDBUtils",
  [
    "WATimeUtils",
    "WAWebApiChatCommon",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebJidToWid",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterDBConstants",
    "WAWebSchemaMessage",
    "WAWebSchemaNewsletterMetadata",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return (
        (await o("WAWebApiChatCommon").getChatRecord(
          o("WAWebJidToWid").newsletterJidToWid(e),
        )) != null
      );
    }
    async function s(e) {
      var t = await o("WAWebSchemaNewsletterMetadata")
        .getNewsletterMetadataTable()
        .get(e);
      return (
        t == null ||
        t.membershipType ===
          o("WAWebNewsletterDBConstants").NewsletterDBMembership.Guest
      );
    }
    async function u(e) {
      var t = await o("WAWebSchemaNewsletterMetadata")
          .getNewsletterMetadataTable()
          .bulkGet(Array.from(new Set(e))),
        n = new Set();
      return (
        t.forEach(function (e) {
          e != null &&
            e.membershipType ===
              o("WAWebNewsletterDBConstants").NewsletterDBMembership.Guest &&
            n.add(e.id);
        }),
        n
      );
    }
    async function c(e) {
      var t = await s(e);
      return !t;
    }
    async function d() {
      var e = await o("WAWebSchemaNewsletterMetadata")
        .getNewsletterMetadataTable()
        .all();
      return e.some(function (e) {
        var t = e.membershipType;
        return (
          t !== o("WAWebNewsletterDBConstants").NewsletterDBMembership.Guest
        );
      });
    }
    var m = Number.MAX_SAFE_INTEGER - 1e4;
    async function p(e, t, n) {
      n === void 0 && (n = o("WAWebDBMessageUtils").InternalIdPrefix.Default);
      var r = o("WAWebDBMessageUtils").craftInternalId({
          chatId: t,
          inChatMsgId: e,
          internalIdPrefix: n,
        }),
        a = await o("WAWebSchemaMessage")
          .getMessageTable()
          .anyOf(["internalId"], [r]),
        i = a[0];
      return i == null
        ? null
        : o("WAWebDBMessageSerialization").messageFromDbRow(i);
    }
    async function _(e, t, n) {
      n === void 0 && (n = o("WAWebDBMessageUtils").InternalIdPrefix.Default);
      var r = new Map(),
        a = new Map(
          e.map(function (e) {
            return [
              o("WAWebDBMessageUtils").craftInternalId({
                chatId: t,
                inChatMsgId: e,
                internalIdPrefix: n,
              }),
              e,
            ];
          }),
        ),
        i = await o("WAWebSchemaMessage")
          .getMessageTable()
          .anyOf(["internalId"], Array.from(a.keys()));
      return (
        i.forEach(function (e) {
          if (e.internalId != null) {
            var t = a.get(e.internalId);
            t != null &&
              r.set(t, o("WAWebDBMessageSerialization").messageFromDbRow(e));
          }
        }),
        r
      );
    }
    function f(e, t) {
      var n =
        t instanceof r("WAWebWid") ? t : o("WAWebWidFactory").createWid(t);
      return new (r("WAWebMsgKey"))({
        remote: n,
        fromMe: !0,
        id: e.toString(10),
      });
    }
    async function g(e, t) {
      t === void 0 && (t = o("WAWebDBMessageUtils").InternalIdPrefix.Default);
      var n = o("WAWebDBMessageUtils").craftInternalId({
          chatId: e.toJid(),
          inChatMsgId: m,
          internalIdPrefix: t,
        }),
        r = "" + t + o("WAWebDBMessageUtils").endOfChat(e),
        a = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], n, r, {
            lowerInclusive: !0,
            upperInclusive: !1,
            limit: 1,
            reverse: !0,
          });
      if (a.length === 0 || a[0].internalId == null) return m;
      var i = o("WAWebDBMessageUtils").getInChatMsgId(a[0].internalId);
      return Math.min(i + 1, Number.MAX_SAFE_INTEGER);
    }
    async function h(e) {
      var t = await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkGet(e.map(String)),
        n = t.filter(Boolean).map(function (e) {
          return { id: e.id, viewed: !0 };
        });
      await o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(n);
    }
    async function y(e, t) {
      var n = await o("WAWebDBMsgUtils").getMsgsByChatId(t),
        r = o("WATimeUtils").unixTime(),
        a = n
          .filter(function (e) {
            return (
              e.type === o("WAWebMsgType").MSG_TYPE.NEWSLETTER_ADMIN_INVITE
            );
          })
          .map(function (e) {
            return o("WAWebDBMessageSerialization").messageFromDbRow(e);
          });
      return a.filter(function (t) {
        var n,
          o = (n = t.newsletterAdminInviteInfo) != null ? n : {},
          a = o.inviteExpiration,
          i = o.newsletterId;
        return i == null || a == null ? !1 : r < a && e.equals(i);
      });
    }
    ((l.doesNewsletterExistInStorage = e),
      (l.isPreviewNewsletter = s),
      (l.getGuestNewsletterJids = u),
      (l.isSubscribedNewsletter = c),
      (l.hasSubscribedNewsletterInStorage = d),
      (l.TEMPORARY_SERVER_ID_LOWER_BOUND = m),
      (l.getMessageByServerId = p),
      (l.bulkGetMessagesByServerIds = _),
      (l.craftNewsletterMsgKeyFromServerId = f),
      (l.getTemporaryServerId = g),
      (l.updateMsgViewReceipt = h),
      (l.getUnexpiredNewsletterAdminInviteMessageRecordsFromChat = y));
  },
  98,
);
