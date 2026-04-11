__d(
  "WAWebNewsletterBridgeApi",
  [
    "WALogger",
    "WAWebCommonNewsletterEnums",
    "WAWebContactCollection",
    "WAWebDBUpdateLastAddOnPreviewChat",
    "WAWebDeleteStatusAction",
    "WAWebLastAddOnDBSerialization",
    "WAWebMexNewsletterRoleChangeNotificationHandler",
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
    "asyncToGeneratorRuntime",
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
      joinNewsletter: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.metadata,
            n = e.msgs,
            a = e.newsletter,
            i = e.noEarlierMsgs,
            l = e.pic,
            s = r("WAWebNewsletterCollection").gadd(a, { merge: !0 });
          (n != null &&
            (yield o(
              "WAWebMsgCollection",
            ).MsgCollection.processMultipleMessages(
              s.id,
              n,
              { isHistory: !0, add: "search" },
              "joinNewsletter",
              s.msgs,
            )),
            i === !0 && (s.msgs.msgLoadState.noEarlierMsgs = !0),
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.add(
              l,
              { merge: !0 },
            ),
            r("WAWebNewsletterMetadataCollection").add(t, { merge: !0 }),
            o("WAWebStatusCollection").StatusCollection.sync());
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
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
      loadNewsletterPreviewChat: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.messages,
            n = e.metadata,
            a = e.newsletter,
            i = e.pic,
            l = n.id,
            s = babelHelpers.objectWithoutPropertiesLoose(n, _);
          if (
            (r("WAWebNewsletterMetadataCollection")
              .gadd(l)
              .set(s, { merge: !0 }),
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
              t != null &&
              (yield o(
                "WAWebMsgCollection",
              ).MsgCollection.processMultipleMessages(
                d.id,
                t,
                { isHistory: !0, add: "search" },
                "loadPreviewNewsletter",
                d.msgs,
              )),
            d
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
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
      updateNewsletterMessages: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.forwardsCounts,
            r = e.ids,
            a = e.msgs,
            i = e.pollVotes,
            l = e.questionResponsesCounts,
            s = e.reactionIdsToRemove,
            u = e.reactions,
            c = e.timestamp,
            d = e.viewCounts;
          (yield (t = o("WAWebNewsletterBridgeMsgAddOnsUtils")).updateReactions(
            { ids: r, reactions: u, reactionIdsToRemove: s },
          ),
            yield t.updatePollVotes({ ids: r, pollVotes: i }),
            t.updateForwardCounts(n),
            t.updateViewCounts(d),
            t.updateQuestionResponsesCounts(l),
            t.updateLastUpdateTs(r, c));
          var m =
            a == null
              ? void 0
              : a.filter(function (e) {
                  return e.kind === o("WAWebMsgType").MsgKind.RevokedMessage;
                });
          m != null &&
            m.length > 0 &&
            (yield o(
              "WAWebMsgCollection",
            ).MsgCollection.processMultipleMessages(
              m[0].id.remote,
              m,
              {},
              "updateNewsletterMessages",
            ));
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
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
      handleMyRoleChangeNotification: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.jid,
            a = o("WAWebWidFactory").createWid(n),
            i = r("WAWebNewsletterCollection").get(a);
          i == null ||
            (t = i.newsletterMetadata) == null ||
            (t = t.subscribers) == null ||
            t.reset();
          var l = i != null;
          yield o(
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
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      displayRoleChangeDesktopNotification: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.notification,
            a =
              n.xwa2_notify_newsletter_admin_promote != null
                ? "promote"
                : "demote",
            i =
              (t = n.xwa2_notify_newsletter_admin_promote) != null
                ? t
                : n.xwa2_notify_newsletter_admin_demote;
          if (i != null) {
            var l =
                i != null
                  ? r("WAWebNewsletterCollection").get(
                      i == null ? void 0 : i.id,
                    )
                  : null,
              s = o(
                "WAWebMexNewsletterRoleChangeNotificationHandler",
              ).getUserIdFromPayload(babelHelpers.extends({}, i.user)),
              u = o("WAWebMexNewsletterUtils").mapRoleToMembership(
                i.user_new_role,
              );
            if (!(s == null || l == null || u == null)) {
              var c =
                  i.admin &&
                  o(
                    "WAWebMexNewsletterRoleChangeNotificationHandler",
                  ).getUserIdFromPayload(babelHelpers.extends({}, i.admin)),
                d = l;
              yield o(
                "WAWebShowNewsletterRoleChangeNotification",
              ).showNewsletterRoleChangeNotification({
                mode: a,
                user: s,
                admin: c,
                chat: d,
                newRole: u,
              });
            }
          }
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      displayNewsletterMilestoneDesktopNotification: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebNotificationBackend").showNewsletterMilestoneNotification(e);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      handleOtherUserRoleChangeNotification: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = e.jid,
            i = e.newRole,
            l = e.userId,
            s = o("WAWebWidFactory").createWid(a),
            u = r("WAWebNewsletterCollection").get(s),
            c =
              u == null ||
              (t = u.newsletterMetadata) == null ||
              (t = t.subscribers) == null
                ? void 0
                : t.get(l);
          if (c != null) c.membership = i;
          else {
            var d = o("WAWebContactCollection").ContactCollection.get(l);
            if (
              (!d &&
                o(
                  "WAWebNewsletterGatingUtils",
                ).isNewsletterMultiAdminLidMigrationEnabled() &&
                (d = o("WAWebContactCollection").ContactCollection.gadd({
                  id: l,
                  type: "out",
                })),
              i ===
                o("WAWebCommonNewsletterEnums").NewsletterMembershipType
                  .Admin && d)
            ) {
              var m;
              u == null ||
                (m = u.newsletterMetadata) == null ||
                (m = m.subscribers) == null ||
                m.add(
                  new (o(
                    "WAWebNewsletterSubscriberModel",
                  ).NewsletterSubscriber)({
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
            i ===
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin)
          ) {
            var p;
            u == null ||
              (p = u.newsletterMetadata) == null ||
              (p = p.pendingAdmins) == null ||
              p.remove(l);
          }
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      updateChatPreviewFromReaction: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.parentMsgKey,
            n = e.reactionMsgObj,
            r = yield o(
              "WAWebShouldUpdateLastAddOnPreview",
            ).filterChatsWithAddOnPreviewUpdates([
              o(
                "WAWebLastAddOnDBSerialization",
              ).lastAddOnPreviewCandidateFromReactionRowType(
                babelHelpers.extends({}, n, { parentMsgKey: t.toString() }),
              ),
            ]);
          r.size > 0 &&
            (yield o(
              "WAWebDBUpdateLastAddOnPreviewChat",
            ).updateDatabaseForLastAddOnPreview(r),
            o(
              "WAWebUpdateLastAddOnPreviewChatAction",
            ).updateModelsForLastAddOnPreview(r));
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      updateChatPreviewFromVote: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.parentMsgKey,
            n = e.voteMsgObj,
            r = yield o(
              "WAWebShouldUpdateLastAddOnPreview",
            ).filterChatsWithAddOnPreviewUpdates([
              o(
                "WAWebLastAddOnDBSerialization",
              ).lastAddOnPreviewCandidateFromVoteData(
                babelHelpers.extends({}, n, { parentMsgKey: t }),
                !1,
              ),
            ]);
          r.size > 0 &&
            (yield o(
              "WAWebDBUpdateLastAddOnPreviewChat",
            ).updateDatabaseForLastAddOnPreview(r),
            o(
              "WAWebUpdateLastAddOnPreviewChatAction",
            ).updateModelsForLastAddOnPreview(r));
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      updateNewsletterReports: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.reports;
          (o(
            "WAWebNewsletterReportCollection",
          ).NewsletterReportCollection.reset(),
            o("WAWebNewsletterReportCollection").NewsletterReportCollection.add(
              t,
            ));
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      updateNewsletterReport: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.report;
          o("WAWebNewsletterReportCollection").NewsletterReportCollection.add(
            t,
            { merge: !0 },
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      updateNewsletterEnforcementAlerts: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.enforcementAlerts;
          (o(
            "WAWebNewsletterEnforcementAlertCollection",
          ).NewsletterEnforcementAlertCollection.reset(),
            o(
              "WAWebNewsletterEnforcementAlertCollection",
            ).NewsletterEnforcementAlertCollection.add(t));
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      updateNewsletterQuestionResponses: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.append,
            n = e.responses;
          (t ||
            o(
              "WAWebNewsletterQuestionResponseCollection",
            ).QuestionResponseCollection.reset(),
            o(
              "WAWebNewsletterQuestionResponseCollection",
            ).QuestionResponseCollection.add(n));
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      hideNewsletterQuestionResponse: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.questionServerId,
            r = e.responseServerId,
            a = yield (t = o(
              "WAWebNewsletterQuestionResponseCollection",
            ).QuestionResponseCollection.filter(function (e) {
              return e.responseServerId === r && e.questionServerId === n;
            })) == null
              ? void 0
              : t[0];
          a != null &&
            o(
              "WAWebNewsletterQuestionResponseCollection",
            ).QuestionResponseCollection.remove(a);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      updateMyNewsletterMembershipRole: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.newRole,
            n = e.newsletter,
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
          ((a.membershipType = t),
            r("WAWebNewsletterCollection").add(n, { merge: !0 }));
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      updateNewsletterMemberRole: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.member,
            r = e.newRole,
            a = e.newsletter,
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
          var l = (t = i.subscribers) == null ? void 0 : t.get(n.id);
          if (l != null) {
            var s;
            ((l.membership = r),
              (s = a.newsletterMetadata) == null ||
                (s = s.subscribers) == null ||
                s.sort());
            var c = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
              a.id.toJid(),
            );
            yield o(
              "WAWebUserPrefsNewsletter",
            ).flushCachedNewsletterSubscribers(c);
          }
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
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
      expireNewsletterAdminInvites: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.expiredMsgData;
          t.forEach(function (e) {
            var t,
              n = e.id,
              r = e.newsletterAdminInviteInfo;
            (t = o("WAWebMsgCollection").MsgCollection.get(n)) == null ||
              t.set({ newsletterAdminInviteInfo: r });
          });
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
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
      handleNewsletterWamoSubStatusChangeNotification: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.jid,
            n = e.wamoSubStatus,
            a = o("WAWebWidFactory").createWid(t),
            i = r("WAWebNewsletterCollection").get(a);
          if (i != null) {
            var l = i.newsletterMetadata;
            (l != null && (l.wamoSubStatus = n),
              yield o(
                "WAWebQueryAndUpdateNewslettersMetadataAction",
              ).queryAndUpdateNewsletterMetadataAction(t),
              n === o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE &&
                (yield o(
                  "WAWebNewsletterPullMessagesFromServerAction",
                ).pullNewsletterMessagesFromServer(i, {
                  messageCount: o(
                    "WAWebNewsletterGatingUtils",
                  ).getMaxMsgCountFromServer(),
                })));
          }
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.NewsletterBridgeApi = y;
  },
  98,
);
