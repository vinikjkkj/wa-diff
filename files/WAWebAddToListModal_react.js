__d(
  "WAWebAddToListModal.react",
  [
    "fbt",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.isEditMode,
        r = e.onClose,
        a = e.preselectedChats,
        i;
      t[0] !== n
        ? ((i =
            n === !0
              ? s._(/*BTDS*/ "Edit list items")
              : s._(/*BTDS*/ "Add to list")),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] !== r
        ? ((l = function (t) {
            var e = t.selectedItems;
            return r(e);
          }),
          (t[2] = r),
          (t[3] = l))
        : (l = t[3]);
      var c;
      t[4] !== a
        ? ((c = function () {
            return [].concat(a);
          }),
          (t[4] = a),
          (t[5] = c))
        : (c = t[5]);
      var d;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { surface: "unknown", viewName: "add-to-list" }), (t[6] = d))
        : (d = t[6]);
      var m;
      return (
        t[7] !== i || t[8] !== l || t[9] !== c
          ? ((m = u.jsx(o("WAWebSelectModal.react").SelectModal, {
              listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
              title: i,
              ephemeralIcon: "chat-list",
              onConfirm: l,
              shouldShowSelectedChatList: !0,
              shouldShowSelectionSummary: !1,
              singleSelectionFooterType: o("WAWebSelectModalFooter.react")
                .FooterType.CONFIRM,
              multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
                .FooterType.CONFIRM,
              getInitialItems: c,
              activeWithoutSelection: !0,
              tsNavigationData: d,
            })),
            (t[7] = i),
            (t[8] = l),
            (t[9] = c),
            (t[10] = m))
          : (m = t[10]),
        m
      );
    }
    l.default = c;
  },
  226,
);
