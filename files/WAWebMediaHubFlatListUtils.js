__d(
  "WAWebMediaHubFlatListUtils",
  ["WALogger", "WAWeb-moment", "WAWebL10N", "fbs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      if (!n) {
        var a = r("WAWebL10N").getFullLocale(),
          i = new Map();
        for (var l of t) {
          var s,
            u = void 0,
            c = void 0;
          try {
            var d = l.t;
            if (!d || isNaN(d)) continue;
            var m = r("WAWeb-moment")(Date.now()).startOf("day"),
              p = r("WAWeb-moment").unix(d).startOf("day");
            if (!p.isValid()) continue;
            var _ = m.diff(p, "days"),
              f = _ === 0;
            if (f) ((u = { title: "", subtitle: "" }), (c = "today"));
            else if (_ === 1) {
              var g = new Intl.DateTimeFormat(a, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
                h = m.clone().subtract(1, "day");
              ((u = {
                title: r("fbs")._(/*BTDS*/ "Yesterday").toString(),
                subtitle: g.format(h.toDate()),
              }),
                (c = "yesterday"));
            } else {
              var y = _ <= 7 && _ > 1;
              if (y) {
                var C = m.clone().subtract(7, "days"),
                  b = m.clone().subtract(2, "days"),
                  v = new Intl.DateTimeFormat(a, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }),
                  S = v.formatRange(C.toDate(), b.toDate());
                ((u = {
                  title: r("fbs")._(/*BTDS*/ "Last week").toString(),
                  subtitle: S,
                }),
                  (c = "lastweek"));
              } else {
                var R = m.year(),
                  L = p.year(),
                  E = L === R,
                  k = new Intl.DateTimeFormat(a, {
                    year: E ? void 0 : "numeric",
                    month: "long",
                  }),
                  I = r("WAWeb-moment").unix(d).toDate(),
                  T = k.format(I),
                  D = r("WAWeb-moment").unix(d).startOf("month"),
                  x = r("WAWeb-moment").unix(d).endOf("month"),
                  $ = new Intl.DateTimeFormat(a, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }),
                  P = $.formatRange(D.toDate(), x.toDate());
                ((u = { title: T, subtitle: P }),
                  (c = D.year() + "-" + D.month()));
              }
            }
          } catch (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getMediaHubGroupedMsgs: Failed to group messages by date",
                ])),
            );
            continue;
          }
          (i.has(c) || i.set(c, { datePairing: u, msgs: [] }),
            (s = i.get(c)) == null || s.msgs.push(l));
        }
        return Array.from(i.values(), function (e) {
          return [e.datePairing, e.msgs];
        });
      }
      return [[{ title: "", subtitle: "" }, t]];
    }
    l.getMediaHubGroupedMsgs = s;
  },
  226,
);
