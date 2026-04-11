__d(
  "WAWebDebugUsync",
  [
    "WAWebContactSyncApi",
    "WAWebContactSyncLogger",
    "WAWebNoop",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new (o("WAWebUsync").USyncQuery)()
        .withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.PN)
        .withFeaturesProtocol(["voip"]);
      return (
        e.forEach(function (e) {
          var n = o("WAWebWidFactory").createWid(e + "@s.whatsapp.net");
          t.withUser(
            new (o("WAWebUsyncUser").USyncUser)().withId(n).withPhone(e),
          );
        }),
        t.execute().then(r("WAWebNoop"))
      );
    }
    e.doc = "Send an usync info query to a list of phone numbers";
    function s(e, t) {
      var n = new (o("WAWebUsync").USyncQuery)()
        .withMode(t != null ? t : "query")
        .withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID);
      return (
        e.forEach(function (e) {
          var t = e.includes("@")
            ? o("WAWebWidFactory").createWid(e)
            : o("WAWebWidFactory").createWid(e + "@lid");
          n.withUser(new (o("WAWebUsyncUser").USyncUser)().withId(t));
        }),
        n.execute().then(r("WAWebNoop"))
      );
    }
    s.doc =
      'Send an usync contact query with addressing_mode="lid" to a list of lids';
    function u(e) {
      var t = new (o("WAWebUsync").USyncQuery)().withDeviceProtocol();
      return (
        e.forEach(function (e) {
          var n = e.includes("@")
            ? o("WAWebWidFactory").createWid(e)
            : o("WAWebWidFactory").createWid(e + "@lid");
          t.withUser(new (o("WAWebUsyncUser").USyncUser)().withId(n));
        }),
        t.execute().then(r("WAWebNoop"))
      );
    }
    u.doc = "Send an usync devices query to a list of lids";
    function c(e) {
      var t = e.map(function (e) {
        return e.includes("@")
          ? o("WAWebWidFactory").createWid(e)
          : o("WAWebWidFactory").createWid(e + "@lid");
      });
      return o("WAWebContactSyncApi").syncContactList(
        { contactIds: t, shouldSyncDevice: !0, mode: "query" },
        o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.DEBUG_FULL,
      );
    }
    c.doc =
      "Sync contact list for a list of wids (calls syncContactList from WAWebContactSyncApi)";
    var d = {
      sendUsyncIq: e,
      sendUsyncLidContactIq: s,
      sendUsyncDevicesIq: u,
      debugSyncContactList: c,
      USync: {
        USyncQuery: o("WAWebUsync").USyncQuery,
        USyncUser: o("WAWebUsyncUser").USyncUser,
      },
    };
    l.default = d;
  },
  98,
);
