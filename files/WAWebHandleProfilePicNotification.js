__d(
  "WAWebHandleProfilePicNotification",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiContact",
    "WAWebBackendJobsCommon",
    "WAWebChangeProfilePicThumb",
    "WAWebCommsWapMd",
    "WAWebGroupSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebJidToWid",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProfilePicConstants",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = new (r("WADeprecatedWapParser"))(
        "incomingProfilePicNotificationParser",
        function (e) {
          e.assertTag("notification");
          var t, n;
          if (e.hasChild("delete")) ((t = "delete"), (n = e.child("delete")));
          else if (e.hasChild("set")) ((t = "set"), (n = e.child("set")));
          else if (e.hasChild("request")) {
            ((t = "request"), (n = e.child("request")));
            var r = o("WAWebJidToWid").chatJidToChatWid(n.attrChatJid("jid"));
            if (!o("WAWebUserPrefsMeUser").isMeAccount(r))
              throw e.createParseError("request jid must match self PN or LID");
          } else if (e.hasChild("set_avatar"))
            ((t = "set_avatar"), (n = e.child("set_avatar")));
          else return e.throw("Unexpected profile picture notification type");
          var a = e.attrString("id");
          return n.hasAttr("jid")
            ? {
                type: t,
                from: o("WAWebJidToWid").chatJidToChatWid(
                  e.attrChatJid("from"),
                ),
                jid: o("WAWebJidToWid").chatJidToChatWid(n.attrChatJid("jid")),
                author: n.hasAttr("author")
                  ? o("WAWebJidToWid").userJidToUserWid(n.attrUserJid("author"))
                  : null,
                ts: e.attrTime("t"),
                rawTs: e.attrString("t"),
                stanzaId: a,
                picId: t === "set" ? n.attrInt("id", 1) : 0,
              }
            : {
                from: o("WAWebJidToWid").userJidToUserWid(
                  e.attrUserJid("from"),
                ),
                jid: null,
                type: t,
                hash: n.attrString("hash"),
                ts: e.attrTime("t"),
                stanzaId: a,
              };
        },
      );
    async function m(t) {
      var n = d.parse(t);
      if (n.error)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            n.error.toString(),
          ),
          Promise.reject(n.error)
        );
      var r = n.success,
        a = Promise.resolve();
      if (r.jid || r.hash) {
        var i;
        if (r.jid) i = r.jid;
        else {
          var l = await o("WAWebApiContact").getContactRecordByHash(r.hash);
          l == null
            ? o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "side contact hash not found for pic update",
                  ])),
              )
            : (i = o("WAWebWidFactory").createWid(l.id));
        }
        switch (r.type) {
          case "delete":
          case "set": {
            var m =
              r.type === "delete"
                ? o("WAWebProfilePicConstants").ProfilePicCommand.Remove
                : o("WAWebProfilePicConstants").ProfilePicCommand.Set;
            i &&
              (a = o("WAWebChangeProfilePicThumb")
                .changeProfilePicThumb(i, m)
                .then(function () {
                  if (i.isGroup() && r.ts != null) {
                    var e = o(
                      "WAWebGroupSystemMsg",
                    ).genGroupPicChangeNotificationMsg(
                      i,
                      m,
                      r.ts,
                      r.author || o("WAWebUserPrefsMeUser").getMeUser(),
                    );
                    return o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: i,
                      newMsg: e,
                      handleSingleMsgOrigin: "profilePicNotification",
                    });
                  }
                }));
            break;
          }
          case "request":
            break;
          case "set_avatar":
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "set_avatar picture notification is not implemented",
                ])),
            );
            break;
          default:
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Invalid type received",
                ])),
            );
        }
      }
      return a.then(function () {
        return o("WAWap").wap("ack", {
          id: o("WAWap").CUSTOM_STRING(r.stanzaId),
          to: o("WAWebCommsWapMd").JID(r.from),
          class: "notification",
          type: "picture",
        });
      });
    }
    function p(e) {
      var t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(
        !!e.attrs.offline,
      );
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "handleProfilePicNotification",
          function (e) {
            return m(e.node);
          },
          { priority: t },
        )
        .waitUntilCompleted({ node: e });
    }
    l.handleProfilePicNotificationJob = p;
  },
  98,
);
