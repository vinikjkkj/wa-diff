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
            else {
              var g = _ <= 7 && _ > 0;
              if (g) {
                var h = m.clone().subtract(7, "days"),
                  y = m.clone().subtract(1, "day"),
                  C = new Intl.DateTimeFormat(a, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }),
                  b = C.formatRange(h.toDate(), y.toDate());
                ((u = {
                  title: r("fbs")._(/*BTDS*/ "Last week").toString(),
                  subtitle: b,
                }),
                  (c = "lastweek"));
              } else {
                var v = m.year(),
                  S = p.year(),
                  R = S === v,
                  L = new Intl.DateTimeFormat(a, {
                    year: R ? void 0 : "numeric",
                    month: "long",
                  }),
                  E = r("WAWeb-moment").unix(d).toDate(),
                  k = L.format(E),
                  I = r("WAWeb-moment").unix(d).startOf("month"),
                  T = r("WAWeb-moment").unix(d).endOf("month"),
                  D = new Intl.DateTimeFormat(a, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }),
                  x = D.formatRange(I.toDate(), T.toDate());
                ((u = { title: k, subtitle: x }),
                  (c = I.year() + "-" + I.month()));
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
