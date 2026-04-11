__d(
  "WAWebSendStatusMuteAction",
  [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebLidMigrationUtils",
    "WAWebStatusSetAndSyncMute",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      var n = o("WAWebContactCollection").ContactCollection.get(e),
        r = {
          id: e,
          pushname: (n == null ? void 0 : n.pushname) || "",
          type: (n == null ? void 0 : n.type) || "out",
          name: n == null ? void 0 : n.name,
          statusMute: t,
        };
      o("WAWebContactCollection").ContactCollection.add(r, { merge: !0 });
    }
    function c(e, t) {
      var n = e,
        r = null;
      if (t) {
        var a = o("WAWebLidMigrationUtils").toPn(e);
        a != null && (n = a);
      } else {
        var i = e.isUser() ? o("WAWebApiContact").getAlternateUserWid(e) : null;
        i && (r = i);
      }
      return { contactToApply: n, altContactToApply: r };
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = c(t, r),
            i = a.altContactToApply,
            l = a.contactToApply,
            d = [o("WAWebStatusSetAndSyncMute").setAndSyncStatusMute(l, r)];
          return (
            i != null &&
              d.push(o("WAWebStatusSetAndSyncMute").setAndSyncStatusMute(i, r)),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "setStatusMute: contactToApply: ",
                  ", altContactToApply: ",
                  "",
                ])),
              l.toLogString(),
              i == null ? void 0 : i.toLogString(),
            ),
            (s || (s = n("Promise"))).all(d).then(function () {
              (u(l, r), i != null && u(i, r));
            })
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.setStatusMute = d;
  },
  98,
);
