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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message", "chat", "message-association"], async function (n) {
          var a = n[0],
            i = n[1],
            l = n[2],
            u = await o("WAWebDBStoreMsgsUtils").getLastRowId(a),
            c = (
              await o("WAPromiseMap").promiseMap(t, async function (t, n) {
                var a,
                  i = t[0],
                  l = t[1],
                  s =
                    (a = i.serverId) != null
                      ? a
                      : await o("WAWebNewsletterDBUtils").getTemporaryServerId(
                          i.to,
                        );
                if (s == null)
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
                var c = r("WAWebMsgKey").fromString(i.id),
                  d = o("WAWebDBStoreMessage").isPendingUnreadReceipt(c, i),
                  m = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
                    msg: i,
                    chatId: c.remote.toString(),
                    hasLink: l,
                    inChatMsgId: s,
                    rowId: u + n + 1,
                    pendingReadReceipt: d,
                  });
                return (delete m.serverId, m);
              })
            ).filter(Boolean);
          try {
            (o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled() &&
              (await o(
                "WAWebDBStoreMessageAssociations",
              ).bulkStoreMessageAssociations(c)),
              await a.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(c));
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
        });
    }
    l.storeEncryptedNewsletterMessages = u;
  },
  98,
);
