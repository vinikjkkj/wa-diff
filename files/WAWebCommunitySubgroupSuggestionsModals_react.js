__d(
  "WAWebCommunitySubgroupSuggestionsModals.react",
  ["fbt", "Promise", "WAWebConfirmPopup.react", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = e.onOK;
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Community is full"),
        testid: void 0,
        onOK: function () {
          (o("WAWebModalManager").closeModalManager(), t());
        },
        okText: s._(/*BTDS*/ "Manage groups"),
        onCancel: o("WAWebModalManager").closeModalManager,
        children: s._(
          /*BTDS*/ "You cannot add more groups because this community is full. To add more, you must remove groups.",
        ),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(t, r) {
      return new (e || (e = n("Promise")))(function (e) {
        var n =
          t === 0
            ? s._(
                /*BTDS*/ "No pending group suggestions will be approved because this community is full.",
              )
            : s._(
                /*BTDS*/ '_j{"*":{"*":"Only {available} of {pending_suggestions} pending group suggestions will be approved because this community is full.","_1":"Only {available} of 1 pending group suggestion will be approved because this community is full."}}',
                [
                  s._param("available", t, [0]),
                  s._plural(r, "pending_suggestions"),
                ],
              );
        o("WAWebModalManager").ModalManager.open(
          c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            title: s._(/*BTDS*/ "Community is full"),
            okText: t !== 0 ? s._(/*BTDS*/ "Approve") : void 0,
            onOK: function () {
              (e(!0), o("WAWebModalManager").closeModalManager());
            },
            onCancel: function () {
              (e(!1), o("WAWebModalManager").closeModalManager());
            },
            children: n,
          }),
        );
      });
    }
    ((l.SubgroupSuggestionsApproveLimit = d), (l.confirmCommunityFull = m));
  },
  226,
);
