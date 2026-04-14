__d(
  "WAWebAddToListModal.react",
  ["fbt", "WAWebSelectModal.react", "WAWebSelectModalFooter.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.isEditMode,
        n = e.onClose,
        r = e.preselectedChats;
      return u.jsx(o("WAWebSelectModal.react").SelectModal, {
        listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
        title:
          t === !0
            ? s._(/*BTDS*/ "Edit list items")
            : s._(/*BTDS*/ "Add to list"),
        ephemeralIcon: "chat-list",
        onConfirm: function (t) {
          var e = t.selectedItems;
          return n(e);
        },
        shouldShowSelectedChatList: !0,
        shouldShowSelectionSummary: !1,
        singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType
          .CONFIRM,
        multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
          .FooterType.CONFIRM,
        getInitialItems: function () {
          return [].concat(r);
        },
        activeWithoutSelection: !0,
        tsNavigationData: { surface: "unknown", viewName: "add-to-list" },
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
