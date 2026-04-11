__d(
  "WAWebOpenCoexEditDeleteAlertModal",
  ["WAWebCoexEditDeleteAlertModal.react", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      o("WAWebModalManager").ModalManager.openAlert(
        s.jsx(
          o("WAWebCoexEditDeleteAlertModal.react")
            .WAWebCoexEditDeleteAlertModal,
          { alertType: e, onClose: t },
        ),
      );
    }
    function c(e, t) {
      var n = e
        ? o("WAWebCoexEditDeleteAlertModal.react").CoexAlertType.BUSINESS_EDIT
        : o("WAWebCoexEditDeleteAlertModal.react").CoexAlertType.CONSUMER_EDIT;
      u(n, t);
    }
    function d(e, t) {
      var n = e
        ? o("WAWebCoexEditDeleteAlertModal.react").CoexAlertType.BUSINESS_DELETE
        : o("WAWebCoexEditDeleteAlertModal.react").CoexAlertType
            .CONSUMER_DELETE;
      u(n, t);
    }
    ((l.openCoexEditAlertModal = c), (l.openCoexDeleteAlertModal = d));
  },
  98,
);
