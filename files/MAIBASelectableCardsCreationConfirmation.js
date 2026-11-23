__d(
  "MAIBASelectableCardsCreationConfirmation",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "maiba_selectable_card_option:";
    function l(t) {
      return t.startsWith(e) ? t.slice(e.length) : t;
    }
    function s(e) {
      var t = e.map(function (e) {
        return l(e.id);
      });
      return (
        t.some(function (e) {
          return e === "e2e_draft_creation_proceed" || e === "proceed";
        }) &&
        t.some(function (e) {
          return e === "e2e_draft_creation_changes" || e === "changes";
        })
      );
    }
    function u(e) {
      var t = l(e);
      return t === "e2e_draft_creation_proceed" || t === "proceed";
    }
    ((i.isR23CreationConfirmationCard = s), (i.isR23CreationProceedOption = u));
  },
  66,
);
