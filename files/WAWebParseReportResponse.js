__d(
  "WAWebParseReportResponse",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      e: {
        var n = t;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.name === "GroupReportResponseError" &&
          "value" in n
        ) {
          var r = n.value,
            a = parseInt(r.errorSpamIqErrors.value.code, 10),
            i = r.errorSpamIqErrors.value.text;
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseGroupReportResponse: server response with ",
                  ", ",
                  "",
                ])),
              a,
              i,
            ),
            { errorCode: a, errorText: i }
          );
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.name === "GroupReportResponseSuccess" &&
          "value" in n
        ) {
          var l = n.value;
          return l;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    function c(e) {
      switch (e.name) {
        case "IndividualReportResponseError": {
          var t = parseInt(e.value.errorSpamIqErrors.value.code, 10),
            n = e.value.errorSpamIqErrors.value.text;
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "parseIndividualReportResponse: server response with ",
                  ", ",
                  "",
                ])),
              t,
              n,
            ),
            { errorCode: t, errorText: n }
          );
        }
        default:
          return (e.name, e.value);
      }
    }
    ((l.parseGroupReportResponse = u), (l.parseIndividualReportResponse = c));
  },
  98,
);
