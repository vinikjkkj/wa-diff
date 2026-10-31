__d(
  "WAWebSharableEventDateTime",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = 1e3,
      l = 30,
      s = 1440,
      u = 60,
      c = 7,
      d = 6,
      m = 0,
      p = 1,
      _ = 19,
      f = 18,
      g = 12,
      h = 11,
      y = 9,
      C = 14,
      b = 10,
      v = 15,
      S = 15,
      R = n("$InternalEnum")({
        Tonight: "tonight",
        Tomorrow: "tomorrow",
        ThisWeekend: "this-weekend",
        NextWeek: "next-week",
      });
    function L(t, n) {
      var r = I(t);
      return (
        r.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()),
        r.getTime() / e
      );
    }
    function E(t) {
      var n = I(t);
      n.setHours(0, 0, 0, 0);
      var r = Array.from({ length: s / l }, function (t, r) {
        var o = new Date(n);
        return (o.setMinutes(r * l), o.getTime() / e);
      });
      return Array.from(new Set(r));
    }
    function k(e) {
      var t = e == null ? new Date() : I(e);
      return (t.setHours(0, 0, 0, 0), t);
    }
    function I(t) {
      return new Date(t * e);
    }
    function T(e, t) {
      return Math.floor(e / u) === Math.floor(t / u);
    }
    function D(t, n) {
      var r = I(n),
        o = I(n);
      o.setSeconds(0, 0);
      var a = r.getDay(),
        i = r.getHours();
      e: {
        if (t === R.Tonight) {
          if (i < f) o.setHours(_, 0);
          else {
            var l = Math.ceil((r.getMinutes() + v) / S) * S;
            o.setMinutes(l);
          }
          break e;
        }
        if (t === R.Tomorrow) {
          (o.setDate(o.getDate() + 1), o.setHours(g, 0));
          break e;
        }
        if (t === R.ThisWeekend) {
          x(o, a, i);
          break e;
        }
        if (t === R.NextWeek) {
          var s = (c + p - a) % c || c;
          (o.setDate(o.getDate() + s), o.setHours(b, 0));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
      return o.getTime() / e;
    }
    function x(e, t, n) {
      t === d && n < y
        ? e.setHours(h, 0)
        : t === d
          ? (e.setDate(e.getDate() + 1), e.setHours(h, 0))
          : t === m && n < g
            ? e.setHours(C, 0)
            : (e.setDate(e.getDate() + (t === m ? d : d - t)),
              e.setHours(h, 0));
    }
    ((i.SharableEventQuickStart = R),
      (i.moveToDay = L),
      (i.getHalfHourSlots = E),
      (i.getStartOfDay = k),
      (i.toDate = I),
      (i.isSameMinute = T),
      (i.getSharableEventQuickStart = D));
  },
  66,
);
