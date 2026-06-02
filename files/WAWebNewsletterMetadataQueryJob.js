__d(
  "WAWebNewsletterMetadataQueryJob",
  [
    "WABase64",
    "WAWebMexFetchAllNewslettersMetadataJob",
    "WAWebMexNewsletterParseUtils",
    "WAWebMexNewsletterUtils",
    "WAWebMexUpdateNewsletterJob",
    "WAWebNewsletterQueryUtils",
    "WAWebNewsletterRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = async function () {
        return o(
          "WAWebMexFetchAllNewslettersMetadataJob",
        ).handleMexGetAllNewsletters();
      };
      return o("WAWebNewsletterRpcUtils").runWithBackoff(e);
    }
    function s(e, t) {
      var n = o(
        "WAWebNewsletterQueryUtils",
      ).getNewsletterMetadataQueryParamArgs(e, t, {
        creationTime: !0,
        name: !0,
        picture: !0,
        description: !0,
        inviteLink: !0,
        handle: !0,
        subscribers: !0,
        privacy: !0,
        verification: !0,
        linkedAccounts: !0,
        state: !0,
      });
      return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return c(n);
      });
    }
    function u(e, t, n) {
      var r = o(
        "WAWebNewsletterQueryUtils",
      ).getNewsletterMetadataQueryParamArgs(e, t, n);
      return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return c(r);
      });
    }
    async function c(e) {
      return o("WAWebMexNewsletterUtils").handleMexGetNewsletter(e);
    }
    function d(e, t, n) {
      return p(e, t, n);
    }
    function m(e) {
      return {
        idJid: e,
        newsletterUserSettingsMetadataMixin: [],
        newsletterCreationTimeMetadataMixin: null,
        newsletterNameMetadataMixin: null,
        newsletterPictureMetadataMixin: null,
        newsletterDescriptionMetadataMixin: null,
        newsletterInviteLinkMetadataMixin: null,
        newsletterSubscribersMetadataMixin: null,
        newsletterPrivacyMetadataMixin: null,
        newsletterVerificationMetadataMixin: null,
        hasNewsletterLinkedAccountsMetadataMixin: !1,
        newsletterMembershipMetadataMixin: null,
        newsletterStateMetadataMixin: null,
      };
    }
    async function p(e, t, n) {
      var r = t.editDescription,
        a = t.editName,
        i = t.editPicture,
        l = t.editReactionCodesSetting,
        s = n.description,
        u = n.name,
        c = n.picture,
        d = n.reactionCodesSetting,
        m;
      c != null && (m = o("WABase64").encodeB64(c));
      var p = _(i, m),
        f = _(a, u),
        g = _(r, s),
        h = l === !0 ? d : null,
        y = await o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
          return o("WAWebMexUpdateNewsletterJob").mexUpdateNewsletter(
            e,
            f,
            g,
            p,
            h,
          );
        });
      return o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(
        y.xwa2_newsletter_update,
      );
    }
    function _(e, t) {
      if (e === !0) return t != null ? t : "";
    }
    ((l.queryAllNewslettersMetadata = e),
      (l.queryNewsletterMetadataByInviteCode = s),
      (l.queryNewsletterMetadataByJid = u),
      (l.editNewsletterMetadataQuery = d),
      (l.emptyNewsletterMetadataType = m));
  },
  98,
);
