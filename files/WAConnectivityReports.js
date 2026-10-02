__d(
  "WAConnectivityReports",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(t, n) {
      var r =
        t != null
          ? "WebSocket " + t + " closed. code: " + n.code
          : "WebSocket closed connection during initialization. Code: " +
            n.code;
      switch (n.code) {
        case 1e3:
        case 1001:
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Connectivity]: ",
                "",
              ])),
            r,
          );
          break;
        case 1006:
          (t != null &&
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[Connectivity]: ",
                  "",
                ])),
              r,
            ),
            o("WALogger").COUNT(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[Connectivity]: ",
                  "",
                ])),
              r,
            ));
          break;
        case 1002:
        case 1003:
        case 1007:
        case 1008:
        case 1009:
        case 1010:
        case 1011:
        case 1015:
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[Connectivity]: ",
                "",
              ])),
            r,
          );
          break;
        default:
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[Connectivity]: ",
                ". Reason: ",
                ", clean: ",
                "",
              ])),
            r,
            n.reason,
            n.wasClean,
          );
          break;
      }
    }
    l.onWebSocketCloseEvent = m;
  },
  98,
);
