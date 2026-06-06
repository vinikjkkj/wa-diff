__d(
  "WAWebHandleBusinessProfile",
  [
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.from,
            n = o("WAWebWidFactory").createWidFromWidLike(t.toString());
          yield d(n);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.hash,
            n = yield o("WAWebApiContact").getContactRecordByHash(t);
          if (n == null) return !1;
          var r = o("WAWebWidFactory").createWid(n.id);
          return (yield d(r), !0);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return o("WAWebBackendApi").frontendSendAndReceive(
        "updateBusinessProfile",
        { wid: o("WAWebWidToJid").widToUserJid(e) },
      );
    }
    ((l.handleBusinessProfile = e), (l.handleBusinessProfileHash = u));
  },
  98,
);
