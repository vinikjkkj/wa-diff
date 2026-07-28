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
    "WAWebMsgAIProvenance",
    "WAWebMsgCollection",
    "WAWebMsgModelFromData",
    "WAWebMsgType",
    "WAWebNewsletterBridgeMsgAddOnsUtils",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNewsletterSubscriberModel",
    "WAWebNewsletterValidationUtils",
    "WAWebProfilePicThumbCollection",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "WAWebShouldUpdateLastAddOnPreview",
    "WAWebShowNewsletterMetadataUpdateNotification",
    "WAWebShowNewsletterMilestoneNotification",
    "WAWebShowNewsletterRoleChangeNotification",
    "WAWebStatusCollection",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUpdateNewsletterMsgUIAction",
    "WAWebUpdateUnreadChatAction",
    "WAWebUserPrefsNewsletter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "filterObject",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["id"],
      s = ["id"],
      u = ["id"],
      c = ["id"],
      d = ["id"],
      m = ["id"],
      p,
      _,
      f,
      g,
      h = r("requireDeferred")("WAWebNewsletterRouteBridgeApi").__setRef(
        "WAWebNewsletterBridgeApi",
      );
    function y(e, t) {
      var n = r("WAWebNewsletterCollection").get(e);
      n == null || n.mute.setMute(t, !1, !0);
    }
    function C(e) {
      o("WALogger")
        .ERROR(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletter] failed to load route bridge api",
            ])),
        )
        .sendLogs("newsletter-route-bridge-load-failed");
    }
    var b = {
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
      updateNewsletterMetadata: function (n) {
        var t = n.metadata,
          a = n.newsletter,
          i = n.pic,
          l = t.id,
          c = babelHelpers.objectWithoutPropertiesLoose(t, e),
          d = a.id,
          m = babelHelpers.objectWithoutPropertiesLoose(a, s),
          p = i.id,
          _ = babelHelpers.objectWithoutPropertiesLoose(i, u);
        (r("WAWebNewsletterCollection")
          .gadd(l)
          .set(
            r("filterObject")(m, function (e) {
              return e != null;
            }),
            { merge: !0 },
          ),
          r("WAWebNewsletterMetadataCollection")
            .gadd(l)
            .set(
              r("filterObject")(c, function (e) {
                return e != null;
              }),
              { merge: !0 },
            ),
          o("WAWebProfilePicThumbCollection")
            .ProfilePicThumbCollection.gadd(l)
            .set(_, { merge: !0 }),
          c.name != null &&
            o("WAWebContactCollection")
              .ContactCollection.gadd(l)
              .set({ name: c.name }, { merge: !0 }));
      },
      toggleNewsletterAdminActivityMuteState: function (t) {
        var e = t.id,
          n = t.muteExpirationValue;
        y(e, n);
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
      subscribeToNewsletter: function (t) {
        var e = t.newsletter,
          n = e.newsletterMetadata;
        if (n == null) {
          o("WALogger").ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[subscribeToNewsletter] newsletterMetadata=null",
              ])),
          );
          return;
        }
        ((n.membershipType = o(
          "WAWebCommonNewsletterEnums",
        ).NewsletterMembershipType.Subscriber),
          r("WAWebNewsletterCollection").add(e, { merge: !0 }));
      },
      loadNewsletterPreviewChat: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.messages,
            n = e.metadata,
            a = e.newsletter,
            i = e.pic,
            l = n.id,
            s = babelHelpers.objectWithoutPropertiesLoose(n, c);
          if (
            (r("WAWebNewsletterMetadataCollection")
              .gadd(l)
              .set(s, { merge: !0 }),
            i != null)
          ) {
            var u = i.id,
              m = babelHelpers.objectWithoutPropertiesLoose(i, d);
            o("WAWebProfilePicThumbCollection")
              .ProfilePicThumbCollection.gadd(l)
              .set(m, { merge: !0 });
          }
          (o("WAWebContactCollection").ContactCollection.add(
            { id: l, name: n.name },
            { merge: !0 },
          ),
            r("WAWebNewsletterCollection").add(a, { merge: !0 }));
          var p = r("WAWebNewsletterCollection").get(l);
          return (
            p != null &&
              t != null &&
              (yield o(
                "WAWebMsgCollection",
              ).MsgCollection.processMultipleMessages(
                p.id,
                t,
                { isHistory: !0, add: "search" },
                "loadPreviewNewsletter",
                p.msgs,
              )),
            p
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
          r = babelHelpers.objectWithoutPropertiesLoose(e, m);
        o("WAWebProfilePicThumbCollection")
          .ProfilePicThumbCollection.gadd(n)
          .set(r, { merge: !0 });
      },
      updateNewsletterMsgPaidPartnershipLabel: function (t) {
        var e = t.id,
          n = o("WAWebMsgCollection").MsgCollection.get(e);
        n == null || n.set("hasPaidPartnershipLabel", !0);
      },
      updateNewsletterMsgAiContentLabel: function (t) {
        var e = t.id,
          n = o("WAWebMsgCollection").MsgCollection.get(e);
        n == null ||
          n.set(
            "aiProvenance",
            o("WAWebMsgAIProvenance").withSelfDisclosed(
              n == null ? void 0 : n.aiProvenance,
            ),
          );
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
      updateNewsletterAdminProfile: function (t) {
        var e = t.adminProfile,
          n = t.id;
        r("WAWebNewsletterMetadataCollection")
          .gadd(n)
          .set({ adminProfile: e }, { merge: !0 });
      },
      updateNewsletterAdminProfileSetting: function (t) {
        var e = t.adminProfilesSettingEnabled,
          n = t.id;
        r("WAWebNewsletterMetadataCollection")
          .gadd(n)
          .set({ adminProfilesSettingEnabled: e }, { merge: !0 });
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
            n,
            a = e.notification,
            i =
              a.xwa2_notify_newsletter_admin_promote != null
                ? "promote"
                : "demote",
            l =
              (t = a.xwa2_notify_newsletter_admin_promote) != null
                ? t
                : a.xwa2_notify_newsletter_admin_demote;
          if (l != null) {
            var s =
                l != null
                  ? r("WAWebNewsletterCollection").get(
                      l == null ? void 0 : l.id,
                    )
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
              yield o(
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
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      displayNewsletterMilestoneDesktopNotification: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o(
            "WAWebShowNewsletterMilestoneNotification",
          ).showNewsletterMilestoneNotification(e);
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
              (d ||
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
      updateNewsletterReports: function (t) {
        h.load()
          .then(function (e) {
            return e.NewsletterRouteBridgeApi.updateNewsletterReports(t);
          })
          .catch(C);
      },
      updateNewsletterReport: function (t) {
        h.load()
          .then(function (e) {
            return e.NewsletterRouteBridgeApi.updateNewsletterReport(t);
          })
          .catch(C);
      },
      updateNewsletterEnforcementAlerts: function (t) {
        h.load()
          .then(function (e) {
            return e.NewsletterRouteBridgeApi.updateNewsletterEnforcementAlerts(
              t,
            );
          })
          .catch(C);
      },
      updateNewsletterQuestionResponses: function (t) {
        h.load()
          .then(function (e) {
            return e.NewsletterRouteBridgeApi.updateNewsletterQuestionResponses(
              t,
            );
          })
          .catch(C);
      },
      hideNewsletterQuestionResponse: function (t) {
        h.load()
          .then(function (e) {
            return e.NewsletterRouteBridgeApi.hideNewsletterQuestionResponse(t);
          })
          .catch(C);
      },
      updateNewsletterQuestionResponseStarredState: function (t) {
        h.load()
          .then(function (e) {
            return e.NewsletterRouteBridgeApi.updateNewsletterQuestionResponseStarredState(
              t,
            );
          })
          .catch(C);
      },
      updateMyNewsletterMembershipRole: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.newRole,
            n = e.newsletter,
            a = n.newsletterMetadata;
          if (a == null) {
            o("WALogger").ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
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
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
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
            var u = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
              a.id.toJid(),
            );
            yield o(
              "WAWebUserPrefsNewsletter",
            ).flushCachedNewsletterSubscribers(u);
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
        return h.load().then(function (e) {
          return e.NewsletterRouteBridgeApi.updateNewsletterInsights(t);
        });
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
    l.NewsletterBridgeApi = b;
  },
  98,
);
