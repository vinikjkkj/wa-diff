__d(
  "WAWebVoipHandleLidCallerDisplayInfo",
  [
    "WAPromiseEach",
    "WAWebVoipLidUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.trim();
      return t == null || t === "" ? null : t;
    }
    function s(t) {
      var n = t.split(";"),
        r = [];
      return (
        n.forEach(function (t) {
          if (t.trim()) {
            var n = t.split(","),
              a = n[0],
              i = n[1],
              l = n[2],
              s = n[3];
            r.push({
              pn: o("WAWebWidFactory").createUserWidOrThrow(a),
              lid: o("WAWebWidFactory").createUserWidOrThrow(i),
              displayName: e(l),
              username: e(s),
            });
          }
        }),
        r
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAPromiseEach").promiseEach(
            e,
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, n) {
                  var r = n === e.length - 1,
                    a = t.displayName,
                    i = t.lid,
                    l = t.pn,
                    s = t.username;
                  yield o(
                    "WAWebVoipLidUtils",
                  ).attemptPersistLidMappingAndUserAttributes({
                    jid: i,
                    phoneNumber: l,
                    username: s,
                    pushName: a,
                    flushImmediately: r,
                  });
                },
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })(),
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = s(e);
          yield u(t);
        })),
        m.apply(this, arguments)
      );
    }
    ((l.parseWAWebVoipLidCallerDisplayInfoPayload = s),
      (l.handleWAWebVoipLidCallerDisplayInfo = d));
  },
  98,
);
