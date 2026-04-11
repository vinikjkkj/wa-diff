__d(
  "WAWebBusinessTopCard.react",
  [
    "WAWebBusinessActions.react",
    "WAWebBusinessName.react",
    "WAWebBusinessOpenHours.react",
    "WAWebBusinessProfileCoverPhoto.react",
    "WAWebContactGetters",
    "WAWebContactInfoNotes.react",
    "WAWebContactInfoPhoneNumberHidden.react",
    "WAWebCustomerManagerGating",
    "WAWebDrawerSection.react",
    "WAWebErrorBoundary.react",
    "WAWebFbtIntlList",
    "WAWebMemberLabelContactInfo.react",
    "WAWebNotesUtils",
    "WAWebUISpacing",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "react",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        categories: {
          fontSize: "x1f6kntn",
          color: "x1anpt5t",
          lineHeight: "x37zpob",
          $$css: !0,
        },
      };
    function d(t) {
      var n = t.businessProfile,
        a = t.contact,
        i = t.displayRequestPhoneNumber,
        l = t.onOpenChatTabInCustomerManager,
        s = t.onProductCatalog,
        d = t.onProfilePicClick,
        m = t.onProfilePicLoad,
        p = t.onSaveContact,
        _ = t.sourceChat,
        f = o("useWAWebModelValues").useModelValues(n, [
          "businessHours",
          "categories",
        ]),
        g = f.businessHours,
        h = f.categories,
        y = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
          name: "business-top-card-name",
          children: u.jsx(r("WAWebBusinessName.react"), {
            contact: a,
            businessProfile: n,
          }),
        }),
        C;
      !o("WAWebContactGetters").getIsIAS(a) &&
        !o("WAWebContactGetters").getIsCAPISupportAccount(a) &&
        !o("WAWebContactGetters").getId(a).isBot() &&
        !n.isBizBot3p &&
        h != null &&
        h.length > 0 &&
        (C = u.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props([
              c.categories,
              o("WAWebUISpacing").uiMargin.bottom10,
            ]),
            {
              children: r("WAWebFbtIntlList")(
                h.map(function (e) {
                  return e.localized_display_name;
                }),
                r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                r("WAWebFbtIntlList").DELIMITERS.BULLET,
              ),
            },
          ),
        ));
      var b = g
          ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
              name: "business-top-card-business-hours",
              children: u.jsx(r("WAWebBusinessOpenHours.react"), { hours: g }),
            })
          : null,
        v = a.businessProfile
          ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
              name: "business-top-card-profile-cover-photo",
              children: u.jsx(r("WAWebBusinessProfileCoverPhoto.react"), {
                contact: a,
                businessProfile: a.businessProfile,
                onClick: d,
                onLoad: m,
              }),
            })
          : null,
        S =
          o("WAWebNotesUtils").shouldEnableNotesForWid(
            a == null ? void 0 : a.id,
          ) &&
          !(
            o("WAWebCustomerManagerGating").customerManagerEnabled() &&
            o("WAWebCustomerManagerGating").isEligibleForCustomerFields(a)
          )
            ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                name: "business-top-card-contact-info-notes",
                children: u.jsx(r("WAWebContactInfoNotes.react"), {
                  contact: a,
                }),
              })
            : null,
        R =
          i &&
          !o(
            "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
          ).hasPhoneNumberHidingThreadPromotionMigrationStarted();
      return u.jsxs(r("WAWebDrawerSection.react"), {
        theme: "padding-no-margin",
        children: [
          v,
          u.jsxs("div", {
            className: "x2b8uid",
            children: [
              y,
              u.jsx(
                o("WAWebMemberLabelContactInfo.react").MemberLabelContactInfo,
                { chat: _, contact: a },
              ),
              i && u.jsx(r("WAWebContactInfoPhoneNumberHidden.react"), {}),
              C,
              b,
              u.jsx(r("WAWebBusinessActions.react"), {
                contact: a,
                onProductCatalog: s,
                onSaveContact: p,
                displayRequestPnButton: R,
                onOpenChatTabInCustomerManager: l,
              }),
            ],
          }),
          S,
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
