__d(
  "WAWebDBStoreNewsletterEncryptedMsgs",
  [
    "WALogger",
    "WAPromiseMap",
    "WAWebDBStoreMessage",
    "WAWebDBStoreMessageAssociations",
    "WAWebDBStoreMsgsUtils",
    "WAWebMessageAssociationGatingUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNewsletterDBUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["message", "chat", "message-association"],
          (function () {
            var a = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (a) {
                var i = a[0],
                  l = a[1],
                  u = a[2],
                  c = yield o("WAWebDBStoreMsgsUtils").getLastRowId(i),
                  d = (yield o("WAPromiseMap").promiseMap(
                    t,
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t, n) {
                          var a,
                            i = t[0],
                            l = t[1],
                            s =
                              (a = i.serverId) != null
                                ? a
                                : yield o(
                                    "WAWebNewsletterDBUtils",
                                  ).getTemporaryServerId(i.to);
                          if (s == null)
                            return (
                              o("WALogger")
                                .ERROR(
                                  e ||
                                    (e =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[newsletter][storage] serverId is missing from message",
                                      ])),
                                )
                                .tags("newsletter")
                                .sendLogs("newsletter-missing-serverId"),
                              null
                            );
                          var u = r("WAWebMsgKey").fromString(i.id),
                            d = o("WAWebDBStoreMessage").isPendingUnreadReceipt(
                              u,
                              i,
                            ),
                            m = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow(
                              {
                                msg: i,
                                chatId: u.remote.toString(),
                                hasLink: l,
                                inChatMsgId: s,
                                rowId: c + n + 1,
                                pendingReadReceipt: d,
                              },
                            );
                          return (delete m.serverId, m);
                        },
                      );
                      return function (e, n) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  )).filter(Boolean);
                try {
                  (o(
                    "WAWebMessageAssociationGatingUtils",
                  ).isMessageAssociationInfraEnabled() &&
                    (yield o(
                      "WAWebDBStoreMessageAssociations",
                    ).bulkStoreMessageAssociations(d)),
                    yield i.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(d));
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter-store] Failed to store messages",
                        ])),
                    )
                    .tags("newsletter");
                }
              },
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        );
    }
    l.storeEncryptedNewsletterMessages = u;
  },
  98,
);
