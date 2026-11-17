__d(
  "WAWebOpenNewsletterEnforcementStatusViewer",
  [
    "WAWebModalManager",
    "WAWebStatusCollection",
    "WAWebStatusQuotedFlowLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("WAWebStatusCollection").StatusCollection.get(e.id.remote);
      t != null &&
        (t.msgs.add(e),
        o("WAWebModalManager").ModalManager.openMedia(
          s.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
            status: t,
            msgKey: e.id,
            onClose: function () {
              return o("WAWebModalManager").ModalManager.closeMedia();
            },
            onMsgNotFound: function () {
              return o("WAWebModalManager").ModalManager.closeMedia();
            },
          }),
          { transition: "status-modal" },
        ));
    }
    l.openEnforcementStatusViewer = u;
  },
  98,
);
