__d(
  "re-adsUEditorAdgroupDisapprovalMessageBaseSelector",
  [
    "RelayEverywhereFlux",
    "RelayEverywhereUEditorRegistry",
    "adsUEditorAdgroupDisapprovalMessageBaseSelector",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("RelayEverywhereUEditorRegistry").Adgroup.getContextEnforce(
        e.contextKey,
      );
      return o("RelayEverywhereFlux").subscribe(
        o("adsUEditorAdgroupDisapprovalMessageBaseSelector")
          .adsUEditorAdgroupDisapprovalMessageBaseSelector,
        t,
        i.id + "-adsUEditorAdgroupDisapprovalMessageBaseSelector",
      );
    }
    l.adgroup_disapproval_message_base_selector = e;
  },
  98,
);
