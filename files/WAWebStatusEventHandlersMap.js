__d(
  "WAWebStatusEventHandlersMap",
  ["objectEntries"],
  function (t, n, r, o, a, i, l) {
    var e = Object.freeze({
        OnPlay: "onPlay",
        OnPause: "onPause",
        OnEnd: "onEnd",
        OnTimeUpdate: "onTimeUpdate",
        OnLoad: "onLoad",
        OnMetadataLoad: "onMetadataLoad",
        OnMute: "onMute",
        OnUnmute: "onUnmute",
        OnResume: "onResume",
        onDetectHasAudio: "onDetectHasAudio",
      }),
      s = function () {
        var e = {},
          t = function (n) {
            return e[n];
          },
          n = function (r, o) {
            if (o) {
              var n = t(r);
              n ? n.add(o) : (e[r] = new Set([o]));
            }
          },
          o = {
            execute: function (n) {
              for (
                var e,
                  r = arguments.length,
                  o = new Array(r > 1 ? r - 1 : 0),
                  a = 1;
                a < r;
                a++
              )
                o[a - 1] = arguments[a];
              (e = t(n)) == null ||
                e.forEach(function (e) {
                  e.apply(void 0, o);
                });
            },
            set: n,
            remove: function (n, r) {
              var t;
              (t = e[n]) == null || t.delete(r);
            },
            clear: function () {
              Object.values(e).forEach(function (e) {
                return e.clear();
              });
            },
            bulkSet: function (t) {
              r("objectEntries")(t).forEach(function (e) {
                var t = e[0],
                  r = e[1];
                return n(t, r);
              });
            },
          };
        return o;
      };
    ((l.MediaEvents = e), (l.createHandlersMap = s));
  },
  98,
);
