__d(
  "WAWebContactsAndGroupsListActions",
  [
    "WAWebManageLabelFlowLoadable",
    "WAWebModalManager",
    "WAWebStateUtils",
    "WAWebWamEnumUpdateEntryPoint",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      c([e]);
    }
    function c(e) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
          entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
            .CONTACT_INFO,
          modelsToUpdate: e.map(function (e) {
            return o("WAWebStateUtils").unproxy(e);
          }),
          onClose: o("WAWebModalManager").closeModalManager,
        }),
      );
    }
    ((l.openListsEditorFromContactsAndGroups = u),
      (l.openListsEditorForChatsFromContactsAndGroups = c));
  },
  98,
);
