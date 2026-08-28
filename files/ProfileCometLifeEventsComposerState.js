__d(
  "ProfileCometLifeEventsComposerState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      var e = new Date();
      return {
        day: e.getDate(),
        month: e.getMonth() + 1,
        year: e.getFullYear(),
      };
    }
    function l() {
      return {
        date: e(),
        defaultTitle: "",
        description: "",
        feedQueryVariables: null,
        initialState: null,
        isDateEditable: !0,
        isFromMegaMenu: !1,
        isMediaExpanded: !1,
        isTitleDirty: !1,
        loadingDefaultMedia: !0,
        privacy: null,
        selectedCategoryID: null,
        selectedDefaultMedia: null,
        selectedIcon: null,
        selectedSubcategoryID: null,
        shouldUpdateCurrentCity: !1,
        showEntityMedia: !1,
        skipSubcategoryStep: !1,
        step: "CATEGORY",
        storyID: null,
        surface: null,
        taggedEmployer: { id: "", name: "" },
        taggedLocation: null,
        taggedMetadataLocation: { id: "", name: "" },
        taggedPartner: { id: "", name: "" },
        taggedSchool: { id: "", name: "" },
        taggedSchoolType: "COLLEGE",
        taggedUsers: [],
        title: "",
        uploadedMedia: [],
      };
    }
    ((i.getCurrentDate = e), (i.getInitialState = l));
  },
  66,
);
