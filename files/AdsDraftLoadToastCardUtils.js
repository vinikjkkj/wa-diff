__d(
  "AdsDraftLoadToastCardUtils",
  ["fbt", "adsFormatErrorMessage", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "draftLoad",
      d = s._(/*BTDS*/ "Unable to load unpublished changes.");
    function m(e, t) {
      var n = d,
        o = s._(
          /*BTDS*/ "An error prevented your unpublished changes from being loaded. Please reload the page and try again. Error: {line break}{error message}",
          [
            s._param("line break", u.jsx("br", {})),
            s._param("error message", r("adsFormatErrorMessage")(t)),
          ],
        );
      return {
        id: "draft_load_failure_toast_" + e,
        cardType: "warning",
        canDismiss: !0,
        header: n,
        bodyText: o,
        useCase: c,
        callsToAction: [],
      };
    }
    function p(e) {
      var t = e.filter(function (e) {
        return e.useCase !== c;
      });
      return t.length !== e.length ? t : e;
    }
    function _(e, t) {
      return [].concat(e, t);
    }
    ((l.createToastCardForDraftLoadFailure = m),
      (l.dismissAllDraftLoadToastCards = p),
      (l.addDraftLoadToastCards = _));
  },
  226,
);
