__d(
  "WAWebMexNewsletterUtils",
  [
    "WAJids",
    "WAWebBackendErrors",
    "WAWebCommonNewsletterEnums",
    "WAWebMexFetchNewsletterDehydratedJob",
    "WAWebMexFetchNewsletterJob",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t,
        n,
        r,
        a,
        i,
        l =
          (t = e.queryPayloadsArgs.jidQueryIQPayload) == null
            ? void 0
            : t.anyJid,
        u =
          (n = e.queryPayloadsArgs.inviteQueryIQPayload) == null
            ? void 0
            : n.anyKey,
        c =
          (r =
            (a = e.queryPayloadsArgs.jidQueryIQPayload) == null
              ? void 0
              : a.anyViewRole) != null
            ? r
            : (i = e.queryPayloadsArgs.inviteQueryIQPayload) == null
              ? void 0
              : i.anyViewRole,
        d = l != null ? l : u;
      if (d != null) {
        var f;
        if (
          (_(e)
            ? (f = await o(
                "WAWebMexFetchNewsletterDehydratedJob",
              ).mexGetNewsletterDehydrated(d, s(c), {
                fetchWamoSub: o(
                  "WAWebNewsletterGatingUtils",
                ).isWamoSubExperienceEnabled(),
              }))
            : (f = await o("WAWebMexFetchNewsletterJob").mexGetNewsletter(
                d,
                s(c),
                {
                  fetchViewerMetadata: m(e),
                  fetchCreationTime: p("hasNewsletterCreationTimeField", e),
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
        var g = o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(
          f.xwa2_newsletter,
        );
        return g;
      }
    }
    function s(e) {
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
    function u(e) {
      switch (e) {
        case "OWNER":
          return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner;
        case "SUBSCRIBER":
          return o("WAWebCommonNewsletterEnums").NewsletterMembershipType
            .Subscriber;
        case "ADMIN":
          return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin;
        case "GUEST":
          return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest;
      }
    }
    function c(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All:
          return "ALL";
        case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
          .Basic:
          return "BASIC";
        case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
          .None:
          return "NONE";
        case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
          .Blocklist:
          return "BLOCKLIST";
      }
    }
    function d(e) {
      if (e != null && e.id != null) {
        var t, n, r, a;
        return (
          ((t = e.state) == null ? void 0 : t.type) === "SUSPENDED" &&
            (a = { error: "423" }),
          ((n = e.state) == null ? void 0 : n.type) === "NON_EXISTING" &&
            (r = { error: "404" }),
          {
            jid: o("WAJids").toNewsletterJid(e.id),
            subscriberNotFoundMixin: r,
            newsletterSuspendedErrorMixin: a,
          }
        );
      }
      throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
        500,
        "unexpected_mex_mutation_response",
      );
    }
    function m(e) {
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
    function p(e, t) {
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
    function _(e) {
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
    ((l.handleMexGetNewsletter = e),
      (l.mapRoleToMembership = u),
      (l.mapReactionCodesSettingToMexInput = c),
      (l.convertMutationResponse = d));
  },
  98,
);
