__d(
  "WAWebDebugNewsletter",
  [
    "WAComms",
    "WAJids",
    "WALinkify",
    "WANullthrows",
    "WASmaxNewslettersGetNewsletterMessagesRPC",
    "WASmaxNewslettersGetNewsletterResponsesRPC",
    "WAWap",
    "WAWebChangeNewsletterOwnerAction",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebCommonNewsletterEnums",
    "WAWebContactCollection",
    "WAWebContactModel",
    "WAWebDebugABProps",
    "WAWebDebugUtils",
    "WAWebDecodeJid",
    "WAWebFrontendMsgGetters",
    "WAWebGetUserDisclosuresAction",
    "WAWebLoadNewsletterPreviewChatAction",
    "WAWebMexFetchNewsletterFollowersJob",
    "WAWebMexFetchNewsletterIsDomainPreviewableJob",
    "WAWebMexFetchNewsletterMessageReactionSenderListJob",
    "WAWebMexFetchNewsletterPendingInvitesJob",
    "WAWebMsgKey",
    "WAWebMsgModelFromData",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterBulkSendAdminInviteAction",
    "WAWebNewsletterCleanupTasks",
    "WAWebNewsletterCollection",
    "WAWebNewsletterCreateAction",
    "WAWebNewsletterCreateJob",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterDirectorySearchAction",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetReportsAction",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataModel",
    "WAWebNewsletterOpenAtAction",
    "WAWebNewsletterSendMsgAction",
    "WAWebNewsletterSubscribeAction",
    "WAWebPrimaryFeatures",
    "WAWebPrimaryFeaturesModel",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbModel",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "WAWebTos",
    "WAWebUserDisclosureCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        return r("WANullthrows")(o("WAComms").getComms()).handleStanza(
          t,
          o("WAComms").DEFAULT_SOCKET_ID,
          0,
        );
      },
      s = function () {
        return Math.round(Date.now() / 1e3);
      };
    function u(t, n) {
      var r,
        a = (r = o("WAWap")).makeWapNode(
          "notification",
          {
            from: r.JID(o("WAJids").toNewsletterJid(t)),
            type: "newsletter",
            id: r.INT(s()),
            t: r.INT(s()),
          },
          n,
        );
      e(a);
    }
    async function c() {
      await o(
        "WAWebQueryAndUpdateNewslettersMetadataAction",
      ).queryAndUpdateAllNewsletterMetadataAction(
        o("WAWebQueryAndUpdateNewslettersMetadataAction")
          .NewsletterMetadataUpdateEntryPoint.Debug,
      );
    }
    function d() {
      return { id: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString() };
    }
    var m = {
      enableNewsletter: function () {
        var e;
        o("WAWebPrimaryFeatures")
          .setPrimaryFeatures(
            Array.from(
              new Set(
                [].concat(
                  (e = o("WAWebPrimaryFeaturesModel").PrimaryFeatures
                    .features) != null
                    ? e
                    : [],
                  ["newsletter"],
                ),
              ),
            ),
          )
          .then(function () {
            r("WAWebDebugABProps").overrideABProp("channels_enabled", 2);
          });
      },
      deleteAllNewsletters: function () {
        (r("WAWebNewsletterMetadataCollection").delete(),
          o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.delete(),
          r("WAWebNewsletterCollection").delete());
      },
      createNewsletter: function (t) {
        o("WAWebNewsletterCreateJob").createNewsletter({
          name: t,
          description: null,
          picture: null,
        });
      },
      createAndOpenNewsletter: async function (t) {
        var e = await o("WAWebNewsletterCreateAction").createNewsletterAction(
          t,
        );
        e != null && o("WAWebCmd").Cmd.openCreatedNewsletter(e);
      },
      inviteUserToAdminChannel: async function (t, n) {
        var e = o("WAWebContactCollection").ContactCollection.getModelsArray(),
          a = e.find(function (e) {
            return e.searchMatchExact(n, n) != null;
          }),
          i = r("WAWebNewsletterCollection").get(t);
        if (a == null || i == null) return !1;
        var l = await o(
            "WAWebNewsletterBulkSendAdminInviteAction",
          ).sendBulkNewsletterAdminInviteAction({
            invitees: [a],
            chat: i,
            inviteMessage:
              "Accept this invitation to be an admin for my WhatsApp channel, " +
              i.name,
            base64Thumb: null,
          }),
          s = l.allFailed;
        return !s;
      },
      mockNewsletterCollection: function (t) {
        var e = o("WAWebWidFactory").createWid("123@newsletter"),
          n = "NY Times",
          a = Date.now() / 1e3,
          i = new (o("WAWebNewsletterMetadataModel").NewsletterMetadata)({
            id: e,
            name: n,
            nameUpdateTime: a,
            description: "Regular articles from New York Times",
            descriptionUpdateTime: a,
            handle: "nytimes",
            inviteCode: "test-newsletter-invite-code",
            size: 12345,
            verified: !0,
            membershipType: o("WAWebCommonNewsletterEnums")
              .NewsletterMembershipType.Subscriber,
            privacy: o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Public,
            website: o("WALinkify").findLink("https://www.nytimes.com/"),
          }),
          l = new (r("WAWebContactModel"))({ id: e, name: n }),
          s = new (o("WAWebProfilePicThumbModel").ProfilePicThumb)({
            id: e,
            tag: "1234",
            previewEurl:
              "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            eurl: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            stale: !1,
            timestamp: a,
          });
        (o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.add(s),
          o("WAWebContactCollection").ContactCollection.add(l),
          r("WAWebNewsletterMetadataCollection").add(i),
          r("WAWebNewsletterCollection").add([
            { id: e, name: n, t: a, isReadOnly: !!(t != null && t.readOnly) },
          ]));
        var u = r("WAWebNewsletterCollection").get(e);
        u == null ||
          u.msgs.add({
            id: new (r("WAWebMsgKey"))({
              fromMe: !1,
              remote: e,
              id: e.toJid(),
            }),
            t: a,
            from: e,
            notifyName: n,
            body: "hello",
            type: "chat",
          });
      },
      sendMuteNotification: function (t) {
        (t === void 0 && (t = "123@newsletter"),
          u(
            t,
            o("WAWap").makeWapNode(
              "metadata",
              null,
              o("WAWap").makeWapNode("muted", { state: "on" }),
            ),
          ));
      },
      sendUnmuteNotification: function (t) {
        (t === void 0 && (t = "123@newsletter"),
          u(
            t,
            o("WAWap").makeWapNode(
              "metadata",
              null,
              o("WAWap").makeWapNode("muted", { state: "off" }),
            ),
          ));
      },
      sendJoinNotification: function (t) {
        (t === void 0 && (t = "123@newsletter"),
          u(
            t,
            o("WAWap").makeWapNode(
              "join",
              null,
              o("WAWap").makeWapNode("metadata", null, [
                o("WAWap").makeWapNode("name", {
                  id: "1",
                  update_time: o("WAWap").INT(s()),
                  text: o("WAWap").CUSTOM_STRING("My Channel"),
                }),
              ]),
            ),
          ));
      },
      sendLeaveNotification: function (t) {
        (t === void 0 && (t = "123@newsletter"),
          u(t, o("WAWap").makeWapNode("leave", null)));
      },
      sendMessageToNewsletter: function (n) {
        n === void 0 && (n = "123@newsletter");
        var t = new Uint8Array([
            50, 24, 10, 22, 84, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116,
            101, 115, 116, 32, 109, 101, 115, 115, 97, 103, 101,
          ]),
          r = o("WAWap").makeWapNode(
            "message",
            {
              from: o("WAWap").JID(o("WAJids").toNewsletterJid(n)),
              type: "text",
              id: o("WAWap").INT(s()),
              server_id: o("WAWap").INT(s()),
              t: o("WAWap").INT(s()),
            },
            o("WAWap").makeWapNode("plaintext", null, t),
          );
        e(r);
      },
      loadNewsletterPreviewChat: async function (t) {
        var e = await o(
          "WAWebLoadNewsletterPreviewChatAction",
        ).loadNewsletterPreviewChat(t);
        e != null &&
          (await o("WAWebCmd").Cmd.openChatBottom({
            chat: e,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Link,
          }));
      },
      getNewsletterDirectoryList: async function (t) {
        var e = await o(
            "WAWebNewsletterDirectorySearchAction",
          ).getNewsletterDirectoryListAction(
            babelHelpers.extends({}, t, { skipSubscribedNewsletters: !1 }),
          ),
          n = e.newsletters;
        return n;
      },
      getNewsletterDirectorySearchResults: async function (t) {
        var e = await o(
            "WAWebNewsletterDirectorySearchAction",
          ).getNewsletterDirectorySearchResultsAction(
            babelHelpers.extends({}, t, { skipSubscribedNewsletters: !1 }),
          ),
          n = e.newsletters;
        return n;
      },
      getNewsletterDirectoryCategoriesPreview: async function (t) {
        return o(
          "WAWebNewsletterDirectorySearchAction",
        ).getNewsletterDirectoryCategoriesPreviewAction(t);
      },
      getRecommendedNewsletters: async function () {
        var e = await o(
          "WAWebNewsletterDirectorySearchAction",
        ).getRecommendedNewslettersAction();
        return e;
      },
      refreshAllNewsletters: c,
      getUserNotices: function () {
        return o("WAWebGetUserDisclosuresAction").getUserDisclosuresAction();
      },
      openChannelAt: async function (t, n) {
        await o("WAWebNewsletterOpenAtAction").openNewsletterAt({
          newsletterJid: t,
          serverId: n,
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Debug,
        });
      },
      mexFetchSubscriberList: async function (t, n) {
        var e = await o(
          "WAWebMexFetchNewsletterFollowersJob",
        ).mexFetchNewsletterFollowers(t, n);
      },
      mexFetchNewsletterReactionSenderList: async function (t, n) {
        var e = await o(
          "WAWebMexFetchNewsletterMessageReactionSenderListJob",
        ).mexFetchNewsletterMessageReactionSenderList(t, n);
      },
      mexFetchNewsletterIsDomainPreviewable: async function (t) {
        var e = await o(
          "WAWebMexFetchNewsletterIsDomainPreviewableJob",
        ).mexFetchNewsletterIsDomainPreviewable(t);
      },
      mexFetchNewsletterPendingInvites: async function (t) {
        var e = await o(
          "WAWebMexFetchNewsletterPendingInvitesJob",
        ).mexFetchNewsletterPendingInvites(t);
      },
      deletePreviewNewsletters: async function () {
        await o("WAWebNewsletterCleanupTasks").deletePreviewNewsletters();
      },
      sendNewsletterAdminInviteMessage: async function (t) {
        var e = o("WAWebDebugUtils").getSelectedChat(),
          n = o("WAWebDecodeJid").strictDecodeJid(t);
        if (e == null || n == null)
          throw r("err")("No selected chat or invalid jid");
        await o(
          "WAWebNewsletterSendMsgAction",
        ).sendNewsletterAdminInviteMessage(e, {
          newsletterWid: n,
          invitee: o("WAWebWidFactory").createUserWidOrThrow(e.id.toString()),
          inviteMessage: "Please become an admin!",
          base64Thumb: null,
        });
      },
      sendNewsletterFollowerInviteMessage: async function (t, n) {
        var e = o("WAWebDebugUtils").getSelectedChat(),
          a = o("WAWebDecodeJid").strictDecodeJid(t);
        if (e == null || a == null)
          throw r("err")("No selected chat or invalid jid");
        await o(
          "WAWebNewsletterSendMsgAction",
        ).sendNewsletterFollowerInviteMessage(e, {
          newsletterWid: a,
          inviteMessage: n != null ? n : "Please follow this channel!",
          base64Thumb: null,
        });
      },
      showDemoteNotif: async function () {
        var e = o("WAWebContactCollection").ContactCollection.at(
          Math.floor(
            Math.random() *
              o("WAWebContactCollection").ContactCollection.length,
          ),
        );
        o(
          "WAWebNewsletterBridgeApi",
        ).NewsletterBridgeApi.displayRoleChangeDesktopNotification({
          notification: {
            xwa2_notify_newsletter_admin_demote: {
              id: o("WAWebDebugUtils").getSelectedChat().id.toString(),
              admin: d(),
              user: { id: e == null ? void 0 : e.id.toString() },
              actor: d(),
              user_new_role: "SUBSCRIBER",
            },
          },
        });
      },
      showPromoteNotif: async function () {
        var e = o("WAWebContactCollection").ContactCollection.at(
          Math.floor(
            Math.random() *
              o("WAWebContactCollection").ContactCollection.length,
          ),
        );
        o(
          "WAWebNewsletterBridgeApi",
        ).NewsletterBridgeApi.displayRoleChangeDesktopNotification({
          notification: {
            xwa2_notify_newsletter_admin_promote: {
              id: o("WAWebDebugUtils").getSelectedChat().id.toString(),
              admin: d(),
              user: { id: e == null ? void 0 : e.id.toString() },
              actor: d(),
              user_new_role: "ADMIN",
            },
          },
        });
      },
      getNewsletterReports: async function () {
        await o("WAWebNewsletterGetReportsAction").getNewsletterReportsAction();
      },
      changeNewsletterOwner: async function (t, n) {
        var e = o("WAWebContactCollection").ContactCollection.get(n),
          a = r("WAWebNewsletterCollection").get(t);
        e == null ||
          a == null ||
          (await o(
            "WAWebChangeNewsletterOwnerAction",
          ).changeNewsletterOwnerAction(a, e));
      },
      subscribeToTestNewsletters: async function (t) {
        (await Promise.all(
          t.map(function (e) {
            var t = o("WAWebDecodeJid").strictDecodeJid(e);
            if (t != null)
              return o(
                "WAWebNewsletterSubscribeAction",
              ).subscribeToNewsletterWidAction(
                o("WAWebWidFactory").asNewsletterWidOrThrow(t),
              );
          }),
        ),
          await c());
      },
      resetNewsletterTos: async function () {
        var e = [
          o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos(),
          o("WAWebNewsletterGatingUtils").getNewsletterProducerTos(),
          o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos(),
        ];
        e.forEach(function (e) {
          (o("WAWebTos").TosManager.resetState(e),
            o("WAWebUserDisclosureCollection").UserDisclosureCollection.remove(
              e,
            ));
        });
      },
      getNewsletterMessages: async function (t, n) {
        try {
          var e = await o(
            "WASmaxNewslettersGetNewsletterMessagesRPC",
          ).sendGetNewsletterMessagesRPC({
            queryNewsletterParamsMixinArgs: {
              queryNewsletterParamsArgs: {
                queryNewsletterJIDParams: { anyJid: t },
              },
            },
            newsletterMessageRequestPayloadMixinArgs: { messagesCount: n },
          });
          return e;
        } catch (e) {
          throw e;
        }
      },
      getNewsletterQuestionResponses: async function (t, n, r) {
        try {
          var e = await o(
            "WASmaxNewslettersGetNewsletterResponsesRPC",
          ).sendGetNewsletterResponsesRPC({
            iqTo: t,
            questionResponsesServerId: n,
            questionResponsesCount: r,
          });
          return e;
        } catch (e) {
          throw e;
        }
      },
      sendDummyMilestoneNotification: async function (t, n, a, i, l) {
        (t === void 0 && (t = "MESSAGE_REACTIONS"),
          n === void 0 && (n = 100),
          a === void 0 && (a = "\u2764\uFE0F"));
        var e = await o("WAWebNewsletterDBUtils").getMessageByServerId(
          Number(l),
          i,
        );
        if (e == null) throw r("err")("No message found for serverId");
        o(
          "WAWebNewsletterBridgeApi",
        ).NewsletterBridgeApi.displayNewsletterMilestoneDesktopNotification({
          msg: o("WAWebMsgModelFromData").msgModelFromMsgData(e),
          milestoneType: t,
          value: n,
          reactionCode: t === "MESSAGE_REACTIONS" ? a : null,
          chat: o("WAWebFrontendMsgGetters").getChat(e),
        });
      },
    };
    l.default = m;
  },
  98,
);
