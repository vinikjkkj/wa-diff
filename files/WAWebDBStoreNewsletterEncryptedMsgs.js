__d(
  "WAWebDBStoreNewsletterEncryptedMsgs",
  [
    "WALogger",
    "WAPromiseMap",
    "WAWebDBExperienceIdStore",
    "WAWebDBStoreMessage",
    "WAWebDBStoreMessageAssociations",
    "WAWebDBStoreMsgsUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNewsletterDBUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, a) {
      var i = ["message", "chat", "message-association"];
      return (
        o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(
          t.map(function (e) {
            var t = e[0];
            return t;
          }),
        ) && i.push("experience-id"),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            i,
            (function () {
              var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (i) {
                  var l = i[0],
                    u = i[1],
                    c = i[2],
                    d = yield o("WAWebDBStoreMsgsUtils").getLastRowId(l),
                    m = (yield o("WAPromiseMap").promiseMap(
                      t,
                      (function () {
                        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (t, n) {
                            var i,
                              l = t[0],
                              s = t[1],
                              u =
                                (i = l.serverId) != null
                                  ? i
                                  : yield o(
                                      "WAWebNewsletterDBUtils",
                                    ).getTemporaryServerId(l.to);
                            if (u == null)
                              return (
                                o("WALogger")
                                  .ERROR(
                                    e ||
                                      (e =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[newsletter][storage] serverId is missing from message",
                                          ],
                                        )),
                                  )
                                  .tags("newsletter")
                                  .sendLogs("newsletter-missing-serverId"),
                                null
                              );
                            var c = r("WAWebMsgKey").fromString(l.id),
                              m = o(
                                "WAWebDBStoreMessage",
                              ).isPendingUnreadReceipt(c, l),
                              p = c.remote.toString(),
                              _ = m && !a.has(p),
                              f = o(
                                "WAWebDBStoreMessage",
                              ).addMsgMetadataToMsgRow({
                                msg: l,
                                chatId: p,
                                hasLink: s,
                                inChatMsgId: u,
                                rowId: d + n + 1,
                                pendingReadReceipt: _,
                              });
                            return (delete f.serverId, f);
                          },
                        );
                        return function (e, n) {
                          return t.apply(this, arguments);
                        };
                      })(),
                    )).filter(Boolean);
                  try {
                    (yield o(
                      "WAWebDBStoreMessageAssociations",
                    ).bulkStoreMessageAssociations(m),
                      yield l.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(m),
                      yield o(
                        "WAWebDBExperienceIdStore",
                      ).recordReceivedExperienceIds(m));
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
                return i.apply(this, arguments);
              };
            })(),
          )
      );
    }
    l.storeEncryptedNewsletterMessages = u;
  },
  98,
);
