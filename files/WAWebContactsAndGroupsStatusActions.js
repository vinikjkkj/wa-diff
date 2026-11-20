__d(
  "WAWebContactsAndGroupsStatusActions",
  [
    "WAWebContactsAndGroupsSampleData",
    "WAWebModalManager",
    "WAWebOpenStatusQuotedFlow",
    "WAWebStatusQuotedFlowLoadable",
    "WAWebWamEnumStatusRowSection",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return e.status != null || e.ring != null;
    }
    function c(e, t) {
      var n = e.status;
      if (n == null) {
        e.ring != null &&
          o("WAWebContactsAndGroupsSampleData").showSampleDataToast();
        return;
      }
      o("WAWebOpenStatusQuotedFlow").isStatusOpenable(n) &&
        o("WAWebModalManager").ModalManager.openMedia(
          s.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
            onClose: function () {
              return o("WAWebModalManager").ModalManager.closeMedia();
            },
            rowIndex: t,
            rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
              .CONTACTS_TAB,
            status: n,
          }),
          { transition: "status-modal" },
        );
    }
    ((l.hasContactsAndGroupsStatus = u), (l.viewContactsAndGroupsStatus = c));
  },
  98,
);
