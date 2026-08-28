__d(
  "VideoCaptionValidator",
  ["errorCode", "fbt"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e) {
      var t = null,
        n = [],
        r = 0,
        o = 1,
        a,
        i,
        l,
        s,
        c = /\d{1,2}:\d{1,2}:\d{1,2}(,|\.)\d{1,3}/,
        d = e.split(/\r?\n/g);
      return (
        d.forEach(function (e, d) {
          switch (r) {
            case 0:
              if (e.charCodeAt(0) === 65279 || e === "") break;
              (isNaN(e)
                ? (n.push(
                    u._(
                      /*BTDS*/ "Incorrect formatting. Blocks should be separated by a single line. Remove extra lines or add missing sequence numbers.",
                    ),
                  ),
                  (t = 2415001))
                : parseInt(e, 10) !== o &&
                  (n.push(
                    u._(
                      /*BTDS*/ "Incorrect formatting. Sequence numbers should start with 1 and continue in order. Change number or remove extra blank line.",
                    ),
                  ),
                  (t = 2415002)),
                o++,
                (r = 1));
              break;
            case 1:
              ((i = e.split(" ")),
                i.length !== 3 ||
                !c.test(i[0]) ||
                i[1] !== "-->" ||
                !c.test(i[2])
                  ? (i[1] === "-->"
                      ? n.push(
                          u._(
                            /*BTDS*/ "Incorrect time code formatting. Use only numbers in the format hh:mm:ss,fff (example: 01:09:05,050).",
                          ),
                        )
                      : n.push(
                          u._(
                            /*BTDS*/ "Incorrect formatting. Use 2 hyphens and 1 greater than symbol to separate start and end times (example: -->).",
                          ),
                        ),
                    (t = 2415003))
                  : ((l = i[0]),
                    (s = i[2]),
                    s <= l &&
                      (n.push(
                        u._(
                          /*BTDS*/ "Incorrect formatting. End time should match time code when captions should end in video.",
                        ),
                      ),
                      (t = 2415004))),
                (r = 2),
                (a = 0));
              break;
            case 2:
              (a++, e === "" && (r = 0));
          }
        }),
        t != null ? { code: t, message: n[0], captionText: e } : null
      );
    }
    function c(e) {
      var t = /^\s/,
        n = /\s$/;
      return t.test(e) || n.test(e)
        ? "Contains leading and/or trailing space characters."
        : null;
    }
    ((l.validateCaptions = e), (l._checkLeadingTrailingSpaces = c));
  },
  226,
);
