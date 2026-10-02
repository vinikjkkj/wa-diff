__d(
  "WACreateHandleEncryptNotificationBranch",
  [
    "Promise",
    "WALogger",
    "WAResultOrError",
    "WASmaxDecisionTreeUtils",
    "WASmaxPreKeysNotificationContactIDChangedRPC",
    "WASmaxPreKeysNotificationDigestRPC",
    "WASmaxPreKeysNotificationLowCountRPC",
    "WATimeUtils",
    "WAUnknownStanzaError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var r,
        a = (r = t.prekey) != null ? r : {},
        i = a.handlePrekeyContactIDChangedNotification,
        l = a.handlePrekeyDigestNotification,
        u = a.handlePrekeyLowCountNotification;
      return function (r) {
        var t = o("WASmaxDecisionTreeUtils").firstChild(r);
        if (t.success === !1)
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseEncryptNotification notification without children",
                ])),
            ),
            (s || (s = n("Promise"))).resolve(
              o("WAUnknownStanzaError").unknownStanzaError,
            )
          );
        var a = t.value.tag;
        switch (a) {
          case "count":
            if (u != null) {
              var c = o(
                  "WASmaxPreKeysNotificationLowCountRPC",
                ).receiveNotificationLowCountRPC(r),
                d = c.makeNotificationLowCountResponseAck,
                m = c.parsedRequest,
                p = m.id,
                _ = m.offline,
                f = m.t,
                g = o("WATimeUtils").castToUnixTime(f);
              return u({
                makeAck: d,
                id: p,
                offline: _,
                serverTs: g,
                encryptType: a,
              }).then(o("WAResultOrError").makeResult);
            }
            break;
          case "digest":
            if (l != null) {
              var h = o(
                  "WASmaxPreKeysNotificationDigestRPC",
                ).receiveNotificationDigestRPC(r),
                y = h.makeNotificationDigestResponseAck,
                C = h.parsedRequest,
                b = C.id,
                v = C.offline,
                S = C.t,
                R = o("WATimeUtils").castToUnixTime(S);
              return l({
                makeAck: y,
                id: b,
                offline: v,
                serverTs: R,
                encryptType: a,
              }).then(o("WAResultOrError").makeResult);
            }
            break;
          case "identity":
            if (i != null) {
              var L = o(
                  "WASmaxPreKeysNotificationContactIDChangedRPC",
                ).receiveNotificationContactIDChangedRPC(r),
                E = L.makeNotificationContactIDChangedResponseAck,
                k = L.parsedRequest,
                I = k.id,
                T = k.offline,
                D = k.t,
                x = o("WATimeUtils").castToUnixTime(D);
              return i({
                makeAck: E,
                id: I,
                offline: T,
                serverTs: x,
                encryptType: a,
              }).then(o("WAResultOrError").makeResult);
            }
            break;
        }
        return (s || (s = n("Promise"))).resolve(
          o("WAUnknownStanzaError").unknownStanzaError,
        );
      };
    }
    l.createHandleEncryptNotification = u;
  },
  98,
);
