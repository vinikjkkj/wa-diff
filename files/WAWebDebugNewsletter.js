__d(
  "WAWebDebugNewsletter",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = function (t) {
        return r("WANullthrows")(o("WAComms").getComms()).handleStanza(
          t,
          o("WAComms").DEFAULT_SOCKET_ID,
          0,
        );
      },
      u = function () {
        return Math.round(Date.now() / 1e3);
      };
    function c(e, t) {
      var n,
        r = (n = o("WAWap")).makeWapNode(
          "notification",
          {
            from: n.JID(o("WAJids").toNewsletterJid(e)),
            type: "newsletter",
            id: n.INT(u()),
            t: n.INT(u()),
          },
          t,
        );
      s(r);
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o(
            "WAWebQueryAndUpdateNewslettersMetadataAction",
          ).queryAndUpdateAllNewsletterMetadataAction(
            o("WAWebQueryAndUpdateNewslettersMetadataAction")
              .NewsletterMetadataUpdateEntryPoint.Debug,
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      var e;
      return {
        id: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString(),
        pn:
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.toString(),
      };
    }
    var _ = {
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
      createAndOpenNewsletter: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebNewsletterCreateAction").createNewsletterAction(
            e,
          );
          t != null && o("WAWebCmd").Cmd.openCreatedNewsletter(t);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      inviteUserToAdminChannel: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WAWebContactCollection",
            ).ContactCollection.getModelsArray(),
            a = n.find(function (e) {
              return e.searchMatchExact(t, t) != null;
            }),
            i = r("WAWebNewsletterCollection").get(e);
          if (a == null || i == null) return !1;
          var l = yield o(
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
        });
        function t(t, n) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
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
          c(
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
          c(
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
          c(
            t,
            o("WAWap").makeWapNode(
              "join",
              null,
              o("WAWap").makeWapNode("metadata", null, [
                o("WAWap").makeWapNode("name", {
                  id: "1",
                  update_time: o("WAWap").INT(u()),
                  text: o("WAWap").CUSTOM_STRING("My Channel"),
                }),
              ]),
            ),
          ));
      },
      sendLeaveNotification: function (t) {
        (t === void 0 && (t = "123@newsletter"),
          c(t, o("WAWap").makeWapNode("leave", null)));
      },
      sendMessageToNewsletter: function (t) {
        t === void 0 && (t = "123@newsletter");
        var e = new Uint8Array([
            50, 24, 10, 22, 84, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116,
            101, 115, 116, 32, 109, 101, 115, 115, 97, 103, 101,
          ]),
          n = o("WAWap").makeWapNode(
            "message",
            {
              from: o("WAWap").JID(o("WAJids").toNewsletterJid(t)),
              type: "text",
              id: o("WAWap").INT(u()),
              server_id: o("WAWap").INT(u()),
              t: o("WAWap").INT(u()),
            },
            o("WAWap").makeWapNode("plaintext", null, e),
          );
        s(n);
      },
      loadNewsletterPreviewChat: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebLoadNewsletterPreviewChatAction",
          ).loadNewsletterPreviewChat(e);
          t != null &&
            (yield o("WAWebCmd").Cmd.openChatBottom({
              chat: t,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Link,
            }));
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getNewsletterDirectoryList: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
              "WAWebNewsletterDirectorySearchAction",
            ).getNewsletterDirectoryListAction(
              babelHelpers.extends({}, e, { skipSubscribedNewsletters: !1 }),
            ),
            n = t.newsletters;
          return n;
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getNewsletterDirectorySearchResults: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
              "WAWebNewsletterDirectorySearchAction",
            ).getNewsletterDirectorySearchResultsAction(
              babelHelpers.extends({}, e, { skipSubscribedNewsletters: !1 }),
            ),
            n = t.newsletters;
          return n;
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getNewsletterDirectoryCategoriesPreview: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o(
            "WAWebNewsletterDirectorySearchAction",
          ).getNewsletterDirectoryCategoriesPreviewAction(e);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getRecommendedNewsletters: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebNewsletterDirectorySearchAction",
          ).getRecommendedNewslettersAction();
          return e;
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      refreshAllNewsletters: d,
      getUserNotices: function () {
        return o("WAWebGetUserDisclosuresAction").getUserDisclosuresAction();
      },
      openChannelAt: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield o("WAWebNewsletterOpenAtAction").openNewsletterAt({
            newsletterJid: e,
            serverId: t,
          });
        });
        function t(t, n) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      mexFetchSubscriberList: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebMexFetchNewsletterFollowersJob",
          ).mexFetchNewsletterFollowers(e, t);
        });
        function t(t, n) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      mexFetchNewsletterReactionSenderList: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebMexFetchNewsletterMessageReactionSenderListJob",
          ).mexFetchNewsletterMessageReactionSenderList(e, t);
        });
        function t(t, n) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      mexFetchNewsletterIsDomainPreviewable: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebMexFetchNewsletterIsDomainPreviewableJob",
          ).mexFetchNewsletterIsDomainPreviewable(e);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      mexFetchNewsletterPendingInvites: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebMexFetchNewsletterPendingInvitesJob",
          ).mexFetchNewsletterPendingInvites(e);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      deletePreviewNewsletters: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebNewsletterCleanupTasks").deletePreviewNewsletters();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      sendNewsletterAdminInviteMessage: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebDebugUtils").getSelectedChat(),
            n = o("WAWebDecodeJid").strictDecodeJid(e);
          if (t == null || n == null)
            throw r("err")("No selected chat or invalid jid");
          yield o(
            "WAWebNewsletterSendMsgAction",
          ).sendNewsletterAdminInviteMessage(t, {
            newsletterWid: n,
            invitee: o("WAWebWidFactory").createUserWidOrThrow(t.id.toString()),
            inviteMessage: "Please become an admin!",
            base64Thumb: null,
          });
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      sendNewsletterFollowerInviteMessage: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebDebugUtils").getSelectedChat(),
            a = o("WAWebDecodeJid").strictDecodeJid(e);
          if (n == null || a == null)
            throw r("err")("No selected chat or invalid jid");
          yield o(
            "WAWebNewsletterSendMsgAction",
          ).sendNewsletterFollowerInviteMessage(n, {
            newsletterWid: a,
            inviteMessage: t != null ? t : "Please follow this channel!",
            base64Thumb: null,
          });
        });
        function t(t, n) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      showDemoteNotif: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                admin: p(),
                user: { id: null, pn: e == null ? void 0 : e.id.toString() },
                actor: p(),
                user_new_role: "SUBSCRIBER",
              },
            },
          });
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      showPromoteNotif: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                admin: p(),
                user: { id: null, pn: e == null ? void 0 : e.id.toString() },
                actor: p(),
                user_new_role: "ADMIN",
              },
            },
          });
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getNewsletterReports: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o(
            "WAWebNewsletterGetReportsAction",
          ).getNewsletterReportsAction();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      changeNewsletterOwner: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebContactCollection").ContactCollection.get(t),
            a = r("WAWebNewsletterCollection").get(e);
          n == null ||
            a == null ||
            (yield o(
              "WAWebChangeNewsletterOwnerAction",
            ).changeNewsletterOwnerAction(a, n));
        });
        function t(t, n) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      subscribeToTestNewsletters: (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          (yield (e || (e = n("Promise"))).all(
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
            yield d());
        });
        function r(e) {
          return t.apply(this, arguments);
        }
        return r;
      })(),
      resetNewsletterTos: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = [
            o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos(),
            o("WAWebNewsletterGatingUtils").getNewsletterProducerTos(),
            o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos(),
          ];
          e.forEach(function (e) {
            (o("WAWebTos").TosManager.resetState(e),
              o(
                "WAWebUserDisclosureCollection",
              ).UserDisclosureCollection.remove(e));
          });
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getNewsletterMessages: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield o(
              "WASmaxNewslettersGetNewsletterMessagesRPC",
            ).sendGetNewsletterMessagesRPC({
              queryNewsletterParamsMixinArgs: {
                queryNewsletterParamsArgs: {
                  queryNewsletterJIDParams: { anyJid: e },
                },
              },
              newsletterMessageRequestPayloadMixinArgs: { messagesCount: t },
            });
            return n;
          } catch (e) {
            throw e;
          }
        });
        function t(t, n) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getNewsletterQuestionResponses: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            try {
              var r = yield o(
                "WASmaxNewslettersGetNewsletterResponsesRPC",
              ).sendGetNewsletterResponsesRPC({
                iqTo: e,
                questionResponsesServerId: t,
                questionResponsesCount: n,
              });
              return r;
            } catch (e) {
              throw e;
            }
          },
        );
        function t(t, n, r) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      sendDummyMilestoneNotification: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            (e === void 0 && (e = "MESSAGE_REACTIONS"),
              t === void 0 && (t = 100),
              n === void 0 && (n = "\u2764\uFE0F"));
            var l = yield o("WAWebNewsletterDBUtils").getMessageByServerId(
              Number(i),
              a,
            );
            if (l == null) throw r("err")("No message found for serverId");
            o(
              "WAWebNewsletterBridgeApi",
            ).NewsletterBridgeApi.displayNewsletterMilestoneDesktopNotification(
              {
                msg: o("WAWebMsgModelFromData").msgModelFromMsgData(l),
                milestoneType: e,
                value: t,
                reactionCode: e === "MESSAGE_REACTIONS" ? n : null,
                chat: o("WAWebFrontendMsgGetters").getChat(l),
              },
            );
          },
        );
        function t(t, n, r, o, a) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.default = _;
  },
  98,
);
