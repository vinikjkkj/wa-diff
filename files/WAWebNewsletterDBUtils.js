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
          var t = yield u(e);
          return !t;
        })),
        m.apply(this, arguments)
      );
    }
    var p = Number.MAX_SAFE_INTEGER - 1e4;
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 &&
            (n = o("WAWebDBMessageUtils").InternalIdPrefix.Default);
          var r = o("WAWebDBMessageUtils").craftInternalId(t, e, n),
            a = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .anyOf(["internalId"], [r]),
            i = a[0];
          return i == null
            ? null
            : o("WAWebDBMessageSerialization").messageFromDbRow(i);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 &&
            (n = o("WAWebDBMessageUtils").InternalIdPrefix.Default);
          var r = new Map(),
            a = new Map(
              e.map(function (e) {
                return [o("WAWebDBMessageUtils").craftInternalId(t, e, n), e];
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
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      var n =
        t instanceof r("WAWebWid") ? t : o("WAWebWidFactory").createWid(t);
      return new (r("WAWebMsgKey"))({
        remote: n,
        fromMe: !0,
        id: e.toString(10),
      });
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 &&
            (t = o("WAWebDBMessageUtils").InternalIdPrefix.Default);
          var n = o("WAWebDBMessageUtils").craftInternalId(e.toJid(), p, t),
            r = "" + t + o("WAWebDBMessageUtils").endOfChat(e),
            a = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalId"], n, r, {
                lowerInclusive: !0,
                upperInclusive: !1,
                limit: 1,
                reverse: !0,
              });
          if (a.length === 0 || a[0].internalId == null) return p;
          var i = o("WAWebDBMessageUtils").getInChatMsgId(a[0].internalId);
          return Math.min(i + 1, Number.MAX_SAFE_INTEGER);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet(e.map(String)),
            n = t.filter(Boolean).map(function (e) {
              return { id: e.id, viewed: !0 };
            });
          yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(n);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        L.apply(this, arguments)
      );
    }
    ((l.doesNewsletterExistInStorage = e),
      (l.isPreviewNewsletter = u),
      (l.isSubscribedNewsletter = d),
      (l.TEMPORARY_SERVER_ID_LOWER_BOUND = p),
      (l.getMessageByServerId = _),
      (l.bulkGetMessagesByServerIds = g),
      (l.craftNewsletterMsgKeyFromServerId = y),
      (l.getTemporaryServerId = C),
      (l.updateMsgViewReceipt = v),
      (l.getUnexpiredNewsletterAdminInviteMessageRecordsFromChat = R));
  },
  98,
);
