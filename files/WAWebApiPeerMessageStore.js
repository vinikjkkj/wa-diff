__d(
  "WAWebApiPeerMessageStore",
  [
    "Promise",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebSchemaPeerMessage",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["kind"],
      s;
    function u(t) {
      var n = t.map(function (t) {
        var n = t.kind,
          r = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return babelHelpers.extends({}, r, {
          id: String(t.id),
          to: String(t.to),
          subtype: String(t.subtype),
        });
      });
      return o("WAWebSchemaPeerMessage").getPeerMessageTable().bulkCreate(n);
    }
    function c(e) {
      var t = o("WAWebSchemaPeerMessage").getPeerMessageTable(),
        a = new (r("WAWebMsgKey"))({
          fromMe: !0,
          remote: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
          id: e,
        }),
        i = [t.remove(a.toString())],
        l = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (l != null) {
        var u = new (r("WAWebMsgKey"))({ fromMe: !0, remote: l, id: e });
        i.push(t.remove(u.toString()));
      }
      return (s || (s = n("Promise"))).all(i).then(r("WAWebNoop"));
    }
    ((l.storePeerMessages = u), (l.deletePeerMessage = c));
  },
  98,
);
