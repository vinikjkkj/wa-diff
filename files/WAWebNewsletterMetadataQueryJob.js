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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o(
            "WAWebMexFetchAllNewslettersMetadataJob",
          ).handleMexGetAllNewsletters();
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebMexNewsletterUtils").handleMexGetNewsletter(e);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return _(e, t, n);
    }
    function p(e) {
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
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
          var p = g(i, m),
            _ = g(a, u),
            f = g(r, s),
            h = l === !0 ? d : null,
            y = yield o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
              return o("WAWebMexUpdateNewsletterJob").mexUpdateNewsletter(
                e,
                _,
                f,
                p,
                h,
              );
            });
          return o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(
            y.xwa2_newsletter_update,
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      if (e === !0) return t != null ? t : "";
    }
    ((l.queryAllNewslettersMetadata = e),
      (l.queryNewsletterMetadataByInviteCode = s),
      (l.queryNewsletterMetadataByJid = u),
      (l.editNewsletterMetadataQuery = m),
      (l.emptyNewsletterMetadataType = p));
  },
  98,
);
