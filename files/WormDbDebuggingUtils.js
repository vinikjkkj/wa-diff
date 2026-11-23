__d(
  "WormDbDebuggingUtils",
  ["WAJids", "WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e = await o("WASignalDB").getDbPromise();
      return e.runInTransaction(
        ["identity"],
        "readonly",
        function (e) {
          return e.stores.identity.readAll();
        },
        "debug-get-identities",
      );
    }
    async function s() {
      var e = await o("WASignalDB").getDbPromise();
      return e.runInTransaction(
        ["contacts"],
        "readonly",
        function (e) {
          return e.stores.contacts.readAll();
        },
        "debug-get-contacts",
      );
    }
    async function u() {
      var e = await o("WASignalDB").getDbPromise();
      return e.runInTransaction(
        ["session"],
        "readonly",
        function (e) {
          return e.stores.session.readAll();
        },
        "debug-get-sessions",
      );
    }
    async function c() {
      var e = await o("WASignalDB").getDbPromise();
      return e.runInTransaction(
        ["senderKeySessions"],
        "readonly",
        function (e) {
          return e.stores.senderKeySessions.readAll();
        },
        "debug-get-sender-key-sessions",
      );
    }
    async function d() {
      var e = await o("WASignalDB").getDbPromise();
      return e.runInTransaction(
        ["prekey"],
        "readonly",
        function (e) {
          return e.stores.prekey.readAll();
        },
        "debug-get-prekeys",
      );
    }
    async function m() {
      var e = await o("WASignalDB").getDbPromise();
      return e.runInTransaction(
        ["prekeyGeneration"],
        "readonly",
        function (e) {
          return e.stores.prekeyGeneration.readAll();
        },
        "debug-get-prekey-generations",
      );
    }
    async function p() {
      var e = await o("WASignalDB").getDbPromise();
      return e.runInTransaction(
        ["signedPrekey"],
        "readonly",
        function (e) {
          return e.stores.signedPrekey.readAll();
        },
        "debug-get-signed-prekeys",
      );
    }
    async function _() {
      var e = await o("WASignalDB").getDbPromise();
      return e.runInTransaction(
        ["meta"],
        "readonly",
        function (e) {
          return e.stores.meta.readAll();
        },
        "debug-get-meta-rows",
      );
    }
    function f(t) {
      return e().then(function (e) {
        return e.filter(function (e) {
          return e.userJid === t;
        });
      });
    }
    function g(e) {
      return s().then(function (t) {
        return t.find(function (t) {
          return t.contactJid === e;
        });
      });
    }
    function h(e) {
      return u().then(function (t) {
        return t.filter(function (t) {
          return o("WAJids").extractUserJid(t.id) === e;
        });
      });
    }
    function y(e) {
      return c().then(function (t) {
        return t.filter(function (t) {
          return t.userJid === e;
        });
      });
    }
    ((l.getIdentities = e),
      (l.getContacts = s),
      (l.getSessions = u),
      (l.getSenderKeySessions = c),
      (l.getPrekeys = d),
      (l.getPrekeyGenerations = m),
      (l.getSignedPrekeys = p),
      (l.getMetaRows = _),
      (l.getIdentitiesForUser = f),
      (l.getContact = g),
      (l.getSessionsForUser = h),
      (l.getSenderKeySessionsForUser = y));
  },
  98,
);
