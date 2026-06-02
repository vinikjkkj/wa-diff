__d(
  "WAWebNewsletterBridgeApi",
  [
    "WALogger",
    "WAWebCommonNewsletterEnums",
    "WAWebContactCollection",
    "WAWebDBUpdateLastAddOnPreviewChat",
    "WAWebDeleteStatusAction",
    "WAWebLastAddOnDBSerialization",
    "WAWebMexNewsletterUtils",
    "WAWebMsgCollection",
    "WAWebMsgModelFromData",
    "WAWebMsgType",
    "WAWebNewsletterAdminInsightsModel",
    "WAWebNewsletterBridgeMsgAddOnsUtils",
    "WAWebNewsletterCollection",
    "WAWebNewsletterEnforcementAlertCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNewsletterQuestionResponseCollection",
    "WAWebNewsletterReportCollection",
    "WAWebNewsletterSubscriberModel",
    "WAWebNewsletterValidationUtils",
    "WAWebNotificationBackend",
    "WAWebProfilePicThumbCollection",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "WAWebShouldUpdateLastAddOnPreview",
    "WAWebShowNewsletterMetadataUpdateNotification",
    "WAWebShowNewsletterRoleChangeNotification",
    "WAWebStatusCollection",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUpdateNewsletterMsgUIAction",
    "WAWebUpdateUnreadChatAction",
    "WAWebUserPrefsNewsletter",
    "WAWebWidFactory",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = ["id"],
      m = ["id"],
      p = ["id"],
      _ = ["id"],
      f = ["id"],
      g = ["id"];
    function h(e, t) {
      var n = r("WAWebNewsletterCollection").get(e);
      n == null || n.mute.setMute(t, !1, !0);
    }
    var y = {
      updateNewsletterMessageUI: function (t) {
        var e = t.chatID,
          n = t.isOrphan,
          r = t.msg;
        if (!n) {
          var a = o("WAWebMsgModelFromData").msgModelFromMsgData(r);
          return o(
            "WAWebUpdateNewsletterMsgUIAction",
          ).updateNewsletterMessageUI(a, e);
        }
      },
      deleteNewsletter: function (t) {
        var e,
          n = t.id,
          a = t.keep,
          i =
            r("WAWebNewsletterCollection") == null
              ? void 0
              : r("WAWebNewsletterCollection").get(n),
          l = i == null ? void 0 : i.newsletterMetadata;
        if (a) {
          (l != null &&
            (l.membershipType = o(
              "WAWebCommonNewsletterEnums",
            ).NewsletterMembershipType.Guest),
            o("WAWebDeleteStatusAction").clearStatusForRemovedContact());
          return;
        }
        var s = i == null ? void 0 : i.msgs;
        (s != null && o("WAWebMsgCollection").MsgCollection.remove(s),
          i == null || i.delete(),
          i == null || (e = i.newsletterMetadata) == null || e.delete(),
          o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.remove(
            n,
          ),
          o("WAWebDeleteStatusAction").clearStatusForRemovedContact());
      },
      joinNewsletter: async function (t) {
        var e = t.metadata,
          n = t.msgs,
          a = t.newsletter,
          i = t.noEarlierMsgs,
          l = t.pic,
          s = r("WAWebNewsletterCollection").gadd(a, { merge: !0 });
        (n != null &&
          (await o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            s.id,
            n,
            { isHistory: !0, add: "search" },
            "joinNewsletter",
            s.msgs,
          )),
          i === !0 && (s.msgs.msgLoadState.noEarlierMsgs = !0),
          o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.add(l, {
            merge: !0,
          }),
          r("WAWebNewsletterMetadataCollection").add(e, { merge: !0 }),
          o("WAWebStatusCollection").StatusCollection.sync());
      },
      updateNewsletterMetadata: function (t) {
        var e = t.metadata,
          n = t.newsletter,
          a = t.pic,
          i = e.id,
          l = babelHelpers.objectWithoutPropertiesLoose(e, d),
          s = n.id,
          u = babelHelpers.objectWithoutPropertiesLoose(n, m),
          c = a.id,
          _ = babelHelpers.objectWithoutPropertiesLoose(a, p);
        (r("WAWebNewsletterCollection")
          .gadd(i)
          .set(
            r("lodash").pickBy(u, function (e) {
              return e != null;
            }),
            { merge: !0 },
          ),
          r("WAWebNewsletterMetadataCollection")
            .gadd(i)
            .set(
              r("lodash").pickBy(l, function (e) {
                return e != null;
              }),
              { merge: !0 },
            ),
          o("WAWebProfilePicThumbCollection")
            .ProfilePicThumbCollection.gadd(i)
            .set(_, { merge: !0 }),
          l.name != null &&
            o("WAWebContactCollection")
              .ContactCollection.gadd(i)
              .set({ name: l.name }, { merge: !0 }));
      },
      toggleNewsletterAdminActivityMuteState: function (t) {
        var e = t.id,
          n = t.muteExpirationValue;
        h(e, n);
      },
      toggleNewsletterFollowerActivityMuteState: function (t) {
        var e,
          n = t.id,
          o = t.muteExpirationValue,
          a = r("WAWebNewsletterCollection").get(n);
        a == null ||
          (e = a.newsletterMetadata) == null ||
          e.setFollowerActivityMuteExpiration(o);
      },
      updateNewsletterSubscriberCount: function (t) {
        var e,
          n,
          o = t.id,
          a = t.update,
          i =
            r("WAWebNewsletterCollection") == null ||
            (e = r("WAWebNewsletterCollection").get(o)) == null
              ? void 0
              : e.newsletterMetadata;
        if (i != null) {
          var l = i.size,
            s =
              (n = a.newSubscriberCount) != null ? n : Number(a.increment) + l;
          i.set("size", s);
        }
      },
      updateNewsletterUnreadMsgCount: function (t) {
        var e = t.id,
          n = r("WAWebNewsletterCollection").get(e);
        n != null &&
          o("WAWebUpdateUnreadChatAction").updateUnreadCountMD(n, 0, !1);
      },
      subscribeToNewsletter: function (n) {
        var t = n.newsletter,
          a = t.newsletterMetadata;
        if (a == null) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[subscribeToNewsletter] newsletterMetadata=null",
              ])),
          );
          return;
        }
        ((a.membershipType = o(
          "WAWebCommonNewsletterEnums",
        ).NewsletterMembershipType.Subscriber),
          r("WAWebNewsletterCollection").add(t, { merge: !0 }));
      },
      loadNewsletterPreviewChat: async function (t) {
        var e = t.messages,
          n = t.metadata,
          a = t.newsletter,
          i = t.pic,
          l = n.id,
          s = babelHelpers.objectWithoutPropertiesLoose(n, _);
        if (
          (r("WAWebNewsletterMetadataCollection").gadd(l).set(s, { merge: !0 }),
          i != null)
        ) {
          var u = i.id,
            c = babelHelpers.objectWithoutPropertiesLoose(i, f);
          o("WAWebProfilePicThumbCollection")
            .ProfilePicThumbCollection.gadd(l)
            .set(c, { merge: !0 });
        }
        (o("WAWebContactCollection").ContactCollection.add(
          { id: l, name: n.name },
          { merge: !0 },
        ),
          r("WAWebNewsletterCollection").add(a, { merge: !0 }));
        var d = r("WAWebNewsletterCollection").get(l);
        return (
          d != null &&
            e != null &&
            (await o(
              "WAWebMsgCollection",
            ).MsgCollection.processMultipleMessages(
              d.id,
              e,
              { isHistory: !0, add: "search" },
              "loadPreviewNewsletter",
              d.msgs,
            )),
          d
        );
      },
      terminateNewsletter: function (t) {
        var e = t.id,
          n = t.msgs;
        if (
          (r("WAWebNewsletterMetadataCollection") == null ||
            r("WAWebNewsletterMetadataCollection")
              .gadd(e)
              .set({ terminated: !0 }, { merge: !0 }),
          n != null)
        ) {
          var a;
          (a = r("WAWebNewsletterCollection").get(e)) == null ||
            a.msgs.add(
              n.map(function (e) {
                return o("WAWebMsgModelFromData").msgModelFromMsgData(e);
              }),
            );
        }
      },
      updateNewsletterPicture: function (t) {
        var e = t.pic,
          n = e.id,
          r = babelHelpers.objectWithoutPropertiesLoose(e, g);
        o("WAWebProfilePicThumbCollection")
          .ProfilePicThumbCollection.gadd(n)
          .set(r, { merge: !0 });
      },
      updateNewsletterMsgPaidPartnershipLabel: function (t) {
        var e = t.id,
          n = o("WAWebMsgCollection").MsgCollection.get(e);
        n == null || n.set("hasPaidPartnershipLabel", !0);
      },
      updateNewsletterMessages: async function (t) {
        var e,
          n = t.forwardsCounts,
          r = t.ids,
          a = t.msgs,
          i = t.pollVotes,
          l = t.questionResponsesCounts,
          s = t.reactionIdsToRemove,
          u = t.reactions,
          c = t.timestamp,
          d = t.viewCounts;
        (await (e = o("WAWebNewsletterBridgeMsgAddOnsUtils")).updateReactions({
          ids: r,
          reactions: u,
          reactionIdsToRemove: s,
        }),
          await e.updatePollVotes({ ids: r, pollVotes: i }),
          e.updateForwardCounts(n),
          e.updateViewCounts(d),
          e.updateQuestionResponsesCounts(l),
          e.updateLastUpdateTs(r, c));
        var m =
          a == null
            ? void 0
            : a.filter(function (e) {
                return e.kind === o("WAWebMsgType").MsgKind.RevokedMessage;
              });
        m != null &&
          m.length > 0 &&
          (await o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            m[0].id.remote,
            m,
            {},
            "updateNewsletterMessages",
          ));
      },
      updateNewsletterMessageDeliveryUpdate: function (t) {
        var e,
          n,
          a = t.id,
          i = t.modelUpdatesToAdd,
          l = t.modelUpdatesToRemove,
          s = r("WAWebNewsletterCollection").get(a);
        s != null &&
          ((e = s.newsletterMetadata) == null ||
            e.messageDeliveryUpdates.remove(l),
          (n = s.newsletterMetadata) == null ||
            n.messageDeliveryUpdates.add(
              i.map(function (e) {
                var t = o("WAWebMsgModelFromData").msgModelFromMsgData(
                  e.msgData,
                );
                return (
                  o("WAWebMsgCollection").MsgCollection.add(t, { merge: !0 }),
                  babelHelpers.extends({}, e, { msgModel: t })
                );
              }),
              { merge: !0 },
            ));
      },
      findMsgKeyFromServerId: function (t) {
        var e,
          n = t.from,
          o = t.serverId,
          a = r("WAWebNewsletterCollection").get(n);
        return a == null ||
          (e = a.msgs) == null ||
          (e = e.findFirst(function (e) {
            return e.serverId === o;
          })) == null
          ? void 0
          : e.id;
      },
      updateMsgsViewed: function (t) {
        var e = t.ids;
        e.forEach(function (e) {
          var t;
          (t = o("WAWebMsgCollection").MsgCollection.get(e)) == null ||
            t.set("viewed", !0);
        });
      },
      updateGeosuspendedCountry: function (t) {
        var e = t.countryCodes,
          n = t.id,
          o = t.toAdd,
          a = r("WAWebNewsletterCollection").get(n);
        if (a != null)
          if (o) {
            var i;
            (i = a.newsletterMetadata) == null ||
              i.geosuspendedCountries.add(
                e.map(function (e) {
                  return { id: e, geosuspended: !0 };
                }),
              );
          } else {
            var l;
            (l = a.newsletterMetadata) == null ||
              l.geosuspendedCountries.remove(
                e.map(function (e) {
                  return e;
                }),
              );
          }
      },
      suspendNewsletter: function (t) {
        var e = t.id;
        r("WAWebNewsletterMetadataCollection")
          .gadd(e)
          .set({ suspended: !0 }, { merge: !0 });
      },
      geosuspendNewsletter: function (t) {
        var e = t.id;
        r("WAWebNewsletterMetadataCollection")
          .gadd(e)
          .set({ suspended: !0, geosuspended: !0 }, { merge: !0 });
      },
      updateProfilePictureDeletionAlertState: function (t) {
        var e = t.newsletterWid;
        r("WAWebNewsletterMetadataCollection")
          .gadd(e)
          .set({ hasProfilePictureDeletionAlerts: !0 }, { merge: !0 });
      },
      updateNewsletterAdminProfile: function (t) {
        var e = t.adminProfile,
          n = t.id;
        r("WAWebNewsletterMetadataCollection")
          .gadd(n)
          .set({ adminProfile: e }, { merge: !0 });
      },
      getActiveNewsletter: function () {
        var e;
        return (e = r("WAWebNewsletterCollection").getActive()) == null
          ? void 0
          : e.id;
      },
      getNewsletterMetadata: function (t) {
        var e,
          n = t.id;
        return (e = r("WAWebNewsletterCollection").get(n)) == null
          ? void 0
          : e.newsletterMetadata;
      },
      handleMyRoleChangeNotification: async function (t) {
        var e,
          n = t.jid,
          a = o("WAWebWidFactory").createWid(n),
          i = r("WAWebNewsletterCollection").get(a);
        i == null ||
          (e = i.newsletterMetadata) == null ||
          (e = e.subscribers) == null ||
          e.reset();
        var l = i != null;
        await o(
          "WAWebQueryAndUpdateNewslettersMetadataAction",
        ).queryAndUpdateNewsletterMetadataAction(n, {
          messageCount: l ? void 0 : 1,
          fields: {
            membership: !0,
            state: !0,
            creationTime: l ? void 0 : !0,
            description: l ? void 0 : !0,
            handle: l ? void 0 : !0,
            inviteLink: l ? void 0 : !0,
            linkedAccounts: l ? void 0 : !0,
            muted: l ? void 0 : !0,
            name: l ? void 0 : !0,
            picture: l ? void 0 : !0,
            privacy: l ? void 0 : !0,
            subscribers: l ? void 0 : !0,
            verification: l ? void 0 : !0,
          },
        });
      },
      displayRoleChangeDesktopNotification: async function (t) {
        var e,
          n,
          a = t.notification,
          i =
            a.xwa2_notify_newsletter_admin_promote != null
              ? "promote"
              : "demote",
          l =
            (e = a.xwa2_notify_newsletter_admin_promote) != null
              ? e
              : a.xwa2_notify_newsletter_admin_demote;
        if (l != null) {
          var s =
              l != null
                ? r("WAWebNewsletterCollection").get(l == null ? void 0 : l.id)
                : null,
            u =
              l.user.id != null
                ? o("WAWebWidFactory").createUserWidOrThrow(l.user.id)
                : null,
            c = o("WAWebMexNewsletterUtils").mapRoleToMembership(
              l.user_new_role,
            );
          if (!(u == null || s == null || c == null)) {
            var d =
                ((n = l.admin) == null ? void 0 : n.id) != null
                  ? o("WAWebWidFactory").createUserWidOrThrow(l.admin.id)
                  : null,
              m = s;
            await o(
              "WAWebShowNewsletterRoleChangeNotification",
            ).showNewsletterRoleChangeNotification({
              mode: i,
              user: u,
              admin: d,
              chat: m,
              newRole: c,
            });
          }
        }
      },
      displayNewsletterMilestoneDesktopNotification: async function (t) {
        o("WAWebNotificationBackend").showNewsletterMilestoneNotification(t);
      },
      handleOtherUserRoleChangeNotification: async function (t) {
        var e,
          n,
          a = t.jid,
          i = t.newRole,
          l = t.userId,
          s = o("WAWebWidFactory").createWid(a),
          u = r("WAWebNewsletterCollection").get(s),
          c =
            u == null ||
            (e = u.newsletterMetadata) == null ||
            (e = e.subscribers) == null
              ? void 0
              : e.get(l);
        if (c != null) c.membership = i;
        else {
          var d = o("WAWebContactCollection").ContactCollection.get(l);
          if (
            (d ||
              (d = o("WAWebContactCollection").ContactCollection.gadd({
                id: l,
                type: "out",
              })),
            i ===
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin &&
              d)
          ) {
            var m;
            u == null ||
              (m = u.newsletterMetadata) == null ||
              (m = m.subscribers) == null ||
              m.add(
                new (o("WAWebNewsletterSubscriberModel").NewsletterSubscriber)({
                  id: l,
                  membership: i,
                  isPendingAdmin: !1,
                  contact: d,
                }),
              );
          }
        }
        if (
          (u == null ||
            (n = u.newsletterMetadata) == null ||
            (n = n.subscribers) == null ||
            n.sort(),
          i === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin)
        ) {
          var p;
          u == null ||
            (p = u.newsletterMetadata) == null ||
            (p = p.pendingAdmins) == null ||
            p.remove(l);
        }
      },
      updateChatPreviewFromReaction: async function (t) {
        var e = t.parentMsgKey,
          n = t.reactionMsgObj,
          r = await o(
            "WAWebShouldUpdateLastAddOnPreview",
          ).filterChatsWithAddOnPreviewUpdates([
            o(
              "WAWebLastAddOnDBSerialization",
            ).lastAddOnPreviewCandidateFromReactionRowType(
              babelHelpers.extends({}, n, { parentMsgKey: e.toString() }),
            ),
          ]);
        r.size > 0 &&
          (await o(
            "WAWebDBUpdateLastAddOnPreviewChat",
          ).updateDatabaseForLastAddOnPreview(r),
          o(
            "WAWebUpdateLastAddOnPreviewChatAction",
          ).updateModelsForLastAddOnPreview(r));
      },
      updateChatPreviewFromVote: async function (t) {
        var e = t.parentMsgKey,
          n = t.voteMsgObj,
          r = await o(
            "WAWebShouldUpdateLastAddOnPreview",
          ).filterChatsWithAddOnPreviewUpdates([
            o(
              "WAWebLastAddOnDBSerialization",
            ).lastAddOnPreviewCandidateFromVoteData(
              babelHelpers.extends({}, n, { parentMsgKey: e }),
              !1,
            ),
          ]);
        r.size > 0 &&
          (await o(
            "WAWebDBUpdateLastAddOnPreviewChat",
          ).updateDatabaseForLastAddOnPreview(r),
          o(
            "WAWebUpdateLastAddOnPreviewChatAction",
          ).updateModelsForLastAddOnPreview(r));
      },
      updateNewsletterReports: async function (t) {
        var e = t.reports;
        (o(
          "WAWebNewsletterReportCollection",
        ).NewsletterReportCollection.reset(),
          o("WAWebNewsletterReportCollection").NewsletterReportCollection.add(
            e,
          ));
      },
      updateNewsletterReport: async function (t) {
        var e = t.report;
        o("WAWebNewsletterReportCollection").NewsletterReportCollection.add(e, {
          merge: !0,
        });
      },
      updateNewsletterEnforcementAlerts: async function (t) {
        var e = t.enforcementAlerts;
        (o(
          "WAWebNewsletterEnforcementAlertCollection",
        ).NewsletterEnforcementAlertCollection.reset(),
          o(
            "WAWebNewsletterEnforcementAlertCollection",
          ).NewsletterEnforcementAlertCollection.add(e));
      },
      updateNewsletterQuestionResponses: async function (t) {
        var e = t.append,
          n = t.responses;
        (e ||
          o(
            "WAWebNewsletterQuestionResponseCollection",
          ).QuestionResponseCollection.reset(),
          o(
            "WAWebNewsletterQuestionResponseCollection",
          ).QuestionResponseCollection.add(n));
      },
      hideNewsletterQuestionResponse: async function (t) {
        var e,
          n = t.questionServerId,
          r = t.responseServerId,
          a = await ((e = o(
            "WAWebNewsletterQuestionResponseCollection",
          ).QuestionResponseCollection.filter(function (e) {
            return e.responseServerId === r && e.questionServerId === n;
          })) == null
            ? void 0
            : e[0]);
        a != null &&
          o(
            "WAWebNewsletterQuestionResponseCollection",
          ).QuestionResponseCollection.remove(a);
      },
      updateMyNewsletterMembershipRole: async function (t) {
        var e = t.newRole,
          n = t.newsletter,
          a = n.newsletterMetadata;
        if (a == null) {
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[updateNewsletterMembershipRole] newsletterMetadata=null",
              ])),
          );
          return;
        }
        ((a.membershipType = e),
          r("WAWebNewsletterCollection").add(n, { merge: !0 }));
      },
      updateNewsletterMemberRole: async function (t) {
        var e,
          n = t.member,
          r = t.newRole,
          a = t.newsletter,
          i = a.newsletterMetadata;
        if (i == null) {
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[updateNewsletterMembershipRole] newsletterMetadata=null",
              ])),
          );
          return;
        }
        var l = (e = i.subscribers) == null ? void 0 : e.get(n.id);
        if (l != null) {
          var s;
          ((l.membership = r),
            (s = a.newsletterMetadata) == null ||
              (s = s.subscribers) == null ||
              s.sort());
          var c = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            a.id.toJid(),
          );
          await o("WAWebUserPrefsNewsletter").flushCachedNewsletterSubscribers(
            c,
          );
        }
      },
      displayNewsletterMetadataUpdateNotification: function (t) {
        var e = t.notification,
          n = e.actorId,
          a = e.newsletterId,
          i = e.updates,
          l = r("WAWebNewsletterCollection").get(a);
        l != null &&
          o(
            "WAWebShowNewsletterMetadataUpdateNotification",
          ).showNewsletterMetadataUpdateNotification({
            chat: l,
            user: n,
            updates: i,
          });
      },
      expireNewsletterAdminInvites: async function (t) {
        var e = t.expiredMsgData;
        e.forEach(function (e) {
          var t,
            n = e.id,
            r = e.newsletterAdminInviteInfo;
          (t = o("WAWebMsgCollection").MsgCollection.get(n)) == null ||
            t.set({ newsletterAdminInviteInfo: r });
        });
      },
      updateNewsletterInsights: function (t) {
        var e = t.insights,
          n = t.newsletter,
          r = n.newsletterMetadata;
        if (r == null) {
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[updateNewsletterInsights] newsletterMetadata=null",
              ])),
          );
          return;
        }
        var a = r.adminInsights;
        a == null
          ? (r.adminInsights = new (o(
              "WAWebNewsletterAdminInsightsModel",
            ).NewsletterAdminInsights)(e))
          : a.set(babelHelpers.extends({}, e));
      },
      handleNewsletterWamoSubStatusChangeNotification: async function (t) {
        var e = t.jid,
          n = t.wamoSubStatus,
          a = o("WAWebWidFactory").createWid(e),
          i = r("WAWebNewsletterCollection").get(a);
        if (i != null) {
          var l = i.newsletterMetadata;
          (l != null && (l.wamoSubStatus = n),
            await o(
              "WAWebQueryAndUpdateNewslettersMetadataAction",
            ).queryAndUpdateNewsletterMetadataAction(e),
            n === o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE &&
              (await o(
                "WAWebNewsletterPullMessagesFromServerAction",
              ).pullNewsletterMessagesFromServer(i, {
                messageCount: o(
                  "WAWebNewsletterGatingUtils",
                ).getMaxMsgCountFromServer(),
              })));
        }
      },
    };
    l.NewsletterBridgeApi = y;
  },
  98,
);
