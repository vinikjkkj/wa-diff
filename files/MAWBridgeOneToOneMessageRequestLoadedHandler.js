__d(
  "MAWBridgeOneToOneMessageRequestLoadedHandler",
  [
    "fbt",
    "I64",
    "LSAuthorityLevel",
    "LSIntEnum",
    "LSMessagingThreadTypeUtil",
    "LSThreadBitOffset",
    "MAWContactRelationshipType",
    "MAWJids",
    "MAWMessageRequestUtil",
    "MAWMiActMappingTableAPI",
    "MAWUserJidWrapper",
    "ODS",
    "Promise",
    "ReQL",
    "WADbContact",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c, d;
    function m(e, t) {
      var n = t.threadJid;
      return f(e, n);
    }
    function p(e, t) {
      return f(e, t);
    }
    function _(e) {
      (d || (d = o("ODS"))).bumpEntityKey(
        3185,
        "e2ee.message_request_loaded_failure",
        e,
        1,
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          if (o("MAWUserJidWrapper").getMyUserJid() === r) {
            _("self_thread");
            return;
          }
          var a = o("MAWJids").convertChatJidToIntJid(r),
            i = yield o("MAWMiActMappingTableAPI").getThreadKeyForChatJid(t, r);
          if (i == null) {
            _("missing_thread_key");
            return;
          }
          var l = yield (e || (e = n("Promise"))).all([
              o("ReQL").firstAsync(
                o("ReQL").fromTableAscending(t.threads).getKeyRange(i),
              ),
              o("ReQL").firstAsync(
                o("ReQL").fromTableAscending(t.contacts).getKeyRange(a),
              ),
            ]),
            u = l[0],
            c = l[1];
          if (u == null) {
            _("missing_thread");
            return;
          }
          if (c == null) {
            _("missing_contact");
            return;
          }
          if (!o("LSMessagingThreadTypeUtil").isOneToOne(u.threadType)) {
            _("not_one_to_one");
            return;
          }
          var d = h(u, c),
            m =
              u.folderName === "pending" ||
              u.folderName === "other" ||
              u.folderName === "spam" ||
              d;
          if (m) {
            var p =
                u.folderName === "inbox"
                  ? s._(/*BTDS*/ "Message request").toString()
                  : void 0,
              f = babelHelpers.extends(
                {},
                u,
                { additionalThreadContext: p },
                y(u),
              );
            yield t.threads.put(f);
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      var n = o("MAWContactRelationshipType").getContactRelationshipType(t),
        a =
          e.folderName === "inbox" &&
          n === o("WADbContact").REVERSED_ONE_WAY_CONTACT &&
          !(u || (u = o("I64"))).equal(
            e.lastActivityTimestampMs,
            (u || (u = o("I64"))).zero,
          ),
        i = (u || (u = o("I64"))).equal(
          t.authorityLevel,
          (c || (c = o("LSIntEnum"))).ofNumber(
            r("LSAuthorityLevel").AUTHORITATIVE,
          ),
        );
      return (a && !i && _("contacts_not_yet_loaded"), a && i);
    }
    function y(e) {
      var t = o("LSThreadBitOffset").clear(
          o("MAWMessageRequestUtil")
            .disabledThreadCapabilitiesForIncomingRequest,
          e.capabilities,
          e.capabilities2,
          e.capabilities3,
          e.capabilities4,
          e.capabilities5,
        ),
        n = o("LSThreadBitOffset").set(
          o("MAWMessageRequestUtil")
            .enabledThreadCapabilitiesForIncomingRequest,
          t[0],
          t[1],
          t[2],
          t[3],
          t[4],
        );
      return {
        capabilities: n[0],
        capabilities2: n[1],
        capabilities3: n[2],
        capabilities4: n[3],
        capabilities5: n[4],
      };
    }
    ((l.call = m), (l.callFromMainThread = p));
  },
  226,
);
