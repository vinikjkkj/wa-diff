__d(
  "WACreateHandleServerNotificationBranch",
  [
    "Promise",
    "WALogger",
    "WAResultOrError",
    "WASmaxAbPropsRefreshRPC",
    "WASmaxClientLogLogRPC",
    "WASmaxDecisionTreeUtils",
    "WASmaxParseUtils",
    "WATimeUtils",
    "WAUnknownStanzaError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var r,
        a,
        i =
          (r = t.abprops) == null ? void 0 : r.handleAbPropsRefreshNotification,
        l = (a = t.clientLog) == null ? void 0 : a.handleClientLogNotification;
      return function (r) {
        var t = o("WASmaxDecisionTreeUtils").firstChild(r);
        if (t.success === !1)
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseServerNotification notification without children",
                ])),
            ),
            (s || (s = n("Promise"))).resolve(
              o("WAUnknownStanzaError").unknownStanzaError,
            )
          );
        var a = t.value.tag;
        switch (a) {
          case "abprops":
            if (i != null) {
              var u = o("WASmaxAbPropsRefreshRPC").receiveRefreshRPC(r),
                c = u.makeRefreshResponseAck,
                d = u.parsedRequest;
              return i({
                serverTs: o("WATimeUtils").castToUnixTime(d.t),
                id: d.id,
                offline: d.offline,
                makeAck: c,
              }).then(o("WAResultOrError").makeResult);
            }
            break;
          case "log":
            if (l != null) {
              var m = o("WASmaxClientLogLogRPC").receiveLogRPC(r),
                p = m.makeLogResponseAck,
                _ = m.parsedRequest,
                f = t.value,
                g = o("WASmaxParseUtils").attrString(f, "bug_id"),
                h = g.success ? g.value : null,
                y = o("WASmaxParseUtils").attrString(f, "is_bug_reporter"),
                C = y.success && y.value === "true";
              return l({
                serverTs: o("WATimeUtils").castToUnixTime(_.t),
                id: _.id,
                offline: _.offline,
                makeAck: p,
                bugId: h != null ? h : null,
                isReporter: C,
              }).then(o("WAResultOrError").makeResult);
            }
            break;
        }
        return (s || (s = n("Promise"))).resolve(
          o("WAUnknownStanzaError").unknownStanzaError,
        );
      };
    }
    l.createHandleServerNotification = u;
  },
  98,
);
