__d(
  "WAWebFormatOversizedMsg",
  ["fbt", "WAWebFbtAppName", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return s._(
        /*BTDS*/ "This message can't be viewed in {=m1}. View it on your phone instead.",
        [
          s._implicitParam(
            "=m1",
            u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
              children: s._(/*BTDS*/ ""),
            }),
          ),
        ],
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      return s._(
        /*BTDS*/ "This message can't be viewed in {=m1}. View it on your phone instead.",
        [
          s._implicitParam(
            "=m1",
            u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
              children: s._(/*BTDS*/ ""),
            }),
          ),
        ],
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.formatOversizedMsgText = c),
      (l.formatOversizedMsgNotification = d));
  },
  226,
);
