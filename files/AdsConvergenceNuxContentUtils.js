__d(
  "AdsConvergenceNuxContentUtils",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Discard drafts"),
      d = function (t, n) {
        return s._(
          /*BTDS*/ "Any changes in this ad account {account name} [{Ad account ID}] that haven't yet been published will be discarded.",
          [
            s._param("account name", u.jsx("strong", { children: t })),
            s._param("Ad account ID", n),
          ],
        );
      };
    ((l.DISCARD_DRAFT_DIALOG_HEADER = c), (l.getDeleteDraftDialogContent = d));
  },
  226,
);
