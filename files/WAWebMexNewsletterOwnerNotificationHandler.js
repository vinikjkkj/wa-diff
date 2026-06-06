__d(
  "WAWebMexNewsletterOwnerNotificationHandler",
  [
    "WAJids",
    "WALogger",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterAdminNotificationJob",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(t, n) {
      var r = n.xwa2_notify_newsletter_owner_on_metadata_update,
        a = r.actor,
        i = r.id,
        l = r.thread_metadata;
      if (l == null) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[mex-owner-update] no metadata changes found",
              ])),
          )
          .tags("mex", "newsletter")
          .sendLogs(
            "newsletter-mex-owner-metadata-notification-no-metadata-updates",
          );
        return;
      }
      await _(i, l, a);
      var p = a == null ? void 0 : a.id;
      if (p == null) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[mex-owner-update] no actor found",
              ])),
          )
          .tags("mex", "newsletter")
          .sendLogs("newsletter-mex-owner-metadata-notification-no-actor");
        return;
      }
      var f = [],
        g = l.description,
        h = l.name,
        y = l.picture,
        C = l.preview,
        b = l.settings;
      if (
        ((y != null || C != null) && f.push({ item: "profile_picture" }),
        h != null)
      ) {
        var v = h.text;
        v == null
          ? o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex-owner-update] name missing updated value",
                  ])),
              )
              .tags("mex", "newsletter")
              .sendLogs(
                "newsletter-mex-owner-metadata-notification-no-updated-name-value",
              )
          : f.push({ item: "name", value: v });
      }
      if (g != null) {
        var S = g.text;
        S == null
          ? o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex-owner-update] description missing updated value",
                  ])),
              )
              .tags("mex", "newsletter")
              .sendLogs(
                "newsletter-mex-owner-metadata-notification-no-updated-description-value",
              )
          : f.push({ item: "description", value: S });
      }
      var R = b == null ? void 0 : b.reaction_codes;
      if (b != null && R != null) {
        var L = o("WAWebMexNewsletterParseUtils").toReactionCodesSettingMixin(
          R.value,
        );
        L == null
          ? o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex-owner-update] reaction_codes missing value",
                  ])),
              )
              .tags("mex", "newsletter")
              .sendLogs(
                "newsletter-mex-owner-metadata-notification-no-updated-reaction-codes-value",
              )
          : f.push({ item: "reaction_setting", value: L });
      }
      if (f.length === 0) {
        o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[mex-owner-update] no updates found",
              ])),
          )
          .tags("mex", "newsletter")
          .sendLogs("newsletter-mex-owner-metadata-notification-no-updates");
        return;
      }
      var E = o("WAJids").toNewsletterJid(i),
        k = o("WAWebJidToWid").newsletterJidToWid(E),
        I = o("WAWebWidFactory").createWid(p),
        T = {
          newsletterId: o("WAWebWidFactory").asNewsletterWidOrThrow(k),
          actorId: o("WAWebWidFactory").asUserWidOrThrow(I),
          updates: f,
        };
      o("WAWebBackendApi").frontendFireAndForget(
        "displayNewsletterMetadataUpdateNotification",
        { notification: T },
      );
    }
    async function _(e, t, n) {
      var r;
      if (
        !(
          ((r = t.preview) == null ? void 0 : r.direct_path) !== "" || n != null
        )
      ) {
        var a = o("WAJids").toNewsletterJid(e),
          i = o("WAWebJidToWid").newsletterJidToWid(a);
        (await o(
          "WAWebNewsletterAdminNotificationJob",
        ).updateProfilePictureDeletionAlertState(a),
          o("WAWebBackendApi").frontendFireAndForget(
            "updateProfilePictureDeletionAlertState",
            { newsletterWid: o("WAWebWidFactory").asNewsletterWidOrThrow(i) },
          ));
      }
    }
    l.mexHandleNewsletterOwnerNotification = p;
  },
  98,
);
