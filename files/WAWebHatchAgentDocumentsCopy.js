__d(
  "WAWebHatchAgentDocumentsCopy",
  ["fbt", "WAWebHatchBotName.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e === "identity"
        ? s._(/*BTDS*/ "Identity")
        : e === "soul"
          ? s._(/*BTDS*/ "Soul")
          : e === "memory"
            ? s._(/*BTDS*/ "Memory")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function d(e) {
      return e === "identity"
        ? s._(/*BTDS*/ "Identity.md")
        : e === "soul"
          ? s._(/*BTDS*/ "Soul.md")
          : e === "memory"
            ? s._(/*BTDS*/ "Memory.md")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function m() {
      return s._(/*BTDS*/ "{agent name} hasn't written anything here yet.", [
        s._param("agent name", u.jsx(r("WAWebHatchBotName.react"), {})),
      ]);
    }
    function p() {
      return s._(/*BTDS*/ "This document is too long to open in WhatsApp.");
    }
    ((l.hatchAgentDocumentTitle = c),
      (l.hatchAgentDocumentFileName = d),
      (l.hatchAgentDocumentEmptyText = m),
      (l.hatchAgentDocumentTooLongText = p));
  },
  226,
);
