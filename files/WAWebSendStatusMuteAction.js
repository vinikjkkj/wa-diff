__d(
  "WAWebSendStatusMuteAction",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebLidMigrationUtils",
    "WAWebStatusSetAndSyncMute",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
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
    function u(e, t) {
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
    async function c(t, n) {
      var r = u(t, n),
        a = r.altContactToApply,
        i = r.contactToApply,
        l = [o("WAWebStatusSetAndSyncMute").setAndSyncStatusMute(i, n)];
      return (
        a != null &&
          l.push(o("WAWebStatusSetAndSyncMute").setAndSyncStatusMute(a, n)),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "setStatusMute: contactToApply: ",
              ", altContactToApply: ",
              "",
            ])),
          i.toLogString(),
          a == null ? void 0 : a.toLogString(),
        ),
        Promise.all(l).then(function () {
          (s(i, n), a != null && s(a, n));
        })
      );
    }
    l.setStatusMute = c;
  },
  98,
);
