__d(
  "WAWebDebugNewsletter",
  [
    "Promise",
    "WAComms",
    "WAJids",
    "WALinkify",
    "WASmaxNewslettersGetNewsletterMessagesRPC",
    "WASmaxNewslettersGetNewsletterResponsesRPC",
    "WAWap",
    "WAWebChangeNewsletterOwnerAction",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebCommonNewsletterEnums",
    "WAWebContactCollection",
    "WAWebContactModel",
    "WAWebCreateTextStatusFlow.react",
    "WAWebDebugABProps",
    "WAWebDebugUtils",
    "WAWebDecodeJid",
    "WAWebFrontendMsgGetters",
    "WAWebGetUserDisclosuresAction",
    "WAWebLoadNewsletterPreviewChatAction",
    "WAWebLogStatusPosterActions",
    "WAWebMexFetchNewsletterFollowersJob",
    "WAWebMexFetchNewsletterIsDomainPreviewableJob",
    "WAWebMexFetchNewsletterMessageReactionSenderListJob",
    "WAWebMexFetchNewsletterPendingInvitesJob",
    "WAWebModalManager",
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
    "WAWebNewsletterGetRecommendedNewslettersAction",
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
    "WAWebQueryAndUpdateAllNewslettersMetadataAction",
    "WAWebTos",
    "WAWebUserDisclosureCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = function (t) {
        return r("nullthrows")(o("WAComms").getComms()).handleStanza(
          t,
          o("WAComms").DEFAULT_SOCKET_ID,
          0,
        );
      },
      d = function () {
        return Math.round(Date.now() / 1e3);
      };
    function m(e, t) {
      var n;
      r("vulture")("oxiPEvFncdcucmTRDaHG2kFJVXU=");
      var a = (n = o("WAWap")).makeWapNode(
        "notification",
        {
          from: n.JID(o("WAJids").toNewsletterJid(e)),
          type: "newsletter",
          id: n.INT(d()),
          t: n.INT(d()),
        },
        t,
      );
      c(a);
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (r("vulture")("jXREDXiSPUfgS8AbFeKMlC8bUoo="),
            yield o(
              "WAWebQueryAndUpdateAllNewslettersMetadataAction",
            ).queryAndUpdateAllNewsletterMetadataAction(
              o("WAWebCommonNewsletterEnums").NewsletterMetadataUpdateEntryPoint
                .Debug,
            ));
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return (
        r("vulture")("kGH1sG_nwpAtGt_M4t6HyMDqGgU="),
        { id: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString() }
      );
    }
    var g = {
      enableNewsletter: function () {
        var e;
        (r("vulture")("Zl_tGNhlbr63pX0aQAp_8G4CU-s="),
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
              (r("vulture")("ZxVFuLPAE1djEUQ_iW8cnCGS8RE="),
                r("WAWebDebugABProps").overrideABProp("channels_enabled", 2));
            }));
      },
      deleteAllNewsletters: function () {
        (r("vulture")("pCjkHA4-mBgbTAN_58ARnUXw0xI="),
          r("WAWebNewsletterMetadataCollection").delete(),
          o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.delete(),
          r("WAWebNewsletterCollection").delete());
      },
      createNewsletter: function (t) {
        (r("vulture")("AL0JaN3sfZZupBeZTIoT2Tg80M0="),
          o("WAWebNewsletterCreateJob").createNewsletter({
            name: t,
            description: null,
            picture: null,
          }));
      },
      createAndOpenNewsletter: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("W37Kz0rIy-kuQOXX6F6U2UsqBsY=");
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
          r("vulture")("VIo16TExC4GDZLNxl-AkOK43fqA=");
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
        r("vulture")("qVAsh3H8dz1iOMdWcllvJbkVPbA=");
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
          r("vulture")("qoaMhmchLdJvZrxXwz5mQ-Bt1b0="),
          m(
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
          r("vulture")("fcY-jQdhpWfcjFIqrWqi4skzqec="),
          m(
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
          r("vulture")("Hwo9vTm7vnQnp13CDuKSna4soxE="),
          m(
            t,
            o("WAWap").makeWapNode(
              "join",
              null,
              o("WAWap").makeWapNode("metadata", null, [
                o("WAWap").makeWapNode("name", {
                  id: "1",
                  update_time: o("WAWap").INT(d()),
                  text: o("WAWap").CUSTOM_STRING("My Channel"),
                }),
              ]),
            ),
          ));
      },
      sendLeaveNotification: function (t) {
        (t === void 0 && (t = "123@newsletter"),
          r("vulture")("Ka9tWhoLJECaxY401x3YHPIrubY="),
          m(t, o("WAWap").makeWapNode("leave", null)));
      },
      sendMessageToNewsletter: function (t) {
        (t === void 0 && (t = "123@newsletter"),
          r("vulture")("qUkb668XyTukSKZX1jqTMHkR4Q0="));
        var e = new Uint8Array([
            50, 24, 10, 22, 84, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116,
            101, 115, 116, 32, 109, 101, 115, 115, 97, 103, 101,
          ]),
          n = o("WAWap").makeWapNode(
            "message",
            {
              from: o("WAWap").JID(o("WAJids").toNewsletterJid(t)),
              type: "text",
              id: o("WAWap").INT(d()),
              server_id: o("WAWap").INT(d()),
              t: o("WAWap").INT(d()),
            },
            o("WAWap").makeWapNode("plaintext", null, e),
          );
        c(n);
      },
      loadNewsletterPreviewChat: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("Xeh3TwjzxYUEg8Z6fEzB69C-9HY=");
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
          r("vulture")("7uIKKAbP8uaTq29GbxG2KSHOhGw=");
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
          r("vulture")("DNTm0jrqMWgKwr_pDG3WTWxgRCg=");
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
          return (
            r("vulture")("irLniV8Bg1_Zt1YTd5m0Ld5qAaw="),
            o(
              "WAWebNewsletterDirectorySearchAction",
            ).getNewsletterDirectoryCategoriesPreviewAction(e)
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getRecommendedNewsletters: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("UF6EvWTfEMxGb7pXQjl0a3RFvnY=");
          var e = yield o(
            "WAWebNewsletterGetRecommendedNewslettersAction",
          ).getRecommendedNewslettersAction();
          return e;
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      refreshAllNewsletters: p,
      getUserNotices: function () {
        return (
          r("vulture")("B_rV6kCpyR16PMa7bP5wsx3mpXk="),
          o("WAWebGetUserDisclosuresAction").getUserDisclosuresAction()
        );
      },
      openChannelAt: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (r("vulture")("OMK_9FbYp1upSMdqlQhNIdlLLBQ="),
            yield o("WAWebNewsletterOpenAtAction").openNewsletterAt({
              newsletterJid: e,
              serverId: t,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Debug,
            }));
        });
        function t(t, n) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      mexFetchSubscriberList: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          r("vulture")("LjnjNh47xpKpXspFhvsAJLzvtAA=");
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
          r("vulture")("Lsr41e495mdoD09sxBQqCDpVRcQ=");
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
          r("vulture")("0ugf21Dn_dLST4o-csJ2XFMO9OQ=");
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
          r("vulture")("IlAL7p3vq9cf0nfLZtQRDDdaAiY=");
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
          (r("vulture")("ULdvvD6GOh-L3VA6phuSSDEI0u0="),
            yield o("WAWebNewsletterCleanupTasks").deletePreviewNewsletters());
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      sendNewsletterAdminInviteMessage: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("egtjCnCfXAWYMKIjP-sDdHczAe4=");
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
          r("vulture")("9to7V2njUyHWfgq7v3gwUmy2DWI=");
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
          r("vulture")("tO3wzanE9Fn2NwlkGJrhbtiDyr4=");
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
                admin: f(),
                user: { id: e == null ? void 0 : e.id.toString() },
                actor: f(),
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
          r("vulture")("FiURiIB2RjEyPpwzzaR8f_NyXY4=");
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
                admin: f(),
                user: { id: e == null ? void 0 : e.id.toString() },
                actor: f(),
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
          (r("vulture")("Mde0UtbKMElf_UV4a07Be8T-RH0="),
            yield o(
              "WAWebNewsletterGetReportsAction",
            ).getNewsletterReportsAction());
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      changeNewsletterOwner: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          r("vulture")("7hNZ7UiwHwzun-f5pSNGHR4t4bA=");
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
          (r("vulture")("8UXdPX-jzC_AujOw3G6xZcrzYGY="),
            yield (e || (e = n("Promise"))).all(
              t.map(function (e) {
                r("vulture")("RQb6a6Y5s6GtaAxy1F_qnEfd6XI=");
                var t = o("WAWebDecodeJid").strictDecodeJid(e);
                if (t != null)
                  return o(
                    "WAWebNewsletterSubscribeAction",
                  ).subscribeToNewsletterWidAction(
                    o("WAWebWidFactory").asNewsletterWidOrThrow(t),
                  );
              }),
            ),
            yield p());
        });
        function a(e) {
          return t.apply(this, arguments);
        }
        return a;
      })(),
      resetNewsletterTos: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("IEAJatWt6QH-Rghwqv4wCDbJyg4=");
          var e = [
            o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos(),
            o("WAWebNewsletterGatingUtils").getNewsletterProducerTos(),
            o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos(),
          ];
          e.forEach(function (e) {
            (r("vulture")("3lnQlAh-k6nD5Pj6iVk6wZIdfUA="),
              o("WAWebTos").TosManager.resetState(e),
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
          r("vulture")("b5_0hN7xvVXtjbpIBG9QJfcZ1xA=");
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
            r("vulture")("Nn4nHFEYQo-GvZ26nFpcYWxrUso=");
            try {
              var a = yield o(
                "WASmaxNewslettersGetNewsletterResponsesRPC",
              ).sendGetNewsletterResponsesRPC({
                iqTo: e,
                questionResponsesServerId: t,
                questionResponsesCount: n,
              });
              return a;
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
              n === void 0 && (n = "\u2764\uFE0F"),
              r("vulture")("6L4RfYXfWrGsUSPbHOKoT50UsHQ="));
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
      getLastChannelMessageServerId: function () {
        var e;
        r("vulture")("v_tV2ahR5hgdlPTRZ-aUH0kOgzg=");
        var t = o("WAWebDebugUtils").getSelectedChat();
        if (t == null)
          throw r("err")("getLastChannelMessageServerId: no selected chat");
        var n = (e = t.msgs.last()) == null ? void 0 : e.serverId;
        if (n == null)
          throw r("err")(
            "getLastChannelMessageServerId: latest message has no serverId",
          );
        return n;
      },
      getLastChannelMessageId: function () {
        var e;
        r("vulture")("nDtihl4DCXRhwSDWbG8GsS5ZyFA=");
        var t = o("WAWebDebugUtils").getSelectedChat();
        if (t == null)
          throw r("err")("getLastChannelMessageId: no selected chat");
        var n = (e = t.msgs.last()) == null ? void 0 : e.id.id;
        if (n == null)
          throw r("err")("getLastChannelMessageId: latest message has no id");
        return n;
      },
      getLastChannelMessageT: function () {
        var e;
        r("vulture")("C5-j7FaDhYMxhRV-lSk8FF1ZD4U=");
        var t = o("WAWebDebugUtils").getSelectedChat();
        if (t == null)
          throw r("err")("getLastChannelMessageT: no selected chat");
        var n = (e = t.msgs.last()) == null ? void 0 : e.t;
        if (n == null)
          throw r("err")("getLastChannelMessageT: latest message has no t");
        return n;
      },
      addProfilePictureDeletionAlertForSelectedChat: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("dwD0Dgh9S3zpLVvxLOJIHJBBLVw=");
          var e = o("WAWebDebugUtils").getSelectedChat();
          if (e == null)
            throw r("err")(
              "addProfilePictureDeletionAlertForSelectedChat: no selected chat",
            );
          yield o(
            "WAWebNewsletterBridgeApi",
          ).NewsletterBridgeApi.updateProfilePictureDeletionAlertState({
            newsletterWid: o("WAWebWidFactory").asNewsletterWidOrThrow(e.id),
          });
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      setNewsletterSubscriberCountForSelectedChat: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("_271Q5ekMKAgj5UX3QOy2RM0FRI=");
          var t = o("WAWebDebugUtils").getSelectedChat();
          if (t == null)
            throw r("err")(
              "setNewsletterSubscriberCountForSelectedChat: no selected chat",
            );
          yield o(
            "WAWebNewsletterBridgeApi",
          ).NewsletterBridgeApi.updateNewsletterSubscriberCount({
            id: t.id,
            update: { newSubscriberCount: e },
          });
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      openNewsletterStatusTextComposer: function () {
        (r("vulture")("Eq2J2I-RaMghHnKCGt_vPuZpQjQ="),
          o("WAWebModalManager").ModalManager.openMedia(
            u.createElement(r("WAWebCreateTextStatusFlow.react"), {
              entryPoint: o("WAWebLogStatusPosterActions")
                .STATUS_CREATION_ENTRY_POINT.CHANNEL_THREAD_SCREEN,
              isNewsletterStatus: !0,
              statusPostingSessionId: o(
                "WAWebLogStatusPosterActions",
              ).createStatusPostingSessionId(),
            }),
            { transition: "status-modal" },
          ));
      },
    };
    l.default = g;
  },
  98,
);
