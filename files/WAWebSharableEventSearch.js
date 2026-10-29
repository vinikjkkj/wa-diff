__d(
  "WAWebSharableEventSearch",
  ["WAWebL10NAccentFold", "WAWebSharableEventPeople"],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
      o("WAWebSharableEventPeople").SharableEventNameSource.Contact,
      o("WAWebSharableEventPeople").SharableEventNameSource.PushName,
    ]);
    function s(e, t) {
      var n = o("WAWebL10NAccentFold").accentFold(t.trim());
      return n === ""
        ? e
        : e.filter(function (e) {
            return u(e).some(function (e) {
              return o("WAWebL10NAccentFold").accentFold(e).includes(n);
            });
          });
    }
    function u(t) {
      var n = [t.name];
      t.locationName != null && n.push(t.locationName);
      var r = o("WAWebSharableEventPeople").getSharableEventHostName(
        t.creatorLid,
      );
      return (e.has(r.source) && n.push(String(r.name)), n);
    }
    l.filterSharableEventsBySearch = s;
  },
  98,
);
