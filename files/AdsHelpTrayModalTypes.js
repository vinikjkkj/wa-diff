__d(
  "AdsHelpTrayModalTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "CONFIRMATION_REQUEST_UPDATE",
        "CONFIRMATION_REOPEN_CASE",
        "CONFIRMATION_ESCALATE_TO_SAM",
      ]),
      l = n("$InternalEnum").Mirrored([
        "CLOSE_CASE",
        "REQUEST_UPDATE",
        "REOPEN_CASE",
        "START_CHAT",
        "REOPEN_CHAT",
        "ESCALATE_TO_SAM",
        "UPLOAD_ATTACHMENT",
        "CONFIRMATION_REQUEST_UPDATE",
        "CONFIRMATION_REOPEN_CASE",
        "CONFIRMATION_ESCALATE_TO_SAM",
      ]),
      s = n("$InternalEnum").Mirrored([
        "BSH_ROW",
        "CASE_DETAILS_PANEL",
        "MAIBA_CHAT",
      ]);
    ((i.ConfirmationModal = e), (i.Modal = l), (i.ModalSource = s));
  },
  66,
);
