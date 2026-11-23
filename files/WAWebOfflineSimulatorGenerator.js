__d(
  "WAWebOfflineSimulatorGenerator",
  [
    "WAComms",
    "WALogger",
    "WAPromiseReduce",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebOfflineSimulatorInfoBulletin",
    "WAWebOfflineSimulatorMsg",
    "WAWebOfflineSimulatorNotification",
    "WAWebOfflineSimulatorReceipt",
    "WAWebOfflineSimulatorSuccess",
    "WAWebOfflineSimulatorTypes",
    "countWhere",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 26;
    async function d(t, n) {
      n === void 0 && (n = {});
      var a = [],
        i = 0;
      for (var l in t)
        if (Object.hasOwn(t, l)) {
          var s = t[l],
            u = void 0;
          try {
            u = await o("WAPromiseReduce").promiseReduce(
              s,
              async function (e, t) {
                var n = t.count || 1,
                  r,
                  a,
                  i,
                  l = t.from;
                switch (t.type) {
                  case o("WAWebOfflineSimulatorTypes").OfflineSimuilatorItemType
                    .Msg:
                    return ((r = await m(t)), e.concat(r));
                  case o("WAWebOfflineSimulatorTypes").OfflineSimuilatorItemType
                    .Reaction:
                    return ((r = await p(t)), e.concat(r));
                  case o("WAWebOfflineSimulatorTypes").OfflineSimuilatorItemType
                    .GroupNotification:
                    return (
                      (a = await o(
                        "WAWebOfflineSimulatorNotification",
                      ).createGroupChangeNotifications(l, n)),
                      _(a, e)
                    );
                  case o("WAWebOfflineSimulatorTypes").OfflineSimuilatorItemType
                    .GroupSubject:
                    return _(
                      o(
                        "WAWebOfflineSimulatorNotification",
                      ).createGroupSubjectNotifications(l, n),
                      e,
                    );
                  case o("WAWebOfflineSimulatorTypes").OfflineSimuilatorItemType
                    .IdentityNotification:
                    return (
                      (a = await o(
                        "WAWebOfflineSimulatorNotification",
                      ).createIdentityChangeNotification(n)),
                      _(a, e)
                    );
                  case o("WAWebOfflineSimulatorTypes").OfflineSimuilatorItemType
                    .Receipt:
                    return (
                      (i = o(
                        "WAWebOfflineSimulatorReceipt",
                      ).createReceiptStanza(n)),
                      _(i, e)
                    );
                  case o("WAWebOfflineSimulatorTypes").OfflineSimuilatorItemType
                    .CommunityLink:
                    return (
                      (a = await o(
                        "WAWebOfflineSimulatorNotification",
                      ).createCommunityLinkNotification(n)),
                      _(a, e)
                    );
                }
              },
              [],
            );
          } catch (t) {
            (o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "mockOfflineTraffic: error while generating messages: ",
                  "",
                ])),
              r("getErrorSafe")(t).stack,
            ),
              (u = []));
          }
          (n.includeThreadMetadata === !0 &&
            u.unshift(
              o("WAWebOfflineSimulatorInfoBulletin").createThreadMetatadaIB(u),
            ),
            u.unshift(
              o("WAWebOfflineSimulatorSuccess").createSuccessStanza(c),
              o("WAWebOfflineSimulatorInfoBulletin").createOfflinePreviewIb(
                r("countWhere")(u, function (e) {
                  return e.tag === "message";
                }),
                r("countWhere")(u, function (e) {
                  return e.tag === "receipt";
                }),
                r("countWhere")(u, function (e) {
                  return e.tag === "notification";
                }),
              ),
            ),
            (i += u.length),
            a.push(u));
        }
      return {
        stanzas: a,
        ibComplete: o(
          "WAWebOfflineSimulatorInfoBulletin",
        ).createOfflineCompleteIb(i),
      };
    }
    async function m(e) {
      for (var t = [], n = 0; n < e.count; n++) {
        var r = n + 1;
        t.push(o("WAWebOfflineSimulatorMsg").createChatTextMsgStanza(e, r));
      }
      var a = await Promise.all(t);
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "mockOfflineTraffic: generated ",
              " msgs for ",
              "",
            ])),
          a.length,
          String(e.from),
        ),
        a
      );
    }
    async function p(e) {
      for (var t = [], n = 0; n < e.count; n++) {
        var r = n + 1,
          a = await o(
            "WAWebOfflineSimulatorMsg",
          ).createChatTextMsgStanzaWithReactions(e, r, "\u2764\uFE0F");
        (t.push.apply(t, a),
          r % 100 === 0 &&
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[mockOfflineTrafficWithReactions] ",
                  " msgs, ",
                  " reactions for ",
                  "",
                ])),
              r,
              r,
              String(e.from),
            ));
      }
      return t;
    }
    function _(e, t) {
      for (
        var n = [], r = 0, o = 0, a = e.length, i = t.length;
        r < a && o < i;
      )
        Math.random() <= a / (a + i)
          ? (n.push(e[r]), r++)
          : (n.push(t[o]), o++);
      for (; r < a; r++) n.push(e[r]);
      for (; o < i; o++) n.push(t[o]);
      return n;
    }
    async function f(e, t, n) {
      var r = Array.isArray(t) ? { "chunk-1": t } : t,
        a = await d(r, n),
        i = 0;
      async function l(t) {
        var n, r;
        t === void 0 && (t = {});
        var i = a.stanzas,
          l = (n = t.limitMsgs) != null ? n : 1 / 0,
          s = (r = t.skipMsgs) != null ? r : 0;
        async function u(t) {
          for (var n = 0; n < t.length; n++) {
            if (l === 0) return;
            var r = t[n];
            (s === 0 &&
              (await e.handleStanza(r, o("WAComms").DEFAULT_SOCKET_ID, 0),
              r.tag === "message" && l !== 1 / 0 && l--),
              r.tag === "message" && s !== 0 && s--);
          }
        }
        await Promise.all(
          i.map(function (e) {
            return u(e);
          }),
        );
      }
      async function s() {
        (await l({ skipMsgs: i }),
          e.handleStanza(a.ibComplete, o("WAComms").DEFAULT_SOCKET_ID, 0),
          await o(
            "WAWebEventsWaitForOfflineDeliveryEnd",
          ).waitForOfflineDeliveryEnd());
      }
      return {
        complete: async function () {
          return s();
        },
        allExceptComplete: async function () {
          return l();
        },
        nMessages: async function (t) {
          (await l({ skipMsgs: i, limitMsgs: t }), (i += t));
        },
        receiveAll: async function () {
          return s();
        },
      };
    }
    l.createTrafficHandler = f;
  },
  98,
);
