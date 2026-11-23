__d(
  "WAWebEditNewsletterMetadataAction",
  [
    "WAJids",
    "WALogger",
    "WAWebChatGetters",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n, r) {
      if (!o("WAWebChatGetters").getIsNewsletter(t)) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[editNewsletterMetadataAction] not a newsletter",
              ])),
          )
          .tags("newsletter")
          .sendLogs("edit-metadata-action-not-a-newsletter");
        return;
      }
      var a = o("WAJids").toNewsletterJid(t.id.toJid());
      try {
        var i = await o("WAWebNewsletterMetadataJob").editNewsletterMetadata(
          a,
          n,
          r,
        );
        if (i == null) return;
        var l = o("WAWebNewsletterModelUtils").mapNewsletterToModels(
            babelHelpers.extends({}, i, {
              newsletterCreationTimeMetadataMixin: null,
            }),
          ),
          u = l.chat,
          c = l.metadata,
          d = l.pic;
        await o(
          "WAWebQueryAndUpdateNewslettersMetadataAction",
        ).updateCollections({ chats: [u], metadata: [c], pics: [d] });
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[editNewsletterMetadataAction] edit metadata failed",
                ])),
            )
            .tags("newsletter")
            .sendLogs("edit-metadata-action-failed"),
          e
        );
      }
    }
    l.editNewsletterMetadataAction = u;
  },
  98,
);
