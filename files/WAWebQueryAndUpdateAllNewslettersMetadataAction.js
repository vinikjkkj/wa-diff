__d(
  "WAWebQueryAndUpdateAllNewslettersMetadataAction",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t, n) {
      (n === void 0 && (n = {}),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[queryAndUpdateAllNewsletterMetadataAction] Start",
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
        var f = await o(
            "WAWebNewsletterMetadataJob",
          ).getAllNewslettersMetadata(),
          g = f.deletedNewsletters,
          h = f.newsletters,
          y = h.reduce(
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
          C = y.chats,
          b = y.metadata,
          v = y.pics;
        (l == null || l.addPoint("getAllNewslettersMetadata_end"),
          l == null || l.addPoint("processDeletedNewsletters_start"),
          await p(g),
          l == null || l.addPoint("processDeletedNewsletters_end"));
        var S = (m = h.map(function (e) {
          return e.idJid;
        })).concat.apply(
          m,
          ((g == null ? void 0 : g.id) || []).map(function (e) {
            return e.jid;
          }),
        );
        return (
          t ===
            o("WAWebCommonNewsletterEnums").NewsletterMetadataUpdateEntryPoint
              .DirtyBit &&
            (l == null || l.addPoint("processUnsubscribedNewsletters_start"),
            await _(S),
            l == null || l.addPoint("processUnsubscribedNewsletters_end")),
          l == null || l.addPoint("fetchAdminCountsForOwnerNewsletter_start"),
          await Promise.all(
            b.map(async function (e) {
              if (o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(e)) {
                var t = await o(
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
            }),
          ),
          l == null || l.addPoint("fetchAdminCountsForOwnerNewsletter_end"),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[queryAndUpdateAllNewsletterMetadataAction] update model",
              ])),
          ),
          await o(
            "WAWebQueryAndUpdateNewslettersMetadataAction",
          ).updateCollections({
            chats: C,
            metadata: b,
            pics: v,
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
            b.map(function (e) {
              o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(e) &&
                o(
                  "WAWebNewsletterGetNewsletterEnforcementAlertAction",
                ).getNewsletterEnforcementAlertAction(
                  o("WAWebWidFactory").createWid(e.id.toString()),
                  o("WAJobOrchestratorTypes").JobPriority.UI_ACTION,
                );
            }),
          ),
          l == null || l.addPoint("processChannelEnforcementsUpdates_end"),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[queryAndUpdateAllNewsletterMetadataAction] End",
              ])),
          ),
          { chats: C, success: !0 }
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
    async function p(e) {
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
    async function _(e) {
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
            newsletterDeleted: !1,
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
    l.queryAndUpdateAllNewsletterMetadataAction = m;
  },
  98,
);
