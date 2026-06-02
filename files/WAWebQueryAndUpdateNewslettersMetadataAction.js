__d(
  "WAWebQueryAndUpdateNewslettersMetadataAction",
  [
    "$InternalEnum",
    "WAJids",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebCommonNewsletterEnums",
    "WAWebContactCollection",
    "WAWebContactProfilePicThumbBridge",
    "WAWebCreateChat",
    "WAWebDBBulkPersistProfilePic",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterCollection",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterGetAdminCapabilitiesJob",
    "WAWebNewsletterGetAdminInfoJob",
    "WAWebNewsletterGetNewsletterEnforcementAlertAction",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNewsletterRoleIdentifier",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterSystemMessagesAction",
    "WAWebNewsletterUpdateNewslettersRecordsJob",
    "WAWebNoop",
    "WAWebProfilePicThumbCollection",
    "WAWebSchemaChat",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
    function S(e) {
      return e != null && Number.isInteger(e) && e > 0;
    }
    var R = n("$InternalEnum").Mirrored(["Bootstrap", "DirtyBit", "Debug"]);
    async function L(t, n) {
      (n === void 0 && (n = {}),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletters][queryAndUpdateAllNewsletterMetadataAction] Start",
            ])),
        ));
      var r = n != null ? n : {},
        a = r.addSystemMsgs,
        i = r.messageCount,
        l = r.qplEvent;
      try {
        var m;
        (l == null || l.annotate({ string: { entryPoint: t } }),
          l == null || l.addPoint("getAllNewslettersMetadata_start"));
        var p = await o(
            "WAWebNewsletterMetadataJob",
          ).getAllNewslettersMetadata(),
          _ = p.deletedNewsletters,
          f = p.newsletters,
          g = f.reduce(
            function (e, t) {
              var n;
              (e.chats.push(
                o("WAWebNewsletterModelUtils").mapNewsletterToChat(t),
              ),
                e.metadata.push(
                  o("WAWebNewsletterModelUtils").mapNewsletterToMetadata(t),
                ));
              var r =
                (n = t.newsletterPictureMetadataMixin) == null
                  ? void 0
                  : n.picture;
              return (
                r != null &&
                  e.pics.push(
                    o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(
                      t.idJid,
                      r,
                    ),
                  ),
                e
              );
            },
            { chats: [], metadata: [], pics: [] },
          ),
          h = g.chats,
          y = g.metadata,
          C = g.pics;
        (l == null || l.addPoint("getAllNewslettersMetadata_end"),
          l == null || l.addPoint("processDeletedNewsletters_start"),
          await I(_),
          l == null || l.addPoint("processDeletedNewsletters_end"));
        var b = (m = f.map(function (e) {
          return e.idJid;
        })).concat.apply(
          m,
          ((_ == null ? void 0 : _.id) || []).map(function (e) {
            return e.jid;
          }),
        );
        return (
          t === R.DirtyBit &&
            (l == null || l.addPoint("processUnsubscribedNewsletters_start"),
            await T(b),
            l == null || l.addPoint("processUnsubscribedNewsletters_end")),
          l == null || l.addPoint("fetchAdminCountsForOwnerNewsletter_start"),
          await Promise.all(
            y.map(async function (e) {
              if (o("WAWebNewsletterMembershipUtil").iAmOwner(e)) {
                var t = await o(
                    "WAWebNewsletterGetAdminInfoJob",
                  ).getNewsletterAdminInfo(
                    o("WAJids").toNewsletterJid(e.id.toString()),
                  ),
                  n = t.adminCount,
                  r = t.adminProfile,
                  a = t.adminProfilesSettingEnabled;
                ((e.adminCount = n),
                  (e.adminProfile = r),
                  (e.adminProfilesSettingEnabled = a));
              }
            }),
          ),
          l == null || l.addPoint("fetchAdminCountsForOwnerNewsletter_start"),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[queryAndUpdateAllNewsletterMetadataAction] update model",
              ])),
          ),
          await k({
            chats: h,
            metadata: y,
            pics: C,
            messageCount: i,
            addSystemMsgs: a,
            qplEvent: l,
          }),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[getNewsletterEnforcementsUpdatesAction] update model",
              ])),
          ),
          l == null || l.addPoint("processChannelEnforcementsUpdates_start"),
          await Promise.all(
            y.map(function (e) {
              o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(e) &&
                o(
                  "WAWebNewsletterGetNewsletterEnforcementAlertAction",
                ).getNewsletterEnforcementAlertAction(
                  o("WAWebWidFactory").createWid(e.id.toString()),
                  o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION,
                );
            }),
          ),
          l == null || l.addPoint("processChannelEnforcementsUpdates_end"),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][queryAndUpdateAllNewsletterMetadataAction] End",
              ])),
          ),
          { chats: h, success: !0 }
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[queryAndUpdateAllNewsletterMetadataAction] fetch failed",
                ])),
            )
            .tags("newsletter")
            .sendLogs("newsletter-failed-to-retrieve-newsletters"),
          { success: !1 }
        );
      }
    }
    async function E(e, t) {
      o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletters][queryAndUpdateNewsletterMetadataAction] Start",
          ])),
      );
      try {
        var n,
          a,
          i,
          l = o("WAWebNewsletterRoleIdentifier").getRoleByIdentifier(e),
          s = await o("WAWebNewsletterMetadataJob").getNewsletterMetadata(
            e,
            l,
            t == null ? void 0 : t.fields,
          );
        if (s == null) return;
        var u = o("WAWebNewsletterModelUtils").mapNewsletterToChat(s),
          c = o("WAWebNewsletterModelUtils").mapNewsletterToMetadata(s),
          d =
            (n = s.newsletterPictureMetadataMixin) == null ? void 0 : n.picture,
          f = d
            ? [
                o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(
                  e,
                  d,
                ),
              ]
            : [],
          g = void 0,
          h = (a = t == null ? void 0 : t.adminFields) != null ? a : {},
          y = h.adminCount;
        if (y === !0) {
          var C = await o(
            "WAWebNewsletterGetAdminInfoJob",
          ).getNewsletterAdminInfo(e);
          g = C.adminCount;
        }
        var b = void 0,
          v = (i = t == null ? void 0 : t.adminFields) != null ? i : {},
          S = v.capabilities;
        return (
          S === !0 &&
            (b = await o(
              "WAWebNewsletterGetAdminCapabilitiesJob",
            ).getNewsletterAdminCapabilities(e)),
          await k({
            chats: [u],
            metadata: [
              babelHelpers.extends({}, c, { adminCount: g, capabilities: b }),
            ],
            pics: f,
            messageCount: t == null ? void 0 : t.messageCount,
          }),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][queryAndUpdateNewsletterMetadataAction] End",
              ])),
          ),
          r("WAWebNewsletterCollection").get(s.idJid)
        );
      } catch (e) {
        if (
          e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
          e.statusCode === 405
        )
          return;
        o("WALogger")
          .ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[queryAndUpdateNewsletterMetadataAction] fetch failed",
              ])),
          )
          .tags("newsletter")
          .sendLogs("newsletter-failed-to-retrieve-newsletter");
      }
    }
    async function k(e) {
      var t = e.addSystemMsgs,
        n = e.chats,
        a = e.messageCount,
        i = e.metadata,
        l = e.pics,
        s = e.qplEvent;
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletters][updateCollections] Start",
          ])),
      );
      var u = D(n, i, l),
        c = u.filteredChats,
        d = u.filteredMetadata,
        m = u.filteredPics;
      (s == null || s.addPoint("updateNewsletterChatRecords_start"),
        await o(
          "WAWebNewsletterUpdateNewslettersRecordsJob",
        ).updateNewsletterChatRecords(
          c.map(o("WAWebCreateChat").createNewsletterObjectForStorage),
        ),
        s == null || s.addPoint("updateNewsletterChatRecords_end"),
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletters][updateCollections][chat] Persist changes to DB",
            ])),
        ),
        s == null || s.addPoint("updateNewsletterMetadata_start"),
        await o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(
          d.map(
            o("WAWebNewsletterStorageUtils")
              .createNewsletterMetadataObjectForStorage,
          ),
        ),
        s == null || s.addPoint("updateNewsletterMetadata_end"),
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[updateCollections][metadata] persisted to DB",
            ])),
        ),
        s == null || s.addPoint("bulkPersistProfilePicChanges_start"),
        await o("WAWebDBBulkPersistProfilePic").bulkPersistProfilePicChanges(
          r("compactMap")(m, function (e) {
            var t, n, r, a;
            if (Object.prototype.hasOwnProperty.call(e, "eurl")) {
              var i = o("WAWebWidFactory").createWid(e.id.toString());
              return o(
                "WAWebContactProfilePicThumbBridge",
              ).mapProfilePictureToProfilePicThumbRowType(i, {
                id: i,
                tag: (t = e.tag) != null ? t : void 0,
                eurl: (n = e.eurl) != null ? n : void 0,
                previewEurl: (r = e.previewEurl) != null ? r : void 0,
                stale: e.stale,
                eurlStale: !1,
                timestamp: (a = e.timestamp) != null ? a : Date.now(),
              });
            }
          }),
        ),
        s == null || s.addPoint("bulkPersistProfilePicChanges_end"),
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[updateCollections][picture] persisted to DB",
            ])),
        ),
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[queryAndUpdateAllNewsletterMetadataAction] update model",
            ])),
        ),
        r("WAWebNewsletterMetadataCollection").add(i, { merge: !0 }),
        o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.add(l, {
          merge: !0,
        }),
        r("WAWebNewsletterCollection").add(n, { merge: !0 }),
        s == null || s.addPoint("pullNewsletterMessagesFromServer_start"),
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "[queryAndUpdateAllNewsletterMetadataAction][msg] start",
            ])),
        ),
        S(a) &&
          (await Promise.all(
            r("WAWebNewsletterCollection")
              .filter(function (e) {
                var t;
                return !(
                  (t = e.newsletterMetadata) != null &&
                  t.isSuspendedOrTerminated
                );
              })
              .map(function (e) {
                return o("WAWebNewsletterPullMessagesFromServerAction")
                  .pullNewsletterMessagesFromServer(e, {
                    messageCount: a,
                    resetUnreadCount: !0,
                  })
                  .then(function (n) {
                    if (
                      !n.some(function (e) {
                        return (
                          e.isWamoSub !== !0 ||
                          o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                            o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                            e.viewMode,
                          )
                        );
                      }) &&
                      t === !0
                    )
                      return o(
                        "WAWebNewsletterSystemMessagesAction",
                      ).addSystemMessagesToChat(e);
                  })
                  .catch(r("WAWebNoop"));
              }),
          )),
        s == null || s.addPoint("pullNewsletterMessagesFromServer_end"),
        o("WALogger").LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "[queryAndUpdateAllNewsletterMetadataAction][msg] end",
            ])),
        ),
        s == null || s.addPoint("contactUpdates_start"));
      var p = i
        .filter(function (e) {
          return e.name;
        })
        .map(function (e) {
          return { id: e.id, name: e.name };
        });
      (o("WAWebContactCollection").ContactCollection.add(p, { merge: !0 }),
        s == null || s.addPoint("contactUpdates_end"));
    }
    async function I(e) {
      if (e != null) {
        var t = e.id.map(function (e) {
            return { id: e.jid.toString(), terminated: !0 };
          }),
          n = e.id.map(function (e) {
            return {
              id: o("WAWebWidFactory").createWid(e.jid),
              terminated: !0,
            };
          });
        (await o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(t),
          r("WAWebNewsletterMetadataCollection").add(n, { merge: !0 }));
      }
    }
    async function T(e) {
      var t = await o("WAWebSchemaChat").getChatTable().all(),
        n = t
          .map(function (e) {
            return o("WAWebWidFactory").createWid(e.id);
          })
          .filter(function (t) {
            var n = o("WAJids").validateNewsletterJid(t.toJid());
            return n != null && !e.includes(n);
          }),
        r = [];
      (n.map(function (e) {
        (r.push(
          o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.deleteNewsletter({
            id: e,
            keep: !1,
          }),
        ),
          r.push(
            o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(
              e.toString(),
            ),
          ),
          r.push(o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(e)),
          r.push(
            o("WAWebNewsletterMetadataJob").deleteNewsletterPicture(
              e.toString(),
            ),
          ));
      }),
        await Promise.all(r));
    }
    function D(e, t, n) {
      var a = t
          .filter(function (e) {
            if (e.membershipType != null)
              return (
                e.membershipType ===
                o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest
              );
            var t = r("WAWebNewsletterMetadataCollection").get(e.id);
            return t == null
              ? !1
              : t.membershipType ===
                  o("WAWebCommonNewsletterEnums").NewsletterMembershipType
                    .Guest;
          })
          .map(function (e) {
            return e.id;
          }),
        i = e.filter(function (e) {
          return !a.includes(e.id);
        }),
        l = t.filter(function (e) {
          return !a.includes(e.id);
        }),
        s = n.filter(function (e) {
          return !a.includes(e.id);
        });
      return { filteredChats: i, filteredMetadata: l, filteredPics: s };
    }
    ((l.NewsletterMetadataUpdateEntryPoint = R),
      (l.queryAndUpdateAllNewsletterMetadataAction = L),
      (l.queryAndUpdateNewsletterMetadataAction = E),
      (l.updateCollections = k));
  },
  98,
);
