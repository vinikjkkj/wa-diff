__d(
  "WAWebQueryAndUpdateNewslettersMetadataAction",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S;
    function R(e) {
      return e != null && Number.isInteger(e) && e > 0;
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          (r === void 0 && (r = {}),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[queryAndUpdateAllNewsletterMetadataAction] Start",
                ])),
            ));
          var a = r != null ? r : {},
            i = a.addSystemMsgs,
            l = a.messageCount,
            m = a.qplEvent;
          try {
            var p;
            (m == null || m.annotate({ string: { entryPoint: t } }),
              m == null || m.addPoint("getAllNewslettersMetadata_start"));
            var _ = yield o(
                "WAWebNewsletterMetadataJob",
              ).getAllNewslettersMetadata(),
              f = _.deletedNewsletters,
              g = _.newsletters,
              h = g.reduce(
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
                        o(
                          "WAWebNewsletterModelUtils",
                        ).mapPicturesToProfilePicThumb(t.idJid, r),
                      ),
                    e
                  );
                },
                { chats: [], metadata: [], pics: [] },
              ),
              y = h.chats,
              C = h.metadata,
              b = h.pics;
            (m == null || m.addPoint("getAllNewslettersMetadata_end"),
              m == null || m.addPoint("processDeletedNewsletters_start"),
              yield P(f),
              m == null || m.addPoint("processDeletedNewsletters_end"));
            var v = (p = g.map(function (e) {
              return e.idJid;
            })).concat.apply(
              p,
              ((f == null ? void 0 : f.id) || []).map(function (e) {
                return e.jid;
              }),
            );
            return (
              t ===
                o("WAWebCommonNewsletterEnums")
                  .NewsletterMetadataUpdateEntryPoint.DirtyBit &&
                (m == null ||
                  m.addPoint("processUnsubscribedNewsletters_start"),
                yield M(v),
                m == null || m.addPoint("processUnsubscribedNewsletters_end")),
              m == null ||
                m.addPoint("fetchAdminCountsForOwnerNewsletter_start"),
              yield (S || (S = n("Promise"))).all(
                C.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        if (
                          o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(e)
                        ) {
                          var t = yield o(
                              "WAWebNewsletterGetAdminInfoJob",
                            ).getNewsletterAdminInfo(
                              o("WAJids").toNewsletterJid(e.id.toString()),
                            ),
                            n = t.adminCount,
                            r = t.adminProfile,
                            a = t.adminProfilesSettingEnabled;
                          (o("WAWebNewsletterMembershipUtil").iAmOwner(e) &&
                            (e.adminCount = n),
                            (e.adminProfile = r),
                            (e.adminProfilesSettingEnabled = a));
                        }
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              ),
              m == null || m.addPoint("fetchAdminCountsForOwnerNewsletter_end"),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[queryAndUpdateAllNewsletterMetadataAction] update model",
                  ])),
              ),
              yield x({
                chats: y,
                metadata: C,
                pics: b,
                messageCount: l,
                addSystemMsgs: i,
                qplEvent: m,
              }),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[getNewsletterEnforcementsUpdatesAction] update model",
                  ])),
              ),
              m == null ||
                m.addPoint("processChannelEnforcementsUpdates_start"),
              yield S.all(
                C.map(function (e) {
                  o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(e) &&
                    o(
                      "WAWebNewsletterGetNewsletterEnforcementAlertAction",
                    ).getNewsletterEnforcementAlertAction(
                      o("WAWebWidFactory").createWid(e.id.toString()),
                      o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION,
                    );
                }),
              ),
              m == null || m.addPoint("processChannelEnforcementsUpdates_end"),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[queryAndUpdateAllNewsletterMetadataAction] End",
                  ])),
              ),
              { chats: y, success: !0 }
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
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][queryAndUpdateNewsletterMetadataAction] Start",
              ])),
          );
          try {
            var n,
              a,
              i = o("WAWebNewsletterRoleIdentifier").getRoleByIdentifier(e),
              l = yield o("WAWebNewsletterMetadataJob").getNewsletterMetadata(
                e,
                i,
                t == null ? void 0 : t.fields,
              );
            if (l == null) return;
            var s = o("WAWebNewsletterModelUtils").mapNewsletterToChat(l),
              u = o("WAWebNewsletterModelUtils").mapNewsletterToMetadata(l),
              c =
                (n = l.newsletterPictureMetadataMixin) == null
                  ? void 0
                  : n.picture,
              d = c
                ? [
                    o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(
                      e,
                      c,
                    ),
                  ]
                : [],
              f = yield T(e, t == null ? void 0 : t.adminFields),
              g = f.adminCount,
              h = f.adminProfile,
              y = f.adminProfilesSettingEnabled,
              C = void 0;
            return (
              (t == null || (a = t.adminFields) == null
                ? void 0
                : a.capabilities) === !0 &&
                (C = yield o(
                  "WAWebNewsletterGetAdminCapabilitiesJob",
                ).getNewsletterAdminCapabilities(e)),
              yield x({
                chats: [s],
                metadata: [
                  babelHelpers.extends({}, u, {
                    adminCount: g,
                    adminProfile: h,
                    adminProfilesSettingEnabled: y,
                    capabilities: C,
                  }),
                ],
                pics: d,
                messageCount: t == null ? void 0 : t.messageCount,
              }),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletters][queryAndUpdateNewsletterMetadataAction] End",
                  ])),
              ),
              r("WAWebNewsletterCollection").get(l.idJid)
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
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t != null ? t : {},
            r = n.adminCount,
            a = n.adminProfileData,
            i = n.adminProfilesSettingEnabled;
          if (r !== !0 && a !== !0 && i !== !0)
            return {
              adminCount: void 0,
              adminProfile: void 0,
              adminProfilesSettingEnabled: void 0,
            };
          var l = yield o(
            "WAWebNewsletterGetAdminInfoJob",
          ).getNewsletterAdminInfo(e);
          return {
            adminCount: r ? l.adminCount : void 0,
            adminProfile: a ? l.adminProfile : void 0,
            adminProfilesSettingEnabled: i
              ? l.adminProfilesSettingEnabled
              : void 0,
          };
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.addSystemMsgs,
            a = e.chats,
            i = e.messageCount,
            l = e.metadata,
            s = e.pics,
            u = e.qplEvent;
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][updateCollections] Start",
              ])),
          );
          var c = A(a, l, s),
            d = c.filteredChats,
            m = c.filteredMetadata,
            p = c.filteredPics;
          (u == null || u.addPoint("updateNewsletterChatRecords_start"),
            yield o(
              "WAWebNewsletterUpdateNewslettersRecordsJob",
            ).updateNewsletterChatRecords(
              d.map(o("WAWebCreateChat").createNewsletterObjectForStorage),
            ),
            u == null || u.addPoint("updateNewsletterChatRecords_end"),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletters][updateCollections][chat] Persist changes to DB",
                ])),
            ),
            u == null || u.addPoint("updateNewsletterMetadata_start"),
            yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(
              m.map(
                o("WAWebNewsletterStorageUtils")
                  .createNewsletterMetadataObjectForStorage,
              ),
            ),
            u == null || u.addPoint("updateNewsletterMetadata_end"),
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[updateCollections][metadata] persisted to DB",
                ])),
            ),
            u == null || u.addPoint("bulkPersistProfilePicChanges_start"),
            yield o(
              "WAWebDBBulkPersistProfilePic",
            ).bulkPersistProfilePicChanges(
              r("compactMap")(p, function (e) {
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
            u == null || u.addPoint("bulkPersistProfilePicChanges_end"),
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
            r("WAWebNewsletterMetadataCollection").add(l, { merge: !0 }),
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.add(
              s,
              { merge: !0 },
            ),
            r("WAWebNewsletterCollection").add(a, { merge: !0 }),
            u == null || u.addPoint("pullNewsletterMessagesFromServer_start"),
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[queryAndUpdateAllNewsletterMetadataAction][msg] start",
                ])),
            ),
            R(i) &&
              (yield (S || (S = n("Promise"))).all(
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
                        messageCount: i,
                        resetUnreadCount: !0,
                      })
                      .then(function (n) {
                        if (
                          !n.some(function (e) {
                            return (
                              e.isWamoSub !== !0 ||
                              o(
                                "WAWebViewModeUtils",
                              ).isViewModeVisibleInSurface(
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
            u == null || u.addPoint("pullNewsletterMessagesFromServer_end"),
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[queryAndUpdateAllNewsletterMetadataAction][msg] end",
                ])),
            ),
            u == null || u.addPoint("contactUpdates_start"));
          var _ = l
            .filter(function (e) {
              return e.name;
            })
            .map(function (e) {
              return { id: e.id, name: e.name };
            });
          (o("WAWebContactCollection").ContactCollection.add(_, { merge: !0 }),
            u == null || u.addPoint("contactUpdates_end"));
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            (yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(t),
              r("WAWebNewsletterMetadataCollection").add(n, { merge: !0 }));
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaChat").getChatTable().all(),
            r = t
              .map(function (e) {
                return o("WAWebWidFactory").createWid(e.id);
              })
              .filter(function (t) {
                var n = o("WAJids").validateNewsletterJid(t.toJid());
                return n != null && !e.includes(n);
              }),
            a = [];
          (r.map(function (e) {
            (a.push(
              o(
                "WAWebNewsletterBridgeApi",
              ).NewsletterBridgeApi.deleteNewsletter({ id: e, keep: !1 }),
            ),
              a.push(
                o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(
                  e.toString(),
                ),
              ),
              a.push(o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(e)),
              a.push(
                o("WAWebNewsletterMetadataJob").deleteNewsletterPicture(
                  e.toString(),
                ),
              ));
          }),
            yield (S || (S = n("Promise"))).all(a));
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t, n) {
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
    ((l.NewsletterMetadataUpdateEntryPoint = o(
      "WAWebCommonNewsletterEnums",
    ).NewsletterMetadataUpdateEntryPoint),
      (l.queryAndUpdateAllNewsletterMetadataAction = L),
      (l.queryAndUpdateNewsletterMetadataAction = k),
      (l.updateCollections = x));
  },
  98,
);
