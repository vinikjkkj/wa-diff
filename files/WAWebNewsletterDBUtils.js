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
      var t = await s(e);
      return !t;
    }
    var c = Number.MAX_SAFE_INTEGER - 1e4;
    async function d(e, t, n) {
      n === void 0 && (n = o("WAWebDBMessageUtils").InternalIdPrefix.Default);
      var r = o("WAWebDBMessageUtils").craftInternalId(t, e, n),
        a = await o("WAWebSchemaMessage")
          .getMessageTable()
          .anyOf(["internalId"], [r]),
        i = a[0];
      return i == null
        ? null
        : o("WAWebDBMessageSerialization").messageFromDbRow(i);
    }
    async function m(e, t, n) {
      n === void 0 && (n = o("WAWebDBMessageUtils").InternalIdPrefix.Default);
      var r = new Map(),
        a = new Map(
          e.map(function (e) {
            return [o("WAWebDBMessageUtils").craftInternalId(t, e, n), e];
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
    function p(e, t) {
      var n =
        t instanceof r("WAWebWid") ? t : o("WAWebWidFactory").createWid(t);
      return new (r("WAWebMsgKey"))({
        remote: n,
        fromMe: !0,
        id: e.toString(10),
      });
    }
    async function _(e, t) {
      t === void 0 && (t = o("WAWebDBMessageUtils").InternalIdPrefix.Default);
      var n = o("WAWebDBMessageUtils").craftInternalId(e.toJid(), c, t),
        r = "" + t + o("WAWebDBMessageUtils").endOfChat(e),
        a = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], n, r, {
            lowerInclusive: !0,
            upperInclusive: !1,
            limit: 1,
            reverse: !0,
          });
      if (a.length === 0 || a[0].internalId == null) return c;
      var i = o("WAWebDBMessageUtils").getInChatMsgId(a[0].internalId);
      return Math.min(i + 1, Number.MAX_SAFE_INTEGER);
    }
    async function f(e) {
      var t = await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkGet(e.map(String)),
        n = t.filter(Boolean).map(function (e) {
          return { id: e.id, viewed: !0 };
        });
      await o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(n);
    }
    async function g(e, t) {
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
      (l.isSubscribedNewsletter = u),
      (l.TEMPORARY_SERVER_ID_LOWER_BOUND = c),
      (l.getMessageByServerId = d),
      (l.bulkGetMessagesByServerIds = m),
      (l.craftNewsletterMsgKeyFromServerId = p),
      (l.getTemporaryServerId = _),
      (l.updateMsgViewReceipt = f),
      (l.getUnexpiredNewsletterAdminInviteMessageRecordsFromChat = g));
  },
  98,
);
