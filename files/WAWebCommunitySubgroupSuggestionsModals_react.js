__d(
  "WAWebCommunitySubgroupSuggestionsModals.react",
  [
    "fbt",
    "Promise",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.onOK,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s._(/*BTDS*/ "Community is full")), (t[0] = r))
        : (r = t[0]);
      var a;
      t[1] !== n
        ? ((a = function () {
            (o("WAWebModalManager").closeModalManager(), n());
          }),
          (t[1] = n),
          (t[2] = a))
        : (a = t[2]);
      var i;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Manage groups")), (t[3] = i))
        : (i = t[3]);
      var l;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(
            /*BTDS*/ "You cannot add more groups because this community is full. To add more, you must remove groups.",
          )),
          (t[4] = l))
        : (l = t[4]);
      var u;
      return (
        t[5] !== a
          ? ((u = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: r,
              testid: void 0,
              onOK: a,
              okText: i,
              onCancel: o("WAWebModalManager").closeModalManager,
              children: l,
            })),
            (t[5] = a),
            (t[6] = u))
          : (u = t[6]),
        u
      );
    }
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
