__d(
  "WAWebQueryAndUpdateAllNewslettersMetadataAction",
  [
    "Promise",
    "WAJids",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterGetAdminInfoJob",
    "WAWebNewsletterGetNewsletterEnforcementAlertAction",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "WAWebSchemaChat",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
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
            p = a.qplEvent;
          try {
            var _;
            (p == null || p.annotate({ string: { entryPoint: t } }),
              p == null || p.addPoint("getAllNewslettersMetadata_start"));
            var g = yield o(
                "WAWebNewsletterMetadataJob",
              ).getAllNewslettersMetadata(),
              y = g.deletedNewsletters,
              C = g.newsletters,
              b = C.reduce(
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
              v = b.chats,
              S = b.metadata,
              R = b.pics;
            (p == null || p.addPoint("getAllNewslettersMetadata_end"),
              p == null || p.addPoint("processDeletedNewsletters_start"),
              yield f(y),
              p == null || p.addPoint("processDeletedNewsletters_end"));
            var L = (_ = C.map(function (e) {
              return e.idJid;
            })).concat.apply(
              _,
              ((y == null ? void 0 : y.id) || []).map(function (e) {
                return e.jid;
              }),
            );
            return (
              t ===
                o("WAWebCommonNewsletterEnums")
                  .NewsletterMetadataUpdateEntryPoint.DirtyBit &&
                (p == null ||
                  p.addPoint("processUnsubscribedNewsletters_start"),
                yield h(L),
                p == null || p.addPoint("processUnsubscribedNewsletters_end")),
              p == null ||
                p.addPoint("fetchAdminCountsForOwnerNewsletter_start"),
              yield (m || (m = n("Promise"))).all(
                S.map(
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
              p == null || p.addPoint("fetchAdminCountsForOwnerNewsletter_end"),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[queryAndUpdateAllNewsletterMetadataAction] update model",
                  ])),
              ),
              yield o(
                "WAWebQueryAndUpdateNewslettersMetadataAction",
              ).updateCollections({
                chats: v,
                metadata: S,
                pics: R,
                messageCount: l,
                addSystemMsgs: i,
                qplEvent: p,
              }),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[getNewsletterEnforcementsUpdatesAction] update model",
                  ])),
              ),
              p == null ||
                p.addPoint("processChannelEnforcementsUpdates_start"),
              yield m.all(
                S.map(function (e) {
                  o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(e) &&
                    o(
                      "WAWebNewsletterGetNewsletterEnforcementAlertAction",
                    ).getNewsletterEnforcementAlertAction(
                      o("WAWebWidFactory").createWid(e.id.toString()),
                      o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION,
                    );
                }),
              ),
              p == null || p.addPoint("processChannelEnforcementsUpdates_end"),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[queryAndUpdateAllNewsletterMetadataAction] End",
                  ])),
              ),
              { chats: v, success: !0 }
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
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              ).NewsletterBridgeApi.deleteNewsletter({
                id: e,
                keep: !1,
                newsletterDeleted: !1,
              }),
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
            yield (m || (m = n("Promise"))).all(a));
        })),
        y.apply(this, arguments)
      );
    }
    l.queryAndUpdateAllNewsletterMetadataAction = p;
  },
  98,
);
