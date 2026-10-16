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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            (yield o("WAWebApiChatCommon").getChatRecord(
              o("WAWebJidToWid").newsletterJidToWid(e),
            )) != null
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaNewsletterMetadata")
            .getNewsletterMetadataTable()
            .get(e);
          return (
            t == null ||
            t.membershipType ===
              o("WAWebNewsletterDBConstants").NewsletterDBMembership.Guest
          );
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
          var t = yield o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .bulkGet(Array.from(new Set(e))),
            n = new Set();
          return (
            t.forEach(function (e) {
              e != null &&
                e.membershipType ===
                  o("WAWebNewsletterDBConstants").NewsletterDBMembership
                    .Guest &&
                n.add(e.id);
            }),
            n
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield u(e);
          return !t;
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaNewsletterMetadata")
            .getNewsletterMetadataTable()
            .all();
          return e.some(function (e) {
            var t = e.membershipType;
            return (
              t !== o("WAWebNewsletterDBConstants").NewsletterDBMembership.Guest
            );
          });
        })),
        g.apply(this, arguments)
      );
    }
    var h = Number.MAX_SAFE_INTEGER - 1e4;
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 &&
            (n = o("WAWebDBMessageUtils").InternalIdPrefix.Default);
          var r = o("WAWebDBMessageUtils").craftInternalId({
              chatId: t,
              inChatMsgId: e,
              internalIdPrefix: n,
            }),
            a = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .anyOf(["internalId"], [r]),
            i = a[0];
          return i == null
            ? null
            : o("WAWebDBMessageSerialization").messageFromDbRow(i);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 &&
            (n = o("WAWebDBMessageUtils").InternalIdPrefix.Default);
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
            i = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .anyOf(["internalId"], Array.from(a.keys()));
          return (
            i.forEach(function (e) {
              if (e.internalId != null) {
                var t = a.get(e.internalId);
                t != null &&
                  r.set(
                    t,
                    o("WAWebDBMessageSerialization").messageFromDbRow(e),
                  );
              }
            }),
            r
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      var n =
        t instanceof r("WAWebWid") ? t : o("WAWebWidFactory").createWid(t);
      return new (r("WAWebMsgKey"))({
        remote: n,
        fromMe: !0,
        id: e.toString(10),
      });
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 &&
            (t = o("WAWebDBMessageUtils").InternalIdPrefix.Default);
          var n = o("WAWebDBMessageUtils").craftInternalId({
              chatId: e.toJid(),
              inChatMsgId: h,
              internalIdPrefix: t,
            }),
            r = "" + t + o("WAWebDBMessageUtils").endOfChat(e),
            a = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalId"], n, r, {
                lowerInclusive: !0,
                upperInclusive: !1,
                limit: 1,
                reverse: !0,
              });
          if (a.length === 0 || a[0].internalId == null) return h;
          var i = o("WAWebDBMessageUtils").getInChatMsgId(a[0].internalId);
          return Math.min(i + 1, Number.MAX_SAFE_INTEGER);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet(e.map(String)),
            n = t.filter(Boolean).map(function (e) {
              return { id: e.id, viewed: !0 };
            });
          yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(n);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebDBMsgUtils").getMsgsByChatId(t),
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
        })),
        T.apply(this, arguments)
      );
    }
    ((l.doesNewsletterExistInStorage = e),
      (l.isPreviewNewsletter = u),
      (l.getGuestNewsletterJids = d),
      (l.isSubscribedNewsletter = p),
      (l.hasSubscribedNewsletterInStorage = f),
      (l.TEMPORARY_SERVER_ID_LOWER_BOUND = h),
      (l.getMessageByServerId = y),
      (l.bulkGetMessagesByServerIds = b),
      (l.craftNewsletterMsgKeyFromServerId = S),
      (l.getTemporaryServerId = R),
      (l.updateMsgViewReceipt = E),
      (l.getUnexpiredNewsletterAdminInviteMessageRecordsFromChat = I));
  },
  98,
);
