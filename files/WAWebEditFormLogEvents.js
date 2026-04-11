__d(
  "WAWebEditFormLogEvents",
  [
    "WAWebEditBusinessProfileWamEvent",
    "WAWebWamEnumBusinessProfileEntryPoint",
    "WAWebWamEnumEditProfileAction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return {
        hasAddress: e.address != null,
        hasCategory: !!(e.categories && e.categories.length > 0),
        hasDescription: e.description != null,
        hasEmail: e.email != null,
        hasHours: ((t = e.businessHours) == null ? void 0 : t.config) != null,
        hasWebsite: e.website != null,
      };
    }
    function s(t, n) {
      var r = new (o(
        "WAWebEditBusinessProfileWamEvent",
      ).EditBusinessProfileWamEvent)(
        babelHelpers.extends(
          {
            businessProfileEntryPoint: o(
              "WAWebWamEnumBusinessProfileEntryPoint",
            ).BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
            editBusinessProfileSessionId: n,
            editProfileAction: o("WAWebWamEnumEditProfileAction")
              .EDIT_PROFILE_ACTION.ACTION_OPEN,
          },
          e(t),
        ),
      );
      r.commit();
    }
    function u(t, n, r) {
      var a = new (o(
        "WAWebEditBusinessProfileWamEvent",
      ).EditBusinessProfileWamEvent)(
        babelHelpers.extends(
          {
            businessProfileEntryPoint: o(
              "WAWebWamEnumBusinessProfileEntryPoint",
            ).BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
            editBusinessProfileSessionId: r,
            editProfileAction: o("WAWebWamEnumEditProfileAction")
              .EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_OPEN,
            editProfileActionField: t,
          },
          e(n),
        ),
      );
      a.commit();
    }
    function c(t, n, r) {
      var a = new (o(
        "WAWebEditBusinessProfileWamEvent",
      ).EditBusinessProfileWamEvent)(
        babelHelpers.extends(
          {
            businessProfileEntryPoint: o(
              "WAWebWamEnumBusinessProfileEntryPoint",
            ).BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
            editBusinessProfileSessionId: r,
            editProfileAction: o("WAWebWamEnumEditProfileAction")
              .EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_SAVE,
            editProfileActionField: t,
          },
          e(n),
        ),
      );
      a.commit();
    }
    function d(t, n, r) {
      var a = new (o(
        "WAWebEditBusinessProfileWamEvent",
      ).EditBusinessProfileWamEvent)(
        babelHelpers.extends(
          {
            businessProfileEntryPoint: o(
              "WAWebWamEnumBusinessProfileEntryPoint",
            ).BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
            editBusinessProfileSessionId: r,
            editProfileAction: o("WAWebWamEnumEditProfileAction")
              .EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_DISCARD,
            editProfileActionField: t,
          },
          e(n),
        ),
      );
      a.commit();
    }
    function m() {
      var e = new (o(
        "WAWebEditBusinessProfileWamEvent",
      ).EditBusinessProfileWamEvent)({
        businessProfileEntryPoint: o("WAWebWamEnumBusinessProfileEntryPoint")
          .BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
        editProfileAction: o("WAWebWamEnumEditProfileAction")
          .EDIT_PROFILE_ACTION.ACTION_EDIT_COVER_PHOTO_CLICK,
      });
      e.commit();
    }
    function p() {
      var e = new (o(
        "WAWebEditBusinessProfileWamEvent",
      ).EditBusinessProfileWamEvent)({
        businessProfileEntryPoint: o("WAWebWamEnumBusinessProfileEntryPoint")
          .BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
        editProfileAction: o("WAWebWamEnumEditProfileAction")
          .EDIT_PROFILE_ACTION.ACTION_REMOVE_COVER_PHOTO,
      });
      e.commit();
    }
    ((l.getProfilePopulatedFields = e),
      (l.logProfileOpen = s),
      (l.logProfileFieldOpen = u),
      (l.logProfileFieldSave = c),
      (l.logProfileFieldDiscard = d),
      (l.logEditCoverPhoto = m),
      (l.logRemoveCoverPhoto = p));
  },
  98,
);
