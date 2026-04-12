__d(
  "useWAWebPollAssociatedMessagesMap",
  [
    "WAWebGetOptionAssociatedImageMap",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAsync",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var a = s(new Map()),
        i = a[0],
        l = a[1],
        u = t.map(function (e) {
          return e.mediaData;
        }),
        c = s(
          u.map(function (e) {
            return e.filehash;
          }),
        ),
        d = c[0],
        m = c[1];
      return (
        o("useWAWebListener").useListeners(
          u.map(function (e) {
            return {
              source: e,
              eventOrEvents: "change:filehash",
              callback: function () {
                m(
                  t.map(function (e) {
                    return e.mediaData.filehash;
                  }),
                );
              },
            };
          }),
        ),
        r("useWAWebAsync")(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = yield o(
              "WAWebGetOptionAssociatedImageMap",
            ).getOptionAssociatedMsgsMap(e, t);
            l(n);
          }),
          [t, d],
        ),
        i
      );
    }
    l.usePollAssociatedMessagesMap = u;
  },
  98,
);
