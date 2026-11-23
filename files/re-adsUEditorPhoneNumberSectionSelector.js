__d(
  "re-adsUEditorPhoneNumberSectionSelector",
  [
    "RelayEverywhereFlux",
    "RelayEverywhereUEditorRegistry",
    "adsUEditorPhoneNumberSectionSelector",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("RelayEverywhereUEditorRegistry").Adgroup.getContextEnforce(
        e.contextKey,
      );
      return o("RelayEverywhereFlux").subscribe(
        o("adsUEditorPhoneNumberSectionSelector")
          .adsUEditorPhoneNumberSectionSelector,
        n,
        i.id + "-adsUEditorPhoneNumberSectionSelector",
        t.throwSuspenseOnLoading === !0,
      );
    }
    l.ads_ueditor_phone_number_selection_selector = e;
  },
  98,
);
