__d(
  "WAWebNewsletterHandleMexGetNewsletter",
  [
    "WAWebMexFetchNewsletterDehydratedJob",
    "WAWebMexFetchNewsletterJob",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a,
            i,
            l =
              (t = e.queryPayloadsArgs.jidQueryIQPayload) == null
                ? void 0
                : t.anyJid,
            s =
              (n = e.queryPayloadsArgs.inviteQueryIQPayload) == null
                ? void 0
                : n.anyKey,
            p =
              (r =
                (a = e.queryPayloadsArgs.jidQueryIQPayload) == null
                  ? void 0
                  : a.anyViewRole) != null
                ? r
                : (i = e.queryPayloadsArgs.inviteQueryIQPayload) == null
                  ? void 0
                  : i.anyViewRole,
            _ = l != null ? l : s;
          if (_ != null) {
            var f;
            if (
              (m(e)
                ? (f = yield o(
                    "WAWebMexFetchNewsletterDehydratedJob",
                  ).mexGetNewsletterDehydrated(_, u(p), {
                    fetchWamoSub: o(
                      "WAWebNewsletterGatingUtils",
                    ).isWamoSubExperienceEnabled(),
                  }))
                : (f = yield o("WAWebMexFetchNewsletterJob").mexGetNewsletter(
                    _,
                    u(p),
                    {
                      fetchViewerMetadata: c(e),
                      fetchCreationTime: d("hasNewsletterCreationTimeField", e),
                      fetchWamoSub: o(
                        "WAWebNewsletterGatingUtils",
                      ).isWamoSubExperienceEnabled(),
                      fetchStatusMetadata: o(
                        "WAWebNewsletterGatingUtils",
                      ).isNewsletterStatusReceiverEnabled(),
                    },
                  )),
              f == null)
            )
              return;
            var g = o(
              "WAWebMexNewsletterParseUtils",
            ).parseMexNewsletterResponse(f.xwa2_newsletter);
            return g;
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return e == null
        ? "GUEST"
        : e === "admin"
          ? "ADMIN"
          : e === "owner"
            ? "OWNER"
            : e === "subscriber"
              ? "SUBSCRIBER"
              : "GUEST";
    }
    function c(e) {
      var t,
        n,
        r,
        o,
        a = !1,
        i = !1;
      return (
        (a =
          (t = e.queryPayloadsArgs.jidQueryIQPayload) == null ||
          (t = t.allNewsletterMetadataIQRequestPayloadArgs) == null
            ? void 0
            : t.hasNewsletterMutedField),
        a === !0 ||
          ((a =
            (n = e.queryPayloadsArgs.deprecatedInviteQueryIQPayload) == null ||
            (n = n.allNewsletterMetadataIQRequestPayloadArgs) == null
              ? void 0
              : n.hasNewsletterMutedField),
          a === !0) ||
          ((i =
            (r = e.queryPayloadsArgs.jidQueryIQPayload) == null ||
            (r = r.allNewsletterMetadataIQRequestPayloadArgs) == null
              ? void 0
              : r.hasNewsletterMembershipField),
          i === !0) ||
          ((i =
            (o = e.queryPayloadsArgs.deprecatedInviteQueryIQPayload) == null ||
            (o = o.allNewsletterMetadataIQRequestPayloadArgs) == null
              ? void 0
              : o.hasNewsletterMembershipField),
          i === !0)
      );
    }
    function d(e, t) {
      var n,
        r,
        o,
        a =
          (n =
            (r = t.queryPayloadsArgs.jidQueryIQPayload) == null
              ? void 0
              : r.allNewsletterMetadataIQRequestPayloadArgs) != null
            ? n
            : t.queryPayloadsArgs.inviteQueryIQPayload;
      return (
        a == null ||
        ((o = Object.getOwnPropertyDescriptor(a, e)) == null
          ? void 0
          : o.value) === !0
      );
    }
    function m(e) {
      var t = e.queryPayloadsArgs.jidQueryIQPayload;
      if (t != null) {
        var n = t.allNewsletterMetadataIQRequestPayloadArgs;
        return (
          n.hasNewsletterCreationTimeField !== !0 &&
          n.hasNewsletterNameField !== !0 &&
          n.hasNewsletterDescriptionField !== !0 &&
          n.hasNewsletterInviteLinkField !== !0 &&
          n.hasNewsletterHandleField !== !0 &&
          n.hasNewsletterPrivacyField !== !0 &&
          n.hasNewsletterLinkedAccountsField !== !0 &&
          n.hasNewsletterStateField !== !0 &&
          n.newsletterPictureFieldMixinArgs == null &&
          n.hasNewsletterMembershipField !== !0 &&
          n.hasNewsletterMutedField !== !0 &&
          n.hasNewsletterVerificationField === !0 &&
          n.hasNewsletterSubscribersField === !0
        );
      }
      return !1;
    }
    l.handleMexGetNewsletter = e;
  },
  98,
);
