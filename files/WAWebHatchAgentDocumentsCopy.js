__d(
  "WAWebHatchAgentDocumentsCopy",
  ["fbt", "WAWebHatchBotName.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e === "identity"
        ? s._(/*BTDS*/ "")
        : e === "soul"
          ? s._(/*BTDS*/ "")
          : e === "memory"
            ? s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function d(e) {
      return e === "identity"
        ? s._(/*BTDS*/ "")
        : e === "soul"
          ? s._(/*BTDS*/ "")
          : e === "memory"
            ? s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function m() {
      return s._(/*BTDS*/ "", [
        s._param("agent name", u.jsx(r("WAWebHatchBotName.react"), {})),
      ]);
    }
    function p() {
      return s._(/*BTDS*/ "");
    }
    ((l.hatchAgentDocumentTitle = c),
      (l.hatchAgentDocumentFileName = d),
      (l.hatchAgentDocumentEmptyText = m),
      (l.hatchAgentDocumentTooLongText = p));
  },
  226,
);
