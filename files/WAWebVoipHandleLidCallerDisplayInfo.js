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
      if (e == null) return null;
      var t = e.trim();
      return t === "" ? null : t;
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
              accountKind: null,
            });
          }
        }),
        r
      );
    }
    function u(t) {
      var n = JSON.parse(t),
        r = n.participants;
      if (r == null) return [];
      var a = [];
      return (
        r.forEach(function (t) {
          var n,
            r,
            i = (n = t.lid_user_jid) == null ? void 0 : n.raw_jid;
          if (!(i == null || i === "")) {
            var l = (r = t.phone_user_jid) == null ? void 0 : r.raw_jid;
            a.push({
              lid: o("WAWebWidFactory").createUserWidOrThrow(i),
              pn:
                l != null && l !== ""
                  ? o("WAWebWidFactory").createUserWidOrThrow(l)
                  : null,
              displayName: e(t.push_name),
              username: e(t.username),
              accountKind: e(t.account_kind),
            });
          }
        }),
        a
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAPromiseEach").promiseEach(
            e,
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, n) {
                  var r = n === e.length - 1,
                    a = t.accountKind,
                    i = t.displayName,
                    l = t.lid,
                    s = t.pn,
                    u = t.username;
                  yield o(
                    "WAWebVoipLidUtils",
                  ).attemptPersistLidMappingAndUserAttributes({
                    jid: l,
                    phoneNumber: s,
                    username: u,
                    pushName: i,
                    accountKind: a,
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
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = s(e);
          yield c(t);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = u(e);
          yield c(t);
        })),
        f.apply(this, arguments)
      );
    }
    ((l.parseWAWebVoipLidCallerDisplayInfoPayload = s),
      (l.parseWAWebVoipLidCallerDisplayInfoJsonPayload = u),
      (l.handleWAWebVoipLidCallerDisplayInfo = m),
      (l.handleWAWebVoipLidCallerDisplayInfoJson = _));
  },
  98,
);
