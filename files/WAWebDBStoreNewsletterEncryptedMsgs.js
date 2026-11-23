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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      var a = ["message", "chat", "message-association"];
      return (
        o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(
          t.map(function (e) {
            var t = e[0];
            return t;
          }),
        ) && a.push("experience-id"),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(a, async function (a) {
            var i = a[0],
              l = a[1],
              u = a[2],
              c = await o("WAWebDBStoreMsgsUtils").getLastRowId(i),
              d = (
                await o("WAPromiseMap").promiseMap(t, async function (t, a) {
                  var i,
                    l = t[0],
                    s = t[1],
                    u =
                      (i = l.serverId) != null
                        ? i
                        : await o(
                            "WAWebNewsletterDBUtils",
                          ).getTemporaryServerId(l.to);
                  if (u == null)
                    return (
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[newsletter][storage] serverId is missing from message",
                            ])),
                        )
                        .tags("newsletter")
                        .sendLogs("newsletter-missing-serverId"),
                      null
                    );
                  var d = r("WAWebMsgKey").fromString(l.id),
                    m = o("WAWebDBStoreMessage").isPendingUnreadReceipt(d, l),
                    p = d.remote.toString(),
                    _ = m && !n.has(p),
                    f = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
                      msg: l,
                      chatId: p,
                      hasLink: s,
                      inChatMsgId: u,
                      rowId: c + a + 1,
                      pendingReadReceipt: _,
                    });
                  return (delete f.serverId, f);
                })
              ).filter(Boolean);
            try {
              (await o(
                "WAWebDBStoreMessageAssociations",
              ).bulkStoreMessageAssociations(d),
                await i.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(d),
                await o("WAWebDBExperienceIdStore").recordReceivedExperienceIds(
                  d,
                ));
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
          })
      );
    }
    l.storeEncryptedNewsletterMessages = u;
  },
  98,
);
